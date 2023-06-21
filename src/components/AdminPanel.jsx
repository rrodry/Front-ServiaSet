import { useEffect } from "react"
import { handleAllServicesAdmin } from '../middleware/middle'
import { adminPlanillas, showPlanillaAdm } from '../slices/reducerSlices/reducerAdmin'
import { useDispatch, useSelector } from "react-redux"

export default function AdminPanel() {
    const dispatch = useDispatch()
    useEffect(() => {
        handleAllServicesAdmin()
        .then( (r) => dispatch(adminPlanillas(r.data)))
    },[dispatch])
    const planillas = useSelector((state) => state.adminPanel)
    function handleAdminDay(diaAdm){
        const planillaAdm = planillas.planillas.map( (e) =>  e.dia === diaAdm && e)
        dispatch(showPlanillaAdm(planillaAdm))
    }
    return (<>
        {planillas.planillas && planillas.planillas.map( (e) => { 
            return <li onClick={ (e) => { handleAdminDay (e.target.value)}} value={e.dia}> Dia: {e.dia} </li>
        })}
    </>)
}