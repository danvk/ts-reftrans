interface View {
  center: [number, number]; // lat, lng
  zoom: number;
}

function panTo(v: View) {
  // ...
}

panTo({
  center: [-73, 43],
  zoom: 10,
}); // works

const DEFAULT_VIEW = {
  center: [-73, 43],
  zoom: 10,
};

panTo(DEFAULT_VIEW); // error: Property '0' is missing in type 'number[]'.

const DEFAULT_VIEW2: View = {
  center: [-73, 43],
  zoom: 10,
};
panTo(DEFAULT_VIEW2); // works

DEFAULT_VIEW.center = [73, -43]; // fine
DEFAULT_VIEW.center = [73, -43, 0]; // still fine
DEFAULT_VIEW.center = 'nyc'; // error

type Action = 'save' | 'open';

function takeAction(action: Action) {
  /* ... */
}

takeAction('save'); // ok

const action = 'save';
takeAction(action); // still ok

const ev = {
  action: 'save',
};
takeAction(ev.action); // Error: 'string' is not assignable to parameter of type 'Action'.

const ev2 = {
  action: 'save' as Action,
};
takeAction(ev2.action);

{
  let foo;

  if (Math.random() > 0.5) {
    foo = 'something';
  }

  foo;
}

function panTo(latLng: [number, number]) { /* ... */ }

panTo([10, 20]);  // ok
const x = [10, 20];
panTo(x);  //
