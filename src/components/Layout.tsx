import { Navigation } from "./Navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
