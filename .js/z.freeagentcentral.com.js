$("#title_actions")
  .prepend("<li><a href='#' class='title_button'><span>Print</span></a></li>")
  .click( function() {
    $("link[media=screen]:first").removeAttr("media");
    $("head").append("<style type='text/css'>td.bold.money, td.action, #title_actions, #transaction-legend, #mainContent > p { display: none; }</style>");
    $(".money:contains('.')").prepend("€");
    $(".flexi-table tr>td[id]").prev().css( "white-space", "nowrap" );
    $("#MainTitle h1").text( "Zottmann, " + $("select[name='view'] :selected").text() );
    $("th.td10.moneyth:last, #statement_table form").remove();
    $( $("#statement_table tr")[1] ).remove();
    window.setTimeout( window.print, 500 );
  } );