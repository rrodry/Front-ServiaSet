import { useEffect, useState } from 'react'
import './mainB.css'
import { useDispatch, useSelector } from 'react-redux'
import { getServ, increment, addBase, deleteBase } from '../slices/reducerSlices/reducerSlices'
import axios from 'axios'
import { handleAddBase, handleDeleteBase, handleEndShift, handleResetList } from '../middleware/middle'
import iconReset from '../images/reset.png'

export default function MainB() {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('http://18.232.48.97:3001/services')
            .then((response) => dispatch(getServ(response.data)))
    }, [dispatch])
    const serv = useSelector((state) => state.services.moviles)
    const novedades = useSelector((state) => state.oldServices.novedades)
    


    let movilKey = 0
    let servKey = 0
    let btnsKey = 0

    const [base, setBase] = useState({
        base:""
    })
    async function handleConnect(action, iod) {
        const res = await axios.post(`http://18.232.48.97:3001/increment?movil=${action}&iod=${iod}`)
        if (!iod) {
            document.getElementsByClassName("divLabelAddRem")[0].style.background = "rgb(255, 73, 73)"
        } else document.getElementsByClassName("divLabelAddRem")[0].style.background = "rgb(92, 247, 92)"
            document.getElementsByClassName("divLabelAddRem")[0].style.opacity = "1"
        setTimeout(() => {
            document.getElementsByClassName("divLabelAddRem")[0].style.opacity = "0"
        }, 1500)

        return res
    }
    return (
        <div className='containerPrincipalMainB'>
            <div className="containerMainB">
            <button className="btnReset" onClick={() => { handleResetList() }}><img src={iconReset} className='iconReset'></img></button>
                <ul className='ulOper' key={"ulMovil"}>
                    <li key={"TagMovil"} className='tagMovil'>
                        <p>Movil</p>
                    </li>
                    {serv && serv.map(e => {
                        return <li key={`movil${movilKey++}`} className='listMoviles'> {e.movil} </li>
                    })}
                </ul>
                <ul className='ulServicios' key={"ulServicios"}>
                    <li key={"TagServ"} className='tagMovil'>
                        <p>Servicios</p>
                    </li>
                    {serv && serv.map(e => {
                        return <li key={`serv${servKey++}`} className='listMoviles'>  {e.servicios} </li>
                    })}
                </ul>
                <ul className="ulBtns" key={"ulBtns"}>
                    <li key={"TagBtns"} className='tagMovil'><p>Agregar o Quitar</p></li>
                    {serv && serv.map(e => {
                        return <li key={`li${btnsKey++}`} className='listMoviles'><button key={"btn1"} className='btnIncrement ' name={e.movil} onClick={(el) => { handleConnect(el.target.name,true).then((res) => dispatch(increment(res.data))) }} >+</button><button key={"btn2"} name={e.movil}  className='btnDecrement' onClick={(el) => { handleConnect(el.target.name,false).then((res) => dispatch(increment(res.data))) }}>-</button>
                        <button className='deleteBase' onClick={ (e) => { handleDeleteBase(e.target.name).then(dispatch(deleteBase(e.target.name))) } } name={e.movil}>X</button>
                        </li>
                    })}
                </ul>
            </div>

            <div className="containerMainBBtns" key={"divInputAdd"}>
                
                <input type="text" name="addMovil" onChange={ (e) =>{ setBase( {...base, base: e.target.value} ) } }/>
                <button name={base.base} onClick={ (e) => { handleAddBase(e.target.name).then((r) => dispatch(addBase(r.data))) } } >Agregar Base</button>
                <button onClick={ () => { handleEndShift(serv,novedades) }}>Finalizar Turno</button>
                
            </div>
        </div>
    )
}