import Ground  from "./Ground";
import VanillaPlaceholder from "./VanillaPlaceholder";
import Particles from "./Particles";
import Lights from "./Lights";

function HeroScene() {
  return (
    <>
      <Lights />
      <Ground />
      <VanillaPlaceholder />
      <Particles />
    </>
  );
}

export default HeroScene;
