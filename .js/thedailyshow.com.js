$(".seasons a[id][href='#']")
  .unbind("*")
  .click( function(evt) {
    var elem = $(this);

    $.get( elem.attr("id"), function(data) {
      $(".more_episodes").replaceWith(data);
    });
  });
