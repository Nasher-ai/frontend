import PageButton from "../../../components/auth components/button";
import HeadingText from "../../../components/auth components/heading_text";
import PageInput from "../../../components/auth components/input";
import AuthPage from "../../../components/auth components/auth_page";
import { useState } from "react";
import { Link } from "react-router-dom";
import sendResetLink from "../../../handlers/auth/reset_link";

export default function ForgotPasswordPage(){
    const [email, setEmail] = useState('')
    const [isEmailMissing, setIsEmailMissing] = useState(false)

    function handleSubmit(){
        if(email === '') return setIsEmailMissing(email === '')
        setIsEmailMissing(false)

        sendResetLink(email)
    }

    return(
        <AuthPage className="gap-[6.5rem]">
            <HeadingText title="Forgot Password">
                Enter the email you used to create your account so we can send you instructions on how to reset your password.
            </HeadingText>
            <form className="flex flex-col gap-7">
                <PageInput label="Email" onValueChange={value => setEmail(value)} isMissing={isEmailMissing}/>
                <PageButton label="Send" onPress={handleSubmit}/>
                <Link to='/auth/login' className="w-full">
                <PageButton label="Back to Login" href="login" outlined/></Link>
            </form>
        </AuthPage>
    )
}