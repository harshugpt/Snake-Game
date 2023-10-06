import { useEffect, useRef, useState } from "react";

const CanvasBoard = ({ height, width }) => {
  return (
    <canvas
      style={{ border: "3px solid black" }}
      height={height}
      width={width}
    />
  );
};

export default CanvasBoard;
