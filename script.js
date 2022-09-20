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

function init(){
    renderPosts();
}

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
        <div class="like">
            <p>${postArray['likes']} Likes </p>
        </div>
        <div class="author-description">
            <div><b>${postArray['author']}:</b></div>
            <div class="description">${postArray['description']}</div>
        </div>

        <div id="comment${i}" class="comments">
            <p><b>Name:</b></p>
           <p>${postArray['comments']}</p>
        </div>
        <form onsubmit="addComment(i)">
            <div class="comment-post">
                <input required id="comment${i}" placeholder="Kommentar hinzufügen..." ><button  class="comment-post-btn">Post</button>
            </div>
        </form>
    </div>
    `;
    
}


function getLike(i){
document.getElementById(`heart${[i]}`).src= 'img/herz-rot.png';


 /* posts.likes[index](i)++;
  renderPosts();

  posts[i].likes.push(posts[i].likes)++;

/* posts[index]likes[index].push++;
    renderPosts();
    */
}

function renderComments(){
    let comment = document.getElementById(`comment${i}`);
    comment.innerHTML ='';
    for (let i = 0; i < posts['comments'].length; i++) {
        const element = posts['comments'][i];
        comment.innerHTML +=`
        <p>${comment}</p>
        <button>Answer</button>
    `;
    }
}

function addComment(i){
    let comment = document.getElementById(`comment${i}`);
    posts[i].comments.push(comment.value);
    comment.innerHTML = '';

    renderPosts();
}

function abonnened(){
    document.getElementById('abo').classList.add('btn-red');
    document.getElementById('abo').innerHTML = 'Abonniert';

    
}

function abonnened1(){
    document.getElementById('abo1').classList.add('btn-red');
    document.getElementById('abo1').innerHTML = 'Abonniert';
}

function abonnened2(){
    document.getElementById('abo2').classList.add('btn-red');
    document.getElementById('abo2').innerHTML = 'Abonniert';
}

function abonnened3(){
    document.getElementById('abo3').classList.add('btn-red');
    document.getElementById('abo3').innerHTML = 'Abonniert';
}

function abonnened4(){
    document.getElementById('abo4').classList.add('btn-red');
    document.getElementById('abo4').innerHTML = 'Abonniert';
}