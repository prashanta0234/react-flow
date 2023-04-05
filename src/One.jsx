import { Background, Controls, MarkerType, ReactFlow } from "reactflow";

const screenWidth = screen.width;

const xPosition = Math.floor(screenWidth / 2) - 100;

const edges = [
  {
    id: "e1",
    source: "1",
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
    source: "2",
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
    source: "3",
    target: "4",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
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
    position: { x: xPosition, y: 120 },
  },

  {
    id: "3",
    data: { label: "Node 3" },
    position: { x: xPosition, y: 220 },
  },
  {
    id: "4",
    data: { label: "Node 4" },
    position: { x: xPosition, y: 320 },
  },
];

const One = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <ReactFlow nodes={nodes} edges={edges}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
};
export default One;
