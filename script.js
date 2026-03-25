const categories = [
  {
    id: "organizacao",
    name: "Organização",
    description: "Peças práticas para manter cada ambiente mais leve, funcional e harmonioso.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "decoracao",
    name: "Decoração",
    description: "Objetos que acrescentam charme, aconchego e identidade ao seu espaço.",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "iluminacao",
    name: "Iluminação",
    description: "Elementos pensados para criar atmosferas suaves, elegantes e acolhedoras.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "moveis",
    name: "Móveis",
    description: "Peças versáteis para compor ambientes bonitos, funcionais e bem resolvidos.",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80"
  }
];

const products = [
  {
    id: 1,
    name: "Bandeja Decorativa",
    category: "organizacao",
    price: 28,
    currency: "BRL",
    stripeLink: "https://buy.stripe.com/TU_LINK_PRODUCTO_1",
    rating: 4.9,
    reviewCount: 108,
    shortDescription: "Peça elegante para organizar velas, perfumes e pequenos objetos.",
    fullDescription: "Compacta e delicada, esta bandeja decorativa é ideal para organizar peças pequenas com leveza visual. Funciona muito bem em mesas laterais, aparadores e banheiros, trazendo ordem e beleza ao espaço.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    exclusive: true
  },
  {
    id: 2,
    name: "Jarrão Cerâmico Branco",
    category: "decoracao",
    price: 32,
    currency: "BRL",
    stripeLink: "https://buy.stripe.com/TU_LINK_PRODUCTO_2",
    rating: 4.8,
    reviewCount: 85,
    shortDescription: "Sofisticado, neutro e perfeito para composições minimalistas.",
    fullDescription: "Este jarrão cerâmico branco foi pensado para ambientes serenos e elegantes. Seu design limpo harmoniza com flores secas, galhos ou pode ser usado sozinho como peça escultural.",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=80",
    exclusive: true
  },
  {
    id: 3,
    name: "Luminária Compacta",
    category: "iluminacao",
    price: 18,
    currency: "BRL",
    stripeLink: "https://buy.stripe.com/TU_LINK_PRODUCTO_3",
    rating: 4.7,
    reviewCount: 53,
    shortDescription: "Ideal para cantos acolhedores e iluminação suave.",
    fullDescription: "Uma peça compacta que ajuda a criar pontos de luz delicados e aconchegantes. Ideal para quartos, mesas laterais e ambientes menores.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    exclusive: false
  },
  {
    id: 4,
    name: "Prateleira de Parede",
    category: "moveis",
    price: 65,
    currency: "BRL",
    stripeLink: "https://buy.stripe.com/TU_LINK_PRODUCTO_4",
    rating: 4.9,
    reviewCount: 92,
    shortDescription: "Perfeita para vasos, livros e pequenos itens decorativos.",
    fullDescription: "Uma solução prática para quem deseja organizar sem pesar visualmente o ambiente. A prateleira acomoda objetos decorativos e ajuda a valorizar cantos vazios com equilíbrio.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
    exclusive: false
  },
  {
    id: 5,
    name: "Suporte Compacto",
    category: "moveis",
    price: 22,
    currency: "BRL",
    stripeLink: "https://buy.stripe.com/TU_LINK_PRODUCTO_5",
    rating: 4.8,
    reviewCount: 35,
    shortDescription: "Compacto e delicado para apoiar objetos decorativos.",
    fullDescription: "Pensado para ambientes menores, este suporte compacto traz funcionalidade e estética suave. Ideal para criar composições elegantes em lavabos, halls e quartos.",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    exclusive: false
  },
  {
    id: 6,
    name: "Cesto Decorativo",
    category: "organizacao",
    price: 26,
    currency: "BRL",
    stripeLink: "https://buy.stripe.com/TU_LINK_PRODUCTO_6",
    rating: 4.7,
    reviewCount: 41,
    shortDescription: "Ótimo para organizar mantas, revistas e objetos do dia a dia.",
    fullDescription: "Um cesto com visual acolhedor e funcional, perfeito para manter a organização sem abrir mão da estética.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    exclusive: false
  }
];

let currentCategoryId = null;
let currentProduct = null;
let cart = [];

const homeView = document.getElementById("homeView");
const categoryView = document.getElementById("categoryView");
const productView = document.getElementById("productView");
const cartView = document.getElementById("cartView");

const categoryGrid = document.getElementById("categoryGrid");
const exclusiveGrid = document.getElementById("exclusiveGrid");
const categoryProductGrid = document.getElementById("categoryProductGrid");
const relatedGrid = document.getElementById("relatedGrid");
const cartItems = document.getElementById("cartItems");

const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");
const categoryBreadcrumbName = document.getElementById("categoryBreadcrumbName");

const productBreadcrumbCategory = document.getElementById("productBreadcrumbCategory");
const productBreadcrumbName = document.getElementById("productBreadcrumbName");
const productCategoryLabel = document.getElementById("productCategoryLabel");
const productTitle = document.getElementById("productTitle");
const productRating = document.getElementById("productRating");
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");
const productMainImage = document.getElementById("productMainImage");
const addToCartBtn = document.getElementById("addToCartBtn");
const buyNowBtn = document.getElementById("buyNowBtn");

const cartCount = document.getElementById("cartCount");
const summaryItemsCount = document.getElementById("summaryItemsCount");
const summaryTotal = document.getElementById("summaryTotal");

const goHomeBtn = document.getElementById("goHomeBtn");
const scrollToCategoriesBtn = document.getElementById("scrollToCategoriesBtn");
const openCartBtn = document.getElementById("openCartBtn");
const backFromCategoryBtn = document.getElementById("backFromCategoryBtn");
const backFromProductBtn = document.getElementById("backFromProductBtn");
const backFromCartBtn = document.getElementById("backFromCartBtn");
const checkoutCartBtn = document.getElementById("checkoutCartBtn");

const qtyMinus = document.getElementById("qtyMinus");
const qtyPlus = document.getElementById("qtyPlus");
const qtyValue = document.getElementById("qtyValue");

let productQuantity = 1;

function formatPrice(value, currency = "BRL") {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency
  }).format(value);
}

function showView(view) {
  [homeView, categoryView, productView, cartView].forEach(v => v.classList.remove("active"));
  view.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getCategoryById(id) {
  return categories.find(category => category.id === id);
}

function buildCategoryCard(category) {
  return `
    <article class="category-card" data-category-id="${category.id}">
      <img src="${category.image}" alt="${category.name}" />
      <div class="category-body">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
      </div>
    </article>
  `;
}

function buildProductCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-card-body">
        <h3 class="product-card-title">${product.name}</h3>
        <p class="product-card-price">${formatPrice(product.price, product.currency)}</p>
        <p class="product-card-description">${product.shortDescription}</p>
        <div class="product-card-actions">
          <button class="btn-secondary" type="button" data-view-product="${product.id}">Ver mais</button>
          <button class="btn-secondary" type="button" data-add-cart="${product.id}">Adicionar ao carrinho</button>
          <a class="btn-primary" href="${product.stripeLink}" target="_self" rel="noopener">Comprar agora</a>
        </div>
      </div>
    </article>
  `;
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map(buildCategoryCard).join("");

  categoryGrid.querySelectorAll("[data-category-id]").forEach(card => {
    card.addEventListener("click", () => {
      const categoryId = card.dataset.categoryId;
      openCategory(categoryId);
    });
  });
}

function renderExclusives() {
  const exclusiveProducts = products.filter(product => product.exclusive).slice(0, 2);

  exclusiveGrid.innerHTML = exclusiveProducts.map(buildProductCard).join("");
  attachProductCardActions(exclusiveGrid);
}

function renderCategoryProducts() {
  const filteredProducts = products.filter(product => product.category === currentCategoryId);

  if (!filteredProducts.length) {
    categoryProductGrid.innerHTML = `<div class="empty-state">Ainda não há produtos nesta categoria.</div>`;
    return;
  }

  categoryProductGrid.innerHTML = filteredProducts.map(buildProductCard).join("");
  attachProductCardActions(categoryProductGrid);
}

function renderRelatedProducts() {
  const relatedProducts = products
    .filter(product => product.id !== currentProduct.id && product.category === currentProduct.category)
    .slice(0, 3);

  if (!relatedProducts.length) {
    relatedGrid.innerHTML = `<div class="empty-state">Em breve teremos mais produtos relacionados.</div>`;
    return;
  }

  relatedGrid.innerHTML = relatedProducts.map(buildProductCard).join("");
  attachProductCardActions(relatedGrid);
}

function openCategory(categoryId) {
  const category = getCategoryById(categoryId);
  if (!category) return;

  currentCategoryId = categoryId;
  categoryTitle.textContent = category.name;
  categoryDescription.textContent = category.description;
  categoryBreadcrumbName.textContent = category.name;

  renderCategoryProducts();
  showView(categoryView);
}

function openProduct(productId) {
  const product = products.find(item => item.id === Number(productId));
  if (!product) return;

  currentProduct = product;
  productQuantity = 1;
  qtyValue.textContent = productQuantity;

  const category = getCategoryById(product.category);

  productBreadcrumbCategory.textContent = category ? category.name : "Categoria";
  productBreadcrumbName.textContent = product.name;
  productCategoryLabel.textContent = category ? category.name : "";
  productTitle.textContent = product.name;
  productRating.textContent = `★★★★★ ${product.rating} · ${product.reviewCount} avaliações`;
  productPrice.textContent = formatPrice(product.price, product.currency);
  productDescription.textContent = product.fullDescription;
  productMainImage.src = product.image;
  productMainImage.alt = product.name;
  buyNowBtn.href = product.stripeLink;

  renderRelatedProducts();
  showView(productView);
}

function attachProductCardActions(scopeElement) {
  scopeElement.querySelectorAll("[data-view-product]").forEach(button => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openProduct(button.dataset.viewProduct);
    });
  });

  scopeElement.querySelectorAll("[data-add-cart]").forEach(button => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(Number(button.dataset.addCart), 1);
    });
  });
}

function addToCart(productId, quantity = 1) {
  const product = products.find(item => item.id === Number(productId));
  if (!product) return;

  const existing = cart.find(item => item.productId === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      productId: product.id,
      quantity
    });
  }

  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== Number(productId));
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => {
    const product = products.find(p => p.id === item.productId);
    return acc + (product ? product.price * item.quantity : 0);
  }, 0);

  cartCount.textContent = totalItems;
  summaryItemsCount.textContent = totalItems;
  summaryTotal.textContent = formatPrice(totalPrice, "BRL");

  renderCartItems();
}

function renderCartItems() {
  if (!cart.length) {
    cartItems.innerHTML = `<div class="empty-state">Seu carrinho ainda está vazio.</div>`;
    return;
  }

  cartItems.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return "";

    return `
      <article class="cart-item">
        <img src="${product.image}" alt="${product.name}" />
        <div>
          <h3 class="cart-item-title">${product.name}</h3>
          <p class="cart-item-meta">Quantidade: ${item.quantity}</p>
          <p class="cart-item-meta">Preço unitário: ${formatPrice(product.price, product.currency)}</p>
        </div>
        <div class="cart-item-actions">
          <strong>${formatPrice(product.price * item.quantity, product.currency)}</strong>
          <button type="button" data-remove-cart="${product.id}">Remover</button>
        </div>
      </article>
    `;
  }).join("");

  cartItems.querySelectorAll("[data-remove-cart]").forEach(button => {
    button.addEventListener("click", () => {
      removeFromCart(Number(button.dataset.removeCart));
    });
  });
}

function checkoutCart() {
  if (!cart.length) return;

  const firstProduct = products.find(product => product.id === cart[0].productId);
  if (firstProduct?.stripeLink) {
    window.location.href = firstProduct.stripeLink;
  }
}

goHomeBtn.addEventListener("click", () => showView(homeView));
scrollToCategoriesBtn.addEventListener("click", () => {
  document.getElementById("categoriesSection")?.scrollIntoView({ behavior: "smooth" });
});
openCartBtn.addEventListener("click", () => showView(cartView));
backFromCategoryBtn.addEventListener("click", () => showView(homeView));
backFromProductBtn.addEventListener("click", () => {
  if (currentCategoryId) {
    showView(categoryView);
  } else {
    showView(homeView);
  }
});
backFromCartBtn.addEventListener("click", () => showView(homeView));
checkoutCartBtn.addEventListener("click", checkoutCart);

qtyMinus.addEventListener("click", () => {
  if (productQuantity > 1) {
    productQuantity--;
    qtyValue.textContent = productQuantity;
  }
});

qtyPlus.addEventListener("click", () => {
  productQuantity++;
  qtyValue.textContent = productQuantity;
});

addToCartBtn.addEventListener("click", () => {
  if (currentProduct) {
    addToCart(currentProduct.id, productQuantity);
  }
});

renderCategories();
renderExclusives();
updateCartUI();
