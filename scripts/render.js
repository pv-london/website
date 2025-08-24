Handlebars.registerHelper('equals', function(lvalue, rvalue, options) {
    if (arguments.length < 3) {
        throw new Error("Handlebars Helper equals needs 2 parameters");
    }
    if (lvalue && lvalue == rvalue) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('contains', function(lvalue, rvalue, options) {
    if (arguments.length < 3) {
        throw new Error("Handlebars Helper contains needs 2 parameters");
    }
    if (lvalue && lvalue.includes(rvalue)) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

async function loadTemplate(url) {
  const res = await fetch(url);
  return await res.text();
}

async function renderTemplates(data) {
    const name = "Palavra Viva Church";

  // Load templates
  const headerTpl = await loadTemplate('/templates/header.hbs');
  const footerTpl = await loadTemplate('/templates/footer.hbs');

  // Compile
  const headerHTML = Handlebars.compile(headerTpl)(data);
  const footerHTML = Handlebars.compile(footerTpl)({ ...data, year: "2025", siteName: name + " - Londres" });

  // Inject
  if (document.getElementById('header')) document.getElementById('header').innerHTML = headerHTML;
  if (document.getElementById('footer')) document.getElementById('footer').innerHTML = footerHTML;
}
