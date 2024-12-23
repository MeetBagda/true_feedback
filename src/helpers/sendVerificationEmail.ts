import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
("../../emails/verificationEmail");
import { ApiResponse } from "@/types/apiResponse";

export async function SendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "True Feedback | Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification email send successfully!" };
  } catch (emailError) {
    console.log("Error: sending verification email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
