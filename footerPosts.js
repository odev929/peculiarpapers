const posts = [
    { link: 'post1.html', title: 'Post Link 1' },
    { link: 'post2.html', title: 'Post Link 2' },
    { link: 'post3.html', title: 'Post Link 3' }
];

function renderFooterPosts() {
    const footerContainer = document.querySelector('.card-deck');

    // Clear any existing content
    footerContainer.innerHTML = '';

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';

        const postLink = document.createElement('a');
        postLink.href = post.link;
        postLink.innerText = post.title;

        cardFooter.appendChild(postLink);
        card.appendChild(cardFooter);
        footerContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderFooterPosts);