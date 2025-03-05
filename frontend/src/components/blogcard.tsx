import { Link } from "react-router-dom"
import { Avatar } from "./avatar"

interface BlogCardTypes {
    authorName: string,
    title: string, 
    content: string,
    publishedDate: string,
    id: string
}

export const BlogCard = ({authorName, title, content, publishedDate, id}: BlogCardTypes) => {
    return <Link to={`/blog/${id}`}>
    <div className="border-b border-b-slate-200 pb-4 mt-5 min-w-xl cursor-pointer">
        <div className="flex">
            <Avatar name={authorName} />
            <div className="flex justify-center flex-col fond-extralight pl-2 text-sm">
                {authorName}
            </div>
            <div className="flex justify-center flex-col px-2">
                <Circle />
            </div>
            <div className="flex justify-center flex-col font-thin font-slate-200 text-slate-500 text-sm">
                {publishedDate}
            </div> 
        </div>
        <div className="font-bold text-2xl">
            {title}
        </div>
        <div className="text-md font-light">
            {(content.length > 200) ? content.slice(0, 200) + "..." : content}
        </div>
        <div className="text-slate-400 text-sm font-thin pt-2">
            {`${Math.ceil(content.length / 100)} min read`}
        </div>
    </div>
    </Link>
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-400" />
}
