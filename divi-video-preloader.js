document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('.et_pb_video_box video');

    videos.forEach(function(video) {
        var preloadImage = document.createElement('img');
        preloadImage.src = pluginDirUrl + 'preload-image.jpg';
        preloadImage.alt = 'Preload Image';
        preloadImage.classList.add('preload-image');

        video.parentElement.insertBefore(preloadImage, video);
        video.style.display = 'none';

        video.addEventListener('loadeddata', function() {
            preloadImage.style.display = 'none';
            video.style.display = 'block';
        });
    });
});
