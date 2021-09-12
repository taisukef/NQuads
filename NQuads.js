import { JSONLD } from "https://taisukef.github.io/jsonld-es/JSONLD.js";

class NQuads {
  static async parse(s) {
    return JSONLD.fromRDF(s, { format: "application/n-quads" });
  }
  static async stringify(json) {
    return JSONLD.toRDF(json, { format: "application/n-quads" });
  }
  static async fetchOrLoad(fn) {
    if (fn.startsWith("https://") || fn.startsWith("http://") || !globalThis.Deno) {
      return await (await fetch(fn)).text();
    } else {
      return await Deno.readTextFile(fn);
    }
  }
  static async fetch(url) {
    return await NQuads.parse(await NQuads.fetchOrLoad(url));
  };
}

export { NQuads };
