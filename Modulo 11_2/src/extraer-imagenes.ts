const btnClick = () => {
  const inputTexto = document.getElementById("textarea");
  if (
    inputTexto !== null &&
    inputTexto !== undefined &&
    inputTexto instanceof HTMLTextAreaElement
  ) {
    let texto: string = inputTexto.value;
    texto;
    let urls = extraerUrl(texto);
    imprimirUrlsEnPantalla(urls);
  }
};

const btnExtraer = () => {
  const btn = document.getElementById("btn");

  if (btn !== null && btn !== undefined && btn instanceof HTMLButtonElement) {
    btn.addEventListener("click", btnClick);
  }
};

btnExtraer();

function extraerUrl(texto: string): string[] {
  const regEx = /<img[^>]*src=["'](?<url>.*?)["'][^>]*>/gm;
  const coincidencias = texto.matchAll(regEx);
  const urls: string[] = [];

  for (const match of coincidencias) {
    if (match.groups && match.groups.url) {
      urls.push(match.groups.url);
    }
  }

  return urls;
}

const imprimirUrlsEnPantalla = (urls: string[]) => {
  const div = document.getElementById("extracto");
  if (div === null || div === undefined) return;
  div.innerHTML = "";
  const imprimirLista = document.createElement("div");
  let url = urls;
  div.innerHTML = url.join("<br>");
  div.appendChild(imprimirLista);
  if (url.length === 0) {
    div.innerHTML = "No hay ninguna imagen en este HTML";
    const noUrl = document.createElement("div");
    div.appendChild(noUrl);
  }
};
