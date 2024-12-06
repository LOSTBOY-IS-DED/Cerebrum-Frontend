import Input from "../components/Input";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eeeeef]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-[#7664eb] mb-6">
          {" "}
          CEREBRUM
        </h1>
        <img src="/Logo.svg" alt="logo" />
        <h1 className="text-3xl font-bold text-center text-[#7164c0] mb-6">
          Welcome aboard! Let’s create your account.
        </h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#95989c]"
            >
              Email
            </label>
            <Input placeholder="Email" />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#95989c]"
            >
              Password
            </label>
            <Input placeholder="Password" />
          </div>
          <button
            type="submit"
            className="w-full bg-[#7164c0] hover:bg-[#9492db] text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
