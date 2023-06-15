import React, { useEffect, useState } from 'react'
import apiClinents from '../services/api-clients'
import { Text } from '@chakra-ui/react';

interface Game {
    id: number;
    name: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}


export const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [err, setErr] = useState('')

    useEffect(() => {
        apiClinents.get<FetchGameResponse>('/games').then(res => setGames(res.data.results)).catch(err => setErr(err.message))
    }, [])

    return (
        <>
            {err && <Text>{err}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>

    )
}
