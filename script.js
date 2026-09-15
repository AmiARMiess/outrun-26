/* OUTRUN '26 — nav, reveals, counters, sun/star parallax (vanilla, no deps) */
(function () {
  try {
    document.documentElement.classList.add('js');

    /* nav state */
    var nav = document.querySelector('.nav');
    addEventListener('scroll', function () { nav.classList.toggle('scrolled', scrollY > 8); }, { passive: true });

    /* scroll reveals */
    document.querySelectorAll('h2, .artist, .night, .plan, .cta-card, blockquote').forEach(function (el) { el.classList.add('reveal'); });
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: .15 });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    }

    /* count-up stats */
    function animateNum(el) {
      var target = parseFloat(el.dataset.target),
          dec = parseInt(el.dataset.decimals || 0, 10),
          suf = el.dataset.suffix || '', t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / 1500, 1), e = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * e).toFixed(dec) + suf;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if ('IntersectionObserver' in window) {
      var numIO = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { numIO.unobserve(e.target); animateNum(e.target); } });
      }, { threshold: .6 });
      document.querySelectorAll('.num').forEach(function (el) { numIO.observe(el); });
    } else {
      document.querySelectorAll('.num').forEach(function (el) {
        el.textContent = parseFloat(el.dataset.target).toFixed(parseInt(el.dataset.decimals || 0, 10)) + (el.dataset.suffix || '');
      });
    }

    /* sun + star parallax via CSS variables */
    addEventListener('mousemove', function (e) {
      var mx = (e.clientX / innerWidth - .5) * 2,
          my = -(e.clientY / innerHeight - .5) * 2;
      document.documentElement.style.setProperty('--mx', mx.toFixed(3));
      document.documentElement.style.setProperty('--my', my.toFixed(3));
    }, { passive: true });

    /* footer year */
    var y = document.getElementById('y');
    if (y) y.textContent = new Date().getFullYear();
  } catch (e) {}
})();