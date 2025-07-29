import * as React from "react";
import { render } from "@react-email/components";
import VerificationEmail from "./components/emails/verification-email";
const { Resend } = require("resend");

const resend = new Resend("re_WrgDYYsg_DDtsJr8z4FxYNa53uFCyDDrV");

async function testVerificationEmail() {
  try {
    // Test with your actual email component
    const emailHtml = render(
      React.createElement(VerificationEmail, {
        userName: "Test User",
        verificationUrl: "http://localhost:3000/verify-email?token=test123",
      })
    );

    const result = await resend.emails.send({
      from: "NoteMe <onboarding@resend.dev>",
      to: ["your-email@gmail.com"], // Replace with your actual email
      subject: "Test Verification Email",
      react: React.createElement(VerificationEmail, {
        userName: "Test User",
        verificationUrl: "http://localhost:3000/verify-email?token=test123",
      }),
    });

    console.log("Test verification email sent:", result);
  } catch (error) {
    console.error("Failed to send test verification email:", error);
  }
}

testVerificationEmail();
