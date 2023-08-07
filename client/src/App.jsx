import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import LandingPage from "./components/LandingPage";
import UserProfile from "./components/UserProfile";
import Pricing from "./components/Pricing";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
