import './login.css'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginM } from '../middleware/middle'


export default function Login() {

    const dispatch = useDispatch()

    const [errorM, setErrorM] = useState({
        error:""
    })
    const [inputSend, setInputSend] = useState({
        userName: "",
        password: ""
      })
    function handleSubmit (e){
        e.preventDefault()
        loginM(inputSend,setErrorM,errorM)
    }
    return (
        <div className="container">
            <div className="divMid row">
                <form onSubmit={ (e) => { handleSubmit(e)
                    } } method="GET">
                    <h3>SET</h3>
                        { errorM.error && <label className='alert alert-danger'> {errorM.error} </label> }
                        <input type="text" name="user" className='form-control mt-3' onChange={ (e) =>{ setInputSend( {...inputSend, userName: e.target.value} ) } } placeholder='Usuario'/>
                        <input type="text" name="pass" className='form-control mt-3' onChange={ (e) =>{ setInputSend( {...inputSend, password: e.target.value} ) } } placeholder='Contraseña'/>
                        <button type='submit' className='btn btn-primary mt-2'>Ingresar</button>
                </form>
                <a href='https://www.google.com'><p>Perdiste la contraseña?</p></a>
            </div>
        </div>
    )
}