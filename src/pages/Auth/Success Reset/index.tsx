import AuthPage from "../../../components/auth components/auth_page";
import PageButton from "../../../components/auth components/button";
import success from '../../../images/success_logo.svg';

export default function SuccessResetPage(){
    return(
        <AuthPage hideLogo>
            {/* <div className="flex flex-col items-center">
                <img className="w-[7.5rem] pb-5" src={success} alt=''/>
                <p className="text-lg font-semibold pb-7">Password reset successfully</p>
                <PageButton label="Login"/>
            </div> */}
            <div className="flex flex-col gap-5 items-center">
                <img className="w-[7.5rem]" src={success} alt=''/>
                <p className="text-lg font-semibold pb-2">Password reset successfully</p>
                <PageButton className="w-full" label="Login"/>
            </div>
        </AuthPage>
    )
}