import { Grid, GridItem, Show } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { GameGrid } from './components/GameGrid'
import { GenreList } from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import { PlatformSelector } from './components/PlatformSelector'
import { Platform } from './hooks/userGames'


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  const [selctedPlarform, setSelectedPlatform] = useState<Platform | null>(null)

  return (

    <Grid templateAreas={{
      base: `"nav" " main"`,
      lg: `"nav nav" "aside main"`//wider than 991px
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={ gameQuery.genre } onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre})} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform ) => setGameQuery({...gameQuery, platform}) } />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
