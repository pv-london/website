async function loadTemplate(url) {
  const res = await fetch(url);
  return await res.text();
}

async function renderTemplates(data) {
  // Load templates
  const headerTpl = await loadTemplate('templates/header.hbs');
  const footerTpl = await loadTemplate('templates/footer.hbs');

  // Compile
  const headerHTML = Handlebars.compile(headerTpl)({ siteName: "Palavra Viva Church" });
  const footerHTML = Handlebars.compile(footerTpl)({ year: "2025", siteName: "Palavra Viva Church" });

  // Inject
  document.getElementById('header').innerHTML = headerHTML;
  document.getElementById('footer').innerHTML = footerHTML;
}
