/* ==========================================================================
   Shop Notes - Main Client-Side Script
   Category Filtering, Article Slideshows, and Fullscreen Lightbox
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Category Filtering (Homepage)
     ------------------------------------------------------------------------ */
  function initFilter() {
    var pills = document.querySelectorAll('.pill');
    var categoryGroups = document.querySelectorAll('.category-group');

    if (!pills.length || !categoryGroups.length) return;

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');

        var filter = pill.getAttribute('data-filter');

        categoryGroups.forEach(function (group) {
          if (filter === 'all' || group.getAttribute('data-category') === filter) {
            group.classList.remove('hidden');
          } else {
            group.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     2. Fullscreen Slideshow Lightbox Modal
     ------------------------------------------------------------------------ */
  function createLightbox() {
    var modal = document.createElement('div');
    modal.id = 'slideshow-lightbox';
    modal.className = 'lightbox-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');

    modal.innerHTML = [
      '<div class="lightbox-backdrop"></div>',
      '<div class="lightbox-container">',
      '  <div class="lightbox-header">',
      '    <div class="lightbox-counter">01 / 01</div>',
      '    <div class="lightbox-caption"></div>',
      '    <button type="button" class="lightbox-close" aria-label="Close slideshow">',
      '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
      '    </button>',
      '  </div>',
      '  <div class="lightbox-body">',
      '    <button type="button" class="lightbox-nav-btn prev-btn" aria-label="Previous image">',
      '      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',
      '    </button>',
      '    <div class="lightbox-stage">',
      '      <img class="lightbox-img" src="" alt="">',
      '    </div>',
      '    <button type="button" class="lightbox-nav-btn next-btn" aria-label="Next image">',
      '      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
      '    </button>',
      '  </div>',
      '  <div class="lightbox-footer">',
      '    <div class="lightbox-thumbnails"></div>',
      '  </div>',
      '</div>'
    ].join('');

    document.body.appendChild(modal);

    var counterEl = modal.querySelector('.lightbox-counter');
    var captionEl = modal.querySelector('.lightbox-caption');
    var closeBtn = modal.querySelector('.lightbox-close');
    var backdropEl = modal.querySelector('.lightbox-backdrop');
    var prevBtn = modal.querySelector('.lightbox-nav-btn.prev-btn');
    var nextBtn = modal.querySelector('.lightbox-nav-btn.next-btn');
    var imgEl = modal.querySelector('.lightbox-img');
    var thumbsContainer = modal.querySelector('.lightbox-thumbnails');
    var bodyEl = modal.querySelector('.lightbox-body');

    var currentSlides = [];
    var currentIndex = 0;
    var onSync = null;

    function pad(n) {
      return n < 10 ? '0' + n : '' + n;
    }

    function renderSlide(index) {
      if (!currentSlides.length) return;
      if (index < 0) index = currentSlides.length - 1;
      if (index >= currentSlides.length) index = 0;
      currentIndex = index;

      var slide = currentSlides[currentIndex];
      imgEl.style.opacity = '0';
      setTimeout(function () {
        imgEl.src = slide.src;
        imgEl.alt = slide.alt || '';
        imgEl.style.opacity = '1';
      }, 80);

      counterEl.textContent = pad(currentIndex + 1) + ' / ' + pad(currentSlides.length);
      captionEl.textContent = slide.title || slide.alt || '';

      var isSingle = currentSlides.length <= 1;
      prevBtn.style.display = isSingle ? 'none' : 'flex';
      nextBtn.style.display = isSingle ? 'none' : 'flex';
      thumbsContainer.style.display = isSingle ? 'none' : 'flex';

      var thumbButtons = thumbsContainer.querySelectorAll('.lightbox-thumb');
      thumbButtons.forEach(function (btn, i) {
        btn.classList.toggle('active', i === currentIndex);
      });

      if (onSync) onSync(currentIndex);
    }

    function open(slides, startIndex, syncCallback) {
      currentSlides = slides;
      onSync = syncCallback || null;
      thumbsContainer.innerHTML = '';

      if (slides.length > 1) {
        slides.forEach(function (s, i) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'lightbox-thumb' + (i === startIndex ? ' active' : '');
          btn.setAttribute('aria-label', 'View slide ' + (i + 1));
          var thumbImg = document.createElement('img');
          thumbImg.src = s.src;
          thumbImg.alt = s.alt || '';
          btn.appendChild(thumbImg);
          btn.addEventListener('click', function () {
            renderSlide(i);
          });
          thumbsContainer.appendChild(btn);
        });
      }

      renderSlide(startIndex || 0);
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      currentSlides = [];
      onSync = null;
    }

    function next() {
      renderSlide(currentIndex + 1);
    }

    function prev() {
      renderSlide(currentIndex - 1);
    }

    closeBtn.addEventListener('click', close);
    backdropEl.addEventListener('click', close);
    prevBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      prev();
    });
    nextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      next();
    });

    // Close when clicking outside image in stage
    modal.querySelector('.lightbox-stage').addEventListener('click', function (e) {
      if (e.target === this) {
        close();
      }
    });

    // Keyboard navigation
    window.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') {
        close();
      } else if (e.key === 'ArrowRight') {
        next();
      } else if (e.key === 'ArrowLeft') {
        prev();
      }
    });

    // Touch swipe support
    var touchStartX = 0;
    var touchStartY = 0;
    bodyEl.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    bodyEl.addEventListener('touchend', function (e) {
      var diffX = e.changedTouches[0].screenX - touchStartX;
      var diffY = e.changedTouches[0].screenY - touchStartY;
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          next();
        } else {
          prev();
        }
      }
    }, { passive: true });

    return {
      open: open,
      close: close,
      next: next,
      prev: prev
    };
  }

  /* ------------------------------------------------------------------------
     3. Article Consecutive Image Grouping & Slideshow Builder
     ------------------------------------------------------------------------ */
  function createSlideshowComponent(images, lightbox) {
    var slideData = images.map(function (img) {
      return {
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt') || '',
        title: img.getAttribute('title') || img.getAttribute('alt') || ''
      };
    });

    var container = document.createElement('div');
    container.className = 'article-slideshow';
    container.setAttribute('role', 'region');
    container.setAttribute('aria-label', 'Image gallery slideshow');

    var currentIndex = 0;
    var total = slideData.length;

    function pad(n) {
      return n < 10 ? '0' + n : '' + n;
    }

    // Header bar
    var header = document.createElement('div');
    header.className = 'slideshow-header';

    var meta = document.createElement('div');
    meta.className = 'slideshow-meta';

    var counter = document.createElement('span');
    counter.className = 'slideshow-counter';
    counter.textContent = pad(1) + ' / ' + pad(total);

    meta.appendChild(counter);

    var controls = document.createElement('div');
    controls.className = 'slideshow-controls';

    var prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'slideshow-btn prev-btn';
    prevBtn.setAttribute('aria-label', 'Previous slide');
    prevBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';

    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'slideshow-btn next-btn';
    nextBtn.setAttribute('aria-label', 'Next slide');
    nextBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';

    var expandBtn = document.createElement('button');
    expandBtn.type = 'button';
    expandBtn.className = 'slideshow-btn expand-btn';
    expandBtn.setAttribute('aria-label', 'Expand slideshow');
    expandBtn.title = 'View fullscreen slideshow';
    expandBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg><span class="expand-text">Expand</span>';

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    controls.appendChild(expandBtn);

    header.appendChild(meta);
    header.appendChild(controls);

    // Viewport
    var viewport = document.createElement('div');
    viewport.className = 'slideshow-viewport';
    viewport.title = 'Click to open fullscreen slideshow';

    var track = document.createElement('div');
    track.className = 'slideshow-track';

    var slideEls = [];
    slideData.forEach(function (data, i) {
      var slide = document.createElement('div');
      slide.className = 'slideshow-slide' + (i === 0 ? ' active' : '');
      var img = document.createElement('img');
      img.src = data.src;
      img.alt = data.alt;
      img.loading = i === 0 ? 'eager' : 'lazy';
      slide.appendChild(img);
      track.appendChild(slide);
      slideEls.push(slide);
    });

    var hint = document.createElement('div');
    hint.className = 'slideshow-overlay-hint';
    hint.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg><span>Click to enlarge</span>';

    viewport.appendChild(track);
    viewport.appendChild(hint);

    // Footer
    var footer = document.createElement('div');
    footer.className = 'slideshow-footer';

    var dots = document.createElement('div');
    dots.className = 'slideshow-dots';

    var dotEls = [];
    slideData.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'slideshow-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', function (e) {
        e.stopPropagation();
        goToSlide(i);
      });
      dots.appendChild(dot);
      dotEls.push(dot);
    });

    var caption = document.createElement('div');
    caption.className = 'slideshow-caption';
    caption.textContent = slideData[0].title || '';

    footer.appendChild(dots);
    footer.appendChild(caption);

    function goToSlide(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      currentIndex = index;

      slideEls.forEach(function (s, i) {
        s.classList.toggle('active', i === currentIndex);
      });
      dotEls.forEach(function (d, i) {
        d.classList.toggle('active', i === currentIndex);
      });
      counter.textContent = pad(currentIndex + 1) + ' / ' + pad(total);
      caption.textContent = slideData[currentIndex].title || '';
    }

    prevBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      goToSlide(currentIndex + 1);
    });

    function openInLightbox() {
      lightbox.open(slideData, currentIndex, function (newIdx) {
        goToSlide(newIdx);
      });
    }

    viewport.addEventListener('click', openInLightbox);
    expandBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      openInLightbox();
    });

    container.appendChild(header);
    container.appendChild(viewport);
    container.appendChild(footer);

    return container;
  }

  function isImageContainer(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.tagName === 'IMG') return true;
    if (el.tagName !== 'P') return false;

    var imgs = el.querySelectorAll('img');
    if (imgs.length === 0) return false;

    var clone = el.cloneNode(true);
    var removeTargets = clone.querySelectorAll('img, br');
    removeTargets.forEach(function (n) { n.remove(); });

    return clone.textContent.trim().length === 0;
  }

  function initArticleSlideshows() {
    var body = document.querySelector('.project-body');
    if (!body) return;

    var lightbox = createLightbox();

    var children = Array.prototype.slice.call(body.children);
    var groups = [];
    var currentGroup = [];

    children.forEach(function (child) {
      if (isImageContainer(child)) {
        currentGroup.push(child);
      } else {
        if (currentGroup.length > 0) {
          groups.push(currentGroup);
          currentGroup = [];
        }
      }
    });

    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }

    groups.forEach(function (group) {
      var images = [];
      group.forEach(function (container) {
        if (container.tagName === 'IMG') {
          images.push(container);
        } else {
          var imgs = container.querySelectorAll('img');
          imgs.forEach(function (img) { images.push(img); });
        }
      });

      if (images.length >= 2) {
        var slideshowEl = createSlideshowComponent(images, lightbox);
        var firstEl = group[0];
        firstEl.parentNode.insertBefore(slideshowEl, firstEl);

        group.forEach(function (container) {
          if (container && container.parentNode) {
            container.parentNode.removeChild(container);
          }
        });
      } else if (images.length === 1) {
        var singleImg = images[0];
        singleImg.style.cursor = 'zoom-in';
        singleImg.title = 'Click to enlarge';
        singleImg.addEventListener('click', function () {
          lightbox.open([{
            src: singleImg.getAttribute('src'),
            alt: singleImg.getAttribute('alt') || '',
            title: singleImg.getAttribute('title') || singleImg.getAttribute('alt') || ''
          }], 0);
        });
      }
    });
  }

  /* ------------------------------------------------------------------------
     Initialize on DOM Ready
     ------------------------------------------------------------------------ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initFilter();
      initArticleSlideshows();
    });
  } else {
    initFilter();
    initArticleSlideshows();
  }
})();
