import Login from './Login'
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
export default function LandingPage() {
    const token = Cookies.get('token')

    return (
        <div className="container">
            <div>
                {token && <Navigate to="/main" replace={true} />}
                <Login/>
            </div>
        </div>
    )
}