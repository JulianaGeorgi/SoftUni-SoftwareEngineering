function getArticleGenerator(articles) {
    let myArticles = Array.from(articles); // making a copy
    let content = document.getElementById('content');
    return () => {
        if (myArticles.length === 0) {
            return;
        }
        let currentArticle = myArticles.shift();
        content.innerHTML += `<article>${currentArticle}</article>`;
    }
}