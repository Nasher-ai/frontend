import { error } from "console";
import { EdgeTypes } from "reactflow";
import { BaseEditor, Editor, Transforms } from "slate";
import { ReactEditor } from "slate-react";
import { CustomElement } from "..";

const TEXT_ALIGN_TYPES = ["left", "center", "right"];

export type TextAlignType = typeof TEXT_ALIGN_TYPES[number];
export type EditorType = BaseEditor & ReactEditor;


const CustomEditor = {
  isBoldMarkActive(editor: EditorType) {
    const marks = Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isStrikeThroughMarkActive(editor: EditorType) {
    const marks = Editor.marks(editor);
    return marks ? marks.strikeThrough === true : false;
  },

  isItalicMarkActive(editor: EditorType) {
    const marks = Editor.marks(editor);
    return marks ? marks.italic === true : false;
  },

  isUnderlineMarkActive(editor: EditorType) {
    const marks = Editor.marks(editor);
    return marks ? marks.underline === true : false;
  },

  toggleAlignment(editor: Editor, alignment: TextAlignType) {
    const isActive = CustomEditor.isAlignmentActive(editor, alignment);
    Transforms.setNodes(
      editor,
      { align: alignment },
      {
        match: (n) =>
          Editor.isBlock(editor, n as CustomElement) as unknown as boolean,
      }
    );
  },

  isAlignmentActive(editor: Editor, alignment: TextAlignType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as CustomElement).align === alignment,
    });
    return !!match;
  },


  toggleBoldMark(editor: EditorType) {
    console.log("toggle");
    const isActive = CustomEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },

  toggleStrikeThroughMark(editor: EditorType) {
    const isActive = CustomEditor.isStrikeThroughMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "strikeThrough");
    } else {
      Editor.addMark(editor, "strikeThrough", true);
    }
  },

  toggleItalicMark(editor: EditorType) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "italic");
    } else {
      Editor.addMark(editor, "italic", true);
    }
  },

  toggleUnderlineMark(editor: EditorType) {
    const isActive = CustomEditor.isUnderlineMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "underline");
    } else {
      Editor.addMark(editor, "underline", true);
    }
  },
};

export default CustomEditor
