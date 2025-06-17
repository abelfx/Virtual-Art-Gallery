// statue.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export let loadedStatue = null; // Export the statue object

export const loadStatueModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../public/models/statue/girl_with_doves.glb",
    (gltf) => {
      const statue = gltf.scene;
      loadedStatue = statue; // Assign to the exported variable

      // console.log("STATUE", gltf);

      // Position the statue at the center of the floor
      statue.position.set(0, -2.9, 0);

      // Scale if necessary
      statue.scale.set(5.0, 5.0, 5.0);

      // Iterate through all the meshes in the statue and update their materials
      statue.traverse((child) => {
        if (child.isMesh) {
          if (child.material) {
            child.material.metalness = 0.0;
            child.material.roughness = 0.2;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        }
      });

      // Add the statue to the scene
      scene.add(statue);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );
};
