import './main.css'
import Cookies from "js-cookie"
import { Navigate } from "react-router-dom";
import Header from './Header'
import MainB from './MainB';
import MainC from './MainC'
import AdminPanel from './AdminPanel'
import AdminPlanillas from './AdminPlanillas'
import { useSelector } from 'react-redux';
export default function Main() {
    const token = Cookies.get("token")
    const panel = useSelector( (state) => state.services.adminPanel)
    return (
        <div className="containerMain">
            {!panel ? 
            <>
            
            {!token && <Navigate to="/" replace={true} />}
                <div className="hd"><Header /></div> 
                <div className="mn"><MainB /></div>
                <div className="sd"><MainC /></div>
            </>
            : 
            <>
                <div className="hd"><Header /></div> 
                <div className='adminPanelServ'><AdminPanel/></div>
                <div className='adminPanelPlanilla'><AdminPlanillas/></div>
            </>}
        </div>
    )
}