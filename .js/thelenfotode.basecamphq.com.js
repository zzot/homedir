jQuery(".formatted_text_body")
  .find(
    "p:contains('Matthias Schwarzer Rechtsanwalt') ~ p, " +
    "p:contains('Matthias Schwarzer Rechtsanwalt'), " +
    "p:contains('mailto:notifications@thelenfotode.basecamphq.com')"
  )
  .hide();