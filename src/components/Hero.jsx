import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import HeroScene from "./scene/HeroScene";
import { createHeroScroll } from "../animations/heroScroll";

function Hero() {
  const cameraRef = useRef(null);
  const plantRef = useRef(null);

  const locationRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!cameraRef.current || !plantRef.current) return;

    const timeline = createHeroScroll({
      camera: cameraRef.current,
      plant: plantRef.current,
      location: locationRef.current,
      title: titleRef.current,
      tagline: taglineRef.current,
      scrollIndicator: scrollRef.current,
    });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, []);

  return (
    <section className="hero">
      <Canvas
        camera={{
          position: [0, 1.5, 7],
          fov: 45,
        }}
        onCreated={({ camera }) => {
          cameraRef.current = camera;
        }}
      >
        <HeroScene plantRef={plantRef} />
      </Canvas>

      <div className="hero-content">
        <p ref={locationRef} className="hero-location">
          MADAGASCAR
        </p>

        <h1 ref={titleRef}>MAISON ÉBÈNE</h1>

        <p ref={taglineRef} className="hero-tagline">
          L'âme de Madagascar, servie à table.
        </p>
      </div>

      <div ref={scrollRef} className="scroll-indicator">
        <span>↓</span>
        <p>DÉCOUVRIR</p>
      </div>
    </section>
  );
}

export default Hero;
