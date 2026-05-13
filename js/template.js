/* ==========================================================================
   template.js
   - Carica header e footer da /components/ in tutte le pagine
   - Gestisce hamburger menu mobile
   - Gestisce accordion (FAQ)
   - Fade-in al scroll (IntersectionObserver)
   - Scroll state header (border bottom quando si scrolla)
   - Marca link attivo nel menu in base alla pagina corrente
   - Inserisce anno corrente nel footer
   - Hero carousel (con dissolvenza, per pagine come Villa Anna)
   - Lightbox per gallery foto (chiusura con ESC, frecce avanti/indietro)
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1. Caricamento header e footer via fetch                           */
  /* ------------------------------------------------------------------ */

  function getBasePath() {
    const meta = document.querySelector('meta[name="base-path"]');
    return meta ? meta.getAttribute('content') : '';
  }

  async function loadComponent(targetSelector, componentPath) {
    const target = document.querySelector(targetSelector);
    if (!target) return null;

    try {
      const base = getBasePath();
      const response = await fetch(`${base}${componentPath}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} loading ${componentPath}`);
      }
      const html = await response.text();
      target.innerHTML = html;
      return target;
    } catch (err) {
      console.error('Errore caricamento componente:', err);
      target.innerHTML = `<!-- componente non caricato: ${componentPath} -->`;
      return null;
    }
  }

  /* ------------------------------------------------------------------ */
  /* 2. Hamburger menu mobile                                           */
  /* ------------------------------------------------------------------ */

  function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.site-nav');
    if (!hamburger || !nav) return;

    let backdrop = document.querySelector('.menu-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'menu-backdrop';
      document.body.appendChild(backdrop);
    }

    function toggleMenu(open) {
      const isOpen = open !== undefined ? open : !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', isOpen);
      hamburger.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('is-menu-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    }

    hamburger.addEventListener('click', () => toggleMenu());
    backdrop.addEventListener('click', () => toggleMenu(false));

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });

    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      if (lastWidth <= 900 && newWidth > 900) {
        toggleMenu(false);
      }
      lastWidth = newWidth;
    });
  }

  /* ------------------------------------------------------------------ */
  /* 3. Accordion (FAQ)                                                 */
  /* ------------------------------------------------------------------ */

  function initAccordion() {
    const triggers = document.querySelectorAll('.accordion__trigger');

    triggers.forEach(trigger => {
      trigger.setAttribute('aria-expanded', 'false');

      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion__item');
        const content = item.querySelector('.accordion__content');
        const isOpen = item.classList.contains('is-open');

        if (isOpen) {
          content.style.maxHeight = '0';
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 4. Fade-in al scroll                                               */
  /* ------------------------------------------------------------------ */

  function initFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* 5. Header: aggiungi border quando si scrolla                       */
  /* ------------------------------------------------------------------ */

  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 10);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /* 6. Marca il link attivo nel menu                                   */
  /* ------------------------------------------------------------------ */

  function markActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.site-nav__link');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPage = href.split('/').pop();
      if (linkPage === currentPath || (currentPath === '' && linkPage === 'index.html')) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* 7. Anno corrente nel footer                                        */
  /* ------------------------------------------------------------------ */

  function injectYear() {
    const yearEl = document.querySelector('[data-current-year]');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /* ------------------------------------------------------------------ */
  /* 8. Smooth scroll per link interni con offset header                */
  /* ------------------------------------------------------------------ */

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#' || href === '#!') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 9. HERO CAROUSEL — dissolvenza incrociata tra immagini             */
  /*    Trigger: <section data-hero-carousel>                           */
  /* ------------------------------------------------------------------ */

  function initHeroCarousel() {
    const carousels = document.querySelectorAll('[data-hero-carousel]');
    if (!carousels.length) return;

    // Se l'utente preferisce ridotte animazioni, niente carosello
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    carousels.forEach(carousel => {
      const slides = carousel.querySelectorAll('[data-hero-slide]');
      if (slides.length < 2) return; // non ha senso un carosello con 1 sola foto

      let currentIndex = 0;

      function nextSlide() {
        slides[currentIndex].classList.remove('is-active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('is-active');
      }

     // Intervallo di 4 secondi tra un cambio e l'altro
      // (la transizione CSS opacity dura 1 secondo)
      setInterval(nextSlide, 4000);
    });
  }

  /* ------------------------------------------------------------------ */
  /* 10. LIGHTBOX GALLERY                                               */
  /*     - Apertura via click sulle thumbnail (data-lightbox-index)     */
  /*     - Apertura via bottone "Vedi tutte le foto" (data-lightbox-open)*/
  /*     - Navigazione: click frecce, tasti ←/→, swipe touch            */
  /*     - Chiusura: click su X, click su backdrop, tasto ESC           */
  /* ------------------------------------------------------------------ */

  function initLightbox() {
    const dataList = document.querySelector('.lightbox-data');
    if (!dataList) return;

    // Costruisci l'array delle foto dal dataset HTML nascosto
    const photos = Array.from(dataList.querySelectorAll('li')).map(li => ({
      src: li.dataset.src,
      alt: li.dataset.alt || ''
    }));
    if (!photos.length) return;

    // Crea il DOM del lightbox una volta sola e lo aggiunge a body
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Galleria foto');
    lightbox.innerHTML = `
      <button class="lightbox__close" type="button" aria-label="Chiudi">&times;</button>
      <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Foto precedente">&larr;</button>
      <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Foto successiva">&rarr;</button>
      <div class="lightbox__stage">
        <img class="lightbox__img" alt="">
      </div>
      <div class="lightbox__counter"></div>
    `;
    document.body.appendChild(lightbox);

    const imgEl = lightbox.querySelector('.lightbox__img');
    const counterEl = lightbox.querySelector('.lightbox__counter');
    const btnClose = lightbox.querySelector('.lightbox__close');
    const btnPrev = lightbox.querySelector('.lightbox__nav--prev');
    const btnNext = lightbox.querySelector('.lightbox__nav--next');

    let currentIndex = 0;

    function updateImage() {
      const photo = photos[currentIndex];
      imgEl.src = photo.src;
      imgEl.alt = photo.alt;
      counterEl.textContent = `${currentIndex + 1} / ${photos.length}`;
    }

    function openAt(index) {
      currentIndex = ((index % photos.length) + photos.length) % photos.length;
      updateImage();
      lightbox.classList.add('is-open');
      document.body.classList.add('is-lightbox-open');
    }

    function close() {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('is-lightbox-open');
    }

    function next() {
      currentIndex = (currentIndex + 1) % photos.length;
      updateImage();
    }

    function prev() {
      currentIndex = (currentIndex - 1 + photos.length) % photos.length;
      updateImage();
    }

    // Click su thumbnail con data-lightbox-index
    document.querySelectorAll('[data-lightbox-index]').forEach(el => {
      el.addEventListener('click', () => {
        const index = parseInt(el.dataset.lightboxIndex, 10) || 0;
        openAt(index);
      });
    });

    // Click su bottone "Vedi tutte le foto"
    document.querySelectorAll('[data-lightbox-open]').forEach(el => {
      el.addEventListener('click', () => openAt(0));
    });

    // Click sui controlli del lightbox
    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', prev);
    btnNext.addEventListener('click', next);

    // Click sul backdrop (zona vuota attorno all'immagine) chiude
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });

    // Tastiera: ESC chiude, frecce ←/→ navigano
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });

    // Drag touch (mobile) e mouse drag (desktop): la foto segue il dito,
    // al rilascio cambia foto se si    superata la soglia, sennò torna indietro.
    let dragStartX = 0;
    let dragCurrentX = 0;
    let isDragging = false;
    const SWIPE_THRESHOLD = 60; // pixel di drag necessari per cambiare foto

    function setDragOffset(px) {
      // Sposta l'immagine in tempo reale durante il drag
      imgEl.style.transition = 'none';
      imgEl.style.transform = `translateX(${px}px)`;
      // Affievolisco un po' l'opacit  proporzionalmente al drag per dare
      // un feedback visivo "sta uscendo"
      const opacity = Math.max(0.4, 1 - Math.abs(px) / 400);
      imgEl.style.opacity = String(opacity);
    }

    function resetDragOffset(animated) {
      imgEl.style.transition = animated ? 'transform 200ms ease, opacity 200ms ease' : 'none';
      imgEl.style.transform = '';
      imgEl.style.opacity = '';
    }

    function onDragStart(clientX) {
      isDragging = true;
      dragStartX = clientX;
      dragCurrentX = clientX;
    }

    function onDragMove(clientX) {
      if (!isDragging) return;
      dragCurrentX = clientX;
      const diff = dragCurrentX - dragStartX;
      setDragOffset(diff);
    }

    function onDragEnd() {
      if (!isDragging) return;
      isDragging = false;
      const diff = dragCurrentX - dragStartX;

      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        // Cambia foto: l'immagine "sparisce" verso il lato, poi next/prev
        // ricarica la nuova immagine e l'apparizione fa il resto.
        if (diff < 0) next();
        else prev();
        resetDragOffset(false); // istantaneo, gi  caricata la nuova foto
      } else {
        // Sotto soglia: torna al centro con animazione
        resetDragOffset(true);
      }
    }

    // Touch events
    lightbox.addEventListener('touchstart', (e) => {
      onDragStart(e.touches[0].clientX);
    }, { passive: true });

    lightbox.addEventListener('touchmove', (e) => {
      onDragMove(e.touches[0].clientX);
    }, { passive: true });

    lightbox.addEventListener('touchend', () => onDragEnd());
    lightbox.addEventListener('touchcancel', () => onDragEnd());

    // Mouse events (per testare il drag anche su desktop con trackpad/mouse)
    imgEl.addEventListener('mousedown', (e) => {
      e.preventDefault();
      onDragStart(e.clientX);
    });
    window.addEventListener('mousemove', (e) => {
      if (isDragging) onDragMove(e.clientX);
    });
    window.addEventListener('mouseup', () => onDragEnd());
  }

  /* ------------------------------------------------------------------ */
  /* 11. CSS minimo del lightbox iniettato dinamicamente                */
  /*     (per non appesantire i file CSS principali con stili usati     */
  /*     solo da una pagina)                                            */
  /* ------------------------------------------------------------------ */

  function injectLightboxStyles() {
    if (document.getElementById('lightbox-styles')) return;

    const style = document.createElement('style');
    style.id = 'lightbox-styles';
    style.textContent = `
      .lightbox {
        position: fixed;
        inset: 0;
        background-color: rgba(28, 43, 58, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 0;
        pointer-events: none;
        transition: opacity 300ms ease;
      }
      .lightbox.is-open {
        opacity: 1;
        pointer-events: auto;
      }
      .lightbox__stage {
        max-width: 90vw;
        max-height: 85vh;
        display: flex;
        align-items: center;
        justify-content: center;
        touch-action: pan-y;     /* Il browser non interferisce con il drag orizzontale */
        user-select: none;
        -webkit-user-select: none;
      }
      .lightbox__img {
        max-width: 100%;
        max-height: 85vh;
        object-fit: contain;
        display: block;
        cursor: grab;
        user-select: none;
        -webkit-user-select: none;
        -webkit-user-drag: none;
      }
      .lightbox__img:active {
        cursor: grabbing;
      }
      .lightbox__close,
      .lightbox__nav {
        position: absolute;
        background: none;
        border: 1px solid rgba(250, 248, 243, 0.4);
        color: var(--color-bianco-calce);
        cursor: pointer;
        font-size: 24px;
        font-family: var(--font-body);
        line-height: 1;
        transition: background-color 200ms, border-color 200ms;
      }
      .lightbox__close:hover,
      .lightbox__nav:hover {
        background-color: rgba(250, 248, 243, 0.15);
        border-color: var(--color-bianco-calce);
      }
      .lightbox__close {
        top: 24px;
        right: 24px;
        width: 44px;
        height: 44px;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .lightbox__nav {
        top: 50%;
        transform: translateY(-50%);
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .lightbox__nav--prev {
        left: 24px;
      }
      .lightbox__nav--next {
        right: 24px;
      }
      .lightbox__counter {
        position: absolute;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--color-bianco-calce);
        font-family: var(--font-body);
        font-size: 14px;
        letter-spacing: 0.08em;
        opacity: 0.7;
      }
      body.is-lightbox-open {
        overflow: hidden;
      }
      @media (max-width: 768px) {
        .lightbox__close {
          top: 16px;
          right: 16px;
        }
        /* Su mobile niente frecce: la navigazione    via drag swipe */
        .lightbox__nav {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  }



  /* ------------------------------------------------------------------ */
  /* INIZIALIZZAZIONE                                                   */
  /* ------------------------------------------------------------------ */

  async function init() {
    // 1. Carica header e footer in parallelo
    await Promise.all([
      loadComponent('#site-header', 'components/header.html'),
      loadComponent('#site-footer', 'components/footer.html')
    ]);

    // 2. Inizializza i comportamenti che riguardano header/footer
    initHamburger();
    initHeaderScroll();
    markActiveLink();
    injectYear();

    // 3. Inizializza i comportamenti che riguardano il contenuto della pagina
    initAccordion();
    initFadeIn();
    initSmoothAnchors();

    // 4. Funzioni specifiche per pagine particolari
    //    (si attivano solo se trovano i loro hook nel DOM)
    initHeroCarousel();
    injectLightboxStyles();
    initLightbox();

    // 5. Emetti evento custom per translation.js
    document.dispatchEvent(new CustomEvent('componentsLoaded'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ==========================================================================
   contact-form.js
   Gestione AJAX del form di contatto con Formspree (o servizi compatibili).

   Cosa fa:
   - Intercetta il submit del form [data-contact-form]
   - Valida i campi required client-side
   - Controlla l'honeypot anti-spam (campo _gotcha): se compilato, drop silenzioso
   - Invia i dati come JSON via fetch all'endpoint Formspree
   - Mostra messaggio di successo INLINE (sostituisce il form)
   - Mostra messaggio di errore INLINE (sopra il form, lasciando il form
     visibile per consentire la correzione)
   - Gestisce stato loading sul bottone submit (3 puntini animati)

   Setup richiesto:
   - L'attributo action del form deve puntare a un endpoint Formspree valido,
     es. action="https://formspree.io/f/xayzqkpw"
   - Se action contiene "INSERISCI_TUO_ENDPOINT", lo script logga un warning
     e simula comunque success per consentire test locali.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Trovo il form e gli elementi correlati                             */
  /* ------------------------------------------------------------------ */

  function init() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;

    const wrapper      = document.querySelector('[data-form-wrapper]');
    const submitBtn    = form.querySelector('[data-form-submit]');
    const successBox   = document.querySelector('[data-form-success]');
    const errorBox     = document.querySelector('[data-form-error]');
    const retryBtn     = document.querySelector('[data-form-retry]');

    if (!wrapper || !submitBtn || !successBox || !errorBox) {
      console.warn('contact-form.js: elementi richiesti mancanti, esco.');
      return;
    }

    /* ---------------------------------------------------------------- */
    /* Submit handler                                                   */
    /* ---------------------------------------------------------------- */

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // 1. Honeypot check: se _gotcha è stato compilato è un bot.
      //    Fingiamo successo (silenzio = miglior trappola) senza inviare nulla.
      const honeypot = form.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value.trim() !== '') {
        showSuccess();
        return;
      }

      // 2. Validazione client-side
      if (!validateForm(form)) {
        // Focus sul primo campo invalido
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // 3. Stato loading
      setLoading(true);
      hideError();

      // 4. Endpoint check: se ancora placeholder, simulo success per dev
      const endpoint = form.getAttribute('action');
      if (!endpoint || endpoint.includes('INSERISCI_TUO_ENDPOINT')) {
        console.warn(
          'contact-form.js: l\'endpoint Formspree non è configurato. ' +
          'Simulo invio riuscito per test locale. ' +
          'Sostituisci action="..." nel form con il tuo endpoint reale.'
        );
        // Simula latenza realistica per testare il loader
        await new Promise(r => setTimeout(r, 800));
        setLoading(false);
        showSuccess();
        return;
      }

      // 5. Invio reale tramite fetch
      try {
        const formData = new FormData(form);

        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: {
            // Formspree accetta JSON solo se chiediamo esplicitamente
            // Accept: application/json. Altrimenti redirect alla loro pagina
            // di ringraziamento di default.
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          setLoading(false);
          showSuccess();
          form.reset();
        } else {
          // Formspree restituisce un body JSON con dettagli sull'errore.
          // Per ora non li mostriamo nello specifico — meglio messaggio generico
          // (i dettagli sono spesso tecnici e poco utili al cliente).
          const data = await response.json().catch(() => ({}));
          console.error('contact-form.js: errore Formspree', response.status, data);
          setLoading(false);
          showError();
        }
      } catch (err) {
        // Errori di rete (offline, DNS, CORS, etc.)
        console.error('contact-form.js: errore di rete', err);
        setLoading(false);
        showError();
      }
    });

    /* ---------------------------------------------------------------- */
    /* Bottone "Riprova" sull'errore: nasconde l'alert, rimette focus   */
    /* sul primo campo                                                  */
    /* ---------------------------------------------------------------- */

    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        hideError();
        const firstField = form.querySelector('input, select, textarea');
        if (firstField) firstField.focus();
      });
    }

    /* ---------------------------------------------------------------- */
    /* Rimuovo la classe .is-invalid mentre l'utente corregge il campo  */
    /* ---------------------------------------------------------------- */

    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('is-invalid');
      });
      field.addEventListener('change', () => {
        field.classList.remove('is-invalid');
      });
    });

    /* ---------------------------------------------------------------- */
    /* Helpers                                                          */
    /* ---------------------------------------------------------------- */

    function validateForm(form) {
      let isValid = true;

      // Validazione: ogni campo required deve essere non vuoto.
      // Per email controlliamo anche che sia formalmente valida (HTML5 type=email)
      const requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(field => {
        const value = (field.value || '').trim();

        // Checkbox: deve essere checked
        if (field.type === 'checkbox') {
          if (!field.checked) {
            field.classList.add('is-invalid');
            isValid = false;
          }
          return;
        }

        // Vuoto → invalido
        if (value === '') {
          field.classList.add('is-invalid');
          isValid = false;
          return;
        }

        // Email: usa la validazione HTML5 nativa
        if (field.type === 'email' && !field.checkValidity()) {
          field.classList.add('is-invalid');
          isValid = false;
          return;
        }

        // Min length (per textarea messaggio)
        if (field.minLength > 0 && value.length < field.minLength) {
          field.classList.add('is-invalid');
          isValid = false;
          return;
        }
      });

      return isValid;
    }

    function setLoading(loading) {
      submitBtn.classList.toggle('is-loading', loading);
      submitBtn.disabled = loading;
      submitBtn.setAttribute('aria-busy', String(loading));
    }

    function showSuccess() {
      wrapper.classList.remove('is-error');
      wrapper.classList.add('is-success');
      // Scrolla al messaggio di successo (utile su mobile dove il form
      // è lungo e la sostituzione potrebbe avvenire fuori viewport)
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function showError() {
      wrapper.classList.add('is-error');
      // Scrolla all'alert di errore
      errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function hideError() {
      wrapper.classList.remove('is-error');
    }
  }

  /* ------------------------------------------------------------------ */
  /* Avvio                                                              */
  /* ------------------------------------------------------------------ */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();