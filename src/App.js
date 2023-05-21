import logo from './logo.svg';
import "bulma/css/bulma.min.css";
import ProfileImage from './components/profileImg';
import ContentBody from './components/content';
import Card from './components/card';

function App() {
  let backgroundColor = 'black';
  let textcolor = 'white';
  return (
    <section className="max-width" style={{backgroundColor: backgroundColor}}>
      <div className="section has-text-centered">
        
          <h1 class="title is-1 is-spaced" style={{color: textcolor}}> Hello My Name is <strong>Pieter Swanepoel</strong> </h1>
          <p class="subtitle is-3" style={{color: textcolor}}> I am A Software Engineer With a passion for Back-End     </p>
          
          <ProfileImage/>
          <p class="title is-1 is-spaced mt-5 mb-5" style={{color: textcolor}}> A Little About me  :   </p>
          <div class="columns">
          <div class="column">
          <Card message ={"I am married"} src={process.env.PUBLIC_URL + '/ons2.jpg'}/> 
          </div>
          {/* <div class="column">
          <Card message ={"Myself and my wife have two dogs"} src={process.env.PUBLIC_URL + '/ons.jpg'}/> 
          </div> */}
          <div class="column">
                <Card message ={"My Family"} src={process.env.PUBLIC_URL + '/untitled-743.jpg'}/>  
          </div>
          <div class="column">
                <Card message ={"My Other Family"} src={process.env.PUBLIC_URL + '/untitled-439.jpg'}/>  
          </div>
         
      </div>
      <p class="title is-1 is-spaced mt-5 mb-5" style={{color: textcolor}}> Skills :   </p>
      <div class="columns ">
        <div class="column">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/iconsjava.png'}/>
          </figure>   
          <p>Java EE</p>  

        </div>
        <div class="column">
        <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/iconspringboot.png'}/>
          </figure>   
          <p>Spring Boot</p>  
       
        </div>
        <div class="column">
        <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/hibernate.png'}/>
          </figure>   
          <p>Hibernate & JPA</p>       
        </div>
        <div class="column">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/iconsgolang.png'}/>
          </figure>  
          <p>Golang</p>       
        
        </div>
        
      </div>

      <div class="columns ">
        <div class="column">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/rest.png'}/>
          </figure> 
          <p>REST</p>
        </div>
        <div class="column">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/iconsnodejs.png'}/>
          </figure>  
          <p>Node Express</p>        
        </div>
        <div class="column ">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/iconsangular.png'}/>
          </figure>  
          <p>Angular</p>        
        </div>
        <div class="column">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/pl-sql.png'}/>
          </figure>  
          <p>Oracle PL-SQL</p>        
        </div>
        {/* <div class="column">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/iconsnodejs.png'}/>
          </figure>          
        </div>
        <div class="column ">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/iconsangular.png'}/>
          </figure>          
        </div> */}
      </div>
      <div class="columns ">
        <div class="column">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/aws2.png'}/>
          </figure>   
          <p>AWS</p>
        </div>
        <div class="column">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/jenkins2.png'}/>
          </figure>   
          <p>Jenkins</p>       
        </div>
        <div class="column ">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/rxjs.png'}/>
          </figure>   
          <p>RXJS</p>       
        </div>
        <div class="column">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/docker.png'}/>
          </figure>   
          <p>Docker</p>       
        </div>
        {/* <div class="column">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/iconsnodejs.png'}/>
          </figure>          
        </div>
        <div class="column ">
          <figure class="image is-128x128 is-justify-content-center is-align-content-center is-inline-block">
          <img src={process.env.PUBLIC_URL + '/iconsangular.png'}/>
          </figure>          
        </div> */}
      </div>
    </div>
             
  <ContentBody/>

 
</section>
  );
}

export default App;
