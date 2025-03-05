import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations, useScroll } from '@react-three/drei';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

export function Model2({ scrollOffset, ...props }) {

  const [rearScrollOffset, setRearScrollOffset] = useState(0);

  const group = useRef();
  useEffect(() => {
    const groupWorldPosition = new THREE.Vector3();
    group.current.getWorldPosition(groupWorldPosition);

    group.current.children.forEach((mesh) => {
      mesh.originalPosition = mesh.position.clone();
      mesh.directionVector = mesh.position.clone().sub(groupWorldPosition).normalize();
      mesh.targetPosition = mesh.position.clone().add(mesh.directionVector.clone().multiplyScalar(3));

      mesh.originalRotation = mesh.rotation.clone();
      mesh.targetRotation = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
    });
  }, []);

  useEffect(()=>{
    console.log("scroll offset is : ", scrollOffset);
    if(scrollOffset<=0.9){
      setRearScrollOffset(0);
    }else{
      setRearScrollOffset((scrollOffset-0.9)*10);
    }
  },[scrollOffset])

useFrame(() => {
 // const scrollProgress = Math.min(rearScrollOffset, 0.99999999999999);
  //console.log("scrollOffset ", scrollProgress);
  group.current.children.forEach((mesh) => {
    mesh.position.x = THREE.MathUtils.lerp(mesh.originalPosition.x, mesh.targetPosition.x, rearScrollOffset);
    mesh.position.y = THREE.MathUtils.lerp(mesh.originalPosition.y, mesh.targetPosition.y, rearScrollOffset);
    mesh.position.z = THREE.MathUtils.lerp(mesh.originalPosition.z, mesh.targetPosition.z, rearScrollOffset);
    mesh.rotation.x = THREE.MathUtils.lerp(mesh.originalRotation.x, mesh.targetRotation.x, rearScrollOffset);
    mesh.rotation.y = THREE.MathUtils.lerp(mesh.originalRotation.y, mesh.targetRotation.y, rearScrollOffset);
    mesh.rotation.z = THREE.MathUtils.lerp(mesh.originalRotation.z, mesh.targetRotation.z, rearScrollOffset);
  });
});

const { nodes, materials } = useGLTF('/models/globe2.glb');
return (
  <group  {...props} dispose={null}>
    <group name="Scene" ref={group}>
      <group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
        <group name="root">
          <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Clouds_1" rotation={[0.384, 0.424, 0.042]} />
            <group name="Planet_2" rotation={[0.384, 0.424, 0.042]} />
          </group>
        </group>
      </group>

      <group name="Object_4_cell106" position={[0.638, 0.571, 0.144]} />
      <group name="Object_4_cell141" position={[-0.381, -0.044, -0.739]} />
      <group name="Object_4_cell161" position={[0.66, -0.423, 0.366]} />
      <group name="Object_4_cell187" position={[0.783, -0.094, -0.335]} />
      <group name="Object_4_cell209" position={[-0.349, -0.025, -0.753]} />
      <group name="Object_4_cell210" position={[-0.333, -0.013, -0.761]} />
      <mesh name="Object_4_cell" geometry={nodes.Object_4_cell.geometry} material={materials.Clouds} position={[-0.563, 0.203, -0.578]} />
      <mesh name="Object_4_cell001" geometry={nodes.Object_4_cell001.geometry} material={materials.Clouds} position={[0.381, -0.004, 0.742]} />
      <mesh name="Object_4_cell002" geometry={nodes.Object_4_cell002.geometry} material={materials.Clouds} position={[0.268, -0.176, -0.773]} />
      <mesh name="Object_4_cell003" geometry={nodes.Object_4_cell003.geometry} material={materials.Clouds} position={[0.253, 0.809, 0.056]} />
      <mesh name="Object_4_cell004" geometry={nodes.Object_4_cell004.geometry} material={materials.Clouds} position={[-0.193, -0.43, 0.702]} />
      <mesh name="Object_4_cell005" geometry={nodes.Object_4_cell005.geometry} material={materials.Clouds} position={[0.166, -0.825, -0.026]} />
      <mesh name="Object_4_cell006" geometry={nodes.Object_4_cell006.geometry} material={materials.Clouds} position={[-0.217, -0.804, -0.039]} />
      <mesh name="Object_4_cell007" geometry={nodes.Object_4_cell007.geometry} material={materials.Clouds} position={[0.48, -0.099, 0.69]} />
      <mesh name="Object_4_cell008" geometry={nodes.Object_4_cell008.geometry} material={materials.Clouds} position={[0.07, -0.551, -0.621]} />
      <mesh name="Object_4_cell009" geometry={nodes.Object_4_cell009.geometry} material={materials.Clouds} position={[0.7, -0.242, -0.38]} />
      <mesh name="Object_4_cell010" geometry={nodes.Object_4_cell010.geometry} material={materials.Clouds} position={[0.359, 0.76, 0.123]} />
      <mesh name="Object_4_cell011" geometry={nodes.Object_4_cell011.geometry} material={materials.Clouds} position={[-0.84, 0.067, 0.091]} />
      <mesh name="Object_4_cell012" geometry={nodes.Object_4_cell012.geometry} material={materials.Clouds} position={[-0.042, -0.831, 0.111]} />
      <mesh name="Object_4_cell013" geometry={nodes.Object_4_cell013.geometry} material={materials.Clouds} position={[-0.408, -0.738, 0.113]} />
      <mesh name="Object_4_cell014" geometry={nodes.Object_4_cell014.geometry} material={materials.Clouds} position={[-0.25, -0.788, 0.095]} />
      <mesh name="Object_4_cell015" geometry={nodes.Object_4_cell015.geometry} material={materials.Clouds} position={[0.292, 0.779, 0.202]} />
      <mesh name="Object_4_cell016" geometry={nodes.Object_4_cell016.geometry} material={materials.Clouds} position={[0.682, 0.177, 0.449]} />
      <mesh name="Object_4_cell017" geometry={nodes.Object_4_cell017.geometry} material={materials.Clouds} position={[0.46, -0.359, -0.588]} />
      <mesh name="Object_4_cell018" geometry={nodes.Object_4_cell018.geometry} material={materials.Clouds} position={[-0.381, -0.564, 0.487]} />
      <mesh name="Object_4_cell019" geometry={nodes.Object_4_cell019.geometry} material={materials.Clouds} position={[-0.697, -0.347, 0.312]} />
      <mesh name="Object_4_cell020" geometry={nodes.Object_4_cell020.geometry} material={materials.Clouds} position={[0.85, -0.04, -0.121]} />
      <mesh name="Object_4_cell021" geometry={nodes.Object_4_cell021.geometry} material={materials.Clouds} position={[-0.114, 0.287, -0.773]} />
      <mesh name="Object_4_cell022" geometry={nodes.Object_4_cell022.geometry} material={materials.Clouds} position={[0.037, 0.65, -0.531]} />
      <mesh name="Object_4_cell023" geometry={nodes.Object_4_cell023.geometry} material={materials.Clouds} position={[0.206, -0.717, 0.408]} />
      <mesh name="Object_4_cell024" geometry={nodes.Object_4_cell024.geometry} material={materials.Clouds} position={[-0.134, 0.676, -0.485]} />
      <mesh name="Object_4_cell025" geometry={nodes.Object_4_cell025.geometry} material={materials.Clouds} position={[0.532, 0.444, -0.486]} />
      <mesh name="Object_4_cell026" geometry={nodes.Object_4_cell026.geometry} material={materials.Clouds} position={[-0.453, -0.692, 0.072]} />
      <mesh name="Object_4_cell027" geometry={nodes.Object_4_cell027.geometry} material={materials.Clouds} position={[-0.279, -0.63, -0.483]} />
      <mesh name="Object_4_cell028" geometry={nodes.Object_4_cell028.geometry} material={materials.Clouds} position={[0.038, 0.512, 0.663]} />
      <mesh name="Object_4_cell029" geometry={nodes.Object_4_cell029.geometry} material={materials.Clouds} position={[0.213, -0.093, -0.814]} />
      <mesh name="Object_4_cell030" geometry={nodes.Object_4_cell030.geometry} material={materials.Clouds} position={[0.476, 0.104, -0.693]} />
      <mesh name="Object_4_cell031" geometry={nodes.Object_4_cell031.geometry} material={materials.Clouds} position={[-0.785, -0.093, 0.303]} />
      <mesh name="Object_4_cell032" geometry={nodes.Object_4_cell032.geometry} material={materials.Clouds} position={[-0.011, -0.484, 0.682]} />
      <mesh name="Object_4_cell033" geometry={nodes.Object_4_cell033.geometry} material={materials.Clouds} position={[-0.747, -0.387, 0.061]} />
      <mesh name="Object_4_cell034" geometry={nodes.Object_4_cell034.geometry} material={materials.Clouds} position={[-0.843, -0.059, 0.045]} />
      <mesh name="Object_4_cell035" geometry={nodes.Object_4_cell035.geometry} material={materials.Clouds} position={[-0.35, 0.707, 0.32]} />
      <mesh name="Object_4_cell036" geometry={nodes.Object_4_cell036.geometry} material={materials.Clouds} position={[-0.156, -0.741, -0.356]} />
      <mesh name="Object_4_cell037" geometry={nodes.Object_4_cell037.geometry} material={materials.Clouds} position={[0.497, 0.668, -0.107]} />
      <mesh name="Object_4_cell038" geometry={nodes.Object_4_cell038.geometry} material={materials.Clouds} position={[0.532, -0.076, -0.646]} />
      <mesh name="Object_4_cell039" geometry={nodes.Object_4_cell039.geometry} material={materials.Clouds} position={[0.191, 0.035, -0.834]} />
      <mesh name="Object_4_cell040" geometry={nodes.Object_4_cell040.geometry} material={materials.Clouds} position={[-0.592, -0.132, -0.575]} />
      <mesh name="Object_4_cell041" geometry={nodes.Object_4_cell041.geometry} material={materials.Clouds} position={[0.239, 0.585, -0.594]} />
      <mesh name="Object_4_cell042" geometry={nodes.Object_4_cell042.geometry} material={materials.Clouds} position={[0.557, -0.005, 0.629]} />
      <mesh name="Object_4_cell043" geometry={nodes.Object_4_cell043.geometry} material={materials.Clouds} position={[0.681, -0.057, 0.493]} />
      <mesh name="Object_4_cell044" geometry={nodes.Object_4_cell044.geometry} material={materials.Clouds} position={[-0.553, -0.627, 0.06]} />
      <mesh name="Object_4_cell045" geometry={nodes.Object_4_cell045.geometry} material={materials.Clouds} position={[-0.85, 0.043, -0.064]} />
      <mesh name="Object_4_cell046" geometry={nodes.Object_4_cell046.geometry} material={materials.Clouds} position={[0.492, -0.185, 0.653]} />
      <mesh name="Object_4_cell047" geometry={nodes.Object_4_cell047.geometry} material={materials.Clouds} position={[-0.807, -0.211, -0.143]} />
      <mesh name="Object_4_cell048" geometry={nodes.Object_4_cell048.geometry} material={materials.Clouds} position={[0.115, 0.481, -0.682]} />
      <mesh name="Object_4_cell049" geometry={nodes.Object_4_cell049.geometry} material={materials.Clouds} position={[0.42, 0.47, 0.558]} />
      <mesh name="Object_4_cell050" geometry={nodes.Object_4_cell050.geometry} material={materials.Clouds} position={[-0.116, 0.415, -0.722]} />
      <mesh name="Object_4_cell051" geometry={nodes.Object_4_cell051.geometry} material={materials.Clouds} position={[0.589, -0.576, 0.175]} />
      <mesh name="Object_4_cell052" geometry={nodes.Object_4_cell052.geometry} material={materials.Clouds} position={[0.65, 0.43, -0.329]} />
      <mesh name="Object_4_cell053" geometry={nodes.Object_4_cell053.geometry} material={materials.Clouds} position={[-0.142, -0.134, 0.815]} />
      <mesh name="Object_4_cell054" geometry={nodes.Object_4_cell054.geometry} material={materials.Clouds} position={[-0.568, 0.105, 0.613]} />
      <mesh name="Object_4_cell055" geometry={nodes.Object_4_cell055.geometry} material={materials.Clouds} position={[0.163, -0.354, 0.749]} />
      <mesh name="Object_4_cell056" geometry={nodes.Object_4_cell056.geometry} material={materials.Clouds} position={[0.597, 0.197, -0.564]} />
      <mesh name="Object_4_cell057" geometry={nodes.Object_4_cell057.geometry} material={materials.Clouds} position={[0.704, -0.069, -0.454]} />
      <mesh name="Object_4_cell058" geometry={nodes.Object_4_cell058.geometry} material={materials.Clouds} position={[0.018, -0.33, 0.776]} />
      <mesh name="Object_4_cell059" geometry={nodes.Object_4_cell059.geometry} material={materials.Clouds} position={[0.036, 0.761, 0.341]} />
      <mesh name="Object_4_cell060" geometry={nodes.Object_4_cell060.geometry} material={materials.Clouds} position={[-0.117, 0.741, -0.391]} />
      <mesh name="Object_4_cell061" geometry={nodes.Object_4_cell061.geometry} material={materials.Clouds} position={[0.302, -0.367, 0.705]} />
      <mesh name="Object_4_cell062" geometry={nodes.Object_4_cell062.geometry} material={materials.Clouds} position={[0.034, -0.809, 0.221]} />
      <mesh name="Object_4_cell063" geometry={nodes.Object_4_cell063.geometry} material={materials.Clouds} position={[-0.696, -0.405, -0.216]} />
      <mesh name="Object_4_cell064" geometry={nodes.Object_4_cell064.geometry} material={materials.Clouds} position={[-0.647, 0.335, 0.399]} />
      <mesh name="Object_4_cell065" geometry={nodes.Object_4_cell065.geometry} material={materials.Clouds} position={[-0.616, -0.261, 0.516]} />
      <mesh name="Object_4_cell066" geometry={nodes.Object_4_cell066.geometry} material={materials.Clouds} position={[0.346, 0.668, -0.377]} />
      <mesh name="Object_4_cell067" geometry={nodes.Object_4_cell067.geometry} material={materials.Clouds} position={[-0.001, 0.855, -0.068]} />
      <mesh name="Object_4_cell068" geometry={nodes.Object_4_cell068.geometry} material={materials.Clouds} position={[-0.347, 0.114, 0.758]} />
      <mesh name="Object_4_cell069" geometry={nodes.Object_4_cell069.geometry} material={materials.Clouds} position={[0.07, -0.243, -0.803]} />
      <mesh name="Object_4_cell070" geometry={nodes.Object_4_cell070.geometry} material={materials.Clouds} position={[0.361, -0.049, -0.764]} />
      <mesh name="Object_4_cell071" geometry={nodes.Object_4_cell071.geometry} material={materials.Clouds} position={[-0.437, 0.722, -0.033]} />
      <mesh name="Object_4_cell072" geometry={nodes.Object_4_cell072.geometry} material={materials.Clouds} position={[0.771, -0.019, -0.354]} />
      <mesh name="Object_4_cell073" geometry={nodes.Object_4_cell073.geometry} material={materials.Clouds} position={[0.336, 0.778, 0.014]} />
      <mesh name="Object_4_cell074" geometry={nodes.Object_4_cell074.geometry} material={materials.Clouds} position={[0.326, -0.776, 0.053]} />
      <mesh name="Object_4_cell075" geometry={nodes.Object_4_cell075.geometry} material={materials.Clouds} position={[-0.094, 0.81, -0.268]} />
      <mesh name="Object_4_cell076" geometry={nodes.Object_4_cell076.geometry} material={materials.Clouds} position={[0.809, -0.213, -0.217]} />
      <mesh name="Object_4_cell077" geometry={nodes.Object_4_cell077.geometry} material={materials.Clouds} position={[-0.002, -0.713, 0.449]} />
      <mesh name="Object_4_cell078" geometry={nodes.Object_4_cell078.geometry} material={materials.Clouds} position={[0.79, -0.28, -0.044]} />
      <mesh name="Object_4_cell079" geometry={nodes.Object_4_cell079.geometry} material={materials.Clouds} position={[-0.654, -0.28, -0.427]} />
      <mesh name="Object_4_cell080" geometry={nodes.Object_4_cell080.geometry} material={materials.Clouds} position={[-0.296, 0.725, -0.312]} />
      <mesh name="Object_4_cell081" geometry={nodes.Object_4_cell081.geometry} material={materials.Clouds} position={[0.102, 0.19, 0.815]} />
      <mesh name="Object_4_cell082" geometry={nodes.Object_4_cell082.geometry} material={materials.Clouds} position={[-0.691, 0.409, 0.281]} />
      <mesh name="Object_4_cell083" geometry={nodes.Object_4_cell083.geometry} material={materials.Clouds} position={[-0.411, 0.027, 0.735]} />
      <mesh name="Object_4_cell084" geometry={nodes.Object_4_cell084.geometry} material={materials.Clouds} position={[0.645, -0.535, -0.076]} />
      <mesh name="Object_4_cell085" geometry={nodes.Object_4_cell085.geometry} material={materials.Clouds} position={[-0.295, 0.403, -0.676]} />
      <mesh name="Object_4_cell086" geometry={nodes.Object_4_cell086.geometry} material={materials.Clouds} position={[0.817, 0.162, -0.044]} />
      <mesh name="Object_4_cell087" geometry={nodes.Object_4_cell087.geometry} material={materials.Clouds} position={[0.3, -0.766, 0.174]} />
      <mesh name="Object_4_cell088" geometry={nodes.Object_4_cell088.geometry} material={materials.Clouds} position={[-0.585, 0.598, -0.109]} />
      <mesh name="Object_4_cell089" geometry={nodes.Object_4_cell089.geometry} material={materials.Clouds} position={[0.235, 0.155, -0.789]} />
      <mesh name="Object_4_cell090" geometry={nodes.Object_4_cell090.geometry} material={materials.Clouds} position={[0.493, -0.514, 0.453]} />
      <mesh name="Object_4_cell091" geometry={nodes.Object_4_cell091.geometry} material={materials.Clouds} position={[0.734, 0.406, -0.015]} />
      <mesh name="Object_4_cell092" geometry={nodes.Object_4_cell092.geometry} material={materials.Clouds} position={[-0.216, -0.738, 0.322]} />
      <mesh name="Object_4_cell093" geometry={nodes.Object_4_cell093.geometry} material={materials.Clouds} position={[0.237, -0.543, 0.595]} />
      <mesh name="Object_4_cell094" geometry={nodes.Object_4_cell094.geometry} material={materials.Clouds} position={[-0.566, 0.621, 0.012]} />
      <mesh name="Object_4_cell095" geometry={nodes.Object_4_cell095.geometry} material={materials.Clouds} position={[-0.242, -0.216, -0.773]} />
      <mesh name="Object_4_cell096" geometry={nodes.Object_4_cell096.geometry} material={materials.Clouds} position={[0.509, -0.593, -0.326]} />
      <mesh name="Object_4_cell097" geometry={nodes.Object_4_cell097.geometry} material={materials.Clouds} position={[0.329, 0.159, 0.758]} />
      <mesh name="Object_4_cell098" geometry={nodes.Object_4_cell098.geometry} material={materials.Clouds} position={[-0.703, -0.226, -0.407]} />
      <mesh name="Object_4_cell099" geometry={nodes.Object_4_cell099.geometry} material={materials.Clouds} position={[-0.408, 0.66, 0.355]} />
      <mesh name="Object_4_cell100" geometry={nodes.Object_4_cell100.geometry} material={materials.Clouds} position={[-0.706, 0.2, -0.418]} />
      <mesh name="Object_4_cell101" geometry={nodes.Object_4_cell101.geometry} material={materials.Clouds} position={[-0.529, -0.043, -0.648]} />
      <mesh name="Object_4_cell102" geometry={nodes.Object_4_cell102.geometry} material={materials.Clouds} position={[0.478, 0.121, 0.675]} />
      <mesh name="Object_4_cell103" geometry={nodes.Object_4_cell103.geometry} material={materials.Clouds} position={[0.159, 0.815, -0.193]} />
      <mesh name="Object_4_cell104" geometry={nodes.Object_4_cell104.geometry} material={materials.Clouds} position={[-0.168, -0.277, 0.767]} />
      <mesh name="Object_4_cell105" geometry={nodes.Object_4_cell105.geometry} material={materials.Clouds} position={[0.509, 0.651, 0.179]} />
      <mesh name="Object_4_cell107" geometry={nodes.Object_4_cell107.geometry} material={materials.Clouds} position={[-0.79, 0.171, 0.222]} />
      <mesh name="Object_4_cell108" geometry={nodes.Object_4_cell108.geometry} material={materials.Clouds} position={[-0.692, 0.321, 0.378]} />
      <mesh name="Object_4_cell109" geometry={nodes.Object_4_cell109.geometry} material={materials.Clouds} position={[-0.255, -0.803, -0.008]} />
      <mesh name="Object_4_cell110" geometry={nodes.Object_4_cell110.geometry} material={materials.Clouds} position={[0.441, 0.639, 0.36]} />
      <mesh name="Object_4_cell111" geometry={nodes.Object_4_cell111.geometry} material={materials.Clouds} position={[0.763, 0.078, 0.34]} />
      <mesh name="Object_4_cell112" geometry={nodes.Object_4_cell112.geometry} material={materials.Clouds} position={[0.787, -0.066, 0.323]} />
      <mesh name="Object_4_cell113" geometry={nodes.Object_4_cell113.geometry} material={materials.Clouds} position={[0.709, 0.369, 0.275]} />
      <mesh name="Object_4_cell114" geometry={nodes.Object_4_cell114.geometry} material={materials.Clouds} position={[-0.389, -0.382, 0.642]} />
      <mesh name="Object_4_cell115" geometry={nodes.Object_4_cell115.geometry} material={materials.Clouds} position={[-0.73, -0.191, 0.402]} />
      <mesh name="Object_4_cell116" geometry={nodes.Object_4_cell116.geometry} material={materials.Clouds} position={[-0.7, -0.435, 0.207]} />
      <mesh name="Object_4_cell117" geometry={nodes.Object_4_cell117.geometry} material={materials.Clouds} position={[-0.186, 0.332, -0.752]} />
      <mesh name="Object_4_cell118" geometry={nodes.Object_4_cell118.geometry} material={materials.Clouds} position={[0.159, 0.274, -0.782]} />
      <mesh name="Object_4_cell119" geometry={nodes.Object_4_cell119.geometry} material={materials.Clouds} position={[0.107, 0.551, -0.635]} />
      <mesh name="Object_4_cell120" geometry={nodes.Object_4_cell120.geometry} material={materials.Clouds} position={[0.018, 0.729, -0.444]} />
      <mesh name="Object_4_cell121" geometry={nodes.Object_4_cell121.geometry} material={materials.Clouds} position={[0.408, -0.588, 0.434]} />
      <mesh name="Object_4_cell122" geometry={nodes.Object_4_cell122.geometry} material={materials.Clouds} position={[-0.132, 0.614, -0.561]} />
      <mesh name="Object_4_cell123" geometry={nodes.Object_4_cell123.geometry} material={materials.Clouds} position={[0.387, 0.529, -0.539]} />
      <mesh name="Object_4_cell124" geometry={nodes.Object_4_cell124.geometry} material={materials.Clouds} position={[0.456, 0.668, -0.301]} />
      <mesh name="Object_4_cell125" geometry={nodes.Object_4_cell125.geometry} material={materials.Clouds} position={[-0.404, -0.722, -0.146]} />
      <mesh name="Object_4_cell126" geometry={nodes.Object_4_cell126.geometry} material={materials.Clouds} position={[-0.526, -0.422, -0.501]} />
      <mesh name="Object_4_cell127" geometry={nodes.Object_4_cell127.geometry} material={materials.Clouds} position={[-0.405, -0.436, -0.616]} />
      <mesh name="Object_4_cell128" geometry={nodes.Object_4_cell128.geometry} material={materials.Clouds} position={[0.352, 0.302, -0.703]} />
      <mesh name="Object_4_cell129" geometry={nodes.Object_4_cell129.geometry} material={materials.Clouds} position={[0.428, 0.186, -0.692]} />
      <mesh name="Object_4_cell130" geometry={nodes.Object_4_cell130.geometry} material={materials.Clouds} position={[-0.743, 0.027, 0.384]} />
      <mesh name="Object_4_cell131" geometry={nodes.Object_4_cell131.geometry} material={materials.Clouds} position={[-0.657, 0.238, 0.478]} />
      <mesh name="Object_4_cell132" geometry={nodes.Object_4_cell132.geometry} material={materials.Clouds} position={[-0.091, -0.602, 0.595]} />
      <mesh name="Object_4_cell133" geometry={nodes.Object_4_cell133.geometry} material={materials.Clouds} position={[-0.691, -0.491, -0.025]} />
      <mesh name="Object_4_cell134" geometry={nodes.Object_4_cell134.geometry} material={materials.Clouds} position={[-0.754, -0.337, 0.188]} />
      <mesh name="Object_4_cell135" geometry={nodes.Object_4_cell135.geometry} material={materials.Clouds} position={[-0.806, -0.182, 0.185]} />
      <mesh name="Object_4_cell136" geometry={nodes.Object_4_cell136.geometry} material={materials.Clouds} position={[-0.807, -0.247, -0.059]} />
      <mesh name="Object_4_cell137" geometry={nodes.Object_4_cell137.geometry} material={materials.Clouds} position={[0.643, 0.565, 0.006]} />
      <mesh name="Object_4_cell138" geometry={nodes.Object_4_cell138.geometry} material={materials.Clouds} position={[0.573, 0.102, -0.617]} />
      <mesh name="Object_4_cell139" geometry={nodes.Object_4_cell139.geometry} material={materials.Clouds} position={[-0.468, -0.292, -0.632]} />
      <mesh name="Object_4_cell140" geometry={nodes.Object_4_cell140.geometry} material={materials.Clouds} position={[-0.357, -0.332, -0.696]} />
      <mesh name="Object_4_cell142" geometry={nodes.Object_4_cell142.geometry} material={materials.Clouds} position={[-0.362, -0.032, -0.748]} />
      <mesh name="Object_4_cell143" geometry={nodes.Object_4_cell143.geometry} material={materials.Clouds} position={[0.118, 0.758, -0.378]} />
      <mesh name="Object_4_cell144" geometry={nodes.Object_4_cell144.geometry} material={materials.Clouds} position={[0.134, 0.802, -0.283]} />
      <mesh name="Object_4_cell145" geometry={nodes.Object_4_cell145.geometry} material={materials.Clouds} position={[0.195, 0.678, -0.466]} />
      <mesh name="Object_4_cell146" geometry={nodes.Object_4_cell146.geometry} material={materials.Clouds} position={[0.635, 0.087, 0.568]} />
      <mesh name="Object_4_cell147" geometry={nodes.Object_4_cell147.geometry} material={materials.Clouds} position={[0.658, -0.195, 0.498]} />
      <mesh name="Object_4_cell148" geometry={nodes.Object_4_cell148.geometry} material={materials.Clouds} position={[0.7, -0.31, 0.403]} />
      <mesh name="Object_4_cell149" geometry={nodes.Object_4_cell149.geometry} material={materials.Clouds} position={[-0.579, -0.556, 0.225]} />
      <mesh name="Object_4_cell150" geometry={nodes.Object_4_cell150.geometry} material={materials.Clouds} position={[-0.579, -0.487, 0.364]} />
      <mesh name="Object_4_cell151" geometry={nodes.Object_4_cell151.geometry} material={materials.Clouds} position={[-0.838, 0.162, -0.025]} />
      <mesh name="Object_4_cell152" geometry={nodes.Object_4_cell152.geometry} material={materials.Clouds} position={[-0.773, -0.02, -0.318]} />
      <mesh name="Object_4_cell153" geometry={nodes.Object_4_cell153.geometry} material={materials.Clouds} position={[-0.775, 0.094, -0.317]} />
      <mesh name="Object_4_cell154" geometry={nodes.Object_4_cell154.geometry} material={materials.Clouds} position={[0.662, -0.329, 0.443]} />
      <mesh name="Object_4_cell155" geometry={nodes.Object_4_cell155.geometry} material={materials.Clouds} position={[0.212, 0.305, -0.768]} />
      <mesh name="Object_4_cell156" geometry={nodes.Object_4_cell156.geometry} material={materials.Clouds} position={[0.587, 0.335, 0.493]} />
      <mesh name="Object_4_cell157" geometry={nodes.Object_4_cell157.geometry} material={materials.Clouds} position={[0.576, 0.209, 0.569]} />
      <mesh name="Object_4_cell158" geometry={nodes.Object_4_cell158.geometry} material={materials.Clouds} position={[0.652, -0.482, 0.21]} />
      <mesh name="Object_4_cell159" geometry={nodes.Object_4_cell159.geometry} material={materials.Clouds} position={[0.733, -0.333, 0.252]} />
      <mesh name="Object_4_cell160" geometry={nodes.Object_4_cell160.geometry} material={materials.Clouds} position={[0.646, -0.427, 0.388]} />
      <mesh name="Object_4_cell162" geometry={nodes.Object_4_cell162.geometry} material={materials.Clouds} position={[0.657, 0.352, -0.404]} />
      <mesh name="Object_4_cell163" geometry={nodes.Object_4_cell163.geometry} material={materials.Clouds} position={[0.758, 0.211, -0.295]} />
      <mesh name="Object_4_cell164" geometry={nodes.Object_4_cell164.geometry} material={materials.Clouds} position={[-0.039, -0.004, 0.83]} />
      <mesh name="Object_4_cell165" geometry={nodes.Object_4_cell165.geometry} material={materials.Clouds} position={[-0.193, 0.124, 0.821]} />
      <mesh name="Object_4_cell166" geometry={nodes.Object_4_cell166.geometry} material={materials.Clouds} position={[0.005, 0.158, 0.83]} />
      <mesh name="Object_4_cell167" geometry={nodes.Object_4_cell167.geometry} material={materials.Clouds} position={[0.218, -0.185, 0.793]} />
      <mesh name="Object_4_cell168" geometry={nodes.Object_4_cell168.geometry} material={materials.Clouds} position={[0.239, -0.084, 0.809]} />
      <mesh name="Object_4_cell169" geometry={nodes.Object_4_cell169.geometry} material={materials.Clouds} position={[0.523, 0.331, -0.57]} />
      <mesh name="Object_4_cell170" geometry={nodes.Object_4_cell170.geometry} material={materials.Clouds} position={[0.435, 0.431, -0.595]} />
      <mesh name="Object_4_cell171" geometry={nodes.Object_4_cell171.geometry} material={materials.Clouds} position={[0.598, 0.149, -0.6]} />
      <mesh name="Object_4_cell172" geometry={nodes.Object_4_cell172.geometry} material={materials.Clouds} position={[0.649, 0.11, -0.533]} />
      <mesh name="Object_4_cell173" geometry={nodes.Object_4_cell173.geometry} material={materials.Clouds} position={[0.056, -0.178, 0.826]} />
      <mesh name="Object_4_cell174" geometry={nodes.Object_4_cell174.geometry} material={materials.Clouds} position={[0.343, -0.2, 0.743]} />
      <mesh name="Object_4_cell175" geometry={nodes.Object_4_cell175.geometry} material={materials.Clouds} position={[-0.761, -0.365, -0.073]} />
      <mesh name="Object_4_cell176" geometry={nodes.Object_4_cell176.geometry} material={materials.Clouds} position={[-0.512, 0.363, 0.582]} />
      <mesh name="Object_4_cell177" geometry={nodes.Object_4_cell177.geometry} material={materials.Clouds} position={[-0.394, 0.537, 0.51]} />
      <mesh name="Object_4_cell178" geometry={nodes.Object_4_cell178.geometry} material={materials.Clouds} position={[-0.641, -0.101, 0.528]} />
      <mesh name="Object_4_cell179" geometry={nodes.Object_4_cell179.geometry} material={materials.Clouds} position={[0.289, 0.555, -0.576]} />
      <mesh name="Object_4_cell180" geometry={nodes.Object_4_cell180.geometry} material={materials.Clouds} position={[0.128, 0.811, -0.184]} />
      <mesh name="Object_4_cell181" geometry={nodes.Object_4_cell181.geometry} material={materials.Clouds} position={[-0.319, 0.24, 0.739]} />
      <mesh name="Object_4_cell182" geometry={nodes.Object_4_cell182.geometry} material={materials.Clouds} position={[-0.345, 0.426, 0.633]} />
      <mesh name="Object_4_cell183" geometry={nodes.Object_4_cell183.geometry} material={materials.Clouds} position={[0.31, 0.066, -0.792]} />
      <mesh name="Object_4_cell184" geometry={nodes.Object_4_cell184.geometry} material={materials.Clouds} position={[0.324, 0.158, -0.761]} />
      <mesh name="Object_4_cell185" geometry={nodes.Object_4_cell185.geometry} material={materials.Clouds} position={[0.705, 0.116, -0.46]} />
      <mesh name="Object_4_cell186" geometry={nodes.Object_4_cell186.geometry} material={materials.Clouds} position={[0.719, 0.193, -0.398]} />
      <mesh name="Object_4_cell188" geometry={nodes.Object_4_cell188.geometry} material={materials.Clouds} position={[0.037, 0.788, -0.296]} />
      <mesh name="Object_4_cell189" geometry={nodes.Object_4_cell189.geometry} material={materials.Clouds} position={[0.793, -0.123, -0.282]} />
      <mesh name="Object_4_cell190" geometry={nodes.Object_4_cell190.geometry} material={materials.Clouds} position={[0.818, -0.034, -0.21]} />
      <mesh name="Object_4_cell191" geometry={nodes.Object_4_cell191.geometry} material={materials.Clouds} position={[-0.046, -0.619, 0.583]} />
      <mesh name="Object_4_cell192" geometry={nodes.Object_4_cell192.geometry} material={materials.Clouds} position={[-0.555, -0.535, -0.329]} />
      <mesh name="Object_4_cell193" geometry={nodes.Object_4_cell193.geometry} material={materials.Clouds} position={[0.114, 0.393, 0.723]} />
      <mesh name="Object_4_cell194" geometry={nodes.Object_4_cell194.geometry} material={materials.Clouds} position={[-0.702, 0.448, 0.083]} />
      <mesh name="Object_4_cell195" geometry={nodes.Object_4_cell195.geometry} material={materials.Clouds} position={[0.546, -0.599, -0.219]} />
      <mesh name="Object_4_cell196" geometry={nodes.Object_4_cell196.geometry} material={materials.Clouds} position={[-0.267, 0.554, -0.576]} />
      <mesh name="Object_4_cell197" geometry={nodes.Object_4_cell197.geometry} material={materials.Clouds} position={[-0.281, 0.621, -0.51]} />
      <mesh name="Object_4_cell198" geometry={nodes.Object_4_cell198.geometry} material={materials.Clouds} position={[0.251, -0.729, 0.351]} />
      <mesh name="Object_4_cell199" geometry={nodes.Object_4_cell199.geometry} material={materials.Clouds} position={[0.501, -0.613, 0.286]} />
      <mesh name="Object_4_cell200" geometry={nodes.Object_4_cell200.geometry} material={materials.Clouds} position={[-0.53, 0.588, -0.286]} />
      <mesh name="Object_4_cell201" geometry={nodes.Object_4_cell201.geometry} material={materials.Clouds} position={[0.223, 0.056, -0.824]} />
      <mesh name="Object_4_cell202" geometry={nodes.Object_4_cell202.geometry} material={materials.Clouds} position={[0.226, 0.27, -0.767]} />
      <mesh name="Object_4_cell203" geometry={nodes.Object_4_cell203.geometry} material={materials.Clouds} position={[0.525, -0.364, 0.553]} />
      <mesh name="Object_4_cell204" geometry={nodes.Object_4_cell204.geometry} material={materials.Clouds} position={[0.397, -0.235, 0.695]} />
      <mesh name="Object_4_cell205" geometry={nodes.Object_4_cell205.geometry} material={materials.Clouds} position={[0.625, -0.433, 0.414]} />
      <mesh name="Object_4_cell206" geometry={nodes.Object_4_cell206.geometry} material={materials.Clouds} position={[0.667, 0.544, -0.037]} />
      <mesh name="Object_4_cell207" geometry={nodes.Object_4_cell207.geometry} material={materials.Clouds} position={[-0.431, 0.728, 0.109]} />
      <mesh name="Object_4_cell208" geometry={nodes.Object_4_cell208.geometry} material={materials.Clouds} position={[-0.094, -0.314, -0.787]} />
      <mesh name="Object_4_cell211" geometry={nodes.Object_4_cell211.geometry} material={materials.Clouds} position={[0.64, -0.508, -0.243]} />
      <mesh name="Object_4_cell212" geometry={nodes.Object_4_cell212.geometry} material={materials.Clouds} position={[0.523, -0.489, -0.441]} />
      <mesh name="Object_4_cell213" geometry={nodes.Object_4_cell213.geometry} material={materials.Clouds} position={[0.384, 0.313, 0.682]} />
      <mesh name="Object_4_cell214" geometry={nodes.Object_4_cell214.geometry} material={materials.Clouds} position={[0.353, 0.461, 0.621]} />
      <mesh name="Object_4_cell215" geometry={nodes.Object_4_cell215.geometry} material={materials.Clouds} position={[-0.8, -0.124, -0.232]} />
      <mesh name="Object_4_cell216" geometry={nodes.Object_4_cell216.geometry} material={materials.Clouds} position={[-0.494, 0.673, 0.183]} />
      <mesh name="Object_6_cell" geometry={nodes.Object_6_cell.geometry} material={materials.Planet} position={[-0.569, 0.137, 0.139]} />
      <mesh name="Object_6_cell001" geometry={nodes.Object_6_cell001.geometry} material={materials.Planet} position={[-0.204, -0.13, -0.571]} />
      <mesh name="Object_6_cell002" geometry={nodes.Object_6_cell002.geometry} material={materials.Planet} position={[0.244, -0.238, -0.528]} />
      <mesh name="Object_6_cell003" geometry={nodes.Object_6_cell003.geometry} material={materials.Planet} position={[0.479, 0.363, 0.226]} />
      <mesh name="Object_6_cell004" geometry={nodes.Object_6_cell004.geometry} material={materials.Planet} position={[0.566, 0.093, -0.126]} />
      <mesh name="Object_6_cell005" geometry={nodes.Object_6_cell005.geometry} material={materials.Planet} position={[0.218, 0.041, -0.533]} />
      <mesh name="Object_6_cell006" geometry={nodes.Object_6_cell006.geometry} material={materials.Planet} position={[-0.538, -0.232, -0.124]} />
      <mesh name="Object_6_cell007" geometry={nodes.Object_6_cell007.geometry} material={materials.Planet} position={[0.411, 0.283, -0.373]} />
      <mesh name="Object_6_cell008" geometry={nodes.Object_6_cell008.geometry} material={materials.Planet} position={[0.288, -0.531, 0.185]} />
      <mesh name="Object_6_cell009" geometry={nodes.Object_6_cell009.geometry} material={materials.Planet} position={[0.172, -0.291, -0.463]} />
      <mesh name="Object_6_cell010" geometry={nodes.Object_6_cell010.geometry} material={materials.Planet} position={[-0.26, 0.489, -0.293]} />
      <mesh name="Object_6_cell011" geometry={nodes.Object_6_cell011.geometry} material={materials.Planet} position={[-0.062, -0.627, -0.007]} />
      <mesh name="Object_6_cell012" geometry={nodes.Object_6_cell012.geometry} material={materials.Planet} position={[-0.353, -0.254, 0.331]} />
      <mesh name="Object_6_cell013" geometry={nodes.Object_6_cell013.geometry} material={materials.Planet} position={[-0.185, -0.244, 0.468]} />
      <mesh name="Object_6_cell014" geometry={nodes.Object_6_cell014.geometry} material={materials.Planet} position={[-0.414, -0.259, -0.398]} />
      <mesh name="Object_6_cell015" geometry={nodes.Object_6_cell015.geometry} material={materials.Planet} position={[0.591, -0.03, 0.224]} />
      <mesh name="Object_6_cell016" geometry={nodes.Object_6_cell016.geometry} material={materials.Planet} position={[0.401, -0.218, 0.317]} />
      <mesh name="Object_6_cell017" geometry={nodes.Object_6_cell017.geometry} material={materials.Planet} position={[0.397, -0.433, 0.232]} />
      <mesh name="Object_6_cell018" geometry={nodes.Object_6_cell018.geometry} material={materials.Planet} position={[0.219, -0.093, -0.562]} />
      <mesh name="Object_6_cell019" geometry={nodes.Object_6_cell019.geometry} material={materials.Planet} position={[-0.315, -0.516, 0.208]} />
      <mesh name="Object_6_cell020" geometry={nodes.Object_6_cell020.geometry} material={materials.Planet} position={[-0.436, -0.393, 0.25]} />
      <mesh name="Object_6_cell021" geometry={nodes.Object_6_cell021.geometry} material={materials.Planet} position={[0.065, -0.338, -0.47]} />
      <mesh name="Object_6_cell022" geometry={nodes.Object_6_cell022.geometry} material={materials.Planet} position={[-0.015, 0.07, -0.576]} />
      <mesh name="Object_6_cell023" geometry={nodes.Object_6_cell023.geometry} material={materials.Planet} position={[0.062, 0.574, -0.15]} />
      <mesh name="Object_6_cell024" geometry={nodes.Object_6_cell024.geometry} material={materials.Planet} position={[0.578, -0.192, 0.095]} />
      <mesh name="Object_6_cell025" geometry={nodes.Object_6_cell025.geometry} material={materials.Planet} position={[-0.095, -0.038, 0.597]} />
      <mesh name="Object_6_cell026" geometry={nodes.Object_6_cell026.geometry} material={materials.Planet} position={[-0.283, -0.36, -0.363]} />
      <mesh name="Object_6_cell027" geometry={nodes.Object_6_cell027.geometry} material={materials.Planet} position={[-0.52, 0.349, -0.005]} />
      <mesh name="Object_6_cell028" geometry={nodes.Object_6_cell028.geometry} material={materials.Planet} position={[0.136, -0.597, -0.033]} />
      <mesh name="Object_6_cell029" geometry={nodes.Object_6_cell029.geometry} material={materials.Planet} position={[-0.077, 0.274, -0.558]} />
      <mesh name="Object_6_cell030" geometry={nodes.Object_6_cell030.geometry} material={materials.Planet} position={[-0.144, 0.395, -0.405]} />
      <mesh name="Object_6_cell031" geometry={nodes.Object_6_cell031.geometry} material={materials.Planet} position={[-0.169, 0.573, 0.198]} />
      <mesh name="Object_6_cell032" geometry={nodes.Object_6_cell032.geometry} material={materials.Planet} position={[-0.5, -0.133, 0.39]} />
      <mesh name="Object_6_cell033" geometry={nodes.Object_6_cell033.geometry} material={materials.Planet} position={[0.204, 0.042, 0.589]} />
      <mesh name="Object_6_cell034" geometry={nodes.Object_6_cell034.geometry} material={materials.Planet} position={[-0.399, 0.384, -0.241]} />
      <mesh name="Object_6_cell035" geometry={nodes.Object_6_cell035.geometry} material={materials.Planet} position={[-0.099, -0.099, -0.616]} />
      <mesh name="Object_6_cell036" geometry={nodes.Object_6_cell036.geometry} material={materials.Planet} position={[0.309, 0.232, -0.488]} />
      <mesh name="Object_6_cell037" geometry={nodes.Object_6_cell037.geometry} material={materials.Planet} position={[0.584, -0.224, -0.085]} />
      <mesh name="Object_6_cell038" geometry={nodes.Object_6_cell038.geometry} material={materials.Planet} position={[-0.523, -0.135, 0.276]} />
      <mesh name="Object_6_cell039" geometry={nodes.Object_6_cell039.geometry} material={materials.Planet} position={[-0.42, 0.099, 0.466]} />
      <mesh name="Object_6_cell040" geometry={nodes.Object_6_cell040.geometry} material={materials.Planet} position={[0.155, 0.539, 0.222]} />
      <mesh name="Object_6_cell041" geometry={nodes.Object_6_cell041.geometry} material={materials.Planet} position={[0.433, -0.306, -0.323]} />
      <mesh name="Object_6_cell042" geometry={nodes.Object_6_cell042.geometry} material={materials.Planet} position={[-0.316, -0.469, -0.234]} />
      <mesh name="Object_6_cell043" geometry={nodes.Object_6_cell043.geometry} material={materials.Planet} position={[-0.279, -0.399, 0.399]} />
      <mesh name="Object_6_cell044" geometry={nodes.Object_6_cell044.geometry} material={materials.Planet} position={[0.068, -0.063, -0.635]} />
      <mesh name="Object_6_cell045" geometry={nodes.Object_6_cell045.geometry} material={materials.Planet} position={[-0.369, 0.423, 0.178]} />
      <mesh name="Object_6_cell046" geometry={nodes.Object_6_cell046.geometry} material={materials.Planet} position={[-0.39, -0.088, 0.463]} />
      <mesh name="Object_6_cell047" geometry={nodes.Object_6_cell047.geometry} material={materials.Planet} position={[-0.322, 0.485, -0.031]} />
      <mesh name="Object_6_cell048" geometry={nodes.Object_6_cell048.geometry} material={materials.Planet} position={[-0.205, -0.549, -0.093]} />
      <mesh name="Object_6_cell049" geometry={nodes.Object_6_cell049.geometry} material={materials.Planet} position={[-0.332, 0.274, 0.43]} />
      <mesh name="Object_6_cell050" geometry={nodes.Object_6_cell050.geometry} material={materials.Planet} position={[-0.189, -0.563, -0.204]} />
      <mesh name="Object_6_cell051" geometry={nodes.Object_6_cell051.geometry} material={materials.Planet} position={[0.405, 0.45, 0.123]} />
      <mesh name="Object_6_cell052" geometry={nodes.Object_6_cell052.geometry} material={materials.Planet} position={[0.535, 0.277, 0.074]} />
      <mesh name="Object_6_cell053" geometry={nodes.Object_6_cell053.geometry} material={materials.Planet} position={[-0.404, -0.218, 0.445]} />
      <mesh name="Object_6_cell054" geometry={nodes.Object_6_cell054.geometry} material={materials.Planet} position={[0.061, -0.491, -0.313]} />
      <mesh name="Object_6_cell055" geometry={nodes.Object_6_cell055.geometry} material={materials.Planet} position={[0.023, -0.316, 0.539]} />
      <mesh name="Object_6_cell056" geometry={nodes.Object_6_cell056.geometry} material={materials.Planet} position={[0.15, -0.488, 0.348]} />
      <mesh name="Object_6_cell057" geometry={nodes.Object_6_cell057.geometry} material={materials.Planet} position={[0.368, 0.444, -0.099]} />
      <mesh name="Object_6_cell058" geometry={nodes.Object_6_cell058.geometry} material={materials.Planet} position={[-0.133, 0.558, -0.272]} />
      <mesh name="Object_6_cell059" geometry={nodes.Object_6_cell059.geometry} material={materials.Planet} position={[-0.111, -0.545, 0.256]} />
      <mesh name="Object_6_cell060" geometry={nodes.Object_6_cell060.geometry} material={materials.Planet} position={[0.106, -0.13, -0.579]} />
      <mesh name="Object_6_cell061" geometry={nodes.Object_6_cell061.geometry} material={materials.Planet} position={[0.145, 0.481, -0.377]} />
      <mesh name="Object_6_cell062" geometry={nodes.Object_6_cell062.geometry} material={materials.Planet} position={[0.23, 0.344, 0.422]} />
      <mesh name="Object_6_cell063" geometry={nodes.Object_6_cell063.geometry} material={materials.Planet} position={[0.361, 0.041, -0.515]} />
      <mesh name="Object_6_cell064" geometry={nodes.Object_6_cell064.geometry} material={materials.Planet} position={[-0.384, -0.331, -0.272]} />
      <mesh name="Object_6_cell065" geometry={nodes.Object_6_cell065.geometry} material={materials.Planet} position={[0.308, -0.214, 0.495]} />
      <mesh name="Object_6_cell066" geometry={nodes.Object_6_cell066.geometry} material={materials.Planet} position={[0.217, -0.485, 0.042]} />
      <mesh name="Object_6_cell067" geometry={nodes.Object_6_cell067.geometry} material={materials.Planet} position={[0.374, -0.121, -0.451]} />
      <mesh name="Object_6_cell068" geometry={nodes.Object_6_cell068.geometry} material={materials.Planet} position={[-0.395, 0.173, -0.405]} />
      <mesh name="Object_6_cell069" geometry={nodes.Object_6_cell069.geometry} material={materials.Planet} position={[-0.591, 0.021, -0.173]} />
      <mesh name="Object_6_cell070" geometry={nodes.Object_6_cell070.geometry} material={materials.Planet} position={[-0.4, -0.411, 0.069]} />
      <mesh name="Object_6_cell071" geometry={nodes.Object_6_cell071.geometry} material={materials.Planet} position={[0.072, 0.629, 0.01]} />
      <mesh name="Object_6_cell072" geometry={nodes.Object_6_cell072.geometry} material={materials.Planet} position={[-0.616, -0.138, 0.083]} />
      <mesh name="Object_6_cell073" geometry={nodes.Object_6_cell073.geometry} material={materials.Planet} position={[0.604, 0.213, -0.001]} />
      <mesh name="Object_6_cell074" geometry={nodes.Object_6_cell074.geometry} material={materials.Planet} position={[-0.198, -0.61, 0.059]} />
      <mesh name="Object_6_cell075" geometry={nodes.Object_6_cell075.geometry} material={materials.Planet} position={[0.2, 0.223, -0.527]} />
      <mesh name="Object_6_cell076" geometry={nodes.Object_6_cell076.geometry} material={materials.Planet} position={[-0.091, -0.419, 0.394]} />
      <mesh name="Object_6_cell077" geometry={nodes.Object_6_cell077.geometry} material={materials.Planet} position={[-0.397, -0.407, -0.093]} />
      <mesh name="Object_6_cell078" geometry={nodes.Object_6_cell078.geometry} material={materials.Planet} position={[-0.349, -0.143, -0.485]} />
      <mesh name="Object_6_cell079" geometry={nodes.Object_6_cell079.geometry} material={materials.Planet} position={[0.433, -0.45, 0.04]} />
      <mesh name="Object_6_cell080" geometry={nodes.Object_6_cell080.geometry} material={materials.Planet} position={[0.506, 0.035, -0.367]} />
      <mesh name="Object_6_cell081" geometry={nodes.Object_6_cell081.geometry} material={materials.Planet} position={[0.482, -0.32, 0.281]} />
      <mesh name="Object_6_cell082" geometry={nodes.Object_6_cell082.geometry} material={materials.Planet} position={[-0.119, -0.343, -0.485]} />
      <mesh name="Object_6_cell083" geometry={nodes.Object_6_cell083.geometry} material={materials.Planet} position={[0.126, 0.277, -0.56]} />
      <mesh name="Object_6_cell084" geometry={nodes.Object_6_cell084.geometry} material={materials.Planet} position={[0.326, -0.486, -0.207]} />
      <mesh name="Object_6_cell085" geometry={nodes.Object_6_cell085.geometry} material={materials.Planet} position={[-0.335, 0.431, 0.308]} />
      <mesh name="Object_6_cell086" geometry={nodes.Object_6_cell086.geometry} material={materials.Planet} position={[0.297, 0.147, -0.546]} />
      <mesh name="Object_6_cell087" geometry={nodes.Object_6_cell087.geometry} material={materials.Planet} position={[0.02, 0.428, -0.43]} />
      <mesh name="Object_6_cell088" geometry={nodes.Object_6_cell088.geometry} material={materials.Planet} position={[-0.039, 0.541, -0.231]} />
      <mesh name="Object_6_cell089" geometry={nodes.Object_6_cell089.geometry} material={materials.Planet} position={[0.493, -0.277, -0.173]} />
      <mesh name="Object_6_cell090" geometry={nodes.Object_6_cell090.geometry} material={materials.Planet} position={[0.481, 0.112, 0.372]} />
      <mesh name="Object_6_cell091" geometry={nodes.Object_6_cell091.geometry} material={materials.Planet} position={[0.394, -0.25, -0.426]} />
      <mesh name="Object_6_cell092" geometry={nodes.Object_6_cell092.geometry} material={materials.Planet} position={[-0.084, 0.338, 0.514]} />
      <mesh name="Object_6_cell093" geometry={nodes.Object_6_cell093.geometry} material={materials.Planet} position={[-0.545, -0.306, 0.083]} />
      <mesh name="Object_6_cell094" geometry={nodes.Object_6_cell094.geometry} material={materials.Planet} position={[-0.213, -0.442, -0.385]} />
      <mesh name="Object_6_cell095" geometry={nodes.Object_6_cell095.geometry} material={materials.Planet} position={[-0.266, -0.075, 0.576]} />
      <mesh name="Object_6_cell096" geometry={nodes.Object_6_cell096.geometry} material={materials.Planet} position={[-0.536, 0.248, 0.033]} />
      <mesh name="Object_6_cell097" geometry={nodes.Object_6_cell097.geometry} material={materials.Planet} position={[0.259, 0.442, -0.296]} />
      <mesh name="Object_6_cell098" geometry={nodes.Object_6_cell098.geometry} material={materials.Planet} position={[-0.176, 0.583, 0]} />
      <mesh name="Object_6_cell099" geometry={nodes.Object_6_cell099.geometry} material={materials.Planet} position={[-0.221, -0.523, 0.091]} />
    </group>
  </group>
)
}

useGLTF.preload('/models/globe2.glb')
