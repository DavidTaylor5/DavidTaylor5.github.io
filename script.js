document.addEventListener("DOMContentLoaded", () => {

  // Close video popup when user clicks close button
  // document.getElementById('closeButton').onclick = function() {
  //   document.getElementById('videoPopup').style.display = 'none';
  //   const video = document.getElementById('explanationVideo')
  //   video.pause();
  // };

  // Close video popup when user clicks background
  document.getElementById('videoPopup').onclick = function() {
    document.getElementById('videoPopup').style.display = 'none';
    const video = document.getElementById('explanationVideo')
    video.pause();
  };

  const video = document.getElementById('explanationVideo')

  video.addEventListener('click', (event) => {

  event.preventDefault();   // stops default action (e.g. playing/pausing)
  event.stopPropagation();

    if(video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // Open video popup with specific video when project clicked
  document.getElementById('tacomaMusicPlayerProject').onclick = function() {
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = 'Tacoma Music Player App';
    const video = document.getElementById('explanationVideo')
    video.src =  "videos/tacoma-overview.mp4"
    video.onload();
    video.onplay();
  };

  document.getElementById('ecosystemProject').onclick = function() {
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = 'Ecosystem';
    const video = document.getElementById('explanationVideo')
    video.src =  "videos/ecosystem-overview.mp4"
    video.onload();
    video.onplay();
  };

  document.getElementById('demoGeneratorProject').onclick = function() {
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = 'Demo Generator';
    const video = document.getElementById('explanationVideo')
    video.src =  "videos/demo-generator-overview.mp4"
    video.onload();
    video.onplay();
  };

  document.getElementById('gitlabCIProject').onclick = function() {
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = 'Gitlab CI/CD';
    const video = document.getElementById('explanationVideo')
    video.src =  "videos/auto-build-system-overview.mp4"
    video.onload();
    video.onplay();
  };

  document.getElementById('espressoProject').onclick = function() {
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = 'Espresso UI';
    const video = document.getElementById('explanationVideo')
    video.src =  "videos/ui-testing-overview.mp4"
    video.onload();
    video.onplay();
  };
  
});