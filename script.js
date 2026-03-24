const products = [
  {
    id: 1,
    name: 'Bandeja Decorativa',
    category: 'Organização',
    price: 28,
    currency: 'USD',
    stripeLink: 'https://buy.stripe.com/TU_LINK_PRODUCTO_1',
    rating: 4.9,
    reviewCount: 108,
    shortDescription: 'Peça elegante para organizar velas, perfumes e pequenos objetos.',
    fullDescription:
      'Compacta e delicada, esta bandeja decorativa é ideal para organizar peças pequenas com leveza visual. Funciona muito bem em mesas laterais, aparadores e banheiros, trazendo ordem e beleza ao espaço.',
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 2,
    name: 'Jarrão Cerâmico Branco',
    category: 'Decoração',
    price: 32,
    currency: 'USD',
    stripeLink: 'https://buy.stripe.com/TU_LINK_PRODUCTO_2',
    rating: 4.8,
    reviewCount: 85,
    shortDescription: 'Sofisticado, neutro e perfeito para composições minimalistas.',
    fullDescription:
      'Este jarrão cerâmico branco foi pensado para ambientes serenos e elegantes. Seu design limpo harmoniza com flores secas, galhos ou pode ser usado sozinho como peça escultural.',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 3,
    name: 'Maceta Nórdica Compacta',
    category: 'Funcionalidade',
    price: 18,
    currency: 'USD',
    stripeLink: 'https://buy.stripe.com/TU_LINK_PRODUCTO_3',
    rating: 4.7,
    reviewCount: 53,
    shortDescription: 'Ideal para plantas pequenas e ambientes acolhedores.',
    fullDescription:
      'Compacta e delicada, esta peça é ideal para plantas decorativas. Sua estética minimalista favorece apartamentos modernos e ambientes menores. Altura perfeita para aproveitar o espaço vertical.',
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 4,
    name: 'Prateleira de Parede',
    category: 'Organização',
    price: 65,
    currency: 'USD',
    stripeLink: 'https://buy.stripe.com/TU_LINK_PRODUCTO_4',
    rating: 4.9,
    reviewCount: 92,
    shortDescription: 'Perfeita para cubos, vasos e pequenos itens decorativos.',
    fullDescription:
      'Uma solução prática para quem deseja organizar sem pesar visualmente o ambiente. A prateleira acomoda objetos decorativos e ajuda a valorizar cantos vazios com equilíbrio.',
    images: [
      'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 5,
    name: 'Suporte Compacto',
    category: 'Funcionalidade',
    price: 18,
    currency: 'USD',
    stripeLink: 'https://buy.stripe.com/TU_LINK_PRODUCTO_5',
    rating: 4.8,
    reviewCount: 35,
    shortDescription: 'Compacto e delicado para apoiar objetos decorativos.',
    fullDescription:
      'Pensado para ambientes menores, este suporte compacto traz funcionalidade e estética suave. Ideal para criar composições elegantes em lavabos, halls e quartos.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

let selectedProduct = products[2];
let quantity = 1;

const homeView = document.getElementById('homeView');
const detailView = document.getElementById('detailView');

const productGrid = document.getElementById('productGrid');
const featuredGrid = document.getElementById('featuredGrid');
const relatedGrid = document.getElementById('relatedGrid');

const breadcrumbProductName = document.getElementById('breadcrumbProductName');
const detailCategory = document.getElementById('detailCategory');
const detailTitle = document.getElementById('detailTitle');
const detailRating = document.getElementById('detailRating');
const detailPrice = document.getElementById('detailPrice');
const detailDescription = document.getElementById('detailDescription');
const detailMainImage = document.getElementById('detailMainImage');
const detailSecondaryImage = document.getElementById('detailSecondaryImage');
const detailBuyBtn = document.getElementById('detailBuyBtn');

const qtyValue = document.getElementById('qtyValue');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');

const btnVoltarHome = document.getElementById('btnVoltarHome');
const btnVerColecao = document.getElementById('btnVerColecao');

function formatPrice(value, currency = 'USD') {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency
  }).format(value);
}

function buildCard(product, className = 'product-card') {
  return `
    <article class="${className}" data-id="${product.id}">
      <img src="${product.images[0]}" alt="${product.name}" />
      <div class="card-body">
        <h3>${product.name}</h3>
        <p class="card-price">${formatPrice(product.price, product.currency)}</p>
        <p class="card-description">${product.shortDescription}</p>
        <span class="card-link">Ver mais</span>
      </div>
    </article>
  `;
}

function renderHome() {
  productGrid.innerHTML = products
    .slice(0, 3)
    .map(product => buildCard(product, 'product-card'))
    .join('');

  featuredGrid.innerHTML = products
    .slice(0, 2)
    .map(product => buildCard(product, 'featured-card'))
    .join('');

  attachCardEvents();
}

function renderRelated() {
  const relatedProducts = products
    .filter(product => product.id !== selectedProduct.id)
    .slice(0, 3);

  relatedGrid.innerHTML = relatedProducts
    .map(product => buildCard(product, 'related-card'))
    .join('');

  attachCardEvents();
}

function renderDetail() {
  breadcrumbProductName.textContent = selectedProduct.name;
  detailCategory.textContent = selectedProduct.category;
  detailTitle.textContent = selectedProduct.name;
  detailRating.textContent = `★★★★★ ${selectedProduct.rating} · ${selectedProduct.reviewCount} avaliações`;
  detailPrice.textContent = formatPrice(selectedProduct.price, selectedProduct.currency);
  detailDescription.textContent = selectedProduct.fullDescription;

  detailMainImage.src = selectedProduct.images[0];
  detailMainImage.alt = selectedProduct.name;

  detailSecondaryImage.src = selectedProduct.images[1] || selectedProduct.images[0];
  detailSecondaryImage.alt = `${selectedProduct.name} detalhe`;

  detailBuyBtn.href = selectedProduct.stripeLink;
  qtyValue.textContent = quantity;

  renderRelated();
}

function openDetail(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  selectedProduct = product;
  quantity = 1;

  renderDetail();

  homeView.classList.remove('active');
  detailView.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function attachCardEvents() {
  document.querySelectorAll('[data-id]').forEach(card => {
    card.addEventListener('click', () => {
      const productId = Number(card.dataset.id);
      openDetail(productId);
    });
  });
}

qtyMinus.addEventListener('click', () => {
  if (quantity > 1) {
    quantity -= 1;
    qtyValue.textContent = quantity;
  }
});

qtyPlus.addEventListener('click', () => {
  quantity += 1;
  qtyValue.textContent = quantity;
});

btnVoltarHome.addEventListener('click', () => {
  detailView.classList.remove('active');
  homeView.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

btnVerColecao.addEventListener('click', () => {
  const section = document.getElementById('secaoProdutos');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

renderHome();
renderDetail();
