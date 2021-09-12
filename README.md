# NQuads.js ES module

NQuads.js is ES module to parse and stringify for N-Quads.

## Usage

```js
import { NQuads } from "https://taisukef.github.io/NQuads/NQuads.js";

//const url = "./test.nq";
const url = "./test2.nq";

const data = await NQuads.fetch(url);
console.log(data);
const nq = await NQuads.stringify(data);
console.log(nq);
const data2 = await NQuads.parse(nq);
console.log(data2);

const json = [
  {
    "@id": "https://example.com/1",
    "http://schema.org/image": [ { "@id": "http://manu.sporny.org/images/manu.png" } ],
    "http://schema.org/name": [ { "@value": "Manu\n\"Sporny\"" } ],
    "http://schema.org/url": [ { "@id": "http://manu.sporny.org/" } ]
  }
];
const nq2 = await NQuads.stringify(json);
console.log(nq2);
```
