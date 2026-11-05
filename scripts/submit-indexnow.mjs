import { readFile, readdir } from "node:fs/promises";
const host = "interchileclima.cl";
const directory = new URL("../public/", import.meta.url);
const files = (await readdir(directory)).filter((name) =>
  /^[a-f0-9]{32}\.txt$/.test(name),
);
if (files.length !== 1)
  throw new Error(
    "Se esperaba exactamente un archivo de verificación IndexNow.",
  );
const keyLocation = `https://${host}/${files[0]}`;
const key = (await readFile(new URL(files[0], directory), "utf8")).trim();
const liveKey = await fetch(keyLocation, {
  signal: AbortSignal.timeout(15000),
});
if (!liveKey.ok || (await liveKey.text()).trim() !== key)
  throw new Error(
    "La clave IndexNow publicada no coincide; no se enviaron URLs.",
  );
const sitemap = await fetch(`https://${host}/sitemap.xml`, {
  signal: AbortSignal.timeout(15000),
});
if (!sitemap.ok) throw new Error("No se pudo leer el sitemap publicado.");
const urls = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1].replace(/&amp;/g, "&"),
);
if (
  !urls.length ||
  urls.some((value) => {
    const url = new URL(value);
    return url.hostname !== host || url.protocol !== "https:";
  })
)
  throw new Error("El sitemap contiene URLs fuera del dominio esperado.");
const response = await fetch("https://www.bing.com/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList: urls }),
  signal: AbortSignal.timeout(20000),
});
console.log(
  JSON.stringify({
    submitted: urls.length,
    status: response.status,
    accepted: response.status === 200 || response.status === 202,
  }),
);
if (![200, 202].includes(response.status)) process.exitCode = 1;
