import "bulma/css/bulma.min.css";

function Card({message,src}) {
 
  return (
   
   
    <div class="card has-background-dark">
    <div class="card-image">
      <figure class="image is-6by3">
        <img src={src} alt="Placeholder image"/> 
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        
        <div class="media-content">
          <p class="title is-4 has-text-white"> {message}</p>
          
        </div>
      </div>

      <div class="content">
        
        
        
      </div>
      </div>
    </div>


  );
}

export default Card;