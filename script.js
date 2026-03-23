const products = [
  {
    id: 1,
    name: 'Vela Aromática Minimalista',
    category: 'Velas',
    price: 24,
    currency: 'USD',
    stripeLink: 'https://buy.stripe.com/TU_LINK_PRODUCTO_1',
    rating: 4.9,
    reviewCount: 18,
    description:
      'Vela decorativa con diseño elegante para salas, dormitorios y regalos especiales. Aporta calidez visual y un toque sofisticado en rincones pequeños.',
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1602872029708-84d970d33895?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?auto=format&fit=crop&w=1200&q=80'
    ],
    comments: [
      {
        name: 'Marina',
        rating: 5,
        text: 'Hermosa presentación y aroma suave. Se ve delicada y elegante.',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Luisa',
        rating: 5,
        text: 'Quedó perfecta en mi living. La volvería a comprar sin duda.',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Camila',
        rating: 4.8,
        text: 'Llegó muy bien embalada y se ve preciosa.',
        photo: ''
      },
      {
        name: 'Ana',
        rating: 5,
        text: 'La usé para regalar y encantó.',
        photo: ''
      },
      {
        name: 'Valentina',
        rating: 4.9,
        text: 'Tiene el tamaño ideal para mesas auxiliares.',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
      }
    ],
    qa: [
      {
        question: '¿De qué material está hecha?',
        answer: 'Está presentada en vaso de vidrio resistente con acabado minimalista.'
      },
      {
        question: '¿Sirve para regalo?',
        answer: 'Sí, es una opción excelente para regalos de decoración y ambientación.'
      },
      {
        question: '¿En qué espacios queda mejor?',
        answer: 'Queda muy bien en livings, dormitorios, escritorios y mesas de apoyo.'
      },
      {
        question: '¿Cómo se limpia el recipiente?',
        answer: 'Cuando termina la vela, podés limpiarlo con agua tibia y jabón suave.'
      }
    ]
  },
  {
    id: 2,
    name: 'Jarrón Cerámico Blanco',
    category: 'Jarrones',
    price: 32,
    currency: 'USD',
    stripeLink: 'https://buy.stripe.com/TU_LINK_PRODUCTO_2',
    rating: 4.8,
    reviewCount: 12,
    description:
      'Jarrón pequeño de líneas limpias, ideal para mesas auxiliares, repisas o composiciones minimalistas con flores secas.',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=1200&q=80'
    ],
    comments: [
      {
        name: 'Bruna',
        rating: 5,
        text: 'Muy delicado y sofisticado. Se ve premium.',
        photo: ''
      },
      {
        name: 'Isabel',
        rating: 4.8,
        text: 'Combina con todo y levanta mucho la decoración.',
        photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Paula',
        rating: 4.7,
        text: 'Tal cual la foto. Muy lindo para estantes pequeños.',
        photo: ''
      },
      {
        name: 'Julieta',
        rating: 5,
        text: 'Queda precioso con flores secas.',
        photo: ''
      },
      {
        name: 'Fernanda',
        rating: 4.9,
        text: 'Muy buena terminación.',
        photo: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=300&q=80'
      }
    ],
    qa: [
      {
        question: '¿Es pesado?',
        answer: 'Tiene un peso equilibrado, ideal para apoyar con seguridad sobre repisas y mesas.'
      },
      {
        question: '¿Puede usarse sin flores?',
        answer: 'Sí, funciona muy bien como pieza decorativa por sí sola.'
      },
      {
        question: '¿Qué estilo de ambiente acompaña mejor?',
        answer: 'Se adapta muy bien a estilos minimalistas, cálidos y escandinavos.'
      },
      {
        question: '¿Es fácil de limpiar?',
        answer: 'Sí, con un paño suave ligeramente húmedo.'
      }
    ]
  },
  {
    id: 3,
    name: 'Bandeja Decorativa Dorada',
    category: 'Accesorios',
    price: 29,
    currency: 'USD',
    stripeLink: 'https://buy.stripe.com/TU_LINK_PRODUCTO_3',
    rating: 5,
    reviewCount: 9,
    description:
      'Perfecta para organizar perfumes, velas o pequeños objetos con estilo. Aporta brillo y sofisticación sin recargar el espacio.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1200&q=80'
    ],
    comments: [
      {
        name: 'Sofía',
        rating: 5,
        text: 'Le da un toque chic al ambiente.',
        photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Laura',
        rating: 5,
        text: 'La uso en mi tocador y amo cómo se ve.',
        photo: ''
      },
      {
        name: 'Noelia',
        rating: 4.9,
        text: 'Muy elegante y funcional.',
        photo: ''
      },
      {
        name: 'Pilar',
        rating: 5,
        text: 'Hace que todo se vea más prolijo.',
        photo: ''
      },
      {
        name: 'Micaela',
        rating: 5,
        text: 'La recomiendo si querés un detalle premium.',
        photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80'
      }
    ],
    qa: [
      {
        question: '¿Para qué objetos sirve?',
        answer: 'Es ideal para perfumes, velas, llaves, joyería o pequeños accesorios.'
      },
      {
        question: '¿Se raya con facilidad?',
        answer: 'Con uso normal se conserva muy bien; se recomienda limpieza suave.'
      },
      {
        question: '¿Se puede usar en baño o dormitorio?',
        answer: 'Sí, queda muy bien en ambos espacios.'
      },
      {
        question: '¿Es solo decorativa?',
        answer: 'No, además de decorar ayuda a organizar visualmente.'
      }
    ]
  },
  {
    id: 4,
    name: 'Maceta Nórdica Compacta',
    category: 'Macetas',
    price: 18,
    currency: 'USD',
    stripeLink: 'https://buy.stripe.com/TU_LINK_PRODUCTO_4',
    rating: 4.7,
    reviewCount: 14,
    description:
      'Maceta decorativa pequeña para plantas de interior y rincones con personalidad. Su diseño limpio combina con ambientes modernos y cálidos.',
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=1200&q=80'
    ],
    comments: [
      {
        name: 'Belén',
        rating: 4.8,
        text: 'Ideal para espacios pequeños.',
        photo: ''
      },
      {
        name: 'Rocío',
        rating: 4.7,
        text: 'Muy linda, se nota la calidad.',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Clara',
        rating: 4.8,
        text: 'Compré dos y quedaron hermosas.',
        photo: ''
      },
      {
        name: 'Eva',
        rating: 4.6,
        text: 'Muy buena opción para escritorio o estantería.',
        photo: ''
      },
      {
        name: 'María',
        rating: 4.7,
        text: 'El color es suave y elegante.',
        photo: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=300&q=80'
      }
    ],
    qa: [
      {
        question: '¿Qué tipo de planta admite?',
        answer: 'Va muy bien con suculentas, cactus y plantas pequeñas de interior.'
      },
      {
        question: '¿Tiene estilo minimalista?',
        answer: 'Sí, su diseño está pensado para ambientes nórdicos y modernos.'
      },
      {
        question: '¿Se puede usar como portaobjetos?',
        answer: 'Sí, también queda muy bien como contenedor decorativo.'
      },
      {
        question: '¿Es buena para regalo?',
        answer: 'Sí, es una pieza versátil y muy fácil de combinar.'
      }
    ]
  }
];

let selectedProduct = products[0];
let currentImageIndex = 0;

const catalogView = document.getElementById('catalogView');
const detailView = document.getElementById('detailView');
const searchInput = document.getElementById('searchInput');
const productGrid = document.getElementById('productGrid');
const backButton = document.getElementById('backButton');
const mainImage = document.getElementById('mainImage');
const thumbnailRow = document.getElementById('thumbnailRow');
const detailCategory = document.getElementById('detailCategory');
const detailRating = document.getElementById('detailRating');
const detailName = document.getElementById('detailName');
const detailPrice = document.getElementById('detailPrice');
const detailDescription = document.getElementById('detailDescription');
const buyButton = document.getElementById('buyButton');
const commentsList = document.getElementById('commentsList');
const qaList = document.getElementById('qaList');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');

function formatPrice(value, currency = 'USD') {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency
  }).format(value);
}

function renderCatalog(productsToRender) {
  productGrid.innerHTML = '';

  if (!productsToRender.length) {
    productGrid.innerHTML = '<div class="empty-state">No se encontraron productos con esa búsqueda.</div>';
    return;
  }

  productsToRender.forEach((product) => {
    const article = document.createElement('article');
    article.className = 'product-card';
    article.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}">
      <div class="product-card-body">
        <div class="product-card-top">
          <div>
            <div class="product-card-category">${product.category}</div>
            <h3>${product.name}</h3>
          </div>
          <div class="product-card-price">${formatPrice(product.price, product.currency)}</div>
        </div>
        <p class="product-card-description">${product.description}</p>
        <div class="product-card-rating">⭐ ${product.rating} · ${product.reviewCount} reseñas</div>
      </div>
    `;

    article.addEventListener('click', () => {
      openProductDetail(product.id);
    });

    productGrid.appendChild(article);
  });
}

function renderThumbnails() {
  thumbnailRow.innerHTML = '';

  selectedProduct.images.slice(0, 3).forEach((image, index) => {
    const button = document.createElement('button');
    button.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
    button.type = 'button';
    button.innerHTML = `<img src="${image}" alt="${selectedProduct.name} foto ${index + 1}">`;
    button.addEventListener('click', () => {
      currentImageIndex = index;
      updateMainImage();
      renderThumbnails();
    });
    thumbnailRow.appendChild(button);
  });
}

function updateMainImage() {
  mainImage.src = selectedProduct.images[currentImageIndex];
  mainImage.alt = selectedProduct.name;
}

function renderComments() {
  commentsList.innerHTML = '';

  selectedProduct.comments.forEach((comment) => {
    const div = document.createElement('div');
    div.className = 'comment-card';

    const stars = '★'.repeat(Math.round(comment.rating));

    div.innerHTML = `
      <div class="comment-top">
        ${comment.photo ? `<img class="comment-photo" src="${comment.photo}" alt="${comment.name}">` : ''}
        <div>
          <div class="comment-name">${comment.name}</div>
          <div class="comment-rating">${stars} · ${comment.rating}</div>
        </div>
      </div>
      <div class="comment-text">${comment.text}</div>
    `;

    commentsList.appendChild(div);
  });
}

function renderQA() {
  qaList.innerHTML = '';

  selectedProduct.qa.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'qa-card';
    div.innerHTML = `
      <div class="qa-question">${item.question}</div>
      <div class="qa-answer">${item.answer}</div>
    `;
    qaList.appendChild(div);
  });
}

function renderDetail() {
  detailCategory.textContent = selectedProduct.category;
  detailRating.textContent = `⭐ ${selectedProduct.rating} · ${selectedProduct.reviewCount} reseñas`;
  detailName.textContent = selectedProduct.name;
  detailPrice.textContent = formatPrice(selectedProduct.price, selectedProduct.currency);
  detailDescription.textContent = selectedProduct.description;
  buyButton.href = selectedProduct.stripeLink;

  updateMainImage();
  renderThumbnails();
  renderComments();
  renderQA();
}

function openProductDetail(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  selectedProduct = product;
  currentImageIndex = 0;
  renderDetail();

  catalogView.classList.remove('active');
  detailView.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBackToCatalog() {
  detailView.classList.remove('active');
  catalogView.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % selectedProduct.images.length;
  updateMainImage();
  renderThumbnails();
}

function prevImageFn() {
  currentImageIndex =
    (currentImageIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length;
  updateMainImage();
  renderThumbnails();
}

searchInput.addEventListener('input', (event) => {
  const value = event.target.value.trim().toLowerCase();

  const filtered = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value) ||
      product.description.toLowerCase().includes(value)
    );
  });

  renderCatalog(filtered);
});

backButton.addEventListener('click', goBackToCatalog);
nextSlide.addEventListener('click', nextImage);
prevSlide.addEventListener('click', prevImageFn);

renderCatalog(products);
renderDetail();
