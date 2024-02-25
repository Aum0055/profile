import { z } from "zod";

let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

export const createUserSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z.string().refine((value) => pattern.test(value), {
        message:
            "Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number",
    }),
    confirmPassword: z.string(),
    permission: z.string().min(1, { message: 'Please select a permission' }),
})

export type CreateUserType = z.infer<typeof createUserSchema>

export const signInSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z.string(),
})

export type SignInType = z.infer<typeof signInSchema>
