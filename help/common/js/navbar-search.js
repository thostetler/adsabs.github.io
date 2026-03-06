(function () {
  var CX = '016381517138775266827:j_b8wqloe18';
  var HIDDEN = 'navbar-search-hidden';

  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('[data-search-toggle]');
    if (toggle) {
      e.preventDefault();
      openSearch(toggle);
      return;
    }

    var close = e.target.closest('[data-search-close]');
    if (close) {
      e.preventDefault();
      closeSearch(close);
      return;
    }
  });

  document.addEventListener('submit', function (e) {
    var form = e.target.closest('[data-search-form]');
    if (!form) return;
    e.preventDefault();
    var q = form.querySelector('[data-search-input]').value.trim();
    if (q) {
      window.open(
        'https://cse.google.com/cse?cx=' + CX + '&q=' +
          encodeURIComponent(q),
        '_blank'
      );
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector(
      '.navbar-search-form:not(.' + HIDDEN + ')'
    );
    if (!open) return;
    if (!open.contains(document.activeElement)) return;
    var close = open.querySelector('[data-search-close]');
    if (close) closeSearch(close);
  });

  function openSearch(toggle) {
    var nav = toggle.closest('.navbar-nav');
    if (!nav) return;
    var toggleLi = nav.querySelector('.navbar-search-toggle');
    var formLi = nav.querySelector('.navbar-search-form');
    if (!toggleLi || !formLi) return;
    toggleLi.classList.add(HIDDEN);
    formLi.classList.remove(HIDDEN);
    formLi.setAttribute('aria-expanded', 'true');
    var input = formLi.querySelector('[data-search-input]');
    input.value = '';
    input.focus();
  }

  function closeSearch(close) {
    var nav = close.closest('.navbar-nav');
    if (!nav) return;
    var toggleLi = nav.querySelector('.navbar-search-toggle');
    var formLi = nav.querySelector('.navbar-search-form');
    if (!toggleLi || !formLi) return;
    formLi.classList.add(HIDDEN);
    formLi.setAttribute('aria-expanded', 'false');
    toggleLi.classList.remove(HIDDEN);
    var toggle = toggleLi.querySelector('[data-search-toggle]');
    if (toggle) toggle.focus();
  }
})();
