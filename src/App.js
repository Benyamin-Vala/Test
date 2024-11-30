import { Button } from "./components/Button";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <Button
        buttonText="Click Me"
        bgColor="#006fee"
        bgHoverColor="red"
        hover={true}
      />
      <Card title="Card Title" description="Card Description" />
    </div>
  );
}

export default App;
