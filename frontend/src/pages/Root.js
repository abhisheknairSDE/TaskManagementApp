import { Outlet } from "react-router-dom"
import Navbar from "../containers/Navbar"

const Root = () =>{
    return <>
    <Navbar />
    <div style={{ marginTop: "80px" }}>
        <Outlet />
      </div>
    </>
}

export default Root;