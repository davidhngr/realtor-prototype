import * as React from "react";
import { Auth } from "@aws-amplify/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);

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
        signIn: async (email, password, actions) => {
          try {
            await Auth.signIn(email, password).then((user) => {
              Auth.currentAuthenticatedUser().then((user) => {
                setCurrentUser(user.attributes.email);
                setAuth(true);
              });
              if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
                //Navigate to new setup new password page
              }
            });
          } catch (error) {
            setCurrentUser(null);
            console.log(error);
            if (error.code === "UserNotFoundException") {
              actions.setFieldError(
                "usernotfound",
                "This account does not exist"
              );
            }
            if (error.code === "UserNotConfirmedException") {
              //Navigate to confirm signup page
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
              actions.resetForm();
              //Navigate to confirm signup page w/ query email && password
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
        confirmSignUp: async (username, code) => {
          try {
            await Auth.confirmSignUp(username, code).then((success) => {
              //Navigate to previous page
            });
          } catch (error) {
            console.log(error);
          }
        },
        resendSignUp: async (email) => {
          try {
            await Auth.resendSignUp(email);
          } catch (error) {
            console.log(error);
          }
        },
        signOut: async () => {
          try {
            await Auth.signOut();
            setAuth(null);
            setCurrentUser(null);
          } catch (error) {
            console.log(error);
          }
        },
        forgotPassword: async (email, actions) => {
          try {
            await Auth.forgotPassword(email).then((success) => {
              console.log("Password Reset Successful");
              //Navigate to forgot password page w/ query email
            });
          } catch (error) {
            console.log(error.code);
            if (error.code === "UserNotFoundException") {
              actions.setFieldError(
                "usernotfound",
                "This account does not exist"
              );
            }
            if (error.code === "LimitExceededException") {
              actions.setFieldError(
                "resetlimit",
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
                //Navigate to password has been reset screen
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
