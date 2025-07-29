import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  userName: string;
  verificationUrl: string;
  companyName?: string;
}

export const VerificationEmail = ({
  userName,
  verificationUrl,
  companyName = "NoteME",
}: VerificationEmailProps) => (
  <Html>
    <Head />
    <Preview>Verify your email address for {companyName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Text style={logo}>{companyName}</Text>
        </Section>
        <Section style={content}>
          <Text style={heading}>Hi {userName},</Text>
          <Text style={paragraph}>
            Thanks for signing up! We need to verify your email address to
            complete your account setup.
          </Text>
          <Text style={paragraph}>
            Click the button below to verify your email address:
          </Text>
          <Button style={button} href={verificationUrl}>
            Verify Email Address
          </Button>
          <Text style={paragraph}>
            If you didn't create an account with {companyName}, you can safely
            ignore this email.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const logoContainer = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const logo = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#1f2937",
  textAlign: "center" as const,
  margin: "0",
};

const content = {
  padding: "0 20px",
};

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#1f2937",
  marginBottom: "16px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#374151",
  marginBottom: "16px",
};

const button = {
  backgroundColor: "#3b82f6",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 24px",
  margin: "24px 0",
};

export default VerificationEmail;
