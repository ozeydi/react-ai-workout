import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Onboarding from "./pages/Onboarding"
import Account from "./pages/Account"
import Profile from "./pages/Profile"
import Auth from "./pages/Auth"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/:pathname" element={<Auth />} />
        <Route path="/account/:pathname" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
