import FooterManager from "@/Component/manager/footer.manager"
import HeaderManager from "@/Component/manager/header.manager"
import { Outlet } from "react-router-dom"
import imgs from '../assets/enty-level-IT_1500x680.png'

const PageManager = () => {
    return (
        <div className="content-page-manager" style={{ width: '100%', height: '100vh' }}>
            <div className="header-page">
                <HeaderManager></HeaderManager>
            </div>
            <div className="content" style={{ marginLeft: '3%', marginTop: '50px' }}>
                <Outlet></Outlet>
            </div>
            <div style={{ marginTop: '129px' }}>
                <FooterManager></FooterManager>
            </div>
        </div>

    )
}

export default PageManager