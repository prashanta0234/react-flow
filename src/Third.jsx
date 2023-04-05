import { Background, Controls, MarkerType, ReactFlow } from "reactflow";
import CustomNode from "./CustomNode";

const screenWidth = screen.width;
const screenHeight = screen.height;
import CircleNode from "./CircleNode";

const xPosition = Math.floor(screenWidth / 2) - 100;
const nodeType = {
  CustomNode,
  CircleNode,
};

const edges = [
  {
    id: "e1",
    source: "1",
    sourceHandle: "a",
    target: "2",
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
    sourceHandle: "b",
    target: "3",
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
    sourceHandle: "c",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e4",
    source: "1",
    target: "5",
    sourceHandle: "d",
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
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e7",
    source: "4",
    target: "8",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "e8",
    source: "5",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    target: "9",
  },
];
let nodes = [
  {
    id: "1",
    data: { label: "Node 1" },
    position: { x: xPosition, y: screenHeight / 2 - 80 },
    type: "CircleNode",
  },
  {
    id: "2",
    data: { label: "Node 2" },
    position: { x: xPosition, y: screenHeight / 2 - 200 },
    targetPosition: "bottom",
    sourcePosition: "top",
  },

  {
    id: "3",
    data: { label: "Node 3" },
    position: { x: xPosition + 250, y: screenHeight / 2 - 80 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "4",
    data: { label: "Node 4" },
    position: { x: xPosition, y: screenHeight / 2 + 30 },
  },
  {
    id: "5",
    data: { label: "Node 5" },
    position: { x: xPosition - 250, y: screenHeight / 2 - 80 },
    targetPosition: "right",
    sourcePosition: "left",
  },
  {
    id: "6",
    data: { label: "Node 6" },
    position: { x: xPosition, y: screenHeight / 2 - 300 },
    targetPosition: "bottom",
    sourcePosition: "top",
  },
  {
    id: "7",
    data: { label: "Node 7" },
    position: { x: xPosition + 500, y: screenHeight / 2 - 80 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "8",
    data: { label: "Node 8" },
    position: { x: xPosition, y: screenHeight / 2 + 120 },
  },
  {
    id: "9",
    data: { label: "Node 9" },
    position: { x: xPosition - 500, y: screenHeight / 2 - 80 },
    targetPosition: "right",
    sourcePosition: "left",
  },
];

const Third = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeType}
          nodesDraggable={true}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
};
export default Third;
