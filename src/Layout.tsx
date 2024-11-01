import AppBar from "./components/AppBar/AppBar";
import { ReactNode, Suspense } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: "0 auto",
      }}
    >
      <AppBar />
      <div className="childrenWrapper" style={{ flexGrow: 1, display: "flex" }}>
        <Suspense fallback={null}>
          <div className="children" style={{ flexGrow: 1 }}>
            {children}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
