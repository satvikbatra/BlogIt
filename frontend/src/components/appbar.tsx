import { Avatar } from "./avatar"
import { Link } from "react-router-dom"

export const AppBar = ({ name }: { name: string }) => {
    return (
        <div className="flex items-center justify-between px-8 py-3 border-b mb-4">
            <div className="flex flex-grow">
                <Link to="/blogs">
                    <div className="font-black text-2xl">BlogIt</div>
                </Link>
            </div>

            <div className="flex items-center space-x-4">
                <Link to="/publish">
                    <div className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-3 py-1">
                        Publish
                    </div>
                </Link>
                <Avatar name={name} />
            </div>
        </div>
    );
};
