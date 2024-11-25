
document.addEventListener("DOMContentLoaded", function() =>{
    const loadProductsButton = document.querySelector("button.btn.btn-primary.my-2");
    function loadProducts() {
      console.log("Cargando productos...");
      setTimeout(() => {
        console.log("Productos cargados.");
        
      }, 2000);
    }
    loadProductsButton.addEventListener("click", loadProducts);
  });