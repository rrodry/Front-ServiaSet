import { useSelector } from "react-redux"

export default function AdminPlanillas() {
    let keyliM = 0
    const planillasM = useSelector((state) => state.adminPanel.planillasAdmin)
    return (<>
        <div className='containerPrinMainC'>
            <div className="containerMainC">
                <div className='divList'>
                    <div className='tagM'>
                        <h4>Turno Mañana</h4>
                    </div>
                    <div className='ulDv'>
                        <ul key={keyliM++} className='ulList'>
                            {planillasM && planillasM.map(e => {
                                return e.turno === "mañana" && e.servicios.map(el => {
                                    return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.movil} </p> </li>
                                })
                            })}
                        </ul>
                        <ul key={keyliM++} className='ulListServ'>
                            {planillasM && planillasM.map(e => {
                                return e.turno === "mañana" && e.servicios.map(el => {
                                    return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.servicios} </p> </li>
                                })
                            })}
                        </ul>
                    </div>
                </div>
                <div className='divList'>
                    <div className='tagM'>
                        <h4>Turno Tarde</h4>
                    </div>
                    <div className='ulDv'>
                        <ul key={keyliM++} className='ulList'>
                            {planillasM && planillasM.map(e => {
                                return e.turno === "tarde" && e.servicios.map(el => {
                                    return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.movil} </p> </li>
                                })
                            })}
                        </ul>
                        <ul key={keyliM++} className='ulListServ'>
                            {planillasM && planillasM.map(e => {
                                return e.turno === "tarde" && e.servicios.map(el => {
                                    return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.servicios} </p> </li>
                                })
                            })}
                        </ul>
                    </div>
                </div>
                <div className='divList'>
                    <div className='tagM'>
                        <h4>Turno Tarde 2</h4>
                    </div>
                    <div className='ulDv'>
                        <ul key={keyliM++} className='ulList'>
                            {planillasM && planillasM.map(e => {
                                return e.turno === "tarde2" && e.servicios.map(el => {
                                    return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.movil} </p> </li>
                                })
                            })}
                        </ul>
                        <ul key={keyliM++} className='ulListServ'>
                            {planillasM && planillasM.map(e => {
                                return e.turno === "tarde2" && e.servicios.map(el => {
                                    return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.servicios} </p> </li>
                                })
                            })}
                        </ul>
                    </div>
                </div>
                <div className='divList'>
                    <div className='tagM'>
                        <h4>Turno Noche</h4>
                    </div>
                    <div className='ulDv'>
                        <ul key={keyliM++} className='ulList'>
                            {planillasM && planillasM.map(e => {
                                return e.turno === "noche" && e.servicios.map(el => {
                                    return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.movil} </p> </li>
                                })
                            })}
                        </ul>
                        <ul key={keyliM++} className='ulListServ'>
                            {planillasM && planillasM.map(e => {
                                return e.turno === "noche" && e.servicios.map(el => {
                                    return <li key={`liM${keyliM++}`} className='liMoviles'> <p> {el.servicios} </p> </li>
                                })
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>)
}