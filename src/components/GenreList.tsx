import useGenres from '../hooks/useGenre'
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'
import { Genre } from '../hooks/useGenre'
interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

export const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
    const { data, isLoading, err } = useGenres()

    if (err) return null

    if (isLoading) return <Spinner></Spinner>

    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={'3px'}> Genres </Heading>
            <List>
                {
                    data.map(genre =>
                        <ListItem key={genre.id} paddingY={'5px'} paddingX={'5px'}>
                            <HStack>
                                <Image objectFit={'cover'} boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                                <Button textAlign={'left'} whiteSpace={'normal'} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => {
                                    console.log(genre, genre.id)
                                    onSelectedGenre(genre)

                                }} variant={'link'} fontSize={'sm'}>
                                    {genre.name}
                                </Button>
                            </HStack>
                        </ListItem>
                    )
                }
            </List>
        </>


    )
}
