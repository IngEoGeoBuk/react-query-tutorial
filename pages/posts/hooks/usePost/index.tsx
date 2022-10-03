import React from 'react'
import {
    useQuery,
} from "@tanstack/react-query";
import { getPostById } from '../getPostById';

export const usePost = (postId: number) => {
    return useQuery(["post", postId], () => getPostById(postId), {
      enabled: !!postId,
    });
}
