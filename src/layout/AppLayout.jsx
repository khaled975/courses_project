import { Outlet } from "react-router-dom";
import Header from "../ui/components/Header";

function AppLayout() {
  return (
    <div >
      <Header />
      <main className="py-3 px-5 md:py-5 md:px-7 flex h-screen items-start justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
