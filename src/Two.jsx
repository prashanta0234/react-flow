import { Background, Controls, MarkerType, ReactFlow } from "reactflow";

const screenWidth = screen.width;

const xPosition = Math.floor(screenWidth / 2) - 100;

const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e2",
    source: "1",
    target: "3",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e3",
    source: "1",
    target: "4",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e4",
    source: "2",
    target: "5",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e5",
    source: "2",
    target: "6",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e6",
    source: "3",
    target: "7",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e7",
    source: "3",
    target: "8",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e8",
    source: "4",
    target: "9",
    animated: true,
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e9",
    source: "4",
    target: "10",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    animated: true,
  },
];
let nodes = [
  {
    id: "1",
    data: { label: "Node 1" },
    position: { x: xPosition, y: 20 },
  },
  {
    id: "2",
    data: { label: "Node 2" },
    position: { x: xPosition - 400, y: 120 },
  },

  {
    id: "3",
    data: { label: "Node 3" },
    position: { x: xPosition, y: 120 },
  },
  {
    id: "4",
    data: { label: "Node 4" },
    position: { x: xPosition + 400, y: 120 },
  },
  {
    id: "5",
    data: { label: "Node 5" },
    position: { x: xPosition - 400 - 100, y: 220 },
  },
  {
    id: "6",
    data: { label: "Node 6" },
    position: { x: xPosition - 400 + 100, y: 220 },
  },
  {
    id: "7",
    data: { label: "Node 7" },
    position: { x: xPosition - 100, y: 220 },
  },
  {
    id: "8",
    data: { label: "Node 8" },
    position: { x: xPosition + 100, y: 220 },
  },
  {
    id: "9",
    data: { label: "Node 9" },
    position: { x: xPosition + 400 - 100, y: 220 },
  },
  {
    id: "10",
    data: { label: "Node 10" },
    position: { x: xPosition + 400 + 100, y: 220 },
  },
];

const Two = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeType}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
};
export default Two;
