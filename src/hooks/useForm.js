import { useState } from "react"


export const useForm = (initialValue) => {

    const [value, setValue] = useState(initialValue);

    const handleInputChange = ({target}) => {
        setValue({...value, [target.name]: target.value})
    }
    const reset = () => {
        setValue(initialValue)
    }
    return [
        value, 
        handleInputChange,
        reset
    ]

}