import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface Iprops {
    isModalOpenAdmin: any
    setIsModalOpenAdmin: any
}
const ViewRoleAdmin: React.FC<Iprops> = ({ isModalOpenAdmin, setIsModalOpenAdmin }) => {


    const handleOk = () => {
        setIsModalOpenAdmin(false);
    };

    const handleCancel = () => {
        setIsModalOpenAdmin(false);
    };

    return (
        <>
            <Modal
                title="Chi tiết vai trò Admin"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenAdmin}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1200}
                footer={null}
            >
                <p>
                    Vai trò <b>Admin</b> được xem là người quản trị cao nhất trong hệ thống, giữ quyền điều phối toàn bộ dữ liệu và chức năng. Không chỉ dừng lại ở việc quản lý người dùng, công ty hay công việc, Admin còn có khả năng can thiệp vào mọi thành phần cốt lõi của ứng dụng. Họ có quyền tạo mới, chỉnh sửa, xóa dữ liệu, đồng thời thiết lập phân quyền chi tiết cho các nhóm vai trò khác như Manager hay User. Nhờ vào đặc quyền toàn diện này, Admin đảm bảo rằng các quy tắc vận hành luôn được tuân thủ, hệ thống được duy trì một cách tập trung và nhất quán, hạn chế tối đa sai sót phát sinh từ việc phân tán quyền quản lý. Có thể nói, Admin chính là "trái tim" của hệ thống, nơi mọi quyết định quản trị quan trọng được hình thành và triển khai.
                </p>
                <br></br>
                <hr></hr>
                <br></br>

                <p>
                    Song song với việc quản lý dữ liệu, Admin còn đóng một vai trò không thể thiếu trong công tác giám sát và đảm bảo an toàn bảo mật của hệ thống. Họ chịu trách nhiệm theo dõi hoạt động của toàn bộ người dùng, kịp thời phát hiện những hành vi bất thường như truy cập trái phép, chỉnh sửa dữ liệu không hợp lệ hay cố tình khai thác lỗ hổng bảo mật. Khi có sự cố xảy ra, Admin chính là tuyến phòng thủ đầu tiên, trực tiếp xử lý hoặc đưa ra các biện pháp khắc phục phù hợp. Ngoài ra, Admin còn thiết lập các chính sách bảo mật, phân quyền hợp lý và áp dụng các quy chuẩn kỹ thuật nhằm bảo vệ dữ liệu quan trọng trước nguy cơ rò rỉ hoặc bị xâm nhập trái phép. Chính nhờ vai trò này, hệ thống không chỉ vận hành an toàn, mà còn tạo dựng được sự tin cậy bền vững trong mắt người dùng.
                </p>
                <br></br>
                <hr></hr>
                <br></br>
                <p>
                    Không chỉ dừng lại ở việc quản lý và bảo mật, Admin còn giữ vai trò như một cầu nối quan trọng giữa người dùng và hệ thống. Họ thường xuyên tiếp nhận phản hồi từ người dùng, giải đáp thắc mắc liên quan đến quá trình sử dụng và hỗ trợ kỹ thuật khi có sự cố phát sinh. Trong nhiều trường hợp, Admin chính là người đại diện cho hệ thống, giúp người dùng cảm thấy yên tâm và tin tưởng khi sử dụng dịch vụ. Đồng thời, Admin còn có trách nhiệm đào tạo, hướng dẫn những người quản lý cấp dưới (Manager) cũng như cung cấp thông tin kịp thời cho các bộ phận khác để đảm bảo sự phối hợp trơn tru. Với vai trò đa dạng và bao quát này, Admin không chỉ góp phần duy trì trải nghiệm ổn định, nâng cao sự hài lòng của người dùng, mà còn đóng góp tích cực vào sự phát triển bền vững và lâu dài của toàn bộ ứng dụng.
                </p>
            </Modal>
        </>
    );
};

export default ViewRoleAdmin;