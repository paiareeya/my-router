import { Component } from "react";

class DataLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            uer: 'Hiii',
            email: ''
        }
        this.hello = {
            Pdd: "aa",

        }

    }

    render() {
        console.log(this.props.SendData);
        return (
            <div>
                <p>Uername : {this.props.SendData.Name} </p>
                <p>Email : {this.props.SendData.Email}</p>
                <button className="btn-add" onClick={() => { this.props.sendLog() }}>OK</button>
                {/* <p>All : {this.props.SendData}</p> */}

            </div>
        )
    }
}


export default DataLogin;