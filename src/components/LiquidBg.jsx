import { LiquidMetal } from '@paper-design/shaders-react';

export default function LiquidBg({
  colorTint = "#671d51",
  image = "https://shaders.paper.design/images/logos/diamond.svg",
  shape = "diamond",
  // props opcionales:
  repetition = 2,
  softness = 0.1,
  shiftRed = 0.3,
  shiftBlue = 0.3,
  distortion = 0.07,
  contour = 0.4,
  angle = 70,
  speed = 1,
  scale = 0.6,
  style = {},
}) {
  return (
    <div
      // ocupa todo el <a>
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        borderRadius: 12,   // respeta bordes redondeados del botón
        overflow: 'hidden',
        ...style,
      }}
      aria-hidden="true"
    >
      <LiquidMetal
        width="100%"
        height="100%"
        fit="cover"
        image={image}
        colorBack="#000000"
        colorTint={colorTint}
        shape={shape}
        repetition={repetition}
        softness={softness}
        shiftRed={shiftRed}
        shiftBlue={shiftBlue}
        distortion={distortion}
        contour={contour}
        angle={angle}
        speed={speed}
        scale={scale}
        style={{ position: 'absolute', inset: 0 }}
      />
    </div>
  );
}
