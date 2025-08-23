async function loadTemplate(url) {
  const res = await fetch(url);
  return await res.text();
}

async function renderTemplates(data) {
  // Load templates
  const headerTpl = await loadTemplate('templates/header.hbs');
  const footerTpl = await loadTemplate('templates/footer.hbs');

  // Compile
  const headerHTML = Handlebars.compile(headerTpl)({ });
  const footerHTML = Handlebars.compile(footerTpl)({ year: "2025", siteName: "Palavra Viva Church - Londres" });

  // Inject
  document.getElementById('header').innerHTML = headerHTML;
  document.getElementById('footer').innerHTML = footerHTML;
}
