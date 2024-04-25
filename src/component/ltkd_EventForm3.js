import React, { Component } from 'react';

class ltkd_EventForm3 extends Component {
    constructor(props) {
        super(props);
        // Tạo đối tượng dữ liệu thông qua state
        this.state = {
            Name: "Lê Trần Khánh Duy",
            Job: "Boss SuperMarket"
        };
    }

    // Hàm xử lý sự kiện
    handleChangeName = () => {
        this.setState({
            Name: "I'm Boss"
        });
    };

    handleChangeJob = () => {
        this.setState({
            Job: "WibuKing"
        });
    };

    render() {
        return (
            <div className='alert alert-primary'>
                <h2>Thay đổi dữ liệu trong state</h2>
                <p>Dữ liệu: {this.state.Name} - {this.state.Job}</p>
                <button onClick={this.handleChangeName}>Thay đổi Name</button>
                <button onClick={this.handleChangeJob}>Thay đổi Job</button>
            </div>
        );
    }
}

export default ltkd_EventForm3;
