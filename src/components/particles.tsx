import Particles from "solid-particles";

export default function App() {
  return (
    <div class="App">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: "#000",
          },
          fullScreen: {
            enable: true,
          },
        }}
      />
    </div>
  );
}