

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}
const displayCategories = (categories) => {
    const btnContainer = document.getElementById('btn-container');
    categories.forEach((item) => {
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;
        btnContainer.append(button);
    });
}
loadCategories();

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
}
// const demo = 
// {category_id: '1001', video_id: 'aaaa', thumbnail: 'https://i.ibb.co/L1b6xSq/shape.jpg', title: 'Shape of You', authors: Array(1), …}
// authors
// : 
// Array(1)
// 0
// : 
// {profile_picture: 'https://i.ibb.co/D9wWRM6/olivia.jpg', profile_name: 'Olivia Mitchell', verified: ''}




const displayVideos = (videos) => {
    const videoscontainer = document.getElementById('videos');
    videos.forEach(video => {
        console.log(video)
        const card = document.createElement('div');
        card.classList = 'card ';
        card.innerHTML = `
  <figure class="h-[230px] relative">
    <img class="w-full h-full object-cover"
      src=${video.thumbnail} />
      <span class="absolute right-2 bottom-2 text-white">4545</span>
  </figure>
  <div class="px-0 py-2 flex gap-2">
        <div>
        <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
    </div>
    <div>
    <h2 class="font-bold">${video.title} </h2>
    <div class="flex gap-2 items-center">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified === true ? `<img src="https://icons8.com/icon/2sZ0sdlG9kWP/instagram-verification-badge" />`: ""}
    </div>
    <p> </p>
    </div>

        `
        videoscontainer.append(card);
    })
}
loadVideos();