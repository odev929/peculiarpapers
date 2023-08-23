const posts = [
    {name:'1984_breakfast', brief:'aaa'},
    {name:'2BeOrNot',brief:'sss'},
    {name:'AntibacterialCrocodileTears',brief:'ddd'},
    {name:'CherryTreeChopping',brief:'fff'},
    {name:'CinderellasGlassSlipperIndustry',brief:'ggg'},
    {name:'MobyDick',brief:'hhh'},
    {name:'SnowWhite',brief:'jjj'},
    {name:'gotham_bats',brief:'kkkk'},
];

function renderFooterPosts() {
    const footerContainer = document.querySelector('.card-deck');
console.log('renderingFooterPosts')
    // Clear any existing content
    footerContainer.innerHTML = '';

    posts.forEach(post => {
        console.log('eachpost',post)
        const card = document.createElement('div');
        card.className = 'card';

        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';

        const postLink = document.createElement('a');
        postLink.href = '/interesting/'+post.name+'.pdf';
        postLink.innerText = post.brief;

        cardFooter.appendChild(postLink);
        card.appendChild(cardFooter);
        footerContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderFooterPosts);
