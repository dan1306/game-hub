import useGenres from '../hooks/useGenre'

export const GenreList = () => {
    const { data } = useGenres()

    return (
        <ul>
            {
                data.map(data =>
                    <li key={data.id}>
                        {data.name}
                    </li>
                )
            }
        </ul>

    )
}
