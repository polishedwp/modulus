"use strict";
/**
 * Add the accessible responsive menu.
 *
 * @version 1.1.3
 *
 * @author StudioPress
 * @link https://github.com/copyblogger/responsive-menus/
 * @license GPL-2.0-or-later
 * @package GenesisSample
 */

!function (a, r, e) {
  "use strict";

  var t = "undefined" == typeof genesis_responsive_menu ? "" : genesis_responsive_menu,
      n = t.menuClasses,
      i = {},
      l = [];
  r.each(n, function (t) {
    i[t] = [], r.each(this, function (e, n) {
      var a = n,
          s = r(n);
      1 < s.length ? r.each(s, function (e, n) {
        var s = a + "-" + e;
        r(this).addClass(s.replace(".", "")), i[t].push(s), "combine" === t && l.push(s);
      }) : 1 == s.length && (i[t].push(a), "combine" === t && l.push(a));
    });
  }), void 0 === i.others && (i.others = []), 1 == l.length && (i.others.push(l[0]), i.combine = null, l = null);
  var s = {},
      u = "menu-toggle",
      o = "sub-menu-toggle",
      c = "genesis-responsive-menu";

  function d(e) {
    if (r(M(i)).find(".sub-menu").before(e.submenu), null !== l) {
      var n = i.others.concat(l[0]);
      r(M(n)).before(e.menu);
    } else r(M(i.others)).before(e.menu);
  }

  function f() {
    r(M(i)).addClass(c);
  }

  function h() {
    var e = r('button[id^="genesis-mobile-"]').attr("id");
    void 0 !== e && (y(e), b(e), C(e), m(e));
  }

  function p() {
    var e = r(this),
        n = e.next("nav"),
        s = "class";
    e.attr("id", "genesis-mobile-" + r(n).attr(s).match(/nav-\w*\b/));
  }

  function m(e) {
    if (null != l) {
      var s = l[0],
          n = r(l).filter(function (e) {
        if (0 < e) return e;
      });
      "none" !== w(e) ? (r.each(n, function (e, n) {
        r(n).find(".menu > li").addClass("moved-item-" + n.replace(".", "")).appendTo(s + " ul.genesis-nav-menu");
      }), r(M(n)).hide()) : (r(M(n)).show(), r.each(n, function (e, n) {
        r(".moved-item-" + n.replace(".", "")).appendTo(n + " ul.genesis-nav-menu").removeClass("moved-item-" + n.replace(".", ""));
      }));
    }
  }

  function g() {
    var e = r(this);
    x(e, "aria-pressed"), x(e, "aria-expanded"), e.toggleClass("activated"), e.next("nav").slideToggle("fast");
  }

  function v() {
    var e = r(this),
        n = e.closest(".menu-item").siblings();
    x(e, "aria-pressed"), x(e, "aria-expanded"), e.toggleClass("activated"), e.next(".sub-menu").slideToggle("fast"), n.find("." + o).removeClass("activated").attr("aria-pressed", "false"), n.find(".sub-menu").slideUp("fast");
  }

  function b(e) {
    var n = r("." + c + " .js-superfish"),
        s = "destroy";
    "function" == typeof n.superfish && ("none" === w(e) && (s = {
      delay: 100,
      animation: {
        opacity: "show",
        height: "show"
      },
      dropShadows: !1,
      speed: "fast"
    }), n.superfish(s));
  }

  function C(o) {
    var e = k();
    0 < !r(e).length || r.each(e, function (e, n) {
      var s = n.replace(".", ""),
          a = "genesis-" + s,
          t = "genesis-mobile-" + s;
      "none" == w(o) && (a = "genesis-mobile-" + s, t = "genesis-" + s);
      var i = r('.genesis-skip-link a[href="#' + a + '"]');

      if (null !== l && n !== l[0] && i.toggleClass("skip-link-hidden"), 0 < i.length) {
        var u = i.attr("href");
        u = u.replace(a, t), i.attr("href", u);
      }
    });
  }

  function y(e) {
    if ("none" !== w(e)) return !0;
    r("." + u + ", ." + c + " .sub-menu-toggle").removeClass("activated").attr("aria-expanded", !1).attr("aria-pressed", !1), r("." + c + ", ." + c + " .sub-menu").attr("style", "");
  }

  function w(e) {
    var n = a.getElementById(e),
        s;
    return window.getComputedStyle(n).getPropertyValue("display");
  }

  function x(e, n) {
    e.attr(n, function (e, n) {
      return "false" === n;
    });
  }

  function M(e) {
    var n;
    return r.map(e, function (e, n) {
      return e;
    }).join(",");
  }

  function k() {
    var s = [];
    return null !== l && r.each(l, function (e, n) {
      s.push(n.valueOf());
    }), r.each(i.others, function (e, n) {
      s.push(n.valueOf());
    }), 0 < s.length ? s : null;
  }

  s.init = function () {
    if (0 != r(k()).length) {
      var e = void 0 !== t.menuIconClass ? t.menuIconClass : "dashicons-before dashicons-menu",
          n = void 0 !== t.subMenuIconClass ? t.subMenuIconClass : "dashicons-before dashicons-arrow-down-alt2",
          s = {
        menu: r("<button />", {
          class: u,
          "aria-expanded": !1,
          "aria-pressed": !1
        }).append(t.mainMenu),
        submenu: r("<button />", {
          class: o,
          "aria-expanded": !1,
          "aria-pressed": !1
        }).append(r("<span />", {
          class: "screen-reader-text",
          text: t.subMenu
        }))
      };
      f(), d(s), r("." + u).addClass(e), r("." + o).addClass(n), r("." + u).on("click.genesisMenu-mainbutton", g).each(p), r("." + o).on("click.genesisMenu-subbutton", v), r(window).on("resize.genesisMenu", h).triggerHandler("resize.genesisMenu");
    }
  }, r(a).ready(function () {
    null !== k() && s.init();
  });
}(document, jQuery);