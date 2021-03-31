const feedWrapper = document.getElementById('Feed_Wrapper')

const response = async () => {
    const result = await fetch('https://v1.nocodeapi.com/kyler1295/instagram/QMCWFsfxgXIfRMQo');
    const instagram = result.json();
    return instagram
}

response().then(feed => {
    let feedContent = ``;
    feed.data.forEach(post => {
        console.log(post)
        feedContent += 
        `
        <article class="post">
            <img src="${post.media_url}" alt="Test" />
            <div class="content">${post.caption}</div>
        </article>
        `
    })
    feedWrapper.innerHTML = feedContent
})