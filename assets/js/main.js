(function () {
  "use strict";

  var root = document.documentElement;
  var storage = {
    get: function (key) {
      try {
        return window.localStorage.getItem(key);
      } catch (error) {
        return null;
      }
    },
    set: function (key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {}
    }
  };

  root.classList.add("js");

  /* ---------- Theme ---------- */

  var themeToggle = document.querySelector("[data-theme-toggle]");
  var themeColor = document.querySelector('meta[name="theme-color"]');

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function currentTheme() {
    return root.dataset.theme === "dark" || root.dataset.theme === "light"
      ? root.dataset.theme
      : systemTheme();
  }

  function syncThemeChrome(theme) {
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
    if (themeColor) {
      themeColor.setAttribute("content", theme === "dark" ? "#12110f" : "#f4f1ea");
    }
  }

  function applyTheme(theme, persist) {
    root.dataset.theme = theme;
    syncThemeChrome(theme);
    if (persist) {
      storage.set("dzakk-theme", theme);
    }
  }

  if (themeToggle) {
    if (root.dataset.theme === "dark" || root.dataset.theme === "light") {
      syncThemeChrome(root.dataset.theme);
    } else {
      syncThemeChrome(systemTheme());
      var schemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      var syncFromSystem = function () {
        if (root.dataset.theme !== "dark" && root.dataset.theme !== "light") {
          syncThemeChrome(systemTheme());
        }
      };
      if (schemeQuery.addEventListener) {
        schemeQuery.addEventListener("change", syncFromSystem);
      }
    }

    themeToggle.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  }

  /* ---------- Language ---------- */

  var langToggle = document.querySelector("[data-lang-toggle]");

  function applyAriaLabels(lang) {
    var suffix = lang === "en" ? "en" : "id";
    var nodes = document.querySelectorAll("[data-i18n-aria-" + suffix + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var value = node.getAttribute("data-i18n-aria-" + suffix);
      if (value) node.setAttribute("aria-label", value);
    });
  }

  function applyLang(lang, persist) {
    root.dataset.lang = lang;
    root.lang = lang;
    if (langToggle) {
      langToggle.setAttribute("lang", lang === "id" ? "en" : "id");
      langToggle.setAttribute(
        "aria-label",
        lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"
      );
    }
    applyAriaLabels(lang);
    setMenuLabel(menuToggle && menuToggle.getAttribute("aria-expanded") === "true");
    if (persist) {
      storage.set("dzakk-lang", lang);
    }
  }

  if (langToggle) {
    applyLang(root.dataset.lang === "en" ? "en" : "id", false);
    langToggle.addEventListener("click", function () {
      applyLang(root.dataset.lang === "en" ? "id" : "en", true);
    });
  }

  /* ---------- Mobile menu ---------- */

  var menuToggle = document.querySelector("[data-menu-toggle]");
  var nav = document.getElementById("site-nav");
  var menuLabels = {
    id: { open: "Buka menu", close: "Tutup menu" },
    en: { open: "Open menu", close: "Close menu" }
  };

  function setMenuLabel(isOpen) {
    if (!menuToggle) return;
    var lang = root.dataset.lang === "en" ? "en" : "id";
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? menuLabels[lang].close : menuLabels[lang].open
    );
  }

  function closeMenu() {
    if (!menuToggle || !nav) return;
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    setMenuLabel(false);
  }

  if (menuToggle && nav) {
    setMenuLabel(false);

    menuToggle.addEventListener("click", function () {
      var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      nav.classList.toggle("is-open", !isOpen);
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      setMenuLabel(!isOpen);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || menuToggle.contains(event.target)) return;
      closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  /* ---------- Scroll spy ---------- */

  var sections = Array.prototype.slice.call(
    document.querySelectorAll("main section[id]")
  );
  var navLinks = nav
    ? Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'))
    : [];

  function setActive(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + id;
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* ---------- Reveal on scroll ---------- */

  var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  /* ---------- Copy email ---------- */

  var copyButton = document.querySelector("[data-copy]");
  var toast = document.querySelector("[data-toast]");
  var toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2200);
  }

  if (copyButton) {
    copyButton.addEventListener("click", function () {
      var value = copyButton.getAttribute("data-copy");
      var isId = root.dataset.lang !== "en";

      function done() {
        showToast(isId ? "Email disalin." : "Email copied.");
      }

      function fallback() {
        var field = document.createElement("textarea");
        field.value = value;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        try {
          document.execCommand("copy");
          done();
        } catch (error) {
          showToast(isId ? "Gagal menyalin." : "Could not copy.");
        }
        document.body.removeChild(field);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, fallback);
      } else {
        fallback();
      }
    });
  }

  /* ---------- Footer year ---------- */

  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
