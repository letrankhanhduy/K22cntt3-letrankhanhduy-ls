import React, { Component } from 'react';

class ltkd_EventForm4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "kDyy"
        };
    }

    handelGetName = () => {
        alert(this.props.Name);
        // Không nên cố gắng gán giá trị props vào state
        // this.setState({
        //     Name: this.props.Name
        // });
    };

    render() {
        return (
            <div className='alert alert-info'>
                <h2>Lấy dữ liệu từ props</h2>
                <button onClick={this.handelGetName}>Get Name</button>
                {/* Sử dụng trực tiếp giá trị của state */}
                <h2>Welcome to, {this.state.Name}</h2>
            </div>
        );
    }
}

export default ltkd_EventForm4;
