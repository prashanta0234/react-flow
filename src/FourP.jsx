import { Background, Controls, MarkerType, ReactFlow } from "reactflow";

const height = screen.height / 2 - 100;
const width = screen.width / 2 - 100;
console.log(height);
import WithExtraHandaler from "./WithExtraHandaler";

const nodeType = {
  WithExtraHandaler,
};

const nodes = [
  {
    id: "1",
    data: { label: "Node 1" },
    position: { x: width, y: height },
    targetPosition: "right",
    sourcePosition: "left",
  },
  {
    id: "2",
    data: { label: "Node 2" },
    position: { x: width + 200, y: height },
    targetPosition: "top",
    sourcePosition: "left",
    type: "WithExtraHandaler",
  },
  {
    id: "3",
    data: { label: "Node 3" },
    position: { x: width + 200, y: height - 150 },
    targetPosition: "top",
    sourcePosition: "bottom",
  },
  {
    id: "4",
    data: { label: "Node 4" },
    position: { x: width, y: height - 300 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "5",
    data: { label: "Node 5" },
    position: { x: width - 200, y: height - 150 },
    targetPosition: "bottom",
    sourcePosition: "top",
  },
  {
    id: "6",
    data: { label: "Node 6" },
    position: { x: width - 200, y: height },
    targetPosition: "bottom",
    sourcePosition: "top",
  },
  {
    id: "7",
    data: { label: "Node 7" },
    position: { x: width - 200, y: height + 150 },
    targetPosition: "bottom",
    sourcePosition: "top",
  },
  {
    id: "8",
    data: { label: "Node 8" },
    position: { x: width, y: height + 300 },
    targetPosition: "right",
    sourcePosition: "left",
  },
  {
    id: "9",
    data: { label: "Node 9" },
    position: { x: width + 200, y: height + 150 },
    targetPosition: "top",
    sourcePosition: "bottom",
  },
];

const edges = [
  {
    id: "ed1",
    source: "9",
    target: "8",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    animated: true,
  },
  {
    id: "ed2",
    source: "8",
    target: "7",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "ed3",
    source: "7",
    target: "6",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "ed4",
    source: "6",
    target: "5",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "ed5",
    source: "5",
    target: "4",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "ed6",
    source: "4",
    target: "3",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "ed7",
    source: "3",
    animated: true,
    target: "2",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "ed3",
    source: "2",
    animated: true,
    target: "1",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
  {
    id: "ed3",
    source: "2",
    animated: true,
    target: "9",
    sourceHandle: "b",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
];

const FourP = () => {
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
export default FourP;
