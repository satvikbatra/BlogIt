import { BlogCard } from "../components/blogcard"
import { AppBar } from "../components/appbar"
import { useBlogs } from "../hooks"

export const Blogs = ({}) => {
    const {loading, blogs} = useBlogs();

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen text-lg">Loading...</div>;
    }

    return <div>
        <AppBar name="satvik batra" />
        <div className="flex justify-center">
            <div className="flex justify-center flex-col max-w-4xl mx-6 sm:mx-6 md:mx-8 lg:mx-auto">
                {blogs.map(blog => <BlogCard 
                    key={blog.id}
                    authorName={blog.author.name} 
                    publishedDate={blog.date.split("T")[0]} 
                    title={blog.title}
                    content={blog.content}
                    id={blog.id}
                />)}
            </div>
        </div>
    </div>
}