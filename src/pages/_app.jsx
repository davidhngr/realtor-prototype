import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";

import { AuthProvider } from "../stores/AuthContext";

import { Amplify } from "aws-amplify";
import awsmobile from "../aws-exports";

Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AuthProvider>
  );
}

export default MyApp;
