import Eventsheader from "../Component/Eventsheader";
import HeroBanner from "../Component/HeroBanner";
import PastEventsTimeline from "../Component/PastTimeline";
import past_ev from "../assets/Bannerpage/past_events.png";

const Event =()=>{
    return(

        <div>
           
<HeroBanner 
  title="Cultural Festival 2024"
  subtitle="Celebrating diversity and tradition"
  backgroundImage={past_ev}
/>
            <Eventsheader/>
            <PastEventsTimeline/>

        </div>
    )
}
export default Event;