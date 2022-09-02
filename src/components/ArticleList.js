// ### ArticleList

// Make an `ArticleList` component as a child of `App`. It should return:

// - a `<main>` element with the following components inside:
//   - an array of `Article` components (one component for each _post_ passed down
//     as a prop to `ArticleList`)
//   - make sure to assign a unique `key` prop to each `Article`

import React from "react";
import Article from "./Article"

function ArticleList(props) {
        const articleItem = props.posts.map((article) => {
            return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes}/>
        }           
    )
    return (
        <main>
            {articleItem}

        </main>

    )
}

export default ArticleList