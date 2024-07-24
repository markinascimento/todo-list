import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
}
