import PageButton from "../../../components/auth components/button";
import HeadingText from "../../../components/auth components/heading_text";
import PageInput from "../../../components/auth components/input";
import PageInputsGroup from "../../../components/auth components/inputs_group";
import AuthPage from "../../../components/auth components/auth_page";

export default function ResetPasswordPage(){
    return(
        <AuthPage>
            <HeadingText title="Reset Password">
                Choose a new password for your account
            </HeadingText>
            <div className="flex flex-col gap-7">
                <PageInputsGroup>
                    <PageInput label="Your new password"/>
                    <PageInput label="Confirm your new password"/>
                </PageInputsGroup>
                <PageButton label="Reset Password"/>
                <PageButton label="Back to Login" outlined/>
            </div>
        </AuthPage>
    )
}