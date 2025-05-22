"use client";

import { SignInFlow } from "@/auth/types";
import { useState } from "react";
import SignupForm from "@/components/auth/signup-form"
import SigninForm from "@/components/auth/signin-form"

export const AuthScreen = () => {

    const [state, setState] = useState<SignInFlow>("signIn");
    return (
       <div>
         {state === "signIn" ? <SigninForm setState={setState}/> : <SignupForm  setState={setState}/>}
       </div>

    )
} 