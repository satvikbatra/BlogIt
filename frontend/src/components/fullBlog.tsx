import { Blog } from "../hooks"
import { AppBar } from "./appbar"
import { Avatar } from "./avatar"

export const FullBlog = ({blog}: {blog: Blog}) => {
    return <div>
        <AppBar name={blog.author.name} />
        <div className="flex flex-row">
            <div className="basis-2/3 pl-25 pt-15">
                <div className="text-5xl font-extrabold py-4">
                    {blog.title}
                </div>
                <div>
                    Posted on 06-03-2025
                </div>
                <div className="py-4">
                    {blog.content}
                </div>
            </div>
            <div className="basis-1/3 p-15">
                <div className="my-2">
                    Author
                </div>
                <div className="flex">
                    <div className="pr-4">
                        <Avatar name={blog.author.name} />
                    </div>
                    <div className="flex justify-center text-lg font-bold">
                        {blog.author.name.toLocaleUpperCase()}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
}