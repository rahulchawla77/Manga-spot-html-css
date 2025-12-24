const container = document.getElementById("manga-list");

mangas.forEach(manga => {
  const card = document.createElement("div");
  card.className = "manga-card";

  card.innerHTML = `
    <a href="detail.html?id=${manga.id}">
      <img src="${manga.image}" alt="${manga.title}">
      <span>${manga.title}</span>
    </a>
  `;

  container.appendChild(card);
});
console.log("main.js loaded");
