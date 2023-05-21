import "bulma/css/bulma.min.css";

function ProfileImage() {
 
  return (
   
   
   <div>  
    <div><img className="profileimage" src={process.env.PUBLIC_URL + '/bow.jpg'}/></div>
    <div><img className="badgeimage" src={process.env.PUBLIC_URL + '/aws.png'}/>
    <img className="badgeimage" src={process.env.PUBLIC_URL + '/KubeCampus.png'}/></div>
    
    
</div> 


  );
}

export default ProfileImage;