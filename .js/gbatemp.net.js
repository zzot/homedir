var m,
  i = 0,
  str,
  pattern,
  lsKey = "dotjs-xbl-tokens",
  seenTokens = JSON.parse( localStorage.getItem(lsKey) ) || [];

$(".postcolor").each( function( i, elem ) {
  pattern = /([a-z\d]{5}-[a-z\d]{5}-[a-z\d]{5}-[a-z\d]{5}-[a-z\d]{5})/ig;
  txt = $(elem).text();

  while ( ( m = pattern.exec(txt) ) !== null ) {
    str = m[0];

    console.log( "dotjs-gbatemp.net.js: [HIT] " + str );

    if ( $.inArray( str, seenTokens ) === -1 ) {
      console.log( "dotjs-gbatemp.net.js: [NEW] " + str );
      window.setTimeout( function() {
        console.log( "dotjs-gbatemp.net.js: [GO] " + str );
        window.open( "https://live.xbox.com/en-GB/RedeemToken?xr=shellnav&token=" + str );
      }, i * 1000 );
      seenTokens.push(str);
      localStorage.setItem( lsKey, JSON.stringify(seenTokens) );
      i++;
    }
  }

});
