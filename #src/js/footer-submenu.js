(() => {
  const productToggler = document.querySelector('[data-product-toggler]');
  const supportToggler = document.querySelector('[data-support-toggler]');
  const companyToggler = document.querySelector('[data-company-toggler]');
  const legalToggler = document.querySelector('[data-legal-toggler]');

  const productContainer = document.querySelector('[data-product-container]');
  const supportContainer = document.querySelector('[data-support-container]');
  const companyContainer = document.querySelector('[data-company-container]');
  const legalContainer = document.querySelector('[data-legal-container]');

  productToggler.addEventListener("click", (event) => {
    productContainer.classList.toggle("is-open");
  });
  supportToggler.addEventListener("click", (event) => {
    supportContainer.classList.toggle("is-open");
  });
  companyToggler.addEventListener("click", (event) => {
    companyContainer.classList.toggle("is-open");
  });
  legalToggler.addEventListener("click", (event) => {
    legalContainer.classList.toggle("is-open");
});
})();