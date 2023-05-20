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
          <p class="subtitle is-3" style={{color: textcolor}}> I am A Full stack Software Engineer      </p>
          <ProfileImage/>
          <p class="title is-1 is-spaced" style={{color: textcolor}}> A Little About me  :   </p>
          <div class="columns">
          <div class="column">
          <Card message ={"I am married"} src={process.env.PUBLIC_URL + '/ons.jpg'}/> 
          </div>
          <div class="column">
          <Card message ={"Myself and my wife have two dogs"} src={process.env.PUBLIC_URL + '/ons.jpg'}/> 
          </div>
          <div class="column">
                <Card message ={"My Family"} src={process.env.PUBLIC_URL + '/ons.jpg'}/>  
          </div>
          <div class="column">
                <Card message ={"My Other Family"} src={process.env.PUBLIC_URL + '/ons.jpg'}/>  
          </div>
      </div>
    </div>
             
  <ContentBody/>

 
</section>
  );
}

export default App;
