type Product = 'iPad' | 'Mac Mini' | 'Macbook Air' | 'Macbook Pro' | 'Trash can';

export function purchase(what: Product) {
  // mine bitcoin...
  // send to apple...
}

// Inline:
purchase('Macbook Air');

// Reference (1)
const newToy = 'Macbook Air';
// purchase(newToy);  // <-- will it work?

// Reference (2)
let newToy2 = 'Macbook Air';
// purchase(newToy2);  // <-- will it work?

// Reference (3)
const order = {
  what: 'Macbook Air',
  how: 'bitcoin'
};
// purchase(order.what);  // <-- will it work?
