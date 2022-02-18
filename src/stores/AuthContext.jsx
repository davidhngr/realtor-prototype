import * as React from "react";
import { Auth } from "@aws-amplify/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [authState, setAuthState] = React.useState("login");
  const [username, setUsername] = React.useState("");
  const [resetTime, setResetTime] = React.useState(0);

  React.useEffect(() => {
    checkUser();
  }, [auth]);

  const checkUser = async () => {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        setAuth(true);
        setCurrentUser(user.attributes.email);
      })
      .catch((error) => {
        setAuth(null);
        setCurrentUser(null);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        currentUser,
        authState,
        setAuthState,
        username,
        resetTime,
        setResetTime,
        signIn: async (email, password, actions) => {
          try {
            await Auth.signIn(email, password).then((user) => {
              Auth.currentAuthenticatedUser().then((user) => {
                setCurrentUser(user.attributes.email);
                setAuth(true);
                setAuthState("loggedin");
              });
              if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
                setUsername(email);
                setAuthState("signUp");
              }
            });
          } catch (error) {
            setCurrentUser(null);
            if (error.code === "UserNotConfirmedException") {
              setUsername(email);
              setAuthState("confirmSignUp");
            }
            if (error.code === "UserNotFoundException") {
              actions.setFieldError(
                "usernotfound",
                "This account does not exist"
              );
            }
            if (error.code === "NotAuthorizedException") {
              actions.setFieldError(
                "notauthorized",
                "This account does not have authorized access, please try again later or contact support"
              );
            }
          }
        },
        signUp: async (email, password, actions) => {
          try {
            await Auth.signUp(email, password).then((success) => {
              setAuthState("confirmSignUp");
              setUsername(email);
              actions.resetForm();
            });
          } catch (error) {
            if (error.code === "UsernameExistsException") {
              actions.setFieldError(
                "useralreadyexists",
                "This email is already in-use"
              );
            }
          }
        },
        confirmSignUp: async (username, code, actions) => {
          try {
            await Auth.confirmSignUp(username, code).then((success) =>
              setAuthState("login")
            );
          } catch (error) {
            if (error.code === "ExpiredCodeException") {
              actions.setFieldError(
                "codeexpired",
                "Code has expired, please request new code"
              );
            }
          }
        },
        resendSignUp: async (email, actions) => {
          try {
            await Auth.resendSignUp(email).then((success) => setResetTime(59));
          } catch (error) {
            if (error.code === "LimitExceededException") {
              setResetTime(null);
            }
          }
        },
        signOut: async () => {
          try {
            await Auth.signOut();
            setAuth(null);
            setCurrentUser(null);
            setAuthState("login");
          } catch (error) {}
        },
        forgotPassword: async (email, actions) => {
          try {
            await Auth.forgotPassword(email);
          } catch (error) {
            if (error.code === "UserNotFoundException") {
              actions.setFieldError(
                "usernotfound",
                "This account does not exist"
              );
            }
            if (error.code === "LimitExceededException") {
              actions.setFieldError(
                "limitexceeded",
                `You've exceeded the limited number of resets, please try again later or contact support`
              );
            }
          }
        },
        forgotPasswordSubmit: async (email, code, password, actions) => {
          try {
            await Auth.forgotPasswordSubmit(email, code, password).then(
              (success) => {
                console.log("Password reset successful");
                //Navigate to login page
              }
            );
          } catch (error) {
            console.log(error.code);
            if (error.code === "CodeMismatchException") {
              actions.setFieldError(
                "invalidcode",
                "The code provided is invalid"
              );
            }
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
