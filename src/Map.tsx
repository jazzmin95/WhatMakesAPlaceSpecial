import React, { useRef } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './PulsatingAsterisk.css';
import { Box, Center, Title } from '@mantine/core';

const MadridMap: React.FC = () => {
  const initialViewport = {
    latitude: 40.40463816651476,
    longitude: -3.704453011618117,
    zoom: 15,
  };

  const eduardo = useRef<HTMLDivElement | null>(null);
  const hugo = useRef<HTMLDivElement | null>(null);
  const hannah = useRef<HTMLDivElement | null>(null);
  const ruby = useRef<HTMLDivElement | null>(null);

  const markers = [
    {
      name: 'Eduardo',
      ref: eduardo,
      latitude: 40.39878562330036,
      longitude: -3.696836257672317,
    },
    {
      name: 'Hugo',
      ref: hugo,
      latitude: 40.40507676770641,
      longitude: -3.711228291084625,
    },
    {
      name: 'Hannah',
      ref: hannah,
      latitude: 40.40974479488872,
      longitude: -3.7092802622482846,
    },
    {
      name: 'Ruby',
      ref: ruby,
      latitude: 40.40459391501095,
      longitude: -3.7008492293440884,
    },
  ];

  return (
    <Center h="100vh">
      <Map
        {...initialViewport}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      >
        {markers?.map((marker) => (
          <Marker
            latitude={marker.latitude}
            longitude={marker.longitude}
            key={marker.name}
          >
            <Box ref={marker.ref} className="asterisk" />
          </Marker>
        ))}
      </Map>
      <Box
        w="100vw"
        h="100vh"
        pos="absolute"
        top="500px"
        right="0px"
        sx={{
          overflow: 'hidden',
        }}
      >
        <Title
          color="white"
          align="center"
          ff="monospace"
          order={4}
          fw={200}
          sx={{
            textTransform: 'uppercase',
          }}
          w="303px"
          bg="#750808"
          m="0 auto"
        >
          what makes a place special?
        </Title>
      </Box>
    </Center>
  );
};

export default MadridMap;
