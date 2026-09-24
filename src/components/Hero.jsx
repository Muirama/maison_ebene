import { Canvas } from "@react-three/fiber";
import HeroScene from "./scene/HeroScene";

function Hero() {
  return (
    <section className="hero">
      <Canvas
        camera={{
          position: [0, 1.5, 7],
          fov: 45,
        }}
      >
        <HeroScene />
      </Canvas>

      <div className="hero-content">
        <p className="hero-location">MADAGASCAR</p>

        <h1>MAISON ÉBÈNE</h1>

        <p className="hero-tagline">L'âme de Madagascar, servie à table.</p>
      </div>

      <div className="scroll-indicator">
        <span>↓</span>
        <p>DÉCOUVRIR</p>
      </div>
    </section>
  );
}

export default Hero;
