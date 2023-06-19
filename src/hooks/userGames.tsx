import userData from "./userData";


export interface Platform {
    id: number;
    name: string;
    slug: string,
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}

export const userGames = () => userData<Game>('/games')
