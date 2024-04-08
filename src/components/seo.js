// タイトルと説明を親コンポーネントから受け取り設定する。
//Helmetタグ内の設定がheadタグに変換されHTMLタグの先頭に追加される。
import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {
    return (
        <Helmet>
            <html lang="ja" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content="sample_blog" />
            <meta property="og:type" content="website" />
        </Helmet>
    )
}

export default SEO