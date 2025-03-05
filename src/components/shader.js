export const vertex = `
    uniform float uScale;
    varying vec2 vUv;

    void main() {
        vUv = uv; 
        vec3 newPosition = position * uScale; // Scale the position
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1);
    }
`


export const fragment = `
    uniform sampler2D uTexture;
    varying vec2 vUv;
    
    void main(){
        vec4 color = texture2D(uTexture, vUv);
        float radius = 0.705; // Adjust this value to change the corner radius
        vec2 fromCenter = vUv - vec2(0.5);
        float dist = length(fromCenter);
        float edge = 0.5 - radius;
        float alpha = smoothstep(edge, edge + 0.01, 0.5 - dist);
        gl_FragColor = vec4(color.rgb, color.a * alpha);
    }
`


