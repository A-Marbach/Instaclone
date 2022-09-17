let posts= [{
        'author' : 'Golden-Nose',
        'profil-Image' : 'img/golden-nose-profil.jpg',
        'description' : '#Sortiment, #ExtraitDeParfum, #HighQuality',
        'location' : 'Hamburg',
        'image' : 'img/sortiment.jpg',
        'likes' : [1281],
        'comments' : ['Wooow', 'sehr schöne Düfte', 'Ich bin begeistert']
    },
    {
        'author' : 'Al-Jazeera',
        'profil-Image' : 'img/al-jazeera-profil.jpg',
        'description' : 'Eine Moschee in Arabien um das Jahr 1783',
        'location' : '',
        'image' : 'img/moschee.jpg',
        'likes' : [869],
        'comments' : ['Da war ich schon', 'Wunderschön', 'Da möchte ich hin']
    },
    {
        'author' : 'Fifa World',
        'profil-Image' : 'img/fifaProfil.jpg',
        'description' : '#FifaWorldCup, #Final',
        'location' : 'London',
        'image' : 'img/fifa1.jpg',
        'likes' : [56],
        'comments' : ['Oleeeeeeeeee', 'Was für ein spannendes Spiel', 'Hummba Hummba Hummba Tee Tereeeeeee']
    },
    {
        'author' : 'Golden-Nose',
        'profil-Image' : 'img/golden-nose-profil.jpg',
        'description' : '#Parfum, #HighQuality, #Oil ',
        'location' : 'Hamburg',
        'image' : 'img/misk.jpg',
        'likes' : [458],
        'comments' : ['riecht 1zu1 wie das Original', 'will ich haben', 'Hammer']
    },
    {
        'author' : 'Fifa World',
        'profil-Image' : 'img/fifaProfil.jpg',
        'description' : 'Freundschaftsspiel zwischen Hertha BSC Berlin vs Borussia Dortmund',
        'location' : 'Berlin (Germany)',
        'image' : 'img/fifa2.jpg',
        'likes' : [499],
        'comments' : ['langweiliges Spiel', 'Dortmund war besser', 'S** Hertha']
    }
];


function renderPosts(){
    document.getElementById('post-container').innerHTML ='';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        
        document.getElementById('post-container').innerHTML += generatePost(post, i);
}
}
function generatePost(postArray, i){

    return `
    <div class="posts">
        <div class="logo-author">
            <img src="${postArray['profil-Image']}">
            <div class="location">
            <div><b>${postArray['author']}</b></div>
            <p>${postArray['location']}</p>
            </div>
        </div>
        <img class="post-image" src="${postArray['image']}">
        <div class="icons">
            <div class="left-icons">
                <img id="heart${[i]}" onclick="getLike(${i})" src="img/herzIcon.png">
                <img src="img/kompassIcon.png">
                <img src="img/flugzeugIcon.png">
            </div>
                <div class="follow">
                    <img src="img/hausIcon.png">
                </div>
        </div>
        <div id="like&comment" class="like">
            <p>${postArray['likes']} Likes </p>
        </div>
        <div class="author-description">
            <div><b>${postArray['author']}:</b></div>
            <div class="description">${postArray['description']}</div>
        </div>
    </div>
    `;

}

function getLike(i){
document.getElementById(`heart${[i]}`).style.backgroundColor = 'red';
   /* posts[index]['likes'].push(index)++;
    renderPosts();
    */
}

function generateLikeComment(){
    
}