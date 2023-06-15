import { Text } from '@chakra-ui/react';
import { userGames } from '../hooks/userGames';


export const GameGrid = () => {

    const { games, err} = userGames()


    return (
        <>
            {err && <Text>{err}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>

    )
}
