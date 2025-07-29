import PasswordResetEmail from "@/components/emails/reset-email";
import VerificationEmail from "@/components/emails/verification-email";
import { db } from "@/db/drizzle";
import { schema } from "@/db/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      try {
        console.log("Sending verification email to:", user.email);
        console.log("Verification URL:", url);

        const result = await resend.emails.send({
          from: "NoteMe <onboarding@resend.dev>",
          to: [user.email],
          subject: "Verify your email address",
          react: VerificationEmail({
            userName: user.name,
            verificationUrl: url,
          }),
        });

        if (result.error) {
          console.error("Resend API Error:", result.error);
          // If it's a testing restriction error, provide helpful message
          if ((result.error as any).statusCode === 403) {
            throw new Error(
              `Email sending restricted: ${(result.error as any).error}`
            );
          }
          throw new Error(
            `Failed to send email: ${result.error.message || "Unknown error"}`
          );
        }

        console.log("Verification email sent successfully:", result.data);
      } catch (error) {
        console.error("Failed to send verification email:", error);
        throw error;
      }
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      try {
        const result = await resend.emails.send({
          from: "NoteMe <onboarding@resend.dev>",
          to: [user.email],
          subject: "Reset your password",
          react: PasswordResetEmail({
            userName: user.name,
            resetUrl: url,
            requestTime: new Date().toLocaleString(),
          }),
        });

        if (result.error) {
          console.error("Resend API Error:", result.error);
          if ((result.error as any).statusCode === 403) {
            throw new Error(
              `Email sending restricted: ${(result.error as any).error}`
            );
          }
          throw new Error(
            `Failed to send email: ${result.error.message || "Unknown error"}`
          );
        }

        console.log("Password reset email sent:", result.data);
      } catch (error) {
        console.error("Failed to send password reset email:", error);
        throw error;
      }
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [nextCookies()],
});
