// Imagine we're working with some sort of map visualization.
export function panTo(latLng: [number, number]) {
  /* ... */
}

// Inline:
panTo([10, 20]);  // ok

// Reference:
const loc = [10, 20];
// panTo(loc);  // <-- will it work?
