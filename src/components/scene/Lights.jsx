function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />

      <directionalLight position={[3, 5, 4]} intensity={2} color="#D8B978" />

      <pointLight
        position={[-3, 2, 2]}
        intensity={15}
        distance={10}
        color="#8B3F2F"
      />
    </>
  );
}

export default Lights;
