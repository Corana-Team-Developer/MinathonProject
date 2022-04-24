import axios from 'axios'
import { useState } from 'react'

const useHttp = () => {
    const [error, setError] = useState(null)
    const sendRequest = async (request,handleResponseData) => {
        try{
            const res = await axios({
                method: request.method?request.method :"GET",
                url: request.url,
                data: request.data? request.data: null,
                headers: request.headers? request.headers : {}
            })
            handleResponseData(res.data)
        }
        catch(err){
            console.log(err.response)
            setError(err.response)
        }
    }
    return {
        error,
        sendRequest
    }
}

export const useAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export default useHttp