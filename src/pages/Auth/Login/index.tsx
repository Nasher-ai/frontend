import { Link } from "@nextui-org/react";
import { useState } from "react";
import HeadingText from "../../../components/auth components/heading_text";
import AuthPage from "../../../components/auth components/auth_page";
import PageInput from "../../../components/auth components/input";
import PageButton from "../../../components/auth components/button";
import OrDivider from "../../../components/auth components/or_divider";
import PageInputsGroup from "../../../components/auth components/inputs_group";
import loginUser from "../../../handlers/auth/login";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    function handleSubmit(){
        console.log(email)
        console.log(password)
        loginUser(email, password)
    }

    return(
        <AuthPage className="gap-[4rem]" twoSide>
            <HeadingText title="Welcome Back">
                Don’t have an account?
                <Link href="sign-up">
                    Sign Up
                </Link> 
            </HeadingText>
            <form onSubmit={handleSubmit}  className="flex flex-col gap-7">
                <PageInputsGroup>
                    <PageInput label="Email" onValueChange={value => setEmail(value)} isRequired type="email"/>
                    <PageInput label="Password" onValueChange={value => setPassword(value)} isRequired type="password"/>
                    <Link href="forgot-password" className="justify-end">
                        Forgot Password
                    </Link>
                </PageInputsGroup>
                <PageButton label="Login" onPress={handleSubmit} />
                <OrDivider/>
                <PageButton label="Continue with Google" outlined/>
            </form>
        </AuthPage>
    )
}