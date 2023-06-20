import React from 'react'
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void;
}

export const Navbar = ({onSearch}: Props) => {
    return (
        <HStack justify={'space-between'} padding={'10px'}>
            <Image src={logo} boxSize={'60px'} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}
