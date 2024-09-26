document.addEventListener('DOMContentLoaded', () => {

const searchButton = document.querySelector('#searchButton');
const inputBox = document.querySelector('#giphySearchBox');
const deleteButton = document.querySelector('#clearButton');
const divContainer = document.querySelector('#divContainer'); 

const giphyFunction = async () => {
  try {
    const searchItem = inputBox.value;
    const gifDraw = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
            api_key: '65XLRQanFRxyvVOPzdq6P1OJGm2T55OK',    
            q: searchItem,
          }    
    });

    gifDraw.data.data[0].images.original.url
    let individualGif = gifDraw.data.data[0].images.original.url;
      let gifImg = document.createElement('img');
      gifImg.src = individualGif;
      divContainer.appendChild(gifImg);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

searchButton.addEventListener('click', function(e) {
    giphyFunction();
});
deleteButton.addEventListener('click', function(e) {
 const allGifs = document.querySelectorAll('img');
 allGifs.forEach((img) => img.remove());
  
});

});