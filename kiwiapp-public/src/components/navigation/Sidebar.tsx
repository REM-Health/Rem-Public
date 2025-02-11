"use client";

import { Briefcase01, Dataflow04, Settings02, Users01 } from "@untitled-ui/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "./SidebarContext";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen min-w-[15%] bg-evergreen-800 text-beige transition-transform ${
        collapsed ? "w-16 -translate-x-full transform" : "w-64 translate-x-0 transform" } border-divider bg-background relative
        z-[202] flex flex-col overflow-y-auto border-r py-6`}
    >
      {collapsed ? (
        <div
          className="inset-0 z-[201] bg-evergreen-800 opacity-80 transition-opacity"
          onClick={() => setCollapsed()}
        />
      ) : null}
      <div className="mx-4 mb-4 mt-0 flex items-center justify-between">
        <Image src="/assets/images/logo-no-rem.svg" alt="Logo" width={48} height={48} />
        {/* TODO(zhongxia.zhou): Enable sidebar open / collapse. */}
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="mt-9 flex flex-col gap-6 px-2">
          <SidebarItem
            isActive={pathname?.includes("/manage/agencies")}
            title="Agencies"
            icon={<Dataflow04 width="20" height="20" />}
            href="/manage/agencies"
          />
          <SidebarItem
            isActive={pathname?.includes("/manage/agents")}
            title="Agents"
            icon={<Briefcase01 width="20" height="20" />}
            href="/manage/agents"
          />
          <SidebarItem
            isActive={pathname?.includes("/manage/users")}
            title="Users"
            icon={<Users01 width="20" height="20" />}
            href="/manage/users"
          />
          <SidebarItem
            isActive={pathname?.includes("/manage/settings")}
            title="Settings"
            icon={<Settings02 width="20" height="20" />}
            href="/manage/settings"
          />
        </div>
      </div>
    </aside>
  );
};
