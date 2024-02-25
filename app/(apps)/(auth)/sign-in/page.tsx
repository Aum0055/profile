import { Metadata } from "next"
import { SignInForm } from "@/components/form/sign-in-form"

export const metadata: Metadata = {
  title: "sign-in",
  description: "Authentication forms built using the components.",
}
export default function Page() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="mx-auto flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px] relative">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Login an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <div className="z-10"><SignInForm /></div>
      </div>
    </div>
  )
}
