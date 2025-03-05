import React, { useRef, useState, useEffect } from "react";
import { fragment, vertex } from "./shader";
import { useFrame } from "@react-three/fiber";
import { Text, useTexture } from "@react-three/drei";
import useWindowScroll from "./WindowScrollHook";
import * as THREE from "three";

export default function Model({
  texturePath,
  initialScale = 1.5,
  targetScale = 2,
  startScroll = 0.9,
  endScroll = 0.98,
  position = [0, 0, 0],
  textContent = ""
}) {
  const scrollOffset = useWindowScroll();
  const plane = useRef();
  const texture = useTexture(texturePath);

  const uniforms = useRef({
    uTexture: { value: texture },
    uScale: { value: initialScale }
  });

  const [animationStartTime, setAnimationStartTime] = useState(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [compressed, setCompressed] = useState(false);

  useEffect(() => {
    if (scrollOffset >= startScroll && scrollOffset < endScroll ) {
      setAnimationStartTime(Date.now());
      setIsExpanding(true);
    } else if (scrollOffset >= endScroll && !compressed) {
      setAnimationStartTime(Date.now());
      setIsExpanding(false);
    } else if (scrollOffset < startScroll && !compressed) {
      setAnimationStartTime(null);
      plane.current.material.uniforms.uScale.value = initialScale;
    }
  }, [scrollOffset, startScroll, endScroll, expanded, compressed]);

  useFrame(() => {
    if (plane.current && animationStartTime !== null) {
      const elapsedTime = (Date.now() - animationStartTime) / 1000; // in seconds
      const duration = 0.5; // in seconds
      const progress = THREE.MathUtils.clamp(elapsedTime / duration, 0, 1);

      if (isExpanding) {
        const currentScale = THREE.MathUtils.lerp(initialScale, targetScale, progress);
        plane.current.material.uniforms.uScale.value = currentScale;
        if (progress === 1) {
          setExpanded(true);
          setAnimationStartTime(null);
        }
      } else {
        const currentScale = THREE.MathUtils.lerp(targetScale, initialScale, progress);
        plane.current.material.uniforms.uScale.value = currentScale;
        if (progress === 1) {
          setCompressed(true);
          setAnimationStartTime(null);
        }
      }
    }
  });

  return (
    <group position={position}>
      <mesh ref={plane} position={[0, 0.25, 0]}>
        <planeGeometry args={[2, 2, 45, 45]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          wireframe={false}
          uniforms={uniforms.current}
          transparent={true} // Enable transparency
        />
      </mesh>
      <Text
        position={[0, -0.6, 0]}
        scale={[1 / 10, 1 / 10, 1 / 10]}
        color="white"
        anchorX="center"
        anchorY="top"
      >
        {textContent}
      </Text>
    </group>
  );
}