import { SimpleGrid, Text } from '@chakra-ui/react';
import { Platform, userGames } from '../hooks/userGames';
import GameCard from './GameCard';
import { GmaeCardSkeleton } from './GmaeCardSkeleton';
import { Genre } from '../hooks/useGenre';

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null
}


export const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {

    const { data: games, err, isLoading } = userGames(selectedGenre, selectedPlatform)
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
