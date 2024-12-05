import { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-4">
      <CreateContentModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      <div className="flex justify-end gap-4">
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          variant="secondary"
          text="Add-content"
          startIcon={<PlusIcon />}
        />
        <Button
          variant="primary"
          text="share-Brain"
          startIcon={<ShareIcon />}
        />
      </div>

      <div className="flex gap-4">
        <Card
          title="My twitter post"
          type="twitter"
          link="https://x.com/CalvinnChenn/status/1864449859891216419"
        ></Card>
        <Card
          title="My youtube video"
          type="youtube"
          link="https://www.youtube.com/watch?v=byitAI7kkOM"
        ></Card>
      </div>
    </div>
  );
}

export default App;
