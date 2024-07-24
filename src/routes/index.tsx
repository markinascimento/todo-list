// -> Routing lib
import { Route, Routes } from "react-router-dom";

// -> Pages
import { Completed } from "../pages/Completed";
import { Home } from "../pages/Home";

// -> Components
import { Sidebar } from "../layout/Sidebar";

export function Router() {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
      </Route>
    </Routes>
  );
}
