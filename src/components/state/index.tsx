import { atom } from "jotai";
import * as THREE from "three";

type Node = {
  id: string;
  position: THREE.Vector3;
  type: "note" | "image" | "embed" | "code";
  data?: any;
};

const floatingMenu = atom({ show: false, position: { x: 0, y: 0 } });
const mouse = atom({ position: new THREE.Vector3() });

export { floatingMenu, mouse };
