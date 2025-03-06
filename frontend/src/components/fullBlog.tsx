import { Blog } from "../hooks";
import { AppBar } from "./appbar";
import { Avatar } from "./avatar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div className="min-h-screen">
            <AppBar name={blog.author.name} />
            <div className="flex flex-col md:flex-row px-6 md:px-12 lg:px-20">
                {/* Blog Content */}
                <div className="sm:basis-3/4 w-full pt-8 pr-6 pl-4 sm:pl-8">
                    <div className="text-4xl sm:text-5xl font-extrabold py-4">
                        {blog.title}
                    </div>
                    <div className="text-gray-500 text-sm">
                        Posted on {blog.date.split("T")[0]}
                    </div>
                    <div className="py-4 text-lg leading-relaxed">
                        {blog.content}
                    </div>
                </div>

                {/* Author Section */}
                <div className="sm:basis-1/4 w-full py-8 pt-10 md:pl-6">
                    <div className="text-xl font-semibold mb-2">Author</div>
                    <div className="flex items-center space-x-4">
                        <Avatar name={blog.author.name} />
                        <div className="text-lg font-bold">
                            {blog.author.name.toUpperCase()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
