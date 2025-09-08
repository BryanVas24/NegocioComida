import { z } from "zod";

const authSchema = z.object({
  firstName: z.string().trim(),
  lastName: z.string().trim(),
  email: z.email().trim(),
  phone: z.string().includes("-"),
  password: z.string().min(5),
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, "email" | "password">;
export type UserRegisterForm = Pick<Auth, "firstName" |"lastName"| "email" | "phone" | "password"> & { repeatPassword: string};
