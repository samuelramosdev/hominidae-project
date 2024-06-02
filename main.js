const divGenera = document.getElementById("div-genera");
const showAllBtn = document.getElementById("show-all-btn");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

const fetchJSON = async () => {
  const req = await fetch('./hominidae.json');
  const res = await req.json();
  const { species } = res;
  return species;
}


const createElements = async () => {
  const species = await fetchJSON();
  species.map(({ representation, specie }) =>
    divGenera.innerHTML += `
  <div class="div-specie">
    <p>${specie}</p>
    <img src="${representation}">
    <a class="btn-show-more">SHOW MORE</a>
  </div>
  `
  )
  const btnShowMore = document.querySelectorAll('.btn-show-more');
  btnShowMore.forEach((button, i) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.setItem('specie', JSON.stringify(i));
      window.location.href = 'specie.html'
    })
  });
};

showAllBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createElements();
});

// searchBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const search = searchInput.value;
//   localStorage.setItem('specie', JSON.stringify())
//   window.loca
// });
