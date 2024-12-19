import Input from "../components/Input";

import { BACKEND_URL } from "../config";
import axios from "axios";
import { Button } from "../components/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signUp() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(BACKEND_URL + "/api/v1/user/signup", {
      username,
      password,
    });
    alert(response.data.message);
    navigate("/signin");
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border bg-white text-black h-fit w-fit p-[30px] rounded-lg">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#95989c] "
          >
            Username
          </label>
          <Input reference={usernameRef} placeholder="Email" />
        </div>
        <div className="space-y-2 mt-[20px]">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#95989c]"
          >
            Password
          </label>
          <Input reference={passwordRef} placeholder="Password" />
        </div>
        <div className="flex justify-center p-4">
          <Button
            onClick={signUp}
            variant="primary"
            text="Signup"
            loading={false}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
}
