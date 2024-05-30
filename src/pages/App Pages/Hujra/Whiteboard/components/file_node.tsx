import User from "../../../../../models/user";
import { useNavigate } from "react-router-dom";


export enum FileType {
  Doc,
  Pdf,
}

type Props = {
  data: {
    title: string;
    fileType: FileType;
    user: User;
    fileId: string;
  };
};

function FileNode({ data }: Props) {
  const navigate = useNavigate();
  let color;
  let text;

  switch (data.fileType) {
    case FileType.Doc: {
      color = "from-sky-600 to-sky-950";
      text = "DOC";
      break;
    }
    case FileType.Pdf: {
      color = "from-pink-800 to-orange-950";
      text = "PDF";
      break;
    }
  }

  function handleClick() {
    console.log(data.fileId)
    navigate(`/hujra/file`);
  }

  return (
    <div className="w-[180px] h-[230px] p-2 bg-zinc-800  rounded-[16px] shadow-inner backdrop-blur-[30px] flex-col justify-start items-end gap-2.5 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="w-[30px] h-[30px] p-[1px] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[30px] shadow border border-white/opacity-20 backdrop-blur-[30px] flex-col justify-center items-center inline-flex">
          <img
            className="self-stretch grow shrink basis-0 rounded-[100px]"
            src={data.user.avatar}
          />
        </div>
        <div className="flex-col justify-start items-end gap-1 inline-flex">
          <div className="text-right text-white text-sm font-medium font-['IBM Plex Sans Arabic'] leading-normal">
            {data.title}
          </div>
          <div className="text-right text-white/opacity-50 text-[8px] font-medium font-['IBM Plex Sans Arabic'] leading-[14.06px]">
            التاريخ, اخر تعديل
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className={
          "self-stretch h-[200px] pb-6 bg-gradient-to-br rounded-[8px] shadow border border-stone-500 backdrop-blur-[30px] flex-col justify-center items-center flex " +
          color
        }
      >
        <div className="text-center text-white text-[54px] font-medium font-['IBM Plex Sans Arabic'] ">
          {text}
        </div>
      </button>
    </div>
  );
}

export default FileNode;
