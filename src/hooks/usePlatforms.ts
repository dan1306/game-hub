import React from 'react'
import useData from './userData';

interface Platform {

    id: number;
    name: String;
    slug: string

}

export const usePlatforms = () => useData<Platform>('/platforms/lists/parents')