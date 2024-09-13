import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function Cake() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0xffffff); // Set clear color to white
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 1;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Model loading
    const loader = new GLTFLoader();
    loader.load(
      "Cake.glb",
      (gltf) => {
        const cake = gltf.scene;
        if (cake) {
          cake.position.set(0, -1, 0);
          cake.scale.set(0.4, 0.4, 0.4);
          cake.rotation.set(Math.PI / 4, Math.PI / 4, 0); // Adjust initial rotation
          scene.add(cake);
        }
        console.log("Car added successfully.");
      },
      undefined,
      (error) => {
        console.error("Error loading the model:", error);
      },
    );

    // Animation
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      if (mountRef.current) {
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}

export default Cake;