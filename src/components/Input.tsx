import { useState } from "react";

interface CoolInputProps {
  onChange: () => void;
  placeholder: string;
}

export default function Input({ onChange, placeholder }: CoolInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto mt-4">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7164c0] to-[#9492db] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full px-4 py-2 bg-white border-2 border-[#e6e9ed] rounded-lg focus:outline-none focus:border-[#7164c0] transition-all duration-300 ease-in-out"
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className={`w-5 h-5 text-[#7164c0] transition-all duration-300 ease-in-out ${
              isFocused ? "scale-110" : "scale-100"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full bg-[#9492db] transition-all duration-300 ease-in-out ${
                isFocused ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
