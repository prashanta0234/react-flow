import { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="source"
        position={Position.Left}
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
      <div
        style={{
          border: "1px solid black",
          width: "130px",
          fontSize: "12px",
          padding: "10px",
          borderRadius: "3px",
          textAlign: "center",
        }}>
        Node 2
      </div>
      <Handle
        type="target"
        position={Position.Top}
        id="c"
        isConnectable={isConnectable}
      />
    </>
  );
});
