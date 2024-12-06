import { ReactElement } from "react";

interface SideBarProps {
  text: string;
  icon: ReactElement;
}

export function SideBarItem({ text, icon }: SideBarProps) {
  return (
    <div className="flex text-gray-700 py-2 pl-4 cursor-pointer hover:bg-gray-200 hover:rounded max-w-48 transition-all duration-200">
      <div className="pr-2">{icon}</div>
      <div className="pr-2">{text}</div>
    </div>
  );
}
