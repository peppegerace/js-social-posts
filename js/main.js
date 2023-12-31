// Programma per mettere "mi piace" ad un post sui social

// 1. Creare un array chiamato "posts".
// 2. Per ciascun post:
//    a. Creare un oggetto che rappresenti il post con le seguenti proprietà:
//       - id del post 
//       - nome autore
//       - foto autore
//       - data in formato americano (mm-gg-yyyy)
//       - testo del post
//       - immagine (alcuni post potrebbero non averla)
//       - numero di likes
//    b. Aggiungere l'oggetto all'array "posts".

// 3. Stampare i post nel layout fornito
//   a. Per ogni post nell'array "posts":
//      - Clonare il template HTML di esempio e poi aggiungere i dati del post.
//      - Aggiungere l'elemento HTML al container del feed nel tuo layout HTML.

// 4. Gestione del click "mi piace"
//    a. Aggiungi un gestore di eventi al pulsante per il click.
//    b. Quando il pulsante viene cliccato:
//       - Cambiare il colore del testo del pulsante.
//       - Incrementare il contatore dei likes relativo al post.
//       - Aggiungere l'id del post a un secondo array chiamato "likedPosts" (per tener traccia dei post con like).
      
// 1.
const posts = [
  {
      "id": 1,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/300?image=171",
      "author": {
          "name": "Phil Mangione",
          "image": "https://unsplash.it/300/300?image=15"
      },
      "likes": 80,
      "created": "2021-06-25"
  },
  {
      "id": 2,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=112",
      "author": {
          "name": "Sofia Perlari",
          "image": "https://unsplash.it/300/300?image=10"
      },
      "likes": 120,
      "created": "2021-09-03"
  },
  {
      "id": 3,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=234",
      "author": {
          "name": "Chiara Passaro",
          "image": "https://unsplash.it/300/300?image=20"
      },
      "likes": 78,
      "created": "2021-05-15"
  },
  {
      "id": 4,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=24",
      "author": {
          "name": "Luca Formicola",
          "image": null
      },
      "likes": 56,
      "created": "2021-04-03"
  },
  {
      "id": 5,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=534",
      "author": {
          "name": "Alessandro Sainato",
          "image": "https://unsplash.it/300/300?image=29"
      },
      "likes": 95,
      "created": "2021-03-05"
  }
];


// Dichiaro variabili
const container = document.getElementById("container");

// 3. Creo l'elemento div
posts.forEach((post) => {
    const postElement = document.createElement("div");
    // Gli agiungo la classe post
    postElement.classList.add("post");

    // Clono il template HTML di esempio e poi aggiungo i dati del post.
    postElement.innerHTML = `
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author.name}</div>
                    <div class="post-meta__time">${formatDate(post.created)}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${post.content}</div>
        <div class="post__image">
            <img src="https://unsplash.it/600/300?${post.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                </div>
            </div>
        </div>
    `;

    // Stampo il div creato nel container
    container.appendChild(postElement);
});


// 4. Gestione del click "Mi Piace".
const likeButtons = document.querySelectorAll(".js-like-button");
//  creo un array vuoto dove inserire i post ai quali abbiamo messo il "like"
const likedPosts = [];

// forEach per iterare su ciascun bottone "mi piace"
likeButtons.forEach((button) => {
  // metto in ascolto il pulsante
  button.addEventListener("click", function (event) {

    event.preventDefault();
    // recupero l'attributo data-postid e lo converto in numero intero
    const postId = parseInt(this.getAttribute("data-postid"));
    console.log(postId);
    const likeCounter = document.getElementById(`like-counter-${postId}`);
      

    // Trova il post corrispondente all'ID 
    const post = posts.find((post) => post.id === postId);

    if (post) {

      if (!likedPosts.includes(postId)) {    

        // Incrementa i like se il post non è già stato cliccato
        post.likes++;
        likeCounter.textContent = post.likes;
        likedPosts.push(postId);
        this.classList.add("like-button--liked");
       } else {

        // Decrementa i like se il post è stato già cliccato
        post.likes--;
        likeCounter.textContent = post.likes;
        likedPosts.splice(likedPosts.indexOf(postId), 1);
        this.classList.remove("like-button--liked");
      }
    }
  });
});


// Funzione per formattare la data stile italiano
function formatDate(dateString) {
  const [year, month, day] = dateString.split("-"); // Divide la data in giorno, mese e anno
  return `${day}-${month}-${year}`;
};

