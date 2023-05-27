import { useEffect, useState } from 'react'
import './mainC.css'
import { useDispatch, useSelector } from 'react-redux'
import { getServOld, disNovedades } from '../slices/reducerSlices/reducerServices'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function MainC() {
    let keyliM = 0
    const msg = useSelector((state) => state.services.msg)

    const dispatch = useDispatch()
    useEffect(() => {
        getServOldFun()
    }, [dispatch])
    async function getServOldFun() {
        return await axios.get(`http://localhost:3001/getServOld`)
            .then((resp) => dispatch(getServOld(resp.data)))
    }

    const servOld = useSelector((state) => state.oldServices)
    console.log(servOld);

    return (
        <div className='containerPrinMainC'>

            <div className="containerMainC">
                <div key={"divLabelAddRem"} className='divLabelAddRem'>
                    {msg &&
                        <p>{msg}</p>
                    }
                </div>
                <ul key="ulMañanaPlanilla" className='ulMañana'>
                    <li key={"tagTM"} className='tagM'><p>Turno Mañana</p></li>
                    {servOld && servOld.serviciosOld.map(e => {
                        if (e.turno === "mañana") {
                            return e.state.map(el => {
                                return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.movil + " " + el.servicios} </p> </li>
                            })
                        }
                    })}
                </ul>
                <ul key="ulTardeAPlanilla" className='ulTarde'>
                    <li key={"tagTT"} className='tagM'><p>Turno TardeA</p></li>
                    {servOld && servOld.serviciosOld.map(e => {
                        if (e.turno === "tarde") {
                            return e.state.map(el => {
                                return <li key={`liM${keyliM++}`} className="liMoviles"> <p> {el.movil + " " + el.servicios} </p> </li>
                            })
                        }
                    })}
                </ul>
                <ul key="ulTardeBPlanilla" className="ulTardeB">
                    <li key={"tagTT2"} className='tagM'><p>Turno TardeB</p></li>
                    {servOld && servOld.serviciosOld.map(e => {
                        if (e.turno === "tarde2") {
                            return e.state.map(el => {
                                return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.movil + " " + el.servicios} </p> </li>
                            })
                        }
                    })}
                </ul>
                <ul key="ulNochePlanilla" className='ulNoche'>
                    <li key={"tagTN"} className='tagM'><p>Turno Noche</p></li>
                    {servOld && servOld.serviciosOld.map(e => {
                        if (e.turno === "noche") {
                            return e.state.map(el => {
                                return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.movil + " " + el.servicios} </p> </li>
                            })
                        }
                    })}
                </ul>
            </div>
            <div className='novedadesDv'>
                <div className='listaNovedades'>
                    <div className='titleNov'>
                        <p>Novedades del Turno</p>
                    </div>
                    <div className='novedades'>
                        <ul className='ulNovedades'>
                            {servOld && servOld.serviciosOld.map(e => {return <li key={"liNovedades"+keyliM++}> {e.novedades}</li>})}
                        </ul>
                    </div>
                </div>
                <div className='dvTextArea'>
                    <textarea id='textAreaNovedades' placeholder='Ingresar Novedades...' name='textAreaNov' value={Cookies.get("novedades")} onChange={
                        e => {
                            dispatch(disNovedades(e.target.value))
                            Cookies.set("novedades", e.target.value)
                        }} ></textarea>
                </div>
            </div>
        </div>
    )
}