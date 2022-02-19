import styles from "./ContactTab.module.css";
import Image from "next/image";
import { Typography, Button, Box } from "@mui/material";

import MessageInput from "../MessageInput/MessageInput";

export default function ContactTab() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box className={styles.contactTabContainer}>
        <Box className={styles.contactTab}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                className={styles.avatar}
                height="250"
                width="250"
                layout="fixed"
                src="https://appphoto145240-dev.s3.ap-southeast-1.amazonaws.com/realtor-concept-illustration_114360-3040.webp"
              />
            </div>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Typography sx={{ fontSize: 14, padding: 1 }}>Message</Typography>
            <MessageInput minRows={5} maxRows={5} hiddenLabel={true} label="" />
            <Button className={styles.button} variant="contained" disableRipple>
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
      <Typography style={{ padding: 30, fontSize: 10, color: "#6b7780" }}>
        By pressing Send Message, you agree that real estate professionals may
        contact you via phone/text about your inquiry, which may involve the use
        of automated means. You are not required to consent as a condition of
        purchasing any property, goods or services. Message/data rates may
        apply. You also agree to our Terms of Use does not endorse any real
        estate professionals
      </Typography>
    </Box>
  );
}
