import PageButton from "../../../components/auth components/button";
import HeadingText from "../../../components/auth components/heading_text";
import AuthPage from "../../../components/auth components/auth_page";

export default function CheckEmailPage(){
    return(
        <AuthPage>
            <HeadingText title="Check your Email">
                We have sent an email with password reset information to n****e@e***e.com.
            </HeadingText>
            <div className="flex flex-col gap-7">
                <PageButton label="Resend Email"/>
                <PageButton label="Back to Login" outlined/>
            </div>
        </AuthPage>
    )
}