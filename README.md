Social Posts
===
Programma per mettere "mi piace" ad un post sui social

1. Creare un array chiamato "posts".
2. Per ciascun post:
   a. Creare un oggetto che rappresenti il post con le seguenti proprietà:
      - id del post 
      - nome autore
      - foto autore
      - data in formato americano (mm-gg-yyyy)
      - testo del post
      - immagine (alcuni post potrebbero non averla)
      - numero di likes
   b. Aggiungere l'oggetto all'array "posts".

3. Stampare i post nel layout fornito
  a. Per ogni post nell'array "posts":
     - Clonare il template HTML di esempio e poi aggiungere i dati del post.
     - Aggiungere l'elemento HTML al container del feed nel tuo layout HTML.

4. Gestione del click "mi piace"
   a. Aggiungi un gestore di eventi al pulsante per il click.
   b. Quando il pulsante viene cliccato:
      - Cambiare il colore del testo del pulsante.
      - Incrementare il contatore dei likes relativo al post.
      - Aggiungere l'id del post a un secondo array chiamato "likedPosts" (per tener traccia dei post con like).