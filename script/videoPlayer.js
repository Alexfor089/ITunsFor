export const videoPlayerInit = () => {

   const videoPlayer = document.querySelector('.video-player');
   const videoBtnPlayer = document.querySelector('.video-button__play');
   const videoBtnStop = document.querySelector('.video-button__stop');
   const videoTimePass = document.querySelector('.video-time__passed');
   const videoProgres = document.querySelector('.video-progress');
   const videoTimeTotal = document.querySelector('.video-time__total');

   const toogleicon = () => {
      if (videoPlayer.paused) {
         videoBtnPlayer.classList.remove('fa-pause');
         videoBtnPlayer.classList.add('fa-play');
      } else {
         videoBtnPlayer.classList.add('fa-pause');
         videoBtnPlayer.classList.remove('fa-play');
      }
   }
   const tooglePlay = () => {
      if (videoPlayer.paused) {
         videoPlayer.play();
      } else {
         videoPlayer.pause()
      }
      toogleicon();
   };

   const stopPlay = () => {
      videoPlayer.pause();
      videoPlayer.currentTime = 0;

   };

   const addZero = n => n < 10 ? '0' + n : n;


   videoPlayer.addEventListener('click', tooglePlay);
   videoBtnPlayer.addEventListener('click', tooglePlay);

   videoPlayer.addEventListener('play', toogleicon);
   videoPlayer.addEventListener('pause', toogleicon);

   videoBtnStop.addEventListener('click', stopPlay);

   videoPlayer.addEventListener('timeupdate', () => {
      const currentTime = videoPlayer.currentTime;
      const duration = videoPlayer.duration;

      videoProgres.value = (currentTime / duration) * 100;

      let minutePaused = Math.floor(currentTime / 60);
      let secondsPaused = Math.floor(currentTime % 60);

      let minuteTotal = Math.floor(duration / 60);
      let secondsTotal = Math.floor(duration % 60);
      videoTimePass.textContent = `${addZero(minutePaused)}:${addZero(secondsPaused)}`;
      videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;
   });
   videoProgres.addEventListener('change', () => {
      const duration = videoPlayer.duration;
      const value = videoProgres.value;

      videoPlayer.currentTime = (value * duration) / 100;


   });

};