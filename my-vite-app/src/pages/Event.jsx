import Eventsheader from "../Component/Eventsheader";
import HeroBanner from "../Component/HeroBanner";
import PastEventsTimeline from "../Component/PastTimeline";
import past_ev from "../assets/Bannerpage/past_events.png";

const Event =()=>{
    return(

        <div>
           
<HeroBanner 
  title="Past Events"
  subtitle="Because every moment matters — documenting each event is essential to reflect, learn, and grow."
  backgroundImage={past_ev}
/>
            <Eventsheader/>
            <PastEventsTimeline/>

        </div>
    )
}
export default Event;