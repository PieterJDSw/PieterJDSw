import "bulma/css/bulma.min.css";
import { Chrono } from "react-chrono";
import {items} from "../data/education"
function ContentBody() {
  
  return (
    <div class="content has-text-centered has-text-white">
    <h1 class="title is-1 is-spaced has-text-white">Education</h1>
    <h3 class="has-text-white"> <span class="tag is-success is-medium mr-4">Obtained </span>North-West University: Computer science Bsc Honors </h3>
    <h3 class="has-text-white"> <span class="tag is-success is-medium mr-4">Obtained </span>North-West University: Computer science Bsc Honors Where my project was focused on IOT systems</h3>
    <h3 class="has-text-white"> <span class="tag is-info is-medium mr-4">Underway</span>MSc Computer Science with research in deep learning based object detection</h3>
    
    <h1 class="title is-1 is-spaced has-text-white">Work Experience</h1>
    <div class="is-align-items-center" style={{ width: '100%' }} cardHeight="500">
  <Chrono items={items} mode="VERTICAL_ALTERNATING" scrollable hideControls borderLessCards enableDarkToggle="true"  theme={{
    primary: 'white',
    secondary: 'white',
    cardBgColor: '#bfbcbb',
    titleColor: 'white',
    titleColorActive: 'black',
  }}/>
</div>
    
  </div>
   
   


  );
}

export default ContentBody;