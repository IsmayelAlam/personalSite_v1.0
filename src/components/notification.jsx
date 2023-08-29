import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import logo from "../assets/logoLight.svg";

export default function Notification({ name, email, message }) {
  return (
    <Html>
      <Head />
      <Preview>{name} send a message</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={logo.src}
            width="50"
            height="50"
            alt="logo"
            style={logoStyle}
          />

          <Text style={title}>
            <strong style={sender}>{name}</strong> ({email}), send a message by
            you portfolio site contact from.
          </Text>

          <Section style={section}>{message}</Section>

          <a style={button} href={`mailto:${email}`}>
            Reply to {name}
          </a>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#293241",
  color: "#e0fbfc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  width: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logoStyle = {
  margin: "1em auto",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const sender = {
  fontSize: "24px",
  lineHeight: 1.25,
  textTransform: "capitalize",
};

const section = {
  padding: "24px",
  fontSize: "18px",
  border: "solid 2px #98c1d9",
  borderRadius: "5px",
  color: "#fff",
};

const button = {
  display: "block",
  width: "max-content",
  margin: "1em auto",
  fontSize: "16px",
  backgroundColor: "#ee6c4d",
  color: "#fff",
  lineHeight: 1,
  borderRadius: "0.5em",
  padding: "0.75em 1.5em",
  cursor: "pointer",
  textTransform: "capitalize",
  textDecoration: "none",
};
