import { useEffect, useState } from "react"
import apiClinents from '../services/api-clients'
import { CanceledError } from "axios";


export interface Platform {
    id: number;
    name: string;
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[]
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}


export const userGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [err, setErr] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        apiClinents.get<FetchGameResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if(err instanceof CanceledError) return

                setErr(err.message)
            })
        
        return ()=> controller.abort()
    }, [])

    return { games, err }
}
