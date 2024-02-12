import PageButton from "../../../components/auth components/button";
import HeadingText from "../../../components/auth components/heading_text";
import PageInput from "../../../components/auth components/input";
import PageInputsGroup from "../../../components/auth components/inputs_group";
import OrDivider from "../../../components/auth components/or_divider";
import AuthPage from "../../../components/auth components/auth_page";
import { useState } from "react";
import {Link} from "@nextui-org/react";

 
 export default function SignUpPage(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <AuthPage gap={4} twoSide >
            {/* Create Account Text */}
            <HeadingText title="Create account" >
                <span>
                    Already have an account? 
                </span>
                <Link href="login">
                    Login
                </Link>
            </HeadingText>

            {/* Text Field */}
            <form className="gap-7 flex-col flex">
                <PageInputsGroup>
                    <div className="flex-row flex gap-7">
                        <PageInput label="First name" />
                        <PageInput label="Last name"/>
                    </div>
                    <PageInput label="Email" />
                    <PageInput label="Password"/>
                </PageInputsGroup>
                <PageButton label="Create Account"/>
                <OrDivider/>
                <PageButton label="Continue with Google" outlined />
                
            </form>
            
            
        </AuthPage> 
    )
 }