import React from 'react';

export default function ltkd_EventForm2() {
    // Định nghĩa các hàm xử lý sự kiện
    const eventHandleClick1 = (content) => {
        console.log('============================');
        console.log(content);
        console.log('============================');
    }

    return (
        <div className='alert alert-success'>
            <h2>Event Demo - Function Component</h2>
            {/* Sửa đổi đoạn này để chỉ truyền tham chiếu */}
            <button onClick={() => eventHandleClick1("Lê Trần Khánh Duy")}>Gọi khi render</button>
            {/* Giữ nguyên phần này */}
            <button onClick={() => eventHandleClick1("K22CNT3-ReactJs")}>Gọi khi Click</button>
        </div>
    )
}
