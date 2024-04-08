import React from "react"
import "../styles/post.scss"
import Layout from "../components/layout";

const Post = ({ pageContext }) => {
    const { title, updatedAt, image } = pageContext.post;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <div className="postHeader">
                <h1>{title}</h1>
                <p className="postHeader__date">{updatedAt}</p>
            </div>
            <img src={image.file.url} className="postImage" alt="post-cover"></img>
            <div dangerouslySetInnerHTML={{ __html: body }} className="postBody" />
        </Layout>
    )
}

export default Post;