import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
  collapsed: boolean;
  setCollapsed: () => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  collapsed: false,
  setCollapsed: () => {},
  currentSection: "",
  setCurrentSection: () => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsedState] = useState(false);
  const [currentSection, setCurrentSectionState] = useState("");

  const setCollapsed = () => setCollapsedState(!collapsed);
  const setCurrentSection = (section: string) =>
    setCurrentSectionState(section);

  return (
    <SidebarContext.Provider
      value={{ collapsed, setCollapsed, currentSection, setCurrentSection }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
