import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

import Ground from "./Ground";
import VanillaPlaceholder from "./VanillaPlaceholder";
import Particles from "./Particles";
import Lights from "./Lights";

import { createHeroScroll } from "../../animations/heroScroll";

function HeroScene() {
  const { camera } = useThree();

  const plantRef = useRef();

  useEffect(() => {
    const timeline = createHeroScroll(camera, plantRef);

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [camera]);

  return (
    <>
      <Lights />

      <Ground />

      <VanillaPlaceholder plantRef={plantRef} />

      <Particles />
    </>
  );
}

export default HeroScene;
