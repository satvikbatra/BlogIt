import { BlogCard } from "../components/blogcard"
import { AppBar } from "../components/appbar"
import { useBlogs } from "../hooks"

export const Blogs = ({}) => {
    const {loading, blogs} = useBlogs();

    if(loading) {
        return <div>
            Loading...
        </div>
    }

    return <div>
        <AppBar name="satvik batra" />
        <div className="flex justify-center">
            <div className="flex justify-center flex-col max-w-2xl">
                {blogs.map(blog => <BlogCard 
                    key={blog.id}
                    authorName={blog.author.name} 
                    publishedDate="01-03-2025" 
                    title={blog.title}
                    content={blog.content}
                    id={blog.id}
                />)}
            </div>
        </div>
    </div>
}