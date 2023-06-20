import { SimpleGrid, Text } from '@chakra-ui/react';
import { Platform, userGames } from '../hooks/userGames';
import GameCard from './GameCard';
import { GmaeCardSkeleton } from './GmaeCardSkeleton';
import { Genre } from '../hooks/useGenre';
import { GameQuery } from '../App';
interface Props {
    gameQuery: GameQuery
}


export const GameGrid = ({ gameQuery }: Props) => {

    const { data: games, err, isLoading } = userGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {err && <Text>{err}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={'10px'}>
                {isLoading && skeletons.map(skeleton => (
                    <GmaeCardSkeleton key={skeleton} />
                ))}
                {!isLoading && games.map(game =>
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
        </>

    )
}
