import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";

import { Amplify } from "aws-amplify";
import awsmobile from "../aws-exports";

Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}

export default MyApp;
