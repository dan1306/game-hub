import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface Props {
    gameQuery: GameQuery
}

export const GameHeading = ({ gameQuery }: Props) => {
    //Games
    //Action Games
    //Xbox Games

    const heading = `${gameQuery.genre?.name || ''} ${gameQuery.platform?.name || ''}`
    
    return (
        <Heading as='h1' marginY={5} fontSize={'5xl'}>
            {heading}
        </Heading>
    )
}
