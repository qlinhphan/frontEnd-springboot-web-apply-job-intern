import { Modal } from "antd"
import React from "react";

interface Iprops {
    setIsModalOpenUser: any,
    isModalOpenUser: any
}
const ViewRoleUser: React.FC<Iprops> = ({ setIsModalOpenUser, isModalOpenUser }) => {

    const handleOk = () => {
        setIsModalOpenUser(false);
    };

    const handleCancel = () => {
        setIsModalOpenUser(false);
    };
    return (
        <div>
            <Modal
                title="Chi tiết vai trò User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenUser}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1200}
                footer={null}
            >
                <p> Vai trò <b>User</b> được xem là người sử dụng trực tiếp các chức năng mà hệ thống cung cấp. User là trung tâm của mọi hoạt động, bởi mọi tính năng, dữ liệu và quy trình đều được xây dựng nhằm phục vụ trải nghiệm của họ. Người dùng có thể tạo tài khoản, cập nhật thông tin cá nhân, tìm kiếm công việc, nộp đơn ứng tuyển hoặc thực hiện các thao tác phù hợp với quyền hạn được cấp. Dù không có quyền quản trị sâu như Admin hay Manager, nhưng chính sự tương tác của User mới phản ánh giá trị thực tế và hiệu quả của toàn bộ hệ thống. </p> <br></br> <hr></hr> <br></br> <p> Ngoài việc sử dụng các chức năng cơ bản, User còn góp phần quan trọng trong việc duy trì và cải thiện chất lượng hệ thống thông qua phản hồi, đánh giá hoặc báo cáo sự cố. Những đóng góp này giúp đội ngũ quản trị kịp thời phát hiện và điều chỉnh các vấn đề phát sinh, đồng thời nâng cao mức độ thân thiện, an toàn và ổn định của nền tảng. Mỗi hành động của User, từ đăng nhập, tra cứu đến tương tác, đều là một phần của chuỗi dữ liệu giúp hệ thống vận hành mượt mà và ngày càng hoàn thiện hơn. </p> <br></br> <hr></hr> <br></br> <p> User cũng đóng vai trò là cầu nối giữa nhu cầu thực tế và năng lực của hệ thống. Thông qua việc sử dụng thường xuyên, họ cung cấp dữ liệu và thông tin đầu vào giúp các bộ phận khác — như Manager hay Admin — phân tích, đánh giá và tối ưu quy trình. Đồng thời, User chính là đối tượng được bảo vệ và phục vụ, được đảm bảo quyền truy cập an toàn, thông tin cá nhân được bảo mật và trải nghiệm sử dụng liền mạch. Có thể nói, User chính là “nguồn sống” của hệ thống, là yếu tố không thể thiếu để duy trì sự phát triển và thành công lâu dài của ứng dụng. </p>
            </Modal>
        </div>
    )
}

export default ViewRoleUser