import { Background, Controls, ReactFlow } from "reactflow";

const screenWidth = screen.width;
const screenHeight = screen.height;

const xPosition = Math.floor(screenWidth / 2) - 100;

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
    targetPosition: "right",
    sourcePosition: "left",
  },
  {
    id: "4",
    data: { label: "Node 4" },
    position: { x: xPosition + 400, y: 120 },
    targetPosition: "bottom",
    sourcePosition: "top",
  },
  {
    id: "5",
    data: { label: "Node 5" },
    position: { x: xPosition - 400 - 100, y: 220 },
    targetPosition: "bottom",
    sourcePosition: "top",
  },
  {
    id: "6",
    data: { label: "Node 6" },
    position: { x: xPosition - 400 + 100, y: 220 },
    targetPosition: "bottom",
    sourcePosition: "top",
  },
  {
    id: "7",
    data: { label: "Node 7" },
    position: { x: xPosition - 100, y: 220 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "8",
    data: { label: "Node 8" },
    position: { x: xPosition + 140, y: 250 },
    targetPosition: "top",
    sourcePosition: "bottom",
  },
];

const centerPoint = { x: xPosition, y: 220 };
const radius = 200;
const angleIncrement = (2 * Math.PI) / nodes.length;
const edges = [];

const Four = () => {
  nodes.forEach((node, i) => {
    const angle = i * angleIncrement;
    const x = centerPoint.x + radius * Math.cos(angle);
    const y = centerPoint.y + radius * Math.sin(angle);

    node.position = { x, y };

    if (i > 0) {
      edges.push({
        id: `e${i}`,
        source: nodes[i - 1].id,
        target: node.id,
      });
    }
  });

  // connect last node to first node
  edges.push({
    id: `e${nodes.length}`,
    source: nodes[nodes.length - 1].id,
    target: nodes[0].id,
  });

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
export default Four;
