"use client";

import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  Bounds,
  Grid,
  OrbitControls,
  Preload,
  Stars,
  useBounds,
} from "@react-three/drei";
import { r3f } from "~/helpers/global";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { mouse, floatingMenu } from "../state";

import { geometry } from "maath";

extend(geometry);

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <ambientLight intensity={0.5} />
      <pointLight position={[20, 30, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="blue" />
      {/* <PerspectiveCamera fov={40} position={[0, 0, 6]} /> */}
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}
