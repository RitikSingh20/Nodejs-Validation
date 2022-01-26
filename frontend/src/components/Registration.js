import React, { Component, useState,useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
 
import emailjs from '@emailjs/browser';






function Registration({userData}) {
    const navigate = useNavigate();

    const [allData, setAllData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        cP:''
    })


    const [otp,setotp] = useState('')
    const [userotp,setuserotp] = useState('')

    useEffect (()=> {
        const otp = Math.floor(1000 + Math.random() * 9000);
        setotp(otp)
    }, [])


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_i8f6wcs', 'template_ap0w1hg', e.target, 'user_pPXbhWpxczTxB3o8PgeCP')
        .then((result) => {
            console.log(result.text);
            document.getElementById('show2').style.display = 'block' 
            document.getElementById('register-form').style.display = 'none' 
        }, (error) => {
            console.log(error.text);
        });
    };


    const handlshow = (e) => {
        const { name, value } = e.target;
        setAllData(prastate => (
            {
                ...prastate,
                [name]: value
            }
        ))
    }

    const sendData = () => {
        const {firstname, lastname, email, password, phone, cP } = allData

        if(password === cP ){

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            var raw = JSON.stringify({
                "name": firstname,
                "lastname":lastname,
                "email": email,
                "passward": password,
                "phone":phone
            });
    
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
    
            fetch("http://localhost:3001/res", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if(result === 'Successfully'){
                        alert('Success')
                        navigate('/home');
                        userData(firstname,lastname, email, phone)
                    }else{
                        alert('you are already registered')
                    }
                })
                .catch(error => console.log('error', error));
        }
        else {
            alert('password not matched')
        }
    }

    const verify =() => {
        console.log(otp);
        console.log(userotp)
        if( userotp == otp){
            alert("success")
            sendData()
        } else{
            alert("Wrong otp")
        }
    
        
    }

    return (
        <>
        {/* <div>
            <form ref={form} onSubmit={sendEmail}>
             <input type="email"  ></input>
                <input name='otp' value={otp}   ></input>
                <button type="submit">s</button>
            </form>
            <div>
              <input name='otp' required onChange={(e) => setuserotp(e.target.value)}></input>
              <button type="button" onClick={()=>verify()}> submit</button>
            </div>


        </div> */}


            <section className='signup' >
                <div className='container mt-5' style={{ border: "2px #a6e7ff solid", display: "block", width: '800px', boxShadow: 'yellow' }}>
                    <div className='signup-content' style={{ display: 'flex', alignitem: "center", justifyContent: "center" }}>
                        <div className='signup-form'>
                            <h1 className='form-group' style={{ fontSize: "30px" }}>registration </h1>
                            <form ref={form} onSubmit={sendEmail} className='register-form' id="register-form" style={{display:'block'}}>

                                <div className='form-group'>
                                    <label htmlFor='name'><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="name" name="firstname" value={allData.firstname} id="firstname" placeholder='Your Name' onChange={handlshow} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor='name'><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="name" name="lastname" value={allData.lastname} id="lastname" placeholder='Your Last Name' onChange={handlshow} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'><i class="zmdi zmdi-email material-icons-name"></i></label>
                                    <input type="email" name="email" value={allData.email} id="email" placeholder='Your Email' onChange={handlshow} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor='phone'><i class="zmdi zmdi-phone-in-talk material-icons-name"></i></label>
                                    <input type="phone" name="phone" value={allData.phone} id="phone" placeholder='Your Phone' onChange={handlshow} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="password" name="password" value={allData.password} id="phone" placeholder='Your password' onChange={handlshow} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor='cpassword'><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="password" name="cP" id="cphone" placeholder=' Confirm Your password' onChange={handlshow} />

                                </div>
                                <input type="text" name="otp"  value={otp}  hidden/>
                                <button type="submit" class="btn btn-primary">registration</button>
                                {/* <button   class="btn btn-primary" onClick={() => verify()}>reg</button> */}
                                <br />
                                <Link to="/login">
                                <p><a>already have an account</a></p>
                                </Link>
                               


                            </form>
                        </div>
                        <div>
                        <div className='form-group' style={{display:'none'}} id='show2'>
                                    <label htmlFor='enter otp'><i class="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="text" name="userotp"  id="phone" placeholder='Your otp' onChange={(e)=>setuserotp(e.target.value)} />
                                    <button type="button" class="btn btn-primary" onClick={verify}>registration</button>

                                </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Registration
