function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[20, 20]} />

      <meshStandardMaterial color="#241914" roughness={0.9} metalness={0} />
    </mesh>
  );
}

export default Ground;
