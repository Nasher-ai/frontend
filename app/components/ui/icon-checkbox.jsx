"use client";
import { Controller } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faInstagram, faSquareFacebook, faSquareXTwitter, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const SUPPORTED_SOCIAL_MEDIA = {
  "facebook": {
    iconClass: faSquareFacebook,
    activeColor: "text-white"
  },
  "instagram": {
    iconClass: faInstagram,
    activeColor: "text-white"
  },
  "twitter": {
    iconClass: faSquareXTwitter,
    activeColor: "text-white"
  },
  "tiktok": {
    iconClass: faTiktok,
    activeColor: "text-white"
  },
  "linkedin": {
    iconClass: faLinkedin,
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
    
    console.log(icon);
    return(
      <Controller
            control={control}
            name={name}
            render={({
                field
                }) => (
                  <div>
                    <input 
                        className={
                          "appearance-none"}
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                    />
                    <FontAwesomeIcon icon={icon} className={`${field.value? '': 'text-outer-label'} fa-fw cursor-pointer`} 
                      onClick={() => field.onChange(!field.value)}/>
                  </div>
            )}
        /> 
                       
    )
}

export { IconCheckbox, SUPPORTED_SOCIAL_MEDIA }