import { Button } from "./components/Button";
import { Card } from "./components/card";

function App() {
  return <div className="w-screen h-screen bg-black text-white">
    <Button>Click Me</Button>
    <Card title="Card Title" description="Card Description"/>
  </div>;
}

export default App;