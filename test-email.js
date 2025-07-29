const { Resend } = require("resend");

// Test your Resend API key
const resend = new Resend("re_WrgDYYsg_DDtsJr8z4FxYNa53uFCyDDrV");

async function testEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: "NoteMe <onboarding@resend.dev>",
      to: ["delivered@resend.dev"], // This is Resend's test email
      subject: "Test Email",
      html: "<strong>This is a test email!</strong>",
    });

    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Success:", data);
    }
  } catch (error) {
    console.error("Failed to send test email:", error);
  }
}

testEmail();
