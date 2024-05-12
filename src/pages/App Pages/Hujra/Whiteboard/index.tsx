import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  Node,
  Background,
  useNodesState,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import ToolBar from "./components/Toolbar/toolbar";
import FileNode, { FileType } from "./components/file_node";
import { exUser1, exUser2 } from "../../../../static/sample_data";

const nodeTypes = { file: FileNode };

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 650, y: 250 },
    data: { title: "السياسه في اوروبا", fileType: FileType.Doc, user: exUser1 },
    type: "file",
  },
  {
    id: "2",
    position: { x: 950, y: 150 },
    data: { title: "أهمية الرياضة", fileType: FileType.Pdf, user: exUser2 },
    type: "file",
  },
];

export default function HujraWhiteboardPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const proOptions = { hideAttribution: true };
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="relative w-full h-full"
    >
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        onNodesChange={onNodesChange}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={4}
          color="#161616"
        />
      </ReactFlow>
      <div className="absolute left-[1.5rem] top-1/2 transform -translate-y-1/2">
        <ToolBar></ToolBar>
      </div>
    </div>
  );
}
