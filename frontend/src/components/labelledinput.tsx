import { ChangeEvent } from "react"

interface LabelledInputType {
    label: string,
    placeholder: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string
}

export const LabelledInput = ({label, placeholder, onchange, type}: LabelledInputType) => {
    return <div>
        <div>
            <label className="block mb-2 text-lg font-bold text-gray-900 pt-4">{ label }</label>
            <input onChange={onchange} type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    </div>
}