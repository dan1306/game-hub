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

export const userGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => userData<Game>('/games', {
    params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id
    },
    
}, [selectedGenre?.id, selectedPlatform?.id])
