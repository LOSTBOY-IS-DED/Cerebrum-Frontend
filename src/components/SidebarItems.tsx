import { ReactElement } from "react";

interface SideBarProps {
  text: string;
  icon: ReactElement;
}

export function SideBarItem({ text, icon }: SideBarProps) {
  return (
    <div className="flex text-gray-700">
      <div className="p-2">{icon}</div>
      <div className="p-2">{text}</div>
    </div>
  );
}
