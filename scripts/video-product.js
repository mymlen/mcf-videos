//------------------------------------------------------------------------------
// Video product (self hosted)
//------------------------------------------------------------------------------

if( $('.selectors [data-caption$="mp4"]').length ){
  var videoId = $('.selectors [data-caption$="mp4"]').data('caption');
  var videoEssentials = $('<div data-slide-id="video-1" class="zoom-gallery-slide video-slide"><div class="AspectRatio"><video loop controls><source src="" type="video/mp4"></video></div></div>');

  $('<i class="fa fa-play-circle"></i>').prependTo('.selectors [data-caption$="mp4"]');
  $(videoEssentials).insertBefore('.zoom-gallery-slide');
  $('<i class="fa fa-play-circle"></i>').prependTo('.zoom-gallery-slide a');
  $('.video-slide video source').attr('src', videoId );

  $('.zoom-gallery-slide i').on('click touchstart', function() {
    $('.video-slide video').get('0').play();
  });

  $('.selectors [data-slide-id="zoom"]').on('click touchstart', function() {
    $('.video-slide video').get(0).pause();
    $('.zoom-gallery-slide i').hide();
  });

  $('.selectors [data-caption$="mp4"]').on('click touchstart', function() {
    $('.zoom-gallery-slide [data-caption]').attr('data-caption', videoId );
    $('.zoom-gallery-slide i').show();
  });
}

//------------------------------------------------------------------------------
// Video product (youtube)
//------------------------------------------------------------------------------

if( $('.selectors [data-caption*="youtu"]').length ){
  var youtubeUrl = $('.selectors [data-caption*="youtu"]').data('caption');
  var youtubeEssentials = $('<div data-slide-id="video-1" class="zoom-gallery-slide video-slide"><iframe width="1280" height="720" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');

  $(youtubeEssentials).insertBefore('.zoom-gallery-slide');
  $('<i class="fa fa-play-circle"></i>').prependTo('.selectors [data-caption*="youtu"]');
  $('.video-slide iframe').attr('src', youtubeUrl );
}

if( $('.selectors [data-caption*="youtu"]').length ){
  $('<i class="fa fa-play-circle"></i>').prependTo('.zoom-gallery-slide a');

  $('.zoom-gallery-slide i').on('click touchstart', function() {
    var Source = $(".video-slide iframe").attr('src') + "?autoplay=1";
    $('.video-slide iframe').attr('src', Source );
  });

  $('.selectors a:not([data-caption*="youtu"])').on('click touchstart', function() {
    $('.zoom-gallery-slide i').hide();
  });

  $('.selectors [data-caption*="youtu"]').on('click touchstart', function() {
    $('.zoom-gallery-slide i').show();
  });

  $('.selectors [data-slide-id="zoom"]').on('click touchstart', function() {
    var newSource = $(".video-slide iframe").attr('src').replace("?autoplay=1", "?autoplay=0");
    $(".video-slide iframe").attr('src', newSource );
  });
}


//------------------------------------------------------------------------------
// Prepare MagicZoom for videos
//------------------------------------------------------------------------------

$('.zoom-gallery-slide i').on('click touchstart', function(e) {
  $('.zoom-gallery-slide.active').removeClass('active');
  $('.zoom-gallery .video-slide').addClass('active');
  e.preventDefault;
});

$(document).ready(function(){
  $('.selectors a:first-child').click();
});

$('.zoom-gallery #CurrentProductImage').attr('data-slide-id', 'zoom');

$('.zoom-gallery .selectors a').on('click touchstart', function(e) {
  var iframe = $('.active iframe[src*="youtube"],.active iframe[src*="vimeo"]');
  if (iframe.length) {
    iframe.attr('src',iframe.attr('src'));
  }
  $('.main-images .zoom-gallery-slide').removeClass('active');
  $('.selectors a').removeClass('active');
  $('.main-images .zoom-gallery-slide[data-slide-id="'+$(this).attr('data-slide-id')+'"]').addClass('active');
  $(this).addClass('active');
  e.preventDefault();
});
