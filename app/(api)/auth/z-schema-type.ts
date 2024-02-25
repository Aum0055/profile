import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z.string(),
})

export type SignInType = z.infer<typeof signInSchema>

export const createUserSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(6, {
        message: "Password must be at least 2 characters.",
    }),
    user_metadata: z.object({ username: z.string(), division: z.string(), position: z.string() })
})
export type createUserTyep = z.infer<typeof createUserSchema>
