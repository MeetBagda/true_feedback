import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 letters")
  .max(20, "Username not greater than 20 letters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain any special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, "Password must be atleast 6 letters"),
});
