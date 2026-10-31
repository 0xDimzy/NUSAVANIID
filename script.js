const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const settings =
  typeof SITE_CONFIG === 'object'
    ? SITE_CONFIG
    : {
        brandName: 'Nusavaniid',
        contactEmail: 'nusavaniid@gmail.com',
        phoneDisplay: '',
        whatsappNumber: '',
        address: '',
        social: {
          instagram: 'https://www.instagram.com/nusavaniid_/'
        }
      };

const en = {
  products: [
    [
      'Planifolia Vanilla · Grade A',
      'Gourmet · Black',
      'images/GRADE-A-opt.jpg',
      '25–35%',
      '2.0–2.5%',
      'Indonesia (East Java)',
      'Vacuum 1kg / Carton 10kg'
    ],
    [
      'Tahitian Vanilla · Grade A',
      'Grade A · Gourmet',
      'images/TAHITIAN-opt.jpg',
      '25–35%',
      'Floral / Fruity',
      'Indonesia (East Java)',
      'Vacuum 1kg / Carton 10kg'
    ],
    [
      'Vanilla Powder · 100% Pure',
      'Ground Bean · Pure',
      'images/Vanila-Powder-opt.jpg',
      '0.5–1% Vanillin',
      '100% Whole Ground Pods',
      'Oily, Fine 50–150 micron',
      'Vacuum 1kg / Carton 10kg'
    ]
  ],

  features: [
    [
      '✧',
      'Clear Product Specifications',
      'Discuss format, origin, grade, packaging, and intended application before an order is confirmed.'
    ],
    [
      '♧',
      'Thoughtful Sourcing',
      'We are building direct relationships with Indonesian growers and trusted local partners.'
    ],
    [
      '◎',
      'Practical Pricing Conversations',
      'Ask for a quotation based on product format, quantity, packaging, and destination.'
    ],
    [
      '♙',
      'Direct Communication',
      'Speak with the team directly from the first sample request through local delivery.'
    ],
    [
      '✉',
      'Responsive Support',
      'Questions, documents, and next steps are handled clearly through direct contact.'
    ]
  ],

  steps: [
    [
      '♧',
      'Farm',
      'Smallholder cooperatives in volcanic highlands.'
    ],
    [
      '✂',
      'Harvest',
      '9-month maturation. Hand-picked at peak.'
    ],
    [
      '♨',
      'Fermentation',
      'Killing + sweating in jute blankets, 8 days.'
    ],
    [
      '☼',
      'Drying',
      'Sun + shade cure over 3–4 weeks.'
    ],
    [
      '⚗',
      'Quality Control',
      'In-house lab + third-party verification.'
    ],
    [
      '▣',
      'Packaging',
      'Vacuum food-grade, climate-controlled.'
    ],
    [
      '⚓',
      'Local Delivery',
      'Carefully packed and delivered to your location.'
    ]
  ],

  testimonials: [
    [
      'We are building a trusted export network for Indonesian vanilla, one carefully selected lot at a time.',
      'The Nusavaniid team',
      'Our founding approach'
    ],
    [
      'Every conversation starts with the product: origin, format, specifications, and the buyer’s intended application.',
      'Direct communication',
      'How we work'
    ],
    [
      'We welcome early conversations with makers and buyers who value clarity, patience, and a long-term relationship.',
      'Open for sourcing',
      'Who we serve'
    ],
    [
      'Documentation, samples, and final terms are discussed clearly before any order is confirmed.',
      'Order by conversation',
      'Our promise'
    ]
  ],

  faqs: [
    [
      'What is your minimum order quantity (MOQ)?',
      'MOQ depends on grade: Gourmet premium starts at 2 kg, Grade A at 5 kg, and Grade B/extract at 10 kg+. Sample orders of 100–500 g are available for first-time buyers.'
    ],
    [
      'Do you provide a Certificate of Analysis (COA)?',
      'Documentation and test reports can be discussed for the selected lot and agreed scope before an order is confirmed.'
    ],
    [
      'Which incoterms do you support?',
      'FOB Surabaya is standard. We also operate CIF, CFR, DDP and EXW. Air freight is offered under DAP / DDP.'
    ],
    [
      'How long does shipping take?',
      'Timing depends on product readiness, destination, and shipping method. We will confirm an estimate in the quotation.'
    ],
    [
      'Can you do private label or custom packaging?',
      'Absolutely. We offer co-branded vacuum pouches, glass tubes, retail-ready cartons and OEM packaging.'
    ],
    [
      'Are your farms organic-certified?',
      'Certification depends on the selected lot. Any available documentation will be shared transparently during the sourcing discussion.'
    ],
    [
      'How do I request a sample?',
      'Use the contact form below or WhatsApp our export desk. Samples ship within 24–48 hours via DHL/FedEx.'
    ]
  ],

  exports: [
    [
      'Shipping options',
      [
        'Sea freight · FCL 20ft/40ft reefer',
        'Sea freight · LCL consolidation',
        'Air freight · Express 3–7 days',
        'Courier · DHL/FedEx for samples'
      ],
      'assets/export-container-opt.jpg'
    ],
    [
      'Lead times',
      [
        'Sample dispatch: 24–48 hours',
        'Order confirmation: 1–2 days',
        'Production & QC: 5–10 days',
        'Vessel ETD Surabaya: weekly'
      ],
      'assets/export-warehouse-opt.jpg'
    ],
    [
      'Packaging',
      [
        'Vacuum-sealed food-grade pouches',
        '1 kg / 5 kg / 10 kg units',
        'Master cartons + corner protection',
        'Private label & retail-ready available'
      ],
      'assets/export-packaging-opt.jpg'
    ],
    [
      'Countries we serve',
      [
        'USA · Canada · Mexico',
        'EU · UK · Switzerland · Norway',
        'UAE · Saudi · Qatar · Kuwait',
        'Japan · Korea · Singapore · AUS'
      ],
      'assets/export-port-opt.jpg'
    ]
  ],

  productStrings: {
    originPill: 'Volcanic Terroir · East Java',
    exportTag: 'Single Origin Export',
    pricingLabel: 'EXPORT PRICING (USD / KG)',
    inquire: 'Inquire for This Lot',
    specSheet: 'Request Spec Sheet',
    specSheetMsg:
      'Hello Nusavaniid, I would like to request a specification sheet for',
    tiers: {
      planifolia: [
        { len: '14–15 cm', price: '$162' },
        { len: '16–17 cm', price: '$165', featured: true },
        { len: '18–19 cm', price: '$178' }
      ],
      tahitian: [
        { len: '17 cm Grade A', price: '$181', featured: true }
      ],
      powder: [
        { len: '1 kg Pure Ground Pods', price: '$133', featured: true }
      ]
    },
    specs: {
      powder: [
        ['Composition', '100% pure vanilla beans'],
        ['Texture', 'Fine texture'],
        ['Application', 'Easy to use'],
        ['Aroma', 'Rich vanilla aroma'],
        ['Purity', 'No sugar, no filler'],
        ['Packaging', 'Vacuum 1kg / Carton 10kg']
      ],
      tahitian: [
        ['Grade', 'Grade A'],
        ['Length', '17 cm'],
        ['Aroma', 'Floral & fruity aroma'],
        ['Texture', 'Soft & moist texture'],
        ['Moisture', '25–35%'],
        ['Packaging', 'Vacuum 1kg / Carton 10kg']
      ],
      planifolia: [
        ['Grade', 'Grade A'],
        ['Pods Quality', 'Long, plump & glossy pods'],
        ['Aroma', 'Rich & creamy aroma'],
        ['Moisture', '25–35%'],
        ['Terroir', 'Indonesia (Java)'],
        ['Packaging', 'Vacuum 1kg / Carton 10kg']
      ]
    }
  }
};

const arrowIcon = `
  <span class="arrow-icon" aria-hidden="true">
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 13L13 3M6 3H13V10"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
`;

const copy = {
  products: [
    'OUR PRODUCTS',
    'Vanilla for every application.',
    'From gourmet beans to custom extracts, every format begins with the same uncompromising standard.'
  ],

  why: [
    'WHY NUSAVANIID',
    'Built for buyers<br><i>who think long-term.</i>'
  ],

  export: [
    'GLOBAL EXPORT, LOCAL CARE',
    'From our farms<br><i>to your facility.</i>'
  ],

  process: [
    'FROM FLOWER TO BEAN',
    'Our process is our promise.'
  ],

  testimonials: [
    'OUR APPROACH',
    'Starting carefully. Building for the long term.'
  ],

  faq: [
    'QUESTIONS, ANSWERED',
    'Before you place your order.'
  ],

  contact: [
    "LET'S TALK",
    'Ready to source better vanilla?',
    'Tell us what you are looking for and our export team will get back to you within four business hours.'
  ],

  footer: [
    'Products',
    'Company',
    'Connect'
  ],

  labels: [
    'Name',
    'Company',
    'Email',
    'Country',
    'Estimated volume',
    'Product',
    'Message'
  ],

  send: `Continue to WhatsApp ${arrowIcon}`,

  note: 'Your inquiry will open in WhatsApp, ready to send.',

  placeholder: 'Tell us about your sourcing needs...',

  sample: `Order now ${arrowIcon}`,

  valueCards: [
    [
      'Vision',
      'Make Indonesian vanilla the world’s most trusted.'
    ],
    [
      'Mission',
      'Connect farms and global makers fairly.'
    ],
    [
      'Values',
      'Quality, transparency, stewardship.'
    ]
  ],

  formHeader: [
    'Request Sourcing Quotation',
    'Direct response within 4 business hours.'
  ],

  waGreeting:
    'Hello Nusavaniid, I would like to request a vanilla quotation.',

  galleryToggle: {
    more: (n) => `View all ${n} archive photos`,
    less: 'Show fewer photos'
  },

  trustItems: [
    'FARM-DIRECT SOURCING',
    'SAMPLE REQUESTS',
    'CLEAR SPECIFICATIONS',
    'INDONESIAN ORIGIN',
    'FLEXIBLE DISCUSSIONS',
    'LOCAL DELIVERY',
    'DIRECT SUPPORT',
    'CAREFULLY SELECTED LOTS'
  ],

  mobile: {
    appearance: 'Appearance',
    light: 'Light mode',
    dark: 'Dark mode',
    quote: 'Request a quote',
    language: 'Language',
    current: 'English'
  }
};

const locale = () => en;

const iconSvg = (icon) => {
  const paths = {
    '✧':
      '<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/>',

    '♧':
      '<path d="M12 21V8M8 12c-2.8 0-5-1.8-5-4a4 4 0 0 1 7-2.6A4 4 0 0 1 17 8c0 2.2-2.2 4-5 4ZM12 8a4 4 0 0 1 7-2.6A4 4 0 0 1 17 13c-2.8 0-5-1.8-5-4Z"/>',

    '◎':
      '<circle cx="12" cy="12" r="8.5"/><path d="M12 8v4l2.7 2.2"/>',

    '♙':
      '<circle cx="12" cy="7" r="3"/><path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6M9 11l-2 3M15 11l2 3"/>',

    '⚓':
      '<path d="M12 3v15M8 7h8M5 12a7 7 0 0 0 14 0M3 12h4M17 12h4M8 21h8"/>',

    '⚗':
      '<path d="M9 3h6M10 3v6l-5 8.5A2.3 2.3 0 0 0 7 21h10a2.3 2.3 0 0 0 2-3.5L14 9V3M7 16h10"/>',

    '✉':
      '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',

    '✂':
      '<circle cx="6" cy="7" r="2.5"/><circle cx="6" cy="17" r="2.5"/><path d="m8 8 11 8M8 16 19 8"/>',

    '♨':
      '<path d="M8 19c-2-2 2-3 0-6M12 21c-2-2 2-4 0-7M16 19c-2-2 2-3 0-6"/>'
  };

  return `
    <svg
      class="line-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      ${paths[icon] || paths['◎']}
    </svg>
  `;
};

let activeProduct = 0;

const renderSpecValue = (label, value) =>
  label === 'Length / format'
    ? value
        .split(' · ')
        .map((size) => `<span>${size}</span>`)
        .join('')
    : value;

function renderProducts() {
  const list = locale().products;

  $('#productTabs').innerHTML = list
    .map(
      (p, i) => `
        <button
          class="product-tab ${i === activeProduct ? 'active' : ''}"
          data-product="${i}"
        >
          ${p[0]}
        </button>
      `
    )
    .join('');

  const p = list[activeProduct];
  const ps = locale().productStrings;
  const kind =
    activeProduct === 2 ? 'powder' : activeProduct === 1 ? 'tahitian' : 'planifolia';

  const pricingTiers = ps.tiers[kind];

  const specs = ps.specs[kind];

  const renderSpec = (x) => `
    <div>
      <small>${x[0]}</small>
      <b>${x[1]}</b>
    </div>
  `;

  const columns = [
    specs.filter((_, index) => index % 2 === 0),
    specs.filter((_, index) => index % 2 === 1)
  ];

  $('#productDetail').innerHTML = `
    <div class="product-media">
      <img
        src="${p[2]}"
        alt="${p[0]}"
        loading="lazy"
        decoding="async"
      >
      <div class="product-origin-pill">${ps.originPill}</div>
    </div>

    <div class="product-copy">
      <div class="product-badges">
        <span class="tag">${p[1]}</span>
        <span class="tag gold-tag">${ps.exportTag}</span>
      </div>

      <h3>
        ${p[0]}
      </h3>

      <div class="product-pricing-block">
        <span class="pricing-label">${ps.pricingLabel}</span>
        <div class="pricing-tiers">
          ${pricingTiers
            .map(
              (t) => `
                <div class="price-chip ${t.featured ? 'featured' : ''}">
                  <span class="price-len">${t.len}</span>
                  <b class="price-val">${t.price}<small>/kg</small></b>
                </div>
              `
            )
            .join('')}
        </div>
      </div>

      <div class="spec-grid">
        ${columns
          .map(
            (column) => `
              <div class="spec-column">
                ${column
                  .map(renderSpec)
                  .join('')}
              </div>
            `
          )
          .join('')}
      </div>

      <div class="product-actions">
        <a
          class="button gold"
          href="#contact"
        >
          <span>${ps.inquire}</span>
          <span class="arrow-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13L13 3M6 3H13V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </a>
        <a
          class="button outline"
          href="https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(
            `${ps.specSheetMsg} ${p[0]}`
          )}"
          target="_blank"
          rel="noopener"
        >
          ${ps.specSheet}
        </a>
      </div>

    </div>
  `;

  $$('[data-product]').forEach((button) => {
    button.onclick = () => {
      activeProduct = Number(
        button.dataset.product
      );

      renderProducts();
    };
  });

  $('#productSelect').innerHTML = list
    .map(
      (p) =>
        `<option>${p[0]}</option>`
    )
    .join('');
}

function renderDynamic() {
  const content = locale();

  renderProducts();

  $('#featureGrid').innerHTML =
    content.features
      .map(
        (x) => `
          <article class="feature-card reveal">

            <div class="feature-icon">
              ${iconSvg(x[0])}
            </div>

            <h3>
              ${x[1]}
            </h3>

            <p>
              ${x[2]}
            </p>

          </article>
        `
      )
      .join('');

  $('#processLine').innerHTML =
    content.steps
      .map(
        (x, i) => `
          <div class="process-step reveal">

            <div class="process-icon">
              ${iconSvg(x[0])}
            </div>

            <small>
              STEP ${String(i + 1).padStart(2, '0')}
            </small>

            <b>
              ${x[1]}
            </b>

            <p>
              ${x[2]}
            </p>

          </div>
        `
      )
      .join('');

  $('#testimonialGrid').innerHTML =
    content.testimonials
      .map(
        (x) => `
          <article class="testimonial reveal">

            <div class="stars">
              ★★★★★
            </div>

            <blockquote>
              “${x[0]}”
            </blockquote>

            <footer>
              <b>${x[1]}</b>
              <small>${x[2]}</small>
            </footer>

          </article>
        `
      )
      .join('');

  observeReveals();
}

function write(selector, value) {
  const el = $(selector);

  if (el) {
    el.innerHTML = value;
  }
}

function renderTrustStrip() {
  const track = $('#trustTrack');

  if (track) {
    track.innerHTML = [...copy.trustItems, ...copy.trustItems]
      .map((x) => `<span>${x}</span>`)
      .join('');
  }
}

function setEnglish() {
  document.documentElement.lang = 'en';

  const c = copy;

  write(
    '#products .eyebrow b',
    c.products[0]
  );

  write(
    '#products .section-heading h2',
    c.products[1]
  );

  write(
    '#products .section-heading p',
    c.products[2]
  );

  write(
    '#why .eyebrow b',
    c.why[0]
  );

  write(
    '#why .section-heading h2',
    c.why[1]
  );

  write(
    '#process .eyebrow b',
    c.process[0]
  );

  write(
    '#process .section-heading h2',
    c.process[1]
  );

  const testimonialHeading =
    $('.testimonial-grid')
      ?.previousElementSibling;

  if (testimonialHeading) {
    const eyebrow =
      testimonialHeading.querySelector(
        '.eyebrow b'
      );

    const heading =
      testimonialHeading.querySelector('h2');

    if (eyebrow) {
      eyebrow.textContent =
        c.testimonials[0];
    }

    if (heading) {
      heading.textContent =
        c.testimonials[1];
    }
  }

  write(
    '#contact .eyebrow b',
    c.contact[0]
  );

  write(
    '#contact h2',
    c.contact[1]
  );

  write(
    '#contact .section-copy > p',
    c.contact[2]
  );

  $$('.mini-cards > div').forEach(
    (card, index) => {
      if (!c.valueCards[index]) return;

      const title =
        card.querySelector('b');

      const description =
        card.querySelector('small');

      if (title) {
        title.textContent =
          c.valueCards[index][0];
      }

      if (description) {
        description.textContent =
          c.valueCards[index][1];
      }
    }
  );

  $$('#contactForm label').forEach(
    (label, i) => {
      const control =
        label.querySelector(
          'input,select,textarea'
        );

      if (control) {
        label.childNodes[0].nodeValue =
          c.labels[i] ||
          label.childNodes[0].nodeValue;
      }
    }
  );

  const formButton =
    $('#contactForm button');

  const formNote =
    $('#contactForm .form-note');

  const formHeaderTitle =
    $('#contactForm .form-header h3');

  const formHeaderSub =
    $('#contactForm .form-header p');

  const textarea =
    $('#contactForm textarea');

  if (formButton) {
    formButton.innerHTML = c.send;
  }

  if (formNote) {
    formNote.textContent = c.note;
  }

  if (formHeaderTitle) {
    formHeaderTitle.textContent =
      c.formHeader[0];
  }

  if (formHeaderSub) {
    formHeaderSub.textContent =
      c.formHeader[1];
  }

  if (textarea) {
    textarea.placeholder =
      c.placeholder;
  }

  $$('.site-footer h4').forEach(
    (h, i) => {
      if (i < 3) {
        h.textContent = c.footer[i];
      }
    }
  );

  renderTrustStrip();
  renderDynamic();
}

const trustItems = [
  'FARM-DIRECT SOURCING',
  'SAMPLE REQUESTS',
  'CLEAR SPECIFICATIONS',
  'INDONESIAN ORIGIN',
  'FLEXIBLE DISCUSSIONS',
  'LOCAL DELIVERY',
  'DIRECT SUPPORT',
  'CAREFULLY SELECTED LOTS'
];

const galleryFiles = [
  'vanilla-gallery-01.jpeg',
  'vanilla-gallery-03.jpeg',
  'vanilla-gallery-10.jpeg',
  'vanilla-gallery-21.jpeg',
  'GRADE-A.jpeg',
  'vanilla-gallery-02.jpeg',
  'vanilla-gallery-04.jpeg',
  'vanilla-gallery-05.jpeg',
  'vanilla-gallery-06.jpeg',
  'vanilla-gallery-07.jpeg',
  'vanilla-gallery-08.jpeg',
  'vanilla-gallery-09.jpeg',
  'vanilla-gallery-11.jpeg',
  'vanilla-gallery-12.jpeg',
  'vanilla-gallery-13.jpeg',
  'vanilla-gallery-14.jpeg',
  'vanilla-gallery-15.jpeg',
  'vanilla-gallery-16.jpeg',
  'vanilla-gallery-17.jpeg',
  'vanilla-gallery-18.jpeg',
  'vanilla-gallery-19.jpeg',
  'vanilla-gallery-20.jpeg',
  'vanilla-gallery-22.jpeg',
  'vanilla-gallery-23.jpeg',
  'vanilla-gallery-24.jpeg',
  'vanilla-gallery-25.jpeg',
  'vanilla-gallery-26.jpeg',
  'vanilla-gallery-27.jpeg',
  'vanilla-gallery-28.jpeg',
  'vanilla-gallery-29.jpeg',
  'vanilla-gallery-30.jpeg',
  'vanilla-gallery-31.jpeg',
  'vanilla-gallery-32.jpeg',
  'vanilla-gallery-33.jpeg',
  'vanilla-gallery-34.jpeg',
  'vanilla-gallery-35.jpeg',
  'vanilla-gallery-36.jpeg'
];

const INITIAL_GALLERY_COUNT = 4;
let isGalleryExpanded = false;

$('#galleryGrid').innerHTML =
  galleryFiles
    .map(
      (file, index) => {
        const isVisible = index < INITIAL_GALLERY_COUNT;
        return `
        <figure class="gallery-item reveal ${!isVisible ? 'is-hidden' : ''}" data-gallery-index="${index}">

          <img
            ${isVisible ? `src="galeri/${file}"` : `data-src="galeri/${file}"`}
            alt="Indonesian vanilla gallery image ${index + 1}"
            loading="lazy"
            decoding="async"
          >

        </figure>
      `;
      }
    )
    .join('');

const galleryToggleBtn = $('#galleryToggleBtn');
const galleryToggleText = $('#galleryToggleText');

function updateGalleryDisplay() {
  const items = $$('.gallery-item');
  items.forEach((item, index) => {
    if (index >= INITIAL_GALLERY_COUNT) {
      if (isGalleryExpanded) {
        const img = item.querySelector('img[data-src]');
        if (img) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        item.classList.remove('is-hidden');
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
        item.classList.add('is-hidden');
      }
    }
  });

  if (galleryToggleBtn) {
    galleryToggleBtn.classList.toggle('expanded', isGalleryExpanded);
    galleryToggleBtn.setAttribute('aria-expanded', String(isGalleryExpanded));
  }

  if (galleryToggleText) {
    const gt = copy.galleryToggle;

    galleryToggleText.textContent = isGalleryExpanded
      ? gt.less
      : gt.more(galleryFiles.length);
  }
}

galleryToggleBtn?.addEventListener('click', () => {
  isGalleryExpanded = !isGalleryExpanded;
  updateGalleryDisplay();

  if (!isGalleryExpanded) {
    const gallerySection = $('#gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

/* =========================================================
   GALLERY LIGHTBOX
   ========================================================= */

const galleryLightbox =
  $('#galleryLightbox');

const galleryViewerImage =
  $('#galleryViewerImage');

const galleryCounter =
  $('#galleryCounter');

const galleryClose =
  $('#galleryClose');

const galleryPrev =
  $('#galleryPrev');

const galleryNext =
  $('#galleryNext');

let currentGalleryIndex = 0;

function updateGalleryViewer() {
  if (
    !galleryViewerImage ||
    !galleryCounter
  ) {
    return;
  }

  const file =
    galleryFiles[
      currentGalleryIndex
    ];

  galleryViewerImage.style.opacity = '0';

  galleryViewerImage.src =
    `galeri/${file}`;

  galleryViewerImage.alt =
    `Indonesian vanilla gallery image ${
      currentGalleryIndex + 1
    }`;

  galleryCounter.textContent =
    `${currentGalleryIndex + 1} / ${
      galleryFiles.length
    }`;

  galleryViewerImage.onload = () => {
    galleryViewerImage.style.opacity = '1';
  };
}

function openGallery(index) {
  if (!galleryLightbox) return;

  currentGalleryIndex =
    (index + galleryFiles.length) %
    galleryFiles.length;

  updateGalleryViewer();

  galleryLightbox.classList.add(
    'open'
  );

  galleryLightbox.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.classList.add(
    'gallery-open'
  );
}

function closeGallery() {
  if (!galleryLightbox) return;

  galleryLightbox.classList.remove(
    'open'
  );

  galleryLightbox.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.classList.remove(
    'gallery-open'
  );
}

function showPreviousGalleryImage() {
  currentGalleryIndex =
    (
      currentGalleryIndex -
      1 +
      galleryFiles.length
    ) % galleryFiles.length;

  updateGalleryViewer();
}

function showNextGalleryImage() {
  currentGalleryIndex =
    (
      currentGalleryIndex +
      1
    ) % galleryFiles.length;

  updateGalleryViewer();
}

/* Gallery image click */

$$('.gallery-item').forEach(
  (item, index) => {
    item.addEventListener(
      'click',
      () => {
        openGallery(index);
      }
    );
  }
);

/* Gallery buttons */

galleryClose?.addEventListener(
  'click',
  closeGallery
);

galleryPrev?.addEventListener(
  'click',
  showPreviousGalleryImage
);

galleryNext?.addEventListener(
  'click',
  showNextGalleryImage
);

/* Click outside image */

galleryLightbox?.addEventListener(
  'click',
  (event) => {
    if (
      event.target === galleryLightbox ||
      event.target.classList.contains('gallery-lightbox-stage')
    ) {
      closeGallery();
    }
  }
);

/* Keyboard */

document.addEventListener(
  'keydown',
  (event) => {
    if (
      !galleryLightbox?.classList.contains(
        'open'
      )
    ) {
      return;
    }

    if (event.key === 'Escape') {
      closeGallery();
    }

    if (event.key === 'ArrowLeft') {
      showPreviousGalleryImage();
    }

    if (event.key === 'ArrowRight') {
      showNextGalleryImage();
    }
  }
);

/* Touch swipe */

let galleryTouchStartX = 0;
let galleryTouchStartY = 0;

galleryLightbox?.addEventListener(
  'touchstart',
  (event) => {
    const touch =
      event.changedTouches[0];

    galleryTouchStartX =
      touch.clientX;

    galleryTouchStartY =
      touch.clientY;
  },
  {
    passive: true
  }
);

galleryLightbox?.addEventListener(
  'touchend',
  (event) => {
    // Ignore touch if close or navigation buttons were clicked
    if (event.target.closest('button')) return;

    const touch =
      event.changedTouches[0];

    const deltaX =
      touch.clientX -
      galleryTouchStartX;

    const deltaY =
      touch.clientY -
      galleryTouchStartY;

    if (
      Math.abs(deltaX) <=
      Math.abs(deltaY)
    ) {
      return;
    }

    if (
      Math.abs(deltaX) < 40
    ) {
      return;
    }

    if (deltaX < 0) {
      showNextGalleryImage();
    } else {
      showPreviousGalleryImage();
    }
  },
  {
    passive: true
  }
);

/* Footer cleanup */

$$('.site-footer a').forEach(
  (link) => {
    if (
      link.textContent.includes(
        'Grade B'
      )
    ) {
      link.remove();
    }

    if (
      link.textContent.includes(
        'Natural Extract'
      )
    ) {
      link.remove();
    }
  }
);

/* Trust strip */

$('#trustTrack').innerHTML =
  [...trustItems, ...trustItems]
    .map(
      (x) => `<span>${x}</span>`
    )
    .join('');

/* Mobile navigation & Theme */

const themeButton =
  $('#themeButton');

const themeIcon = (dark) =>
  dark
    ? `
      <svg
        class="theme-icon sun-icon"
        viewBox="0 0 24 24"
        width="19"
        height="19"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.5" fill="currentColor" fill-opacity="0.2"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    `
    : `
      <svg
        class="theme-icon moon-icon"
        viewBox="0 0 24 24"
        width="19"
        height="19"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          fill="currentColor"
          fill-opacity="0.15"
        />
      </svg>
    `;

function updateThemeUI(dark) {
  if (themeButton) {
    themeButton.innerHTML = themeIcon(dark);
    themeButton.setAttribute(
      'aria-label',
      dark ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }

  const mobileBtn = $('#mobileThemeBtn');
  if (mobileBtn) {
    const iconSpan = mobileBtn.querySelector('.mobile-theme-icon');
    const textSpan = mobileBtn.querySelector('.mobile-theme-text');
    if (iconSpan) iconSpan.innerHTML = themeIcon(dark);
    if (textSpan) textSpan.textContent = dark ? 'Light mode' : 'Dark mode';
    mobileBtn.setAttribute(
      'aria-label',
      dark ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }
}

function toggleTheme() {
  const dark = document.body.classList.toggle('dark');
  updateThemeUI(dark);
  try {
    localStorage.setItem('nusavaniid_theme', dark ? 'dark' : 'light');
  } catch (_) {}
}

function renderMobileNav() {
  const isDark = document.body.classList.contains('dark');
  const m = copy.mobile;
  const linksHtml = $$('.desktop-nav a')
    .map((a) => a.outerHTML)
    .join('');

  $('#mobileNav').innerHTML = `
    ${linksHtml}
    <div class="mobile-nav-divider"></div>
    <div class="mobile-theme-row">
      <span class="mobile-theme-label">${m.appearance}</span>
      <button class="mobile-theme-btn" id="mobileThemeBtn" type="button" aria-label="Toggle theme">
        <span class="mobile-theme-icon" style="display:inline-flex;align-items:center;">${themeIcon(isDark)}</span>
        <span class="mobile-theme-text">${isDark ? m.light : m.dark}</span>
      </button>
    </div>
    <a class="button gold mobile-nav-quote" href="#contact">
      <span>${m.quote}</span>
      <span class="arrow-icon" aria-hidden="true" style="display:inline-flex;width:1em;height:1em;vertical-align:-0.12em;margin-left:.35em;">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13L13 3M6 3H13V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </a>
  `;

  $$('#mobileNav a').forEach((a) => {
    a.addEventListener('click', () => {
      $('#mobileNav').classList.remove('open');
    });
  });

  $('#mobileThemeBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleTheme();
  });
}

// Restore saved theme preference (Default is Dark)
try {
  const savedTheme = localStorage.getItem('nusavaniid_theme');
  if (savedTheme === 'light') {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
} catch (_) {
  document.body.classList.add('dark');
}

renderMobileNav();
updateThemeUI(document.body.classList.contains('dark'));

if (themeButton) {
  themeButton.onclick = toggleTheme;
}

$('#menuButton')?.addEventListener('click', (e) => {
  e.stopPropagation();
  $('#mobileNav').classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('#mobileNav') && !e.target.closest('#menuButton')) {
    $('#mobileNav')?.classList.remove('open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    $('#mobileNav')?.classList.remove('open');
  }
});

/* Header scroll */

window.addEventListener('scroll', () => {
  $('#header')?.classList.toggle('scrolled', scrollY > 30);
});

/* Toast */

const toast = (message) => {
  const t = $('#toast');

  if (!t) return;

  t.textContent = message;

  t.classList.add('show');

  setTimeout(() => {
    t.classList.remove('show');
  }, 3200);
};

/* Contact form */

$('#contactForm').onsubmit = (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  if (!form.reportValidity()) {
    return;
  }

  if (!settings.whatsappNumber) {
    toast(
      'WhatsApp number has not been configured.'
    );

    return;
  }

  const data =
    new FormData(form);

  const value = (name) =>
    String(
      data.get(name) || ''
    ).trim() || 'Not provided';

  const message = [
    copy.waGreeting,
    '',
    `Name: ${value('name')}`,
    `Company: ${value('company')}`,
    `Email: ${value('email')}`,
    `Country: ${value('country')}`,
    `Estimated volume: ${value('volume')}`,
    `Product: ${value('product')}`,
    '',
    `Message: ${value('message')}`
  ].join('\n');

  window.open(
    `https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`,
    '_blank',
    'noopener'
  );
};

/* Remove unused subscribe form */

$('#subscribeForm')?.remove();

/* WhatsApp popup */

$('#whatsappButton').onclick =
  () =>
    $('#whatsappCard').classList.toggle(
      'show'
    );

$('.whatsapp-label')?.remove();

$('.whatsapp-notification')?.remove();

/* Footer year */

const copyrightYear =
  $('#year');

if (copyrightYear) {
  copyrightYear.textContent = '2026';
}

/* Reveal animation */

let observer;

function observeReveals() {
  if (observer) {
    observer.disconnect();
  }

  observer =
    new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => {
            if (
              e.isIntersecting
            ) {
              e.target.classList.add(
                'visible'
              );
            }
          }
        );
      },
      {
        threshold: 0.12
      }
    );

  $$('.reveal').forEach(
    (el) => {
      observer.observe(el);
    }
  );
}

/* Site config values */

$$('[data-site]').forEach(
  (el) => {
    const key =
      el.dataset.site === 'phone'
        ? 'phoneDisplay'
        : el.dataset.site;

    el.textContent =
      settings[key] ||
      el.textContent;
  }
);

/* Social links */

$$('[data-site-link]').forEach(
  (el) => {
    const type =
      el.dataset.siteLink;

    const href =
      type === 'whatsapp'
        ? `https://wa.me/${settings.whatsappNumber}`
        : settings.social[type];

    if (href) {
      el.href = href;
      el.target = '_blank';
      el.rel = 'noopener';
    } else {
      const socials =
        el.closest('.socials');

      if (socials) {
        socials.removeChild(el);
      }
    }
  }
);

/* Remove Facebook if unused */

$$('[data-site-link="facebook"]').forEach(
  (el) => el.remove()
);

/* Footer brand */

const footerBrand =
  $('.footer-brand');

if (footerBrand) {
  footerBrand.classList.add(
    'logo-brand'
  );

  footerBrand.innerHTML = `
    <img
      class="brand-logo"
      src="assets/nusavaniid-logo-transparent.png"
      alt="Nusavaniid premium vanilla"
    >
  `;
}

/* Remove unused legal footer item */

const legalLinks =
  $('.footer-bottom > span:last-child');

if (legalLinks) {
  legalLinks.remove();
}

/* Initialize */

setEnglish();