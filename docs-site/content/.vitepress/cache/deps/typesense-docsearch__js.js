import "./chunk-OYQD7GAK.js";

// node_modules/typesense-docsearch.js/dist/esm/index.js
function e(e8, t2) {
  this.v = e8, this.k = t2;
}
function t(e8, t2) {
  (null == t2 || t2 > e8.length) && (t2 = e8.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e8[n2];
  return r2;
}
function n(e8) {
  if (void 0 === e8) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e8;
}
function r(t2) {
  var n2 = {}, r2 = false;
  function u2(n3, u3) {
    return r2 = true, u3 = new Promise(function(e8) {
      e8(t2[n3](u3));
    }), { done: false, value: new e(u3, 1) };
  }
  return n2["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function() {
    return this;
  }, n2.next = function(e8) {
    return r2 ? (r2 = false, e8) : u2("next", e8);
  }, "function" == typeof t2.throw && (n2.throw = function(e8) {
    if (r2) throw r2 = false, e8;
    return u2("throw", e8);
  }), "function" == typeof t2.return && (n2.return = function(e8) {
    return r2 ? (r2 = false, e8) : u2("return", e8);
  }), n2;
}
function u(e8) {
  var t2, n2, r2, u2 = 2;
  for ("undefined" != typeof Symbol && (n2 = Symbol.asyncIterator, r2 = Symbol.iterator); u2--; ) {
    if (n2 && null != (t2 = e8[n2])) return t2.call(e8);
    if (r2 && null != (t2 = e8[r2])) return new o(t2.call(e8));
    n2 = "@@asyncIterator", r2 = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function o(e8) {
  function t2(e9) {
    if (Object(e9) !== e9) return Promise.reject(new TypeError(e9 + " is not an object."));
    var t3 = e9.done;
    return Promise.resolve(e9.value).then(function(e10) {
      return { value: e10, done: t3 };
    });
  }
  return o = function(e9) {
    this.s = e9, this.n = e9.next;
  }, o.prototype = { s: null, n: null, next: function() {
    return t2(this.n.apply(this.s, arguments));
  }, return: function(e9) {
    var n2 = this.s.return;
    return void 0 === n2 ? Promise.resolve({ value: e9, done: true }) : t2(n2.apply(this.s, arguments));
  }, throw: function(e9) {
    var n2 = this.s.return;
    return void 0 === n2 ? Promise.reject(e9) : t2(n2.apply(this.s, arguments));
  } }, new o(e8);
}
function i(e8, t2, n2, r2, u2, o2, i2) {
  try {
    var a2 = e8[o2](i2), s2 = a2.value;
  } catch (e9) {
    return void n2(e9);
  }
  a2.done ? t2(s2) : Promise.resolve(s2).then(r2, u2);
}
function a(e8) {
  return function() {
    var t2 = this, n2 = arguments;
    return new Promise(function(r2, u2) {
      var o2 = e8.apply(t2, n2);
      function a2(e9) {
        i(o2, r2, u2, a2, s2, "next", e9);
      }
      function s2(e9) {
        i(o2, r2, u2, a2, s2, "throw", e9);
      }
      a2(void 0);
    });
  };
}
function s(t2) {
  return new e(t2, 0);
}
function c(e8, t2, r2) {
  return t2 = h(t2), function(e9, t3) {
    if (t3 && ("object" == typeof t3 || "function" == typeof t3)) return t3;
    if (void 0 !== t3) throw new TypeError("Derived constructors may only return object or undefined");
    return n(e9);
  }(e8, v() ? Reflect.construct(t2, r2 || [], h(e8).constructor) : t2.apply(e8, r2));
}
function l(e8, t2) {
  if (!(e8 instanceof t2)) throw new TypeError("Cannot call a class as a function");
}
function f(e8, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e8, A(r2.key), r2);
  }
}
function p(e8, t2, n2) {
  return t2 && f(e8.prototype, t2), n2 && f(e8, n2), Object.defineProperty(e8, "prototype", { writable: false }), e8;
}
function d(e8, t2, n2) {
  return (t2 = A(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function h(e8) {
  return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e9) {
    return e9.__proto__ || Object.getPrototypeOf(e9);
  }, h(e8);
}
function D(e8, t2) {
  if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
  e8.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e8, writable: true, configurable: true } }), Object.defineProperty(e8, "prototype", { writable: false }), t2 && _(e8, t2);
}
function v() {
  try {
    var e8 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e9) {
  }
  return (v = function() {
    return !!e8;
  })();
}
function m(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function y(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? m(Object(n2), true).forEach(function(t3) {
      d(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : m(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function g() {
  var e8, t2, n2 = "function" == typeof Symbol ? Symbol : {}, r2 = n2.iterator || "@@iterator", u2 = n2.toStringTag || "@@toStringTag";
  function o2(n3, r3, u3, o3) {
    var s3 = r3 && r3.prototype instanceof a2 ? r3 : a2, c3 = Object.create(s3.prototype);
    return F(c3, "_invoke", function(n4, r4, u4) {
      var o4, a3, s4, c4 = 0, l3 = u4 || [], f3 = false, p3 = { p: 0, n: 0, v: e8, a: d2, f: d2.bind(e8, 4), d: function(t3, n5) {
        return o4 = t3, a3 = 0, s4 = e8, p3.n = n5, i2;
      } };
      function d2(n5, r5) {
        for (a3 = n5, s4 = r5, t2 = 0; !f3 && c4 && !u5 && t2 < l3.length; t2++) {
          var u5, o5 = l3[t2], d3 = p3.p, h2 = o5[2];
          n5 > 3 ? (u5 = h2 === r5) && (s4 = o5[(a3 = o5[4]) ? 5 : (a3 = 3, 3)], o5[4] = o5[5] = e8) : o5[0] <= d3 && ((u5 = n5 < 2 && d3 < o5[1]) ? (a3 = 0, p3.v = r5, p3.n = o5[1]) : d3 < h2 && (u5 = n5 < 3 || o5[0] > r5 || r5 > h2) && (o5[4] = n5, o5[5] = r5, p3.n = h2, a3 = 0));
        }
        if (u5 || n5 > 1) return i2;
        throw f3 = true, r5;
      }
      return function(u5, l4, h2) {
        if (c4 > 1) throw TypeError("Generator is already running");
        for (f3 && 1 === l4 && d2(l4, h2), a3 = l4, s4 = h2; (t2 = a3 < 2 ? e8 : s4) || !f3; ) {
          o4 || (a3 ? a3 < 3 ? (a3 > 1 && (p3.n = -1), d2(a3, s4)) : p3.n = s4 : p3.v = s4);
          try {
            if (c4 = 2, o4) {
              if (a3 || (u5 = "next"), t2 = o4[u5]) {
                if (!(t2 = t2.call(o4, s4))) throw TypeError("iterator result is not an object");
                if (!t2.done) return t2;
                s4 = t2.value, a3 < 2 && (a3 = 0);
              } else 1 === a3 && (t2 = o4.return) && t2.call(o4), a3 < 2 && (s4 = TypeError("The iterator does not provide a '" + u5 + "' method"), a3 = 1);
              o4 = e8;
            } else if ((t2 = (f3 = p3.n < 0) ? s4 : n4.call(r4, p3)) !== i2) break;
          } catch (t3) {
            o4 = e8, a3 = 1, s4 = t3;
          } finally {
            c4 = 1;
          }
        }
        return { value: t2, done: f3 };
      };
    }(n3, u3, o3), true), c3;
  }
  var i2 = {};
  function a2() {
  }
  function s2() {
  }
  function c2() {
  }
  t2 = Object.getPrototypeOf;
  var l2 = [][r2] ? t2(t2([][r2]())) : (F(t2 = {}, r2, function() {
    return this;
  }), t2), f2 = c2.prototype = a2.prototype = Object.create(l2);
  function p2(e9) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e9, c2) : (e9.__proto__ = c2, F(e9, u2, "GeneratorFunction")), e9.prototype = Object.create(f2), e9;
  }
  return s2.prototype = c2, F(f2, "constructor", c2), F(c2, "constructor", s2), s2.displayName = "GeneratorFunction", F(c2, u2, "GeneratorFunction"), F(f2), F(f2, u2, "Generator"), F(f2, r2, function() {
    return this;
  }), F(f2, "toString", function() {
    return "[object Generator]";
  }), (g = function() {
    return { w: o2, m: p2 };
  })();
}
function F(e8, t2, n2, r2) {
  var u2 = Object.defineProperty;
  try {
    u2({}, "", {});
  } catch (e9) {
    u2 = 0;
  }
  F = function(e9, t3, n3, r3) {
    function o2(t4, n4) {
      F(e9, t4, function(e10) {
        return this._invoke(t4, n4, e10);
      });
    }
    t3 ? u2 ? u2(e9, t3, { value: n3, enumerable: !r3, configurable: !r3, writable: !r3 }) : e9[t3] = n3 : (o2("next", 0), o2("throw", 1), o2("return", 2));
  }, F(e8, t2, n2, r2);
}
function E(e8) {
  if (null != e8) {
    var t2 = e8["function" == typeof Symbol && Symbol.iterator || "@@iterator"], n2 = 0;
    if (t2) return t2.call(e8);
    if ("function" == typeof e8.next) return e8;
    if (!isNaN(e8.length)) return { next: function() {
      return e8 && n2 >= e8.length && (e8 = void 0), { value: e8 && e8[n2++], done: !e8 };
    } };
  }
  throw new TypeError(typeof e8 + " is not iterable");
}
function _(e8, t2) {
  return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e9, t3) {
    return e9.__proto__ = t3, e9;
  }, _(e8, t2);
}
function C(e8, t2) {
  return function(e9) {
    if (Array.isArray(e9)) return e9;
  }(e8) || function(e9, t3) {
    var n2 = null == e9 ? null : "undefined" != typeof Symbol && e9[Symbol.iterator] || e9["@@iterator"];
    if (null != n2) {
      var r2, u2, o2, i2, a2 = [], s2 = true, c2 = false;
      try {
        if (o2 = (n2 = n2.call(e9)).next, 0 === t3) {
          if (Object(n2) !== n2) return;
          s2 = false;
        } else for (; !(s2 = (r2 = o2.call(n2)).done) && (a2.push(r2.value), a2.length !== t3); s2 = true) ;
      } catch (e10) {
        c2 = true, u2 = e10;
      } finally {
        try {
          if (!s2 && null != n2.return && (i2 = n2.return(), Object(i2) !== i2)) return;
        } finally {
          if (c2) throw u2;
        }
      }
      return a2;
    }
  }(e8, t2) || S(e8, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function b(e8) {
  return function(e9) {
    if (Array.isArray(e9)) return t(e9);
  }(e8) || function(e9) {
    if ("undefined" != typeof Symbol && null != e9[Symbol.iterator] || null != e9["@@iterator"]) return Array.from(e9);
  }(e8) || S(e8) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function A(e8) {
  var t2 = function(e9, t3) {
    if ("object" != typeof e9 || !e9) return e9;
    var n2 = e9[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e9, t3 || "default");
      if ("object" != typeof r2) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t3 ? String : Number)(e9);
  }(e8, "string");
  return "symbol" == typeof t2 ? t2 : t2 + "";
}
function w(e8) {
  return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e9) {
    return typeof e9;
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : typeof e9;
  }, w(e8);
}
function S(e8, n2) {
  if (e8) {
    if ("string" == typeof e8) return t(e8, n2);
    var r2 = {}.toString.call(e8).slice(8, -1);
    return "Object" === r2 && e8.constructor && (r2 = e8.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(e8) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? t(e8, n2) : void 0;
  }
}
function k(e8) {
  return function() {
    return new O(e8.apply(this, arguments));
  };
}
function O(t2) {
  var n2, r2;
  function u2(n3, r3) {
    try {
      var i2 = t2[n3](r3), a2 = i2.value, s2 = a2 instanceof e;
      Promise.resolve(s2 ? a2.v : a2).then(function(e8) {
        if (s2) {
          var r4 = "return" === n3 && a2.k ? n3 : "next";
          if (!a2.k || e8.done) return u2(r4, e8);
          e8 = t2[r4](e8).value;
        }
        o2(!!i2.done, e8);
      }, function(e8) {
        u2("throw", e8);
      });
    } catch (e8) {
      o2(2, e8);
    }
  }
  function o2(e8, t3) {
    2 === e8 ? n2.reject(t3) : n2.resolve({ value: t3, done: e8 }), (n2 = n2.next) ? u2(n2.key, n2.arg) : r2 = null;
  }
  this._invoke = function(e8, t3) {
    return new Promise(function(o3, i2) {
      var a2 = { key: e8, arg: t3, resolve: o3, reject: i2, next: null };
      r2 ? r2 = r2.next = a2 : (n2 = r2 = a2, u2(e8, t3));
    });
  }, "function" != typeof t2.return && (this.return = void 0);
}
function P(e8) {
  var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return P = function(e9) {
    if (null === e9 || !function(e10) {
      try {
        return -1 !== Function.toString.call(e10).indexOf("[native code]");
      } catch (t3) {
        return "function" == typeof e10;
      }
    }(e9)) return e9;
    if ("function" != typeof e9) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== t2) {
      if (t2.has(e9)) return t2.get(e9);
      t2.set(e9, n2);
    }
    function n2() {
      return function(e10, t3, n3) {
        if (v()) return Reflect.construct.apply(null, arguments);
        var r2 = [null];
        r2.push.apply(r2, t3);
        var u2 = new (e10.bind.apply(e10, r2))();
        return n3 && _(u2, n3.prototype), u2;
      }(e9, arguments, h(this).constructor);
    }
    return n2.prototype = Object.create(e9.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), _(n2, e9);
  }, P(e8);
}
O.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
  return this;
}, O.prototype.next = function(e8) {
  return this._invoke("next", e8);
}, O.prototype.throw = function(e8) {
  return this._invoke("throw", e8);
}, O.prototype.return = function(e8) {
  return this._invoke("return", e8);
};
var B;
var x;
var R;
var j;
var I;
var T;
var N;
var M;
var L;
var U;
var q;
var H = {};
var z = [];
var $ = Array.isArray;
var K = z.slice;
var W = Object.assign;
function V(e8) {
  e8 && e8.parentNode && e8.remove();
}
function Q(e8, t2, n2) {
  var r2, u2, o2, i2 = {};
  for (o2 in t2) "key" == o2 ? r2 = t2[o2] : "ref" == o2 && "function" != typeof e8 ? u2 = t2[o2] : i2[o2] = t2[o2];
  return arguments.length > 2 && (i2.children = arguments.length > 3 ? K.call(arguments, 2) : n2), J(e8, i2, r2, u2, null);
}
function J(e8, t2, n2, r2, u2) {
  var o2 = { type: e8, props: t2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == u2 ? ++x : u2, __i: -1, __u: 0 };
  return null == u2 && null != B.vnode && B.vnode(o2), o2;
}
function Z() {
  return { current: null };
}
function G(e8) {
  return e8.children;
}
function X(e8, t2) {
  this.props = e8, this.context = t2, this.__g = 0;
}
function Y(e8, t2) {
  if (null == t2) return e8.__ ? Y(e8.__, e8.__i + 1) : null;
  for (var n2; t2 < e8.__k.length; t2++) if (null != (n2 = e8.__k[t2]) && null != n2.__e) return n2.__e;
  return "function" == typeof e8.type ? Y(e8) : null;
}
function ee(e8) {
  var t2, n2;
  if (null != (e8 = e8.__) && null != e8.__c) {
    for (e8.__e = null, t2 = 0; t2 < e8.__k.length; t2++) if (null != (n2 = e8.__k[t2]) && null != n2.__e) {
      e8.__e = n2.__e;
      break;
    }
    return ee(e8);
  }
}
function te(e8) {
  (8 & e8.__g || !(e8.__g |= 8) || !R.push(e8) || I++) && j == B.debounceRendering || ((j = B.debounceRendering) || queueMicrotask)(ne);
}
function ne() {
  for (var e8, t2, n2, r2, u2, o2, i2, a2, s2 = 1; R.length; ) R.length > s2 && R.sort(T), e8 = R.shift(), s2 = R.length, 8 & e8.__g && (n2 = void 0, u2 = (r2 = (t2 = e8).__v).__e, o2 = [], i2 = [], (a2 = t2.__P) && ((n2 = W({}, r2)).__v = r2.__v + 1, B.vnode && B.vnode(n2), le(a2, n2, r2, t2.__n, a2.namespaceURI, 32 & r2.__u ? [u2] : null, o2, null == u2 ? Y(r2) : u2, !!(32 & r2.__u), i2, a2.ownerDocument), n2.__v = r2.__v, n2.__.__k[n2.__i] = n2, pe(o2, n2, i2), n2.__e != u2 && ee(n2)));
  I = 0;
}
function re(e8, t2, n2, r2, u2, o2, i2, a2, s2, c2, l2, f2) {
  var p2, d2, h2, D2, v2, m2, y2, g2 = r2 && r2.__k || z, F2 = t2.length;
  for (s2 = function(e9, t3, n3, r3, u3) {
    var o3, i3, a3, s3, c3, l3 = n3.length, f3 = l3, p3 = 0;
    for (e9.__k = new Array(u3), o3 = 0; o3 < u3; o3++) null != (i3 = t3[o3]) && "boolean" != typeof i3 && "function" != typeof i3 ? (s3 = o3 + p3, (i3 = e9.__k[o3] = "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? J(null, i3, null, null, null) : $(i3) ? J(G, { children: i3 }, null, null, null) : null == i3.constructor && i3.__b > 0 ? J(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3).__ = e9, i3.__b = e9.__b + 1, a3 = null, -1 != (c3 = i3.__i = ie(i3, n3, s3, f3)) && (f3--, (a3 = n3[c3]) && (a3.__u |= 2)), null == a3 || null == a3.__v ? (-1 == c3 && (u3 > l3 ? p3-- : u3 < l3 && p3++), "function" != typeof i3.type && (i3.__u |= 4)) : c3 != s3 && (c3 == s3 - 1 ? p3-- : c3 == s3 + 1 ? p3++ : (c3 > s3 ? p3-- : p3++, i3.__u |= 4))) : e9.__k[o3] = null;
    if (f3) for (o3 = 0; o3 < l3; o3++) null != (a3 = n3[o3]) && !(2 & a3.__u) && (a3.__e == r3 && (r3 = Y(a3)), De(a3, a3));
    return r3;
  }(n2, t2, g2, s2, F2), p2 = 0; p2 < F2; p2++) null != (h2 = n2.__k[p2]) && (d2 = -1 == h2.__i ? H : g2[h2.__i] || H, h2.__i = p2, m2 = le(e8, h2, d2, u2, o2, i2, a2, s2, c2, l2, f2), D2 = h2.__e, h2.ref && d2.ref != h2.ref && (d2.ref && he(d2.ref, null, h2), l2.push(h2.ref, h2.__c || D2, h2)), null == v2 && null != D2 && (v2 = D2), (y2 = !!(4 & h2.__u)) || d2.__k === h2.__k ? s2 = ue(h2, s2, e8, y2) : "function" == typeof h2.type && void 0 !== m2 ? s2 = m2 : D2 && (s2 = D2.nextSibling), h2.__u &= -7);
  return n2.__e = v2, s2;
}
function ue(e8, t2, n2, r2) {
  var u2, o2;
  if ("function" == typeof e8.type) {
    for (u2 = e8.__k, o2 = 0; u2 && o2 < u2.length; o2++) u2[o2] && (u2[o2].__ = e8, t2 = ue(u2[o2], t2, n2, r2));
    return t2;
  }
  e8.__e != t2 && (r2 && (t2 && e8.type && !t2.parentNode && (t2 = Y(e8)), n2.insertBefore(e8.__e, t2 || null)), t2 = e8.__e);
  do {
    t2 = t2 && t2.nextSibling;
  } while (null != t2 && 8 == t2.nodeType);
  return t2;
}
function oe(e8, t2) {
  return t2 = t2 || [], null == e8 || "boolean" == typeof e8 || ($(e8) ? e8.some(function(e9) {
    oe(e9, t2);
  }) : t2.push(e8)), t2;
}
function ie(e8, t2, n2, r2) {
  var u2, o2, i2, a2 = e8.key, s2 = e8.type, c2 = t2[n2], l2 = null != c2 && !(2 & c2.__u);
  if (null === c2 && null == e8.key || l2 && a2 == c2.key && s2 == c2.type) return n2;
  if (r2 > (l2 ? 1 : 0)) {
    for (u2 = n2 - 1, o2 = n2 + 1; u2 >= 0 || o2 < t2.length; ) if (null != (c2 = t2[i2 = u2 >= 0 ? u2-- : o2++]) && !(2 & c2.__u) && a2 == c2.key && s2 == c2.type) return i2;
  }
  return -1;
}
function ae(e8, t2, n2) {
  "-" == t2[0] ? e8.setProperty(t2, null == n2 ? "" : n2) : e8[t2] = null == n2 ? "" : n2;
}
function se(e8, t2, n2, r2, u2) {
  var o2;
  e: if ("style" == t2) if ("string" == typeof n2) e8.style.cssText = n2;
  else {
    if ("string" == typeof r2 && (e8.style.cssText = r2 = ""), r2) for (t2 in r2) n2 && t2 in n2 || ae(e8.style, t2, "");
    if (n2) for (t2 in n2) r2 && n2[t2] == r2[t2] || ae(e8.style, t2, n2[t2]);
  }
  else if ("o" == t2[0] && "n" == t2[1]) o2 = t2 != (t2 = t2.replace(N, "$1")), (t2 = t2.slice(2))[0].toLowerCase() != t2[0] && (t2 = t2.toLowerCase()), e8.__l || (e8.__l = {}), e8.__l[t2 + o2] = n2, n2 ? r2 ? n2.l = r2.l : (n2.l = M, e8.addEventListener(t2, o2 ? U : L, o2)) : e8.removeEventListener(t2, o2 ? U : L, o2);
  else {
    if ("http://www.w3.org/2000/svg" == u2) t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != t2 && "height" != t2 && "href" != t2 && "list" != t2 && "form" != t2 && "tabIndex" != t2 && "download" != t2 && "rowSpan" != t2 && "colSpan" != t2 && "role" != t2 && "popover" != t2 && t2 in e8) try {
      e8[t2] = null == n2 ? "" : n2;
      break e;
    } catch (e9) {
    }
    "function" == typeof n2 || (null == n2 || false === n2 && "-" != t2[4] ? e8.removeAttribute(t2) : e8.setAttribute(t2, "popover" == t2 && 1 == n2 ? "" : n2));
  }
}
function ce(e8) {
  return function(t2) {
    if (this.__l) {
      var n2 = this.__l[t2.type + e8];
      if (null == t2.u) t2.u = M++;
      else if (t2.u < n2.l) return;
      return n2(B.event ? B.event(t2) : t2);
    }
  };
}
function le(e8, t2, n2, r2, u2, o2, i2, a2, s2, c2, l2) {
  var f2, p2, d2, h2, D2, v2, m2, y2, g2, F2, E2, _2, C2, b2, A2, w2, S2, k2, O2, P2, x2, R2 = t2.type;
  if (null != t2.constructor) return null;
  128 & n2.__u && (s2 = !!(32 & n2.__u), n2.__c.__z && (a2 = t2.__e = n2.__e = (o2 = n2.__c.__z)[0], n2.__c.__z = null)), (f2 = B.__b) && f2(t2);
  e: if ("function" == typeof R2) try {
    if (y2 = t2.props, g2 = "prototype" in R2 && R2.prototype.render, F2 = (f2 = R2.contextType) && r2[f2.__c], E2 = f2 ? F2 ? F2.props.value : f2.__ : r2, n2.__c ? 2 & (p2 = t2.__c = n2.__c).__g && (p2.__g |= 1, m2 = true) : (g2 ? t2.__c = p2 = new R2(y2, E2) : (t2.__c = p2 = new X(y2, E2), p2.constructor = R2, p2.render = ve), F2 && F2.sub(p2), p2.props = y2, p2.state || (p2.state = {}), p2.context = E2, p2.__n = r2, d2 = true, p2.__g |= 8, p2.__h = [], p2._sb = []), g2 && null == p2.__s && (p2.__s = p2.state), g2 && null != R2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = W({}, p2.__s)), W(p2.__s, R2.getDerivedStateFromProps(y2, p2.__s))), h2 = p2.props, D2 = p2.state, p2.__v = t2, d2) g2 && null == R2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), g2 && null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
    else {
      if (g2 && null == R2.getDerivedStateFromProps && y2 !== h2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(y2, E2), !(4 & p2.__g) && null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(y2, p2.__s, E2) || t2.__v == n2.__v) {
        for (t2.__v != n2.__v && (p2.props = y2, p2.state = p2.__s, p2.__g &= -9), t2.__e = n2.__e, t2.__k = n2.__k, t2.__k.some(function(e9) {
          e9 && (e9.__ = t2);
        }), _2 = 0; _2 < p2._sb.length; _2++) p2.__h.push(p2._sb[_2]);
        p2._sb = [], p2.__h.length && i2.push(p2);
        break e;
      }
      null != p2.componentWillUpdate && p2.componentWillUpdate(y2, p2.__s, E2), g2 && null != p2.componentDidUpdate && p2.__h.push(function() {
        p2.componentDidUpdate(h2, D2, v2);
      });
    }
    if (p2.context = E2, p2.props = y2, p2.__P = e8, p2.__g &= -5, C2 = B.__r, b2 = 0, g2) {
      for (p2.state = p2.__s, p2.__g &= -9, C2 && C2(t2), f2 = p2.render(p2.props, p2.state, p2.context), A2 = 0; A2 < p2._sb.length; A2++) p2.__h.push(p2._sb[A2]);
      p2._sb = [];
    } else do {
      p2.__g &= -9, C2 && C2(t2), f2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
    } while (8 & p2.__g && ++b2 < 25);
    p2.state = p2.__s, null != p2.getChildContext && (r2 = W({}, r2, p2.getChildContext())), g2 && !d2 && null != p2.getSnapshotBeforeUpdate && (v2 = p2.getSnapshotBeforeUpdate(h2, D2)), w2 = f2, null != f2 && f2.type === G && null == f2.key && (w2 = de(f2.props.children)), a2 = re(e8, $(w2) ? w2 : [w2], t2, n2, r2, u2, o2, i2, a2, s2, c2, l2), t2.__u &= -161, p2.__h.length && i2.push(p2), m2 && (p2.__g &= -4);
  } catch (e9) {
    if (t2.__v = null, s2 || null != o2) if (e9.then) {
      for (S2 = 0, k2 = false, t2.__u |= s2 ? 160 : 128, t2.__c.__z = [], O2 = 0; O2 < o2.length; O2++) null == (P2 = o2[O2]) || k2 || (8 == P2.nodeType && "$s" == P2.data ? (S2 > 0 && t2.__c.__z.push(P2), S2++, o2[O2] = null) : 8 == P2.nodeType && "/$s" == P2.data ? (--S2 > 0 && t2.__c.__z.push(P2), k2 = 0 === S2, a2 = o2[O2], o2[O2] = null) : S2 > 0 && (t2.__c.__z.push(P2), o2[O2] = null));
      if (!k2) {
        for (; a2 && 8 == a2.nodeType && a2.nextSibling; ) a2 = a2.nextSibling;
        o2[o2.indexOf(a2)] = null, t2.__c.__z = [a2];
      }
      t2.__e = a2;
    } else {
      for (x2 = o2.length; x2--; ) V(o2[x2]);
      fe(t2);
    }
    else t2.__e = n2.__e, t2.__k = n2.__k, e9.then || fe(t2);
    B.__e(e9, t2, n2);
  }
  else a2 = t2.__e = function(e9, t3, n3, r3, u3, o3, i3, a3, s3, c3) {
    var l3, f3, p3, d3, h3, D3, v3, m3, y3 = n3.props, g3 = t3.props, F3 = t3.type;
    if ("svg" == F3 ? u3 = "http://www.w3.org/2000/svg" : "math" == F3 ? u3 = "http://www.w3.org/1998/Math/MathML" : u3 || (u3 = "http://www.w3.org/1999/xhtml"), null != o3) {
      for (l3 = 0; l3 < o3.length; l3++) if ((h3 = o3[l3]) && "setAttribute" in h3 == !!F3 && (F3 ? h3.localName == F3 : 3 == h3.nodeType)) {
        e9 = h3, o3[l3] = null;
        break;
      }
    }
    if (null == e9) {
      if (null == F3) return c3.createTextNode(g3);
      e9 = c3.createElementNS(u3, F3, g3.is && g3), a3 && (B.__m && B.__m(t3, o3), a3 = false), o3 = null;
    }
    if (null == F3) y3 === g3 || a3 && e9.data == g3 || (e9.data = g3);
    else {
      if (o3 = o3 && K.call(e9.childNodes), y3 = n3.props || H, !a3 && null != o3) for (y3 = {}, l3 = 0; l3 < e9.attributes.length; l3++) y3[(h3 = e9.attributes[l3]).name] = h3.value;
      for (l3 in y3) if (h3 = y3[l3], "children" == l3) ;
      else if ("dangerouslySetInnerHTML" == l3) p3 = h3;
      else if (!(l3 in g3)) {
        if ("value" == l3 && "defaultValue" in g3 || "checked" == l3 && "defaultChecked" in g3) continue;
        se(e9, l3, null, h3, u3);
      }
      for (l3 in m3 = 1 & n3.__u, g3) h3 = g3[l3], "children" == l3 ? d3 = h3 : "dangerouslySetInnerHTML" == l3 ? f3 = h3 : "value" == l3 ? D3 = h3 : "checked" == l3 ? v3 = h3 : a3 && "function" != typeof h3 || y3[l3] === h3 && !m3 || se(e9, l3, h3, y3[l3], u3);
      if (f3) a3 || p3 && (f3.__html == p3.__html || f3.__html == e9.innerHTML) || (e9.innerHTML = f3.__html), t3.__k = [];
      else if (p3 && (e9.innerHTML = ""), re("template" == F3 ? e9.content : e9, $(d3) ? d3 : [d3], t3, n3, r3, "foreignObject" == F3 ? "http://www.w3.org/1999/xhtml" : u3, o3, i3, o3 ? o3[0] : n3.__k && Y(n3, 0), a3, s3, c3), null != o3) for (l3 = o3.length; l3--; ) V(o3[l3]);
      a3 || (l3 = "value", "progress" == F3 && null == D3 ? e9.removeAttribute("value") : null == D3 || D3 === e9[l3] && ("progress" !== F3 || D3) || se(e9, l3, D3, y3[l3], u3), l3 = "checked", null != v3 && v3 != e9[l3] && se(e9, l3, v3, y3[l3], u3));
    }
    return e9;
  }(n2.__e, t2, n2, r2, u2, o2, i2, s2, c2, l2);
  return (f2 = B.diffed) && f2(t2), 128 & t2.__u ? void 0 : a2;
}
function fe(e8) {
  e8 && e8.__c && (e8.__c.__g |= 4), e8 && e8.__k && e8.__k.forEach(fe);
}
function pe(e8, t2, n2) {
  for (var r2 = 0; r2 < n2.length; r2++) he(n2[r2], n2[++r2], n2[++r2]);
  B.__c && B.__c(t2, e8), e8.some(function(t3) {
    try {
      e8 = t3.__h, t3.__h = [], e8.some(function(e9) {
        e9.call(t3);
      });
    } catch (e9) {
      B.__e(e9, t3.__v);
    }
  });
}
function de(e8) {
  return "object" != typeof e8 || null == e8 || e8.__b && e8.__b > 0 ? e8 : $(e8) ? e8.map(de) : W({}, e8);
}
function he(e8, t2, n2) {
  try {
    if ("function" == typeof e8) {
      var r2 = "function" == typeof e8.__u;
      r2 && e8.__u(), r2 && null == t2 || (e8.__u = e8(t2));
    } else e8.current = t2;
  } catch (e9) {
    B.__e(e9, n2);
  }
}
function De(e8, t2, n2) {
  var r2, u2;
  if (B.unmount && B.unmount(e8), (r2 = e8.ref) && (r2.current && r2.current != e8.__e || he(r2, null, t2)), null != (r2 = e8.__c)) {
    if (r2.componentWillUnmount) try {
      r2.componentWillUnmount();
    } catch (e9) {
      B.__e(e9, t2);
    }
    r2.__P = null;
  }
  if (r2 = e8.__k) for (u2 = 0; u2 < r2.length; u2++) r2[u2] && De(r2[u2], t2, n2 || "function" != typeof e8.type);
  n2 || V(e8.__e), e8.__e && e8.__e.__l && (e8.__e.__l = null), e8.__e = e8.__c = e8.__ = null;
}
function ve(e8, t2, n2) {
  return this.constructor(e8, n2);
}
function me(e8, t2) {
  var n2, r2, u2, o2;
  t2 == document && (t2 = document.documentElement), B.__ && B.__(e8, t2), r2 = (n2 = !!(e8 && 32 & e8.__u)) ? null : t2.__k, e8 = t2.__k = Q(G, null, [e8]), u2 = [], o2 = [], le(t2, e8, r2 || H, H, t2.namespaceURI, r2 ? null : t2.firstChild ? K.call(t2.childNodes) : null, u2, r2 ? r2.__e : t2.firstChild, n2, o2, t2.ownerDocument), pe(u2, e8, o2);
}
function ye(e8, t2, n2) {
  var r2, u2, o2, i2 = W({}, e8.props);
  for (o2 in t2) "key" == o2 ? r2 = t2[o2] : "ref" == o2 && "function" != typeof e8.type ? u2 = t2[o2] : i2[o2] = t2[o2];
  return arguments.length > 2 && (i2.children = arguments.length > 3 ? K.call(arguments, 2) : n2), J(e8.type, i2, r2 || e8.key, u2 || e8.ref, null);
}
B = { __e: function(e8, t2, n2, r2) {
  for (var u2, o2, i2; t2 = t2.__; ) if ((u2 = t2.__c) && !(1 & u2.__g)) {
    u2.__g |= 4;
    try {
      if ((o2 = u2.constructor) && null != o2.getDerivedStateFromError && (u2.setState(o2.getDerivedStateFromError(e8)), i2 = 8 & u2.__g), null != u2.componentDidCatch && (u2.componentDidCatch(e8, r2 || {}), i2 = 8 & u2.__g), i2) return void (u2.__g |= 2);
    } catch (t3) {
      e8 = t3;
    }
  }
  throw I = 0, e8;
} }, x = 0, X.prototype.setState = function(e8, t2) {
  var n2;
  n2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = W({}, this.state), "function" == typeof e8 && (e8 = e8(W({}, n2), this.props)), e8 && W(n2, e8), null != e8 && this.__v && (t2 && this._sb.push(t2), te(this));
}, X.prototype.forceUpdate = function(e8) {
  this.__v && (this.__g |= 4, e8 && this.__h.push(e8), te(this));
}, X.prototype.render = G, R = [], I = 0, T = function(e8, t2) {
  return e8.__v.__b - t2.__v.__b;
}, N = /(PointerCapture)$|Capture$/i, M = 0, L = ce(false), U = ce(true), q = 0;
var ge;
var Fe;
var Ee;
var _e;
var Ce = Object.is;
var be = 0;
var Ae = [];
var we = B;
var Se = we.__b;
var ke = we.__r;
var Oe = we.diffed;
var Pe = we.__c;
var Be = we.unmount;
var xe = we.__;
function Re(e8, t2) {
  we.__h && we.__h(Fe, e8, be || t2), be = 0;
  var n2 = Fe.__H || (Fe.__H = { __: [], __h: [] });
  return e8 >= n2.__.length && n2.__.push({}), n2.__[e8];
}
function je(e8) {
  return be = 1, Ie(Ge, e8);
}
function Ie(e8, t2, n2) {
  var r2 = Re(ge++, 2);
  if (r2.t = e8, !r2.__c && (r2.__ = [n2 ? n2(t2) : Ge(void 0, t2), function(e9) {
    var t3 = r2.__N ? r2.__N[0] : r2.__[0], n3 = r2.t(t3, e9);
    Ce(t3, n3) || (r2.__N = [n3, r2.__[1]], r2.__c.setState({}));
  }], r2.__c = Fe, !Fe.__f)) {
    var u2 = function(e9, t3, n3) {
      if (!r2.__c.__H) return true;
      var u3 = r2.__c.__H.__.filter(function(e10) {
        return !!e10.__c;
      });
      if (u3.every(function(e10) {
        return !e10.__N;
      })) return !o2 || o2.call(this, e9, t3, n3);
      var i3 = r2.__c.props !== e9;
      return u3.forEach(function(e10) {
        if (e10.__N) {
          var t4 = e10.__[0];
          e10.__ = e10.__N, e10.__N = void 0, Ce(t4, e10.__[0]) || (i3 = true);
        }
      }), o2 && o2.call(this, e9, t3, n3) || i3;
    };
    Fe.__f = true;
    var o2 = Fe.shouldComponentUpdate, i2 = Fe.componentWillUpdate;
    Fe.componentWillUpdate = function(e9, t3, n3) {
      if (4 & this.__g) {
        var r3 = o2;
        o2 = void 0, u2(e9, t3, n3), o2 = r3;
      }
      i2 && i2.call(this, e9, t3, n3);
    }, Fe.shouldComponentUpdate = u2;
  }
  return r2.__N || r2.__;
}
function Te(e8, t2) {
  var n2 = Re(ge++, 3);
  !we.__s && Ze(n2.__H, t2) && (n2.__ = e8, n2.u = t2, Fe.__H.__h.push(n2));
}
function Ne(e8, t2) {
  var n2 = Re(ge++, 4);
  !we.__s && Ze(n2.__H, t2) && (n2.__ = e8, n2.u = t2, Fe.__h.push(n2));
}
function Me(e8) {
  return be = 5, Ue(function() {
    return { current: e8 };
  }, []);
}
function Le(e8, t2, n2) {
  be = 6, Ne(function() {
    if ("function" == typeof e8) {
      var n3 = e8(t2());
      return function() {
        e8(null), n3 && "function" == typeof n3 && n3();
      };
    }
    if (e8) return e8.current = t2(), function() {
      return e8.current = null;
    };
  }, null == n2 ? n2 : n2.concat(e8));
}
function Ue(e8, t2) {
  var n2 = Re(ge++, 7);
  return Ze(n2.__H, t2) && (n2.__ = e8(), n2.__H = t2, n2.__h = e8), n2.__;
}
function qe(e8, t2) {
  return be = 8, Ue(function() {
    return e8;
  }, t2);
}
function He(e8) {
  var t2 = Fe.context[e8.__c], n2 = Re(ge++, 9);
  return n2.c = e8, t2 ? (null == n2.__ && (n2.__ = true, t2.sub(Fe)), t2.props.value) : e8.__;
}
function ze(e8, t2) {
  we.useDebugValue && we.useDebugValue(t2 ? t2(e8) : e8);
}
function $e() {
  var e8 = Re(ge++, 11);
  if (!e8.__) {
    for (var t2 = Fe.__v; null !== t2 && !t2.__m && null !== t2.__; ) t2 = t2.__;
    var n2 = t2.__m || (t2.__m = [0, 0]);
    e8.__ = "P" + n2[0] + "-" + n2[1]++;
  }
  return e8.__;
}
function Ke() {
  for (var e8; e8 = Ae.shift(); ) if (e8.__P && e8.__H) try {
    e8.__H.__h.forEach(Qe), e8.__H.__h.forEach(Je), e8.__H.__h = [];
  } catch (t2) {
    e8.__H.__h = [], we.__e(t2, e8.__v);
  }
}
we.__b = function(e8) {
  Fe = null, Se && Se(e8);
}, we.__ = function(e8, t2) {
  e8 && t2.__k && t2.__k.__m && (e8.__m = t2.__k.__m), xe && xe(e8, t2);
}, we.__r = function(e8) {
  ke && ke(e8), ge = 0;
  var t2 = (Fe = e8.__c).__H;
  t2 && (Ee === Fe ? (t2.__h = [], Fe.__h = [], t2.__.forEach(function(e9) {
    e9.__N && (e9.__ = e9.__N), e9.u = e9.__N = void 0;
  })) : (t2.__h.forEach(Qe), t2.__h.forEach(Je), t2.__h = [], ge = 0)), Ee = Fe;
}, we.diffed = function(e8) {
  Oe && Oe(e8);
  var t2 = e8.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== Ae.push(t2) && _e === we.requestAnimationFrame || ((_e = we.requestAnimationFrame) || Ve)(Ke)), t2.__H.__.forEach(function(e9) {
    e9.u && (e9.__H = e9.u), e9.u = void 0;
  })), Ee = Fe = null;
}, we.__c = function(e8, t2) {
  t2.some(function(e9) {
    try {
      e9.__h.forEach(Qe), e9.__h = e9.__h.filter(function(e10) {
        return !e10.__ || Je(e10);
      });
    } catch (n2) {
      t2.some(function(e10) {
        e10.__h && (e10.__h = []);
      }), t2 = [], we.__e(n2, e9.__v);
    }
  }), Pe && Pe(e8, t2);
}, we.unmount = function(e8) {
  Be && Be(e8);
  var t2, n2 = e8.__c;
  n2 && n2.__H && (n2.__H.__.forEach(function(e9) {
    try {
      Qe(e9);
    } catch (e10) {
      t2 = e10;
    }
  }), n2.__H = void 0, t2 && we.__e(t2, n2.__v));
};
var We = "function" == typeof requestAnimationFrame;
function Ve(e8) {
  var t2, n2 = function() {
    clearTimeout(r2), We && cancelAnimationFrame(t2), setTimeout(e8);
  }, r2 = setTimeout(n2, 35);
  We && (t2 = requestAnimationFrame(n2));
}
function Qe(e8) {
  var t2 = Fe, n2 = e8.__c;
  "function" == typeof n2 && (e8.__c = void 0, n2()), Fe = t2;
}
function Je(e8) {
  var t2 = Fe;
  e8.__c = e8.__(), Fe = t2;
}
function Ze(e8, t2) {
  return !e8 || e8.length !== t2.length || t2.some(function(t3, n2) {
    return !Ce(t3, e8[n2]);
  });
}
function Ge(e8, t2) {
  return "function" == typeof t2 ? t2(e8) : t2;
}
function Xe(e8, t2) {
  var n2 = t2(), r2 = je({ t: { __: n2, u: t2 } }), u2 = r2[0].t, o2 = r2[1];
  return Ne(function() {
    u2.__ = n2, u2.u = t2, Ye(u2) && o2({ t: u2 });
  }, [e8, n2, t2]), Te(function() {
    return Ye(u2) && o2({ t: u2 }), e8(function() {
      Ye(u2) && o2({ t: u2 });
    });
  }, [e8]), n2;
}
function Ye(e8) {
  var t2 = e8.u, n2 = e8.__;
  try {
    var r2 = t2();
    return !Object.is(n2, r2);
  } catch (e9) {
    return true;
  }
}
function et(e8) {
  e8();
}
function tt(e8) {
  return e8;
}
function nt() {
  return [false, et];
}
var rt = Ne;
var ut = Object.assign;
function ot(e8, t2) {
  for (var n2 in e8) if ("__source" !== n2 && !(n2 in t2)) return true;
  for (var r2 in t2) if ("__source" !== r2 && e8[r2] !== t2[r2]) return true;
  return false;
}
var it = /^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;
function at(e8, t2) {
  this.props = e8, this.context = t2;
}
function st(e8, t2) {
  function n2(e9) {
    var n3 = this.props.ref, r3 = n3 == e9.ref;
    return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e9) || !r3 : ot(this.props, e9);
  }
  function r2(t3) {
    return this.shouldComponentUpdate = n2, Q(e8, t3);
  }
  return r2.displayName = "Memo(" + (e8.displayName || e8.name) + ")", r2.prototype.isReactComponent = true, r2.type = e8, r2;
}
(at.prototype = new X()).isPureReactComponent = true, at.prototype.shouldComponentUpdate = function(e8, t2) {
  return ot(this.props, e8) || ot(this.state, t2);
};
var ct = Symbol.for("react.forward_ref");
var lt = function(e8, t2, n2) {
  return null == e8 ? null : oe(oe(e8).map(t2.bind(n2)));
};
var ft = { map: lt, forEach: lt, count: function(e8) {
  return e8 ? oe(e8).length : 0;
}, only: function(e8) {
  var t2 = oe(e8);
  if (1 !== t2.length) throw "Children.only";
  return t2[0];
}, toArray: oe };
var pt = B.__e;
B.__e = function(e8, t2, n2, r2) {
  if (e8.then) {
    for (var u2, o2 = t2; o2 = o2.__; ) if ((u2 = o2.__c) && u2.__c) return null == t2.__e && (t2.__e = n2.__e, t2.__k = n2.__k), u2.__c(e8, t2);
  }
  pt(e8, t2, n2, r2);
};
var dt = B.unmount;
function ht(e8, t2, n2) {
  return e8 && (e8.__c && e8.__c.__H && (e8.__c.__H.__.forEach(function(e9) {
    "function" == typeof e9.__c && e9.__c();
  }), e8.__c.__H = null), null != (e8 = ut({}, e8)).__c && (e8.__c.__P === n2 && (e8.__c.__P = t2), e8.__c.__g |= 4, e8.__c = null), e8.__k = e8.__k && e8.__k.map(function(e9) {
    return ht(e9, t2, n2);
  })), e8;
}
function Dt(e8, t2, n2) {
  return e8 && n2 && ("string" == typeof e8.type && (e8.__u |= 1), e8.__v = null, e8.__k = e8.__k && e8.__k.map(function(e9) {
    return Dt(e9, t2, n2);
  }), e8.__c && e8.__c.__P === t2 && (e8.__e && n2.appendChild(e8.__e), e8.__c.__g |= 4, e8.__c.__P = n2)), e8;
}
function vt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function mt(e8) {
  return this.getChildContext = function() {
    return e8.context;
  }, e8.children;
}
function yt(e8) {
  var t2 = this, n2 = e8.i;
  if (t2.componentWillUnmount = function() {
    me(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== n2 && t2.componentWillUnmount(), !t2.l) {
    for (var r2 = t2.__v; null !== r2 && !r2.__m && null !== r2.__; ) r2 = r2.__;
    t2.i = n2, t2.l = { nodeType: 1, parentNode: n2, childNodes: [], __k: { __m: r2.__m }, ownerDocument: n2.ownerDocument, insertBefore: function(e9, n3) {
      this.childNodes.push(e9), t2.i.insertBefore(e9, n3);
    } };
  }
  me(Q(mt, { context: t2.context }, e8.__v), t2.l);
}
function gt(e8, t2) {
  var n2 = Q(yt, { __v: e8, i: t2 });
  return n2.containerInfo = t2, n2;
}
B.unmount = function(e8) {
  var t2 = e8.__c;
  t2 && t2.__R && t2.__R(), dt && dt(e8);
}, (vt.prototype = new X()).__c = function(e8, t2) {
  var n2 = t2.__c, r2 = this;
  null == r2.o && (r2.o = []), r2.o.push(n2);
  var u2 = false, o2 = function() {
    u2 || (u2 = true, n2.__R = null, i2());
  };
  n2.__R = o2;
  var i2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var e9 = r2.state.__a;
        r2.__v.__k[0] = Dt(e9, e9.__c.__P, e9.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.forceUpdate();
    }
  };
  r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), e8.then(o2, o2);
}, vt.prototype.componentWillUnmount = function() {
  this.o = [];
}, vt.prototype.render = function(e8, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = ht(this.__b, n2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  return [Q(G, null, t2.__a ? null : e8.children), t2.__a && Q(G, null, e8.fallback)];
};
var Ft = Symbol.for("react.element");
var Et = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var _t = /[A-Z0-9]/g;
var Ct = "undefined" != typeof document;
var bt = function(e8) {
  return /fil|che|rad/.test(e8);
};
function At(e8, t2, n2) {
  return null == t2.__k && (t2.textContent = ""), me(e8, t2), "function" == typeof n2 && n2(), e8 ? e8.__c : null;
}
X.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e8) {
  Object.defineProperty(X.prototype, e8, { configurable: true, get: function() {
    return this["UNSAFE_" + e8];
  }, set: function(t2) {
    Object.defineProperty(this, e8, { configurable: true, writable: true, value: t2 });
  } });
});
var wt = B.event;
function St() {
}
function kt() {
  return this.cancelBubble;
}
function Ot() {
  return this.defaultPrevented;
}
B.event = function(e8) {
  return wt && (e8 = wt(e8)), e8.persist = St, e8.isPropagationStopped = kt, e8.isDefaultPrevented = Ot, e8.nativeEvent = e8;
};
var Pt;
var Bt = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var xt = B.vnode;
B.vnode = function(e8) {
  if ("string" == typeof e8.type) !function(e9) {
    var t3 = e9.props, n3 = e9.type, r2 = {}, u2 = -1 === n3.indexOf("-");
    for (var o2 in t3) {
      var i2 = t3[o2];
      if (!("value" === o2 && "defaultValue" in t3 && null == i2 || Ct && "children" === o2 && "noscript" === n3 || "class" === o2 || "className" === o2)) {
        if ("style" === o2 && "object" == typeof i2) for (var a2 in i2) "number" != typeof i2[a2] || it.test(a2) || (i2[a2] += "px");
        else if ("defaultValue" === o2 && "value" in t3 && null == t3.value) o2 = "value";
        else if ("download" === o2 && true === i2) i2 = "";
        else if ("translate" === o2 && "no" === i2) i2 = false;
        else if ("o" === o2[0] && "n" === o2[1]) {
          var s2 = o2.toLowerCase();
          "ondoubleclick" === s2 ? o2 = "ondblclick" : "onchange" !== s2 || "input" !== n3 && "textarea" !== n3 || bt(t3.type) ? "onfocus" === s2 ? o2 = "onfocusin" : "onblur" === s2 && (o2 = "onfocusout") : s2 = o2 = "oninput", "oninput" === s2 && r2[o2 = s2] && (o2 = "oninputCapture");
        } else u2 && Et.test(o2) ? o2 = o2.replace(_t, "-$&").toLowerCase() : null === i2 && (i2 = void 0);
        r2[o2] = i2;
      }
    }
    "select" == n3 && r2.multiple && Array.isArray(r2.value) && (r2.value = oe(t3.children).forEach(function(e10) {
      e10.props.selected = -1 != r2.value.indexOf(e10.props.value);
    })), "select" == n3 && null != r2.defaultValue && (r2.value = oe(t3.children).forEach(function(e10) {
      e10.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e10.props.value) : r2.defaultValue == e10.props.value;
    })), t3.class && !t3.className ? (r2.class = t3.class, Object.defineProperty(r2, "className", Bt)) : (t3.className && !t3.class || t3.class && t3.className) && (r2.class = r2.className = t3.className), e9.props = r2;
  }(e8);
  else if ("function" == typeof e8.type && ("ref" in e8.props && "prototype" in e8.type && e8.type.prototype.render && (e8.ref = e8.props.ref, delete e8.props.ref), e8.type.defaultProps)) {
    var t2 = ut({}, e8.props);
    for (var n2 in e8.type.defaultProps) void 0 === t2[n2] && (t2[n2] = e8.type.defaultProps[n2]);
    e8.props = t2;
  }
  e8.$$typeof = Ft, xt && xt(e8);
};
var Rt = B.__r;
B.__r = function(e8) {
  Rt && Rt(e8), Pt = e8.__c;
};
var jt = B.diffed;
B.diffed = function(e8) {
  jt && jt(e8);
  var t2 = e8.props, n2 = e8.__e;
  null != n2 && "textarea" === e8.type && "value" in t2 && t2.value !== n2.value && (n2.value = null == t2.value ? "" : t2.value), Pt = null;
};
var It = { ReactCurrentDispatcher: { current: { readContext: function(e8) {
  return Pt.__n[e8.__c].props.value;
}, useCallback: qe, useContext: He, useDebugValue: ze, useDeferredValue: tt, useEffect: Te, useId: $e, useImperativeHandle: Le, useInsertionEffect: rt, useLayoutEffect: Ne, useMemo: Ue, useReducer: Ie, useRef: Me, useState: je, useSyncExternalStore: Xe, useTransition: nt } } };
function Tt(e8) {
  return !!e8 && e8.$$typeof === Ft;
}
function Nt(e8) {
  return !!e8.__k && (me(null, e8), true);
}
var Mt = { useState: je, useId: $e, useReducer: Ie, useEffect: Te, useLayoutEffect: Ne, useInsertionEffect: rt, useTransition: nt, useDeferredValue: tt, useSyncExternalStore: Xe, startTransition: et, useRef: Me, useImperativeHandle: Le, useMemo: Ue, useCallback: qe, useContext: He, useDebugValue: ze, version: "18.3.1", Children: ft, render: At, hydrate: function(e8, t2, n2) {
  return function(e9, t3) {
    e9.__u |= 32, me(e9, t3);
  }(e8, t2), "function" == typeof n2 && n2(), e8 ? e8.__c : null;
}, unmountComponentAtNode: Nt, createPortal: gt, createElement: Q, createContext: function(e8) {
  function t2(e9) {
    var n2, r2;
    return this.getChildContext || (n2 = /* @__PURE__ */ new Set(), (r2 = {})[t2.__c] = this, this.getChildContext = function() {
      return r2;
    }, this.componentWillUnmount = function() {
      n2 = null;
    }, this.shouldComponentUpdate = function(e10) {
      this.props.value != e10.value && n2.forEach(function(e11) {
        e11.__g |= 4, te(e11);
      });
    }, this.sub = function(e10) {
      n2.add(e10);
      var t3 = e10.componentWillUnmount;
      e10.componentWillUnmount = function() {
        n2 && n2.delete(e10), t3 && t3.call(e10);
      };
    }), e9.children;
  }
  return t2.__c = "__cC" + q++, t2.__ = e8, t2.Provider = t2.__l = (t2.Consumer = function(e9, t3) {
    return e9.children(t3);
  }).contextType = t2, t2;
}, createFactory: function(e8) {
  return Q.bind(null, e8);
}, cloneElement: function(e8) {
  return Tt(e8) ? ye.apply(null, arguments) : e8;
}, createRef: Z, Fragment: G, isValidElement: Tt, isElement: Tt, isFragment: function(e8) {
  return Tt(e8) && e8.type === G;
}, isMemo: function(e8) {
  return !!e8 && !!e8.displayName && ("string" == typeof e8.displayName || e8.displayName instanceof String) && e8.displayName.startsWith("Memo(");
}, findDOMNode: function(e8) {
  return e8 && (e8.__v && e8.__v.__e || 1 === e8.nodeType && e8) || null;
}, Component: X, PureComponent: at, memo: st, forwardRef: function(e8) {
  function t2(t3) {
    var n2 = ut({}, t3);
    return delete n2.ref, e8(n2, t3.ref || null);
  }
  return t2.$$typeof = ct, t2.render = e8, t2.prototype.isReactComponent = true, t2.displayName = "ForwardRef(" + (e8.displayName || e8.name) + ")", t2;
}, flushSync: function(e8, t2) {
  return e8(t2);
}, unstable_batchedUpdates: function(e8, t2) {
  return e8(t2);
}, StrictMode: G, Suspense: vt, lazy: function(e8) {
  var t2, n2, r2;
  function u2(u3) {
    if (t2 || (t2 = e8()).then(function(e9) {
      n2 = e9.default || e9;
    }, function(e9) {
      r2 = e9;
    }), r2) throw r2;
    if (!n2) throw t2;
    return Q(n2, u3);
  }
  return u2.displayName = "Lazy", u2;
}, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: It };
function Lt(e8, t2) {
  (null == t2 || t2 > e8.length) && (t2 = e8.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e8[n2];
  return r2;
}
function Ut(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" != w(e10) || !e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" != w(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" == w(t3) ? t3 : t3 + "";
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function qt(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Ht(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? qt(Object(n2), true).forEach(function(t3) {
      Ut(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : qt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function zt(e8, t2) {
  return function(e9) {
    if (Array.isArray(e9)) return e9;
  }(e8) || function(e9, t3) {
    var n2 = null == e9 ? null : "undefined" != typeof Symbol && e9[Symbol.iterator] || e9["@@iterator"];
    if (null != n2) {
      var r2, u2, o2, i2, a2 = [], s2 = true, c2 = false;
      try {
        if (o2 = (n2 = n2.call(e9)).next, 0 === t3) ;
        else for (; !(s2 = (r2 = o2.call(n2)).done) && (a2.push(r2.value), a2.length !== t3); s2 = true) ;
      } catch (e10) {
        c2 = true, u2 = e10;
      } finally {
        try {
          if (!s2 && null != n2.return && (i2 = n2.return(), Object(i2) !== i2)) return;
        } finally {
          if (c2) throw u2;
        }
      }
      return a2;
    }
  }(e8, t2) || function(e9, t3) {
    if (e9) {
      if ("string" == typeof e9) return Lt(e9, t3);
      var n2 = {}.toString.call(e9).slice(8, -1);
      return "Object" === n2 && e9.constructor && (n2 = e9.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e9) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Lt(e9, t3) : void 0;
    }
  }(e8, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
var $t = { "Ctrl/Cmd+K": true, "/": true, "Ctrl/Cmd+I": true };
function Kt(e8) {
  return Ht(Ht({}, $t), e8);
}
function Wt(e8) {
  var t2 = e8.isOpen, n2 = e8.isAskAiActive, r2 = e8.onAskAiToggle, u2 = e8.onClose, o2 = e8.onOpen, i2 = e8.keyboardShortcuts, a2 = void 0 === i2 ? $t : i2;
  Mt.useEffect(function() {
    function e9(e10) {
      var i3;
      if (t2 && "Escape" === e10.code && n2) r2(false);
      else {
        var s2 = a2["Ctrl/Cmd+K"] && "k" === (null === (i3 = e10.key) || void 0 === i3 ? void 0 : i3.toLowerCase()) && (e10.metaKey || e10.ctrlKey), c2 = a2["/"] && "/" === e10.key;
        ("Escape" === e10.code && t2 || s2 || !function(e11) {
          var t3 = e11.composedPath()[0], n3 = t3.tagName;
          return t3.isContentEditable || "INPUT" === n3 || "SELECT" === n3 || "TEXTAREA" === n3;
        }(e10) && c2 && !t2) && (e10.preventDefault(), t2 ? u2() : document.body.classList.contains("DocSearch--active") || o2());
      }
    }
    return window.addEventListener("keydown", e9), function() {
      window.removeEventListener("keydown", e9);
    };
  }, [t2, n2, a2, o2, u2, r2]);
}
var Vt = ["children", "theme", "onReady", "onOpen", "onClose", "onSidepanelOpen", "onSidepanelClose"];
var Qt = Mt.createContext(void 0);
Qt.displayName = "DocSearchContext";
var Jt = Mt.forwardRef(function(e8, t2) {
  var n2 = e8.children, r2 = e8.theme, u2 = e8.onReady, o2 = e8.onOpen, i2 = e8.onClose, a2 = e8.onSidepanelOpen, s2 = e8.onSidepanelClose, c2 = function(e9, t3) {
    if (null == e9) return {};
    var n3, r3, u3 = function(e10, t4) {
      if (null == e10) return {};
      var n4 = {};
      for (var r4 in e10) if ({}.hasOwnProperty.call(e10, r4)) {
        if (-1 !== t4.indexOf(r4)) continue;
        n4[r4] = e10[r4];
      }
      return n4;
    }(e9, t3);
    if (Object.getOwnPropertySymbols) {
      var o3 = Object.getOwnPropertySymbols(e9);
      for (r3 = 0; r3 < o3.length; r3++) n3 = o3[r3], -1 === t3.indexOf(n3) && {}.propertyIsEnumerable.call(e9, n3) && (u3[n3] = e9[n3]);
    }
    return u3;
  }(e8, Vt), l2 = zt(Mt.useState("ready"), 2), f2 = l2[0], p2 = l2[1], d2 = zt(Mt.useState(c2.initialQuery || ""), 2), h2 = d2[0], D2 = d2[1], v2 = Mt.useRef(null), m2 = Kt(c2.keyboardShortcuts), y2 = zt(Mt.useState(), 2), g2 = y2[0], F2 = y2[1], E2 = zt(Mt.useState(function() {
    return /* @__PURE__ */ new Set();
  }), 2), _2 = E2[0], C2 = E2[1], b2 = function() {
    var e9 = zt(Mt.useState(false), 2), t3 = e9[0], n3 = e9[1];
    return Mt.useEffect(function() {
      var e10 = function() {
        var e11 = window.matchMedia("(max-width: 768px)");
        n3(e11.matches);
      };
      return e10(), window.addEventListener("resize", e10), function() {
        window.removeEventListener("resize", e10);
      };
    }, []), t3;
  }(), A2 = Mt.useRef("ready"), w2 = ["modal-search", "modal-askai"].includes(f2), S2 = "modal-askai" === f2, k2 = !b2 && _2.has("sidepanel"), O2 = "sidepanel" === f2;
  Mt.useEffect(function() {
    null == u2 || u2();
  }, [u2]), Mt.useEffect(function() {
    var e9 = A2.current, t3 = f2;
    "modal-search" !== t3 && "modal-askai" !== t3 || "modal-search" === e9 || "modal-askai" === e9 || null == o2 || o2(), "ready" !== t3 || "modal-search" !== e9 && "modal-askai" !== e9 || null == i2 || i2(), "sidepanel" === t3 && "sidepanel" !== e9 && (null == a2 || a2()), "sidepanel" !== t3 && "sidepanel" === e9 && (null == s2 || s2()), A2.current = t3;
  }, [f2, o2, i2, a2, s2]);
  var P2 = Mt.useCallback(function() {
    p2("modal-search");
  }, []), B2 = Mt.useCallback(function() {
    var e9, t3;
    p2("ready"), null === (e9 = v2.current) || void 0 === e9 || e9.focus(), D2(null !== (t3 = c2.initialQuery) && void 0 !== t3 ? t3 : "");
  }, [p2, c2.initialQuery]), x2 = Mt.useCallback(function(e9, t3) {
    if (!b2 && e9 && k2) return F2(t3), void p2("sidepanel");
    p2(e9 ? "modal-askai" : "modal-search");
  }, [p2, b2, k2]), R2 = Mt.useCallback(function(e9) {
    _2.has("sidepanel") && (F2(e9), p2("sidepanel"));
  }, [p2, _2]), j2 = Mt.useCallback(function(e9) {
    p2("modal-search"), D2(e9.key);
  }, [p2, D2]), I2 = Mt.useCallback(function(e9) {
    _2.has(e9) || C2(function(t3) {
      var n3 = new Set(t3);
      return n3.add(e9), n3;
    });
  }, [_2]);
  Mt.useImperativeHandle(t2, function() {
    return { open: P2, close: B2, openAskAi: function(e9) {
      return x2(true, e9);
    }, openSidepanel: R2, get isReady() {
      return true;
    }, get isOpen() {
      return w2;
    }, get isSidepanelOpen() {
      return O2;
    }, get isSidepanelSupported() {
      return k2;
    } };
  }, [P2, B2, x2, R2, w2, O2, k2]), function(e9) {
    var t3 = e9.theme;
    Te(function() {
      if (t3) {
        var e10 = document.documentElement.dataset.theme;
        if (t3 !== e10) return document.documentElement.dataset.theme = t3, function() {
          void 0 === e10 ? delete document.documentElement.dataset.theme : document.documentElement.dataset.theme = e10;
        };
      }
    }, [t3]);
  }({ theme: r2 }), Wt({ isOpen: w2, onOpen: P2, onClose: B2, onAskAiToggle: x2, onInput: j2, isAskAiActive: S2, searchButtonRef: v2, keyboardShortcuts: m2 });
  var T2 = Mt.useMemo(function() {
    return { docsearchState: f2, setDocsearchState: p2, searchButtonRef: v2, initialQuery: h2, keyboardShortcuts: m2, openModal: P2, closeModal: B2, isAskAiActive: S2, isModalActive: w2, onAskAiToggle: x2, initialAskAiMessage: g2, registerView: I2, isHybridModeSupported: k2 };
  }, [f2, v2, h2, m2, P2, B2, S2, w2, x2, g2, I2, k2]);
  return Mt.createElement(Qt.Provider, { value: T2 }, n2);
});
function Zt(e8, t2) {
  (null == t2 || t2 > e8.length) && (t2 = e8.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e8[n2];
  return r2;
}
function Gt(e8, t2, n2, r2, u2, o2, i2) {
  try {
    var a2 = e8[o2](i2), s2 = a2.value;
  } catch (e9) {
    return void n2(e9);
  }
  a2.done ? t2(s2) : Promise.resolve(s2).then(r2, u2);
}
function Xt(e8) {
  return function() {
    var t2 = this, n2 = arguments;
    return new Promise(function(r2, u2) {
      var o2 = e8.apply(t2, n2);
      function i2(e9) {
        Gt(o2, r2, u2, i2, a2, "next", e9);
      }
      function a2(e9) {
        Gt(o2, r2, u2, i2, a2, "throw", e9);
      }
      i2(void 0);
    });
  };
}
function Yt(e8, t2) {
  if (!(e8 instanceof t2)) throw new TypeError("Cannot call a class as a function");
}
function en(e8, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e8, hn(r2.key), r2);
  }
}
function tn(e8, t2, n2) {
  return t2 && en(e8.prototype, t2), n2 && en(e8, n2), Object.defineProperty(e8, "prototype", { writable: false }), e8;
}
function nn(e8, t2) {
  var n2 = "undefined" != typeof Symbol && e8[Symbol.iterator] || e8["@@iterator"];
  if (!n2) {
    if (Array.isArray(e8) || (n2 = vn(e8)) || t2) {
      n2 && (e8 = n2);
      var r2 = 0, u2 = function() {
      };
      return { s: u2, n: function() {
        return r2 >= e8.length ? { done: true } : { done: false, value: e8[r2++] };
      }, e: function(e9) {
        throw e9;
      }, f: u2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o2, i2 = true, a2 = false;
  return { s: function() {
    n2 = n2.call(e8);
  }, n: function() {
    var e9 = n2.next();
    return i2 = e9.done, e9;
  }, e: function(e9) {
    a2 = true, o2 = e9;
  }, f: function() {
    try {
      i2 || null == n2.return || n2.return();
    } finally {
      if (a2) throw o2;
    }
  } };
}
function rn(e8, t2, n2) {
  return (t2 = hn(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function un() {
  return un = Object.assign ? Object.assign.bind() : function(e8) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e8[r2] = n2[r2]);
    }
    return e8;
  }, un.apply(null, arguments);
}
function on(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function an(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? on(Object(n2), true).forEach(function(t3) {
      rn(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : on(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function sn(e8, t2) {
  if (null == e8) return {};
  var n2, r2, u2 = function(e9, t3) {
    if (null == e9) return {};
    var n3 = {};
    for (var r3 in e9) if ({}.hasOwnProperty.call(e9, r3)) {
      if (-1 !== t3.indexOf(r3)) continue;
      n3[r3] = e9[r3];
    }
    return n3;
  }(e8, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e8);
    for (r2 = 0; r2 < o2.length; r2++) n2 = o2[r2], -1 === t2.indexOf(n2) && {}.propertyIsEnumerable.call(e8, n2) && (u2[n2] = e8[n2]);
  }
  return u2;
}
function cn() {
  var e8, t2, n2 = "function" == typeof Symbol ? Symbol : {}, r2 = n2.iterator || "@@iterator", u2 = n2.toStringTag || "@@toStringTag";
  function o2(n3, r3, u3, o3) {
    var s3 = r3 && r3.prototype instanceof a2 ? r3 : a2, c3 = Object.create(s3.prototype);
    return ln(c3, "_invoke", function(n4, r4, u4) {
      var o4, a3, s4, c4 = 0, l3 = u4 || [], f3 = false, p3 = { p: 0, n: 0, v: e8, a: d2, f: d2.bind(e8, 4), d: function(t3, n5) {
        return o4 = t3, a3 = 0, s4 = e8, p3.n = n5, i2;
      } };
      function d2(n5, r5) {
        for (a3 = n5, s4 = r5, t2 = 0; !f3 && c4 && !u5 && t2 < l3.length; t2++) {
          var u5, o5 = l3[t2], d3 = p3.p, h2 = o5[2];
          n5 > 3 ? (u5 = h2 === r5) && (s4 = o5[(a3 = o5[4]) ? 5 : (a3 = 3, 3)], o5[4] = o5[5] = e8) : o5[0] <= d3 && ((u5 = n5 < 2 && d3 < o5[1]) ? (a3 = 0, p3.v = r5, p3.n = o5[1]) : d3 < h2 && (u5 = n5 < 3 || o5[0] > r5 || r5 > h2) && (o5[4] = n5, o5[5] = r5, p3.n = h2, a3 = 0));
        }
        if (u5 || n5 > 1) return i2;
        throw f3 = true, r5;
      }
      return function(u5, l4, h2) {
        if (c4 > 1) throw TypeError("Generator is already running");
        for (f3 && 1 === l4 && d2(l4, h2), a3 = l4, s4 = h2; (t2 = a3 < 2 ? e8 : s4) || !f3; ) {
          o4 || (a3 ? a3 < 3 ? (a3 > 1 && (p3.n = -1), d2(a3, s4)) : p3.n = s4 : p3.v = s4);
          try {
            if (c4 = 2, o4) {
              if (a3 || (u5 = "next"), t2 = o4[u5]) {
                if (!(t2 = t2.call(o4, s4))) throw TypeError("iterator result is not an object");
                if (!t2.done) return t2;
                s4 = t2.value, a3 < 2 && (a3 = 0);
              } else 1 === a3 && (t2 = o4.return) && t2.call(o4), a3 < 2 && (s4 = TypeError("The iterator does not provide a '" + u5 + "' method"), a3 = 1);
              o4 = e8;
            } else if ((t2 = (f3 = p3.n < 0) ? s4 : n4.call(r4, p3)) !== i2) break;
          } catch (t3) {
            o4 = e8, a3 = 1, s4 = t3;
          } finally {
            c4 = 1;
          }
        }
        return { value: t2, done: f3 };
      };
    }(n3, u3, o3), true), c3;
  }
  var i2 = {};
  function a2() {
  }
  function s2() {
  }
  function c2() {
  }
  t2 = Object.getPrototypeOf;
  var l2 = [][r2] ? t2(t2([][r2]())) : (ln(t2 = {}, r2, function() {
    return this;
  }), t2), f2 = c2.prototype = a2.prototype = Object.create(l2);
  function p2(e9) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e9, c2) : (e9.__proto__ = c2, ln(e9, u2, "GeneratorFunction")), e9.prototype = Object.create(f2), e9;
  }
  return s2.prototype = c2, ln(f2, "constructor", c2), ln(c2, "constructor", s2), s2.displayName = "GeneratorFunction", ln(c2, u2, "GeneratorFunction"), ln(f2), ln(f2, u2, "Generator"), ln(f2, r2, function() {
    return this;
  }), ln(f2, "toString", function() {
    return "[object Generator]";
  }), (cn = function() {
    return { w: o2, m: p2 };
  })();
}
function ln(e8, t2, n2, r2) {
  var u2 = Object.defineProperty;
  try {
    u2({}, "", {});
  } catch (e9) {
    u2 = 0;
  }
  ln = function(e9, t3, n3, r3) {
    function o2(t4, n4) {
      ln(e9, t4, function(e10) {
        return this._invoke(t4, n4, e10);
      });
    }
    t3 ? u2 ? u2(e9, t3, { value: n3, enumerable: !r3, configurable: !r3, writable: !r3 }) : e9[t3] = n3 : (o2("next", 0), o2("throw", 1), o2("return", 2));
  }, ln(e8, t2, n2, r2);
}
function fn(e8, t2) {
  return fn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e9, t3) {
    return e9.__proto__ = t3, e9;
  }, fn(e8, t2);
}
function pn(e8, t2) {
  return function(e9) {
    if (Array.isArray(e9)) return e9;
  }(e8) || function(e9, t3) {
    var n2 = null == e9 ? null : "undefined" != typeof Symbol && e9[Symbol.iterator] || e9["@@iterator"];
    if (null != n2) {
      var r2, u2, o2, i2, a2 = [], s2 = true, c2 = false;
      try {
        if (o2 = (n2 = n2.call(e9)).next, 0 === t3) {
          if (Object(n2) !== n2) return;
          s2 = false;
        } else for (; !(s2 = (r2 = o2.call(n2)).done) && (a2.push(r2.value), a2.length !== t3); s2 = true) ;
      } catch (e10) {
        c2 = true, u2 = e10;
      } finally {
        try {
          if (!s2 && null != n2.return && (i2 = n2.return(), Object(i2) !== i2)) return;
        } finally {
          if (c2) throw u2;
        }
      }
      return a2;
    }
  }(e8, t2) || vn(e8, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function dn(e8) {
  return function(e9) {
    if (Array.isArray(e9)) return Zt(e9);
  }(e8) || function(e9) {
    if ("undefined" != typeof Symbol && null != e9[Symbol.iterator] || null != e9["@@iterator"]) return Array.from(e9);
  }(e8) || vn(e8) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function hn(e8) {
  var t2 = function(e9) {
    if ("object" != w(e9) || !e9) return e9;
    var t3 = e9[Symbol.toPrimitive];
    if (void 0 !== t3) {
      var n2 = t3.call(e9, "string");
      if ("object" != w(n2)) return n2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e9);
  }(e8);
  return "symbol" == w(t2) ? t2 : t2 + "";
}
function Dn(e8) {
  return Dn = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, Dn(e8);
}
function vn(e8, t2) {
  if (e8) {
    if ("string" == typeof e8) return Zt(e8, t2);
    var n2 = {}.toString.call(e8).slice(8, -1);
    return "Object" === n2 && e8.constructor && (n2 = e8.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e8) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Zt(e8, t2) : void 0;
  }
}
function mn() {
  mn = function(e9, t3) {
    return new n2(e9, void 0, t3);
  };
  var e8 = RegExp.prototype, t2 = /* @__PURE__ */ new WeakMap();
  function n2(e9, r3, u2) {
    var o2 = RegExp(e9, r3);
    return t2.set(o2, u2 || t2.get(e9)), fn(o2, n2.prototype);
  }
  function r2(e9, n3) {
    var r3 = t2.get(n3);
    return Object.keys(r3).reduce(function(t3, n4) {
      var u2 = r3[n4];
      if ("number" == typeof u2) t3[n4] = e9[u2];
      else {
        for (var o2 = 0; void 0 === e9[u2[o2]] && o2 + 1 < u2.length; ) o2++;
        t3[n4] = e9[u2[o2]];
      }
      return t3;
    }, /* @__PURE__ */ Object.create(null));
  }
  return function(e9, t3) {
    if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
    e9.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t3 && fn(e9, t3);
  }(n2, RegExp), n2.prototype.exec = function(t3) {
    var n3 = e8.exec.call(this, t3);
    if (n3) {
      n3.groups = r2(n3, this);
      var u2 = n3.indices;
      u2 && (u2.groups = r2(u2, this));
    }
    return n3;
  }, n2.prototype[Symbol.replace] = function(n3, u2) {
    if ("string" == typeof u2) {
      var o2 = t2.get(this);
      return e8[Symbol.replace].call(this, n3, u2.replace(/\$<([^>]+)(>|$)/g, function(e9, t3, n4) {
        if ("" === n4) return e9;
        var r3 = o2[t3];
        return Array.isArray(r3) ? "$" + r3.join("$") : "number" == typeof r3 ? "$" + r3 : "";
      }));
    }
    if ("function" == typeof u2) {
      var i2 = this;
      return e8[Symbol.replace].call(this, n3, function() {
        var e9 = arguments;
        return "object" != w(e9[e9.length - 1]) && (e9 = [].slice.call(e9)).push(r2(e9, i2)), u2.apply(this, e9);
      });
    }
    return e8[Symbol.replace].call(this, n3, u2);
  }, mn.apply(this, arguments);
}
Jt.displayName = "DocSearch";
var yn = function(e8) {
  var t2 = e8.theme;
  Te(function() {
    if (t2) {
      var e9 = document.documentElement.dataset.theme;
      if (t2 !== e9) return document.documentElement.dataset.theme = t2, function() {
        void 0 === e9 ? delete document.documentElement.dataset.theme : document.documentElement.dataset.theme = e9;
      };
    }
  }, [t2]);
};
var gn = { "Ctrl/Cmd+K": true, "/": true };
function Fn(e8) {
  return an(an({}, gn), e8);
}
function En(e8) {
  var t2 = e8.size, n2 = void 0 === t2 ? 20 : t2, r2 = e8.color, u2 = void 0 === r2 ? "currentColor" : r2;
  return Mt.createElement("svg", { width: n2, height: n2, className: "DocSearch-Search-Icon", viewBox: "0 0 24 24", "aria-hidden": "true" }, Mt.createElement("circle", { cx: "11", cy: "11", r: "8", stroke: u2, fill: "none", strokeWidth: "1.4" }), Mt.createElement("path", { d: "m21 21-4.3-4.3", stroke: u2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function _n(e8, t2, n2) {
  return e8.reduce(function(e9, r2) {
    var u2 = t2(r2);
    return e9.hasOwnProperty(u2) || (e9[u2] = []), e9[u2].length < (n2 || 5) && e9[u2].push(r2), e9;
  }, {});
}
function Cn(e8) {
  return e8;
}
function bn(e8) {
  return 1 === e8.button || e8.altKey || e8.ctrlKey || e8.metaKey || e8.shiftKey;
}
var An = "Ctrl";
function wn() {
}
var Sn = /(<mark>|<\/mark>)/g;
var kn = RegExp(Sn.source);
function On(e8) {
  var t2, n2, r2 = e8;
  if (!r2.__docsearch_parent && !e8._highlightResult) return e8.hierarchy.lvl0;
  var u2 = r2.__docsearch_parent ? null === (t2 = r2.__docsearch_parent) || void 0 === t2 || null === (t2 = t2._highlightResult) || void 0 === t2 || null === (t2 = t2.hierarchy) || void 0 === t2 ? void 0 : t2.lvl0 : null === (n2 = e8._highlightResult) || void 0 === n2 || null === (n2 = n2.hierarchy) || void 0 === n2 ? void 0 : n2.lvl0;
  return u2 ? u2.value && kn.test(u2.value) ? u2.value.replace(Sn, "") : u2.value : e8.hierarchy.lvl0;
}
var Pn = ["translations", "keyboardShortcuts"];
var Bn = Mt.forwardRef(function(e8, t2) {
  var n2 = e8.translations, r2 = void 0 === n2 ? {} : n2, u2 = e8.keyboardShortcuts, o2 = sn(e8, Pn), i2 = r2.buttonText, a2 = void 0 === i2 ? "Search" : i2, s2 = r2.buttonAriaLabel, c2 = void 0 === s2 ? "Search" : s2, l2 = Fn(u2), f2 = pn(je(null), 2), p2 = f2[0], d2 = f2[1];
  yn({ theme: o2.theme }), Te(function() {
    "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? d2("⌘") : d2(An));
  }, []);
  var h2 = pn(p2 === An ? [An, "Control", "Ctrl"] : ["Meta", "Meta", "⌘"], 3), D2 = h2[0], v2 = h2[1], m2 = h2[2], y2 = l2["Ctrl/Cmd+K"], g2 = "".concat(v2, "+k");
  return Mt.createElement("button", un({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": y2 ? "".concat(c2, " (").concat(g2, ")") : c2, "aria-keyshortcuts": y2 ? g2 : void 0 }, o2, { ref: t2 }), Mt.createElement("span", { className: "DocSearch-Button-Container" }, Mt.createElement(En, null), Mt.createElement("span", { className: "DocSearch-Button-Placeholder" }, a2)), Mt.createElement("span", { className: "DocSearch-Button-Keys" }, null !== p2 && y2 && Mt.createElement(Mt.Fragment, null, Mt.createElement(xn, { reactsToKey: D2 }, m2), Mt.createElement(xn, { reactsToKey: "k" }, "K"))));
});
function xn(e8) {
  var t2 = e8.reactsToKey, n2 = e8.children, r2 = pn(je(false), 2), u2 = r2[0], o2 = r2[1];
  return Te(function() {
    if (t2) return window.addEventListener("keydown", e9), window.addEventListener("keyup", n3), function() {
      window.removeEventListener("keydown", e9), window.removeEventListener("keyup", n3);
    };
    function e9(e10) {
      e10.key === t2 && o2(true);
    }
    function n3(e10) {
      e10.key !== t2 && "Meta" !== e10.key || o2(false);
    }
  }, [t2]), Mt.createElement("kbd", { className: u2 ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key" + ("Ctrl" === t2 ? " DocSearch-Button-Key--ctrl" : "") }, n2);
}
function Rn(e8, t2) {
  var n2 = void 0;
  return function() {
    for (var r2 = arguments.length, u2 = new Array(r2), o2 = 0; o2 < r2; o2++) u2[o2] = arguments[o2];
    n2 && clearTimeout(n2), n2 = setTimeout(function() {
      return e8.apply(void 0, u2);
    }, t2);
  };
}
function jn(e8) {
  return e8.reduce(function(e9, t2) {
    return e9.concat(t2);
  }, []);
}
var In = 0;
function Tn(e8) {
  return 0 === e8.collections.length ? 0 : e8.collections.reduce(function(e9, t2) {
    return e9 + t2.items.length;
  }, 0);
}
function Nn(e8) {
  return e8 !== Object(e8);
}
function Mn(e8, t2) {
  if (e8 === t2) return true;
  if (Nn(e8) || Nn(t2) || "function" == typeof e8 || "function" == typeof t2) return e8 === t2;
  if (Object.keys(e8).length !== Object.keys(t2).length) return false;
  for (var n2 = 0, r2 = Object.keys(e8); n2 < r2.length; n2++) {
    var u2 = r2[n2];
    if (!(u2 in t2)) return false;
    if (!Mn(e8[u2], t2[u2])) return false;
  }
  return true;
}
var Ln = function() {
};
var Un = [{ segment: "autocomplete-core", version: "1.19.2" }];
function qn(e8) {
  var t2 = e8.item, n2 = e8.items, r2 = void 0 === n2 ? [] : n2;
  return { index: t2.__autocomplete_indexName, items: [t2], positions: [1 + r2.findIndex(function(e9) {
    return e9.objectID === t2.objectID;
  })], queryID: t2.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
}
function Hn(e8, t2) {
  (null == t2 || t2 > e8.length) && (t2 = e8.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e8[n2];
  return r2;
}
var zn = ["items"];
var $n = ["items"];
function Kn(e8) {
  return Kn = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, Kn(e8);
}
function Wn(e8) {
  return function(e9) {
    if (Array.isArray(e9)) return Vn(e9);
  }(e8) || function(e9) {
    if ("undefined" != typeof Symbol && null != e9[Symbol.iterator] || null != e9["@@iterator"]) return Array.from(e9);
  }(e8) || function(e9, t2) {
    if (e9) {
      if ("string" == typeof e9) return Vn(e9, t2);
      var n2 = Object.prototype.toString.call(e9).slice(8, -1);
      return "Object" === n2 && e9.constructor && (n2 = e9.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e9) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Vn(e9, t2) : void 0;
    }
  }(e8) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Vn(e8, t2) {
  (null == t2 || t2 > e8.length) && (t2 = e8.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e8[n2];
  return r2;
}
function Qn(e8, t2) {
  if (null == e8) return {};
  var n2, r2, u2 = function(e9, t3) {
    if (null == e9) return {};
    var n3, r3, u3 = {}, o3 = Object.keys(e9);
    for (r3 = 0; r3 < o3.length; r3++) n3 = o3[r3], t3.indexOf(n3) >= 0 || (u3[n3] = e9[n3]);
    return u3;
  }(e8, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e8);
    for (r2 = 0; r2 < o2.length; r2++) n2 = o2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e8, n2) && (u2[n2] = e8[n2]);
  }
  return u2;
}
function Jn(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Zn(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Jn(Object(n2), true).forEach(function(t3) {
      Gn(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : Jn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function Gn(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== Kn(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== Kn(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === Kn(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Xn(e8) {
  return e8.map(function(e9) {
    var t2 = e9.items, n2 = Qn(e9, zn);
    return Zn(Zn({}, n2), {}, { objectIDs: (null == t2 ? void 0 : t2.map(function(e10) {
      return e10.objectID;
    })) || n2.objectIDs });
  });
}
function Yn(e8) {
  var t2, n2, r2, u2 = (t2 = function(e9, t3) {
    return function(e10) {
      if (Array.isArray(e10)) return e10;
    }(e9) || function(e10, t4) {
      var n3 = null == e10 ? null : "undefined" != typeof Symbol && e10[Symbol.iterator] || e10["@@iterator"];
      if (null != n3) {
        var r3, u3, o3, i2, a2 = [], s2 = true, c2 = false;
        try {
          if (o3 = (n3 = n3.call(e10)).next, 0 === t4) ;
          else for (; !(s2 = (r3 = o3.call(n3)).done) && (a2.push(r3.value), a2.length !== t4); s2 = true) ;
        } catch (e11) {
          c2 = true, u3 = e11;
        } finally {
          try {
            if (!s2 && null != n3.return && (i2 = n3.return(), Object(i2) !== i2)) return;
          } finally {
            if (c2) throw u3;
          }
        }
        return a2;
      }
    }(e9, t3) || function(e10, t4) {
      if (e10) {
        if ("string" == typeof e10) return Hn(e10, t4);
        var n3 = Object.prototype.toString.call(e10).slice(8, -1);
        return "Object" === n3 && e10.constructor && (n3 = e10.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e10) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? Hn(e10, t4) : void 0;
      }
    }(e9, t3) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }((e8.version || "").split(".").map(Number), 2), n2 = t2[0], r2 = t2[1], n2 >= 3 || 2 === n2 && r2 >= 4 || 1 === n2 && r2 >= 10);
  function o2(t3, n3, r3) {
    if (u2 && void 0 !== r3) {
      var o3 = r3[0].__autocomplete_algoliaCredentials, i2 = { "X-Algolia-Application-Id": o3.appId, "X-Algolia-API-Key": o3.apiKey };
      e8.apply(void 0, [t3].concat(Wn(n3), [{ headers: i2 }]));
    } else e8.apply(void 0, [t3].concat(Wn(n3)));
  }
  return { init: function(t3, n3) {
    e8("init", { appId: t3, apiKey: n3 });
  }, setAuthenticatedUserToken: function(t3) {
    e8("setAuthenticatedUserToken", t3);
  }, setUserToken: function(t3) {
    e8("setUserToken", t3);
  }, clickedObjectIDsAfterSearch: function() {
    for (var e9 = arguments.length, t3 = new Array(e9), n3 = 0; n3 < e9; n3++) t3[n3] = arguments[n3];
    t3.length > 0 && o2("clickedObjectIDsAfterSearch", Xn(t3), t3[0].items);
  }, clickedObjectIDs: function() {
    for (var e9 = arguments.length, t3 = new Array(e9), n3 = 0; n3 < e9; n3++) t3[n3] = arguments[n3];
    t3.length > 0 && o2("clickedObjectIDs", Xn(t3), t3[0].items);
  }, clickedFilters: function() {
    for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
    n3.length > 0 && e8.apply(void 0, ["clickedFilters"].concat(n3));
  }, convertedObjectIDsAfterSearch: function() {
    for (var e9 = arguments.length, t3 = new Array(e9), n3 = 0; n3 < e9; n3++) t3[n3] = arguments[n3];
    t3.length > 0 && o2("convertedObjectIDsAfterSearch", Xn(t3), t3[0].items);
  }, convertedObjectIDs: function() {
    for (var e9 = arguments.length, t3 = new Array(e9), n3 = 0; n3 < e9; n3++) t3[n3] = arguments[n3];
    t3.length > 0 && o2("convertedObjectIDs", Xn(t3), t3[0].items);
  }, convertedFilters: function() {
    for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
    n3.length > 0 && e8.apply(void 0, ["convertedFilters"].concat(n3));
  }, viewedObjectIDs: function() {
    for (var e9 = arguments.length, t3 = new Array(e9), n3 = 0; n3 < e9; n3++) t3[n3] = arguments[n3];
    t3.length > 0 && t3.reduce(function(e10, t4) {
      var n4 = t4.items, r3 = Qn(t4, $n);
      return [].concat(Wn(e10), Wn(function(e11) {
        for (var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n5 = [], r4 = 0; r4 < e11.objectIDs.length; r4 += t5) n5.push(Zn(Zn({}, e11), {}, { objectIDs: e11.objectIDs.slice(r4, r4 + t5) }));
        return n5;
      }(Zn(Zn({}, r3), {}, { objectIDs: (null == n4 ? void 0 : n4.map(function(e11) {
        return e11.objectID;
      })) || r3.objectIDs })).map(function(e11) {
        return { items: n4, payload: e11 };
      })));
    }, []).forEach(function(e10) {
      var t4 = e10.items;
      return o2("viewedObjectIDs", [e10.payload], t4);
    });
  }, viewedFilters: function() {
    for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
    n3.length > 0 && e8.apply(void 0, ["viewedFilters"].concat(n3));
  } };
}
function er(e8) {
  var t2 = e8.items.reduce(function(e9, t3) {
    var n2;
    return e9[t3.__autocomplete_indexName] = (null !== (n2 = e9[t3.__autocomplete_indexName]) && void 0 !== n2 ? n2 : []).concat(t3), e9;
  }, {});
  return Object.keys(t2).map(function(e9) {
    return { index: e9, items: t2[e9], algoliaSource: ["autocomplete"] };
  });
}
function tr(e8) {
  return e8.objectID && e8.__autocomplete_indexName && e8.__autocomplete_queryID;
}
function nr(e8) {
  return nr = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, nr(e8);
}
function rr(e8) {
  return function(e9) {
    if (Array.isArray(e9)) return ur(e9);
  }(e8) || function(e9) {
    if ("undefined" != typeof Symbol && null != e9[Symbol.iterator] || null != e9["@@iterator"]) return Array.from(e9);
  }(e8) || function(e9, t2) {
    if (e9) {
      if ("string" == typeof e9) return ur(e9, t2);
      var n2 = Object.prototype.toString.call(e9).slice(8, -1);
      return "Object" === n2 && e9.constructor && (n2 = e9.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e9) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? ur(e9, t2) : void 0;
    }
  }(e8) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function ur(e8, t2) {
  (null == t2 || t2 > e8.length) && (t2 = e8.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e8[n2];
  return r2;
}
function or(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function ir(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? or(Object(n2), true).forEach(function(t3) {
      ar(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : or(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function ar(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== nr(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== nr(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === nr(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
var sr = "2.15.0";
var cr = "https://cdn.jsdelivr.net/npm/search-insights@".concat(sr, "/dist/search-insights.min.js");
var lr = Rn(function(e8) {
  var t2 = e8.onItemsChange, n2 = e8.items, r2 = e8.insights, u2 = e8.state;
  t2({ insights: r2, insightsEvents: er({ items: n2 }).map(function(e9) {
    return ir({ eventName: "Items Viewed" }, e9);
  }), state: u2 });
}, 400);
function fr(e8) {
  var t2 = function(e9) {
    return ir({ onItemsChange: function(e10) {
      var t3 = e10.insights, n3 = e10.insightsEvents, r3 = e10.state;
      t3.viewedObjectIDs.apply(t3, rr(n3.map(function(e11) {
        return ir(ir({}, e11), {}, { algoliaSource: pr(e11.algoliaSource, r3.context) });
      })));
    }, onSelect: function(e10) {
      var t3 = e10.insights, n3 = e10.insightsEvents, r3 = e10.state;
      t3.clickedObjectIDsAfterSearch.apply(t3, rr(n3.map(function(e11) {
        return ir(ir({}, e11), {}, { algoliaSource: pr(e11.algoliaSource, r3.context) });
      })));
    }, onActive: Ln, __autocomplete_clickAnalytics: true }, e9);
  }(e8), n2 = t2.insightsClient, r2 = t2.insightsInitParams, u2 = t2.onItemsChange, o2 = t2.onSelect, i2 = t2.onActive, a2 = t2.__autocomplete_clickAnalytics, s2 = n2;
  if (n2 || "undefined" != typeof window && function(e9) {
    var t3 = e9.window, n3 = t3.AlgoliaAnalyticsObject || "aa";
    "string" == typeof n3 && (s2 = t3[n3]), s2 || (t3.AlgoliaAnalyticsObject = n3, t3[n3] || (t3[n3] = function() {
      t3[n3].queue || (t3[n3].queue = []);
      for (var e10 = arguments.length, r3 = new Array(e10), u3 = 0; u3 < e10; u3++) r3[u3] = arguments[u3];
      t3[n3].queue.push(r3);
    }), t3[n3].version = sr, s2 = t3[n3], function(e10) {
      var t4 = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
      try {
        var n4 = e10.document.createElement("script");
        n4.async = true, n4.src = cr, n4.onerror = function() {
          console.error(t4);
        }, document.body.appendChild(n4);
      } catch (e11) {
        console.error(t4);
      }
    }(t3));
  }({ window }), !s2) return {};
  r2 && s2("init", ir({ partial: true }, r2));
  var c2 = Yn(s2), l2 = { current: [] }, f2 = Rn(function(e9) {
    var t3 = e9.state;
    if (t3.isOpen) {
      var n3 = t3.collections.reduce(function(e10, t4) {
        return [].concat(rr(e10), rr(t4.items));
      }, []).filter(tr);
      Mn(l2.current.map(function(e10) {
        return e10.objectID;
      }), n3.map(function(e10) {
        return e10.objectID;
      })) || (l2.current = n3, n3.length > 0 && lr({ onItemsChange: u2, items: n3, insights: c2, state: t3 }));
    }
  }, 0);
  return { name: "aa.algoliaInsightsPlugin", subscribe: function(e9) {
    var t3 = e9.setContext, n3 = e9.onSelect, r3 = e9.onActive;
    function u3(e10) {
      t3({ algoliaInsightsPlugin: { __algoliaSearchParameters: ir(ir({}, a2 ? { clickAnalytics: true } : {}), e10 ? { userToken: dr(e10) } : {}), insights: c2 } });
    }
    s2("addAlgoliaAgent", "insights-plugin"), u3(), s2("onUserTokenChange", function(e10) {
      u3(e10);
    }), s2("getUserToken", null, function(e10, t4) {
      u3(t4);
    }), n3(function(e10) {
      var t4 = e10.item, n4 = e10.state, r4 = e10.event, u4 = e10.source;
      tr(t4) && o2({ state: n4, event: r4, insights: c2, item: t4, insightsEvents: [ir({ eventName: "Item Selected" }, qn({ item: t4, items: u4.getItems().filter(tr) }))] });
    }), r3(function(e10) {
      var t4 = e10.item, n4 = e10.source, r4 = e10.state, u4 = e10.event;
      tr(t4) && i2({ state: r4, event: u4, insights: c2, item: t4, insightsEvents: [ir({ eventName: "Item Active" }, qn({ item: t4, items: n4.getItems().filter(tr) }))] });
    });
  }, onStateChange: function(e9) {
    var t3 = e9.state;
    f2({ state: t3 });
  }, __autocomplete_pluginOptions: e8 };
}
function pr() {
  var e8, t2 = arguments.length > 1 ? arguments[1] : void 0;
  return [].concat(rr(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []), ["autocomplete-internal"], rr(null !== (e8 = t2.algoliaInsightsPlugin) && void 0 !== e8 && e8.__automaticInsights ? ["autocomplete-automatic"] : []));
}
function dr(e8) {
  return "number" == typeof e8 ? e8.toString() : e8;
}
function hr(e8, t2) {
  var n2 = t2;
  return { then: function(t3, r2) {
    return hr(e8.then(vr(t3, n2, e8), vr(r2, n2, e8)), n2);
  }, catch: function(t3) {
    return hr(e8.catch(vr(t3, n2, e8)), n2);
  }, finally: function(t3) {
    return t3 && n2.onCancelList.push(t3), hr(e8.finally(vr(t3 && function() {
      return n2.onCancelList = [], t3();
    }, n2, e8)), n2);
  }, cancel: function() {
    n2.isCanceled = true;
    var e9 = n2.onCancelList;
    n2.onCancelList = [], e9.forEach(function(e10) {
      e10();
    });
  }, isCanceled: function() {
    return true === n2.isCanceled;
  } };
}
function Dr(e8) {
  return hr(e8, { isCanceled: false, onCancelList: [] });
}
function vr(e8, t2, n2) {
  return e8 ? function(n3) {
    return t2.isCanceled ? n3 : e8(n3);
  } : n2;
}
var mr;
var yr = true;
function gr(e8, t2, n2, r2) {
  if (!n2) return null;
  if (e8 < 0 && (null === t2 || null !== r2 && 0 === t2)) return n2 + e8;
  var u2 = (null === t2 ? -1 : t2) + e8;
  return u2 <= -1 || u2 >= n2 ? null === r2 ? null : 0 : u2;
}
function Fr(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Er(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Fr(Object(n2), true).forEach(function(t3) {
      _r(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : Fr(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function _r(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== Cr(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== Cr(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === Cr(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Cr(e8) {
  return Cr = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, Cr(e8);
}
function br(e8, t2) {
  (null == t2 || t2 > e8.length) && (t2 = e8.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e8[n2];
  return r2;
}
var Ar = function(e8, t2) {
  var n2, r2 = false, u2 = [], o2 = function(e9, t3) {
    var n3 = "undefined" != typeof Symbol && e9[Symbol.iterator] || e9["@@iterator"];
    if (!n3) {
      if (Array.isArray(e9) || (n3 = function(e10, t4) {
        if (e10) {
          if ("string" == typeof e10) return br(e10, t4);
          var n4 = Object.prototype.toString.call(e10).slice(8, -1);
          return "Object" === n4 && e10.constructor && (n4 = e10.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e10) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? br(e10, t4) : void 0;
        }
      }(e9)) || t3) {
        n3 && (e9 = n3);
        var r3 = 0, u3 = function() {
        };
        return { s: u3, n: function() {
          return r3 >= e9.length ? { done: true } : { done: false, value: e9[r3++] };
        }, e: function(e10) {
          throw e10;
        }, f: u3 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o3, i3 = true, a3 = false;
    return { s: function() {
      n3 = n3.call(e9);
    }, n: function() {
      var e10 = n3.next();
      return i3 = e10.done, e10;
    }, e: function(e10) {
      a3 = true, o3 = e10;
    }, f: function() {
      try {
        i3 || null == n3.return || n3.return();
      } finally {
        if (a3) throw o3;
      }
    } };
  }(e8);
  try {
    for (o2.s(); !(n2 = o2.n()).done; ) {
      var i2, a2, s2, c2 = null === (i2 = n2.value.__autocomplete_pluginOptions) || void 0 === i2 || null === (a2 = (s2 = i2).awaitSubmit) || void 0 === a2 ? void 0 : a2.call(s2);
      if ("number" == typeof c2) u2.push(c2);
      else if (true === c2) {
        r2 = true;
        break;
      }
    }
  } catch (e9) {
    o2.e(e9);
  } finally {
    o2.f();
  }
  return r2 ? t2.wait() : u2.length > 0 ? t2.wait(Math.max.apply(Math, u2)) : void 0;
};
function wr(e8) {
  var t2 = function(e9) {
    var t3 = e9.collections.map(function(e10) {
      return e10.items.length;
    }).reduce(function(e10, t4, n3) {
      var r3 = (e10[n3 - 1] || 0) + t4;
      return e10.push(r3), e10;
    }, []).reduce(function(t4, n3) {
      return n3 <= e9.activeItemId ? t4 + 1 : t4;
    }, 0);
    return e9.collections[t3];
  }(e8);
  if (!t2) return null;
  var n2 = t2.items[function(e9) {
    for (var t3 = e9.state, n3 = e9.collection, r3 = false, u2 = 0, o2 = 0; false === r3; ) {
      var i2 = t3.collections[u2];
      if (i2 === n3) {
        r3 = true;
        break;
      }
      o2 += i2.items.length, u2++;
    }
    return t3.activeItemId - o2;
  }({ state: e8, collection: t2 })], r2 = t2.source;
  return { item: n2, itemInputValue: r2.getItemInputValue({ item: n2, state: e8 }), itemUrl: r2.getItemUrl({ item: n2, state: e8 }), source: r2 };
}
function Sr(e8, t2, n2) {
  return [e8, null == n2 ? void 0 : n2.sourceId, t2].filter(Boolean).join("-").replace(/\s/g, "");
}
var kr = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
function Or(e8) {
  return e8.nativeEvent || e8;
}
function Pr(e8) {
  return Pr = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, Pr(e8);
}
function Br(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function xr(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== Pr(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== Pr(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === Pr(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Rr(e8) {
  return Rr = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, Rr(e8);
}
function jr(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Ir(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? jr(Object(n2), true).forEach(function(t3) {
      Tr(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : jr(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function Tr(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== Rr(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== Rr(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === Rr(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Nr(e8) {
  return Nr = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, Nr(e8);
}
function Mr(e8, t2) {
  (null == t2 || t2 > e8.length) && (t2 = e8.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e8[n2];
  return r2;
}
function Lr(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Ur(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Lr(Object(n2), true).forEach(function(t3) {
      qr(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : Lr(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function qr(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== Nr(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== Nr(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === Nr(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Hr(e8, t2) {
  var n2, r2 = "undefined" != typeof window ? window : {}, u2 = e8.plugins || [];
  return Ur(Ur({ debug: false, openOnFocus: false, enterKeyHint: void 0, ignoreCompositionEvents: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, insights: void 0, environment: r2, shouldPanelOpen: function(e9) {
    return Tn(e9.state) > 0;
  }, reshape: function(e9) {
    return e9.sources;
  } }, e8), {}, { id: null !== (n2 = e8.id) && void 0 !== n2 ? n2 : "autocomplete-".concat(In++), plugins: u2, initialState: Ur({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e8.initialState), onStateChange: function(t3) {
    var n3;
    null === (n3 = e8.onStateChange) || void 0 === n3 || n3.call(e8, t3), u2.forEach(function(e9) {
      var n4;
      return null === (n4 = e9.onStateChange) || void 0 === n4 ? void 0 : n4.call(e9, t3);
    });
  }, onSubmit: function(t3) {
    var n3;
    null === (n3 = e8.onSubmit) || void 0 === n3 || n3.call(e8, t3), u2.forEach(function(e9) {
      var n4;
      return null === (n4 = e9.onSubmit) || void 0 === n4 ? void 0 : n4.call(e9, t3);
    });
  }, onReset: function(t3) {
    var n3;
    null === (n3 = e8.onReset) || void 0 === n3 || n3.call(e8, t3), u2.forEach(function(e9) {
      var n4;
      return null === (n4 = e9.onReset) || void 0 === n4 ? void 0 : n4.call(e9, t3);
    });
  }, getSources: function(n3) {
    return Promise.all([].concat(function(e9) {
      return function(e10) {
        if (Array.isArray(e10)) return Mr(e10);
      }(e9) || function(e10) {
        if ("undefined" != typeof Symbol && null != e10[Symbol.iterator] || null != e10["@@iterator"]) return Array.from(e10);
      }(e9) || function(e10, t3) {
        if (e10) {
          if ("string" == typeof e10) return Mr(e10, t3);
          var n4 = Object.prototype.toString.call(e10).slice(8, -1);
          return "Object" === n4 && e10.constructor && (n4 = e10.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e10) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? Mr(e10, t3) : void 0;
        }
      }(e9) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }(u2.map(function(e9) {
      return e9.getSources;
    })), [e8.getSources]).filter(Boolean).map(function(e9) {
      return function(e10, t3) {
        var n4 = [];
        return Promise.resolve(e10(t3)).then(function(e11) {
          return Promise.all(e11.filter(function(e12) {
            return Boolean(e12);
          }).map(function(e12) {
            if (e12.sourceId, n4.includes(e12.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e12.sourceId), " is not unique."));
            n4.push(e12.sourceId);
            var t4 = { getItemInputValue: function(e13) {
              return e13.state.query;
            }, getItemUrl: function() {
            }, onSelect: function(e13) {
              (0, e13.setIsOpen)(false);
            }, onActive: Ln, onResolve: Ln };
            Object.keys(t4).forEach(function(e13) {
              t4[e13].__default = true;
            });
            var r3 = Er(Er({}, t4), e12);
            return Promise.resolve(r3);
          }));
        });
      }(e9, n3);
    })).then(function(e9) {
      return jn(e9);
    }).then(function(e9) {
      return e9.map(function(e10) {
        return Ur(Ur({}, e10), {}, { onSelect: function(n4) {
          e10.onSelect(n4), t2.forEach(function(e11) {
            var t3;
            return null === (t3 = e11.onSelect) || void 0 === t3 ? void 0 : t3.call(e11, n4);
          });
        }, onActive: function(n4) {
          e10.onActive(n4), t2.forEach(function(e11) {
            var t3;
            return null === (t3 = e11.onActive) || void 0 === t3 ? void 0 : t3.call(e11, n4);
          });
        }, onResolve: function(n4) {
          e10.onResolve(n4), t2.forEach(function(e11) {
            var t3;
            return null === (t3 = e11.onResolve) || void 0 === t3 ? void 0 : t3.call(e11, n4);
          });
        } });
      });
    });
  }, navigator: Ur({ navigate: function(e9) {
    var t3 = e9.itemUrl;
    r2.location.assign(t3);
  }, navigateNewTab: function(e9) {
    var t3 = e9.itemUrl, n3 = r2.open(t3, "_blank", "noopener");
    null == n3 || n3.focus();
  }, navigateNewWindow: function(e9) {
    var t3 = e9.itemUrl;
    r2.open(t3, "_blank", "noopener");
  } }, e8.navigator) });
}
function zr(e8) {
  return zr = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, zr(e8);
}
function $r(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Kr(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? $r(Object(n2), true).forEach(function(t3) {
      Wr(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : $r(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function Wr(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== zr(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== zr(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === zr(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Vr(e8) {
  return Vr = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, Vr(e8);
}
function Qr(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Jr(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Qr(Object(n2), true).forEach(function(t3) {
      Zr(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : Qr(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function Zr(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== Vr(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== Vr(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === Vr(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Gr(e8) {
  return function(e9) {
    if (Array.isArray(e9)) return Xr(e9);
  }(e8) || function(e9) {
    if ("undefined" != typeof Symbol && null != e9[Symbol.iterator] || null != e9["@@iterator"]) return Array.from(e9);
  }(e8) || function(e9, t2) {
    if (e9) {
      if ("string" == typeof e9) return Xr(e9, t2);
      var n2 = Object.prototype.toString.call(e9).slice(8, -1);
      return "Object" === n2 && e9.constructor && (n2 = e9.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e9) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Xr(e9, t2) : void 0;
    }
  }(e8) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Xr(e8, t2) {
  (null == t2 || t2 > e8.length) && (t2 = e8.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e8[n2];
  return r2;
}
function Yr(e8) {
  return Boolean(e8.execute);
}
function eu(e8) {
  var t2 = e8.reduce(function(e9, t3) {
    if (!Yr(t3)) return e9.push(t3), e9;
    var n2 = t3.searchClient, r2 = t3.execute, u2 = t3.requesterId, o2 = t3.requests, i2 = e9.find(function(e10) {
      return Yr(t3) && Yr(e10) && e10.searchClient === n2 && Boolean(u2) && e10.requesterId === u2;
    });
    if (i2) {
      var a2;
      (a2 = i2.items).push.apply(a2, Gr(o2));
    } else {
      var s2 = { execute: r2, requesterId: u2, items: o2, searchClient: n2 };
      e9.push(s2);
    }
    return e9;
  }, []).map(function(e9) {
    if (!Yr(e9)) return Promise.resolve(e9);
    var t3 = e9, n2 = t3.execute, r2 = t3.items;
    return n2({ searchClient: t3.searchClient, requests: r2 });
  });
  return Promise.all(t2).then(function(e9) {
    return jn(e9);
  });
}
function tu(e8) {
  return tu = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, tu(e8);
}
var nu = ["event", "nextState", "props", "query", "refresh", "store"];
function ru(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function uu(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? ru(Object(n2), true).forEach(function(t3) {
      ou(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : ru(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function ou(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== tu(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== tu(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === tu(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
var iu;
var au;
var su;
var cu = null;
var lu = (iu = -1, au = -1, su = void 0, function(e8) {
  var t2 = ++iu;
  return Promise.resolve(e8).then(function(e9) {
    return su && t2 < au ? su : (au = t2, su = e9, e9);
  });
});
function fu(e8) {
  var t2 = e8.event, n2 = e8.nextState, r2 = void 0 === n2 ? {} : n2, u2 = e8.props, o2 = e8.query, i2 = e8.refresh, a2 = e8.store, s2 = function(e9, t3) {
    if (null == e9) return {};
    var n3, r3, u3 = function(e10, t4) {
      if (null == e10) return {};
      var n4, r4, u4 = {}, o4 = Object.keys(e10);
      for (r4 = 0; r4 < o4.length; r4++) n4 = o4[r4], t4.indexOf(n4) >= 0 || (u4[n4] = e10[n4]);
      return u4;
    }(e9, t3);
    if (Object.getOwnPropertySymbols) {
      var o3 = Object.getOwnPropertySymbols(e9);
      for (r3 = 0; r3 < o3.length; r3++) n3 = o3[r3], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e9, n3) && (u3[n3] = e9[n3]);
    }
    return u3;
  }(e8, nu);
  cu && u2.environment.clearTimeout(cu);
  var c2 = s2.setCollections, l2 = s2.setIsOpen, f2 = s2.setQuery, p2 = s2.setActiveItemId, d2 = s2.setStatus, h2 = s2.setContext;
  if (f2(o2), p2(u2.defaultActiveItemId), !o2 && false === u2.openOnFocus) {
    var D2, v2 = a2.getState().collections.map(function(e9) {
      return uu(uu({}, e9), {}, { items: [] });
    });
    d2("idle"), c2(v2), l2(null !== (D2 = r2.isOpen) && void 0 !== D2 ? D2 : u2.shouldPanelOpen({ state: a2.getState() }));
    var m2 = Dr(lu(v2).then(function() {
      return Promise.resolve();
    }));
    return a2.pendingRequests.add(m2);
  }
  d2("loading"), cu = u2.environment.setTimeout(function() {
    d2("stalled");
  }, u2.stallThreshold);
  var y2 = Dr(lu(u2.getSources(uu({ query: o2, refresh: i2, state: a2.getState() }, s2)).then(function(e9) {
    return Promise.all(e9.map(function(e10) {
      return Promise.resolve(e10.getItems(uu({ query: o2, refresh: i2, state: a2.getState() }, s2))).then(function(t3) {
        return function(e11, t4, n3) {
          if (u3 = e11, Boolean(null == u3 ? void 0 : u3.execute)) {
            var r3 = "algolia" === e11.requesterId ? Object.assign.apply(Object, [{}].concat(Gr(Object.keys(n3.context).map(function(e12) {
              var t5;
              return null === (t5 = n3.context[e12]) || void 0 === t5 ? void 0 : t5.__algoliaSearchParameters;
            })))) : {};
            return Jr(Jr({}, e11), {}, { requests: e11.queries.map(function(n4) {
              return { query: "algolia" === e11.requesterId ? Jr(Jr({}, n4), {}, { params: Jr(Jr({}, r3), n4.params) }) : n4, sourceId: t4, transformResponse: e11.transformResponse };
            }) });
          }
          var u3;
          return { items: e11, sourceId: t4 };
        }(t3, e10.sourceId, a2.getState());
      });
    })).then(eu).then(function(t3) {
      var n3, r3 = t3.some(function(e10) {
        return function(e11) {
          return !Array.isArray(e11) && Boolean(null == e11 ? void 0 : e11._automaticInsights);
        }(e10.items);
      });
      return r3 && h2({ algoliaInsightsPlugin: uu(uu({}, (null === (n3 = a2.getState().context) || void 0 === n3 ? void 0 : n3.algoliaInsightsPlugin) || {}), {}, { __automaticInsights: r3 }) }), function(e10, t4, n4) {
        return t4.map(function(t5) {
          var r4, u3 = e10.filter(function(e11) {
            return e11.sourceId === t5.sourceId;
          }), o3 = u3.map(function(e11) {
            return e11.items;
          }), i3 = u3[0].transformResponse, a3 = i3 ? i3({ results: r4 = o3, hits: r4.map(function(e11) {
            return e11.hits;
          }).filter(Boolean), facetHits: r4.map(function(e11) {
            var t6;
            return null === (t6 = e11.facetHits) || void 0 === t6 ? void 0 : t6.map(function(e12) {
              return { label: e12.value, count: e12.count, _highlightResult: { label: { value: e12.highlighted } } };
            });
          }).filter(Boolean) }) : o3;
          return t5.onResolve({ source: t5, results: o3, items: a3, state: n4.getState() }), a3.every(Boolean), 'The `getItems` function from source "'.concat(t5.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), { source: t5, items: a3 };
        });
      }(t3, e9, a2);
    }).then(function(e10) {
      return function(e11) {
        var t3 = e11.props, n3 = e11.state, r3 = e11.collections.reduce(function(e12, t4) {
          return Kr(Kr({}, e12), {}, Wr({}, t4.source.sourceId, Kr(Kr({}, t4.source), {}, { getItems: function() {
            return jn(t4.items);
          } })));
        }, {}), u3 = t3.plugins.reduce(function(e12, t4) {
          return t4.reshape ? t4.reshape(e12) : e12;
        }, { sourcesBySourceId: r3, state: n3 }).sourcesBySourceId;
        return jn(t3.reshape({ sourcesBySourceId: u3, sources: Object.values(u3), state: n3 })).filter(Boolean).map(function(e12) {
          return { source: e12, items: e12.getItems() };
        });
      }({ collections: e10, props: u2, state: a2.getState() });
    });
  }))).then(function(e9) {
    var n3;
    d2("idle"), c2(e9);
    var f3 = u2.shouldPanelOpen({ state: a2.getState() });
    l2(null !== (n3 = r2.isOpen) && void 0 !== n3 ? n3 : u2.openOnFocus && !o2 && f3 || f3);
    var p3 = wr(a2.getState());
    if (null !== a2.getState().activeItemId && p3) {
      var h3 = p3.item, D3 = p3.itemInputValue, v3 = p3.itemUrl, m3 = p3.source;
      m3.onActive(uu({ event: t2, item: h3, itemInputValue: D3, itemUrl: v3, refresh: i2, source: m3, state: a2.getState() }, s2));
    }
  }).finally(function() {
    d2("idle"), cu && u2.environment.clearTimeout(cu);
  });
  return a2.pendingRequests.add(y2);
}
function pu(e8) {
  return pu = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, pu(e8);
}
var du = ["event", "props", "refresh", "store"];
function hu(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Du(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? hu(Object(n2), true).forEach(function(t3) {
      vu(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : hu(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function vu(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== pu(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== pu(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === pu(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function mu(e8) {
  return mu = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, mu(e8);
}
var yu = ["props", "refresh", "store"];
var gu = ["inputElement", "formElement", "panelElement"];
var Fu = ["inputElement"];
var Eu = ["inputElement", "maxLength"];
var _u = ["source"];
var Cu = ["item", "source"];
function bu(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Au(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? bu(Object(n2), true).forEach(function(t3) {
      wu(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : bu(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function wu(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== mu(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== mu(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === mu(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Su(e8, t2) {
  if (null == e8) return {};
  var n2, r2, u2 = function(e9, t3) {
    if (null == e9) return {};
    var n3, r3, u3 = {}, o3 = Object.keys(e9);
    for (r3 = 0; r3 < o3.length; r3++) n3 = o3[r3], t3.indexOf(n3) >= 0 || (u3[n3] = e9[n3]);
    return u3;
  }(e8, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e8);
    for (r2 = 0; r2 < o2.length; r2++) n2 = o2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e8, n2) && (u2[n2] = e8[n2]);
  }
  return u2;
}
function ku(e8) {
  var t2 = e8.props, n2 = e8.refresh, r2 = e8.store, u2 = Su(e8, yu);
  return { getEnvironmentProps: function(e9) {
    var n3 = e9.inputElement, u3 = e9.formElement, o2 = e9.panelElement;
    function i2(e10) {
      !r2.getState().isOpen && r2.pendingRequests.isEmpty() || e10.target === n3 || false === [u3, o2].some(function(t3) {
        return (n4 = t3) === (r3 = e10.target) || n4.contains(r3);
        var n4, r3;
      }) && (r2.dispatch("blur", null), t2.debug || r2.pendingRequests.cancelAll());
    }
    return Au({ onTouchStart: i2, onMouseDown: i2, onTouchMove: function(e10) {
      false !== r2.getState().isOpen && n3 === t2.environment.document.activeElement && e10.target !== n3 && n3.blur();
    } }, Su(e9, gu));
  }, getRootProps: function(e9) {
    return Au({ role: "combobox", "aria-expanded": r2.getState().isOpen, "aria-haspopup": "listbox", "aria-controls": r2.getState().isOpen ? r2.getState().collections.map(function(e10) {
      var n3 = e10.source;
      return Sr(t2.id, "list", n3);
    }).join(" ") : void 0, "aria-labelledby": Sr(t2.id, "label") }, e9);
  }, getFormProps: function(e9) {
    e9.inputElement;
    var o2 = Su(e9, Fu), i2 = function(o3) {
      var i3;
      t2.onSubmit(Au({ event: o3, refresh: n2, state: r2.getState() }, u2)), r2.dispatch("submit", null), null === (i3 = e9.inputElement) || void 0 === i3 || i3.blur();
    };
    return Au({ action: "", noValidate: true, role: "search", onSubmit: function(e10) {
      e10.preventDefault();
      var n3 = Ar(t2.plugins, r2.pendingRequests);
      void 0 !== n3 ? n3.then(function() {
        return i2(e10);
      }) : i2(e10);
    }, onReset: function(o3) {
      var i3;
      o3.preventDefault(), t2.onReset(Au({ event: o3, refresh: n2, state: r2.getState() }, u2)), r2.dispatch("reset", null), null === (i3 = e9.inputElement) || void 0 === i3 || i3.focus();
    } }, o2);
  }, getLabelProps: function(e9) {
    return Au({ htmlFor: Sr(t2.id, "input"), id: Sr(t2.id, "label") }, e9);
  }, getInputProps: function(e9) {
    var o2;
    function i2(e10) {
      (t2.openOnFocus || Boolean(r2.getState().query)) && fu(Au({ event: e10, props: t2, query: r2.getState().completion || r2.getState().query, refresh: n2, store: r2 }, u2)), r2.dispatch("focus", null);
    }
    var a2 = e9 || {};
    a2.inputElement;
    var s2 = a2.maxLength, c2 = void 0 === s2 ? 512 : s2, l2 = Su(a2, Eu), f2 = wr(r2.getState()), p2 = function(e10) {
      return Boolean(e10 && e10.match(kr));
    }((null === (o2 = t2.environment.navigator) || void 0 === o2 ? void 0 : o2.userAgent) || ""), d2 = t2.enterKeyHint || (null != f2 && f2.itemUrl && !p2 ? "go" : "search");
    return Au({ "aria-autocomplete": "both", "aria-activedescendant": r2.getState().isOpen && null !== r2.getState().activeItemId ? Sr(t2.id, "item-".concat(r2.getState().activeItemId), null == f2 ? void 0 : f2.source) : void 0, "aria-controls": r2.getState().isOpen ? r2.getState().collections.filter(function(e10) {
      return e10.items.length > 0;
    }).map(function(e10) {
      var n3 = e10.source;
      return Sr(t2.id, "list", n3);
    }).join(" ") : void 0, "aria-labelledby": Sr(t2.id, "label"), value: r2.getState().completion || r2.getState().query, id: Sr(t2.id, "input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: d2, spellCheck: "false", autoFocus: t2.autoFocus, placeholder: t2.placeholder, maxLength: c2, type: "search", onChange: function(e10) {
      var o3 = e10.currentTarget.value;
      t2.ignoreCompositionEvents && Or(e10).isComposing ? u2.setQuery(o3) : fu(Au({ event: e10, props: t2, query: o3.slice(0, c2), refresh: n2, store: r2 }, u2));
    }, onCompositionEnd: function(e10) {
      fu(Au({ event: e10, props: t2, query: e10.currentTarget.value.slice(0, c2), refresh: n2, store: r2 }, u2));
    }, onKeyDown: function(e10) {
      Or(e10).isComposing || function(e11) {
        var t3 = e11.event, n3 = e11.props, r3 = e11.refresh, u3 = e11.store, o3 = function(e12, t4) {
          if (null == e12) return {};
          var n4, r4, u4 = function(e13, t5) {
            if (null == e13) return {};
            var n5, r5, u5 = {}, o5 = Object.keys(e13);
            for (r5 = 0; r5 < o5.length; r5++) n5 = o5[r5], t5.indexOf(n5) >= 0 || (u5[n5] = e13[n5]);
            return u5;
          }(e12, t4);
          if (Object.getOwnPropertySymbols) {
            var o4 = Object.getOwnPropertySymbols(e12);
            for (r4 = 0; r4 < o4.length; r4++) n4 = o4[r4], t4.indexOf(n4) >= 0 || Object.prototype.propertyIsEnumerable.call(e12, n4) && (u4[n4] = e12[n4]);
          }
          return u4;
        }(e11, du);
        if ("ArrowUp" === t3.key || "ArrowDown" === t3.key) {
          var i3 = function() {
            var e12 = wr(u3.getState()), t4 = n3.environment.document.getElementById(Sr(n3.id, "item-".concat(u3.getState().activeItemId), null == e12 ? void 0 : e12.source));
            t4 && (t4.scrollIntoViewIfNeeded ? t4.scrollIntoViewIfNeeded(false) : t4.scrollIntoView(false));
          }, a3 = function() {
            var e12 = wr(u3.getState());
            if (null !== u3.getState().activeItemId && e12) {
              var n4 = e12.item, i4 = e12.itemInputValue, a4 = e12.itemUrl, s4 = e12.source;
              s4.onActive(Du({ event: t3, item: n4, itemInputValue: i4, itemUrl: a4, refresh: r3, source: s4, state: u3.getState() }, o3));
            }
          };
          t3.preventDefault(), false === u3.getState().isOpen && (n3.openOnFocus || Boolean(u3.getState().query)) ? fu(Du({ event: t3, props: n3, query: u3.getState().query, refresh: r3, store: u3 }, o3)).then(function() {
            u3.dispatch(t3.key, { nextActiveItemId: n3.defaultActiveItemId }), a3(), setTimeout(i3, 0);
          }) : (u3.dispatch(t3.key, {}), a3(), i3());
        } else if ("Escape" === t3.key) t3.preventDefault(), u3.dispatch(t3.key, null), u3.pendingRequests.cancelAll();
        else if ("Tab" === t3.key) u3.dispatch("blur", null), u3.pendingRequests.cancelAll();
        else if ("Enter" === t3.key) {
          if (null === u3.getState().activeItemId || u3.getState().collections.every(function(e12) {
            return 0 === e12.items.length;
          })) {
            var s3 = Ar(n3.plugins, u3.pendingRequests);
            return void (void 0 !== s3 ? s3.then(u3.pendingRequests.cancelAll) : n3.debug || u3.pendingRequests.cancelAll());
          }
          t3.preventDefault();
          var c3 = wr(u3.getState()), l3 = c3.item, f3 = c3.itemInputValue, p3 = c3.itemUrl, d3 = c3.source;
          if (t3.metaKey || t3.ctrlKey) void 0 !== p3 && (d3.onSelect(Du({ event: t3, item: l3, itemInputValue: f3, itemUrl: p3, refresh: r3, source: d3, state: u3.getState() }, o3)), n3.navigator.navigateNewTab({ itemUrl: p3, item: l3, state: u3.getState() }));
          else if (t3.shiftKey) void 0 !== p3 && (d3.onSelect(Du({ event: t3, item: l3, itemInputValue: f3, itemUrl: p3, refresh: r3, source: d3, state: u3.getState() }, o3)), n3.navigator.navigateNewWindow({ itemUrl: p3, item: l3, state: u3.getState() }));
          else if (t3.altKey) ;
          else {
            if (void 0 !== p3) return d3.onSelect(Du({ event: t3, item: l3, itemInputValue: f3, itemUrl: p3, refresh: r3, source: d3, state: u3.getState() }, o3)), void n3.navigator.navigate({ itemUrl: p3, item: l3, state: u3.getState() });
            fu(Du({ event: t3, nextState: { isOpen: false }, props: n3, query: f3, refresh: r3, store: u3 }, o3)).then(function() {
              d3.onSelect(Du({ event: t3, item: l3, itemInputValue: f3, itemUrl: p3, refresh: r3, source: d3, state: u3.getState() }, o3));
            });
          }
        }
      }(Au({ event: e10, props: t2, refresh: n2, store: r2 }, u2));
    }, onFocus: i2, onBlur: Ln, onClick: function(n3) {
      e9.inputElement !== t2.environment.document.activeElement || r2.getState().isOpen || i2(n3);
    } }, l2);
  }, getPanelProps: function(e9) {
    return Au({ onMouseDown: function(e10) {
      e10.preventDefault();
    }, onMouseLeave: function() {
      r2.dispatch("mouseleave", null);
    } }, e9);
  }, getListProps: function(e9) {
    var n3 = e9 || {}, r3 = n3.source, u3 = Su(n3, _u);
    return Au({ role: "listbox", "aria-labelledby": Sr(t2.id, "label"), id: Sr(t2.id, "list", r3) }, u3);
  }, getItemProps: function(e9) {
    var o2 = e9.item, i2 = e9.source, a2 = Su(e9, Cu);
    return Au({ id: Sr(t2.id, "item-".concat(o2.__autocomplete_id), i2), role: "option", "aria-selected": r2.getState().activeItemId === o2.__autocomplete_id, onMouseMove: function(e10) {
      if (o2.__autocomplete_id !== r2.getState().activeItemId) {
        r2.dispatch("mousemove", o2.__autocomplete_id);
        var t3 = wr(r2.getState());
        if (null !== r2.getState().activeItemId && t3) {
          var i3 = t3.item, a3 = t3.itemInputValue, s2 = t3.itemUrl, c2 = t3.source;
          c2.onActive(Au({ event: e10, item: i3, itemInputValue: a3, itemUrl: s2, refresh: n2, source: c2, state: r2.getState() }, u2));
        }
      }
    }, onMouseDown: function(e10) {
      e10.preventDefault();
    }, onClick: function(e10) {
      var a3 = i2.getItemInputValue({ item: o2, state: r2.getState() }), s2 = i2.getItemUrl({ item: o2, state: r2.getState() });
      (s2 ? Promise.resolve() : fu(Au({ event: e10, nextState: { isOpen: false }, props: t2, query: a3, refresh: n2, store: r2 }, u2))).then(function() {
        i2.onSelect(Au({ event: e10, item: o2, itemInputValue: a3, itemUrl: s2, refresh: n2, source: i2, state: r2.getState() }, u2));
      });
    } }, a2);
  } };
}
function Ou(e8) {
  return Ou = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, Ou(e8);
}
function Pu(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Bu(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Pu(Object(n2), true).forEach(function(t3) {
      xu(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : Pu(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function xu(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== Ou(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== Ou(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === Ou(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Ru(e8) {
  var t2, n2, r2, u2, o2 = e8.plugins, i2 = e8.options, a2 = null === (t2 = ((null === (n2 = i2.__autocomplete_metadata) || void 0 === n2 ? void 0 : n2.userAgents) || [])[0]) || void 0 === t2 ? void 0 : t2.segment, s2 = a2 ? xu({}, a2, Object.keys((null === (r2 = i2.__autocomplete_metadata) || void 0 === r2 ? void 0 : r2.options) || {})) : {};
  return { plugins: o2.map(function(e9) {
    return { name: e9.name, options: Object.keys(e9.__autocomplete_pluginOptions || []) };
  }), options: Bu({ "autocomplete-core": Object.keys(i2) }, s2), ua: Un.concat((null === (u2 = i2.__autocomplete_metadata) || void 0 === u2 ? void 0 : u2.userAgents) || []) };
}
function ju(e8) {
  var t2, n2 = e8.state;
  return false === n2.isOpen || null === n2.activeItemId ? null : (null === (t2 = wr(n2)) || void 0 === t2 ? void 0 : t2.itemInputValue) || null;
}
function Iu(e8) {
  return Iu = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, Iu(e8);
}
function Tu(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Nu(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Tu(Object(n2), true).forEach(function(t3) {
      Mu(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : Tu(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function Mu(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== Iu(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== Iu(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === Iu(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
var Lu = function(e8, t2) {
  switch (t2.type) {
    case "setActiveItemId":
    case "mousemove":
      return Nu(Nu({}, e8), {}, { activeItemId: t2.payload });
    case "setQuery":
      return Nu(Nu({}, e8), {}, { query: t2.payload, completion: null });
    case "setCollections":
      return Nu(Nu({}, e8), {}, { collections: t2.payload });
    case "setIsOpen":
      return Nu(Nu({}, e8), {}, { isOpen: t2.payload });
    case "setStatus":
      return Nu(Nu({}, e8), {}, { status: t2.payload });
    case "setContext":
      return Nu(Nu({}, e8), {}, { context: Nu(Nu({}, e8.context), t2.payload) });
    case "ArrowDown":
      var n2 = Nu(Nu({}, e8), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : gr(1, e8.activeItemId, Tn(e8), t2.props.defaultActiveItemId) });
      return Nu(Nu({}, n2), {}, { completion: ju({ state: n2 }) });
    case "ArrowUp":
      var r2 = Nu(Nu({}, e8), {}, { activeItemId: gr(-1, e8.activeItemId, Tn(e8), t2.props.defaultActiveItemId) });
      return Nu(Nu({}, r2), {}, { completion: ju({ state: r2 }) });
    case "Escape":
      return e8.isOpen ? Nu(Nu({}, e8), {}, { activeItemId: null, isOpen: false, completion: null }) : Nu(Nu({}, e8), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return Nu(Nu({}, e8), {}, { activeItemId: null, isOpen: false, status: "idle" });
    case "reset":
      return Nu(Nu({}, e8), {}, { activeItemId: true === t2.props.openOnFocus ? t2.props.defaultActiveItemId : null, status: "idle", completion: null, query: "" });
    case "focus":
      return Nu(Nu({}, e8), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e8.query)) && t2.props.shouldPanelOpen({ state: e8 }) });
    case "blur":
      return t2.props.debug ? e8 : Nu(Nu({}, e8), {}, { isOpen: false, activeItemId: null });
    case "mouseleave":
      return Nu(Nu({}, e8), {}, { activeItemId: t2.props.defaultActiveItemId });
    default:
      return "The reducer action ".concat(JSON.stringify(t2.type), " is not supported."), e8;
  }
};
function Uu(e8) {
  return Uu = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, Uu(e8);
}
function qu(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Hu(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? qu(Object(n2), true).forEach(function(t3) {
      zu(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : qu(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function zu(e8, t2, n2) {
  return (t2 = function(e9) {
    var t3 = function(e10) {
      if ("object" !== Uu(e10) || null === e10) return e10;
      var t4 = e10[Symbol.toPrimitive];
      if (void 0 !== t4) {
        var n3 = t4.call(e10, "string");
        if ("object" !== Uu(n3)) return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" === Uu(t3) ? t3 : String(t3);
  }(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function $u(e8) {
  var t2 = [], n2 = Hr(e8, t2), r2 = function(e9, t3, n3) {
    var r3, u3 = t3.initialState;
    return { getState: function() {
      return u3;
    }, dispatch: function(r4, o3) {
      var i3 = function(e10) {
        for (var t4 = 1; t4 < arguments.length; t4++) {
          var n4 = null != arguments[t4] ? arguments[t4] : {};
          t4 % 2 ? Br(Object(n4), true).forEach(function(t5) {
            xr(e10, t5, n4[t5]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e10, Object.getOwnPropertyDescriptors(n4)) : Br(Object(n4)).forEach(function(t5) {
            Object.defineProperty(e10, t5, Object.getOwnPropertyDescriptor(n4, t5));
          });
        }
        return e10;
      }({}, u3);
      u3 = e9(u3, { type: r4, props: t3, payload: o3 }), n3({ state: u3, prevState: i3 });
    }, pendingRequests: (r3 = [], { add: function(e10) {
      return r3.push(e10), e10.finally(function() {
        r3 = r3.filter(function(t4) {
          return t4 !== e10;
        });
      });
    }, cancelAll: function() {
      r3.forEach(function(e10) {
        return e10.cancel();
      });
    }, isEmpty: function() {
      return 0 === r3.length;
    }, wait: function(e10) {
      return yr ? (yr = false, mr = e10 ? Promise.race([Promise.all(r3), new Promise(function(t4) {
        return setTimeout(t4, e10);
      })]) : Promise.all(r3), mr.then(function() {
        yr = true;
      })) : mr;
    } }) };
  }(Lu, n2, function(e9) {
    var t3, r3, o3 = e9.prevState, c3 = e9.state;
    if (n2.onStateChange(Hu({ prevState: o3, state: c3, refresh: i2, navigator: n2.navigator }, u2)), !s2() && null !== (t3 = c3.context) && void 0 !== t3 && null !== (r3 = t3.algoliaInsightsPlugin) && void 0 !== r3 && r3.__automaticInsights && false !== n2.insights) {
      var l2 = fr({ __autocomplete_clickAnalytics: false });
      n2.plugins.push(l2), a2([l2]);
    }
  }), u2 = function(e9) {
    var t3 = e9.store;
    return { setActiveItemId: function(e10) {
      t3.dispatch("setActiveItemId", e10);
    }, setQuery: function(e10) {
      t3.dispatch("setQuery", e10);
    }, setCollections: function(e10) {
      var n3 = 0, r3 = e10.map(function(e11) {
        return Ir(Ir({}, e11), {}, { items: jn(e11.items).map(function(e12) {
          return Ir(Ir({}, e12), {}, { __autocomplete_id: n3++ });
        }) });
      });
      t3.dispatch("setCollections", r3);
    }, setIsOpen: function(e10) {
      t3.dispatch("setIsOpen", e10);
    }, setStatus: function(e10) {
      t3.dispatch("setStatus", e10);
    }, setContext: function(e10) {
      t3.dispatch("setContext", e10);
    } };
  }({ store: r2 }), o2 = ku(Hu({ props: n2, refresh: i2, store: r2, navigator: n2.navigator }, u2));
  function i2() {
    return fu(Hu({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, navigator: n2.navigator, query: r2.getState().query, refresh: i2, store: r2 }, u2));
  }
  function a2(e9) {
    e9.forEach(function(e10) {
      var r3;
      return null === (r3 = e10.subscribe) || void 0 === r3 ? void 0 : r3.call(e10, Hu(Hu({}, u2), {}, { navigator: n2.navigator, refresh: i2, onSelect: function(e11) {
        t2.push({ onSelect: e11 });
      }, onActive: function(e11) {
        t2.push({ onActive: e11 });
      }, onResolve: function(e11) {
        t2.push({ onResolve: e11 });
      } }));
    });
  }
  function s2() {
    return n2.plugins.some(function(e9) {
      return "aa.algoliaInsightsPlugin" === e9.name;
    });
  }
  if (n2.insights && !s2()) {
    var c2 = "boolean" == typeof n2.insights ? {} : n2.insights;
    n2.plugins.push(fr(c2));
  }
  return a2(n2.plugins), function(e9) {
    var t3, n3, r3 = e9.metadata, u3 = e9.environment;
    if (null === (t3 = u3.navigator) || void 0 === t3 || null === (n3 = t3.userAgent) || void 0 === n3 ? void 0 : n3.includes("Algolia Crawler")) {
      var o3 = u3.document.createElement("meta"), i3 = u3.document.querySelector("head");
      o3.name = "algolia:metadata", setTimeout(function() {
        o3.content = JSON.stringify(r3), i3.appendChild(o3);
      }, 0);
    }
  }({ metadata: Ru({ plugins: n2.plugins, options: e8 }), environment: n2.environment }), Hu(Hu({ refresh: i2, navigator: n2.navigator }, o2), u2);
}
function Ku(e8) {
  var t2 = e8.translations, n2 = (void 0 === t2 ? {} : t2).searchByText, r2 = void 0 === n2 ? "Search by" : n2, u2 = "undefined" != typeof window ? window.location.hostname : "docsearch", o2 = "https://typesense.org/?utm_source=".concat(u2, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch");
  return Mt.createElement("a", { href: o2, target: "_blank", rel: "noopener noreferrer" }, Mt.createElement("span", { className: "DocSearch-Label" }, r2), Mt.createElement("svg", { fill: "none", height: "18", viewBox: "0 0 80 18", width: "80", xmlns: "http://www.w3.org/2000/svg" }, Mt.createElement("g", { fill: "currentColor" }, Mt.createElement("path", { d: "m4.82356 5.166c.03534.18.053.354.053.522 0 .156-.01766.324-.053.504l-2.24393-.018v6.048c0 .504.2297.756.68908.756h1.34282c.08246.204.12368.408.12368.612s-.01177.33-.03533.378c-.54184.072-1.10135.108-1.67853.108-1.14258 0-1.71387-.498-1.71387-1.494v-6.408l-1.2544739.018c-.0353374-.18-.0530061-.348-.0530061-.504 0-.168.0176687-.342.0530061-.522l1.2544739.018v-1.89c0-.324.04712-.552.14135-.684.09424-.144.27681-.216.54773-.216h.47706l.10601.108v2.7z" }), Mt.createElement("path", { d: "m13.3733 5.256-2.4206 8.442c-.4476 1.548-.9247 2.64-1.4312 3.276s-1.26625.954-2.27926.954c-.51828 0-.99534-.078-1.43117-.234-.03533-.336.0589-.66.2827-.972.36516.132.75387.198 1.16614.198.62429 0 1.10135-.216 1.43116-.648.32982-.432.63019-1.104.90111-2.016l.053-.18c-.30625-.024-.54184-.096-.70674-.216-.15313-.12-.2827-.342-.38872-.666l-2.47362-7.92c.36516-.156.6243-.234.77743-.234.34159 0 .57129.21.68908.63l1.39583 4.518c.04711.144.31803 1.08.81276 2.808.02356.084.08245.126.17668.126l2.15562-7.956c.1531-.048.3533-.072.6007-.072.2591 0 .4771.036.6537.108z" }), Mt.createElement("path", { d: "m16.7683 13.41v3.564c0 .324-.0471.552-.1414.684-.0942.144-.2827.216-.5653.216h-.4771l-.106-.108v-12.546l.106-.108h.4594c.2827 0 .4711.078.5654.234.106.144.159.384.159.72v.09c.7067-.804 1.549-1.206 2.5266-1.206 1.0013 0 1.7551.414 2.2616 1.242.5065.816.7598 1.95.7598 3.402 0 .708-.0943 1.344-.2827 1.908-.1767.564-.4182 1.044-.7244 1.44-.2945.384-.6361.684-1.0248.9-.3887.204-.7892.306-1.2015.306-.8128 0-1.5843-.246-2.3146-.738zm0-5.85v4.626c.7185.54 1.3958.81 2.0319.81s1.1602-.288 1.5725-.864.6184-1.446.6184-2.61c0-.576-.053-1.074-.159-1.494-.0942-.432-.2238-.786-.3887-1.062-.1649-.288-.3593-.498-.5831-.63-.212-.144-.4417-.216-.6891-.216-.4711 0-.9187.126-1.3428.378-.424.252-.7774.606-1.0601 1.062z" }), Mt.createElement("path", { d: "m31.2631 9.99h-5.4773c.0589 2.04.8187 3.06 2.2793 3.06.801 0 1.655-.252 2.562-.756.2591.24.4181.546.477.918-.9659.672-2.0496 1.008-3.251 1.008-.6125 0-1.1367-.114-1.5725-.342-.4359-.24-.7951-.564-1.0778-.972-.271-.42-.4712-.912-.6008-1.476-.1295-.564-.1943-1.182-.1943-1.854 0-.684.0765-1.308.2297-1.872.1649-.564.4005-1.05.7067-1.458.3063-.408.6714-.726 1.0955-.954.4358-.228.9305-.342 1.4841-.342.5419 0 1.0248.102 1.4489.306.4358.192.7951.462 1.0778.81.2944.336.5183.744.6714 1.224.1531.468.2297.972.2297 1.512 0 .216-.0118.426-.0354.63-.0117.192-.0294.378-.053.558zm-5.4773-1.026h4.2405v-.234c0-.828-.1708-1.494-.5124-1.998s-.854-.756-1.5372-.756c-.6714 0-1.1955.27-1.5725.81-.3651.54-.5713 1.266-.6184 2.178z" }), Mt.createElement("path", { d: "m33.0818 13.374c.0117-.264.0824-.552.212-.864.1413-.324.3004-.576.477-.756.9306.516 1.7492.774 2.456.774.3887 0 .7009-.078.9364-.234.2474-.156.3711-.366.3711-.63 0-.42-.3181-.756-.9541-1.008l-.9895-.378c-1.4841-.552-2.2262-1.434-2.2262-2.646 0-.432.0765-.816.2297-1.152.1649-.348.3887-.642.6714-.882.2945-.252.6419-.444 1.0424-.576s.8481-.198 1.3428-.198c.2238 0 .4712.018.7421.054.2827.036.5654.09.8481.162.2827.06.5537.132.8128.216s.4829.174.6714.27c0 .3-.0589.612-.1767.936s-.2768.564-.477.72c-.9306-.42-1.7375-.63-2.4207-.63-.3062 0-.5477.078-.7244.234-.1767.144-.265.336-.265.576 0 .372.2945.666.8834.882l1.0778.396c.7775.276 1.3546.654 1.7316 1.134.3769.48.5654 1.038.5654 1.674 0 .852-.3122 1.536-.9365 2.052-.6243.504-1.5195.756-2.6856.756-1.1426 0-2.2145-.294-3.2157-.882z" }), Mt.createElement("path", { d: "m48.5671 10.296h-4.8765c.0353.66.1826 1.182.4417 1.566.2709.372.7362.558 1.3958.558.6832 0 1.4665-.204 2.35-.612.3416.36.5595.834.6537 1.422-.9423.684-2.0731 1.026-3.3924 1.026-1.2486 0-2.1968-.39-2.8446-1.17-.6361-.792-.9542-1.962-.9542-3.51 0-.72.0825-1.368.2474-1.944.1649-.588.4064-1.086.7244-1.494.3181-.42.7068-.744 1.1662-.972.4593-.228.9835-.342 1.5725-.342.6007 0 1.1308.096 1.5902.288.4593.18.8481.444 1.1661.792.318.336.5536.738.7067 1.206.1649.468.2474.978.2474 1.53 0 .3-.0177.588-.053.864-.0353.264-.0825.528-.1414.792zm-3.41-3.78c-.9188 0-1.4135.708-1.4842 2.124h2.933v-.216c0-.576-.1178-1.038-.3534-1.386-.2355-.348-.6007-.522-1.0954-.522z" }), Mt.createElement("path", { d: "m58.2504 7.992v3.924c0 .768.1237 1.338.3711 1.71-.377.336-.8305.504-1.3605.504-.5065 0-.854-.114-1.0425-.342-.1884-.24-.2827-.612-.2827-1.116v-4.194c0-.54-.0648-.918-.1943-1.134-.1296-.216-.3711-.324-.7244-.324-.6243 0-1.2074.288-1.7492.864v6.12c-.1767.036-.3652.06-.5654.072-.1885.012-.3829.018-.5831.018-.2003 0-.4005-.006-.6007-.018-.1885-.012-.3711-.036-.5478-.072v-8.91l.106-.126h.8835c.6596 0 1.0719.36 1.2368 1.08.8599-.756 1.7138-1.134 2.5619-1.134s1.4724.282 1.8729.846c.4123.552.6184 1.296.6184 2.232z" }), Mt.createElement("path", { d: "m60.1039 13.374c.0117-.264.0824-.552.212-.864.1413-.324.3003-.576.477-.756.9306.516 1.7492.774 2.456.774.3887 0 .7008-.078.9364-.234.2474-.156.3711-.366.3711-.63 0-.42-.3181-.756-.9541-1.008l-.9895-.378c-1.4842-.552-2.2262-1.434-2.2262-2.646 0-.432.0765-.816.2296-1.152.165-.348.3888-.642.6715-.882.2944-.252.6419-.444 1.0424-.576s.8481-.198 1.3428-.198c.2238 0 .4712.018.7421.054.2827.036.5654.09.8481.162.2827.06.5536.132.8128.216.2591.084.4829.174.6714.27 0 .3-.0589.612-.1767.936s-.2768.564-.4771.72c-.9305-.42-1.7374-.63-2.4206-.63-.3062 0-.5477.078-.7244.234-.1767.144-.265.336-.265.576 0 .372.2945.666.8834.882l1.0778.396c.7774.276 1.3546.654 1.7315 1.134.377.48.5655 1.038.5655 1.674 0 .852-.3122 1.536-.9365 2.052-.6243.504-1.5195.756-2.6856.756-1.1426 0-2.2145-.294-3.2157-.882z" }), Mt.createElement("path", { d: "m75.5892 10.296h-4.8765c.0353.66.1826 1.182.4417 1.566.2709.372.7362.558 1.3958.558.6832 0 1.4665-.204 2.35-.612.3416.36.5595.834.6537 1.422-.9423.684-2.0731 1.026-3.3924 1.026-1.2486 0-2.1968-.39-2.8447-1.17-.636-.792-.9541-1.962-.9541-3.51 0-.72.0825-1.368.2474-1.944.1649-.588.4064-1.086.7244-1.494.318-.42.7068-.744 1.1662-.972.4593-.228.9835-.342 1.5725-.342.6007 0 1.1308.096 1.5902.288.4593.18.8481.444 1.1661.792.318.336.5536.738.7067 1.206.1649.468.2474.978.2474 1.53 0 .3-.0177.588-.053.864-.0353.264-.0825.528-.1414.792zm-3.41-3.78c-.9188 0-1.4135.708-1.4842 2.124h2.933v-.216c0-.576-.1178-1.038-.3534-1.386-.2355-.348-.6007-.522-1.0954-.522z" }), Mt.createElement("path", { d: "m78.3287 16.524v-16.4699996c.1767-.0360003.3769-.0540004.6007-.0540004.2356 0 .4535.0180001.6538.0540004v16.4699996c-.2003.036-.4182.054-.6538.054-.2238 0-.424-.018-.6007-.054z" }))));
}
function Wu(e8) {
  return Mt.createElement("svg", { width: "20", height: "20", "aria-label": e8.ariaLabel, viewBox: "0 0 24 24", role: "img" }, Mt.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.4" }, e8.children));
}
function Vu(e8) {
  var t2 = e8.translations, n2 = void 0 === t2 ? {} : t2, r2 = e8.isAskAiActive, u2 = void 0 !== r2 && r2, o2 = n2.selectText, i2 = void 0 === o2 ? "Select" : o2, a2 = n2.selectKeyAriaLabel, s2 = void 0 === a2 ? "Enter key" : a2, c2 = n2.submitQuestionText, l2 = void 0 === c2 ? "Submit question" : c2, f2 = n2.navigateText, p2 = void 0 === f2 ? "Navigate" : f2, d2 = n2.navigateUpKeyAriaLabel, h2 = void 0 === d2 ? "Arrow up" : d2, D2 = n2.navigateDownKeyAriaLabel, v2 = void 0 === D2 ? "Arrow down" : D2, m2 = n2.closeText, y2 = void 0 === m2 ? "Close" : m2, g2 = n2.backToSearchText, F2 = void 0 === g2 ? "Back to search" : g2, E2 = n2.closeKeyAriaLabel, _2 = void 0 === E2 ? "Escape key" : E2, C2 = n2.poweredByText, b2 = void 0 === C2 ? "Powered by" : C2, A2 = n2.searchByText;
  return Mt.createElement(Mt.Fragment, null, Mt.createElement("div", { className: "DocSearch-Logo" }, Mt.createElement(Ku, { translations: { searchByText: null != A2 ? A2 : b2 } })), Mt.createElement("ul", { className: "DocSearch-Commands" }, Mt.createElement("li", null, Mt.createElement("kbd", { className: "DocSearch-Commands-Key" }, Mt.createElement(Wu, { ariaLabel: v2 }, Mt.createElement("path", { d: "M12 5v14" }), Mt.createElement("path", { d: "m19 12-7 7-7-7" }))), Mt.createElement("kbd", { className: "DocSearch-Commands-Key" }, Mt.createElement(Wu, { ariaLabel: h2 }, Mt.createElement("path", { d: "m5 12 7-7 7 7" }), Mt.createElement("path", { d: "M12 19V5" }))), Mt.createElement("span", { className: "DocSearch-Label" }, p2)), Mt.createElement("li", null, Mt.createElement("kbd", { className: "DocSearch-Commands-Key" }, Mt.createElement(Wu, { ariaLabel: s2 }, Mt.createElement("polyline", { points: "9 10 4 15 9 20" }), Mt.createElement("path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }))), Mt.createElement("span", { className: "DocSearch-Label" }, u2 ? l2 : i2)), Mt.createElement("li", null, Mt.createElement("kbd", { className: "DocSearch-Commands-Key" }, Mt.createElement("span", { className: "DocSearch-Escape-Key" }, "ESC")), Mt.createElement("span", { className: "DocSearch-Label", "aria-label": _2 }, u2 ? F2 : y2))));
}
function Qu(e8) {
  var t2 = e8.hit, n2 = e8.children;
  return Mt.createElement("a", { href: t2.url }, n2);
}
function Ju(e8) {
  var t2 = e8.className;
  return Mt.createElement("svg", { viewBox: "0 0 38 38", className: t2, stroke: "currentColor", strokeOpacity: ".5" }, Mt.createElement("g", { fill: "none", fillRule: "evenodd" }, Mt.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, Mt.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), Mt.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, Mt.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
}
function Zu(e8) {
  var t2 = e8.className, n2 = void 0 === t2 ? "" : t2;
  return Mt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round", className: "DocSearch-Hit-icon-sparkles ".concat(n2) }, Mt.createElement("path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }), Mt.createElement("path", { d: "M20 3v4" }), Mt.createElement("path", { d: "M22 5h-4" }), Mt.createElement("path", { d: "M4 17v2" }), Mt.createElement("path", { d: "M5 18H3" }));
}
function Gu() {
  return Mt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Mt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Mt.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), Mt.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
}
function Xu() {
  return Mt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Mt.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function Yu() {
  return Mt.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "lucide lucide-triangle-alert-icon lucide-triangle-alert" }, Mt.createElement("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }), Mt.createElement("path", { d: "M12 9v4" }), Mt.createElement("path", { d: "M12 17h.01" }));
}
function eo() {
  return Mt.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, Mt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Mt.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), Mt.createElement("path", { d: "M8 17l-6-6 6-6" })));
}
var to;
var no = function() {
  return Mt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, Mt.createElement("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }), Mt.createElement("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }), Mt.createElement("path", { d: "M10 9H8" }), Mt.createElement("path", { d: "M16 13H8" }), Mt.createElement("path", { d: "M16 17H8" }));
};
function ro(e8) {
  switch (e8.type) {
    case "lvl1":
      return Mt.createElement(no, null);
    case "content":
      return Mt.createElement(oo, null);
    default:
      return Mt.createElement(uo, null);
  }
}
function uo() {
  return Mt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Mt.createElement("line", { x1: "4", x2: "20", y1: "9", y2: "9" }), Mt.createElement("line", { x1: "4", x2: "20", y1: "15", y2: "15" }), Mt.createElement("line", { x1: "10", x2: "8", y1: "3", y2: "21" }), Mt.createElement("line", { x1: "16", x2: "14", y1: "3", y2: "21" }));
}
function oo() {
  return Mt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Mt.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function io() {
  return Mt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Mt.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function ao() {
  return Mt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 18, height: 18, viewBox: "0 0 18 18", fill: "none" }, Mt.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.99984 1.29102C4.74264 1.29102 1.2915 4.74215 1.2915 8.99935C1.2915 13.2565 4.74264 16.7077 8.99984 16.7077C13.257 16.7077 16.7082 13.2565 16.7082 8.99935C16.7082 4.74215 13.257 1.29102 8.99984 1.29102ZM0.0415039 8.99935C0.0415039 4.0518 4.05229 0.0410156 8.99984 0.0410156C13.9474 0.0410156 17.9582 4.0518 17.9582 8.99935C17.9582 13.9469 13.9474 17.9577 8.99984 17.9577C4.05229 17.9577 0.0415039 13.9469 0.0415039 8.99935ZM5.87484 6.49935C5.87484 6.15417 6.15466 5.87435 6.49984 5.87435H11.4998C11.845 5.87435 12.1248 6.15417 12.1248 6.49935V11.4993C12.1248 11.8445 11.845 12.1243 11.4998 12.1243H6.49984C6.15466 12.1243 5.87484 11.8445 5.87484 11.4993V6.49935ZM7.12484 7.12435V10.8743H10.8748V7.12435H7.12484Z", fill: "currentcolor" }));
}
function so() {
  return Mt.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Mt.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
}
function co() {
  return Mt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "64", height: "64", viewBox: "0 0 24 24", fill: "none", stroke: "#5a5e9a", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, Mt.createElement("path", { d: "m13.5 8.5-5 5" }), Mt.createElement("path", { d: "m8.5 8.5 5 5" }), Mt.createElement("circle", { cx: "11", cy: "11", r: "8" }), Mt.createElement("path", { d: "m21 21-4.3-4.3" }));
}
function lo() {
  return Mt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 4, height: 16, viewBox: "0 0 4 16", fill: "none" }, Mt.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.99984 1.95898C1.88478 1.95898 1.7915 2.05226 1.7915 2.16732C1.7915 2.28238 1.88478 2.37565 1.99984 2.37565C2.1149 2.37565 2.20817 2.28238 2.20817 2.16732C2.20817 2.05226 2.1149 1.95898 1.99984 1.95898ZM0.541504 2.16732C0.541504 1.3619 1.19442 0.708984 1.99984 0.708984C2.80525 0.708984 3.45817 1.3619 3.45817 2.16732C3.45817 2.97273 2.80525 3.62565 1.99984 3.62565C1.19442 3.62565 0.541504 2.97273 0.541504 2.16732ZM1.99984 7.79232C1.88478 7.79232 1.7915 7.88559 1.7915 8.00065C1.7915 8.11571 1.88478 8.20898 1.99984 8.20898C2.1149 8.20898 2.20817 8.11571 2.20817 8.00065C2.20817 7.88559 2.1149 7.79232 1.99984 7.79232ZM0.541504 8.00065C0.541504 7.19524 1.19442 6.54232 1.99984 6.54232C2.80525 6.54232 3.45817 7.19524 3.45817 8.00065C3.45817 8.80607 2.80525 9.45898 1.99984 9.45898C1.19442 9.45898 0.541504 8.80607 0.541504 8.00065ZM1.99984 13.6257C1.88478 13.6257 1.7915 13.7189 1.7915 13.834C1.7915 13.949 1.88478 14.0423 1.99984 14.0423C2.1149 14.0423 2.20817 13.949 2.20817 13.834C2.20817 13.7189 2.1149 13.6257 1.99984 13.6257ZM0.541504 13.834C0.541504 13.0286 1.19442 12.3757 1.99984 12.3757C2.80525 12.3757 3.45817 13.0286 3.45817 13.834C3.45817 14.6394 2.80525 15.2923 1.99984 15.2923C1.19442 15.2923 0.541504 14.6394 0.541504 13.834Z", fill: "currentcolor" }));
}
function fo() {
  return Mt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" }, Mt.createElement("path", { d: "M9 0.875C10.6068 0.875 12.1776 1.35149 13.5137 2.24414C14.8498 3.13693 15.8919 4.40598 16.5068 5.89062C17.1218 7.37522 17.2822 9.00892 16.9688 10.585C16.6552 12.1611 15.8814 13.6088 14.7451 14.7451C13.6088 15.8814 12.1611 16.6552 10.585 16.9688C9.00892 17.2822 7.37523 17.1218 5.89062 16.5068C4.40598 15.8919 3.13693 14.8498 2.24414 13.5137C1.35149 12.1776 0.875 10.6068 0.875 9C0.875 8.65482 1.15482 8.375 1.5 8.375C1.84518 8.375 2.125 8.65482 2.125 9C2.125 10.3596 2.52792 11.6888 3.2832 12.8193C4.03864 13.9499 5.1129 14.8312 6.36914 15.3516C7.62523 15.8718 9.00736 16.0083 10.3408 15.7432C11.6744 15.4779 12.8998 14.8228 13.8613 13.8613C14.8228 12.8998 15.4779 11.6744 15.7432 10.3408C16.0083 9.00736 15.8718 7.62523 15.3516 6.36914C14.8312 5.1129 13.9499 4.03864 12.8193 3.2832C11.6888 2.52792 10.3596 2.125 9 2.125C7.06829 2.125 5.21604 2.89096 3.82129 4.22949L3.00879 5.04199H5.66699C6.01202 5.04217 6.29199 5.32192 6.29199 5.66699C6.29182 6.01191 6.01191 6.29182 5.66699 6.29199H1.5C1.45939 6.29199 1.41889 6.28716 1.37891 6.2793C1.36148 6.27587 1.345 6.26949 1.32812 6.26465C1.267 6.24714 1.20782 6.22205 1.15332 6.18555C1.08536 6.14005 1.02604 6.08256 0.980469 6.01465C0.970244 5.99942 0.962841 5.98268 0.954102 5.9668C0.904937 5.87756 0.875056 5.77606 0.875 5.66699V1.5C0.875 1.15482 1.15482 0.875002 1.5 0.875C1.84518 0.875 2.125 1.15482 2.125 1.5V4.15723L2.94141 3.3418L2.9502 3.33301C4.57158 1.77433 6.73388 0.875 9 0.875ZM9.33301 4.20801C9.67808 4.20801 9.95783 4.48798 9.95801 4.83301V9.44727L12.9463 10.9414C13.2548 11.0958 13.3798 11.4707 13.2256 11.7793C13.0712 12.088 12.6955 12.213 12.3867 12.0586L9.05371 10.3926C8.84198 10.2867 8.70801 10.0697 8.70801 9.83301V4.83301C8.70818 4.48809 8.98809 4.20819 9.33301 4.20801Z", fill: "currentcolor" }));
}
function po() {
  return Mt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "19", height: "19", viewBox: "0 0 19 19", fill: "none" }, Mt.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.712717 3.38039C1.14249 2.95062 1.72538 2.70917 2.33317 2.70917H8.1665C8.51168 2.70917 8.7915 2.989 8.7915 3.33417C8.7915 3.67935 8.51168 3.95917 8.1665 3.95917H2.33317C2.0569 3.95917 1.79195 4.06892 1.5966 4.26427C1.40125 4.45962 1.2915 4.72457 1.2915 5.00084V16.6675C1.2915 16.9438 1.40125 17.2087 1.5966 17.4041C1.79195 17.5994 2.0569 17.7092 2.33317 17.7092H13.9998C14.2761 17.7092 14.5411 17.5994 14.7364 17.4041C14.9318 17.2087 15.0415 16.9438 15.0415 16.6675V10.8342C15.0415 10.489 15.3213 10.2092 15.6665 10.2092C16.0117 10.2092 16.2915 10.489 16.2915 10.8342V16.6675C16.2915 17.2753 16.0501 17.8582 15.6203 18.288C15.1905 18.7177 14.6076 18.9592 13.9998 18.9592H2.33317C1.72538 18.9592 1.14249 18.7177 0.712717 18.288C0.282947 17.8582 0.0415039 17.2753 0.0415039 16.6675V5.00084C0.0415039 4.39305 0.282947 3.81016 0.712717 3.38039Z", fill: "currentcolor" }), Mt.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.6665 2.19141C15.3634 2.19141 15.0728 2.3118 14.8584 2.52611L7.06419 10.3204L6.52548 12.4752L8.68031 11.9365L16.4746 4.14223C16.6889 3.92792 16.8093 3.63725 16.8093 3.33417C16.8093 3.03109 16.6889 2.74043 16.4746 2.52611C16.2603 2.3118 15.9696 2.19141 15.6665 2.19141ZM13.9746 1.64223C14.4233 1.1935 15.0319 0.941406 15.6665 0.941406C16.3011 0.941406 16.9097 1.1935 17.3584 1.64223C17.8072 2.09096 18.0593 2.69957 18.0593 3.33417C18.0593 3.96877 17.8072 4.57738 17.3584 5.02611L9.44178 12.9428C9.36168 13.0229 9.26132 13.0797 9.15142 13.1072L5.81809 13.9405C5.6051 13.9938 5.3798 13.9314 5.22456 13.7761C5.06932 13.6209 5.00692 13.3956 5.06016 13.1826L5.8935 9.84925C5.92097 9.73936 5.9778 9.639 6.0579 9.5589L13.9746 1.64223Z", fill: "currentcolor" }));
}
var ho = { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
function Do(e8) {
  ho = e8;
}
var vo = { exec: function() {
  return null;
} };
function mo(e8) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n2 = "string" == typeof e8 ? e8 : e8.source, r2 = { replace: function(e9, t3) {
    var u2 = "string" == typeof t3 ? t3 : t3.source;
    return u2 = u2.replace(go.caret, "$1"), n2 = n2.replace(e9, u2), r2;
  }, getRegex: function() {
    return new RegExp(n2, t2);
  } };
  return r2;
}
var yo = function() {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch (e8) {
    return false;
  }
}();
var go = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDDB0-\uDDDB\uDDE0-\uDDE9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2-\uDFF6]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])/, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: function(e8) {
  return new RegExp("^( {0,3}".concat(e8, ")((?:[	 ][^\\n]*)?(?:\\n|$))"));
}, nextBulletRegex: function(e8) {
  return new RegExp("^ {0,".concat(Math.min(3, e8 - 1), "}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))"));
}, hrRegex: function(e8) {
  return new RegExp("^ {0,".concat(Math.min(3, e8 - 1), "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"));
}, fencesBeginRegex: function(e8) {
  return new RegExp("^ {0,".concat(Math.min(3, e8 - 1), "}(?:```|~~~)"));
}, headingBeginRegex: function(e8) {
  return new RegExp("^ {0,".concat(Math.min(3, e8 - 1), "}#"));
}, htmlBeginRegex: function(e8) {
  return new RegExp("^ {0,".concat(Math.min(3, e8 - 1), "}<(?:[a-z].*>|!--)"), "i");
} };
var Fo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Eo = /(?:[*+-]|\d{1,9}[.)])/;
var _o = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var Co = mo(_o).replace(/bull/g, Eo).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var bo = mo(_o).replace(/bull/g, Eo).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var Ao = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var wo = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var So = mo(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", wo).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var ko = mo(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Eo).getRegex();
var Oo = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var Po = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var Bo = mo("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Po).replace("tag", Oo).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var xo = mo(Ao).replace("hr", Fo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oo).getRegex();
var Ro = { blockquote: mo(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", xo).getRegex(), code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, def: So, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: Fo, html: Bo, lheading: Co, list: ko, newline: /^(?:[ \t]*(?:\n|$))+/, paragraph: xo, table: vo, text: /^[^\n]+/ };
var jo = mo("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Fo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oo).getRegex();
var Io = an(an({}, Ro), {}, { lheading: bo, table: jo, paragraph: mo(Ao).replace("hr", Fo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", jo).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oo).getRegex() });
var To = an(an({}, Ro), {}, { html: mo(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Po).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: vo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: mo(Ao).replace("hr", Fo).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Co).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() });
var No = /^( {2,}|\\)\n(?!\s*$)/;
var Mo = /(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDED0-\uDED8\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA])/;
var Lo = /(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDED0-\uDED8\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA])/;
var Uo = /(?:[\0-\x08\x0E-\x1F0-9A-Za-z\x7F-\x9F\xAA\xAD\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u037D\u037F-\u0383\u0386\u0388-\u03F5\u03F7-\u0481\u0483-\u0559\u0560-\u0588\u058B\u058C\u0590-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05F2\u05F5-\u0605\u0610-\u061A\u061C\u0620-\u0669\u066E-\u06D3\u06D5-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF\u070E-\u07F5\u07FA-\u07FD\u0800-\u082F\u083F-\u085D\u085F-\u0887\u0889-\u0963\u0966-\u096F\u0971-\u09F1\u09F4-\u09F9\u09FC\u09FE-\u0A75\u0A77-\u0AEF\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C76\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0D4E\u0D50-\u0D78\u0D7A-\u0DF3\u0DF5-\u0E3E\u0E40-\u0E4E\u0E50-\u0E59\u0E5C-\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F84\u0F86-\u0FBD\u0FC6\u0FCD\u0FDB-\u1049\u1050-\u109D\u10A0-\u10FA\u10FC-\u135F\u1369-\u138F\u139A-\u13FF\u1401-\u166C\u166F-\u167F\u1681-\u169A\u169D-\u16EA\u16EE-\u1734\u1737-\u17D3\u17D7\u17DC-\u17FF\u180B-\u193F\u1941-\u1943\u1946-\u19DD\u1A00-\u1A1D\u1A20-\u1A9F\u1AA7\u1AAE-\u1B4D\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BFB\u1C00-\u1C3A\u1C40-\u1C7D\u1C80-\u1CBF\u1CC8-\u1CD2\u1CD4-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u2079\u207F-\u2089\u208F-\u209F\u20C2-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u242A-\u243F\u244B-\u249B\u24EA-\u24FF\u2776-\u2793\u2B74\u2B75\u2C00-\u2CE4\u2CEB-\u2CF8\u2CFD\u2D00-\u2D6F\u2D71-\u2DFF\u2E2F\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3040-\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u318F\u3192-\u3195\u31A0-\u31BF\u31E6-\u31EE\u31F0-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA4FD\uA500-\uA60C\uA610-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA6F8-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uA873\uA878-\uA8CD\uA8D0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA95E\uA960-\uA9C0\uA9CE-\uA9DD\uA9E0-\uAA5B\uAA60-\uAA76\uAA7A-\uAADD\uAAE0-\uAAEF\uAAF2-\uAB5A\uAB5C-\uAB69\uAB6C-\uABEA\uABEC-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDD0-\uFDFB\uFE00-\uFE0F\uFE1A-\uFE2F\uFE53\uFE67\uFE6C-\uFEFE\uFF00\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDCFF\uDD03-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDF9E\uDFA0-\uDFCF\uDFD1-\uDFFF]|\uD801[\uDC00-\uDD6E\uDD70-\uDFFF]|\uD802[\uDC00-\uDC56\uDC58-\uDC76\uDC79-\uDD1E\uDD20-\uDD3E\uDD40-\uDE4F\uDE59-\uDE7E\uDE80-\uDEC7\uDEC9-\uDEEF\uDEF7-\uDF38\uDF40-\uDF98\uDF9D-\uDFFF]|\uD803[\uDC00-\uDD6D\uDD6F-\uDD8D\uDD90-\uDEAC\uDEAE-\uDECF\uDED9-\uDF54\uDF5A-\uDF85\uDF8A-\uDFFF]|\uD804[\uDC00-\uDC46\uDC4E-\uDCBA\uDCBD\uDCC2-\uDD3F\uDD44-\uDD73\uDD76-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE0-\uDE37\uDE3E-\uDEA8\uDEAA-\uDFD3\uDFD6\uDFD9-\uDFFF]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5C\uDC5E-\uDCC5\uDCC7-\uDDC0\uDDD8-\uDE40\uDE44-\uDE5F\uDE6D-\uDEB8\uDEBA-\uDF3B\uDF40-\uDFFF]|\uD806[\uDC00-\uDC3A\uDC3C-\uDD43\uDD47-\uDDE1\uDDE3-\uDE3E\uDE47-\uDE99\uDE9D\uDEA3-\uDEFF\uDF0A-\uDFE0\uDFE2-\uDFFF]|\uD807[\uDC00-\uDC40\uDC46-\uDC6F\uDC72-\uDEF6\uDEF9-\uDF42\uDF50-\uDFD4\uDFF2-\uDFFE]|[\uD808\uD80A\uD80C-\uD819\uD81C-\uD82E\uD830-\uD832\uD837\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD809[\uDC00-\uDC6F\uDC75-\uDFFF]|\uD80B[\uDC00-\uDFF0\uDFF3-\uDFFF]|\uD81A[\uDC00-\uDE6D\uDE70-\uDEF4\uDEF6-\uDF36\uDF40-\uDF43\uDF46-\uDFFF]|\uD81B[\uDC00-\uDD6C\uDD70-\uDE96\uDE9B-\uDFE1\uDFE3-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D\uDC9E\uDCA0-\uDFFF]|\uD833[\uDCF0-\uDCF9\uDCFD-\uDCFF\uDEB4-\uDEB9\uDED1-\uDEDF\uDEF1-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDEB-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE8C-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDDFE\uDE00-\uDFFF]|\uD83A[\uDC00-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED9-\uDEDB\uDEED-\uDEEF\uDEFD-\uDEFF\uDFDA-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCCF\uDCD9-\uDCFF\uDE58-\uDE5F\uDE6E\uDE6F\uDE7D-\uDE7F\uDE8B-\uDE8D\uDEC7\uDEC9-\uDECC\uDEDD\uDEDE\uDEEB-\uDEEE\uDEF9-\uDEFF\uDF93\uDFF0-\uDFF9\uDFFB-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
var qo = mo(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Lo).getRegex();
var Ho = /(?!~)(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDED0-\uDED8\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA])/;
var zo = mo(/link|precode-code|html/, "g").replace("link", mn(/\[(?:[^\[\]`]|(`+)[^`]+\1(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/, { a: 1 })).replace("precode-", yo ? "(?<!`)()" : "(^^|[^`])").replace("code", mn(/(`+)[^`]+\1(?!`)/, { b: 1 })).replace("html", /<(?! )[^<>]*?>/).getRegex();
var $o = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var Ko = mo($o, "u").replace(/punct/g, Mo).getRegex();
var Wo = mo($o, "u").replace(/punct/g, Ho).getRegex();
var Vo = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var Qo = mo(Vo, "gu").replace(/notPunctSpace/g, Uo).replace(/punctSpace/g, Lo).replace(/punct/g, Mo).getRegex();
var Jo = mo(Vo, "gu").replace(/notPunctSpace/g, /(?:(?:[\0-\x08\x0E-\x1F0-9A-Za-z\x7F-\x9F\xAA\xAD\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u037D\u037F-\u0383\u0386\u0388-\u03F5\u03F7-\u0481\u0483-\u0559\u0560-\u0588\u058B\u058C\u0590-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05F2\u05F5-\u0605\u0610-\u061A\u061C\u0620-\u0669\u066E-\u06D3\u06D5-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF\u070E-\u07F5\u07FA-\u07FD\u0800-\u082F\u083F-\u085D\u085F-\u0887\u0889-\u0963\u0966-\u096F\u0971-\u09F1\u09F4-\u09F9\u09FC\u09FE-\u0A75\u0A77-\u0AEF\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C76\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0D4E\u0D50-\u0D78\u0D7A-\u0DF3\u0DF5-\u0E3E\u0E40-\u0E4E\u0E50-\u0E59\u0E5C-\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F84\u0F86-\u0FBD\u0FC6\u0FCD\u0FDB-\u1049\u1050-\u109D\u10A0-\u10FA\u10FC-\u135F\u1369-\u138F\u139A-\u13FF\u1401-\u166C\u166F-\u167F\u1681-\u169A\u169D-\u16EA\u16EE-\u1734\u1737-\u17D3\u17D7\u17DC-\u17FF\u180B-\u193F\u1941-\u1943\u1946-\u19DD\u1A00-\u1A1D\u1A20-\u1A9F\u1AA7\u1AAE-\u1B4D\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BFB\u1C00-\u1C3A\u1C40-\u1C7D\u1C80-\u1CBF\u1CC8-\u1CD2\u1CD4-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u2079\u207F-\u2089\u208F-\u209F\u20C2-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u242A-\u243F\u244B-\u249B\u24EA-\u24FF\u2776-\u2793\u2B74\u2B75\u2C00-\u2CE4\u2CEB-\u2CF8\u2CFD\u2D00-\u2D6F\u2D71-\u2DFF\u2E2F\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3040-\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u318F\u3192-\u3195\u31A0-\u31BF\u31E6-\u31EE\u31F0-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA4FD\uA500-\uA60C\uA610-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA6F8-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uA873\uA878-\uA8CD\uA8D0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA95E\uA960-\uA9C0\uA9CE-\uA9DD\uA9E0-\uAA5B\uAA60-\uAA76\uAA7A-\uAADD\uAAE0-\uAAEF\uAAF2-\uAB5A\uAB5C-\uAB69\uAB6C-\uABEA\uABEC-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDD0-\uFDFB\uFE00-\uFE0F\uFE1A-\uFE2F\uFE53\uFE67\uFE6C-\uFEFE\uFF00\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDCFF\uDD03-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDF9E\uDFA0-\uDFCF\uDFD1-\uDFFF]|\uD801[\uDC00-\uDD6E\uDD70-\uDFFF]|\uD802[\uDC00-\uDC56\uDC58-\uDC76\uDC79-\uDD1E\uDD20-\uDD3E\uDD40-\uDE4F\uDE59-\uDE7E\uDE80-\uDEC7\uDEC9-\uDEEF\uDEF7-\uDF38\uDF40-\uDF98\uDF9D-\uDFFF]|\uD803[\uDC00-\uDD6D\uDD6F-\uDD8D\uDD90-\uDEAC\uDEAE-\uDECF\uDED9-\uDF54\uDF5A-\uDF85\uDF8A-\uDFFF]|\uD804[\uDC00-\uDC46\uDC4E-\uDCBA\uDCBD\uDCC2-\uDD3F\uDD44-\uDD73\uDD76-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE0-\uDE37\uDE3E-\uDEA8\uDEAA-\uDFD3\uDFD6\uDFD9-\uDFFF]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5C\uDC5E-\uDCC5\uDCC7-\uDDC0\uDDD8-\uDE40\uDE44-\uDE5F\uDE6D-\uDEB8\uDEBA-\uDF3B\uDF40-\uDFFF]|\uD806[\uDC00-\uDC3A\uDC3C-\uDD43\uDD47-\uDDE1\uDDE3-\uDE3E\uDE47-\uDE99\uDE9D\uDEA3-\uDEFF\uDF0A-\uDFE0\uDFE2-\uDFFF]|\uD807[\uDC00-\uDC40\uDC46-\uDC6F\uDC72-\uDEF6\uDEF9-\uDF42\uDF50-\uDFD4\uDFF2-\uDFFE]|[\uD808\uD80A\uD80C-\uD819\uD81C-\uD82E\uD830-\uD832\uD837\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD809[\uDC00-\uDC6F\uDC75-\uDFFF]|\uD80B[\uDC00-\uDFF0\uDFF3-\uDFFF]|\uD81A[\uDC00-\uDE6D\uDE70-\uDEF4\uDEF6-\uDF36\uDF40-\uDF43\uDF46-\uDFFF]|\uD81B[\uDC00-\uDD6C\uDD70-\uDE96\uDE9B-\uDFE1\uDFE3-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D\uDC9E\uDCA0-\uDFFF]|\uD833[\uDCF0-\uDCF9\uDCFD-\uDCFF\uDEB4-\uDEB9\uDED1-\uDEDF\uDEF1-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDEB-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE8C-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDDFE\uDE00-\uDFFF]|\uD83A[\uDC00-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED9-\uDEDB\uDEED-\uDEEF\uDEFD-\uDEFF\uDFDA-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCCF\uDCD9-\uDCFF\uDE58-\uDE5F\uDE6E\uDE6F\uDE7D-\uDE7F\uDE8B-\uDE8D\uDEC7\uDEC9-\uDECC\uDEDD\uDEDE\uDEEB-\uDEEE\uDEF9-\uDEFF\uDF93\uDFF0-\uDFF9\uDFFB-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|~)/).replace(/punctSpace/g, /(?!~)(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDED0-\uDED8\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA])/).replace(/punct/g, Ho).getRegex();
var Zo = mo("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Uo).replace(/punctSpace/g, Lo).replace(/punct/g, Mo).getRegex();
var Go = mo(/\\(punct)/, "gu").replace(/punct/g, Mo).getRegex();
var Xo = mo(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var Yo = mo(Po).replace("(?:-->|$)", "-->").getRegex();
var ei = mo("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Yo).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var ti = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/;
var ni = mo(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ti).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var ri = mo(/^!?\[(label)\]\[(ref)\]/).replace("label", ti).replace("ref", wo).getRegex();
var ui = mo(/^!?\[(ref)\](?:\[\])?/).replace("ref", wo).getRegex();
var oi = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var ii = { _backpedal: vo, anyPunctuation: Go, autolink: Xo, blockSkip: zo, br: No, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: vo, emStrongLDelim: Ko, emStrongRDelimAst: Qo, emStrongRDelimUnd: Zo, escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, link: ni, nolink: ui, punctuation: qo, reflink: ri, reflinkSearch: mo("reflink|nolink(?!\\()", "g").replace("reflink", ri).replace("nolink", ui).getRegex(), tag: ei, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: vo };
var ai = an(an({}, ii), {}, { link: mo(/^!?\[(label)\]\((.*?)\)/).replace("label", ti).getRegex(), reflink: mo(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ti).getRegex() });
var si = an(an({}, ii), {}, { emStrongRDelimAst: Jo, emStrongLDelim: Wo, url: mo(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", oi).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: mo(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", oi).getRegex() });
var ci = an(an({}, si), {}, { br: mo(No).replace("{2,}", "*").getRegex(), text: mo(si.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
var li = { normal: Ro, gfm: Io, pedantic: To };
var fi = { normal: ii, gfm: si, breaks: ci, pedantic: ai };
var pi = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var di = function(e8) {
  return pi[e8];
};
function hi(e8, t2) {
  if (t2) {
    if (go.escapeTest.test(e8)) return e8.replace(go.escapeReplace, di);
  } else if (go.escapeTestNoEncode.test(e8)) return e8.replace(go.escapeReplaceNoEncode, di);
  return e8;
}
function Di(e8) {
  try {
    e8 = encodeURI(e8).replace(go.percentDecode, "%");
  } catch (e9) {
    return null;
  }
  return e8;
}
function vi(e8, t2) {
  var n2, r2 = e8.replace(go.findPipe, function(e9, t3, n3) {
    for (var r3 = false, u3 = t3; --u3 >= 0 && "\\" === n3[u3]; ) r3 = !r3;
    return r3 ? "|" : " |";
  }).split(go.splitPipe), u2 = 0;
  if (r2[0].trim() || r2.shift(), r2.length > 0 && !(null !== (n2 = r2.at(-1)) && void 0 !== n2 && n2.trim()) && r2.pop(), t2) if (r2.length > t2) r2.splice(t2);
  else for (; r2.length < t2; ) r2.push("");
  for (; u2 < r2.length; u2++) r2[u2] = r2[u2].trim().replace(go.slashPipe, "|");
  return r2;
}
function mi(e8, t2, n2) {
  var r2 = e8.length;
  if (0 === r2) return "";
  for (var u2 = 0; u2 < r2 && e8.charAt(r2 - u2 - 1) === t2; ) u2++;
  return e8.slice(0, r2 - u2);
}
function yi(e8, t2, n2, r2, u2) {
  var o2 = t2.href, i2 = t2.title || null, a2 = e8[1].replace(u2.other.outputLinkReplace, "$1");
  r2.state.inLink = true;
  var s2 = { type: "!" === e8[0].charAt(0) ? "image" : "link", raw: n2, href: o2, title: i2, text: a2, tokens: r2.inlineTokens(a2) };
  return r2.state.inLink = false, s2;
}
var gi = tn(function e2(t2) {
  Yt(this, e2), rn(this, "options", void 0), rn(this, "rules", void 0), rn(this, "lexer", void 0), this.options = t2 || ho;
}, [{ key: "space", value: function(e8) {
  var t2 = this.rules.block.newline.exec(e8);
  if (t2 && t2[0].length > 0) return { type: "space", raw: t2[0] };
} }, { key: "code", value: function(e8) {
  var t2 = this.rules.block.code.exec(e8);
  if (t2) {
    var n2 = t2[0].replace(this.rules.other.codeRemoveIndent, "");
    return { type: "code", raw: t2[0], codeBlockStyle: "indented", text: this.options.pedantic ? n2 : mi(n2, "\n") };
  }
} }, { key: "fences", value: function(e8) {
  var t2 = this.rules.block.fences.exec(e8);
  if (t2) {
    var n2 = t2[0], r2 = function(e9, t3, n3) {
      var r3 = e9.match(n3.other.indentCodeCompensation);
      if (null === r3) return t3;
      var u2 = r3[1];
      return t3.split("\n").map(function(e10) {
        var t4 = e10.match(n3.other.beginningSpace);
        return null === t4 ? e10 : pn(t4, 1)[0].length >= u2.length ? e10.slice(u2.length) : e10;
      }).join("\n");
    }(n2, t2[3] || "", this.rules);
    return { type: "code", raw: n2, lang: t2[2] ? t2[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t2[2], text: r2 };
  }
} }, { key: "heading", value: function(e8) {
  var t2 = this.rules.block.heading.exec(e8);
  if (t2) {
    var n2 = t2[2].trim();
    if (this.rules.other.endingHash.test(n2)) {
      var r2 = mi(n2, "#");
      (this.options.pedantic || !r2 || this.rules.other.endingSpaceChar.test(r2)) && (n2 = r2.trim());
    }
    return { type: "heading", raw: t2[0], depth: t2[1].length, text: n2, tokens: this.lexer.inline(n2) };
  }
} }, { key: "hr", value: function(e8) {
  var t2 = this.rules.block.hr.exec(e8);
  if (t2) return { type: "hr", raw: mi(t2[0], "\n") };
} }, { key: "blockquote", value: function(e8) {
  var t2 = this.rules.block.blockquote.exec(e8);
  if (t2) {
    for (var n2 = mi(t2[0], "\n").split("\n"), r2 = "", u2 = "", o2 = []; n2.length > 0; ) {
      var i2 = false, a2 = [], s2 = void 0;
      for (s2 = 0; s2 < n2.length; s2++) if (this.rules.other.blockquoteStart.test(n2[s2])) a2.push(n2[s2]), i2 = true;
      else {
        if (i2) break;
        a2.push(n2[s2]);
      }
      n2 = n2.slice(s2);
      var c2 = a2.join("\n"), l2 = c2.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
      r2 = r2 ? "".concat(r2, "\n").concat(c2) : c2, u2 = u2 ? "".concat(u2, "\n").concat(l2) : l2;
      var f2 = this.lexer.state.top;
      if (this.lexer.state.top = true, this.lexer.blockTokens(l2, o2, true), this.lexer.state.top = f2, 0 === n2.length) break;
      var p2 = o2.at(-1);
      if ("code" === (null == p2 ? void 0 : p2.type)) break;
      if ("blockquote" === (null == p2 ? void 0 : p2.type)) {
        var d2 = p2, h2 = d2.raw + "\n" + n2.join("\n"), D2 = this.blockquote(h2);
        o2[o2.length - 1] = D2, r2 = r2.substring(0, r2.length - d2.raw.length) + D2.raw, u2 = u2.substring(0, u2.length - d2.text.length) + D2.text;
        break;
      }
      if ("list" !== (null == p2 ? void 0 : p2.type)) ;
      else {
        var v2 = p2, m2 = v2.raw + "\n" + n2.join("\n"), y2 = this.list(m2);
        o2[o2.length - 1] = y2, r2 = r2.substring(0, r2.length - p2.raw.length) + y2.raw, u2 = u2.substring(0, u2.length - v2.raw.length) + y2.raw, n2 = m2.substring(o2.at(-1).raw.length).split("\n");
      }
    }
    return { type: "blockquote", raw: r2, tokens: o2, text: u2 };
  }
} }, { key: "list", value: function(e8) {
  var t2 = this, n2 = this.rules.block.list.exec(e8);
  if (n2) {
    var r2 = n2[1].trim(), u2 = r2.length > 1, o2 = { type: "list", raw: "", ordered: u2, start: u2 ? +r2.slice(0, -1) : "", loose: false, items: [] };
    r2 = u2 ? "\\d{1,9}\\".concat(r2.slice(-1)) : "\\".concat(r2), this.options.pedantic && (r2 = u2 ? r2 : "[*+-]");
    for (var i2 = this.rules.other.listItemRegex(r2), a2 = false; e8; ) {
      var s2 = false, c2 = "", l2 = "";
      if (!(n2 = i2.exec(e8)) || this.rules.block.hr.test(e8)) break;
      c2 = n2[0], e8 = e8.substring(c2.length);
      var f2 = n2[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, function(e9) {
        return " ".repeat(3 * e9.length);
      }), p2 = e8.split("\n", 1)[0], d2 = !f2.trim(), h2 = 0;
      if (this.options.pedantic ? (h2 = 2, l2 = f2.trimStart()) : d2 ? h2 = n2[1].length + 1 : (h2 = (h2 = n2[2].search(this.rules.other.nonSpaceChar)) > 4 ? 1 : h2, l2 = f2.slice(h2), h2 += n2[1].length), d2 && this.rules.other.blankLine.test(p2) && (c2 += p2 + "\n", e8 = e8.substring(p2.length + 1), s2 = true), !s2) for (var D2 = this.rules.other.nextBulletRegex(h2), v2 = this.rules.other.hrRegex(h2), m2 = this.rules.other.fencesBeginRegex(h2), y2 = this.rules.other.headingBeginRegex(h2), g2 = this.rules.other.htmlBeginRegex(h2); e8; ) {
        var F2 = e8.split("\n", 1)[0], E2 = void 0;
        if (p2 = F2, E2 = this.options.pedantic ? p2 = p2.replace(this.rules.other.listReplaceNesting, "  ") : p2.replace(this.rules.other.tabCharGlobal, "    "), m2.test(p2) || y2.test(p2) || g2.test(p2) || D2.test(p2) || v2.test(p2)) break;
        if (E2.search(this.rules.other.nonSpaceChar) >= h2 || !p2.trim()) l2 += "\n" + E2.slice(h2);
        else {
          if (d2 || f2.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || m2.test(f2) || y2.test(f2) || v2.test(f2)) break;
          l2 += "\n" + p2;
        }
        !d2 && !p2.trim() && (d2 = true), c2 += F2 + "\n", e8 = e8.substring(F2.length + 1), f2 = E2.slice(h2);
      }
      o2.loose || (a2 ? o2.loose = true : this.rules.other.doubleBlankLine.test(c2) && (a2 = true));
      var _2 = null, C2 = void 0;
      this.options.gfm && (_2 = this.rules.other.listIsTask.exec(l2)) && (C2 = "[ ] " !== _2[0], l2 = l2.replace(this.rules.other.listReplaceTask, "")), o2.items.push({ type: "list_item", raw: c2, task: !!_2, checked: C2, loose: false, text: l2, tokens: [] }), o2.raw += c2;
    }
    var b2 = o2.items.at(-1);
    if (!b2) return;
    b2.raw = b2.raw.trimEnd(), b2.text = b2.text.trimEnd(), o2.raw = o2.raw.trimEnd();
    for (var A2 = 0; A2 < o2.items.length; A2++) if (this.lexer.state.top = false, o2.items[A2].tokens = this.lexer.blockTokens(o2.items[A2].text, []), !o2.loose) {
      var w2 = o2.items[A2].tokens.filter(function(e9) {
        return "space" === e9.type;
      }), S2 = w2.length > 0 && w2.some(function(e9) {
        return t2.rules.other.anyLine.test(e9.raw);
      });
      o2.loose = S2;
    }
    if (o2.loose) for (var k2 = 0; k2 < o2.items.length; k2++) o2.items[k2].loose = true;
    return o2;
  }
} }, { key: "html", value: function(e8) {
  var t2 = this.rules.block.html.exec(e8);
  if (t2) return { type: "html", block: true, raw: t2[0], pre: "pre" === t2[1] || "script" === t2[1] || "style" === t2[1], text: t2[0] };
} }, { key: "def", value: function(e8) {
  var t2 = this.rules.block.def.exec(e8);
  if (t2) {
    var n2 = t2[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r2 = t2[2] ? t2[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", u2 = t2[3] ? t2[3].substring(1, t2[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t2[3];
    return { type: "def", tag: n2, raw: t2[0], href: r2, title: u2 };
  }
} }, { key: "table", value: function(e8) {
  var t2, n2 = this, r2 = this.rules.block.table.exec(e8);
  if (r2 && this.rules.other.tableDelimiter.test(r2[2])) {
    var u2 = vi(r2[1]), o2 = r2[2].replace(this.rules.other.tableAlignChars, "").split("|"), i2 = null !== (t2 = r2[3]) && void 0 !== t2 && t2.trim() ? r2[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a2 = { type: "table", raw: r2[0], header: [], align: [], rows: [] };
    if (u2.length === o2.length) {
      var s2, c2 = nn(o2);
      try {
        for (c2.s(); !(s2 = c2.n()).done; ) {
          var l2 = s2.value;
          this.rules.other.tableAlignRight.test(l2) ? a2.align.push("right") : this.rules.other.tableAlignCenter.test(l2) ? a2.align.push("center") : this.rules.other.tableAlignLeft.test(l2) ? a2.align.push("left") : a2.align.push(null);
        }
      } catch (e9) {
        c2.e(e9);
      } finally {
        c2.f();
      }
      for (var f2 = 0; f2 < u2.length; f2++) a2.header.push({ text: u2[f2], tokens: this.lexer.inline(u2[f2]), header: true, align: a2.align[f2] });
      var p2, d2 = nn(i2);
      try {
        for (d2.s(); !(p2 = d2.n()).done; ) {
          var h2 = p2.value;
          a2.rows.push(vi(h2, a2.header.length).map(function(e9, t3) {
            return { text: e9, tokens: n2.lexer.inline(e9), header: false, align: a2.align[t3] };
          }));
        }
      } catch (e9) {
        d2.e(e9);
      } finally {
        d2.f();
      }
      return a2;
    }
  }
} }, { key: "lheading", value: function(e8) {
  var t2 = this.rules.block.lheading.exec(e8);
  if (t2) return { type: "heading", raw: t2[0], depth: "=" === t2[2].charAt(0) ? 1 : 2, text: t2[1], tokens: this.lexer.inline(t2[1]) };
} }, { key: "paragraph", value: function(e8) {
  var t2 = this.rules.block.paragraph.exec(e8);
  if (t2) {
    var n2 = "\n" === t2[1].charAt(t2[1].length - 1) ? t2[1].slice(0, -1) : t2[1];
    return { type: "paragraph", raw: t2[0], text: n2, tokens: this.lexer.inline(n2) };
  }
} }, { key: "text", value: function(e8) {
  var t2 = this.rules.block.text.exec(e8);
  if (t2) return { type: "text", raw: t2[0], text: t2[0], tokens: this.lexer.inline(t2[0]) };
} }, { key: "escape", value: function(e8) {
  var t2 = this.rules.inline.escape.exec(e8);
  if (t2) return { type: "escape", raw: t2[0], text: t2[1] };
} }, { key: "tag", value: function(e8) {
  var t2 = this.rules.inline.tag.exec(e8);
  if (t2) return !this.lexer.state.inLink && this.rules.other.startATag.test(t2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t2[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t2[0] };
} }, { key: "link", value: function(e8) {
  var t2 = this.rules.inline.link.exec(e8);
  if (t2) {
    var n2 = t2[2].trim();
    if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n2)) {
      if (!this.rules.other.endAngleBracket.test(n2)) return;
      var r2 = mi(n2.slice(0, -1), "\\");
      if ((n2.length - r2.length) % 2 == 0) return;
    } else {
      var u2 = function(e9, t3) {
        if (-1 === e9.indexOf(t3[1])) return -1;
        for (var n3 = 0, r3 = 0; r3 < e9.length; r3++) if ("\\" === e9[r3]) r3++;
        else if (e9[r3] === t3[0]) n3++;
        else if (e9[r3] === t3[1] && --n3 < 0) return r3;
        return n3 > 0 ? -2 : -1;
      }(t2[2], "()");
      if (-2 === u2) return;
      if (u2 > -1) {
        var o2 = (0 === t2[0].indexOf("!") ? 5 : 4) + t2[1].length + u2;
        t2[2] = t2[2].substring(0, u2), t2[0] = t2[0].substring(0, o2).trim(), t2[3] = "";
      }
    }
    var i2 = t2[2], a2 = "";
    if (this.options.pedantic) {
      var s2 = this.rules.other.pedanticHrefTitle.exec(i2);
      s2 && (i2 = s2[1], a2 = s2[3]);
    } else a2 = t2[3] ? t2[3].slice(1, -1) : "";
    return i2 = i2.trim(), this.rules.other.startAngleBracket.test(i2) && (i2 = this.options.pedantic && !this.rules.other.endAngleBracket.test(n2) ? i2.slice(1) : i2.slice(1, -1)), yi(t2, { href: i2 && i2.replace(this.rules.inline.anyPunctuation, "$1"), title: a2 && a2.replace(this.rules.inline.anyPunctuation, "$1") }, t2[0], this.lexer, this.rules);
  }
} }, { key: "reflink", value: function(e8, t2) {
  var n2;
  if ((n2 = this.rules.inline.reflink.exec(e8)) || (n2 = this.rules.inline.nolink.exec(e8))) {
    var r2 = t2[(n2[2] || n2[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
    if (!r2) {
      var u2 = n2[0].charAt(0);
      return { type: "text", raw: u2, text: u2 };
    }
    return yi(n2, r2, n2[0], this.lexer, this.rules);
  }
} }, { key: "emStrong", value: function(e8, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", r2 = this.rules.inline.emStrongLDelim.exec(e8);
  if (!(!r2 || r2[3] && n2.match(this.rules.other.unicodeAlphaNumeric)) && (!r2[1] && !r2[2] || !n2 || this.rules.inline.punctuation.exec(n2))) {
    var u2, o2, i2 = dn(r2[0]).length - 1, a2 = i2, s2 = 0, c2 = "*" === r2[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
    for (c2.lastIndex = 0, t2 = t2.slice(-1 * e8.length + i2); null != (r2 = c2.exec(t2)); ) if (u2 = r2[1] || r2[2] || r2[3] || r2[4] || r2[5] || r2[6]) if (o2 = dn(u2).length, r2[3] || r2[4]) a2 += o2;
    else if (!((r2[5] || r2[6]) && i2 % 3) || (i2 + o2) % 3) {
      if (!((a2 -= o2) > 0)) {
        o2 = Math.min(o2, o2 + a2 + s2);
        var l2 = dn(r2[0])[0].length, f2 = e8.slice(0, i2 + r2.index + l2 + o2);
        if (Math.min(i2, o2) % 2) {
          var p2 = f2.slice(1, -1);
          return { type: "em", raw: f2, text: p2, tokens: this.lexer.inlineTokens(p2) };
        }
        var d2 = f2.slice(2, -2);
        return { type: "strong", raw: f2, text: d2, tokens: this.lexer.inlineTokens(d2) };
      }
    } else s2 += o2;
  }
} }, { key: "codespan", value: function(e8) {
  var t2 = this.rules.inline.code.exec(e8);
  if (t2) {
    var n2 = t2[2].replace(this.rules.other.newLineCharGlobal, " "), r2 = this.rules.other.nonSpaceChar.test(n2), u2 = this.rules.other.startingSpaceChar.test(n2) && this.rules.other.endingSpaceChar.test(n2);
    return r2 && u2 && (n2 = n2.substring(1, n2.length - 1)), { type: "codespan", raw: t2[0], text: n2 };
  }
} }, { key: "br", value: function(e8) {
  var t2 = this.rules.inline.br.exec(e8);
  if (t2) return { type: "br", raw: t2[0] };
} }, { key: "del", value: function(e8) {
  var t2 = this.rules.inline.del.exec(e8);
  if (t2) return { type: "del", raw: t2[0], text: t2[2], tokens: this.lexer.inlineTokens(t2[2]) };
} }, { key: "autolink", value: function(e8) {
  var t2, n2, r2 = this.rules.inline.autolink.exec(e8);
  if (r2) return n2 = "@" === r2[2] ? "mailto:" + (t2 = r2[1]) : t2 = r2[1], { type: "link", raw: r2[0], text: t2, href: n2, tokens: [{ type: "text", raw: t2, text: t2 }] };
} }, { key: "url", value: function(e8) {
  var t2;
  if (t2 = this.rules.inline.url.exec(e8)) {
    var n2, r2;
    if ("@" === t2[2]) r2 = "mailto:" + (n2 = t2[0]);
    else {
      var u2;
      do {
        var o2, i2;
        u2 = t2[0], t2[0] = null !== (o2 = null === (i2 = this.rules.inline._backpedal.exec(t2[0])) || void 0 === i2 ? void 0 : i2[0]) && void 0 !== o2 ? o2 : "";
      } while (u2 !== t2[0]);
      n2 = t2[0], r2 = "www." === t2[1] ? "http://" + t2[0] : t2[0];
    }
    return { type: "link", raw: t2[0], text: n2, href: r2, tokens: [{ type: "text", raw: n2, text: n2 }] };
  }
} }, { key: "inlineText", value: function(e8) {
  var t2 = this.rules.inline.text.exec(e8);
  if (t2) {
    var n2 = this.lexer.state.inRawBlock;
    return { type: "text", raw: t2[0], text: t2[0], escaped: n2 };
  }
} }]);
var Fi = function() {
  function e8(t2) {
    Yt(this, e8), rn(this, "tokens", void 0), rn(this, "options", void 0), rn(this, "state", void 0), rn(this, "tokenizer", void 0), rn(this, "inlineQueue", void 0), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t2 || ho, this.options.tokenizer = this.options.tokenizer || new gi(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    var n2 = { other: go, block: li.normal, inline: fi.normal };
    this.options.pedantic ? (n2.block = li.pedantic, n2.inline = fi.pedantic) : this.options.gfm && (n2.block = li.gfm, this.options.breaks ? n2.inline = fi.breaks : n2.inline = fi.gfm), this.tokenizer.rules = n2;
  }
  return tn(e8, [{ key: "lex", value: function(e9) {
    e9 = e9.replace(go.carriageReturn, "\n"), this.blockTokens(e9, this.tokens);
    for (var t2 = 0; t2 < this.inlineQueue.length; t2++) {
      var n2 = this.inlineQueue[t2];
      this.inlineTokens(n2.src, n2.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  } }, { key: "blockTokens", value: function(e9) {
    var t2, n2 = this, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], u2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o2 = function() {
      var t3, o3, i2;
      if (null !== (t3 = n2.options.extensions) && void 0 !== t3 && null !== (t3 = t3.block) && void 0 !== t3 && t3.some(function(t4) {
        return !!(i2 = t4.call({ lexer: n2 }, e9, r2)) && (e9 = e9.substring(i2.raw.length), r2.push(i2), true);
      })) return 0;
      if (i2 = n2.tokenizer.space(e9)) {
        e9 = e9.substring(i2.raw.length);
        var a2 = r2.at(-1);
        return 1 === i2.raw.length && void 0 !== a2 ? a2.raw += "\n" : r2.push(i2), 0;
      }
      if (i2 = n2.tokenizer.code(e9)) {
        e9 = e9.substring(i2.raw.length);
        var s2 = r2.at(-1);
        return "paragraph" === (null == s2 ? void 0 : s2.type) || "text" === (null == s2 ? void 0 : s2.type) ? (s2.raw += (s2.raw.endsWith("\n") ? "" : "\n") + i2.raw, s2.text += "\n" + i2.text, n2.inlineQueue.at(-1).src = s2.text) : r2.push(i2), 0;
      }
      if (i2 = n2.tokenizer.fences(e9)) return e9 = e9.substring(i2.raw.length), r2.push(i2), 0;
      if (i2 = n2.tokenizer.heading(e9)) return e9 = e9.substring(i2.raw.length), r2.push(i2), 0;
      if (i2 = n2.tokenizer.hr(e9)) return e9 = e9.substring(i2.raw.length), r2.push(i2), 0;
      if (i2 = n2.tokenizer.blockquote(e9)) return e9 = e9.substring(i2.raw.length), r2.push(i2), 0;
      if (i2 = n2.tokenizer.list(e9)) return e9 = e9.substring(i2.raw.length), r2.push(i2), 0;
      if (i2 = n2.tokenizer.html(e9)) return e9 = e9.substring(i2.raw.length), r2.push(i2), 0;
      if (i2 = n2.tokenizer.def(e9)) {
        e9 = e9.substring(i2.raw.length);
        var c2 = r2.at(-1);
        return "paragraph" === (null == c2 ? void 0 : c2.type) || "text" === (null == c2 ? void 0 : c2.type) ? (c2.raw += (c2.raw.endsWith("\n") ? "" : "\n") + i2.raw, c2.text += "\n" + i2.raw, n2.inlineQueue.at(-1).src = c2.text) : n2.tokens.links[i2.tag] || (n2.tokens.links[i2.tag] = { href: i2.href, title: i2.title }, r2.push(i2)), 0;
      }
      if (i2 = n2.tokenizer.table(e9)) return e9 = e9.substring(i2.raw.length), r2.push(i2), 0;
      if (i2 = n2.tokenizer.lheading(e9)) return e9 = e9.substring(i2.raw.length), r2.push(i2), 0;
      var l2 = e9;
      if (null !== (o3 = n2.options.extensions) && void 0 !== o3 && o3.startBlock) {
        var f2, p2 = 1 / 0, d2 = e9.slice(1);
        n2.options.extensions.startBlock.forEach(function(e10) {
          "number" == typeof (f2 = e10.call({ lexer: n2 }, d2)) && f2 >= 0 && (p2 = Math.min(p2, f2));
        }), p2 < 1 / 0 && p2 >= 0 && (l2 = e9.substring(0, p2 + 1));
      }
      if (n2.state.top && (i2 = n2.tokenizer.paragraph(l2))) {
        var h2 = r2.at(-1);
        return u2 && "paragraph" === (null == h2 ? void 0 : h2.type) ? (h2.raw += (h2.raw.endsWith("\n") ? "" : "\n") + i2.raw, h2.text += "\n" + i2.text, n2.inlineQueue.pop(), n2.inlineQueue.at(-1).src = h2.text) : r2.push(i2), u2 = l2.length !== e9.length, e9 = e9.substring(i2.raw.length), 0;
      }
      if (i2 = n2.tokenizer.text(e9)) {
        e9 = e9.substring(i2.raw.length);
        var D2 = r2.at(-1);
        return "text" === (null == D2 ? void 0 : D2.type) ? (D2.raw += (D2.raw.endsWith("\n") ? "" : "\n") + i2.raw, D2.text += "\n" + i2.text, n2.inlineQueue.pop(), n2.inlineQueue.at(-1).src = D2.text) : r2.push(i2), 0;
      }
      if (e9) {
        var v2 = "Infinite loop on byte: " + e9.charCodeAt(0);
        if (n2.options.silent) return console.error(v2), 1;
        throw new Error(v2);
      }
    };
    for (this.options.pedantic && (e9 = e9.replace(go.tabCharGlobal, "    ").replace(go.spaceLine, "")); e9 && (0 === (t2 = o2()) || 1 !== t2); ) ;
    return this.state.top = true, r2;
  } }, { key: "inline", value: function(e9) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return this.inlineQueue.push({ src: e9, tokens: t2 }), t2;
  } }, { key: "inlineTokens", value: function(e9) {
    var t2, n2, r2, u2 = this, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i2 = e9, a2 = null;
    if (this.tokens.links) {
      var s2 = Object.keys(this.tokens.links);
      if (s2.length > 0) for (; null != (a2 = this.tokenizer.rules.inline.reflinkSearch.exec(i2)); ) s2.includes(a2[0].slice(a2[0].lastIndexOf("[") + 1, -1)) && (i2 = i2.slice(0, a2.index) + "[" + "a".repeat(a2[0].length - 2) + "]" + i2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; null != (a2 = this.tokenizer.rules.inline.anyPunctuation.exec(i2)); ) i2 = i2.slice(0, a2.index) + "++" + i2.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; null != (a2 = this.tokenizer.rules.inline.blockSkip.exec(i2)); ) r2 = a2[2] ? a2[2].length : 0, i2 = i2.slice(0, a2.index + r2) + "[" + "a".repeat(a2[0].length - r2 - 2) + "]" + i2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    i2 = null !== (t2 = null === (n2 = this.options.hooks) || void 0 === n2 || null === (n2 = n2.emStrongMask) || void 0 === n2 ? void 0 : n2.call({ lexer: this }, i2)) && void 0 !== t2 ? t2 : i2;
    for (var c2, l2 = false, f2 = "", p2 = function() {
      var t3, n3, r3;
      if (l2 || (f2 = ""), l2 = false, null !== (t3 = u2.options.extensions) && void 0 !== t3 && null !== (t3 = t3.inline) && void 0 !== t3 && t3.some(function(t4) {
        return !!(r3 = t4.call({ lexer: u2 }, e9, o2)) && (e9 = e9.substring(r3.raw.length), o2.push(r3), true);
      })) return 0;
      if (r3 = u2.tokenizer.escape(e9)) return e9 = e9.substring(r3.raw.length), o2.push(r3), 0;
      if (r3 = u2.tokenizer.tag(e9)) return e9 = e9.substring(r3.raw.length), o2.push(r3), 0;
      if (r3 = u2.tokenizer.link(e9)) return e9 = e9.substring(r3.raw.length), o2.push(r3), 0;
      if (r3 = u2.tokenizer.reflink(e9, u2.tokens.links)) {
        e9 = e9.substring(r3.raw.length);
        var a3 = o2.at(-1);
        return "text" === r3.type && "text" === (null == a3 ? void 0 : a3.type) ? (a3.raw += r3.raw, a3.text += r3.text) : o2.push(r3), 0;
      }
      if (r3 = u2.tokenizer.emStrong(e9, i2, f2)) return e9 = e9.substring(r3.raw.length), o2.push(r3), 0;
      if (r3 = u2.tokenizer.codespan(e9)) return e9 = e9.substring(r3.raw.length), o2.push(r3), 0;
      if (r3 = u2.tokenizer.br(e9)) return e9 = e9.substring(r3.raw.length), o2.push(r3), 0;
      if (r3 = u2.tokenizer.del(e9)) return e9 = e9.substring(r3.raw.length), o2.push(r3), 0;
      if (r3 = u2.tokenizer.autolink(e9)) return e9 = e9.substring(r3.raw.length), o2.push(r3), 0;
      if (!u2.state.inLink && (r3 = u2.tokenizer.url(e9))) return e9 = e9.substring(r3.raw.length), o2.push(r3), 0;
      var s3 = e9;
      if (null !== (n3 = u2.options.extensions) && void 0 !== n3 && n3.startInline) {
        var c3, p3 = 1 / 0, d2 = e9.slice(1);
        u2.options.extensions.startInline.forEach(function(e10) {
          "number" == typeof (c3 = e10.call({ lexer: u2 }, d2)) && c3 >= 0 && (p3 = Math.min(p3, c3));
        }), p3 < 1 / 0 && p3 >= 0 && (s3 = e9.substring(0, p3 + 1));
      }
      if (r3 = u2.tokenizer.inlineText(s3)) {
        e9 = e9.substring(r3.raw.length), "_" !== r3.raw.slice(-1) && (f2 = r3.raw.slice(-1)), l2 = true;
        var h2 = o2.at(-1);
        return "text" === (null == h2 ? void 0 : h2.type) ? (h2.raw += r3.raw, h2.text += r3.text) : o2.push(r3), 0;
      }
      if (e9) {
        var D2 = "Infinite loop on byte: " + e9.charCodeAt(0);
        if (u2.options.silent) return console.error(D2), 1;
        throw new Error(D2);
      }
    }; e9 && (0 === (c2 = p2()) || 1 !== c2); ) ;
    return o2;
  } }], [{ key: "rules", get: function() {
    return { block: li, inline: fi };
  } }, { key: "lex", value: function(t2, n2) {
    return new e8(n2).lex(t2);
  } }, { key: "lexInline", value: function(t2, n2) {
    return new e8(n2).inlineTokens(t2);
  } }]);
}();
var Ei = tn(function e3(t2) {
  Yt(this, e3), rn(this, "options", void 0), rn(this, "parser", void 0), this.options = t2 || ho;
}, [{ key: "space", value: function(e8) {
  return "";
} }, { key: "code", value: function(e8) {
  var t2, n2 = e8.text, r2 = e8.lang, u2 = e8.escaped, o2 = null === (t2 = (r2 || "").match(go.notSpaceStart)) || void 0 === t2 ? void 0 : t2[0], i2 = n2.replace(go.endingNewline, "") + "\n";
  return o2 ? '<pre><code class="language-' + hi(o2) + '">' + (u2 ? i2 : hi(i2, true)) + "</code></pre>\n" : "<pre><code>" + (u2 ? i2 : hi(i2, true)) + "</code></pre>\n";
} }, { key: "blockquote", value: function(e8) {
  var t2 = e8.tokens;
  return "<blockquote>\n".concat(this.parser.parse(t2), "</blockquote>\n");
} }, { key: "html", value: function(e8) {
  return e8.text;
} }, { key: "def", value: function(e8) {
  return "";
} }, { key: "heading", value: function(e8) {
  var t2 = e8.tokens, n2 = e8.depth;
  return "<h".concat(n2, ">").concat(this.parser.parseInline(t2), "</h").concat(n2, ">\n");
} }, { key: "hr", value: function(e8) {
  return "<hr>\n";
} }, { key: "list", value: function(e8) {
  for (var t2 = e8.ordered, n2 = e8.start, r2 = "", u2 = 0; u2 < e8.items.length; u2++) {
    var o2 = e8.items[u2];
    r2 += this.listitem(o2);
  }
  var i2 = t2 ? "ol" : "ul";
  return "<" + i2 + (t2 && 1 !== n2 ? ' start="' + n2 + '"' : "") + ">\n" + r2 + "</" + i2 + ">\n";
} }, { key: "listitem", value: function(e8) {
  var t2 = "";
  if (e8.task) {
    var n2, r2 = this.checkbox({ checked: !!e8.checked });
    e8.loose ? "paragraph" === (null === (n2 = e8.tokens[0]) || void 0 === n2 ? void 0 : n2.type) ? (e8.tokens[0].text = r2 + " " + e8.tokens[0].text, e8.tokens[0].tokens && e8.tokens[0].tokens.length > 0 && "text" === e8.tokens[0].tokens[0].type && (e8.tokens[0].tokens[0].text = r2 + " " + hi(e8.tokens[0].tokens[0].text), e8.tokens[0].tokens[0].escaped = true)) : e8.tokens.unshift({ type: "text", raw: r2 + " ", text: r2 + " ", escaped: true }) : t2 += r2 + " ";
  }
  return t2 += this.parser.parse(e8.tokens, !!e8.loose), "<li>".concat(t2, "</li>\n");
} }, { key: "checkbox", value: function(e8) {
  return "<input " + (e8.checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
} }, { key: "paragraph", value: function(e8) {
  var t2 = e8.tokens;
  return "<p>".concat(this.parser.parseInline(t2), "</p>\n");
} }, { key: "table", value: function(e8) {
  for (var t2 = "", n2 = "", r2 = 0; r2 < e8.header.length; r2++) n2 += this.tablecell(e8.header[r2]);
  t2 += this.tablerow({ text: n2 });
  for (var u2 = "", o2 = 0; o2 < e8.rows.length; o2++) {
    var i2 = e8.rows[o2];
    n2 = "";
    for (var a2 = 0; a2 < i2.length; a2++) n2 += this.tablecell(i2[a2]);
    u2 += this.tablerow({ text: n2 });
  }
  return u2 && (u2 = "<tbody>".concat(u2, "</tbody>")), "<table>\n<thead>\n" + t2 + "</thead>\n" + u2 + "</table>\n";
} }, { key: "tablerow", value: function(e8) {
  var t2 = e8.text;
  return "<tr>\n".concat(t2, "</tr>\n");
} }, { key: "tablecell", value: function(e8) {
  var t2 = this.parser.parseInline(e8.tokens), n2 = e8.header ? "th" : "td";
  return (e8.align ? "<".concat(n2, ' align="').concat(e8.align, '">') : "<".concat(n2, ">")) + t2 + "</".concat(n2, ">\n");
} }, { key: "strong", value: function(e8) {
  var t2 = e8.tokens;
  return "<strong>".concat(this.parser.parseInline(t2), "</strong>");
} }, { key: "em", value: function(e8) {
  var t2 = e8.tokens;
  return "<em>".concat(this.parser.parseInline(t2), "</em>");
} }, { key: "codespan", value: function(e8) {
  var t2 = e8.text;
  return "<code>".concat(hi(t2, true), "</code>");
} }, { key: "br", value: function(e8) {
  return "<br>";
} }, { key: "del", value: function(e8) {
  var t2 = e8.tokens;
  return "<del>".concat(this.parser.parseInline(t2), "</del>");
} }, { key: "link", value: function(e8) {
  var t2 = e8.href, n2 = e8.title, r2 = e8.tokens, u2 = this.parser.parseInline(r2), o2 = Di(t2);
  if (null === o2) return u2;
  var i2 = '<a href="' + (t2 = o2) + '"';
  return n2 && (i2 += ' title="' + hi(n2) + '"'), i2 + ">" + u2 + "</a>";
} }, { key: "image", value: function(e8) {
  var t2 = e8.href, n2 = e8.title, r2 = e8.text, u2 = e8.tokens;
  u2 && (r2 = this.parser.parseInline(u2, this.parser.textRenderer));
  var o2 = Di(t2);
  if (null === o2) return hi(r2);
  var i2 = '<img src="'.concat(t2 = o2, '" alt="').concat(r2, '"');
  return n2 && (i2 += ' title="'.concat(hi(n2), '"')), i2 + ">";
} }, { key: "text", value: function(e8) {
  return "tokens" in e8 && e8.tokens ? this.parser.parseInline(e8.tokens) : "escaped" in e8 && e8.escaped ? e8.text : hi(e8.text);
} }]);
var _i = tn(function e4() {
  Yt(this, e4);
}, [{ key: "strong", value: function(e8) {
  return e8.text;
} }, { key: "em", value: function(e8) {
  return e8.text;
} }, { key: "codespan", value: function(e8) {
  return e8.text;
} }, { key: "del", value: function(e8) {
  return e8.text;
} }, { key: "html", value: function(e8) {
  return e8.text;
} }, { key: "text", value: function(e8) {
  return e8.text;
} }, { key: "link", value: function(e8) {
  return "" + e8.text;
} }, { key: "image", value: function(e8) {
  return "" + e8.text;
} }, { key: "br", value: function() {
  return "";
} }]);
var Ci = function() {
  function e8(t2) {
    Yt(this, e8), rn(this, "options", void 0), rn(this, "renderer", void 0), rn(this, "textRenderer", void 0), this.options = t2 || ho, this.options.renderer = this.options.renderer || new Ei(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _i();
  }
  return tn(e8, [{ key: "parse", value: function(e9) {
    for (var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n2 = "", r2 = 0; r2 < e9.length; r2++) {
      var u2, o2 = e9[r2];
      if (null !== (u2 = this.options.extensions) && void 0 !== u2 && null !== (u2 = u2.renderers) && void 0 !== u2 && u2[o2.type]) {
        var i2 = o2, a2 = this.options.extensions.renderers[i2.type].call({ parser: this }, i2);
        if (false !== a2 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(i2.type)) {
          n2 += a2 || "";
          continue;
        }
      }
      var s2 = o2;
      switch (s2.type) {
        case "space":
          n2 += this.renderer.space(s2);
          continue;
        case "hr":
          n2 += this.renderer.hr(s2);
          continue;
        case "heading":
          n2 += this.renderer.heading(s2);
          continue;
        case "code":
          n2 += this.renderer.code(s2);
          continue;
        case "table":
          n2 += this.renderer.table(s2);
          continue;
        case "blockquote":
          n2 += this.renderer.blockquote(s2);
          continue;
        case "list":
          n2 += this.renderer.list(s2);
          continue;
        case "html":
          n2 += this.renderer.html(s2);
          continue;
        case "def":
          n2 += this.renderer.def(s2);
          continue;
        case "paragraph":
          n2 += this.renderer.paragraph(s2);
          continue;
        case "text":
          for (var c2 = s2, l2 = this.renderer.text(c2); r2 + 1 < e9.length && "text" === e9[r2 + 1].type; ) c2 = e9[++r2], l2 += "\n" + this.renderer.text(c2);
          n2 += t2 ? this.renderer.paragraph({ type: "paragraph", raw: l2, text: l2, tokens: [{ type: "text", raw: l2, text: l2, escaped: true }] }) : l2;
          continue;
        default:
          var f2 = 'Token with "' + s2.type + '" type was not found.';
          if (this.options.silent) return console.error(f2), "";
          throw new Error(f2);
      }
    }
    return n2;
  } }, { key: "parseInline", value: function(e9) {
    for (var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.renderer, n2 = "", r2 = 0; r2 < e9.length; r2++) {
      var u2, o2 = e9[r2];
      if (null !== (u2 = this.options.extensions) && void 0 !== u2 && null !== (u2 = u2.renderers) && void 0 !== u2 && u2[o2.type]) {
        var i2 = this.options.extensions.renderers[o2.type].call({ parser: this }, o2);
        if (false !== i2 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o2.type)) {
          n2 += i2 || "";
          continue;
        }
      }
      var a2 = o2;
      switch (a2.type) {
        case "escape":
        case "text":
          n2 += t2.text(a2);
          break;
        case "html":
          n2 += t2.html(a2);
          break;
        case "link":
          n2 += t2.link(a2);
          break;
        case "image":
          n2 += t2.image(a2);
          break;
        case "strong":
          n2 += t2.strong(a2);
          break;
        case "em":
          n2 += t2.em(a2);
          break;
        case "codespan":
          n2 += t2.codespan(a2);
          break;
        case "br":
          n2 += t2.br(a2);
          break;
        case "del":
          n2 += t2.del(a2);
          break;
        default:
          var s2 = 'Token with "' + a2.type + '" type was not found.';
          if (this.options.silent) return console.error(s2), "";
          throw new Error(s2);
      }
    }
    return n2;
  } }], [{ key: "parse", value: function(t2, n2) {
    return new e8(n2).parse(t2);
  } }, { key: "parseInline", value: function(t2, n2) {
    return new e8(n2).parseInline(t2);
  } }]);
}();
var bi = (to = tn(function e5(t2) {
  Yt(this, e5), rn(this, "options", void 0), rn(this, "block", void 0), this.options = t2 || ho;
}, [{ key: "preprocess", value: function(e8) {
  return e8;
} }, { key: "postprocess", value: function(e8) {
  return e8;
} }, { key: "processAllTokens", value: function(e8) {
  return e8;
} }, { key: "emStrongMask", value: function(e8) {
  return e8;
} }, { key: "provideLexer", value: function() {
  return this.block ? Fi.lex : Fi.lexInline;
} }, { key: "provideParser", value: function() {
  return this.block ? Ci.parse : Ci.parseInline;
} }]), rn(to, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), rn(to, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), to);
var Ai = tn(function e6() {
  Yt(this, e6), rn(this, "defaults", { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null }), rn(this, "options", this.setOptions), rn(this, "parse", this.parseMarkdown(true)), rn(this, "parseInline", this.parseMarkdown(false)), rn(this, "Parser", Ci), rn(this, "Renderer", Ei), rn(this, "TextRenderer", _i), rn(this, "Lexer", Fi), rn(this, "Tokenizer", gi), rn(this, "Hooks", bi), this.use.apply(this, arguments);
}, [{ key: "walkTokens", value: function(e8, t2) {
  var n2, r2 = this, u2 = [], o2 = nn(e8);
  try {
    var i2 = function() {
      var e9 = n2.value;
      switch (u2 = u2.concat(t2.call(r2, e9)), e9.type) {
        case "table":
          var o3, i3 = e9, a2 = nn(i3.header);
          try {
            for (a2.s(); !(o3 = a2.n()).done; ) {
              var s2 = o3.value;
              u2 = u2.concat(r2.walkTokens(s2.tokens, t2));
            }
          } catch (e10) {
            a2.e(e10);
          } finally {
            a2.f();
          }
          var c2, l2 = nn(i3.rows);
          try {
            for (l2.s(); !(c2 = l2.n()).done; ) {
              var f2, p2 = nn(c2.value);
              try {
                for (p2.s(); !(f2 = p2.n()).done; ) {
                  var d2 = f2.value;
                  u2 = u2.concat(r2.walkTokens(d2.tokens, t2));
                }
              } catch (e10) {
                p2.e(e10);
              } finally {
                p2.f();
              }
            }
          } catch (e10) {
            l2.e(e10);
          } finally {
            l2.f();
          }
          break;
        case "list":
          var h2 = e9;
          u2 = u2.concat(r2.walkTokens(h2.items, t2));
          break;
        default:
          var D2, v2 = e9;
          null !== (D2 = r2.defaults.extensions) && void 0 !== D2 && null !== (D2 = D2.childTokens) && void 0 !== D2 && D2[v2.type] ? r2.defaults.extensions.childTokens[v2.type].forEach(function(e10) {
            var n3 = v2[e10].flat(1 / 0);
            u2 = u2.concat(r2.walkTokens(n3, t2));
          }) : v2.tokens && (u2 = u2.concat(r2.walkTokens(v2.tokens, t2)));
      }
    };
    for (o2.s(); !(n2 = o2.n()).done; ) i2();
  } catch (e9) {
    o2.e(e9);
  } finally {
    o2.f();
  }
  return u2;
} }, { key: "use", value: function() {
  for (var e8 = this, t2 = this.defaults.extensions || { renderers: {}, childTokens: {} }, n2 = arguments.length, r2 = new Array(n2), u2 = 0; u2 < n2; u2++) r2[u2] = arguments[u2];
  return r2.forEach(function(n3) {
    var r3 = an({}, n3);
    if (r3.async = e8.defaults.async || r3.async || false, n3.extensions && (n3.extensions.forEach(function(e9) {
      if (!e9.name) throw new Error("extension name required");
      if ("renderer" in e9) {
        var n4 = t2.renderers[e9.name];
        t2.renderers[e9.name] = n4 ? function() {
          for (var t3 = arguments.length, r5 = new Array(t3), u4 = 0; u4 < t3; u4++) r5[u4] = arguments[u4];
          var o3 = e9.renderer.apply(this, r5);
          return false === o3 && (o3 = n4.apply(this, r5)), o3;
        } : e9.renderer;
      }
      if ("tokenizer" in e9) {
        if (!e9.level || "block" !== e9.level && "inline" !== e9.level) throw new Error("extension level must be 'block' or 'inline'");
        var r4 = t2[e9.level];
        r4 ? r4.unshift(e9.tokenizer) : t2[e9.level] = [e9.tokenizer], e9.start && ("block" === e9.level ? t2.startBlock ? t2.startBlock.push(e9.start) : t2.startBlock = [e9.start] : "inline" === e9.level && (t2.startInline ? t2.startInline.push(e9.start) : t2.startInline = [e9.start]));
      }
      "childTokens" in e9 && e9.childTokens && (t2.childTokens[e9.name] = e9.childTokens);
    }), r3.extensions = t2), n3.renderer) {
      var u3 = e8.defaults.renderer || new Ei(e8.defaults), o2 = function() {
        if (!(i2 in u3)) throw new Error("renderer '".concat(i2, "' does not exist"));
        if (["options", "parser"].includes(i2)) return 1;
        var e9 = i2, t3 = n3.renderer[e9], r4 = u3[e9];
        u3[e9] = function() {
          for (var e10 = arguments.length, n4 = new Array(e10), o3 = 0; o3 < e10; o3++) n4[o3] = arguments[o3];
          var i3 = t3.apply(u3, n4);
          return false === i3 && (i3 = r4.apply(u3, n4)), i3 || "";
        };
      };
      for (var i2 in n3.renderer) o2();
      r3.renderer = u3;
    }
    if (n3.tokenizer) {
      var a2 = e8.defaults.tokenizer || new gi(e8.defaults), s2 = function() {
        if (!(c2 in a2)) throw new Error("tokenizer '".concat(c2, "' does not exist"));
        if (["options", "rules", "lexer"].includes(c2)) return 1;
        var e9 = c2, t3 = n3.tokenizer[e9], r4 = a2[e9];
        a2[e9] = function() {
          for (var e10 = arguments.length, n4 = new Array(e10), u4 = 0; u4 < e10; u4++) n4[u4] = arguments[u4];
          var o3 = t3.apply(a2, n4);
          return false === o3 && (o3 = r4.apply(a2, n4)), o3;
        };
      };
      for (var c2 in n3.tokenizer) s2();
      r3.tokenizer = a2;
    }
    if (n3.hooks) {
      var l2 = e8.defaults.hooks || new bi(), f2 = function(t3) {
        if (!(t3 in l2)) throw new Error("hook '".concat(t3, "' does not exist"));
        if (["options", "block"].includes(t3)) return 1;
        var r4 = t3, u4 = n3.hooks[r4], o3 = l2[r4];
        bi.passThroughHooks.has(t3) ? l2[r4] = function(n4) {
          if (e8.defaults.async && bi.passThroughHooksRespectAsync.has(t3)) return Xt(cn().m(function e9() {
            var t4;
            return cn().w(function(e10) {
              for (; ; ) switch (e10.n) {
                case 0:
                  return e10.n = 1, u4.call(l2, n4);
                case 1:
                  return t4 = e10.v, e10.a(2, o3.call(l2, t4));
              }
            }, e9);
          }))();
          var r5 = u4.call(l2, n4);
          return o3.call(l2, r5);
        } : l2[r4] = function() {
          for (var t4 = arguments.length, n4 = new Array(t4), r5 = 0; r5 < t4; r5++) n4[r5] = arguments[r5];
          if (e8.defaults.async) return Xt(cn().m(function e9() {
            var t5;
            return cn().w(function(e10) {
              for (; ; ) switch (e10.n) {
                case 0:
                  return e10.n = 1, u4.apply(l2, n4);
                case 1:
                  if (false !== (t5 = e10.v)) {
                    e10.n = 3;
                    break;
                  }
                  return e10.n = 2, o3.apply(l2, n4);
                case 2:
                  t5 = e10.v;
                case 3:
                  return e10.a(2, t5);
              }
            }, e9);
          }))();
          var i3 = u4.apply(l2, n4);
          return false === i3 && (i3 = o3.apply(l2, n4)), i3;
        };
      };
      for (var p2 in n3.hooks) f2(p2);
      r3.hooks = l2;
    }
    if (n3.walkTokens) {
      var d2 = e8.defaults.walkTokens, h2 = n3.walkTokens;
      r3.walkTokens = function(e9) {
        var t3 = [];
        return t3.push(h2.call(this, e9)), d2 && (t3 = t3.concat(d2.call(this, e9))), t3;
      };
    }
    e8.defaults = an(an({}, e8.defaults), r3);
  }), this;
} }, { key: "setOptions", value: function(e8) {
  return this.defaults = an(an({}, this.defaults), e8), this;
} }, { key: "lexer", value: function(e8, t2) {
  return Fi.lex(e8, null != t2 ? t2 : this.defaults);
} }, { key: "parser", value: function(e8, t2) {
  return Ci.parse(e8, null != t2 ? t2 : this.defaults);
} }, { key: "parseMarkdown", value: function(e8) {
  var t2 = this;
  return function(n2, r2) {
    var u2 = an({}, r2), o2 = an(an({}, t2.defaults), u2), i2 = t2.onError(!!o2.silent, !!o2.async);
    if (true === t2.defaults.async && false === u2.async) return i2(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
    if (Dn(n2) > "u" || null === n2) return i2(new Error("marked(): input parameter is undefined or null"));
    if ("string" != typeof n2) return i2(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n2) + ", string expected"));
    if (o2.hooks && (o2.hooks.options = o2, o2.hooks.block = e8), o2.async) return Xt(cn().m(function r3() {
      var u3, i3, a3, s3, c2, l2, f2, p2, d2, h2, D2;
      return cn().w(function(r4) {
        for (; ; ) switch (r4.n) {
          case 0:
            if (!o2.hooks) {
              r4.n = 2;
              break;
            }
            return r4.n = 1, o2.hooks.preprocess(n2);
          case 1:
            c2 = r4.v, r4.n = 3;
            break;
          case 2:
            c2 = n2;
          case 3:
            if (u3 = c2, !o2.hooks) {
              r4.n = 5;
              break;
            }
            return r4.n = 4, o2.hooks.provideLexer();
          case 4:
            l2 = r4.v, r4.n = 6;
            break;
          case 5:
            l2 = e8 ? Fi.lex : Fi.lexInline;
          case 6:
            return f2 = l2, r4.n = 7, f2(u3, o2);
          case 7:
            if (i3 = r4.v, !o2.hooks) {
              r4.n = 9;
              break;
            }
            return r4.n = 8, o2.hooks.processAllTokens(i3);
          case 8:
            p2 = r4.v, r4.n = 10;
            break;
          case 9:
            p2 = i3;
          case 10:
            if (a3 = p2, !o2.walkTokens) {
              r4.n = 11;
              break;
            }
            return r4.n = 11, Promise.all(t2.walkTokens(a3, o2.walkTokens));
          case 11:
            if (!o2.hooks) {
              r4.n = 13;
              break;
            }
            return r4.n = 12, o2.hooks.provideParser();
          case 12:
            d2 = r4.v, r4.n = 14;
            break;
          case 13:
            d2 = e8 ? Ci.parse : Ci.parseInline;
          case 14:
            return h2 = d2, r4.n = 15, h2(a3, o2);
          case 15:
            if (s3 = r4.v, !o2.hooks) {
              r4.n = 17;
              break;
            }
            return r4.n = 16, o2.hooks.postprocess(s3);
          case 16:
            D2 = r4.v, r4.n = 18;
            break;
          case 17:
            D2 = s3;
          case 18:
            return r4.a(2, D2);
        }
      }, r3);
    }))().catch(i2);
    try {
      o2.hooks && (n2 = o2.hooks.preprocess(n2));
      var a2 = (o2.hooks ? o2.hooks.provideLexer() : e8 ? Fi.lex : Fi.lexInline)(n2, o2);
      o2.hooks && (a2 = o2.hooks.processAllTokens(a2)), o2.walkTokens && t2.walkTokens(a2, o2.walkTokens);
      var s2 = (o2.hooks ? o2.hooks.provideParser() : e8 ? Ci.parse : Ci.parseInline)(a2, o2);
      return o2.hooks && (s2 = o2.hooks.postprocess(s2)), s2;
    } catch (e9) {
      return i2(e9);
    }
  };
} }, { key: "onError", value: function(e8, t2) {
  return function(n2) {
    if (n2.message += "\nPlease report this to https://github.com/markedjs/marked.", e8) {
      var r2 = "<p>An error occurred:</p><pre>" + hi(n2.message + "", true) + "</pre>";
      return t2 ? Promise.resolve(r2) : r2;
    }
    if (t2) return Promise.reject(n2);
    throw n2;
  };
} }]);
var wi = new Ai();
function Si(e8, t2) {
  return wi.parse(e8, t2);
}
function ki(e8) {
  return e8.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
Si.options = Si.setOptions = function(e8) {
  return wi.setOptions(e8), Si.defaults = wi.defaults, Do(Si.defaults), Si;
}, Si.getDefaults = function() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}, Si.defaults = ho, Si.use = function() {
  return wi.use.apply(wi, arguments), Si.defaults = wi.defaults, Do(Si.defaults), Si;
}, Si.walkTokens = function(e8, t2) {
  return wi.walkTokens(e8, t2);
}, Si.parseInline = wi.parseInline, Si.Parser = Ci, Si.parser = Ci.parse, Si.Renderer = Ei, Si.TextRenderer = _i, Si.Lexer = Fi, Si.lexer = Fi.lex, Si.Tokenizer = gi, Si.Hooks = bi, Si.parse = Si, Si.options, Si.setOptions, Si.use, Si.walkTokens, Si.parseInline, Ci.parse, Fi.lex;
var Oi = new Si.Renderer();
Oi.code = function(e8) {
  var t2 = e8.text, n2 = e8.lang, r2 = void 0 === n2 ? "" : n2, u2 = e8.escaped, o2 = r2 ? "language-".concat(r2) : "", i2 = u2 ? t2 : ki(t2), a2 = encodeURIComponent(t2);
  return '\n    <div class="DocSearch-CodeSnippet">\n      <button class="DocSearch-CodeSnippet-CopyButton" data-code="'.concat(a2, '" aria-label="copy code">').concat('<svg class="DocSearch-CodeSnippet-CopyIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>').concat('<svg class="DocSearch-CodeSnippet-CheckIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>', '<span class="DocSearch-CodeSnippet-CopyButton-Label"></span></button>\n      <pre><code class="').concat(o2, '">').concat(i2, "</code></pre>\n    </div>\n  ");
}, Oi.link = function(e8) {
  var t2 = e8.href, n2 = e8.title, r2 = e8.text, u2 = n2 ? ' title="'.concat(ki(n2), '"') : "", o2 = t2 ? ki(t2) : "", i2 = ki(r2);
  return '<a href="'.concat(o2, '"').concat(u2, ' target="_blank" rel="noopener noreferrer">').concat(i2, "</a>");
};
var Pi = st(function(e8) {
  var t2 = e8.content, n2 = e8.copyButtonText, r2 = e8.copyButtonCopiedText, u2 = e8.isStreaming, o2 = Ue(function() {
    return Si.parse(t2, { gfm: true, breaks: true, renderer: Oi });
  }, [t2]), i2 = Me(null);
  return Te(function() {
    var e9 = i2.current;
    if (e9) return Array.from(e9.querySelectorAll(".DocSearch-CodeSnippet-CopyButton")).forEach(function(e10) {
      var t4 = e10.querySelector(".DocSearch-CodeSnippet-CopyButton-Label");
      t4 && (t4.textContent = n2), e10.classList.remove("DocSearch-CodeSnippet-CopyButton--copied");
    }), e9.addEventListener("click", t3), function() {
      e9.removeEventListener("click", t3);
    };
    function t3(e10) {
      var t4, u3 = e10.target.closest(".DocSearch-CodeSnippet-CopyButton");
      if (u3) {
        var o3 = null !== (t4 = u3.getAttribute("data-code")) && void 0 !== t4 ? t4 : "";
        navigator.clipboard.writeText(decodeURIComponent(o3)).catch(function() {
        });
        var i3 = u3.querySelector(".DocSearch-CodeSnippet-CopyButton-Label");
        if (i3) {
          u3.classList.add("DocSearch-CodeSnippet-CopyButton--copied");
          var a2 = n2;
          i3.textContent = r2, setTimeout(function() {
            u3.classList.remove("DocSearch-CodeSnippet-CopyButton--copied"), i3.textContent = a2;
          }, 1500);
        }
      }
    }
  }, [o2, n2, r2]), Mt.createElement("div", { ref: i2, className: "DocSearch-Markdown-Content ".concat(u2 ? "DocSearch-Markdown-Content--streaming" : ""), dangerouslySetInnerHTML: { __html: o2 } });
});
function Bi(e8) {
  return e8.replace(/<[^>]*>/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
Pi.displayName = "MemoizedMarkdown";
var xi = function(e8, t2, n2) {
  var r2 = t2[0].parts.find(function(e9) {
    return "text" === e9.type;
  }), u2 = null != r2 && r2.text ? Bi(r2.text) : "";
  return { conversationId: n2, query: e8, objectID: u2, messages: t2, type: "askAI", anchor: "stored", content: null, hierarchy: { lvl0: "askAI", lvl1: u2, lvl2: null, lvl3: null, lvl4: null, lvl5: null, lvl6: null }, url: "", url_without_anchor: "" };
};
var Ri = function(e8) {
  return null == e8 ? void 0 : e8.parts.find(function(e9) {
    return "text" === e9.type;
  });
};
function ji(e8) {
  var t2;
  return e8 && (null === (t2 = e8.message) || void 0 === t2 ? void 0 : t2.includes("AI-217")) || false;
}
var Ii = ["translations"];
function Ti(e8) {
  var t2 = e8.disclaimerText;
  return Mt.createElement("p", { className: "DocSearch-AskAiScreen-Disclaimer" }, t2);
}
function Ni(e8) {
  var t2, n2, r2, u2 = e8.exchange, o2 = e8.askAiError, i2 = e8.isLastExchange, a2 = e8.loadingStatus, s2 = e8.translations, c2 = e8.conversations, l2 = u2.userMessage, f2 = u2.assistantMessage, p2 = s2.stoppedStreamingText, d2 = void 0 === p2 ? "You stopped this response" : p2, h2 = s2.errorTitleText, D2 = void 0 === h2 ? "Chat error" : h2, v2 = ji(o2), m2 = Ue(function() {
    return Ri(f2);
  }, [f2]), y2 = Ue(function() {
    return Ri(l2);
  }, [l2]), g2 = Mt.useMemo(function() {
    return e9 = f2, t3 = [], n3 = /* @__PURE__ */ new Set(), e9 ? (e9.parts.forEach(function(e10) {
      if ("text" === e10.type && 0 !== e10.text.length) {
        var r3, u3 = e10.text.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, ""), o3 = nn(u3.matchAll(/\[([^\]]*)\]\(([^)]+)\)/g));
        try {
          for (o3.s(); !(r3 = o3.n()).done; ) {
            var i3 = r3.value, a3 = i3[1].trim(), s3 = i3[2];
            n3.has(s3) || (n3.add(s3), t3.push({ url: s3, title: a3 || void 0 }));
          }
        } catch (e11) {
          o3.e(e11);
        } finally {
          o3.f();
        }
        var c3, l3 = nn(u3.matchAll(new RegExp('(?<!\\]\\()https?:\\/\\/[^\\s<>"{}|\\\\^`[\\]]+', "g")));
        try {
          for (l3.s(); !(c3 = l3.n()).done; ) {
            var f3 = c3.value[0].replace(/[.,;:!?]+$/, "");
            n3.has(f3) || (n3.add(f3), t3.push({ url: f3 }));
          }
        } catch (e11) {
          l3.e(e11);
        } finally {
          l3.f();
        }
      }
    }), t3) : [];
    var e9, t3, n3;
  }, [f2]), F2 = (null == f2 ? void 0 : f2.parts) || [], E2 = (null === (t2 = l2.metadata) || void 0 === t2 ? void 0 : t2.stopped) || (null == f2 || null === (n2 = f2.metadata) || void 0 === n2 ? void 0 : n2.stopped), _2 = !E2 && (!i2 || i2 && "ready" === a2 && Boolean(f2)), C2 = ["submitted", "streaming"].includes(a2) && i2 && 0 === F2.length;
  return Mt.createElement("div", { className: "DocSearch-AskAiScreen-Response-Container" }, Mt.createElement("div", { className: "DocSearch-AskAiScreen-Response" }, Mt.createElement("div", { className: "DocSearch-AskAiScreen-Message DocSearch-AskAiScreen-Message--user" }, Mt.createElement("p", { className: "DocSearch-AskAiScreen-Query" }, null !== (r2 = null == y2 ? void 0 : y2.text) && void 0 !== r2 ? r2 : "")), Mt.createElement("div", { className: "DocSearch-AskAiScreen-Message DocSearch-AskAiScreen-Message--assistant" }, Mt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent" }, "error" === a2 && o2 && i2 && !v2 && Mt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent DocSearch-AskAiScreen-Error" }, Mt.createElement(Yu, null), Mt.createElement("div", { className: "DocSearch-AskAiScreen-Error-Content" }, Mt.createElement("h4", { className: "DocSearch-AskAiScreen-Error-Title" }, D2), Mt.createElement(Pi, { content: o2.message, copyButtonText: "", copyButtonCopiedText: "", isStreaming: false }))), C2 && Mt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent-Reasoning" }, Mt.createElement("span", { className: "shimmer" }, s2.thinkingText || "Thinking...")), F2.map(function(e9, t3) {
    var n3 = t3;
    return "text" === e9.type ? Mt.createElement(Pi, { key: n3, content: e9.text, copyButtonText: s2.copyButtonText || "Copy", copyButtonCopiedText: s2.copyButtonCopiedText || "Copied!", isStreaming: "streaming" === e9.state }) : null;
  })), E2 && Mt.createElement("p", { className: "DocSearck-AskAiScreen-MessageContent-Stopped" }, d2))), Mt.createElement("div", { className: "DocSearch-AskAiScreen-Answer-Footer" }, Mt.createElement(Mi, { id: (null == l2 ? void 0 : l2.id) || u2.id, showActions: _2, latestAssistantMessageContent: (null == m2 ? void 0 : m2.text) || null, translations: s2, conversations: c2 })), g2.length > 0 ? Mt.createElement(Li, { urlsToDisplay: g2, relatedSourcesText: s2.relatedSourcesText }) : null);
}
function Mi(e8) {
  e8.id;
  var t2 = e8.showActions, n2 = e8.latestAssistantMessageContent, r2 = e8.translations;
  return e8.conversations, t2 && n2 ? Mt.createElement("div", { className: "DocSearch-AskAiScreen-Actions" }, Mt.createElement(Hi, { translations: r2, onClick: function() {
    return navigator.clipboard.writeText(n2);
  } })) : null;
}
function Li(e8) {
  var t2 = e8.urlsToDisplay, n2 = e8.relatedSourcesText;
  return Mt.createElement("div", { className: "DocSearch-AskAiScreen-RelatedSources" }, Mt.createElement("p", { className: "DocSearch-AskAiScreen-RelatedSources-Title" }, n2 || "Related sources"), Mt.createElement("div", { className: "DocSearch-AskAiScreen-RelatedSources-List" }, t2.length > 0 && t2.map(function(e9) {
    return Mt.createElement("a", { key: e9.url, href: e9.url, className: "DocSearch-AskAiScreen-RelatedSources-Item-Link", target: "_blank", rel: "noopener noreferrer" }, Mt.createElement(qi, null), Mt.createElement("span", null, e9.title || e9.url));
  })));
}
function Ui(e8) {
  var t2 = e8.translations, n2 = void 0 === t2 ? {} : t2, r2 = sn(e8, Ii), u2 = n2.disclaimerText, o2 = void 0 === u2 ? "Answers are generated with AI which can make mistakes. Verify responses." : u2, i2 = n2.threadDepthExceededMessage, a2 = void 0 === i2 ? "This conversation is now closed to keep responses accurate." : i2, s2 = n2.startNewConversationButtonText, c2 = void 0 === s2 ? "Start a new conversation" : s2, l2 = r2.messages, f2 = r2.askAiError, p2 = r2.status, d2 = Ue(function() {
    return "error" === p2 && ji(f2);
  }, [p2, f2]), h2 = Ue(function() {
    for (var e9 = [], t3 = 0; t3 < l2.length; t3++) if ("user" === l2[t3].role) {
      var n3, r3 = l2[t3], u3 = "assistant" === (null === (n3 = l2[t3 + 1]) || void 0 === n3 ? void 0 : n3.role) ? l2[t3 + 1] : null;
      e9.push({ id: r3.id, userMessage: r3, assistantMessage: u3 }), u3 && t3++;
    }
    return d2 && e9.length > 0 && (e9[e9.length - 1].assistantMessage || e9.pop()), e9;
  }, [l2, d2]), D2 = d2 && l2.some(function(e9) {
    return "assistant" === e9.role;
  });
  return Mt.createElement("div", { className: "DocSearch-AskAiScreen DocSearch-AskAiScreen-Container" }, D2 && Mt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent DocSearch-AskAiScreen-Error DocSearch-AskAiScreen-Error--ThreadDepth" }, Mt.createElement("div", { className: "DocSearch-AskAiScreen-Error-Content" }, Mt.createElement("p", null, a2, " ", Mt.createElement("button", { type: "button", className: "DocSearch-ThreadDepthError-Link", onClick: r2.onNewConversation }, c2), " ", "to continue."))), Mt.createElement(Ti, { disclaimerText: o2 }), Mt.createElement("div", { className: "DocSearch-AskAiScreen-Body" }, Mt.createElement("div", { className: "DocSearch-AskAiScreen-ExchangesList" }, h2.slice().reverse().map(function(e9, t3) {
    return Mt.createElement(Ni, { key: e9.id, exchange: e9, askAiError: r2.askAiError, isLastExchange: 0 === t3, loadingStatus: r2.status, translations: n2, conversations: r2.conversations });
  }))));
}
function qi() {
  return Mt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Mt.createElement("line", { x1: "4", x2: "20", y1: "9", y2: "9" }), Mt.createElement("line", { x1: "4", x2: "20", y1: "15", y2: "15" }), Mt.createElement("line", { x1: "10", x2: "8", y1: "3", y2: "21" }), Mt.createElement("line", { x1: "16", x2: "14", y1: "3", y2: "21" }));
}
function Hi(e8) {
  var t2 = e8.onClick, n2 = e8.translations, r2 = n2.copyButtonTitle, u2 = void 0 === r2 ? "Copy" : r2, o2 = n2.copyButtonCopiedText, i2 = void 0 === o2 ? "Copied!" : o2, a2 = pn(je(false), 2), s2 = a2[0], c2 = a2[1];
  return Te(function() {
    if (s2) {
      var e9 = setTimeout(function() {
        c2(false);
      }, 1500);
      return function() {
        return clearTimeout(e9);
      };
    }
  }, [s2]), Mt.createElement("button", { type: "button", className: "DocSearch-AskAiScreen-ActionButton DocSearch-AskAiScreen-CopyButton ".concat(s2 ? "DocSearch-AskAiScreen-CopyButton--copied" : ""), disabled: s2, title: s2 ? i2 : u2, onClick: function() {
    t2(), c2(true);
  } }, s2 ? Mt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-check-icon lucide-check" }, Mt.createElement("path", { d: "M20 6 9 17l-5-5" })) : Mt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-copy-icon lucide-copy" }, Mt.createElement("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), Mt.createElement("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })));
}
var zi = ["hit", "attribute", "tagName"];
function $i(e8) {
  if (!e8.startsWith("hierarchy.")) return null;
  var t2 = e8.replace("hierarchy.", "");
  return ["lvl0", "lvl1", "lvl2", "lvl3", "lvl4", "lvl5", "lvl6"].includes(t2) ? t2 : null;
}
function Ki(e8) {
  var t2 = e8.hit, n2 = e8.attribute, r2 = e8.tagName, u2 = void 0 === r2 ? "span" : r2, o2 = sn(e8, zi), i2 = function(e9, t3) {
    var n3, r3, u3, o3, i3, a3, s3 = e9._highlightResult;
    if (!s3) return "";
    if ("content" === t3) return null !== (i3 = null === (a3 = s3.content) || void 0 === a3 ? void 0 : a3.value) && void 0 !== i3 ? i3 : "";
    var c3 = $i(t3);
    return c3 && null !== (n3 = null !== (r3 = null === (u3 = s3[t3]) || void 0 === u3 ? void 0 : u3.value) && void 0 !== r3 ? r3 : null === (o3 = s3.hierarchy) || void 0 === o3 || null === (o3 = o3[c3]) || void 0 === o3 ? void 0 : o3.value) && void 0 !== n3 ? n3 : "";
  }(t2, n2), a2 = function(e9, t3) {
    var n3, r3, u3;
    if ("content" === t3) return null !== (u3 = e9.content) && void 0 !== u3 ? u3 : "";
    var o3 = $i(t3);
    return o3 && null !== (n3 = null !== (r3 = e9[t3]) && void 0 !== r3 ? r3 : e9.hierarchy[o3]) && void 0 !== n3 ? n3 : "";
  }(t2, n2), s2 = i2 || a2, c2 = function(e9, t3) {
    var n3, r3, u3, o3, i3, a3, s3 = e9._snippetResult;
    if (!s3) return "";
    if ("content" === t3) return null !== (i3 = null === (a3 = s3.content) || void 0 === a3 ? void 0 : a3.value) && void 0 !== i3 ? i3 : "";
    var c3 = $i(t3);
    return c3 && null !== (n3 = null !== (r3 = null === (u3 = s3[t3]) || void 0 === u3 ? void 0 : u3.value) && void 0 !== r3 ? r3 : null === (o3 = s3.hierarchy) || void 0 === o3 || null === (o3 = o3[c3]) || void 0 === o3 ? void 0 : o3.value) && void 0 !== n3 ? n3 : "";
  }(t2, n2), l2 = s2;
  if (c2 && s2) {
    var f2 = c2;
    s2.substring(0, 20) !== c2.substring(0, 20) && (f2 = "… ".concat(f2)), s2.substring(s2.length - 20, s2.length) !== c2.substring(c2.length - 20, c2.length) && (f2 = "".concat(f2, " …")), l2 = f2;
  } else c2 && (l2 = c2);
  return Q(u2, an(an({}, o2), {}, { dangerouslySetInnerHTML: { __html: l2 } }));
}
var Wi = ["item", "getItemProps", "onItemClick", "translations", "collection"];
function Vi(e8, t2) {
  var n2, r2 = null === (n2 = e8.hierarchy) || void 0 === n2 ? void 0 : n2[t2], u2 = e8["hierarchy.".concat(t2)];
  return "string" == typeof r2 ? r2 : "string" == typeof u2 ? u2 : null;
}
function Qi(e8) {
  var t2 = Mt.useMemo(function() {
    return e8.title ? e8.title.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'") : null;
  }, [e8.title]);
  return e8.collection && 0 !== e8.collection.items.length ? "askAI" === e8.collection.source.sourceId ? Mt.createElement("section", { className: "DocSearch-AskAi-Section" }, Mt.createElement("ul", e8.getListProps({ source: e8.collection.source }), Mt.createElement(Zi, un({ item: e8.collection.items[0], translations: e8.translations }, e8)))) : (e8.collection.source.sourceId, Mt.createElement("section", { className: "DocSearch-Hits" }, Mt.createElement("div", { className: "DocSearch-Hit-source" }, t2), Mt.createElement("ul", e8.getListProps({ source: e8.collection.source }), e8.collection.items.map(function(t3, n2) {
    return Mt.createElement(Ji, un({ key: [e8.title, t3.objectID].join(":"), item: t3, index: n2 }, e8));
  })))) : null;
}
function Ji(e8) {
  var t2 = e8.item, n2 = e8.index, r2 = e8.renderIcon, u2 = e8.renderAction, o2 = e8.getItemProps, i2 = e8.onItemClick, a2 = e8.collection, s2 = e8.hitComponent;
  return Mt.createElement("li", un({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child"].filter(Boolean).join(" ") }, o2({ item: t2, source: a2.source, onClick: function(e9) {
    i2(t2, e9);
  } })), Mt.createElement(s2, { hit: t2 }, Mt.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), "lvl0" === t2.type && Vi(t2, "lvl0") && Mt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Mt.createElement(Ki, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl0" })), "lvl1" === t2.type && Vi(t2, "lvl1") && Mt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Mt.createElement(Ki, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && Mt.createElement(Ki, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), "askAI" === t2.type && Mt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Mt.createElement("span", { className: "DocSearch-Hit-title" }, Bi(t2.hierarchy.lvl1 || ""))), ("lvl2" === t2.type || "lvl3" === t2.type || "lvl4" === t2.type || "lvl5" === t2.type || "lvl6" === t2.type) && Vi(t2, t2.type) && Mt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Mt.createElement(Ki, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), Mt.createElement(Ki, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), "content" === t2.type && Mt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Mt.createElement(Ki, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), Mt.createElement(Ki, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), u2({ item: t2 }))));
}
function Zi(e8) {
  var t2 = e8.item, n2 = e8.getItemProps, r2 = e8.onItemClick, u2 = e8.translations, o2 = e8.collection, i2 = sn(e8, Wi), a2 = u2 || {}, s2 = a2.askAiPlaceholder, c2 = void 0 === s2 ? "Ask AI: " : s2, l2 = a2.noResultsAskAiPlaceholder, f2 = void 0 === l2 ? "Didn't find it in the docs? Ask AI to help: " : l2, p2 = 1 === i2.state.collections.length ? f2 : c2;
  return Mt.createElement("li", un({ className: "DocSearch-Hit" }, n2({ item: t2, source: o2.source, onClick: function(e9) {
    r2(t2, e9);
  } })), Mt.createElement("div", { className: "DocSearch-Hit--AskAI" }, Mt.createElement("div", { className: "DocSearch-Hit-AskAIButton DocSearch-Hit-Container" }, Mt.createElement("div", { className: " DocSearch-Hit-AskAIButton-icon DocSearch-Hit-icon" }, Mt.createElement(Zu, null)), Mt.createElement("div", { className: "DocSearch-Hit-AskAIButton-title" }, Mt.createElement("span", { className: "DocSearch-Hit-AskAIButton-title-highlight" }, p2), Mt.createElement("mark", { className: "DocSearch-Hit-AskAIButton-title-query" }, String(t2.query || ""))))));
}
var Gi = ["onAskAiToggle"];
function Xi(e8) {
  var t2 = e8.onAskAiToggle, n2 = sn(e8, Gi), r2 = Mt.useMemo(function() {
    return n2.state.collections[2];
  }, [n2.state]);
  return Mt.useEffect(function() {
    r2 && 0 !== r2.items.length || t2(true);
  }, [r2, t2]), Mt.createElement("div", { className: "DocSearch-Dropdown-Container DocSearch-Conversation-History" }, Mt.createElement(Qi, un({}, n2, { key: r2.source.sourceId, title: "", translations: n2.translations, collection: r2, renderIcon: function() {
    return Mt.createElement("div", { className: "DocSearch-Hit-icon" }, Mt.createElement(Zu, null));
  }, renderAction: function(e9) {
    var t3 = e9.item;
    return Mt.createElement("div", { className: "DocSearch-Hit-action" }, Mt.createElement("button", { type: "button", className: "DocSearch-Hit-action-button", onClick: function(e10) {
      e10.preventDefault(), e10.stopPropagation(), n2.conversations.remove(t3), n2.refresh();
    } }, Mt.createElement(Xu, null)));
  } })));
}
function Yi(e8) {
  var t2 = e8.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.titleText, u2 = void 0 === r2 ? "Unable to fetch results" : r2, o2 = n2.helpText, i2 = void 0 === o2 ? "You might want to check your network connection." : o2;
  return Mt.createElement("div", { className: "DocSearch-ErrorScreen" }, Mt.createElement("div", { className: "DocSearch-Screen-Icon" }, Mt.createElement(so, null)), Mt.createElement("p", { className: "DocSearch-Title" }, u2), Mt.createElement("p", { className: "DocSearch-Help" }, i2));
}
function ea(e8) {
  var t2 = e8.translations, n2 = void 0 === t2 ? {} : t2, r2 = e8.suggestedQuestions, u2 = void 0 === r2 ? [] : r2, o2 = e8.selectSuggestedQuestion, i2 = n2.newConversationTitle, a2 = void 0 === i2 ? "How can I help you today?" : i2, s2 = n2.newConversationDescription, c2 = void 0 === s2 ? "I search through your documentation to help you find setup guides, feature details and troubleshooting tips, fast." : s2;
  return Mt.createElement("div", { className: "DocSearch-NewConversationScreen" }, Mt.createElement("h3", { className: "DocSearch-NewConversationScreen-Title" }, a2), Mt.createElement("p", { className: "DocSearch-NewConversationScreen-Description" }, c2), Mt.createElement("div", { className: "DocSearch-NewConversationScreen-SuggestedQuestions" }, u2.map(function(e9) {
    return Mt.createElement("button", { key: e9.objectID, type: "button", className: "DocSearch-NewConversationScreen-SuggestedQuestion", onClick: function() {
      return o2(e9);
    } }, e9.question);
  })));
}
var ta = ["translations"];
function na(e8) {
  var t2 = e8.translations, n2 = void 0 === t2 ? {} : t2, r2 = sn(e8, ta), u2 = n2.noResultsText, o2 = void 0 === u2 ? "No results found for" : u2, i2 = n2.suggestedQueryText, a2 = void 0 === i2 ? "Try searching for" : i2, s2 = n2.reportMissingResultsText, c2 = void 0 === s2 ? "Believe this query should return results?" : s2, l2 = n2.reportMissingResultsLinkText, f2 = void 0 === l2 ? "Let us know." : l2, p2 = r2.state.context.searchSuggestions;
  return Mt.createElement("div", { className: "DocSearch-NoResults ".concat(r2.canHandleAskAi ? "DocSearch-NoResults--withAskAi" : "") }, Mt.createElement("div", { className: "DocSearch-Screen-Icon" }, Mt.createElement(co, null)), Mt.createElement("p", { className: "DocSearch-Title" }, o2, ' "', Mt.createElement("strong", null, r2.state.query), '"'), p2 && p2.length > 0 && Mt.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, Mt.createElement("p", { className: "DocSearch-Help" }, a2, ":"), Mt.createElement("div", { className: "DocSearch-NoResults-Prefill-List-Items" }, p2.slice(0, 3).reduce(function(e9, t3) {
    return [].concat(dn(e9), [Mt.createElement("p", { key: t3 }, Mt.createElement(En, { size: 16 }), Mt.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
      r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
    } }, t3))]);
  }, []))), r2.getMissingResultsUrl && Mt.createElement("p", { className: "DocSearch-Help" }, "".concat(c2, " "), Mt.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
}
var ra = ["translations"];
function ua(e8) {
  var t2 = e8.translations, n2 = void 0 === t2 ? {} : t2, r2 = sn(e8, ra);
  return Mt.createElement("div", { className: "DocSearch-Dropdown-Container" }, r2.state.collections.map(function(e9) {
    if (0 === e9.items.length) return null;
    var t3 = On(e9.items[0]);
    return Mt.createElement(Qi, un({}, r2, { key: e9.source.sourceId, translations: n2, title: t3, collection: e9, renderIcon: function(t4) {
      var n3, r3 = t4.item, u2 = t4.index;
      return Mt.createElement(Mt.Fragment, null, r3.__docsearch_parent && Mt.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, Mt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r3.__docsearch_parent !== (null === (n3 = e9.items[u2 + 1]) || void 0 === n3 ? void 0 : n3.__docsearch_parent) ? Mt.createElement("path", { d: "M8 6v21M20 27H8.3" }) : Mt.createElement("path", { d: "M8 6v42M20 27H8.3" }))), Mt.createElement("div", { className: "DocSearch-Hit-icon" }, Mt.createElement(ro, { type: r3.type })));
    }, renderAction: function() {
      return Mt.createElement("div", { className: "DocSearch-Hit-action" }, Mt.createElement(eo, null));
    } }));
  }), r2.resultsFooterComponent && Mt.createElement("section", { className: "DocSearch-HitsFooter" }, Mt.createElement(r2.resultsFooterComponent, { state: r2.state })));
}
var oa = ["translations"];
function ia(e8) {
  var t2 = e8.translations, n2 = void 0 === t2 ? {} : t2, r2 = sn(e8, oa), u2 = n2.recentSearchesTitle, o2 = void 0 === u2 ? "Recent" : u2, i2 = n2.saveRecentSearchButtonTitle, a2 = void 0 === i2 ? "Save this search" : i2, s2 = n2.removeRecentSearchButtonTitle, c2 = void 0 === s2 ? "Remove this search from history" : s2, l2 = n2.favoriteSearchesTitle, f2 = void 0 === l2 ? "Favorite" : l2, p2 = n2.removeFavoriteSearchButtonTitle, d2 = void 0 === p2 ? "Remove this search from favorites" : p2, h2 = n2.recentConversationsTitle, D2 = void 0 === h2 ? "Recent conversations" : h2, v2 = n2.removeRecentConversationButtonTitle, m2 = void 0 === v2 ? "Remove this conversation from history" : v2;
  return Mt.createElement("div", { className: "DocSearch-Dropdown-Container" }, Mt.createElement(Qi, un({}, r2, { title: o2, collection: r2.state.collections[0], renderIcon: function() {
    return Mt.createElement("div", { className: "DocSearch-Hit-icon" }, Mt.createElement(Gu, null));
  }, renderAction: function(e9) {
    var t3 = e9.item;
    return Mt.createElement(Mt.Fragment, null, Mt.createElement("div", { className: "DocSearch-Hit-action" }, Mt.createElement("button", { className: "DocSearch-Hit-action-button", title: a2, type: "submit", onClick: function(e10) {
      e10.preventDefault(), e10.stopPropagation(), r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
    } }, Mt.createElement(io, null))), Mt.createElement("div", { className: "DocSearch-Hit-action" }, Mt.createElement("button", { className: "DocSearch-Hit-action-button", title: c2, type: "submit", onClick: function(e10) {
      e10.preventDefault(), e10.stopPropagation(), r2.recentSearches.remove(t3), r2.refresh();
    } }, Mt.createElement(Xu, null))));
  } })), Mt.createElement(Qi, un({}, r2, { title: f2, collection: r2.state.collections[1], renderIcon: function() {
    return Mt.createElement("div", { className: "DocSearch-Hit-icon" }, Mt.createElement(io, null));
  }, renderAction: function(e9) {
    var t3 = e9.item;
    return Mt.createElement("div", { className: "DocSearch-Hit-action" }, Mt.createElement("button", { className: "DocSearch-Hit-action-button", title: d2, type: "submit", onClick: function(e10) {
      e10.preventDefault(), e10.stopPropagation(), r2.favoriteSearches.remove(t3), r2.refresh();
    } }, Mt.createElement(Xu, null)));
  } })), Mt.createElement(Qi, un({}, r2, { title: D2, collection: r2.state.collections[2], renderIcon: function() {
    return Mt.createElement("div", { className: "DocSearch-Hit-icon" }, Mt.createElement(Zu, null));
  }, renderAction: function(e9) {
    var t3 = e9.item;
    return Mt.createElement("div", { className: "DocSearch-Hit-action" }, Mt.createElement("button", { className: "DocSearch-Hit-action-button", title: m2, type: "submit", onClick: function(e10) {
      e10.preventDefault(), e10.stopPropagation(), r2.conversations.remove(t3), r2.refresh();
    } }, Mt.createElement(Xu, null)));
  } })));
}
var aa = ["translations"];
var sa = Mt.memo(function(e8) {
  var t2, n2 = e8.translations, r2 = void 0 === n2 ? {} : n2, u2 = sn(e8, aa);
  return u2.canHandleAskAi && u2.isAskAiActive && "conversation-history" === u2.askAiState ? Mt.createElement(Xi, u2) : u2.canHandleAskAi && u2.isAskAiActive && "new-conversation" === u2.askAiState ? Mt.createElement(ea, { translations: null == r2 ? void 0 : r2.newConversation, selectSuggestedQuestion: u2.selectSuggestedQuestion, suggestedQuestions: u2.suggestedQuestions }) : u2.isAskAiActive && u2.canHandleAskAi ? Mt.createElement(Ui, un({}, u2, { messages: u2.messages, status: u2.status, askAiError: u2.askAiError, translations: null == r2 ? void 0 : r2.askAiScreen })) : "error" === (null === (t2 = u2.state) || void 0 === t2 ? void 0 : t2.status) ? Mt.createElement(Yi, { translations: null == r2 ? void 0 : r2.errorScreen }) : u2.state.query ? u2.hasCollections || u2.canHandleAskAi ? Mt.createElement(Mt.Fragment, null, Mt.createElement(ua, un({}, u2, { translations: null == r2 ? void 0 : r2.resultsScreen })), u2.canHandleAskAi && 1 === u2.state.collections.length && Mt.createElement(na, un({}, u2, { translations: null == r2 ? void 0 : r2.noResultsScreen }))) : Mt.createElement(na, un({}, u2, { translations: null == r2 ? void 0 : r2.noResultsScreen })) : Mt.createElement(ia, un({}, u2, { hasCollections: u2.hasCollections, translations: null == r2 ? void 0 : r2.startScreen }));
}, function(e8, t2) {
  return "loading" === t2.state.status || "stalled" === t2.state.status;
});
function ca(e8) {
  var t2 = e8.size, n2 = void 0 === t2 ? 20 : t2, r2 = e8.color, u2 = void 0 === r2 ? "currentColor" : r2;
  return Mt.createElement("svg", { width: n2, height: n2, className: "DocSearch-Back-Icon", viewBox: "0 0 24 24", fill: "none", stroke: u2, strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, Mt.createElement("path", { d: "m12 19-7-7 7-7" }), Mt.createElement("path", { d: "M19 12H5" }));
}
var la = ["children", "className", "onClick"];
var fa = Mt.createContext({ open: false, setOpen: function(e8) {
} });
function pa(e8) {
  var t2 = e8.children, n2 = pn(Mt.useState(false), 2), r2 = n2[0], u2 = n2[1], o2 = Mt.useRef(null);
  return Mt.useEffect(function() {
    function e9(e10) {
      var t3;
      null !== (t3 = o2.current) && void 0 !== t3 && t3.contains(e10.target) || u2(false);
    }
    return r2 && window.addEventListener("click", e9), function() {
      window.removeEventListener("click", e9);
    };
  }, [r2]), Mt.createElement(fa.Provider, { value: { open: r2, setOpen: u2 } }, Mt.createElement("div", { ref: o2, className: "DocSearch-Menu" }, t2));
}
function da(e8) {
  var t2 = e8.heading, n2 = e8.shimmer, r2 = void 0 !== n2 && n2;
  return Mt.createElement("span", { className: "DocSearch-Modal-heading".concat(r2 ? " shimmer" : "") }, t2);
}
pa.Trigger = function(e8) {
  var t2 = e8.children, n2 = e8.className, r2 = void 0 === n2 ? "" : n2, u2 = e8.disabled, o2 = Mt.useContext(fa), i2 = o2.open, a2 = o2.setOpen;
  return Mt.createElement("button", { type: "button", className: "DocSearch-Menu-trigger ".concat(r2).concat(u2 ? " disabled" : ""), "aria-disabled": u2, onClick: function() {
    u2 || a2(!i2);
  } }, t2);
}, pa.Content = function(e8) {
  var t2 = e8.children, n2 = Mt.useContext(fa).open;
  return Mt.createElement("div", { className: "DocSearch-Menu-content".concat(n2 ? " open" : "") }, t2);
}, pa.Item = function(e8) {
  var t2 = e8.children, n2 = e8.className, r2 = void 0 === n2 ? "" : n2, u2 = e8.onClick, o2 = sn(e8, la), i2 = Mt.useContext(fa).setOpen;
  return Mt.createElement("button", un({ type: "button", className: "DocSearch-Menu-item ".concat(r2), onClick: function(e9) {
    u2 && (u2(e9), i2(false));
  } }, o2), t2);
};
var ha = ["translations", "askAiState", "onAskAiToggle", "setAskAiState"];
function Da(e8) {
  var t2 = e8.translations, n2 = void 0 === t2 ? {} : t2, r2 = e8.askAiState, u2 = e8.onAskAiToggle, o2 = e8.setAskAiState, i2 = sn(e8, ha), a2 = n2.clearButtonTitle, s2 = void 0 === a2 ? "Clear" : a2, c2 = n2.clearButtonAriaLabel, l2 = void 0 === c2 ? "Clear the query" : c2, f2 = n2.closeButtonText, p2 = void 0 === f2 ? "Close" : f2, d2 = n2.closeButtonAriaLabel, h2 = void 0 === d2 ? "Close" : d2, D2 = n2.searchInputLabel, v2 = void 0 === D2 ? "Search" : D2, m2 = n2.backToKeywordSearchButtonText, y2 = void 0 === m2 ? "Back to keyword search" : m2, g2 = n2.backToKeywordSearchButtonAriaLabel, F2 = void 0 === g2 ? "Back to keyword search" : g2, E2 = n2.placeholderTextAskAiStreaming, _2 = void 0 === E2 ? "Answering..." : E2, C2 = n2.newConversationPlaceholder, b2 = void 0 === C2 ? "Ask a question" : C2, A2 = n2.conversationHistoryTitle, w2 = void 0 === A2 ? "My conversation history" : A2, S2 = n2.startNewConversationText, k2 = void 0 === S2 ? "Start a new conversation" : S2, O2 = n2.viewConversationHistoryText, P2 = void 0 === O2 ? "Conversation history" : O2, B2 = n2.threadDepthErrorPlaceholder, x2 = void 0 === B2 ? "Conversation limit reached" : B2, R2 = i2.getFormProps({ inputElement: i2.inputRef.current }).onReset;
  Mt.useEffect(function() {
    i2.autoFocus && i2.inputRef.current && i2.inputRef.current.focus();
  }, [i2.autoFocus, i2.inputRef]), Mt.useEffect(function() {
    i2.isFromSelection && i2.inputRef.current && i2.inputRef.current.select();
  }, [i2.isFromSelection, i2.inputRef]);
  var j2 = Mt.useMemo(function() {
    var e9 = i2.state.collections[2];
    return !!e9 && e9.items.length > 0;
  }, [i2.state.collections]), I2 = i2.getInputProps({ inputElement: i2.inputRef.current, autoFocus: i2.autoFocus, maxLength: 512 }), T2 = /* @__PURE__ */ new Set(["ArrowUp", "ArrowDown", "Enter"]), N2 = I2.onKeyDown, M2 = I2.onChange, L2 = "streaming" === i2.askAiStatus || "submitted" === i2.askAiStatus, U2 = "stalled" === i2.state.status, q2 = i2.isAskAiActive && "conversation-history" !== r2, H2 = i2.isThreadDepthError || false, z2 = i2.placeholder;
  "new-conversation" === r2 && (z2 = b2), H2 && i2.isAskAiActive && (z2 = x2);
  var $2 = null;
  L2 && ($2 = _2), "conversation-history" === r2 && ($2 = w2), Mt.useEffect(function() {
    "streaming" !== i2.askAiStatus && "submitted" !== i2.askAiStatus && i2.inputRef.current && i2.inputRef.current.focus();
  }, [i2.askAiStatus, i2.inputRef]);
  var K2 = an(an({}, I2), {}, { enterKeyHint: i2.isAskAiActive ? "enter" : "search", onKeyDown: function(e9) {
    if (i2.isAskAiActive && T2.has(e9.key)) return "Enter" === e9.key && !L2 && i2.state.query && i2.onAskAgain(i2.state.query), e9.preventDefault(), void e9.stopPropagation();
    null == N2 || N2(e9);
  }, onChange: function(e9) {
    if (i2.isAskAiActive) return i2.setQuery(e9.currentTarget.value), e9.preventDefault(), void e9.stopPropagation();
    null == M2 || M2(e9);
  }, disabled: L2 || H2 && i2.isAskAiActive }), W2 = Mt.useCallback(function() {
    if (!H2) return "conversation-history" === r2 ? (u2(true), void o2("initial")) : void u2(false);
    i2.onNewConversation();
  }, [r2, H2, u2, o2, i2]);
  return Mt.createElement(Mt.Fragment, null, Mt.createElement("form", { className: "DocSearch-Form", onSubmit: function(e9) {
    e9.preventDefault();
  }, onReset: R2 }, i2.isAskAiActive ? Mt.createElement(Mt.Fragment, null, Mt.createElement("button", { type: "button", tabIndex: 0, className: "DocSearch-Action DocSearch-AskAi-Return", title: y2, "aria-label": F2, onClick: W2 }, Mt.createElement(ca, null))) : Mt.createElement(Mt.Fragment, null, U2 && Mt.createElement("div", { className: "DocSearch-LoadingIndicator" }, Mt.createElement(Ju, null)), !U2 && Mt.createElement("label", un({ className: "DocSearch-MagnifierLabel" }, i2.getLabelProps()), Mt.createElement(En, null), Mt.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, v2))), $2 && Mt.createElement(da, { heading: $2, shimmer: L2 }), Mt.createElement("input", un({ className: "DocSearch-Input", ref: i2.inputRef }, K2, { placeholder: z2, hidden: Boolean($2) })), Mt.createElement("div", { className: "DocSearch-Actions" }, Mt.createElement("button", { className: "DocSearch-Clear", type: "reset", "aria-label": l2, hidden: !i2.state.query, tabIndex: i2.state.query ? 0 : -1, "aria-hidden": i2.state.query ? "false" : "true" }, s2), i2.state.query && Mt.createElement("div", { className: "DocSearch-Divider" }), L2 && Mt.createElement(Mt.Fragment, null, Mt.createElement("button", { type: "button", className: "DocSearch-Action DocSearch-StopStreaming", onClick: i2.onStopAskAiStreaming }, Mt.createElement(ao, null)), Mt.createElement("div", { className: "DocSearch-Divider" })), q2 && Mt.createElement(Mt.Fragment, null, Mt.createElement(pa, null, Mt.createElement(pa.Trigger, { className: "DocSearch-Action" }, Mt.createElement(lo, null)), Mt.createElement(pa.Content, null, Mt.createElement(pa.Item, { onClick: i2.onNewConversation }, Mt.createElement(po, null), k2), j2 && Mt.createElement(pa.Item, { onClick: i2.onViewConversationHistory }, Mt.createElement(fo, null), P2))), Mt.createElement("div", { className: "DocSearch-Divider" })), Mt.createElement("button", { type: "button", title: p2, className: "DocSearch-Action DocSearch-Close", "aria-label": h2, onClick: i2.onClose }, Mt.createElement(Xu, null)))));
}
function va() {
  if ("undefined" != typeof window && window.localStorage) {
    var e8 = [];
    for (var t2 in window.localStorage) if (t2.includes("__DOCSEARCH_")) {
      var n2 = window.localStorage[t2];
      e8.push({ key: t2, size: n2.length + t2.length });
    }
    e8.sort(function(e9, t3) {
      return t3.size - e9.size;
    });
    for (var r2 = Math.ceil(e8.length / 2), u2 = 0; u2 < r2 && u2 < e8.length; u2++) try {
      window.localStorage.removeItem(e8[u2].key);
    } catch (e9) {
    }
  }
}
function ma(e8) {
  return false === function() {
    if ("undefined" == typeof window || !("localStorage" in window)) return false;
    var e9 = "__TEST_KEY__";
    try {
      return window.localStorage.setItem(e9, ""), window.localStorage.removeItem(e9), true;
    } catch (e10) {
      return false;
    }
  }() ? { setItem: function() {
  }, getItem: function() {
    return [];
  } } : { setItem: function(t2) {
    !function(e9, t3) {
      try {
        window.localStorage.setItem(e9, JSON.stringify(t3));
      } catch (n2) {
        if (n2 instanceof DOMException && "QuotaExceededError" === n2.name) try {
          va(), window.localStorage.setItem(e9, JSON.stringify(t3));
        } catch (e10) {
        }
      }
    }(e8, t2);
  }, getItem: function() {
    var t2 = window.localStorage.getItem(e8);
    if (null === t2) return [];
    try {
      var n2 = JSON.parse(t2);
      return Array.isArray(n2) ? n2 : [];
    } catch (t3) {
      return window.localStorage.removeItem(e8), [];
    }
  } };
}
var ya = ["_highlightResult", "_snippetResult"];
function ga(e8) {
  var t2 = e8.key, n2 = e8.limit, r2 = void 0 === n2 ? 5 : n2, u2 = ma(t2), o2 = u2.getItem().slice(0, r2);
  return { add: function(e9) {
    var t3 = e9;
    t3._highlightResult, t3._snippetResult;
    var n3 = sn(t3, ya), i2 = o2.findIndex(function(e10) {
      return e10.objectID === n3.objectID;
    });
    i2 > -1 && o2.splice(i2, 1), o2.unshift(n3), o2 = o2.slice(0, r2), u2.setItem(o2);
  }, remove: function(e9) {
    o2 = o2.filter(function(t3) {
      return t3.objectID !== e9.objectID;
    }), u2.setItem(o2);
  }, getAll: function() {
    return o2;
  } };
}
function Fa(e8) {
  var t2 = e8.key, n2 = e8.limit, r2 = void 0 === n2 ? 5 : n2, u2 = ma(t2), o2 = u2.getItem().slice(0, r2);
  return { add: function(e9) {
    var t3 = e9.objectID, n3 = e9.query, i2 = o2.findIndex(function(e10) {
      return e10.objectID === t3 || e10.query === n3;
    });
    i2 > -1 ? o2[i2] = e9 : (o2.unshift(e9), o2 = o2.slice(0, r2)), u2.setItem(o2);
  }, addFeedback: function(e9, t3) {
    var n3 = o2.find(function(t4) {
      var n4;
      return null === (n4 = t4.messages) || void 0 === n4 ? void 0 : n4.some(function(t5) {
        return t5.id === e9;
      });
    });
    if (n3 && n3.messages) {
      var r3 = n3.messages.find(function(t4) {
        return t4.id === e9;
      });
      r3 && (r3.feedback = t3, u2.setItem(o2));
    }
  }, getOne: function(e9) {
    var t3, n3 = o2.find(function(t4) {
      var n4;
      return null === (n4 = t4.messages) || void 0 === n4 ? void 0 : n4.some(function(t5) {
        return t5.id === e9;
      });
    });
    return null == n3 || null === (t3 = n3.messages) || void 0 === t3 ? void 0 : t3.find(function(t4) {
      return t4.id === e9;
    });
  }, getAll: function() {
    return o2;
  }, remove: function(e9) {
    o2 = o2.filter(function(t3) {
      return t3.objectID !== e9.objectID;
    }), u2.setItem(o2);
  }, getConversation: function(e9) {
    var t3 = o2.find(function(t4) {
      var n3;
      return null === (n3 = t4.messages) || void 0 === n3 ? void 0 : n3.some(function(t5) {
        return t5.id === e9;
      });
    });
    if (t3 && t3.messages) return t3;
  } };
}
var Ea = function() {
  return "undefined" != typeof crypto && "randomUUID" in crypto ? crypto.randomUUID() : "msg_".concat(Math.random().toString(36).slice(2, 10));
};
var _a = function(e8) {
  var t2, n2, r2 = function(e9) {
    var t3, n3, r3 = null !== (t3 = e9.nearestNode) && void 0 !== t3 ? t3 : null === (n3 = e9.nodes) || void 0 === n3 ? void 0 : n3[0];
    if (!r3) throw new Error("Typesense requires at least one configured node.");
    return r3;
  }(e8);
  if (r2.url) return r2.url;
  if (!r2.host) throw new Error("Typesense node configuration must include either `url` or `host`.");
  var u2 = null !== (t2 = r2.protocol) && void 0 !== t2 ? t2 : "https", o2 = r2.port ? ":".concat(r2.port) : "", i2 = null !== (n2 = r2.path) && void 0 !== n2 ? n2 : "";
  return "".concat(u2, "://").concat(r2.host).concat(o2).concat(i2);
};
var Ca = function(e8) {
  for (var t2 = e8.length - 1; t2 >= 0; t2--) {
    var n2, r2 = null === (n2 = e8[t2]) || void 0 === n2 || null === (n2 = n2.metadata) || void 0 === n2 ? void 0 : n2.conversationId;
    if (r2) return r2;
  }
};
var ba = function(e8) {
  return { id: Ea(), role: "assistant", parts: [{ type: "text", text: "", state: "streaming" }], metadata: e8 ? { conversationId: e8 } : {} };
};
var Aa = function(e8) {
  return { id: Ea(), role: "user", parts: [{ type: "text", text: e8, state: "done" }] };
};
var wa = function(e8, t2, n2) {
  return e8.map(function(e9) {
    return e9.id !== t2 ? e9 : n2(e9);
  });
};
var Sa = function(e8) {
  return e8.split("\n").map(function(e9) {
    return e9.trim();
  }).filter(function(e9) {
    return e9.startsWith("data:");
  }).map(function(e9) {
    return e9.slice(5).trim();
  }).filter(Boolean);
};
var ka = function(e8) {
  var t2, n2 = e8.replace(/\r\n/g, "\n").split("\n\n");
  return { events: n2.slice(0, -1), remainder: null !== (t2 = n2.at(-1)) && void 0 !== t2 ? t2 : "" };
};
var Oa = function(e8) {
  var t2 = e8.collection, n2 = e8.queryBy, r2 = e8.excludeFields, u2 = e8.searchParameters;
  return an({ collection: t2, query_by: n2, exclude_fields: r2 }, null != u2 ? u2 : {});
};
var Pa = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function Ba(e8) {
  if (Object.prototype.hasOwnProperty.call(e8, "__esModule")) return e8;
  var t2 = e8.default;
  if ("function" == typeof t2) {
    var n2 = function e9() {
      var n3 = false;
      try {
        n3 = this instanceof e9;
      } catch (e10) {
      }
      return n3 ? Reflect.construct(t2, arguments, this.constructor) : t2.apply(this, arguments);
    };
    n2.prototype = t2.prototype;
  } else n2 = {};
  return Object.defineProperty(n2, "__esModule", { value: true }), Object.keys(e8).forEach(function(t3) {
    var r2 = Object.getOwnPropertyDescriptor(e8, t3);
    Object.defineProperty(n2, t3, r2.get ? r2 : { enumerable: true, get: function() {
      return e8[t3];
    } });
  }), n2;
}
var xa = {};
var Ra = function(e8, t2) {
  return Ra = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e9, t3) {
    e9.__proto__ = t3;
  } || function(e9, t3) {
    for (var n2 in t3) Object.prototype.hasOwnProperty.call(t3, n2) && (e9[n2] = t3[n2]);
  }, Ra(e8, t2);
};
function ja(e8, t2) {
  if ("function" != typeof t2 && null !== t2) throw new TypeError("Class extends value " + String(t2) + " is not a constructor or null");
  function n2() {
    this.constructor = e8;
  }
  Ra(e8, t2), e8.prototype = null === t2 ? Object.create(t2) : (n2.prototype = t2.prototype, new n2());
}
var Ia = function() {
  return Ia = Object.assign || function(e8) {
    for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var u2 in t2 = arguments[n2]) Object.prototype.hasOwnProperty.call(t2, u2) && (e8[u2] = t2[u2]);
    return e8;
  }, Ia.apply(this, arguments);
};
function Ta(e8, t2) {
  var n2 = {};
  for (var r2 in e8) Object.prototype.hasOwnProperty.call(e8, r2) && t2.indexOf(r2) < 0 && (n2[r2] = e8[r2]);
  if (null != e8 && "function" == typeof Object.getOwnPropertySymbols) {
    var u2 = 0;
    for (r2 = Object.getOwnPropertySymbols(e8); u2 < r2.length; u2++) t2.indexOf(r2[u2]) < 0 && Object.prototype.propertyIsEnumerable.call(e8, r2[u2]) && (n2[r2[u2]] = e8[r2[u2]]);
  }
  return n2;
}
function Na(e8, t2, n2, r2) {
  var u2, o2 = arguments.length, i2 = o2 < 3 ? t2 : null === r2 ? r2 = Object.getOwnPropertyDescriptor(t2, n2) : r2;
  if ("object" == ("undefined" == typeof Reflect ? "undefined" : w(Reflect)) && "function" == typeof Reflect.decorate) i2 = Reflect.decorate(e8, t2, n2, r2);
  else for (var a2 = e8.length - 1; a2 >= 0; a2--) (u2 = e8[a2]) && (i2 = (o2 < 3 ? u2(i2) : o2 > 3 ? u2(t2, n2, i2) : u2(t2, n2)) || i2);
  return o2 > 3 && i2 && Object.defineProperty(t2, n2, i2), i2;
}
function Ma(e8, t2) {
  return function(n2, r2) {
    t2(n2, r2, e8);
  };
}
function La(e8, t2, n2, r2, u2, o2) {
  function i2(e9) {
    if (void 0 !== e9 && "function" != typeof e9) throw new TypeError("Function expected");
    return e9;
  }
  for (var a2, s2 = r2.kind, c2 = "getter" === s2 ? "get" : "setter" === s2 ? "set" : "value", l2 = !t2 && e8 ? r2.static ? e8 : e8.prototype : null, f2 = t2 || (l2 ? Object.getOwnPropertyDescriptor(l2, r2.name) : {}), p2 = false, d2 = n2.length - 1; d2 >= 0; d2--) {
    var h2 = {};
    for (var D2 in r2) h2[D2] = "access" === D2 ? {} : r2[D2];
    for (var D2 in r2.access) h2.access[D2] = r2.access[D2];
    h2.addInitializer = function(e9) {
      if (p2) throw new TypeError("Cannot add initializers after decoration has completed");
      o2.push(i2(e9 || null));
    };
    var v2 = (0, n2[d2])("accessor" === s2 ? { get: f2.get, set: f2.set } : f2[c2], h2);
    if ("accessor" === s2) {
      if (void 0 === v2) continue;
      if (null === v2 || "object" != w(v2)) throw new TypeError("Object expected");
      (a2 = i2(v2.get)) && (f2.get = a2), (a2 = i2(v2.set)) && (f2.set = a2), (a2 = i2(v2.init)) && u2.unshift(a2);
    } else (a2 = i2(v2)) && ("field" === s2 ? u2.unshift(a2) : f2[c2] = a2);
  }
  l2 && Object.defineProperty(l2, r2.name, f2), p2 = true;
}
function Ua(e8, t2, n2) {
  for (var r2 = arguments.length > 2, u2 = 0; u2 < t2.length; u2++) n2 = r2 ? t2[u2].call(e8, n2) : t2[u2].call(e8);
  return r2 ? n2 : void 0;
}
function qa(e8) {
  return "symbol" == w(e8) ? e8 : "".concat(e8);
}
function Ha(e8, t2, n2) {
  return "symbol" == w(t2) && (t2 = t2.description ? "[".concat(t2.description, "]") : ""), Object.defineProperty(e8, "name", { configurable: true, value: n2 ? "".concat(n2, " ", t2) : t2 });
}
function za(e8, t2) {
  if ("object" == ("undefined" == typeof Reflect ? "undefined" : w(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e8, t2);
}
function $a(e8, t2, n2, r2) {
  return new (n2 || (n2 = Promise))(function(u2, o2) {
    function i2(e9) {
      try {
        s2(r2.next(e9));
      } catch (e10) {
        o2(e10);
      }
    }
    function a2(e9) {
      try {
        s2(r2.throw(e9));
      } catch (e10) {
        o2(e10);
      }
    }
    function s2(e9) {
      var t3;
      e9.done ? u2(e9.value) : (t3 = e9.value, t3 instanceof n2 ? t3 : new n2(function(e10) {
        e10(t3);
      })).then(i2, a2);
    }
    s2((r2 = r2.apply(e8, t2 || [])).next());
  });
}
function Ka(e8, t2) {
  var n2, r2, u2, o2 = { label: 0, sent: function() {
    if (1 & u2[0]) throw u2[1];
    return u2[1];
  }, trys: [], ops: [] }, i2 = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
  return i2.next = a2(0), i2.throw = a2(1), i2.return = a2(2), "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
    return this;
  }), i2;
  function a2(a3) {
    return function(s2) {
      return function(a4) {
        if (n2) throw new TypeError("Generator is already executing.");
        for (; i2 && (i2 = 0, a4[0] && (o2 = 0)), o2; ) try {
          if (n2 = 1, r2 && (u2 = 2 & a4[0] ? r2.return : a4[0] ? r2.throw || ((u2 = r2.return) && u2.call(r2), 0) : r2.next) && !(u2 = u2.call(r2, a4[1])).done) return u2;
          switch (r2 = 0, u2 && (a4 = [2 & a4[0], u2.value]), a4[0]) {
            case 0:
            case 1:
              u2 = a4;
              break;
            case 4:
              return o2.label++, { value: a4[1], done: false };
            case 5:
              o2.label++, r2 = a4[1], a4 = [0];
              continue;
            case 7:
              a4 = o2.ops.pop(), o2.trys.pop();
              continue;
            default:
              if (!((u2 = (u2 = o2.trys).length > 0 && u2[u2.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                o2 = 0;
                continue;
              }
              if (3 === a4[0] && (!u2 || a4[1] > u2[0] && a4[1] < u2[3])) {
                o2.label = a4[1];
                break;
              }
              if (6 === a4[0] && o2.label < u2[1]) {
                o2.label = u2[1], u2 = a4;
                break;
              }
              if (u2 && o2.label < u2[2]) {
                o2.label = u2[2], o2.ops.push(a4);
                break;
              }
              u2[2] && o2.ops.pop(), o2.trys.pop();
              continue;
          }
          a4 = t2.call(e8, o2);
        } catch (e9) {
          a4 = [6, e9], r2 = 0;
        } finally {
          n2 = u2 = 0;
        }
        if (5 & a4[0]) throw a4[1];
        return { value: a4[0] ? a4[1] : void 0, done: true };
      }([a3, s2]);
    };
  }
}
var Wa = Object.create ? function(e8, t2, n2, r2) {
  void 0 === r2 && (r2 = n2);
  var u2 = Object.getOwnPropertyDescriptor(t2, n2);
  u2 && !("get" in u2 ? !t2.__esModule : u2.writable || u2.configurable) || (u2 = { enumerable: true, get: function() {
    return t2[n2];
  } }), Object.defineProperty(e8, r2, u2);
} : function(e8, t2, n2, r2) {
  void 0 === r2 && (r2 = n2), e8[r2] = t2[n2];
};
function Va(e8, t2) {
  for (var n2 in e8) "default" === n2 || Object.prototype.hasOwnProperty.call(t2, n2) || Wa(t2, e8, n2);
}
function Qa(e8) {
  var t2 = "function" == typeof Symbol && Symbol.iterator, n2 = t2 && e8[t2], r2 = 0;
  if (n2) return n2.call(e8);
  if (e8 && "number" == typeof e8.length) return { next: function() {
    return e8 && r2 >= e8.length && (e8 = void 0), { value: e8 && e8[r2++], done: !e8 };
  } };
  throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ja(e8, t2) {
  var n2 = "function" == typeof Symbol && e8[Symbol.iterator];
  if (!n2) return e8;
  var r2, u2, o2 = n2.call(e8), i2 = [];
  try {
    for (; (void 0 === t2 || t2-- > 0) && !(r2 = o2.next()).done; ) i2.push(r2.value);
  } catch (e9) {
    u2 = { error: e9 };
  } finally {
    try {
      r2 && !r2.done && (n2 = o2.return) && n2.call(o2);
    } finally {
      if (u2) throw u2.error;
    }
  }
  return i2;
}
function Za() {
  for (var e8 = [], t2 = 0; t2 < arguments.length; t2++) e8 = e8.concat(Ja(arguments[t2]));
  return e8;
}
function Ga() {
  for (var e8 = 0, t2 = 0, n2 = arguments.length; t2 < n2; t2++) e8 += arguments[t2].length;
  var r2 = Array(e8), u2 = 0;
  for (t2 = 0; t2 < n2; t2++) for (var o2 = arguments[t2], i2 = 0, a2 = o2.length; i2 < a2; i2++, u2++) r2[u2] = o2[i2];
  return r2;
}
function Xa(e8, t2, n2) {
  if (n2 || 2 === arguments.length) for (var r2, u2 = 0, o2 = t2.length; u2 < o2; u2++) !r2 && u2 in t2 || (r2 || (r2 = Array.prototype.slice.call(t2, 0, u2)), r2[u2] = t2[u2]);
  return e8.concat(r2 || Array.prototype.slice.call(t2));
}
function Ya(e8) {
  return this instanceof Ya ? (this.v = e8, this) : new Ya(e8);
}
function es(e8, t2, n2) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r2, u2 = n2.apply(e8, t2 || []), o2 = [];
  return r2 = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i2("next"), i2("throw"), i2("return", function(e9) {
    return function(t3) {
      return Promise.resolve(t3).then(e9, c2);
    };
  }), r2[Symbol.asyncIterator] = function() {
    return this;
  }, r2;
  function i2(e9, t3) {
    u2[e9] && (r2[e9] = function(t4) {
      return new Promise(function(n3, r3) {
        o2.push([e9, t4, n3, r3]) > 1 || a2(e9, t4);
      });
    }, t3 && (r2[e9] = t3(r2[e9])));
  }
  function a2(e9, t3) {
    try {
      (n3 = u2[e9](t3)).value instanceof Ya ? Promise.resolve(n3.value.v).then(s2, c2) : l2(o2[0][2], n3);
    } catch (e10) {
      l2(o2[0][3], e10);
    }
    var n3;
  }
  function s2(e9) {
    a2("next", e9);
  }
  function c2(e9) {
    a2("throw", e9);
  }
  function l2(e9, t3) {
    e9(t3), o2.shift(), o2.length && a2(o2[0][0], o2[0][1]);
  }
}
function ts(e8) {
  var t2, n2;
  return t2 = {}, r2("next"), r2("throw", function(e9) {
    throw e9;
  }), r2("return"), t2[Symbol.iterator] = function() {
    return this;
  }, t2;
  function r2(r3, u2) {
    t2[r3] = e8[r3] ? function(t3) {
      return (n2 = !n2) ? { value: Ya(e8[r3](t3)), done: false } : u2 ? u2(t3) : t3;
    } : u2;
  }
}
function ns(e8) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t2, n2 = e8[Symbol.asyncIterator];
  return n2 ? n2.call(e8) : (e8 = Qa(e8), t2 = {}, r2("next"), r2("throw"), r2("return"), t2[Symbol.asyncIterator] = function() {
    return this;
  }, t2);
  function r2(n3) {
    t2[n3] = e8[n3] && function(t3) {
      return new Promise(function(r3, u2) {
        !function(e9, t4, n4, r4) {
          Promise.resolve(r4).then(function(t5) {
            e9({ value: t5, done: n4 });
          }, t4);
        }(r3, u2, (t3 = e8[n3](t3)).done, t3.value);
      });
    };
  }
}
function rs(e8, t2) {
  return Object.defineProperty ? Object.defineProperty(e8, "raw", { value: t2 }) : e8.raw = t2, e8;
}
var us = Object.create ? function(e8, t2) {
  Object.defineProperty(e8, "default", { enumerable: true, value: t2 });
} : function(e8, t2) {
  e8.default = t2;
};
var os = function(e8) {
  return os = Object.getOwnPropertyNames || function(e9) {
    var t2 = [];
    for (var n2 in e9) Object.prototype.hasOwnProperty.call(e9, n2) && (t2[t2.length] = n2);
    return t2;
  }, os(e8);
};
function is(e8) {
  if (e8 && e8.__esModule) return e8;
  var t2 = {};
  if (null != e8) for (var n2 = os(e8), r2 = 0; r2 < n2.length; r2++) "default" !== n2[r2] && Wa(t2, e8, n2[r2]);
  return us(t2, e8), t2;
}
function as(e8) {
  return e8 && e8.__esModule ? e8 : { default: e8 };
}
function ss(e8, t2, n2, r2) {
  if ("a" === n2 && !r2) throw new TypeError("Private accessor was defined without a getter");
  if ("function" == typeof t2 ? e8 !== t2 || !r2 : !t2.has(e8)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return "m" === n2 ? r2 : "a" === n2 ? r2.call(e8) : r2 ? r2.value : t2.get(e8);
}
function cs(e8, t2, n2, r2, u2) {
  if ("m" === r2) throw new TypeError("Private method is not writable");
  if ("a" === r2 && !u2) throw new TypeError("Private accessor was defined without a setter");
  if ("function" == typeof t2 ? e8 !== t2 || !u2 : !t2.has(e8)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return "a" === r2 ? u2.call(e8, n2) : u2 ? u2.value = n2 : t2.set(e8, n2), n2;
}
function ls(e8, t2) {
  if (null === t2 || "object" != w(t2) && "function" != typeof t2) throw new TypeError("Cannot use 'in' operator on non-object");
  return "function" == typeof e8 ? t2 === e8 : e8.has(t2);
}
function fs(e8, t2, n2) {
  if (null != t2) {
    if ("object" != w(t2) && "function" != typeof t2) throw new TypeError("Object expected.");
    var r2, u2;
    if (n2) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r2 = t2[Symbol.asyncDispose];
    }
    if (void 0 === r2) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r2 = t2[Symbol.dispose], n2 && (u2 = r2);
    }
    if ("function" != typeof r2) throw new TypeError("Object not disposable.");
    u2 && (r2 = function() {
      try {
        u2.call(this);
      } catch (e9) {
        return Promise.reject(e9);
      }
    }), e8.stack.push({ value: t2, dispose: r2, async: n2 });
  } else n2 && e8.stack.push({ async: true });
  return t2;
}
var ps = "function" == typeof SuppressedError ? SuppressedError : function(e8, t2, n2) {
  var r2 = new Error(n2);
  return r2.name = "SuppressedError", r2.error = e8, r2.suppressed = t2, r2;
};
function ds(e8) {
  function t2(t3) {
    e8.error = e8.hasError ? new ps(t3, e8.error, "An error was suppressed during disposal.") : t3, e8.hasError = true;
  }
  var n2, r2 = 0;
  return function u2() {
    for (; n2 = e8.stack.pop(); ) try {
      if (!n2.async && 1 === r2) return r2 = 0, e8.stack.push(n2), Promise.resolve().then(u2);
      if (n2.dispose) {
        var o2 = n2.dispose.call(n2.value);
        if (n2.async) return r2 |= 2, Promise.resolve(o2).then(u2, function(e9) {
          return t2(e9), u2();
        });
      } else r2 |= 1;
    } catch (e9) {
      t2(e9);
    }
    if (1 === r2) return e8.hasError ? Promise.reject(e8.error) : Promise.resolve();
    if (e8.hasError) throw e8.error;
  }();
}
function hs(e8, t2) {
  return "string" == typeof e8 && /^\.\.?\//.test(e8) ? e8.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e9, n2, r2, u2, o2) {
    return n2 ? t2 ? ".jsx" : ".js" : !r2 || u2 && o2 ? r2 + u2 + "." + o2.toLowerCase() + "js" : e9;
  }) : e8;
}
var Ds;
var vs = { __extends: ja, __assign: Ia, __rest: Ta, __decorate: Na, __param: Ma, __esDecorate: La, __runInitializers: Ua, __propKey: qa, __setFunctionName: Ha, __metadata: za, __awaiter: $a, __generator: Ka, __createBinding: Wa, __exportStar: Va, __values: Qa, __read: Ja, __spread: Za, __spreadArrays: Ga, __spreadArray: Xa, __await: Ya, __asyncGenerator: es, __asyncDelegator: ts, __asyncValues: ns, __makeTemplateObject: rs, __importStar: is, __importDefault: as, __classPrivateFieldGet: ss, __classPrivateFieldSet: cs, __classPrivateFieldIn: ls, __addDisposableResource: fs, __disposeResources: ds, __rewriteRelativeImportExtension: hs };
var ms = Ba(Object.freeze({ __proto__: null, __addDisposableResource: fs, get __assign() {
  return Ia;
}, __asyncDelegator: ts, __asyncGenerator: es, __asyncValues: ns, __await: Ya, __awaiter: $a, __classPrivateFieldGet: ss, __classPrivateFieldIn: ls, __classPrivateFieldSet: cs, __createBinding: Wa, __decorate: Na, __disposeResources: ds, __esDecorate: La, __exportStar: Va, __extends: ja, __generator: Ka, __importDefault: as, __importStar: is, __makeTemplateObject: rs, __metadata: za, __param: Ma, __propKey: qa, __read: Ja, __rest: Ta, __rewriteRelativeImportExtension: hs, __runInitializers: Ua, __setFunctionName: Ha, __spread: Za, __spreadArray: Xa, __spreadArrays: Ga, __values: Qa, default: vs }));
var ys = {};
var gs = {};
var Fs = { exports: {} };
var Es = Fs.exports;
function _s() {
  return Ds || (Ds = 1, t2 = Es, n2 = function() {
    var e9 = function() {
    }, t3 = "undefined", n3 = ("undefined" == typeof window ? "undefined" : Dn(window)) !== t3 && Dn(window.navigator) !== t3 && /Trident\/|MSIE /.test(window.navigator.userAgent), r2 = ["trace", "debug", "info", "warn", "error"], u2 = {}, o2 = null;
    function i2(e10, t4) {
      var n4 = e10[t4];
      if ("function" == typeof n4.bind) return n4.bind(e10);
      try {
        return Function.prototype.bind.call(n4, e10);
      } catch (t5) {
        return function() {
          return Function.prototype.apply.apply(n4, [e10, arguments]);
        };
      }
    }
    function a2() {
      console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
    }
    function s2() {
      for (var n4 = this.getLevel(), u3 = 0; u3 < r2.length; u3++) {
        var o3 = r2[u3];
        this[o3] = u3 < n4 ? e9 : this.methodFactory(o3, n4, this.name);
      }
      if (this.log = this.debug, ("undefined" == typeof console ? "undefined" : Dn(console)) === t3 && n4 < this.levels.SILENT) return "No console available for logging";
    }
    function c2(e10) {
      return function() {
        ("undefined" == typeof console ? "undefined" : Dn(console)) !== t3 && (s2.call(this), this[e10].apply(this, arguments));
      };
    }
    function l2(r3, u3, o3) {
      return function(r4) {
        return "debug" === r4 && (r4 = "log"), ("undefined" == typeof console ? "undefined" : Dn(console)) !== t3 && ("trace" === r4 && n3 ? a2 : void 0 !== console[r4] ? i2(console, r4) : void 0 !== console.log ? i2(console, "log") : e9);
      }(r3) || c2.apply(this, arguments);
    }
    function f2(e10, n4) {
      var i3, a3, c3, f3 = this, p3 = "loglevel";
      function d2() {
        var e11;
        if (("undefined" == typeof window ? "undefined" : Dn(window)) !== t3 && p3) {
          try {
            e11 = window.localStorage[p3];
          } catch (e12) {
          }
          if (Dn(e11) === t3) try {
            var n5 = window.document.cookie, r3 = encodeURIComponent(p3), u3 = n5.indexOf(r3 + "=");
            -1 !== u3 && (e11 = /^([^;]+)/.exec(n5.slice(u3 + r3.length + 1))[1]);
          } catch (e12) {
          }
          return void 0 === f3.levels[e11] && (e11 = void 0), e11;
        }
      }
      function h2(e11) {
        var t4 = e11;
        if ("string" == typeof t4 && void 0 !== f3.levels[t4.toUpperCase()] && (t4 = f3.levels[t4.toUpperCase()]), "number" == typeof t4 && t4 >= 0 && t4 <= f3.levels.SILENT) return t4;
        throw new TypeError("log.setLevel() called with invalid level: " + e11);
      }
      "string" == typeof e10 ? p3 += ":" + e10 : "symbol" === Dn(e10) && (p3 = void 0), f3.name = e10, f3.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, f3.methodFactory = n4 || l2, f3.getLevel = function() {
        return null != c3 ? c3 : null != a3 ? a3 : i3;
      }, f3.setLevel = function(e11, n5) {
        return c3 = h2(e11), false !== n5 && function(e12) {
          var n6 = (r2[e12] || "silent").toUpperCase();
          if (("undefined" == typeof window ? "undefined" : Dn(window)) !== t3 && p3) {
            try {
              return void (window.localStorage[p3] = n6);
            } catch (e13) {
            }
            try {
              window.document.cookie = encodeURIComponent(p3) + "=" + n6 + ";";
            } catch (e13) {
            }
          }
        }(c3), s2.call(f3);
      }, f3.setDefaultLevel = function(e11) {
        a3 = h2(e11), d2() || f3.setLevel(e11, false);
      }, f3.resetLevel = function() {
        c3 = null, function() {
          if (("undefined" == typeof window ? "undefined" : Dn(window)) !== t3 && p3) {
            try {
              window.localStorage.removeItem(p3);
            } catch (e11) {
            }
            try {
              window.document.cookie = encodeURIComponent(p3) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            } catch (e11) {
            }
          }
        }(), s2.call(f3);
      }, f3.enableAll = function(e11) {
        f3.setLevel(f3.levels.TRACE, e11);
      }, f3.disableAll = function(e11) {
        f3.setLevel(f3.levels.SILENT, e11);
      }, f3.rebuild = function() {
        if (o2 !== f3 && (i3 = h2(o2.getLevel())), s2.call(f3), o2 === f3) for (var e11 in u2) u2[e11].rebuild();
      }, i3 = h2(o2 ? o2.getLevel() : "WARN");
      var D2 = d2();
      null != D2 && (c3 = h2(D2)), s2.call(f3);
    }
    (o2 = new f2()).getLogger = function(e10) {
      if ("symbol" !== Dn(e10) && "string" != typeof e10 || "" === e10) throw new TypeError("You must supply a name when creating a logger.");
      var t4 = u2[e10];
      return t4 || (t4 = u2[e10] = new f2(e10, o2.methodFactory)), t4;
    };
    var p2 = ("undefined" == typeof window ? "undefined" : Dn(window)) !== t3 ? window.log : void 0;
    return o2.noConflict = function() {
      return ("undefined" == typeof window ? "undefined" : Dn(window)) !== t3 && window.log === o2 && (window.log = p2), o2;
    }, o2.getLoggers = function() {
      return u2;
    }, o2.default = o2, o2;
  }, (e8 = Fs).exports ? e8.exports = n2() : t2.log = n2()), Fs.exports;
  var e8, t2, n2;
}
var Cs;
var bs;
var As = {};
var ws = {};
var Ss = {};
function ks() {
  if (Cs) return Ss;
  Cs = 1, Object.defineProperty(Ss, "__esModule", { value: true });
  var e8 = ms, t2 = function(t3) {
    function n2(e9, n3, r2) {
      var u2 = this.constructor, o2 = t3.call(this, e9) || this;
      return o2.name = u2.name, o2.httpBody = n3, o2.httpStatus = r2, Object.setPrototypeOf(o2, u2.prototype), o2;
    }
    return e8.__extends(n2, t3), n2;
  }(Error);
  return Ss.default = t2, Ss;
}
var Os;
var Ps;
var Bs;
var xs;
var Rs;
var js;
var Is;
var Ts;
var Ns;
var Ms;
var Ls = {};
var Us = {};
var qs = {};
var Hs = {};
var zs = {};
var $s = {};
var Ks = {};
var Ws = {};
function Vs() {
  if (Ns) return As;
  Ns = 1, Object.defineProperty(As, "__esModule", { value: true }), As.ImportError = As.TypesenseError = As.ServerError = As.RequestUnauthorized = As.RequestMalformed = As.ObjectUnprocessable = As.ObjectNotFound = As.ObjectAlreadyExists = As.MissingConfigurationError = As.HTTPError = void 0;
  var e8 = ms, t2 = e8.__importDefault(function() {
    if (bs) return ws;
    bs = 1, Object.defineProperty(ws, "__esModule", { value: true });
    var e9 = ms, t3 = function(t4) {
      function n3() {
        return null !== t4 && t4.apply(this, arguments) || this;
      }
      return e9.__extends(n3, t4), n3;
    }(e9.__importDefault(ks()).default);
    return ws.default = t3, ws;
  }());
  As.HTTPError = t2.default;
  var n2 = e8.__importDefault(function() {
    if (Os) return Ls;
    Os = 1, Object.defineProperty(Ls, "__esModule", { value: true });
    var e9 = ms, t3 = function(t4) {
      function n3() {
        return null !== t4 && t4.apply(this, arguments) || this;
      }
      return e9.__extends(n3, t4), n3;
    }(e9.__importDefault(ks()).default);
    return Ls.default = t3, Ls;
  }());
  As.MissingConfigurationError = n2.default;
  var r2 = e8.__importDefault(function() {
    if (Ps) return Us;
    Ps = 1, Object.defineProperty(Us, "__esModule", { value: true });
    var e9 = ms, t3 = function(t4) {
      function n3() {
        return null !== t4 && t4.apply(this, arguments) || this;
      }
      return e9.__extends(n3, t4), n3;
    }(e9.__importDefault(ks()).default);
    return Us.default = t3, Us;
  }());
  As.ObjectAlreadyExists = r2.default;
  var u2 = e8.__importDefault(function() {
    if (Bs) return qs;
    Bs = 1, Object.defineProperty(qs, "__esModule", { value: true });
    var e9 = ms, t3 = function(t4) {
      function n3() {
        return null !== t4 && t4.apply(this, arguments) || this;
      }
      return e9.__extends(n3, t4), n3;
    }(e9.__importDefault(ks()).default);
    return qs.default = t3, qs;
  }());
  As.ObjectNotFound = u2.default;
  var o2 = e8.__importDefault(function() {
    if (xs) return Hs;
    xs = 1, Object.defineProperty(Hs, "__esModule", { value: true });
    var e9 = ms, t3 = function(t4) {
      function n3() {
        return null !== t4 && t4.apply(this, arguments) || this;
      }
      return e9.__extends(n3, t4), n3;
    }(e9.__importDefault(ks()).default);
    return Hs.default = t3, Hs;
  }());
  As.ObjectUnprocessable = o2.default;
  var i2 = e8.__importDefault(function() {
    if (Rs) return zs;
    Rs = 1, Object.defineProperty(zs, "__esModule", { value: true });
    var e9 = ms, t3 = function(t4) {
      function n3() {
        return null !== t4 && t4.apply(this, arguments) || this;
      }
      return e9.__extends(n3, t4), n3;
    }(e9.__importDefault(ks()).default);
    return zs.default = t3, zs;
  }());
  As.RequestMalformed = i2.default;
  var a2 = e8.__importDefault(function() {
    if (js) return $s;
    js = 1, Object.defineProperty($s, "__esModule", { value: true });
    var e9 = ms, t3 = function(t4) {
      function n3() {
        return null !== t4 && t4.apply(this, arguments) || this;
      }
      return e9.__extends(n3, t4), n3;
    }(e9.__importDefault(ks()).default);
    return $s.default = t3, $s;
  }());
  As.RequestUnauthorized = a2.default;
  var s2 = e8.__importDefault(function() {
    if (Is) return Ks;
    Is = 1, Object.defineProperty(Ks, "__esModule", { value: true });
    var e9 = ms, t3 = function(t4) {
      function n3() {
        return null !== t4 && t4.apply(this, arguments) || this;
      }
      return e9.__extends(n3, t4), n3;
    }(e9.__importDefault(ks()).default);
    return Ks.default = t3, Ks;
  }());
  As.ServerError = s2.default;
  var c2 = e8.__importDefault(function() {
    if (Ts) return Ws;
    Ts = 1, Object.defineProperty(Ws, "__esModule", { value: true });
    var e9 = ms, t3 = function(t4) {
      function n3(e10, n4, r3) {
        var u3 = t4.call(this, e10) || this;
        return u3.importResults = n4, u3.payload = r3, u3;
      }
      return e9.__extends(n3, t4), n3;
    }(e9.__importDefault(ks()).default);
    return Ws.default = t3, Ws;
  }());
  As.ImportError = c2.default;
  var l2 = e8.__importDefault(ks());
  return As.TypesenseError = l2.default, As;
}
function Qs() {
  if (Ms) return gs;
  Ms = 1, Object.defineProperty(gs, "__esModule", { value: true });
  var e8 = ms, t2 = e8.__importStar(_s()), n2 = Vs(), r2 = function() {
    function r3(n3) {
      var r4 = this;
      this.nodes = n3.nodes || [], this.nodes = this.nodes.map(function(t3) {
        return e8.__assign({}, t3);
      }).map(function(e9) {
        return r4.setDefaultPathInNode(e9);
      }).map(function(e9) {
        return r4.setDefaultPortInNode(e9);
      }), null == n3.randomizeNodes && (n3.randomizeNodes = true), true === n3.randomizeNodes && this.shuffleArray(this.nodes), this.nearestNode = null == n3.nearestNode ? n3.nearestNode : e8.__assign({}, n3.nearestNode), this.nearestNode = this.setDefaultPathInNode(this.nearestNode), this.nearestNode = this.setDefaultPortInNode(this.nearestNode), this.connectionTimeoutSeconds = n3.connectionTimeoutSeconds || n3.timeoutSeconds || 5, this.healthcheckIntervalSeconds = n3.healthcheckIntervalSeconds || 60, this.numRetries = (void 0 !== n3.numRetries && n3.numRetries >= 0 ? n3.numRetries : this.nodes.length + (null == this.nearestNode ? 0 : 1)) || 3, this.retryIntervalSeconds = n3.retryIntervalSeconds || 0.1, this.apiKey = n3.apiKey, this.sendApiKeyAsQueryParam = n3.sendApiKeyAsQueryParam, this.cacheSearchResultsForSeconds = n3.cacheSearchResultsForSeconds || 0, this.useServerSideSearchCache = n3.useServerSideSearchCache || false, this.axiosAdapter = n3.axiosAdapter, this.logger = n3.logger || t2, this.logLevel = n3.logLevel || "warn", this.logger.setLevel(this.logLevel), this.additionalHeaders = n3.additionalHeaders, this.httpAgent = n3.httpAgent, this.httpsAgent = n3.httpsAgent, this.paramsSerializer = n3.paramsSerializer, this.showDeprecationWarnings(n3), this.validate();
    }
    return r3.prototype.validate = function() {
      if (null == this.nodes || 0 === this.nodes.length || this.validateNodes()) throw new n2.MissingConfigurationError("Ensure that nodes[].protocol, nodes[].host and nodes[].port are set");
      if (null != this.nearestNode && this.isNodeMissingAnyParameters(this.nearestNode)) throw new n2.MissingConfigurationError("Ensure that nearestNodes.protocol, nearestNodes.host and nearestNodes.port are set");
      if (null == this.apiKey) throw new n2.MissingConfigurationError("Ensure that apiKey is set");
      return true;
    }, r3.prototype.validateNodes = function() {
      var e9 = this;
      return this.nodes.some(function(t3) {
        return e9.isNodeMissingAnyParameters(t3);
      });
    }, r3.prototype.isNodeMissingAnyParameters = function(e9) {
      return !["protocol", "host", "port", "path"].every(function(t3) {
        return e9.hasOwnProperty(t3);
      }) && null == e9.url;
    }, r3.prototype.setDefaultPathInNode = function(e9) {
      return null == e9 || e9.hasOwnProperty("path") || (e9.path = ""), e9;
    }, r3.prototype.setDefaultPortInNode = function(e9) {
      if (null != e9 && !e9.hasOwnProperty("port") && e9.hasOwnProperty("protocol")) switch (e9.protocol) {
        case "https":
          e9.port = 443;
          break;
        case "http":
          e9.port = 80;
      }
      return e9;
    }, r3.prototype.showDeprecationWarnings = function(e9) {
      e9.timeoutSeconds && this.logger.warn("Deprecation warning: timeoutSeconds is now renamed to connectionTimeoutSeconds"), e9.masterNode && this.logger.warn("Deprecation warning: masterNode is now consolidated to nodes, starting with Typesense Server v0.12"), e9.readReplicaNodes && this.logger.warn("Deprecation warning: readReplicaNodes is now consolidated to nodes, starting with Typesense Server v0.12");
    }, r3.prototype.shuffleArray = function(e9) {
      for (var t3, n3 = e9.length - 1; n3 > 0; n3--) {
        var r4 = Math.floor(Math.random() * (n3 + 1));
        t3 = [e9[r4], e9[n3]], e9[n3] = t3[0], e9[r4] = t3[1];
      }
    }, r3;
  }();
  return gs.default = r2, gs;
}
var Js;
var Zs;
var Gs = {};
function Xs() {
  if (Zs) return Js;
  function e8(e9, t3) {
    return function() {
      return e9.apply(t3, arguments);
    };
  }
  Zs = 1;
  var t2, o2 = Object.prototype.toString, i2 = Object.getPrototypeOf, f2 = Symbol.iterator, h2 = Symbol.toStringTag, v2 = /* @__PURE__ */ function() {
    var e9 = Object.prototype.hasOwnProperty;
    return function(t3, n2) {
      return e9.call(t3, n2);
    };
  }(), m2 = function(e9, t3) {
    for (var n2 = e9, r2 = []; null != n2 && n2 !== Object.prototype; ) {
      if (-1 !== r2.indexOf(n2)) return false;
      if (r2.push(n2), v2(n2, t3)) return true;
      n2 = i2(n2);
    }
    return false;
  }, F2 = (t2 = /* @__PURE__ */ Object.create(null), function(e9) {
    var n2 = o2.call(e9);
    return t2[n2] || (t2[n2] = n2.slice(8, -1).toLowerCase());
  }), _2 = function(e9) {
    return e9 = e9.toLowerCase(), function(t3) {
      return F2(t3) === e9;
    };
  }, A2 = function(e9) {
    return function(t3) {
      return w(t3) === e9;
    };
  }, O2 = Array.isArray, B2 = A2("undefined");
  function x2(e9) {
    return null !== e9 && !B2(e9) && null !== e9.constructor && !B2(e9.constructor) && I2(e9.constructor.isBuffer) && e9.constructor.isBuffer(e9);
  }
  var R2 = _2("ArrayBuffer"), j2 = A2("string"), I2 = A2("function"), T2 = A2("number"), N2 = function(e9) {
    return null !== e9 && "object" == w(e9);
  }, M2 = function(e9) {
    if (!N2(e9)) return false;
    var t3 = i2(e9);
    return !(null !== t3 && t3 !== Object.prototype && null !== i2(t3) || m2(e9, h2) || m2(e9, f2));
  }, L2 = _2("Date"), U2 = _2("File"), q2 = _2("Blob"), H2 = _2("FileList"), z2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== Pa ? Pa : {}, $2 = void 0 !== z2.FormData ? z2.FormData : void 0, K2 = _2("URLSearchParams"), W2 = C(["ReadableStream", "Request", "Response", "Headers"].map(_2), 4), V2 = W2[0], Q2 = W2[1], J2 = W2[2], Z2 = W2[3];
  function G2(e9, t3) {
    var n2, r2, u2 = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).allOwnKeys, o3 = void 0 !== u2 && u2;
    if (null != e9) if ("object" != w(e9) && (e9 = [e9]), O2(e9)) for (n2 = 0, r2 = e9.length; n2 < r2; n2++) t3.call(null, e9[n2], n2, e9);
    else {
      if (x2(e9)) return;
      var i3, a2 = o3 ? Object.getOwnPropertyNames(e9) : Object.keys(e9), s2 = a2.length;
      for (n2 = 0; n2 < s2; n2++) i3 = a2[n2], t3.call(null, e9[i3], i3, e9);
    }
  }
  function X2(e9, t3) {
    if (x2(e9)) return null;
    t3 = t3.toLowerCase();
    for (var n2, r2 = Object.keys(e9), u2 = r2.length; u2-- > 0; ) if (t3 === (n2 = r2[u2]).toLowerCase()) return n2;
    return null;
  }
  var Y2, ee2, te2, ne2, re2, ue2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Pa, oe2 = function(e9) {
    return !B2(e9) && e9 !== ue2;
  }, ie2 = (Y2 = "undefined" != typeof Uint8Array && i2(Uint8Array), function(e9) {
    return Y2 && e9 instanceof Y2;
  }), ae2 = _2("HTMLFormElement"), se2 = Object.prototype.propertyIsEnumerable, ce2 = _2("RegExp"), le2 = function(e9, t3) {
    var n2 = Object.getOwnPropertyDescriptors(e9), r2 = {};
    G2(n2, function(n3, u2) {
      var o3;
      false !== (o3 = t3(n3, u2, e9)) && (r2[u2] = o3 || n3);
    }), Object.defineProperties(e9, r2);
  }, fe2 = _2("AsyncFunction"), pe2 = (ee2 = "function" == typeof setImmediate, te2 = I2(ue2.postMessage), ee2 ? setImmediate : te2 ? (ne2 = "axios@".concat(Math.random()), re2 = [], ue2.addEventListener("message", function(e9) {
    var t3 = e9.source, n2 = e9.data;
    t3 === ue2 && n2 === ne2 && re2.length && re2.shift()();
  }, false), function(e9) {
    re2.push(e9), ue2.postMessage(ne2, "*");
  }) : function(e9) {
    return setTimeout(e9);
  }), de2 = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(ue2) : "undefined" != typeof process && process.nextTick || pe2, he2 = function(e9) {
    return null != e9 && I2(e9[f2]);
  }, De2 = { isArray: O2, isArrayBuffer: R2, isBuffer: x2, isFormData: function(e9) {
    if (!e9) return false;
    if ($2 && e9 instanceof $2) return true;
    var t3 = i2(e9);
    if (!t3 || t3 === Object.prototype) return false;
    if (!I2(e9.append)) return false;
    var n2 = F2(e9);
    return "formdata" === n2 || "object" === n2 && I2(e9.toString) && "[object FormData]" === e9.toString();
  }, isArrayBufferView: function(e9) {
    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e9) : e9 && e9.buffer && R2(e9.buffer);
  }, isString: j2, isNumber: T2, isBoolean: function(e9) {
    return true === e9 || false === e9;
  }, isObject: N2, isPlainObject: M2, isEmptyObject: function(e9) {
    if (!N2(e9) || x2(e9)) return false;
    try {
      return 0 === Object.keys(e9).length && Object.getPrototypeOf(e9) === Object.prototype;
    } catch (e10) {
      return false;
    }
  }, isReadableStream: V2, isRequest: Q2, isResponse: J2, isHeaders: Z2, isUndefined: B2, isDate: L2, isFile: U2, isReactNativeBlob: function(e9) {
    return !(!e9 || void 0 === e9.uri);
  }, isReactNative: function(e9) {
    return e9 && void 0 !== e9.getParts;
  }, isBlob: q2, isRegExp: ce2, isFunction: I2, isStream: function(e9) {
    return N2(e9) && I2(e9.pipe);
  }, isURLSearchParams: K2, isTypedArray: ie2, isFileList: H2, forEach: G2, merge: function e9() {
    for (var t3 = oe2(this) && this || {}, n2 = t3.caseless, r2 = t3.skipUndefined, u2 = {}, o3 = function(t4, o4) {
      if ("__proto__" !== o4 && "constructor" !== o4 && "prototype" !== o4) {
        var i4 = n2 && "string" == typeof o4 && X2(u2, o4) || o4, a3 = v2(u2, i4) ? u2[i4] : void 0;
        M2(a3) && M2(t4) ? u2[i4] = e9(a3, t4) : M2(t4) ? u2[i4] = e9({}, t4) : O2(t4) ? u2[i4] = t4.slice() : r2 && B2(t4) || (u2[i4] = t4);
      }
    }, i3 = 0, a2 = arguments.length; i3 < a2; i3++) {
      var s2 = i3 < 0 || arguments.length <= i3 ? void 0 : arguments[i3];
      if (s2 && !x2(s2) && (G2(s2, o3), "object" == w(s2) && !O2(s2))) for (var c2 = Object.getOwnPropertySymbols(s2), l2 = 0; l2 < c2.length; l2++) {
        var f3 = c2[l2];
        se2.call(s2, f3) && o3(s2[f3], f3);
      }
    }
    return u2;
  }, extend: function(t3, n2, r2) {
    return G2(n2, function(n3, u2) {
      r2 && I2(n3) ? Object.defineProperty(t3, u2, { __proto__: null, value: e8(n3, r2), writable: true, enumerable: true, configurable: true }) : Object.defineProperty(t3, u2, { __proto__: null, value: n3, writable: true, enumerable: true, configurable: true });
    }, { allOwnKeys: (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).allOwnKeys }), t3;
  }, trim: function(e9) {
    return e9.trim ? e9.trim() : e9.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }, stripBOM: function(e9) {
    return 65279 === e9.charCodeAt(0) && (e9 = e9.slice(1)), e9;
  }, inherits: function(e9, t3, n2, r2) {
    e9.prototype = Object.create(t3.prototype, r2), Object.defineProperty(e9.prototype, "constructor", { __proto__: null, value: e9, writable: true, enumerable: false, configurable: true }), Object.defineProperty(e9, "super", { __proto__: null, value: t3.prototype }), n2 && Object.assign(e9.prototype, n2);
  }, toFlatObject: function(e9, t3, n2, r2) {
    var u2, o3, a2, s2 = {};
    if (t3 = t3 || {}, null == e9) return t3;
    do {
      for (o3 = (u2 = Object.getOwnPropertyNames(e9)).length; o3-- > 0; ) a2 = u2[o3], r2 && !r2(a2, e9, t3) || s2[a2] || (t3[a2] = e9[a2], s2[a2] = true);
      e9 = false !== n2 && i2(e9);
    } while (e9 && (!n2 || n2(e9, t3)) && e9 !== Object.prototype);
    return t3;
  }, kindOf: F2, kindOfTest: _2, endsWith: function(e9, t3, n2) {
    e9 = String(e9), (void 0 === n2 || n2 > e9.length) && (n2 = e9.length), n2 -= t3.length;
    var r2 = e9.indexOf(t3, n2);
    return -1 !== r2 && r2 === n2;
  }, toArray: function(e9) {
    if (!e9) return null;
    if (O2(e9)) return e9;
    var t3 = e9.length;
    if (!T2(t3)) return null;
    for (var n2 = new Array(t3); t3-- > 0; ) n2[t3] = e9[t3];
    return n2;
  }, forEachEntry: function(e9, t3) {
    for (var n2, r2 = (e9 && e9[f2]).call(e9); (n2 = r2.next()) && !n2.done; ) {
      var u2 = n2.value;
      t3.call(e9, u2[0], u2[1]);
    }
  }, matchAll: function(e9, t3) {
    for (var n2, r2 = []; null !== (n2 = e9.exec(t3)); ) r2.push(n2);
    return r2;
  }, isHTMLForm: ae2, hasOwnProperty: v2, hasOwnProp: v2, hasOwnInPrototypeChain: m2, getSafeProp: function(e9, t3) {
    return null != e9 && m2(e9, t3) ? e9[t3] : void 0;
  }, reduceDescriptors: le2, freezeMethods: function(e9) {
    le2(e9, function(t3, n2) {
      if (I2(e9) && ["arguments", "caller", "callee"].includes(n2)) return false;
      var r2 = e9[n2];
      I2(r2) && (t3.enumerable = false, "writable" in t3 ? t3.writable = false : t3.set || (t3.set = function() {
        throw Error("Can not rewrite read-only method '" + n2 + "'");
      }));
    });
  }, toObjectSet: function(e9, t3) {
    var n2 = {}, r2 = function(e10) {
      e10.forEach(function(e11) {
        n2[e11] = true;
      });
    };
    return O2(e9) ? r2(e9) : r2(String(e9).split(t3)), n2;
  }, toCamelCase: function(e9) {
    return e9.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e10, t3, n2) {
      return t3.toUpperCase() + n2;
    });
  }, noop: function() {
  }, toFiniteNumber: function(e9, t3) {
    return null != e9 && Number.isFinite(e9 = +e9) ? e9 : t3;
  }, findKey: X2, global: ue2, isContextDefined: oe2, isSpecCompliantForm: function(e9) {
    return !!(e9 && I2(e9.append) && "FormData" === e9[h2] && e9[f2]);
  }, toJSONObject: function(e9) {
    var t3 = /* @__PURE__ */ new WeakSet(), n2 = function(e10) {
      if (N2(e10)) {
        if (t3.has(e10)) return;
        if (x2(e10)) return e10;
        if (!("toJSON" in e10)) {
          t3.add(e10);
          var r2 = O2(e10) ? [] : {};
          return G2(e10, function(e11, t4) {
            var u2 = n2(e11);
            !B2(u2) && (r2[t4] = u2);
          }), t3.delete(e10), r2;
        }
      }
      return e10;
    };
    return n2(e9);
  }, isAsyncFn: fe2, isThenable: function(e9) {
    return e9 && (N2(e9) || I2(e9)) && I2(e9.then) && I2(e9.catch);
  }, setImmediate: pe2, asap: de2, isIterable: he2, isSafeIterable: function(e9) {
    return null != e9 && m2(e9, f2) && he2(e9);
  } }, ve2 = De2.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), me2 = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), ye2 = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
  function ge2(e9, t3) {
    return De2.isArray(e9) ? e9.map(function(e10) {
      return ge2(e10, t3);
    }) : function(e10) {
      for (var t4 = 0, n2 = e10.length; t4 < n2; ) {
        var r2 = e10.charCodeAt(t4);
        if (9 !== r2 && 32 !== r2) break;
        t4 += 1;
      }
      for (; n2 > t4; ) {
        var u2 = e10.charCodeAt(n2 - 1);
        if (9 !== u2 && 32 !== u2) break;
        n2 -= 1;
      }
      return 0 === t4 && n2 === e10.length ? e10 : e10.slice(t4, n2);
    }(String(e9).replace(t3, ""));
  }
  function Fe2(e9) {
    var t3 = /* @__PURE__ */ Object.create(null);
    return De2.forEach(e9.toJSON(), function(e10, n2) {
      t3[n2] = function(e11) {
        return ge2(e11, ye2);
      }(e10);
    }), t3;
  }
  var Ee2 = Symbol("internals");
  function _e2(e9) {
    return e9 && String(e9).trim().toLowerCase();
  }
  function Ce2(e9) {
    return false === e9 || null == e9 ? e9 : De2.isArray(e9) ? e9.map(Ce2) : function(e10) {
      return ge2(e10, me2);
    }(String(e9));
  }
  function be2(e9, t3, n2, r2, u2) {
    return De2.isFunction(r2) ? r2.call(this, t3, n2) : (u2 && (t3 = n2), De2.isString(t3) ? De2.isString(r2) ? -1 !== t3.indexOf(r2) : De2.isRegExp(r2) ? r2.test(t3) : void 0 : void 0);
  }
  var Ae2 = function() {
    return p(function e9(t3) {
      l(this, e9), t3 && this.set(t3);
    }, [{ key: "set", value: function(e9, t3, n2) {
      var r2 = this;
      function u2(e10, t4, n3) {
        var u3 = _e2(t4);
        if (u3) {
          var o4 = De2.findKey(r2, u3);
          (!o4 || void 0 === r2[o4] || true === n3 || void 0 === n3 && false !== r2[o4]) && (r2[o4 || t4] = Ce2(e10));
        }
      }
      var o3 = function(e10, t4) {
        return De2.forEach(e10, function(e11, n3) {
          return u2(e11, n3, t4);
        });
      };
      if (De2.isPlainObject(e9) || e9 instanceof this.constructor) o3(e9, t3);
      else if (De2.isString(e9) && (e9 = e9.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e9.trim())) o3(function(e10) {
        var t4, n3, r3, u3 = {};
        return e10 && e10.split("\n").forEach(function(e11) {
          r3 = e11.indexOf(":"), t4 = e11.substring(0, r3).trim().toLowerCase(), n3 = e11.substring(r3 + 1).trim(), !t4 || u3[t4] && ve2[t4] || ("set-cookie" === t4 ? u3[t4] ? u3[t4].push(n3) : u3[t4] = [n3] : u3[t4] = u3[t4] ? u3[t4] + ", " + n3 : n3);
        }), u3;
      }(e9), t3);
      else if (De2.isObject(e9) && De2.isSafeIterable(e9)) {
        var i3, a2, s2, c2 = /* @__PURE__ */ Object.create(null), l2 = function(e10, t4) {
          var n3 = "undefined" != typeof Symbol && e10[Symbol.iterator] || e10["@@iterator"];
          if (!n3) {
            if (Array.isArray(e10) || (n3 = S(e10)) || t4) {
              n3 && (e10 = n3);
              var r3 = 0, u3 = function() {
              };
              return { s: u3, n: function() {
                return r3 >= e10.length ? { done: true } : { done: false, value: e10[r3++] };
              }, e: function(e11) {
                throw e11;
              }, f: u3 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var o4, i4 = true, a3 = false;
          return { s: function() {
            n3 = n3.call(e10);
          }, n: function() {
            var e11 = n3.next();
            return i4 = e11.done, e11;
          }, e: function(e11) {
            a3 = true, o4 = e11;
          }, f: function() {
            try {
              i4 || null == n3.return || n3.return();
            } finally {
              if (a3) throw o4;
            }
          } };
        }(e9);
        try {
          for (l2.s(); !(s2 = l2.n()).done; ) {
            var f3 = s2.value;
            if (!De2.isArray(f3)) throw new TypeError("Object iterator must return a key-value pair");
            a2 = f3[0], De2.hasOwnProp(c2, a2) ? (i3 = c2[a2], c2[a2] = De2.isArray(i3) ? [].concat(b(i3), [f3[1]]) : [i3, f3[1]]) : c2[a2] = f3[1];
          }
        } catch (e10) {
          l2.e(e10);
        } finally {
          l2.f();
        }
        o3(c2, t3);
      } else null != e9 && u2(t3, e9, n2);
      return this;
    } }, { key: "get", value: function(e9, t3) {
      if (e9 = _e2(e9)) {
        var n2 = De2.findKey(this, e9);
        if (n2) {
          var r2 = this[n2];
          if (!t3) return r2;
          if (true === t3) return function(e10) {
            for (var t4, n3 = /* @__PURE__ */ Object.create(null), r3 = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; t4 = r3.exec(e10); ) n3[t4[1]] = t4[2];
            return n3;
          }(r2);
          if (De2.isFunction(t3)) return t3.call(this, r2, n2);
          if (De2.isRegExp(t3)) return t3.exec(r2);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    } }, { key: "has", value: function(e9, t3) {
      if (e9 = _e2(e9)) {
        var n2 = De2.findKey(this, e9);
        return !(!n2 || void 0 === this[n2] || t3 && !be2(0, this[n2], n2, t3));
      }
      return false;
    } }, { key: "delete", value: function(e9, t3) {
      var n2 = this, r2 = false;
      function u2(e10) {
        if (e10 = _e2(e10)) {
          var u3 = De2.findKey(n2, e10);
          !u3 || t3 && !be2(0, n2[u3], u3, t3) || (delete n2[u3], r2 = true);
        }
      }
      return De2.isArray(e9) ? e9.forEach(u2) : u2(e9), r2;
    } }, { key: "clear", value: function(e9) {
      for (var t3 = Object.keys(this), n2 = t3.length, r2 = false; n2--; ) {
        var u2 = t3[n2];
        e9 && !be2(0, this[u2], u2, e9, true) || (delete this[u2], r2 = true);
      }
      return r2;
    } }, { key: "normalize", value: function(e9) {
      var t3 = this, n2 = {};
      return De2.forEach(this, function(r2, u2) {
        var o3 = De2.findKey(n2, u2);
        if (o3) return t3[o3] = Ce2(r2), void delete t3[u2];
        var i3 = e9 ? function(e10) {
          return e10.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function(e11, t4, n3) {
            return t4.toUpperCase() + n3;
          });
        }(u2) : String(u2).trim();
        i3 !== u2 && delete t3[u2], t3[i3] = Ce2(r2), n2[i3] = true;
      }), this;
    } }, { key: "concat", value: function() {
      for (var e9, t3 = arguments.length, n2 = new Array(t3), r2 = 0; r2 < t3; r2++) n2[r2] = arguments[r2];
      return (e9 = this.constructor).concat.apply(e9, [this].concat(n2));
    } }, { key: "toJSON", value: function(e9) {
      var t3 = /* @__PURE__ */ Object.create(null);
      return De2.forEach(this, function(n2, r2) {
        null != n2 && false !== n2 && (t3[r2] = e9 && De2.isArray(n2) ? n2.join(", ") : n2);
      }), t3;
    } }, { key: Symbol.iterator, value: function() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    } }, { key: "toString", value: function() {
      return Object.entries(this.toJSON()).map(function(e9) {
        var t3 = C(e9, 2);
        return t3[0] + ": " + t3[1];
      }).join("\n");
    } }, { key: "getSetCookie", value: function() {
      return this.get("set-cookie") || [];
    } }, { key: Symbol.toStringTag, get: function() {
      return "AxiosHeaders";
    } }], [{ key: "from", value: function(e9) {
      return e9 instanceof this ? e9 : new this(e9);
    } }, { key: "concat", value: function(e9) {
      for (var t3 = new this(e9), n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), u2 = 1; u2 < n2; u2++) r2[u2 - 1] = arguments[u2];
      return r2.forEach(function(e10) {
        return t3.set(e10);
      }), t3;
    } }, { key: "accessor", value: function(e9) {
      var t3 = (this[Ee2] = this[Ee2] = { accessors: {} }).accessors, n2 = this.prototype;
      function r2(e10) {
        var r3 = _e2(e10);
        t3[r3] || (function(e11, t4) {
          var n3 = De2.toCamelCase(" " + t4);
          ["get", "set", "has"].forEach(function(r4) {
            Object.defineProperty(e11, r4 + n3, { __proto__: null, value: function(e12, n4, u2) {
              return this[r4].call(this, t4, e12, n4, u2);
            }, configurable: true });
          });
        }(n2, e10), t3[r3] = true);
      }
      return De2.isArray(e9) ? e9.forEach(r2) : r2(e9), this;
    } }]);
  }();
  Ae2.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), De2.reduceDescriptors(Ae2.prototype, function(e9, t3) {
    var n2 = e9.value, r2 = t3[0].toUpperCase() + t3.slice(1);
    return { get: function() {
      return n2;
    }, set: function(e10) {
      this[r2] = e10;
    } };
  }), De2.freezeMethods(Ae2);
  var we2 = function() {
    function e9(t3, r2, u2, o3, i3) {
      var a2;
      return l(this, e9), a2 = c(this, e9, [t3]), Object.defineProperty(n(a2), "message", { __proto__: null, value: t3, enumerable: true, writable: true, configurable: true }), a2.name = "AxiosError", a2.isAxiosError = true, r2 && (a2.code = r2), u2 && (a2.config = u2), o3 && (a2.request = o3), i3 && (a2.response = i3, a2.status = i3.status), a2;
    }
    return D(e9, P(Error)), p(e9, [{ key: "toJSON", value: function() {
      var e10 = this.config, t3 = e10 && De2.hasOwnProp(e10, "redact") ? e10.redact : void 0, n2 = De2.isArray(t3) && t3.length > 0 ? function(e11, t4) {
        var n3 = new Set(t4.map(function(e12) {
          return String(e12).toLowerCase();
        })), r2 = [], u2 = function(e12) {
          if (null === e12 || "object" != w(e12)) return e12;
          if (De2.isBuffer(e12)) return e12;
          if (-1 === r2.indexOf(e12)) {
            var t5;
            if (e12 instanceof Ae2 && (e12 = e12.toJSON()), r2.push(e12), De2.isArray(e12)) t5 = [], e12.forEach(function(e13, n4) {
              var r3 = u2(e13);
              De2.isUndefined(r3) || (t5[n4] = r3);
            });
            else {
              if (!De2.isPlainObject(e12) && function(e13) {
                if (De2.hasOwnProp(e13, "toJSON")) return true;
                for (var t6 = Object.getPrototypeOf(e13); t6 && t6 !== Object.prototype; ) {
                  if (De2.hasOwnProp(t6, "toJSON")) return true;
                  t6 = Object.getPrototypeOf(t6);
                }
                return false;
              }(e12)) return r2.pop(), e12;
              t5 = /* @__PURE__ */ Object.create(null);
              for (var o3 = 0, i3 = Object.entries(e12); o3 < i3.length; o3++) {
                var a2 = C(i3[o3], 2), s2 = a2[0], c2 = a2[1], l2 = n3.has(s2.toLowerCase()) ? "[REDACTED ****]" : u2(c2);
                De2.isUndefined(l2) || (t5[s2] = l2);
              }
            }
            return r2.pop(), t5;
          }
        };
        return u2(e11);
      }(e10, t3) : De2.toJSONObject(e10);
      return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: n2, code: this.code, status: this.status };
    } }], [{ key: "from", value: function(t3, n2, r2, u2, o3, i3) {
      var a2 = new e9(t3.message, n2 || t3.code, r2, u2, o3);
      return Object.defineProperty(a2, "cause", { __proto__: null, value: t3, writable: true, enumerable: false, configurable: true }), a2.name = t3.name, null != t3.status && null == a2.status && (a2.status = t3.status), i3 && Object.assign(a2, i3), a2;
    } }]);
  }();
  function Se2(e9) {
    return De2.isPlainObject(e9) || De2.isArray(e9);
  }
  function ke2(e9) {
    return De2.endsWith(e9, "[]") ? e9.slice(0, -2) : e9;
  }
  function Oe2(e9, t3, n2) {
    return e9 ? e9.concat(t3).map(function(e10, t4) {
      return e10 = ke2(e10), !n2 && t4 ? "[" + e10 + "]" : e10;
    }).join(n2 ? "." : "") : t3;
  }
  we2.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", we2.ERR_BAD_OPTION = "ERR_BAD_OPTION", we2.ECONNABORTED = "ECONNABORTED", we2.ETIMEDOUT = "ETIMEDOUT", we2.ECONNREFUSED = "ECONNREFUSED", we2.ERR_NETWORK = "ERR_NETWORK", we2.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", we2.ERR_DEPRECATED = "ERR_DEPRECATED", we2.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", we2.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", we2.ERR_CANCELED = "ERR_CANCELED", we2.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", we2.ERR_INVALID_URL = "ERR_INVALID_URL", we2.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
  var Pe2 = De2.toFlatObject(De2, {}, null, function(e9) {
    return /^is[A-Z]/.test(e9);
  });
  function Be2(e9, t3, n2) {
    if (!De2.isObject(e9)) throw new TypeError("target must be an object");
    t3 = t3 || new FormData();
    var r2 = (n2 = De2.toFlatObject(n2, { metaTokens: true, dots: false, indexes: false }, false, function(e10, t4) {
      return !De2.isUndefined(t4[e10]);
    })).metaTokens, u2 = n2.visitor || d2, o3 = n2.dots, i3 = n2.indexes, a2 = n2.Blob || "undefined" != typeof Blob && Blob, s2 = void 0 === n2.maxDepth ? 100 : n2.maxDepth, c2 = a2 && De2.isSpecCompliantForm(t3), l2 = [];
    if (!De2.isFunction(u2)) throw new TypeError("visitor must be a function");
    function f3(e10) {
      if (null === e10) return "";
      if (De2.isDate(e10)) return e10.toISOString();
      if (De2.isBoolean(e10)) return e10.toString();
      if (!c2 && De2.isBlob(e10)) throw new we2("Blob is not supported. Use a Buffer instead.");
      if (De2.isArrayBuffer(e10) || De2.isTypedArray(e10)) {
        if (c2 && "function" == typeof a2) return new a2([e10]);
        if ("undefined" != typeof Buffer) return Buffer.from(e10);
        throw new we2("Blob is not supported. Use a Buffer instead.", we2.ERR_NOT_SUPPORT);
      }
      return e10;
    }
    function p2(e10) {
      if (e10 > s2) throw new we2("Object is too deeply nested (" + e10 + " levels). Max depth: " + s2, we2.ERR_FORM_DATA_DEPTH_EXCEEDED);
    }
    function d2(e10, n3, u3) {
      var a3 = e10;
      if (De2.isReactNative(t3) && De2.isReactNativeBlob(e10)) return t3.append(Oe2(u3, n3, o3), f3(e10)), false;
      if (e10 && !u3 && "object" == w(e10)) {
        if (De2.endsWith(n3, "{}")) n3 = r2 ? n3 : n3.slice(0, -2), e10 = function(e11) {
          if (s2 === 1 / 0) return JSON.stringify(e11);
          var t4 = [];
          return JSON.stringify(e11, function(e12, n4) {
            if (!De2.isObject(n4)) return n4;
            for (; t4.length && t4[t4.length - 1] !== this; ) t4.pop();
            return t4.push(n4), p2(1 + t4.length - 1), n4;
          });
        }(e10);
        else if (De2.isArray(e10) && function(e11) {
          return De2.isArray(e11) && !e11.some(Se2);
        }(e10) || (De2.isFileList(e10) || De2.endsWith(n3, "[]")) && (a3 = De2.toArray(e10))) return n3 = ke2(n3), a3.forEach(function(e11, r3) {
          !De2.isUndefined(e11) && null !== e11 && t3.append(true === i3 ? Oe2([n3], r3, o3) : null === i3 ? n3 : n3 + "[]", f3(e11));
        }), false;
      }
      return !!Se2(e10) || (t3.append(Oe2(u3, n3, o3), f3(e10)), false);
    }
    var h3 = Object.assign(Pe2, { defaultVisitor: d2, convertValue: f3, isVisitable: Se2 });
    if (!De2.isObject(e9)) throw new TypeError("data must be an object");
    return function e10(n3, r3) {
      var o4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (!De2.isUndefined(n3)) {
        if (p2(o4), -1 !== l2.indexOf(n3)) throw new Error("Circular reference detected in " + r3.join("."));
        l2.push(n3), De2.forEach(n3, function(n4, i4) {
          true === (!(De2.isUndefined(n4) || null === n4) && u2.call(t3, n4, De2.isString(i4) ? i4.trim() : i4, r3, h3)) && e10(n4, r3 ? r3.concat(i4) : [i4], o4 + 1);
        }), l2.pop();
      }
    }(e9), t3;
  }
  function xe2(e9) {
    var t3 = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" };
    return encodeURIComponent(e9).replace(/[!'()~]|%20/g, function(e10) {
      return t3[e10];
    });
  }
  function Re2(e9, t3) {
    this._pairs = [], e9 && Be2(e9, this, t3);
  }
  var je2 = Re2.prototype;
  function Ie2(e9) {
    return encodeURIComponent(e9).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
  }
  function Te2(e9, t3, n2) {
    if (!t3) return e9;
    e9 = e9 || "";
    var r2, u2 = De2.isFunction(n2) ? { serialize: n2 } : n2, o3 = De2.getSafeProp(u2, "encode") || Ie2, i3 = De2.getSafeProp(u2, "serialize");
    if (r2 = i3 ? i3(t3, u2) : De2.isURLSearchParams(t3) ? t3.toString() : new Re2(t3, u2).toString(o3)) {
      var a2 = e9.indexOf("#");
      -1 !== a2 && (e9 = e9.slice(0, a2)), e9 += (-1 === e9.indexOf("?") ? "?" : "&") + r2;
    }
    return e9;
  }
  je2.append = function(e9, t3) {
    this._pairs.push([e9, t3]);
  }, je2.toString = function(e9) {
    var t3 = this, n2 = e9 ? function(n3) {
      return e9.call(t3, n3, xe2);
    } : xe2;
    return this._pairs.map(function(e10) {
      return n2(e10[0]) + "=" + n2(e10[1]);
    }, "").join("&");
  };
  var Ne2 = function() {
    return p(function e9() {
      l(this, e9), this.handlers = [];
    }, [{ key: "use", value: function(e9, t3, n2) {
      return this.handlers.push({ fulfilled: e9, rejected: t3, synchronous: !!n2 && n2.synchronous, runWhen: n2 ? n2.runWhen : null }), this.handlers.length - 1;
    } }, { key: "eject", value: function(e9) {
      this.handlers[e9] && (this.handlers[e9] = null);
    } }, { key: "clear", value: function() {
      this.handlers && (this.handlers = []);
    } }, { key: "forEach", value: function(e9) {
      De2.forEach(this.handlers, function(t3) {
        null !== t3 && e9(t3);
      });
    } }]);
  }(), Me2 = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false, legacyInterceptorReqResOrdering: true, advertiseZstdAcceptEncoding: false, validateStatusUndefinedResolves: true }, Le2 = { isBrowser: true, classes: { URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : Re2, FormData: "undefined" != typeof FormData ? FormData : null, Blob: "undefined" != typeof Blob ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] }, Ue2 = "undefined" != typeof window && "undefined" != typeof document, qe2 = "object" == ("undefined" == typeof navigator ? "undefined" : w(navigator)) && navigator || void 0, He2 = Ue2 && (!qe2 || ["ReactNative", "NativeScript", "NS"].indexOf(qe2.product) < 0), ze2 = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts, $e2 = Ue2 && window.location.href || "http://localhost", Ke2 = y(y({}, Object.freeze({ __proto__: null, hasBrowserEnv: Ue2, hasStandardBrowserEnv: He2, hasStandardBrowserWebWorkerEnv: ze2, navigator: qe2, origin: $e2 })), Le2);
  function We2(e9) {
    if (e9 > 100) throw new we2("FormData field is too deeply nested (" + e9 + " levels). Max depth: 100", we2.ERR_FORM_DATA_DEPTH_EXCEEDED);
  }
  function Ve2(e9) {
    function t3(e10, n3, r2, u2) {
      We2(u2);
      var o3 = e10[u2++];
      if ("__proto__" === o3) return true;
      var i3 = Number.isFinite(+o3), a2 = u2 >= e10.length;
      return o3 = !o3 && De2.isArray(r2) ? r2.length : o3, a2 ? (De2.hasOwnProp(r2, o3) ? r2[o3] = De2.isArray(r2[o3]) ? r2[o3].concat(n3) : [r2[o3], n3] : r2[o3] = n3, !i3) : (De2.hasOwnProp(r2, o3) && De2.isObject(r2[o3]) || (r2[o3] = []), t3(e10, n3, r2[o3], u2) && De2.isArray(r2[o3]) && (r2[o3] = function(e11) {
        var t4, n4, r3 = {}, u3 = Object.keys(e11), o4 = u3.length;
        for (t4 = 0; t4 < o4; t4++) r3[n4 = u3[t4]] = e11[n4];
        return r3;
      }(r2[o3])), !i3);
    }
    if (De2.isFormData(e9) && De2.isFunction(e9.entries)) {
      var n2 = {};
      return De2.forEachEntry(e9, function(e10, r2) {
        t3(function(e11) {
          for (var t4, n3 = [], r3 = /\w+|\[(\w*)]/g; null !== (t4 = r3.exec(e11)); ) We2(n3.length), n3.push("[]" === t4[0] ? "" : t4[1] || t4[0]);
          return n3;
        }(e10), r2, n2, 0);
      }), n2;
    }
    return null;
  }
  var Qe2 = function(e9, t3) {
    return null != e9 && De2.hasOwnProp(e9, t3) ? e9[t3] : void 0;
  }, Je2 = { transitional: Me2, adapter: ["xhr", "http", "fetch"], transformRequest: [function(e9, t3) {
    var n2, r2 = t3.getContentType() || "", u2 = r2.indexOf("application/json") > -1, o3 = De2.isObject(e9);
    if (o3 && De2.isHTMLForm(e9) && (e9 = new FormData(e9)), De2.isFormData(e9)) return u2 ? JSON.stringify(Ve2(e9)) : e9;
    if (De2.isArrayBuffer(e9) || De2.isBuffer(e9) || De2.isStream(e9) || De2.isFile(e9) || De2.isBlob(e9) || De2.isReadableStream(e9)) return e9;
    if (De2.isArrayBufferView(e9)) return e9.buffer;
    if (De2.isURLSearchParams(e9)) return t3.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), e9.toString();
    if (o3) {
      var i3 = Qe2(this, "formSerializer");
      if (r2.indexOf("application/x-www-form-urlencoded") > -1) return function(e10, t4) {
        return Be2(e10, new Ke2.classes.URLSearchParams(), y({ visitor: function(e11, t5, n3, r3) {
          return Ke2.isNode && De2.isBuffer(e11) ? (this.append(t5, e11.toString("base64")), false) : r3.defaultVisitor.apply(this, arguments);
        } }, t4));
      }(e9, i3).toString();
      if ((n2 = De2.isFileList(e9)) || r2.indexOf("multipart/form-data") > -1) {
        var a2 = Qe2(this, "env"), s2 = a2 && a2.FormData;
        return Be2(n2 ? { "files[]": e9 } : e9, s2 && new s2(), i3);
      }
    }
    return o3 || u2 ? (t3.setContentType("application/json", false), function(e10) {
      if (De2.isString(e10)) try {
        return (0, JSON.parse)(e10), De2.trim(e10);
      } catch (e11) {
        if ("SyntaxError" !== e11.name) throw e11;
      }
      return (0, JSON.stringify)(e10);
    }(e9)) : e9;
  }], transformResponse: [function(e9) {
    var t3 = Qe2(this, "transitional") || Je2.transitional, n2 = t3 && t3.forcedJSONParsing, r2 = Qe2(this, "responseType"), u2 = "json" === r2;
    if (De2.isResponse(e9) || De2.isReadableStream(e9)) return e9;
    if (e9 && De2.isString(e9) && (n2 && !r2 || u2)) {
      var o3 = !(t3 && t3.silentJSONParsing) && u2;
      try {
        return JSON.parse(e9, Qe2(this, "parseReviver"));
      } catch (e10) {
        if (o3) {
          if ("SyntaxError" === e10.name) throw we2.from(e10, we2.ERR_BAD_RESPONSE, this, null, Qe2(this, "response"));
          throw e10;
        }
      }
    }
    return e9;
  }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: Ke2.classes.FormData, Blob: Ke2.classes.Blob }, validateStatus: function(e9) {
    return e9 >= 200 && e9 < 300;
  }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
  function Ze2(e9, t3) {
    var n2 = this || Je2, r2 = t3 || n2, u2 = Ae2.from(r2.headers), o3 = r2.data;
    return De2.forEach(e9, function(e10) {
      o3 = e10.call(n2, o3, u2.normalize(), t3 ? t3.status : void 0);
    }), u2.normalize(), o3;
  }
  function Ge2(e9) {
    return !(!e9 || !e9.__CANCEL__);
  }
  De2.forEach(["delete", "get", "head", "post", "put", "patch", "query"], function(e9) {
    Je2.headers[e9] = {};
  });
  var Xe2 = function(e9) {
    function t3(e10, n2, r2) {
      var u2;
      return l(this, t3), (u2 = c(this, t3, [null == e10 ? "canceled" : e10, we2.ERR_CANCELED, n2, r2])).name = "CanceledError", u2.__CANCEL__ = true, u2;
    }
    return D(t3, e9), p(t3);
  }(we2);
  function Ye2(e9, t3, n2) {
    var r2 = n2.config.validateStatus;
    n2.status && r2 && !r2(n2.status) ? t3(new we2("Request failed with status code " + n2.status, n2.status >= 400 && n2.status < 500 ? we2.ERR_BAD_REQUEST : we2.ERR_BAD_RESPONSE, n2.config, n2.request, n2)) : e9(n2);
  }
  var et2 = function(e9, t3) {
    var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3, r2 = 0, u2 = function(e10, t4) {
      e10 = e10 || 10;
      var n3, r3 = new Array(e10), u3 = new Array(e10), o3 = 0, i3 = 0;
      return t4 = void 0 !== t4 ? t4 : 1e3, function(a2) {
        var s2 = Date.now(), c2 = u3[i3];
        n3 || (n3 = s2), r3[o3] = a2, u3[o3] = s2;
        for (var l2 = i3, f3 = 0; l2 !== o3; ) f3 += r3[l2++], l2 %= e10;
        if ((o3 = (o3 + 1) % e10) === i3 && (i3 = (i3 + 1) % e10), !(s2 - n3 < t4)) {
          var p2 = c2 && s2 - c2;
          return p2 ? Math.round(1e3 * f3 / p2) : void 0;
        }
      };
    }(50, 250);
    return function(e10, t4) {
      var n3, r3, u3 = 0, o3 = 1e3 / t4, i3 = function(t5) {
        var o4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        u3 = o4, n3 = null, r3 && (clearTimeout(r3), r3 = null), e10.apply(void 0, b(t5));
      };
      return [function() {
        for (var e11 = Date.now(), t5 = e11 - u3, a2 = arguments.length, s2 = new Array(a2), c2 = 0; c2 < a2; c2++) s2[c2] = arguments[c2];
        t5 >= o3 ? i3(s2, e11) : (n3 = s2, r3 || (r3 = setTimeout(function() {
          r3 = null, i3(n3);
        }, o3 - t5)));
      }, function() {
        return n3 && i3(n3);
      }];
    }(function(n3) {
      if (n3 && "number" == typeof n3.loaded) {
        var o3 = n3.loaded, i3 = n3.lengthComputable ? n3.total : void 0, a2 = null != i3 ? Math.min(o3, i3) : o3, s2 = Math.max(0, a2 - r2), c2 = u2(s2);
        r2 = Math.max(r2, a2), e9(d({ loaded: a2, total: i3, progress: i3 ? a2 / i3 : void 0, bytes: s2, rate: c2 || void 0, estimated: c2 && i3 ? (i3 - a2) / c2 : void 0, event: n3, lengthComputable: null != i3 }, t3 ? "download" : "upload", true));
      }
    }, n2);
  }, tt2 = function(e9, t3) {
    var n2 = null != e9;
    return [function(r2) {
      return t3[0]({ lengthComputable: n2, total: e9, loaded: r2 });
    }, t3[1]];
  }, nt2 = function(e9) {
    return function() {
      for (var t3 = arguments.length, n2 = new Array(t3), r2 = 0; r2 < t3; r2++) n2[r2] = arguments[r2];
      return De2.asap(function() {
        return e9.apply(void 0, n2);
      });
    };
  }, rt2 = Ke2.hasStandardBrowserEnv ? /* @__PURE__ */ function(e9, t3) {
    return function(n2) {
      return n2 = new URL(n2, Ke2.origin), e9.protocol === n2.protocol && e9.host === n2.host && (t3 || e9.port === n2.port);
    };
  }(new URL(Ke2.origin), Ke2.navigator && /(msie|trident)/i.test(Ke2.navigator.userAgent)) : function() {
    return true;
  }, ut2 = Ke2.hasStandardBrowserEnv ? { write: function(e9, t3, n2, r2, u2, o3, i3) {
    if ("undefined" != typeof document) {
      var a2 = ["".concat(e9, "=").concat(encodeURIComponent(t3))];
      De2.isNumber(n2) && a2.push("expires=".concat(new Date(n2).toUTCString())), De2.isString(r2) && a2.push("path=".concat(r2)), De2.isString(u2) && a2.push("domain=".concat(u2)), true === o3 && a2.push("secure"), De2.isString(i3) && a2.push("SameSite=".concat(i3)), document.cookie = a2.join("; ");
    }
  }, read: function(e9) {
    if ("undefined" == typeof document) return null;
    for (var t3 = document.cookie.split(";"), n2 = 0; n2 < t3.length; n2++) {
      var r2 = t3[n2].replace(/^\s+/, ""), u2 = r2.indexOf("=");
      if (-1 !== u2 && r2.slice(0, u2) === e9) try {
        return decodeURIComponent(r2.slice(u2 + 1));
      } catch (e10) {
        return r2.slice(u2 + 1);
      }
    }
    return null;
  }, remove: function(e9) {
    this.write(e9, "", Date.now() - 864e5, "/");
  } } : { write: function() {
  }, read: function() {
    return null;
  }, remove: function() {
  } }, ot2 = /^https?:(?!\/\/)/i, it2 = /[\t\n\r]/g;
  function at2(e9, t3) {
    if ("string" == typeof e9 && ot2.test(function(e10) {
      return function(e11) {
        for (var t4 = 0; t4 < e11.length && e11.charCodeAt(t4) <= 32; ) t4++;
        return e11.slice(t4);
      }(e10).replace(it2, "");
    }(e9))) throw new we2('Invalid URL: missing "//" after protocol', we2.ERR_INVALID_URL, t3);
  }
  function st2(e9, t3, n2, r2) {
    at2(t3, r2);
    var u2, o3 = !("string" == typeof (u2 = t3) && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u2));
    return e9 && (o3 || false === n2) ? (at2(e9, r2), function(e10, t4) {
      return t4 ? e10.replace(/\/?\/$/, "") + "/" + t4.replace(/^\/+/, "") : e10;
    }(e9, t3)) : t3;
  }
  var ct2 = function(e9) {
    return e9 instanceof Ae2 ? y({}, e9) : e9;
  };
  function lt2(e9, t3) {
    e9 = e9 || {}, t3 = t3 || {};
    var n2 = /* @__PURE__ */ Object.create(null);
    function r2(e10, t4, n3, r3) {
      return De2.isPlainObject(e10) && De2.isPlainObject(t4) ? De2.merge.call({ caseless: r3 }, e10, t4) : De2.isPlainObject(t4) ? De2.merge({}, t4) : De2.isArray(t4) ? t4.slice() : t4;
    }
    function u2(e10, t4, n3, u3) {
      return De2.isUndefined(t4) ? De2.isUndefined(e10) ? void 0 : r2(void 0, e10, 0, u3) : r2(e10, t4, 0, u3);
    }
    function o3(e10, t4) {
      if (!De2.isUndefined(t4)) return r2(void 0, t4);
    }
    function i3(e10, t4) {
      return De2.isUndefined(t4) ? De2.isUndefined(e10) ? void 0 : r2(void 0, e10) : r2(void 0, t4);
    }
    function a2(n3, u3, o4) {
      return De2.hasOwnProp(t3, o4) ? r2(n3, u3) : De2.hasOwnProp(e9, o4) ? r2(void 0, n3) : void 0;
    }
    Object.defineProperty(n2, "hasOwnProperty", { __proto__: null, value: Object.prototype.hasOwnProperty, enumerable: false, writable: true, configurable: true });
    var s2 = { url: o3, method: o3, data: o3, baseURL: i3, transformRequest: i3, transformResponse: i3, paramsSerializer: i3, timeout: i3, timeoutMessage: i3, withCredentials: i3, withXSRFToken: i3, adapter: i3, responseType: i3, xsrfCookieName: i3, xsrfHeaderName: i3, onUploadProgress: i3, onDownloadProgress: i3, decompress: i3, maxContentLength: i3, maxBodyLength: i3, beforeRedirect: i3, transport: i3, httpAgent: i3, httpsAgent: i3, cancelToken: i3, socketPath: i3, allowedSocketPaths: i3, responseEncoding: i3, validateStatus: a2, headers: function(e10, t4, n3) {
      return u2(ct2(e10), ct2(t4), 0, true);
    } };
    return De2.forEach(Object.keys(y(y({}, e9), t3)), function(r3) {
      if ("__proto__" !== r3 && "constructor" !== r3 && "prototype" !== r3) {
        var o4 = De2.hasOwnProp(s2, r3) ? s2[r3] : u2, i4 = o4(De2.hasOwnProp(e9, r3) ? e9[r3] : void 0, De2.hasOwnProp(t3, r3) ? t3[r3] : void 0, r3);
        De2.isUndefined(i4) && o4 !== a2 || (n2[r3] = i4);
      }
    }), De2.hasOwnProp(t3, "validateStatus") && De2.isUndefined(t3.validateStatus) && false === function(n3) {
      var r3 = De2.hasOwnProp(t3, "transitional") ? t3.transitional : void 0;
      if (!De2.isUndefined(r3)) {
        if (!De2.isPlainObject(r3)) return;
        if (De2.hasOwnProp(r3, n3)) return r3[n3];
      }
      var u3 = De2.hasOwnProp(e9, "transitional") ? e9.transitional : void 0;
      if (De2.isPlainObject(u3) && De2.hasOwnProp(u3, n3)) return u3[n3];
    }("validateStatusUndefinedResolves") && (De2.hasOwnProp(e9, "validateStatus") ? n2.validateStatus = r2(void 0, e9.validateStatus) : delete n2.validateStatus), n2;
  }
  var ft2 = ["content-type", "content-length"];
  function pt2(e9) {
    var t3 = lt2({}, e9), n2 = function(e10) {
      return De2.hasOwnProp(t3, e10) ? t3[e10] : void 0;
    }, r2 = n2("data"), u2 = n2("withXSRFToken"), o3 = n2("xsrfHeaderName"), i3 = n2("xsrfCookieName"), a2 = n2("headers"), s2 = n2("auth"), c2 = n2("baseURL"), l2 = n2("allowAbsoluteUrls"), f3 = n2("url");
    if (t3.headers = a2 = Ae2.from(a2), t3.url = Te2(st2(c2, f3, l2, t3), n2("params"), n2("paramsSerializer")), s2) {
      var p2 = De2.getSafeProp(s2, "username") || "", d2 = De2.getSafeProp(s2, "password") || "";
      try {
        a2.set("Authorization", "Basic " + btoa(p2 + ":" + (d2 ? encodeURIComponent(d2).replace(/%([0-9A-F]{2})/gi, function(e10, t4) {
          return String.fromCharCode(parseInt(t4, 16));
        }) : "")));
      } catch (t4) {
        throw we2.from(t4, we2.ERR_BAD_OPTION_VALUE, e9);
      }
    }
    if (De2.isFormData(r2) && (Ke2.hasStandardBrowserEnv || Ke2.hasStandardBrowserWebWorkerEnv || De2.isReactNative(r2) ? a2.setContentType(void 0) : De2.isFunction(r2.getHeaders) && function(e10, t4, n3) {
      "content-only" === n3 ? Object.entries(t4 || {}).forEach(function(t5) {
        var n4 = C(t5, 2), r3 = n4[0], u3 = n4[1];
        ft2.includes(r3.toLowerCase()) && e10.set(r3, u3);
      }) : e10.set(t4);
    }(a2, r2.getHeaders(), n2("formDataHeaderPolicy"))), Ke2.hasStandardBrowserEnv && (De2.isFunction(u2) && (u2 = u2(t3)), true === u2 || null == u2 && rt2(t3.url))) {
      var h3 = o3 && i3 && ut2.read(i3);
      h3 && a2.set(o3, h3);
    }
    return t3;
  }
  var dt2 = "undefined" != typeof XMLHttpRequest && function(e9) {
    return new Promise(function(t3, n2) {
      var r2, u2, o3, i3, a2, s2, c2, l2 = pt2(e9), f3 = l2.data, p2 = Ae2.from(l2.headers).normalize(), d2 = l2.responseType, h3 = l2.onUploadProgress, D2 = l2.onDownloadProgress;
      function v3() {
        s2 && s2(), c2 && c2(), l2.cancelToken && l2.cancelToken.unsubscribe(o3), l2.signal && l2.signal.removeEventListener("abort", o3);
      }
      var m3 = new XMLHttpRequest();
      function y2() {
        if (m3) {
          var r3 = Ae2.from("getAllResponseHeaders" in m3 && m3.getAllResponseHeaders());
          Ye2(function(e10) {
            t3(e10), v3();
          }, function(e10) {
            n2(e10), v3();
          }, { data: d2 && "text" !== d2 && "json" !== d2 ? m3.response : m3.responseText, status: m3.status, statusText: m3.statusText, headers: r3, config: e9, request: m3 }), m3 = null;
        }
      }
      m3.open(l2.method.toUpperCase(), l2.url, true), m3.timeout = l2.timeout, "onloadend" in m3 ? m3.onloadend = y2 : m3.onreadystatechange = function() {
        m3 && 4 === m3.readyState && (0 !== m3.status || m3.responseURL && m3.responseURL.startsWith("file:")) && setTimeout(y2);
      }, m3.onabort = function() {
        m3 && (n2(new we2("Request aborted", we2.ECONNABORTED, e9, m3)), v3(), m3 = null);
      }, m3.onerror = function(t4) {
        var r3 = t4 && t4.message ? t4.message : "Network Error", u3 = new we2(r3, we2.ERR_NETWORK, e9, m3);
        u3.event = t4 || null, n2(u3), v3(), m3 = null;
      }, m3.ontimeout = function() {
        var t4 = l2.timeout ? "timeout of " + l2.timeout + "ms exceeded" : "timeout exceeded", r3 = l2.transitional || Me2;
        l2.timeoutErrorMessage && (t4 = l2.timeoutErrorMessage), n2(new we2(t4, r3.clarifyTimeoutError ? we2.ETIMEDOUT : we2.ECONNABORTED, e9, m3)), v3(), m3 = null;
      }, void 0 === f3 && p2.setContentType(null), "setRequestHeader" in m3 && De2.forEach(Fe2(p2), function(e10, t4) {
        m3.setRequestHeader(t4, e10);
      }), De2.isUndefined(l2.withCredentials) || (m3.withCredentials = !!l2.withCredentials), d2 && "json" !== d2 && (m3.responseType = l2.responseType), D2 && (a2 = (r2 = C(et2(D2, true), 2))[0], c2 = r2[1], m3.addEventListener("progress", a2)), h3 && m3.upload && (i3 = (u2 = C(et2(h3), 2))[0], s2 = u2[1], m3.upload.addEventListener("progress", i3), m3.upload.addEventListener("loadend", s2)), (l2.cancelToken || l2.signal) && (o3 = function(t4) {
        m3 && (n2(!t4 || t4.type ? new Xe2(null, e9, m3) : t4), m3.abort(), v3(), m3 = null);
      }, l2.cancelToken && l2.cancelToken.subscribe(o3), l2.signal && (l2.signal.aborted ? o3() : l2.signal.addEventListener("abort", o3)));
      var g2 = function(e10) {
        var t4 = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e10);
        return t4 && t4[1] || "";
      }(l2.url);
      if (g2 && !Ke2.protocols.includes(g2)) return n2(new we2("Unsupported protocol " + g2 + ":", we2.ERR_BAD_REQUEST, e9)), void v3();
      m3.send(f3 || null);
    });
  }, ht2 = function(e9, t3) {
    if (e9 = e9 ? e9.filter(Boolean) : [], t3 || e9.length) {
      var n2 = new AbortController(), r2 = false, u2 = function(e10) {
        if (!r2) {
          r2 = true, i3();
          var t4 = e10 instanceof Error ? e10 : this.reason;
          n2.abort(t4 instanceof we2 ? t4 : new Xe2(t4 instanceof Error ? t4.message : t4));
        }
      }, o3 = t3 && setTimeout(function() {
        o3 = null, u2(new we2("timeout of ".concat(t3, "ms exceeded"), we2.ETIMEDOUT));
      }, t3), i3 = function() {
        e9 && (o3 && clearTimeout(o3), o3 = null, e9.forEach(function(e10) {
          e10.unsubscribe ? e10.unsubscribe(u2) : e10.removeEventListener("abort", u2);
        }), e9 = null);
      };
      e9.forEach(function(e10) {
        return e10.addEventListener("abort", u2, { once: true });
      });
      var a2 = n2.signal;
      return a2.unsubscribe = function() {
        return De2.asap(i3);
      }, a2;
    }
  }, Dt2 = g().m(function e9(t3, n2) {
    var r2, u2, o3;
    return g().w(function(e10) {
      for (; ; ) switch (e10.n) {
        case 0:
          if (!((r2 = t3.byteLength) < n2)) {
            e10.n = 2;
            break;
          }
          return e10.n = 1, t3;
        case 1:
          return e10.a(2, void e10.v);
        case 2:
          o3 = 0;
        case 3:
          if (!(o3 < r2)) {
            e10.n = 6;
            break;
          }
          return u2 = o3 + n2, e10.n = 4, t3.slice(o3, u2);
        case 4:
          o3 = u2;
        case 5:
          e10.n = 3;
          break;
        case 6:
          return e10.a(2);
      }
    }, e9);
  }), vt2 = function() {
    var e9 = k(g().m(function e10(t3) {
      var n2, o3, i3, a2;
      return g().w(function(e11) {
        for (; ; ) switch (e11.p = e11.n) {
          case 0:
            if (!t3[Symbol.asyncIterator]) {
              e11.n = 2;
              break;
            }
            return e11.d(E(r(u(t3))), 1);
          case 1:
            return e11.a(2, void e11.v);
          case 2:
            n2 = t3.getReader(), e11.p = 3;
          case 4:
            return e11.n = 5, s(n2.read());
          case 5:
            if (o3 = e11.v, i3 = o3.done, a2 = o3.value, !i3) {
              e11.n = 6;
              break;
            }
            return e11.a(3, 8);
          case 6:
            return e11.n = 7, a2;
          case 7:
            e11.n = 4;
            break;
          case 8:
            return e11.p = 8, e11.n = 9, s(n2.cancel());
          case 9:
            return e11.f(8);
          case 10:
            return e11.a(2);
        }
      }, e10, null, [[3, , 8, 10]]);
    }));
    return function(t3) {
      return e9.apply(this, arguments);
    };
  }(), mt2 = function(e9, t3, n2, o3) {
    var i3, c2, l2 = (i3 = k(g().m(function e10(t4, n3) {
      var o4, i4, a2, c3, l3, f4, p3;
      return g().w(function(e11) {
        for (; ; ) switch (e11.p = e11.n) {
          case 0:
            o4 = false, i4 = false, e11.p = 1, c3 = u(vt2(t4));
          case 2:
            return e11.n = 3, s(c3.next());
          case 3:
            if (!(o4 = !(l3 = e11.v).done)) {
              e11.n = 5;
              break;
            }
            return f4 = l3.value, e11.d(E(r(u(Dt2(f4, n3)))), 4);
          case 4:
            o4 = false, e11.n = 2;
            break;
          case 5:
            e11.n = 7;
            break;
          case 6:
            e11.p = 6, p3 = e11.v, i4 = true, a2 = p3;
          case 7:
            if (e11.p = 7, e11.p = 8, !o4 || null == c3.return) {
              e11.n = 9;
              break;
            }
            return e11.n = 9, s(c3.return());
          case 9:
            if (e11.p = 9, !i4) {
              e11.n = 10;
              break;
            }
            throw a2;
          case 10:
            return e11.f(9);
          case 11:
            return e11.f(7);
          case 12:
            return e11.a(2);
        }
      }, e10, null, [[8, , 9, 11], [1, 6, 7, 12]]);
    })), function(e10, t4) {
      return i3.apply(this, arguments);
    })(e9, t3), f3 = 0, p2 = function(e10) {
      c2 || (c2 = true, o3 && o3(e10));
    };
    return new ReadableStream({ pull: function(e10) {
      return a(g().m(function t4() {
        var r2, u2, o4, i4, a2, s2;
        return g().w(function(t5) {
          for (; ; ) switch (t5.p = t5.n) {
            case 0:
              return t5.p = 0, t5.n = 1, l2.next();
            case 1:
              if (r2 = t5.v, u2 = r2.done, o4 = r2.value, !u2) {
                t5.n = 2;
                break;
              }
              return t5.a(2, (p2(), void e10.close()));
            case 2:
              i4 = o4.byteLength, n2 && (a2 = f3 += i4, n2(a2)), e10.enqueue(new Uint8Array(o4)), t5.n = 4;
              break;
            case 3:
              throw t5.p = 3, s2 = t5.v, p2(s2), s2;
            case 4:
              return t5.a(2);
          }
        }, t4, null, [[0, 3]]);
      }))();
    }, cancel: function(e10) {
      return p2(e10), l2.return();
    } }, { highWaterMark: 2 });
  }, yt2 = function(e9) {
    return e9 >= 48 && e9 <= 57 || e9 >= 65 && e9 <= 70 || e9 >= 97 && e9 <= 102;
  }, gt2 = function(e9, t3, n2) {
    return t3 + 2 < n2 && yt2(e9.charCodeAt(t3 + 1)) && yt2(e9.charCodeAt(t3 + 2));
  }, Ft2 = "1.18.1", Et2 = De2.isFunction, _t2 = function(e9) {
    if (!De2.isString(e9)) return e9;
    try {
      return decodeURIComponent(e9);
    } catch (t3) {
      return e9;
    }
  }, Ct2 = function(e9) {
    try {
      for (var t3 = arguments.length, n2 = new Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++) n2[r2 - 1] = arguments[r2];
      return !!e9.apply(void 0, n2);
    } catch (e10) {
      return false;
    }
  }, bt2 = function(e9) {
    var t3 = void 0 !== De2.global && null !== De2.global ? De2.global : globalThis, n2 = t3.ReadableStream, r2 = t3.TextEncoder, u2 = e9 = De2.merge.call({ skipUndefined: true }, { Request: t3.Request, Response: t3.Response }, e9), o3 = u2.fetch, i3 = u2.Request, s2 = u2.Response, c2 = o3 ? Et2(o3) : "function" == typeof fetch, l2 = Et2(i3), f3 = Et2(s2);
    if (!c2) return false;
    var p2, d2 = c2 && Et2(n2), h3 = c2 && ("function" == typeof r2 ? (p2 = new r2(), function(e10) {
      return p2.encode(e10);
    }) : function() {
      var e10 = a(g().m(function e11(t4) {
        var n3, r3;
        return g().w(function(e12) {
          for (; ; ) switch (e12.n) {
            case 0:
              return n3 = Uint8Array, e12.n = 1, new i3(t4).arrayBuffer();
            case 1:
              return r3 = e12.v, e12.a(2, new n3(r3));
          }
        }, e11);
      }));
      return function(t4) {
        return e10.apply(this, arguments);
      };
    }()), D2 = l2 && d2 && Ct2(function() {
      var e10 = false, t4 = new i3(Ke2.origin, { body: new n2(), method: "POST", get duplex() {
        return e10 = true, "half";
      } }), r3 = t4.headers.has("Content-Type");
      return null != t4.body && t4.body.cancel(), e10 && !r3;
    }), v3 = f3 && d2 && Ct2(function() {
      return De2.isReadableStream(new s2("").body);
    }), m3 = { stream: v3 && function(e10) {
      return e10.body;
    } };
    c2 && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(function(e10) {
      !m3[e10] && (m3[e10] = function(t4, n3) {
        var r3 = t4 && t4[e10];
        if (r3) return r3.call(t4);
        throw new we2("Response type '".concat(e10, "' is not supported"), we2.ERR_NOT_SUPPORT, n3);
      });
    });
    var F3 = function() {
      var e10 = a(g().m(function e11(t4) {
        var n3, r3, u3;
        return g().w(function(e12) {
          for (; ; ) switch (e12.n) {
            case 0:
              if (null != t4) {
                e12.n = 1;
                break;
              }
              return e12.a(2, 0);
            case 1:
              if (!De2.isBlob(t4)) {
                e12.n = 2;
                break;
              }
              return e12.a(2, t4.size);
            case 2:
              if (!De2.isSpecCompliantForm(t4)) {
                e12.n = 4;
                break;
              }
              return n3 = new i3(Ke2.origin, { method: "POST", body: t4 }), e12.n = 3, n3.arrayBuffer();
            case 3:
              return e12.a(2, e12.v.byteLength);
            case 4:
              if (!De2.isArrayBufferView(t4) && !De2.isArrayBuffer(t4)) {
                e12.n = 5;
                break;
              }
              r3 = t4.byteLength, e12.n = 9;
              break;
            case 5:
              if (De2.isURLSearchParams(t4) && (t4 += ""), !De2.isString(t4)) {
                e12.n = 7;
                break;
              }
              return e12.n = 6, h3(t4);
            case 6:
              u3 = e12.v.byteLength, e12.n = 8;
              break;
            case 7:
              u3 = void 0;
            case 8:
              r3 = u3;
            case 9:
              return e12.a(2, r3);
          }
        }, e11);
      }));
      return function(t4) {
        return e10.apply(this, arguments);
      };
    }();
    return function() {
      var e10 = a(g().m(function e11(t4) {
        var n3, u3, c3, f4, p3, h4, E2, _3, b2, A3, w2, S2, k2, O3, P2, B3, x3, R3, j3, I3, T3, N3, M3, L3, U3, q3, H3, z3, $3, K3, W3, V3, Q3, J3, Z3, G3, X3, Y3, ee3, te3, ne3, re3, ue3, oe3, ie3, ae3, se3, ce3, le3, fe3, pe3, de3, he3, ve3, me3, ye3, ge3, Ee3, _e3, Ce3, be3, Se3;
        return g().w(function(e12) {
          for (; ; ) switch (e12.p = e12.n) {
            case 0:
              if (n3 = pt2(t4), u3 = n3.url, c3 = n3.method, f4 = n3.data, p3 = n3.signal, h4 = n3.cancelToken, E2 = n3.timeout, _3 = n3.onDownloadProgress, b2 = n3.onUploadProgress, A3 = n3.responseType, w2 = n3.headers, S2 = n3.withCredentials, k2 = void 0 === S2 ? "same-origin" : S2, O3 = n3.fetchOptions, P2 = n3.maxContentLength, B3 = n3.maxBodyLength, x3 = De2.isNumber(P2) && P2 > -1, R3 = De2.isNumber(B3) && B3 > -1, j3 = o3 || fetch, A3 = A3 ? (A3 + "").toLowerCase() : "text", I3 = ht2([p3, h4 && h4.toAbortSignal()], E2), T3 = null, N3 = I3 && I3.unsubscribe && function() {
                I3.unsubscribe();
              }, L3 = null, U3 = function() {
                return new we2("Request body larger than maxBodyLength limit", we2.ERR_BAD_REQUEST, t4, T3);
              }, e12.p = 1, Ce3 = "auth", (H3 = De2.hasOwnProp(t4, Ce3) ? t4[Ce3] : void 0) && (z3 = De2.getSafeProp(H3, "username") || "", q3 = { username: z3, password: De2.getSafeProp(H3, "password") || "" }), function(e13) {
                var t5 = e13.indexOf("://"), n4 = e13;
                return -1 !== t5 && (n4 = n4.slice(t5 + 3)), n4.includes("@") || n4.includes(":");
              }(u3) && ($3 = new URL(u3, Ke2.origin), q3 || !$3.username && !$3.password || (K3 = _t2($3.username), q3 = { username: K3, password: _t2($3.password) }), ($3.username || $3.password) && ($3.username = "", $3.password = "", u3 = $3.href)), q3 && (w2.delete("authorization"), w2.set("Authorization", "Basic " + btoa((_e3 = (q3.username || "") + ":" + (q3.password || ""), encodeURIComponent(_e3).replace(/%([0-9A-F]{2})/gi, function(e13, t5) {
                return String.fromCharCode(parseInt(t5, 16));
              }))))), !x3 || "string" != typeof u3 || !u3.startsWith("data:")) {
                e12.n = 2;
                break;
              }
              if (W3 = function(e13) {
                if (!e13 || "string" != typeof e13) return 0;
                if (!e13.startsWith("data:")) return 0;
                var t5 = e13.indexOf(",");
                if (t5 < 0) return 0;
                var n4 = e13.slice(5, t5), r3 = e13.slice(t5 + 1);
                if (/;base64/i.test(n4)) {
                  for (var u4 = r3.length, o4 = r3.length, i4 = 0; i4 < o4; i4++) if (37 === r3.charCodeAt(i4) && i4 + 2 < o4) {
                    var a2 = r3.charCodeAt(i4 + 1), s3 = r3.charCodeAt(i4 + 2);
                    yt2(a2) && yt2(s3) && (u4 -= 2, i4 += 2);
                  }
                  var c4 = 0, l3 = o4 - 1, f5 = function(e14) {
                    return e14 >= 2 && 37 === r3.charCodeAt(e14 - 2) && 51 === r3.charCodeAt(e14 - 1) && (68 === r3.charCodeAt(e14) || 100 === r3.charCodeAt(e14));
                  };
                  l3 >= 0 && (61 === r3.charCodeAt(l3) ? (c4++, l3--) : f5(l3) && (c4++, l3 -= 3)), 1 === c4 && l3 >= 0 && (61 === r3.charCodeAt(l3) || f5(l3)) && c4++;
                  var p4 = 3 * Math.floor(u4 / 4) - (c4 || 0);
                  return p4 > 0 ? p4 : 0;
                }
                for (var d3 = 0, h5 = 0, D3 = r3.length; h5 < D3; h5++) {
                  var v4 = r3.charCodeAt(h5);
                  if (37 === v4 && gt2(r3, h5, D3)) d3 += 1, h5 += 2;
                  else if (v4 < 128) d3 += 1;
                  else if (v4 < 2048) d3 += 2;
                  else if (v4 >= 55296 && v4 <= 56319 && h5 + 1 < D3) {
                    var m4 = r3.charCodeAt(h5 + 1);
                    m4 >= 56320 && m4 <= 57343 ? (d3 += 4, h5++) : d3 += 3;
                  } else d3 += 3;
                }
                return d3;
              }(u3), !(W3 > P2)) {
                e12.n = 2;
                break;
              }
              throw new we2("maxContentLength size of " + P2 + " exceeded", we2.ERR_BAD_RESPONSE, t4, T3);
            case 2:
              if (!R3 || "get" === c3 || "head" === c3) {
                e12.n = 4;
                break;
              }
              return e12.n = 3, F3(f4);
            case 3:
              if (!("number" == typeof (V3 = e12.v) && isFinite(V3) && (M3 = V3, V3 > B3))) {
                e12.n = 4;
                break;
              }
              throw U3();
            case 4:
              if (Q3 = R3 && (De2.isReadableStream(f4) || De2.isStream(f4)), J3 = function(e13, t5, n4) {
                return mt2(e13, 65536, function(e14) {
                  if (R3 && e14 > B3) throw L3 = U3();
                  t5 && t5(e14);
                }, n4);
              }, !D2 || "get" === c3 || "head" === c3 || !b2 && !Q3) {
                e12.n = 9;
                break;
              }
              if (null != M3) {
                e12.n = 6;
                break;
              }
              return e12.n = 5, function() {
                var e13 = a(g().m(function e14(t5, n4) {
                  var r3;
                  return g().w(function(e15) {
                    for (; ; ) if (0 === e15.n) return r3 = De2.toFiniteNumber(t5.getContentLength()), e15.a(2, null == r3 ? F3(n4) : r3);
                  }, e14);
                }));
                return function(t5, n4) {
                  return e13.apply(this, arguments);
                };
              }()(w2, f4);
            case 5:
              be3 = e12.v, e12.n = 7;
              break;
            case 6:
              be3 = M3;
            case 7:
              if (0 === (M3 = be3) && !Q3) {
                e12.n = 8;
                break;
              }
              G3 = new i3(u3, { method: "POST", body: f4, duplex: "half" }), De2.isFormData(f4) && (Z3 = G3.headers.get("content-type")) && w2.setContentType(Z3), G3.body && (X3 = b2 && tt2(M3, et2(nt2(b2))) || [], Y3 = C(X3, 2), ee3 = Y3[0], te3 = Y3[1], f4 = J3(G3.body, ee3, te3));
            case 8:
              e12.n = 11;
              break;
            case 9:
              if (!Q3 || l2 || !d2 || "get" === c3 || "head" === c3) {
                e12.n = 10;
                break;
              }
              f4 = J3(f4), e12.n = 11;
              break;
            case 10:
              if (!Q3 || !l2 || D2 || "get" === c3 || "head" === c3) {
                e12.n = 11;
                break;
              }
              throw new we2("Stream request bodies are not supported by the current fetch implementation", we2.ERR_NOT_SUPPORT, t4, T3);
            case 11:
              return De2.isString(k2) || (k2 = k2 ? "include" : "omit"), ne3 = l2 && "credentials" in i3.prototype, De2.isFormData(f4) && (re3 = w2.getContentType()) && /^multipart\/form-data/i.test(re3) && !/boundary=/i.test(re3) && w2.delete("content-type"), w2.set("User-Agent", "axios/" + Ft2, false), ue3 = y(y({}, O3), {}, { signal: I3, method: c3.toUpperCase(), headers: Fe2(w2.normalize()), body: f4, duplex: "half", credentials: ne3 ? k2 : void 0 }), T3 = l2 && new i3(u3, ue3), e12.n = 12, l2 ? j3(T3, O3) : j3(u3, ue3);
            case 12:
              if (oe3 = e12.v, ie3 = Ae2.from(oe3.headers), !x3) {
                e12.n = 13;
                break;
              }
              if (!(null != (ae3 = De2.toFiniteNumber(ie3.getContentLength())) && ae3 > P2)) {
                e12.n = 13;
                break;
              }
              throw new we2("maxContentLength size of " + P2 + " exceeded", we2.ERR_BAD_RESPONSE, t4, T3);
            case 13:
              return se3 = v3 && ("stream" === A3 || "response" === A3), v3 && oe3.body && (_3 || x3 || se3 && N3) && (ce3 = {}, ["status", "statusText", "headers"].forEach(function(e13) {
                ce3[e13] = oe3[e13];
              }), le3 = De2.toFiniteNumber(ie3.getContentLength()), fe3 = _3 && tt2(le3, et2(nt2(_3), true)) || [], pe3 = C(fe3, 2), de3 = pe3[0], he3 = pe3[1], ve3 = function(e13) {
                if (x3 && e13 > P2) throw new we2("maxContentLength size of " + P2 + " exceeded", we2.ERR_BAD_RESPONSE, t4, T3);
                de3 && de3(e13);
              }, oe3 = new s2(mt2(oe3.body, 65536, ve3, function() {
                he3 && he3(), N3 && N3();
              }), ce3)), A3 = A3 || "text", e12.n = 14, m3[De2.findKey(m3, A3) || "text"](oe3, t4);
            case 14:
              if (me3 = e12.v, !x3 || v3 || se3) {
                e12.n = 15;
                break;
              }
              if (null != me3 && ("number" == typeof me3.byteLength ? ye3 = me3.byteLength : "number" == typeof me3.size ? ye3 = me3.size : "string" == typeof me3 && (ye3 = "function" == typeof r2 ? new r2().encode(me3).byteLength : me3.length)), !("number" == typeof ye3 && ye3 > P2)) {
                e12.n = 15;
                break;
              }
              throw new we2("maxContentLength size of " + P2 + " exceeded", we2.ERR_BAD_RESPONSE, t4, T3);
            case 15:
              return !se3 && N3 && N3(), e12.n = 16, new Promise(function(e13, n4) {
                Ye2(e13, n4, { data: me3, headers: Ae2.from(oe3.headers), status: oe3.status, statusText: oe3.statusText, config: t4, request: T3 });
              });
            case 16:
              return e12.a(2, e12.v);
            case 17:
              if (e12.p = 17, Se3 = e12.v, N3 && N3(), !(I3 && I3.aborted && I3.reason instanceof we2)) {
                e12.n = 18;
                break;
              }
              throw (ge3 = I3.reason).config = t4, T3 && (ge3.request = T3), Se3 !== ge3 && Object.defineProperty(ge3, "cause", { __proto__: null, value: Se3, writable: true, enumerable: false, configurable: true }), ge3;
            case 18:
              if (!L3) {
                e12.n = 19;
                break;
              }
              throw T3 && !L3.request && (L3.request = T3), L3;
            case 19:
              if (!(Se3 instanceof we2)) {
                e12.n = 20;
                break;
              }
              throw T3 && !Se3.request && (Se3.request = T3), Se3;
            case 20:
              if (!Se3 || "TypeError" !== Se3.name || !/Load failed|fetch/i.test(Se3.message)) {
                e12.n = 21;
                break;
              }
              throw Ee3 = new we2("Network Error", we2.ERR_NETWORK, t4, T3, Se3 && Se3.response), Object.defineProperty(Ee3, "cause", { __proto__: null, value: Se3.cause || Se3, writable: true, enumerable: false, configurable: true }), Ee3;
            case 21:
              throw we2.from(Se3, Se3 && Se3.code, t4, T3, Se3 && Se3.response);
            case 22:
              return e12.a(2);
          }
        }, e11, null, [[1, 17]]);
      }));
      return function(t4) {
        return e10.apply(this, arguments);
      };
    }();
  }, At2 = /* @__PURE__ */ new Map(), wt2 = function(e9) {
    for (var t3, n2, r2 = e9 && e9.env || {}, u2 = r2.fetch, o3 = [r2.Request, r2.Response, u2], i3 = o3.length, a2 = At2; i3--; ) t3 = o3[i3], void 0 === (n2 = a2.get(t3)) && a2.set(t3, n2 = i3 ? /* @__PURE__ */ new Map() : bt2(r2)), a2 = n2;
    return n2;
  };
  wt2();
  var St2 = { http: null, xhr: dt2, fetch: { get: wt2 } };
  De2.forEach(St2, function(e9, t3) {
    if (e9) {
      try {
        Object.defineProperty(e9, "name", { __proto__: null, value: t3 });
      } catch (e10) {
      }
      Object.defineProperty(e9, "adapterName", { __proto__: null, value: t3 });
    }
  });
  var kt2 = function(e9) {
    return "- ".concat(e9);
  }, Ot2 = function(e9) {
    return De2.isFunction(e9) || null === e9 || false === e9;
  }, Pt2 = function(e9, t3) {
    for (var n2, r2, u2 = (e9 = De2.isArray(e9) ? e9 : [e9]).length, o3 = {}, i3 = 0; i3 < u2; i3++) {
      var a2 = void 0;
      if (r2 = n2 = e9[i3], !Ot2(n2) && void 0 === (r2 = St2[(a2 = String(n2)).toLowerCase()])) throw new we2("Unknown adapter '".concat(a2, "'"));
      if (r2 && (De2.isFunction(r2) || (r2 = r2.get(t3)))) break;
      o3[a2 || "#" + i3] = r2;
    }
    if (!r2) {
      var s2 = Object.entries(o3).map(function(e10) {
        var t4 = C(e10, 2), n3 = t4[0], r3 = t4[1];
        return "adapter ".concat(n3, " ") + (false === r3 ? "is not supported by the environment" : "is not available in the build");
      }), c2 = u2 ? s2.length > 1 ? "since :\n" + s2.map(kt2).join("\n") : " " + kt2(s2[0]) : "as no adapter specified";
      throw new we2("There is no suitable adapter to dispatch the request " + c2, we2.ERR_NOT_SUPPORT);
    }
    return r2;
  };
  function Bt2(e9) {
    if (e9.cancelToken && e9.cancelToken.throwIfRequested(), e9.signal && e9.signal.aborted) throw new Xe2(null, e9);
  }
  function xt2(e9) {
    return Bt2(e9), e9.headers = Ae2.from(e9.headers), e9.data = Ze2.call(e9, e9.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e9.method) && e9.headers.setContentType("application/x-www-form-urlencoded", false), Pt2(e9.adapter || Je2.adapter, e9)(e9).then(function(t3) {
      Bt2(e9), e9.response = t3;
      try {
        t3.data = Ze2.call(e9, e9.transformResponse, t3);
      } finally {
        delete e9.response;
      }
      return t3.headers = Ae2.from(t3.headers), t3;
    }, function(t3) {
      if (!Ge2(t3) && (Bt2(e9), t3 && t3.response)) {
        e9.response = t3.response;
        try {
          t3.response.data = Ze2.call(e9, e9.transformResponse, t3.response);
        } finally {
          delete e9.response;
        }
        t3.response.headers = Ae2.from(t3.response.headers);
      }
      return Promise.reject(t3);
    });
  }
  var Rt2 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e9, t3) {
    Rt2[e9] = function(n2) {
      return w(n2) === e9 || "a" + (t3 < 1 ? "n " : " ") + e9;
    };
  });
  var jt2 = {};
  Rt2.transitional = function(e9, t3, n2) {
    function r2(e10, t4) {
      return "[Axios v" + Ft2 + "] Transitional option '" + e10 + "'" + t4 + (n2 ? ". " + n2 : "");
    }
    return function(n3, u2, o3) {
      if (false === e9) throw new we2(r2(u2, " has been removed" + (t3 ? " in " + t3 : "")), we2.ERR_DEPRECATED);
      return t3 && !jt2[u2] && (jt2[u2] = true, console.warn(r2(u2, " has been deprecated since v" + t3 + " and will be removed in the near future"))), !e9 || e9(n3, u2, o3);
    };
  }, Rt2.spelling = function(e9) {
    return function(t3, n2) {
      return console.warn("".concat(n2, " is likely a misspelling of ").concat(e9)), true;
    };
  };
  var It2 = { assertOptions: function(e9, t3, n2) {
    if ("object" != w(e9) || null === e9) throw new we2("options must be an object", we2.ERR_BAD_OPTION_VALUE);
    for (var r2 = Object.keys(e9), u2 = r2.length; u2-- > 0; ) {
      var o3 = r2[u2], i3 = Object.prototype.hasOwnProperty.call(t3, o3) ? t3[o3] : void 0;
      if (i3) {
        var a2 = e9[o3], s2 = void 0 === a2 || i3(a2, o3, e9);
        if (true !== s2) throw new we2("option " + o3 + " must be " + s2, we2.ERR_BAD_OPTION_VALUE);
      } else if (true !== n2) throw new we2("Unknown option " + o3, we2.ERR_BAD_OPTION);
    }
  }, validators: Rt2 }, Tt2 = It2.validators, Nt2 = function() {
    return p(function e10(t3) {
      l(this, e10), this.defaults = t3 || {}, this.interceptors = { request: new Ne2(), response: new Ne2() };
    }, [{ key: "request", value: (e9 = a(g().m(function e10(t3, n2) {
      var r2, u2, o3, i3, a2, s2;
      return g().w(function(e11) {
        for (; ; ) switch (e11.p = e11.n) {
          case 0:
            return e11.p = 0, e11.n = 1, this._request(t3, n2);
          case 1:
            return e11.a(2, e11.v);
          case 2:
            if (e11.p = 2, (s2 = e11.v) instanceof Error) {
              r2 = {}, Error.captureStackTrace ? Error.captureStackTrace(r2) : r2 = new Error(), u2 = function() {
                if (!r2.stack) return "";
                var e12 = r2.stack.indexOf("\n");
                return -1 === e12 ? "" : r2.stack.slice(e12 + 1);
              }();
              try {
                s2.stack ? u2 && (o3 = u2.indexOf("\n"), i3 = -1 === o3 ? -1 : u2.indexOf("\n", o3 + 1), a2 = -1 === i3 ? "" : u2.slice(i3 + 1), String(s2.stack).endsWith(a2) || (s2.stack += "\n" + u2)) : s2.stack = u2;
              } catch (e12) {
              }
            }
            throw s2;
          case 3:
            return e11.a(2);
        }
      }, e10, this, [[0, 2]]);
    })), function(t3, n2) {
      return e9.apply(this, arguments);
    }) }, { key: "_request", value: function(e10, t3) {
      "string" == typeof e10 ? (t3 = t3 || {}).url = e10 : t3 = e10 || {};
      var n2 = t3 = lt2(this.defaults, t3), r2 = n2.transitional, u2 = n2.paramsSerializer, o3 = n2.headers;
      void 0 !== r2 && It2.assertOptions(r2, { silentJSONParsing: Tt2.transitional(Tt2.boolean), forcedJSONParsing: Tt2.transitional(Tt2.boolean), clarifyTimeoutError: Tt2.transitional(Tt2.boolean), legacyInterceptorReqResOrdering: Tt2.transitional(Tt2.boolean), advertiseZstdAcceptEncoding: Tt2.transitional(Tt2.boolean), validateStatusUndefinedResolves: Tt2.transitional(Tt2.boolean) }, false), null != u2 && (De2.isFunction(u2) ? t3.paramsSerializer = { serialize: u2 } : It2.assertOptions(u2, { encode: Tt2.function, serialize: Tt2.function }, true)), void 0 !== t3.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t3.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t3.allowAbsoluteUrls = true), It2.assertOptions(t3, { baseUrl: Tt2.spelling("baseURL"), withXsrfToken: Tt2.spelling("withXSRFToken") }, true), t3.method = (t3.method || this.defaults.method || "get").toLowerCase();
      var i3 = o3 && De2.merge(o3.common, o3[t3.method]);
      o3 && De2.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], function(e11) {
        delete o3[e11];
      }), t3.headers = Ae2.concat(i3, o3);
      var a2 = [], s2 = true;
      this.interceptors.request.forEach(function(e11) {
        "function" == typeof e11.runWhen && false === e11.runWhen(t3) || (s2 = s2 && e11.synchronous, (t3.transitional || Me2).legacyInterceptorReqResOrdering ? a2.unshift(e11.fulfilled, e11.rejected) : a2.push(e11.fulfilled, e11.rejected));
      });
      var c2, l2 = [];
      this.interceptors.response.forEach(function(e11) {
        l2.push(e11.fulfilled, e11.rejected);
      });
      var f3, p2 = 0;
      if (!s2) {
        var d2 = [xt2.bind(this), void 0];
        for (d2.unshift.apply(d2, a2), d2.push.apply(d2, l2), f3 = d2.length, c2 = Promise.resolve(t3); p2 < f3; ) c2 = c2.then(d2[p2++], d2[p2++]);
        return c2;
      }
      f3 = a2.length;
      for (var h3 = t3; p2 < f3; ) {
        var D2 = a2[p2++], v3 = a2[p2++];
        try {
          h3 = D2(h3);
        } catch (e11) {
          v3.call(this, e11);
          break;
        }
      }
      try {
        c2 = xt2.call(this, h3);
      } catch (e11) {
        return Promise.reject(e11);
      }
      for (p2 = 0, f3 = l2.length; p2 < f3; ) c2 = c2.then(l2[p2++], l2[p2++]);
      return c2;
    } }, { key: "getUri", value: function(e10) {
      return Te2(st2((e10 = lt2(this.defaults, e10)).baseURL, e10.url, e10.allowAbsoluteUrls, e10), e10.params, e10.paramsSerializer);
    } }]);
    var e9;
  }();
  De2.forEach(["delete", "get", "head", "options"], function(e9) {
    Nt2.prototype[e9] = function(t3, n2) {
      return this.request(lt2(n2 || {}, { method: e9, url: t3, data: n2 && De2.hasOwnProp(n2, "data") ? n2.data : void 0 }));
    };
  }), De2.forEach(["post", "put", "patch", "query"], function(e9) {
    function t3(t4) {
      return function(n2, r2, u2) {
        return this.request(lt2(u2 || {}, { method: e9, headers: t4 ? { "Content-Type": "multipart/form-data" } : {}, url: n2, data: r2 }));
      };
    }
    Nt2.prototype[e9] = t3(), "query" !== e9 && (Nt2.prototype[e9 + "Form"] = t3(true));
  });
  var Mt2 = function() {
    function e9(t3) {
      if (l(this, e9), "function" != typeof t3) throw new TypeError("executor must be a function.");
      var n2;
      this.promise = new Promise(function(e10) {
        n2 = e10;
      });
      var r2 = this;
      this.promise.then(function(e10) {
        if (r2._listeners) {
          for (var t4 = r2._listeners.length; t4-- > 0; ) r2._listeners[t4](e10);
          r2._listeners = null;
        }
      }), this.promise.then = function(e10) {
        var t4, n3 = new Promise(function(e11) {
          r2.subscribe(e11), t4 = e11;
        }).then(e10);
        return n3.cancel = function() {
          r2.unsubscribe(t4);
        }, n3;
      }, t3(function(e10, t4, u2) {
        r2.reason || (r2.reason = new Xe2(e10, t4, u2), n2(r2.reason));
      });
    }
    return p(e9, [{ key: "throwIfRequested", value: function() {
      if (this.reason) throw this.reason;
    } }, { key: "subscribe", value: function(e10) {
      this.reason ? e10(this.reason) : this._listeners ? this._listeners.push(e10) : this._listeners = [e10];
    } }, { key: "unsubscribe", value: function(e10) {
      if (this._listeners) {
        var t3 = this._listeners.indexOf(e10);
        -1 !== t3 && this._listeners.splice(t3, 1);
      }
    } }, { key: "toAbortSignal", value: function() {
      var e10 = this, t3 = new AbortController(), n2 = function(e11) {
        t3.abort(e11);
      };
      return this.subscribe(n2), t3.signal.unsubscribe = function() {
        return e10.unsubscribe(n2);
      }, t3.signal;
    } }], [{ key: "source", value: function() {
      var t3;
      return { token: new e9(function(e10) {
        t3 = e10;
      }), cancel: t3 };
    } }]);
  }(), Lt2 = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511, WebServerIsDown: 521, ConnectionTimedOut: 522, OriginIsUnreachable: 523, TimeoutOccurred: 524, SslHandshakeFailed: 525, InvalidSslCertificate: 526 };
  Object.entries(Lt2).forEach(function(e9) {
    var t3 = C(e9, 2), n2 = t3[0], r2 = t3[1];
    Lt2[r2] = n2;
  });
  var Ut2 = function t3(n2) {
    var r2 = new Nt2(n2), u2 = e8(Nt2.prototype.request, r2);
    return De2.extend(u2, Nt2.prototype, r2, { allOwnKeys: true }), De2.extend(u2, r2, null, { allOwnKeys: true }), u2.create = function(e9) {
      return t3(lt2(n2, e9));
    }, u2;
  }(Je2);
  return Ut2.Axios = Nt2, Ut2.CanceledError = Xe2, Ut2.CancelToken = Mt2, Ut2.isCancel = Ge2, Ut2.VERSION = Ft2, Ut2.toFormData = Be2, Ut2.AxiosError = we2, Ut2.Cancel = Ut2.CanceledError, Ut2.all = function(e9) {
    return Promise.all(e9);
  }, Ut2.spread = function(e9) {
    return function(t3) {
      return e9.apply(null, t3);
    };
  }, Ut2.isAxiosError = function(e9) {
    return De2.isObject(e9) && true === e9.isAxiosError;
  }, Ut2.mergeConfig = lt2, Ut2.AxiosHeaders = Ae2, Ut2.formToJSON = function(e9) {
    return Ve2(De2.isHTMLForm(e9) ? new FormData(e9) : e9);
  }, Ut2.getAdapter = Pt2, Ut2.HttpStatusCode = Lt2, Ut2.default = Ut2, Js = Ut2;
}
var Ys;
var ec;
var tc;
var nc = Ba(Object.freeze({ __proto__: null, default: {} }));
var rc = {};
var uc = {};
function oc() {
  if (ec) return rc;
  ec = 1, Object.defineProperty(rc, "__esModule", { value: true }), rc.normalizeArrayableParams = function(r2) {
    var u2 = e8.__assign({}, r2);
    if (!Object.keys(t2.arrayableParams).filter(function(e9) {
      return Array.isArray(u2[e9]);
    }).map(function(e9) {
      return u2[e9] = u2[e9].join(","), e9;
    }).length && n2(u2)) return u2;
    if (!n2(u2)) throw new Error("Failed to normalize arrayable params: ".concat(JSON.stringify(u2)));
    return u2;
  }, rc.toErrorWithMessage = function(e9) {
    if ("object" === Dn(t3 = e9) && null !== t3 && "message" in t3 && "string" == typeof t3.message) return e9;
    var t3;
    try {
      return "string" == typeof e9 ? new Error(e9) : new Error(JSON.stringify(e9));
    } catch (t4) {
      return new Error(String(e9));
    }
  };
  var e8 = ms, t2 = (Ys || (Ys = 1, Object.defineProperty(uc, "__esModule", { value: true }), uc.arrayableParams = void 0, uc.arrayableParams = { query_by: "query_by", query_by_weights: "query_by_weights", facet_by: "facet_by", group_by: "group_by", include_fields: "include_fields", exclude_fields: "exclude_fields", highlight_fields: "highlight_fields", highlight_full_fields: "highlight_full_fields", pinned_hits: "pinned_hits", hidden_hits: "hidden_hits", infix: "infix", override_tags: "override_tags", num_typos: "num_typos", prefix: "prefix", synonym_sets: "synonym_sets", sort_by: "sort_by" }), uc);
  function n2(e9) {
    return Object.keys(t2.arrayableParams).filter(function(t3) {
      return void 0 !== e9[t3];
    }).every(function(t3) {
      return n3 = e9[t3], !Array.isArray(n3);
      var n3;
    });
  }
  return rc;
}
function ic() {
  if (tc) return Gs;
  tc = 1, Object.defineProperty(Gs, "__esModule", { value: true });
  var e8 = ms, t2 = e8.__importDefault(Xs()), n2 = nc, r2 = nc, u2 = Vs(), o2 = e8.__importDefault(ks()), i2 = oc(), a2 = true, s2 = "undefined" != typeof process && null != process.versions && null != process.versions.node && "undefined" == typeof window, c2 = function() {
    function c3(e9) {
      this.configuration = e9, this.apiKey = this.configuration.apiKey, this.nodes = null == this.configuration.nodes ? this.configuration.nodes : JSON.parse(JSON.stringify(this.configuration.nodes)), this.nearestNode = null == this.configuration.nearestNode ? this.configuration.nearestNode : JSON.parse(JSON.stringify(this.configuration.nearestNode)), this.connectionTimeoutSeconds = this.configuration.connectionTimeoutSeconds, this.healthcheckIntervalSeconds = this.configuration.healthcheckIntervalSeconds, this.numRetriesPerRequest = this.configuration.numRetries, this.retryIntervalSeconds = this.configuration.retryIntervalSeconds, this.sendApiKeyAsQueryParam = this.configuration.sendApiKeyAsQueryParam, this.additionalUserHeaders = this.configuration.additionalHeaders, this.logger = this.configuration.logger, this.initializeMetadataForNodes(), this.currentNodeIndex = -1;
    }
    return c3.prototype.get = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n3, r3) {
        void 0 === n3 && (n3 = {});
        var u3 = void 0 === r3 ? {} : r3, o3 = u3.abortSignal, i3 = void 0 === o3 ? null : o3, a3 = u3.responseType, s3 = void 0 === a3 ? void 0 : a3, c4 = u3.streamConfig, l2 = void 0 === c4 ? void 0 : c4, f2 = u3.isStreamingRequest;
        return e8.__generator(this, function(e9) {
          return [2, this.performRequest("get", t4, { queryParameters: n3, abortSignal: i3, responseType: s3, streamConfig: l2, isStreamingRequest: f2 })];
        });
      });
    }, c3.prototype.delete = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n3) {
        return void 0 === n3 && (n3 = {}), e8.__generator(this, function(e9) {
          return [2, this.performRequest("delete", t4, { queryParameters: n3, isStreamingRequest: false })];
        });
      });
    }, c3.prototype.post = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n3, r3, u3, o3) {
        void 0 === n3 && (n3 = {}), void 0 === r3 && (r3 = {}), void 0 === u3 && (u3 = {});
        var i3 = void 0 === o3 ? {} : o3, a3 = i3.abortSignal, s3 = void 0 === a3 ? null : a3, c4 = i3.responseType, l2 = void 0 === c4 ? void 0 : c4, f2 = i3.streamConfig, p2 = void 0 === f2 ? void 0 : f2, d2 = i3.isStreamingRequest;
        return e8.__generator(this, function(e9) {
          return [2, this.performRequest("post", t4, { queryParameters: r3, bodyParameters: n3, additionalHeaders: u3, abortSignal: s3, responseType: l2, streamConfig: p2, isStreamingRequest: d2 })];
        });
      });
    }, c3.prototype.put = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n3, r3) {
        return void 0 === n3 && (n3 = {}), void 0 === r3 && (r3 = {}), e8.__generator(this, function(e9) {
          return [2, this.performRequest("put", t4, { queryParameters: r3, bodyParameters: n3, isStreamingRequest: false })];
        });
      });
    }, c3.prototype.patch = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n3, r3) {
        return void 0 === n3 && (n3 = {}), void 0 === r3 && (r3 = {}), e8.__generator(this, function(e9) {
          return [2, this.performRequest("patch", t4, { queryParameters: r3, bodyParameters: n3, isStreamingRequest: false })];
        });
      });
    }, c3.prototype.getAdapter = function() {
      if (this.configuration.axiosAdapter) return "function" == typeof this.configuration.axiosAdapter ? this.configuration.axiosAdapter : "undefined" != typeof navigator && "Cloudflare-Workers" === navigator.userAgent ? t2.default.getAdapter(this.configuration.axiosAdapter).bind(globalThis) : t2.default.getAdapter(this.configuration.axiosAdapter);
    }, c3.prototype.performRequest = function(u3, o3, i3) {
      return e8.__awaiter(this, arguments, void 0, function(u4, o4, i4) {
        var c4, l2, f2, p2, d2, h2, D2, v2, m2, y2, g2, F2 = i4.queryParameters, E2 = void 0 === F2 ? null : F2, _2 = i4.bodyParameters, C2 = void 0 === _2 ? null : _2, b2 = i4.additionalHeaders, A2 = void 0 === b2 ? {} : b2, w2 = i4.abortSignal, S2 = void 0 === w2 ? null : w2, k2 = i4.responseType, O2 = void 0 === k2 ? void 0 : k2, P2 = i4.skipConnectionTimeout, B2 = void 0 !== P2 && P2, x2 = i4.enableKeepAlive, R2 = void 0 === x2 ? void 0 : x2, j2 = i4.streamConfig, I2 = void 0 === j2 ? void 0 : j2, T2 = i4.isStreamingRequest;
        return e8.__generator(this, function(i5) {
          switch (i5.label) {
            case 0:
              this.configuration.validate(), T2 && (this.logger.debug("Request: Performing streaming request to ".concat(o4)), s2 || "undefined" == typeof fetch || (this.logger.debug("Using fetch adapter for browser streaming"), O2 = "stream")), c4 = Date.now(), f2 = false, this.logger.debug("Request #".concat(c4, ": Performing ").concat(u4.toUpperCase(), " request: ").concat(o4)), p2 = function(i6) {
                var p3, h3, D3, F3, _3, b3, w3;
                return e8.__generator(this, function(k3) {
                  switch (k3.label) {
                    case 0:
                      if (p3 = d2.getNextNode(c4), d2.logger.debug("Request #".concat(c4, ": Attempting ").concat(u4.toUpperCase(), " request Try #").concat(i6, " to Node ").concat(p3.index)), S2 && S2.aborted) return [2, { value: Promise.reject(new Error("Request aborted by caller.")) }];
                      h3 = void 0, k3.label = 1;
                    case 1:
                      return k3.trys.push([1, 3, 5, 6]), (D3 = { method: u4, url: d2.uriFor(o4, p3), headers: Object.assign({}, d2.defaultHeaders(), A2, d2.additionalUserHeaders), maxContentLength: 1 / 0, maxBodyLength: 1 / 0, validateStatus: function(e9) {
                        return e9 > 0;
                      }, transformResponse: [function(e9, t3) {
                        var n3 = e9;
                        return void 0 !== t3 && "string" == typeof e9 && "string" == typeof t3["content-type"] && t3["content-type"].startsWith("application/json") && (n3 = JSON.parse(e9)), n3;
                      }] }).adapter = T2 && !s2 ? "fetch" : d2.getAdapter(), true !== B2 && (D3.timeout = 1e3 * d2.connectionTimeoutSeconds), E2 && 0 !== Object.keys(E2).length && (D3.params = E2), d2.sendApiKeyAsQueryParam && (D3.params = D3.params || {}, D3.params["x-typesense-api-key"] = d2.apiKey), d2.configuration.httpAgent ? (d2.logger.debug("Request #".concat(c4, ": Using custom httpAgent")), D3.httpAgent = d2.configuration.httpAgent) : true === R2 && (s2 ? (d2.logger.debug("Request #".concat(c4, ": Enabling KeepAlive")), D3.httpAgent = new n2.Agent({ keepAlive: true })) : d2.logger.warn("Request #".concat(c4, ": Cannot use custom httpAgent in a browser environment to enable keepAlive"))), d2.configuration.httpsAgent ? (d2.logger.debug("Request #".concat(c4, ": Using custom httpsAgent")), D3.httpsAgent = d2.configuration.httpsAgent) : true === R2 && (s2 ? (d2.logger.debug("Request #".concat(c4, ": Enabling keepAlive")), D3.httpsAgent = new r2.Agent({ keepAlive: true })) : d2.logger.warn("Request #".concat(c4, ": Cannot use custom httpAgent in a browser environment to enable keepAlive"))), d2.configuration.paramsSerializer && (d2.logger.debug("Request #".concat(c4, ": Using custom paramsSerializer")), D3.paramsSerializer = d2.configuration.paramsSerializer), C2 && ("string" == typeof C2 && 0 !== C2.length || "object" === Dn(C2) && 0 !== Object.keys(C2).length) && (D3.data = C2), S2 && (F3 = t2.default.CancelToken, _3 = F3.source(), h3 = function() {
                        f2 = true, _3.cancel();
                      }, S2.addEventListener("abort", h3), D3.cancelToken = _3.token), T2 ? (D3.responseType = "stream", s2 || (D3.headers = e8.__assign(e8.__assign({}, D3.headers), { Accept: "text/event-stream" }))) : O2 && (D3.responseType = O2), [4, (0, t2.default)(D3)];
                    case 2:
                      if ((b3 = k3.sent()).status >= 1 && b3.status <= 499 && d2.setNodeHealthcheck(p3, a2), d2.logger.debug("Request #".concat(c4, ": Request to Node ").concat(p3.index, " was made. Response Code was ").concat(b3.status, ".")), b3.status >= 200 && b3.status < 300) return T2 ? [2, { value: d2.handleStreamingResponse(b3, I2) }] : [2, { value: Promise.resolve(b3.data) }];
                      if (b3.status < 500) return [2, { value: Promise.reject(d2.customErrorForResponse(b3, null === (v2 = b3.data) || void 0 === v2 ? void 0 : v2.message, D3.data)) }];
                      throw d2.customErrorForResponse(b3, null === (m2 = b3.data) || void 0 === m2 ? void 0 : m2.message, D3.data);
                    case 3:
                      return w3 = k3.sent(), f2 || d2.setNodeHealthcheck(p3, false), l2 = w3, d2.logger.warn("Request #".concat(c4, ": Request to Node ").concat(p3.index, ' failed due to "').concat(null !== (y2 = null == w3 ? void 0 : w3.code) && void 0 !== y2 ? y2 : "", " ").concat(w3.message).concat(null == w3.response ? "" : " - " + JSON.stringify(null === (g2 = w3.response) || void 0 === g2 ? void 0 : g2.data), '"')), f2 ? [2, { value: Promise.reject(new Error("Request aborted by caller.")) }] : (T2 && d2.invokeOnErrorCallback(w3, I2), i6 < d2.numRetriesPerRequest + 1 ? (d2.logger.warn("Request #".concat(c4, ": Sleeping for ").concat(d2.retryIntervalSeconds, "s and then retrying request...")), [4, d2.timer(d2.retryIntervalSeconds)]) : (d2.logger.debug("Request #".concat(c4, ": No retries left. Raising last error")), [2, { value: Promise.reject(l2) }]));
                    case 4:
                      return k3.sent(), [3, 6];
                    case 5:
                      return S2 && h3 && S2.removeEventListener("abort", h3), [7];
                    case 6:
                      return [2];
                  }
                });
              }, d2 = this, h2 = 1, i5.label = 1;
            case 1:
              return h2 <= this.numRetriesPerRequest + 1 ? [5, p2(h2)] : [3, 4];
            case 2:
              if ("object" === Dn(D2 = i5.sent())) return [2, D2.value];
              i5.label = 3;
            case 3:
              return h2++, [3, 1];
            case 4:
              return this.logger.debug("Request #".concat(c4, ": No retries left. Raising last error")), [2, Promise.reject(l2)];
          }
        });
      });
    }, c3.prototype.processStreamingLine = function(e9) {
      if (!e9.trim() || "data: [DONE]" === e9) return null;
      if (e9.startsWith("data: ")) return this.processDataLine(e9.slice(6).trim());
      if (e9.trim().startsWith("{")) try {
        var t3 = JSON.parse(e9.trim());
        return t3 && "object" === Dn(t3) ? (t3.conversation_id || (t3.conversation_id = "unknown"), t3.message || "" === t3.message || (t3.message = ""), t3) : { conversation_id: "unknown", message: JSON.stringify(t3) };
      } catch (t4) {
        return { conversation_id: "unknown", message: e9.trim() };
      }
      return { conversation_id: "unknown", message: e9.trim() };
    }, c3.prototype.processDataLine = function(e9) {
      if (!e9) return null;
      if (e9.startsWith("{")) try {
        var t3 = JSON.parse(e9);
        return t3 && "object" === Dn(t3) ? (t3.conversation_id || (t3.conversation_id = "unknown"), t3.message || "" === t3.message || (t3.message = ""), t3) : { conversation_id: "unknown", message: JSON.stringify(t3) };
      } catch (t4) {
        return { conversation_id: "unknown", message: e9 };
      }
      return { conversation_id: "unknown", message: e9 };
    }, c3.prototype.handleStreamingResponse = function(t3, n3) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return this.logger.debug("Handling streaming response. Environment: ".concat(s2 ? "Node.js" : "Browser")), s2 && t3.data ? [2, this.handleNodeStreaming(t3, n3)] : s2 ? (this.logger.debug("Processing non-streaming response"), this.invokeOnCompleteCallback(t3.data, n3), [2, Promise.resolve(t3.data)]) : [2, this.handleBrowserStreaming(t3, n3)];
        });
      });
    }, c3.prototype.handleNodeStreaming = function(e9, t3) {
      var n3 = this;
      return this.logger.debug("Processing Node.js stream"), new Promise(function(r3, u3) {
        var o3 = e9.data, i3 = [], a3 = "";
        o3.on("data", function(e10) {
          var r4;
          try {
            var o4 = e10.toString(), s3 = (a3 += o4).split("\n");
            a3 = null !== (r4 = s3.pop()) && void 0 !== r4 ? r4 : "", n3.processStreamLines(s3, i3, t3);
          } catch (e11) {
            u3(e11);
          }
        }), o3.on("end", function() {
          if (a3.trim().length > 0) {
            var u4 = a3.split("\n");
            n3.processStreamLines(u4, i3, t3);
          }
          n3.finalizeStreamResult(i3, r3, e9, t3);
        }), o3.on("error", function(e10) {
          n3.logger.error("Stream error: ".concat(e10)), n3.invokeOnErrorCallback(e10, t3), u3(e10);
        });
      });
    }, c3.prototype.handleBrowserStreaming = function(t3, n3) {
      var r3 = this;
      return this.logger.debug("Processing browser stream"), new Promise(function(u3, o3) {
        return e8.__awaiter(r3, void 0, void 0, function() {
          return e8.__generator(this, function(e9) {
            try {
              return t3.data && "function" == typeof t3.data.getReader ? [2, this.handleBrowserReadableStream(t3.data, u3, o3, t3, n3)] : "string" == typeof t3.data ? [2, this.handleBrowserStringResponse(t3.data, u3, t3, n3)] : "object" === Dn(t3.data) && null !== t3.data ? (this.logger.debug("No stream found, but data object is available"), this.invokeOnCompleteCallback(t3.data, n3), [2, u3(t3.data)]) : (this.logger.error("No usable data found in response"), [2, o3(new Error("No usable data found in response"))]);
            } catch (e10) {
              this.logger.error("Error processing streaming response: ".concat(e10)), this.invokeOnErrorCallback(e10, n3), o3(e10);
            }
            return [2];
          });
        });
      });
    }, c3.prototype.handleBrowserReadableStream = function(t3, n3, r3, u3, o3) {
      return e8.__awaiter(this, void 0, void 0, function() {
        var i3, a3, s3, c4, l2, f2, p2, d2, h2, D2;
        return e8.__generator(this, function(e9) {
          switch (e9.label) {
            case 0:
              this.logger.debug("Found ReadableStream in response.data"), i3 = t3.getReader(), a3 = [], s3 = "", e9.label = 1;
            case 1:
              e9.trys.push([1, 5, , 6]), e9.label = 2;
            case 2:
              return [4, i3.read()];
            case 3:
              return c4 = e9.sent(), l2 = c4.done, f2 = c4.value, l2 ? (this.logger.debug("Stream reading complete"), s3.trim() && (p2 = s3.split("\n"), this.processStreamLines(p2, a3, o3)), [3, 4]) : (d2 = new TextDecoder().decode(f2), this.logger.debug("Received chunk: ".concat(d2.length, " bytes")), h2 = (s3 += d2).split("\n"), s3 = h2.pop() || "", this.processStreamLines(h2, a3, o3), [3, 2]);
            case 4:
              return this.finalizeStreamResult(a3, n3, u3, o3), [3, 6];
            case 5:
              return D2 = e9.sent(), this.logger.error("Stream error: ".concat(D2)), this.invokeOnErrorCallback(D2, o3), r3(D2), [3, 6];
            case 6:
              return [2];
          }
        });
      });
    }, c3.prototype.handleBrowserStringResponse = function(e9, t3, n3, r3) {
      this.logger.debug("Processing text response as stream data");
      var u3 = [], o3 = e9.split("\n");
      if (this.processStreamLines(o3, u3, r3), u3.length > 0) {
        var i3 = this.combineStreamingChunks(u3);
        this.invokeOnCompleteCallback(i3, r3), t3(i3);
      } else this.logger.debug("No chunks processed, returning original API response"), this.invokeOnCompleteCallback(n3.data, r3), t3(n3.data);
    }, c3.prototype.processStreamLines = function(e9, t3, n3) {
      for (var r3 = 0, u3 = e9; r3 < u3.length; r3++) {
        var o3 = u3[r3];
        if (o3.trim() && "data: [DONE]" !== o3) {
          var i3 = this.processStreamingLine(o3);
          null !== i3 && (this.invokeOnChunkCallback(i3, n3), t3.push(i3));
        }
      }
    }, c3.prototype.finalizeStreamResult = function(e9, t3, n3, r3) {
      if (e9.length > 0) {
        var u3 = this.combineStreamingChunks(e9);
        this.logger.debug("Stream processing complete"), this.invokeOnCompleteCallback(u3, r3), t3(u3);
      } else this.logger.debug("No chunks processed, returning original API response"), this.invokeOnCompleteCallback(n3.data, r3), t3(n3.data);
    }, c3.prototype.combineStreamingChunks = function(e9) {
      if (0 === e9.length) return {};
      if (1 === e9.length) return e9[0];
      var t3 = this.getMessageChunks(e9);
      if (t3.length > 0) return this.combineMessageChunks(e9, t3);
      var n3 = e9[e9.length - 1];
      if (!this.isCompleteSearchResponse(n3)) throw new Error("Last chunk is not a complete search response");
      return n3;
    }, c3.prototype.getMessageChunks = function(e9) {
      return e9.filter(this.isChunkMessage);
    }, c3.prototype.isChunkMessage = function(e9) {
      return "object" === Dn(e9) && null !== e9 && "message" in e9 && "conversation_id" in e9;
    }, c3.prototype.combineMessageChunks = function(e9, t3) {
      this.logger.debug("Found ".concat(t3.length, " message chunks to combine"));
      var n3 = e9[e9.length - 1];
      if (this.isCompleteSearchResponse(n3)) return n3;
      var r3 = e9.find(this.isCompleteSearchResponse);
      if (!r3) throw new Error("No metadata chunk found");
      return r3;
    }, c3.prototype.isCompleteSearchResponse = function(e9) {
      return "object" === Dn(e9) && null !== e9 && Object.keys(e9).length > 0 && ("results" in e9 || "found" in e9 || "hits" in e9 || "page" in e9 || "search_time_ms" in e9);
    }, c3.prototype.getNextNode = function(e9) {
      if (void 0 === e9 && (e9 = 0), null != this.nearestNode) {
        if (this.logger.debug("Request #".concat(e9, ": Nodes Health: Node ").concat(this.nearestNode.index, " is ").concat(true === this.nearestNode.isHealthy ? "Healthy" : "Unhealthy")), true === this.nearestNode.isHealthy || this.nodeDueForHealthcheck(this.nearestNode, e9)) return this.logger.debug("Request #".concat(e9, ": Updated current node to Node ").concat(this.nearestNode.index)), this.nearestNode;
        this.logger.debug("Request #".concat(e9, ": Falling back to individual nodes"));
      }
      this.logger.debug("Request #".concat(e9, ": Nodes Health: ").concat(this.nodes.map(function(e10) {
        return "Node ".concat(e10.index, " is ").concat(true === e10.isHealthy ? "Healthy" : "Unhealthy");
      }).join(" || ")));
      for (var t3 = this.nodes[0], n3 = 0; n3 <= this.nodes.length; n3++) if (this.currentNodeIndex = (this.currentNodeIndex + 1) % this.nodes.length, true === (t3 = this.nodes[this.currentNodeIndex]).isHealthy || this.nodeDueForHealthcheck(t3, e9)) return this.logger.debug("Request #".concat(e9, ": Updated current node to Node ").concat(t3.index)), t3;
      return this.logger.debug("Request #".concat(e9, ": No healthy nodes were found. Returning the next node, Node ").concat(t3.index)), t3;
    }, c3.prototype.nodeDueForHealthcheck = function(e9, t3) {
      void 0 === t3 && (t3 = 0);
      var n3 = Date.now() - e9.lastAccessTimestamp > 1e3 * this.healthcheckIntervalSeconds;
      return n3 && this.logger.debug("Request #".concat(t3, ": Node ").concat(e9.index, " has exceeded healtcheckIntervalSeconds of ").concat(this.healthcheckIntervalSeconds, ". Adding it back into rotation.")), n3;
    }, c3.prototype.initializeMetadataForNodes = function() {
      var e9 = this;
      null != this.nearestNode && (this.nearestNode.index = "nearestNode", this.setNodeHealthcheck(this.nearestNode, a2)), this.nodes.forEach(function(t3, n3) {
        t3.index = n3, e9.setNodeHealthcheck(t3, a2);
      });
    }, c3.prototype.setNodeHealthcheck = function(e9, t3) {
      e9.isHealthy = t3, e9.lastAccessTimestamp = Date.now();
    }, c3.prototype.uriFor = function(e9, t3) {
      return null != t3.url ? "".concat(t3.url).concat(e9) : "".concat(t3.protocol, "://").concat(t3.host, ":").concat(t3.port).concat(t3.path).concat(e9);
    }, c3.prototype.defaultHeaders = function() {
      var e9 = {};
      return this.sendApiKeyAsQueryParam || (e9["X-TYPESENSE-API-KEY"] = this.apiKey), e9["Content-Type"] = "application/json", e9;
    }, c3.prototype.timer = function(t3) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, new Promise(function(e10) {
            return setTimeout(e10, 1e3 * t3);
          })];
        });
      });
    }, c3.prototype.customErrorForResponse = function(e9, t3, n3) {
      var r3 = "Request failed with HTTP code ".concat(e9.status);
      return "string" == typeof t3 && "" !== t3.trim() && (r3 += " | Server said: ".concat(t3)), new o2.default(r3, n3, e9.status), 400 === e9.status ? new u2.RequestMalformed(r3, n3, e9.status) : 401 === e9.status ? new u2.RequestUnauthorized(r3, n3, e9.status) : 404 === e9.status ? new u2.ObjectNotFound(r3, n3, e9.status) : 409 === e9.status ? new u2.ObjectAlreadyExists(r3, n3, e9.status) : 422 === e9.status ? new u2.ObjectUnprocessable(r3, n3, e9.status) : e9.status >= 500 && e9.status <= 599 ? new u2.ServerError(r3, n3, e9.status) : new u2.HTTPError(r3, n3, e9.status);
    }, c3.prototype.invokeOnChunkCallback = function(e9, t3) {
      if (null == t3 ? void 0 : t3.onChunk) try {
        t3.onChunk(e9);
      } catch (e10) {
        this.logger.warn("Error in onChunk callback: ".concat(e10));
      }
    }, c3.prototype.invokeOnCompleteCallback = function(e9, t3) {
      if (null == t3 ? void 0 : t3.onComplete) try {
        t3.onComplete(e9);
      } catch (e10) {
        this.logger.warn("Error in onComplete callback: ".concat(e10));
      }
    }, c3.prototype.invokeOnErrorCallback = function(e9, t3) {
      if (null == t3 ? void 0 : t3.onError) {
        var n3 = (0, i2.toErrorWithMessage)(e9);
        try {
          t3.onError(n3);
        } catch (e10) {
          this.logger.warn("Error in onError callback: ".concat(e10));
        }
      }
    }, c3;
  }();
  return Gs.default = c2, Gs;
}
var ac;
var sc = {};
function cc() {
  if (ac) return sc;
  ac = 1, Object.defineProperty(sc, "__esModule", { value: true });
  var e8 = ms, t2 = "/collections", n2 = function() {
    function n3(e9) {
      this.apiCall = e9;
    }
    return n3.prototype.create = function(n4, r2) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.post(t2, n4, r2)];
        });
      });
    }, n3.prototype.retrieve = function() {
      return e8.__awaiter(this, arguments, void 0, function(n4) {
        return void 0 === n4 && (n4 = {}), e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(t2, n4)];
        });
      });
    }, Object.defineProperty(n3, "RESOURCEPATH", { get: function() {
      return t2;
    }, enumerable: false, configurable: true }), n3;
  }();
  return sc.default = n2, sc;
}
var lc;
var fc;
var pc;
var dc = {};
var hc = {};
var Dc = {};
var vc = {};
function mc() {
  if (lc) return vc;
  lc = 1, Object.defineProperty(vc, "__esModule", { value: true });
  var e8 = ms, t2 = function() {
    function t3() {
      this.responseCache = /* @__PURE__ */ new Map(), this.responsePromiseCache = /* @__PURE__ */ new Map();
    }
    return t3.prototype.clearCache = function() {
      this.responseCache = /* @__PURE__ */ new Map(), this.responsePromiseCache = /* @__PURE__ */ new Map();
    }, t3.prototype.perform = function(t4, n2, r2, u2) {
      return e8.__awaiter(this, void 0, void 0, function() {
        var o2, i2, a2, s2, c2, l2, f2, p2, d2, h2, D2, v2, m2, y2, g2, F2, E2, _2, C2, b2, A2;
        return e8.__generator(this, function(e9) {
          switch (e9.label) {
            case 0:
              if (i2 = (o2 = u2 || {}).cacheResponseForSeconds, a2 = void 0 === i2 ? 120 : i2, s2 = o2.maxSize, c2 = void 0 === s2 ? 100 : s2, l2 = void 0 === u2 || a2 <= 0 || c2 <= 0, f2 = r2.path, p2 = r2.queryParams, d2 = r2.body, h2 = r2.headers, D2 = r2.streamConfig, v2 = r2.abortSignal, m2 = r2.responseType, y2 = r2.isStreamingRequest, l2) return [2, this.executeRequest(t4, n2, f2, p2, d2, h2, { abortSignal: v2, responseType: m2, streamConfig: D2, isStreamingRequest: y2 })];
              if (g2 = JSON.stringify(r2), F2 = this.responseCache.get(g2), E2 = Date.now(), F2) {
                if (E2 - F2.requestTimestamp < 1e3 * a2) return this.responseCache.delete(g2), this.responseCache.set(g2, F2), [2, F2.response];
                this.responseCache.delete(g2);
              }
              if (_2 = this.responsePromiseCache.get(g2)) {
                if (E2 - _2.requestTimestamp < 1e3 * a2) return this.responsePromiseCache.delete(g2), this.responsePromiseCache.set(g2, _2), [2, _2.responsePromise];
                this.responsePromiseCache.delete(g2);
              }
              return C2 = this.executeRequest(t4, n2, f2, p2, d2, h2, { abortSignal: v2, responseType: m2, streamConfig: D2, isStreamingRequest: y2 }), this.responsePromiseCache.set(g2, { requestTimestamp: E2, responsePromise: C2 }), [4, C2];
            case 1:
              return b2 = e9.sent(), this.responseCache.set(g2, { requestTimestamp: E2, response: b2 }), this.responseCache.size > c2 && (A2 = this.responseCache.keys().next().value) && this.responseCache.delete(A2), this.responsePromiseCache.size > c2 && (A2 = this.responsePromiseCache.keys().next().value) && this.responsePromiseCache.delete(A2), [2, b2];
          }
        });
      });
    }, t3.prototype.executeRequest = function(e9, t4, n2, r2, u2, o2, i2) {
      void 0 === r2 && (r2 = {});
      var a2 = e9[t4];
      switch (t4) {
        case "get":
          return a2.call(e9, n2, r2, { abortSignal: null == i2 ? void 0 : i2.abortSignal, responseType: null == i2 ? void 0 : i2.responseType, streamConfig: null == i2 ? void 0 : i2.streamConfig, isStreamingRequest: null == i2 ? void 0 : i2.isStreamingRequest });
        case "delete":
          return a2.call(e9, n2, r2);
        case "post":
          return a2.call(e9, n2, u2, r2, o2 || {}, { abortSignal: null == i2 ? void 0 : i2.abortSignal, responseType: null == i2 ? void 0 : i2.responseType, streamConfig: null == i2 ? void 0 : i2.streamConfig, isStreamingRequest: null == i2 ? void 0 : i2.isStreamingRequest });
        case "put":
        case "patch":
          return a2.call(e9, n2, u2, r2);
        default:
          throw new Error("Unsupported method: ".concat(String(t4)));
      }
    }, t3;
  }();
  return vc.default = t2, vc;
}
function yc() {
  if (fc) return Dc;
  fc = 1, Object.defineProperty(Dc, "__esModule", { value: true }), Dc.SearchOnlyDocuments = void 0;
  var e8 = ms, t2 = e8.__importDefault(mc()), n2 = e8.__importDefault(cc()), r2 = oc(), u2 = "/documents", o2 = function() {
    function o3(e9, n3, r3) {
      this.collectionName = e9, this.apiCall = n3, this.configuration = r3, this.requestWithCache = new t2.default();
    }
    return o3.prototype.clearCache = function() {
      this.requestWithCache.clearCache();
    }, o3.prototype.search = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n3) {
        var u3, o4, i2, a2, s2, c2, l2 = void 0 === n3 ? {} : n3, f2 = l2.cacheSearchResultsForSeconds, p2 = void 0 === f2 ? this.configuration.cacheSearchResultsForSeconds : f2, d2 = l2.abortSignal, h2 = void 0 === d2 ? null : d2;
        return e8.__generator(this, function(n4) {
          return u3 = {}, true === this.configuration.useServerSideSearchCache && (u3.use_cache = true), o4 = (0, r2.normalizeArrayableParams)(t4), i2 = o4.streamConfig, a2 = e8.__rest(o4, ["streamConfig"]), s2 = e8.__assign(e8.__assign({}, u3), a2), c2 = true === s2.conversation_stream, [2, this.requestWithCache.perform(this.apiCall, "get", { path: this.endpointPath("search"), queryParams: s2, streamConfig: i2, abortSignal: h2, isStreamingRequest: c2 }, { cacheResponseForSeconds: p2 })];
        });
      });
    }, o3.prototype.endpointPath = function(e9) {
      return "".concat(n2.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.collectionName)).concat(u2).concat(void 0 === e9 ? "" : "/" + e9);
    }, Object.defineProperty(o3, "RESOURCEPATH", { get: function() {
      return u2;
    }, enumerable: false, configurable: true }), o3;
  }();
  return Dc.SearchOnlyDocuments = o2, Dc;
}
function gc() {
  if (pc) return hc;
  pc = 1, Object.defineProperty(hc, "__esModule", { value: true });
  var e8 = ms, t2 = Vs(), n2 = yc(), r2 = "undefined" != typeof process && null != process.versions && null != process.versions.node, u2 = function(n3) {
    function u3(e9, t3, r3) {
      return n3.call(this, e9, t3, r3) || this;
    }
    return e8.__extends(u3, n3), u3.prototype.create = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n4) {
        return void 0 === n4 && (n4 = {}), e8.__generator(this, function(e9) {
          if (!t4) throw new Error("No document provided");
          return [2, this.apiCall.post(this.endpointPath(), t4, n4)];
        });
      });
    }, u3.prototype.upsert = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n4) {
        return void 0 === n4 && (n4 = {}), e8.__generator(this, function(e9) {
          if (!t4) throw new Error("No document provided");
          return [2, this.apiCall.post(this.endpointPath(), t4, Object.assign({}, n4, { action: "upsert" }))];
        });
      });
    }, u3.prototype.update = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n4) {
        return void 0 === n4 && (n4 = {}), e8.__generator(this, function(e9) {
          if (!t4) throw new Error("No document provided");
          return null != n4.filter_by ? [2, this.apiCall.patch(this.endpointPath(), t4, Object.assign({}, n4))] : [2, this.apiCall.post(this.endpointPath(), t4, Object.assign({}, n4, { action: "update" }))];
        });
      });
    }, u3.prototype.emplace = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n4) {
        return void 0 === n4 && (n4 = {}), e8.__generator(this, function(e9) {
          if (!t4) throw new Error("No document provided");
          return null != n4.filter_by ? [2, this.apiCall.patch(this.endpointPath(), t4, Object.assign({}, n4))] : [2, this.apiCall.post(this.endpointPath(), t4, Object.assign({}, n4, { action: "emplace" }))];
        });
      });
    }, u3.prototype.delete = function() {
      return e8.__awaiter(this, arguments, void 0, function(t3) {
        return void 0 === t3 && (t3 = {}), e8.__generator(this, function(e9) {
          return [2, this.apiCall.delete(this.endpointPath(), t3)];
        });
      });
    }, u3.prototype.createMany = function(t3) {
      return e8.__awaiter(this, arguments, void 0, function(t4, n4) {
        return void 0 === n4 && (n4 = {}), e8.__generator(this, function(e9) {
          return this.configuration.logger.warn("createMany is deprecated and will be removed in a future version. Use import instead, which now takes both an array of documents or a JSONL string of documents"), [2, this.import(t4, n4)];
        });
      });
    }, u3.prototype.import = function(n4) {
      return e8.__awaiter(this, arguments, void 0, function(n5, u4) {
        var o2, i2, a2, s2, c2;
        return void 0 === u4 && (u4 = {}), e8.__generator(this, function(l2) {
          switch (l2.label) {
            case 0:
              if (o2 = e8.__assign({ throwOnFail: true }, u4), Array.isArray(n5)) {
                if (0 === n5.length) throw new t2.RequestMalformed("No documents provided");
                try {
                  i2 = n5.map(function(e9) {
                    return JSON.stringify(e9);
                  }).join("\n");
                } catch (e9) {
                  if (e9 instanceof RangeError && e9.message.includes("Too many properties to enumerate")) throw new Error("".concat(e9, "\n          It looks like you have reached a Node.js limit that restricts the number of keys in an Object: https://stackoverflow.com/questions/9282869/are-there-limits-to-the-number-of-properties-in-a-javascript-object\n\n         Please try reducing the number of keys in your document, or using CURL to import your data.\n          "));
                  throw new Error(e9);
                }
              } else if (null == (f2 = i2 = n5) || "" === f2 || 0 === f2.length) throw new t2.RequestMalformed("No documents provided");
              return [4, this.apiCall.performRequest("post", this.endpointPath("import"), { queryParameters: o2, bodyParameters: i2, additionalHeaders: { "Content-Type": "text/plain" }, skipConnectionTimeout: true, enableKeepAlive: !!r2 })];
            case 1:
              if (a2 = l2.sent(), Array.isArray(n5)) {
                if (s2 = a2.split("\n").map(function(e9) {
                  return JSON.parse(e9);
                }), (c2 = s2.filter(function(e9) {
                  return false === e9.success;
                })).length > 0 && o2.throwOnFail) throw new t2.ImportError("".concat(s2.length - c2.length, " documents imported successfully, ").concat(c2.length, " documents failed during import. Use `error.importResults` from the raised exception to get a detailed error reason for each document."), s2, { documentsInJSONLFormat: i2, options: o2, failedItems: c2, successCount: s2.length - c2.length });
                return [2, s2];
              }
              return [2, a2];
          }
          var f2;
        });
      });
    }, u3.prototype.importStream = function(n4) {
      return e8.__awaiter(this, arguments, void 0, function(n5, u4) {
        var o2, i2, a2, s2;
        return void 0 === u4 && (u4 = {}), e8.__generator(this, function(c2) {
          switch (c2.label) {
            case 0:
              return o2 = e8.__assign({ throwOnFail: true }, u4), [4, this.apiCall.performRequest("post", this.endpointPath("import"), { queryParameters: o2, bodyParameters: n5, additionalHeaders: { "Content-Type": "text/plain" }, skipConnectionTimeout: true, enableKeepAlive: !!r2 })];
            case 1:
              if (i2 = c2.sent(), a2 = i2.split("\n").map(function(e9) {
                return JSON.parse(e9);
              }), (s2 = a2.filter(function(e9) {
                return false === e9.success;
              })).length > 0 && o2.throwOnFail) throw new t2.ImportError("".concat(a2.length - s2.length, " documents imported successfully, ").concat(s2.length, " documents failed during import. Use `error.importResults` from the raised exception to get a detailed error reason for each document."), a2, { documentsInJSONLFormat: n5, options: o2, failedItems: s2, successCount: a2.length - s2.length });
              return [2, a2];
          }
        });
      });
    }, u3.prototype.export = function() {
      return e8.__awaiter(this, arguments, void 0, function(t3) {
        return void 0 === t3 && (t3 = {}), e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath("export"), t3)];
        });
      });
    }, u3.prototype.exportStream = function() {
      return e8.__awaiter(this, arguments, void 0, function(t3) {
        return void 0 === t3 && (t3 = {}), e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath("export"), t3, { responseType: "stream" })];
        });
      });
    }, u3;
  }(n2.SearchOnlyDocuments);
  return hc.default = u2, hc;
}
var Fc;
var Ec = {};
function _c() {
  if (Fc) return Ec;
  Fc = 1, Object.defineProperty(Ec, "__esModule", { value: true });
  var e8 = ms, t2 = e8.__importDefault(cc()), n2 = function() {
    function n3(e9, t3) {
      this.collectionName = e9, this.apiCall = t3;
    }
    return n3.prototype.upsert = function(t3, n4) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.put(this.endpointPath(t3), n4)];
        });
      });
    }, n3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath())];
        });
      });
    }, n3.prototype.endpointPath = function(e9) {
      return "".concat(t2.default.RESOURCEPATH, "/").concat(this.collectionName).concat(n3.RESOURCEPATH).concat(void 0 === e9 ? "" : "/" + encodeURIComponent(e9));
    }, Object.defineProperty(n3, "RESOURCEPATH", { get: function() {
      return "/overrides";
    }, enumerable: false, configurable: true }), n3;
  }();
  return Ec.default = n2, Ec;
}
var Cc;
var bc;
var Ac = {};
var wc = {};
function Sc() {
  if (bc) return wc;
  bc = 1, Object.defineProperty(wc, "__esModule", { value: true });
  var e8 = ms, t2 = e8.__importDefault(cc()), n2 = function() {
    function n3(e9, t3) {
      this.collectionName = e9, this.apiCall = t3;
    }
    return n3.prototype.upsert = function(t3, n4) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.put(this.endpointPath(t3), n4)];
        });
      });
    }, n3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath())];
        });
      });
    }, n3.prototype.endpointPath = function(e9) {
      return n3.hasWarnedDeprecation || (console.warn("[typesense] 'synonyms' APIs are deprecated starting with Typesense Server v30. Please migrate to synonym sets ('synonym_sets')."), n3.hasWarnedDeprecation = true), "".concat(t2.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.collectionName)).concat(n3.RESOURCEPATH).concat(void 0 === e9 ? "" : "/" + encodeURIComponent(e9));
    }, Object.defineProperty(n3, "RESOURCEPATH", { get: function() {
      return "/synonyms";
    }, enumerable: false, configurable: true }), n3.hasWarnedDeprecation = false, n3;
  }();
  return wc.default = n2, wc;
}
var kc;
var Oc;
var Pc;
var Bc = {};
var xc = {};
var Rc;
var jc = {};
function Ic() {
  if (Rc) return jc;
  Rc = 1, Object.defineProperty(jc, "__esModule", { value: true });
  var e8 = ms, t2 = "/aliases", n2 = function() {
    function n3(e9) {
      this.apiCall = e9;
    }
    return n3.prototype.upsert = function(t3, n4) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.put(this.endpointPath(t3), n4)];
        });
      });
    }, n3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(t2)];
        });
      });
    }, n3.prototype.endpointPath = function(e9) {
      return "".concat(n3.RESOURCEPATH, "/").concat(encodeURIComponent(e9));
    }, Object.defineProperty(n3, "RESOURCEPATH", { get: function() {
      return t2;
    }, enumerable: false, configurable: true }), n3;
  }();
  return jc.default = n2, jc;
}
var Tc;
var Nc;
var Mc = {};
var Lc = {};
function Uc() {
  if (Nc) return Lc;
  Nc = 1, Object.defineProperty(Lc, "__esModule", { value: true });
  var e8 = ms, t2 = nc, n2 = oc(), r2 = "/keys", u2 = function() {
    function u3(e9) {
      this.apiCall = e9, this.apiCall = e9;
    }
    return u3.prototype.create = function(t3) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.post(u3.RESOURCEPATH, t3)];
        });
      });
    }, u3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(r2)];
        });
      });
    }, u3.prototype.generateScopedSearchKey = function(e9, r3) {
      var u4 = (0, n2.normalizeArrayableParams)(r3), o2 = JSON.stringify(u4), i2 = Buffer.from((0, t2.createHmac)("sha256", e9).update(o2).digest("base64")), a2 = e9.substr(0, 4), s2 = "".concat(i2).concat(a2).concat(o2);
      return Buffer.from(s2).toString("base64");
    }, Object.defineProperty(u3, "RESOURCEPATH", { get: function() {
      return r2;
    }, enumerable: false, configurable: true }), u3;
  }();
  return Lc.default = u2, Lc;
}
var qc;
var Hc;
var zc;
var $c;
var Kc;
var Wc;
var Vc;
var Qc = {};
var Jc = {};
var Zc = {};
var Gc = {};
var Xc = {};
var Yc = {};
var el = {};
function tl() {
  if (Vc) return el;
  Vc = 1, Object.defineProperty(el, "__esModule", { value: true });
  var e8 = ms, t2 = e8.__importDefault(mc()), n2 = oc(), r2 = function() {
    function r3(e9, n3, r4) {
      void 0 === r4 && (r4 = false), this.apiCall = e9, this.configuration = n3, this.useTextContentType = r4, this.requestWithCache = new t2.default(), this.logger = this.apiCall.logger;
    }
    return r3.prototype.clearCache = function() {
      this.requestWithCache.clearCache();
    }, r3.prototype.perform = function(t3, r4, u2) {
      return e8.__awaiter(this, void 0, void 0, function() {
        var o2, i2, a2, s2, c2, l2, f2;
        return e8.__generator(this, function(p2) {
          return o2 = r4 ? e8.__assign({}, r4) : {}, i2 = null !== (f2 = null == u2 ? void 0 : u2.cacheSearchResultsForSeconds) && void 0 !== f2 ? f2 : this.configuration.cacheSearchResultsForSeconds, true === this.configuration.useServerSideSearchCache && (o2.use_cache = true), true === t3.union && this.hasAnySearchObjectPagination(t3) && this.logger.warn("Individual `searches` pagination parameters are ignored when `union: true` is set. Use a top-level pagination parameter instead. See https://typesense.org/docs/29.0/api/federated-multi-search.html#union-search"), a2 = { union: t3.union, searches: t3.searches.map(n2.normalizeArrayableParams) }, s2 = o2.streamConfig, c2 = e8.__rest(o2, ["streamConfig"]), l2 = (0, n2.normalizeArrayableParams)(c2), [2, this.requestWithCache.perform(this.apiCall, "post", { path: "/multi_search", body: a2, queryParams: l2, headers: this.useTextContentType ? { "content-type": "text/plain" } : {}, streamConfig: s2, abortSignal: null == u2 ? void 0 : u2.abortSignal, isStreamingRequest: this.isStreamingRequest(o2) }, void 0 !== i2 ? { cacheResponseForSeconds: i2 } : void 0)];
        });
      });
    }, r3.prototype.isStreamingRequest = function(e9) {
      return true === e9.conversation_stream;
    }, r3.prototype.hasAnySearchObjectPagination = function(e9) {
      return e9.searches.some(function(e10) {
        return void 0 !== e10.page || void 0 !== e10.per_page || void 0 !== e10.offset || void 0 !== e10.limit || void 0 !== e10.limit_hits;
      });
    }, r3;
  }();
  return el.default = r2, el;
}
var nl;
var rl = {};
function ul() {
  if (nl) return rl;
  nl = 1, Object.defineProperty(rl, "__esModule", { value: true });
  var e8 = ms, t2 = oc(), n2 = function() {
    function n3(e9) {
      this.apiCall = e9;
    }
    return n3.prototype.upsert = function(n4, r2) {
      return e8.__awaiter(this, void 0, void 0, function() {
        var u2, o2;
        return e8.__generator(this, function(e9) {
          return "object" === Dn(r2.value) && "searches" in r2.value ? (u2 = r2.value.searches.map(function(e10) {
            return (0, t2.normalizeArrayableParams)(e10);
          }), [2, this.apiCall.put(this.endpointPath(n4), { value: { searches: u2 } })]) : (o2 = (0, t2.normalizeArrayableParams)(r2.value), [2, this.apiCall.put(this.endpointPath(n4), { value: o2 })]);
        });
      });
    }, n3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath())];
        });
      });
    }, n3.prototype.endpointPath = function(e9) {
      return "".concat(n3.RESOURCEPATH).concat(void 0 === e9 ? "" : "/" + encodeURIComponent(e9));
    }, Object.defineProperty(n3, "RESOURCEPATH", { get: function() {
      return "/presets";
    }, enumerable: false, configurable: true }), n3;
  }();
  return rl.default = n2, rl;
}
var ol;
var il;
var al = {};
var sl = {};
var cl = {};
function ll() {
  if (il) return cl;
  il = 1, Object.defineProperty(cl, "__esModule", { value: true });
  var e8 = ms, t2 = function() {
    function t3(e9) {
      this.apiCall = e9, this.apiCall = e9;
    }
    return t3.prototype.upsert = function(t4, n2) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.put(this.endpointPath(t4), n2)];
        });
      });
    }, t3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath())];
        });
      });
    }, t3.prototype.endpointPath = function(e9) {
      return "".concat(t3.RESOURCEPATH).concat(void 0 === e9 ? "" : "/" + encodeURIComponent(e9));
    }, Object.defineProperty(t3, "RESOURCEPATH", { get: function() {
      return "/analytics/rules";
    }, enumerable: false, configurable: true }), t3;
  }();
  return cl.default = t2, cl;
}
var fl;
var pl;
var dl;
var hl = {};
var Dl = {};
function vl() {
  if (pl) return Dl;
  pl = 1, Object.defineProperty(Dl, "__esModule", { value: true });
  var e8 = ms, t2 = function() {
    function t3(e9) {
      this.apiCall = e9, this.apiCall = e9;
    }
    return t3.prototype.create = function(t4) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.post(this.endpointPath(), t4)];
        });
      });
    }, t3.prototype.retrieve = function(t4) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath(), t4)];
        });
      });
    }, t3.prototype.endpointPath = function(e9) {
      return "".concat(t3.RESOURCEPATH).concat(void 0 === e9 ? "" : "/" + encodeURIComponent(e9));
    }, Object.defineProperty(t3, "RESOURCEPATH", { get: function() {
      return "/analytics/events";
    }, enumerable: false, configurable: true }), t3;
  }();
  return Dl.default = t2, Dl;
}
var ml;
var yl = {};
var gl = {};
function Fl() {
  if (ml) return gl;
  ml = 1, Object.defineProperty(gl, "__esModule", { value: true });
  var e8 = ms, t2 = function() {
    function t3(e9) {
      this.apiCall = e9, this.apiCall = e9;
    }
    return t3.prototype.create = function(t4) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.post(this.endpointPath(), t4, {}, {})];
        });
      });
    }, t3.prototype.upsert = function(t4, n2) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.put(this.endpointPath(t4), n2)];
        });
      });
    }, t3.prototype.retrieve = function(t4) {
      return e8.__awaiter(this, void 0, void 0, function() {
        var n2;
        return e8.__generator(this, function(e9) {
          return n2 = {}, t4 && (n2.rule_tag = t4), [2, this.apiCall.get(this.endpointPath(), n2)];
        });
      });
    }, t3.prototype.endpointPath = function(e9) {
      return "".concat(t3.RESOURCEPATH).concat(void 0 === e9 ? "" : "/" + encodeURIComponent(e9));
    }, Object.defineProperty(t3, "RESOURCEPATH", { get: function() {
      return "/analytics/rules";
    }, enumerable: false, configurable: true }), t3;
  }();
  return gl.default = t2, gl;
}
var El;
var _l;
var Cl = {};
var bl;
var Al = {};
function wl() {
  if (bl) return Al;
  bl = 1, Object.defineProperty(Al, "__esModule", { value: true });
  var e8 = ms, t2 = function() {
    function t3(e9) {
      this.apiCall = e9;
    }
    return t3.prototype.upsert = function(t4, n2) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.put(this.endpointPath(t4), n2)];
        });
      });
    }, t3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath())];
        });
      });
    }, t3.prototype.endpointPath = function(e9) {
      return "".concat(t3.RESOURCEPATH).concat(void 0 === e9 ? "" : "/" + encodeURIComponent(e9));
    }, Object.defineProperty(t3, "RESOURCEPATH", { get: function() {
      return "/stopwords";
    }, enumerable: false, configurable: true }), t3;
  }();
  return Al.default = t2, Al;
}
var Sl;
var kl;
var Ol = {};
var Pl = {};
var Bl = {};
function xl() {
  if (kl) return Bl;
  kl = 1, Object.defineProperty(Bl, "__esModule", { value: true });
  var e8 = ms, t2 = function() {
    function t3(e9) {
      this.apiCall = e9, this.apiCall = e9;
    }
    return t3.prototype.create = function(t4) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.post(this.endpointPath(), t4)];
        });
      });
    }, t3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath())];
        });
      });
    }, t3.prototype.endpointPath = function(e9) {
      return "".concat(t3.RESOURCEPATH).concat(void 0 === e9 ? "" : "/" + encodeURIComponent(e9));
    }, Object.defineProperty(t3, "RESOURCEPATH", { get: function() {
      return "/conversations/models";
    }, enumerable: false, configurable: true }), t3;
  }();
  return Bl.default = t2, Bl;
}
var Rl;
var jl;
var Il = {};
function Tl() {
  if (jl) return Pl;
  jl = 1, Object.defineProperty(Pl, "__esModule", { value: true });
  var e8 = ms, t2 = e8.__importDefault(xl()), n2 = e8.__importDefault(function() {
    if (Rl) return Il;
    Rl = 1, Object.defineProperty(Il, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(xl()), n3 = function() {
      function n4(e10, t4) {
        this.id = e10, this.apiCall = t4;
      }
      return n4.prototype.update = function(t4) {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.put(this.endpointPath(), t4)];
          });
        });
      }, n4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, n4.prototype.delete = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, n4.prototype.endpointPath = function() {
        return "".concat(t3.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.id));
      }, n4;
    }();
    return Il.default = n3, Il;
  }()), r2 = "/conversations", u2 = function() {
    function u3(e9) {
      this.apiCall = e9, this.individualConversationModels = {}, this.apiCall = e9, this._conversationsModels = new t2.default(this.apiCall);
    }
    return u3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(r2)];
        });
      });
    }, u3.prototype.models = function(e9) {
      return void 0 === e9 ? this._conversationsModels : (void 0 === this.individualConversationModels[e9] && (this.individualConversationModels[e9] = new n2.default(e9, this.apiCall)), this.individualConversationModels[e9]);
    }, Object.defineProperty(u3, "RESOURCEPATH", { get: function() {
      return r2;
    }, enumerable: false, configurable: true }), u3;
  }();
  return Pl.default = u2, Pl;
}
var Nl;
var Ml;
var Ll = {};
var Ul = {};
var ql = {};
function Hl() {
  if (Ml) return ql;
  Ml = 1, Object.defineProperty(ql, "__esModule", { value: true });
  var e8 = ms, t2 = function() {
    function t3(e9) {
      this.apiCall = e9, this.apiCall = e9;
    }
    return t3.prototype.upsert = function(t4, n2) {
      return e8.__awaiter(this, void 0, void 0, function() {
        var r2, u2;
        return e8.__generator(this, function(e9) {
          switch (e9.label) {
            case 0:
              return r2 = Array.isArray(n2) ? n2.map(function(e10) {
                return JSON.stringify(e10);
              }).join("\n") : n2, [4, this.apiCall.performRequest("post", this.endpointPath("import"), { queryParameters: { id: t4 }, bodyParameters: r2, additionalHeaders: { "Content-Type": "text/plain" }, skipConnectionTimeout: true })];
            case 1:
              return u2 = e9.sent(), [2, Array.isArray(n2) ? u2.split("\n").map(function(e10) {
                return JSON.parse(e10);
              }) : u2];
          }
        });
      });
    }, t3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath())];
        });
      });
    }, t3.prototype.endpointPath = function(e9) {
      return void 0 === e9 ? "".concat(t3.RESOURCEPATH) : "".concat(t3.RESOURCEPATH, "/").concat(encodeURIComponent(e9));
    }, Object.defineProperty(t3, "RESOURCEPATH", { get: function() {
      return "/stemming/dictionaries";
    }, enumerable: false, configurable: true }), t3;
  }();
  return ql.default = t2, ql;
}
var zl;
var $l;
var Kl = {};
var Wl;
var Vl = {};
function Ql() {
  if (Wl) return Vl;
  Wl = 1, Object.defineProperty(Vl, "__esModule", { value: true });
  var e8 = ms, t2 = function() {
    function t3(e9) {
      this.apiCall = e9;
    }
    return t3.prototype.create = function(t4) {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.post(this.endpointPath(), t4)];
        });
      });
    }, t3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(this.endpointPath())];
        });
      });
    }, t3.prototype.endpointPath = function() {
      return t3.RESOURCEPATH;
    }, Object.defineProperty(t3, "RESOURCEPATH", { get: function() {
      return "/nl_search_models";
    }, enumerable: false, configurable: true }), t3;
  }();
  return Vl.default = t2, Vl;
}
var Jl;
var Zl;
var Gl = {};
var Xl = {};
function Yl() {
  if (Zl) return Xl;
  Zl = 1, Object.defineProperty(Xl, "__esModule", { value: true });
  var e8 = ms, t2 = function() {
    function t3(e9) {
      this.apiCall = e9;
    }
    return t3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(t3.RESOURCEPATH)];
        });
      });
    }, t3.RESOURCEPATH = "/synonym_sets", t3;
  }();
  return Xl.default = t2, Xl;
}
var ef;
var tf;
var nf;
var rf = {};
var uf = {};
var of = {};
var af;
var sf = {};
function cf() {
  if (af) return sf;
  af = 1, Object.defineProperty(sf, "__esModule", { value: true });
  var e8 = ms, t2 = function() {
    function t3(e9) {
      this.apiCall = e9;
    }
    return t3.prototype.retrieve = function() {
      return e8.__awaiter(this, void 0, void 0, function() {
        return e8.__generator(this, function(e9) {
          return [2, this.apiCall.get(t3.RESOURCEPATH)];
        });
      });
    }, t3.RESOURCEPATH = "/curation_sets", t3;
  }();
  return sf.default = t2, sf;
}
var lf;
var ff;
var pf;
var df;
var hf = {};
var Df = {};
var vf = {};
function mf() {
  if (df) return ys;
  df = 1, Object.defineProperty(ys, "__esModule", { value: true });
  var e8 = ms, t2 = e8.__importDefault(Qs()), n2 = e8.__importDefault(ic()), r2 = e8.__importDefault(cc()), u2 = e8.__importDefault(function() {
    if (Pc) return dc;
    Pc = 1, Object.defineProperty(dc, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(cc()), n3 = e9.__importDefault(gc()), r3 = Vs(), u3 = e9.__importDefault(_c()), o3 = e9.__importDefault(function() {
      if (Cc) return Ac;
      Cc = 1, Object.defineProperty(Ac, "__esModule", { value: true });
      var e10 = ms, t4 = e10.__importDefault(cc()), n4 = e10.__importDefault(_c()), r4 = function() {
        function r5(e11, t5, n5) {
          this.collectionName = e11, this.overrideId = t5, this.apiCall = n5;
        }
        return r5.prototype.retrieve = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.get(this.endpointPath())];
            });
          });
        }, r5.prototype.delete = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.delete(this.endpointPath())];
            });
          });
        }, r5.prototype.endpointPath = function() {
          return "".concat(t4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.collectionName)).concat(n4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.overrideId));
        }, r5;
      }();
      return Ac.default = r4, Ac;
    }()), i3 = e9.__importDefault(Sc()), a3 = e9.__importDefault(function() {
      if (kc) return Bc;
      kc = 1, Object.defineProperty(Bc, "__esModule", { value: true });
      var e10 = ms, t4 = e10.__importDefault(cc()), n4 = e10.__importDefault(Sc()), r4 = function() {
        function r5(e11, t5, n5) {
          this.collectionName = e11, this.synonymId = t5, this.apiCall = n5;
        }
        return r5.prototype.retrieve = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.get(this.endpointPath())];
            });
          });
        }, r5.prototype.delete = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.delete(this.endpointPath())];
            });
          });
        }, r5.prototype.endpointPath = function() {
          return r5.hasWarnedDeprecation || (console.warn("[typesense] 'synonym' APIs are deprecated starting with Typesense Server v30. Please migrate to synonym sets 'synonym_sets'."), r5.hasWarnedDeprecation = true), "".concat(t4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.collectionName)).concat(n4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.synonymId));
        }, r5.hasWarnedDeprecation = false, r5;
      }();
      return Bc.default = r4, Bc;
    }()), s3 = function() {
      if (Oc) return xc;
      Oc = 1, Object.defineProperty(xc, "__esModule", { value: true }), xc.Document = void 0;
      var e10 = ms, t4 = e10.__importDefault(cc()), n4 = e10.__importDefault(gc()), r4 = oc(), u4 = function() {
        function u5(e11, t5, n5) {
          this.collectionName = e11, this.documentId = t5, this.apiCall = n5;
        }
        return u5.prototype.retrieve = function(t5) {
          return e10.__awaiter(this, void 0, void 0, function() {
            var n5;
            return e10.__generator(this, function(e11) {
              return n5 = (0, r4.normalizeArrayableParams)(null != t5 ? t5 : {}), [2, this.apiCall.get(this.endpointPath(), n5)];
            });
          });
        }, u5.prototype.delete = function(t5) {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.delete(this.endpointPath(), t5)];
            });
          });
        }, u5.prototype.update = function(t5) {
          return e10.__awaiter(this, arguments, void 0, function(t6, n5) {
            return void 0 === n5 && (n5 = {}), e10.__generator(this, function(e11) {
              return [2, this.apiCall.patch(this.endpointPath(), t6, n5)];
            });
          });
        }, u5.prototype.endpointPath = function() {
          return "".concat(t4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.collectionName)).concat(n4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.documentId));
        }, u5;
      }();
      return xc.Document = u4, xc;
    }(), c3 = function() {
      function c4(e10, t4, r4) {
        this.name = e10, this.apiCall = t4, this.configuration = r4, this.individualDocuments = {}, this.individualOverrides = {}, this.individualSynonyms = {}, this.name = e10, this.apiCall = t4, this.configuration = r4, this._documents = new n3.default(this.name, this.apiCall, this.configuration), this._overrides = new u3.default(this.name, this.apiCall), this._synonyms = new i3.default(this.name, this.apiCall);
      }
      return c4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, c4.prototype.update = function(t4) {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.patch(this.endpointPath(), t4)];
          });
        });
      }, c4.prototype.delete = function() {
        return e9.__awaiter(this, arguments, void 0, function(t4) {
          return void 0 === t4 && (t4 = {}), e9.__generator(this, function(e10) {
            return [2, this.apiCall.delete(this.endpointPath(), t4)];
          });
        });
      }, c4.prototype.exists = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          var t4;
          return e9.__generator(this, function(e10) {
            switch (e10.label) {
              case 0:
                return e10.trys.push([0, 2, , 3]), [4, this.retrieve()];
              case 1:
                return e10.sent(), [2, true];
              case 2:
                if ((t4 = e10.sent()) instanceof r3.ObjectNotFound) return [2, false];
                throw t4;
              case 3:
                return [2];
            }
          });
        });
      }, c4.prototype.documents = function(e10) {
        return e10 ? (void 0 === this.individualDocuments[e10] && (this.individualDocuments[e10] = new s3.Document(this.name, e10, this.apiCall)), this.individualDocuments[e10]) : this._documents;
      }, c4.prototype.overrides = function(e10) {
        return void 0 === e10 ? this._overrides : (void 0 === this.individualOverrides[e10] && (this.individualOverrides[e10] = new o3.default(this.name, e10, this.apiCall)), this.individualOverrides[e10]);
      }, c4.prototype.synonyms = function(e10) {
        return void 0 === e10 ? this._synonyms : (void 0 === this.individualSynonyms[e10] && (this.individualSynonyms[e10] = new a3.default(this.name, e10, this.apiCall)), this.individualSynonyms[e10]);
      }, c4.prototype.endpointPath = function() {
        return "".concat(t3.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.name));
      }, c4;
    }();
    return dc.default = c3, dc;
  }()), o2 = e8.__importDefault(Ic()), i2 = e8.__importDefault(function() {
    if (Tc) return Mc;
    Tc = 1, Object.defineProperty(Mc, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(Ic()), n3 = function() {
      function n4(e10, t4) {
        this.name = e10, this.apiCall = t4;
      }
      return n4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, n4.prototype.delete = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, n4.prototype.endpointPath = function() {
        return "".concat(t3.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.name));
      }, n4;
    }();
    return Mc.default = n3, Mc;
  }()), a2 = e8.__importDefault(Uc()), s2 = e8.__importDefault(function() {
    if (qc) return Qc;
    qc = 1, Object.defineProperty(Qc, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(Uc()), n3 = function() {
      function n4(e10, t4) {
        this.id = e10, this.apiCall = t4;
      }
      return n4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, n4.prototype.delete = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, n4.prototype.endpointPath = function() {
        return "".concat(t3.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.id));
      }, n4;
    }();
    return Qc.default = n3, Qc;
  }()), c2 = e8.__importDefault(function() {
    if (Hc) return Jc;
    Hc = 1, Object.defineProperty(Jc, "__esModule", { value: true });
    var e9 = ms, t3 = function() {
      function t4(e10) {
        this.apiCall = e10;
      }
      return t4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get("/debug")];
          });
        });
      }, t4;
    }();
    return Jc.default = t3, Jc;
  }()), l2 = e8.__importDefault(function() {
    if (zc) return Zc;
    zc = 1, Object.defineProperty(Zc, "__esModule", { value: true });
    var e9 = ms, t3 = function() {
      function t4(e10) {
        this.apiCall = e10;
      }
      return t4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get("/metrics.json")];
          });
        });
      }, t4;
    }();
    return Zc.default = t3, Zc;
  }()), f2 = e8.__importDefault(function() {
    if ($c) return Gc;
    $c = 1, Object.defineProperty(Gc, "__esModule", { value: true });
    var e9 = ms, t3 = function() {
      function t4(e10) {
        this.apiCall = e10;
      }
      return t4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get("/stats.json")];
          });
        });
      }, t4;
    }();
    return Gc.default = t3, Gc;
  }()), p2 = e8.__importDefault(function() {
    if (Kc) return Xc;
    Kc = 1, Object.defineProperty(Xc, "__esModule", { value: true });
    var e9 = ms, t3 = function() {
      function t4(e10) {
        this.apiCall = e10;
      }
      return t4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get("/health")];
          });
        });
      }, t4;
    }();
    return Xc.default = t3, Xc;
  }()), d2 = e8.__importDefault(function() {
    if (Wc) return Yc;
    Wc = 1, Object.defineProperty(Yc, "__esModule", { value: true });
    var e9 = ms, t3 = "/operations", n3 = function() {
      function n4(e10) {
        this.apiCall = e10;
      }
      return n4.prototype.perform = function(n5) {
        return e9.__awaiter(this, arguments, void 0, function(n6, r3) {
          return void 0 === r3 && (r3 = {}), e9.__generator(this, function(e10) {
            return [2, this.apiCall.post("".concat(t3, "/").concat(n6), {}, r3)];
          });
        });
      }, n4.prototype.getSchemaChanges = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get("".concat(t3, "/schema_changes"))];
          });
        });
      }, n4;
    }();
    return Yc.default = n3, Yc;
  }()), h2 = e8.__importDefault(tl()), D2 = e8.__importDefault(ul()), v2 = e8.__importDefault(function() {
    if (ol) return al;
    ol = 1, Object.defineProperty(al, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(ul()), n3 = function() {
      function n4(e10, t4) {
        this.presetId = e10, this.apiCall = t4;
      }
      return n4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, n4.prototype.delete = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, n4.prototype.endpointPath = function() {
        return "".concat(t3.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.presetId));
      }, n4;
    }();
    return al.default = n3, al;
  }()), m2 = e8.__importDefault(function() {
    if (dl) return sl;
    dl = 1, Object.defineProperty(sl, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(ll()), n3 = e9.__importDefault(function() {
      if (fl) return hl;
      fl = 1, Object.defineProperty(hl, "__esModule", { value: true });
      var e10 = ms, t4 = e10.__importDefault(ll()), n4 = function() {
        function n5(e11, t5) {
          this.name = e11, this.apiCall = t5;
        }
        return n5.prototype.retrieve = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.get(this.endpointPath())];
            });
          });
        }, n5.prototype.delete = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.delete(this.endpointPath())];
            });
          });
        }, n5.prototype.endpointPath = function() {
          return "".concat(t4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.name));
        }, n5;
      }();
      return hl.default = n4, hl;
    }()), r3 = e9.__importDefault(vl()), u3 = function() {
      function e10(e11) {
        this.apiCall = e11, this.individualAnalyticsRules = {}, this.apiCall = e11, this._analyticsRules = new t3.default(this.apiCall), this._analyticsEvents = new r3.default(this.apiCall);
      }
      return e10.prototype.rules = function(t4) {
        return e10.hasWarnedDeprecation || (console.warn("[typesense] 'analyticsV1' is deprecated starting with Typesense Server v30 and will be removed in a future release. Please use 'analytics' instead."), e10.hasWarnedDeprecation = true), void 0 === t4 ? this._analyticsRules : (void 0 === this.individualAnalyticsRules[t4] && (this.individualAnalyticsRules[t4] = new n3.default(t4, this.apiCall)), this.individualAnalyticsRules[t4]);
      }, e10.prototype.events = function() {
        return this._analyticsEvents;
      }, Object.defineProperty(e10, "RESOURCEPATH", { get: function() {
        return "/analytics";
      }, enumerable: false, configurable: true }), e10.hasWarnedDeprecation = false, e10;
    }();
    return sl.default = u3, sl;
  }()), y2 = e8.__importDefault(function() {
    if (_l) return yl;
    _l = 1, Object.defineProperty(yl, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(Fl()), n3 = e9.__importDefault(function() {
      if (El) return Cl;
      El = 1, Object.defineProperty(Cl, "__esModule", { value: true });
      var e10 = ms, t4 = e10.__importDefault(Fl()), n4 = function() {
        function n5(e11, t5) {
          this.name = e11, this.apiCall = t5;
        }
        return n5.prototype.retrieve = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.get(this.endpointPath())];
            });
          });
        }, n5.prototype.delete = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.delete(this.endpointPath())];
            });
          });
        }, n5.prototype.endpointPath = function() {
          return "".concat(t4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.name));
        }, n5;
      }();
      return Cl.default = n4, Cl;
    }()), r3 = e9.__importDefault(vl()), u3 = function() {
      function e10(e11) {
        this.apiCall = e11, this.individualAnalyticsRules = {}, this.apiCall = e11, this._analyticsRules = new t3.default(this.apiCall), this._analyticsEvents = new r3.default(this.apiCall);
      }
      return e10.prototype.rules = function(e11) {
        return void 0 === e11 ? this._analyticsRules : (void 0 === this.individualAnalyticsRules[e11] && (this.individualAnalyticsRules[e11] = new n3.default(e11, this.apiCall)), this.individualAnalyticsRules[e11]);
      }, e10.prototype.events = function() {
        return this._analyticsEvents;
      }, Object.defineProperty(e10, "RESOURCEPATH", { get: function() {
        return "/analytics";
      }, enumerable: false, configurable: true }), e10;
    }();
    return yl.default = u3, yl;
  }()), g2 = e8.__importDefault(wl()), F2 = e8.__importDefault(function() {
    if (Sl) return Ol;
    Sl = 1, Object.defineProperty(Ol, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(wl()), n3 = function() {
      function n4(e10, t4) {
        this.stopwordId = e10, this.apiCall = t4;
      }
      return n4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, n4.prototype.delete = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, n4.prototype.endpointPath = function() {
        return "".concat(t3.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.stopwordId));
      }, n4;
    }();
    return Ol.default = n3, Ol;
  }()), E2 = e8.__importDefault(Tl()), _2 = e8.__importDefault(function() {
    if (Nl) return Ll;
    Nl = 1, Object.defineProperty(Ll, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(Tl()), n3 = function() {
      function n4(e10, t4) {
        this.id = e10, this.apiCall = t4;
      }
      return n4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, n4.prototype.update = function(t4) {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.put(this.endpointPath(), t4)];
          });
        });
      }, n4.prototype.delete = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, n4.prototype.endpointPath = function() {
        return "".concat(t3.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.id));
      }, n4;
    }();
    return Ll.default = n3, Ll;
  }()), C2 = e8.__importDefault(function() {
    if ($l) return Ul;
    $l = 1, Object.defineProperty(Ul, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(Hl()), n3 = e9.__importDefault(function() {
      if (zl) return Kl;
      zl = 1, Object.defineProperty(Kl, "__esModule", { value: true });
      var e10 = ms, t4 = e10.__importDefault(Hl()), n4 = function() {
        function n5(e11, t5) {
          this.id = e11, this.apiCall = t5;
        }
        return n5.prototype.retrieve = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.get(this.endpointPath())];
            });
          });
        }, n5.prototype.delete = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.delete(this.endpointPath())];
            });
          });
        }, n5.prototype.endpointPath = function() {
          return "".concat(t4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.id));
        }, n5;
      }();
      return Kl.default = n4, Kl;
    }()), r3 = function() {
      function e10(e11) {
        this.apiCall = e11, this.individualStemmingDictionaries = {}, this.apiCall = e11, this._stemmingDictionaries = new t3.default(this.apiCall);
      }
      return e10.prototype.dictionaries = function(e11) {
        return void 0 === e11 ? this._stemmingDictionaries : (void 0 === this.individualStemmingDictionaries[e11] && (this.individualStemmingDictionaries[e11] = new n3.default(e11, this.apiCall)), this.individualStemmingDictionaries[e11]);
      }, Object.defineProperty(e10, "RESOURCEPATH", { get: function() {
        return "/stemming";
      }, enumerable: false, configurable: true }), e10;
    }();
    return Ul.default = r3, Ul;
  }()), b2 = e8.__importDefault(Ql()), A2 = e8.__importDefault(function() {
    if (Jl) return Gl;
    Jl = 1, Object.defineProperty(Gl, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(Ql()), n3 = function() {
      function n4(e10, t4) {
        this.id = e10, this.apiCall = t4;
      }
      return n4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, n4.prototype.update = function(t4) {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.put(this.endpointPath(), t4)];
          });
        });
      }, n4.prototype.delete = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, n4.prototype.endpointPath = function() {
        return "".concat(t3.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.id));
      }, n4;
    }();
    return Gl.default = n3, Gl;
  }()), w2 = e8.__importDefault(Yl()), S2 = e8.__importDefault(function() {
    if (nf) return rf;
    nf = 1, Object.defineProperty(rf, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(Yl()), n3 = e9.__importDefault(function() {
      if (ef) return uf;
      ef = 1, Object.defineProperty(uf, "__esModule", { value: true });
      var e10 = ms, t4 = e10.__importDefault(Yl()), n4 = function() {
        function n5(e11, t5) {
          this.synonymSetName = e11, this.apiCall = t5;
        }
        return n5.prototype.upsert = function(t5, n6) {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.put(this.endpointPath(t5), n6)];
            });
          });
        }, n5.prototype.retrieve = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.get(this.endpointPath())];
            });
          });
        }, n5.prototype.endpointPath = function(e11) {
          return "".concat(t4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.synonymSetName), "/items").concat(void 0 === e11 ? "" : "/" + encodeURIComponent(e11));
        }, n5;
      }();
      return uf.default = n4, uf;
    }()), r3 = e9.__importDefault(function() {
      if (tf) return of;
      tf = 1, Object.defineProperty(of, "__esModule", { value: true });
      var e10 = ms, t4 = e10.__importDefault(Yl()), n4 = function() {
        function n5(e11, t5, n6) {
          this.synonymSetName = e11, this.itemId = t5, this.apiCall = n6;
        }
        return n5.prototype.retrieve = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.get(this.endpointPath())];
            });
          });
        }, n5.prototype.delete = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.delete(this.endpointPath())];
            });
          });
        }, n5.prototype.endpointPath = function() {
          return "".concat(t4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.synonymSetName), "/items/").concat(encodeURIComponent(this.itemId));
        }, n5;
      }();
      return of.default = n4, of;
    }()), u3 = function() {
      function u4(e10, t4) {
        this.synonymSetName = e10, this.apiCall = t4, this.individualItems = {}, this._items = new n3.default(this.synonymSetName, t4);
      }
      return u4.prototype.upsert = function(t4) {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.put(this.endpointPath(), t4)];
          });
        });
      }, u4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, u4.prototype.delete = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, u4.prototype.items = function(e10) {
        return void 0 === e10 ? this._items : (void 0 === this.individualItems[e10] && (this.individualItems[e10] = new r3.default(this.synonymSetName, e10, this.apiCall)), this.individualItems[e10]);
      }, u4.prototype.endpointPath = function() {
        return "".concat(t3.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.synonymSetName));
      }, u4;
    }();
    return rf.default = u3, rf;
  }()), k2 = e8.__importDefault(cf()), O2 = e8.__importDefault(function() {
    if (pf) return hf;
    pf = 1, Object.defineProperty(hf, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(cf()), n3 = e9.__importDefault(function() {
      if (lf) return Df;
      lf = 1, Object.defineProperty(Df, "__esModule", { value: true });
      var e10 = ms, t4 = e10.__importDefault(cf()), n4 = function() {
        function n5(e11, t5) {
          this.name = e11, this.apiCall = t5;
        }
        return n5.prototype.retrieve = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.get(this.endpointPath())];
            });
          });
        }, n5.prototype.endpointPath = function(e11) {
          return "".concat(t4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.name), "/items").concat(void 0 === e11 ? "" : "/" + encodeURIComponent(e11));
        }, n5;
      }();
      return Df.default = n4, Df;
    }()), r3 = e9.__importDefault(function() {
      if (ff) return vf;
      ff = 1, Object.defineProperty(vf, "__esModule", { value: true });
      var e10 = ms, t4 = e10.__importDefault(cf()), n4 = function() {
        function n5(e11, t5, n6) {
          this.name = e11, this.itemId = t5, this.apiCall = n6;
        }
        return n5.prototype.retrieve = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.get(this.endpointPath())];
            });
          });
        }, n5.prototype.upsert = function(t5) {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.put(this.endpointPath(), t5)];
            });
          });
        }, n5.prototype.delete = function() {
          return e10.__awaiter(this, void 0, void 0, function() {
            return e10.__generator(this, function(e11) {
              return [2, this.apiCall.delete(this.endpointPath())];
            });
          });
        }, n5.prototype.endpointPath = function() {
          return "".concat(t4.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.name), "/items/").concat(encodeURIComponent(this.itemId));
        }, n5;
      }();
      return vf.default = n4, vf;
    }()), u3 = function() {
      function u4(e10, t4) {
        this.name = e10, this.apiCall = t4, this.individualItems = {}, this._items = new n3.default(this.name, t4);
      }
      return u4.prototype.upsert = function(t4) {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.put(this.endpointPath(), t4)];
          });
        });
      }, u4.prototype.retrieve = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.get(this.endpointPath())];
          });
        });
      }, u4.prototype.delete = function() {
        return e9.__awaiter(this, void 0, void 0, function() {
          return e9.__generator(this, function(e10) {
            return [2, this.apiCall.delete(this.endpointPath())];
          });
        });
      }, u4.prototype.items = function(e10) {
        return void 0 === e10 ? this._items : (void 0 === this.individualItems[e10] && (this.individualItems[e10] = new r3.default(this.name, e10, this.apiCall)), this.individualItems[e10]);
      }, u4.prototype.endpointPath = function() {
        return "".concat(t3.default.RESOURCEPATH, "/").concat(encodeURIComponent(this.name));
      }, u4;
    }();
    return hf.default = u3, hf;
  }()), P2 = function() {
    function e9(e10) {
      var u3;
      e10.sendApiKeyAsQueryParam = null !== (u3 = e10.sendApiKeyAsQueryParam) && void 0 !== u3 && u3, this.configuration = new t2.default(e10), this.apiCall = new n2.default(this.configuration), this.debug = new c2.default(this.apiCall), this.metrics = new l2.default(this.apiCall), this.stats = new f2.default(this.apiCall), this.health = new p2.default(this.apiCall), this.operations = new d2.default(this.apiCall), this.multiSearch = new h2.default(this.apiCall, this.configuration), this._collections = new r2.default(this.apiCall), this.individualCollections = {}, this._aliases = new o2.default(this.apiCall), this.individualAliases = {}, this._keys = new a2.default(this.apiCall), this.individualKeys = {}, this._presets = new D2.default(this.apiCall), this.individualPresets = {}, this._stopwords = new g2.default(this.apiCall), this.individualStopwords = {}, this.analytics = new y2.default(this.apiCall), this.analyticsV1 = new m2.default(this.apiCall), this.stemming = new C2.default(this.apiCall), this._conversations = new E2.default(this.apiCall), this.individualConversations = {}, this._nlSearchModels = new b2.default(this.apiCall), this.individualNLSearchModels = {}, this._synonymSets = new w2.default(this.apiCall), this.individualSynonymSets = {}, this._curationSets = new k2.default(this.apiCall), this.individualCurationSets = {};
    }
    return e9.prototype.collections = function(e10) {
      return void 0 === e10 ? this._collections : (void 0 === this.individualCollections[e10] && (this.individualCollections[e10] = new u2.default(e10, this.apiCall, this.configuration)), this.individualCollections[e10]);
    }, e9.prototype.aliases = function(e10) {
      return void 0 === e10 ? this._aliases : (void 0 === this.individualAliases[e10] && (this.individualAliases[e10] = new i2.default(e10, this.apiCall)), this.individualAliases[e10]);
    }, e9.prototype.keys = function(e10) {
      return void 0 === e10 ? this._keys : (void 0 === this.individualKeys[e10] && (this.individualKeys[e10] = new s2.default(e10, this.apiCall)), this.individualKeys[e10]);
    }, e9.prototype.presets = function(e10) {
      return void 0 === e10 ? this._presets : (void 0 === this.individualPresets[e10] && (this.individualPresets[e10] = new v2.default(e10, this.apiCall)), this.individualPresets[e10]);
    }, e9.prototype.stopwords = function(e10) {
      return void 0 === e10 ? this._stopwords : (void 0 === this.individualStopwords[e10] && (this.individualStopwords[e10] = new F2.default(e10, this.apiCall)), this.individualStopwords[e10]);
    }, e9.prototype.conversations = function(e10) {
      return void 0 === e10 ? this._conversations : (void 0 === this.individualConversations[e10] && (this.individualConversations[e10] = new _2.default(e10, this.apiCall)), this.individualConversations[e10]);
    }, e9.prototype.nlSearchModels = function(e10) {
      return void 0 === e10 ? this._nlSearchModels : (void 0 === this.individualNLSearchModels[e10] && (this.individualNLSearchModels[e10] = new A2.default(e10, this.apiCall)), this.individualNLSearchModels[e10]);
    }, e9.prototype.synonymSets = function(e10) {
      return void 0 === e10 ? this._synonymSets : (void 0 === this.individualSynonymSets[e10] && (this.individualSynonymSets[e10] = new S2.default(e10, this.apiCall)), this.individualSynonymSets[e10]);
    }, e9.prototype.curationSets = function(e10) {
      return void 0 === e10 ? this._curationSets : (void 0 === this.individualCurationSets[e10] && (this.individualCurationSets[e10] = new O2.default(e10, this.apiCall)), this.individualCurationSets[e10]);
    }, e9;
  }();
  return ys.default = P2, ys;
}
var yf;
var gf;
var Ff;
var Ef = {};
var _f = {};
var Cf = function() {
  if (Ff) return xa;
  Ff = 1, Object.defineProperty(xa, "__esModule", { value: true }), xa.Errors = xa.SearchClient = xa.Client = void 0;
  var e8 = ms, t2 = e8.__importDefault(mf());
  xa.Client = t2.default;
  var n2 = e8.__importDefault(function() {
    if (gf) return Ef;
    gf = 1, Object.defineProperty(Ef, "__esModule", { value: true });
    var e9 = ms, t3 = e9.__importDefault(Qs()), n3 = e9.__importDefault(ic()), r3 = e9.__importDefault(tl()), u2 = function() {
      if (yf) return _f;
      yf = 1, Object.defineProperty(_f, "__esModule", { value: true }), _f.SearchOnlyCollection = void 0;
      var e10 = yc(), t4 = function() {
        function t5(t6, n4, r4) {
          this.name = t6, this.apiCall = n4, this.configuration = r4, this._documents = new e10.SearchOnlyDocuments(this.name, this.apiCall, this.configuration);
        }
        return t5.prototype.documents = function() {
          return this._documents;
        }, t5;
      }();
      return _f.SearchOnlyCollection = t4, _f;
    }(), o2 = function() {
      function e10(e11) {
        var u3;
        e11.sendApiKeyAsQueryParam = null === (u3 = e11.sendApiKeyAsQueryParam) || void 0 === u3 || u3, true === e11.sendApiKeyAsQueryParam && (e11.apiKey || "").length > 2e3 && (console.warn("[typesense] API Key is longer than 2000 characters which is over the allowed limit, so disabling sending it as a query parameter."), e11.sendApiKeyAsQueryParam = false), this.configuration = new t3.default(e11), this.apiCall = new n3.default(this.configuration), this.multiSearch = new r3.default(this.apiCall, this.configuration, true), this.individualCollections = {};
      }
      return e10.prototype.clearCache = function() {
        this.multiSearch.clearCache(), Object.entries(this.individualCollections).forEach(function(e11) {
          e11[0], e11[1].documents().clearCache();
        });
      }, e10.prototype.collections = function(e11) {
        if (e11) return void 0 === this.individualCollections[e11] && (this.individualCollections[e11] = new u2.SearchOnlyCollection(e11, this.apiCall, this.configuration)), this.individualCollections[e11];
        throw new Error("Typesense.SearchClient only supports search operations, so the collectionName that needs to be searched must be specified. Use Typesense.Client if you need to access the collection object.");
      }, e10;
    }();
    return Ef.default = o2, Ef;
  }());
  xa.SearchClient = n2.default;
  var r2 = e8.__importStar(Vs());
  return xa.Errors = r2, xa.default = { Client: t2.default, SearchClient: n2.default, Errors: r2 }, xa;
}();
function bf(e8) {
  return bf = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(e9) {
    return w(e9);
  } : function(e9) {
    return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : w(e9);
  }, bf(e8);
}
function Af(e8, t2) {
  (null == t2 || t2 > e8.length) && (t2 = e8.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e8[n2];
  return r2;
}
function wf(e8, t2) {
  if (e8) {
    if ("string" == typeof e8) return Af(e8, t2);
    var n2 = {}.toString.call(e8).slice(8, -1);
    return "Object" === n2 && e8.constructor && (n2 = e8.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e8) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Af(e8, t2) : void 0;
  }
}
function Sf(e8, t2) {
  return function(e9) {
    if (Array.isArray(e9)) return e9;
  }(e8) || function(e9, t3) {
    var n2 = null == e9 ? null : "undefined" != typeof Symbol && e9[Symbol.iterator] || e9["@@iterator"];
    if (null != n2) {
      var r2, u2, o2, i2, a2 = [], s2 = true, c2 = false;
      try {
        if (o2 = (n2 = n2.call(e9)).next, 0 === t3) ;
        else for (; !(s2 = (r2 = o2.call(n2)).done) && (a2.push(r2.value), a2.length !== t3); s2 = true) ;
      } catch (e10) {
        c2 = true, u2 = e10;
      } finally {
        try {
          if (!s2 && null != n2.return && (i2 = n2.return(), Object(i2) !== i2)) return;
        } finally {
          if (c2) throw u2;
        }
      }
      return a2;
    }
  }(e8, t2) || wf(e8, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function kf(e8) {
  return function(e9) {
    if (Array.isArray(e9)) return Af(e9);
  }(e8) || function(e9) {
    if ("undefined" != typeof Symbol && null != e9[Symbol.iterator] || null != e9["@@iterator"]) return Array.from(e9);
  }(e8) || wf(e8) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Of(e8) {
  var t2 = function(e9) {
    if ("object" != bf(e9) || !e9) return e9;
    var t3 = e9[Symbol.toPrimitive];
    if (void 0 !== t3) {
      var n2 = t3.call(e9, "string");
      if ("object" != bf(n2)) return n2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e9);
  }(e8);
  return "symbol" == bf(t2) ? t2 : t2 + "";
}
function Pf(e8, t2, n2) {
  return (t2 = Of(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
var Bf = { _adaptHighlightTag: function(e8, t2, n2) {
  return e8.replace(new RegExp("<mark>", "g"), t2 || "<mark>").replace(new RegExp("</mark>", "g"), n2 || "</mark>");
}, _adaptNumberOfPages: function() {
  var e8 = this.typesenseResponse.union_request_params ? this.typesenseResponse.union_request_params[0] : this.typesenseResponse.request_params, t2 = (null == e8 ? void 0 : e8.per_page) || 10, n2 = this.typesenseResponse.found / t2;
  return Number.isFinite(n2) ? Math.ceil(n2) : 1;
} };
function xf(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Rf(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? xf(Object(n2), true).forEach(function(t3) {
      Pf(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : xf(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
var jf = function(e8, t2) {
  return function(e9, t3) {
    for (var n2 = 0; n2 < t3.length; n2++) {
      var r2 = t3[n2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e9, Of(r2.key), r2);
    }
  }(e8.prototype, t2), Object.defineProperty(e8, "prototype", { writable: false }), e8;
}(function e7(t2, n2, r2) {
  var u2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
  !function(e8, t3) {
    if (!(e8 instanceof t3)) throw new TypeError("Cannot call a class as a function");
  }(this, e7), this.typesenseResponse = t2, this.instantsearchRequest = n2, this.configuration = r2, this.allTypesenseResults = u2, this.fullTypesenseResponse = o2;
}, [{ key: "_adaptGroupedHits", value: function(e8) {
  var t2 = this, n2 = [];
  return n2 = e8.map(function(e9) {
    var n3 = t2._adaptHits(e9.hits);
    return n3.forEach(function(t3) {
      t3.group_key = t3._group_key = e9.group_key, e9.found && (t3._group_found = e9.found);
    }), n3;
  }), this.configuration.flattenGroupedHits ? n2.flat() : n2.map(function(e9) {
    return Rf(Rf({}, e9[0]), {}, { _grouped_hits: e9 });
  });
} }, { key: "_adaptHits", value: function(e8) {
  var t2 = this;
  return e8.map(function(e9) {
    var n2 = Rf({}, e9.document);
    n2.objectID = e9.document.id, n2._snippetResult = t2._adaptHighlightResult(e9, "snippet"), n2._highlightResult = t2._adaptHighlightResult(e9, "value"), n2._rawTypesenseHit = e9, t2.fullTypesenseResponse.conversation && (n2._rawTypesenseConversation = t2.fullTypesenseResponse.conversation), ["text_match", "geo_distance_meters", "curated", "text_match_info", "hybrid_search_info", "vector_distance", "collection", "search_index"].forEach(function(t3) {
      Object.keys(e9).includes(t3) && !Object.keys(n2).includes(t3) && (n2[t3] = e9[t3]);
    });
    var r2 = n2[t2.configuration.geoLocationField];
    return r2 && (n2._geoloc = { lat: r2[0], lng: r2[1] }), n2;
  });
} }, { key: "_adaptHighlightResult", value: function(e8, t2) {
  var n2 = {};
  return null != e8.highlight && this.isHighlightPost0240RCN32Format(e8.highlight) ? this.adaptHighlightObject(e8, n2, t2) : this.adaptHighlightsArray(e8, n2, t2), n2;
} }, { key: "isHighlightPost0240RCN32Format", value: function(e8) {
  return null == e8.full && null == e8.snippet;
} }, { key: "adaptHighlightsArray", value: function(e8, t2, n2) {
  var r2 = this;
  Object.assign.apply(Object, [t2].concat(kf(Object.entries(e8.document).map(function(e9) {
    var t3 = Sf(e9, 2);
    return Pf({}, t3[0], { value: t3[1], matchLevel: "none", matchedWords: [] });
  })))), e8.highlights.forEach(function(e9) {
    t2[e9.field] = { value: e9[n2] || e9["".concat(n2, "s")], matchLevel: "full", matchedWords: e9.matched_tokens }, e9.indices && (t2[e9.field].matchedIndices = e9.indices);
  }), Object.entries(t2).forEach(function(u2) {
    var o2 = Sf(u2, 2), i2 = o2[0], a2 = o2[1], s2 = i2, c2 = a2.value, l2 = a2.matchLevel, f2 = a2.matchedWords, p2 = a2.matchedIndices;
    null == c2 ? t2[s2] = r2._adaptHighlightNullValue() : Array.isArray(c2) ? (t2[s2] = [], e8.document[s2].forEach(function(e9, u3) {
      p2 && p2.includes(u3) ? t2[s2].push({ value: r2._adaptHighlightTag("".concat(c2[p2.indexOf(u3)]), r2.instantsearchRequest.params.highlightPreTag, r2.instantsearchRequest.params.highlightPostTag), matchLevel: l2, matchedWords: f2[u3] }) : "object" === bf(e9) ? t2[s2].push(r2._adaptHighlightInObjectValue(e9, {}, n2)) : t2[s2].push({ value: "".concat(e9), matchLevel: "none", matchedWords: [] });
    })) : "object" === bf(c2) ? t2[s2] = r2._adaptHighlightInObjectValue(c2, {}, n2) : t2[s2].value = r2._adaptHighlightTag("".concat(c2), r2.instantsearchRequest.params.highlightPreTag, r2.instantsearchRequest.params.highlightPostTag);
  });
} }, { key: "adaptHighlightObject", value: function(e8, t2, n2) {
  Object.assign(t2, this._adaptHighlightInObjectValue(e8.document, e8.highlight, n2));
} }, { key: "_adaptHighlightInObjectValue", value: function(e8, t2, n2) {
  var r2 = this;
  return Object.assign.apply(Object, [{}].concat(kf(Object.entries(e8).map(function(e9) {
    var u2, o2 = Sf(e9, 2), i2 = o2[0], a2 = o2[1];
    if (null == a2) u2 = r2._adaptHighlightNullValue();
    else if (Array.isArray(a2)) {
      var s2;
      u2 = r2._adaptHighlightInArrayValue(a2, null !== (s2 = null == t2 ? void 0 : t2[i2]) && void 0 !== s2 ? s2 : [], n2);
    } else if ("object" === bf(a2)) {
      var c2;
      u2 = r2._adaptHighlightInObjectValue(a2, null !== (c2 = null == t2 ? void 0 : t2[i2]) && void 0 !== c2 ? c2 : {}, n2);
    } else u2 = r2._adaptHighlightInPrimitiveValue(a2, null == t2 ? void 0 : t2[i2], n2);
    return Pf({}, i2, u2);
  }))));
} }, { key: "_adaptHighlightInArrayValue", value: function(e8, t2, n2) {
  var r2 = this;
  return e8.map(function(e9, u2) {
    var o2;
    if (null == e9) o2 = r2._adaptHighlightNullValue();
    else if (Array.isArray(e9)) {
      var i2;
      o2 = r2._adaptHighlightInArrayValue(e9, null !== (i2 = null == t2 ? void 0 : t2[u2]) && void 0 !== i2 ? i2 : [], n2);
    } else if ("object" === bf(e9)) {
      var a2;
      o2 = r2._adaptHighlightInObjectValue(e9, null !== (a2 = null == t2 ? void 0 : t2[u2]) && void 0 !== a2 ? a2 : {}, n2);
    } else o2 = r2._adaptHighlightInPrimitiveValue(e9, null == t2 ? void 0 : t2[u2], n2);
    return o2;
  });
} }, { key: "_adaptHighlightInPrimitiveValue", value: function(e8, t2, n2) {
  if (null != t2) {
    var r2, u2, o2, i2 = null !== (r2 = null !== (u2 = null !== (o2 = t2[n2]) && void 0 !== o2 ? o2 : t2.highlight) && void 0 !== u2 ? u2 : t2.snippet) && void 0 !== r2 ? r2 : e8;
    return { value: this._adaptHighlightTag("".concat(i2), this.instantsearchRequest.params.highlightPreTag, this.instantsearchRequest.params.highlightPostTag), matchLevel: (t2.matched_tokens || []).length > 0 ? "full" : "none", matchedWords: t2.matched_tokens || [] };
  }
  return { value: this._adaptHighlightTag("".concat(e8), this.instantsearchRequest.params.highlightPreTag, this.instantsearchRequest.params.highlightPostTag), matchLevel: "none", matchedWords: [] };
} }, { key: "_adaptHighlightNullValue", value: function() {
  return { value: "", matchLevel: "none", matchedWords: [] };
} }, { key: "_adaptFacets", value: function(e8) {
  var t2 = {};
  return Array.isArray(e8) && e8.forEach(function(e9) {
    Object.assign(t2, Pf({}, e9.field_name, Object.assign.apply(Object, [{}].concat(kf(e9.counts.map(function(e10) {
      return Pf({}, e10.value, e10.count);
    }))))));
  }), t2;
} }, { key: "_adaptFacetStats", value: function(e8) {
  var t2 = {};
  return Array.isArray(e8) && e8.forEach(function(e9) {
    e9.stats && Object.keys(e9.stats).length > 0 && Object.assign(t2, Pf({}, e9.field_name, e9.stats));
  }), t2;
} }, { key: "_adaptRenderingContent", value: function(e8) {
  var t2, n2 = Object.assign({}, this.configuration.renderingContent);
  return null == (null === (t2 = n2.facetOrdering) || void 0 === t2 || null === (t2 = t2.facets) || void 0 === t2 ? void 0 : t2.order) && (n2.facetOrdering = n2.facetOrdering || {}, n2.facetOrdering.facets = n2.facetOrdering.facets || {}, n2.facetOrdering.facets.order = kf(new Set((Array.isArray(e8) ? e8 : []).map(function(e9) {
    return e9.field_name;
  }).concat(this.allTypesenseResults.map(function(e9) {
    return e9.facet_counts || [];
  }).flat().map(function(e9) {
    return e9.field_name;
  }).filter(function(e9) {
    return e9;
  }))))), n2;
} }, { key: "_adaptUserData", value: function(e8) {
  return e8 ? Array.isArray(e8) ? e8 : [e8] : [];
} }, { key: "adapt", value: function() {
  var e8 = this._adaptRenderingContent(this.typesenseResponse.facet_counts || []), t2 = this.typesenseResponse.union_request_params ? this.typesenseResponse.union_request_params[0] : this.typesenseResponse.request_params, n2 = Rf({ hits: this.typesenseResponse.grouped_hits ? this._adaptGroupedHits(this.typesenseResponse.grouped_hits) : this._adaptHits(this.typesenseResponse.hits), nbHits: this.typesenseResponse.found, page: this.typesenseResponse.union_request_params ? this.typesenseResponse.page : this.typesenseResponse.page - 1, nbPages: this._adaptNumberOfPages(), hitsPerPage: (null == t2 ? void 0 : t2.per_page) || 10, facets: this._adaptFacets(this.typesenseResponse.facet_counts || []), facets_stats: this._adaptFacetStats(this.typesenseResponse.facet_counts || []), query: (null == t2 ? void 0 : t2.q) || "", processingTimeMS: this.typesenseResponse.search_time_ms }, Object.keys(e8).length > 0 ? { renderingContent: e8 } : null);
  return this.typesenseResponse.metadata && (n2.appliedRules = ["typesense-override"], n2.userData = this._adaptUserData(this.typesenseResponse.metadata)), this.typesenseResponse.parsed_nl_query && (n2.parsed_nl_query = this.typesenseResponse.parsed_nl_query), this.fullTypesenseResponse.conversation && 0 === n2.hits.length && (n2.hits = [{ _rawTypesenseConversation: this.fullTypesenseResponse.conversation }]), n2;
} }]);
Object.assign(jf.prototype, Bf);
var If = ["askAi", "maxResultsPerGroup", "theme", "onClose", "transformItems", "hitComponent", "resultsFooterComponent", "navigator", "initialScrollY", "transformSearchClient", "disableUserPersonalization", "initialQuery", "translations", "getMissingResultsUrl", "insights", "onAskAiToggle", "interceptAskAiEvent", "isAskAiActive", "recentSearchesLimit", "recentSearchesWithFavoritesLimit", "indices", "typesenseCollectionName", "typesenseServerConfig", "typesenseSearchParameters", "searchParameters", "isHybridModeSupported"];
var Tf = ["footer", "searchBox"];
var Nf = function() {
  var e8 = Xt(cn().m(function e9(t2) {
    var n2, r2, u2, o2, i2, a2, s2, c2, l2, f2, p2, d2, h2, D2, v2, m2, y2, g2, F2;
    return cn().w(function(e10) {
      for (; ; ) switch (e10.p = e10.n) {
        case 0:
          return n2 = t2.query, r2 = t2.state, u2 = t2.setContext, o2 = t2.setStatus, i2 = t2.searchClient, a2 = t2.indexes, s2 = t2.snippetLength, c2 = t2.insights, l2 = t2.appId, f2 = t2.apiKey, p2 = t2.maxResultsPerGroup, d2 = t2.transformItems, h2 = void 0 === d2 ? Cn : d2, D2 = t2.saveRecentSearch, v2 = t2.onClose, m2 = c2, e10.p = 1, e10.n = 2, i2.search({ requests: a2.map(function(e11) {
            var t3, r3, u3, o3, i3, a3, c3, l3 = "string" == typeof e11 ? e11 : e11.name, f3 = "string" == typeof e11 ? {} : e11.searchParameters;
            return an({ query: n2, indexName: l3, attributesToRetrieve: null !== (t3 = null == f3 ? void 0 : f3.attributesToRetrieve) && void 0 !== t3 ? t3 : ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: null !== (r3 = null == f3 ? void 0 : f3.attributesToSnippet) && void 0 !== r3 ? r3 : ["hierarchy.lvl1:".concat(s2.current), "hierarchy.lvl2:".concat(s2.current), "hierarchy.lvl3:".concat(s2.current), "hierarchy.lvl4:".concat(s2.current), "hierarchy.lvl5:".concat(s2.current), "hierarchy.lvl6:".concat(s2.current), "content:".concat(s2.current)], snippetEllipsisText: null !== (u3 = null == f3 ? void 0 : f3.snippetEllipsisText) && void 0 !== u3 ? u3 : "…", highlightPreTag: null !== (o3 = null == f3 ? void 0 : f3.highlightPreTag) && void 0 !== o3 ? o3 : "<mark>", highlightPostTag: null !== (i3 = null == f3 ? void 0 : f3.highlightPostTag) && void 0 !== i3 ? i3 : "</mark>", hitsPerPage: null !== (a3 = null == f3 ? void 0 : f3.hitsPerPage) && void 0 !== a3 ? a3 : 20, clickAnalytics: null !== (c3 = null == f3 ? void 0 : f3.clickAnalytics) && void 0 !== c3 ? c3 : m2 }, null != f3 ? f3 : {});
          }) });
        case 2:
          return y2 = e10.v, g2 = y2.results, e10.a(2, g2.flatMap(function(e11) {
            var t3, n3 = e11, o3 = n3.hits, i3 = n3.nbHits, a3 = _n(h2(o3), function(e12) {
              return On(e12);
            }, p2);
            if (r2.context.searchSuggestions.length < Object.keys(a3).length && u2({ searchSuggestions: an(an({}, null !== (t3 = r2.context.searchSuggestions) && void 0 !== t3 ? t3 : []), Object.keys(a3)) }), i3) {
              var s3 = r2.context.nbHits;
              u2({ nbHits: (null != s3 ? s3 : 0) + i3 });
            }
            var c3 = {};
            return m2 && (c3 = { __autocomplete_indexName: n3.index, __autocomplete_queryID: n3.queryID, __autocomplete_algoliaCredentials: { appId: l2, apiKey: f2 } }), Object.values(a3).map(function(e12, t4) {
              return { sourceId: "hits_".concat(n3.index, "_").concat(t4), onSelect: function(e13) {
                var t5 = e13.item, n4 = e13.event;
                D2(t5), bn(n4) || v2();
              }, getItemUrl: function(e13) {
                return e13.item.url;
              }, getItems: function() {
                return Object.values(_n(e12, function(e13) {
                  return e13.hierarchy.lvl1;
                }, p2)).map(function(e13) {
                  return e13.map(function(t5) {
                    var n4 = null, r3 = e13.find(function(e14) {
                      return "lvl1" === e14.type && e14.hierarchy.lvl1 === t5.hierarchy.lvl1;
                    });
                    return "lvl1" !== t5.type && r3 && (n4 = r3), an(an({}, t5), {}, { __docsearch_parent: n4 }, c3);
                  });
                }).flat();
              } };
            });
          }));
        case 3:
          throw e10.p = 3, "RetryError" === (F2 = e10.v).name && o2("error"), F2;
        case 4:
          return e10.a(2);
      }
    }, e9, null, [[1, 3]]);
  }));
  return function(t2) {
    return e8.apply(this, arguments);
  };
}();
var Mf = function() {
  var e8 = Xt(cn().m(function e9(t2) {
    var n2, r2, u2, o2, i2, a2, s2, c2, l2, f2, p2, d2, h2, D2, v2, m2, y2, g2, F2, E2, _2, C2, b2;
    return cn().w(function(e10) {
      for (; ; ) switch (e10.p = e10.n) {
        case 0:
          return n2 = t2.query, r2 = t2.state, u2 = t2.setContext, o2 = t2.setStatus, i2 = t2.searchClient, a2 = t2.typesenseCollectionName, s2 = t2.typesenseSearchParameters, c2 = t2.maxResultsPerGroup, l2 = t2.transformItems, f2 = void 0 === l2 ? Cn : l2, p2 = t2.saveRecentSearch, d2 = t2.onClose, e10.p = 1, h2 = an({ collection: a2, q: n2, query_by: "hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5,hierarchy.lvl6,content", include_fields: "hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5,hierarchy.lvl6,content,anchor,url,type,id", highlight_full_fields: "hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5,hierarchy.lvl6,content", group_by: "url", group_limit: 3, sort_by: "item_priority:desc", snippet_threshold: 8, highlight_affix_num_tokens: 4 }, null != s2 ? s2 : {}), e10.n = 2, i2.search({ requests: [h2] });
        case 2:
          return D2 = e10.v, v2 = D2.results, m2 = v2[0], y2 = m2.hits, g2 = m2.nbHits, F2 = f2(y2), E2 = _n(F2, function(e11) {
            return On(e11);
          }, c2), r2.context.searchSuggestions.length < Object.keys(E2).length && u2({ searchSuggestions: an(an({}, null !== (_2 = r2.context.searchSuggestions) && void 0 !== _2 ? _2 : []), Object.keys(E2)) }), g2 && (C2 = r2.context.nbHits, u2({ nbHits: (null != C2 ? C2 : 0) + g2 })), e10.a(2, Object.values(E2).map(function(e11, t3) {
            return { sourceId: "hits_".concat(a2, "_").concat(t3), onSelect: function(e12) {
              var t4 = e12.item, n3 = e12.event;
              p2(t4), bn(n3) || d2();
            }, getItemUrl: function(e12) {
              return e12.item.url;
            }, getItems: function() {
              return Object.values(_n(e11, function(e12) {
                return e12.hierarchy.lvl1;
              }, c2)).map(function(e12) {
                return e12.map(function(t4) {
                  var n3 = null, r3 = e12.find(function(e13) {
                    return "lvl1" === e13.type && e13.hierarchy.lvl1 === t4.hierarchy.lvl1;
                  });
                  return "lvl1" !== t4.type && r3 && (n3 = r3), an(an({}, t4), {}, { __docsearch_parent: n3 });
                });
              }).flat();
            } };
          }));
        case 3:
          throw e10.p = 3, "RetryError" === (b2 = e10.v).name && o2("error"), b2;
        case 4:
          return e10.a(2);
      }
    }, e9, null, [[1, 3]]);
  }));
  return function(t2) {
    return e8.apply(this, arguments);
  };
}();
function Lf(e8) {
  var t2, n2, r2, u2 = e8.askAi, o2 = e8.maxResultsPerGroup, i2 = e8.theme, a2 = e8.onClose, s2 = void 0 === a2 ? wn : a2, c2 = e8.transformItems, l2 = void 0 === c2 ? Cn : c2, f2 = e8.hitComponent, p2 = void 0 === f2 ? Qu : f2, d2 = e8.resultsFooterComponent, h2 = void 0 === d2 ? function() {
    return null;
  } : d2, D2 = e8.navigator, v2 = e8.initialScrollY, m2 = void 0 === v2 ? 0 : v2, y2 = e8.transformSearchClient, g2 = void 0 === y2 ? Cn : y2, F2 = e8.disableUserPersonalization, E2 = void 0 !== F2 && F2, _2 = e8.initialQuery, C2 = void 0 === _2 ? "" : _2, b2 = e8.translations, A2 = void 0 === b2 ? {} : b2, w2 = e8.getMissingResultsUrl, S2 = e8.insights, k2 = void 0 !== S2 && S2, O2 = e8.onAskAiToggle, P2 = e8.interceptAskAiEvent, B2 = e8.isAskAiActive, x2 = void 0 !== B2 && B2, R2 = e8.recentSearchesLimit, j2 = void 0 === R2 ? 7 : R2, I2 = e8.recentSearchesWithFavoritesLimit, T2 = void 0 === I2 ? 4 : I2, N2 = e8.indices, M2 = void 0 === N2 ? [] : N2, L2 = e8.typesenseCollectionName, U2 = e8.typesenseServerConfig, q2 = e8.typesenseSearchParameters, H2 = e8.searchParameters, z2 = e8.isHybridModeSupported, $2 = void 0 !== z2 && z2, K2 = sn(e8, If), W2 = A2.footer, V2 = A2.searchBox, Q2 = sn(A2, Tf), J2 = pn(Mt.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), Z2 = J2[0], G2 = J2[1], X2 = Boolean(u2), Y2 = (null == A2 || null === (t2 = A2.searchBox) || void 0 === t2 ? void 0 : t2.placeholderText) || K2.placeholder || "Search docs";
  X2 && (Y2 = (null == A2 || null === (n2 = A2.searchBox) || void 0 === n2 ? void 0 : n2.placeholderText) || "Search docs or ask AI a question"), x2 && (Y2 = (null == A2 || null === (r2 = A2.searchBox) || void 0 === r2 ? void 0 : r2.placeholderTextAskAi) || "Ask another question...");
  var ee2 = Mt.useRef(null), te2 = Mt.useRef(null), ne2 = Mt.useRef(null), re2 = Mt.useRef(null), ue2 = Mt.useRef(null), oe2 = Mt.useRef(15), ie2 = Mt.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 512) : "").current, ae2 = Mt.useRef(C2 || ie2).current, se2 = function(e9, t3) {
    var n3 = Mt.useMemo(function() {
      var n4, r3 = new Cf.SearchClient(t3), u3 = { search: (n4 = Xt(cn().m(function e10(t4) {
        var n5, u4, o3, i3, a3, s3;
        return cn().w(function(e11) {
          for (; ; ) switch (e11.n) {
            case 0:
              if (n5 = t4.requests, u4 = pn(n5, 1), o3 = u4[0]) {
                e11.n = 1;
                break;
              }
              return e11.a(2, { results: [] });
            case 1:
              return e11.n = 2, r3.multiSearch.perform({ searches: [o3] });
            case 2:
              return i3 = e11.v, a3 = new jf(i3.results[0], { params: an(an({}, o3), {}, { highlightPreTag: "<mark>", highlightPostTag: "</mark>" }) }, { geoLocationField: "" }), s3 = a3.adapt(), e11.a(2, { results: [an(an({}, s3), {}, { index: o3.collection, params: "" })] });
          }
        }, e10);
      })), function(e10) {
        return n4.apply(this, arguments);
      }) };
      return e9(u3);
    }, [e9, t3]);
    return n3;
  }(g2, U2), ce2 = null != u2 ? u2 : null, le2 = pn(Mt.useState("initial"), 2), fe2 = le2[0], pe2 = le2[1], de2 = Mt.useMemo(function() {
    var e9;
    return (null !== (e9 = null == ce2 ? void 0 : ce2.suggestedQuestions) && void 0 !== e9 ? e9 : []).map(function(e10, t3) {
      return { objectID: "suggested-question-".concat(t3), question: e10 };
    });
  }, [null == ce2 ? void 0 : ce2.suggestedQuestions]), he2 = [];
  if (L2 && "" !== L2 && he2.push({ name: L2, searchParameters: H2 }), M2.length > 0 && M2.forEach(function(e9) {
    he2.push("string" == typeof e9 ? { name: e9 } : e9);
  }), he2.length < 1) throw new Error("Must supply either `indexName` or `indices` for DocSearch to work");
  var De2 = he2[0].name, ve2 = Mt.useRef(Fa({ key: "__DOCSEARCH_ASKAI_CONVERSATIONS__".concat(De2), limit: 10 })).current, me2 = Mt.useRef(ga({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(De2), limit: 10 })).current, ye2 = Mt.useRef(ga({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(De2), limit: 0 === me2.getAll().length ? j2 : T2 })).current, ge2 = pn(Mt.useState(false), 2), Fe2 = ge2[0], Ee2 = ge2[1], _e2 = function(e9) {
    var t3 = e9.typesenseServerConfig, n3 = e9.storageKey, r3 = e9.collection, u3 = e9.queryBy, o3 = e9.excludeFields, i3 = void 0 === o3 ? "embedding" : o3, a3 = e9.conversationModelId, s3 = e9.searchParameters, c3 = pn(je([]), 2), l3 = c3[0], f3 = c3[1], p3 = pn(je("ready"), 2), d3 = p3[0], h3 = p3[1], D3 = pn(je(), 2), v3 = D3[0], m3 = D3[1], y3 = Me(null), g3 = Me([]), F3 = Me(void 0), E3 = Me(Fa({ key: n3, limit: 10 })).current;
    Te(function() {
      g3.current = l3, F3.current = Ca(l3);
    }, [l3]);
    var _3 = qe(function(e10) {
      g3.current = e10, F3.current = Ca(e10), f3(e10);
    }, []), C3 = qe(function() {
      var e10 = Xt(cn().m(function e11(n4, o4) {
        var c4, l4, p4, d4, D4, v4, E4, C4, b4, A4, w3, S3, k3, O3, P3, B3, x3, R3, j3, I3, T3, N3, M3, L3, U3, q3, H3, z3, $3, K3, W3, V3, Q3, J3, Z3, G3, X3, Y3, ee3, te3, ne3;
        return cn().w(function(e12) {
          for (; ; ) switch (e12.p = e12.n) {
            case 0:
              return l4 = Aa(n4), p4 = ba(F3.current), d4 = [].concat(dn(g3.current), [l4, p4]), null === (c4 = y3.current) || void 0 === c4 || c4.abort(), D4 = new AbortController(), y3.current = D4, m3(void 0), h3("submitted"), _3(d4), e12.p = 1, v4 = _a(t3), (E4 = new URL("/multi_search", v4)).searchParams.set("q", n4), E4.searchParams.set("conversation", "true"), E4.searchParams.set("conversation_stream", "true"), E4.searchParams.set("conversation_model_id", a3), F3.current && E4.searchParams.set("conversation_id", F3.current), e12.n = 2, fetch(E4.toString(), { method: "POST", headers: { "Content-Type": "application/json", "X-TYPESENSE-API-KEY": t3.apiKey }, body: JSON.stringify({ searches: [Oa({ collection: r3, queryBy: u3, excludeFields: i3, searchParameters: s3 })] }), signal: D4.signal });
            case 2:
              if ((C4 = e12.v).ok) {
                e12.n = 4;
                break;
              }
              return e12.n = 3, C4.text();
            case 3:
              throw b4 = e12.v, new Error(b4 || "Typesense conversational search failed.");
            case 4:
              if (C4.body) {
                e12.n = 5;
                break;
              }
              throw new Error("Typesense conversational search did not return a stream.");
            case 5:
              h3("streaming"), A4 = C4.body.getReader(), w3 = new TextDecoder(), S3 = "", k3 = "", O3 = F3.current;
            case 6:
              return e12.n = 7, A4.read();
            case 7:
              if (P3 = e12.v, B3 = P3.done, x3 = P3.value, !B3) {
                e12.n = 8;
                break;
              }
              return e12.a(3, 25);
            case 8:
              R3 = w3.decode(x3, { stream: true }), j3 = ka(S3 += R3), I3 = j3.events, T3 = j3.remainder, S3 = T3, N3 = nn(I3), e12.p = 9, N3.s();
            case 10:
              if ((M3 = N3.n()).done) {
                e12.n = 21;
                break;
              }
              L3 = M3.value, U3 = Sa(L3), q3 = nn(U3), e12.p = 11, q3.s();
            case 12:
              if ((H3 = q3.n()).done) {
                e12.n = 17;
                break;
              }
              if ("[DONE]" !== (J3 = H3.value)) {
                e12.n = 13;
                break;
              }
              return e12.a(3, 16);
            case 13:
              if (Z3 = JSON.parse(J3), G3 = null === (z3 = Z3.conversation) || void 0 === z3 ? void 0 : z3.answer, X3 = null !== ($3 = null !== (K3 = Z3.message) && void 0 !== K3 ? K3 : null === (W3 = Z3.conversation) || void 0 === W3 ? void 0 : W3.message) && void 0 !== $3 ? $3 : "", (Y3 = null !== (V3 = Z3.conversation_id) && void 0 !== V3 ? V3 : null === (Q3 = Z3.conversation) || void 0 === Q3 ? void 0 : Q3.conversation_id) && (O3 = Y3, F3.current = Y3), !G3) {
                e12.n = 14;
                break;
              }
              return 0 === k3.length && (k3 = G3, f3(function(e13) {
                return wa(e13, p4.id, function(e14) {
                  return an(an({}, e14), {}, { metadata: an(an({}, e14.metadata), O3 ? { conversationId: O3 } : {}), parts: [{ type: "text", text: k3, state: "streaming" }] });
                });
              })), e12.a(3, 16);
            case 14:
              if (0 !== X3.length) {
                e12.n = 15;
                break;
              }
              return e12.a(3, 16);
            case 15:
              k3 += X3, f3(function(e13) {
                return wa(e13, p4.id, function(e14) {
                  return an(an({}, e14), {}, { metadata: an(an({}, e14.metadata), O3 ? { conversationId: O3 } : {}), parts: [{ type: "text", text: k3, state: "streaming" }] });
                });
              });
            case 16:
              e12.n = 12;
              break;
            case 17:
              e12.n = 19;
              break;
            case 18:
              e12.p = 18, ee3 = e12.v, q3.e(ee3);
            case 19:
              return e12.p = 19, q3.f(), e12.f(19);
            case 20:
              e12.n = 10;
              break;
            case 21:
              e12.n = 23;
              break;
            case 22:
              e12.p = 22, te3 = e12.v, N3.e(te3);
            case 23:
              return e12.p = 23, N3.f(), e12.f(23);
            case 24:
              e12.n = 6;
              break;
            case 25:
              f3(function(e13) {
                return wa(e13, p4.id, function(e14) {
                  return an(an({}, e14), {}, { metadata: an(an({}, e14.metadata), O3 ? { conversationId: O3 } : {}), parts: [{ type: "text", text: k3, state: "done" }] });
                });
              }), h3("ready"), e12.n = 28;
              break;
            case 26:
              if (e12.p = 26, ne3 = e12.v, !D4.signal.aborted) {
                e12.n = 27;
                break;
              }
              return h3("ready"), e12.a(2);
            case 27:
              m3(ne3), h3("error");
            case 28:
              return e12.a(2);
          }
        }, e11, null, [[11, 18, 19, 20], [9, 22, 23, 24], [1, 26]]);
      }));
      return function(t4, n4) {
        return e10.apply(this, arguments);
      };
    }(), [r3, a3, i3, u3, s3, _3, t3]), b3 = qe(Xt(cn().m(function e10() {
      var t4;
      return cn().w(function(e11) {
        for (; ; ) switch (e11.n) {
          case 0:
            null === (t4 = y3.current) || void 0 === t4 || t4.abort(), y3.current = null, h3("ready");
          case 1:
            return e11.a(2);
        }
      }, e10);
    })), []), A3 = Ue(function() {
      for (var e10 = [], t4 = 0; t4 < l3.length; t4++) if ("user" === l3[t4].role) {
        var n4, r4 = l3[t4], u4 = "assistant" === (null === (n4 = l3[t4 + 1]) || void 0 === n4 ? void 0 : n4.role) ? l3[t4 + 1] : null;
        e10.push({ id: r4.id, userMessage: r4, assistantMessage: u4 }), u4 && t4++;
      }
      return e10;
    }, [l3]);
    return { messages: l3, status: d3, sendMessage: C3, setMessages: _3, stopAskAiStreaming: b3, askAiError: v3, isStreaming: "streaming" === d3 || "submitted" === d3, exchanges: A3, conversations: E3 };
  }({ typesenseServerConfig: U2, storageKey: "__DOCSEARCH_ASKAI_CONVERSATIONS__".concat(De2), collection: (null == ce2 ? void 0 : ce2.collection) || De2, conversationModelId: (null == ce2 ? void 0 : ce2.conversationModelId) || "", queryBy: (null == ce2 ? void 0 : ce2.queryBy) || "embedding", excludeFields: (null == ce2 ? void 0 : ce2.excludeFields) || "embedding", searchParameters: null == ce2 ? void 0 : ce2.searchParameters }), Ce2 = _e2.messages, be2 = _e2.status, Ae2 = _e2.setMessages, we2 = _e2.sendMessage, Se2 = _e2.stopAskAiStreaming, ke2 = _e2.askAiError, Oe2 = Mt.useRef(be2);
  Mt.useEffect(function() {
    if (!E2) {
      if ("streaming" === Oe2.current && "ready" === be2) {
        Fe2 && Ce2.at(-1) && (Ce2.at(-1).metadata = an(an({}, Ce2.at(-1).metadata), {}, { stopped: true }));
        var e9, t3 = nn(Ce2[0].parts);
        try {
          for (t3.s(); !(e9 = t3.n()).done; ) {
            var n3, r3 = e9.value;
            "text" === r3.type && ve2.add(xi(r3.text, Ce2, null === (n3 = Ce2.at(-1)) || void 0 === n3 || null === (n3 = n3.metadata) || void 0 === n3 ? void 0 : n3.conversationId));
          }
        } catch (e10) {
          t3.e(e10);
        } finally {
          t3.f();
        }
      }
      Oe2.current = be2;
    }
  }, [be2, Ce2, ve2, E2, Fe2]);
  var Pe2 = Mt.useMemo(function() {
    return "error" === be2 && ji(ke2);
  }, [be2, ke2]), Be2 = Mt.useCallback(function(e9) {
    var t3 = e9.hierarchy, n3 = ["lvl6", "lvl5", "lvl4", "lvl3", "lvl2", "lvl1", "lvl0"].find(function(e10) {
      return t3[e10];
    });
    return an(an({}, e9), {}, { type: n3 || "lvl0", content: null });
  }, []), xe2 = Mt.useCallback(function(e9) {
    if (!E2) {
      var t3 = "content" === e9.type ? e9.__docsearch_parent || Be2(e9) : e9;
      t3 && -1 === me2.getAll().findIndex(function(e10) {
        return e10.objectID === t3.objectID;
      }) && ye2.add(t3);
    }
  }, [me2, ye2, E2, Be2]), Re2 = Mt.useCallback(function(e9) {
    if (Z2.context.algoliaInsightsPlugin && e9.__autocomplete_id) {
      var t3 = e9, n3 = { eventName: "Item Selected", index: t3.__autocomplete_indexName, items: [t3], positions: [e9.__autocomplete_id], queryID: t3.__autocomplete_queryID };
      Z2.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n3);
    }
  }, [Z2.context.algoliaInsightsPlugin]), Ie2 = Mt.useRef(void 0), Ne2 = Mt.useCallback(function(e9, t3) {
    var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    if (e9) {
      var r3 = { query: t3, suggestedQuestionId: null == n3 ? void 0 : n3.objectID };
      if (null != P2 && P2(r3)) return void (Ie2.current && Ie2.current.setQuery(""));
    }
    if (e9 && "new-conversation" === fe2 && pe2("initial"), O2(e9, { query: t3, suggestedQuestionId: null == n3 ? void 0 : n3.objectID }), !$2) {
      if (Ee2(false), we2(t3, { suggestedQuestionId: null == n3 ? void 0 : n3.objectID }), re2.current) {
        var u3 = re2.current;
        "function" == typeof u3.scrollTo ? u3.scrollTo({ top: 0, behavior: "smooth" }) : u3.scrollTop = 0;
      }
      Ie2.current && Ie2.current.setQuery("");
    }
  }, [O2, P2, we2, fe2, pe2, $2]), Le2 = Mt.useCallback(function() {
    var e9 = Xt(cn().m(function e10(t3, n3) {
      return cn().w(function(e11) {
        for (; ; ) if (0 === e11.n) return e11.a(2);
      }, e10);
    }));
    return function(t3, n3) {
      return e9.apply(this, arguments);
    };
  }(), []);
  Ie2.current || (Ie2.current = $u({ id: "docsearch", defaultActiveItemId: 0, openOnFocus: true, initialState: { query: ae2, context: { searchSuggestions: [] } }, insights: Boolean(k2), navigator: D2, onStateChange: function(e9) {
    G2(e9.state);
  }, getSources: function(e9) {
    var t3 = e9.query, n3 = e9.state, r3 = e9.setContext, u3 = e9.setStatus;
    if (!t3) {
      var i3 = function(e10) {
        var t4 = e10.recentSearches, n4 = e10.favoriteSearches, r4 = e10.saveRecentSearch, u4 = e10.onClose;
        return e10.disableUserPersonalization ? [] : [{ sourceId: "recentSearches", onSelect: function(e11) {
          var t5 = e11.item, n5 = e11.event;
          r4(t5), bn(n5) || u4();
        }, getItemUrl: function(e11) {
          return e11.item.url;
        }, getItems: function() {
          return t4.getAll();
        } }, { sourceId: "favoriteSearches", onSelect: function(e11) {
          var t5 = e11.item, n5 = e11.event;
          r4(t5), bn(n5) || u4();
        }, getItemUrl: function(e11) {
          return e11.item.url;
        }, getItems: function() {
          return n4.getAll();
        } }];
      }({ recentSearches: ye2, favoriteSearches: me2, saveRecentSearch: xe2, onClose: s2, disableUserPersonalization: E2, canHandleAskAi: X2 }), a3 = X2 ? [{ sourceId: "recentConversations", getItems: function() {
        return E2 ? [] : ve2.getAll();
      }, onSelect: function(e10) {
        var t4 = e10.item;
        t4.messages && (Ae2(t4.messages), O2(true));
      } }] : [];
      return [].concat(dn(i3), a3);
    }
    var c3 = { context: n3.context }, f3 = L2 && "" !== L2 ? Mf({ query: t3, state: c3, setContext: r3, setStatus: u3, searchClient: se2, typesenseCollectionName: L2, typesenseSearchParameters: q2, maxResultsPerGroup: o2, transformItems: l2, saveRecentSearch: xe2, onClose: s2 }) : Nf({ query: t3, state: c3, setContext: r3, setStatus: u3, searchClient: se2, indexes: he2, snippetLength: oe2, insights: Boolean(k2), maxResultsPerGroup: o2, transformItems: l2, saveRecentSearch: xe2, onClose: s2 }), p3 = X2 ? [{ sourceId: "askAI", getItems: function() {
      return [{ type: "askAI", query: t3, url_without_anchor: "", objectID: "ask-ai-button", content: null, url: "", anchor: null, hierarchy: { lvl0: "Ask AI", lvl1: t3, lvl2: null, lvl3: null, lvl4: null, lvl5: null, lvl6: null }, _highlightResult: {}, _snippetResult: {}, __docsearch_parent: null }];
    }, onSelect: function(e10) {
      var t4 = e10.item;
      "askAI" === t4.type && t4.query && Ne2(true, t4.query);
    } }] : [];
    return f3.then(function(e10) {
      return [].concat(p3, dn(e10));
    });
  } }));
  var He2, ze2, $e2 = Ie2.current, Ke2 = $e2.getEnvironmentProps, We2 = $e2.getRootProps, Ve2 = $e2.refresh;
  !function(e9) {
    var t3 = e9.getEnvironmentProps, n3 = e9.panelElement, r3 = e9.formElement, u3 = e9.inputElement;
    Mt.useEffect(function() {
      if (n3 && r3 && u3) {
        var e10 = t3({ panelElement: n3, formElement: r3, inputElement: u3 }), o3 = e10.onTouchStart, i3 = e10.onTouchMove;
        return window.addEventListener("touchstart", o3), window.addEventListener("touchmove", i3), function() {
          window.removeEventListener("touchstart", o3), window.removeEventListener("touchmove", i3);
        };
      }
    }, [t3, n3, r3, u3]);
  }({ getEnvironmentProps: Ke2, panelElement: re2.current, formElement: ne2.current, inputElement: ue2.current }), He2 = { container: ee2.current }, ze2 = He2.container, Mt.useEffect(function() {
    if (ze2) {
      var e9 = ze2.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), t3 = e9[0], n3 = e9[e9.length - 1];
      return ze2.addEventListener("keydown", r3), function() {
        ze2.removeEventListener("keydown", r3);
      };
    }
    function r3(e10) {
      "Tab" === e10.key && (e10.shiftKey ? document.activeElement === t3 && (e10.preventDefault(), n3.focus()) : document.activeElement === n3 && (e10.preventDefault(), t3.focus()));
    }
  }, [ze2]), yn({ theme: i2 }), Mt.useEffect(function() {
    return document.body.classList.add("DocSearch--active"), function() {
      var e9, t3;
      document.body.classList.remove("DocSearch--active"), null === (e9 = (t3 = window).scrollTo) || void 0 === e9 || e9.call(t3, 0, m2);
    };
  }, []), Mt.useEffect(function() {
    "undefined" != typeof window && window.localStorage && function() {
      if ("undefined" == typeof window || !window.localStorage) return 0;
      var e9 = 0;
      for (var t3 in window.localStorage) window.localStorage.hasOwnProperty(t3) && (e9 += window.localStorage[t3].length + t3.length);
      return e9;
    }() > 4194304 && va();
  }, []), Mt.useLayoutEffect(function() {
    var e9 = window.innerWidth - document.body.clientWidth;
    return document.body.style.marginInlineEnd = "".concat(e9, "px"), function() {
      document.body.style.marginInlineEnd = "0px";
    };
  }, []), Mt.useEffect(function() {
    window.matchMedia("(max-width: 768px)").matches && (oe2.current = 5);
  }, []), Mt.useEffect(function() {
    var e9;
    re2.current && !x2 && ("function" == typeof (e9 = re2.current).scrollTo ? e9.scrollTo({ top: 0, behavior: "smooth" }) : e9.scrollTop = 0);
  }, [Z2.query, x2]), Mt.useEffect(function() {
    ae2.length > 0 && (Ve2(), ue2.current && ue2.current.focus());
  }, [ae2, Ve2]), Mt.useEffect(function() {
    function e9() {
      if (te2.current) {
        var e10 = 0.01 * window.innerHeight;
        te2.current.style.setProperty("--docsearch-vh", "".concat(e10, "px"));
      }
    }
    return e9(), window.addEventListener("resize", e9), function() {
      window.removeEventListener("resize", e9);
    };
  }, []), Mt.useEffect(function() {
    x2 || ($e2.refresh(), Ae2([]));
  }, [x2, $e2, Ae2]), Mt.useEffect(function() {
    pe2("initial");
  }, [x2, pe2]);
  var Qe2 = function() {
    var e9 = Xt(cn().m(function e10() {
      return cn().w(function(e11) {
        for (; ; ) switch (e11.n) {
          case 0:
            return Ee2(true), e11.n = 1, Se2();
          case 1:
            return e11.a(2);
        }
      }, e10);
    }));
    return function() {
      return e9.apply(this, arguments);
    };
  }(), Je2 = function() {
    Ae2([]), pe2("new-conversation");
  }, Ze2 = true, Ge2 = Z2.collections.some(function(e9) {
    return e9.items.length > 0;
  });
  return "idle" !== Z2.status || false !== Ge2 || 0 !== Z2.query.length || x2 || (Ze2 = false), Mt.createElement("div", un({ ref: ee2 }, We2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", "stalled" === Z2.status && "DocSearch-Container--Stalled", "error" === Z2.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e9) {
    e9.target === e9.currentTarget && s2();
  } }), Mt.createElement("div", { className: "DocSearch-Modal", ref: te2 }, Mt.createElement("header", { className: "DocSearch-SearchBar", ref: ne2 }, Mt.createElement(Da, un({}, $e2, { state: Z2, placeholder: Y2 || "Search docs", autoFocus: 0 === ae2.length, inputRef: ue2, isFromSelection: Boolean(ae2) && ae2 === ie2, translations: V2, isAskAiActive: x2, askAiStatus: be2, askAiError: ke2, askAiState: fe2, setAskAiState: pe2, isThreadDepthError: Pe2 && "new-conversation" !== fe2, onClose: s2, onAskAiToggle: O2, onAskAgain: function(e9) {
    Ne2(true, e9);
  }, onStopAskAiStreaming: Qe2, onNewConversation: Je2, onViewConversationHistory: function() {
    pe2("conversation-history");
  } }))), Ze2 && Mt.createElement("div", { className: "DocSearch-Dropdown", ref: re2 }, Mt.createElement(sa, un({}, $e2, { indexName: De2, state: Z2, hitComponent: p2, resultsFooterComponent: h2, disableUserPersonalization: E2, recentSearches: ye2, favoriteSearches: me2, conversations: ve2, inputRef: ue2, translations: Q2, getMissingResultsUrl: w2, isAskAiActive: x2, canHandleAskAi: X2, messages: Ce2, askAiError: ke2, status: be2, hasCollections: Ge2, askAiState: fe2, selectAskAiQuestion: Ne2, suggestedQuestions: de2, selectSuggestedQuestion: function(e9) {
    Ne2(true, e9.question, e9);
  }, onAskAiToggle: O2, onNewConversation: Je2, onItemClick: function(e9, t3) {
    if ("askAI" === e9.type && e9.query) {
      if ("stored" === e9.anchor && "messages" in e9) {
        Ae2(e9.messages);
        var n3 = { query: e9.query, messageId: e9.messages[0].id };
        if (null != P2 && P2(n3)) return Ie2.current && Ie2.current.setQuery(""), void t3.preventDefault();
        O2(true, n3);
      } else Ne2(true, e9.query);
      return pe2("initial"), void t3.preventDefault();
    }
    Re2(e9), xe2(e9), bn(t3) || s2();
  }, onFeedback: Le2 }))), Mt.createElement("footer", { className: "DocSearch-Footer" }, Mt.createElement(Vu, { translations: W2, isAskAiActive: x2 }))));
}
var Uf = Mt.forwardRef(function(e8, t2) {
  return Mt.createElement(Jt, un({}, e8, { ref: t2 }), Mt.createElement(qf, e8));
});
function qf(e8) {
  var t2, n2, r2, u2 = function() {
    var e9 = Mt.useContext(Qt);
    if (void 0 === e9) throw new Error("`useDocSearch` must be used within the `DocSearch` provider");
    return e9;
  }(), o2 = u2.searchButtonRef, i2 = u2.keyboardShortcuts, a2 = u2.isModalActive, s2 = u2.isAskAiActive, c2 = u2.initialQuery, l2 = u2.onAskAiToggle, f2 = u2.openModal, p2 = u2.closeModal;
  return Mt.createElement(Mt.Fragment, null, Mt.createElement(Bn, { keyboardShortcuts: i2, ref: o2, translations: null === (t2 = e8.translations) || void 0 === t2 ? void 0 : t2.button, onClick: f2 }), a2 && gt(Mt.createElement(Lf, un({}, e8, { initialScrollY: window.scrollY, initialQuery: c2, translations: null == e8 || null === (n2 = e8.translations) || void 0 === n2 ? void 0 : n2.modal, isAskAiActive: s2, onAskAiToggle: l2, onClose: p2 })), null !== (r2 = e8.portalContainer) && void 0 !== r2 ? r2 : document.body));
}
var Hf = function(e8, t2, n2, r2) {
  var u2;
  t2[0] = 0;
  for (var o2 = 1; o2 < t2.length; o2++) {
    var i2 = t2[o2++], a2 = t2[o2] ? (t2[0] |= i2 ? 1 : 2, n2[t2[o2++]]) : t2[++o2];
    3 === i2 ? r2[0] = a2 : 4 === i2 ? r2[1] = Object.assign(r2[1] || {}, a2) : 5 === i2 ? (r2[1] = r2[1] || {})[t2[++o2]] = a2 : 6 === i2 ? r2[1][t2[++o2]] += a2 + "" : i2 ? (u2 = e8.apply(a2, Hf(e8, a2, n2, ["", null])), r2.push(u2), a2[0] ? t2[0] |= 2 : (t2[o2 - 2] = 0, t2[o2] = u2)) : r2.push(a2);
  }
  return r2;
};
var zf = /* @__PURE__ */ new Map();
var $f = ["container", "environment", "transformSearchClient", "hitComponent", "resultsFooterComponent"];
var Kf = (function(e8) {
  var t2 = zf.get(this);
  return t2 || (t2 = /* @__PURE__ */ new Map(), zf.set(this, t2)), (t2 = Hf(this, t2.get(e8) || (t2.set(e8, t2 = function(e9) {
    for (var t3, n2, r2 = 1, u2 = "", o2 = "", i2 = [0], a2 = function(e10) {
      1 === r2 && (e10 || (u2 = u2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? i2.push(0, e10, u2) : 3 === r2 && (e10 || u2) ? (i2.push(3, e10, u2), r2 = 2) : 2 === r2 && "..." === u2 && e10 ? i2.push(4, e10, 0) : 2 === r2 && u2 && !e10 ? i2.push(5, 0, true, u2) : r2 >= 5 && ((u2 || !e10 && 5 === r2) && (i2.push(r2, 0, u2, n2), r2 = 6), e10 && (i2.push(r2, e10, 0, n2), r2 = 6)), u2 = "";
    }, s2 = 0; s2 < e9.length; s2++) {
      s2 && (1 === r2 && a2(), a2(s2));
      for (var c2 = 0; c2 < e9[s2].length; c2++) t3 = e9[s2][c2], 1 === r2 ? "<" === t3 ? (a2(), i2 = [i2], r2 = 3) : u2 += t3 : 4 === r2 ? "--" === u2 && ">" === t3 ? (r2 = 1, u2 = "") : u2 = t3 + u2[0] : o2 ? t3 === o2 ? o2 = "" : u2 += t3 : '"' === t3 || "'" === t3 ? o2 = t3 : ">" === t3 ? (a2(), r2 = 1) : r2 && ("=" === t3 ? (r2 = 5, n2 = u2, u2 = "") : "/" === t3 && (r2 < 5 || ">" === e9[s2][c2 + 1]) ? (a2(), 3 === r2 && (i2 = i2[0]), r2 = i2, (i2 = i2[0]).push(2, 0, r2), r2 = 0) : " " === t3 || "	" === t3 || "\n" === t3 || "\r" === t3 ? (a2(), r2 = 2) : u2 += t3), 3 === r2 && "!--" === u2 && (r2 = 4, i2 = i2[0]);
    }
    return a2(), i2;
  }(e8)), t2), arguments, [])).length > 1 ? t2 : t2[0];
}).bind(Q);
function Wf(e8) {
  if (e8) return function(t2) {
    var n2 = e8(t2, { html: Kf });
    return Tt(n2) ? n2 : "function" == typeof n2 ? n2(t2) : "string" == typeof n2 ? Q("span", null, n2) : n2;
  };
}
function Vf(e8) {
  var t2 = e8.container, n2 = e8.environment, r2 = e8.transformSearchClient, u2 = e8.hitComponent, o2 = e8.resultsFooterComponent, i2 = function(e9, t3) {
    if (null == e9) return {};
    var n3, r3, u3 = function(e10, t4) {
      if (null == e10) return {};
      var n4 = {};
      for (var r4 in e10) if ({}.hasOwnProperty.call(e10, r4)) {
        if (-1 !== t4.indexOf(r4)) continue;
        n4[r4] = e10[r4];
      }
      return n4;
    }(e9, t3);
    if (Object.getOwnPropertySymbols) {
      var o3 = Object.getOwnPropertySymbols(e9);
      for (r3 = 0; r3 < o3.length; r3++) n3 = o3[r3], -1 === t3.indexOf(n3) && {}.propertyIsEnumerable.call(e9, n3) && (u3[n3] = e9[n3]);
    }
    return u3;
  }(e8, $f), a2 = function(e9, t3) {
    if ("string" != typeof e9) return e9;
    if (!t3) throw new Error("Cannot resolve a selector without a browser environment.");
    var n3 = t3.document.querySelector(e9);
    if (!n3) throw new Error('Container selector did not match any element: "'.concat(e9, '"'));
    return n3;
  }(t2, n2 || ("undefined" != typeof window ? window : void 0)), s2 = { current: null }, c2 = false, l2 = y(y({}, i2), {}, { ref: s2, hitComponent: Wf(u2), resultsFooterComponent: Wf(o2), transformSearchClient: function(e9) {
    return null != e9 && e9.addAlgoliaAgent && e9.addAlgoliaAgent("docsearch.js", "4.6.0"), "function" == typeof r2 ? r2(e9) : e9;
  } });
  return At(Q(Uf, l2), a2), c2 = true, { open: function() {
    var e9;
    null === (e9 = s2.current) || void 0 === e9 || e9.open();
  }, close: function() {
    var e9;
    null === (e9 = s2.current) || void 0 === e9 || e9.close();
  }, openAskAi: function(e9) {
    var t3;
    null === (t3 = s2.current) || void 0 === t3 || t3.openAskAi(e9);
  }, get isReady() {
    return c2;
  }, get isOpen() {
    var e9, t3;
    return null !== (e9 = null === (t3 = s2.current) || void 0 === t3 ? void 0 : t3.isOpen) && void 0 !== e9 && e9;
  }, destroy: function() {
    Nt(a2), c2 = false;
  } };
}
export {
  Vf as default
};
/*! Bundled license information:

typesense-docsearch.js/dist/esm/index.js:
  (*! typesense-docsearch.js 4.6.0 (UNRELEASED 5bfc9054) | MIT License | © Algolia, Inc. and contributors | https://typesense.org/docs/latest/guide/docsearch.html *)
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
  (*! Axios v1.18.1 Copyright (c) 2026 Matt Zabriskie and contributors *)
*/
//# sourceMappingURL=typesense-docsearch__js.js.map
