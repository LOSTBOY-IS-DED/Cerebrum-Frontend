import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import Input from "./Input.tsx";
import { BACKEND_URL } from "../config.ts";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "tweet",
}

export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-gray-100 fixed top-0 left-0 opacity-80 flex justify-center"></div>
          <div className="w-screen h-screen fixed top-0 left-0  flex justify-center">
            <div className="flex flex-col justify-center pos">
              <span className="bg-white opacity-100 p-4 rounded">
                <div
                  onClick={onClose}
                  className="flex justify-end cursor-pointer"
                >
                  <CrossIcon />
                </div>
                <div>
                  <Input reference={titleRef} placeHolder="Title" />
                  <Input reference={linkRef} placeHolder="Link" />
                </div>
                <div className="mt-5 flex flex-col justify-center">
                  <p className="ml-[60px] mb-[10px] font-bold">CONTENT TYPE</p>
                  <div className="flex gap-1 justify-center">
                    <Button
                      onClick={() => {
                        setType(ContentType.Youtube);
                      }}
                      text="Youtube"
                      variant={
                        type === ContentType.Youtube ? "primary" : "secondary"
                      }
                    ></Button>
                    <Button
                      onClick={() => {
                        setType(ContentType.Twitter);
                      }}
                      text="Twitter"
                      variant={
                        type === ContentType.Twitter ? "primary" : "secondary"
                      }
                    ></Button>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    onClick={addContent}
                    variant="primary"
                    text="submit"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
