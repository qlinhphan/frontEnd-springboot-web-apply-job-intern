import Menus from "@/Component/menu/menu"
import { Outlet } from "react-router-dom"


const AdminLayout = () => {
    return (
        <div style={{ display: 'flex', margin: '0px', padding: '0px' }}>
            <div className="contain-left" style={{ backgroundColor: '#011024' }}>
                <Menus></Menus>
            </div>
            <div className="content-right" style={{ width: '100%' }}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default AdminLayout