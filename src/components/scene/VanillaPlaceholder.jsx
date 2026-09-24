import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function VanillaPlaceholder() {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.15;

    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Tige */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 2, 32]} />

        <meshStandardMaterial color="#25382D" roughness={0.8} />
      </mesh>

      {/* Feuille gauche */}
      <mesh position={[-0.45, 0.8, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshStandardMaterial color="#304A38" roughness={0.8} />
      </mesh>

      {/* Feuille droite */}
      <mesh position={[0.45, 0.3, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshStandardMaterial color="#304A38" roughness={0.8} />
      </mesh>

      {/* Gousse de vanille */}
      <mesh position={[0.15, -0.1, 0.15]} rotation={[0, 0, -0.2]}>
        <capsuleGeometry args={[0.08, 1.2, 8, 16]} />

        <meshStandardMaterial color="#5A3826" roughness={0.7} />
      </mesh>
    </group>
  );
}

export default VanillaPlaceholder;
