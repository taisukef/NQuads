import { NQuads } from "https://taisukef.github.io/NQuads/NQuads.js";

const url = "https://taisukef.github.io/NQuads/test.nq";

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
/*
<https://example.com/1> <http://schema.org/image> <http://manu.sporny.org/images/manu.png> .
<https://example.com/1> <http://schema.org/name> "Manu\n\"Sporny\"" .
<https://example.com/1> <http://schema.org/url> <http://manu.sporny.org/> .
*/
