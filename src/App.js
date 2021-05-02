import Map from "./components/Map";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const result = await res.json();
      console.log("🚀 ~ file: App.js ~ line 17 ~ fetchEvents ~ res", res);
      console.log("🚀 ~ file: App.js ~ line 17 ~ fetchEvents ~ result", result);
      const { events } = result;

      setEventData(events);

      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} zoom={9} /> : <Loader dynamicText={"Loading"} />}
    </div>
  );
}

export default App;
