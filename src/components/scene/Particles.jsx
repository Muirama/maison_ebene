import { useMemo } from "react";

function Particles() {
  const particles = useMemo(() => {
    const positions = [];

    for (let i = 0; i < 150; i++) {
      positions.push(
        (Math.random() - 0.5) * 10,
        Math.random() * 6 - 1,
        (Math.random() - 0.5) * 6,
      );
    }

    return new Float32Array(positions);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.025} color="#D8B978" transparent opacity={0.35} />
    </points>
  );
}

export default Particles;
