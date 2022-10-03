import React from 'react'
import axios from 'axios';

export const getPostById = async (id: number) => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
}
