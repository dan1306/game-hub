import useGenres from '../hooks/useGenre'
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'
import { Genre } from '../hooks/useGenre'
interface Props {
    onSelectedGenre: (genre: Genre) => void;
}

export const GenreList = ({onSelectedGenre}: Props) => {
    const { data, isLoading, err } = useGenres()

    if (err) return null

    if (isLoading) return <Spinner></Spinner>

    return (
        <List>
            {
                data.map(genre =>
                    <ListItem  key={genre.id} paddingY={'5px'} paddingX={'5px'}>
                        <HStack>
                            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                            <Button onClick={() => {
                                console.log(genre)
                                onSelectedGenre(genre)

                            } } variant={'link'} fontSize={'sm'}>
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                )
            }
        </List>

    )
}
