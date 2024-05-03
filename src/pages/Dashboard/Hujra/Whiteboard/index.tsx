import React, { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import ToolBar from "./components/toolbar";


const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Hello" },
    type: "input",
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "World" },
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const proOptions = { hideAttribution: true };

  return (
    <div style={{ width: "100vw", height: "100vh" }} className="relative w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        proOptions={proOptions}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls position="bottom-right" className="bg-neutral-700" />
        <Background variant={BackgroundVariant.Dots} gap={20} size={4} color="#161616" />
      </ReactFlow>
      <div className="absolute left-[1.5rem] top-1/2 transform -translate-y-1/2">
        <ToolBar></ToolBar>
      </div>
    </div>
  );
}
