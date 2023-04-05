import { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data, isConnectable }) => {
  console.log(Position);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "100px",
        background: "#fff",
        border: "2px solid #555",
        borderRadius: "50%",
      }}>
      <Handle
        type="source"
        position={Position.Top}
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="d"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="c"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="eft"
        id="f"
        isConnectable={isConnectable}
      />
    </div>
  );
});
