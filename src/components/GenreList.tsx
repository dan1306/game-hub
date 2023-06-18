import React from 'react'
import useGenres from '../hooks/useGenre'

export const GenreList = () => {
    const { genres } = useGenres()

    return (
        <ul>
            {
                genres.map(genres =>
                    <li key={genres.id}>
                        {genres.name}
                    </li>
                )
            }
        </ul>

    )
}
