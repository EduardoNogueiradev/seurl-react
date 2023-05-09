import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from '../lib/axios'


export function LinkRedirect() {
    const { code } = useParams();
    const [ resposta, setResposta ] = useState({})

    useEffect(() => {
        async function fetchData() {
            api.post('shortlink', {
                code
            }).then(response => (setResposta(response.data[0])))
        }

        fetchData()
    }, [code])

    return (
        <p style={{fontSize: "40px"}}>{`${resposta.url}`}</p>
    )
}