//controlled component

import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-80 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <CrossIcon />
              </div>
              <div>
                <Input placeHolder={"Title"} />
                <Input placeHolder={"Link"} />
              </div>
              <div className="flex justify-center">
                <Button variant="primary" text="submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );

  function Input({
    onChange,
    placeHolder,
  }: {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeHolder: string;
  }) {
    return (
      <div>
        <input
          type="text"
          placeholder={placeHolder}
          className="px-4 py-2 border rounded m-2"
          onChange={onChange}
        />
      </div>
    );
  }
}
