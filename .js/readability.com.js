if ( $("body#reading-list").length ) {
  
  $("#reading-views-nav").prepend(
    '<a href="#" id="markread-link" onClick="$(\'li.list-link-archive a\').each( function( i, elem ) { $(elem).click(); } );">Mark all as read</a> &nbsp; '
  );


}
