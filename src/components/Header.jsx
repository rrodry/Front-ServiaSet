import './header.css'
import setIcon from '../images/set.png'
import Cookies from 'js-cookie'
import { useNavigate  } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import {handleDecode} from '../middleware/middle'
import { isAdmin, adminPanel } from '../slices/reducerSlices/reducerSlices'
export default function Header() {
    const dispatch = useDispatch()

    useEffect( () => {
        handleDecode().then((r) => dispatch(isAdmin(r.data.isAdmin)) )
    },[dispatch])

    let admin = useSelector( (state) => state.services.adm)
    
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
                <button className="but" type='button' onClick={() => {dispatch(adminPanel(false))}}>Incio</button>
                {admin &&  <button className="but" type='button' onClick={() => {dispatch(adminPanel(true))}}> Admin Panel</button> }
            </div>
            <div className="exit">
                <button className="butEX" type='button' onClick={() => { handleLogOut() }}>SALIR</button>
            </div>
        </div>
    )
}