//controlled component

import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import Input from "./Input";

export function CreateContentModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-80 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div
                onClick={onClose}
                className="flex justify-end cursor-pointer"
              >
                <CrossIcon />
              </div>
              <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
              </div>
              <div className="flex justify-center mt-6">
                <Button variant="primary" text="submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
