import { EnvProvider } from "./EnvProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <EnvProvider>{children}</EnvProvider>;
}
