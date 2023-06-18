import React, { Children, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
    children: ReactNode
}

export const GameCardContainer = ({children}: Props) => {
    return (
        <Box borderRadius={10} fontSize={'21px'} overflow={'hidden'} padding={'20px'} marginX={15}>
            {children}
        </Box>
    )
}

