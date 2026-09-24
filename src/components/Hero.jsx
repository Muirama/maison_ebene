import { Canvas } from "@react-three/fiber";

function Hero() {
  return (
    <section className="hero">
      <Canvas>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial />
        </mesh>

        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={2} />
      </Canvas>
    </section>
  );
}

export default Hero;