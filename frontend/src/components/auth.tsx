import { Link } from "react-router-dom";
import { SigninForm } from "./signinform";
import { SignupForm } from "./signupform";

export const Auth = ({type}: {type: "signup" | "signin"}) => {

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="w-96">
                <div className="">
                    <div className="flex justify-center text-4xl font-extrabold">
                        {(type === "signup") ? "Create an account" : "Welcome Back!"}
                    </div>
                    <div className="flex justify-center pt-2">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"} 
                        <Link className="underline underline-offset-1 pl-1" to={(type === "signin") ? '/signup' : '/signin'}>{(type === "signin") ? "SignUp" : "Login"}</Link>
                    </div>
                </div>
                <div className="mt-4">
                    {(type === "signin") ? <SigninForm /> : <SignupForm />}
                </div>
            </div>
        </div>
    </div>
}