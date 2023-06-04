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
        return await axios.get(`https://servset-v01-production.up.railway.app/getServOld`)
            .then((resp) => dispatch(getServOld(resp.data)))
    }

    const servOld = useSelector((state) => state.oldServices)

    return (
        <div className='containerPrinMainC'>

            <div className="containerMainC">
                <div key={"divLabelAddRem"} className='divLabelAddRem'>
                    {msg &&
                        <p>{msg}</p>
                    }
                </div>
                <div className='divList'>
                    <div className='tagM'>
                        <h4>Turno Mañana</h4>
                    </div>
                    <div className='ulDv'>
                        <ul key="ulMañanaPlanilla" className='ulList'>
                            {servOld && servOld.serviciosOld.map(e => {
                                if (e.turno === "mañana") {
                                    return e.state.map(el => {
                                        return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.movil} </p> </li>
                                    })
                                }
                            })}
                        </ul>
                        <ul key="ulMañanaPlanilla" className='ulListServ'>
                            {servOld && servOld.serviciosOld.map(e => {
                                if (e.turno === "mañana") {
                                    return e.state.map(el => {
                                        return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.servicios} </p> </li>
                                    })
                                }
                            })}
                        </ul>
                    </div>
                </div>
                <div className='divList'>
                    <div className='tagM'>
                        <h4>Turno Tarde</h4>
                    </div>
                    <div className='ulDv'>
                        <ul key="ulTardeAPlanilla" className='ulList'>
                            {servOld && servOld.serviciosOld.map(e => {
                                if (e.turno === "tarde") {
                                    return e.state.map(el => {
                                        return <li key={`liM${keyliM++}`} className="liMoviles"> <p> {el.movil } </p> </li>
                                    })
                                }
                            })}
                        </ul>
                        <ul key="ulTardeAPlanilla" className='ulListServ'>
                            {servOld && servOld.serviciosOld.map(e => {
                                if (e.turno === "tarde") {
                                    return e.state.map(el => {
                                        return <li key={`liM${keyliM++}`} className="liMoviles"> <p> {el.servicios } </p> </li>
                                    })
                                }
                            })}
                        </ul>
                    </div>
                </div>
                <div className='divList'>
                    <div className='tagM'>
                        <h4>Turno Tarde/noche</h4>
                    </div>
                    <div className='ulDv'>
                        <ul key="ulTardeBPlanilla" className="ulList">
                            {servOld && servOld.serviciosOld.map(e => {
                                if (e.turno === "tarde2") {
                                    return e.state.map(el => {
                                        return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.movil} </p> </li>
                                    })
                                }
                            })}
                        </ul>
                        <ul key="ulTardeBPlanilla" className="ulListServ">
                            {servOld && servOld.serviciosOld.map(e => {
                                if (e.turno === "tarde2") {
                                    return e.state.map(el => {
                                        return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.servicios} </p> </li>
                                    })
                                }
                            })}
                        </ul>
                    </div>
                </div>
                
                <div className='divList'>
                    <div className='tagM'>
                        <h4>Turno noche</h4>
                    </div>
                    <div className='ulDv'>
                        <ul key="ulNochePlanilla" className='ulList'>
                            <div className='divLi'>
                                {servOld && servOld.serviciosOld.map(e => {
                                    if (e.turno === "noche") {
                                        return e.state.map(el => {
                                            return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.movil} </p> </li>
                                        })
                                    }
                                })}
                            </div>
                        </ul>
                        <ul key="ulNochePlanilla" className='ulListServ'>
                            <div className='divLi'>
                                {servOld && servOld.serviciosOld.map(e => {
                                    if (e.turno === "noche") {
                                        return e.state.map(el => {
                                            return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.servicios} </p> </li>
                                        })
                                    }
                                })}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='novedadesDv'>
                <div className='listaNovedades'>
                    <div className='titleNov'>
                        <p>Novedades del Turno</p>
                    </div>
                    <div className='novedades'>
                        <ul className='ulNovedades'>
                            {servOld && servOld.serviciosOld.map(e => { return <li key={"liNovedades" + keyliM++}> {e.novedades}</li> })}
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