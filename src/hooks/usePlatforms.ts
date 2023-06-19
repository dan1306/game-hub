import React from 'react'
import useData from './userData';

interface Platform {

    id: number;
    name: string;
    slug: string

}

export const usePlatforms = () => useData<Platform>('/platforms/lists/parents')