import React from "react";
import "../styles/post-link.scss";

const PostLink = ({post}) => {
    const {title, updatedAt, image} = post;
    const description = post.description.description;

    return (
        <div className="postLink">
            <div>
                <img src={image.file.url} className="postLink__image" alt="post_cover" />
            </div>
            <div className="postLink__text">
                <h2>{title}</h2>
                <p className="postLink__body">{description}</p>
                <p className="postLink__date">{updatedAt}</p>
            </div>
        </div>
    )
}

export default PostLink;