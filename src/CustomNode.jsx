import { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        onConnect={(params) => console.log(params)}
        isConnectable={isConnectable}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          padding: "10px",
          borderRadius: "5px",
          width: "200px",
        }}>
        <button style={{ width: "50px", height: "20px" }}>add</button>
        <p>Custom Node</p>
        <button style={{ width: "50px", height: "20px" }}>add</button>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </>
  );
});
