import { useState } from "react"
import { LabelledInput } from "./labelledinput"
import { SigninInput } from "@satvikbatra/blogit/dist"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"

export const SigninForm = () => {
    const navigate = useNavigate();

    const [postInput, setPostInput] = useState<SigninInput>({
        username: "",
        password: ""
    })

    async function sendRequest() {
        try {
            console.log(BACKEND_URL)
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInput);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        } catch(e) {
            console.log(e)
        }
    }

    return <div>
        <LabelledInput label="Username" placeholder="satvikbatra1@gmail.com" onchange={(e) => {
            setPostInput({
                ...postInput,
                username: e.target.value
            })
        }} />
        <LabelledInput label="Password" type="password" placeholder="123456" onchange={(e) => {
            setPostInput({
                ...postInput,
                password: e.target.value
            })
        }} />
        <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign In</button>
    </div>
}
