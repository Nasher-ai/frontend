import PageButton from "../../../components/auth components/button";
import HeadingText from "../../../components/auth components/heading_text";
import PageInput from "../../../components/auth components/input";
import AuthPage from "../../../components/auth components/auth_page";

export default function ForgotPasswordPage(){
    return(
        <AuthPage className="gap-[6.5rem]">
            <HeadingText title="Forgot Password">
                Enter the email you used to create your account so we can send you instructions on how to reset your password.
            </HeadingText>
            <div className="flex flex-col gap-7">
                <PageInput label="Email"/>
                <PageButton label="Send"/>
                <PageButton label="Back to Login" outlined/>
            </div>
        </AuthPage>
    )
}