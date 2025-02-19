// -> Routing lib
import { BrowserRouter } from "react-router-dom";

// -> Providers
import TodoProvider from "./context/TodoContext";

// -> Pages
import { Router } from "./routes";

export function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </TodoProvider>
  );
}
