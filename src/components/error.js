import { useRouteError } from "react-router"

const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
        <div>URL Not Found. Please try again </div>
        <div>{err.status}</div>
        </div>
    )
}
export default Error