import { useCallback } from "react";
import { Editable, ReactEditor, useSlate } from "slate-react";
import { Editor, Transforms, Element, BaseEditor } from "slate";
import CustomEditor from "./editor";

type Props = {};

function TextEditor({}: Props) {
  const editor = useSlate();

  const renderElement = useCallback((props: any) => {return <DefaultElement {...props} />;
  }, []);

  const renderLeaf = useCallback((props: any) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div>
      <Editable
        className="w-[800px] z-0 h-[1080px] mt-20 px-16 py-[37.50px] bg-neutral-900 rounded-[20px] border border-neutral-800 flex-col justify-start items-end gap-[30px] inline-flex focus:outline-none"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            // When "B" is pressed, bold the text in the selection.
            case "b": {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
              break;
            }
            // When "D" is pressed, strike through the text in the selection.
            case "d": {
              event.preventDefault();
              CustomEditor.toggleStrikeThroughMark(editor);
              break;
            }
            // When "I" is pressed, italic the text in the selection.
            case "i": {
              event.preventDefault();
              CustomEditor.toggleItalicMark(editor);
              break;
            }
            // When "U" is pressed, under line the text in the selection.
            case "u": {
              event.preventDefault();
              CustomEditor.toggleUnderlineMark(editor);
              break;
            }
          }
        }}
      />
    </div>
  );
}

export default TextEditor;

const DefaultElement = ({ attributes, children, element }: any) => {
  const className = element.align ? `text-${element.align}` : "text-start";

  return (
    <p {...attributes} className={className}>
      {children}
    </p>
  );
};

const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    console.log("underline");
    children = <u>{children}</u>;
  }

  if (leaf.strikeThrough) {
    console.log("strike through");
    children = <s>{children}</s>;
  }

  return <span {...attributes}>{children}</span>;
};
