import { z } from "zod";

export const messageSchema = z.object({
  messageContent: z
    .string()
    .min(5, { message: "message have atleast 5 letters" })
    .max(300, { message: "message can't be more 300 letters" }),
});
