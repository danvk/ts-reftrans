import * as React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: '....',
});

const INIT_VIEW = {
  center: [-73.991284, 40.741263],
  zoom: [14.5],
  pitch: [45],
  bearing: [-17.6]
} as any;

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

