import { Link } from "@nextui-org/react";
import { useState } from "react";
import HeadingText from "../../../components/auth components/heading_text";
import AuthPage from "../../../components/auth components/auth_page";
import PageInput from "../../../components/auth components/input";
import PageButton from "../../../components/auth components/button";
import OrDivider from "../../../components/auth components/or_divider";
import PageInputsGroup from "../../../components/auth components/inputs_group";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return(
        <AuthPage className="gap-[4rem]" twoSide>
            <HeadingText title="Welcome Back">
                Don’t have an account?
                <Link href="sign-up">
                    Sign Up
                </Link> 
            </HeadingText>
            <div className="flex flex-col gap-7">
                <PageInputsGroup>
                    <PageInput label="Email" onValueChange={value => setEmail(value)} type="email"/>
                    <PageInput label="Password" onValueChange={value => setPassword(value)} type="password"/>
                    <Link href="forgot-password" className="justify-end">
                        Forgot Password
                    </Link>
                </PageInputsGroup>
                <PageButton label="Login"/>
                <OrDivider/>
                <PageButton label="Continue with Google" outlined />
            </div>
        </AuthPage>
    )
}