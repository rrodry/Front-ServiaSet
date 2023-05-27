import './header.css'
import setIcon from '../images/set.png'
import Cookies from 'js-cookie'
import { useNavigate  } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate()
    function handleLogOut(){
        Cookies.remove("token")
        navigate("/")
    }
    return(
        <div className="header">
            <div className="icon">
                <img src= {setIcon} alt="icono " className="icon107" />
            </div>
            <div className="btns">
                <button className="but" type='button'>Incio</button>
                <button className="but" type='button'>Servicios</button>
            </div>
            <div className="exit">
                <button className="butEX" type='button' onClick={() => { handleLogOut() }}>SALIR</button>
            </div>
        </div>
    )
}