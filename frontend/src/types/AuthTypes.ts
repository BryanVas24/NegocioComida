import { z } from "zod";

const authSchema = z.object({
  email: z.email().trim(),
  password: z.string().min(5),
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, "email" | "password">;
