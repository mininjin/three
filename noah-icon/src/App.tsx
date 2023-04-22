import "./App.css";
import ModelConfig from "./Config";
import Three from "./Model";

function App() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <div className="w-full h-[80%]">
        <Three />
      </div>

      <ModelConfig className="p-6" />
    </div>
  );
}

export default App;
