import React from "react";
import "../styles/post-link.scss";

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360";

const PostLink = () => {
    return (
        <div className="postLink">
            <div>
                <img src={RANDOM_IMG} className="postLink__image" alt="post_cover" />
            </div>
            <div className="postLink__text">
                <h2>Gatsbyでのサンプルブログ</h2>
                <p className="postLink__body">Nostrud voluptate et ipsum incididunt ad aliqua duis labore et ea elit. Eu esse nulla ipsum ipsum ut dolore in et incididunt esse exercitation.</p>
                <p className="postLink__date">2020年5月30日</p>
            </div>
        </div>
    )
}

export default PostLink;