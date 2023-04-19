import logo from './logo.svg';
import "bulma/css/bulma.min.css";

function App() {
  let backgroundColor = 'black';
  let textcolor = 'white';
  return (
    <section className="max-width" style={{backgroundColor: backgroundColor}}>
      <div className="container">
   <h1 className="title" style={{color: textcolor}}> Hello My Name is <strong>Pieter Swanepoel</strong> </h1>
   <p className="subtitle" style={{color: textcolor}}> I am A Full stack Software Engineer      </p>
 </div>
      <img src={process.env.PUBLIC_URL + '/backdrop.jpg'} /> 
      <div className="container">
   <h1 className="title"> Hello My Name is <strong>Pieter Swanepoel</strong> </h1>
   <p className="subtitle"> I am A Full stack Software Engineer      </p>
 </div>

 
</section>
  );
}

export default App;
