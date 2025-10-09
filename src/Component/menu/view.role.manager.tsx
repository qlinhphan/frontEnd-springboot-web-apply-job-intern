import { Modal } from "antd"
import React from "react";

interface Iprops {
    setIsModalOpenMana: any,
    isModalOpenMana: any
}
const ViewRoleMana: React.FC<Iprops> = ({ setIsModalOpenMana, isModalOpenMana }) => {

    const handleOk = () => {
        setIsModalOpenMana(false);
    };

    const handleCancel = () => {
        setIsModalOpenMana(false);
    };
    return (
        <div>
            <Modal
                title="Chi tiết vai trò Manager"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenMana}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1200}
                footer={null}
            >
                <p> Vai trò <b>Manager</b> được xem là người chịu trách nhiệm quản lý, giám sát và điều phối các hoạt động trong hệ thống. Manager đóng vai trò trung gian giữa Admin và User, đảm bảo rằng các quy trình vận hành diễn ra suôn sẻ, đúng định hướng và đạt hiệu quả cao. Người quản lý có thể theo dõi thông tin người dùng, duyệt hoặc từ chối các yêu cầu ứng tuyển, quản lý tin tuyển dụng và cập nhật dữ liệu liên quan đến công việc. Với quyền hạn cao hơn User nhưng thấp hơn Admin, Manager là nhân tố quan trọng giúp hệ thống duy trì tính trật tự, minh bạch và hiệu quả trong mọi hoạt động. </p> <br></br> <hr></hr> <br></br> <p> Ngoài các chức năng quản lý cơ bản, Manager còn góp phần duy trì và nâng cao chất lượng hệ thống thông qua việc theo dõi, đánh giá và phản hồi tình hình hoạt động thực tế. Thông qua việc xử lý thông tin từ User và phối hợp với Admin, Manager giúp phát hiện các vấn đề phát sinh, đề xuất cải tiến và đảm bảo trải nghiệm người dùng được tối ưu. Họ cũng có trách nhiệm kiểm soát tính chính xác của dữ liệu, hạn chế sai sót và đảm bảo quy trình tuyển dụng hoặc quản lý nội dung luôn được thực hiện đúng quy định. </p> <br></br> <hr></hr> <br></br> <p> Manager đóng vai trò cầu nối giữa nhu cầu thực tế của người dùng và định hướng vận hành của hệ thống. Thông qua việc phân tích dữ liệu, giám sát hoạt động và đánh giá hiệu quả, họ cung cấp thông tin quan trọng giúp Admin đưa ra các quyết định quản trị chính xác. Đồng thời, Manager cũng là người đảm bảo sự cân bằng giữa lợi ích của người dùng và mục tiêu phát triển của nền tảng. Có thể nói, Manager chính là “bộ điều phối” của hệ thống, giúp toàn bộ quy trình vận hành một cách nhịp nhàng, hiệu quả và hướng tới sự phát triển bền vững. </p>
            </Modal>
        </div>
    )
}

export default ViewRoleMana