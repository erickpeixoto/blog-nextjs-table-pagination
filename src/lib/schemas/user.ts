import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().url(),
  created_at: z.string().transform((date) => new Date(date)),
});

export type User = z.infer<typeof UserSchema>;
