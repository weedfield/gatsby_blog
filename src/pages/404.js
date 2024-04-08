// gatsbyでは存在しないページに遷移した際、pages/404に記載があれば自動でリダイレクトされる。
// 確認は本番用でのみ可能

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/404.scss"


const NotFound = () => {
    return (
        <Layout>
            <SEO title="404 Not Found" description="ページが見つかりません" />
            <div className="notFound">
                <h1>404 Not Found</h1>
                <Link to="/">トップページへ</Link>
            </div>
        </Layout>
    )
}

export default NotFound;