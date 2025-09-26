import FooterUser from "@/Component/user/footer.user"
import HeaderUser from "@/Component/user/header.user"
import { Outlet } from "react-router-dom"

const PageUser = () => {
    return (
        <div className="content-page-user">
            <div className="header-page">
                <HeaderUser></HeaderUser>
            </div>
            <div className="content">
                <Outlet></Outlet>
            </div>
            <div style={{ marginTop: '150px' }}>
                <FooterUser></FooterUser>
            </div>
        </div>

    )
}

export default PageUser