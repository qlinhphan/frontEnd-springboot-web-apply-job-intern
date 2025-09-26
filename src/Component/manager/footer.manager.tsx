import { Footer } from "antd/es/layout/layout"

const FooterManager = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Quang Linh Phan
        </Footer>
    )
}

export default FooterManager