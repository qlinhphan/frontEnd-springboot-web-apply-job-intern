import { Footer } from "antd/es/layout/layout"

const FooterUser = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Quang Linh Phan
        </Footer>
    )
}

export default FooterUser