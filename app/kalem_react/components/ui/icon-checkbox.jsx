"use client";
import { Controller } from "react-hook-form";

const SUPPORTED_SOCIAL_MEDIA = {
  "facebook": {
    iconClass: "fa-brands fa-square-facebook",
    activeColor: "text-white"
  },
  "instagram": {
    iconClass: "fa-brands fa-instagram",
    activeColor: "text-white"
  },
  "twitter": {
    iconClass: "fa-brands fa-square-x-twitter",
    activeColor: "text-white"
  },
  "tiktok": {
    iconClass: "fa-brands fa-tiktok",
    activeColor: "text-white"
  },
  "linkedin": {
    iconClass: "fa-brands fa-linkedin",
    activeColor: "text-white"
  },
};

// const SUPPORTED_SOCIAL_MEDIA = [
//   {
//     name: "facebook",
//     iconClass: "fa-brands fa-square-facebook",
//     activeColor: "text-white"
//   },
//   {
//     name: "instagram",
//     iconClass: "fa-brands fa-instagram",
//     activeColor: "text-white"
//   },
//   {
//     name: "twitter",
//     iconClass: "fa-brands fa-square-x-twitter",
//     activeColor: "text-white"
//   },
//   {
//     name: "tiktok",
//     iconClass: "fa-brands fa-tiktok",
//     activeColor: "text-white"
//   },
//     {
//     name: "linkedin",
//     iconClass: "fa-brands fa-linkedin",
//     activeColor: "text-white"
//   },
// ];

function IconCheckbox({ icon, acticveColor, name, control}) {
    // const [isChecked, setIsChecked] = useState(false)

    // const checkHandler = () => {
    //     setIsChecked(!isChecked)
    //     console.log('toggle: ', isChecked)
    // }
    
    return(
      <Controller
            control={control}
            name={name}
            render={({
                field
                }) => (
                    <input 
                        className={
                          `appearance-none ${icon} fa-fw ${field.value? '': 'text-outer-label'}`}
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                    />
            )}
        /> 
                       
    )
}

export { IconCheckbox, SUPPORTED_SOCIAL_MEDIA }