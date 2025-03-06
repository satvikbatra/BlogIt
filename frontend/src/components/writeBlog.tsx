import { useState } from "react"
import { AppBar } from "./appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const WriteBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function publishBlog() {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/blog/new/`, {
                title,
                content
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })

            console.log(res)
            navigate('/blogs')
        } catch(e) {
            console.error("Error publishing blog:", e);
            alert("Can't publish blog. Please try again later.");
        }
    }

    return <div>
        <AppBar name="satvik batra" />

        <div className="flex justify-center m-6 mt-10">
            <div className="min-w-xl w-full max-w-4xl">
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Title" required onChange={(e) => {
                    setTitle(e.target.value)
                }} />

                <textarea id="message" rows={8} className="mt-4 min-h-fit block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..." onChange={(e) => {
                    setContent(e.target.value)
                }}></textarea>

                <div>
                    <button onClick={publishBlog} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2">Publish</button>
                </div>
            </div>
        </div>
    </div>
}