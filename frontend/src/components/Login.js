import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import Forgot from "./Forgot"
const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("")
    const [passward, setpassward] = useState("")
    const [modalShow, setModalShow] = React.useState(false);
    const handle = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "passward": passward
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result === 'Login'){
                    navigate('/home');
                }else{
                    alert('email and password wrong')
                }
            })
            .catch(error => console.log('error', error));
    }
    return (

        < div >
            <section className='login' >
                <div className='container mt-5' style={{ border: "2px #a6e7ff solid", display: "block", width: '800px', boxShadow: '10px 10px 8px #888888' }}>
                    <div className='signup-content' style={{ display: 'flex', alignitem: "center", justifyContent: "center" }}>
                        <div className='signup-form'>
                            <h1 className='form-group' style={{ fontSize: "30px" }}> login </h1>
                            <form className='register-form' id="register-form">



                                <div className='form-group'>
                                    <label htmlFor='email'><i class="zmdi zmdi-email material-icons-name"></i></label>
                                    <input type="email" name="email" id="email" placeholder='Your Email' onChange={(e) => setemail(e.target.value)} />

                                </div>

                                <div className='form-group'>
                                    <label htmlFor='password'><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="password" name="password" id="phone" placeholder='Your password' onChange={(e) => setpassward(e.target.value)} />
                                           
                                </div>

                                 <p><a  onClick={() => setModalShow(true)}> Forgot Passward? </a></p>
                                <button type="button" class="btn btn-primary" onClick={handle} >login</button>
                                <br />
                                <Link to="/"> <p><a>not have an account</a></p></Link>



                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Forgot
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div >
    )
}

export default Login;
