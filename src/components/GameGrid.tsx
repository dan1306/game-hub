import { SimpleGrid, Text } from '@chakra-ui/react';
import { userGames } from '../hooks/userGames';
import GameCard from './GameCard';
import { GmaeCardSkeleton } from './GmaeCardSkeleton';
import { Genre } from '../hooks/useGenre';

interface Props {
    selectedGenre: Genre | null
}


export const GameGrid = ({selectedGenre}: Props) => {

    const { data: games, err, isLoading } = userGames(selectedGenre)
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {err && <Text>{err}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={'10px'} spacing={'3px'}>
                {isLoading && skeletons.map(skeleton => (
                    <GmaeCardSkeleton key={skeleton} />
                ))}
                {games.map(game =>
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
        </>

    )
}
