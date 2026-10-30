(function () {
  const FAV_KEY = "web-saude-favs";

  function params() {
    return new URLSearchParams(location.search);
  }

  function toast(msg) {
    const el = document.querySelector(".toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("is-on");
    setTimeout(() => el.classList.remove("is-on"), 2200);
  }

  function favs() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); }
    catch (e) { return []; }
  }

  function setFavs(ids) {
    localStorage.setItem(FAV_KEY, JSON.stringify(ids));
  }

  function toggleFav(id, btn) {
    const list = favs();
    const i = list.indexOf(id);
    if (i >= 0) list.splice(i, 1);
    else list.push(id);
    setFavs(list);
    if (btn) btn.classList.toggle("is-on", list.includes(id));
    toast(list.includes(id) ? "Unidade favoritada." : "Removido dos favoritos.");
  }

  function stars(n) {
    return "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));
  }

  function logoSvg() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12h8M12 8v8" stroke-linecap="round"/><circle cx="15.2" cy="15.2" r="1.1" fill="#fff" stroke="none"/><circle cx="18.4" cy="13.2" r="1.1" fill="#fff" stroke="none"/><circle cx="16.8" cy="18.2" r="1.1" fill="#fff" stroke="none"/><path d="M15.2 15.2l3.2-2M15.2 15.2l1.6 3"/></svg>';
  }

  function brand(href) {
    return '<a class="brand" href="' + (href || "index.html") + '"><span class="brand-mark">' + logoSvg() + '</span><span>Web Saúde</span></a>';
  }

  function header(active, mode) {
    const links = [
      ["index.html", "Início"],
      ["cidade.html", "Como funciona"]
    ];
    let extra = '<a class="btn btn-ghost" href="login.html">Entrar</a><a class="btn btn-primary" href="registro.html">Registrar</a>';
    if (mode === "user") extra = '<a class="btn btn-ghost" href="perfil.html">Maria Silva</a>';
    if (mode === "gestor") extra = '<a class="btn btn-ghost" href="minhas-unidades.html">Dra. Maria Silva</a>';
    if (mode === "admin") extra = '<span class="chip">Administrador</span><a class="btn btn-ghost" href="admin.html" aria-current="page">Painel</a>';
    return (
      '<header class="header"><div class="header-inner">' +
      brand("index.html") +
      '<nav class="nav">' +
      '<div class="nav-links" id="nav-links">' +
      links.map(([h, l]) => '<a href="' + h + '"' + (active === l ? ' class="is-active"' : "") + ">" + l + "</a>").join("") +
      "</div>" +
      '<div class="nav-actions">' + extra + "</div>" +
      '<button class="nav-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav-links">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      "</nav></div></header>"
    );
  }

  function footer() {
    return '<footer class="footer"><div class="footer-inner"><div>© Web Saúde</div><div>Informações cadastradas pelos próprios estabelecimentos.</div></div></footer><div class="toast" role="status" aria-live="polite" aria-atomic="true"></div>';
  }

  function paginate(items, page, perPage) {
    const total = items.length;
    const pages = Math.max(1, Math.ceil(total / perPage));
    const current = Math.min(Math.max(1, page), pages);
    const start = (current - 1) * perPage;
    return {
      items: items.slice(start, start + perPage),
      page: current,
      pages: pages,
      total: total,
      from: total ? start + 1 : 0,
      to: Math.min(start + perPage, total)
    };
  }

  function pagerHtml(p, noun) {
    if (!p.total) return "";
    const buttons = [];
    const max = p.pages;
    const set = new Set([1, 2, 3, max, p.page, p.page - 1, p.page + 1]);
    let last = 0;
    for (let i = 1; i <= max; i++) {
      if (!set.has(i) || i < 1) continue;
      if (last && i - last > 1) buttons.push('<span aria-hidden="true">…</span>');
      buttons.push('<button type="button" data-page="' + i + '"' + (i === p.page ? ' class="is-active" aria-current="page"' : "") + ' aria-label="Página ' + i + '">' + i + "</button>");
      last = i;
    }
    return (
      '<nav class="pager" data-pager aria-label="Paginação">' +
      "<p>Mostrando " + p.from + "–" + p.to + " de " + p.total + " " + (noun || "itens") + "</p>" +
      '<div class="pager-pages">' +
      '<button type="button" data-page="' + (p.page - 1) + '"' + (p.page === 1 ? " disabled" : "") + ' aria-label="Página anterior">Anterior</button>' +
      buttons.join("") +
      '<button type="button" data-page="' + (p.page + 1) + '"' + (p.page === p.pages ? " disabled" : "") + ' aria-label="Próxima página">Próximo</button>' +
      "</div></nav>"
    );
  }

  function heartBtn(id) {
    const on = favs().includes(id) ? " is-on" : "";
    return '<button class="heart' + on + '" type="button" data-fav="' + id + '" aria-label="Favoritar">♥</button>';
  }

  function unitCard(u) {
    return (
      '<article class="card unit-card">' +
      '<img src="' + u.foto + '" alt="' + u.nome + '">' +
      '<div class="unit-card-head"><div><div class="unit-type">' + u.tipo + "</div><h3>" + u.nome + "</h3></div>" + heartBtn(u.id) + "</div>" +
      '<div class="unit-meta"><div>' + u.endereco + "</div><div>★ " + u.nota.toFixed(1) + " (" + u.avaliacoes + " avaliações)</div></div>" +
      '<a href="detalhes.html?id=' + u.id + '">Ver detalhes</a></article>'
    );
  }

  function unitRow(u) {
    return (
      '<article class="card unit-row">' +
      '<img src="' + u.foto + '" alt="' + u.nome + '">' +
      "<div><div class=\"unit-row-top\"><span class=\"unit-type\">" + u.tipo + "</span><span>" + u.distancia + "</span></div>" +
      "<h3>" + u.nome + "</h3>" +
      '<div class="unit-meta"><div>★ ' + u.nota.toFixed(1) + " (" + u.avaliacoes + " avaliações) · " + u.horario + "</div>" +
      "<div>" + u.endereco + "</div></div>" +
      '<div style="margin-top:10px">' + u.convenios.map(function (c) { return '<span class="chip">' + c + "</span>"; }).join(" ") + "</div></div>" +
      '<div style="display:grid;gap:12px;justify-items:end">' + heartBtn(u.id) + '<a href="detalhes.html?id=' + u.id + '">Ver detalhes →</a></div></article>'
    );
  }

  function bindFavs(root) {
    (root || document).querySelectorAll("[data-fav]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        toggleFav(Number(btn.getAttribute("data-fav")), btn);
      });
    });
  }

  function bindPager(el, onPage) {
    if (!el) return;
    el.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-page]");
      if (!btn || btn.disabled) return;
      onPage(Number(btn.getAttribute("data-page")));
    });
  }

  function renderList(opts) {
    const root = document.querySelector(opts.target);
    if (!root) return;
    let page = 1;
    function draw() {
      const source = typeof opts.items === "function" ? opts.items() : opts.items;
      const p = paginate(source, page, opts.perPage);
      page = p.page;
      var body = p.items.length ? p.items.map(opts.render).join("") : '<p class="center-note">' + (opts.empty || "Nenhum item.") + "</p>";
      if (opts.gridClass && p.items.length) body = '<div class="' + opts.gridClass + '">' + body + "</div>";
      root.innerHTML = body + pagerHtml(p, opts.noun);
      bindFavs(root);
      bindPager(root.querySelector("[data-pager]"), function (n) { page = n; draw(); });
    }
    draw();
    return { refresh: draw };
  }

  function renderInfinite(opts) {
    const root = document.querySelector(opts.target);
    if (!root) return;
    const PAGE = opts.perPage || 10;
    let shown = PAGE;
    let observer = null;
    const sentinel = document.createElement(opts.sentinel || "div");
    sentinel.className = "infinite-sentinel";
    sentinel.setAttribute("aria-hidden", "true");
    if (opts.sentinel === "tr") {
      sentinel.innerHTML = '<td colspan="' + (opts.colspan || 4) + '"></td>';
    }

    function allItems() {
      return typeof opts.items === "function" ? opts.items() : opts.items;
    }

    function scroller() {
      var el = null;
      if (opts.root === "self") el = root;
      else if (typeof opts.root === "string") el = document.querySelector(opts.root);
      else el = opts.root || null;
      if (!el) return null;
      if (el.scrollHeight <= el.clientHeight + 4) return null;
      return el;
    }

    function watch(hasMore) {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      if (!hasMore) return;
      observer = new IntersectionObserver(function (entries) {
        if (entries[0] && entries[0].isIntersecting) {
          shown += PAGE;
          draw();
        }
      }, { root: scroller(), rootMargin: "80px" });
      observer.observe(sentinel);
    }

    function draw(reset) {
      if (reset) shown = PAGE;
      const all = allItems();
      const slice = all.slice(0, shown);
      const hasMore = shown < all.length;
      const box = scroller() || root;
      const top = box.scrollTop;
      if (!slice.length) {
        root.innerHTML = (typeof opts.empty === "function" ? opts.empty() : opts.empty) || '<p class="center-note">Nenhum item.</p>';
      } else {
        root.innerHTML = slice.map(opts.render).join("");
        if (hasMore) root.appendChild(sentinel);
      }
      box.scrollTop = top;
      if (opts.onMeta) opts.onMeta(slice.length, all.length, hasMore);
      if (opts.bind) opts.bind(root);
      watch(hasMore);
    }

    draw(true);
    return { refresh: function () { draw(true); } };
  }

  document.addEventListener("click", function (e) {
    const toggle = e.target.closest(".nav-toggle");
    if (toggle) {
      const open = document.querySelector(".nav").classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
      return;
    }
    const tab =e.target.closest("[data-tab]");
    if (!tab) return;
    const group = tab.getAttribute("data-tab-group");
    document.querySelectorAll('[data-tab-group="' + group + '"]').forEach(function (b) { b.classList.toggle("is-on", b === tab); });
    document.querySelectorAll('[data-panel-group="' + group + '"]').forEach(function (p) {
      var off = p.getAttribute("data-panel") !== tab.getAttribute("data-tab");
      p.hidden = off;
      p.classList.toggle("is-hidden", off);
    });
  });

  WebSaude.ui = {
    params: params,
    toast: toast,
    favs: favs,
    toggleFav: toggleFav,
    stars: stars,
    brand: brand,
    header: header,
    footer: footer,
    paginate: paginate,
    pagerHtml: pagerHtml,
    unitCard: unitCard,
    unitRow: unitRow,
    bindFavs: bindFavs,
    bindPager: bindPager,
    renderList: renderList,
    renderInfinite: renderInfinite
  };

  document.querySelectorAll("[data-header]").forEach(function (el) {
    el.outerHTML = header(el.getAttribute("data-header"), el.getAttribute("data-mode") || "guest");
  });
  document.querySelectorAll("[data-footer]").forEach(function (el) {
    el.outerHTML = footer();
  });
})();
