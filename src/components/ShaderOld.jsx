import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, ScrollControls } from "@react-three/drei";
import { SectionWrapper } from "../hoc";
import { Model2 } from "./Heart2";
import useWindowScroll from "./WindowScrollHook";


const ShaderOld = ( ) => {
    
    //console.log(scrollOffset);
    const scrollOffset = useWindowScroll(); // Get the scroll offset


    return (
        <div style={{ height: "100vh", width: "83vw", overflow: "hidden", zIndex: "100" }}>
            <Canvas camera={{ position: [3, 3, 3], fov: 30 }}>
                {/* <color attach="background" args={["#ececec"]} /> */}
                <OrbitControls enableZoom={false} />
                {/* <ambientLight intensity={0.5} /> */}
                <directionalLight intensity={1} />

                
                <Float floatIntensity={2} speed={3}>
                    <Model2 scrollOffset={scrollOffset} />
                </Float>

            </Canvas>
        </div>
    );
};

export default SectionWrapper(ShaderOld, "shaderOld");
