import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarContract, BsChevronDown } from 'react-icons/bs'
import { usePlatforms } from '../hooks/usePlatforms'

export const PlatformSelector = () => {

    const { data, err } = usePlatforms()

    if (err) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data.map((platform) => {
                    return (
                        <MenuItem key={platform.id}>
                            {platform.name}
                        </MenuItem>
                    )
                })}

            </MenuList>
        </Menu>
    )
}
