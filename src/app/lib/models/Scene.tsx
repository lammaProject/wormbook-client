"use client";

import { Canvas } from "@react-three/fiber";
import { ReactElement } from "react";

const Scene = ({
  model,
  props,
}: {
  model: ReactElement;
  props: ReactElement;
}) => {
  return (
    <Canvas>
      {props}
      {model}
    </Canvas>
  );
};

export default Scene;
