import { useCallback, useEffect } from "react";
import { useState } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import CustomNode from "./CustomNode";
import EmptyNode from "./EmptyNode";
import position from "./Function";
const nodeType = {
  CustomNode,
  EmptyNode,
};
const initialEdges = [
  {
    id: "e1",
    source: "0",
    target: "1",
  },
  {
    id: "e2",
    source: "1",
    target: "1.1",
  },
];
let initialNodes = [
  {
    id: "0",
    data: { label: "Node 0" },
    position: { x: 500, y: 20 },
    type: "CustomNode",
  },
  {
    id: "1",
    data: { label: "Node 1" },
    position: { x: 500, y: 200 },
    type: "CustomNode",
  },

  {
    id: "1.1",
    data: { label: "Node 0" },
    position: { x: 500, y: 400 },
    type: "EmptyNode",
  },
];

const App = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [number, setNumber] = useState(2);
  const [source, setSource] = useState("");

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const addNew = useCallback((_, node) => {
    setSource(node);
    if (node.id.indexOf(".") !== -1) {
      const up = nodes.map((item) => {
        if (item.id == node.id) {
          // console.log("matched");
          return [
            {
              id: number.toString(),
              data: { label: "Node" + number },
              type: "CustomNode",
              position: {
                x: node.position.x,
                y: (number + 1) * 10 + node.position.y + 120,
              },
            },
            {
              id: number.toString() + ".1",
              data: { label: "Node" + number },
              type: "EmptyNode",
              position: {
                x: node.position.x,
                y: (number + 1) * 10 + node.position.y + 220,
              },
            },
          ];
        }
        return item;
      });
      const updatedObjects = [].concat(...up);
      setNodes(updatedObjects);

      const upa = edges.map((item) => {
        console.log(item);
        if (item.target === node.id) {
          console.log(node, "hi");
          return {
            id: number + "e1",
            source: item.source,
            target: number.toString(),
          };
        }
        return item;
      });
      console.log(upa);
      setEdges(upa);
    } else {
      let filN = nodes.filter((item) => item.id !== node.id + ".1");
      let filE = edges.filter((item) => item.target !== node.id + ".1");
      console.log(filN);
      setNodes(filN);
      setEdges(filE);
      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: number.toString(),
          data: { label: "Node" + number },
          type: "CustomNode",
          position: {
            x: node.position.x,
            y: (number + 1) * 10 + node.position.y + 120,
          },
        },
        {
          id: number.toString() + ".1",
          data: { label: "Node" + number },
          type: "EmptyNode",
          position: {
            x: node.position.x,
            y: (number + 1) * 10 + node.position.y + 220,
          },
        },
      ]);
    }
    setEdges((prev) => [
      ...prev,
      {
        id: number + "e1",
        source: node.id.toString(),
        target: number.toString(),
      },
      {
        id: number + "e1.1",
        source: number.toString(),
        target: number.toString() + ".1",
      },
    ]);
    setNumber(number + 1);
  });

  const node = position(source, nodes, edges);

  // console.log(node);

  return (
    <>
      <div style={{ height: "100vh" }}>
        {/* <button onClick={addNew}>Add new Node </button> */}
        <ReactFlow
          onNodeClick={addNew}
          // onClick={}
          nodes={nodes}
          onNodesChange={onNodesChange}
          // nodesDraggable={false}
          edges={edges}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeType}
          // onConnectStart={onConnectStart}
          style={{ width: "800px" }}
          onConnect={onConnect}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
};
export default App;
