import * as React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import {Props as MapProps} from 'react-mapbox-gl/lib/map';

const Map = ReactMapboxGl({
  accessToken: '....',
});

const INIT_VIEW: Partial<MapProps> = {
  center: [-73.991284, 40.741263],
  zoom: [14.5],
  pitch: [45],
  bearing: [-17.6],
};

export function render(): JSX.Element {
  // What's the problem?
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      {...INIT_VIEW}
    >
        { /* ... */ }
    </Map>
  );
}

