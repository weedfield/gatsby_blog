# Gatsby

## 概要

### Gatsbyとは

GatsbyとはReactとGraphQLを用いたSSGフレームワーク。
公式サイト: https://www.gatsbyjs.org/

記事やブログデータをデータベースに保存し、アクセスが来るたびにデータを取得・HTMLを生成を行う従来の方法と比べ、
SSGではビルド時に事前にHTMLを生成するため効率的で、アプリケーションサーバーやデータベースを持つ必要がないため実装が容易。

#### GraphQL
GraphQLはGithubやFacebookなど多くの起業で導入が進んでいている注目のクエリ言語です。
GraphQLを使うメリットは以下が挙げられます。

APIの仕様や設計をシンプルに構築できる
ツールが用意されており、開発時のテストがしやすい




## このプロジェクト

### ディレクトリ構成
    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md


1.  **`gatsby-config.js`**: Gatbyの設定ファイル。サイトのmetaデータやプラグインなどサイト全体設定 ([config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/)).

1.  **`gatsby-browser.js`**: ブラウザ表示処理が行われる際の処理を規定、全ページで反映される。bootstrapやcssの適用他、Gatsby Browser APIの定義をこのファイルで行う。実際にはページコンポーネントをどうファイルで設定したグローバルコンポーネントで包んでいるため、全ページで適用される。
 ([Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) 

1.  **`src/pages`**: ページを構成するソースコードの置き場。ここに置かれたファイルがサイト上のページに紐づく 


1.  **`public`**: 事前にビルドし作成されたHTMLが格納される。自動で生成される。 


### コマンド
(https://www.gatsbyjs.com/docs/reference/gatsby-cli/)

本番用コンパイル

    ```shell
    gatsby build
    ```

開発用ビルドとサーバー立ち上げ

    ```shell
    gatsby develop
    ```

キャッシュ削除（開発時に更新内容が反映されない時などに使える）

    ```shell
    gatsby clean
    ```

プロジェクトの作成
    starter-urlでスターターライブラリが指定できる
    (https://www.gatsbyjs.com/starters/?v=2)

    ```shell
    gatsby new <site-name> <starter-url>
    ```