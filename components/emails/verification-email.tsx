import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface VerificationEmailProps {
    userName: string;
    verificationUrl: string;
    companyName?: string;
    }

const VerificationEmail = ({userName, verificationUrl, companyName}: VerificationEmailProps) => {
  

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Verify your email address to complete your account setup</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] p-[32px] max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 m-0 mb-[8px]">
                Verify Your Email Address
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Welcome to {companyName}! Please confirm your email to get started.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Hi there,
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Thanks for signing up with {companyName}! To complete your account setup and ensure the security of your account, please verify your email address by clicking the button below.
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                This verification link will expire in 24 hours for security purposes.
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                If the button above doesn't work, copy and paste this link into your browser:
              </Text>
              <Link
                href={verificationUrl}
                className="text-blue-600 text-[14px] break-all"
              >
                {verificationUrl}
              </Link>
            </Section>

            {/* Security Notice */}
            <Section className="bg-gray-50 p-[16px] rounded-[8px] mb-[32px]">
              <Text className="text-[14px] text-gray-700 m-0 mb-[8px] font-semibold">
                Security Notice:
              </Text>
              <Text className="text-[14px] text-gray-600 m-0">
                If you didn't create an account with {companyName}, please ignore this email. Your email address will not be added to our system.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-[8px]">
                This email was sent to {userName}
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-[8px]">
                {companyName}, 123 Business Street, Bengaluru, Karnataka 560001, India
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © 2025 {companyName}. All rights reserved. | 
                <Link href="#" className="text-gray-500 ml-[4px]">Unsubscribe</Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default VerificationEmail;