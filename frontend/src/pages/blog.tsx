import { useParams } from "react-router-dom";
import { FullBlog } from "../components/fullBlog";
import { useBlog } from "../hooks";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if(loading) {
        return <div>
            loading...
        </div>
    }

    if(!blog) {
        return <div>
            Blog not found.
        </div>
    }

    return <div>
        <FullBlog blog={blog}/>
    </div>   
}