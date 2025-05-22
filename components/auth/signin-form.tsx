"use client";
import React from "react";
import { Label } from "@/components/ui/labelone";
import { Input } from "@/components/ui/inputone";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { SignInFlow } from "@/auth/types";

interface SignInFormProps {
    setState: (state: SignInFlow) => void;
}

export default function SigninForm
({setState}: SignInFormProps) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 p-4">
      <div className="shadow-lg mx-auto w-full max-w-md rounded-xl bg-white dark:bg-neutral-800 p-6 md:p-8 border border-neutral-200 dark:border-neutral-700">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
            Welcome Back!
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Sign in to access your account
          </p>
        </div>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email" 
              placeholder="diamine123@gmail.com" 
              type="email" 
              required
              className="bg-neutral-50 dark:bg-neutral-700 border-neutral-200 dark:border-neutral-600"
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-6">
            <Label htmlFor="password">Password</Label>
            <Input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password" 
              placeholder="••••••••" 
              type="password" 
              required
              className="bg-neutral-50 dark:bg-neutral-700 border-neutral-200 dark:border-neutral-600"
            />
            <div className="text-right mt-1">
              <a 
                href="#forgot-password" 
                className="text-xs text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Forgot password?
              </a>
            </div>
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 font-medium text-white shadow-md hover:shadow-lg transition-all"
            type="submit"
          >
            Sign In &rarr;
            <BottomGradient />
          </button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-300 dark:border-neutral-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <button
              className="flex items-center justify-center h-10 w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 px-4 font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-600 transition-colors"
              type="button"
            >
              <IconBrandGithub className="h-4 w-4 mr-2" />
              Continue with GitHub
            </button>
            <button
              className="flex items-center justify-center h-10 w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 px-4 font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-600 transition-colors"
              type="button"
            >
              <IconBrandGoogle className="h-4 w-4 mr-2" />
              Continue with Google
            </button>
          </div>

          <div 
          onClick={() => setState("signUp")}
          className="cursor-pointer mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
            Don't have an account?{" "}
            <a 
             
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};