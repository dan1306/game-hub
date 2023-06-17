import React from "react";
import { Game } from "../hooks/userGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";


interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {

    return (
        <Card borderRadius={10} fontSize={'2xl'} overflow={'hidden'}>
            <Image src={game.background_image} />
            <CardBody>
                <Heading>
                    {game.name}
                </Heading>
            </CardBody>
        </Card>
    )    
}

export default GameCard