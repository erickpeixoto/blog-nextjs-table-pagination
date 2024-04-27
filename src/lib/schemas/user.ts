import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().optional(),
  name: z.string({
    message: "Name must be a string",
  }).min(3),
  email: z.string({
    message: "Email must be a string",
  }).email({
    message: "Email must be a valid email",
  }),
  avatar: z.string().url({
    message: "Avatar must be a valid URL",
  }).optional(),
  created_at: z.string().transform((date) => new Date(date)).optional(),
});

export const UserSearchSchema = z.object({
  param: z.string({
    message: "Name must be a string",
  }),
});

export type User = z.infer<typeof UserSchema>;
export type UserSearch = z.infer<typeof UserSearchSchema>;