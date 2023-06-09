import { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data, isConnectable }) => {
  return (
    <>
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          justifyContent: "center",

          // padding: "5px",
          borderRadius: "5px",
          width: "150px",
        }}>
        <p style={{ fontSize: "12px" }}>Custom Node</p>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="c"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="e"
        isConnectable={isConnectable}
      />
    </>
  );
});
