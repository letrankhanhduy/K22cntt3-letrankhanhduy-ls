import React, { Component } from 'react';

class ltkd_EventForm extends Component {

  //Hàm xử lý sự kiện
  eventHandleClick1 = () => {
    alert("Event handle 1");
  }

  eventHandleClick2() {
    alert("Event Click 2");
  }

  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event handle</h2>
        {/* Sửa đổi đoạn này để chỉ truyền tham chiếu */}
        <button onClick={this.eventHandleClick1}>Click1</button>
        {/* Giữ nguyên phần này */}
        <button onClick={this.eventHandleClick2}>Click2</button>
      </div>
    );
  }
}

export default ltkd_EventForm;
