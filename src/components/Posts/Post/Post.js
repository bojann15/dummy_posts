import React from 'react'
import { useHistory } from 'react-router-dom';

const Post = ({ post }) => {
    const history = useHistory();

    const handlePostSelect = (id) => {
        history.push(`/${id}`)
    };

    return (
        <div className="post" onClick={() => handlePostSelect(post.id)} >
            <img src={post.image} alt="" />
            <div className="post_box" >
                <h2 title={post.text}>{post.text}</h2>
                <span>{post.owner.firstName} {post.owner.lastName}</span>
                <p>{new Date(post.publishDate).toDateString()}</p>
                <p className="tag">{post.tags.map((tag) => `#${tag}`)}</p>
            </div>
        </div >
    )
};

export default Post;
