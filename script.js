const searchInput = document.getElementById('search-input')
const resultArtist = document.getElementeById('result-artist')
const resultPlaylist = document.getElementById('result-playlist')

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((Response) => Response.json())
        .then((result) => displayResults(result))
}

function displayResults() {
    resultPlaylist.classList.add('hidden');
    const artistName = getElementById('artist-name');
    const artistImage = getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
       resultPlaylist.classList.add('hidden');
       resultArtist.classList.remove('hidden');
       return;
    }

    requestApi(searchTerm);
});