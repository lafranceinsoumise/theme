/* eslint-env browser, jquery */

$('.data-toggle-collapse').attr('data-toggle', 'collapse');

$('.collapse').on('show.bs.collapse', function(event) {
  var trigger = $('[data-toggle="collapse"][href="#' + event.target.id +
    '"], [data-toggle="collapse"][data-target="#' + event.target.id + '"]');
  console.log(event);
  trigger.find('.fa-arrow-circle-o-right')
    .removeClass('fa-arrow-circle-o-right')
    .addClass('fa-arrow-circle-o-down');
});

$('.collapse').on('hide.bs.collapse', function(event) {
  var trigger = $('[data-toggle="collapse"][href="#' + event.target.id + '"],' +
    '[data-toggle="collapse"][data-target="#' + event.target.id + '"]');
  trigger.find('.fa-arrow-circle-o-down')
    .removeClass('fa-arrow-circle-o-down')
    .addClass('fa-arrow-circle-o-right');
});

// Responsive videos

$(function() {
  var responsiveVideo = function() {
    // Find all YouTube videos
    var $allVideos = $("iframe[src*='//www.youtube.com'], " +
      "iframe[src*='//www.facebook.com'], " +
      "iframe[src*='//www.dailymotion.com']");
    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
      $(this)
        .data('aspectRatio', this.height / this.width)
        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');
    });
    // When the window is resized
    $(window).resize(function() {
      // Resize all videos according to their own aspect ratio
      $allVideos.each(function() {
        var $el = $(this);
        var newWidth = $el.parent().width();

        $el
          .width(newWidth)
          .height(newWidth * $el.data('aspectRatio'))
          .css('margin-top', '10px')
          .css('margin-bottom', '10px');
      });
    // Kick off one resize to fix all videos on page load
    }).resize();
  };
  responsiveVideo();
});
