import React, {useRef} from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './AnimatedPulsingDot.css';

const MadridMap: React.FC = () => {

  const initialViewport = {
    latitude:  40.416775, 
    longitude: -3.703790,
    zoom: 13,
  };

  const eduardo = useRef<HTMLDivElement | null>(null);
  if (eduardo.current)  eduardo.current.classList.add('pulsing-dot');

  const hugo = useRef<HTMLDivElement | null>(null);
  if (hugo.current)  hugo.current.classList.add('pulsing-dot');

  const yasmine = useRef<HTMLDivElement | null>(null);
  if (yasmine.current)  yasmine.current.classList.add('pulsing-dot');

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Map
        {...initialViewport}
        mapboxAccessToken="pk.eyJ1IjoieWFzbWluLWUiLCJhIjoiY2xseHExNDg0Mm11bzNkcDg3Mjdta2J5dSJ9.ocCkdr6GPfVo3cOOiTE_tA"
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      >
        <Marker
          latitude={40.39878562330036}
          longitude={-3.696836257672317}
        >
          <div ref={eduardo} className="dot"/>
        </Marker>
         <Marker
          latitude={40.40507676770641}
          longitude={-3.711228291084625}
        >
          <div ref={hugo} className="dot"/>
        </Marker>
          <Marker
          latitude={40.40974479488872}
          longitude={-3.7092802622482846}
        >
          <div ref={yasmine} className="dot"/>
        </Marker>
      </Map>
    </div>
  );
};

export default MadridMap;
