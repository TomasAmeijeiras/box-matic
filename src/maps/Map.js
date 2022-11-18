import React, {useMemo} from "react";
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import "../maps/Map.css"
// import credentials from "./maps/credentials";


const Map = () => {
  const center = useMemo(() => ({lat: -34.638439563707024, lng: -58.49313625823781}), []);

  return <GoogleMap zoom={18} center={{ lat: -34.638439563707024, lng: -58.49313625823781}} mapContainerClassName="map-container" >
    <Marker position={center}/>
  </GoogleMap>
}

 const Home = () =>  {
  const {isLoaded} = useLoadScript({
    //id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) {
    return <div>Loading...</div>
  } else return <Map />
  ;
}

export default Home

// const Map = (props) => {
//   return (
//     <GoogleMap defaultZoom={10}
//     defaultCenter={{ lat: -34.638439563707024, lng: -58.49313625823781}} />
//   );
// }

// export default withScriptjs (
//   withGoogleMap(
//     Map
//   )
// )