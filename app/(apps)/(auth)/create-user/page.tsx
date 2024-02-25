import { CreateUserForm } from "@/components/form/create-user-form";

export default function Page() {
  return (
    <div className="h-screen overflow-hidden">
    <div className="mx-auto flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px] relative">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <div className="z-10"><CreateUserForm /></div>
    </div>
  </div>

   )
}
