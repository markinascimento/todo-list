// -> Routing lib
import { BrowserRouter } from "react-router-dom";

// -> Pages
import { Router } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
