import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <Button variant="primary" text="share-Brain" startIcon={<ShareIcon />} />
      <Button variant="secondary" text="Add-content" startIcon={<PlusIcon />} />
      <Card></Card>
    </div>
  );
}

export default App;
