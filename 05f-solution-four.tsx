import * as React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import {Props as MapProps} from 'react-mapbox-gl/lib/map';

import {inferPick} from './infer';

const Map = ReactMapboxGl({
  accessToken: '....',
});

const INIT_VIEW = inferPick<MapProps>()({
  center: [-73.991284, 40.741263],
  zoom: [14.5],
  pitch: [45],
  bearing: [-17.6],
  style: "mapbox://styles/mapbox/streets-v9"
});

type Foo = Map['props'];

export function render(): JSX.Element {
  // What's the problem?
  return (
    <Map
      {...INIT_VIEW}
    >
        { /* ... */ }
    </Map>
  );
}






// import {Props as MapProps} from 'react-mapbox-gl/lib/map';
