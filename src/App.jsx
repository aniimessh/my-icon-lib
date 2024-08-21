import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/common/Navbar";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center font-inter">
      <Toaster richColors position="top-center" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
