  document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const songListItem = createSongListItem(event.target);
    const songList = document.querySelector('#song-list');
    songList.appendChild(songListItem);
  
    event.target.reset();
  }
  
  const createSongListItem = function (form) {
    const songListItem = document.createElement('li');
    songListItem.classList.add('song-list-item');
  
    const artist = document.createElement('h2');
    artist.textContent = form.artist.value;
    songListItem.appendChild(artist);
  
    const title = document.createElement('h3');
    title.textContent = form.title.value;
    songListItem.appendChild(song);

    const release = document.createElement('h4');
    release.textContent = form.release.value;
    songListItem.appendChild(release);
  
    const category = document.createElement('p');
    category.textContent = form.category.value;
    songListItem.appendChild(category);
  
    return songListItem;
  }
  
  const handleDeleteAllClick = function (event) {
    const songList = document.querySelector('#song-list');
    songList.innerHTML = '';
  }