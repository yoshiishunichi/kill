(function(t) {
  function e(e) {
    for (
      var r, s, a = e[0], c = e[1], u = e[2], l = 0, d = [];
      l < a.length;
      l++
    )
      (s = a[l]),
        Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]),
        (o[s] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
    p && p(e);
    while (d.length) d.shift()();
    return i.push.apply(i, u || []), n();
  }
  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], r = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== o[c] && (r = !1);
      }
      r && (i.splice(e--, 1), (t = s((s.s = n[0]))));
    }
    return t;
  }
  var r = {},
    o = { app: 0 },
    i = [];
  function s(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = t),
    (s.c = r),
    (s.d = function(t, e, n) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (s.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          s.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = "/");
  var a = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = a.push.bind(a);
  (a.push = e), (a = a.slice());
  for (var u = 0; u < a.length; u++) e(a[u]);
  var p = c;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("7a23"),
      o = { id: "container" },
      i = Object(r["c"])("h1", { id: "kill" }, "殺すぞ", -1),
      s = { id: "tweet" },
      a = Object(r["c"])(
        "a",
        {
          href:
            "http://twitter.com/share?url=https://yoshiishunichi.github.io/kill/&text=殺すぞ",
          id: "tweetbutton",
          target: "_blank"
        },
        "ツイートする",
        -1
      );
    function c(t, e, n, c, u, p) {
      return (
        Object(r["e"])(),
        Object(r["b"])("div", o, [
          i,
          Object(r["c"])("div", s, [
            a,
            Object(r["c"])(
              "input",
              {
                id: "start",
                type: "button",
                value: "スタートっ！",
                class: { disp: u.disps[0], nodisp: u.nodisps[0] },
                onClick:
                  e[1] ||
                  (e[1] = function() {
                    return p.tapStart && p.tapStart.apply(p, arguments);
                  })
              },
              null,
              2
            ),
            Object(r["c"])(
              "input",
              {
                id: "stop",
                type: "button",
                value: "ストップっ！",
                class: { disp: u.disps[1], nodisp: u.nodisps[1] },
                onClick:
                  e[2] ||
                  (e[2] = function() {
                    return p.tapStop && p.tapStop.apply(p, arguments);
                  })
              },
              null,
              2
            )
          ])
        ])
      );
    }
    var u = {
      name: "App",
      data: function() {
        return { timeInterval: null, disps: [!0, !1], nodisps: [!1, !0] };
      },
      methods: {
        colorChange: function() {
          for (var t = [0, 0, 0], e = 0; e < t.length; e++)
            t[e] = Math.floor(256 * Math.random());
          var n =
            "rgb(" +
            String(t[0]) +
            ", " +
            String(t[1]) +
            ", " +
            String(t[2]) +
            ")";
          return n;
        },
        setColor: function() {
          var t = document.getElementById("kill"),
            e = document.body;
          (t.style.color = this.colorChange()),
            (e.style.backgroundColor = this.colorChange());
        },
        tapStart: function() {
          (this.disps[0] = !1),
            (this.disps[1] = !0),
            (this.nodisps[0] = !0),
            (this.nodisps[1] = !1),
            (this.timeInterval = setInterval(this.setColor, 100));
        },
        tapStop: function() {
          (this.disps[1] = !1),
            (this.disps[0] = !0),
            (this.nodisps[1] = !0),
            (this.nodisps[0] = !1),
            clearInterval(this.timeInterval);
        }
      }
    };
    n("8adc");
    u.render = c;
    var p = u,
      l = n("5502"),
      d = Object(l["a"])({
        state: {},
        mutations: {},
        actions: {},
        modules: {}
      });
    Object(r["a"])(p)
      .use(d)
      .mount("#app");
  },
  "845c": function(t, e, n) {},
  "8adc": function(t, e, n) {
    "use strict";
    n("845c");
  }
});
//# sourceMappingURL=app.9fdca453.js.map
