import axios from "axios"
import Cookies from "js-cookie";

 const local = "http://localhost:3001" 
// const local = "https://servset-v01-production.up.railway.app"

export async function loginM(user, setError, errorM) {
  try {
    const res = (await axios.get(`${local}/login?user=${user.userName}&pass=${user.password}`)).data
    console.log(res);
    Cookies.set("token", res)
    window.location.href = "/main"
  } catch (error) {
    console.log(error);
  }
}
export async function incrementMiddle(movil) {
  axios.post(`${local}/increment?movil=${movil}`)
}
export async function handleAddBase(el) {
  
  if(el === "" ) return

  return await axios.post(`${local}/addMovil?movilAdd=${el}`)
}
export async function handleConnect(action, iod) {
  return await axios.post(`${local}/increment?movil=${action}&iod=${iod}`)
}
export async function handleDeleteBase(action) {
  return await axios.delete(`${local}/deleteBase?movil=${action}`)
}
export async function handleEndShift(state,novedades,moviles) {
  let today = new Date()
  var date = today.getDate()
  const cookie = Cookies.get("token")
  let tokenDecode = (await axios.get(`${local}/decode?token=${cookie}`)).data.turno
  if (tokenDecode === "noche") {
    today = today.setDate(today.getDate() - 1)
    today = new Date(today)
    date = today.getDate()
  }
  await axios.post(`${local}/endShift`, {
    state,
    date,
    turno: tokenDecode,
    novedades
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  Cookies.remove("novedades")
  document.getElementById('textAreaNovedades').value = ""
}
export async function handleResetList() {
  await axios.post(`${local}/resetList`)
}
export async function handleAdmin(){
  try {
    const cookie = Cookies.get("token")
    const tokenDecode = (await axios.get(`${local}/decode?token=${cookie}`)).data.isAdmin
    return tokenDecode
  } catch (error) {
    console.log(error);
  }
}
export function handleLogOut(){
  Cookies.remove("token")
}
export async function handleDecode(){
  try {
    return await axios(`${local}/decode?token=${Cookies.get("token")}`)
  } catch (error) {
    return error
  }
}
export async function handleAllServicesAdmin(){
  try {
    return await axios(`${local}/adminPanelAll`)
  } catch (error) {
    throw error
  }
}
