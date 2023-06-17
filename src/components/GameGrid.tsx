import { SimpleGrid, Text } from '@chakra-ui/react';
import { userGames } from '../hooks/userGames';
import GameCard from './GameCard';


export const GameGrid = () => {

    const { games, err} = userGames()


    return (
        <>
            {err && <Text>{err}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={'10px'} spacing={'10px'}>
                {games.map(game =>
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
        </>

    )
}
