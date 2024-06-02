const specieDiv = document.getElementById('div-specie');

const fetchJSON = async () => {
  const req = await fetch('./hominidae.json');
  const res = await req.json();
  const { species } = res;
  return species;
}

const species = await fetchJSON();
console.log(species);

const renderSpecie = () => {
  const specieIndex = localStorage.getItem('specie');

  if (!specieIndex) {
    return specieDiv.innerHTML = `
    <div>
      <p>Especie not selected. Please return to Home Page.</p>
      <a href="./index.html">RETURN</a>
    </div>
    `
  }

  const specieContent = species[specieIndex]
  const { specie, scientificName, genus, distribution, representation, minHeight, maxHeight, timeRegistered } = specieContent
  specieDiv.innerHTML = `
      <div id='div-content'>
      <h1>${specie}</h1>
      <img src='${representation}'>
      <p><b>Scientific Name:</b> ${scientificName}</p>
      <p><b>Genus:</b> ${genus}</p>
      <p><b>Distribution: </b> ${distribution}</p>
      <p><b>Height:</b> ${minHeight}cm - ${maxHeight}cm
      <p><b>History Time:</b> ${timeRegistered} years ago</p>
      <a href="./index.html">RETURN</a>
    </div>
  `
}

renderSpecie();