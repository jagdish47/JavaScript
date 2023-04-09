// api key = AIzaSyBqhLqcL4DLwm4ofyD3duCCesEMTtz21nY
// https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBqhLqcL4DLwm4ofyD3duCCesEMTtz21nY

let API_KEY = "AIzaSyBqhLqcL4DLwm4ofyD3duCCesEMTtz21nY";

// async function searchVideo()

const searchVideo = async () => {
  let searchItem = document.querySelector("#searchTerm").value;

  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${searchItem}&type=video&maxResults=25`
  );

  let data = await res.json();

  let videoList = data.items;

  displayData(videoList);
};

let videoContainer = document.querySelector("#container");

let displayData = (data) => {
  videoContainer.innerHTML = null;
  data.forEach((video) => {
    // console.log(video.id.videoId);

    const {
      id: { videoId },
    } = video;

    let videoCard = document.createElement("div");

    let iFrame = document.createElement("iframe");

    iFrame.src = `https://www.youtube.com/embed/${videoId}`;

    videoCard.append(iFrame);

    videoContainer.append(videoCard);

    console.log(videoId);
  });
};
