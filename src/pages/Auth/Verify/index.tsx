import HeadingText from "../../../components/auth components/heading_text";
import AuthPage from "../../../components/auth components/auth_page";
import PageButton from "../../../components/auth components/button";

export default function VerifyPage(){
    return(
        <AuthPage gap={4}>
            <HeadingText title="Verify your Email" className="items-center">
                We have sent a verification email to n****e@e***e.com.
            </HeadingText>  
            <PageButton label="Resend Email"/>          
        </AuthPage>
    )
}