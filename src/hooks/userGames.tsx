import { GameQuery } from "../App";
import { Genre } from "./useGenre";
import userData from "./userData";


export interface Platform {
    id: number;
    name: string;
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}

export const userGames = (gameQuery: GameQuery) => userData<Game>('/games', {
    params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
    },
    
}, [gameQuery])
