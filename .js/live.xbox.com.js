function searchToObject() {
  var pairs = document.location.search.substring(1).split("&"),
    obj = {},
    pair,
    i;

  for ( i in pairs ) {
    if ( pairs[i] === "" ) continue;

    pair = pairs[i].split("=");
    obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
  }

  return obj;
}


var params,
  elem,
  f;


if ( /RedeemToken/.test(document.location.href) ) {
  params = searchToObject();

  if (params.token) {
    elem = $("#TokenValue");
    f = elem.closest("form");

    elem.val(params.token);
    f.attr( "action", f.attr("action").replace( /&token=[^$&]*/, "" ) );
    f.submit();
  }
}
