import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./timeline";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}
