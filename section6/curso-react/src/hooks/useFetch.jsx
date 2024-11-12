import { useState, useEffect } from "react";


// 4 - custom hooks

export const useFetch = (url) => {
    const [data,setData] = useState(null)

    // 5- refatorando o POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - loading
    const[loading,setLoading] = useState(false)

    // 7 - tratando erros de request
    const [error, setError] = useState(null)

    // 8 - deletar 
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data,method) => {
        if(method === 'POST'){
            setConfig({
                method,
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
        else if(method === 'DELETE'){
            setConfig({
                method,
                headers:{
                    "Content-type": "application/json"
                }
            })
            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() => {
        const FetchData = async () => {
            // 6 - loading
            setLoading(true)
            // 7 - tratamento de erros
            try{
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
            }catch{
                setError('Houve algum erro ao carregar os dados')
                console.log(error.message)
                alert('ERRO !')
            }
            setLoading(false)
        }
        FetchData()
    }, [url,callFetch])

    // refatorando o post 
    let json = ''
    useEffect(() => {
        const httpRequest = async() =>{
            if(method === 'POST'){
                let fetchOptions = [url,config]
    
                const res = await fetch(...fetchOptions)
                const json = await res.json()
    
                setCallFetch(json)
            }else if (method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`
                const res = await fetch(deleteUrl, config)
                json = await res.json()
            }
            setCallFetch(json)
        }
        httpRequest()
    }, [config, method, url])

    return { data,httpConfig, loading, error }
}