import React, { useContext, useEffect, } from 'react';
import API from '../../api';
import { GlobalContext } from '../../context/globalState';
import Post from './Post/Post';

const Posts = () => {
    const { posts, setPosts, shouldUpdate, setShouldUpdate } = useContext(GlobalContext);
    useEffect(() => {
        if (!shouldUpdate) return;
        const fetchData = async () => {
            try {
                const response = await API.get('/post');
                setPosts(response.data.data);
                setShouldUpdate(false);
            } catch (err) {
                console.error(err.response.data);
            }
        };
        fetchData();
    }, [shouldUpdate])
    return (
        <div className="posts">
            {posts.map((post) => {
                return (
                    <Post key={post.id} post={post} />
                )
            })}
        </div>
    )
};
export default Posts;