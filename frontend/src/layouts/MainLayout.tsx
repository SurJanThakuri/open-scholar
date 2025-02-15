import Navbar from "../components/functional/Navbar/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-primary-dark text-text-primary">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
