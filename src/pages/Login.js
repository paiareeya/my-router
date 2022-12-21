import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"
import DataLogin from "../components/DataLogin";

const Login = ({ props }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState({
        Name: '',
        Email: ''
    });

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name, email);
        if (!name || !email) return;
        props({ name: name, email: email });

        const send = {
            Name: name,
            Email: email
        }
        setData(send)
        // console.log(data);
        navigate('/dashbord');


    }

    const aaaa = () => {
        console.log("dddddddd");
    }

    return (

        <section className="login">
            <h2>Login</h2>
            <div className="form-login">
                <div className="form-row">
                    <label htmlFor="name" className="form-label">Username</label> <br />
                    <input type='text' className="form-input" id='name'
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div> <br />
                <div className="form-row">
                    <label htmlFor="name" className="form-label">Email</label> <br />
                    <input type='email' className="form-input" id='email'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div> <br />
                <NavLink className="btn-submit" onClick={(e) => handleSubmit(e)}>Login</NavLink>
            </div><br /><br /><br /><br /><br />
            <DataLogin SendData={data} sendLog={aaaa} />
        </section>


    );
};

export default Login;