import { Outlet } from "react-router-dom";

import NavigationTabs from "../components/Guest/NavigationTabs";
import Footer from "../components/Footer";

const GuestLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-900 via-purple-900 to-purple-500 flex flex-col items-center">
      <div className="flex-grow w-full max-w-sm mx-auto px-3 sm:px-0 py-6">
        <NavigationTabs />

        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default GuestLayout;
