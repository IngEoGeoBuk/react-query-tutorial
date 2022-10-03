import React from 'react'
import { usePost } from '../../hooks/usePost';

interface Interface {
    postId: number;
    setPostId: (value: number) => void;
}

const Post = ({ postId, setPostId }: Interface) => {
    const { status, data, error, isFetching } = usePost(postId);

    return (
      <div>
        <div>
          <a onClick={() => setPostId(-1)} href="#">
            Back
          </a>
        </div>
        {!postId || status === "loading" ? (
          "Loading..."
        ) : status === "error" && error instanceof Error ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <h1>{data.title}</h1>
            <div>
              <p>{data.body}</p>
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    );
}

export default Post