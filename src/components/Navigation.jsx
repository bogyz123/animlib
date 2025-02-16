import { useNavigate } from "react-router"
import logo from "../assets/a-logo.png";

export default function Navigation()
{
    const nav = useNavigate();
    return (
      <div className="fixed mt-1 ml-1 z-50 top-0 left-0  w-16 h-16 cursor-pointer " onClick={() => nav("")}>
       <img src={logo}/>
       </div>
    )
}