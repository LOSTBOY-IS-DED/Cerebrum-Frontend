import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SidebarItems";

export function SideBar() {
  return (
    <div className="bg-white h-screen border-r w-72 fixed left-0 top-0 pl-6">
      <div className="flex text-2xl pt-8 items-center ">
        <div className="pr-4 text-purple-600">
          <Logo />
        </div>
        Cerebrum
      </div>
      <div className="pt-8 pl-4">
        <SideBarItem text="Twitter" icon={<TwitterIcon />} />
        <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
}
