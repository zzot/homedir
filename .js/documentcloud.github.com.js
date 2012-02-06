$("#sidebar.interface a.toc_title:contains(Examples)")
  .next()
  .andSelf()
  .remove();

$("#sidebar.interface .toc_section").each(function(i, elem) {
  return $(elem).find("li").sort(function(a, b) {
    var t1, t2;
    t1 = $(a).find("a").text();
    t2 = $(b).find("a").text();
    if (t1 > t2) {
      return 1;
    } else if (t1 < t2) {
      return -1;
    } else {
      return 0;
    }
  }).appendTo($(elem));
});
