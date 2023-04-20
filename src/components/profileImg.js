import "bulma/css/bulma.min.css";

function ProfileImage() {
 
  return (
   
   
   <div>  <img className="profileimage" src={process.env.PUBLIC_URL + '/bow.jpg'}/>
</div> 


  );
}

export default ProfileImage;