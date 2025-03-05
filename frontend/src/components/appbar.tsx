import { Avatar } from "./avatar"
import { Link } from "react-router-dom"

export const AppBar = ({name}: {name: string}) => {
    return <div className="flex justify-between px-8 py-3 border-b">
        <Link to='/blogs'>
            <div className="flex justify-center">BlogIt</div>
        </Link>
        <div className="">
            <Avatar name={name} />
        </div>
    </div>
}