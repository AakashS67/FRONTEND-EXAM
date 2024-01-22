import { useNavigate } from "react-router"

const PrivateRoute = ()=>{
    const token =  localStorage.getItem("auth")
    const navigate = useNavigate()
if(token){
    return {children}
}else {
    navigate('/login')
}
}

export default PrivateRoute