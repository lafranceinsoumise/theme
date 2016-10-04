$('.data-toggle-collapse').attr('data-toggle', 'collapse');

$('.collapse').on('show.bs.collapse', function (event) {
  var trigger = $('[data-toggle="collapse"][href="#' + event.target.id + '"], [data-toggle="collapse"][data-target="#' + event.target.id + '"]');
  console.log(event);
  trigger.find('.fa-arrow-circle-o-right').removeClass('fa-arrow-circle-o-right').addClass('fa-arrow-circle-o-down');
});

$('.collapse').on('hide.bs.collapse', function (event) {
  var trigger = $('[data-toggle="collapse"][href="#' + event.target.id + '"],' +
                         '[data-toggle="collapse"][data-target="#' + event.target.id + '"]');
  trigger.find('.fa-arrow-circle-o-down').removeClass('fa-arrow-circle-o-down').addClass('fa-arrow-circle-o-right');
});
