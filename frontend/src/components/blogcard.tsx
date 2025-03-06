import { Link } from "react-router-dom";
import { Avatar } from "./avatar";

interface BlogCardTypes {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}

export const BlogCard = ({ authorName, title, content, publishedDate, id }: BlogCardTypes) => {
    return (
        <Link to={`/blog/${id}`} className="block">
            <div className="border-b border-b-slate-200 pb-4 mt-5 w-full max-w-4xl cursor-pointer">
                <div className="flex items-center">
                    <Avatar name={authorName} />
                    <div className="pl-2 text-sm font-extralight text-gray-700">{authorName}</div>
                    <Circle />
                    <div className="text-sm text-gray-500">{publishedDate}</div>
                </div>

                <div className="font-bold text-2xl mt-2 text-gray-900">{title}</div>

                <div className="text-md font-light text-gray-700 mt-1">
                    {content.length > 200 ? content.slice(0, 200) + "..." : content}
                </div>

                <div className="text-gray-400 text-sm font-thin pt-2">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
            </div>
        </Link>
    );
};

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-gray-400 mx-2 self-center" />;
}
