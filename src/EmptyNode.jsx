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
          justifyContent: "center",
        }}>
        <p>empty</p>
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
