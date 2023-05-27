import './main.css'
import Cookies from "js-cookie"
import { Navigate } from "react-router-dom";
import Header from './Header'
import MainB from './MainB';
import MainC from './MainC'
import Footer from './Footer'
import { useEffect, useState } from 'react';
export default function Main() {
    const token = Cookies.get("token")
    const [hour, sethour] = useState({
        hour: 0,
        minutos: 0
    })
    useEffect(() => {
        const interval = setInterval(() => {
            let currentDayEff = new Date()
            let hourCurrent = currentDayEff.getHours()
            let minutesCurrent = currentDayEff.getMinutes()
            if(hourCurrent == 11  || hourCurrent == 17 || hourCurrent == 23 || hourCurrent == 6 && minutesCurrent > 55 ){
                alert("Hora del Cierre!")
            }
        }, 1000 * 60)
    })
    return (
        <div className="containerMain">
            {!token && <Navigate to="/" replace={true} />}
            <div className="hd"><Header /></div>
            <div className="mn"><MainB /></div>
            <div className="sd"><MainC /></div>
        </div>
    )
}