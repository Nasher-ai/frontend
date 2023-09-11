import { SUPPORTED_SOCIAL_MEDIA } from "./ui/icon-checkbox"

export default function Outputs({ responses }) {
    return (
        <div className="self-stretch h-auto rounded-[10px] flex-col justify-start items-end gap-[18px] flex">
            {responses.map((iconKey) => (
                <Response icon={SUPPORTED_SOCIAL_MEDIA[iconKey]['iconClass']}/>
            ))}
        </div>
    )
}