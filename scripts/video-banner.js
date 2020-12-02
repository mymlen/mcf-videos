//------------------------------------------------------------------------------
// Video banner - remove iframe if find mp4-file format
//------------------------------------------------------------------------------

if( $('.VideoBannerArea [data-url$="mp4"]').length ){
  $('.VideoBannerArea iframe').remove();
}

//------------------------------------------------------------------------------
// Video banner - see if url has playlist and give the right path
//------------------------------------------------------------------------------

var Playlist = $(".VideoBannerArea iframe").attr('src') + "&autoplay=1&loop=1&mute=1&rel=0&modestbranding=1&controls=0";
var NoPlaylist = $(".VideoBannerArea iframe").attr('src') + "?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0";

if( $('.VideoBannerArea [data-url*="list"]').length ){
  $('.VideoBannerArea iframe').attr('src', Playlist );
}

else {
  $('.VideoBannerArea iframe').attr('src', NoPlaylist );
}
