import { Quote } from "../components/quote"
import { Auth } from "../components/auth"

export const Signin = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signin"></Auth>
            </div>
            <div className="hidden lg:block">
                <Quote></Quote>
            </div>
        </div>
    </div>    
}