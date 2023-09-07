import { createRoot } from "react-dom/client";
import { Todo } from './todo';
import "./components/index.css";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(<Todo />);