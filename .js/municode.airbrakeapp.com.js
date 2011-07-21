function buildTextmateLink(line) {
  line = $(line);
  var lineText = line.text(),
    repo = $.trim( $("dt:first + dd").text() );
  
  line.html( [
    "<a href='",
    lineText.replace( /^(.+):(\d+).*$/, 'txmt://open?url=file:///Users/Carlo/Code/' + repo + '/$1&amp;line=$2&amp;column=1' ),
    "'>",
    lineText,
    "</a>"
  ].join("") );
}

jQuery("table.summary th:contains('File') ~ td, #backtrace p:contains('app/')").each( function( i, line ) {
  buildTextmateLink(line);
});
