import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./ui/pages/LoginPage";
import SignUpPage from "./ui/pages/SignUpPage";

import ErrorPage from "./ui/pages/ErrorPage";
import HomePage from "./ui/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
