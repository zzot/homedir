$("a[href^='javascript:popupLandscape']").each( function( i, elem ) {
  var a = $(elem),
    href = a.attr("href");

  a.attr( "href", href.replace( /^.*'(.+)'.*$/, "$1" ) );
});
