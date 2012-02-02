var m,
  str,
  pattern,
  lsKey = "dotjs-xbl-tokens",
  seenTokens = JSON.parse( localStorage.getItem(lsKey) ) || [];

$(".storyContent .messageBody, .storyContent .commentContent > span").each( function( i, elem ) {
  pattern = /([a-z\d]{5}-[a-z\d]{5}-[a-z\d]{5}-[a-z\d]{5}-[a-z\d]{5})/ig;
  txt = $(elem).text();

  while ( ( m = pattern.exec(txt) ) !== null ) {
    str = m[0];

    console.log( "dotjs-facebook.com.js: [HIT] " + str );

    if ( $.inArray( str, seenTokens ) === -1 ) {
      console.log( "dotjs-facebook.com.js: [NEW] " + str );
      window.open( "https://live.xbox.com/en-GB/RedeemToken?xr=shellnav&token=" + str );
      seenTokens.push(str);
      localStorage.setItem( lsKey, JSON.stringify(seenTokens) );
    }
  }

});
