import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const MyFooter = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400|Inconsolata:400");
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #e9efc0;
  bottom: 0;
  position: fixed;
  width: 100%;
  h4 {
    color: #4e944f;
    font-family: "Montserrat", sans-serif;
  }
  .contacts {
    display: flex;
    justify-content: space-between;
    a {
      color: #4e944f;
      margin: 0 1vw 0 1vw;
      text-decoration: none;
    }
  }
`;
export const Footer = () => {
  return (
    <MyFooter>
      <h4>Made by : ⚙️ Harsh ⚙️</h4>
      <div className="contacts">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/hArsh_1337"
        >
          <TwitterIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/harsh-anand-jha-1b8ab3193/"
        >
          {" "}
          <LinkedInIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:harshanand.jha@gmail.com"
        >
          {" "}
          <EmailIcon />
        </a>
      </div>
    </MyFooter>
  );
};
export default Footer;
