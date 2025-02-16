import Navbar from "../components/functional/Navbar/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="min-h-screen relative bg-primary-dark text-text-primary overflow-y-auto thin-scrollbar">
      <Navbar />
      <div className="absolute top-15 w-full bg-primary-dark text-text-primary">
      <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
