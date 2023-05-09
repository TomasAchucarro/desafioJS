class ProductManager {
  #products;
  #error;
  constructor() {
    this.#products = [];
    this.#error = undefined;
  }

  getProducts = () => this.#products;

  getProductsById = (id) => {
    const Products = this.#products.find((item) => item.id === id);
    if (!Products) return "Not Found";
    return Products;
  };
  #generateId = () =>
    this.#products.length === 0
      ? 1
      : this.#products[this.#products.length - 1].id + 1;

  #validarProducts = (title, description, price, thumbnail, code, stock) => {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      this.#error = `[${title}]: faltan campos`;
    } else {
      const found = this.#products.find((item) => item.code === code);
      if (found) this.#error = `[${title}]: el code ya existe`;
      else this.#error = undefined;
    }
  };
  addProducts = (title, description, price, thumbnail, code, stock) => {
    this.#validarProducts(title, description, price, thumbnail, code, stock);
    if (this.#error === undefined)
      this.#products.push({
        id: this.#generateId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      });
    else console.log(this.#error);
  };
}

const productManager = new ProductManager();
productManager.addProducts(
  "Leche",
  "Leche Entera Sachet 1L",
  "$150",
  "https://www.multifood.com.ar/images/000Z-006-003-00156189Z-006-003-001-LecheSachetEntera.png",
  "2000",
  "5"
);
productManager.addProducts(
  "Gaseosa",
  "Gaseosa de Pomelo",
  "$120",
  "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/962/2696/unnamed__06461.1656358317.jpg?c=2",
  "2001",
  "5"
);
productManager.addProducts(
  "Aceite",
  "Aceite Natural 0,9L",
  "$90",
  "https://jumboargentina.vtexassets.com/arquivos/ids/687695/Aceite-De-Girasol-Natura-900-Ml-1-26543.jpg?v=637799421695770000",
  "2002",
  "3"
);
productManager.addProducts(
  "Huevo",
  "Huevo Blanco 6u",
  "$75",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHv6cwQ1hfREQ6yCIpKqRrsmYpwdZL_3C9DA&usqp=CAU",
  "2003",
  "8"
);
productManager.addProducts(
  "Fideo",
  "Fideo Tallarin 500g",
  "$175",
  "https://carrefourar.vtexassets.com/arquivos/ids/181705/7790070318657_02.jpg?v=637468587775700000",
  "2004",
  "3"
);

console.log(productManager.getProducts());
console.log(productManager.getProductsById(1));
console.log(productManager.getProductsById(2));

