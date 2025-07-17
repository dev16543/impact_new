import Eventsheader from "../Component/Eventsheader";
import HeroBanner from "../Component/HeroBanner";
import PastEventsTimeline from "../Component/PastTimeline";

const Event =()=>{
    return(

        <div>
           
<HeroBanner 
  title="Cultural Festival 2024"
  subtitle="Celebrating diversity and tradition"
  backgroundImage="https://your-image-url.com/festival.jpg"
/>
            <Eventsheader/>
            <PastEventsTimeline/>

        </div>
    )
}
export default Event;