import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import API from '../../api';
const DetailPost = () => {
    const { id } = useParams();
    const history = useHistory();
    const [detailPost, setDetailPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({ message: "" });
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get(`/post/${id}`);
                setDetailPost(response.data);

            } catch (err) {
                console.error(err.response.data);
            }
        };
        const getComments = async () => {
            try {
                const response = await API.get(`/post/${id}/comment`);
                setComments(response.data.data);
            } catch (err) {
                console.error(err.response.data);
            }
        };
        fetchData();
        getComments();
    }, [id, update]);
    const handleEdit = (id) => {
        history.push(`/${id}/edit`)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/comment/create", { ...comment, owner: detailPost.owner.id, post: detailPost.id });
            setComment({ message: "" });
            setUpdate(true);

        } catch (err) {
            console.error(err.response.data);
        }
    };
    return (
        <div className="detail">
            <img src={detailPost.image} alt="" />
            <div className="box-detail">
                <h3>{detailPost.text}</h3>
                <h6>#id: {detailPost.id}</h6>
                <p>{detailPost.text}</p>
                <p>Likes: {detailPost.likes}</p>
                <p>Owner: {detailPost?.owner?.firstName} {detailPost?.owner?.lastName}</p>
                <button id="btn_view" onClick={((id) => handleEdit(`${detailPost.id}`))} >
                    Edit
                </button>
            </div>
            {(comments.length !== 0) && <p id="comments">{`Comments by ${detailPost?.owner?.firstName}:`} {comments?.map((comment) => <span key={comment.id}>{comment.message}</span>)}</p>}
            <p className="tags">{detailPost?.tags?.map((tag) => `#${tag}`)}</p>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <textarea type="text" placeholder="Type comment" name="message" id="message" required rows="5" value={comment.message} onChange={(e) => setComment({ ...comment, message: e.target.value })} />
                </div>
                <button type="submit">Create Comment</button>
            </form>
        </div>
    )
};

export default DetailPost;
