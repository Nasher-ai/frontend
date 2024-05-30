"use client";
import { TextEditorIcons } from "../../../../../static/icons";
import Divider from "./toolbar components/divider";
import Section from "./toolbar components/section";
import ToolButton from "./toolbar components/button";
import CustomEditor from "./editor";
import { BaseEditor } from "slate";
import { useSlate } from "slate-react";



function TextEditorToolbar() {
  const editor = useSlate()

  return (
    <div className="fixed z-10 h-14 p-2 bg-neutral-950 rounded-3xl justify-center items-center gap-3 inline-flex">
      <Section>
        <ToolButton
          icon={TextEditorIcons.rightAlign}
          isActive={CustomEditor.isAlignmentActive(editor, "right")}
          onMouseDown={(e) => {
            e.preventDefault();
            CustomEditor.toggleAlignment(editor, "right");
          }}
        />
        <Divider />
        <ToolButton
          icon={TextEditorIcons.centerAlign}
          isActive={CustomEditor.isAlignmentActive(editor, "center")}
          onMouseDown={(e) => {
            e.preventDefault();
            CustomEditor.toggleAlignment(editor, "center");
          }}
        />
        <Divider />
        <ToolButton
          icon={TextEditorIcons.leftAlign}
          isActive={CustomEditor.isAlignmentActive(editor, "left")}
          onMouseDown={(e) => {
            e.preventDefault();
            CustomEditor.toggleAlignment(editor, "left");
          }}
        />
      </Section>
      <Section>
        <ToolButton
          icon={TextEditorIcons.bold}
          isActive={CustomEditor.isBoldMarkActive(editor)}
          onMouseDown={(e) => {
            e.preventDefault();
            CustomEditor.toggleBoldMark(editor);
          }}
        />
        <Divider />
        <ToolButton
          icon={TextEditorIcons.strikeThrough}
          isActive={CustomEditor.isStrikeThroughMarkActive(editor)}
          onMouseDown={(e) => {
            e.preventDefault();
            CustomEditor.toggleStrikeThroughMark(editor);
          }}
        />
        <Divider />
        <ToolButton
          icon={TextEditorIcons.italic}
          isActive={CustomEditor.isItalicMarkActive(editor)}
          onMouseDown={(e) => {
            e.preventDefault();
            CustomEditor.toggleItalicMark(editor);
          }}
        />
        <Divider />
        <ToolButton
          icon={TextEditorIcons.underline}
          isActive={CustomEditor.isUnderlineMarkActive(editor)}
          onMouseDown={(e) => {
            e.preventDefault();
            CustomEditor.toggleUnderlineMark(editor);
          }}
        />
      </Section>
      <Section>
        <ToolButton icon={TextEditorIcons.textColor} />
        <Divider />
        <div className="flex flex-row h-full items-center gap-3">
          <ToolButton className="aspect-square w-auto h-[70%] " icon={TextEditorIcons.add} />
          <ToolButton className="" icon={TextEditorIcons.minus} />
        </div>
        <Divider />
        <div className="mx-2">
          <p>Arial</p>
        </div>
      </Section>
    </div>
  );
}

export default TextEditorToolbar;
