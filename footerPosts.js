const posts = [
    {name:'1984_breakfast', brief:'Orwellian 1984 Breakfast'},
    {name:'2BeOrNot',brief:'2 Be Or Not'},
    {name:'AntibacterialCrocodileTears',brief:'Capt'n Hooks Antibacterial Crocodile Tears'},
    {name:'CherryTreeChopping',brief:'Washingtons Cherry Tree Chopping'},
    {name:'CinderellasGlassSlipperIndustry',brief:'Cinderellas Glass Slipper Industry'},
    {name:'MobyDick',brief:'Moby Dick'},
    {name:'SnowWhite',brief:'Snow White Saves the Forest'},
    {name:'gotham_bats',brief:'Gotham City Bat Crime'},
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
        postLink.href = '//peculiarpapers.com/index.html?pdf='+post.name+'&fromfooter';
        postLink.innerText = post.brief;

        cardFooter.appendChild(postLink);
        card.appendChild(cardFooter);
        footerContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderFooterPosts);
