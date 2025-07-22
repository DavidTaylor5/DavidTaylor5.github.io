document.addEventListener("DOMContentLoaded", () => {

  // Close video popup when user clicks close button
  document.getElementById('closeButton').onclick = function() {
    document.getElementById('videoPopup').style.display = 'none';
  };

  // Close video popup when user clicks background
  document.getElementById('videoPopup').onclick = function() {
    document.getElementById('videoPopup').style.display = 'none';
  };

  // Open video popup with specific video when project clicked
  document.getElementById('tacomaMusicPlayerProject').onclick = function() {
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = 'Tacoma Music Player App';
    const video = document.getElementById('explanationVideo')
    video.src =  "videos/tacoma-final-fr.mp4"
    video.onload();
    video.onplay();
  };

  document.getElementById('ecosystemProject').onclick = function() {
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = 'Ecosystem';
    const video = document.getElementById('explanationVideo')
    video.src =  "videos/ecosystem-final-fr.mp4"
    video.onload();
    video.onplay();
  };

  document.getElementById('demoGeneratorProject').onclick = function() {
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = 'Demo Generator';
    const video = document.getElementById('explanationVideo')
    video.src =  "videos/tacoma-final-fr.mp4"
    video.onload();
    video.onplay();
  };

  document.getElementById('gitlabCIProject').onclick = function() {
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = 'Gitlab CI/CD';
    const video = document.getElementById('explanationVideo')
    video.src =  "videos/tacoma-final-fr.mp4"
    video.onload();
    video.onplay();
  };

  document.getElementById('espressoProject').onclick = function() {
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = 'Espresso UI';
    const video = document.getElementById('explanationVideo')
    video.src =  "videos/tacoma-final-fr.mp4"
    video.onload();
    video.onplay();
  };

});