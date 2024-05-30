import TextEditorToolbar from "./components/toolbar";
import { useState, useRef, useEffect, useMemo } from "react";
import { BaseEditor, Descendant, createEditor } from "slate";
import { ReactEditor, Slate, Editable, withReact } from "slate-react";
import TextEditor from "./components/text_editor";
import { EditorType, TextAlignType } from "./components/editor";



export type CustomElement = {
  type: "paragraph";
  align?: TextAlignType;
  children: CustomText[];
};
type CustomText = { text: string; bold?: true; strikeThrough?: true; italic?: true; underline?: true };

declare module "slate" {
  interface CustomTypes {
    Editor: EditorType;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

function HujraDocViewPage() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const editorRef = useRef(null);

  useEffect(() => {
    // Focus the editor when the component mounts
    ReactEditor.focus(editor);
  }, [editor]);
  
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <div className="relative py-8 px-5 justify-center flex-1 flex">
        <div className="flex-col flex relative w-full items-center">
          <TextEditorToolbar  />
          <TextEditor />
        </div>
      </div>
    </Slate>
  );
}

export default HujraDocViewPage;

const sampleContent = (
  <>
    <div className="text-right text-white text-[38.40px] font-bold font-['IBM Plex Sans Arabic'] leading-[67.47px]">
      السياسة في أوروبا: التحديات والفرص في عالم متغير
    </div>
    <div className="flex-col justify-start items-end gap-3 flex">
      <div className=" h-[51px] text-right text-white text-2xl font-bold font-['IBM Plex Sans Arabic'] leading-[42.17px]">
        مقدمة
      </div>
      <div className=" text-right text-white text-base font-normal font-['IBM Plex Sans Arabic'] leading-7">
        وروبا، القارة التي تتميز بتنوعها الثقافي واللغوي، تعد منطقة محورية في
        النظام السياسي العالمي. في ظل الاتحاد الأوروبي، تواجه أوروبا مجموعة
        متنوعة من التحديات السياسية والاقتصادية التي تتطلب تعاونًا مكثفًا بين
        الدول الأعضاء لتجاوزها.
      </div>
    </div>
    <div className="flex-col justify-start items-end gap-3 flex">
      <div className=" h-[51px] text-right text-white text-2xl font-bold font-['IBM Plex Sans Arabic'] leading-[42.17px]">
        الأمن والهجرة: قضايا على الطاولة
      </div>
      <div className=" text-right text-white text-base font-normal font-['IBM Plex Sans Arabic'] leading-7">
        أحد أبرز التحديات التي تواجه أوروبا هو إدارة الهجرة واللجوء. مع تزايد
        عدد الأشخاص الفارين من مناطق النزاعات والفقر، تجد الدول الأوروبية نفسها
        أمام ضغوط متزايدة لتطوير سياسات هجرة عادلة ومستدامة. هذه الأزمة لا تؤثر
        فقط على النواحي الاجتماعية والإنسانية ولكن أيضًا على الاستقرار السياسي
        والأمني للقارة.
      </div>
    </div>
    <div className="flex-col justify-start items-end gap-3 flex">
      <div className=" h-[51px] text-right text-white text-2xl font-bold font-['IBM Plex Sans Arabic'] leading-[42.17px]">
        البيئة والتغير المناخي: التزام أوروبي مستمر
      </div>
      <div className=" text-right text-white text-base font-normal font-['IBM Plex Sans Arabic'] leading-7">
        التغير المناخي يشكل تحديًا آخر يتطلب اهتمامًا جديًا. الاتحاد الأوروبي
        يعتبر رائدًا في مجال السياسات البيئية، مع التزامه بتقليل الانبعاثات
        وتعزيز الطاقة المتجددة. هذه الجهود ليست فقط ضرورية لحماية البيئة ولكنها
        أيضًا تعزز الاقتصاد من خلال خلق فرص عمل جديدة في قطاعات التكنولوجيا
        الخضراء.
      </div>
      <div className=" text-right text-white text-base font-normal font-['IBM Plex Sans Arabic'] leading-7">
        وروبا، القارة التي تتميز بتنوعها الثقافي واللغوي، تعد منطقة محورية في
        النظام السياسي العالمي. في ظل الاتحاد الأوروبي، تواجه أوروبا مجموعة
        متنوعة من التحديات السياسية والاقتصادية التي تتطلب تعاونًا مكثفًا بين
        الدول الأعضاء لتجاوزها.
      </div>
      <div className=" text-right text-white text-base font-normal font-['IBM Plex Sans Arabic'] leading-7">
        الاتحاد الأوروبي يلعب دورًا حاسمًا في السياسة العالمية، حيث يسعى إلى
        تعزيز التعاون الدولي ودعم الاستقرار العالمي. من خلال تعزيز العلاقات مع
        دول أخرى والمشاركة في المنظمات الدولية، يمكن لأوروبا أن تسهم في حل
        النزاعات العالمية وتعزيز السلام والازدهار.
        <br />
        خاتمة
      </div>
    </div>
  </>
);
