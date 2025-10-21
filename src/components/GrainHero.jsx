import { GrainGradient } from '@paper-design/shaders-react';

export default function GrainHero({ children, height = '100dvh' }) {
  return (
    <div style={{ position:'relative', width:'100%', minHeight:'100vh', height, overflow:'hidden' }}>
      <GrainGradient
        width="100%"
        height="100%"   // sigue al contenedor
        fit="cover"
        colors={["#3700ff", "#bd2e9e", "#ff00f7", "#ead81a"]}
        colorBack="#000000"
        softness={0.12}
        intensity={0}
        noise={0}
        shape="truchet"
        speed={0.64}
        scale={0.6}
        offsetX={-0.04}
        style={{ position:'absolute', inset:0 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
