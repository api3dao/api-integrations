(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3409],
  {
    14930: function (e, t, r) {
      var i,
        a,
        l,
        f,
        y,
        g,
        T,
        E,
        C,
        I,
        M,
        D,
        j,
        R,
        U,
        z,
        V,
        K,
        W,
        X,
        Q,
        Z,
        ee,
        et,
        es,
        er,
        ei,
        ea,
        eo,
        eh,
        el,
        ep,
        ec,
        eu,
        ed,
        em,
        ef,
        ey,
        ex,
        eg,
        eP,
        eb,
        eT,
        eA,
        eE,
        eS,
        ew,
        ev,
        eC,
        eN,
        eI,
        ek,
        eL,
        eM,
        eO,
        eD,
        eB,
        eF,
        ej,
        eR,
        eU,
        e_,
        e$,
        ez,
        eq,
        eH,
        eV,
        eK,
        eJ,
        eW,
        eX,
        eG,
        eY,
        eQ,
        eZ,
        e1,
        e0,
        e2,
        e3,
        e4,
        e8,
        e5,
        e6;
      e.exports =
        ((a = (i = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports))((e, t) => {
          var Ct = function (e) {
            return e && e.Math == Math && e;
          };
          t.exports =
            Ct('object' == typeof globalThis && globalThis) ||
            Ct('object' == typeof window && window) ||
            Ct('object' == typeof self && self) ||
            Ct('object' == typeof r.g && r.g) ||
            (function () {
              return this;
            })() ||
            Function('return this')();
        })),
        (l = i((e, t) => {
          t.exports = function (e) {
            try {
              return !!e();
            } catch {
              return !0;
            }
          };
        })),
        (f = i((e, t) => {
          var r = l();
          t.exports = !r(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                }
              })[1]
            );
          });
        })),
        (y = i((e, t) => {
          var r = l();
          t.exports = !r(function () {
            var e = function () {}.bind();
            return 'function' != typeof e || e.hasOwnProperty('prototype');
          });
        })),
        (g = i((e, t) => {
          var r = y(),
            i = Function.prototype.call;
          t.exports = r
            ? i.bind(i)
            : function () {
                return i.apply(i, arguments);
              };
        })),
        (T = i((e) => {
          var t = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            i = r && !t.call({ 1: 2 }, 1);
          e.f = i
            ? function (e) {
                var t = r(this, e);
                return !!t && t.enumerable;
              }
            : t;
        })),
        (E = i((e, t) => {
          t.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
          };
        })),
        (C = i((e, t) => {
          var r = y(),
            i = Function.prototype,
            a = i.call,
            l = r && i.bind.bind(a, a);
          t.exports = r
            ? l
            : function (e) {
                return function () {
                  return a.apply(e, arguments);
                };
              };
        })),
        (I = i((e, t) => {
          var r = C(),
            i = r({}.toString),
            a = r(''.slice);
          t.exports = function (e) {
            return a(i(e), 8, -1);
          };
        })),
        (M = i((e, t) => {
          var r = C(),
            i = l(),
            a = I(),
            f = Object,
            y = r(''.split);
          t.exports = i(function () {
            return !f('z').propertyIsEnumerable(0);
          })
            ? function (e) {
                return 'String' == a(e) ? y(e, '') : f(e);
              }
            : f;
        })),
        (D = i((e, t) => {
          t.exports = function (e) {
            return null == e;
          };
        })),
        (j = i((e, t) => {
          var r = D(),
            i = TypeError;
          t.exports = function (e) {
            if (r(e)) throw i("Can't call method on " + e);
            return e;
          };
        })),
        (R = i((e, t) => {
          var r = M(),
            i = j();
          t.exports = function (e) {
            return r(i(e));
          };
        })),
        (U = i((e, t) => {
          var r = 'object' == typeof document && document.all;
          t.exports = { all: r, IS_HTMLDDA: typeof r > 'u' && void 0 !== r };
        })),
        (z = i((e, t) => {
          var r = U(),
            i = r.all;
          t.exports = r.IS_HTMLDDA
            ? function (e) {
                return 'function' == typeof e || e === i;
              }
            : function (e) {
                return 'function' == typeof e;
              };
        })),
        (V = i((e, t) => {
          var r = z(),
            i = U(),
            a = i.all;
          t.exports = i.IS_HTMLDDA
            ? function (e) {
                return 'object' == typeof e ? null !== e : r(e) || e === a;
              }
            : function (e) {
                return 'object' == typeof e ? null !== e : r(e);
              };
        })),
        (K = i((e, t) => {
          var r = a(),
            i = z();
          t.exports = function (e, t) {
            var a;
            return arguments.length < 2 ? (i((a = r[e])) ? a : void 0) : r[e] && r[e][t];
          };
        })),
        (W = i((e, t) => {
          var r = C();
          t.exports = r({}.isPrototypeOf);
        })),
        (X = i((e, t) => {
          var r = K();
          t.exports = r('navigator', 'userAgent') || '';
        })),
        (Q = i((e, t) => {
          var r,
            i,
            l = a(),
            f = X(),
            y = l.process,
            g = l.Deno,
            T = (y && y.versions) || (g && g.version),
            E = T && T.v8;
          E && (i = (r = E.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
            !i && f && (!(r = f.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = f.match(/Chrome\/(\d+)/)) && (i = +r[1]),
            (t.exports = i);
        })),
        (Z = i((e, t) => {
          var r = Q(),
            i = l();
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !i(function () {
              var e = Symbol();
              return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && r && r < 41);
            });
        })),
        (ee = i((e, t) => {
          var r = Z();
          t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
        })),
        (et = i((e, t) => {
          var r = K(),
            i = z(),
            a = W(),
            l = ee(),
            f = Object;
          t.exports = l
            ? function (e) {
                return 'symbol' == typeof e;
              }
            : function (e) {
                var t = r('Symbol');
                return i(t) && a(t.prototype, f(e));
              };
        })),
        (es = i((e, t) => {
          var r = String;
          t.exports = function (e) {
            try {
              return r(e);
            } catch {
              return 'Object';
            }
          };
        })),
        (er = i((e, t) => {
          var r = z(),
            i = es(),
            a = TypeError;
          t.exports = function (e) {
            if (r(e)) return e;
            throw a(i(e) + ' is not a function');
          };
        })),
        (ei = i((e, t) => {
          var r = er(),
            i = D();
          t.exports = function (e, t) {
            var a = e[t];
            return i(a) ? void 0 : r(a);
          };
        })),
        (ea = i((e, t) => {
          var r = g(),
            i = z(),
            a = V(),
            l = TypeError;
          t.exports = function (e, t) {
            var f, y;
            if (
              ('string' === t && i((f = e.toString)) && !a((y = r(f, e)))) ||
              (i((f = e.valueOf)) && !a((y = r(f, e)))) ||
              ('string' !== t && i((f = e.toString)) && !a((y = r(f, e))))
            )
              return y;
            throw l("Can't convert object to primitive value");
          };
        })),
        (eo = i((e, t) => {
          t.exports = !1;
        })),
        (eh = i((e, t) => {
          var r = a(),
            i = Object.defineProperty;
          t.exports = function (e, t) {
            try {
              i(r, e, { value: t, configurable: !0, writable: !0 });
            } catch {
              r[e] = t;
            }
            return t;
          };
        })),
        (el = i((e, t) => {
          var r = a(),
            i = eh(),
            l = '__core-js_shared__',
            f = r[l] || i(l, {});
          t.exports = f;
        })),
        (ep = i((e, t) => {
          var r = eo(),
            i = el();
          (t.exports = function (e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {});
          })('versions', []).push({
            version: '3.26.1',
            mode: r ? 'pure' : 'global',
            copyright: '\xa9 2014-2022 Denis Pushkarev (zloirock.ru)',
            license: 'https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE',
            source: 'https://github.com/zloirock/core-js'
          });
        })),
        (ec = i((e, t) => {
          var r = j(),
            i = Object;
          t.exports = function (e) {
            return i(r(e));
          };
        })),
        (eu = i((e, t) => {
          var r = C(),
            i = ec(),
            a = r({}.hasOwnProperty);
          t.exports =
            Object.hasOwn ||
            function (e, t) {
              return a(i(e), t);
            };
        })),
        (ed = i((e, t) => {
          var r = C(),
            i = 0,
            a = Math.random(),
            l = r((1).toString);
          t.exports = function (e) {
            return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + l(++i + a, 36);
          };
        })),
        (em = i((e, t) => {
          var r = a(),
            i = ep(),
            l = eu(),
            f = ed(),
            y = Z(),
            g = ee(),
            T = i('wks'),
            E = r.Symbol,
            C = E && E.for,
            I = g ? E : (E && E.withoutSetter) || f;
          t.exports = function (e) {
            if (!l(T, e) || !(y || 'string' == typeof T[e])) {
              var t = 'Symbol.' + e;
              y && l(E, e) ? (T[e] = E[e]) : g && C ? (T[e] = C(t)) : (T[e] = I(t));
            }
            return T[e];
          };
        })),
        (ef = i((e, t) => {
          var r = g(),
            i = V(),
            a = et(),
            l = ei(),
            f = ea(),
            y = em(),
            T = TypeError,
            E = y('toPrimitive');
          t.exports = function (e, t) {
            if (!i(e) || a(e)) return e;
            var y,
              g = l(e, E);
            if (g) {
              if ((void 0 === t && (t = 'default'), !i((y = r(g, e, t))) || a(y))) return y;
              throw T("Can't convert object to primitive value");
            }
            return void 0 === t && (t = 'number'), f(e, t);
          };
        })),
        (ey = i((e, t) => {
          var r = ef(),
            i = et();
          t.exports = function (e) {
            var t = r(e, 'string');
            return i(t) ? t : t + '';
          };
        })),
        (ex = i((e, t) => {
          var r = a(),
            i = V(),
            l = r.document,
            f = i(l) && i(l.createElement);
          t.exports = function (e) {
            return f ? l.createElement(e) : {};
          };
        })),
        (eg = i((e, t) => {
          var r = f(),
            i = l(),
            a = ex();
          t.exports =
            !r &&
            !i(function () {
              return (
                7 !=
                Object.defineProperty(a('div'), 'a', {
                  get: function () {
                    return 7;
                  }
                }).a
              );
            });
        })),
        (eP = i((e) => {
          var t = f(),
            r = g(),
            i = T(),
            a = E(),
            l = R(),
            y = ey(),
            C = eu(),
            I = eg(),
            M = Object.getOwnPropertyDescriptor;
          e.f = t
            ? M
            : function (e, t) {
                if (((e = l(e)), (t = y(t)), I))
                  try {
                    return M(e, t);
                  } catch {}
                if (C(e, t)) return a(!r(i.f, e, t), e[t]);
              };
        })),
        (eb = i((e, t) => {
          var r = f(),
            i = l();
          t.exports =
            r &&
            i(function () {
              return 42 != Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 }).prototype;
            });
        })),
        (eT = i((e, t) => {
          var r = V(),
            i = String,
            a = TypeError;
          t.exports = function (e) {
            if (r(e)) return e;
            throw a(i(e) + ' is not an object');
          };
        })),
        (eA = i((e) => {
          var t = f(),
            r = eg(),
            i = eb(),
            a = eT(),
            l = ey(),
            y = TypeError,
            g = Object.defineProperty,
            T = Object.getOwnPropertyDescriptor,
            E = 'enumerable',
            C = 'configurable',
            I = 'writable';
          e.f = t
            ? i
              ? function (e, t, r) {
                  if (
                    (a(e),
                    (t = l(t)),
                    a(r),
                    'function' == typeof e && 'prototype' === t && 'value' in r && I in r && !r[I])
                  ) {
                    var i = T(e, t);
                    i &&
                      i[I] &&
                      ((e[t] = r.value),
                      (r = { configurable: C in r ? r[C] : i[C], enumerable: E in r ? r[E] : i[E], writable: !1 }));
                  }
                  return g(e, t, r);
                }
              : g
            : function (e, t, i) {
                if ((a(e), (t = l(t)), a(i), r))
                  try {
                    return g(e, t, i);
                  } catch {}
                if ('get' in i || 'set' in i) throw y('Accessors not supported');
                return 'value' in i && (e[t] = i.value), e;
              };
        })),
        (eE = i((e, t) => {
          var r = f(),
            i = eA(),
            a = E();
          t.exports = r
            ? function (e, t, r) {
                return i.f(e, t, a(1, r));
              }
            : function (e, t, r) {
                return (e[t] = r), e;
              };
        })),
        (eS = i((e, t) => {
          var r = f(),
            i = eu(),
            a = Function.prototype,
            l = r && Object.getOwnPropertyDescriptor,
            y = i(a, 'name'),
            g = y && (!r || (r && l(a, 'name').configurable));
          t.exports = { EXISTS: y, PROPER: y && 'something' === function () {}.name, CONFIGURABLE: g };
        })),
        (ew = i((e, t) => {
          var r = C(),
            i = z(),
            a = el(),
            l = r(Function.toString);
          i(a.inspectSource) ||
            (a.inspectSource = function (e) {
              return l(e);
            }),
            (t.exports = a.inspectSource);
        })),
        (ev = i((e, t) => {
          var r = a(),
            i = z(),
            l = r.WeakMap;
          t.exports = i(l) && /native code/.test(String(l));
        })),
        (eC = i((e, t) => {
          var r = ep(),
            i = ed(),
            a = r('keys');
          t.exports = function (e) {
            return a[e] || (a[e] = i(e));
          };
        })),
        (eN = i((e, t) => {
          t.exports = {};
        })),
        (eI = i((e, t) => {
          var r,
            i,
            l,
            f,
            y,
            g = ev(),
            T = a(),
            E = V(),
            C = eE(),
            I = eu(),
            M = el(),
            D = eC(),
            j = eN(),
            R = 'Object already initialized',
            U = T.TypeError,
            z = T.WeakMap;
          g || M.state
            ? (((r = M.state || (M.state = new z())).get = r.get),
              (r.has = r.has),
              (r.set = r.set),
              (l = function (e, t) {
                if (r.has(e)) throw U(R);
                return (t.facade = e), r.set(e, t), t;
              }),
              (f = function (e) {
                return r.get(e) || {};
              }),
              (y = function (e) {
                return r.has(e);
              }))
            : ((j[(i = D('state'))] = !0),
              (l = function (e, t) {
                if (I(e, i)) throw U(R);
                return (t.facade = e), C(e, i, t), t;
              }),
              (f = function (e) {
                return I(e, i) ? e[i] : {};
              }),
              (y = function (e) {
                return I(e, i);
              })),
            (t.exports = {
              set: l,
              get: f,
              has: y,
              enforce: function (e) {
                return y(e) ? f(e) : l(e, {});
              },
              getterFor: function (e) {
                return function (t) {
                  var r;
                  if (!E(t) || (r = f(t)).type !== e) throw U('Incompatible receiver, ' + e + ' required');
                  return r;
                };
              }
            });
        })),
        (ek = i((e, t) => {
          var r = l(),
            i = z(),
            a = eu(),
            y = f(),
            g = eS().CONFIGURABLE,
            T = ew(),
            E = eI(),
            C = E.enforce,
            I = E.get,
            M = Object.defineProperty,
            D =
              y &&
              !r(function () {
                return 8 !== M(function () {}, 'length', { value: 8 }).length;
              }),
            j = String(String).split('String'),
            R = (t.exports = function (e, t, r) {
              'Symbol(' === String(t).slice(0, 7) && (t = '[' + String(t).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
                r && r.getter && (t = 'get ' + t),
                r && r.setter && (t = 'set ' + t),
                (!a(e, 'name') || (g && e.name !== t)) &&
                  (y ? M(e, 'name', { value: t, configurable: !0 }) : (e.name = t)),
                D && r && a(r, 'arity') && e.length !== r.arity && M(e, 'length', { value: r.arity });
              try {
                r && a(r, 'constructor') && r.constructor
                  ? y && M(e, 'prototype', { writable: !1 })
                  : e.prototype && (e.prototype = void 0);
              } catch {}
              var i = C(e);
              return a(i, 'source') || (i.source = j.join('string' == typeof t ? t : '')), e;
            });
          Function.prototype.toString = R(function () {
            return (i(this) && I(this).source) || T(this);
          }, 'toString');
        })),
        (eL = i((e, t) => {
          var r = z(),
            i = eA(),
            a = ek(),
            l = eh();
          t.exports = function (e, t, f, y) {
            y || (y = {});
            var g = y.enumerable,
              T = void 0 !== y.name ? y.name : t;
            if ((r(f) && a(f, T, y), y.global)) g ? (e[t] = f) : l(t, f);
            else {
              try {
                y.unsafe ? e[t] && (g = !0) : delete e[t];
              } catch {}
              g
                ? (e[t] = f)
                : i.f(e, t, { value: f, enumerable: !1, configurable: !y.nonConfigurable, writable: !y.nonWritable });
            }
            return e;
          };
        })),
        (eM = i((e, t) => {
          var r = Math.ceil,
            i = Math.floor;
          t.exports =
            Math.trunc ||
            function (e) {
              var t = +e;
              return (t > 0 ? i : r)(t);
            };
        })),
        (eO = i((e, t) => {
          var r = eM();
          t.exports = function (e) {
            var t = +e;
            return t != t || 0 === t ? 0 : r(t);
          };
        })),
        (eD = i((e, t) => {
          var r = eO(),
            i = Math.max,
            a = Math.min;
          t.exports = function (e, t) {
            var l = r(e);
            return l < 0 ? i(l + t, 0) : a(l, t);
          };
        })),
        (eB = i((e, t) => {
          var r = eO(),
            i = Math.min;
          t.exports = function (e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0;
          };
        })),
        (eF = i((e, t) => {
          var r = eB();
          t.exports = function (e) {
            return r(e.length);
          };
        })),
        (ej = i((e, t) => {
          var r = R(),
            i = eD(),
            a = eF(),
            en = function (e) {
              return function (t, l, f) {
                var y,
                  g = r(t),
                  T = a(g),
                  E = i(f, T);
                if (e && l != l) {
                  for (; T > E; ) if ((y = g[E++]) != y) return !0;
                } else for (; T > E; E++) if ((e || E in g) && g[E] === l) return e || E || 0;
                return !e && -1;
              };
            };
          t.exports = { includes: en(!0), indexOf: en(!1) };
        })),
        (eR = i((e, t) => {
          var r = C(),
            i = eu(),
            a = R(),
            l = ej().indexOf,
            f = eN(),
            y = r([].push);
          t.exports = function (e, t) {
            var r,
              g = a(e),
              T = 0,
              E = [];
            for (r in g) !i(f, r) && i(g, r) && y(E, r);
            for (; t.length > T; ) i(g, (r = t[T++])) && (~l(E, r) || y(E, r));
            return E;
          };
        })),
        (eU = i((e, t) => {
          t.exports = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf'
          ];
        })),
        (e_ = i((e) => {
          var t = eR(),
            r = eU().concat('length', 'prototype');
          e.f =
            Object.getOwnPropertyNames ||
            function (e) {
              return t(e, r);
            };
        })),
        (e$ = i((e) => {
          e.f = Object.getOwnPropertySymbols;
        })),
        (ez = i((e, t) => {
          var r = K(),
            i = C(),
            a = e_(),
            l = e$(),
            f = eT(),
            y = i([].concat);
          t.exports =
            r('Reflect', 'ownKeys') ||
            function (e) {
              var t = a.f(f(e)),
                r = l.f;
              return r ? y(t, r(e)) : t;
            };
        })),
        (eq = i((e, t) => {
          var r = eu(),
            i = ez(),
            a = eP(),
            l = eA();
          t.exports = function (e, t, f) {
            for (var y = i(t), g = l.f, T = a.f, E = 0; E < y.length; E++) {
              var C = y[E];
              r(e, C) || (f && r(f, C)) || g(e, C, T(t, C));
            }
          };
        })),
        (eH = i((e, t) => {
          var r = l(),
            i = z(),
            a = /#|\.prototype\./,
            st = function (e, t) {
              var a = y[f(e)];
              return a == T || (a != g && (i(t) ? r(t) : !!t));
            },
            f = (st.normalize = function (e) {
              return String(e).replace(a, '.').toLowerCase();
            }),
            y = (st.data = {}),
            g = (st.NATIVE = 'N'),
            T = (st.POLYFILL = 'P');
          t.exports = st;
        })),
        (eV = i((e, t) => {
          var r = a(),
            i = eP().f,
            l = eE(),
            f = eL(),
            y = eh(),
            g = eq(),
            T = eH();
          t.exports = function (e, t) {
            var a,
              E,
              C,
              I,
              M,
              D = e.target,
              j = e.global,
              R = e.stat;
            if ((a = j ? r : R ? r[D] || y(D, {}) : (r[D] || {}).prototype))
              for (E in t) {
                if (
                  ((I = t[E]),
                  (C = e.dontCallGetSet ? (M = i(a, E)) && M.value : a[E]),
                  !T(j ? E : D + (R ? '.' : '#') + E, e.forced) && void 0 !== C)
                ) {
                  if (typeof I == typeof C) continue;
                  g(I, C);
                }
                (e.sham || (C && C.sham)) && l(I, 'sham', !0), f(a, E, I, e);
              }
          };
        })),
        (eK = i(() => {
          var e = eV(),
            t = a();
          e({ global: !0, forced: t.globalThis !== t }, { globalThis: t });
        })),
        (eJ = i(() => {
          eK();
        })),
        (eW = i((e, t) => {
          var r = ek(),
            i = eA();
          t.exports = function (e, t, a) {
            return a.get && r(a.get, t, { getter: !0 }), a.set && r(a.set, t, { setter: !0 }), i.f(e, t, a);
          };
        })),
        (eX = i((e, t) => {
          var r = eT();
          t.exports = function () {
            var e = r(this),
              t = '';
            return (
              e.hasIndices && (t += 'd'),
              e.global && (t += 'g'),
              e.ignoreCase && (t += 'i'),
              e.multiline && (t += 'm'),
              e.dotAll && (t += 's'),
              e.unicode && (t += 'u'),
              e.unicodeSets && (t += 'v'),
              e.sticky && (t += 'y'),
              t
            );
          };
        })),
        (eG = i(() => {
          var e = a(),
            t = f(),
            r = eW(),
            i = eX(),
            y = l(),
            g = e.RegExp,
            T = g.prototype;
          t &&
            y(function () {
              var e = !0;
              try {
                g('.', 'd');
              } catch {
                e = !1;
              }
              var t = {},
                r = '',
                i = e ? 'dgimsy' : 'gimsy',
                x = function (e, i) {
                  Object.defineProperty(t, e, {
                    get: function () {
                      return (r += i), !0;
                    }
                  });
                },
                a = { dotAll: 's', global: 'g', ignoreCase: 'i', multiline: 'm', sticky: 'y' };
              for (var l in (e && (a.hasIndices = 'd'), a)) x(l, a[l]);
              return Object.getOwnPropertyDescriptor(T, 'flags').get.call(t) !== i || r !== i;
            }) &&
            r(T, 'flags', { configurable: !0, get: i });
        })),
        (eY = i((e, t) => {
          var r = I();
          t.exports =
            Array.isArray ||
            function (e) {
              return 'Array' == r(e);
            };
        })),
        (eQ = i((e, t) => {
          var r = TypeError;
          t.exports = function (e) {
            if (e > 9007199254740991) throw r('Maximum allowed index exceeded');
            return e;
          };
        })),
        (eZ = i((e, t) => {
          var r = I(),
            i = C();
          t.exports = function (e) {
            if ('Function' === r(e)) return i(e);
          };
        })),
        (e1 = i((e, t) => {
          var r = eZ(),
            i = er(),
            a = y(),
            l = r(r.bind);
          t.exports = function (e, t) {
            return (
              i(e),
              void 0 === t
                ? e
                : a
                ? l(e, t)
                : function () {
                    return e.apply(t, arguments);
                  }
            );
          };
        })),
        (e0 = i((e, t) => {
          var r = eY(),
            i = eF(),
            a = eQ(),
            l = e1(),
            jn = function (e, t, f, y, g, T, E, C) {
              for (var I, M, D = g, j = 0, R = !!E && l(E, C); j < y; )
                j in f &&
                  ((I = R ? R(f[j], j, t) : f[j]),
                  T > 0 && r(I) ? ((M = i(I)), (D = jn(e, t, I, M, D, T - 1) - 1)) : (a(D + 1), (e[D] = I)),
                  D++),
                  j++;
              return D;
            };
          t.exports = jn;
        })),
        (e2 = i((e, t) => {
          var r = em()('toStringTag'),
            i = {};
          (i[r] = 'z'), (t.exports = '[object z]' === String(i));
        })),
        (e3 = i((e, t) => {
          var r = e2(),
            i = z(),
            a = I(),
            l = em()('toStringTag'),
            f = Object,
            y =
              'Arguments' ==
              a(
                (function () {
                  return arguments;
                })()
              ),
            af = function (e, t) {
              try {
                return e[t];
              } catch {}
            };
          t.exports = r
            ? a
            : function (e) {
                var t, r, g;
                return void 0 === e
                  ? 'Undefined'
                  : null === e
                  ? 'Null'
                  : 'string' == typeof (r = af((t = f(e)), l))
                  ? r
                  : y
                  ? a(t)
                  : 'Object' == (g = a(t)) && i(t.callee)
                  ? 'Arguments'
                  : g;
              };
        })),
        (e4 = i((e, t) => {
          var r = C(),
            i = l(),
            a = z(),
            f = e3(),
            y = K(),
            g = ew(),
            Gn = function () {},
            T = [],
            E = y('Reflect', 'construct'),
            I = /^\s*(?:class|function)\b/,
            M = r(I.exec),
            D = !I.exec(Gn),
            rt = function (e) {
              if (!a(e)) return !1;
              try {
                return E(Gn, T, e), !0;
              } catch {
                return !1;
              }
            },
            Xn = function (e) {
              if (!a(e)) return !1;
              switch (f(e)) {
                case 'AsyncFunction':
                case 'GeneratorFunction':
                case 'AsyncGeneratorFunction':
                  return !1;
              }
              try {
                return D || !!M(I, g(e));
              } catch {
                return !0;
              }
            };
          (Xn.sham = !0),
            (t.exports =
              !E ||
              i(function () {
                var e;
                return (
                  rt(rt.call) ||
                  !rt(Object) ||
                  !rt(function () {
                    e = !0;
                  }) ||
                  e
                );
              })
                ? Xn
                : rt);
        })),
        (e8 = i((e, t) => {
          var r = eY(),
            i = e4(),
            a = V(),
            l = em()('species'),
            f = Array;
          t.exports = function (e) {
            var t;
            return (
              r(e) &&
                (i((t = e.constructor)) && (t === f || r(t.prototype))
                  ? (t = void 0)
                  : a(t) && null === (t = t[l]) && (t = void 0)),
              void 0 === t ? f : t
            );
          };
        })),
        (e5 = i((e, t) => {
          var r = e8();
          t.exports = function (e, t) {
            return new (r(e))(0 === t ? 0 : t);
          };
        })),
        (e6 = i(() => {
          var e = eV(),
            t = e0(),
            r = er(),
            i = ec(),
            a = eF(),
            l = e5();
          e(
            { target: 'Array', proto: !0 },
            {
              flatMap: function (e) {
                var f,
                  y = i(this),
                  g = a(y);
                return (
                  r(e), ((f = l(y, 0)).length = t(f, y, y, g, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0)), f
                );
              }
            }
          );
        })),
        i((e, t) => {
          eJ(), eG(), e6();
          var r = Object.defineProperty,
            i = Object.getOwnPropertyDescriptor,
            a = Object.getOwnPropertyNames,
            l = Object.prototype.hasOwnProperty,
            co = (e, t) =>
              function () {
                return e && (t = (0, e[a(e)[0]])((e = 0))), t;
              },
            $ = (e, t) =>
              function () {
                return t || (0, e[a(e)[0]])((t = { exports: {} }).exports, t), t.exports;
              },
            If = (e, t, f, y) => {
              if ((t && 'object' == typeof t) || 'function' == typeof t)
                for (let g of a(t))
                  l.call(e, g) || g === f || r(e, g, { get: () => t[g], enumerable: !(y = i(t, g)) || y.enumerable });
              return e;
            },
            Nf = (e) => If(r({}, '__esModule', { value: !0 }), e),
            f = co({ '<define:process>'() {} }),
            y = $({
              'src/utils/try-combinations.js'(e, t) {
                function p() {
                  let e;
                  for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                  for (let [t, i] of r.entries())
                    try {
                      return { result: i() };
                    } catch (r) {
                      0 === t && (e = r);
                    }
                  return { error: e };
                }
                f(), (t.exports = p);
              }
            }),
            g = $({
              'src/language-js/utils/get-shebang.js'(e, t) {
                function p(e) {
                  if (!e.startsWith('#!')) return '';
                  let t = e.indexOf(`
`);
                  return -1 === t ? e : e.slice(0, t);
                }
                f(), (t.exports = p);
              }
            }),
            T = $({
              'src/utils/text/skip-inline-comment.js'(e, t) {
                function p(e, t) {
                  if (!1 === t) return !1;
                  if ('/' === e.charAt(t) && '*' === e.charAt(t + 1)) {
                    for (let r = t + 2; r < e.length; ++r)
                      if ('*' === e.charAt(r) && '/' === e.charAt(r + 1)) return r + 2;
                  }
                  return t;
                }
                f(), (t.exports = p);
              }
            }),
            E = $({
              'src/utils/text/skip-newline.js'(e, t) {
                function p(e, t, r) {
                  let i = r && r.backwards;
                  if (!1 === t) return !1;
                  let a = e.charAt(t);
                  if (i) {
                    if (
                      '\r' === e.charAt(t - 1) &&
                      a ===
                        `
`
                    )
                      return t - 2;
                    if (
                      a ===
                        `
` ||
                      '\r' === a ||
                      '\u2028' === a ||
                      '\u2029' === a
                    )
                      return t - 1;
                  } else {
                    if (
                      '\r' === a &&
                      e.charAt(t + 1) ===
                        `
`
                    )
                      return t + 2;
                    if (
                      a ===
                        `
` ||
                      '\r' === a ||
                      '\u2028' === a ||
                      '\u2029' === a
                    )
                      return t + 1;
                  }
                  return t;
                }
                f(), (t.exports = p);
              }
            }),
            C = $({
              'src/utils/text/skip.js'(e, t) {
                function p(e) {
                  return (t, r, i) => {
                    let a = i && i.backwards;
                    if (!1 === r) return !1;
                    let { length: l } = t,
                      f = r;
                    for (; f >= 0 && f < l; ) {
                      let r = t.charAt(f);
                      if (e instanceof RegExp) {
                        if (!e.test(r)) return f;
                      } else if (!e.includes(r)) return f;
                      a ? f-- : f++;
                    }
                    return (-1 === f || f === l) && f;
                  };
                }
                f();
                var r = p(/\s/),
                  i = p(' 	'),
                  a = p(',; 	'),
                  l = p(/[^\n\r]/);
                t.exports = { skipWhitespace: r, skipSpaces: i, skipToLineEnd: a, skipEverythingButNewLine: l };
              }
            }),
            I = $({
              'src/utils/text/skip-trailing-comment.js'(e, t) {
                f();
                var { skipEverythingButNewLine: r } = C();
                function d(e, t) {
                  return !1 !== t && ('/' === e.charAt(t) && '/' === e.charAt(t + 1) ? r(e, t) : t);
                }
                t.exports = d;
              }
            }),
            M = $({
              'src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js'(e, t) {
                f();
                var r = T(),
                  i = E(),
                  a = I(),
                  { skipSpaces: l } = C();
                function m(e, t) {
                  let f = null,
                    y = t;
                  for (; y !== f; ) (f = y), (y = l(e, y)), (y = r(e, y)), (y = a(e, y)), (y = i(e, y));
                  return y;
                }
                t.exports = m;
              }
            }),
            D = {};
          function yo() {
            if (typeof j > 'u') {
              var e = new ArrayBuffer(2),
                t = new Uint8Array(e),
                r = new Uint16Array(e);
              if (((t[0] = 1), (t[1] = 2), 258 === r[0])) j = 'BE';
              else if (513 === r[0]) j = 'LE';
              else throw Error('unable to figure out endianess');
            }
            return j;
          }
          function xo() {
            return 'u' > typeof globalThis.location ? globalThis.location.hostname : '';
          }
          function go() {
            return [];
          }
          function Po() {
            return 0;
          }
          function Ao() {
            return Number.MAX_VALUE;
          }
          function To() {
            return Number.MAX_VALUE;
          }
          function vo() {
            return [];
          }
          function Eo() {
            return 'Browser';
          }
          function Co() {
            return 'u' > typeof globalThis.navigator ? globalThis.navigator.appVersion : '';
          }
          function bo() {}
          function So() {}
          function Bf() {
            return 'javascript';
          }
          function Mf() {
            return 'browser';
          }
          function rr() {
            return '/tmp';
          }
          ((e, t) => {
            for (var i in t) r(e, i, { get: t[i], enumerable: !0 });
          })(D, {
            EOL: () => U,
            arch: () => Bf,
            cpus: () => vo,
            default: () => z,
            endianness: () => yo,
            freemem: () => Ao,
            getNetworkInterfaces: () => So,
            hostname: () => xo,
            loadavg: () => go,
            networkInterfaces: () => bo,
            platform: () => Mf,
            release: () => Co,
            tmpDir: () => rr,
            tmpdir: () => R,
            totalmem: () => To,
            type: () => Eo,
            uptime: () => Po
          });
          var j,
            R,
            U,
            z,
            V = co({
              'node-modules-polyfills:os'() {
                f(),
                  (z = {
                    EOL: (U = `
`),
                    tmpdir: (R = rr),
                    tmpDir: rr,
                    networkInterfaces: bo,
                    getNetworkInterfaces: So,
                    release: Co,
                    type: Eo,
                    cpus: vo,
                    totalmem: To,
                    freemem: Ao,
                    uptime: Po,
                    loadavg: go,
                    hostname: xo,
                    endianness: yo
                  });
              }
            }),
            K = $({
              'node-modules-polyfills-commonjs:os'(e, t) {
                f();
                var r = (V(), Nf(D));
                if (r && r.default) for (let e in ((t.exports = r.default), r)) t.exports[e] = r[e];
                else r && (t.exports = r);
              }
            }),
            W = $({
              'node_modules/detect-newline/index.js'(e, t) {
                f();
                var p = (e) => {
                  if ('string' != typeof e) throw TypeError('Expected a string');
                  let t = e.match(/(?:\r?\n)/g) || [];
                  if (0 === t.length) return;
                  let r = t.filter(
                      (e) =>
                        e ===
                        `\r
`
                    ).length,
                    i = t.length - r;
                  return r > i
                    ? `\r
`
                    : `
`;
                };
                (t.exports = p),
                  (t.exports.graceful = (e) =>
                    ('string' == typeof e && p(e)) ||
                    `
`);
              }
            }),
            X = $({
              'node_modules/jest-docblock/build/index.js'(e) {
                function h() {
                  let e = K();
                  return (
                    (h = function () {
                      return e;
                    }),
                    e
                  );
                }
                function p() {
                  let e = d(W());
                  return (
                    (p = function () {
                      return e;
                    }),
                    e
                  );
                }
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                f(),
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.extract = A),
                  (e.parse = G),
                  (e.parseWithComments = N),
                  (e.print = O),
                  (e.strip = _);
                var t = /\*\/$/,
                  r = /^\/\*\*?/,
                  i = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
                  a = /(^|\s+)\/\/([^\r\n]*)/g,
                  l = /^(\r?\n)+/,
                  y = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
                  g = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
                  T = /(\r?\n|^) *\* ?/g,
                  E = [];
                function A(e) {
                  let t = e.match(i);
                  return t ? t[0].trimLeft() : '';
                }
                function _(e) {
                  let t = e.match(i);
                  return t && t[0] ? e.substring(t[0].length) : e;
                }
                function G(e) {
                  return N(e).pragmas;
                }
                function N(e) {
                  let i = (0, p().default)(e) || h().EOL;
                  e = e.replace(r, '').replace(t, '').replace(T, '$1');
                  let f = '';
                  for (; f !== e; ) (f = e), (e = e.replace(y, `${i}$1 $2${i}`));
                  e = e.replace(l, '').trimRight();
                  let C = Object.create(null),
                    I = e.replace(g, '').replace(l, '').trimRight(),
                    M;
                  for (; (M = g.exec(e)); ) {
                    let e = M[2].replace(a, '');
                    'string' == typeof C[M[1]] || Array.isArray(C[M[1]])
                      ? (C[M[1]] = E.concat(C[M[1]], e))
                      : (C[M[1]] = e);
                  }
                  return { comments: I, pragmas: C };
                }
                function O(e) {
                  let { comments: t = '', pragmas: r = {} } = e,
                    i = (0, p().default)(t) || h().EOL,
                    a = Object.keys(r),
                    l = a
                      .map((e) => H(e, r[e]))
                      .reduce((e, t) => e.concat(t), [])
                      .map((e) => ` * ${e}${i}`)
                      .join('');
                  if (!t) {
                    if (0 === a.length) return '';
                    if (1 === a.length && !Array.isArray(r[a[0]])) {
                      let e = r[a[0]];
                      return `/** ${H(a[0], e)[0]} */`;
                    }
                  }
                  let f =
                    t
                      .split(i)
                      .map((e) => ` * ${e}`)
                      .join(i) + i;
                  return '/**' + i + (t ? f : '') + (t && a.length ? ' *' + i : '') + l + ' */';
                }
                function H(e, t) {
                  return E.concat(t).map((t) => `@${e} ${t}`.trim());
                }
              }
            }),
            Q = $({
              'src/common/end-of-line.js'(e, t) {
                function p(e) {
                  let t = e.indexOf('\r');
                  return t >= 0
                    ? e.charAt(t + 1) ===
                      `
`
                      ? 'crlf'
                      : 'cr'
                    : 'lf';
                }
                function d(e) {
                  switch (e) {
                    case 'cr':
                      return '\r';
                    case 'crlf':
                      return `\r
`;
                    default:
                      return `
`;
                  }
                }
                function x(e, t) {
                  let r;
                  switch (t) {
                    case `
`:
                      r = /\n/g;
                      break;
                    case '\r':
                      r = /\r/g;
                      break;
                    case `\r
`:
                      r = /\r\n/g;
                      break;
                    default:
                      throw Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
                  }
                  let i = e.match(r);
                  return i ? i.length : 0;
                }
                function P(e) {
                  return e.replace(
                    /\r\n?/g,
                    `
`
                  );
                }
                f(),
                  (t.exports = {
                    guessEndOfLine: p,
                    convertEndOfLineToChars: d,
                    countEndOfLineChars: x,
                    normalizeEndOfLine: P
                  });
              }
            }),
            Z = $({
              'src/language-js/pragma.js'(e, t) {
                f();
                var { parseWithComments: r, strip: i, extract: a, print: l } = X(),
                  { normalizeEndOfLine: y } = Q(),
                  T = g();
                function S(e) {
                  let t = T(e);
                  t && (e = e.slice(t.length + 1));
                  let { pragmas: i, comments: l } = r(a(e));
                  return { shebang: t, text: e, pragmas: i, comments: l };
                }
                function k(e) {
                  let t = Object.keys(S(e).pragmas);
                  return t.includes('prettier') || t.includes('format');
                }
                function F(e) {
                  let { shebang: t, text: r, pragmas: a, comments: f } = S(e),
                    g = i(r);
                  return (
                    (t
                      ? `${t}
`
                      : '') +
                    y(l({ pragmas: Object.assign({ format: '' }, a), comments: f.trimStart() })) +
                    (g.startsWith(`
`)
                      ? `
`
                      : `

`) +
                    g
                  );
                }
                t.exports = { hasPragma: k, insertPragma: F };
              }
            }),
            ee = $({
              'src/utils/is-non-empty-array.js'(e, t) {
                function p(e) {
                  return Array.isArray(e) && e.length > 0;
                }
                f(), (t.exports = p);
              }
            }),
            et = $({
              'src/language-js/loc.js'(e, t) {
                f();
                var r = ee();
                function d(e) {
                  var t, i;
                  let a = e.range ? e.range[0] : e.start,
                    l =
                      null !== (t = null === (i = e.declaration) || void 0 === i ? void 0 : i.decorators) &&
                      void 0 !== t
                        ? t
                        : e.decorators;
                  return r(l) ? Math.min(d(l[0]), a) : a;
                }
                function x(e) {
                  return e.range ? e.range[1] : e.end;
                }
                function P(e, t) {
                  let r = d(e);
                  return Number.isInteger(r) && r === d(t);
                }
                function m(e, t) {
                  let r = x(e);
                  return Number.isInteger(r) && r === x(t);
                }
                function v(e, t) {
                  return P(e, t) && m(e, t);
                }
                t.exports = { locStart: d, locEnd: x, hasSameLocStart: P, hasSameLoc: v };
              }
            }),
            es = $({
              'src/language-js/parse/utils/create-parser.js'(e, t) {
                f();
                var { hasPragma: r } = Z(),
                  { locStart: i, locEnd: a } = et();
                function P(e) {
                  return Object.assign(
                    { astFormat: 'estree', hasPragma: r, locStart: i, locEnd: a },
                    (e = 'function' == typeof e ? { parse: e } : e)
                  );
                }
                t.exports = P;
              }
            }),
            er = $({
              'src/common/parser-create-error.js'(e, t) {
                function p(e, t) {
                  let r = SyntaxError(e + ' (' + t.start.line + ':' + t.start.column + ')');
                  return (r.loc = t), r;
                }
                f(), (t.exports = p);
              }
            }),
            ei = $({
              'src/language-js/parse/utils/create-babel-parse-error.js'(e, t) {
                f();
                var r = er();
                function d(e) {
                  let { message: t, loc: i } = e;
                  return r(t.replace(/ \(.*\)/, ''), { start: { line: i ? i.line : 0, column: i ? i.column + 1 : 0 } });
                }
                t.exports = d;
              }
            }),
            ea = $({
              'src/language-js/utils/is-ts-keyword-type.js'(e, t) {
                function p(e) {
                  let { type: t } = e;
                  return t.startsWith('TS') && t.endsWith('Keyword');
                }
                f(), (t.exports = p);
              }
            }),
            eo = $({
              'src/language-js/utils/is-block-comment.js'(e, t) {
                f();
                var r = new Set(['Block', 'CommentBlock', 'MultiLine']);
                t.exports = (e) => r.has(null == e ? void 0 : e.type);
              }
            }),
            eh = $({
              'src/language-js/utils/is-type-cast-comment.js'(e, t) {
                f();
                var r = eo();
                function d(e) {
                  return r(e) && '*' === e.value[0] && /@(?:type|satisfies)\b/.test(e.value);
                }
                t.exports = d;
              }
            }),
            el = $({
              'src/utils/get-last.js'(e, t) {
                f(), (t.exports = (e) => e[e.length - 1]);
              }
            }),
            ep = $({
              'src/language-js/parse/postprocess/visit-node.js'(e, t) {
                function p(e, t) {
                  if (Array.isArray(e)) {
                    for (let r = 0; r < e.length; r++) e[r] = p(e[r], t);
                    return e;
                  }
                  if (e && 'object' == typeof e && 'string' == typeof e.type) {
                    let r = Object.keys(e);
                    for (let i = 0; i < r.length; i++) e[r[i]] = p(e[r[i]], t);
                    return t(e) || e;
                  }
                  return e;
                }
                f(), (t.exports = p);
              }
            }),
            ec = $({
              'src/language-js/parse/postprocess/throw-syntax-error.js'(e, t) {
                f();
                var r = er();
                function d(e, t) {
                  let { start: i, end: a } = e.loc;
                  throw r(t, {
                    start: { line: i.line, column: i.column + 1 },
                    end: { line: a.line, column: a.column + 1 }
                  });
                }
                t.exports = d;
              }
            }),
            eu = $({
              'src/language-js/parse/postprocess/index.js'(e, t) {
                f();
                var { locStart: r, locEnd: i } = et(),
                  a = ea(),
                  l = eh(),
                  y = el(),
                  g = ep(),
                  T = ec();
                function k(e, t) {
                  if (
                    'typescript' !== t.parser &&
                    'flow' !== t.parser &&
                    'acorn' !== t.parser &&
                    'espree' !== t.parser &&
                    'meriyah' !== t.parser
                  ) {
                    let t = new Set();
                    (e = g(e, (e) => {
                      e.leadingComments && e.leadingComments.some(l) && t.add(r(e));
                    })),
                      (e = g(e, (e) => {
                        if ('ParenthesizedExpression' === e.type) {
                          let { expression: i } = e;
                          if ('TypeCastExpression' === i.type) return (i.range = e.range), i;
                          let a = r(e);
                          if (!t.has(a))
                            return (i.extra = Object.assign(Object.assign({}, i.extra), {}, { parenthesized: !0 })), i;
                        }
                      }));
                  }
                  return (e = g(e, (e) => {
                    switch (e.type) {
                      case 'ChainExpression':
                        return F(e.expression);
                      case 'LogicalExpression':
                        if (w(e)) return L(e);
                        break;
                      case 'VariableDeclaration': {
                        let t = y(e.declarations);
                        t && t.init && G(e, t);
                        break;
                      }
                      case 'TSParenthesizedType':
                        return (
                          a(e.typeAnnotation) ||
                            'TSThisType' === e.typeAnnotation.type ||
                            (e.typeAnnotation.range = [r(e), i(e)]),
                          e.typeAnnotation
                        );
                      case 'TSTypeParameter':
                        if ('string' == typeof e.name) {
                          let t = r(e);
                          e.name = { type: 'Identifier', name: e.name, range: [t, t + e.name.length] };
                        }
                        break;
                      case 'ObjectExpression':
                        if ('typescript' === t.parser) {
                          let t = e.properties.find(
                            (e) => 'Property' === e.type && 'TSEmptyBodyFunctionExpression' === e.value.type
                          );
                          t && T(t.value, 'Unexpected token.');
                        }
                        break;
                      case 'SequenceExpression': {
                        let t = y(e.expressions);
                        e.range = [r(e), Math.min(i(t), i(e))];
                        break;
                      }
                      case 'TopicReference':
                        t.__isUsingHackPipeline = !0;
                        break;
                      case 'ExportAllDeclaration': {
                        let { exported: a } = e;
                        if ('meriyah' === t.parser && a && 'Identifier' === a.type) {
                          let l = t.originalText.slice(r(a), i(a));
                          (l.startsWith('"') || l.startsWith("'")) &&
                            (e.exported = Object.assign(
                              Object.assign({}, e.exported),
                              {},
                              { type: 'Literal', value: e.exported.name, raw: l }
                            ));
                        }
                        break;
                      }
                      case 'PropertyDefinition':
                        if ('meriyah' === t.parser && e.static && !e.computed && !e.key) {
                          let t = 'static',
                            i = r(e);
                          Object.assign(e, {
                            static: !1,
                            key: { type: 'Identifier', name: t, range: [i, i + t.length] }
                          });
                        }
                    }
                  }));
                  function G(e, a) {
                    ';' !== t.originalText[i(a)] && (e.range = [r(e), i(a)]);
                  }
                }
                function F(e) {
                  switch (e.type) {
                    case 'CallExpression':
                      (e.type = 'OptionalCallExpression'), (e.callee = F(e.callee));
                      break;
                    case 'MemberExpression':
                      (e.type = 'OptionalMemberExpression'), (e.object = F(e.object));
                      break;
                    case 'TSNonNullExpression':
                      e.expression = F(e.expression);
                  }
                  return e;
                }
                function w(e) {
                  return (
                    'LogicalExpression' === e.type &&
                    'LogicalExpression' === e.right.type &&
                    e.operator === e.right.operator
                  );
                }
                function L(e) {
                  return w(e)
                    ? L({
                        type: 'LogicalExpression',
                        operator: e.operator,
                        left: L({
                          type: 'LogicalExpression',
                          operator: e.operator,
                          left: e.left,
                          right: e.right.left,
                          range: [r(e.left), i(e.right.left)]
                        }),
                        right: e.right.right,
                        range: [r(e), i(e)]
                      })
                    : e;
                }
                t.exports = k;
              }
            }),
            ed = $({
              'node_modules/@babel/parser/lib/index.js'(e) {
                f(), Object.defineProperty(e, '__esModule', { value: !0 });
                var t = {
                  sourceType: 'script',
                  sourceFilename: void 0,
                  startColumn: 0,
                  startLine: 1,
                  allowAwaitOutsideFunction: !1,
                  allowReturnOutsideFunction: !1,
                  allowNewTargetOutsideFunction: !1,
                  allowImportExportEverywhere: !1,
                  allowSuperOutsideMethod: !1,
                  allowUndeclaredExports: !1,
                  plugins: [],
                  strictMode: null,
                  ranges: !1,
                  tokens: !1,
                  createParenthesizedExpressions: !1,
                  errorRecovery: !1,
                  attachComment: !0,
                  annexB: !0
                };
                function p(e) {
                  if (e && null != e.annexB && !1 !== e.annexB)
                    throw Error('The `annexB` option can only be set to `false`.');
                  let r = {};
                  for (let i of Object.keys(t)) r[i] = e && null != e[i] ? e[i] : t[i];
                  return r;
                }
                var r = class {
                    constructor(e, t) {
                      (this.token = void 0),
                        (this.preserveSpace = void 0),
                        (this.token = e),
                        (this.preserveSpace = !!t);
                    }
                  },
                  i = {
                    brace: new r('{'),
                    j_oTag: new r('<tag'),
                    j_cTag: new r('</tag'),
                    j_expr: new r('<tag>...</tag>', !0)
                  };
                i.template = new r('`', !0);
                var a = class {
                    constructor(e) {
                      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                      (this.label = void 0),
                        (this.keyword = void 0),
                        (this.beforeExpr = void 0),
                        (this.startsExpr = void 0),
                        (this.rightAssociative = void 0),
                        (this.isLoop = void 0),
                        (this.isAssign = void 0),
                        (this.prefix = void 0),
                        (this.postfix = void 0),
                        (this.binop = void 0),
                        (this.label = e),
                        (this.keyword = t.keyword),
                        (this.beforeExpr = !!t.beforeExpr),
                        (this.startsExpr = !!t.startsExpr),
                        (this.rightAssociative = !!t.rightAssociative),
                        (this.isLoop = !!t.isLoop),
                        (this.isAssign = !!t.isAssign),
                        (this.prefix = !!t.prefix),
                        (this.postfix = !!t.postfix),
                        (this.binop = null != t.binop ? t.binop : null),
                        (this.updateContext = null);
                    }
                  },
                  l = new Map();
                function A(e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  t.keyword = e;
                  let r = b(e, t);
                  return l.set(e, r), r;
                }
                function _(e, t) {
                  return b(e, { beforeExpr: !0, binop: t });
                }
                var y = -1,
                  g = [],
                  T = [],
                  E = [],
                  C = [],
                  I = [],
                  M = [];
                function b(e) {
                  var t, r, i, l;
                  let f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return (
                    ++y,
                    T.push(e),
                    E.push(null != (t = f.binop) ? t : -1),
                    C.push(null != (r = f.beforeExpr) && r),
                    I.push(null != (i = f.startsExpr) && i),
                    M.push(null != (l = f.prefix) && l),
                    g.push(new a(e, f)),
                    y
                  );
                }
                function B(e) {
                  var t, r, i, f;
                  let D = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return (
                    ++y,
                    l.set(e, y),
                    T.push(e),
                    E.push(null != (t = D.binop) ? t : -1),
                    C.push(null != (r = D.beforeExpr) && r),
                    I.push(null != (i = D.startsExpr) && i),
                    M.push(null != (f = D.prefix) && f),
                    g.push(new a('name', D)),
                    y
                  );
                }
                var D = {
                  bracketL: b('[', { beforeExpr: !0, startsExpr: !0 }),
                  bracketHashL: b('#[', { beforeExpr: !0, startsExpr: !0 }),
                  bracketBarL: b('[|', { beforeExpr: !0, startsExpr: !0 }),
                  bracketR: b(']'),
                  bracketBarR: b('|]'),
                  braceL: b('{', { beforeExpr: !0, startsExpr: !0 }),
                  braceBarL: b('{|', { beforeExpr: !0, startsExpr: !0 }),
                  braceHashL: b('#{', { beforeExpr: !0, startsExpr: !0 }),
                  braceR: b('}'),
                  braceBarR: b('|}'),
                  parenL: b('(', { beforeExpr: !0, startsExpr: !0 }),
                  parenR: b(')'),
                  comma: b(',', { beforeExpr: !0 }),
                  semi: b(';', { beforeExpr: !0 }),
                  colon: b(':', { beforeExpr: !0 }),
                  doubleColon: b('::', { beforeExpr: !0 }),
                  dot: b('.'),
                  question: b('?', { beforeExpr: !0 }),
                  questionDot: b('?.'),
                  arrow: b('=>', { beforeExpr: !0 }),
                  template: b('template'),
                  ellipsis: b('...', { beforeExpr: !0 }),
                  backQuote: b('`', { startsExpr: !0 }),
                  dollarBraceL: b('${', { beforeExpr: !0, startsExpr: !0 }),
                  templateTail: b('...`', { startsExpr: !0 }),
                  templateNonTail: b('...${', { beforeExpr: !0, startsExpr: !0 }),
                  at: b('@'),
                  hash: b('#', { startsExpr: !0 }),
                  interpreterDirective: b('#!...'),
                  eq: b('=', { beforeExpr: !0, isAssign: !0 }),
                  assign: b('_=', { beforeExpr: !0, isAssign: !0 }),
                  slashAssign: b('_=', { beforeExpr: !0, isAssign: !0 }),
                  xorAssign: b('_=', { beforeExpr: !0, isAssign: !0 }),
                  moduloAssign: b('_=', { beforeExpr: !0, isAssign: !0 }),
                  incDec: b('++/--', { prefix: !0, postfix: !0, startsExpr: !0 }),
                  bang: b('!', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
                  tilde: b('~', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
                  doubleCaret: b('^^', { startsExpr: !0 }),
                  doubleAt: b('@@', { startsExpr: !0 }),
                  pipeline: _('|>', 0),
                  nullishCoalescing: _('??', 1),
                  logicalOR: _('||', 1),
                  logicalAND: _('&&', 2),
                  bitwiseOR: _('|', 3),
                  bitwiseXOR: _('^', 4),
                  bitwiseAND: _('&', 5),
                  equality: _('==/!=/===/!==', 6),
                  lt: _('</>/<=/>=', 7),
                  gt: _('</>/<=/>=', 7),
                  relational: _('</>/<=/>=', 7),
                  bitShift: _('<</>>/>>>', 8),
                  bitShiftL: _('<</>>/>>>', 8),
                  bitShiftR: _('<</>>/>>>', 8),
                  plusMin: b('+/-', { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
                  modulo: b('%', { binop: 10, startsExpr: !0 }),
                  star: b('*', { binop: 10 }),
                  slash: _('/', 10),
                  exponent: b('**', { beforeExpr: !0, binop: 11, rightAssociative: !0 }),
                  _in: A('in', { beforeExpr: !0, binop: 7 }),
                  _instanceof: A('instanceof', { beforeExpr: !0, binop: 7 }),
                  _break: A('break'),
                  _case: A('case', { beforeExpr: !0 }),
                  _catch: A('catch'),
                  _continue: A('continue'),
                  _debugger: A('debugger'),
                  _default: A('default', { beforeExpr: !0 }),
                  _else: A('else', { beforeExpr: !0 }),
                  _finally: A('finally'),
                  _function: A('function', { startsExpr: !0 }),
                  _if: A('if'),
                  _return: A('return', { beforeExpr: !0 }),
                  _switch: A('switch'),
                  _throw: A('throw', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
                  _try: A('try'),
                  _var: A('var'),
                  _const: A('const'),
                  _with: A('with'),
                  _new: A('new', { beforeExpr: !0, startsExpr: !0 }),
                  _this: A('this', { startsExpr: !0 }),
                  _super: A('super', { startsExpr: !0 }),
                  _class: A('class', { startsExpr: !0 }),
                  _extends: A('extends', { beforeExpr: !0 }),
                  _export: A('export'),
                  _import: A('import', { startsExpr: !0 }),
                  _null: A('null', { startsExpr: !0 }),
                  _true: A('true', { startsExpr: !0 }),
                  _false: A('false', { startsExpr: !0 }),
                  _typeof: A('typeof', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
                  _void: A('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
                  _delete: A('delete', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
                  _do: A('do', { isLoop: !0, beforeExpr: !0 }),
                  _for: A('for', { isLoop: !0 }),
                  _while: A('while', { isLoop: !0 }),
                  _as: B('as', { startsExpr: !0 }),
                  _assert: B('assert', { startsExpr: !0 }),
                  _async: B('async', { startsExpr: !0 }),
                  _await: B('await', { startsExpr: !0 }),
                  _from: B('from', { startsExpr: !0 }),
                  _get: B('get', { startsExpr: !0 }),
                  _let: B('let', { startsExpr: !0 }),
                  _meta: B('meta', { startsExpr: !0 }),
                  _of: B('of', { startsExpr: !0 }),
                  _sent: B('sent', { startsExpr: !0 }),
                  _set: B('set', { startsExpr: !0 }),
                  _static: B('static', { startsExpr: !0 }),
                  _using: B('using', { startsExpr: !0 }),
                  _yield: B('yield', { startsExpr: !0 }),
                  _asserts: B('asserts', { startsExpr: !0 }),
                  _checks: B('checks', { startsExpr: !0 }),
                  _exports: B('exports', { startsExpr: !0 }),
                  _global: B('global', { startsExpr: !0 }),
                  _implements: B('implements', { startsExpr: !0 }),
                  _intrinsic: B('intrinsic', { startsExpr: !0 }),
                  _infer: B('infer', { startsExpr: !0 }),
                  _is: B('is', { startsExpr: !0 }),
                  _mixins: B('mixins', { startsExpr: !0 }),
                  _proto: B('proto', { startsExpr: !0 }),
                  _require: B('require', { startsExpr: !0 }),
                  _satisfies: B('satisfies', { startsExpr: !0 }),
                  _keyof: B('keyof', { startsExpr: !0 }),
                  _readonly: B('readonly', { startsExpr: !0 }),
                  _unique: B('unique', { startsExpr: !0 }),
                  _abstract: B('abstract', { startsExpr: !0 }),
                  _declare: B('declare', { startsExpr: !0 }),
                  _enum: B('enum', { startsExpr: !0 }),
                  _module: B('module', { startsExpr: !0 }),
                  _namespace: B('namespace', { startsExpr: !0 }),
                  _interface: B('interface', { startsExpr: !0 }),
                  _type: B('type', { startsExpr: !0 }),
                  _opaque: B('opaque', { startsExpr: !0 }),
                  name: b('name', { startsExpr: !0 }),
                  string: b('string', { startsExpr: !0 }),
                  num: b('num', { startsExpr: !0 }),
                  bigint: b('bigint', { startsExpr: !0 }),
                  decimal: b('decimal', { startsExpr: !0 }),
                  regexp: b('regexp', { startsExpr: !0 }),
                  privateName: b('#name', { startsExpr: !0 }),
                  eof: b('eof'),
                  jsxName: b('jsxName'),
                  jsxText: b('jsxText', { beforeExpr: !0 }),
                  jsxTagStart: b('jsxTagStart', { startsExpr: !0 }),
                  jsxTagEnd: b('jsxTagEnd'),
                  placeholder: b('%%', { startsExpr: !0 })
                };
                function q(e) {
                  return e >= 93 && e <= 130;
                }
                function ue(e) {
                  return e <= 92;
                }
                function te(e) {
                  return e >= 58 && e <= 130;
                }
                function it(e) {
                  return e >= 58 && e <= 134;
                }
                function se(e) {
                  return C[e];
                }
                function Bo(e) {
                  return e >= 29 && e <= 33;
                }
                function hr(e) {
                  return e >= 127 && e <= 129;
                }
                function Mo(e) {
                  return e >= 90 && e <= 92;
                }
                function $t(e) {
                  return e >= 58 && e <= 92;
                }
                function _o(e) {
                  return e >= 39 && e <= 59;
                }
                function Ro(e) {
                  return 34 === e;
                }
                function jo(e) {
                  return M[e];
                }
                function qo(e) {
                  return e >= 119 && e <= 121;
                }
                function Uo(e) {
                  return e >= 122 && e <= 128;
                }
                function $o(e) {
                  return 57 === e;
                }
                function nt(e) {
                  return e >= 24 && e <= 25;
                }
                function ot(e, t) {
                  if (null == e) return {};
                  var r,
                    i,
                    a = {},
                    l = Object.keys(e);
                  for (i = 0; i < l.length; i++) (r = l[i]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                  return a;
                }
                (g[8].updateContext = (e) => {
                  e.pop();
                }),
                  (g[5].updateContext =
                    g[7].updateContext =
                    g[23].updateContext =
                      (e) => {
                        e.push(i.brace);
                      }),
                  (g[22].updateContext = (e) => {
                    e[e.length - 1] === i.template ? e.pop() : e.push(i.template);
                  }),
                  (g[140].updateContext = (e) => {
                    e.push(i.j_expr, i.j_oTag);
                  });
                var j = class {
                    constructor(e, t, r) {
                      (this.line = void 0),
                        (this.column = void 0),
                        (this.index = void 0),
                        (this.line = e),
                        (this.column = t),
                        (this.index = r);
                    }
                  },
                  R = class {
                    constructor(e, t) {
                      (this.start = void 0),
                        (this.end = void 0),
                        (this.filename = void 0),
                        (this.identifierName = void 0),
                        (this.start = e),
                        (this.end = t);
                    }
                  };
                function Y(e, t) {
                  let { line: r, column: i, index: a } = e;
                  return new j(r, i + t, a + t);
                }
                var U = {
                    SyntaxError: 'BABEL_PARSER_SYNTAX_ERROR',
                    SourceTypeModuleError: 'BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED'
                  },
                  Ho = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.length - 1;
                    return {
                      get() {
                        return e.reduce((e, t) => e[t], this);
                      },
                      set(r) {
                        e.reduce((e, i, a) => (a === t ? (e[i] = r) : e[i]), this);
                      }
                    };
                  },
                  zo = (e, t, r) =>
                    Object.keys(r)
                      .map((e) => [e, r[e]])
                      .filter((e) => {
                        let [, t] = e;
                        return !!t;
                      })
                      .map((e) => {
                        let [t, r] = e;
                        return [
                          t,
                          'function' == typeof r
                            ? { value: r, enumerable: !1 }
                            : 'string' == typeof r.reflect
                            ? Object.assign({}, r, Ho(r.reflect.split('.')))
                            : r
                        ];
                      })
                      .reduce(
                        (e, t) => {
                          let [r, i] = t;
                          return Object.defineProperty(e, r, Object.assign({ configurable: !0 }, i));
                        },
                        Object.assign(new e(), t)
                      ),
                  z = {
                    ImportMetaOutsideModule: {
                      message: 'import.meta may appear only with \'sourceType: "module"\'',
                      code: U.SourceTypeModuleError
                    },
                    ImportOutsideModule: {
                      message: "'import' and 'export' may appear only with 'sourceType: \"module\"'",
                      code: U.SourceTypeModuleError
                    }
                  },
                  V = {
                    ArrayPattern: 'array destructuring pattern',
                    AssignmentExpression: 'assignment expression',
                    AssignmentPattern: 'assignment expression',
                    ArrowFunctionExpression: 'arrow function expression',
                    ConditionalExpression: 'conditional expression',
                    CatchClause: 'catch clause',
                    ForOfStatement: 'for-of statement',
                    ForInStatement: 'for-in statement',
                    ForStatement: 'for-loop',
                    FormalParameters: 'function parameter list',
                    Identifier: 'identifier',
                    ImportSpecifier: 'import specifier',
                    ImportDefaultSpecifier: 'import default specifier',
                    ImportNamespaceSpecifier: 'import namespace specifier',
                    ObjectPattern: 'object destructuring pattern',
                    ParenthesizedExpression: 'parenthesized expression',
                    RestElement: 'rest element',
                    UpdateExpression: { true: 'prefix operation', false: 'postfix operation' },
                    VariableDeclarator: 'variable declaration',
                    YieldExpression: 'yield expression'
                  },
                  zt = (e) => {
                    let { type: t, prefix: r } = e;
                    return 'UpdateExpression' === t ? V.UpdateExpression[String(r)] : V[t];
                  },
                  K = new Set([
                    'ArrowFunctionExpression',
                    'AssignmentExpression',
                    'ConditionalExpression',
                    'YieldExpression'
                  ]),
                  W = ['toMessage'],
                  X = ['message'];
                function Qo(e) {
                  let { toMessage: t } = e,
                    r = ot(e, W);
                  return function s(e) {
                    let { loc: i, details: a } = e;
                    return zo(SyntaxError, Object.assign({}, r, { loc: i }), {
                      clone() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          t = e.loc || {};
                        return s({
                          loc: new j(
                            'line' in t ? t.line : this.loc.line,
                            'column' in t ? t.column : this.loc.column,
                            'index' in t ? t.index : this.loc.index
                          ),
                          details: Object.assign({}, this.details, e.details)
                        });
                      },
                      details: { value: a, enumerable: !1 },
                      message: {
                        get() {
                          return `${t(this.details)} (${this.loc.line}:${this.loc.column})`;
                        },
                        set(e) {
                          Object.defineProperty(this, 'message', { value: e });
                        }
                      },
                      pos: { reflect: 'loc.index', enumerable: !0 },
                      missingPlugin: 'missingPlugin' in a && { reflect: 'details.missingPlugin', enumerable: !0 }
                    });
                  };
                }
                function pe(e, t) {
                  if (Array.isArray(e)) return (t) => pe(t, e[0]);
                  let r = {};
                  for (let i of Object.keys(e)) {
                    let a = e[i],
                      l = 'string' == typeof a ? { message: () => a } : 'function' == typeof a ? { message: a } : a,
                      { message: f } = l,
                      y = ot(l, X),
                      g = 'string' == typeof f ? () => f : f;
                    r[i] = Qo(
                      Object.assign(
                        { code: U.SyntaxError, reasonCode: i, toMessage: g },
                        t ? { syntaxPlugin: t } : {},
                        y
                      )
                    );
                  }
                  return r;
                }
                var Q = Object.assign(
                    {},
                    pe(z),
                    pe({
                      AccessorIsGenerator: (e) => {
                        let { kind: t } = e;
                        return `A ${t}ter cannot be a generator.`;
                      },
                      ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
                      AsyncFunctionInSingleStatementContext:
                        'Async functions can only be declared at the top level or inside a block.',
                      AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
                      AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
                      AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
                      AwaitInUsingBinding: "'await' is not allowed to be used as a name in 'using' declarations.",
                      AwaitNotInAsyncContext:
                        "'await' is only allowed within async functions and at the top levels of modules.",
                      AwaitNotInAsyncFunction: "'await' is only allowed within async functions.",
                      BadGetterArity: "A 'get' accessor must not have any formal parameters.",
                      BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
                      BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
                      ConstructorClassField: "Classes may not have a field named 'constructor'.",
                      ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
                      ConstructorIsAccessor: 'Class constructor may not be an accessor.',
                      ConstructorIsAsync: "Constructor can't be an async function.",
                      ConstructorIsGenerator: "Constructor can't be a generator.",
                      DeclarationMissingInitializer: (e) => {
                        let { kind: t } = e;
                        return `Missing initializer in ${t} declaration.`;
                      },
                      DecoratorArgumentsOutsideParentheses:
                        "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
                      DecoratorBeforeExport:
                        "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
                      DecoratorsBeforeAfterExport:
                        "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
                      DecoratorConstructor:
                        "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
                      DecoratorExportClass:
                        "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
                      DecoratorSemicolon: 'Decorators must not be followed by a semicolon.',
                      DecoratorStaticBlock: "Decorators can't be used with a static block.",
                      DeletePrivateField: 'Deleting a private field is not allowed.',
                      DestructureNamedImport:
                        'ES2015 named imports do not destructure. Use another statement for destructuring after the import.',
                      DuplicateConstructor: 'Duplicate constructor in the same class.',
                      DuplicateDefaultExport: 'Only one default export allowed per module.',
                      DuplicateExport: (e) => {
                        let { exportName: t } = e;
                        return `\`${t}\` has already been exported. Exported identifiers must be unique.`;
                      },
                      DuplicateProto: 'Redefinition of __proto__ property.',
                      DuplicateRegExpFlags: 'Duplicate regular expression flag.',
                      ElementAfterRest: 'Rest element must be last element.',
                      EscapedCharNotAnIdentifier: 'Invalid Unicode escape.',
                      ExportBindingIsString: (e) => {
                        let { localName: t, exportName: r } = e;
                        return `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${t}' as '${r}' } from 'some-module'\`?`;
                      },
                      ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
                      ForInOfLoopInitializer: (e) => {
                        let { type: t } = e;
                        return `'${
                          'ForInStatement' === t ? 'for-in' : 'for-of'
                        }' loop variable declaration may not have an initializer.`;
                      },
                      ForInUsing: "For-in loop may not start with 'using' declaration.",
                      ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
                      ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
                      GeneratorInSingleStatementContext:
                        'Generators can only be declared at the top level or inside a block.',
                      IllegalBreakContinue: (e) => {
                        let { type: t } = e;
                        return `Unsyntactic ${'BreakStatement' === t ? 'break' : 'continue'}.`;
                      },
                      IllegalLanguageModeDirective:
                        "Illegal 'use strict' directive in function with non-simple parameter list.",
                      IllegalReturn: "'return' outside of function.",
                      ImportBindingIsString: (e) => {
                        let { importName: t } = e;
                        return `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${t}" as foo }\`?`;
                      },
                      ImportCallArgumentTrailingComma: 'Trailing comma is disallowed inside import(...) arguments.',
                      ImportCallArity: (e) => {
                        let { maxArgumentCount: t } = e;
                        return `\`import()\` requires exactly ${1 === t ? 'one argument' : 'one or two arguments'}.`;
                      },
                      ImportCallNotNewExpression: 'Cannot use new with import(...).',
                      ImportCallSpreadArgument: '`...` is not allowed in `import()`.',
                      ImportJSONBindingNotDefault: 'A JSON module can only be imported with `default`.',
                      ImportReflectionHasAssertion: '`import module x` cannot have assertions.',
                      ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.',
                      IncompatibleRegExpUVFlags:
                        "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
                      InvalidBigIntLiteral: 'Invalid BigIntLiteral.',
                      InvalidCodePoint: 'Code point out of bounds.',
                      InvalidCoverInitializedName: 'Invalid shorthand property initializer.',
                      InvalidDecimal: 'Invalid decimal.',
                      InvalidDigit: (e) => {
                        let { radix: t } = e;
                        return `Expected number in radix ${t}.`;
                      },
                      InvalidEscapeSequence: 'Bad character escape sequence.',
                      InvalidEscapeSequenceTemplate: 'Invalid escape sequence in template.',
                      InvalidEscapedReservedWord: (e) => {
                        let { reservedWord: t } = e;
                        return `Escape sequence in keyword ${t}.`;
                      },
                      InvalidIdentifier: (e) => {
                        let { identifierName: t } = e;
                        return `Invalid identifier ${t}.`;
                      },
                      InvalidLhs: (e) => {
                        let { ancestor: t } = e;
                        return `Invalid left-hand side in ${zt(t)}.`;
                      },
                      InvalidLhsBinding: (e) => {
                        let { ancestor: t } = e;
                        return `Binding invalid left-hand side in ${zt(t)}.`;
                      },
                      InvalidNumber: 'Invalid number.',
                      InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
                      InvalidOrUnexpectedToken: (e) => {
                        let { unexpected: t } = e;
                        return `Unexpected character '${t}'.`;
                      },
                      InvalidParenthesizedAssignment: 'Invalid parenthesized assignment pattern.',
                      InvalidPrivateFieldResolution: (e) => {
                        let { identifierName: t } = e;
                        return `Private name #${t} is not defined.`;
                      },
                      InvalidPropertyBindingPattern: 'Binding member expression.',
                      InvalidRecordProperty: 'Only properties and spread elements are allowed in record definitions.',
                      InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
                      LabelRedeclaration: (e) => {
                        let { labelName: t } = e;
                        return `Label '${t}' is already declared.`;
                      },
                      LetInLexicalBinding:
                        "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
                      LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
                      MalformedRegExpFlags: 'Invalid regular expression flag.',
                      MissingClassName: 'A class name is required.',
                      MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
                      MissingSemicolon: 'Missing semicolon.',
                      MissingPlugin: (e) => {
                        let { missingPlugin: t } = e;
                        return `This experimental syntax requires enabling the parser plugin: ${t
                          .map((e) => JSON.stringify(e))
                          .join(', ')}.`;
                      },
                      MissingOneOfPlugins: (e) => {
                        let { missingPlugin: t } = e;
                        return `This experimental syntax requires enabling one of the following parser plugin(s): ${t
                          .map((e) => JSON.stringify(e))
                          .join(', ')}.`;
                      },
                      MissingUnicodeEscape: 'Expecting Unicode escape sequence \\uXXXX.',
                      MixingCoalesceWithLogical:
                        'Nullish coalescing operator(??) requires parens when mixing with logical operators.',
                      ModuleAttributeDifferentFromType: 'The only accepted module attribute is `type`.',
                      ModuleAttributeInvalidValue: 'Only string literals are allowed as module attribute values.',
                      ModuleAttributesWithDuplicateKeys: (e) => {
                        let { key: t } = e;
                        return `Duplicate key "${t}" is not allowed in module attributes.`;
                      },
                      ModuleExportNameHasLoneSurrogate: (e) => {
                        let { surrogateCharCode: t } = e;
                        return `An export name cannot include a lone surrogate, found '\\u${t.toString(16)}'.`;
                      },
                      ModuleExportUndefined: (e) => {
                        let { localName: t } = e;
                        return `Export '${t}' is not defined.`;
                      },
                      MultipleDefaultsInSwitch: 'Multiple default clauses.',
                      NewlineAfterThrow: 'Illegal newline after throw.',
                      NoCatchOrFinally: 'Missing catch or finally clause.',
                      NumberIdentifier: 'Identifier directly after number.',
                      NumericSeparatorInEscapeSequence:
                        'Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.',
                      ObsoleteAwaitStar:
                        "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
                      OptionalChainingNoNew: 'Constructors in/after an Optional Chain are not allowed.',
                      OptionalChainingNoTemplate: 'Tagged Template Literals are not allowed in optionalChain.',
                      OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
                      ParamDupe: 'Argument name clash.',
                      PatternHasAccessor: "Object pattern can't contain getter or setter.",
                      PatternHasMethod: "Object pattern can't contain methods.",
                      PrivateInExpectedIn: (e) => {
                        let { identifierName: t } = e;
                        return `Private names are only allowed in property accesses (\`obj.#${t}\`) or in \`in\` expressions (\`#${t} in obj\`).`;
                      },
                      PrivateNameRedeclaration: (e) => {
                        let { identifierName: t } = e;
                        return `Duplicate private name #${t}.`;
                      },
                      RecordExpressionBarIncorrectEndSyntaxType:
                        "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                      RecordExpressionBarIncorrectStartSyntaxType:
                        "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                      RecordExpressionHashIncorrectStartSyntaxType:
                        "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
                      RecordNoProto: "'__proto__' is not allowed in Record expressions.",
                      RestTrailingComma: 'Unexpected trailing comma after rest element.',
                      SloppyFunction:
                        'In non-strict mode code, functions can only be declared at top level or inside a block.',
                      SloppyFunctionAnnexB:
                        'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.',
                      StaticPrototype: 'Classes may not have static property named prototype.',
                      SuperNotAllowed:
                        "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
                      SuperPrivateField: "Private fields can't be accessed on super.",
                      TrailingDecorator: 'Decorators must be attached to a class element.',
                      TupleExpressionBarIncorrectEndSyntaxType:
                        "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                      TupleExpressionBarIncorrectStartSyntaxType:
                        "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                      TupleExpressionHashIncorrectStartSyntaxType:
                        "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
                      UnexpectedArgumentPlaceholder: 'Unexpected argument placeholder.',
                      UnexpectedAwaitAfterPipelineBody:
                        'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
                      UnexpectedDigitAfterHash: 'Unexpected digit after hash token.',
                      UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
                      UnexpectedKeyword: (e) => {
                        let { keyword: t } = e;
                        return `Unexpected keyword '${t}'.`;
                      },
                      UnexpectedLeadingDecorator: 'Leading decorators must be attached to a class declaration.',
                      UnexpectedLexicalDeclaration: 'Lexical declaration cannot appear in a single-statement context.',
                      UnexpectedNewTarget: '`new.target` can only be used in functions or class properties.',
                      UnexpectedNumericSeparator: 'A numeric separator is only allowed between two digits.',
                      UnexpectedPrivateField: 'Unexpected private name.',
                      UnexpectedReservedWord: (e) => {
                        let { reservedWord: t } = e;
                        return `Unexpected reserved word '${t}'.`;
                      },
                      UnexpectedSuper: "'super' is only allowed in object methods and classes.",
                      UnexpectedToken: (e) => {
                        let { expected: t, unexpected: r } = e;
                        return `Unexpected token${r ? ` '${r}'.` : ''}${t ? `, expected "${t}"` : ''}`;
                      },
                      UnexpectedTokenUnaryExponentiation:
                        'Illegal expression. Wrap left hand side or entire exponentiation in parentheses.',
                      UnexpectedUsingDeclaration:
                        'Using declaration cannot appear in the top level when source type is `script`.',
                      UnsupportedBind: 'Binding should be performed on object property.',
                      UnsupportedDecoratorExport: 'A decorated export must export a class declaration.',
                      UnsupportedDefaultExport:
                        'Only expressions, functions or classes are allowed as the `default` export.',
                      UnsupportedImport: '`import` can only be used in `import()` or `import.meta`.',
                      UnsupportedMetaProperty: (e) => {
                        let { target: t, onlyValidPropertyName: r } = e;
                        return `The only valid meta property for ${t} is ${t}.${r}.`;
                      },
                      UnsupportedParameterDecorator: 'Decorators cannot be used to decorate parameters.',
                      UnsupportedPropertyDecorator: 'Decorators cannot be used to decorate object literal properties.',
                      UnsupportedSuper:
                        "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
                      UnterminatedComment: 'Unterminated comment.',
                      UnterminatedRegExp: 'Unterminated regular expression.',
                      UnterminatedString: 'Unterminated string constant.',
                      UnterminatedTemplate: 'Unterminated template.',
                      UsingDeclarationHasBindingPattern: 'Using declaration cannot have destructuring patterns.',
                      VarRedeclaration: (e) => {
                        let { identifierName: t } = e;
                        return `Identifier '${t}' has already been declared.`;
                      },
                      YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
                      YieldInParameter: 'Yield expression is not allowed in formal parameters.',
                      ZeroDigitNumericSeparator: 'Numeric separator can not be used after leading 0.'
                    }),
                    pe({
                      StrictDelete: 'Deleting local variable in strict mode.',
                      StrictEvalArguments: (e) => {
                        let { referenceName: t } = e;
                        return `Assigning to '${t}' in strict mode.`;
                      },
                      StrictEvalArgumentsBinding: (e) => {
                        let { bindingName: t } = e;
                        return `Binding '${t}' in strict mode.`;
                      },
                      StrictFunction:
                        'In strict mode code, functions can only be declared at top level or inside a block.',
                      StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
                      StrictOctalLiteral: 'Legacy octal literals are not allowed in strict mode.',
                      StrictWith: "'with' in strict mode."
                    }),
                    pe`pipelineOperator`({
                      PipeBodyIsTighter:
                        'Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.',
                      PipeTopicRequiresHackPipes:
                        'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
                      PipeTopicUnbound: 'Topic reference is unbound; it must be inside a pipe body.',
                      PipeTopicUnconfiguredToken: (e) => {
                        let { token: t } = e;
                        return `Invalid topic token ${t}. In order to use ${t} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${t}" }.`;
                      },
                      PipeTopicUnused:
                        'Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.',
                      PipeUnparenthesizedBody: (e) => {
                        let { type: t } = e;
                        return `Hack-style pipe body cannot be an unparenthesized ${zt({
                          type: t
                        })}; please wrap it in parentheses.`;
                      },
                      PipelineBodyNoArrow:
                        'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
                      PipelineBodySequenceExpression: 'Pipeline body may not be a comma-separated sequence expression.',
                      PipelineHeadSequenceExpression:
                        'Pipeline head should not be a comma-separated sequence expression.',
                      PipelineTopicUnused: 'Pipeline is in topic style but does not use topic reference.',
                      PrimaryTopicNotAllowed: 'Topic reference was used in a lexical context without topic binding.',
                      PrimaryTopicRequiresSmartPipeline:
                        'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
                    })
                  ),
                  { defineProperty: Z } = Object,
                  cr = (e, t) => Z(e, t, { enumerable: !1, value: e[t] });
                function ze(e) {
                  return e.loc.start && cr(e.loc.start, 'index'), e.loc.end && cr(e.loc.end, 'index'), e;
                }
                var ee =
                    '\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
                  et =
                    '‌‍\xb7̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿',
                  es = RegExp('[' + ee + ']'),
                  er = RegExp('[' + ee + et + ']');
                ee = et = null;
                var ei = [
                    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11,
                    29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2,
                    14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22,
                    11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4,
                    28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1,
                    79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3,
                    0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8,
                    46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1,
                    2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3,
                    7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0,
                    19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328,
                    18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582,
                    8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65,
                    1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395,
                    2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2,
                    3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2,
                    30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485,
                    27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3,
                    2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3,
                    3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761,
                    15, 7472, 3104, 541, 1507, 4938, 6, 4191
                  ],
                  ea = [
                    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81,
                    2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6,
                    1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3,
                    2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16,
                    9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6,
                    4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2,
                    1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7,
                    14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3,
                    22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14,
                    1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6,
                    9, 4759, 9, 787719, 239
                  ];
                function Kt(e, t) {
                  let r = 65536;
                  for (let i = 0, a = t.length; i < a && !((r += t[i]) > e); i += 2)
                    if ((r += t[i + 1]) >= e) return !0;
                  return !1;
                }
                function fe(e) {
                  return e < 65
                    ? 36 === e
                    : e <= 90 ||
                        (e < 97
                          ? 95 === e
                          : e <= 122 || (e <= 65535 ? e >= 170 && es.test(String.fromCharCode(e)) : Kt(e, ei)));
                }
                function De(e) {
                  return e < 48
                    ? 36 === e
                    : e < 58 ||
                        (!(e < 65) &&
                          (e <= 90 ||
                            (e < 97
                              ? 95 === e
                              : e <= 122 ||
                                (e <= 65535 ? e >= 170 && er.test(String.fromCharCode(e)) : Kt(e, ei) || Kt(e, ea)))));
                }
                var eo = {
                    keyword: [
                      'break',
                      'case',
                      'catch',
                      'continue',
                      'debugger',
                      'default',
                      'do',
                      'else',
                      'finally',
                      'for',
                      'function',
                      'if',
                      'return',
                      'switch',
                      'throw',
                      'try',
                      'var',
                      'const',
                      'while',
                      'with',
                      'new',
                      'this',
                      'super',
                      'class',
                      'extends',
                      'export',
                      'import',
                      'null',
                      'true',
                      'false',
                      'in',
                      'instanceof',
                      'typeof',
                      'void',
                      'delete'
                    ],
                    strict: [
                      'implements',
                      'interface',
                      'let',
                      'package',
                      'private',
                      'protected',
                      'public',
                      'static',
                      'yield'
                    ],
                    strictBind: ['eval', 'arguments']
                  },
                  eh = new Set(eo.keyword),
                  el = new Set(eo.strict),
                  ep = new Set(eo.strictBind);
                function dr(e, t) {
                  return (t && 'await' === e) || 'enum' === e;
                }
                function mr(e, t) {
                  return dr(e, t) || el.has(e);
                }
                function xr(e, t) {
                  return mr(e, t) || ep.has(e);
                }
                function ol(e) {
                  return eh.has(e);
                }
                function ll(e, t, r) {
                  return 64 === e && 64 === t && fe(r);
                }
                var ec = new Set([
                  'break',
                  'case',
                  'catch',
                  'continue',
                  'debugger',
                  'default',
                  'do',
                  'else',
                  'finally',
                  'for',
                  'function',
                  'if',
                  'return',
                  'switch',
                  'throw',
                  'try',
                  'var',
                  'const',
                  'while',
                  'with',
                  'new',
                  'this',
                  'super',
                  'class',
                  'extends',
                  'export',
                  'import',
                  'null',
                  'true',
                  'false',
                  'in',
                  'instanceof',
                  'typeof',
                  'void',
                  'delete',
                  'implements',
                  'interface',
                  'let',
                  'package',
                  'private',
                  'protected',
                  'public',
                  'static',
                  'yield',
                  'eval',
                  'arguments',
                  'enum',
                  'await'
                ]);
                function ul(e) {
                  return ec.has(e);
                }
                var eu = class {
                    constructor(e) {
                      (this.var = new Set()),
                        (this.lexical = new Set()),
                        (this.functions = new Set()),
                        (this.flags = e);
                    }
                  },
                  ed = class {
                    constructor(e, t) {
                      (this.parser = void 0),
                        (this.scopeStack = []),
                        (this.inModule = void 0),
                        (this.undefinedExports = new Map()),
                        (this.parser = e),
                        (this.inModule = t);
                    }
                    get inTopLevel() {
                      return (1 & this.currentScope().flags) > 0;
                    }
                    get inFunction() {
                      return (2 & this.currentVarScopeFlags()) > 0;
                    }
                    get allowSuper() {
                      return (16 & this.currentThisScopeFlags()) > 0;
                    }
                    get allowDirectSuper() {
                      return (32 & this.currentThisScopeFlags()) > 0;
                    }
                    get inClass() {
                      return (64 & this.currentThisScopeFlags()) > 0;
                    }
                    get inClassAndNotInNonArrowFunction() {
                      let e = this.currentThisScopeFlags();
                      return (64 & e) > 0 && (2 & e) == 0;
                    }
                    get inStaticBlock() {
                      for (let e = this.scopeStack.length - 1; ; e--) {
                        let { flags: t } = this.scopeStack[e];
                        if (128 & t) return !0;
                        if (451 & t) return !1;
                      }
                    }
                    get inNonArrowFunction() {
                      return (2 & this.currentThisScopeFlags()) > 0;
                    }
                    get treatFunctionsAsVar() {
                      return this.treatFunctionsAsVarInScope(this.currentScope());
                    }
                    createScope(e) {
                      return new eu(e);
                    }
                    enter(e) {
                      this.scopeStack.push(this.createScope(e));
                    }
                    exit() {
                      return this.scopeStack.pop().flags;
                    }
                    treatFunctionsAsVarInScope(e) {
                      return !!(130 & e.flags || (!this.parser.inModule && 1 & e.flags));
                    }
                    declareName(e, t, r) {
                      let i = this.currentScope();
                      if (8 & t || 16 & t)
                        this.checkRedeclarationInScope(i, e, t, r),
                          16 & t ? i.functions.add(e) : i.lexical.add(e),
                          8 & t && this.maybeExportDefined(i, e);
                      else if (4 & t)
                        for (
                          let a = this.scopeStack.length - 1;
                          a >= 0 &&
                          ((i = this.scopeStack[a]),
                          this.checkRedeclarationInScope(i, e, t, r),
                          i.var.add(e),
                          this.maybeExportDefined(i, e),
                          !(387 & i.flags));
                          --a
                        );
                      this.parser.inModule && 1 & i.flags && this.undefinedExports.delete(e);
                    }
                    maybeExportDefined(e, t) {
                      this.parser.inModule && 1 & e.flags && this.undefinedExports.delete(t);
                    }
                    checkRedeclarationInScope(e, t, r, i) {
                      this.isRedeclaredInScope(e, t, r) &&
                        this.parser.raise(Q.VarRedeclaration, { at: i, identifierName: t });
                    }
                    isRedeclaredInScope(e, t, r) {
                      return (
                        !!(1 & r) &&
                        (8 & r
                          ? e.lexical.has(t) || e.functions.has(t) || e.var.has(t)
                          : 16 & r
                          ? e.lexical.has(t) || (!this.treatFunctionsAsVarInScope(e) && e.var.has(t))
                          : (e.lexical.has(t) && !(8 & e.flags && e.lexical.values().next().value === t)) ||
                            (!this.treatFunctionsAsVarInScope(e) && e.functions.has(t)))
                      );
                    }
                    checkLocalExport(e) {
                      let { name: t } = e,
                        r = this.scopeStack[0];
                      r.lexical.has(t) ||
                        r.var.has(t) ||
                        r.functions.has(t) ||
                        this.undefinedExports.set(t, e.loc.start);
                    }
                    currentScope() {
                      return this.scopeStack[this.scopeStack.length - 1];
                    }
                    currentVarScopeFlags() {
                      for (let e = this.scopeStack.length - 1; ; e--) {
                        let { flags: t } = this.scopeStack[e];
                        if (387 & t) return t;
                      }
                    }
                    currentThisScopeFlags() {
                      for (let e = this.scopeStack.length - 1; ; e--) {
                        let { flags: t } = this.scopeStack[e];
                        if (451 & t && !(4 & t)) return t;
                      }
                    }
                  },
                  em = class extends eu {
                    constructor() {
                      super(...arguments), (this.declareFunctions = new Set());
                    }
                  },
                  ef = class extends ed {
                    createScope(e) {
                      return new em(e);
                    }
                    declareName(e, t, r) {
                      let i = this.currentScope();
                      if (2048 & t) {
                        this.checkRedeclarationInScope(i, e, t, r),
                          this.maybeExportDefined(i, e),
                          i.declareFunctions.add(e);
                        return;
                      }
                      super.declareName(e, t, r);
                    }
                    isRedeclaredInScope(e, t, r) {
                      return (
                        !!super.isRedeclaredInScope(e, t, r) ||
                        (!!(2048 & r) && !e.declareFunctions.has(t) && (e.lexical.has(t) || e.functions.has(t)))
                      );
                    }
                    checkLocalExport(e) {
                      this.scopeStack[0].declareFunctions.has(e.name) || super.checkLocalExport(e);
                    }
                  },
                  ey = class {
                    constructor() {
                      (this.sawUnambiguousESM = !1), (this.ambiguousScriptDifferentAst = !1);
                    }
                    hasPlugin(e) {
                      if ('string' == typeof e) return this.plugins.has(e);
                      {
                        let [t, r] = e;
                        if (!this.hasPlugin(t)) return !1;
                        let i = this.plugins.get(t);
                        for (let e of Object.keys(r)) if ((null == i ? void 0 : i[e]) !== r[e]) return !1;
                        return !0;
                      }
                    }
                    getPluginOption(e, t) {
                      var r;
                      return null == (r = this.plugins.get(e)) ? void 0 : r[t];
                    }
                  };
                function wr(e, t) {
                  void 0 === e.trailingComments ? (e.trailingComments = t) : e.trailingComments.unshift(...t);
                }
                function bl(e, t) {
                  void 0 === e.leadingComments ? (e.leadingComments = t) : e.leadingComments.unshift(...t);
                }
                function Ke(e, t) {
                  void 0 === e.innerComments ? (e.innerComments = t) : e.innerComments.unshift(...t);
                }
                function We(e, t, r) {
                  let i = null,
                    a = t.length;
                  for (; null === i && a > 0; ) i = t[--a];
                  null === i || i.start > r.start ? Ke(e, r.comments) : wr(i, r.comments);
                }
                var ex = class extends ey {
                    addComment(e) {
                      this.filename && (e.loc.filename = this.filename), this.state.comments.push(e);
                    }
                    processComment(e) {
                      let { commentStack: t } = this.state,
                        r = t.length;
                      if (0 === r) return;
                      let i = r - 1,
                        a = t[i];
                      a.start === e.end && ((a.leadingNode = e), i--);
                      let { start: l } = e;
                      for (; i >= 0; i--) {
                        let r = t[i],
                          a = r.end;
                        if (a > l) (r.containingNode = e), this.finalizeComment(r), t.splice(i, 1);
                        else {
                          a === l && (r.trailingNode = e);
                          break;
                        }
                      }
                    }
                    finalizeComment(e) {
                      let { comments: t } = e;
                      if (null !== e.leadingNode || null !== e.trailingNode)
                        null !== e.leadingNode && wr(e.leadingNode, t),
                          null !== e.trailingNode && bl(e.trailingNode, t);
                      else {
                        let { containingNode: r, start: i } = e;
                        if (44 === this.input.charCodeAt(i - 1))
                          switch (r.type) {
                            case 'ObjectExpression':
                            case 'ObjectPattern':
                            case 'RecordExpression':
                              We(r, r.properties, e);
                              break;
                            case 'CallExpression':
                            case 'OptionalCallExpression':
                              We(r, r.arguments, e);
                              break;
                            case 'FunctionDeclaration':
                            case 'FunctionExpression':
                            case 'ArrowFunctionExpression':
                            case 'ObjectMethod':
                            case 'ClassMethod':
                            case 'ClassPrivateMethod':
                              We(r, r.params, e);
                              break;
                            case 'ArrayExpression':
                            case 'ArrayPattern':
                            case 'TupleExpression':
                              We(r, r.elements, e);
                              break;
                            case 'ExportNamedDeclaration':
                            case 'ImportDeclaration':
                              We(r, r.specifiers, e);
                              break;
                            default:
                              Ke(r, t);
                          }
                        else Ke(r, t);
                      }
                    }
                    finalizeRemainingComments() {
                      let { commentStack: e } = this.state;
                      for (let t = e.length - 1; t >= 0; t--) this.finalizeComment(e[t]);
                      this.state.commentStack = [];
                    }
                    resetPreviousNodeTrailingComments(e) {
                      let { commentStack: t } = this.state,
                        { length: r } = t;
                      if (0 === r) return;
                      let i = t[r - 1];
                      i.leadingNode === e && (i.leadingNode = null);
                    }
                    takeSurroundingComments(e, t, r) {
                      let { commentStack: i } = this.state,
                        a = i.length;
                      if (0 === a) return;
                      let l = a - 1;
                      for (; l >= 0; l--) {
                        let a = i[l],
                          f = a.end;
                        if (a.start === r) a.leadingNode = e;
                        else if (f === t) a.trailingNode = e;
                        else if (f < t) break;
                      }
                    }
                  },
                  eg = /\r\n?|[\n\u2028\u2029]/,
                  eP = RegExp(eg.source, 'g');
                function Ge(e) {
                  switch (e) {
                    case 10:
                    case 13:
                    case 8232:
                    case 8233:
                      return !0;
                    default:
                      return !1;
                  }
                }
                var eb = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                  eT = RegExp(
                    '(?=(' +
                      /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y.source +
                      '))\\1' +
                      /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source,
                    'y'
                  );
                function Il(e) {
                  switch (e) {
                    case 9:
                    case 11:
                    case 12:
                    case 32:
                    case 160:
                    case 5760:
                    case 8192:
                    case 8193:
                    case 8194:
                    case 8195:
                    case 8196:
                    case 8197:
                    case 8198:
                    case 8199:
                    case 8200:
                    case 8201:
                    case 8202:
                    case 8239:
                    case 8287:
                    case 12288:
                    case 65279:
                      return !0;
                    default:
                      return !1;
                  }
                }
                var eA = class {
                    constructor() {
                      (this.strict = void 0),
                        (this.curLine = void 0),
                        (this.lineStart = void 0),
                        (this.startLoc = void 0),
                        (this.endLoc = void 0),
                        (this.errors = []),
                        (this.potentialArrowAt = -1),
                        (this.noArrowAt = []),
                        (this.noArrowParamsConversionAt = []),
                        (this.maybeInArrowParameters = !1),
                        (this.inType = !1),
                        (this.noAnonFunctionType = !1),
                        (this.hasFlowComment = !1),
                        (this.isAmbientContext = !1),
                        (this.inAbstractClass = !1),
                        (this.inDisallowConditionalTypesContext = !1),
                        (this.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null }),
                        (this.soloAwait = !1),
                        (this.inFSharpPipelineDirectBody = !1),
                        (this.labels = []),
                        (this.comments = []),
                        (this.commentStack = []),
                        (this.pos = 0),
                        (this.type = 137),
                        (this.value = null),
                        (this.start = 0),
                        (this.end = 0),
                        (this.lastTokEndLoc = null),
                        (this.lastTokStartLoc = null),
                        (this.lastTokStart = 0),
                        (this.context = [i.brace]),
                        (this.canStartJSXElement = !0),
                        (this.containsEsc = !1),
                        (this.firstInvalidTemplateEscapePos = null),
                        (this.strictErrors = new Map()),
                        (this.tokensLength = 0);
                    }
                    init(e) {
                      let { strictMode: t, sourceType: r, startLine: i, startColumn: a } = e;
                      (this.strict = !1 !== t && (!0 === t || 'module' === r)),
                        (this.curLine = i),
                        (this.lineStart = -a),
                        (this.startLoc = this.endLoc = new j(i, a, 0));
                    }
                    curPosition() {
                      return new j(this.curLine, this.pos - this.lineStart, this.pos);
                    }
                    clone(e) {
                      let t = new eA(),
                        r = Object.keys(this);
                      for (let i = 0, a = r.length; i < a; i++) {
                        let a = r[i],
                          l = this[a];
                        !e && Array.isArray(l) && (l = l.slice()), (t[a] = l);
                      }
                      return t;
                    }
                  },
                  eE = { decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]), hex: new Set([46, 88, 95, 120]) },
                  eS = {
                    bin: (e) => 48 === e || 49 === e,
                    oct: (e) => e >= 48 && e <= 55,
                    dec: (e) => e >= 48 && e <= 57,
                    hex: (e) => (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102)
                  };
                function Dr(e, t, r, i, a, l) {
                  let f = r,
                    y = i,
                    g = a,
                    T = '',
                    E = null,
                    C = r,
                    { length: I } = t;
                  for (;;) {
                    if (r >= I) {
                      l.unterminated(f, y, g), (T += t.slice(C, r));
                      break;
                    }
                    let M = t.charCodeAt(r);
                    if (kl(e, M, t, r)) {
                      T += t.slice(C, r);
                      break;
                    }
                    if (92 === M) {
                      T += t.slice(C, r);
                      let f = Dl(t, r, i, a, 'template' === e, l);
                      null !== f.ch || E ? (T += f.ch) : (E = { pos: r, lineStart: i, curLine: a }),
                        ({ pos: r, lineStart: i, curLine: a } = f),
                        (C = r);
                    } else
                      8232 === M || 8233 === M
                        ? (++r, ++a, (i = r))
                        : 10 === M || 13 === M
                        ? 'template' === e
                          ? ((T +=
                              t.slice(C, r) +
                              `
`),
                            ++r,
                            13 === M && 10 === t.charCodeAt(r) && ++r,
                            ++a,
                            (C = i = r))
                          : l.unterminated(f, y, g)
                        : ++r;
                  }
                  return { pos: r, str: T, firstInvalidLoc: E, lineStart: i, curLine: a, containsInvalid: !!E };
                }
                function kl(e, t, r, i) {
                  return 'template' === e
                    ? 96 === t || (36 === t && 123 === r.charCodeAt(i + 1))
                    : t === ('double' === e ? 34 : 39);
                }
                function Dl(e, t, r, i, a, l) {
                  let f = !a;
                  t++;
                  let o = (e) => ({ pos: t, ch: e, lineStart: r, curLine: i }),
                    y = e.charCodeAt(t++);
                  switch (y) {
                    case 110:
                      return o(`
`);
                    case 114:
                      return o('\r');
                    case 120: {
                      let a;
                      return (
                        ({ code: a, pos: t } = os(e, t, r, i, 2, !1, f, l)),
                        o(null === a ? null : String.fromCharCode(a))
                      );
                    }
                    case 117: {
                      let a;
                      return (
                        ({ code: a, pos: t } = Lr(e, t, r, i, f, l)), o(null === a ? null : String.fromCodePoint(a))
                      );
                    }
                    case 116:
                      return o('	');
                    case 98:
                      return o('\b');
                    case 118:
                      return o('\v');
                    case 102:
                      return o('\f');
                    case 13:
                      10 === e.charCodeAt(t) && ++t;
                    case 10:
                      (r = t), ++i;
                    case 8232:
                    case 8233:
                      return o('');
                    case 56:
                    case 57:
                      if (a) return o(null);
                      l.strictNumericEscape(t - 1, r, i);
                    default:
                      if (y >= 48 && y <= 55) {
                        let f = t - 1,
                          y = e.slice(f, t + 2).match(/^[0-7]+/)[0],
                          g = parseInt(y, 8);
                        g > 255 && (g = parseInt((y = y.slice(0, -1)), 8)), (t += y.length - 1);
                        let T = e.charCodeAt(t);
                        if ('0' !== y || 56 === T || 57 === T) {
                          if (a) return o(null);
                          l.strictNumericEscape(f, r, i);
                        }
                        return o(String.fromCharCode(g));
                      }
                      return o(String.fromCharCode(y));
                  }
                }
                function os(e, t, r, i, a, l, f, y) {
                  let g = t,
                    T;
                  return (
                    ({ n: T, pos: t } = Fr(e, t, r, i, 16, a, l, !1, y, !f)),
                    null === T && (f ? y.invalidEscapeSequence(g, r, i) : (t = g - 1)),
                    { code: T, pos: t }
                  );
                }
                function Fr(e, t, r, i, a, l, f, y, g, T) {
                  let E = t,
                    C = 16 === a ? eE.hex : eE.decBinOct,
                    I = 16 === a ? eS.hex : 10 === a ? eS.dec : 8 === a ? eS.oct : eS.bin,
                    M = !1,
                    D = 0;
                  for (let E = 0, j = null == l ? 1 / 0 : l; E < j; ++E) {
                    let l = e.charCodeAt(t),
                      E;
                    if (95 === l && 'bail' !== y) {
                      let a = e.charCodeAt(t - 1),
                        l = e.charCodeAt(t + 1);
                      if (y) {
                        if (Number.isNaN(l) || !I(l) || C.has(a) || C.has(l)) {
                          if (T) return { n: null, pos: t };
                          g.unexpectedNumericSeparator(t, r, i);
                        }
                      } else {
                        if (T) return { n: null, pos: t };
                        g.numericSeparatorInEscapeSequence(t, r, i);
                      }
                      ++t;
                      continue;
                    }
                    if (
                      (E = l >= 97 ? l - 97 + 10 : l >= 65 ? l - 65 + 10 : l >= 48 && l <= 57 ? l - 48 : 1 / 0) >= a
                    ) {
                      if (E <= 9 && T) return { n: null, pos: t };
                      if (E <= 9 && g.invalidDigit(t, r, i, a)) E = 0;
                      else if (f) (E = 0), (M = !0);
                      else break;
                    }
                    ++t, (D = D * a + E);
                  }
                  return t === E || (null != l && t - E !== l) || M ? { n: null, pos: t } : { n: D, pos: t };
                }
                function Lr(e, t, r, i, a, l) {
                  let f;
                  if (123 === e.charCodeAt(t)) {
                    if (
                      (++t,
                      ({ code: f, pos: t } = os(e, t, r, i, e.indexOf('}', t) - t, !0, a, l)),
                      ++t,
                      null !== f && f > 1114111)
                    ) {
                      if (!a) return { code: null, pos: t };
                      l.invalidCodePoint(t, r, i);
                    }
                  } else ({ code: f, pos: t } = os(e, t, r, i, 4, !1, a, l));
                  return { code: f, pos: t };
                }
                var ew = ['at'],
                  ev = ['at'];
                function Je(e, t, r) {
                  return new j(r, e - t, e);
                }
                var eC = new Set([103, 109, 115, 105, 121, 117, 100, 118]),
                  eN = class {
                    constructor(e) {
                      (this.type = e.type),
                        (this.value = e.value),
                        (this.start = e.start),
                        (this.end = e.end),
                        (this.loc = new R(e.startLoc, e.endLoc));
                    }
                  },
                  eI = class extends ex {
                    constructor(e, t) {
                      super(),
                        (this.isLookahead = void 0),
                        (this.tokens = []),
                        (this.errorHandlers_readInt = {
                          invalidDigit: (e, t, r, i) =>
                            !!this.options.errorRecovery &&
                            (this.raise(Q.InvalidDigit, { at: Je(e, t, r), radix: i }), !0),
                          numericSeparatorInEscapeSequence: this.errorBuilder(Q.NumericSeparatorInEscapeSequence),
                          unexpectedNumericSeparator: this.errorBuilder(Q.UnexpectedNumericSeparator)
                        }),
                        (this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
                          invalidEscapeSequence: this.errorBuilder(Q.InvalidEscapeSequence),
                          invalidCodePoint: this.errorBuilder(Q.InvalidCodePoint)
                        })),
                        (this.errorHandlers_readStringContents_string = Object.assign(
                          {},
                          this.errorHandlers_readCodePoint,
                          {
                            strictNumericEscape: (e, t, r) => {
                              this.recordStrictModeErrors(Q.StrictNumericEscape, { at: Je(e, t, r) });
                            },
                            unterminated: (e, t, r) => {
                              throw this.raise(Q.UnterminatedString, { at: Je(e - 1, t, r) });
                            }
                          }
                        )),
                        (this.errorHandlers_readStringContents_template = Object.assign(
                          {},
                          this.errorHandlers_readCodePoint,
                          {
                            strictNumericEscape: this.errorBuilder(Q.StrictNumericEscape),
                            unterminated: (e, t, r) => {
                              throw this.raise(Q.UnterminatedTemplate, { at: Je(e, t, r) });
                            }
                          }
                        )),
                        (this.state = new eA()),
                        this.state.init(e),
                        (this.input = t),
                        (this.length = t.length),
                        (this.isLookahead = !1);
                    }
                    pushToken(e) {
                      (this.tokens.length = this.state.tokensLength), this.tokens.push(e), ++this.state.tokensLength;
                    }
                    next() {
                      this.checkKeywordEscapes(),
                        this.options.tokens && this.pushToken(new eN(this.state)),
                        (this.state.lastTokStart = this.state.start),
                        (this.state.lastTokEndLoc = this.state.endLoc),
                        (this.state.lastTokStartLoc = this.state.startLoc),
                        this.nextToken();
                    }
                    eat(e) {
                      return !!this.match(e) && (this.next(), !0);
                    }
                    match(e) {
                      return this.state.type === e;
                    }
                    createLookaheadState(e) {
                      return {
                        pos: e.pos,
                        value: null,
                        type: e.type,
                        start: e.start,
                        end: e.end,
                        context: [this.curContext()],
                        inType: e.inType,
                        startLoc: e.startLoc,
                        lastTokEndLoc: e.lastTokEndLoc,
                        curLine: e.curLine,
                        lineStart: e.lineStart,
                        curPosition: e.curPosition
                      };
                    }
                    lookahead() {
                      let e = this.state;
                      (this.state = this.createLookaheadState(e)),
                        (this.isLookahead = !0),
                        this.nextToken(),
                        (this.isLookahead = !1);
                      let t = this.state;
                      return (this.state = e), t;
                    }
                    nextTokenStart() {
                      return this.nextTokenStartSince(this.state.pos);
                    }
                    nextTokenStartSince(e) {
                      return (eb.lastIndex = e), eb.test(this.input) ? eb.lastIndex : e;
                    }
                    lookaheadCharCode() {
                      return this.input.charCodeAt(this.nextTokenStart());
                    }
                    codePointAtPos(e) {
                      let t = this.input.charCodeAt(e);
                      if ((64512 & t) == 55296 && ++e < this.input.length) {
                        let r = this.input.charCodeAt(e);
                        (64512 & r) == 56320 && (t = 65536 + ((1023 & t) << 10) + (1023 & r));
                      }
                      return t;
                    }
                    setStrict(e) {
                      (this.state.strict = e),
                        e &&
                          (this.state.strictErrors.forEach((e) => {
                            let [t, r] = e;
                            return this.raise(t, { at: r });
                          }),
                          this.state.strictErrors.clear());
                    }
                    curContext() {
                      return this.state.context[this.state.context.length - 1];
                    }
                    nextToken() {
                      if (
                        (this.skipSpace(),
                        (this.state.start = this.state.pos),
                        this.isLookahead || (this.state.startLoc = this.state.curPosition()),
                        this.state.pos >= this.length)
                      ) {
                        this.finishToken(137);
                        return;
                      }
                      this.getTokenFromCode(this.codePointAtPos(this.state.pos));
                    }
                    skipBlockComment(e) {
                      let t;
                      this.isLookahead || (t = this.state.curPosition());
                      let r = this.state.pos,
                        i = this.input.indexOf(e, r + 2);
                      if (-1 === i) throw this.raise(Q.UnterminatedComment, { at: this.state.curPosition() });
                      for (
                        this.state.pos = i + e.length, eP.lastIndex = r + 2;
                        eP.test(this.input) && eP.lastIndex <= i;

                      )
                        ++this.state.curLine, (this.state.lineStart = eP.lastIndex);
                      if (this.isLookahead) return;
                      let a = {
                        type: 'CommentBlock',
                        value: this.input.slice(r + 2, i),
                        start: r,
                        end: i + e.length,
                        loc: new R(t, this.state.curPosition())
                      };
                      return this.options.tokens && this.pushToken(a), a;
                    }
                    skipLineComment(e) {
                      let t = this.state.pos,
                        r;
                      this.isLookahead || (r = this.state.curPosition());
                      let i = this.input.charCodeAt((this.state.pos += e));
                      if (this.state.pos < this.length)
                        for (; !Ge(i) && ++this.state.pos < this.length; ) i = this.input.charCodeAt(this.state.pos);
                      if (this.isLookahead) return;
                      let a = this.state.pos,
                        l = {
                          type: 'CommentLine',
                          value: this.input.slice(t + e, a),
                          start: t,
                          end: a,
                          loc: new R(r, this.state.curPosition())
                        };
                      return this.options.tokens && this.pushToken(l), l;
                    }
                    skipSpace() {
                      let e = this.state.pos,
                        t = [];
                      e: for (; this.state.pos < this.length; ) {
                        let r = this.input.charCodeAt(this.state.pos);
                        switch (r) {
                          case 32:
                          case 160:
                          case 9:
                            ++this.state.pos;
                            break;
                          case 13:
                            10 === this.input.charCodeAt(this.state.pos + 1) && ++this.state.pos;
                          case 10:
                          case 8232:
                          case 8233:
                            ++this.state.pos, ++this.state.curLine, (this.state.lineStart = this.state.pos);
                            break;
                          case 47:
                            switch (this.input.charCodeAt(this.state.pos + 1)) {
                              case 42: {
                                let e = this.skipBlockComment('*/');
                                void 0 !== e && (this.addComment(e), this.options.attachComment && t.push(e));
                                break;
                              }
                              case 47: {
                                let e = this.skipLineComment(2);
                                void 0 !== e && (this.addComment(e), this.options.attachComment && t.push(e));
                                break;
                              }
                              default:
                                break e;
                            }
                            break;
                          default:
                            if (Il(r)) ++this.state.pos;
                            else if (45 === r && !this.inModule && this.options.annexB) {
                              let r = this.state.pos;
                              if (
                                45 === this.input.charCodeAt(r + 1) &&
                                62 === this.input.charCodeAt(r + 2) &&
                                (0 === e || this.state.lineStart > e)
                              ) {
                                let e = this.skipLineComment(3);
                                void 0 !== e && (this.addComment(e), this.options.attachComment && t.push(e));
                              } else break e;
                            } else if (60 === r && !this.inModule && this.options.annexB) {
                              let e = this.state.pos;
                              if (
                                33 === this.input.charCodeAt(e + 1) &&
                                45 === this.input.charCodeAt(e + 2) &&
                                45 === this.input.charCodeAt(e + 3)
                              ) {
                                let e = this.skipLineComment(4);
                                void 0 !== e && (this.addComment(e), this.options.attachComment && t.push(e));
                              } else break e;
                            } else break e;
                        }
                      }
                      if (t.length > 0) {
                        let r = this.state.pos;
                        this.state.commentStack.push({
                          start: e,
                          end: r,
                          comments: t,
                          leadingNode: null,
                          trailingNode: null,
                          containingNode: null
                        });
                      }
                    }
                    finishToken(e, t) {
                      (this.state.end = this.state.pos), (this.state.endLoc = this.state.curPosition());
                      let r = this.state.type;
                      (this.state.type = e), (this.state.value = t), this.isLookahead || this.updateContext(r);
                    }
                    replaceToken(e) {
                      (this.state.type = e), this.updateContext();
                    }
                    readToken_numberSign() {
                      if (0 === this.state.pos && this.readToken_interpreter()) return;
                      let e = this.state.pos + 1,
                        t = this.codePointAtPos(e);
                      if (t >= 48 && t <= 57)
                        throw this.raise(Q.UnexpectedDigitAfterHash, { at: this.state.curPosition() });
                      if (123 === t || (91 === t && this.hasPlugin('recordAndTuple'))) {
                        if (
                          (this.expectPlugin('recordAndTuple'),
                          'bar' === this.getPluginOption('recordAndTuple', 'syntaxType'))
                        )
                          throw this.raise(
                            123 === t
                              ? Q.RecordExpressionHashIncorrectStartSyntaxType
                              : Q.TupleExpressionHashIncorrectStartSyntaxType,
                            { at: this.state.curPosition() }
                          );
                        (this.state.pos += 2), 123 === t ? this.finishToken(7) : this.finishToken(1);
                      } else
                        fe(t)
                          ? (++this.state.pos, this.finishToken(136, this.readWord1(t)))
                          : 92 === t
                          ? (++this.state.pos, this.finishToken(136, this.readWord1()))
                          : this.finishOp(27, 1);
                    }
                    readToken_dot() {
                      let e = this.input.charCodeAt(this.state.pos + 1);
                      if (e >= 48 && e <= 57) {
                        this.readNumber(!0);
                        return;
                      }
                      46 === e && 46 === this.input.charCodeAt(this.state.pos + 2)
                        ? ((this.state.pos += 3), this.finishToken(21))
                        : (++this.state.pos, this.finishToken(16));
                    }
                    readToken_slash() {
                      61 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(31, 2) : this.finishOp(56, 1);
                    }
                    readToken_interpreter() {
                      if (0 !== this.state.pos || this.length < 2) return !1;
                      let e = this.input.charCodeAt(this.state.pos + 1);
                      if (33 !== e) return !1;
                      let t = this.state.pos;
                      for (this.state.pos += 1; !Ge(e) && ++this.state.pos < this.length; )
                        e = this.input.charCodeAt(this.state.pos);
                      let r = this.input.slice(t + 2, this.state.pos);
                      return this.finishToken(28, r), !0;
                    }
                    readToken_mult_modulo(e) {
                      let t = 42 === e ? 55 : 54,
                        r = 1,
                        i = this.input.charCodeAt(this.state.pos + 1);
                      42 === e && 42 === i && (r++, (i = this.input.charCodeAt(this.state.pos + 2)), (t = 57)),
                        61 !== i || this.state.inType || (r++, (t = 37 === e ? 33 : 30)),
                        this.finishOp(t, r);
                    }
                    readToken_pipe_amp(e) {
                      let t = this.input.charCodeAt(this.state.pos + 1);
                      if (t === e) {
                        61 === this.input.charCodeAt(this.state.pos + 2)
                          ? this.finishOp(30, 3)
                          : this.finishOp(124 === e ? 41 : 42, 2);
                        return;
                      }
                      if (124 === e) {
                        if (62 === t) {
                          this.finishOp(39, 2);
                          return;
                        }
                        if (this.hasPlugin('recordAndTuple') && 125 === t) {
                          if ('bar' !== this.getPluginOption('recordAndTuple', 'syntaxType'))
                            throw this.raise(Q.RecordExpressionBarIncorrectEndSyntaxType, {
                              at: this.state.curPosition()
                            });
                          (this.state.pos += 2), this.finishToken(9);
                          return;
                        }
                        if (this.hasPlugin('recordAndTuple') && 93 === t) {
                          if ('bar' !== this.getPluginOption('recordAndTuple', 'syntaxType'))
                            throw this.raise(Q.TupleExpressionBarIncorrectEndSyntaxType, {
                              at: this.state.curPosition()
                            });
                          (this.state.pos += 2), this.finishToken(4);
                          return;
                        }
                      }
                      if (61 === t) {
                        this.finishOp(30, 2);
                        return;
                      }
                      this.finishOp(124 === e ? 43 : 45, 1);
                    }
                    readToken_caret() {
                      let e = this.input.charCodeAt(this.state.pos + 1);
                      61 !== e || this.state.inType
                        ? 94 === e && this.hasPlugin(['pipelineOperator', { proposal: 'hack', topicToken: '^^' }])
                          ? (this.finishOp(37, 2), 94 === this.input.codePointAt(this.state.pos) && this.unexpected())
                          : this.finishOp(44, 1)
                        : this.finishOp(32, 2);
                    }
                    readToken_atSign() {
                      64 === this.input.charCodeAt(this.state.pos + 1) &&
                      this.hasPlugin(['pipelineOperator', { proposal: 'hack', topicToken: '@@' }])
                        ? this.finishOp(38, 2)
                        : this.finishOp(26, 1);
                    }
                    readToken_plus_min(e) {
                      let t = this.input.charCodeAt(this.state.pos + 1);
                      if (t === e) {
                        this.finishOp(34, 2);
                        return;
                      }
                      61 === t ? this.finishOp(30, 2) : this.finishOp(53, 1);
                    }
                    readToken_lt() {
                      let { pos: e } = this.state,
                        t = this.input.charCodeAt(e + 1);
                      if (60 === t) {
                        if (61 === this.input.charCodeAt(e + 2)) {
                          this.finishOp(30, 3);
                          return;
                        }
                        this.finishOp(51, 2);
                        return;
                      }
                      if (61 === t) {
                        this.finishOp(49, 2);
                        return;
                      }
                      this.finishOp(47, 1);
                    }
                    readToken_gt() {
                      let { pos: e } = this.state,
                        t = this.input.charCodeAt(e + 1);
                      if (62 === t) {
                        let t = 62 === this.input.charCodeAt(e + 2) ? 3 : 2;
                        if (61 === this.input.charCodeAt(e + t)) {
                          this.finishOp(30, t + 1);
                          return;
                        }
                        this.finishOp(52, t);
                        return;
                      }
                      if (61 === t) {
                        this.finishOp(49, 2);
                        return;
                      }
                      this.finishOp(48, 1);
                    }
                    readToken_eq_excl(e) {
                      let t = this.input.charCodeAt(this.state.pos + 1);
                      if (61 === t) {
                        this.finishOp(46, 61 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2);
                        return;
                      }
                      if (61 === e && 62 === t) {
                        (this.state.pos += 2), this.finishToken(19);
                        return;
                      }
                      this.finishOp(61 === e ? 29 : 35, 1);
                    }
                    readToken_question() {
                      let e = this.input.charCodeAt(this.state.pos + 1),
                        t = this.input.charCodeAt(this.state.pos + 2);
                      63 === e
                        ? 61 === t
                          ? this.finishOp(30, 3)
                          : this.finishOp(40, 2)
                        : 46 !== e || (t >= 48 && t <= 57)
                        ? (++this.state.pos, this.finishToken(17))
                        : ((this.state.pos += 2), this.finishToken(18));
                    }
                    getTokenFromCode(e) {
                      switch (e) {
                        case 46:
                          this.readToken_dot();
                          return;
                        case 40:
                          ++this.state.pos, this.finishToken(10);
                          return;
                        case 41:
                          ++this.state.pos, this.finishToken(11);
                          return;
                        case 59:
                          ++this.state.pos, this.finishToken(13);
                          return;
                        case 44:
                          ++this.state.pos, this.finishToken(12);
                          return;
                        case 91:
                          if (this.hasPlugin('recordAndTuple') && 124 === this.input.charCodeAt(this.state.pos + 1)) {
                            if ('bar' !== this.getPluginOption('recordAndTuple', 'syntaxType'))
                              throw this.raise(Q.TupleExpressionBarIncorrectStartSyntaxType, {
                                at: this.state.curPosition()
                              });
                            (this.state.pos += 2), this.finishToken(2);
                          } else ++this.state.pos, this.finishToken(0);
                          return;
                        case 93:
                          ++this.state.pos, this.finishToken(3);
                          return;
                        case 123:
                          if (this.hasPlugin('recordAndTuple') && 124 === this.input.charCodeAt(this.state.pos + 1)) {
                            if ('bar' !== this.getPluginOption('recordAndTuple', 'syntaxType'))
                              throw this.raise(Q.RecordExpressionBarIncorrectStartSyntaxType, {
                                at: this.state.curPosition()
                              });
                            (this.state.pos += 2), this.finishToken(6);
                          } else ++this.state.pos, this.finishToken(5);
                          return;
                        case 125:
                          ++this.state.pos, this.finishToken(8);
                          return;
                        case 58:
                          this.hasPlugin('functionBind') && 58 === this.input.charCodeAt(this.state.pos + 1)
                            ? this.finishOp(15, 2)
                            : (++this.state.pos, this.finishToken(14));
                          return;
                        case 63:
                          this.readToken_question();
                          return;
                        case 96:
                          this.readTemplateToken();
                          return;
                        case 48: {
                          let e = this.input.charCodeAt(this.state.pos + 1);
                          if (120 === e || 88 === e) {
                            this.readRadixNumber(16);
                            return;
                          }
                          if (111 === e || 79 === e) {
                            this.readRadixNumber(8);
                            return;
                          }
                          if (98 === e || 66 === e) {
                            this.readRadixNumber(2);
                            return;
                          }
                        }
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                          this.readNumber(!1);
                          return;
                        case 34:
                        case 39:
                          this.readString(e);
                          return;
                        case 47:
                          this.readToken_slash();
                          return;
                        case 37:
                        case 42:
                          this.readToken_mult_modulo(e);
                          return;
                        case 124:
                        case 38:
                          this.readToken_pipe_amp(e);
                          return;
                        case 94:
                          this.readToken_caret();
                          return;
                        case 43:
                        case 45:
                          this.readToken_plus_min(e);
                          return;
                        case 60:
                          this.readToken_lt();
                          return;
                        case 62:
                          this.readToken_gt();
                          return;
                        case 61:
                        case 33:
                          this.readToken_eq_excl(e);
                          return;
                        case 126:
                          this.finishOp(36, 1);
                          return;
                        case 64:
                          this.readToken_atSign();
                          return;
                        case 35:
                          this.readToken_numberSign();
                          return;
                        case 92:
                          this.readWord();
                          return;
                        default:
                          if (fe(e)) {
                            this.readWord(e);
                            return;
                          }
                      }
                      throw this.raise(Q.InvalidOrUnexpectedToken, {
                        at: this.state.curPosition(),
                        unexpected: String.fromCodePoint(e)
                      });
                    }
                    finishOp(e, t) {
                      let r = this.input.slice(this.state.pos, this.state.pos + t);
                      (this.state.pos += t), this.finishToken(e, r);
                    }
                    readRegexp() {
                      let e = this.state.startLoc,
                        t = this.state.start + 1,
                        r,
                        i,
                        { pos: a } = this.state;
                      for (; ; ++a) {
                        if (a >= this.length) throw this.raise(Q.UnterminatedRegExp, { at: Y(e, 1) });
                        let t = this.input.charCodeAt(a);
                        if (Ge(t)) throw this.raise(Q.UnterminatedRegExp, { at: Y(e, 1) });
                        if (r) r = !1;
                        else {
                          if (91 === t) i = !0;
                          else if (93 === t && i) i = !1;
                          else if (47 === t && !i) break;
                          r = 92 === t;
                        }
                      }
                      let l = this.input.slice(t, a);
                      ++a;
                      let f = '',
                        o = () => Y(e, a + 2 - t);
                      for (; a < this.length; ) {
                        let e = this.codePointAtPos(a),
                          t = String.fromCharCode(e);
                        if (eC.has(e))
                          118 === e
                            ? (this.expectPlugin('regexpUnicodeSets', o()),
                              f.includes('u') && this.raise(Q.IncompatibleRegExpUVFlags, { at: o() }))
                            : 117 === e && f.includes('v') && this.raise(Q.IncompatibleRegExpUVFlags, { at: o() }),
                            f.includes(t) && this.raise(Q.DuplicateRegExpFlags, { at: o() });
                        else if (De(e) || 92 === e) this.raise(Q.MalformedRegExpFlags, { at: o() });
                        else break;
                        ++a, (f += t);
                      }
                      (this.state.pos = a), this.finishToken(135, { pattern: l, flags: f });
                    }
                    readInt(e, t) {
                      let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        { n: a, pos: l } = Fr(
                          this.input,
                          this.state.pos,
                          this.state.lineStart,
                          this.state.curLine,
                          e,
                          t,
                          r,
                          i,
                          this.errorHandlers_readInt,
                          !1
                        );
                      return (this.state.pos = l), a;
                    }
                    readRadixNumber(e) {
                      let t = this.state.curPosition(),
                        r = !1;
                      this.state.pos += 2;
                      let i = this.readInt(e);
                      null == i && this.raise(Q.InvalidDigit, { at: Y(t, 2), radix: e });
                      let a = this.input.charCodeAt(this.state.pos);
                      if (110 === a) ++this.state.pos, (r = !0);
                      else if (109 === a) throw this.raise(Q.InvalidDecimal, { at: t });
                      if (fe(this.codePointAtPos(this.state.pos)))
                        throw this.raise(Q.NumberIdentifier, { at: this.state.curPosition() });
                      if (r) {
                        let e = this.input.slice(t.index, this.state.pos).replace(/[_n]/g, '');
                        this.finishToken(133, e);
                        return;
                      }
                      this.finishToken(132, i);
                    }
                    readNumber(e) {
                      let t = this.state.pos,
                        r = this.state.curPosition(),
                        i = !1,
                        a = !1,
                        l = !1,
                        f = !1,
                        y = !1;
                      e || null !== this.readInt(10) || this.raise(Q.InvalidNumber, { at: this.state.curPosition() });
                      let g = this.state.pos - t >= 2 && 48 === this.input.charCodeAt(t);
                      if (g) {
                        let e = this.input.slice(t, this.state.pos);
                        if ((this.recordStrictModeErrors(Q.StrictOctalLiteral, { at: r }), !this.state.strict)) {
                          let t = e.indexOf('_');
                          t > 0 && this.raise(Q.ZeroDigitNumericSeparator, { at: Y(r, t) });
                        }
                        y = g && !/[89]/.test(e);
                      }
                      let T = this.input.charCodeAt(this.state.pos);
                      if (
                        (46 !== T ||
                          y ||
                          (++this.state.pos, this.readInt(10), (i = !0), (T = this.input.charCodeAt(this.state.pos))),
                        (69 !== T && 101 !== T) ||
                          y ||
                          ((43 === (T = this.input.charCodeAt(++this.state.pos)) || 45 === T) && ++this.state.pos,
                          null === this.readInt(10) && this.raise(Q.InvalidOrMissingExponent, { at: r }),
                          (i = !0),
                          (f = !0),
                          (T = this.input.charCodeAt(this.state.pos))),
                        110 === T &&
                          ((i || g) && this.raise(Q.InvalidBigIntLiteral, { at: r }), ++this.state.pos, (a = !0)),
                        109 === T &&
                          (this.expectPlugin('decimal', this.state.curPosition()),
                          (f || g) && this.raise(Q.InvalidDecimal, { at: r }),
                          ++this.state.pos,
                          (l = !0)),
                        fe(this.codePointAtPos(this.state.pos)))
                      )
                        throw this.raise(Q.NumberIdentifier, { at: this.state.curPosition() });
                      let E = this.input.slice(t, this.state.pos).replace(/[_mn]/g, '');
                      if (a) {
                        this.finishToken(133, E);
                        return;
                      }
                      if (l) {
                        this.finishToken(134, E);
                        return;
                      }
                      let C = y ? parseInt(E, 8) : parseFloat(E);
                      this.finishToken(132, C);
                    }
                    readCodePoint(e) {
                      let { code: t, pos: r } = Lr(
                        this.input,
                        this.state.pos,
                        this.state.lineStart,
                        this.state.curLine,
                        e,
                        this.errorHandlers_readCodePoint
                      );
                      return (this.state.pos = r), t;
                    }
                    readString(e) {
                      let {
                        str: t,
                        pos: r,
                        curLine: i,
                        lineStart: a
                      } = Dr(
                        34 === e ? 'double' : 'single',
                        this.input,
                        this.state.pos + 1,
                        this.state.lineStart,
                        this.state.curLine,
                        this.errorHandlers_readStringContents_string
                      );
                      (this.state.pos = r + 1),
                        (this.state.lineStart = a),
                        (this.state.curLine = i),
                        this.finishToken(131, t);
                    }
                    readTemplateContinuation() {
                      this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
                    }
                    readTemplateToken() {
                      let e = this.input[this.state.pos],
                        {
                          str: t,
                          firstInvalidLoc: r,
                          pos: i,
                          curLine: a,
                          lineStart: l
                        } = Dr(
                          'template',
                          this.input,
                          this.state.pos + 1,
                          this.state.lineStart,
                          this.state.curLine,
                          this.errorHandlers_readStringContents_template
                        );
                      (this.state.pos = i + 1),
                        (this.state.lineStart = l),
                        (this.state.curLine = a),
                        r && (this.state.firstInvalidTemplateEscapePos = new j(r.curLine, r.pos - r.lineStart, r.pos)),
                        96 === this.input.codePointAt(i)
                          ? this.finishToken(24, r ? null : e + t + '`')
                          : (this.state.pos++, this.finishToken(25, r ? null : e + t + '${'));
                    }
                    recordStrictModeErrors(e, t) {
                      let { at: r } = t,
                        i = r.index;
                      this.state.strict && !this.state.strictErrors.has(i)
                        ? this.raise(e, { at: r })
                        : this.state.strictErrors.set(i, [e, r]);
                    }
                    readWord1(e) {
                      this.state.containsEsc = !1;
                      let t = '',
                        r = this.state.pos,
                        i = this.state.pos;
                      for (void 0 !== e && (this.state.pos += e <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
                        let e = this.codePointAtPos(this.state.pos);
                        if (De(e)) this.state.pos += e <= 65535 ? 1 : 2;
                        else if (92 === e) {
                          (this.state.containsEsc = !0), (t += this.input.slice(i, this.state.pos));
                          let e = this.state.curPosition(),
                            a = this.state.pos === r ? fe : De;
                          if (117 !== this.input.charCodeAt(++this.state.pos)) {
                            this.raise(Q.MissingUnicodeEscape, { at: this.state.curPosition() }),
                              (i = this.state.pos - 1);
                            continue;
                          }
                          ++this.state.pos;
                          let l = this.readCodePoint(!0);
                          null !== l &&
                            (a(l) || this.raise(Q.EscapedCharNotAnIdentifier, { at: e }),
                            (t += String.fromCodePoint(l))),
                            (i = this.state.pos);
                        } else break;
                      }
                      return t + this.input.slice(i, this.state.pos);
                    }
                    readWord(e) {
                      let t = this.readWord1(e),
                        r = l.get(t);
                      void 0 !== r ? this.finishToken(r, T[r]) : this.finishToken(130, t);
                    }
                    checkKeywordEscapes() {
                      let { type: e } = this.state;
                      $t(e) &&
                        this.state.containsEsc &&
                        this.raise(Q.InvalidEscapedReservedWord, { at: this.state.startLoc, reservedWord: T[e] });
                    }
                    raise(e, t) {
                      let { at: r } = t,
                        i = ot(t, ew),
                        a = e({ loc: r instanceof j ? r : r.loc.start, details: i });
                      if (!this.options.errorRecovery) throw a;
                      return this.isLookahead || this.state.errors.push(a), a;
                    }
                    raiseOverwrite(e, t) {
                      let { at: r } = t,
                        i = ot(t, ev),
                        a = r instanceof j ? r : r.loc.start,
                        l = a.index,
                        f = this.state.errors;
                      for (let t = f.length - 1; t >= 0; t--) {
                        let r = f[t];
                        if (r.loc.index === l) return (f[t] = e({ loc: a, details: i }));
                        if (r.loc.index < l) break;
                      }
                      return this.raise(e, t);
                    }
                    updateContext(e) {}
                    unexpected(e, t) {
                      throw this.raise(Q.UnexpectedToken, {
                        expected: t ? T[t] : null,
                        at: null != e ? e : this.state.startLoc
                      });
                    }
                    expectPlugin(e, t) {
                      if (this.hasPlugin(e)) return !0;
                      throw this.raise(Q.MissingPlugin, {
                        at: null != t ? t : this.state.startLoc,
                        missingPlugin: [e]
                      });
                    }
                    expectOnePlugin(e) {
                      if (!e.some((e) => this.hasPlugin(e)))
                        throw this.raise(Q.MissingOneOfPlugins, { at: this.state.startLoc, missingPlugin: e });
                    }
                    errorBuilder(e) {
                      return (t, r, i) => {
                        this.raise(e, { at: Je(t, r, i) });
                      };
                    }
                  },
                  ek = class {
                    constructor() {
                      (this.privateNames = new Set()),
                        (this.loneAccessors = new Map()),
                        (this.undefinedPrivateNames = new Map());
                    }
                  },
                  eL = class {
                    constructor(e) {
                      (this.parser = void 0),
                        (this.stack = []),
                        (this.undefinedPrivateNames = new Map()),
                        (this.parser = e);
                    }
                    current() {
                      return this.stack[this.stack.length - 1];
                    }
                    enter() {
                      this.stack.push(new ek());
                    }
                    exit() {
                      let e = this.stack.pop(),
                        t = this.current();
                      for (let [r, i] of Array.from(e.undefinedPrivateNames))
                        t
                          ? t.undefinedPrivateNames.has(r) || t.undefinedPrivateNames.set(r, i)
                          : this.parser.raise(Q.InvalidPrivateFieldResolution, { at: i, identifierName: r });
                    }
                    declarePrivateName(e, t, r) {
                      let { privateNames: i, loneAccessors: a, undefinedPrivateNames: l } = this.current(),
                        f = i.has(e);
                      if (3 & t) {
                        let r = f && a.get(e);
                        if (r) {
                          let i = 4 & t;
                          (f = (3 & r) == (3 & t) || (4 & r) !== i) || a.delete(e);
                        } else f || a.set(e, t);
                      }
                      f && this.parser.raise(Q.PrivateNameRedeclaration, { at: r, identifierName: e }),
                        i.add(e),
                        l.delete(e);
                    }
                    usePrivateName(e, t) {
                      let r;
                      for (r of this.stack) if (r.privateNames.has(e)) return;
                      r
                        ? r.undefinedPrivateNames.set(e, t)
                        : this.parser.raise(Q.InvalidPrivateFieldResolution, { at: t, identifierName: e });
                    }
                  },
                  eM = class {
                    constructor() {
                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                      (this.type = void 0), (this.type = e);
                    }
                    canBeArrowParameterDeclaration() {
                      return 2 === this.type || 1 === this.type;
                    }
                    isCertainlyParameterDeclaration() {
                      return 3 === this.type;
                    }
                  },
                  eO = class extends eM {
                    constructor(e) {
                      super(e), (this.declarationErrors = new Map());
                    }
                    recordDeclarationError(e, t) {
                      let { at: r } = t,
                        i = r.index;
                      this.declarationErrors.set(i, [e, r]);
                    }
                    clearDeclarationError(e) {
                      this.declarationErrors.delete(e);
                    }
                    iterateErrors(e) {
                      this.declarationErrors.forEach(e);
                    }
                  },
                  eD = class {
                    constructor(e) {
                      (this.parser = void 0), (this.stack = [new eM()]), (this.parser = e);
                    }
                    enter(e) {
                      this.stack.push(e);
                    }
                    exit() {
                      this.stack.pop();
                    }
                    recordParameterInitializerError(e, t) {
                      let { at: r } = t,
                        i = { at: r.loc.start },
                        { stack: a } = this,
                        l = a.length - 1,
                        f = a[l];
                      for (; !f.isCertainlyParameterDeclaration(); ) {
                        if (!f.canBeArrowParameterDeclaration()) return;
                        f.recordDeclarationError(e, i), (f = a[--l]);
                      }
                      this.parser.raise(e, i);
                    }
                    recordArrowParameterBindingError(e, t) {
                      let { at: r } = t,
                        { stack: i } = this,
                        a = i[i.length - 1],
                        l = { at: r.loc.start };
                      if (a.isCertainlyParameterDeclaration()) this.parser.raise(e, l);
                      else {
                        if (!a.canBeArrowParameterDeclaration()) return;
                        a.recordDeclarationError(e, l);
                      }
                    }
                    recordAsyncArrowParametersError(e) {
                      let { at: t } = e,
                        { stack: r } = this,
                        i = r.length - 1,
                        a = r[i];
                      for (; a.canBeArrowParameterDeclaration(); )
                        2 === a.type && a.recordDeclarationError(Q.AwaitBindingIdentifier, { at: t }), (a = r[--i]);
                    }
                    validateAsPattern() {
                      let { stack: e } = this,
                        t = e[e.length - 1];
                      t.canBeArrowParameterDeclaration() &&
                        t.iterateErrors((t) => {
                          let [r, i] = t;
                          this.parser.raise(r, { at: i });
                          let a = e.length - 2,
                            l = e[a];
                          for (; l.canBeArrowParameterDeclaration(); ) l.clearDeclarationError(i.index), (l = e[--a]);
                        });
                    }
                  };
                function ql() {
                  return new eM(3);
                }
                function Ul() {
                  return new eO(1);
                }
                function $l() {
                  return new eO(2);
                }
                var eB = class {
                  constructor() {
                    this.stacks = [];
                  }
                  enter(e) {
                    this.stacks.push(e);
                  }
                  exit() {
                    this.stacks.pop();
                  }
                  currentFlags() {
                    return this.stacks[this.stacks.length - 1];
                  }
                  get hasAwait() {
                    return (2 & this.currentFlags()) > 0;
                  }
                  get hasYield() {
                    return (1 & this.currentFlags()) > 0;
                  }
                  get hasReturn() {
                    return (4 & this.currentFlags()) > 0;
                  }
                  get hasIn() {
                    return (8 & this.currentFlags()) > 0;
                  }
                };
                function Tt(e, t) {
                  return (e ? 2 : 0) | (t ? 1 : 0);
                }
                var eF = class extends eI {
                    addExtra(e, t, r) {
                      let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                      if (!e) return;
                      let a = (e.extra = e.extra || {});
                      i ? (a[t] = r) : Object.defineProperty(a, t, { enumerable: i, value: r });
                    }
                    isContextual(e) {
                      return this.state.type === e && !this.state.containsEsc;
                    }
                    isUnparsedContextual(e, t) {
                      let r = e + t.length;
                      if (this.input.slice(e, r) === t) {
                        let e = this.input.charCodeAt(r);
                        return !(De(e) || (64512 & e) == 55296);
                      }
                      return !1;
                    }
                    isLookaheadContextual(e) {
                      let t = this.nextTokenStart();
                      return this.isUnparsedContextual(t, e);
                    }
                    eatContextual(e) {
                      return !!this.isContextual(e) && (this.next(), !0);
                    }
                    expectContextual(e, t) {
                      if (!this.eatContextual(e)) {
                        if (null != t) throw this.raise(t, { at: this.state.startLoc });
                        this.unexpected(null, e);
                      }
                    }
                    canInsertSemicolon() {
                      return this.match(137) || this.match(8) || this.hasPrecedingLineBreak();
                    }
                    hasPrecedingLineBreak() {
                      return eg.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start));
                    }
                    hasFollowingLineBreak() {
                      return (eT.lastIndex = this.state.end), eT.test(this.input);
                    }
                    isLineTerminator() {
                      return this.eat(13) || this.canInsertSemicolon();
                    }
                    semicolon() {
                      (!(arguments.length > 0) || void 0 === arguments[0] || arguments[0]
                        ? this.isLineTerminator()
                        : this.eat(13)) || this.raise(Q.MissingSemicolon, { at: this.state.lastTokEndLoc });
                    }
                    expect(e, t) {
                      this.eat(e) || this.unexpected(t, e);
                    }
                    tryParse(e) {
                      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.clone(),
                        r = { node: null };
                      try {
                        let i = e(function () {
                          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                          throw ((r.node = e), r);
                        });
                        if (this.state.errors.length > t.errors.length) {
                          let e = this.state;
                          return (
                            (this.state = t),
                            (this.state.tokensLength = e.tokensLength),
                            { node: i, error: e.errors[t.errors.length], thrown: !1, aborted: !1, failState: e }
                          );
                        }
                        return { node: i, error: null, thrown: !1, aborted: !1, failState: null };
                      } catch (i) {
                        let e = this.state;
                        if (((this.state = t), i instanceof SyntaxError))
                          return { node: null, error: i, thrown: !0, aborted: !1, failState: e };
                        if (i === r) return { node: r.node, error: null, thrown: !1, aborted: !0, failState: e };
                        throw i;
                      }
                    }
                    checkExpressionErrors(e, t) {
                      if (!e) return !1;
                      let { shorthandAssignLoc: r, doubleProtoLoc: i, privateKeyLoc: a, optionalParametersLoc: l } = e,
                        f = !!r || !!i || !!l || !!a;
                      if (!t) return f;
                      null != r && this.raise(Q.InvalidCoverInitializedName, { at: r }),
                        null != i && this.raise(Q.DuplicateProto, { at: i }),
                        null != a && this.raise(Q.UnexpectedPrivateField, { at: a }),
                        null != l && this.unexpected(l);
                    }
                    isLiteralPropertyName() {
                      return it(this.state.type);
                    }
                    isPrivateName(e) {
                      return 'PrivateName' === e.type;
                    }
                    getPrivateNameSV(e) {
                      return e.id.name;
                    }
                    hasPropertyAsPrivateName(e) {
                      return (
                        ('MemberExpression' === e.type || 'OptionalMemberExpression' === e.type) &&
                        this.isPrivateName(e.property)
                      );
                    }
                    isObjectProperty(e) {
                      return 'ObjectProperty' === e.type;
                    }
                    isObjectMethod(e) {
                      return 'ObjectMethod' === e.type;
                    }
                    initializeScopes() {
                      let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 'module' === this.options.sourceType,
                        t = this.state.labels;
                      this.state.labels = [];
                      let r = this.exportedIdentifiers;
                      this.exportedIdentifiers = new Set();
                      let i = this.inModule;
                      this.inModule = e;
                      let a = this.scope,
                        l = this.getScopeHandler();
                      this.scope = new l(this, e);
                      let f = this.prodParam;
                      this.prodParam = new eB();
                      let y = this.classScope;
                      this.classScope = new eL(this);
                      let g = this.expressionScope;
                      return (
                        (this.expressionScope = new eD(this)),
                        () => {
                          (this.state.labels = t),
                            (this.exportedIdentifiers = r),
                            (this.inModule = i),
                            (this.scope = a),
                            (this.prodParam = f),
                            (this.classScope = y),
                            (this.expressionScope = g);
                        }
                      );
                    }
                    enterInitialScopes() {
                      let e = 0;
                      this.inModule && (e |= 2), this.scope.enter(1), this.prodParam.enter(e);
                    }
                    checkDestructuringPrivate(e) {
                      let { privateKeyLoc: t } = e;
                      null !== t && this.expectPlugin('destructuringPrivate', t);
                    }
                  },
                  ej = class {
                    constructor() {
                      (this.shorthandAssignLoc = null),
                        (this.doubleProtoLoc = null),
                        (this.privateKeyLoc = null),
                        (this.optionalParametersLoc = null);
                    }
                  },
                  eR = class {
                    constructor(e, t, r) {
                      (this.type = ''),
                        (this.start = t),
                        (this.end = 0),
                        (this.loc = new R(r)),
                        null != e && e.options.ranges && (this.range = [t, 0]),
                        null != e && e.filename && (this.loc.filename = e.filename);
                    }
                  },
                  eU = eR.prototype;
                function Vl(e) {
                  return me(e);
                }
                function me(e) {
                  let { type: t, start: r, end: i, loc: a, range: l, extra: f, name: y } = e,
                    g = Object.create(eU);
                  return (
                    (g.type = t),
                    (g.start = r),
                    (g.end = i),
                    (g.loc = a),
                    (g.range = l),
                    (g.extra = f),
                    (g.name = y),
                    'Placeholder' === t && (g.expectedNode = e.expectedNode),
                    g
                  );
                }
                function Kl(e) {
                  let { type: t, start: r, end: i, loc: a, range: l, extra: f } = e;
                  if ('Placeholder' === t) return Vl(e);
                  let y = Object.create(eU);
                  return (
                    (y.type = t),
                    (y.start = r),
                    (y.end = i),
                    (y.loc = a),
                    (y.range = l),
                    void 0 !== e.raw ? (y.raw = e.raw) : (y.extra = f),
                    (y.value = e.value),
                    y
                  );
                }
                eU.__clone = function () {
                  let e = new eR(void 0, this.start, this.loc.start),
                    t = Object.keys(this);
                  for (let r = 0, i = t.length; r < i; r++) {
                    let i = t[r];
                    'leadingComments' !== i && 'trailingComments' !== i && 'innerComments' !== i && (e[i] = this[i]);
                  }
                  return e;
                };
                var e_ = class extends eF {
                    startNode() {
                      return new eR(this, this.state.start, this.state.startLoc);
                    }
                    startNodeAt(e) {
                      return new eR(this, e.index, e);
                    }
                    startNodeAtNode(e) {
                      return this.startNodeAt(e.loc.start);
                    }
                    finishNode(e, t) {
                      return this.finishNodeAt(e, t, this.state.lastTokEndLoc);
                    }
                    finishNodeAt(e, t, r) {
                      return (
                        (e.type = t),
                        (e.end = r.index),
                        (e.loc.end = r),
                        this.options.ranges && (e.range[1] = r.index),
                        this.options.attachComment && this.processComment(e),
                        e
                      );
                    }
                    resetStartLocation(e, t) {
                      (e.start = t.index), (e.loc.start = t), this.options.ranges && (e.range[0] = t.index);
                    }
                    resetEndLocation(e) {
                      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.lastTokEndLoc;
                      (e.end = t.index), (e.loc.end = t), this.options.ranges && (e.range[1] = t.index);
                    }
                    resetStartLocationFromNode(e, t) {
                      this.resetStartLocation(e, t.loc.start);
                    }
                  },
                  e$ = new Set([
                    '_',
                    'any',
                    'bool',
                    'boolean',
                    'empty',
                    'extends',
                    'false',
                    'interface',
                    'mixed',
                    'null',
                    'number',
                    'static',
                    'string',
                    'true',
                    'typeof',
                    'void'
                  ]),
                  ez = pe`flow`({
                    AmbiguousConditionalArrow:
                      'Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.',
                    AmbiguousDeclareModuleKind:
                      'Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.',
                    AssignReservedType: (e) => {
                      let { reservedType: t } = e;
                      return `Cannot overwrite reserved type ${t}.`;
                    },
                    DeclareClassElement: 'The `declare` modifier can only appear on class fields.',
                    DeclareClassFieldInitializer: 'Initializers are not allowed in fields with the `declare` modifier.',
                    DuplicateDeclareModuleExports: 'Duplicate `declare module.exports` statement.',
                    EnumBooleanMemberNotInitialized: (e) => {
                      let { memberName: t, enumName: r } = e;
                      return `Boolean enum members need to be initialized. Use either \`${t} = true,\` or \`${t} = false,\` in enum \`${r}\`.`;
                    },
                    EnumDuplicateMemberName: (e) => {
                      let { memberName: t, enumName: r } = e;
                      return `Enum member names need to be unique, but the name \`${t}\` has already been used before in enum \`${r}\`.`;
                    },
                    EnumInconsistentMemberValues: (e) => {
                      let { enumName: t } = e;
                      return `Enum \`${t}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`;
                    },
                    EnumInvalidExplicitType: (e) => {
                      let { invalidEnumType: t, enumName: r } = e;
                      return `Enum type \`${t}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${r}\`.`;
                    },
                    EnumInvalidExplicitTypeUnknownSupplied: (e) => {
                      let { enumName: t } = e;
                      return `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`;
                    },
                    EnumInvalidMemberInitializerPrimaryType: (e) => {
                      let { enumName: t, memberName: r, explicitType: i } = e;
                      return `Enum \`${t}\` has type \`${i}\`, so the initializer of \`${r}\` needs to be a ${i} literal.`;
                    },
                    EnumInvalidMemberInitializerSymbolType: (e) => {
                      let { enumName: t, memberName: r } = e;
                      return `Symbol enum members cannot be initialized. Use \`${r},\` in enum \`${t}\`.`;
                    },
                    EnumInvalidMemberInitializerUnknownType: (e) => {
                      let { enumName: t, memberName: r } = e;
                      return `The enum member initializer for \`${r}\` needs to be a literal (either a boolean, number, or string) in enum \`${t}\`.`;
                    },
                    EnumInvalidMemberName: (e) => {
                      let { enumName: t, memberName: r, suggestion: i } = e;
                      return `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${r}\`, consider using \`${i}\`, in enum \`${t}\`.`;
                    },
                    EnumNumberMemberNotInitialized: (e) => {
                      let { enumName: t, memberName: r } = e;
                      return `Number enum members need to be initialized, e.g. \`${r} = 1\` in enum \`${t}\`.`;
                    },
                    EnumStringMemberInconsistentlyInitailized: (e) => {
                      let { enumName: t } = e;
                      return `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${t}\`.`;
                    },
                    GetterMayNotHaveThisParam: 'A getter cannot have a `this` parameter.',
                    ImportReflectionHasImportType:
                      'An `import module` declaration can not use `type` or `typeof` keyword.',
                    ImportTypeShorthandOnlyInPureImport:
                      'The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.',
                    InexactInsideExact: 'Explicit inexact syntax cannot appear inside an explicit exact object type.',
                    InexactInsideNonObject: 'Explicit inexact syntax cannot appear in class or interface definitions.',
                    InexactVariance: 'Explicit inexact syntax cannot have variance.',
                    InvalidNonTypeImportInDeclareModule:
                      'Imports within a `declare module` body must always be `import type` or `import typeof`.',
                    MissingTypeParamDefault:
                      'Type parameter declaration needs a default, since a preceding type parameter declaration has a default.',
                    NestedDeclareModule: '`declare module` cannot be used inside another `declare module`.',
                    NestedFlowComment: 'Cannot have a flow comment inside another flow comment.',
                    PatternIsOptional: Object.assign(
                      { message: 'A binding pattern parameter cannot be optional in an implementation signature.' },
                      { reasonCode: 'OptionalBindingPattern' }
                    ),
                    SetterMayNotHaveThisParam: 'A setter cannot have a `this` parameter.',
                    SpreadVariance: 'Spread properties cannot have variance.',
                    ThisParamAnnotationRequired: 'A type annotation is required for the `this` parameter.',
                    ThisParamBannedInConstructor:
                      "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
                    ThisParamMayNotBeOptional: 'The `this` parameter cannot be optional.',
                    ThisParamMustBeFirst: 'The `this` parameter must be the first function parameter.',
                    ThisParamNoDefault: 'The `this` parameter may not have a default value.',
                    TypeBeforeInitializer:
                      'Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.',
                    TypeCastInPattern: 'The type cast expression is expected to be wrapped with parenthesis.',
                    UnexpectedExplicitInexactInObject:
                      'Explicit inexact syntax must appear at the end of an inexact object.',
                    UnexpectedReservedType: (e) => {
                      let { reservedType: t } = e;
                      return `Unexpected reserved type ${t}.`;
                    },
                    UnexpectedReservedUnderscore: '`_` is only allowed as a type argument to call or new.',
                    UnexpectedSpaceBetweenModuloChecks: 'Spaces between `%` and `checks` are not allowed here.',
                    UnexpectedSpreadType: 'Spread operator cannot appear in class or interface definitions.',
                    UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
                    UnexpectedTokenAfterTypeParameter:
                      'Expected an arrow function after this type parameter declaration.',
                    UnexpectedTypeParameterBeforeAsyncArrowFunction:
                      'Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.',
                    UnsupportedDeclareExportKind: (e) => {
                      let { unsupportedExportKind: t, suggestion: r } = e;
                      return `\`declare export ${t}\` is not supported. Use \`${r}\` instead.`;
                    },
                    UnsupportedStatementInDeclareModule:
                      'Only declares and type imports are allowed inside declare module.',
                    UnterminatedFlowComment: 'Unterminated flow-comment.'
                  });
                function Jl(e) {
                  return (
                    'DeclareExportAllDeclaration' === e.type ||
                    ('DeclareExportDeclaration' === e.type &&
                      (!e.declaration ||
                        ('TypeAlias' !== e.declaration.type && 'InterfaceDeclaration' !== e.declaration.type)))
                  );
                }
                function us(e) {
                  return 'type' === e.importKind || 'typeof' === e.importKind;
                }
                function qr(e) {
                  return te(e) && 97 !== e;
                }
                var eq = {
                  const: 'declare export var',
                  let: 'declare export var',
                  type: 'export type',
                  interface: 'export interface'
                };
                function Yl(e, t) {
                  let r = [],
                    i = [];
                  for (let a = 0; a < e.length; a++) (t(e[a], a, e) ? r : i).push(e[a]);
                  return [r, i];
                }
                var eH = /\*?\s*@((?:no)?flow)\b/,
                  eV = {
                    __proto__: null,
                    quot: '"',
                    amp: '&',
                    apos: "'",
                    lt: '<',
                    gt: '>',
                    nbsp: '\xa0',
                    iexcl: '\xa1',
                    cent: '\xa2',
                    pound: '\xa3',
                    curren: '\xa4',
                    yen: '\xa5',
                    brvbar: '\xa6',
                    sect: '\xa7',
                    uml: '\xa8',
                    copy: '\xa9',
                    ordf: '\xaa',
                    laquo: '\xab',
                    not: '\xac',
                    shy: '\xad',
                    reg: '\xae',
                    macr: '\xaf',
                    deg: '\xb0',
                    plusmn: '\xb1',
                    sup2: '\xb2',
                    sup3: '\xb3',
                    acute: '\xb4',
                    micro: '\xb5',
                    para: '\xb6',
                    middot: '\xb7',
                    cedil: '\xb8',
                    sup1: '\xb9',
                    ordm: '\xba',
                    raquo: '\xbb',
                    frac14: '\xbc',
                    frac12: '\xbd',
                    frac34: '\xbe',
                    iquest: '\xbf',
                    Agrave: '\xc0',
                    Aacute: '\xc1',
                    Acirc: '\xc2',
                    Atilde: '\xc3',
                    Auml: '\xc4',
                    Aring: '\xc5',
                    AElig: '\xc6',
                    Ccedil: '\xc7',
                    Egrave: '\xc8',
                    Eacute: '\xc9',
                    Ecirc: '\xca',
                    Euml: '\xcb',
                    Igrave: '\xcc',
                    Iacute: '\xcd',
                    Icirc: '\xce',
                    Iuml: '\xcf',
                    ETH: '\xd0',
                    Ntilde: '\xd1',
                    Ograve: '\xd2',
                    Oacute: '\xd3',
                    Ocirc: '\xd4',
                    Otilde: '\xd5',
                    Ouml: '\xd6',
                    times: '\xd7',
                    Oslash: '\xd8',
                    Ugrave: '\xd9',
                    Uacute: '\xda',
                    Ucirc: '\xdb',
                    Uuml: '\xdc',
                    Yacute: '\xdd',
                    THORN: '\xde',
                    szlig: '\xdf',
                    agrave: '\xe0',
                    aacute: '\xe1',
                    acirc: '\xe2',
                    atilde: '\xe3',
                    auml: '\xe4',
                    aring: '\xe5',
                    aelig: '\xe6',
                    ccedil: '\xe7',
                    egrave: '\xe8',
                    eacute: '\xe9',
                    ecirc: '\xea',
                    euml: '\xeb',
                    igrave: '\xec',
                    iacute: '\xed',
                    icirc: '\xee',
                    iuml: '\xef',
                    eth: '\xf0',
                    ntilde: '\xf1',
                    ograve: '\xf2',
                    oacute: '\xf3',
                    ocirc: '\xf4',
                    otilde: '\xf5',
                    ouml: '\xf6',
                    divide: '\xf7',
                    oslash: '\xf8',
                    ugrave: '\xf9',
                    uacute: '\xfa',
                    ucirc: '\xfb',
                    uuml: '\xfc',
                    yacute: '\xfd',
                    thorn: '\xfe',
                    yuml: '\xff',
                    OElig: 'Œ',
                    oelig: 'œ',
                    Scaron: 'Š',
                    scaron: 'š',
                    Yuml: 'Ÿ',
                    fnof: 'ƒ',
                    circ: 'ˆ',
                    tilde: '˜',
                    Alpha: 'Α',
                    Beta: 'Β',
                    Gamma: 'Γ',
                    Delta: 'Δ',
                    Epsilon: 'Ε',
                    Zeta: 'Ζ',
                    Eta: 'Η',
                    Theta: 'Θ',
                    Iota: 'Ι',
                    Kappa: 'Κ',
                    Lambda: 'Λ',
                    Mu: 'Μ',
                    Nu: 'Ν',
                    Xi: 'Ξ',
                    Omicron: 'Ο',
                    Pi: 'Π',
                    Rho: 'Ρ',
                    Sigma: 'Σ',
                    Tau: 'Τ',
                    Upsilon: 'Υ',
                    Phi: 'Φ',
                    Chi: 'Χ',
                    Psi: 'Ψ',
                    Omega: 'Ω',
                    alpha: 'α',
                    beta: 'β',
                    gamma: 'γ',
                    delta: 'δ',
                    epsilon: 'ε',
                    zeta: 'ζ',
                    eta: 'η',
                    theta: 'θ',
                    iota: 'ι',
                    kappa: 'κ',
                    lambda: 'λ',
                    mu: 'μ',
                    nu: 'ν',
                    xi: 'ξ',
                    omicron: 'ο',
                    pi: 'π',
                    rho: 'ρ',
                    sigmaf: 'ς',
                    sigma: 'σ',
                    tau: 'τ',
                    upsilon: 'υ',
                    phi: 'φ',
                    chi: 'χ',
                    psi: 'ψ',
                    omega: 'ω',
                    thetasym: 'ϑ',
                    upsih: 'ϒ',
                    piv: 'ϖ',
                    ensp: ' ',
                    emsp: ' ',
                    thinsp: ' ',
                    zwnj: '‌',
                    zwj: '‍',
                    lrm: '‎',
                    rlm: '‏',
                    ndash: '–',
                    mdash: '—',
                    lsquo: '‘',
                    rsquo: '’',
                    sbquo: '‚',
                    ldquo: '“',
                    rdquo: '”',
                    bdquo: '„',
                    dagger: '†',
                    Dagger: '‡',
                    bull: '•',
                    hellip: '…',
                    permil: '‰',
                    prime: '′',
                    Prime: '″',
                    lsaquo: '‹',
                    rsaquo: '›',
                    oline: '‾',
                    frasl: '⁄',
                    euro: '€',
                    image: 'ℑ',
                    weierp: '℘',
                    real: 'ℜ',
                    trade: '™',
                    alefsym: 'ℵ',
                    larr: '←',
                    uarr: '↑',
                    rarr: '→',
                    darr: '↓',
                    harr: '↔',
                    crarr: '↵',
                    lArr: '⇐',
                    uArr: '⇑',
                    rArr: '⇒',
                    dArr: '⇓',
                    hArr: '⇔',
                    forall: '∀',
                    part: '∂',
                    exist: '∃',
                    empty: '∅',
                    nabla: '∇',
                    isin: '∈',
                    notin: '∉',
                    ni: '∋',
                    prod: '∏',
                    sum: '∑',
                    minus: '−',
                    lowast: '∗',
                    radic: '√',
                    prop: '∝',
                    infin: '∞',
                    ang: '∠',
                    and: '∧',
                    or: '∨',
                    cap: '∩',
                    cup: '∪',
                    int: '∫',
                    there4: '∴',
                    sim: '∼',
                    cong: '≅',
                    asymp: '≈',
                    ne: '≠',
                    equiv: '≡',
                    le: '≤',
                    ge: '≥',
                    sub: '⊂',
                    sup: '⊃',
                    nsub: '⊄',
                    sube: '⊆',
                    supe: '⊇',
                    oplus: '⊕',
                    otimes: '⊗',
                    perp: '⊥',
                    sdot: '⋅',
                    lceil: '⌈',
                    rceil: '⌉',
                    lfloor: '⌊',
                    rfloor: '⌋',
                    lang: '〈',
                    rang: '〉',
                    loz: '◊',
                    spades: '♠',
                    clubs: '♣',
                    hearts: '♥',
                    diams: '♦'
                  },
                  eK = pe`jsx`({
                    AttributeIsEmpty: 'JSX attributes must only be assigned a non-empty expression.',
                    MissingClosingTagElement: (e) => {
                      let { openingTagName: t } = e;
                      return `Expected corresponding JSX closing tag for <${t}>.`;
                    },
                    MissingClosingTagFragment: 'Expected corresponding JSX closing tag for <>.',
                    UnexpectedSequenceExpression:
                      'Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?',
                    UnexpectedToken: (e) => {
                      let { unexpected: t, HTMLEntity: r } = e;
                      return `Unexpected token \`${t}\`. Did you mean \`${r}\` or \`{'${t}'}\`?`;
                    },
                    UnsupportedJsxValue: 'JSX value should be either an expression or a quoted JSX text.',
                    UnterminatedJsxContent: 'Unterminated JSX contents.',
                    UnwrappedAdjacentJSXElements:
                      'Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?'
                  });
                function Te(e) {
                  return !!e && ('JSXOpeningFragment' === e.type || 'JSXClosingFragment' === e.type);
                }
                function Re(e) {
                  if ('JSXIdentifier' === e.type) return e.name;
                  if ('JSXNamespacedName' === e.type) return e.namespace.name + ':' + e.name.name;
                  if ('JSXMemberExpression' === e.type) return Re(e.object) + '.' + Re(e.property);
                  throw Error('Node had unexpected type: ' + e.type);
                }
                var eJ = class extends eu {
                    constructor() {
                      super(...arguments),
                        (this.types = new Set()),
                        (this.enums = new Set()),
                        (this.constEnums = new Set()),
                        (this.classes = new Set()),
                        (this.exportOnlyBindings = new Set());
                    }
                  },
                  eW = class extends ed {
                    constructor() {
                      super(...arguments), (this.importsStack = []);
                    }
                    createScope(e) {
                      return this.importsStack.push(new Set()), new eJ(e);
                    }
                    enter(e) {
                      256 == e && this.importsStack.push(new Set()), super.enter(e);
                    }
                    exit() {
                      let e = super.exit();
                      return 256 == e && this.importsStack.pop(), e;
                    }
                    hasImport(e, t) {
                      let r = this.importsStack.length;
                      if (this.importsStack[r - 1].has(e)) return !0;
                      if (!t && r > 1) {
                        for (let t = 0; t < r - 1; t++) if (this.importsStack[t].has(e)) return !0;
                      }
                      return !1;
                    }
                    declareName(e, t, r) {
                      if (4096 & t) {
                        this.hasImport(e, !0) && this.parser.raise(Q.VarRedeclaration, { at: r, identifierName: e }),
                          this.importsStack[this.importsStack.length - 1].add(e);
                        return;
                      }
                      let i = this.currentScope();
                      if (1024 & t) {
                        this.maybeExportDefined(i, e), i.exportOnlyBindings.add(e);
                        return;
                      }
                      super.declareName(e, t, r),
                        2 & t &&
                          (1 & t || (this.checkRedeclarationInScope(i, e, t, r), this.maybeExportDefined(i, e)),
                          i.types.add(e)),
                        256 & t && i.enums.add(e),
                        512 & t && i.constEnums.add(e),
                        128 & t && i.classes.add(e);
                    }
                    isRedeclaredInScope(e, t, r) {
                      return e.enums.has(t)
                        ? !(256 & r) || !!(512 & r) !== e.constEnums.has(t)
                        : 128 & r && e.classes.has(t)
                        ? !!e.lexical.has(t) && !!(1 & r)
                        : !!(2 & r && e.types.has(t)) || super.isRedeclaredInScope(e, t, r);
                    }
                    checkLocalExport(e) {
                      let { name: t } = e;
                      if (this.hasImport(t)) return;
                      let r = this.scopeStack.length;
                      for (let e = r - 1; e >= 0; e--) {
                        let r = this.scopeStack[e];
                        if (r.types.has(t) || r.exportOnlyBindings.has(t)) return;
                      }
                      super.checkLocalExport(e);
                    }
                  },
                  ih = (e, t) => Object.hasOwnProperty.call(e, t) && e[t],
                  Ur = (e) => ('ParenthesizedExpression' === e.type ? Ur(e.expression) : e),
                  eX = class extends e_ {
                    toAssignable(e) {
                      var t, r, i;
                      let a,
                        l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                      switch (
                        (('ParenthesizedExpression' === e.type || (null != (t = e.extra) && t.parenthesized)) &&
                          ((a = Ur(e)),
                          l
                            ? 'Identifier' === a.type
                              ? this.expressionScope.recordArrowParameterBindingError(
                                  Q.InvalidParenthesizedAssignment,
                                  { at: e }
                                )
                              : 'MemberExpression' !== a.type && this.raise(Q.InvalidParenthesizedAssignment, { at: e })
                            : this.raise(Q.InvalidParenthesizedAssignment, { at: e })),
                        e.type)
                      ) {
                        case 'Identifier':
                        case 'ObjectPattern':
                        case 'ArrayPattern':
                        case 'AssignmentPattern':
                        case 'RestElement':
                          break;
                        case 'ObjectExpression':
                          e.type = 'ObjectPattern';
                          for (let t = 0, r = e.properties.length, a = r - 1; t < r; t++) {
                            let r = e.properties[t],
                              f = t === a;
                            this.toAssignableObjectExpressionProp(r, f, l),
                              f &&
                                'RestElement' === r.type &&
                                null != (i = e.extra) &&
                                i.trailingCommaLoc &&
                                this.raise(Q.RestTrailingComma, { at: e.extra.trailingCommaLoc });
                          }
                          break;
                        case 'ObjectProperty': {
                          let { key: t, value: r } = e;
                          this.isPrivateName(t) &&
                            this.classScope.usePrivateName(this.getPrivateNameSV(t), t.loc.start),
                            this.toAssignable(r, l);
                          break;
                        }
                        case 'SpreadElement':
                          throw Error(
                            "Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller."
                          );
                        case 'ArrayExpression':
                          (e.type = 'ArrayPattern'),
                            this.toAssignableList(e.elements, null == (r = e.extra) ? void 0 : r.trailingCommaLoc, l);
                          break;
                        case 'AssignmentExpression':
                          '=' !== e.operator && this.raise(Q.MissingEqInAssignment, { at: e.left.loc.end }),
                            (e.type = 'AssignmentPattern'),
                            delete e.operator,
                            this.toAssignable(e.left, l);
                          break;
                        case 'ParenthesizedExpression':
                          this.toAssignable(a, l);
                      }
                    }
                    toAssignableObjectExpressionProp(e, t, r) {
                      if ('ObjectMethod' === e.type)
                        this.raise('get' === e.kind || 'set' === e.kind ? Q.PatternHasAccessor : Q.PatternHasMethod, {
                          at: e.key
                        });
                      else if ('SpreadElement' === e.type) {
                        e.type = 'RestElement';
                        let i = e.argument;
                        this.checkToRestConversion(i, !1),
                          this.toAssignable(i, r),
                          t || this.raise(Q.RestTrailingComma, { at: e });
                      } else this.toAssignable(e, r);
                    }
                    toAssignableList(e, t, r) {
                      let i = e.length - 1;
                      for (let a = 0; a <= i; a++) {
                        let l = e[a];
                        if (l) {
                          if ('SpreadElement' === l.type) {
                            l.type = 'RestElement';
                            let e = l.argument;
                            this.checkToRestConversion(e, !0), this.toAssignable(e, r);
                          } else this.toAssignable(l, r);
                          'RestElement' === l.type &&
                            (a < i
                              ? this.raise(Q.RestTrailingComma, { at: l })
                              : t && this.raise(Q.RestTrailingComma, { at: t }));
                        }
                      }
                    }
                    isAssignable(e, t) {
                      switch (e.type) {
                        case 'Identifier':
                        case 'ObjectPattern':
                        case 'ArrayPattern':
                        case 'AssignmentPattern':
                        case 'RestElement':
                          return !0;
                        case 'ObjectExpression': {
                          let t = e.properties.length - 1;
                          return e.properties.every(
                            (e, r) =>
                              'ObjectMethod' !== e.type &&
                              (r === t || 'SpreadElement' !== e.type) &&
                              this.isAssignable(e)
                          );
                        }
                        case 'ObjectProperty':
                          return this.isAssignable(e.value);
                        case 'SpreadElement':
                          return this.isAssignable(e.argument);
                        case 'ArrayExpression':
                          return e.elements.every((e) => null === e || this.isAssignable(e));
                        case 'AssignmentExpression':
                          return '=' === e.operator;
                        case 'ParenthesizedExpression':
                          return this.isAssignable(e.expression);
                        case 'MemberExpression':
                        case 'OptionalMemberExpression':
                          return !t;
                        default:
                          return !1;
                      }
                    }
                    toReferencedList(e, t) {
                      return e;
                    }
                    toReferencedListDeep(e, t) {
                      for (let r of (this.toReferencedList(e, t), e))
                        (null == r ? void 0 : r.type) === 'ArrayExpression' && this.toReferencedListDeep(r.elements);
                    }
                    parseSpread(e) {
                      let t = this.startNode();
                      return (
                        this.next(),
                        (t.argument = this.parseMaybeAssignAllowIn(e, void 0)),
                        this.finishNode(t, 'SpreadElement')
                      );
                    }
                    parseRestBinding() {
                      let e = this.startNode();
                      return this.next(), (e.argument = this.parseBindingAtom()), this.finishNode(e, 'RestElement');
                    }
                    parseBindingAtom() {
                      switch (this.state.type) {
                        case 0: {
                          let e = this.startNode();
                          return (
                            this.next(),
                            (e.elements = this.parseBindingList(3, 93, 1)),
                            this.finishNode(e, 'ArrayPattern')
                          );
                        }
                        case 5:
                          return this.parseObjectLike(8, !0);
                      }
                      return this.parseIdentifier();
                    }
                    parseBindingList(e, t, r) {
                      let i = 1 & r,
                        a = [],
                        l = !0;
                      for (; !this.eat(e); )
                        if ((l ? (l = !1) : this.expect(12), i && this.match(12))) a.push(null);
                        else {
                          if (this.eat(e)) break;
                          if (this.match(21)) {
                            if (
                              (a.push(this.parseAssignableListItemTypes(this.parseRestBinding(), r)),
                              !this.checkCommaAfterRest(t))
                            ) {
                              this.expect(e);
                              break;
                            }
                          } else {
                            let e = [];
                            for (
                              this.match(26) &&
                              this.hasPlugin('decorators') &&
                              this.raise(Q.UnsupportedParameterDecorator, { at: this.state.startLoc });
                              this.match(26);

                            )
                              e.push(this.parseDecorator());
                            a.push(this.parseAssignableListItem(r, e));
                          }
                        }
                      return a;
                    }
                    parseBindingRestProperty(e) {
                      return (
                        this.next(),
                        (e.argument = this.parseIdentifier()),
                        this.checkCommaAfterRest(125),
                        this.finishNode(e, 'RestElement')
                      );
                    }
                    parseBindingProperty() {
                      let e = this.startNode(),
                        { type: t, startLoc: r } = this.state;
                      return 21 === t
                        ? this.parseBindingRestProperty(e)
                        : (136 === t
                            ? (this.expectPlugin('destructuringPrivate', r),
                              this.classScope.usePrivateName(this.state.value, r),
                              (e.key = this.parsePrivateName()))
                            : this.parsePropertyName(e),
                          (e.method = !1),
                          this.parseObjPropValue(e, r, !1, !1, !0, !1));
                    }
                    parseAssignableListItem(e, t) {
                      let r = this.parseMaybeDefault();
                      this.parseAssignableListItemTypes(r, e);
                      let i = this.parseMaybeDefault(r.loc.start, r);
                      return t.length && (r.decorators = t), i;
                    }
                    parseAssignableListItemTypes(e, t) {
                      return e;
                    }
                    parseMaybeDefault(e, t) {
                      var r;
                      if (
                        (null != e || (e = this.state.startLoc),
                        (t = null != (r = t) ? r : this.parseBindingAtom()),
                        !this.eat(29))
                      )
                        return t;
                      let i = this.startNodeAt(e);
                      return (
                        (i.left = t),
                        (i.right = this.parseMaybeAssignAllowIn()),
                        this.finishNode(i, 'AssignmentPattern')
                      );
                    }
                    isValidLVal(e, t, r) {
                      return ih(
                        {
                          AssignmentPattern: 'left',
                          RestElement: 'argument',
                          ObjectProperty: 'value',
                          ParenthesizedExpression: 'expression',
                          ArrayPattern: 'elements',
                          ObjectPattern: 'properties'
                        },
                        e
                      );
                    }
                    checkLVal(e, t) {
                      var r;
                      let {
                          in: i,
                          binding: a = 64,
                          checkClashes: l = !1,
                          strictModeChanged: f = !1,
                          hasParenthesizedAncestor: y = !1
                        } = t,
                        g = e.type;
                      if (this.isObjectMethod(e)) return;
                      if ('MemberExpression' === g) {
                        64 !== a && this.raise(Q.InvalidPropertyBindingPattern, { at: e });
                        return;
                      }
                      if ('Identifier' === g) {
                        this.checkIdentifier(e, a, f);
                        let { name: t } = e;
                        l && (l.has(t) ? this.raise(Q.ParamDupe, { at: e }) : l.add(t));
                        return;
                      }
                      let T = this.isValidLVal(
                        g,
                        !(y || (null != (r = e.extra) && r.parenthesized)) && 'AssignmentExpression' === i.type,
                        a
                      );
                      if (!0 === T) return;
                      if (!1 === T) {
                        let t = 64 === a ? Q.InvalidLhs : Q.InvalidLhsBinding;
                        this.raise(t, { at: e, ancestor: i });
                        return;
                      }
                      let [E, C] = Array.isArray(T) ? T : [T, 'ParenthesizedExpression' === g],
                        I =
                          'ArrayPattern' === g || 'ObjectPattern' === g || 'ParenthesizedExpression' === g
                            ? { type: g }
                            : i;
                      for (let t of [].concat(e[E]))
                        t &&
                          this.checkLVal(t, {
                            in: I,
                            binding: a,
                            checkClashes: l,
                            strictModeChanged: f,
                            hasParenthesizedAncestor: C
                          });
                    }
                    checkIdentifier(e, t) {
                      var r;
                      let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                      this.state.strict &&
                        (i ? xr(e.name, this.inModule) : ((r = e.name), ep.has(r))) &&
                        (64 === t
                          ? this.raise(Q.StrictEvalArguments, { at: e, referenceName: e.name })
                          : this.raise(Q.StrictEvalArgumentsBinding, { at: e, bindingName: e.name })),
                        8192 & t && 'let' === e.name && this.raise(Q.LetInLexicalBinding, { at: e }),
                        64 & t || this.declareNameFromIdentifier(e, t);
                    }
                    declareNameFromIdentifier(e, t) {
                      this.scope.declareName(e.name, t, e.loc.start);
                    }
                    checkToRestConversion(e, t) {
                      switch (e.type) {
                        case 'ParenthesizedExpression':
                          this.checkToRestConversion(e.expression, t);
                          break;
                        case 'Identifier':
                        case 'MemberExpression':
                          break;
                        case 'ArrayExpression':
                        case 'ObjectExpression':
                          if (t) break;
                        default:
                          this.raise(Q.InvalidRestAssignmentPattern, { at: e });
                      }
                    }
                    checkCommaAfterRest(e) {
                      return (
                        !!this.match(12) &&
                        (this.raise(this.lookaheadCharCode() === e ? Q.RestTrailingComma : Q.ElementAfterRest, {
                          at: this.state.startLoc
                        }),
                        !0)
                      );
                    }
                  },
                  nh = (e, t) => Object.hasOwnProperty.call(e, t) && e[t];
                function oh(e) {
                  if (null == e) throw Error(`Unexpected ${e} value.`);
                  return e;
                }
                function $r(e) {
                  if (!e) throw Error('Assert fail');
                }
                var eG = pe`typescript`({
                  AbstractMethodHasImplementation: (e) => {
                    let { methodName: t } = e;
                    return `Method '${t}' cannot have an implementation because it is marked abstract.`;
                  },
                  AbstractPropertyHasInitializer: (e) => {
                    let { propertyName: t } = e;
                    return `Property '${t}' cannot have an initializer because it is marked abstract.`;
                  },
                  AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
                  AccesorCannotHaveTypeParameters: 'An accessor cannot have type parameters.',
                  AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.",
                  ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
                  ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
                  ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference:
                    "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
                  ConstructorHasTypeParameters: 'Type parameters cannot appear on a constructor declaration.',
                  DeclareAccessor: (e) => {
                    let { kind: t } = e;
                    return `'declare' is not allowed in ${t}ters.`;
                  },
                  DeclareClassFieldHasInitializer: 'Initializers are not allowed in ambient contexts.',
                  DeclareFunctionHasImplementation: 'An implementation cannot be declared in ambient contexts.',
                  DuplicateAccessibilityModifier: (e) => {
                    let { modifier: t } = e;
                    return 'Accessibility modifier already seen.';
                  },
                  DuplicateModifier: (e) => {
                    let { modifier: t } = e;
                    return `Duplicate modifier: '${t}'.`;
                  },
                  EmptyHeritageClauseType: (e) => {
                    let { token: t } = e;
                    return `'${t}' list cannot be empty.`;
                  },
                  EmptyTypeArguments: 'Type argument list cannot be empty.',
                  EmptyTypeParameters: 'Type parameter list cannot be empty.',
                  ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
                  ImportAliasHasImportType: "An import alias can not use 'import type'.",
                  ImportReflectionHasImportType: 'An `import module` declaration can not use `type` modifier',
                  IncompatibleModifiers: (e) => {
                    let { modifiers: t } = e;
                    return `'${t[0]}' modifier cannot be used with '${t[1]}' modifier.`;
                  },
                  IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
                  IndexSignatureHasAccessibility: (e) => {
                    let { modifier: t } = e;
                    return `Index signatures cannot have an accessibility modifier ('${t}').`;
                  },
                  IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
                  IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
                  IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
                  InitializerNotAllowedInAmbientContext: 'Initializers are not allowed in ambient contexts.',
                  InvalidModifierOnTypeMember: (e) => {
                    let { modifier: t } = e;
                    return `'${t}' modifier cannot appear on a type member.`;
                  },
                  InvalidModifierOnTypeParameter: (e) => {
                    let { modifier: t } = e;
                    return `'${t}' modifier cannot appear on a type parameter.`;
                  },
                  InvalidModifierOnTypeParameterPositions: (e) => {
                    let { modifier: t } = e;
                    return `'${t}' modifier can only appear on a type parameter of a class, interface or type alias.`;
                  },
                  InvalidModifiersOrder: (e) => {
                    let { orderedModifiers: t } = e;
                    return `'${t[0]}' modifier must precede '${t[1]}' modifier.`;
                  },
                  InvalidPropertyAccessAfterInstantiationExpression:
                    'Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.',
                  InvalidTupleMemberLabel: 'Tuple members must be labeled with a simple identifier.',
                  MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
                  MixedLabeledAndUnlabeledElements: 'Tuple members must all have names or all not have names.',
                  NonAbstractClassHasAbstractMethod: 'Abstract methods can only appear within an abstract class.',
                  NonClassMethodPropertyHasAbstractModifer:
                    "'abstract' modifier can only appear on a class, method, or property declaration.",
                  OptionalTypeBeforeRequired: 'A required element cannot follow an optional element.',
                  OverrideNotInSubClass:
                    "This member cannot have an 'override' modifier because its containing class does not extend another class.",
                  PatternIsOptional: 'A binding pattern parameter cannot be optional in an implementation signature.',
                  PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
                  PrivateElementHasAccessibility: (e) => {
                    let { modifier: t } = e;
                    return `Private elements cannot have an accessibility modifier ('${t}').`;
                  },
                  ReadonlyForMethodSignature:
                    "'readonly' modifier can only appear on a property declaration or index signature.",
                  ReservedArrowTypeParam:
                    'This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.',
                  ReservedTypeAssertion:
                    'This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.',
                  SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
                  SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
                  SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
                  SingleTypeParameterWithoutTrailingComma: (e) => {
                    let { typeParameterName: t } = e;
                    return `Single type parameter ${t} should have a trailing comma. Example usage: <${t},>.`;
                  },
                  StaticBlockCannotHaveModifier: 'Static class blocks cannot have any modifier.',
                  TupleOptionalAfterType:
                    'A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).',
                  TypeAnnotationAfterAssign:
                    'Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.',
                  TypeImportCannotSpecifyDefaultAndNamed:
                    'A type-only import can specify a default import or named bindings, but not both.',
                  TypeModifierIsUsedInTypeExports:
                    "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
                  TypeModifierIsUsedInTypeImports:
                    "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
                  UnexpectedParameterModifier: 'A parameter property is only allowed in a constructor implementation.',
                  UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
                  UnexpectedTypeAnnotation: 'Did not expect a type annotation here.',
                  UnexpectedTypeCastInParameter: 'Unexpected type cast in parameter position.',
                  UnsupportedImportTypeArgument: 'Argument in a type import must be a string literal.',
                  UnsupportedParameterPropertyKind: 'A parameter property may not be declared using a binding pattern.',
                  UnsupportedSignatureParameterKind: (e) => {
                    let { type: t } = e;
                    return `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${t}.`;
                  }
                });
                function lh(e) {
                  switch (e) {
                    case 'any':
                      return 'TSAnyKeyword';
                    case 'boolean':
                      return 'TSBooleanKeyword';
                    case 'bigint':
                      return 'TSBigIntKeyword';
                    case 'never':
                      return 'TSNeverKeyword';
                    case 'number':
                      return 'TSNumberKeyword';
                    case 'object':
                      return 'TSObjectKeyword';
                    case 'string':
                      return 'TSStringKeyword';
                    case 'symbol':
                      return 'TSSymbolKeyword';
                    case 'undefined':
                      return 'TSUndefinedKeyword';
                    case 'unknown':
                      return 'TSUnknownKeyword';
                    default:
                      return;
                  }
                }
                function Hr(e) {
                  return 'private' === e || 'public' === e || 'protected' === e;
                }
                function hh(e) {
                  return 'in' === e || 'out' === e;
                }
                function ch(e) {
                  if ('MemberExpression' !== e.type) return !1;
                  let { computed: t, property: r } = e;
                  return (
                    (!t ||
                      'StringLiteral' === r.type ||
                      ('TemplateLiteral' === r.type && !(r.expressions.length > 0))) &&
                    Vr(e.object)
                  );
                }
                function ph(e, t) {
                  var r;
                  let { type: i } = e;
                  if (null != (r = e.extra) && r.parenthesized) return !1;
                  if (t) {
                    if ('Literal' === i) {
                      let { value: t } = e;
                      if ('string' == typeof t || 'boolean' == typeof t) return !0;
                    }
                  } else if ('StringLiteral' === i || 'BooleanLiteral' === i) return !0;
                  return !!(zr(e, t) || fh(e, t) || ('TemplateLiteral' === i && 0 === e.expressions.length) || ch(e));
                }
                function zr(e, t) {
                  return t
                    ? 'Literal' === e.type && ('number' == typeof e.value || 'bigint' in e)
                    : 'NumericLiteral' === e.type || 'BigIntLiteral' === e.type;
                }
                function fh(e, t) {
                  if ('UnaryExpression' === e.type) {
                    let { operator: r, argument: i } = e;
                    if ('-' === r && zr(i, t)) return !0;
                  }
                  return !1;
                }
                function Vr(e) {
                  return 'Identifier' === e.type || ('MemberExpression' === e.type && !e.computed && Vr(e.object));
                }
                var eY = pe`placeholders`({
                  ClassNameIsRequired: 'A class name is required.',
                  UnexpectedSpace: 'Unexpected space in placeholder.'
                });
                function J(e, t) {
                  let [r, i] = 'string' == typeof t ? [t, {}] : t,
                    a = Object.keys(i),
                    l = 0 === a.length;
                  return e.some((e) => {
                    if ('string' == typeof e) return l && e === r;
                    {
                      let [t, l] = e;
                      if (t !== r) return !1;
                      for (let e of a) if (l[e] !== i[e]) return !1;
                      return !0;
                    }
                  });
                }
                function we(e, t, r) {
                  let i = e.find((e) => (Array.isArray(e) ? e[0] === t : e === t));
                  return i && Array.isArray(i) && i.length > 1 ? i[1][r] : null;
                }
                var eQ = ['minimal', 'fsharp', 'hack', 'smart'],
                  eZ = ['^^', '@@', '^', '%', '#'],
                  e1 = ['hash', 'bar'];
                function yh(e) {
                  if (J(e, 'decorators')) {
                    if (J(e, 'decorators-legacy'))
                      throw Error('Cannot use the decorators and decorators-legacy plugin together');
                    let t = we(e, 'decorators', 'decoratorsBeforeExport');
                    if (null != t && 'boolean' != typeof t)
                      throw Error("'decoratorsBeforeExport' must be a boolean, if specified.");
                    let r = we(e, 'decorators', 'allowCallParenthesized');
                    if (null != r && 'boolean' != typeof r) throw Error("'allowCallParenthesized' must be a boolean.");
                  }
                  if (J(e, 'flow') && J(e, 'typescript')) throw Error('Cannot combine flow and typescript plugins.');
                  if (J(e, 'placeholders') && J(e, 'v8intrinsic'))
                    throw Error('Cannot combine placeholders and v8intrinsic plugins.');
                  if (J(e, 'pipelineOperator')) {
                    let t = we(e, 'pipelineOperator', 'proposal');
                    if (!eQ.includes(t)) {
                      let e = eQ.map((e) => `"${e}"`).join(', ');
                      throw Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${e}.`);
                    }
                    let r = J(e, ['recordAndTuple', { syntaxType: 'hash' }]);
                    if ('hack' === t) {
                      if (J(e, 'placeholders')) throw Error('Cannot combine placeholders plugin and Hack-style pipes.');
                      if (J(e, 'v8intrinsic')) throw Error('Cannot combine v8intrinsic plugin and Hack-style pipes.');
                      let t = we(e, 'pipelineOperator', 'topicToken');
                      if (!eZ.includes(t)) {
                        let e = eZ.map((e) => `"${e}"`).join(', ');
                        throw Error(
                          `"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${e}.`
                        );
                      }
                      if ('#' === t && r)
                        throw Error(
                          'Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.'
                        );
                    } else if ('smart' === t && r)
                      throw Error(
                        'Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.'
                      );
                  }
                  if (J(e, 'moduleAttributes')) {
                    if (J(e, 'importAssertions'))
                      throw Error('Cannot combine importAssertions and moduleAttributes plugins.');
                    if ('may-2020' !== we(e, 'moduleAttributes', 'version'))
                      throw Error(
                        "The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'."
                      );
                  }
                  if (
                    J(e, 'recordAndTuple') &&
                    null != we(e, 'recordAndTuple', 'syntaxType') &&
                    !e1.includes(we(e, 'recordAndTuple', 'syntaxType'))
                  )
                    throw Error(
                      "The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " +
                        e1.map((e) => `'${e}'`).join(', ')
                    );
                  if (J(e, 'asyncDoExpressions') && !J(e, 'doExpressions')) {
                    let e = Error(
                      "'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins."
                    );
                    throw ((e.missingPlugins = 'doExpressions'), e);
                  }
                }
                var e0 = {
                    estree: (e) =>
                      class extends e {
                        parse() {
                          let e = ze(super.parse());
                          return this.options.tokens && (e.tokens = e.tokens.map(ze)), e;
                        }
                        parseRegExpLiteral(e) {
                          let { pattern: t, flags: r } = e,
                            i = null;
                          try {
                            i = new RegExp(t, r);
                          } catch {}
                          let a = this.estreeParseLiteral(i);
                          return (a.regex = { pattern: t, flags: r }), a;
                        }
                        parseBigIntLiteral(e) {
                          let t;
                          try {
                            t = BigInt(e);
                          } catch {
                            t = null;
                          }
                          let r = this.estreeParseLiteral(t);
                          return (r.bigint = String(r.value || e)), r;
                        }
                        parseDecimalLiteral(e) {
                          let t = this.estreeParseLiteral(null);
                          return (t.decimal = String(t.value || e)), t;
                        }
                        estreeParseLiteral(e) {
                          return this.parseLiteral(e, 'Literal');
                        }
                        parseStringLiteral(e) {
                          return this.estreeParseLiteral(e);
                        }
                        parseNumericLiteral(e) {
                          return this.estreeParseLiteral(e);
                        }
                        parseNullLiteral() {
                          return this.estreeParseLiteral(null);
                        }
                        parseBooleanLiteral(e) {
                          return this.estreeParseLiteral(e);
                        }
                        directiveToStmt(e) {
                          let t = e.value;
                          return (
                            delete e.value,
                            (t.type = 'Literal'),
                            (t.raw = t.extra.raw),
                            (t.value = t.extra.expressionValue),
                            (e.type = 'ExpressionStatement'),
                            (e.expression = t),
                            (e.directive = t.extra.rawValue),
                            delete t.extra,
                            e
                          );
                        }
                        initFunction(e, t) {
                          super.initFunction(e, t), (e.expression = !1);
                        }
                        checkDeclaration(e) {
                          null != e && this.isObjectProperty(e)
                            ? this.checkDeclaration(e.value)
                            : super.checkDeclaration(e);
                        }
                        getObjectOrClassMethodParams(e) {
                          return e.value.params;
                        }
                        isValidDirective(e) {
                          var t;
                          return (
                            'ExpressionStatement' === e.type &&
                            'Literal' === e.expression.type &&
                            'string' == typeof e.expression.value &&
                            !(null != (t = e.expression.extra) && t.parenthesized)
                          );
                        }
                        parseBlockBody(e, t, r, i, a) {
                          super.parseBlockBody(e, t, r, i, a);
                          let l = e.directives.map((e) => this.directiveToStmt(e));
                          (e.body = l.concat(e.body)), delete e.directives;
                        }
                        pushClassMethod(e, t, r, i, a, l) {
                          this.parseMethod(t, r, i, a, l, 'ClassMethod', !0),
                            t.typeParameters && ((t.value.typeParameters = t.typeParameters), delete t.typeParameters),
                            e.body.push(t);
                        }
                        parsePrivateName() {
                          let e = super.parsePrivateName();
                          return this.getPluginOption('estree', 'classFeatures')
                            ? this.convertPrivateNameToPrivateIdentifier(e)
                            : e;
                        }
                        convertPrivateNameToPrivateIdentifier(e) {
                          let t = super.getPrivateNameSV(e);
                          return delete e.id, (e.name = t), (e.type = 'PrivateIdentifier'), e;
                        }
                        isPrivateName(e) {
                          return this.getPluginOption('estree', 'classFeatures')
                            ? 'PrivateIdentifier' === e.type
                            : super.isPrivateName(e);
                        }
                        getPrivateNameSV(e) {
                          return this.getPluginOption('estree', 'classFeatures') ? e.name : super.getPrivateNameSV(e);
                        }
                        parseLiteral(e, t) {
                          let r = super.parseLiteral(e, t);
                          return (r.raw = r.extra.raw), delete r.extra, r;
                        }
                        parseFunctionBody(e, t) {
                          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          super.parseFunctionBody(e, t, r), (e.expression = 'BlockStatement' !== e.body.type);
                        }
                        parseMethod(e, t, r, i, a, l) {
                          let f = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                            y = this.startNode();
                          return (
                            (y.kind = e.kind),
                            ((y = super.parseMethod(y, t, r, i, a, l, f)).type = 'FunctionExpression'),
                            delete y.kind,
                            (e.value = y),
                            'ClassPrivateMethod' === l && (e.computed = !1),
                            this.finishNode(e, 'MethodDefinition')
                          );
                        }
                        parseClassProperty() {
                          let e = super.parseClassProperty(...arguments);
                          return this.getPluginOption('estree', 'classFeatures') && (e.type = 'PropertyDefinition'), e;
                        }
                        parseClassPrivateProperty() {
                          let e = super.parseClassPrivateProperty(...arguments);
                          return (
                            this.getPluginOption('estree', 'classFeatures') &&
                              ((e.type = 'PropertyDefinition'), (e.computed = !1)),
                            e
                          );
                        }
                        parseObjectMethod(e, t, r, i, a) {
                          let l = super.parseObjectMethod(e, t, r, i, a);
                          return (
                            l && ((l.type = 'Property'), 'method' === l.kind && (l.kind = 'init'), (l.shorthand = !1)),
                            l
                          );
                        }
                        parseObjectProperty(e, t, r, i) {
                          let a = super.parseObjectProperty(e, t, r, i);
                          return a && ((a.kind = 'init'), (a.type = 'Property')), a;
                        }
                        isValidLVal(e, t, r) {
                          return 'Property' === e ? 'value' : super.isValidLVal(e, t, r);
                        }
                        isAssignable(e, t) {
                          return null != e && this.isObjectProperty(e)
                            ? this.isAssignable(e.value, t)
                            : super.isAssignable(e, t);
                        }
                        toAssignable(e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                          if (null != e && this.isObjectProperty(e)) {
                            let { key: r, value: i } = e;
                            this.isPrivateName(r) &&
                              this.classScope.usePrivateName(this.getPrivateNameSV(r), r.loc.start),
                              this.toAssignable(i, t);
                          } else super.toAssignable(e, t);
                        }
                        toAssignableObjectExpressionProp(e, t, r) {
                          'get' === e.kind || 'set' === e.kind
                            ? this.raise(Q.PatternHasAccessor, { at: e.key })
                            : e.method
                            ? this.raise(Q.PatternHasMethod, { at: e.key })
                            : super.toAssignableObjectExpressionProp(e, t, r);
                        }
                        finishCallExpression(e, t) {
                          let r = super.finishCallExpression(e, t);
                          if ('Import' === r.callee.type) {
                            if (
                              ((r.type = 'ImportExpression'),
                              (r.source = r.arguments[0]),
                              this.hasPlugin('importAssertions'))
                            ) {
                              var i;
                              r.attributes = null != (i = r.arguments[1]) ? i : null;
                            }
                            delete r.arguments, delete r.callee;
                          }
                          return r;
                        }
                        toReferencedArguments(e) {
                          'ImportExpression' !== e.type && super.toReferencedArguments(e);
                        }
                        parseExport(e, t) {
                          let r = this.state.lastTokStartLoc,
                            i = super.parseExport(e, t);
                          switch (i.type) {
                            case 'ExportAllDeclaration':
                              i.exported = null;
                              break;
                            case 'ExportNamedDeclaration':
                              1 === i.specifiers.length &&
                                'ExportNamespaceSpecifier' === i.specifiers[0].type &&
                                ((i.type = 'ExportAllDeclaration'),
                                (i.exported = i.specifiers[0].exported),
                                delete i.specifiers);
                            case 'ExportDefaultDeclaration': {
                              var a;
                              let { declaration: e } = i;
                              (null == e ? void 0 : e.type) === 'ClassDeclaration' &&
                                (null == (a = e.decorators) ? void 0 : a.length) > 0 &&
                                e.start === i.start &&
                                this.resetStartLocation(i, r);
                            }
                          }
                          return i;
                        }
                        parseSubscript(e, t, r, i) {
                          let a = super.parseSubscript(e, t, r, i);
                          if (i.optionalChainMember) {
                            if (
                              (('OptionalMemberExpression' === a.type || 'OptionalCallExpression' === a.type) &&
                                (a.type = a.type.substring(8)),
                              i.stop)
                            ) {
                              let e = this.startNodeAtNode(a);
                              return (e.expression = a), this.finishNode(e, 'ChainExpression');
                            }
                          } else ('MemberExpression' === a.type || 'CallExpression' === a.type) && (a.optional = !1);
                          return a;
                        }
                        hasPropertyAsPrivateName(e) {
                          return 'ChainExpression' === e.type && (e = e.expression), super.hasPropertyAsPrivateName(e);
                        }
                        isObjectProperty(e) {
                          return 'Property' === e.type && 'init' === e.kind && !e.method;
                        }
                        isObjectMethod(e) {
                          return e.method || 'get' === e.kind || 'set' === e.kind;
                        }
                        finishNodeAt(e, t, r) {
                          return ze(super.finishNodeAt(e, t, r));
                        }
                        resetStartLocation(e, t) {
                          super.resetStartLocation(e, t), ze(e);
                        }
                        resetEndLocation(e) {
                          let t =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.lastTokEndLoc;
                          super.resetEndLocation(e, t), ze(e);
                        }
                      },
                    jsx: (e) =>
                      class extends e {
                        jsxReadToken() {
                          let e = '',
                            t = this.state.pos;
                          for (;;) {
                            if (this.state.pos >= this.length)
                              throw this.raise(eK.UnterminatedJsxContent, { at: this.state.startLoc });
                            let r = this.input.charCodeAt(this.state.pos);
                            switch (r) {
                              case 60:
                              case 123:
                                if (this.state.pos === this.state.start) {
                                  60 === r && this.state.canStartJSXElement
                                    ? (++this.state.pos, this.finishToken(140))
                                    : super.getTokenFromCode(r);
                                  return;
                                }
                                (e += this.input.slice(t, this.state.pos)), this.finishToken(139, e);
                                return;
                              case 38:
                                (e += this.input.slice(t, this.state.pos) + this.jsxReadEntity()), (t = this.state.pos);
                                break;
                              default:
                                Ge(r)
                                  ? ((e += this.input.slice(t, this.state.pos) + this.jsxReadNewLine(!0)),
                                    (t = this.state.pos))
                                  : ++this.state.pos;
                            }
                          }
                        }
                        jsxReadNewLine(e) {
                          let t = this.input.charCodeAt(this.state.pos),
                            r;
                          return (
                            ++this.state.pos,
                            13 === t && 10 === this.input.charCodeAt(this.state.pos)
                              ? (++this.state.pos,
                                (r = e
                                  ? `
`
                                  : `\r
`))
                              : (r = String.fromCharCode(t)),
                            ++this.state.curLine,
                            (this.state.lineStart = this.state.pos),
                            r
                          );
                        }
                        jsxReadString(e) {
                          let t = '',
                            r = ++this.state.pos;
                          for (;;) {
                            if (this.state.pos >= this.length)
                              throw this.raise(Q.UnterminatedString, { at: this.state.startLoc });
                            let i = this.input.charCodeAt(this.state.pos);
                            if (i === e) break;
                            38 === i
                              ? ((t += this.input.slice(r, this.state.pos) + this.jsxReadEntity()),
                                (r = this.state.pos))
                              : Ge(i)
                              ? ((t += this.input.slice(r, this.state.pos) + this.jsxReadNewLine(!1)),
                                (r = this.state.pos))
                              : ++this.state.pos;
                          }
                          (t += this.input.slice(r, this.state.pos++)), this.finishToken(131, t);
                        }
                        jsxReadEntity() {
                          let e = ++this.state.pos;
                          if (35 === this.codePointAtPos(this.state.pos)) {
                            ++this.state.pos;
                            let e = 10;
                            120 === this.codePointAtPos(this.state.pos) && ((e = 16), ++this.state.pos);
                            let t = this.readInt(e, void 0, !1, 'bail');
                            if (null !== t && 59 === this.codePointAtPos(this.state.pos))
                              return ++this.state.pos, String.fromCodePoint(t);
                          } else {
                            let t = 0,
                              r = !1;
                            for (
                              ;
                              t++ < 10 &&
                              this.state.pos < this.length &&
                              !(r = 59 == this.codePointAtPos(this.state.pos));

                            )
                              ++this.state.pos;
                            if (r) {
                              let t = eV[this.input.slice(e, this.state.pos)];
                              if ((++this.state.pos, t)) return t;
                            }
                          }
                          return (this.state.pos = e), '&';
                        }
                        jsxReadWord() {
                          let e,
                            t = this.state.pos;
                          do e = this.input.charCodeAt(++this.state.pos);
                          while (De(e) || 45 === e);
                          this.finishToken(138, this.input.slice(t, this.state.pos));
                        }
                        jsxParseIdentifier() {
                          let e = this.startNode();
                          return (
                            this.match(138)
                              ? (e.name = this.state.value)
                              : $t(this.state.type)
                              ? (e.name = T[this.state.type])
                              : this.unexpected(),
                            this.next(),
                            this.finishNode(e, 'JSXIdentifier')
                          );
                        }
                        jsxParseNamespacedName() {
                          let e = this.state.startLoc,
                            t = this.jsxParseIdentifier();
                          if (!this.eat(14)) return t;
                          let r = this.startNodeAt(e);
                          return (
                            (r.namespace = t),
                            (r.name = this.jsxParseIdentifier()),
                            this.finishNode(r, 'JSXNamespacedName')
                          );
                        }
                        jsxParseElementName() {
                          let e = this.state.startLoc,
                            t = this.jsxParseNamespacedName();
                          if ('JSXNamespacedName' === t.type) return t;
                          for (; this.eat(16); ) {
                            let r = this.startNodeAt(e);
                            (r.object = t),
                              (r.property = this.jsxParseIdentifier()),
                              (t = this.finishNode(r, 'JSXMemberExpression'));
                          }
                          return t;
                        }
                        jsxParseAttributeValue() {
                          let e;
                          switch (this.state.type) {
                            case 5:
                              return (
                                (e = this.startNode()),
                                this.setContext(i.brace),
                                this.next(),
                                'JSXEmptyExpression' ===
                                  (e = this.jsxParseExpressionContainer(e, i.j_oTag)).expression.type &&
                                  this.raise(eK.AttributeIsEmpty, { at: e }),
                                e
                              );
                            case 140:
                            case 131:
                              return this.parseExprAtom();
                            default:
                              throw this.raise(eK.UnsupportedJsxValue, { at: this.state.startLoc });
                          }
                        }
                        jsxParseEmptyExpression() {
                          let e = this.startNodeAt(this.state.lastTokEndLoc);
                          return this.finishNodeAt(e, 'JSXEmptyExpression', this.state.startLoc);
                        }
                        jsxParseSpreadChild(e) {
                          return (
                            this.next(),
                            (e.expression = this.parseExpression()),
                            this.setContext(i.j_expr),
                            (this.state.canStartJSXElement = !0),
                            this.expect(8),
                            this.finishNode(e, 'JSXSpreadChild')
                          );
                        }
                        jsxParseExpressionContainer(e, t) {
                          if (this.match(8)) e.expression = this.jsxParseEmptyExpression();
                          else {
                            let t = this.parseExpression();
                            e.expression = t;
                          }
                          return (
                            this.setContext(t),
                            (this.state.canStartJSXElement = !0),
                            this.expect(8),
                            this.finishNode(e, 'JSXExpressionContainer')
                          );
                        }
                        jsxParseAttribute() {
                          let e = this.startNode();
                          return this.match(5)
                            ? (this.setContext(i.brace),
                              this.next(),
                              this.expect(21),
                              (e.argument = this.parseMaybeAssignAllowIn()),
                              this.setContext(i.j_oTag),
                              (this.state.canStartJSXElement = !0),
                              this.expect(8),
                              this.finishNode(e, 'JSXSpreadAttribute'))
                            : ((e.name = this.jsxParseNamespacedName()),
                              (e.value = this.eat(29) ? this.jsxParseAttributeValue() : null),
                              this.finishNode(e, 'JSXAttribute'));
                        }
                        jsxParseOpeningElementAt(e) {
                          let t = this.startNodeAt(e);
                          return this.eat(141)
                            ? this.finishNode(t, 'JSXOpeningFragment')
                            : ((t.name = this.jsxParseElementName()), this.jsxParseOpeningElementAfterName(t));
                        }
                        jsxParseOpeningElementAfterName(e) {
                          let t = [];
                          for (; !this.match(56) && !this.match(141); ) t.push(this.jsxParseAttribute());
                          return (
                            (e.attributes = t),
                            (e.selfClosing = this.eat(56)),
                            this.expect(141),
                            this.finishNode(e, 'JSXOpeningElement')
                          );
                        }
                        jsxParseClosingElementAt(e) {
                          let t = this.startNodeAt(e);
                          return this.eat(141)
                            ? this.finishNode(t, 'JSXClosingFragment')
                            : ((t.name = this.jsxParseElementName()),
                              this.expect(141),
                              this.finishNode(t, 'JSXClosingElement'));
                        }
                        jsxParseElementAt(e) {
                          let t = this.startNodeAt(e),
                            r = [],
                            a = this.jsxParseOpeningElementAt(e),
                            l = null;
                          if (!a.selfClosing) {
                            e: for (;;)
                              switch (this.state.type) {
                                case 140:
                                  if (((e = this.state.startLoc), this.next(), this.eat(56))) {
                                    l = this.jsxParseClosingElementAt(e);
                                    break e;
                                  }
                                  r.push(this.jsxParseElementAt(e));
                                  break;
                                case 139:
                                  r.push(this.parseExprAtom());
                                  break;
                                case 5: {
                                  let e = this.startNode();
                                  this.setContext(i.brace),
                                    this.next(),
                                    this.match(21)
                                      ? r.push(this.jsxParseSpreadChild(e))
                                      : r.push(this.jsxParseExpressionContainer(e, i.j_expr));
                                  break;
                                }
                                default:
                                  this.unexpected();
                              }
                            Te(a) && !Te(l) && null !== l
                              ? this.raise(eK.MissingClosingTagFragment, { at: l })
                              : !Te(a) && Te(l)
                              ? this.raise(eK.MissingClosingTagElement, { at: l, openingTagName: Re(a.name) })
                              : Te(a) ||
                                Te(l) ||
                                Re(l.name) === Re(a.name) ||
                                this.raise(eK.MissingClosingTagElement, { at: l, openingTagName: Re(a.name) });
                          }
                          if (
                            (Te(a)
                              ? ((t.openingFragment = a), (t.closingFragment = l))
                              : ((t.openingElement = a), (t.closingElement = l)),
                            (t.children = r),
                            this.match(47))
                          )
                            throw this.raise(eK.UnwrappedAdjacentJSXElements, { at: this.state.startLoc });
                          return Te(a) ? this.finishNode(t, 'JSXFragment') : this.finishNode(t, 'JSXElement');
                        }
                        jsxParseElement() {
                          let e = this.state.startLoc;
                          return this.next(), this.jsxParseElementAt(e);
                        }
                        setContext(e) {
                          let { context: t } = this.state;
                          t[t.length - 1] = e;
                        }
                        parseExprAtom(e) {
                          return this.match(139)
                            ? this.parseLiteral(this.state.value, 'JSXText')
                            : this.match(140)
                            ? this.jsxParseElement()
                            : this.match(47) && 33 !== this.input.charCodeAt(this.state.pos)
                            ? (this.replaceToken(140), this.jsxParseElement())
                            : super.parseExprAtom(e);
                        }
                        skipSpace() {
                          this.curContext().preserveSpace || super.skipSpace();
                        }
                        getTokenFromCode(e) {
                          let t = this.curContext();
                          if (t === i.j_expr) {
                            this.jsxReadToken();
                            return;
                          }
                          if (t === i.j_oTag || t === i.j_cTag) {
                            if (fe(e)) {
                              this.jsxReadWord();
                              return;
                            }
                            if (62 === e) {
                              ++this.state.pos, this.finishToken(141);
                              return;
                            }
                            if ((34 === e || 39 === e) && t === i.j_oTag) {
                              this.jsxReadString(e);
                              return;
                            }
                          }
                          if (
                            60 === e &&
                            this.state.canStartJSXElement &&
                            33 !== this.input.charCodeAt(this.state.pos + 1)
                          ) {
                            ++this.state.pos, this.finishToken(140);
                            return;
                          }
                          super.getTokenFromCode(e);
                        }
                        updateContext(e) {
                          let { context: t, type: r } = this.state;
                          if (56 === r && 140 === e) t.splice(-2, 2, i.j_cTag), (this.state.canStartJSXElement = !1);
                          else if (140 === r) t.push(i.j_oTag);
                          else if (141 === r) {
                            let r = t[t.length - 1];
                            (r === i.j_oTag && 56 === e) || r === i.j_cTag
                              ? (t.pop(), (this.state.canStartJSXElement = t[t.length - 1] === i.j_expr))
                              : (this.setContext(i.j_expr), (this.state.canStartJSXElement = !0));
                          } else this.state.canStartJSXElement = se(r);
                        }
                      },
                    flow: (e) =>
                      class extends e {
                        constructor() {
                          super(...arguments), (this.flowPragma = void 0);
                        }
                        getScopeHandler() {
                          return ef;
                        }
                        shouldParseTypes() {
                          return this.getPluginOption('flow', 'all') || 'flow' === this.flowPragma;
                        }
                        shouldParseEnums() {
                          return !!this.getPluginOption('flow', 'enums');
                        }
                        finishToken(e, t) {
                          131 !== e && 13 !== e && 28 !== e && void 0 === this.flowPragma && (this.flowPragma = null),
                            super.finishToken(e, t);
                        }
                        addComment(e) {
                          if (void 0 === this.flowPragma) {
                            let t = eH.exec(e.value);
                            if (t) {
                              if ('flow' === t[1]) this.flowPragma = 'flow';
                              else if ('noflow' === t[1]) this.flowPragma = 'noflow';
                              else throw Error('Unexpected flow pragma');
                            }
                          }
                          super.addComment(e);
                        }
                        flowParseTypeInitialiser(e) {
                          let t = this.state.inType;
                          (this.state.inType = !0), this.expect(e || 14);
                          let r = this.flowParseType();
                          return (this.state.inType = t), r;
                        }
                        flowParsePredicate() {
                          let e = this.startNode(),
                            t = this.state.startLoc;
                          return (
                            this.next(),
                            this.expectContextual(108),
                            this.state.lastTokStart > t.index + 1 &&
                              this.raise(ez.UnexpectedSpaceBetweenModuloChecks, { at: t }),
                            this.eat(10)
                              ? ((e.value = super.parseExpression()),
                                this.expect(11),
                                this.finishNode(e, 'DeclaredPredicate'))
                              : this.finishNode(e, 'InferredPredicate')
                          );
                        }
                        flowParseTypeAndPredicateInitialiser() {
                          let e = this.state.inType;
                          (this.state.inType = !0), this.expect(14);
                          let t = null,
                            r = null;
                          return (
                            this.match(54)
                              ? ((this.state.inType = e), (r = this.flowParsePredicate()))
                              : ((t = this.flowParseType()),
                                (this.state.inType = e),
                                this.match(54) && (r = this.flowParsePredicate())),
                            [t, r]
                          );
                        }
                        flowParseDeclareClass(e) {
                          return this.next(), this.flowParseInterfaceish(e, !0), this.finishNode(e, 'DeclareClass');
                        }
                        flowParseDeclareFunction(e) {
                          this.next();
                          let t = (e.id = this.parseIdentifier()),
                            r = this.startNode(),
                            i = this.startNode();
                          this.match(47)
                            ? (r.typeParameters = this.flowParseTypeParameterDeclaration())
                            : (r.typeParameters = null),
                            this.expect(10);
                          let a = this.flowParseFunctionTypeParams();
                          return (
                            (r.params = a.params),
                            (r.rest = a.rest),
                            (r.this = a._this),
                            this.expect(11),
                            ([r.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser()),
                            (i.typeAnnotation = this.finishNode(r, 'FunctionTypeAnnotation')),
                            (t.typeAnnotation = this.finishNode(i, 'TypeAnnotation')),
                            this.resetEndLocation(t),
                            this.semicolon(),
                            this.scope.declareName(e.id.name, 2048, e.id.loc.start),
                            this.finishNode(e, 'DeclareFunction')
                          );
                        }
                        flowParseDeclare(e, t) {
                          return this.match(80)
                            ? this.flowParseDeclareClass(e)
                            : this.match(68)
                            ? this.flowParseDeclareFunction(e)
                            : this.match(74)
                            ? this.flowParseDeclareVariable(e)
                            : this.eatContextual(125)
                            ? this.match(16)
                              ? this.flowParseDeclareModuleExports(e)
                              : (t && this.raise(ez.NestedDeclareModule, { at: this.state.lastTokStartLoc }),
                                this.flowParseDeclareModule(e))
                            : this.isContextual(128)
                            ? this.flowParseDeclareTypeAlias(e)
                            : this.isContextual(129)
                            ? this.flowParseDeclareOpaqueType(e)
                            : this.isContextual(127)
                            ? this.flowParseDeclareInterface(e)
                            : this.match(82)
                            ? this.flowParseDeclareExportDeclaration(e, t)
                            : void this.unexpected();
                        }
                        flowParseDeclareVariable(e) {
                          return (
                            this.next(),
                            (e.id = this.flowParseTypeAnnotatableIdentifier(!0)),
                            this.scope.declareName(e.id.name, 5, e.id.loc.start),
                            this.semicolon(),
                            this.finishNode(e, 'DeclareVariable')
                          );
                        }
                        flowParseDeclareModule(e) {
                          this.scope.enter(0),
                            this.match(131) ? (e.id = super.parseExprAtom()) : (e.id = this.parseIdentifier());
                          let t = (e.body = this.startNode()),
                            r = (t.body = []);
                          for (this.expect(5); !this.match(8); ) {
                            let e = this.startNode();
                            this.match(83)
                              ? (this.next(),
                                this.isContextual(128) ||
                                  this.match(87) ||
                                  this.raise(ez.InvalidNonTypeImportInDeclareModule, {
                                    at: this.state.lastTokStartLoc
                                  }),
                                super.parseImport(e))
                              : (this.expectContextual(123, ez.UnsupportedStatementInDeclareModule),
                                (e = this.flowParseDeclare(e, !0))),
                              r.push(e);
                          }
                          this.scope.exit(), this.expect(8), this.finishNode(t, 'BlockStatement');
                          let i = null,
                            a = !1;
                          return (
                            r.forEach((e) => {
                              Jl(e)
                                ? ('CommonJS' === i && this.raise(ez.AmbiguousDeclareModuleKind, { at: e }), (i = 'ES'))
                                : 'DeclareModuleExports' === e.type &&
                                  (a && this.raise(ez.DuplicateDeclareModuleExports, { at: e }),
                                  'ES' === i && this.raise(ez.AmbiguousDeclareModuleKind, { at: e }),
                                  (i = 'CommonJS'),
                                  (a = !0));
                            }),
                            (e.kind = i || 'CommonJS'),
                            this.finishNode(e, 'DeclareModule')
                          );
                        }
                        flowParseDeclareExportDeclaration(e, t) {
                          if ((this.expect(82), this.eat(65)))
                            return (
                              this.match(68) || this.match(80)
                                ? (e.declaration = this.flowParseDeclare(this.startNode()))
                                : ((e.declaration = this.flowParseType()), this.semicolon()),
                              (e.default = !0),
                              this.finishNode(e, 'DeclareExportDeclaration')
                            );
                          if (
                            this.match(75) ||
                            this.isLet() ||
                            ((this.isContextual(128) || this.isContextual(127)) && !t)
                          ) {
                            let e = this.state.value;
                            throw this.raise(ez.UnsupportedDeclareExportKind, {
                              at: this.state.startLoc,
                              unsupportedExportKind: e,
                              suggestion: eq[e]
                            });
                          }
                          return this.match(74) || this.match(68) || this.match(80) || this.isContextual(129)
                            ? ((e.declaration = this.flowParseDeclare(this.startNode())),
                              (e.default = !1),
                              this.finishNode(e, 'DeclareExportDeclaration'))
                            : this.match(55) ||
                              this.match(5) ||
                              this.isContextual(127) ||
                              this.isContextual(128) ||
                              this.isContextual(129)
                            ? ('ExportNamedDeclaration' === (e = this.parseExport(e, null)).type &&
                                ((e.type = 'ExportDeclaration'), (e.default = !1), delete e.exportKind),
                              (e.type = 'Declare' + e.type),
                              e)
                            : void this.unexpected();
                        }
                        flowParseDeclareModuleExports(e) {
                          return (
                            this.next(),
                            this.expectContextual(109),
                            (e.typeAnnotation = this.flowParseTypeAnnotation()),
                            this.semicolon(),
                            this.finishNode(e, 'DeclareModuleExports')
                          );
                        }
                        flowParseDeclareTypeAlias(e) {
                          this.next();
                          let t = this.flowParseTypeAlias(e);
                          return (t.type = 'DeclareTypeAlias'), t;
                        }
                        flowParseDeclareOpaqueType(e) {
                          this.next();
                          let t = this.flowParseOpaqueType(e, !0);
                          return (t.type = 'DeclareOpaqueType'), t;
                        }
                        flowParseDeclareInterface(e) {
                          return this.next(), this.flowParseInterfaceish(e, !1), this.finishNode(e, 'DeclareInterface');
                        }
                        flowParseInterfaceish(e, t) {
                          if (
                            ((e.id = this.flowParseRestrictedIdentifier(!t, !0)),
                            this.scope.declareName(e.id.name, t ? 17 : 8201, e.id.loc.start),
                            this.match(47)
                              ? (e.typeParameters = this.flowParseTypeParameterDeclaration())
                              : (e.typeParameters = null),
                            (e.extends = []),
                            (e.implements = []),
                            (e.mixins = []),
                            this.eat(81))
                          )
                            do e.extends.push(this.flowParseInterfaceExtends());
                            while (!t && this.eat(12));
                          if (t) {
                            if (this.eatContextual(115))
                              do e.mixins.push(this.flowParseInterfaceExtends());
                              while (this.eat(12));
                            if (this.eatContextual(111))
                              do e.implements.push(this.flowParseInterfaceExtends());
                              while (this.eat(12));
                          }
                          e.body = this.flowParseObjectType({
                            allowStatic: t,
                            allowExact: !1,
                            allowSpread: !1,
                            allowProto: t,
                            allowInexact: !1
                          });
                        }
                        flowParseInterfaceExtends() {
                          let e = this.startNode();
                          return (
                            (e.id = this.flowParseQualifiedTypeIdentifier()),
                            this.match(47)
                              ? (e.typeParameters = this.flowParseTypeParameterInstantiation())
                              : (e.typeParameters = null),
                            this.finishNode(e, 'InterfaceExtends')
                          );
                        }
                        flowParseInterface(e) {
                          return this.flowParseInterfaceish(e, !1), this.finishNode(e, 'InterfaceDeclaration');
                        }
                        checkNotUnderscore(e) {
                          '_' === e && this.raise(ez.UnexpectedReservedUnderscore, { at: this.state.startLoc });
                        }
                        checkReservedType(e, t, r) {
                          e$.has(e) &&
                            this.raise(r ? ez.AssignReservedType : ez.UnexpectedReservedType, {
                              at: t,
                              reservedType: e
                            });
                        }
                        flowParseRestrictedIdentifier(e, t) {
                          return (
                            this.checkReservedType(this.state.value, this.state.startLoc, t), this.parseIdentifier(e)
                          );
                        }
                        flowParseTypeAlias(e) {
                          return (
                            (e.id = this.flowParseRestrictedIdentifier(!1, !0)),
                            this.scope.declareName(e.id.name, 8201, e.id.loc.start),
                            this.match(47)
                              ? (e.typeParameters = this.flowParseTypeParameterDeclaration())
                              : (e.typeParameters = null),
                            (e.right = this.flowParseTypeInitialiser(29)),
                            this.semicolon(),
                            this.finishNode(e, 'TypeAlias')
                          );
                        }
                        flowParseOpaqueType(e, t) {
                          return (
                            this.expectContextual(128),
                            (e.id = this.flowParseRestrictedIdentifier(!0, !0)),
                            this.scope.declareName(e.id.name, 8201, e.id.loc.start),
                            this.match(47)
                              ? (e.typeParameters = this.flowParseTypeParameterDeclaration())
                              : (e.typeParameters = null),
                            (e.supertype = null),
                            this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)),
                            (e.impltype = null),
                            t || (e.impltype = this.flowParseTypeInitialiser(29)),
                            this.semicolon(),
                            this.finishNode(e, 'OpaqueType')
                          );
                        }
                        flowParseTypeParameter() {
                          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = this.state.startLoc,
                            r = this.startNode(),
                            i = this.flowParseVariance(),
                            a = this.flowParseTypeAnnotatableIdentifier();
                          return (
                            (r.name = a.name),
                            (r.variance = i),
                            (r.bound = a.typeAnnotation),
                            this.match(29)
                              ? (this.eat(29), (r.default = this.flowParseType()))
                              : e && this.raise(ez.MissingTypeParamDefault, { at: t }),
                            this.finishNode(r, 'TypeParameter')
                          );
                        }
                        flowParseTypeParameterDeclaration() {
                          let e = this.state.inType,
                            t = this.startNode();
                          (t.params = []),
                            (this.state.inType = !0),
                            this.match(47) || this.match(140) ? this.next() : this.unexpected();
                          let r = !1;
                          do {
                            let e = this.flowParseTypeParameter(r);
                            t.params.push(e), e.default && (r = !0), this.match(48) || this.expect(12);
                          } while (!this.match(48));
                          return (
                            this.expect(48), (this.state.inType = e), this.finishNode(t, 'TypeParameterDeclaration')
                          );
                        }
                        flowParseTypeParameterInstantiation() {
                          let e = this.startNode(),
                            t = this.state.inType;
                          (e.params = []), (this.state.inType = !0), this.expect(47);
                          let r = this.state.noAnonFunctionType;
                          for (this.state.noAnonFunctionType = !1; !this.match(48); )
                            e.params.push(this.flowParseType()), this.match(48) || this.expect(12);
                          return (
                            (this.state.noAnonFunctionType = r),
                            this.expect(48),
                            (this.state.inType = t),
                            this.finishNode(e, 'TypeParameterInstantiation')
                          );
                        }
                        flowParseTypeParameterInstantiationCallOrNew() {
                          let e = this.startNode(),
                            t = this.state.inType;
                          for (e.params = [], this.state.inType = !0, this.expect(47); !this.match(48); )
                            e.params.push(this.flowParseTypeOrImplicitInstantiation()),
                              this.match(48) || this.expect(12);
                          return (
                            this.expect(48), (this.state.inType = t), this.finishNode(e, 'TypeParameterInstantiation')
                          );
                        }
                        flowParseInterfaceType() {
                          let e = this.startNode();
                          if ((this.expectContextual(127), (e.extends = []), this.eat(81)))
                            do e.extends.push(this.flowParseInterfaceExtends());
                            while (this.eat(12));
                          return (
                            (e.body = this.flowParseObjectType({
                              allowStatic: !1,
                              allowExact: !1,
                              allowSpread: !1,
                              allowProto: !1,
                              allowInexact: !1
                            })),
                            this.finishNode(e, 'InterfaceTypeAnnotation')
                          );
                        }
                        flowParseObjectPropertyKey() {
                          return this.match(132) || this.match(131) ? super.parseExprAtom() : this.parseIdentifier(!0);
                        }
                        flowParseObjectTypeIndexer(e, t, r) {
                          return (
                            (e.static = t),
                            14 === this.lookahead().type
                              ? ((e.id = this.flowParseObjectPropertyKey()), (e.key = this.flowParseTypeInitialiser()))
                              : ((e.id = null), (e.key = this.flowParseType())),
                            this.expect(3),
                            (e.value = this.flowParseTypeInitialiser()),
                            (e.variance = r),
                            this.finishNode(e, 'ObjectTypeIndexer')
                          );
                        }
                        flowParseObjectTypeInternalSlot(e, t) {
                          return (
                            (e.static = t),
                            (e.id = this.flowParseObjectPropertyKey()),
                            this.expect(3),
                            this.expect(3),
                            this.match(47) || this.match(10)
                              ? ((e.method = !0),
                                (e.optional = !1),
                                (e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))))
                              : ((e.method = !1),
                                this.eat(17) && (e.optional = !0),
                                (e.value = this.flowParseTypeInitialiser())),
                            this.finishNode(e, 'ObjectTypeInternalSlot')
                          );
                        }
                        flowParseObjectTypeMethodish(e) {
                          for (
                            e.params = [],
                              e.rest = null,
                              e.typeParameters = null,
                              e.this = null,
                              this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()),
                              this.expect(10),
                              this.match(78) &&
                                ((e.this = this.flowParseFunctionTypeParam(!0)),
                                (e.this.name = null),
                                this.match(11) || this.expect(12));
                            !this.match(11) && !this.match(21);

                          )
                            e.params.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
                          return (
                            this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(!1)),
                            this.expect(11),
                            (e.returnType = this.flowParseTypeInitialiser()),
                            this.finishNode(e, 'FunctionTypeAnnotation')
                          );
                        }
                        flowParseObjectTypeCallProperty(e, t) {
                          let r = this.startNode();
                          return (
                            (e.static = t),
                            (e.value = this.flowParseObjectTypeMethodish(r)),
                            this.finishNode(e, 'ObjectTypeCallProperty')
                          );
                        }
                        flowParseObjectType(e) {
                          let { allowStatic: t, allowExact: r, allowSpread: i, allowProto: a, allowInexact: l } = e,
                            f = this.state.inType;
                          this.state.inType = !0;
                          let y = this.startNode();
                          (y.callProperties = []), (y.properties = []), (y.indexers = []), (y.internalSlots = []);
                          let g,
                            T,
                            E = !1;
                          for (
                            r && this.match(6)
                              ? (this.expect(6), (g = 9), (T = !0))
                              : (this.expect(5), (g = 8), (T = !1)),
                              y.exact = T;
                            !this.match(g);

                          ) {
                            let e = !1,
                              r = null,
                              f = null,
                              g = this.startNode();
                            if (a && this.isContextual(116)) {
                              let e = this.lookahead();
                              14 !== e.type && 17 !== e.type && (this.next(), (r = this.state.startLoc), (t = !1));
                            }
                            if (t && this.isContextual(104)) {
                              let t = this.lookahead();
                              14 !== t.type && 17 !== t.type && (this.next(), (e = !0));
                            }
                            let C = this.flowParseVariance();
                            if (this.eat(0))
                              null != r && this.unexpected(r),
                                this.eat(0)
                                  ? (C && this.unexpected(C.loc.start),
                                    y.internalSlots.push(this.flowParseObjectTypeInternalSlot(g, e)))
                                  : y.indexers.push(this.flowParseObjectTypeIndexer(g, e, C));
                            else if (this.match(10) || this.match(47))
                              null != r && this.unexpected(r),
                                C && this.unexpected(C.loc.start),
                                y.callProperties.push(this.flowParseObjectTypeCallProperty(g, e));
                            else {
                              let t = 'init';
                              (this.isContextual(98) || this.isContextual(103)) &&
                                it(this.lookahead().type) &&
                                ((t = this.state.value), this.next());
                              let a = this.flowParseObjectTypeProperty(g, e, r, C, t, i, null != l ? l : !T);
                              null === a ? ((E = !0), (f = this.state.lastTokStartLoc)) : y.properties.push(a);
                            }
                            this.flowObjectTypeSemicolon(),
                              !f ||
                                this.match(8) ||
                                this.match(9) ||
                                this.raise(ez.UnexpectedExplicitInexactInObject, { at: f });
                          }
                          this.expect(g), i && (y.inexact = E);
                          let C = this.finishNode(y, 'ObjectTypeAnnotation');
                          return (this.state.inType = f), C;
                        }
                        flowParseObjectTypeProperty(e, t, r, i, a, l, f) {
                          if (this.eat(21))
                            return this.match(12) || this.match(13) || this.match(8) || this.match(9)
                              ? (l
                                  ? f || this.raise(ez.InexactInsideExact, { at: this.state.lastTokStartLoc })
                                  : this.raise(ez.InexactInsideNonObject, { at: this.state.lastTokStartLoc }),
                                i && this.raise(ez.InexactVariance, { at: i }),
                                null)
                              : (l || this.raise(ez.UnexpectedSpreadType, { at: this.state.lastTokStartLoc }),
                                null != r && this.unexpected(r),
                                i && this.raise(ez.SpreadVariance, { at: i }),
                                (e.argument = this.flowParseType()),
                                this.finishNode(e, 'ObjectTypeSpreadProperty'));
                          {
                            (e.key = this.flowParseObjectPropertyKey()),
                              (e.static = t),
                              (e.proto = null != r),
                              (e.kind = a);
                            let f = !1;
                            return (
                              this.match(47) || this.match(10)
                                ? ((e.method = !0),
                                  null != r && this.unexpected(r),
                                  i && this.unexpected(i.loc.start),
                                  (e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))),
                                  ('get' === a || 'set' === a) && this.flowCheckGetterSetterParams(e),
                                  !l &&
                                    'constructor' === e.key.name &&
                                    e.value.this &&
                                    this.raise(ez.ThisParamBannedInConstructor, { at: e.value.this }))
                                : ('init' !== a && this.unexpected(),
                                  (e.method = !1),
                                  this.eat(17) && (f = !0),
                                  (e.value = this.flowParseTypeInitialiser()),
                                  (e.variance = i)),
                              (e.optional = f),
                              this.finishNode(e, 'ObjectTypeProperty')
                            );
                          }
                        }
                        flowCheckGetterSetterParams(e) {
                          let t = 'get' === e.kind ? 0 : 1,
                            r = e.value.params.length + (e.value.rest ? 1 : 0);
                          e.value.this &&
                            this.raise('get' === e.kind ? ez.GetterMayNotHaveThisParam : ez.SetterMayNotHaveThisParam, {
                              at: e.value.this
                            }),
                            r !== t && this.raise('get' === e.kind ? Q.BadGetterArity : Q.BadSetterArity, { at: e }),
                            'set' === e.kind && e.value.rest && this.raise(Q.BadSetterRestParameter, { at: e });
                        }
                        flowObjectTypeSemicolon() {
                          this.eat(13) || this.eat(12) || this.match(8) || this.match(9) || this.unexpected();
                        }
                        flowParseQualifiedTypeIdentifier(e, t) {
                          null != e || (e = this.state.startLoc);
                          let r = t || this.flowParseRestrictedIdentifier(!0);
                          for (; this.eat(16); ) {
                            let t = this.startNodeAt(e);
                            (t.qualification = r),
                              (t.id = this.flowParseRestrictedIdentifier(!0)),
                              (r = this.finishNode(t, 'QualifiedTypeIdentifier'));
                          }
                          return r;
                        }
                        flowParseGenericType(e, t) {
                          let r = this.startNodeAt(e);
                          return (
                            (r.typeParameters = null),
                            (r.id = this.flowParseQualifiedTypeIdentifier(e, t)),
                            this.match(47) && (r.typeParameters = this.flowParseTypeParameterInstantiation()),
                            this.finishNode(r, 'GenericTypeAnnotation')
                          );
                        }
                        flowParseTypeofType() {
                          let e = this.startNode();
                          return (
                            this.expect(87),
                            (e.argument = this.flowParsePrimaryType()),
                            this.finishNode(e, 'TypeofTypeAnnotation')
                          );
                        }
                        flowParseTupleType() {
                          let e = this.startNode();
                          for (
                            e.types = [], this.expect(0);
                            this.state.pos < this.length &&
                            !this.match(3) &&
                            (e.types.push(this.flowParseType()), !this.match(3));

                          )
                            this.expect(12);
                          return this.expect(3), this.finishNode(e, 'TupleTypeAnnotation');
                        }
                        flowParseFunctionTypeParam(e) {
                          let t = null,
                            r = !1,
                            i = null,
                            a = this.startNode(),
                            l = this.lookahead(),
                            f = 78 === this.state.type;
                          return (
                            14 === l.type || 17 === l.type
                              ? (f && !e && this.raise(ez.ThisParamMustBeFirst, { at: a }),
                                (t = this.parseIdentifier(f)),
                                this.eat(17) && ((r = !0), f && this.raise(ez.ThisParamMayNotBeOptional, { at: a })),
                                (i = this.flowParseTypeInitialiser()))
                              : (i = this.flowParseType()),
                            (a.name = t),
                            (a.optional = r),
                            (a.typeAnnotation = i),
                            this.finishNode(a, 'FunctionTypeParam')
                          );
                        }
                        reinterpretTypeAsFunctionTypeParam(e) {
                          let t = this.startNodeAt(e.loc.start);
                          return (
                            (t.name = null),
                            (t.optional = !1),
                            (t.typeAnnotation = e),
                            this.finishNode(t, 'FunctionTypeParam')
                          );
                        }
                        flowParseFunctionTypeParams() {
                          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = null,
                            r = null;
                          for (
                            this.match(78) &&
                            (((r = this.flowParseFunctionTypeParam(!0)).name = null),
                            this.match(11) || this.expect(12));
                            !this.match(11) && !this.match(21);

                          )
                            e.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
                          return (
                            this.eat(21) && (t = this.flowParseFunctionTypeParam(!1)), { params: e, rest: t, _this: r }
                          );
                        }
                        flowIdentToTypeAnnotation(e, t, r) {
                          switch (r.name) {
                            case 'any':
                              return this.finishNode(t, 'AnyTypeAnnotation');
                            case 'bool':
                            case 'boolean':
                              return this.finishNode(t, 'BooleanTypeAnnotation');
                            case 'mixed':
                              return this.finishNode(t, 'MixedTypeAnnotation');
                            case 'empty':
                              return this.finishNode(t, 'EmptyTypeAnnotation');
                            case 'number':
                              return this.finishNode(t, 'NumberTypeAnnotation');
                            case 'string':
                              return this.finishNode(t, 'StringTypeAnnotation');
                            case 'symbol':
                              return this.finishNode(t, 'SymbolTypeAnnotation');
                            default:
                              return this.checkNotUnderscore(r.name), this.flowParseGenericType(e, r);
                          }
                        }
                        flowParsePrimaryType() {
                          let e = this.state.startLoc,
                            t = this.startNode(),
                            r,
                            i,
                            a = !1,
                            l = this.state.noAnonFunctionType;
                          switch (this.state.type) {
                            case 5:
                              return this.flowParseObjectType({
                                allowStatic: !1,
                                allowExact: !1,
                                allowSpread: !0,
                                allowProto: !1,
                                allowInexact: !0
                              });
                            case 6:
                              return this.flowParseObjectType({
                                allowStatic: !1,
                                allowExact: !0,
                                allowSpread: !0,
                                allowProto: !1,
                                allowInexact: !1
                              });
                            case 0:
                              return (
                                (this.state.noAnonFunctionType = !1),
                                (i = this.flowParseTupleType()),
                                (this.state.noAnonFunctionType = l),
                                i
                              );
                            case 47:
                              return (
                                (t.typeParameters = this.flowParseTypeParameterDeclaration()),
                                this.expect(10),
                                (r = this.flowParseFunctionTypeParams()),
                                (t.params = r.params),
                                (t.rest = r.rest),
                                (t.this = r._this),
                                this.expect(11),
                                this.expect(19),
                                (t.returnType = this.flowParseType()),
                                this.finishNode(t, 'FunctionTypeAnnotation')
                              );
                            case 10:
                              if ((this.next(), !this.match(11) && !this.match(21))) {
                                if (q(this.state.type) || this.match(78)) {
                                  let e = this.lookahead().type;
                                  a = 17 !== e && 14 !== e;
                                } else a = !0;
                              }
                              if (a) {
                                if (
                                  ((this.state.noAnonFunctionType = !1),
                                  (i = this.flowParseType()),
                                  (this.state.noAnonFunctionType = l),
                                  this.state.noAnonFunctionType ||
                                    !(this.match(12) || (this.match(11) && 19 === this.lookahead().type)))
                                )
                                  return this.expect(11), i;
                                this.eat(12);
                              }
                              return (
                                (r = i
                                  ? this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(i)])
                                  : this.flowParseFunctionTypeParams()),
                                (t.params = r.params),
                                (t.rest = r.rest),
                                (t.this = r._this),
                                this.expect(11),
                                this.expect(19),
                                (t.returnType = this.flowParseType()),
                                (t.typeParameters = null),
                                this.finishNode(t, 'FunctionTypeAnnotation')
                              );
                            case 131:
                              return this.parseLiteral(this.state.value, 'StringLiteralTypeAnnotation');
                            case 85:
                            case 86:
                              return (
                                (t.value = this.match(85)),
                                this.next(),
                                this.finishNode(t, 'BooleanLiteralTypeAnnotation')
                              );
                            case 53:
                              if ('-' === this.state.value) {
                                if ((this.next(), this.match(132)))
                                  return this.parseLiteralAtNode(-this.state.value, 'NumberLiteralTypeAnnotation', t);
                                if (this.match(133))
                                  return this.parseLiteralAtNode(-this.state.value, 'BigIntLiteralTypeAnnotation', t);
                                throw this.raise(ez.UnexpectedSubtractionOperand, { at: this.state.startLoc });
                              }
                              this.unexpected();
                              return;
                            case 132:
                              return this.parseLiteral(this.state.value, 'NumberLiteralTypeAnnotation');
                            case 133:
                              return this.parseLiteral(this.state.value, 'BigIntLiteralTypeAnnotation');
                            case 88:
                              return this.next(), this.finishNode(t, 'VoidTypeAnnotation');
                            case 84:
                              return this.next(), this.finishNode(t, 'NullLiteralTypeAnnotation');
                            case 78:
                              return this.next(), this.finishNode(t, 'ThisTypeAnnotation');
                            case 55:
                              return this.next(), this.finishNode(t, 'ExistsTypeAnnotation');
                            case 87:
                              return this.flowParseTypeofType();
                            default:
                              if ($t(this.state.type)) {
                                let e = T[this.state.type];
                                return this.next(), super.createIdentifier(t, e);
                              }
                              if (q(this.state.type))
                                return this.isContextual(127)
                                  ? this.flowParseInterfaceType()
                                  : this.flowIdentToTypeAnnotation(e, t, this.parseIdentifier());
                          }
                          this.unexpected();
                        }
                        flowParsePostfixType() {
                          let e = this.state.startLoc,
                            t = this.flowParsePrimaryType(),
                            r = !1;
                          for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
                            let i = this.startNodeAt(e),
                              a = this.eat(18);
                            (r = r || a),
                              this.expect(0),
                              !a && this.match(3)
                                ? ((i.elementType = t), this.next(), (t = this.finishNode(i, 'ArrayTypeAnnotation')))
                                : ((i.objectType = t),
                                  (i.indexType = this.flowParseType()),
                                  this.expect(3),
                                  r
                                    ? ((i.optional = a), (t = this.finishNode(i, 'OptionalIndexedAccessType')))
                                    : (t = this.finishNode(i, 'IndexedAccessType')));
                          }
                          return t;
                        }
                        flowParsePrefixType() {
                          let e = this.startNode();
                          return this.eat(17)
                            ? ((e.typeAnnotation = this.flowParsePrefixType()),
                              this.finishNode(e, 'NullableTypeAnnotation'))
                            : this.flowParsePostfixType();
                        }
                        flowParseAnonFunctionWithoutParens() {
                          let e = this.flowParsePrefixType();
                          if (!this.state.noAnonFunctionType && this.eat(19)) {
                            let t = this.startNodeAt(e.loc.start);
                            return (
                              (t.params = [this.reinterpretTypeAsFunctionTypeParam(e)]),
                              (t.rest = null),
                              (t.this = null),
                              (t.returnType = this.flowParseType()),
                              (t.typeParameters = null),
                              this.finishNode(t, 'FunctionTypeAnnotation')
                            );
                          }
                          return e;
                        }
                        flowParseIntersectionType() {
                          let e = this.startNode();
                          this.eat(45);
                          let t = this.flowParseAnonFunctionWithoutParens();
                          for (e.types = [t]; this.eat(45); ) e.types.push(this.flowParseAnonFunctionWithoutParens());
                          return 1 === e.types.length ? t : this.finishNode(e, 'IntersectionTypeAnnotation');
                        }
                        flowParseUnionType() {
                          let e = this.startNode();
                          this.eat(43);
                          let t = this.flowParseIntersectionType();
                          for (e.types = [t]; this.eat(43); ) e.types.push(this.flowParseIntersectionType());
                          return 1 === e.types.length ? t : this.finishNode(e, 'UnionTypeAnnotation');
                        }
                        flowParseType() {
                          let e = this.state.inType;
                          this.state.inType = !0;
                          let t = this.flowParseUnionType();
                          return (this.state.inType = e), t;
                        }
                        flowParseTypeOrImplicitInstantiation() {
                          if (130 !== this.state.type || '_' !== this.state.value) return this.flowParseType();
                          {
                            let e = this.state.startLoc,
                              t = this.parseIdentifier();
                            return this.flowParseGenericType(e, t);
                          }
                        }
                        flowParseTypeAnnotation() {
                          let e = this.startNode();
                          return (
                            (e.typeAnnotation = this.flowParseTypeInitialiser()), this.finishNode(e, 'TypeAnnotation')
                          );
                        }
                        flowParseTypeAnnotatableIdentifier(e) {
                          let t = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
                          return (
                            this.match(14) &&
                              ((t.typeAnnotation = this.flowParseTypeAnnotation()), this.resetEndLocation(t)),
                            t
                          );
                        }
                        typeCastToParameter(e) {
                          return (
                            (e.expression.typeAnnotation = e.typeAnnotation),
                            this.resetEndLocation(e.expression, e.typeAnnotation.loc.end),
                            e.expression
                          );
                        }
                        flowParseVariance() {
                          let e = null;
                          return this.match(53)
                            ? ((e = this.startNode()),
                              '+' === this.state.value ? (e.kind = 'plus') : (e.kind = 'minus'),
                              this.next(),
                              this.finishNode(e, 'Variance'))
                            : e;
                        }
                        parseFunctionBody(e, t) {
                          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          if (t) {
                            this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, !0, r));
                            return;
                          }
                          super.parseFunctionBody(e, !1, r);
                        }
                        parseFunctionBodyAndFinish(e, t) {
                          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          if (this.match(14)) {
                            let t = this.startNode();
                            ([t.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser()),
                              (e.returnType = t.typeAnnotation ? this.finishNode(t, 'TypeAnnotation') : null);
                          }
                          return super.parseFunctionBodyAndFinish(e, t, r);
                        }
                        parseStatementLike(e) {
                          if (this.state.strict && this.isContextual(127)) {
                            if (te(this.lookahead().type)) {
                              let e = this.startNode();
                              return this.next(), this.flowParseInterface(e);
                            }
                          } else if (this.shouldParseEnums() && this.isContextual(124)) {
                            let e = this.startNode();
                            return this.next(), this.flowParseEnumDeclaration(e);
                          }
                          let t = super.parseStatementLike(e);
                          return void 0 !== this.flowPragma || this.isValidDirective(t) || (this.flowPragma = null), t;
                        }
                        parseExpressionStatement(e, t, r) {
                          if ('Identifier' === t.type) {
                            if ('declare' === t.name) {
                              if (
                                this.match(80) ||
                                q(this.state.type) ||
                                this.match(68) ||
                                this.match(74) ||
                                this.match(82)
                              )
                                return this.flowParseDeclare(e);
                            } else if (q(this.state.type)) {
                              if ('interface' === t.name) return this.flowParseInterface(e);
                              if ('type' === t.name) return this.flowParseTypeAlias(e);
                              if ('opaque' === t.name) return this.flowParseOpaqueType(e, !1);
                            }
                          }
                          return super.parseExpressionStatement(e, t, r);
                        }
                        shouldParseExportDeclaration() {
                          let { type: e } = this.state;
                          return hr(e) || (this.shouldParseEnums() && 124 === e)
                            ? !this.state.containsEsc
                            : super.shouldParseExportDeclaration();
                        }
                        isExportDefaultSpecifier() {
                          let { type: e } = this.state;
                          return hr(e) || (this.shouldParseEnums() && 124 === e)
                            ? this.state.containsEsc
                            : super.isExportDefaultSpecifier();
                        }
                        parseExportDefaultExpression() {
                          if (this.shouldParseEnums() && this.isContextual(124)) {
                            let e = this.startNode();
                            return this.next(), this.flowParseEnumDeclaration(e);
                          }
                          return super.parseExportDefaultExpression();
                        }
                        parseConditional(e, t, r) {
                          if (!this.match(17)) return e;
                          if (this.state.maybeInArrowParameters) {
                            let t = this.lookaheadCharCode();
                            if (44 === t || 61 === t || 58 === t || 41 === t)
                              return this.setOptionalParametersError(r), e;
                          }
                          this.expect(17);
                          let i = this.state.clone(),
                            a = this.state.noArrowAt,
                            l = this.startNodeAt(t),
                            { consequent: f, failed: y } = this.tryParseConditionalConsequent(),
                            [g, T] = this.getArrowLikeExpressions(f);
                          if (y || T.length > 0) {
                            let e = [...a];
                            if (T.length > 0) {
                              (this.state = i), (this.state.noArrowAt = e);
                              for (let t = 0; t < T.length; t++) e.push(T[t].start);
                              ({ consequent: f, failed: y } = this.tryParseConditionalConsequent()),
                                ([g, T] = this.getArrowLikeExpressions(f));
                            }
                            y && g.length > 1 && this.raise(ez.AmbiguousConditionalArrow, { at: i.startLoc }),
                              y &&
                                1 === g.length &&
                                ((this.state = i),
                                e.push(g[0].start),
                                (this.state.noArrowAt = e),
                                ({ consequent: f, failed: y } = this.tryParseConditionalConsequent()));
                          }
                          return (
                            this.getArrowLikeExpressions(f, !0),
                            (this.state.noArrowAt = a),
                            this.expect(14),
                            (l.test = e),
                            (l.consequent = f),
                            (l.alternate = this.forwardNoArrowParamsConversionAt(l, () =>
                              this.parseMaybeAssign(void 0, void 0)
                            )),
                            this.finishNode(l, 'ConditionalExpression')
                          );
                        }
                        tryParseConditionalConsequent() {
                          this.state.noArrowParamsConversionAt.push(this.state.start);
                          let e = this.parseMaybeAssignAllowIn(),
                            t = !this.match(14);
                          return this.state.noArrowParamsConversionAt.pop(), { consequent: e, failed: t };
                        }
                        getArrowLikeExpressions(e, t) {
                          let r = [e],
                            i = [];
                          for (; 0 !== r.length; ) {
                            let e = r.pop();
                            'ArrowFunctionExpression' === e.type
                              ? (e.typeParameters || !e.returnType ? this.finishArrowValidation(e) : i.push(e),
                                r.push(e.body))
                              : 'ConditionalExpression' === e.type && (r.push(e.consequent), r.push(e.alternate));
                          }
                          return t
                            ? (i.forEach((e) => this.finishArrowValidation(e)), [i, []])
                            : Yl(i, (e) => e.params.every((e) => this.isAssignable(e, !0)));
                        }
                        finishArrowValidation(e) {
                          var t;
                          this.toAssignableList(e.params, null == (t = e.extra) ? void 0 : t.trailingCommaLoc, !1),
                            this.scope.enter(6),
                            super.checkParams(e, !1, !0),
                            this.scope.exit();
                        }
                        forwardNoArrowParamsConversionAt(e, t) {
                          let r;
                          return (
                            -1 !== this.state.noArrowParamsConversionAt.indexOf(e.start)
                              ? (this.state.noArrowParamsConversionAt.push(this.state.start),
                                (r = t()),
                                this.state.noArrowParamsConversionAt.pop())
                              : (r = t()),
                            r
                          );
                        }
                        parseParenItem(e, t) {
                          if (
                            ((e = super.parseParenItem(e, t)),
                            this.eat(17) && ((e.optional = !0), this.resetEndLocation(e)),
                            this.match(14))
                          ) {
                            let r = this.startNodeAt(t);
                            return (
                              (r.expression = e),
                              (r.typeAnnotation = this.flowParseTypeAnnotation()),
                              this.finishNode(r, 'TypeCastExpression')
                            );
                          }
                          return e;
                        }
                        assertModuleNodeAllowed(e) {
                          ('ImportDeclaration' === e.type && ('type' === e.importKind || 'typeof' === e.importKind)) ||
                            ('ExportNamedDeclaration' === e.type && 'type' === e.exportKind) ||
                            ('ExportAllDeclaration' === e.type && 'type' === e.exportKind) ||
                            super.assertModuleNodeAllowed(e);
                        }
                        parseExport(e, t) {
                          let r = super.parseExport(e, t);
                          return (
                            ('ExportNamedDeclaration' === r.type || 'ExportAllDeclaration' === r.type) &&
                              (r.exportKind = r.exportKind || 'value'),
                            r
                          );
                        }
                        parseExportDeclaration(e) {
                          if (this.isContextual(128)) {
                            e.exportKind = 'type';
                            let t = this.startNode();
                            return (
                              this.next(),
                              this.match(5)
                                ? ((e.specifiers = this.parseExportSpecifiers(!0)), super.parseExportFrom(e), null)
                                : this.flowParseTypeAlias(t)
                            );
                          }
                          if (this.isContextual(129)) {
                            e.exportKind = 'type';
                            let t = this.startNode();
                            return this.next(), this.flowParseOpaqueType(t, !1);
                          }
                          if (this.isContextual(127)) {
                            e.exportKind = 'type';
                            let t = this.startNode();
                            return this.next(), this.flowParseInterface(t);
                          }
                          {
                            if (!(this.shouldParseEnums() && this.isContextual(124)))
                              return super.parseExportDeclaration(e);
                            e.exportKind = 'value';
                            let t = this.startNode();
                            return this.next(), this.flowParseEnumDeclaration(t);
                          }
                        }
                        eatExportStar(e) {
                          return (
                            !!super.eatExportStar(e) ||
                            (!!this.isContextual(128) &&
                              55 === this.lookahead().type &&
                              ((e.exportKind = 'type'), this.next(), this.next(), !0))
                          );
                        }
                        maybeParseExportNamespaceSpecifier(e) {
                          let { startLoc: t } = this.state,
                            r = super.maybeParseExportNamespaceSpecifier(e);
                          return r && 'type' === e.exportKind && this.unexpected(t), r;
                        }
                        parseClassId(e, t, r) {
                          super.parseClassId(e, t, r),
                            this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration());
                        }
                        parseClassMember(e, t, r) {
                          let { startLoc: i } = this.state;
                          if (this.isContextual(123)) {
                            if (super.parseClassMemberFromModifier(e, t)) return;
                            t.declare = !0;
                          }
                          super.parseClassMember(e, t, r),
                            t.declare &&
                              ('ClassProperty' !== t.type &&
                              'ClassPrivateProperty' !== t.type &&
                              'PropertyDefinition' !== t.type
                                ? this.raise(ez.DeclareClassElement, { at: i })
                                : t.value && this.raise(ez.DeclareClassFieldInitializer, { at: t.value }));
                        }
                        isIterator(e) {
                          return 'iterator' === e || 'asyncIterator' === e;
                        }
                        readIterator() {
                          let e = super.readWord1(),
                            t = '@@' + e;
                          (this.isIterator(e) && this.state.inType) ||
                            this.raise(Q.InvalidIdentifier, { at: this.state.curPosition(), identifierName: t }),
                            this.finishToken(130, t);
                        }
                        getTokenFromCode(e) {
                          let t = this.input.charCodeAt(this.state.pos + 1);
                          123 === e && 124 === t
                            ? this.finishOp(6, 2)
                            : this.state.inType && (62 === e || 60 === e)
                            ? this.finishOp(62 === e ? 48 : 47, 1)
                            : this.state.inType && 63 === e
                            ? 46 === t
                              ? this.finishOp(18, 2)
                              : this.finishOp(17, 1)
                            : ll(e, t, this.input.charCodeAt(this.state.pos + 2))
                            ? ((this.state.pos += 2), this.readIterator())
                            : super.getTokenFromCode(e);
                        }
                        isAssignable(e, t) {
                          return 'TypeCastExpression' === e.type
                            ? this.isAssignable(e.expression, t)
                            : super.isAssignable(e, t);
                        }
                        toAssignable(e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                          t ||
                            'AssignmentExpression' !== e.type ||
                            'TypeCastExpression' !== e.left.type ||
                            (e.left = this.typeCastToParameter(e.left)),
                            super.toAssignable(e, t);
                        }
                        toAssignableList(e, t, r) {
                          for (let t = 0; t < e.length; t++) {
                            let r = e[t];
                            (null == r ? void 0 : r.type) === 'TypeCastExpression' &&
                              (e[t] = this.typeCastToParameter(r));
                          }
                          super.toAssignableList(e, t, r);
                        }
                        toReferencedList(e, t) {
                          for (let i = 0; i < e.length; i++) {
                            var r;
                            let a = e[i];
                            a &&
                              'TypeCastExpression' === a.type &&
                              !(null != (r = a.extra) && r.parenthesized) &&
                              (e.length > 1 || !t) &&
                              this.raise(ez.TypeCastInPattern, { at: a.typeAnnotation });
                          }
                          return e;
                        }
                        parseArrayLike(e, t, r, i) {
                          let a = super.parseArrayLike(e, t, r, i);
                          return t && !this.state.maybeInArrowParameters && this.toReferencedList(a.elements), a;
                        }
                        isValidLVal(e, t, r) {
                          return 'TypeCastExpression' === e || super.isValidLVal(e, t, r);
                        }
                        parseClassProperty(e) {
                          return (
                            this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()),
                            super.parseClassProperty(e)
                          );
                        }
                        parseClassPrivateProperty(e) {
                          return (
                            this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()),
                            super.parseClassPrivateProperty(e)
                          );
                        }
                        isClassMethod() {
                          return this.match(47) || super.isClassMethod();
                        }
                        isClassProperty() {
                          return this.match(14) || super.isClassProperty();
                        }
                        isNonstaticConstructor(e) {
                          return !this.match(14) && super.isNonstaticConstructor(e);
                        }
                        pushClassMethod(e, t, r, i, a, l) {
                          if (
                            (t.variance && this.unexpected(t.variance.loc.start),
                            delete t.variance,
                            this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration()),
                            super.pushClassMethod(e, t, r, i, a, l),
                            t.params && a)
                          ) {
                            let e = t.params;
                            e.length > 0 &&
                              this.isThisParam(e[0]) &&
                              this.raise(ez.ThisParamBannedInConstructor, { at: t });
                          } else if ('MethodDefinition' === t.type && a && t.value.params) {
                            let e = t.value.params;
                            e.length > 0 &&
                              this.isThisParam(e[0]) &&
                              this.raise(ez.ThisParamBannedInConstructor, { at: t });
                          }
                        }
                        pushClassPrivateMethod(e, t, r, i) {
                          t.variance && this.unexpected(t.variance.loc.start),
                            delete t.variance,
                            this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration()),
                            super.pushClassPrivateMethod(e, t, r, i);
                        }
                        parseClassSuper(e) {
                          if (
                            (super.parseClassSuper(e),
                            e.superClass &&
                              this.match(47) &&
                              (e.superTypeParameters = this.flowParseTypeParameterInstantiation()),
                            this.isContextual(111))
                          ) {
                            this.next();
                            let t = (e.implements = []);
                            do {
                              let e = this.startNode();
                              (e.id = this.flowParseRestrictedIdentifier(!0)),
                                this.match(47)
                                  ? (e.typeParameters = this.flowParseTypeParameterInstantiation())
                                  : (e.typeParameters = null),
                                t.push(this.finishNode(e, 'ClassImplements'));
                            } while (this.eat(12));
                          }
                        }
                        checkGetterSetterParams(e) {
                          super.checkGetterSetterParams(e);
                          let t = this.getObjectOrClassMethodParams(e);
                          if (t.length > 0) {
                            let r = t[0];
                            this.isThisParam(r) && 'get' === e.kind
                              ? this.raise(ez.GetterMayNotHaveThisParam, { at: r })
                              : this.isThisParam(r) && this.raise(ez.SetterMayNotHaveThisParam, { at: r });
                          }
                        }
                        parsePropertyNamePrefixOperator(e) {
                          e.variance = this.flowParseVariance();
                        }
                        parseObjPropValue(e, t, r, i, a, l, f) {
                          let y;
                          e.variance && this.unexpected(e.variance.loc.start),
                            delete e.variance,
                            this.match(47) &&
                              !l &&
                              ((y = this.flowParseTypeParameterDeclaration()), this.match(10) || this.unexpected());
                          let g = super.parseObjPropValue(e, t, r, i, a, l, f);
                          return y && ((g.value || g).typeParameters = y), g;
                        }
                        parseAssignableListItemTypes(e) {
                          return (
                            this.eat(17) &&
                              ('Identifier' !== e.type && this.raise(ez.PatternIsOptional, { at: e }),
                              this.isThisParam(e) && this.raise(ez.ThisParamMayNotBeOptional, { at: e }),
                              (e.optional = !0)),
                            this.match(14)
                              ? (e.typeAnnotation = this.flowParseTypeAnnotation())
                              : this.isThisParam(e) && this.raise(ez.ThisParamAnnotationRequired, { at: e }),
                            this.match(29) && this.isThisParam(e) && this.raise(ez.ThisParamNoDefault, { at: e }),
                            this.resetEndLocation(e),
                            e
                          );
                        }
                        parseMaybeDefault(e, t) {
                          let r = super.parseMaybeDefault(e, t);
                          return (
                            'AssignmentPattern' === r.type &&
                              r.typeAnnotation &&
                              r.right.start < r.typeAnnotation.start &&
                              this.raise(ez.TypeBeforeInitializer, { at: r.typeAnnotation }),
                            r
                          );
                        }
                        shouldParseDefaultImport(e) {
                          return us(e) ? qr(this.state.type) : super.shouldParseDefaultImport(e);
                        }
                        checkImportReflection(e) {
                          super.checkImportReflection(e),
                            e.module &&
                              'value' !== e.importKind &&
                              this.raise(ez.ImportReflectionHasImportType, { at: e.specifiers[0].loc.start });
                        }
                        parseImportSpecifierLocal(e, t, r) {
                          (t.local = us(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier()),
                            e.specifiers.push(this.finishImportSpecifier(t, r));
                        }
                        maybeParseDefaultImportSpecifier(e) {
                          e.importKind = 'value';
                          let t = null;
                          if ((this.match(87) ? (t = 'typeof') : this.isContextual(128) && (t = 'type'), t)) {
                            let r = this.lookahead(),
                              { type: i } = r;
                            'type' === t && 55 === i && this.unexpected(null, r.type),
                              (qr(i) || 5 === i || 55 === i) && (this.next(), (e.importKind = t));
                          }
                          return super.maybeParseDefaultImportSpecifier(e);
                        }
                        parseImportSpecifier(e, t, r, i, a) {
                          let l = e.imported,
                            f = null;
                          'Identifier' === l.type &&
                            ('type' === l.name ? (f = 'type') : 'typeof' === l.name && (f = 'typeof'));
                          let y = !1;
                          if (this.isContextual(93) && !this.isLookaheadContextual('as')) {
                            let t = this.parseIdentifier(!0);
                            null === f || te(this.state.type)
                              ? ((e.imported = l), (e.importKind = null), (e.local = this.parseIdentifier()))
                              : ((e.imported = t), (e.importKind = f), (e.local = me(t)));
                          } else {
                            if (null !== f && te(this.state.type))
                              (e.imported = this.parseIdentifier(!0)), (e.importKind = f);
                            else {
                              if (t) throw this.raise(Q.ImportBindingIsString, { at: e, importName: l.value });
                              (e.imported = l), (e.importKind = null);
                            }
                            this.eatContextual(93)
                              ? (e.local = this.parseIdentifier())
                              : ((y = !0), (e.local = me(e.imported)));
                          }
                          let g = us(e);
                          return (
                            r && g && this.raise(ez.ImportTypeShorthandOnlyInPureImport, { at: e }),
                            (r || g) && this.checkReservedType(e.local.name, e.local.loc.start, !0),
                            !y || r || g || this.checkReservedWord(e.local.name, e.loc.start, !0, !0),
                            this.finishImportSpecifier(e, 'ImportSpecifier')
                          );
                        }
                        parseBindingAtom() {
                          return 78 === this.state.type ? this.parseIdentifier(!0) : super.parseBindingAtom();
                        }
                        parseFunctionParams(e, t) {
                          let r = e.kind;
                          'get' !== r &&
                            'set' !== r &&
                            this.match(47) &&
                            (e.typeParameters = this.flowParseTypeParameterDeclaration()),
                            super.parseFunctionParams(e, t);
                        }
                        parseVarId(e, t) {
                          super.parseVarId(e, t),
                            this.match(14) &&
                              ((e.id.typeAnnotation = this.flowParseTypeAnnotation()), this.resetEndLocation(e.id));
                        }
                        parseAsyncArrowFromCallExpression(e, t) {
                          if (this.match(14)) {
                            let t = this.state.noAnonFunctionType;
                            (this.state.noAnonFunctionType = !0),
                              (e.returnType = this.flowParseTypeAnnotation()),
                              (this.state.noAnonFunctionType = t);
                          }
                          return super.parseAsyncArrowFromCallExpression(e, t);
                        }
                        shouldParseAsyncArrow() {
                          return this.match(14) || super.shouldParseAsyncArrow();
                        }
                        parseMaybeAssign(e, t) {
                          var r, a, l;
                          let f = null,
                            y;
                          if (this.hasPlugin('jsx') && (this.match(140) || this.match(47))) {
                            if (
                              ((f = this.state.clone()),
                              !(y = this.tryParse(() => super.parseMaybeAssign(e, t), f)).error)
                            )
                              return y.node;
                            let { context: r } = this.state,
                              a = r[r.length - 1];
                            (a === i.j_oTag || a === i.j_expr) && r.pop();
                          }
                          if ((null != (r = y) && r.error) || this.match(47)) {
                            f = f || this.state.clone();
                            let r,
                              i = this.tryParse((i) => {
                                var a;
                                r = this.flowParseTypeParameterDeclaration();
                                let l = this.forwardNoArrowParamsConversionAt(r, () => {
                                  let i = super.parseMaybeAssign(e, t);
                                  return this.resetStartLocationFromNode(i, r), i;
                                });
                                null != (a = l.extra) && a.parenthesized && i();
                                let f = this.maybeUnwrapTypeCastExpression(l);
                                return (
                                  'ArrowFunctionExpression' !== f.type && i(),
                                  (f.typeParameters = r),
                                  this.resetStartLocationFromNode(f, r),
                                  l
                                );
                              }, f),
                              g = null;
                            if (
                              i.node &&
                              'ArrowFunctionExpression' === this.maybeUnwrapTypeCastExpression(i.node).type
                            ) {
                              if (!i.error && !i.aborted)
                                return (
                                  i.node.async &&
                                    this.raise(ez.UnexpectedTypeParameterBeforeAsyncArrowFunction, { at: r }),
                                  i.node
                                );
                              g = i.node;
                            }
                            if (null != (a = y) && a.node) return (this.state = y.failState), y.node;
                            if (g) return (this.state = i.failState), g;
                            throw null != (l = y) && l.thrown
                              ? y.error
                              : i.thrown
                              ? i.error
                              : this.raise(ez.UnexpectedTokenAfterTypeParameter, { at: r });
                          }
                          return super.parseMaybeAssign(e, t);
                        }
                        parseArrow(e) {
                          if (this.match(14)) {
                            let t = this.tryParse(() => {
                              let t = this.state.noAnonFunctionType;
                              this.state.noAnonFunctionType = !0;
                              let r = this.startNode();
                              return (
                                ([r.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser()),
                                (this.state.noAnonFunctionType = t),
                                this.canInsertSemicolon() && this.unexpected(),
                                this.match(19) || this.unexpected(),
                                r
                              );
                            });
                            if (t.thrown) return null;
                            t.error && (this.state = t.failState),
                              (e.returnType = t.node.typeAnnotation ? this.finishNode(t.node, 'TypeAnnotation') : null);
                          }
                          return super.parseArrow(e);
                        }
                        shouldParseArrow(e) {
                          return this.match(14) || super.shouldParseArrow(e);
                        }
                        setArrowFunctionParameters(e, t) {
                          -1 !== this.state.noArrowParamsConversionAt.indexOf(e.start)
                            ? (e.params = t)
                            : super.setArrowFunctionParameters(e, t);
                        }
                        checkParams(e, t, r) {
                          let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                          if (!(r && -1 !== this.state.noArrowParamsConversionAt.indexOf(e.start))) {
                            for (let t = 0; t < e.params.length; t++)
                              this.isThisParam(e.params[t]) &&
                                t > 0 &&
                                this.raise(ez.ThisParamMustBeFirst, { at: e.params[t] });
                            super.checkParams(e, t, r, i);
                          }
                        }
                        parseParenAndDistinguishExpression(e) {
                          return super.parseParenAndDistinguishExpression(
                            e && -1 === this.state.noArrowAt.indexOf(this.state.start)
                          );
                        }
                        parseSubscripts(e, t, r) {
                          if (
                            'Identifier' === e.type &&
                            'async' === e.name &&
                            -1 !== this.state.noArrowAt.indexOf(t.index)
                          ) {
                            this.next();
                            let r = this.startNodeAt(t);
                            (r.callee = e),
                              (r.arguments = super.parseCallExpressionArguments(11, !1)),
                              (e = this.finishNode(r, 'CallExpression'));
                          } else if ('Identifier' === e.type && 'async' === e.name && this.match(47)) {
                            let i = this.state.clone(),
                              a = this.tryParse((e) => this.parseAsyncArrowWithTypeParameters(t) || e(), i);
                            if (!a.error && !a.aborted) return a.node;
                            let l = this.tryParse(() => super.parseSubscripts(e, t, r), i);
                            if (l.node && !l.error) return l.node;
                            if (a.node) return (this.state = a.failState), a.node;
                            if (l.node) return (this.state = l.failState), l.node;
                            throw a.error || l.error;
                          }
                          return super.parseSubscripts(e, t, r);
                        }
                        parseSubscript(e, t, r, i) {
                          if (this.match(18) && this.isLookaheadToken_lt()) {
                            if (((i.optionalChainMember = !0), r)) return (i.stop = !0), e;
                            this.next();
                            let a = this.startNodeAt(t);
                            return (
                              (a.callee = e),
                              (a.typeArguments = this.flowParseTypeParameterInstantiation()),
                              this.expect(10),
                              (a.arguments = this.parseCallExpressionArguments(11, !1)),
                              (a.optional = !0),
                              this.finishCallExpression(a, !0)
                            );
                          }
                          if (!r && this.shouldParseTypes() && this.match(47)) {
                            let r = this.startNodeAt(t);
                            r.callee = e;
                            let a = this.tryParse(
                              () => (
                                (r.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew()),
                                this.expect(10),
                                (r.arguments = super.parseCallExpressionArguments(11, !1)),
                                i.optionalChainMember && (r.optional = !1),
                                this.finishCallExpression(r, i.optionalChainMember)
                              )
                            );
                            if (a.node) return a.error && (this.state = a.failState), a.node;
                          }
                          return super.parseSubscript(e, t, r, i);
                        }
                        parseNewCallee(e) {
                          super.parseNewCallee(e);
                          let t = null;
                          this.shouldParseTypes() &&
                            this.match(47) &&
                            (t = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node),
                            (e.typeArguments = t);
                        }
                        parseAsyncArrowWithTypeParameters(e) {
                          let t = this.startNodeAt(e);
                          if ((this.parseFunctionParams(t, !1), this.parseArrow(t)))
                            return super.parseArrowExpression(t, void 0, !0);
                        }
                        readToken_mult_modulo(e) {
                          let t = this.input.charCodeAt(this.state.pos + 1);
                          if (42 === e && 47 === t && this.state.hasFlowComment) {
                            (this.state.hasFlowComment = !1), (this.state.pos += 2), this.nextToken();
                            return;
                          }
                          super.readToken_mult_modulo(e);
                        }
                        readToken_pipe_amp(e) {
                          let t = this.input.charCodeAt(this.state.pos + 1);
                          if (124 === e && 125 === t) {
                            this.finishOp(9, 2);
                            return;
                          }
                          super.readToken_pipe_amp(e);
                        }
                        parseTopLevel(e, t) {
                          let r = super.parseTopLevel(e, t);
                          return (
                            this.state.hasFlowComment &&
                              this.raise(ez.UnterminatedFlowComment, { at: this.state.curPosition() }),
                            r
                          );
                        }
                        skipBlockComment() {
                          if (this.hasPlugin('flowComments') && this.skipFlowComment()) {
                            if (this.state.hasFlowComment)
                              throw this.raise(ez.NestedFlowComment, { at: this.state.startLoc });
                            this.hasFlowCommentCompletion();
                            let e = this.skipFlowComment();
                            e && ((this.state.pos += e), (this.state.hasFlowComment = !0));
                            return;
                          }
                          return super.skipBlockComment(this.state.hasFlowComment ? '*-/' : '*/');
                        }
                        skipFlowComment() {
                          let { pos: e } = this.state,
                            t = 2;
                          for (; [32, 9].includes(this.input.charCodeAt(e + t)); ) t++;
                          let r = this.input.charCodeAt(t + e),
                            i = this.input.charCodeAt(t + e + 1);
                          return 58 === r && 58 === i
                            ? t + 2
                            : 'flow-include' === this.input.slice(t + e, t + e + 12)
                            ? t + 12
                            : 58 === r && 58 !== i && t;
                        }
                        hasFlowCommentCompletion() {
                          if (-1 === this.input.indexOf('*/', this.state.pos))
                            throw this.raise(Q.UnterminatedComment, { at: this.state.curPosition() });
                        }
                        flowEnumErrorBooleanMemberNotInitialized(e, t) {
                          let { enumName: r, memberName: i } = t;
                          this.raise(ez.EnumBooleanMemberNotInitialized, { at: e, memberName: i, enumName: r });
                        }
                        flowEnumErrorInvalidMemberInitializer(e, t) {
                          return this.raise(
                            t.explicitType
                              ? 'symbol' === t.explicitType
                                ? ez.EnumInvalidMemberInitializerSymbolType
                                : ez.EnumInvalidMemberInitializerPrimaryType
                              : ez.EnumInvalidMemberInitializerUnknownType,
                            Object.assign({ at: e }, t)
                          );
                        }
                        flowEnumErrorNumberMemberNotInitialized(e, t) {
                          let { enumName: r, memberName: i } = t;
                          this.raise(ez.EnumNumberMemberNotInitialized, { at: e, enumName: r, memberName: i });
                        }
                        flowEnumErrorStringMemberInconsistentlyInitailized(e, t) {
                          let { enumName: r } = t;
                          this.raise(ez.EnumStringMemberInconsistentlyInitailized, { at: e, enumName: r });
                        }
                        flowEnumMemberInit() {
                          let e = this.state.startLoc,
                            s = () => this.match(12) || this.match(8);
                          switch (this.state.type) {
                            case 132: {
                              let t = this.parseNumericLiteral(this.state.value);
                              return s() ? { type: 'number', loc: t.loc.start, value: t } : { type: 'invalid', loc: e };
                            }
                            case 131: {
                              let t = this.parseStringLiteral(this.state.value);
                              return s() ? { type: 'string', loc: t.loc.start, value: t } : { type: 'invalid', loc: e };
                            }
                            case 85:
                            case 86: {
                              let t = this.parseBooleanLiteral(this.match(85));
                              return s()
                                ? { type: 'boolean', loc: t.loc.start, value: t }
                                : { type: 'invalid', loc: e };
                            }
                            default:
                              return { type: 'invalid', loc: e };
                          }
                        }
                        flowEnumMemberRaw() {
                          let e = this.state.startLoc;
                          return {
                            id: this.parseIdentifier(!0),
                            init: this.eat(29) ? this.flowEnumMemberInit() : { type: 'none', loc: e }
                          };
                        }
                        flowEnumCheckExplicitTypeMismatch(e, t, r) {
                          let { explicitType: i } = t;
                          null !== i && i !== r && this.flowEnumErrorInvalidMemberInitializer(e, t);
                        }
                        flowEnumMembers(e) {
                          let { enumName: t, explicitType: r } = e,
                            i = new Set(),
                            a = { booleanMembers: [], numberMembers: [], stringMembers: [], defaultedMembers: [] },
                            l = !1;
                          for (; !this.match(8); ) {
                            if (this.eat(21)) {
                              l = !0;
                              break;
                            }
                            let e = this.startNode(),
                              { id: f, init: y } = this.flowEnumMemberRaw(),
                              g = f.name;
                            if ('' === g) continue;
                            /^[a-z]/.test(g) &&
                              this.raise(ez.EnumInvalidMemberName, {
                                at: f,
                                memberName: g,
                                suggestion: g[0].toUpperCase() + g.slice(1),
                                enumName: t
                              }),
                              i.has(g) && this.raise(ez.EnumDuplicateMemberName, { at: f, memberName: g, enumName: t }),
                              i.add(g);
                            let T = { enumName: t, explicitType: r, memberName: g };
                            switch (((e.id = f), y.type)) {
                              case 'boolean':
                                this.flowEnumCheckExplicitTypeMismatch(y.loc, T, 'boolean'),
                                  (e.init = y.value),
                                  a.booleanMembers.push(this.finishNode(e, 'EnumBooleanMember'));
                                break;
                              case 'number':
                                this.flowEnumCheckExplicitTypeMismatch(y.loc, T, 'number'),
                                  (e.init = y.value),
                                  a.numberMembers.push(this.finishNode(e, 'EnumNumberMember'));
                                break;
                              case 'string':
                                this.flowEnumCheckExplicitTypeMismatch(y.loc, T, 'string'),
                                  (e.init = y.value),
                                  a.stringMembers.push(this.finishNode(e, 'EnumStringMember'));
                                break;
                              case 'invalid':
                                throw this.flowEnumErrorInvalidMemberInitializer(y.loc, T);
                              case 'none':
                                switch (r) {
                                  case 'boolean':
                                    this.flowEnumErrorBooleanMemberNotInitialized(y.loc, T);
                                    break;
                                  case 'number':
                                    this.flowEnumErrorNumberMemberNotInitialized(y.loc, T);
                                    break;
                                  default:
                                    a.defaultedMembers.push(this.finishNode(e, 'EnumDefaultedMember'));
                                }
                            }
                            this.match(8) || this.expect(12);
                          }
                          return { members: a, hasUnknownMembers: l };
                        }
                        flowEnumStringMembers(e, t, r) {
                          let { enumName: i } = r;
                          if (0 === e.length) return t;
                          if (0 === t.length) return e;
                          if (t.length > e.length) {
                            for (let t of e)
                              this.flowEnumErrorStringMemberInconsistentlyInitailized(t, { enumName: i });
                            return t;
                          }
                          for (let e of t) this.flowEnumErrorStringMemberInconsistentlyInitailized(e, { enumName: i });
                          return e;
                        }
                        flowEnumParseExplicitType(e) {
                          let { enumName: t } = e;
                          if (!this.eatContextual(101)) return null;
                          if (!q(this.state.type))
                            throw this.raise(ez.EnumInvalidExplicitTypeUnknownSupplied, {
                              at: this.state.startLoc,
                              enumName: t
                            });
                          let { value: r } = this.state;
                          return (
                            this.next(),
                            'boolean' !== r &&
                              'number' !== r &&
                              'string' !== r &&
                              'symbol' !== r &&
                              this.raise(ez.EnumInvalidExplicitType, {
                                at: this.state.startLoc,
                                enumName: t,
                                invalidEnumType: r
                              }),
                            r
                          );
                        }
                        flowEnumBody(e, t) {
                          let r = t.name,
                            i = t.loc.start,
                            a = this.flowEnumParseExplicitType({ enumName: r });
                          this.expect(5);
                          let { members: l, hasUnknownMembers: f } = this.flowEnumMembers({
                            enumName: r,
                            explicitType: a
                          });
                          switch (((e.hasUnknownMembers = f), a)) {
                            case 'boolean':
                              return (
                                (e.explicitType = !0),
                                (e.members = l.booleanMembers),
                                this.expect(8),
                                this.finishNode(e, 'EnumBooleanBody')
                              );
                            case 'number':
                              return (
                                (e.explicitType = !0),
                                (e.members = l.numberMembers),
                                this.expect(8),
                                this.finishNode(e, 'EnumNumberBody')
                              );
                            case 'string':
                              return (
                                (e.explicitType = !0),
                                (e.members = this.flowEnumStringMembers(l.stringMembers, l.defaultedMembers, {
                                  enumName: r
                                })),
                                this.expect(8),
                                this.finishNode(e, 'EnumStringBody')
                              );
                            case 'symbol':
                              return (
                                (e.members = l.defaultedMembers), this.expect(8), this.finishNode(e, 'EnumSymbolBody')
                              );
                            default: {
                              let c = () => ((e.members = []), this.expect(8), this.finishNode(e, 'EnumStringBody'));
                              e.explicitType = !1;
                              let t = l.booleanMembers.length,
                                a = l.numberMembers.length,
                                f = l.stringMembers.length,
                                y = l.defaultedMembers.length;
                              if (!t && !a && !f && !y) return c();
                              if (!t && !a)
                                return (
                                  (e.members = this.flowEnumStringMembers(l.stringMembers, l.defaultedMembers, {
                                    enumName: r
                                  })),
                                  this.expect(8),
                                  this.finishNode(e, 'EnumStringBody')
                                );
                              if (a || f || !(t >= y)) {
                                if (t || f || !(a >= y))
                                  return this.raise(ez.EnumInconsistentMemberValues, { at: i, enumName: r }), c();
                                for (let e of l.defaultedMembers)
                                  this.flowEnumErrorNumberMemberNotInitialized(e.loc.start, {
                                    enumName: r,
                                    memberName: e.id.name
                                  });
                                return (
                                  (e.members = l.numberMembers), this.expect(8), this.finishNode(e, 'EnumNumberBody')
                                );
                              }
                              for (let e of l.defaultedMembers)
                                this.flowEnumErrorBooleanMemberNotInitialized(e.loc.start, {
                                  enumName: r,
                                  memberName: e.id.name
                                });
                              return (
                                (e.members = l.booleanMembers), this.expect(8), this.finishNode(e, 'EnumBooleanBody')
                              );
                            }
                          }
                        }
                        flowParseEnumDeclaration(e) {
                          let t = this.parseIdentifier();
                          return (
                            (e.id = t),
                            (e.body = this.flowEnumBody(this.startNode(), t)),
                            this.finishNode(e, 'EnumDeclaration')
                          );
                        }
                        isLookaheadToken_lt() {
                          let e = this.nextTokenStart();
                          if (60 === this.input.charCodeAt(e)) {
                            let t = this.input.charCodeAt(e + 1);
                            return 60 !== t && 61 !== t;
                          }
                          return !1;
                        }
                        maybeUnwrapTypeCastExpression(e) {
                          return 'TypeCastExpression' === e.type ? e.expression : e;
                        }
                      },
                    typescript: (e) =>
                      class extends e {
                        constructor() {
                          super(...arguments),
                            (this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
                              allowedModifiers: ['in', 'out'],
                              disallowedModifiers: [
                                'const',
                                'public',
                                'private',
                                'protected',
                                'readonly',
                                'declare',
                                'abstract',
                                'override'
                              ],
                              errorTemplate: eG.InvalidModifierOnTypeParameter
                            })),
                            (this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
                              allowedModifiers: ['const'],
                              disallowedModifiers: ['in', 'out'],
                              errorTemplate: eG.InvalidModifierOnTypeParameterPositions
                            })),
                            (this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
                              allowedModifiers: ['in', 'out', 'const'],
                              disallowedModifiers: [
                                'public',
                                'private',
                                'protected',
                                'readonly',
                                'declare',
                                'abstract',
                                'override'
                              ],
                              errorTemplate: eG.InvalidModifierOnTypeParameter
                            }));
                        }
                        getScopeHandler() {
                          return eW;
                        }
                        tsIsIdentifier() {
                          return q(this.state.type);
                        }
                        tsTokenCanFollowModifier() {
                          return (
                            (this.match(0) ||
                              this.match(5) ||
                              this.match(55) ||
                              this.match(21) ||
                              this.match(136) ||
                              this.isLiteralPropertyName()) &&
                            !this.hasPrecedingLineBreak()
                          );
                        }
                        tsNextTokenCanFollowModifier() {
                          return this.next(), this.tsTokenCanFollowModifier();
                        }
                        tsParseModifier(e, t) {
                          if (!q(this.state.type) && 58 !== this.state.type && 75 !== this.state.type) return;
                          let r = this.state.value;
                          if (-1 !== e.indexOf(r)) {
                            if (t && this.tsIsStartOfStaticBlocks()) return;
                            if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return r;
                          }
                        }
                        tsParseModifiers(e, t) {
                          let {
                              allowedModifiers: r,
                              disallowedModifiers: i,
                              stopOnStartOfClassStaticBlock: a,
                              errorTemplate: l = eG.InvalidModifierOnTypeMember
                            } = e,
                            u = (e, r, i, a) => {
                              r === i &&
                                t[a] &&
                                this.raise(eG.InvalidModifiersOrder, { at: e, orderedModifiers: [i, a] });
                            },
                            c = (e, r, i, a) => {
                              ((t[i] && r === a) || (t[a] && r === i)) &&
                                this.raise(eG.IncompatibleModifiers, { at: e, modifiers: [i, a] });
                            };
                          for (;;) {
                            let { startLoc: e } = this.state,
                              f = this.tsParseModifier(r.concat(null != i ? i : []), a);
                            if (!f) break;
                            Hr(f)
                              ? t.accessibility
                                ? this.raise(eG.DuplicateAccessibilityModifier, { at: e, modifier: f })
                                : (u(e, f, f, 'override'),
                                  u(e, f, f, 'static'),
                                  u(e, f, f, 'readonly'),
                                  (t.accessibility = f))
                              : hh(f)
                              ? (t[f] && this.raise(eG.DuplicateModifier, { at: e, modifier: f }),
                                (t[f] = !0),
                                u(e, f, 'in', 'out'))
                              : (Object.hasOwnProperty.call(t, f)
                                  ? this.raise(eG.DuplicateModifier, { at: e, modifier: f })
                                  : (u(e, f, 'static', 'readonly'),
                                    u(e, f, 'static', 'override'),
                                    u(e, f, 'override', 'readonly'),
                                    u(e, f, 'abstract', 'override'),
                                    c(e, f, 'declare', 'override'),
                                    c(e, f, 'static', 'abstract')),
                                (t[f] = !0)),
                              null != i && i.includes(f) && this.raise(l, { at: e, modifier: f });
                          }
                        }
                        tsIsListTerminator(e) {
                          switch (e) {
                            case 'EnumMembers':
                            case 'TypeMembers':
                              return this.match(8);
                            case 'HeritageClauseElement':
                              return this.match(5);
                            case 'TupleElementTypes':
                              return this.match(3);
                            case 'TypeParametersOrArguments':
                              return this.match(48);
                          }
                        }
                        tsParseList(e, t) {
                          let r = [];
                          for (; !this.tsIsListTerminator(e); ) r.push(t());
                          return r;
                        }
                        tsParseDelimitedList(e, t, r) {
                          return oh(this.tsParseDelimitedListWorker(e, t, !0, r));
                        }
                        tsParseDelimitedListWorker(e, t, r, i) {
                          let a = [],
                            l = -1;
                          for (; !this.tsIsListTerminator(e); ) {
                            l = -1;
                            let i = t();
                            if (null == i) return;
                            if ((a.push(i), this.eat(12))) {
                              l = this.state.lastTokStart;
                              continue;
                            }
                            if (this.tsIsListTerminator(e)) break;
                            r && this.expect(12);
                            return;
                          }
                          return i && (i.value = l), a;
                        }
                        tsParseBracketedList(e, t, r, i, a) {
                          i || (r ? this.expect(0) : this.expect(47));
                          let l = this.tsParseDelimitedList(e, t, a);
                          return r ? this.expect(3) : this.expect(48), l;
                        }
                        tsParseImportType() {
                          let e = this.startNode();
                          return (
                            this.expect(83),
                            this.expect(10),
                            this.match(131) ||
                              this.raise(eG.UnsupportedImportTypeArgument, { at: this.state.startLoc }),
                            (e.argument = super.parseExprAtom()),
                            this.expect(11),
                            this.eat(16) && (e.qualifier = this.tsParseEntityName()),
                            this.match(47) && (e.typeParameters = this.tsParseTypeArguments()),
                            this.finishNode(e, 'TSImportType')
                          );
                        }
                        tsParseEntityName() {
                          let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            t = this.parseIdentifier(e);
                          for (; this.eat(16); ) {
                            let r = this.startNodeAtNode(t);
                            (r.left = t),
                              (r.right = this.parseIdentifier(e)),
                              (t = this.finishNode(r, 'TSQualifiedName'));
                          }
                          return t;
                        }
                        tsParseTypeReference() {
                          let e = this.startNode();
                          return (
                            (e.typeName = this.tsParseEntityName()),
                            !this.hasPrecedingLineBreak() &&
                              this.match(47) &&
                              (e.typeParameters = this.tsParseTypeArguments()),
                            this.finishNode(e, 'TSTypeReference')
                          );
                        }
                        tsParseThisTypePredicate(e) {
                          this.next();
                          let t = this.startNodeAtNode(e);
                          return (
                            (t.parameterName = e),
                            (t.typeAnnotation = this.tsParseTypeAnnotation(!1)),
                            (t.asserts = !1),
                            this.finishNode(t, 'TSTypePredicate')
                          );
                        }
                        tsParseThisTypeNode() {
                          let e = this.startNode();
                          return this.next(), this.finishNode(e, 'TSThisType');
                        }
                        tsParseTypeQuery() {
                          let e = this.startNode();
                          return (
                            this.expect(87),
                            this.match(83)
                              ? (e.exprName = this.tsParseImportType())
                              : (e.exprName = this.tsParseEntityName()),
                            !this.hasPrecedingLineBreak() &&
                              this.match(47) &&
                              (e.typeParameters = this.tsParseTypeArguments()),
                            this.finishNode(e, 'TSTypeQuery')
                          );
                        }
                        tsParseTypeParameter(e) {
                          let t = this.startNode();
                          return (
                            e(t),
                            (t.name = this.tsParseTypeParameterName()),
                            (t.constraint = this.tsEatThenParseType(81)),
                            (t.default = this.tsEatThenParseType(29)),
                            this.finishNode(t, 'TSTypeParameter')
                          );
                        }
                        tsTryParseTypeParameters(e) {
                          if (this.match(47)) return this.tsParseTypeParameters(e);
                        }
                        tsParseTypeParameters(e) {
                          let t = this.startNode();
                          this.match(47) || this.match(140) ? this.next() : this.unexpected();
                          let r = { value: -1 };
                          return (
                            (t.params = this.tsParseBracketedList(
                              'TypeParametersOrArguments',
                              this.tsParseTypeParameter.bind(this, e),
                              !1,
                              !0,
                              r
                            )),
                            0 === t.params.length && this.raise(eG.EmptyTypeParameters, { at: t }),
                            -1 !== r.value && this.addExtra(t, 'trailingComma', r.value),
                            this.finishNode(t, 'TSTypeParameterDeclaration')
                          );
                        }
                        tsFillSignature(e, t) {
                          let r = 19 === e,
                            i = 'typeAnnotation';
                          (t.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier)),
                            this.expect(10),
                            (t.parameters = this.tsParseBindingListForSignature()),
                            r
                              ? (t[i] = this.tsParseTypeOrTypePredicateAnnotation(e))
                              : this.match(e) && (t[i] = this.tsParseTypeOrTypePredicateAnnotation(e));
                        }
                        tsParseBindingListForSignature() {
                          return super
                            .parseBindingList(11, 41, 2)
                            .map(
                              (e) => (
                                'Identifier' !== e.type &&
                                  'RestElement' !== e.type &&
                                  'ObjectPattern' !== e.type &&
                                  'ArrayPattern' !== e.type &&
                                  this.raise(eG.UnsupportedSignatureParameterKind, { at: e, type: e.type }),
                                e
                              )
                            );
                        }
                        tsParseTypeMemberSemicolon() {
                          this.eat(12) || this.isLineTerminator() || this.expect(13);
                        }
                        tsParseSignatureMember(e, t) {
                          return this.tsFillSignature(14, t), this.tsParseTypeMemberSemicolon(), this.finishNode(t, e);
                        }
                        tsIsUnambiguouslyIndexSignature() {
                          return this.next(), !!q(this.state.type) && (this.next(), this.match(14));
                        }
                        tsTryParseIndexSignature(e) {
                          if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
                            return;
                          this.expect(0);
                          let t = this.parseIdentifier();
                          (t.typeAnnotation = this.tsParseTypeAnnotation()),
                            this.resetEndLocation(t),
                            this.expect(3),
                            (e.parameters = [t]);
                          let r = this.tsTryParseTypeAnnotation();
                          return (
                            r && (e.typeAnnotation = r),
                            this.tsParseTypeMemberSemicolon(),
                            this.finishNode(e, 'TSIndexSignature')
                          );
                        }
                        tsParsePropertyOrMethodSignature(e, t) {
                          if ((this.eat(17) && (e.optional = !0), this.match(10) || this.match(47))) {
                            t && this.raise(eG.ReadonlyForMethodSignature, { at: e }),
                              e.kind &&
                                this.match(47) &&
                                this.raise(eG.AccesorCannotHaveTypeParameters, { at: this.state.curPosition() }),
                              this.tsFillSignature(14, e),
                              this.tsParseTypeMemberSemicolon();
                            let r = 'parameters',
                              i = 'typeAnnotation';
                            if ('get' === e.kind)
                              e[r].length > 0 &&
                                (this.raise(Q.BadGetterArity, { at: this.state.curPosition() }),
                                this.isThisParam(e[r][0]) &&
                                  this.raise(eG.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }));
                            else if ('set' === e.kind) {
                              if (1 !== e[r].length) this.raise(Q.BadSetterArity, { at: this.state.curPosition() });
                              else {
                                let t = e[r][0];
                                this.isThisParam(t) &&
                                  this.raise(eG.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }),
                                  'Identifier' === t.type &&
                                    t.optional &&
                                    this.raise(eG.SetAccesorCannotHaveOptionalParameter, {
                                      at: this.state.curPosition()
                                    }),
                                  'RestElement' === t.type &&
                                    this.raise(eG.SetAccesorCannotHaveRestParameter, { at: this.state.curPosition() });
                              }
                              e[i] && this.raise(eG.SetAccesorCannotHaveReturnType, { at: e[i] });
                            } else e.kind = 'method';
                            return this.finishNode(e, 'TSMethodSignature');
                          }
                          {
                            t && (e.readonly = !0);
                            let r = this.tsTryParseTypeAnnotation();
                            return (
                              r && (e.typeAnnotation = r),
                              this.tsParseTypeMemberSemicolon(),
                              this.finishNode(e, 'TSPropertySignature')
                            );
                          }
                        }
                        tsParseTypeMember() {
                          let e = this.startNode();
                          if (this.match(10) || this.match(47))
                            return this.tsParseSignatureMember('TSCallSignatureDeclaration', e);
                          if (this.match(77)) {
                            let t = this.startNode();
                            return (
                              this.next(),
                              this.match(10) || this.match(47)
                                ? this.tsParseSignatureMember('TSConstructSignatureDeclaration', e)
                                : ((e.key = this.createIdentifier(t, 'new')),
                                  this.tsParsePropertyOrMethodSignature(e, !1))
                            );
                          }
                          return (
                            this.tsParseModifiers(
                              {
                                allowedModifiers: ['readonly'],
                                disallowedModifiers: [
                                  'declare',
                                  'abstract',
                                  'private',
                                  'protected',
                                  'public',
                                  'static',
                                  'override'
                                ]
                              },
                              e
                            ),
                            this.tsTryParseIndexSignature(e) ||
                              (super.parsePropertyName(e),
                              !e.computed &&
                                'Identifier' === e.key.type &&
                                ('get' === e.key.name || 'set' === e.key.name) &&
                                this.tsTokenCanFollowModifier() &&
                                ((e.kind = e.key.name), super.parsePropertyName(e)),
                              this.tsParsePropertyOrMethodSignature(e, !!e.readonly))
                          );
                        }
                        tsParseTypeLiteral() {
                          let e = this.startNode();
                          return (e.members = this.tsParseObjectTypeMembers()), this.finishNode(e, 'TSTypeLiteral');
                        }
                        tsParseObjectTypeMembers() {
                          this.expect(5);
                          let e = this.tsParseList('TypeMembers', this.tsParseTypeMember.bind(this));
                          return this.expect(8), e;
                        }
                        tsIsStartOfMappedType() {
                          return (
                            this.next(),
                            this.eat(53)
                              ? this.isContextual(120)
                              : (this.isContextual(120) && this.next(),
                                !!(this.match(0) && (this.next(), this.tsIsIdentifier())) &&
                                  (this.next(), this.match(58)))
                          );
                        }
                        tsParseMappedTypeParameter() {
                          let e = this.startNode();
                          return (
                            (e.name = this.tsParseTypeParameterName()),
                            (e.constraint = this.tsExpectThenParseType(58)),
                            this.finishNode(e, 'TSTypeParameter')
                          );
                        }
                        tsParseMappedType() {
                          let e = this.startNode();
                          return (
                            this.expect(5),
                            this.match(53)
                              ? ((e.readonly = this.state.value), this.next(), this.expectContextual(120))
                              : this.eatContextual(120) && (e.readonly = !0),
                            this.expect(0),
                            (e.typeParameter = this.tsParseMappedTypeParameter()),
                            (e.nameType = this.eatContextual(93) ? this.tsParseType() : null),
                            this.expect(3),
                            this.match(53)
                              ? ((e.optional = this.state.value), this.next(), this.expect(17))
                              : this.eat(17) && (e.optional = !0),
                            (e.typeAnnotation = this.tsTryParseType()),
                            this.semicolon(),
                            this.expect(8),
                            this.finishNode(e, 'TSMappedType')
                          );
                        }
                        tsParseTupleType() {
                          let e = this.startNode();
                          e.elementTypes = this.tsParseBracketedList(
                            'TupleElementTypes',
                            this.tsParseTupleElementType.bind(this),
                            !0,
                            !1
                          );
                          let t = !1,
                            r = null;
                          return (
                            e.elementTypes.forEach((e) => {
                              let { type: i } = e;
                              t &&
                                'TSRestType' !== i &&
                                'TSOptionalType' !== i &&
                                !('TSNamedTupleMember' === i && e.optional) &&
                                this.raise(eG.OptionalTypeBeforeRequired, { at: e }),
                                t || (t = ('TSNamedTupleMember' === i && e.optional) || 'TSOptionalType' === i);
                              let a = i;
                              'TSRestType' === i && (a = (e = e.typeAnnotation).type);
                              let l = 'TSNamedTupleMember' === a;
                              null != r || (r = l),
                                r !== l && this.raise(eG.MixedLabeledAndUnlabeledElements, { at: e });
                            }),
                            this.finishNode(e, 'TSTupleType')
                          );
                        }
                        tsParseTupleElementType() {
                          let { startLoc: e } = this.state,
                            t = this.eat(21),
                            r,
                            i,
                            a,
                            l,
                            f = te(this.state.type) ? this.lookaheadCharCode() : null;
                          if (58 === f)
                            (r = !0),
                              (a = !1),
                              (i = this.parseIdentifier(!0)),
                              this.expect(14),
                              (l = this.tsParseType());
                          else if (63 === f) {
                            a = !0;
                            let e = this.state.startLoc,
                              t = this.state.value,
                              f = this.tsParseNonArrayType();
                            58 === this.lookaheadCharCode()
                              ? ((r = !0),
                                (i = this.createIdentifier(this.startNodeAt(e), t)),
                                this.expect(17),
                                this.expect(14),
                                (l = this.tsParseType()))
                              : ((r = !1), (l = f), this.expect(17));
                          } else (l = this.tsParseType()), (a = this.eat(17)), (r = this.eat(14));
                          if (r) {
                            let e;
                            i
                              ? (((e = this.startNodeAtNode(i)).optional = a),
                                (e.label = i),
                                (e.elementType = l),
                                this.eat(17) &&
                                  ((e.optional = !0),
                                  this.raise(eG.TupleOptionalAfterType, { at: this.state.lastTokStartLoc })))
                              : (((e = this.startNodeAtNode(l)).optional = a),
                                this.raise(eG.InvalidTupleMemberLabel, { at: l }),
                                (e.label = l),
                                (e.elementType = this.tsParseType())),
                              (l = this.finishNode(e, 'TSNamedTupleMember'));
                          } else if (a) {
                            let e = this.startNodeAtNode(l);
                            (e.typeAnnotation = l), (l = this.finishNode(e, 'TSOptionalType'));
                          }
                          if (t) {
                            let t = this.startNodeAt(e);
                            (t.typeAnnotation = l), (l = this.finishNode(t, 'TSRestType'));
                          }
                          return l;
                        }
                        tsParseParenthesizedType() {
                          let e = this.startNode();
                          return (
                            this.expect(10),
                            (e.typeAnnotation = this.tsParseType()),
                            this.expect(11),
                            this.finishNode(e, 'TSParenthesizedType')
                          );
                        }
                        tsParseFunctionOrConstructorType(e, t) {
                          let r = this.startNode();
                          return (
                            'TSConstructorType' === e && ((r.abstract = !!t), t && this.next(), this.next()),
                            this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, r)),
                            this.finishNode(r, e)
                          );
                        }
                        tsParseLiteralTypeNode() {
                          let e = this.startNode();
                          return (
                            (e.literal = (() => {
                              switch (this.state.type) {
                                case 132:
                                case 133:
                                case 131:
                                case 85:
                                case 86:
                                  return super.parseExprAtom();
                                default:
                                  this.unexpected();
                              }
                            })()),
                            this.finishNode(e, 'TSLiteralType')
                          );
                        }
                        tsParseTemplateLiteralType() {
                          let e = this.startNode();
                          return (e.literal = super.parseTemplate(!1)), this.finishNode(e, 'TSLiteralType');
                        }
                        parseTemplateSubstitution() {
                          return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
                        }
                        tsParseThisTypeOrThisTypePredicate() {
                          let e = this.tsParseThisTypeNode();
                          return this.isContextual(114) && !this.hasPrecedingLineBreak()
                            ? this.tsParseThisTypePredicate(e)
                            : e;
                        }
                        tsParseNonArrayType() {
                          switch (this.state.type) {
                            case 131:
                            case 132:
                            case 133:
                            case 85:
                            case 86:
                              return this.tsParseLiteralTypeNode();
                            case 53:
                              if ('-' === this.state.value) {
                                let e = this.startNode(),
                                  t = this.lookahead();
                                return (
                                  132 !== t.type && 133 !== t.type && this.unexpected(),
                                  (e.literal = this.parseMaybeUnary()),
                                  this.finishNode(e, 'TSLiteralType')
                                );
                              }
                              break;
                            case 78:
                              return this.tsParseThisTypeOrThisTypePredicate();
                            case 87:
                              return this.tsParseTypeQuery();
                            case 83:
                              return this.tsParseImportType();
                            case 5:
                              return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this))
                                ? this.tsParseMappedType()
                                : this.tsParseTypeLiteral();
                            case 0:
                              return this.tsParseTupleType();
                            case 10:
                              return this.tsParseParenthesizedType();
                            case 25:
                            case 24:
                              return this.tsParseTemplateLiteralType();
                            default: {
                              let { type: e } = this.state;
                              if (q(e) || 88 === e || 84 === e) {
                                let t = 88 === e ? 'TSVoidKeyword' : 84 === e ? 'TSNullKeyword' : lh(this.state.value);
                                if (void 0 !== t && 46 !== this.lookaheadCharCode()) {
                                  let e = this.startNode();
                                  return this.next(), this.finishNode(e, t);
                                }
                                return this.tsParseTypeReference();
                              }
                            }
                          }
                          this.unexpected();
                        }
                        tsParseArrayTypeOrHigher() {
                          let e = this.tsParseNonArrayType();
                          for (; !this.hasPrecedingLineBreak() && this.eat(0); )
                            if (this.match(3)) {
                              let t = this.startNodeAtNode(e);
                              (t.elementType = e), this.expect(3), (e = this.finishNode(t, 'TSArrayType'));
                            } else {
                              let t = this.startNodeAtNode(e);
                              (t.objectType = e),
                                (t.indexType = this.tsParseType()),
                                this.expect(3),
                                (e = this.finishNode(t, 'TSIndexedAccessType'));
                            }
                          return e;
                        }
                        tsParseTypeOperator() {
                          let e = this.startNode(),
                            t = this.state.value;
                          return (
                            this.next(),
                            (e.operator = t),
                            (e.typeAnnotation = this.tsParseTypeOperatorOrHigher()),
                            'readonly' === t && this.tsCheckTypeAnnotationForReadOnly(e),
                            this.finishNode(e, 'TSTypeOperator')
                          );
                        }
                        tsCheckTypeAnnotationForReadOnly(e) {
                          switch (e.typeAnnotation.type) {
                            case 'TSTupleType':
                            case 'TSArrayType':
                              return;
                            default:
                              this.raise(eG.UnexpectedReadonly, { at: e });
                          }
                        }
                        tsParseInferType() {
                          let e = this.startNode();
                          this.expectContextual(113);
                          let t = this.startNode();
                          return (
                            (t.name = this.tsParseTypeParameterName()),
                            (t.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType())),
                            (e.typeParameter = this.finishNode(t, 'TSTypeParameter')),
                            this.finishNode(e, 'TSInferType')
                          );
                        }
                        tsParseConstraintForInferType() {
                          if (this.eat(81)) {
                            let e = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
                            if (this.state.inDisallowConditionalTypesContext || !this.match(17)) return e;
                          }
                        }
                        tsParseTypeOperatorOrHigher() {
                          return qo(this.state.type) && !this.state.containsEsc
                            ? this.tsParseTypeOperator()
                            : this.isContextual(113)
                            ? this.tsParseInferType()
                            : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
                        }
                        tsParseUnionOrIntersectionType(e, t, r) {
                          let i = this.startNode(),
                            a = this.eat(r),
                            l = [];
                          do l.push(t());
                          while (this.eat(r));
                          return 1 !== l.length || a ? ((i.types = l), this.finishNode(i, e)) : l[0];
                        }
                        tsParseIntersectionTypeOrHigher() {
                          return this.tsParseUnionOrIntersectionType(
                            'TSIntersectionType',
                            this.tsParseTypeOperatorOrHigher.bind(this),
                            45
                          );
                        }
                        tsParseUnionTypeOrHigher() {
                          return this.tsParseUnionOrIntersectionType(
                            'TSUnionType',
                            this.tsParseIntersectionTypeOrHigher.bind(this),
                            43
                          );
                        }
                        tsIsStartOfFunctionType() {
                          return (
                            !!this.match(47) ||
                            (this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this)))
                          );
                        }
                        tsSkipParameterStart() {
                          if (q(this.state.type) || this.match(78)) return this.next(), !0;
                          if (this.match(5)) {
                            let { errors: e } = this.state,
                              t = e.length;
                            try {
                              return this.parseObjectLike(8, !0), e.length === t;
                            } catch {
                              return !1;
                            }
                          }
                          if (this.match(0)) {
                            this.next();
                            let { errors: e } = this.state,
                              t = e.length;
                            try {
                              return super.parseBindingList(3, 93, 1), e.length === t;
                            } catch {}
                          }
                          return !1;
                        }
                        tsIsUnambiguouslyStartOfFunctionType() {
                          return (
                            this.next(),
                            !!(
                              this.match(11) ||
                              this.match(21) ||
                              (this.tsSkipParameterStart() &&
                                (this.match(14) ||
                                  this.match(12) ||
                                  this.match(17) ||
                                  this.match(29) ||
                                  (this.match(11) && (this.next(), this.match(19)))))
                            )
                          );
                        }
                        tsParseTypeOrTypePredicateAnnotation(e) {
                          return this.tsInType(() => {
                            let t = this.startNode();
                            this.expect(e);
                            let r = this.startNode(),
                              i = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
                            if (i && this.match(78)) {
                              let e = this.tsParseThisTypeOrThisTypePredicate();
                              return (
                                'TSThisType' === e.type
                                  ? ((r.parameterName = e),
                                    (r.asserts = !0),
                                    (r.typeAnnotation = null),
                                    (e = this.finishNode(r, 'TSTypePredicate')))
                                  : (this.resetStartLocationFromNode(e, r), (e.asserts = !0)),
                                (t.typeAnnotation = e),
                                this.finishNode(t, 'TSTypeAnnotation')
                              );
                            }
                            let a =
                              this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
                            if (!a)
                              return i
                                ? ((r.parameterName = this.parseIdentifier()),
                                  (r.asserts = i),
                                  (r.typeAnnotation = null),
                                  (t.typeAnnotation = this.finishNode(r, 'TSTypePredicate')),
                                  this.finishNode(t, 'TSTypeAnnotation'))
                                : this.tsParseTypeAnnotation(!1, t);
                            let l = this.tsParseTypeAnnotation(!1);
                            return (
                              (r.parameterName = a),
                              (r.typeAnnotation = l),
                              (r.asserts = i),
                              (t.typeAnnotation = this.finishNode(r, 'TSTypePredicate')),
                              this.finishNode(t, 'TSTypeAnnotation')
                            );
                          });
                        }
                        tsTryParseTypeOrTypePredicateAnnotation() {
                          return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0;
                        }
                        tsTryParseTypeAnnotation() {
                          return this.match(14) ? this.tsParseTypeAnnotation() : void 0;
                        }
                        tsTryParseType() {
                          return this.tsEatThenParseType(14);
                        }
                        tsParseTypePredicatePrefix() {
                          let e = this.parseIdentifier();
                          if (this.isContextual(114) && !this.hasPrecedingLineBreak()) return this.next(), e;
                        }
                        tsParseTypePredicateAsserts() {
                          if (107 !== this.state.type) return !1;
                          let e = this.state.containsEsc;
                          return (
                            this.next(),
                            !!(q(this.state.type) || this.match(78)) &&
                              (e &&
                                this.raise(Q.InvalidEscapedReservedWord, {
                                  at: this.state.lastTokStartLoc,
                                  reservedWord: 'asserts'
                                }),
                              !0)
                          );
                        }
                        tsParseTypeAnnotation() {
                          let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.startNode();
                          return (
                            this.tsInType(() => {
                              e && this.expect(14), (t.typeAnnotation = this.tsParseType());
                            }),
                            this.finishNode(t, 'TSTypeAnnotation')
                          );
                        }
                        tsParseType() {
                          $r(this.state.inType);
                          let e = this.tsParseNonConditionalType();
                          if (
                            this.state.inDisallowConditionalTypesContext ||
                            this.hasPrecedingLineBreak() ||
                            !this.eat(81)
                          )
                            return e;
                          let t = this.startNodeAtNode(e);
                          return (
                            (t.checkType = e),
                            (t.extendsType = this.tsInDisallowConditionalTypesContext(() =>
                              this.tsParseNonConditionalType()
                            )),
                            this.expect(17),
                            (t.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType())),
                            this.expect(14),
                            (t.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType())),
                            this.finishNode(t, 'TSConditionalType')
                          );
                        }
                        isAbstractConstructorSignature() {
                          return this.isContextual(122) && 77 === this.lookahead().type;
                        }
                        tsParseNonConditionalType() {
                          return this.tsIsStartOfFunctionType()
                            ? this.tsParseFunctionOrConstructorType('TSFunctionType')
                            : this.match(77)
                            ? this.tsParseFunctionOrConstructorType('TSConstructorType')
                            : this.isAbstractConstructorSignature()
                            ? this.tsParseFunctionOrConstructorType('TSConstructorType', !0)
                            : this.tsParseUnionTypeOrHigher();
                        }
                        tsParseTypeAssertion() {
                          this.getPluginOption('typescript', 'disallowAmbiguousJSXLike') &&
                            this.raise(eG.ReservedTypeAssertion, { at: this.state.startLoc });
                          let e = this.startNode();
                          return (
                            (e.typeAnnotation = this.tsInType(
                              () => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType())
                            )),
                            this.expect(48),
                            (e.expression = this.parseMaybeUnary()),
                            this.finishNode(e, 'TSTypeAssertion')
                          );
                        }
                        tsParseHeritageClause(e) {
                          let t = this.state.startLoc,
                            r = this.tsParseDelimitedList('HeritageClauseElement', () => {
                              let e = this.startNode();
                              return (
                                (e.expression = this.tsParseEntityName()),
                                this.match(47) && (e.typeParameters = this.tsParseTypeArguments()),
                                this.finishNode(e, 'TSExpressionWithTypeArguments')
                              );
                            });
                          return r.length || this.raise(eG.EmptyHeritageClauseType, { at: t, token: e }), r;
                        }
                        tsParseInterfaceDeclaration(e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                          if (this.hasFollowingLineBreak()) return null;
                          this.expectContextual(127),
                            t.declare && (e.declare = !0),
                            q(this.state.type)
                              ? ((e.id = this.parseIdentifier()), this.checkIdentifier(e.id, 130))
                              : ((e.id = null), this.raise(eG.MissingInterfaceName, { at: this.state.startLoc })),
                            (e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers)),
                            this.eat(81) && (e.extends = this.tsParseHeritageClause('extends'));
                          let r = this.startNode();
                          return (
                            (r.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this))),
                            (e.body = this.finishNode(r, 'TSInterfaceBody')),
                            this.finishNode(e, 'TSInterfaceDeclaration')
                          );
                        }
                        tsParseTypeAliasDeclaration(e) {
                          return (
                            (e.id = this.parseIdentifier()),
                            this.checkIdentifier(e.id, 2),
                            (e.typeAnnotation = this.tsInType(() => {
                              if (
                                ((e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers)),
                                this.expect(29),
                                this.isContextual(112) && 16 !== this.lookahead().type)
                              ) {
                                let e = this.startNode();
                                return this.next(), this.finishNode(e, 'TSIntrinsicKeyword');
                              }
                              return this.tsParseType();
                            })),
                            this.semicolon(),
                            this.finishNode(e, 'TSTypeAliasDeclaration')
                          );
                        }
                        tsInNoContext(e) {
                          let t = this.state.context;
                          this.state.context = [t[0]];
                          try {
                            return e();
                          } finally {
                            this.state.context = t;
                          }
                        }
                        tsInType(e) {
                          let t = this.state.inType;
                          this.state.inType = !0;
                          try {
                            return e();
                          } finally {
                            this.state.inType = t;
                          }
                        }
                        tsInDisallowConditionalTypesContext(e) {
                          let t = this.state.inDisallowConditionalTypesContext;
                          this.state.inDisallowConditionalTypesContext = !0;
                          try {
                            return e();
                          } finally {
                            this.state.inDisallowConditionalTypesContext = t;
                          }
                        }
                        tsInAllowConditionalTypesContext(e) {
                          let t = this.state.inDisallowConditionalTypesContext;
                          this.state.inDisallowConditionalTypesContext = !1;
                          try {
                            return e();
                          } finally {
                            this.state.inDisallowConditionalTypesContext = t;
                          }
                        }
                        tsEatThenParseType(e) {
                          return this.match(e) ? this.tsNextThenParseType() : void 0;
                        }
                        tsExpectThenParseType(e) {
                          return this.tsDoThenParseType(() => this.expect(e));
                        }
                        tsNextThenParseType() {
                          return this.tsDoThenParseType(() => this.next());
                        }
                        tsDoThenParseType(e) {
                          return this.tsInType(() => (e(), this.tsParseType()));
                        }
                        tsParseEnumMember() {
                          let e = this.startNode();
                          return (
                            (e.id = this.match(131)
                              ? super.parseStringLiteral(this.state.value)
                              : this.parseIdentifier(!0)),
                            this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()),
                            this.finishNode(e, 'TSEnumMember')
                          );
                        }
                        tsParseEnumDeclaration(e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                          return (
                            t.const && (e.const = !0),
                            t.declare && (e.declare = !0),
                            this.expectContextual(124),
                            (e.id = this.parseIdentifier()),
                            this.checkIdentifier(e.id, e.const ? 8971 : 8459),
                            this.expect(5),
                            (e.members = this.tsParseDelimitedList('EnumMembers', this.tsParseEnumMember.bind(this))),
                            this.expect(8),
                            this.finishNode(e, 'TSEnumDeclaration')
                          );
                        }
                        tsParseModuleBlock() {
                          let e = this.startNode();
                          return (
                            this.scope.enter(0),
                            this.expect(5),
                            super.parseBlockOrModuleBlockBody((e.body = []), void 0, !0, 8),
                            this.scope.exit(),
                            this.finishNode(e, 'TSModuleBlock')
                          );
                        }
                        tsParseModuleOrNamespaceDeclaration(e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                          if (((e.id = this.parseIdentifier()), t || this.checkIdentifier(e.id, 1024), this.eat(16))) {
                            let t = this.startNode();
                            this.tsParseModuleOrNamespaceDeclaration(t, !0), (e.body = t);
                          } else
                            this.scope.enter(256),
                              this.prodParam.enter(0),
                              (e.body = this.tsParseModuleBlock()),
                              this.prodParam.exit(),
                              this.scope.exit();
                          return this.finishNode(e, 'TSModuleDeclaration');
                        }
                        tsParseAmbientExternalModuleDeclaration(e) {
                          return (
                            this.isContextual(110)
                              ? ((e.global = !0), (e.id = this.parseIdentifier()))
                              : this.match(131)
                              ? (e.id = super.parseStringLiteral(this.state.value))
                              : this.unexpected(),
                            this.match(5)
                              ? (this.scope.enter(256),
                                this.prodParam.enter(0),
                                (e.body = this.tsParseModuleBlock()),
                                this.prodParam.exit(),
                                this.scope.exit())
                              : this.semicolon(),
                            this.finishNode(e, 'TSModuleDeclaration')
                          );
                        }
                        tsParseImportEqualsDeclaration(e, t) {
                          (e.isExport = t || !1),
                            (e.id = this.parseIdentifier()),
                            this.checkIdentifier(e.id, 4096),
                            this.expect(29);
                          let r = this.tsParseModuleReference();
                          return (
                            'type' === e.importKind &&
                              'TSExternalModuleReference' !== r.type &&
                              this.raise(eG.ImportAliasHasImportType, { at: r }),
                            (e.moduleReference = r),
                            this.semicolon(),
                            this.finishNode(e, 'TSImportEqualsDeclaration')
                          );
                        }
                        tsIsExternalModuleReference() {
                          return this.isContextual(117) && 40 === this.lookaheadCharCode();
                        }
                        tsParseModuleReference() {
                          return this.tsIsExternalModuleReference()
                            ? this.tsParseExternalModuleReference()
                            : this.tsParseEntityName(!1);
                        }
                        tsParseExternalModuleReference() {
                          let e = this.startNode();
                          return (
                            this.expectContextual(117),
                            this.expect(10),
                            this.match(131) || this.unexpected(),
                            (e.expression = super.parseExprAtom()),
                            this.expect(11),
                            this.finishNode(e, 'TSExternalModuleReference')
                          );
                        }
                        tsLookAhead(e) {
                          let t = this.state.clone(),
                            r = e();
                          return (this.state = t), r;
                        }
                        tsTryParseAndCatch(e) {
                          let t = this.tryParse((t) => e() || t());
                          if (!(t.aborted || !t.node)) return t.error && (this.state = t.failState), t.node;
                        }
                        tsTryParse(e) {
                          let t = this.state.clone(),
                            r = e();
                          if (void 0 !== r && !1 !== r) return r;
                          this.state = t;
                        }
                        tsTryParseDeclare(e) {
                          if (this.isLineTerminator()) return;
                          let t = this.state.type,
                            r;
                          return (
                            this.isContextual(99) && ((t = 74), (r = 'let')),
                            this.tsInAmbientContext(() => {
                              if (68 === t) return (e.declare = !0), super.parseFunctionStatement(e, !1, !1);
                              if (80 === t) return (e.declare = !0), this.parseClass(e, !0, !1);
                              if (124 === t) return this.tsParseEnumDeclaration(e, { declare: !0 });
                              if (110 === t) return this.tsParseAmbientExternalModuleDeclaration(e);
                              if (75 === t || 74 === t)
                                return this.match(75) && this.isLookaheadContextual('enum')
                                  ? (this.expect(75), this.tsParseEnumDeclaration(e, { const: !0, declare: !0 }))
                                  : ((e.declare = !0), this.parseVarStatement(e, r || this.state.value, !0));
                              if (127 === t) {
                                let t = this.tsParseInterfaceDeclaration(e, { declare: !0 });
                                if (t) return t;
                              }
                              if (q(t)) return this.tsParseDeclaration(e, this.state.value, !0, null);
                            })
                          );
                        }
                        tsTryParseExportDeclaration() {
                          return this.tsParseDeclaration(this.startNode(), this.state.value, !0, null);
                        }
                        tsParseExpressionStatement(e, t, r) {
                          switch (t.name) {
                            case 'declare': {
                              let t = this.tsTryParseDeclare(e);
                              if (t) return (t.declare = !0), t;
                              break;
                            }
                            case 'global':
                              if (this.match(5))
                                return (
                                  this.scope.enter(256),
                                  this.prodParam.enter(0),
                                  (e.global = !0),
                                  (e.id = t),
                                  (e.body = this.tsParseModuleBlock()),
                                  this.scope.exit(),
                                  this.prodParam.exit(),
                                  this.finishNode(e, 'TSModuleDeclaration')
                                );
                              break;
                            default:
                              return this.tsParseDeclaration(e, t.name, !1, r);
                          }
                        }
                        tsParseDeclaration(e, t, r, i) {
                          switch (t) {
                            case 'abstract':
                              if (this.tsCheckLineTerminator(r) && (this.match(80) || q(this.state.type)))
                                return this.tsParseAbstractDeclaration(e, i);
                              break;
                            case 'module':
                              if (this.tsCheckLineTerminator(r)) {
                                if (this.match(131)) return this.tsParseAmbientExternalModuleDeclaration(e);
                                if (q(this.state.type)) return this.tsParseModuleOrNamespaceDeclaration(e);
                              }
                              break;
                            case 'namespace':
                              if (this.tsCheckLineTerminator(r) && q(this.state.type))
                                return this.tsParseModuleOrNamespaceDeclaration(e);
                              break;
                            case 'type':
                              if (this.tsCheckLineTerminator(r) && q(this.state.type))
                                return this.tsParseTypeAliasDeclaration(e);
                          }
                        }
                        tsCheckLineTerminator(e) {
                          return e ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
                        }
                        tsTryParseGenericAsyncArrowFunction(e) {
                          if (!this.match(47)) return;
                          let t = this.state.maybeInArrowParameters;
                          this.state.maybeInArrowParameters = !0;
                          let r = this.tsTryParseAndCatch(() => {
                            let t = this.startNodeAt(e);
                            return (
                              (t.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier)),
                              super.parseFunctionParams(t),
                              (t.returnType = this.tsTryParseTypeOrTypePredicateAnnotation()),
                              this.expect(19),
                              t
                            );
                          });
                          if (((this.state.maybeInArrowParameters = t), r))
                            return super.parseArrowExpression(r, null, !0);
                        }
                        tsParseTypeArgumentsInExpression() {
                          if (47 === this.reScan_lt()) return this.tsParseTypeArguments();
                        }
                        tsParseTypeArguments() {
                          let e = this.startNode();
                          return (
                            (e.params = this.tsInType(() =>
                              this.tsInNoContext(
                                () => (
                                  this.expect(47),
                                  this.tsParseDelimitedList('TypeParametersOrArguments', this.tsParseType.bind(this))
                                )
                              )
                            )),
                            0 === e.params.length && this.raise(eG.EmptyTypeArguments, { at: e }),
                            this.expect(48),
                            this.finishNode(e, 'TSTypeParameterInstantiation')
                          );
                        }
                        tsIsDeclarationStart() {
                          return Uo(this.state.type);
                        }
                        isExportDefaultSpecifier() {
                          return !this.tsIsDeclarationStart() && super.isExportDefaultSpecifier();
                        }
                        parseAssignableListItem(e, t) {
                          let r = this.state.startLoc,
                            i = {};
                          this.tsParseModifiers(
                            { allowedModifiers: ['public', 'private', 'protected', 'override', 'readonly'] },
                            i
                          );
                          let a = i.accessibility,
                            l = i.override,
                            f = i.readonly;
                          !(4 & e) && (a || f || l) && this.raise(eG.UnexpectedParameterModifier, { at: r });
                          let y = this.parseMaybeDefault();
                          this.parseAssignableListItemTypes(y, e);
                          let g = this.parseMaybeDefault(y.loc.start, y);
                          if (a || f || l) {
                            let e = this.startNodeAt(r);
                            return (
                              t.length && (e.decorators = t),
                              a && (e.accessibility = a),
                              f && (e.readonly = f),
                              l && (e.override = l),
                              'Identifier' !== g.type &&
                                'AssignmentPattern' !== g.type &&
                                this.raise(eG.UnsupportedParameterPropertyKind, { at: e }),
                              (e.parameter = g),
                              this.finishNode(e, 'TSParameterProperty')
                            );
                          }
                          return t.length && (y.decorators = t), g;
                        }
                        isSimpleParameter(e) {
                          return (
                            ('TSParameterProperty' === e.type && super.isSimpleParameter(e.parameter)) ||
                            super.isSimpleParameter(e)
                          );
                        }
                        tsDisallowOptionalPattern(e) {
                          for (let t of e.params)
                            'Identifier' !== t.type &&
                              t.optional &&
                              !this.state.isAmbientContext &&
                              this.raise(eG.PatternIsOptional, { at: t });
                        }
                        setArrowFunctionParameters(e, t, r) {
                          super.setArrowFunctionParameters(e, t, r), this.tsDisallowOptionalPattern(e);
                        }
                        parseFunctionBodyAndFinish(e, t) {
                          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
                          let i =
                            'FunctionDeclaration' === t
                              ? 'TSDeclareFunction'
                              : 'ClassMethod' === t || 'ClassPrivateMethod' === t
                              ? 'TSDeclareMethod'
                              : void 0;
                          return i && !this.match(5) && this.isLineTerminator()
                            ? this.finishNode(e, i)
                            : 'TSDeclareFunction' === i &&
                              this.state.isAmbientContext &&
                              (this.raise(eG.DeclareFunctionHasImplementation, { at: e }), e.declare)
                            ? super.parseFunctionBodyAndFinish(e, i, r)
                            : (this.tsDisallowOptionalPattern(e), super.parseFunctionBodyAndFinish(e, t, r));
                        }
                        registerFunctionStatementId(e) {
                          !e.body && e.id ? this.checkIdentifier(e.id, 1024) : super.registerFunctionStatementId(e);
                        }
                        tsCheckForInvalidTypeCasts(e) {
                          e.forEach((e) => {
                            (null == e ? void 0 : e.type) === 'TSTypeCastExpression' &&
                              this.raise(eG.UnexpectedTypeAnnotation, { at: e.typeAnnotation });
                          });
                        }
                        toReferencedList(e, t) {
                          return this.tsCheckForInvalidTypeCasts(e), e;
                        }
                        parseArrayLike(e, t, r, i) {
                          let a = super.parseArrayLike(e, t, r, i);
                          return 'ArrayExpression' === a.type && this.tsCheckForInvalidTypeCasts(a.elements), a;
                        }
                        parseSubscript(e, t, r, i) {
                          if (!this.hasPrecedingLineBreak() && this.match(35)) {
                            (this.state.canStartJSXElement = !1), this.next();
                            let r = this.startNodeAt(t);
                            return (r.expression = e), this.finishNode(r, 'TSNonNullExpression');
                          }
                          let a = !1;
                          if (this.match(18) && 60 === this.lookaheadCharCode()) {
                            if (r) return (i.stop = !0), e;
                            (i.optionalChainMember = a = !0), this.next();
                          }
                          if (this.match(47) || this.match(51)) {
                            let l,
                              f = this.tsTryParseAndCatch(() => {
                                if (!r && this.atPossibleAsyncArrow(e)) {
                                  let e = this.tsTryParseGenericAsyncArrowFunction(t);
                                  if (e) return e;
                                }
                                let f = this.tsParseTypeArgumentsInExpression();
                                if (!f) return;
                                if (a && !this.match(10)) {
                                  l = this.state.curPosition();
                                  return;
                                }
                                if (nt(this.state.type)) {
                                  let r = super.parseTaggedTemplateExpression(e, t, i);
                                  return (r.typeParameters = f), r;
                                }
                                if (!r && this.eat(10)) {
                                  let r = this.startNodeAt(t);
                                  return (
                                    (r.callee = e),
                                    (r.arguments = this.parseCallExpressionArguments(11, !1)),
                                    this.tsCheckForInvalidTypeCasts(r.arguments),
                                    (r.typeParameters = f),
                                    i.optionalChainMember && (r.optional = a),
                                    this.finishCallExpression(r, i.optionalChainMember)
                                  );
                                }
                                let y = this.state.type;
                                if (48 === y || 52 === y || (10 !== y && I[y] && !this.hasPrecedingLineBreak())) return;
                                let g = this.startNodeAt(t);
                                return (
                                  (g.expression = e),
                                  (g.typeParameters = f),
                                  this.finishNode(g, 'TSInstantiationExpression')
                                );
                              });
                            if ((l && this.unexpected(l, 10), f))
                              return (
                                'TSInstantiationExpression' === f.type &&
                                  (this.match(16) || (this.match(18) && 40 !== this.lookaheadCharCode())) &&
                                  this.raise(eG.InvalidPropertyAccessAfterInstantiationExpression, {
                                    at: this.state.startLoc
                                  }),
                                f
                              );
                          }
                          return super.parseSubscript(e, t, r, i);
                        }
                        parseNewCallee(e) {
                          var t;
                          super.parseNewCallee(e);
                          let { callee: r } = e;
                          'TSInstantiationExpression' !== r.type ||
                            (null != (t = r.extra) && t.parenthesized) ||
                            ((e.typeParameters = r.typeParameters), (e.callee = r.expression));
                        }
                        parseExprOp(e, t, r) {
                          let i;
                          if (
                            E[58] > r &&
                            !this.hasPrecedingLineBreak() &&
                            (this.isContextual(93) || (i = this.isContextual(118)))
                          ) {
                            let a = this.startNodeAt(t);
                            return (
                              (a.expression = e),
                              (a.typeAnnotation = this.tsInType(
                                () => (
                                  this.next(),
                                  this.match(75)
                                    ? (i &&
                                        this.raise(Q.UnexpectedKeyword, { at: this.state.startLoc, keyword: 'const' }),
                                      this.tsParseTypeReference())
                                    : this.tsParseType()
                                )
                              )),
                              this.finishNode(a, i ? 'TSSatisfiesExpression' : 'TSAsExpression'),
                              this.reScan_lt_gt(),
                              this.parseExprOp(a, t, r)
                            );
                          }
                          return super.parseExprOp(e, t, r);
                        }
                        checkReservedWord(e, t, r, i) {
                          this.state.isAmbientContext || super.checkReservedWord(e, t, r, i);
                        }
                        checkImportReflection(e) {
                          super.checkImportReflection(e),
                            e.module &&
                              'value' !== e.importKind &&
                              this.raise(eG.ImportReflectionHasImportType, { at: e.specifiers[0].loc.start });
                        }
                        checkDuplicateExports() {}
                        parseImport(e) {
                          if (((e.importKind = 'value'), q(this.state.type) || this.match(55) || this.match(5))) {
                            let t = this.lookahead();
                            if (
                              (this.isContextual(128) &&
                                12 !== t.type &&
                                97 !== t.type &&
                                29 !== t.type &&
                                ((e.importKind = 'type'), this.next(), (t = this.lookahead())),
                              q(this.state.type) && 29 === t.type)
                            )
                              return this.tsParseImportEqualsDeclaration(e);
                          }
                          let t = super.parseImport(e);
                          return (
                            'type' === t.importKind &&
                              t.specifiers.length > 1 &&
                              'ImportDefaultSpecifier' === t.specifiers[0].type &&
                              this.raise(eG.TypeImportCannotSpecifyDefaultAndNamed, { at: t }),
                            t
                          );
                        }
                        parseExport(e, t) {
                          if (this.match(83))
                            return (
                              this.next(),
                              this.isContextual(128) && 61 !== this.lookaheadCharCode()
                                ? ((e.importKind = 'type'), this.next())
                                : (e.importKind = 'value'),
                              this.tsParseImportEqualsDeclaration(e, !0)
                            );
                          if (this.eat(29))
                            return (
                              (e.expression = super.parseExpression()),
                              this.semicolon(),
                              this.finishNode(e, 'TSExportAssignment')
                            );
                          if (this.eatContextual(93))
                            return (
                              this.expectContextual(126),
                              (e.id = this.parseIdentifier()),
                              this.semicolon(),
                              this.finishNode(e, 'TSNamespaceExportDeclaration')
                            );
                          if (((e.exportKind = 'value'), this.isContextual(128))) {
                            let t = this.lookaheadCharCode();
                            (123 === t || 42 === t) && (this.next(), (e.exportKind = 'type'));
                          }
                          return super.parseExport(e, t);
                        }
                        isAbstractClass() {
                          return this.isContextual(122) && 80 === this.lookahead().type;
                        }
                        parseExportDefaultExpression() {
                          if (this.isAbstractClass()) {
                            let e = this.startNode();
                            return this.next(), (e.abstract = !0), this.parseClass(e, !0, !0);
                          }
                          if (this.match(127)) {
                            let e = this.tsParseInterfaceDeclaration(this.startNode());
                            if (e) return e;
                          }
                          return super.parseExportDefaultExpression();
                        }
                        parseVarStatement(e, t) {
                          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            { isAmbientContext: i } = this.state,
                            a = super.parseVarStatement(e, t, r || i);
                          if (!i) return a;
                          for (let { id: e, init: r } of a.declarations)
                            r &&
                              ('const' !== t || e.typeAnnotation
                                ? this.raise(eG.InitializerNotAllowedInAmbientContext, { at: r })
                                : ph(r, this.hasPlugin('estree')) ||
                                  this.raise(eG.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, {
                                    at: r
                                  }));
                          return a;
                        }
                        parseStatementContent(e, t) {
                          if (this.match(75) && this.isLookaheadContextual('enum')) {
                            let e = this.startNode();
                            return this.expect(75), this.tsParseEnumDeclaration(e, { const: !0 });
                          }
                          if (this.isContextual(124)) return this.tsParseEnumDeclaration(this.startNode());
                          if (this.isContextual(127)) {
                            let e = this.tsParseInterfaceDeclaration(this.startNode());
                            if (e) return e;
                          }
                          return super.parseStatementContent(e, t);
                        }
                        parseAccessModifier() {
                          return this.tsParseModifier(['public', 'protected', 'private']);
                        }
                        tsHasSomeModifiers(e, t) {
                          return t.some((t) => (Hr(t) ? e.accessibility === t : !!e[t]));
                        }
                        tsIsStartOfStaticBlocks() {
                          return this.isContextual(104) && 123 === this.lookaheadCharCode();
                        }
                        parseClassMember(e, t, r) {
                          let i = [
                            'declare',
                            'private',
                            'public',
                            'protected',
                            'override',
                            'abstract',
                            'readonly',
                            'static'
                          ];
                          this.tsParseModifiers(
                            {
                              allowedModifiers: i,
                              disallowedModifiers: ['in', 'out'],
                              stopOnStartOfClassStaticBlock: !0,
                              errorTemplate: eG.InvalidModifierOnTypeParameterPositions
                            },
                            t
                          );
                          let n = () => {
                            this.tsIsStartOfStaticBlocks()
                              ? (this.next(),
                                this.next(),
                                this.tsHasSomeModifiers(t, i) &&
                                  this.raise(eG.StaticBlockCannotHaveModifier, { at: this.state.curPosition() }),
                                super.parseClassStaticBlock(e, t))
                              : this.parseClassMemberWithIsStatic(e, t, r, !!t.static);
                          };
                          t.declare ? this.tsInAmbientContext(n) : n();
                        }
                        parseClassMemberWithIsStatic(e, t, r, i) {
                          let a = this.tsTryParseIndexSignature(t);
                          if (a) {
                            e.body.push(a),
                              t.abstract && this.raise(eG.IndexSignatureHasAbstract, { at: t }),
                              t.accessibility &&
                                this.raise(eG.IndexSignatureHasAccessibility, { at: t, modifier: t.accessibility }),
                              t.declare && this.raise(eG.IndexSignatureHasDeclare, { at: t }),
                              t.override && this.raise(eG.IndexSignatureHasOverride, { at: t });
                            return;
                          }
                          !this.state.inAbstractClass &&
                            t.abstract &&
                            this.raise(eG.NonAbstractClassHasAbstractMethod, { at: t }),
                            t.override && (r.hadSuperClass || this.raise(eG.OverrideNotInSubClass, { at: t })),
                            super.parseClassMemberWithIsStatic(e, t, r, i);
                        }
                        parsePostMemberNameModifiers(e) {
                          this.eat(17) && (e.optional = !0),
                            e.readonly && this.match(10) && this.raise(eG.ClassMethodHasReadonly, { at: e }),
                            e.declare && this.match(10) && this.raise(eG.ClassMethodHasDeclare, { at: e });
                        }
                        parseExpressionStatement(e, t, r) {
                          return (
                            ('Identifier' === t.type ? this.tsParseExpressionStatement(e, t, r) : void 0) ||
                            super.parseExpressionStatement(e, t, r)
                          );
                        }
                        shouldParseExportDeclaration() {
                          return !!this.tsIsDeclarationStart() || super.shouldParseExportDeclaration();
                        }
                        parseConditional(e, t, r) {
                          if (!this.state.maybeInArrowParameters || !this.match(17))
                            return super.parseConditional(e, t, r);
                          let i = this.tryParse(() => super.parseConditional(e, t));
                          return i.node
                            ? (i.error && (this.state = i.failState), i.node)
                            : (i.error && super.setOptionalParametersError(r, i.error), e);
                        }
                        parseParenItem(e, t) {
                          if (
                            ((e = super.parseParenItem(e, t)),
                            this.eat(17) && ((e.optional = !0), this.resetEndLocation(e)),
                            this.match(14))
                          ) {
                            let r = this.startNodeAt(t);
                            return (
                              (r.expression = e),
                              (r.typeAnnotation = this.tsParseTypeAnnotation()),
                              this.finishNode(r, 'TSTypeCastExpression')
                            );
                          }
                          return e;
                        }
                        parseExportDeclaration(e) {
                          if (!this.state.isAmbientContext && this.isContextual(123))
                            return this.tsInAmbientContext(() => this.parseExportDeclaration(e));
                          let t = this.state.startLoc,
                            r = this.eatContextual(123);
                          if (r && (this.isContextual(123) || !this.shouldParseExportDeclaration()))
                            throw this.raise(eG.ExpectedAmbientAfterExportDeclare, { at: this.state.startLoc });
                          let i =
                            (q(this.state.type) && this.tsTryParseExportDeclaration()) ||
                            super.parseExportDeclaration(e);
                          return i
                            ? (('TSInterfaceDeclaration' === i.type || 'TSTypeAliasDeclaration' === i.type || r) &&
                                (e.exportKind = 'type'),
                              r && (this.resetStartLocation(i, t), (i.declare = !0)),
                              i)
                            : null;
                        }
                        parseClassId(e, t, r, i) {
                          if ((!t || r) && this.isContextual(111)) return;
                          super.parseClassId(e, t, r, e.declare ? 1024 : 8331);
                          let a = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
                          a && (e.typeParameters = a);
                        }
                        parseClassPropertyAnnotation(e) {
                          e.optional || (this.eat(35) ? (e.definite = !0) : this.eat(17) && (e.optional = !0));
                          let t = this.tsTryParseTypeAnnotation();
                          t && (e.typeAnnotation = t);
                        }
                        parseClassProperty(e) {
                          if (
                            (this.parseClassPropertyAnnotation(e),
                            this.state.isAmbientContext &&
                              !(e.readonly && !e.typeAnnotation) &&
                              this.match(29) &&
                              this.raise(eG.DeclareClassFieldHasInitializer, { at: this.state.startLoc }),
                            e.abstract && this.match(29))
                          ) {
                            let { key: t } = e;
                            this.raise(eG.AbstractPropertyHasInitializer, {
                              at: this.state.startLoc,
                              propertyName:
                                'Identifier' !== t.type || e.computed ? `[${this.input.slice(t.start, t.end)}]` : t.name
                            });
                          }
                          return super.parseClassProperty(e);
                        }
                        parseClassPrivateProperty(e) {
                          return (
                            e.abstract && this.raise(eG.PrivateElementHasAbstract, { at: e }),
                            e.accessibility &&
                              this.raise(eG.PrivateElementHasAccessibility, { at: e, modifier: e.accessibility }),
                            this.parseClassPropertyAnnotation(e),
                            super.parseClassPrivateProperty(e)
                          );
                        }
                        parseClassAccessorProperty(e) {
                          return (
                            this.parseClassPropertyAnnotation(e),
                            e.optional && this.raise(eG.AccessorCannotBeOptional, { at: e }),
                            super.parseClassAccessorProperty(e)
                          );
                        }
                        pushClassMethod(e, t, r, i, a, l) {
                          let f = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                          f && a && this.raise(eG.ConstructorHasTypeParameters, { at: f });
                          let { declare: y = !1, kind: g } = t;
                          y && ('get' === g || 'set' === g) && this.raise(eG.DeclareAccessor, { at: t, kind: g }),
                            f && (t.typeParameters = f),
                            super.pushClassMethod(e, t, r, i, a, l);
                        }
                        pushClassPrivateMethod(e, t, r, i) {
                          let a = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                          a && (t.typeParameters = a), super.pushClassPrivateMethod(e, t, r, i);
                        }
                        declareClassPrivateMethodInScope(e, t) {
                          'TSDeclareMethod' === e.type ||
                            (('MethodDefinition' !== e.type || e.value.body) &&
                              super.declareClassPrivateMethodInScope(e, t));
                        }
                        parseClassSuper(e) {
                          super.parseClassSuper(e),
                            e.superClass &&
                              (this.match(47) || this.match(51)) &&
                              (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()),
                            this.eatContextual(111) && (e.implements = this.tsParseHeritageClause('implements'));
                        }
                        parseObjPropValue(e, t, r, i, a, l, f) {
                          let y = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                          return y && (e.typeParameters = y), super.parseObjPropValue(e, t, r, i, a, l, f);
                        }
                        parseFunctionParams(e, t) {
                          let r = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                          r && (e.typeParameters = r), super.parseFunctionParams(e, t);
                        }
                        parseVarId(e, t) {
                          super.parseVarId(e, t),
                            'Identifier' === e.id.type &&
                              !this.hasPrecedingLineBreak() &&
                              this.eat(35) &&
                              (e.definite = !0);
                          let r = this.tsTryParseTypeAnnotation();
                          r && ((e.id.typeAnnotation = r), this.resetEndLocation(e.id));
                        }
                        parseAsyncArrowFromCallExpression(e, t) {
                          return (
                            this.match(14) && (e.returnType = this.tsParseTypeAnnotation()),
                            super.parseAsyncArrowFromCallExpression(e, t)
                          );
                        }
                        parseMaybeAssign(e, t) {
                          var r, a, l, f, y, g, T;
                          let E, C, I;
                          if (this.hasPlugin('jsx') && (this.match(140) || this.match(47))) {
                            if (
                              ((E = this.state.clone()),
                              !(C = this.tryParse(() => super.parseMaybeAssign(e, t), E)).error)
                            )
                              return C.node;
                            let { context: r } = this.state,
                              a = r[r.length - 1];
                            (a === i.j_oTag || a === i.j_expr) && r.pop();
                          }
                          if (!(null != (r = C) && r.error) && !this.match(47)) return super.parseMaybeAssign(e, t);
                          (E && E !== this.state) || (E = this.state.clone());
                          let M,
                            D = this.tryParse((r) => {
                              var i, a;
                              M = this.tsParseTypeParameters(this.tsParseConstModifier);
                              let l = super.parseMaybeAssign(e, t);
                              return (
                                ('ArrowFunctionExpression' !== l.type || (null != (i = l.extra) && i.parenthesized)) &&
                                  r(),
                                (null == (a = M) ? void 0 : a.params.length) !== 0 &&
                                  this.resetStartLocationFromNode(l, M),
                                (l.typeParameters = M),
                                l
                              );
                            }, E);
                          if (!D.error && !D.aborted) return M && this.reportReservedArrowTypeParam(M), D.node;
                          if (
                            !C &&
                            ($r(!this.hasPlugin('jsx')),
                            !(I = this.tryParse(() => super.parseMaybeAssign(e, t), E)).error)
                          )
                            return I.node;
                          if (null != (a = C) && a.node) return (this.state = C.failState), C.node;
                          if (D.node)
                            return (this.state = D.failState), M && this.reportReservedArrowTypeParam(M), D.node;
                          if (null != (l = I) && l.node) return (this.state = I.failState), I.node;
                          throw null != (f = C) && f.thrown
                            ? C.error
                            : D.thrown
                            ? D.error
                            : null != (y = I) && y.thrown
                            ? I.error
                            : (null == (g = C) ? void 0 : g.error) || D.error || (null == (T = I) ? void 0 : T.error);
                        }
                        reportReservedArrowTypeParam(e) {
                          var t;
                          1 === e.params.length &&
                            !e.params[0].constraint &&
                            !(null != (t = e.extra) && t.trailingComma) &&
                            this.getPluginOption('typescript', 'disallowAmbiguousJSXLike') &&
                            this.raise(eG.ReservedArrowTypeParam, { at: e });
                        }
                        parseMaybeUnary(e, t) {
                          return !this.hasPlugin('jsx') && this.match(47)
                            ? this.tsParseTypeAssertion()
                            : super.parseMaybeUnary(e, t);
                        }
                        parseArrow(e) {
                          if (this.match(14)) {
                            let t = this.tryParse((e) => {
                              let t = this.tsParseTypeOrTypePredicateAnnotation(14);
                              return (this.canInsertSemicolon() || !this.match(19)) && e(), t;
                            });
                            if (t.aborted) return;
                            t.thrown || (t.error && (this.state = t.failState), (e.returnType = t.node));
                          }
                          return super.parseArrow(e);
                        }
                        parseAssignableListItemTypes(e, t) {
                          if (!(2 & t)) return e;
                          this.eat(17) && (e.optional = !0);
                          let r = this.tsTryParseTypeAnnotation();
                          return r && (e.typeAnnotation = r), this.resetEndLocation(e), e;
                        }
                        isAssignable(e, t) {
                          switch (e.type) {
                            case 'TSTypeCastExpression':
                              return this.isAssignable(e.expression, t);
                            case 'TSParameterProperty':
                              return !0;
                            default:
                              return super.isAssignable(e, t);
                          }
                        }
                        toAssignable(e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                          switch (e.type) {
                            case 'ParenthesizedExpression':
                              this.toAssignableParenthesizedExpression(e, t);
                              break;
                            case 'TSAsExpression':
                            case 'TSSatisfiesExpression':
                            case 'TSNonNullExpression':
                            case 'TSTypeAssertion':
                              t
                                ? this.expressionScope.recordArrowParameterBindingError(
                                    eG.UnexpectedTypeCastInParameter,
                                    { at: e }
                                  )
                                : this.raise(eG.UnexpectedTypeCastInParameter, { at: e }),
                                this.toAssignable(e.expression, t);
                              break;
                            case 'AssignmentExpression':
                              t ||
                                'TSTypeCastExpression' !== e.left.type ||
                                (e.left = this.typeCastToParameter(e.left));
                            default:
                              super.toAssignable(e, t);
                          }
                        }
                        toAssignableParenthesizedExpression(e, t) {
                          switch (e.expression.type) {
                            case 'TSAsExpression':
                            case 'TSSatisfiesExpression':
                            case 'TSNonNullExpression':
                            case 'TSTypeAssertion':
                            case 'ParenthesizedExpression':
                              this.toAssignable(e.expression, t);
                              break;
                            default:
                              super.toAssignable(e, t);
                          }
                        }
                        checkToRestConversion(e, t) {
                          switch (e.type) {
                            case 'TSAsExpression':
                            case 'TSSatisfiesExpression':
                            case 'TSTypeAssertion':
                            case 'TSNonNullExpression':
                              this.checkToRestConversion(e.expression, !1);
                              break;
                            default:
                              super.checkToRestConversion(e, t);
                          }
                        }
                        isValidLVal(e, t, r) {
                          return (
                            nh(
                              {
                                TSTypeCastExpression: !0,
                                TSParameterProperty: 'parameter',
                                TSNonNullExpression: 'expression',
                                TSAsExpression: (64 !== r || !t) && ['expression', !0],
                                TSSatisfiesExpression: (64 !== r || !t) && ['expression', !0],
                                TSTypeAssertion: (64 !== r || !t) && ['expression', !0]
                              },
                              e
                            ) || super.isValidLVal(e, t, r)
                          );
                        }
                        parseBindingAtom() {
                          return 78 === this.state.type ? this.parseIdentifier(!0) : super.parseBindingAtom();
                        }
                        parseMaybeDecoratorArguments(e) {
                          if (this.match(47) || this.match(51)) {
                            let t = this.tsParseTypeArgumentsInExpression();
                            if (this.match(10)) {
                              let r = super.parseMaybeDecoratorArguments(e);
                              return (r.typeParameters = t), r;
                            }
                            this.unexpected(null, 10);
                          }
                          return super.parseMaybeDecoratorArguments(e);
                        }
                        checkCommaAfterRest(e) {
                          return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e
                            ? (this.next(), !1)
                            : super.checkCommaAfterRest(e);
                        }
                        isClassMethod() {
                          return this.match(47) || super.isClassMethod();
                        }
                        isClassProperty() {
                          return this.match(35) || this.match(14) || super.isClassProperty();
                        }
                        parseMaybeDefault(e, t) {
                          let r = super.parseMaybeDefault(e, t);
                          return (
                            'AssignmentPattern' === r.type &&
                              r.typeAnnotation &&
                              r.right.start < r.typeAnnotation.start &&
                              this.raise(eG.TypeAnnotationAfterAssign, { at: r.typeAnnotation }),
                            r
                          );
                        }
                        getTokenFromCode(e) {
                          if (this.state.inType) {
                            if (62 === e) {
                              this.finishOp(48, 1);
                              return;
                            }
                            if (60 === e) {
                              this.finishOp(47, 1);
                              return;
                            }
                          }
                          super.getTokenFromCode(e);
                        }
                        reScan_lt_gt() {
                          let { type: e } = this.state;
                          47 === e
                            ? ((this.state.pos -= 1), this.readToken_lt())
                            : 48 === e && ((this.state.pos -= 1), this.readToken_gt());
                        }
                        reScan_lt() {
                          let { type: e } = this.state;
                          return 51 === e ? ((this.state.pos -= 2), this.finishOp(47, 1), 47) : e;
                        }
                        toAssignableList(e, t, r) {
                          for (let t = 0; t < e.length; t++) {
                            let r = e[t];
                            (null == r ? void 0 : r.type) === 'TSTypeCastExpression' &&
                              (e[t] = this.typeCastToParameter(r));
                          }
                          super.toAssignableList(e, t, r);
                        }
                        typeCastToParameter(e) {
                          return (
                            (e.expression.typeAnnotation = e.typeAnnotation),
                            this.resetEndLocation(e.expression, e.typeAnnotation.loc.end),
                            e.expression
                          );
                        }
                        shouldParseArrow(e) {
                          return this.match(14) ? e.every((e) => this.isAssignable(e, !0)) : super.shouldParseArrow(e);
                        }
                        shouldParseAsyncArrow() {
                          return this.match(14) || super.shouldParseAsyncArrow();
                        }
                        canHaveLeadingDecorator() {
                          return super.canHaveLeadingDecorator() || this.isAbstractClass();
                        }
                        jsxParseOpeningElementAfterName(e) {
                          if (this.match(47) || this.match(51)) {
                            let t = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
                            t && (e.typeParameters = t);
                          }
                          return super.jsxParseOpeningElementAfterName(e);
                        }
                        getGetterSetterExpectedParamCount(e) {
                          let t = super.getGetterSetterExpectedParamCount(e),
                            r = this.getObjectOrClassMethodParams(e)[0];
                          return r && this.isThisParam(r) ? t + 1 : t;
                        }
                        parseCatchClauseParam() {
                          let e = super.parseCatchClauseParam(),
                            t = this.tsTryParseTypeAnnotation();
                          return t && ((e.typeAnnotation = t), this.resetEndLocation(e)), e;
                        }
                        tsInAmbientContext(e) {
                          let t = this.state.isAmbientContext;
                          this.state.isAmbientContext = !0;
                          try {
                            return e();
                          } finally {
                            this.state.isAmbientContext = t;
                          }
                        }
                        parseClass(e, t, r) {
                          let i = this.state.inAbstractClass;
                          this.state.inAbstractClass = !!e.abstract;
                          try {
                            return super.parseClass(e, t, r);
                          } finally {
                            this.state.inAbstractClass = i;
                          }
                        }
                        tsParseAbstractDeclaration(e, t) {
                          if (this.match(80))
                            return (e.abstract = !0), this.maybeTakeDecorators(t, this.parseClass(e, !0, !1));
                          if (this.isContextual(127)) {
                            if (!this.hasFollowingLineBreak())
                              return (
                                (e.abstract = !0),
                                this.raise(eG.NonClassMethodPropertyHasAbstractModifer, { at: e }),
                                this.tsParseInterfaceDeclaration(e)
                              );
                          } else this.unexpected(null, 80);
                        }
                        parseMethod(e, t, r, i, a, l, f) {
                          let y = super.parseMethod(e, t, r, i, a, l, f);
                          if (y.abstract && (this.hasPlugin('estree') ? !!y.value.body : !!y.body)) {
                            let { key: e } = y;
                            this.raise(eG.AbstractMethodHasImplementation, {
                              at: y,
                              methodName:
                                'Identifier' !== e.type || y.computed ? `[${this.input.slice(e.start, e.end)}]` : e.name
                            });
                          }
                          return y;
                        }
                        tsParseTypeParameterName() {
                          return this.parseIdentifier().name;
                        }
                        shouldParseAsAmbientContext() {
                          return !!this.getPluginOption('typescript', 'dts');
                        }
                        parse() {
                          return (
                            this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.parse()
                          );
                        }
                        getExpression() {
                          return (
                            this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0),
                            super.getExpression()
                          );
                        }
                        parseExportSpecifier(e, t, r, i) {
                          return !t && i
                            ? (this.parseTypeOnlyImportExportSpecifier(e, !1, r), this.finishNode(e, 'ExportSpecifier'))
                            : ((e.exportKind = 'value'), super.parseExportSpecifier(e, t, r, i));
                        }
                        parseImportSpecifier(e, t, r, i, a) {
                          return !t && i
                            ? (this.parseTypeOnlyImportExportSpecifier(e, !0, r), this.finishNode(e, 'ImportSpecifier'))
                            : ((e.importKind = 'value'), super.parseImportSpecifier(e, t, r, i, r ? 4098 : 4096));
                        }
                        parseTypeOnlyImportExportSpecifier(e, t, r) {
                          let i = t ? 'imported' : 'local',
                            a = t ? 'local' : 'exported',
                            l = e[i],
                            f,
                            y = !1,
                            g = !0,
                            T = l.loc.start;
                          if (this.isContextual(93)) {
                            let e = this.parseIdentifier();
                            if (this.isContextual(93)) {
                              let r = this.parseIdentifier();
                              te(this.state.type)
                                ? ((y = !0), (l = e), (f = t ? this.parseIdentifier() : this.parseModuleExportName()))
                                : (f = r),
                                (g = !1);
                            } else
                              te(this.state.type)
                                ? ((g = !1), (f = t ? this.parseIdentifier() : this.parseModuleExportName()))
                                : ((y = !0), (l = e));
                          } else
                            te(this.state.type) &&
                              ((y = !0),
                              t
                                ? ((l = this.parseIdentifier(!0)),
                                  this.isContextual(93) || this.checkReservedWord(l.name, l.loc.start, !0, !0))
                                : (l = this.parseModuleExportName()));
                          y &&
                            r &&
                            this.raise(t ? eG.TypeModifierIsUsedInTypeImports : eG.TypeModifierIsUsedInTypeExports, {
                              at: T
                            }),
                            (e[i] = l),
                            (e[a] = f),
                            (e[t ? 'importKind' : 'exportKind'] = y ? 'type' : 'value'),
                            g &&
                              this.eatContextual(93) &&
                              (e[a] = t ? this.parseIdentifier() : this.parseModuleExportName()),
                            e[a] || (e[a] = me(e[i])),
                            t && this.checkIdentifier(e[a], y ? 4098 : 4096);
                        }
                      },
                    v8intrinsic: (e) =>
                      class extends e {
                        parseV8Intrinsic() {
                          if (this.match(54)) {
                            let e = this.state.startLoc,
                              t = this.startNode();
                            if ((this.next(), q(this.state.type))) {
                              let e = this.parseIdentifierName(),
                                r = this.createIdentifier(t, e);
                              if (((r.type = 'V8IntrinsicIdentifier'), this.match(10))) return r;
                            }
                            this.unexpected(e);
                          }
                        }
                        parseExprAtom(e) {
                          return this.parseV8Intrinsic() || super.parseExprAtom(e);
                        }
                      },
                    placeholders: (e) =>
                      class extends e {
                        parsePlaceholder(e) {
                          if (this.match(142)) {
                            let t = this.startNode();
                            return (
                              this.next(),
                              this.assertNoSpace(),
                              (t.name = super.parseIdentifier(!0)),
                              this.assertNoSpace(),
                              this.expect(142),
                              this.finishPlaceholder(t, e)
                            );
                          }
                        }
                        finishPlaceholder(e, t) {
                          let r = !!(e.expectedNode && 'Placeholder' === e.type);
                          return (e.expectedNode = t), r ? e : this.finishNode(e, 'Placeholder');
                        }
                        getTokenFromCode(e) {
                          37 === e && 37 === this.input.charCodeAt(this.state.pos + 1)
                            ? this.finishOp(142, 2)
                            : super.getTokenFromCode(e);
                        }
                        parseExprAtom(e) {
                          return this.parsePlaceholder('Expression') || super.parseExprAtom(e);
                        }
                        parseIdentifier(e) {
                          return this.parsePlaceholder('Identifier') || super.parseIdentifier(e);
                        }
                        checkReservedWord(e, t, r, i) {
                          void 0 !== e && super.checkReservedWord(e, t, r, i);
                        }
                        parseBindingAtom() {
                          return this.parsePlaceholder('Pattern') || super.parseBindingAtom();
                        }
                        isValidLVal(e, t, r) {
                          return 'Placeholder' === e || super.isValidLVal(e, t, r);
                        }
                        toAssignable(e, t) {
                          e && 'Placeholder' === e.type && 'Expression' === e.expectedNode
                            ? (e.expectedNode = 'Pattern')
                            : super.toAssignable(e, t);
                        }
                        chStartsBindingIdentifier(e, t) {
                          return !!(super.chStartsBindingIdentifier(e, t) || 142 === this.lookahead().type);
                        }
                        verifyBreakContinue(e, t) {
                          (e.label && 'Placeholder' === e.label.type) || super.verifyBreakContinue(e, t);
                        }
                        parseExpressionStatement(e, t) {
                          return 'Placeholder' !== t.type || (t.extra && t.extra.parenthesized)
                            ? super.parseExpressionStatement(e, t)
                            : this.match(14)
                            ? ((e.label = this.finishPlaceholder(t, 'Identifier')),
                              this.next(),
                              (e.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration()),
                              this.finishNode(e, 'LabeledStatement'))
                            : (this.semicolon(), (e.name = t.name), this.finishPlaceholder(e, 'Statement'));
                        }
                        parseBlock(e, t, r) {
                          return this.parsePlaceholder('BlockStatement') || super.parseBlock(e, t, r);
                        }
                        parseFunctionId(e) {
                          return this.parsePlaceholder('Identifier') || super.parseFunctionId(e);
                        }
                        parseClass(e, t, r) {
                          let i = t ? 'ClassDeclaration' : 'ClassExpression';
                          this.next();
                          let a = this.state.strict,
                            l = this.parsePlaceholder('Identifier');
                          if (l) {
                            if (this.match(81) || this.match(142) || this.match(5)) e.id = l;
                            else {
                              if (r || !t)
                                return (
                                  (e.id = null),
                                  (e.body = this.finishPlaceholder(l, 'ClassBody')),
                                  this.finishNode(e, i)
                                );
                              throw this.raise(eY.ClassNameIsRequired, { at: this.state.startLoc });
                            }
                          } else this.parseClassId(e, t, r);
                          return (
                            super.parseClassSuper(e),
                            (e.body = this.parsePlaceholder('ClassBody') || super.parseClassBody(!!e.superClass, a)),
                            this.finishNode(e, i)
                          );
                        }
                        parseExport(e, t) {
                          let r = this.parsePlaceholder('Identifier');
                          if (!r) return super.parseExport(e, t);
                          if (!this.isContextual(97) && !this.match(12))
                            return (
                              (e.specifiers = []),
                              (e.source = null),
                              (e.declaration = this.finishPlaceholder(r, 'Declaration')),
                              this.finishNode(e, 'ExportNamedDeclaration')
                            );
                          this.expectPlugin('exportDefaultFrom');
                          let i = this.startNode();
                          return (
                            (i.exported = r),
                            (e.specifiers = [this.finishNode(i, 'ExportDefaultSpecifier')]),
                            super.parseExport(e, t)
                          );
                        }
                        isExportDefaultSpecifier() {
                          if (this.match(65)) {
                            let e = this.nextTokenStart();
                            if (
                              this.isUnparsedContextual(e, 'from') &&
                              this.input.startsWith(T[142], this.nextTokenStartSince(e + 4))
                            )
                              return !0;
                          }
                          return super.isExportDefaultSpecifier();
                        }
                        maybeParseExportDefaultSpecifier(e) {
                          return (
                            (!!e.specifiers && e.specifiers.length > 0) || super.maybeParseExportDefaultSpecifier(e)
                          );
                        }
                        checkExport(e) {
                          let { specifiers: t } = e;
                          null != t && t.length && (e.specifiers = t.filter((e) => 'Placeholder' === e.exported.type)),
                            super.checkExport(e),
                            (e.specifiers = t);
                        }
                        parseImport(e) {
                          let t = this.parsePlaceholder('Identifier');
                          if (!t) return super.parseImport(e);
                          if (((e.specifiers = []), !this.isContextual(97) && !this.match(12)))
                            return (
                              (e.source = this.finishPlaceholder(t, 'StringLiteral')),
                              this.semicolon(),
                              this.finishNode(e, 'ImportDeclaration')
                            );
                          let r = this.startNodeAtNode(t);
                          return (
                            (r.local = t),
                            e.specifiers.push(this.finishNode(r, 'ImportDefaultSpecifier')),
                            this.eat(12) &&
                              (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)),
                            this.expectContextual(97),
                            (e.source = this.parseImportSource()),
                            this.semicolon(),
                            this.finishNode(e, 'ImportDeclaration')
                          );
                        }
                        parseImportSource() {
                          return this.parsePlaceholder('StringLiteral') || super.parseImportSource();
                        }
                        assertNoSpace() {
                          this.state.start > this.state.lastTokEndLoc.index &&
                            this.raise(eY.UnexpectedSpace, { at: this.state.lastTokEndLoc });
                        }
                      }
                  },
                  e2 = Object.keys(e0),
                  e3 = class extends eX {
                    checkProto(e, t, r, i) {
                      if ('SpreadElement' === e.type || this.isObjectMethod(e) || e.computed || e.shorthand) return;
                      let a = e.key;
                      if (('Identifier' === a.type ? a.name : a.value) === '__proto__') {
                        if (t) {
                          this.raise(Q.RecordNoProto, { at: a });
                          return;
                        }
                        r.used &&
                          (i
                            ? null === i.doubleProtoLoc && (i.doubleProtoLoc = a.loc.start)
                            : this.raise(Q.DuplicateProto, { at: a })),
                          (r.used = !0);
                      }
                    }
                    shouldExitDescending(e, t) {
                      return 'ArrowFunctionExpression' === e.type && e.start === t;
                    }
                    getExpression() {
                      this.enterInitialScopes(), this.nextToken();
                      let e = this.parseExpression();
                      return (
                        this.match(137) || this.unexpected(),
                        this.finalizeRemainingComments(),
                        (e.comments = this.state.comments),
                        (e.errors = this.state.errors),
                        this.options.tokens && (e.tokens = this.tokens),
                        e
                      );
                    }
                    parseExpression(e, t) {
                      return e
                        ? this.disallowInAnd(() => this.parseExpressionBase(t))
                        : this.allowInAnd(() => this.parseExpressionBase(t));
                    }
                    parseExpressionBase(e) {
                      let t = this.state.startLoc,
                        r = this.parseMaybeAssign(e);
                      if (this.match(12)) {
                        let i = this.startNodeAt(t);
                        for (i.expressions = [r]; this.eat(12); ) i.expressions.push(this.parseMaybeAssign(e));
                        return this.toReferencedList(i.expressions), this.finishNode(i, 'SequenceExpression');
                      }
                      return r;
                    }
                    parseMaybeAssignDisallowIn(e, t) {
                      return this.disallowInAnd(() => this.parseMaybeAssign(e, t));
                    }
                    parseMaybeAssignAllowIn(e, t) {
                      return this.allowInAnd(() => this.parseMaybeAssign(e, t));
                    }
                    setOptionalParametersError(e, t) {
                      var r;
                      e.optionalParametersLoc = null != (r = null == t ? void 0 : t.loc) ? r : this.state.startLoc;
                    }
                    parseMaybeAssign(e, t) {
                      let r,
                        i = this.state.startLoc;
                      if (this.isContextual(106) && this.prodParam.hasYield) {
                        let e = this.parseYield();
                        return t && (e = t.call(this, e, i)), e;
                      }
                      e ? (r = !1) : ((e = new ej()), (r = !0));
                      let { type: a } = this.state;
                      (10 === a || q(a)) && (this.state.potentialArrowAt = this.state.start);
                      let l = this.parseMaybeConditional(e);
                      if ((t && (l = t.call(this, l, i)), Bo(this.state.type))) {
                        let t = this.startNodeAt(i),
                          r = this.state.value;
                        if (((t.operator = r), this.match(29))) {
                          this.toAssignable(l, !0), (t.left = l);
                          let r = i.index;
                          null != e.doubleProtoLoc && e.doubleProtoLoc.index >= r && (e.doubleProtoLoc = null),
                            null != e.shorthandAssignLoc &&
                              e.shorthandAssignLoc.index >= r &&
                              (e.shorthandAssignLoc = null),
                            null != e.privateKeyLoc &&
                              e.privateKeyLoc.index >= r &&
                              (this.checkDestructuringPrivate(e), (e.privateKeyLoc = null));
                        } else t.left = l;
                        return (
                          this.next(),
                          (t.right = this.parseMaybeAssign()),
                          this.checkLVal(l, { in: this.finishNode(t, 'AssignmentExpression') }),
                          t
                        );
                      }
                      return r && this.checkExpressionErrors(e, !0), l;
                    }
                    parseMaybeConditional(e) {
                      let t = this.state.startLoc,
                        r = this.state.potentialArrowAt,
                        i = this.parseExprOps(e);
                      return this.shouldExitDescending(i, r) ? i : this.parseConditional(i, t, e);
                    }
                    parseConditional(e, t, r) {
                      if (this.eat(17)) {
                        let r = this.startNodeAt(t);
                        return (
                          (r.test = e),
                          (r.consequent = this.parseMaybeAssignAllowIn()),
                          this.expect(14),
                          (r.alternate = this.parseMaybeAssign()),
                          this.finishNode(r, 'ConditionalExpression')
                        );
                      }
                      return e;
                    }
                    parseMaybeUnaryOrPrivate(e) {
                      return this.match(136) ? this.parsePrivateName() : this.parseMaybeUnary(e);
                    }
                    parseExprOps(e) {
                      let t = this.state.startLoc,
                        r = this.state.potentialArrowAt,
                        i = this.parseMaybeUnaryOrPrivate(e);
                      return this.shouldExitDescending(i, r) ? i : this.parseExprOp(i, t, -1);
                    }
                    parseExprOp(e, t, r) {
                      if (this.isPrivateName(e)) {
                        let t = this.getPrivateNameSV(e);
                        (!(r >= E[58]) && this.prodParam.hasIn && this.match(58)) ||
                          this.raise(Q.PrivateInExpectedIn, { at: e, identifierName: t }),
                          this.classScope.usePrivateName(t, e.loc.start);
                      }
                      let i = this.state.type;
                      if (_o(i) && (this.prodParam.hasIn || !this.match(58))) {
                        let a = E[i];
                        if (a > r) {
                          if (39 === i) {
                            if ((this.expectPlugin('pipelineOperator'), this.state.inFSharpPipelineDirectBody))
                              return e;
                            this.checkPipelineAtInfixOperator(e, t);
                          }
                          let l = this.startNodeAt(t);
                          (l.left = e), (l.operator = this.state.value);
                          let f = 41 === i || 42 === i,
                            y = 40 === i;
                          if (
                            (y && (a = E[42]),
                            this.next(),
                            39 === i &&
                              this.hasPlugin(['pipelineOperator', { proposal: 'minimal' }]) &&
                              96 === this.state.type &&
                              this.prodParam.hasAwait)
                          )
                            throw this.raise(Q.UnexpectedAwaitAfterPipelineBody, { at: this.state.startLoc });
                          l.right = this.parseExprOpRightExpr(i, a);
                          let g = this.finishNode(l, f || y ? 'LogicalExpression' : 'BinaryExpression'),
                            T = this.state.type;
                          if ((y && (41 === T || 42 === T)) || (f && 40 === T))
                            throw this.raise(Q.MixingCoalesceWithLogical, { at: this.state.startLoc });
                          return this.parseExprOp(g, t, r);
                        }
                      }
                      return e;
                    }
                    parseExprOpRightExpr(e, t) {
                      let r = this.state.startLoc;
                      if (39 === e)
                        switch (this.getPluginOption('pipelineOperator', 'proposal')) {
                          case 'hack':
                            return this.withTopicBindingContext(() => this.parseHackPipeBody());
                          case 'smart':
                            return this.withTopicBindingContext(() => {
                              if (this.prodParam.hasYield && this.isContextual(106))
                                throw this.raise(Q.PipeBodyIsTighter, { at: this.state.startLoc });
                              return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(e, t), r);
                            });
                          case 'fsharp':
                            return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(t));
                        }
                      return this.parseExprOpBaseRightExpr(e, t);
                    }
                    parseExprOpBaseRightExpr(e, t) {
                      let r = this.state.startLoc;
                      return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), r, $o(e) ? t - 1 : t);
                    }
                    parseHackPipeBody() {
                      var e;
                      let { startLoc: t } = this.state,
                        r = this.parseMaybeAssign();
                      return (
                        K.has(r.type) &&
                          !(null != (e = r.extra) && e.parenthesized) &&
                          this.raise(Q.PipeUnparenthesizedBody, { at: t, type: r.type }),
                        this.topicReferenceWasUsedInCurrentContext() || this.raise(Q.PipeTopicUnused, { at: t }),
                        r
                      );
                    }
                    checkExponentialAfterUnary(e) {
                      this.match(57) && this.raise(Q.UnexpectedTokenUnaryExponentiation, { at: e.argument });
                    }
                    parseMaybeUnary(e, t) {
                      let r = this.state.startLoc,
                        i = this.isContextual(96);
                      if (i && this.isAwaitAllowed()) {
                        this.next();
                        let e = this.parseAwait(r);
                        return t || this.checkExponentialAfterUnary(e), e;
                      }
                      let a = this.match(34),
                        l = this.startNode();
                      if (jo(this.state.type)) {
                        (l.operator = this.state.value),
                          (l.prefix = !0),
                          this.match(72) && this.expectPlugin('throwExpressions');
                        let r = this.match(89);
                        if (
                          (this.next(),
                          (l.argument = this.parseMaybeUnary(null, !0)),
                          this.checkExpressionErrors(e, !0),
                          this.state.strict && r)
                        ) {
                          let e = l.argument;
                          'Identifier' === e.type
                            ? this.raise(Q.StrictDelete, { at: l })
                            : this.hasPropertyAsPrivateName(e) && this.raise(Q.DeletePrivateField, { at: l });
                        }
                        if (!a) return t || this.checkExponentialAfterUnary(l), this.finishNode(l, 'UnaryExpression');
                      }
                      let f = this.parseUpdate(l, a, e);
                      if (i) {
                        let { type: e } = this.state;
                        if (
                          (this.hasPlugin('v8intrinsic') ? I[e] : I[e] && !this.match(54)) &&
                          !this.isAmbiguousAwait()
                        )
                          return this.raiseOverwrite(Q.AwaitNotInAsyncContext, { at: r }), this.parseAwait(r);
                      }
                      return f;
                    }
                    parseUpdate(e, t, r) {
                      if (t) return this.checkLVal(e.argument, { in: this.finishNode(e, 'UpdateExpression') }), e;
                      let i = this.state.startLoc,
                        a = this.parseExprSubscripts(r);
                      if (this.checkExpressionErrors(r, !1)) return a;
                      for (; Ro(this.state.type) && !this.canInsertSemicolon(); ) {
                        let e = this.startNodeAt(i);
                        (e.operator = this.state.value),
                          (e.prefix = !1),
                          (e.argument = a),
                          this.next(),
                          this.checkLVal(a, { in: (a = this.finishNode(e, 'UpdateExpression')) });
                      }
                      return a;
                    }
                    parseExprSubscripts(e) {
                      let t = this.state.startLoc,
                        r = this.state.potentialArrowAt,
                        i = this.parseExprAtom(e);
                      return this.shouldExitDescending(i, r) ? i : this.parseSubscripts(i, t);
                    }
                    parseSubscripts(e, t, r) {
                      let i = { optionalChainMember: !1, maybeAsyncArrow: this.atPossibleAsyncArrow(e), stop: !1 };
                      do (e = this.parseSubscript(e, t, r, i)), (i.maybeAsyncArrow = !1);
                      while (!i.stop);
                      return e;
                    }
                    parseSubscript(e, t, r, i) {
                      let { type: a } = this.state;
                      if (!r && 15 === a) return this.parseBind(e, t, r, i);
                      if (nt(a)) return this.parseTaggedTemplateExpression(e, t, i);
                      let l = !1;
                      if (18 === a) {
                        if (
                          r &&
                          (this.raise(Q.OptionalChainingNoNew, { at: this.state.startLoc }),
                          40 === this.lookaheadCharCode())
                        )
                          return (i.stop = !0), e;
                        (i.optionalChainMember = l = !0), this.next();
                      }
                      if (!r && this.match(10)) return this.parseCoverCallAndAsyncArrowHead(e, t, i, l);
                      {
                        let r = this.eat(0);
                        return r || l || this.eat(16) ? this.parseMember(e, t, i, r, l) : ((i.stop = !0), e);
                      }
                    }
                    parseMember(e, t, r, i, a) {
                      let l = this.startNodeAt(t);
                      return (
                        (l.object = e),
                        (l.computed = i),
                        i
                          ? ((l.property = this.parseExpression()), this.expect(3))
                          : this.match(136)
                          ? ('Super' === e.type && this.raise(Q.SuperPrivateField, { at: t }),
                            this.classScope.usePrivateName(this.state.value, this.state.startLoc),
                            (l.property = this.parsePrivateName()))
                          : (l.property = this.parseIdentifier(!0)),
                        r.optionalChainMember
                          ? ((l.optional = a), this.finishNode(l, 'OptionalMemberExpression'))
                          : this.finishNode(l, 'MemberExpression')
                      );
                    }
                    parseBind(e, t, r, i) {
                      let a = this.startNodeAt(t);
                      return (
                        (a.object = e),
                        this.next(),
                        (a.callee = this.parseNoCallExpr()),
                        (i.stop = !0),
                        this.parseSubscripts(this.finishNode(a, 'BindExpression'), t, r)
                      );
                    }
                    parseCoverCallAndAsyncArrowHead(e, t, r, i) {
                      let a = this.state.maybeInArrowParameters,
                        l = null;
                      (this.state.maybeInArrowParameters = !0), this.next();
                      let f = this.startNodeAt(t);
                      f.callee = e;
                      let { maybeAsyncArrow: y, optionalChainMember: g } = r;
                      y && (this.expressionScope.enter($l()), (l = new ej())),
                        g && (f.optional = i),
                        i
                          ? (f.arguments = this.parseCallExpressionArguments(11))
                          : (f.arguments = this.parseCallExpressionArguments(
                              11,
                              'Import' === e.type,
                              'Super' !== e.type,
                              f,
                              l
                            ));
                      let T = this.finishCallExpression(f, g);
                      return (
                        y && this.shouldParseAsyncArrow() && !i
                          ? ((r.stop = !0),
                            this.checkDestructuringPrivate(l),
                            this.expressionScope.validateAsPattern(),
                            this.expressionScope.exit(),
                            (T = this.parseAsyncArrowFromCallExpression(this.startNodeAt(t), T)))
                          : (y && (this.checkExpressionErrors(l, !0), this.expressionScope.exit()),
                            this.toReferencedArguments(T)),
                        (this.state.maybeInArrowParameters = a),
                        T
                      );
                    }
                    toReferencedArguments(e, t) {
                      this.toReferencedListDeep(e.arguments, t);
                    }
                    parseTaggedTemplateExpression(e, t, r) {
                      let i = this.startNodeAt(t);
                      return (
                        (i.tag = e),
                        (i.quasi = this.parseTemplate(!0)),
                        r.optionalChainMember && this.raise(Q.OptionalChainingNoTemplate, { at: t }),
                        this.finishNode(i, 'TaggedTemplateExpression')
                      );
                    }
                    atPossibleAsyncArrow(e) {
                      return (
                        'Identifier' === e.type &&
                        'async' === e.name &&
                        this.state.lastTokEndLoc.index === e.end &&
                        !this.canInsertSemicolon() &&
                        e.end - e.start == 5 &&
                        e.start === this.state.potentialArrowAt
                      );
                    }
                    finishCallExpression(e, t) {
                      if ('Import' === e.callee.type) {
                        if (
                          (2 === e.arguments.length &&
                            (this.hasPlugin('moduleAttributes') || this.expectPlugin('importAssertions')),
                          0 === e.arguments.length || e.arguments.length > 2)
                        )
                          this.raise(Q.ImportCallArity, {
                            at: e,
                            maxArgumentCount:
                              this.hasPlugin('importAssertions') || this.hasPlugin('moduleAttributes') ? 2 : 1
                          });
                        else
                          for (let t of e.arguments)
                            'SpreadElement' === t.type && this.raise(Q.ImportCallSpreadArgument, { at: t });
                      }
                      return this.finishNode(e, t ? 'OptionalCallExpression' : 'CallExpression');
                    }
                    parseCallExpressionArguments(e, t, r, i, a) {
                      let l = [],
                        f = !0,
                        y = this.state.inFSharpPipelineDirectBody;
                      for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(e); ) {
                        if (f) f = !1;
                        else if ((this.expect(12), this.match(e))) {
                          !t ||
                            this.hasPlugin('importAssertions') ||
                            this.hasPlugin('moduleAttributes') ||
                            this.raise(Q.ImportCallArgumentTrailingComma, { at: this.state.lastTokStartLoc }),
                            i && this.addTrailingCommaExtraToNode(i),
                            this.next();
                          break;
                        }
                        l.push(this.parseExprListItem(!1, a, r));
                      }
                      return (this.state.inFSharpPipelineDirectBody = y), l;
                    }
                    shouldParseAsyncArrow() {
                      return this.match(19) && !this.canInsertSemicolon();
                    }
                    parseAsyncArrowFromCallExpression(e, t) {
                      var r;
                      return (
                        this.resetPreviousNodeTrailingComments(t),
                        this.expect(19),
                        this.parseArrowExpression(
                          e,
                          t.arguments,
                          !0,
                          null == (r = t.extra) ? void 0 : r.trailingCommaLoc
                        ),
                        t.innerComments && Ke(e, t.innerComments),
                        t.callee.trailingComments && Ke(e, t.callee.trailingComments),
                        e
                      );
                    }
                    parseNoCallExpr() {
                      let e = this.state.startLoc;
                      return this.parseSubscripts(this.parseExprAtom(), e, !0);
                    }
                    parseExprAtom(e) {
                      let t,
                        r = null,
                        { type: i } = this.state;
                      switch (i) {
                        case 79:
                          return this.parseSuper();
                        case 83:
                          return (
                            (t = this.startNode()),
                            this.next(),
                            this.match(16)
                              ? this.parseImportMetaProperty(t)
                              : (this.match(10) || this.raise(Q.UnsupportedImport, { at: this.state.lastTokStartLoc }),
                                this.finishNode(t, 'Import'))
                          );
                        case 78:
                          return (t = this.startNode()), this.next(), this.finishNode(t, 'ThisExpression');
                        case 90:
                          return this.parseDo(this.startNode(), !1);
                        case 56:
                        case 31:
                          return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
                        case 132:
                          return this.parseNumericLiteral(this.state.value);
                        case 133:
                          return this.parseBigIntLiteral(this.state.value);
                        case 134:
                          return this.parseDecimalLiteral(this.state.value);
                        case 131:
                          return this.parseStringLiteral(this.state.value);
                        case 84:
                          return this.parseNullLiteral();
                        case 85:
                          return this.parseBooleanLiteral(!0);
                        case 86:
                          return this.parseBooleanLiteral(!1);
                        case 10: {
                          let e = this.state.potentialArrowAt === this.state.start;
                          return this.parseParenAndDistinguishExpression(e);
                        }
                        case 2:
                        case 1:
                          return this.parseArrayLike(2 === this.state.type ? 4 : 3, !1, !0);
                        case 0:
                          return this.parseArrayLike(3, !0, !1, e);
                        case 6:
                        case 7:
                          return this.parseObjectLike(6 === this.state.type ? 9 : 8, !1, !0);
                        case 5:
                          return this.parseObjectLike(8, !1, !1, e);
                        case 68:
                          return this.parseFunctionOrFunctionSent();
                        case 26:
                          r = this.parseDecorators();
                        case 80:
                          return this.parseClass(this.maybeTakeDecorators(r, this.startNode()), !1);
                        case 77:
                          return this.parseNewOrNewTarget();
                        case 25:
                        case 24:
                          return this.parseTemplate(!1);
                        case 15: {
                          (t = this.startNode()), this.next(), (t.object = null);
                          let e = (t.callee = this.parseNoCallExpr());
                          if ('MemberExpression' === e.type) return this.finishNode(t, 'BindExpression');
                          throw this.raise(Q.UnsupportedBind, { at: e });
                        }
                        case 136:
                          return (
                            this.raise(Q.PrivateInExpectedIn, {
                              at: this.state.startLoc,
                              identifierName: this.state.value
                            }),
                            this.parsePrivateName()
                          );
                        case 33:
                          return this.parseTopicReferenceThenEqualsSign(54, '%');
                        case 32:
                          return this.parseTopicReferenceThenEqualsSign(44, '^');
                        case 37:
                        case 38:
                          return this.parseTopicReference('hack');
                        case 44:
                        case 54:
                        case 27: {
                          let e = this.getPluginOption('pipelineOperator', 'proposal');
                          if (e) return this.parseTopicReference(e);
                          this.unexpected();
                          break;
                        }
                        case 47: {
                          let e = this.input.codePointAt(this.nextTokenStart());
                          fe(e) || 62 === e ? this.expectOnePlugin(['jsx', 'flow', 'typescript']) : this.unexpected();
                          break;
                        }
                        default:
                          if (q(i)) {
                            if (
                              this.isContextual(125) &&
                              123 === this.lookaheadCharCode() &&
                              !this.hasFollowingLineBreak()
                            )
                              return this.parseModuleExpression();
                            let e = this.state.potentialArrowAt === this.state.start,
                              t = this.state.containsEsc,
                              r = this.parseIdentifier();
                            if (!t && 'async' === r.name && !this.canInsertSemicolon()) {
                              let { type: e } = this.state;
                              if (68 === e)
                                return (
                                  this.resetPreviousNodeTrailingComments(r),
                                  this.next(),
                                  this.parseAsyncFunctionExpression(this.startNodeAtNode(r))
                                );
                              if (q(e))
                                return 61 === this.lookaheadCharCode()
                                  ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(r))
                                  : r;
                              if (90 === e)
                                return (
                                  this.resetPreviousNodeTrailingComments(r), this.parseDo(this.startNodeAtNode(r), !0)
                                );
                            }
                            return e && this.match(19) && !this.canInsertSemicolon()
                              ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(r), [r], !1))
                              : r;
                          }
                          this.unexpected();
                      }
                    }
                    parseTopicReferenceThenEqualsSign(e, t) {
                      let r = this.getPluginOption('pipelineOperator', 'proposal');
                      if (r)
                        return (
                          (this.state.type = e),
                          (this.state.value = t),
                          this.state.pos--,
                          this.state.end--,
                          (this.state.endLoc = Y(this.state.endLoc, -1)),
                          this.parseTopicReference(r)
                        );
                      this.unexpected();
                    }
                    parseTopicReference(e) {
                      let t = this.startNode(),
                        r = this.state.startLoc,
                        i = this.state.type;
                      return this.next(), this.finishTopicReference(t, r, e, i);
                    }
                    finishTopicReference(e, t, r, i) {
                      if (this.testTopicReferenceConfiguration(r, t, i)) {
                        let i = 'smart' === r ? 'PipelinePrimaryTopicReference' : 'TopicReference';
                        return (
                          this.topicReferenceIsAllowedInCurrentContext() ||
                            this.raise('smart' === r ? Q.PrimaryTopicNotAllowed : Q.PipeTopicUnbound, { at: t }),
                          this.registerTopicReference(),
                          this.finishNode(e, i)
                        );
                      }
                      throw this.raise(Q.PipeTopicUnconfiguredToken, { at: t, token: T[i] });
                    }
                    testTopicReferenceConfiguration(e, t, r) {
                      switch (e) {
                        case 'hack':
                          return this.hasPlugin(['pipelineOperator', { topicToken: T[r] }]);
                        case 'smart':
                          return 27 === r;
                        default:
                          throw this.raise(Q.PipeTopicRequiresHackPipes, { at: t });
                      }
                    }
                    parseAsyncArrowUnaryFunction(e) {
                      this.prodParam.enter(Tt(!0, this.prodParam.hasYield));
                      let t = [this.parseIdentifier()];
                      return (
                        this.prodParam.exit(),
                        this.hasPrecedingLineBreak() &&
                          this.raise(Q.LineTerminatorBeforeArrow, { at: this.state.curPosition() }),
                        this.expect(19),
                        this.parseArrowExpression(e, t, !0)
                      );
                    }
                    parseDo(e, t) {
                      this.expectPlugin('doExpressions'),
                        t && this.expectPlugin('asyncDoExpressions'),
                        (e.async = t),
                        this.next();
                      let r = this.state.labels;
                      return (
                        (this.state.labels = []),
                        t
                          ? (this.prodParam.enter(2), (e.body = this.parseBlock()), this.prodParam.exit())
                          : (e.body = this.parseBlock()),
                        (this.state.labels = r),
                        this.finishNode(e, 'DoExpression')
                      );
                    }
                    parseSuper() {
                      let e = this.startNode();
                      return (
                        this.next(),
                        !this.match(10) || this.scope.allowDirectSuper || this.options.allowSuperOutsideMethod
                          ? this.scope.allowSuper ||
                            this.options.allowSuperOutsideMethod ||
                            this.raise(Q.UnexpectedSuper, { at: e })
                          : this.raise(Q.SuperNotAllowed, { at: e }),
                        this.match(10) || this.match(0) || this.match(16) || this.raise(Q.UnsupportedSuper, { at: e }),
                        this.finishNode(e, 'Super')
                      );
                    }
                    parsePrivateName() {
                      let e = this.startNode(),
                        t = this.startNodeAt(Y(this.state.startLoc, 1)),
                        r = this.state.value;
                      return this.next(), (e.id = this.createIdentifier(t, r)), this.finishNode(e, 'PrivateName');
                    }
                    parseFunctionOrFunctionSent() {
                      let e = this.startNode();
                      if ((this.next(), this.prodParam.hasYield && this.match(16))) {
                        let t = this.createIdentifier(this.startNodeAtNode(e), 'function');
                        return (
                          this.next(),
                          this.match(102)
                            ? this.expectPlugin('functionSent')
                            : this.hasPlugin('functionSent') || this.unexpected(),
                          this.parseMetaProperty(e, t, 'sent')
                        );
                      }
                      return this.parseFunction(e);
                    }
                    parseMetaProperty(e, t, r) {
                      e.meta = t;
                      let i = this.state.containsEsc;
                      return (
                        (e.property = this.parseIdentifier(!0)),
                        (e.property.name !== r || i) &&
                          this.raise(Q.UnsupportedMetaProperty, {
                            at: e.property,
                            target: t.name,
                            onlyValidPropertyName: r
                          }),
                        this.finishNode(e, 'MetaProperty')
                      );
                    }
                    parseImportMetaProperty(e) {
                      let t = this.createIdentifier(this.startNodeAtNode(e), 'import');
                      return (
                        this.next(),
                        this.isContextual(100) &&
                          (this.inModule || this.raise(Q.ImportMetaOutsideModule, { at: t }),
                          (this.sawUnambiguousESM = !0)),
                        this.parseMetaProperty(e, t, 'meta')
                      );
                    }
                    parseLiteralAtNode(e, t, r) {
                      return (
                        this.addExtra(r, 'rawValue', e),
                        this.addExtra(r, 'raw', this.input.slice(r.start, this.state.end)),
                        (r.value = e),
                        this.next(),
                        this.finishNode(r, t)
                      );
                    }
                    parseLiteral(e, t) {
                      let r = this.startNode();
                      return this.parseLiteralAtNode(e, t, r);
                    }
                    parseStringLiteral(e) {
                      return this.parseLiteral(e, 'StringLiteral');
                    }
                    parseNumericLiteral(e) {
                      return this.parseLiteral(e, 'NumericLiteral');
                    }
                    parseBigIntLiteral(e) {
                      return this.parseLiteral(e, 'BigIntLiteral');
                    }
                    parseDecimalLiteral(e) {
                      return this.parseLiteral(e, 'DecimalLiteral');
                    }
                    parseRegExpLiteral(e) {
                      let t = this.parseLiteral(e.value, 'RegExpLiteral');
                      return (t.pattern = e.pattern), (t.flags = e.flags), t;
                    }
                    parseBooleanLiteral(e) {
                      let t = this.startNode();
                      return (t.value = e), this.next(), this.finishNode(t, 'BooleanLiteral');
                    }
                    parseNullLiteral() {
                      let e = this.startNode();
                      return this.next(), this.finishNode(e, 'NullLiteral');
                    }
                    parseParenAndDistinguishExpression(e) {
                      let t = this.state.startLoc,
                        r;
                      this.next(), this.expressionScope.enter(Ul());
                      let i = this.state.maybeInArrowParameters,
                        a = this.state.inFSharpPipelineDirectBody;
                      (this.state.maybeInArrowParameters = !0), (this.state.inFSharpPipelineDirectBody = !1);
                      let l = this.state.startLoc,
                        f = [],
                        y = new ej(),
                        g = !0,
                        T,
                        E;
                      for (; !this.match(11); ) {
                        if (g) g = !1;
                        else if (
                          (this.expect(12, null === y.optionalParametersLoc ? null : y.optionalParametersLoc),
                          this.match(11))
                        ) {
                          E = this.state.startLoc;
                          break;
                        }
                        if (this.match(21)) {
                          let e = this.state.startLoc;
                          if (
                            ((T = this.state.startLoc),
                            f.push(this.parseParenItem(this.parseRestBinding(), e)),
                            !this.checkCommaAfterRest(41))
                          )
                            break;
                        } else f.push(this.parseMaybeAssignAllowIn(y, this.parseParenItem));
                      }
                      let C = this.state.lastTokEndLoc;
                      this.expect(11),
                        (this.state.maybeInArrowParameters = i),
                        (this.state.inFSharpPipelineDirectBody = a);
                      let I = this.startNodeAt(t);
                      return e && this.shouldParseArrow(f) && (I = this.parseArrow(I))
                        ? (this.checkDestructuringPrivate(y),
                          this.expressionScope.validateAsPattern(),
                          this.expressionScope.exit(),
                          this.parseArrowExpression(I, f, !1),
                          I)
                        : (this.expressionScope.exit(),
                          f.length || this.unexpected(this.state.lastTokStartLoc),
                          E && this.unexpected(E),
                          T && this.unexpected(T),
                          this.checkExpressionErrors(y, !0),
                          this.toReferencedListDeep(f, !0),
                          f.length > 1
                            ? (((r = this.startNodeAt(l)).expressions = f),
                              this.finishNode(r, 'SequenceExpression'),
                              this.resetEndLocation(r, C))
                            : (r = f[0]),
                          this.wrapParenthesis(t, r));
                    }
                    wrapParenthesis(e, t) {
                      if (!this.options.createParenthesizedExpressions)
                        return (
                          this.addExtra(t, 'parenthesized', !0),
                          this.addExtra(t, 'parenStart', e.index),
                          this.takeSurroundingComments(t, e.index, this.state.lastTokEndLoc.index),
                          t
                        );
                      let r = this.startNodeAt(e);
                      return (r.expression = t), this.finishNode(r, 'ParenthesizedExpression');
                    }
                    shouldParseArrow(e) {
                      return !this.canInsertSemicolon();
                    }
                    parseArrow(e) {
                      if (this.eat(19)) return e;
                    }
                    parseParenItem(e, t) {
                      return e;
                    }
                    parseNewOrNewTarget() {
                      let e = this.startNode();
                      if ((this.next(), this.match(16))) {
                        let t = this.createIdentifier(this.startNodeAtNode(e), 'new');
                        this.next();
                        let r = this.parseMetaProperty(e, t, 'target');
                        return (
                          this.scope.inNonArrowFunction ||
                            this.scope.inClass ||
                            this.options.allowNewTargetOutsideFunction ||
                            this.raise(Q.UnexpectedNewTarget, { at: r }),
                          r
                        );
                      }
                      return this.parseNew(e);
                    }
                    parseNew(e) {
                      if ((this.parseNewCallee(e), this.eat(10))) {
                        let t = this.parseExprList(11);
                        this.toReferencedList(t), (e.arguments = t);
                      } else e.arguments = [];
                      return this.finishNode(e, 'NewExpression');
                    }
                    parseNewCallee(e) {
                      (e.callee = this.parseNoCallExpr()),
                        'Import' === e.callee.type && this.raise(Q.ImportCallNotNewExpression, { at: e.callee });
                    }
                    parseTemplateElement(e) {
                      let { start: t, startLoc: r, end: i, value: a } = this.state,
                        l = this.startNodeAt(Y(r, 1));
                      null === a &&
                        (e ||
                          this.raise(Q.InvalidEscapeSequenceTemplate, {
                            at: Y(this.state.firstInvalidTemplateEscapePos, 1)
                          }));
                      let f = this.match(24),
                        y = f ? -1 : -2,
                        g = i + y;
                      (l.value = {
                        raw: this.input.slice(t + 1, g).replace(
                          /\r\n?/g,
                          `
`
                        ),
                        cooked: null === a ? null : a.slice(1, y)
                      }),
                        (l.tail = f),
                        this.next();
                      let T = this.finishNode(l, 'TemplateElement');
                      return this.resetEndLocation(T, Y(this.state.lastTokEndLoc, y)), T;
                    }
                    parseTemplate(e) {
                      let t = this.startNode();
                      t.expressions = [];
                      let r = this.parseTemplateElement(e);
                      for (t.quasis = [r]; !r.tail; )
                        t.expressions.push(this.parseTemplateSubstitution()),
                          this.readTemplateContinuation(),
                          t.quasis.push((r = this.parseTemplateElement(e)));
                      return this.finishNode(t, 'TemplateLiteral');
                    }
                    parseTemplateSubstitution() {
                      return this.parseExpression();
                    }
                    parseObjectLike(e, t, r, i) {
                      r && this.expectPlugin('recordAndTuple');
                      let a = this.state.inFSharpPipelineDirectBody;
                      this.state.inFSharpPipelineDirectBody = !1;
                      let l = Object.create(null),
                        f = !0,
                        y = this.startNode();
                      for (y.properties = [], this.next(); !this.match(e); ) {
                        let a;
                        if (f) f = !1;
                        else if ((this.expect(12), this.match(e))) {
                          this.addTrailingCommaExtraToNode(y);
                          break;
                        }
                        t
                          ? (a = this.parseBindingProperty())
                          : ((a = this.parsePropertyDefinition(i)), this.checkProto(a, r, l, i)),
                          r &&
                            !this.isObjectProperty(a) &&
                            'SpreadElement' !== a.type &&
                            this.raise(Q.InvalidRecordProperty, { at: a }),
                          a.shorthand && this.addExtra(a, 'shorthand', !0),
                          y.properties.push(a);
                      }
                      this.next(), (this.state.inFSharpPipelineDirectBody = a);
                      let g = 'ObjectExpression';
                      return t ? (g = 'ObjectPattern') : r && (g = 'RecordExpression'), this.finishNode(y, g);
                    }
                    addTrailingCommaExtraToNode(e) {
                      this.addExtra(e, 'trailingComma', this.state.lastTokStart),
                        this.addExtra(e, 'trailingCommaLoc', this.state.lastTokStartLoc, !1);
                    }
                    maybeAsyncOrAccessorProp(e) {
                      return (
                        !e.computed &&
                        'Identifier' === e.key.type &&
                        (this.isLiteralPropertyName() || this.match(0) || this.match(55))
                      );
                    }
                    parsePropertyDefinition(e) {
                      let t = [];
                      if (this.match(26))
                        for (
                          this.hasPlugin('decorators') &&
                          this.raise(Q.UnsupportedPropertyDecorator, { at: this.state.startLoc });
                          this.match(26);

                        )
                          t.push(this.parseDecorator());
                      let r = this.startNode(),
                        i = !1,
                        a = !1,
                        l;
                      if (this.match(21)) return t.length && this.unexpected(), this.parseSpread();
                      t.length && ((r.decorators = t), (t = [])), (r.method = !1), e && (l = this.state.startLoc);
                      let f = this.eat(55);
                      this.parsePropertyNamePrefixOperator(r);
                      let y = this.state.containsEsc,
                        g = this.parsePropertyName(r, e);
                      if (!f && !y && this.maybeAsyncOrAccessorProp(r)) {
                        let e = g.name;
                        'async' !== e ||
                          this.hasPrecedingLineBreak() ||
                          ((i = !0),
                          this.resetPreviousNodeTrailingComments(g),
                          (f = this.eat(55)),
                          this.parsePropertyName(r)),
                          ('get' === e || 'set' === e) &&
                            ((a = !0),
                            this.resetPreviousNodeTrailingComments(g),
                            (r.kind = e),
                            this.match(55) &&
                              ((f = !0),
                              this.raise(Q.AccessorIsGenerator, { at: this.state.curPosition(), kind: e }),
                              this.next()),
                            this.parsePropertyName(r));
                      }
                      return this.parseObjPropValue(r, l, f, i, !1, a, e);
                    }
                    getGetterSetterExpectedParamCount(e) {
                      return 'get' === e.kind ? 0 : 1;
                    }
                    getObjectOrClassMethodParams(e) {
                      return e.params;
                    }
                    checkGetterSetterParams(e) {
                      var t;
                      let r = this.getGetterSetterExpectedParamCount(e),
                        i = this.getObjectOrClassMethodParams(e);
                      i.length !== r && this.raise('get' === e.kind ? Q.BadGetterArity : Q.BadSetterArity, { at: e }),
                        'set' === e.kind &&
                          (null == (t = i[i.length - 1]) ? void 0 : t.type) === 'RestElement' &&
                          this.raise(Q.BadSetterRestParameter, { at: e });
                    }
                    parseObjectMethod(e, t, r, i, a) {
                      if (a) {
                        let r = this.parseMethod(e, t, !1, !1, !1, 'ObjectMethod');
                        return this.checkGetterSetterParams(r), r;
                      }
                      if (r || t || this.match(10))
                        return (
                          i && this.unexpected(),
                          (e.kind = 'method'),
                          (e.method = !0),
                          this.parseMethod(e, t, r, !1, !1, 'ObjectMethod')
                        );
                    }
                    parseObjectProperty(e, t, r, i) {
                      if (((e.shorthand = !1), this.eat(14)))
                        return (
                          (e.value = r ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowIn(i)),
                          this.finishNode(e, 'ObjectProperty')
                        );
                      if (!e.computed && 'Identifier' === e.key.type) {
                        if ((this.checkReservedWord(e.key.name, e.key.loc.start, !0, !1), r))
                          e.value = this.parseMaybeDefault(t, me(e.key));
                        else if (this.match(29)) {
                          let r = this.state.startLoc;
                          null != i
                            ? null === i.shorthandAssignLoc && (i.shorthandAssignLoc = r)
                            : this.raise(Q.InvalidCoverInitializedName, { at: r }),
                            (e.value = this.parseMaybeDefault(t, me(e.key)));
                        } else e.value = me(e.key);
                        return (e.shorthand = !0), this.finishNode(e, 'ObjectProperty');
                      }
                    }
                    parseObjPropValue(e, t, r, i, a, l, f) {
                      let y = this.parseObjectMethod(e, r, i, a, l) || this.parseObjectProperty(e, t, a, f);
                      return y || this.unexpected(), y;
                    }
                    parsePropertyName(e, t) {
                      if (this.eat(0)) (e.computed = !0), (e.key = this.parseMaybeAssignAllowIn()), this.expect(3);
                      else {
                        let { type: r, value: i } = this.state,
                          a;
                        if (te(r)) a = this.parseIdentifier(!0);
                        else
                          switch (r) {
                            case 132:
                              a = this.parseNumericLiteral(i);
                              break;
                            case 131:
                              a = this.parseStringLiteral(i);
                              break;
                            case 133:
                              a = this.parseBigIntLiteral(i);
                              break;
                            case 134:
                              a = this.parseDecimalLiteral(i);
                              break;
                            case 136: {
                              let e = this.state.startLoc;
                              null != t
                                ? null === t.privateKeyLoc && (t.privateKeyLoc = e)
                                : this.raise(Q.UnexpectedPrivateField, { at: e }),
                                (a = this.parsePrivateName());
                              break;
                            }
                            default:
                              this.unexpected();
                          }
                        (e.key = a), 136 !== r && (e.computed = !1);
                      }
                      return e.key;
                    }
                    initFunction(e, t) {
                      (e.id = null), (e.generator = !1), (e.async = t);
                    }
                    parseMethod(e, t, r, i, a, l) {
                      let f = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                      this.initFunction(e, r),
                        (e.generator = t),
                        this.scope.enter(18 | (f ? 64 : 0) | (a ? 32 : 0)),
                        this.prodParam.enter(Tt(r, e.generator)),
                        this.parseFunctionParams(e, i);
                      let y = this.parseFunctionBodyAndFinish(e, l, !0);
                      return this.prodParam.exit(), this.scope.exit(), y;
                    }
                    parseArrayLike(e, t, r, i) {
                      r && this.expectPlugin('recordAndTuple');
                      let a = this.state.inFSharpPipelineDirectBody;
                      this.state.inFSharpPipelineDirectBody = !1;
                      let l = this.startNode();
                      return (
                        this.next(),
                        (l.elements = this.parseExprList(e, !r, i, l)),
                        (this.state.inFSharpPipelineDirectBody = a),
                        this.finishNode(l, r ? 'TupleExpression' : 'ArrayExpression')
                      );
                    }
                    parseArrowExpression(e, t, r, i) {
                      this.scope.enter(6);
                      let a = Tt(r, !1);
                      !this.match(5) && this.prodParam.hasIn && (a |= 8),
                        this.prodParam.enter(a),
                        this.initFunction(e, r);
                      let l = this.state.maybeInArrowParameters;
                      return (
                        t && ((this.state.maybeInArrowParameters = !0), this.setArrowFunctionParameters(e, t, i)),
                        (this.state.maybeInArrowParameters = !1),
                        this.parseFunctionBody(e, !0),
                        this.prodParam.exit(),
                        this.scope.exit(),
                        (this.state.maybeInArrowParameters = l),
                        this.finishNode(e, 'ArrowFunctionExpression')
                      );
                    }
                    setArrowFunctionParameters(e, t, r) {
                      this.toAssignableList(t, r, !1), (e.params = t);
                    }
                    parseFunctionBodyAndFinish(e, t) {
                      let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                      return this.parseFunctionBody(e, !1, r), this.finishNode(e, t);
                    }
                    parseFunctionBody(e, t) {
                      let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = t && !this.match(5);
                      if ((this.expressionScope.enter(new eM()), i))
                        (e.body = this.parseMaybeAssign()), this.checkParams(e, !1, t, !1);
                      else {
                        let i = this.state.strict,
                          a = this.state.labels;
                        (this.state.labels = []),
                          this.prodParam.enter(4 | this.prodParam.currentFlags()),
                          (e.body = this.parseBlock(!0, !1, (a) => {
                            let l = !this.isSimpleParamList(e.params);
                            a &&
                              l &&
                              this.raise(Q.IllegalLanguageModeDirective, {
                                at: ('method' === e.kind || 'constructor' === e.kind) && e.key ? e.key.loc.end : e
                              });
                            let f = !i && this.state.strict;
                            this.checkParams(e, !this.state.strict && !t && !r && !l, t, f),
                              this.state.strict && e.id && this.checkIdentifier(e.id, 65, f);
                          })),
                          this.prodParam.exit(),
                          (this.state.labels = a);
                      }
                      this.expressionScope.exit();
                    }
                    isSimpleParameter(e) {
                      return 'Identifier' === e.type;
                    }
                    isSimpleParamList(e) {
                      for (let t = 0, r = e.length; t < r; t++) if (!this.isSimpleParameter(e[t])) return !1;
                      return !0;
                    }
                    checkParams(e, t, r) {
                      let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        a = !t && new Set(),
                        l = { type: 'FormalParameters' };
                      for (let t of e.params)
                        this.checkLVal(t, { in: l, binding: 5, checkClashes: a, strictModeChanged: i });
                    }
                    parseExprList(e, t, r, i) {
                      let a = [],
                        l = !0;
                      for (; !this.eat(e); ) {
                        if (l) l = !1;
                        else if ((this.expect(12), this.match(e))) {
                          i && this.addTrailingCommaExtraToNode(i), this.next();
                          break;
                        }
                        a.push(this.parseExprListItem(t, r));
                      }
                      return a;
                    }
                    parseExprListItem(e, t, r) {
                      let i;
                      if (this.match(12))
                        e || this.raise(Q.UnexpectedToken, { at: this.state.curPosition(), unexpected: ',' }),
                          (i = null);
                      else if (this.match(21)) {
                        let e = this.state.startLoc;
                        i = this.parseParenItem(this.parseSpread(t), e);
                      } else if (this.match(17)) {
                        this.expectPlugin('partialApplication'),
                          r || this.raise(Q.UnexpectedArgumentPlaceholder, { at: this.state.startLoc });
                        let e = this.startNode();
                        this.next(), (i = this.finishNode(e, 'ArgumentPlaceholder'));
                      } else i = this.parseMaybeAssignAllowIn(t, this.parseParenItem);
                      return i;
                    }
                    parseIdentifier(e) {
                      let t = this.startNode(),
                        r = this.parseIdentifierName(e);
                      return this.createIdentifier(t, r);
                    }
                    createIdentifier(e, t) {
                      return (e.name = t), (e.loc.identifierName = t), this.finishNode(e, 'Identifier');
                    }
                    parseIdentifierName(e) {
                      let t,
                        { startLoc: r, type: i } = this.state;
                      te(i) ? (t = this.state.value) : this.unexpected();
                      let a = ue(i);
                      return e ? a && this.replaceToken(130) : this.checkReservedWord(t, r, a, !1), this.next(), t;
                    }
                    checkReservedWord(e, t, r, i) {
                      if (!(e.length > 10) && ul(e)) {
                        if (r && ol(e)) {
                          this.raise(Q.UnexpectedKeyword, { at: t, keyword: e });
                          return;
                        }
                        if ((this.state.strict ? (i ? xr : mr) : dr)(e, this.inModule)) {
                          this.raise(Q.UnexpectedReservedWord, { at: t, reservedWord: e });
                          return;
                        }
                        if ('yield' === e) {
                          if (this.prodParam.hasYield) {
                            this.raise(Q.YieldBindingIdentifier, { at: t });
                            return;
                          }
                        } else if ('await' === e) {
                          if (this.prodParam.hasAwait) {
                            this.raise(Q.AwaitBindingIdentifier, { at: t });
                            return;
                          }
                          if (this.scope.inStaticBlock) {
                            this.raise(Q.AwaitBindingIdentifierInStaticBlock, { at: t });
                            return;
                          }
                          this.expressionScope.recordAsyncArrowParametersError({ at: t });
                        } else if ('arguments' === e && this.scope.inClassAndNotInNonArrowFunction) {
                          this.raise(Q.ArgumentsInClass, { at: t });
                          return;
                        }
                      }
                    }
                    isAwaitAllowed() {
                      return !!(
                        this.prodParam.hasAwait ||
                        (this.options.allowAwaitOutsideFunction && !this.scope.inFunction)
                      );
                    }
                    parseAwait(e) {
                      let t = this.startNodeAt(e);
                      return (
                        this.expressionScope.recordParameterInitializerError(Q.AwaitExpressionFormalParameter, {
                          at: t
                        }),
                        this.eat(55) && this.raise(Q.ObsoleteAwaitStar, { at: t }),
                        this.scope.inFunction ||
                          this.options.allowAwaitOutsideFunction ||
                          (this.isAmbiguousAwait()
                            ? (this.ambiguousScriptDifferentAst = !0)
                            : (this.sawUnambiguousESM = !0)),
                        this.state.soloAwait || (t.argument = this.parseMaybeUnary(null, !0)),
                        this.finishNode(t, 'AwaitExpression')
                      );
                    }
                    isAmbiguousAwait() {
                      if (this.hasPrecedingLineBreak()) return !0;
                      let { type: e } = this.state;
                      return (
                        53 === e ||
                        10 === e ||
                        0 === e ||
                        nt(e) ||
                        (101 === e && !this.state.containsEsc) ||
                        135 === e ||
                        56 === e ||
                        (this.hasPlugin('v8intrinsic') && 54 === e)
                      );
                    }
                    parseYield() {
                      let e = this.startNode();
                      this.expressionScope.recordParameterInitializerError(Q.YieldInParameter, { at: e }), this.next();
                      let t = !1,
                        r = null;
                      if (!this.hasPrecedingLineBreak())
                        switch (((t = this.eat(55)), this.state.type)) {
                          case 13:
                          case 137:
                          case 8:
                          case 11:
                          case 3:
                          case 9:
                          case 14:
                          case 12:
                            if (!t) break;
                          default:
                            r = this.parseMaybeAssign();
                        }
                      return (e.delegate = t), (e.argument = r), this.finishNode(e, 'YieldExpression');
                    }
                    checkPipelineAtInfixOperator(e, t) {
                      this.hasPlugin(['pipelineOperator', { proposal: 'smart' }]) &&
                        'SequenceExpression' === e.type &&
                        this.raise(Q.PipelineHeadSequenceExpression, { at: t });
                    }
                    parseSmartPipelineBodyInStyle(e, t) {
                      if (this.isSimpleReference(e)) {
                        let r = this.startNodeAt(t);
                        return (r.callee = e), this.finishNode(r, 'PipelineBareFunction');
                      }
                      {
                        let r = this.startNodeAt(t);
                        return (
                          this.checkSmartPipeTopicBodyEarlyErrors(t),
                          (r.expression = e),
                          this.finishNode(r, 'PipelineTopicExpression')
                        );
                      }
                    }
                    isSimpleReference(e) {
                      switch (e.type) {
                        case 'MemberExpression':
                          return !e.computed && this.isSimpleReference(e.object);
                        case 'Identifier':
                          return !0;
                        default:
                          return !1;
                      }
                    }
                    checkSmartPipeTopicBodyEarlyErrors(e) {
                      if (this.match(19)) throw this.raise(Q.PipelineBodyNoArrow, { at: this.state.startLoc });
                      this.topicReferenceWasUsedInCurrentContext() || this.raise(Q.PipelineTopicUnused, { at: e });
                    }
                    withTopicBindingContext(e) {
                      let t = this.state.topicContext;
                      this.state.topicContext = { maxNumOfResolvableTopics: 1, maxTopicIndex: null };
                      try {
                        return e();
                      } finally {
                        this.state.topicContext = t;
                      }
                    }
                    withSmartMixTopicForbiddingContext(e) {
                      if (!this.hasPlugin(['pipelineOperator', { proposal: 'smart' }])) return e();
                      {
                        let t = this.state.topicContext;
                        this.state.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null };
                        try {
                          return e();
                        } finally {
                          this.state.topicContext = t;
                        }
                      }
                    }
                    withSoloAwaitPermittingContext(e) {
                      let t = this.state.soloAwait;
                      this.state.soloAwait = !0;
                      try {
                        return e();
                      } finally {
                        this.state.soloAwait = t;
                      }
                    }
                    allowInAnd(e) {
                      let t = this.prodParam.currentFlags();
                      return 8 & ~t && (this.prodParam.enter(8 | t), this.prodParam.exit()), e();
                    }
                    disallowInAnd(e) {
                      let t = this.prodParam.currentFlags();
                      return 8 & t && (this.prodParam.enter(-9 & t), this.prodParam.exit()), e();
                    }
                    registerTopicReference() {
                      this.state.topicContext.maxTopicIndex = 0;
                    }
                    topicReferenceIsAllowedInCurrentContext() {
                      return this.state.topicContext.maxNumOfResolvableTopics >= 1;
                    }
                    topicReferenceWasUsedInCurrentContext() {
                      return (
                        null != this.state.topicContext.maxTopicIndex && this.state.topicContext.maxTopicIndex >= 0
                      );
                    }
                    parseFSharpPipelineBody(e) {
                      let t = this.state.startLoc;
                      this.state.potentialArrowAt = this.state.start;
                      let r = this.state.inFSharpPipelineDirectBody;
                      this.state.inFSharpPipelineDirectBody = !0;
                      let i = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), t, e);
                      return (this.state.inFSharpPipelineDirectBody = r), i;
                    }
                    parseModuleExpression() {
                      this.expectPlugin('moduleBlocks');
                      let e = this.startNode();
                      this.next(), this.match(5) || this.unexpected(null, 5);
                      let t = this.startNodeAt(this.state.endLoc);
                      this.next();
                      let r = this.initializeScopes(!0);
                      this.enterInitialScopes();
                      try {
                        e.body = this.parseProgram(t, 8, 'module');
                      } finally {
                        r();
                      }
                      return this.finishNode(e, 'ModuleExpression');
                    }
                    parsePropertyNamePrefixOperator(e) {}
                  },
                  e4 = { kind: 'loop' },
                  e8 = { kind: 'switch' },
                  e5 = /[\uD800-\uDFFF]/u,
                  e6 = /in(?:stanceof)?/y;
                function Th(e, t) {
                  for (let r = 0; r < e.length; r++) {
                    let i = e[r],
                      { type: a } = i;
                    if ('number' == typeof a) {
                      if (136 === a) {
                        let { loc: t, start: a, value: l, end: f } = i,
                          y = a + 1,
                          T = Y(t.start, 1);
                        e.splice(
                          r,
                          1,
                          new eN({ type: g[27], value: '#', start: a, end: y, startLoc: t.start, endLoc: T }),
                          new eN({ type: g[130], value: l, start: y, end: f, startLoc: T, endLoc: t.end })
                        ),
                          r++;
                        continue;
                      }
                      if (nt(a)) {
                        let l,
                          f,
                          y,
                          T,
                          { loc: E, start: C, value: I, end: M } = i,
                          D = C + 1,
                          j = Y(E.start, 1),
                          R;
                        (R = new eN(
                          96 === t.charCodeAt(C)
                            ? { type: g[22], value: '`', start: C, end: D, startLoc: E.start, endLoc: j }
                            : { type: g[8], value: '}', start: C, end: D, startLoc: E.start, endLoc: j }
                        )),
                          24 === a
                            ? ((f = M - 1),
                              (y = Y(E.end, -1)),
                              (l = null === I ? null : I.slice(1, -1)),
                              (T = new eN({ type: g[22], value: '`', start: f, end: M, startLoc: y, endLoc: E.end })))
                            : ((f = M - 2),
                              (y = Y(E.end, -2)),
                              (l = null === I ? null : I.slice(1, -2)),
                              (T = new eN({ type: g[23], value: '${', start: f, end: M, startLoc: y, endLoc: E.end }))),
                          e.splice(
                            r,
                            1,
                            R,
                            new eN({ type: g[20], value: l, start: D, end: f, startLoc: j, endLoc: y }),
                            T
                          ),
                          (r += 2);
                        continue;
                      }
                      i.type = g[a];
                    }
                  }
                  return e;
                }
                var e7 = class extends e3 {
                    parseTopLevel(e, t) {
                      return (
                        (e.program = this.parseProgram(t)),
                        (e.comments = this.state.comments),
                        this.options.tokens && (e.tokens = Th(this.tokens, this.input)),
                        this.finishNode(e, 'File')
                      );
                    }
                    parseProgram(e) {
                      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 137,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.options.sourceType;
                      if (
                        ((e.sourceType = r),
                        (e.interpreter = this.parseInterpreterDirective()),
                        this.parseBlockBody(e, !0, !0, t),
                        this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
                      )
                        for (let [e, t] of Array.from(this.scope.undefinedExports))
                          this.raise(Q.ModuleExportUndefined, { at: t, localName: e });
                      return 137 === t
                        ? this.finishNode(e, 'Program')
                        : this.finishNodeAt(e, 'Program', Y(this.state.startLoc, -1));
                    }
                    stmtToDirective(e) {
                      (e.type = 'Directive'), (e.value = e.expression), delete e.expression;
                      let t = e.value,
                        r = t.value,
                        i = this.input.slice(t.start, t.end),
                        a = (t.value = i.slice(1, -1));
                      return (
                        this.addExtra(t, 'raw', i),
                        this.addExtra(t, 'rawValue', a),
                        this.addExtra(t, 'expressionValue', r),
                        (t.type = 'DirectiveLiteral'),
                        e
                      );
                    }
                    parseInterpreterDirective() {
                      if (!this.match(28)) return null;
                      let e = this.startNode();
                      return (e.value = this.state.value), this.next(), this.finishNode(e, 'InterpreterDirective');
                    }
                    isLet() {
                      return !!this.isContextual(99) && this.hasFollowingBindingAtom();
                    }
                    chStartsBindingIdentifier(e, t) {
                      if (!fe(e)) return 92 === e;
                      if (((e6.lastIndex = t), e6.test(this.input))) {
                        let e = this.codePointAtPos(e6.lastIndex);
                        if (!De(e) && 92 !== e) return !1;
                      }
                      return !0;
                    }
                    chStartsBindingPattern(e) {
                      return 91 === e || 123 === e;
                    }
                    hasFollowingBindingAtom() {
                      let e = this.nextTokenStart(),
                        t = this.codePointAtPos(e);
                      return this.chStartsBindingPattern(t) || this.chStartsBindingIdentifier(t, e);
                    }
                    hasFollowingBindingIdentifier() {
                      let e = this.nextTokenStart(),
                        t = this.codePointAtPos(e);
                      return this.chStartsBindingIdentifier(t, e);
                    }
                    startsUsingForOf() {
                      let e = this.lookahead();
                      return (
                        (101 !== e.type || !!e.containsEsc) && (this.expectPlugin('explicitResourceManagement'), !0)
                      );
                    }
                    parseModuleItem() {
                      return this.parseStatementLike(15);
                    }
                    parseStatementListItem() {
                      return this.parseStatementLike(6 | (!this.options.annexB || this.state.strict ? 0 : 8));
                    }
                    parseStatementOrSloppyAnnexBFunctionDeclaration() {
                      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = 0;
                      return (
                        this.options.annexB && !this.state.strict && ((t |= 4), e && (t |= 8)),
                        this.parseStatementLike(t)
                      );
                    }
                    parseStatement() {
                      return this.parseStatementLike(0);
                    }
                    parseStatementLike(e) {
                      let t = null;
                      return this.match(26) && (t = this.parseDecorators(!0)), this.parseStatementContent(e, t);
                    }
                    parseStatementContent(e, t) {
                      let r = this.state.type,
                        i = this.startNode(),
                        a = !!(2 & e),
                        l = !!(4 & e),
                        f = 1 & e;
                      switch (r) {
                        case 60:
                          return this.parseBreakContinueStatement(i, !0);
                        case 63:
                          return this.parseBreakContinueStatement(i, !1);
                        case 64:
                          return this.parseDebuggerStatement(i);
                        case 90:
                          return this.parseDoWhileStatement(i);
                        case 91:
                          return this.parseForStatement(i);
                        case 68:
                          if (46 === this.lookaheadCharCode()) break;
                          return (
                            l ||
                              this.raise(
                                this.state.strict
                                  ? Q.StrictFunction
                                  : this.options.annexB
                                  ? Q.SloppyFunctionAnnexB
                                  : Q.SloppyFunction,
                                { at: this.state.startLoc }
                              ),
                            this.parseFunctionStatement(i, !1, !a && l)
                          );
                        case 80:
                          return a || this.unexpected(), this.parseClass(this.maybeTakeDecorators(t, i), !0);
                        case 69:
                          return this.parseIfStatement(i);
                        case 70:
                          return this.parseReturnStatement(i);
                        case 71:
                          return this.parseSwitchStatement(i);
                        case 72:
                          return this.parseThrowStatement(i);
                        case 73:
                          return this.parseTryStatement(i);
                        case 105:
                          if (
                            this.hasFollowingLineBreak() ||
                            this.state.containsEsc ||
                            !this.hasFollowingBindingIdentifier()
                          )
                            break;
                          return (
                            this.expectPlugin('explicitResourceManagement'),
                            !this.scope.inModule && this.scope.inTopLevel
                              ? this.raise(Q.UnexpectedUsingDeclaration, { at: this.state.startLoc })
                              : a || this.raise(Q.UnexpectedLexicalDeclaration, { at: this.state.startLoc }),
                            this.parseVarStatement(i, 'using')
                          );
                        case 99: {
                          if (this.state.containsEsc) break;
                          let e = this.nextTokenStart(),
                            t = this.codePointAtPos(e);
                          if (
                            91 !== t &&
                            ((!a && this.hasFollowingLineBreak()) ||
                              (!this.chStartsBindingIdentifier(t, e) && 123 !== t))
                          )
                            break;
                        }
                        case 75:
                          a || this.raise(Q.UnexpectedLexicalDeclaration, { at: this.state.startLoc });
                        case 74: {
                          let e = this.state.value;
                          return this.parseVarStatement(i, e);
                        }
                        case 92:
                          return this.parseWhileStatement(i);
                        case 76:
                          return this.parseWithStatement(i);
                        case 5:
                          return this.parseBlock();
                        case 13:
                          return this.parseEmptyStatement(i);
                        case 83: {
                          let e = this.lookaheadCharCode();
                          if (40 === e || 46 === e) break;
                        }
                        case 82: {
                          let e;
                          return (
                            this.options.allowImportExportEverywhere ||
                              f ||
                              this.raise(Q.UnexpectedImportExport, { at: this.state.startLoc }),
                            this.next(),
                            83 === r
                              ? 'ImportDeclaration' !== (e = this.parseImport(i)).type ||
                                (e.importKind && 'value' !== e.importKind) ||
                                (this.sawUnambiguousESM = !0)
                              : (('ExportNamedDeclaration' !== (e = this.parseExport(i, t)).type ||
                                  (e.exportKind && 'value' !== e.exportKind)) &&
                                  ('ExportAllDeclaration' !== e.type || (e.exportKind && 'value' !== e.exportKind)) &&
                                  'ExportDefaultDeclaration' !== e.type) ||
                                (this.sawUnambiguousESM = !0),
                            this.assertModuleNodeAllowed(e),
                            e
                          );
                        }
                        default:
                          if (this.isAsyncFunction())
                            return (
                              a || this.raise(Q.AsyncFunctionInSingleStatementContext, { at: this.state.startLoc }),
                              this.next(),
                              this.parseFunctionStatement(i, !0, !a && l)
                            );
                      }
                      let y = this.state.value,
                        g = this.parseExpression();
                      return q(r) && 'Identifier' === g.type && this.eat(14)
                        ? this.parseLabeledStatement(i, y, g, e)
                        : this.parseExpressionStatement(i, g, t);
                    }
                    assertModuleNodeAllowed(e) {
                      this.options.allowImportExportEverywhere ||
                        this.inModule ||
                        this.raise(Q.ImportOutsideModule, { at: e });
                    }
                    decoratorsEnabledBeforeExport() {
                      return (
                        !!this.hasPlugin('decorators-legacy') ||
                        (this.hasPlugin('decorators') &&
                          !1 !== this.getPluginOption('decorators', 'decoratorsBeforeExport'))
                      );
                    }
                    maybeTakeDecorators(e, t, r) {
                      return (
                        e &&
                          (t.decorators && t.decorators.length > 0
                            ? ('boolean' != typeof this.getPluginOption('decorators', 'decoratorsBeforeExport') &&
                                this.raise(Q.DecoratorsBeforeAfterExport, { at: t.decorators[0] }),
                              t.decorators.unshift(...e))
                            : (t.decorators = e),
                          this.resetStartLocationFromNode(t, e[0]),
                          r && this.resetStartLocationFromNode(r, t)),
                        t
                      );
                    }
                    canHaveLeadingDecorator() {
                      return this.match(80);
                    }
                    parseDecorators(e) {
                      let t = [];
                      do t.push(this.parseDecorator());
                      while (this.match(26));
                      if (this.match(82))
                        e || this.unexpected(),
                          this.decoratorsEnabledBeforeExport() ||
                            this.raise(Q.DecoratorExportClass, { at: this.state.startLoc });
                      else if (!this.canHaveLeadingDecorator())
                        throw this.raise(Q.UnexpectedLeadingDecorator, { at: this.state.startLoc });
                      return t;
                    }
                    parseDecorator() {
                      this.expectOnePlugin(['decorators', 'decorators-legacy']);
                      let e = this.startNode();
                      if ((this.next(), this.hasPlugin('decorators'))) {
                        let t = this.state.startLoc,
                          r;
                        if (this.match(10)) {
                          let t = this.state.startLoc;
                          this.next(), (r = this.parseExpression()), this.expect(11), (r = this.wrapParenthesis(t, r));
                          let i = this.state.startLoc;
                          (e.expression = this.parseMaybeDecoratorArguments(r)),
                            !1 === this.getPluginOption('decorators', 'allowCallParenthesized') &&
                              e.expression !== r &&
                              this.raise(Q.DecoratorArgumentsOutsideParentheses, { at: i });
                        } else {
                          for (r = this.parseIdentifier(!1); this.eat(16); ) {
                            let e = this.startNodeAt(t);
                            (e.object = r),
                              this.match(136)
                                ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc),
                                  (e.property = this.parsePrivateName()))
                                : (e.property = this.parseIdentifier(!0)),
                              (e.computed = !1),
                              (r = this.finishNode(e, 'MemberExpression'));
                          }
                          e.expression = this.parseMaybeDecoratorArguments(r);
                        }
                      } else e.expression = this.parseExprSubscripts();
                      return this.finishNode(e, 'Decorator');
                    }
                    parseMaybeDecoratorArguments(e) {
                      if (this.eat(10)) {
                        let t = this.startNodeAtNode(e);
                        return (
                          (t.callee = e),
                          (t.arguments = this.parseCallExpressionArguments(11, !1)),
                          this.toReferencedList(t.arguments),
                          this.finishNode(t, 'CallExpression')
                        );
                      }
                      return e;
                    }
                    parseBreakContinueStatement(e, t) {
                      return (
                        this.next(),
                        this.isLineTerminator()
                          ? (e.label = null)
                          : ((e.label = this.parseIdentifier()), this.semicolon()),
                        this.verifyBreakContinue(e, t),
                        this.finishNode(e, t ? 'BreakStatement' : 'ContinueStatement')
                      );
                    }
                    verifyBreakContinue(e, t) {
                      let r;
                      for (r = 0; r < this.state.labels.length; ++r) {
                        let i = this.state.labels[r];
                        if (
                          (null == e.label || i.name === e.label.name) &&
                          ((null != i.kind && (t || 'loop' === i.kind)) || (e.label && t))
                        )
                          break;
                      }
                      r === this.state.labels.length &&
                        this.raise(Q.IllegalBreakContinue, { at: e, type: t ? 'BreakStatement' : 'ContinueStatement' });
                    }
                    parseDebuggerStatement(e) {
                      return this.next(), this.semicolon(), this.finishNode(e, 'DebuggerStatement');
                    }
                    parseHeaderExpression() {
                      this.expect(10);
                      let e = this.parseExpression();
                      return this.expect(11), e;
                    }
                    parseDoWhileStatement(e) {
                      return (
                        this.next(),
                        this.state.labels.push(e4),
                        (e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement())),
                        this.state.labels.pop(),
                        this.expect(92),
                        (e.test = this.parseHeaderExpression()),
                        this.eat(13),
                        this.finishNode(e, 'DoWhileStatement')
                      );
                    }
                    parseForStatement(e) {
                      this.next(), this.state.labels.push(e4);
                      let t = null;
                      if (
                        (this.isAwaitAllowed() && this.eatContextual(96) && (t = this.state.lastTokStartLoc),
                        this.scope.enter(0),
                        this.expect(10),
                        this.match(13))
                      )
                        return null !== t && this.unexpected(t), this.parseFor(e, null);
                      let r = this.isContextual(99),
                        i = this.isContextual(105) && !this.hasFollowingLineBreak(),
                        a =
                          (r && this.hasFollowingBindingAtom()) ||
                          (i && this.hasFollowingBindingIdentifier() && this.startsUsingForOf());
                      if (this.match(74) || this.match(75) || a) {
                        let r = this.startNode(),
                          a = this.state.value;
                        this.next(), this.parseVar(r, !0, a);
                        let l = this.finishNode(r, 'VariableDeclaration'),
                          f = this.match(58);
                        return (
                          f && i && this.raise(Q.ForInUsing, { at: l }),
                          (f || this.isContextual(101)) && 1 === l.declarations.length
                            ? this.parseForIn(e, l, t)
                            : (null !== t && this.unexpected(t), this.parseFor(e, l))
                        );
                      }
                      let l = this.isContextual(95),
                        f = new ej(),
                        y = this.parseExpression(!0, f),
                        g = this.isContextual(101);
                      return (g &&
                        (r && this.raise(Q.ForOfLet, { at: y }),
                        null === t && l && 'Identifier' === y.type && this.raise(Q.ForOfAsync, { at: y })),
                      g || this.match(58))
                        ? (this.checkDestructuringPrivate(f),
                          this.toAssignable(y, !0),
                          this.checkLVal(y, { in: { type: g ? 'ForOfStatement' : 'ForInStatement' } }),
                          this.parseForIn(e, y, t))
                        : (this.checkExpressionErrors(f, !0), null !== t && this.unexpected(t), this.parseFor(e, y));
                    }
                    parseFunctionStatement(e, t, r) {
                      return this.next(), this.parseFunction(e, 1 | (r ? 2 : 0) | (t ? 8 : 0));
                    }
                    parseIfStatement(e) {
                      return (
                        this.next(),
                        (e.test = this.parseHeaderExpression()),
                        (e.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration()),
                        (e.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null),
                        this.finishNode(e, 'IfStatement')
                      );
                    }
                    parseReturnStatement(e) {
                      return (
                        this.prodParam.hasReturn ||
                          this.options.allowReturnOutsideFunction ||
                          this.raise(Q.IllegalReturn, { at: this.state.startLoc }),
                        this.next(),
                        this.isLineTerminator()
                          ? (e.argument = null)
                          : ((e.argument = this.parseExpression()), this.semicolon()),
                        this.finishNode(e, 'ReturnStatement')
                      );
                    }
                    parseSwitchStatement(e) {
                      let t, r;
                      this.next(), (e.discriminant = this.parseHeaderExpression());
                      let i = (e.cases = []);
                      for (this.expect(5), this.state.labels.push(e8), this.scope.enter(0); !this.match(8); )
                        if (this.match(61) || this.match(65)) {
                          let e = this.match(61);
                          t && this.finishNode(t, 'SwitchCase'),
                            i.push((t = this.startNode())),
                            (t.consequent = []),
                            this.next(),
                            e
                              ? (t.test = this.parseExpression())
                              : (r && this.raise(Q.MultipleDefaultsInSwitch, { at: this.state.lastTokStartLoc }),
                                (r = !0),
                                (t.test = null)),
                            this.expect(14);
                        } else t ? t.consequent.push(this.parseStatementListItem()) : this.unexpected();
                      return (
                        this.scope.exit(),
                        t && this.finishNode(t, 'SwitchCase'),
                        this.next(),
                        this.state.labels.pop(),
                        this.finishNode(e, 'SwitchStatement')
                      );
                    }
                    parseThrowStatement(e) {
                      return (
                        this.next(),
                        this.hasPrecedingLineBreak() &&
                          this.raise(Q.NewlineAfterThrow, { at: this.state.lastTokEndLoc }),
                        (e.argument = this.parseExpression()),
                        this.semicolon(),
                        this.finishNode(e, 'ThrowStatement')
                      );
                    }
                    parseCatchClauseParam() {
                      let e = this.parseBindingAtom();
                      return (
                        this.scope.enter(this.options.annexB && 'Identifier' === e.type ? 8 : 0),
                        this.checkLVal(e, { in: { type: 'CatchClause' }, binding: 9 }),
                        e
                      );
                    }
                    parseTryStatement(e) {
                      if ((this.next(), (e.block = this.parseBlock()), (e.handler = null), this.match(62))) {
                        let t = this.startNode();
                        this.next(),
                          this.match(10)
                            ? (this.expect(10), (t.param = this.parseCatchClauseParam()), this.expect(11))
                            : ((t.param = null), this.scope.enter(0)),
                          (t.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(!1, !1))),
                          this.scope.exit(),
                          (e.handler = this.finishNode(t, 'CatchClause'));
                      }
                      return (
                        (e.finalizer = this.eat(67) ? this.parseBlock() : null),
                        e.handler || e.finalizer || this.raise(Q.NoCatchOrFinally, { at: e }),
                        this.finishNode(e, 'TryStatement')
                      );
                    }
                    parseVarStatement(e, t) {
                      let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                      return (
                        this.next(),
                        this.parseVar(e, !1, t, r),
                        this.semicolon(),
                        this.finishNode(e, 'VariableDeclaration')
                      );
                    }
                    parseWhileStatement(e) {
                      return (
                        this.next(),
                        (e.test = this.parseHeaderExpression()),
                        this.state.labels.push(e4),
                        (e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement())),
                        this.state.labels.pop(),
                        this.finishNode(e, 'WhileStatement')
                      );
                    }
                    parseWithStatement(e) {
                      return (
                        this.state.strict && this.raise(Q.StrictWith, { at: this.state.startLoc }),
                        this.next(),
                        (e.object = this.parseHeaderExpression()),
                        (e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement())),
                        this.finishNode(e, 'WithStatement')
                      );
                    }
                    parseEmptyStatement(e) {
                      return this.next(), this.finishNode(e, 'EmptyStatement');
                    }
                    parseLabeledStatement(e, t, r, i) {
                      for (let e of this.state.labels)
                        e.name === t && this.raise(Q.LabelRedeclaration, { at: r, labelName: t });
                      let a = Mo(this.state.type) ? 'loop' : this.match(71) ? 'switch' : null;
                      for (let t = this.state.labels.length - 1; t >= 0; t--) {
                        let r = this.state.labels[t];
                        if (r.statementStart === e.start) (r.statementStart = this.state.start), (r.kind = a);
                        else break;
                      }
                      return (
                        this.state.labels.push({ name: t, kind: a, statementStart: this.state.start }),
                        (e.body =
                          8 & i ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(!0) : this.parseStatement()),
                        this.state.labels.pop(),
                        (e.label = r),
                        this.finishNode(e, 'LabeledStatement')
                      );
                    }
                    parseExpressionStatement(e, t, r) {
                      return (e.expression = t), this.semicolon(), this.finishNode(e, 'ExpressionStatement');
                    }
                    parseBlock() {
                      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        i = this.startNode();
                      return (
                        e && this.state.strictErrors.clear(),
                        this.expect(5),
                        t && this.scope.enter(0),
                        this.parseBlockBody(i, e, !1, 8, r),
                        t && this.scope.exit(),
                        this.finishNode(i, 'BlockStatement')
                      );
                    }
                    isValidDirective(e) {
                      return (
                        'ExpressionStatement' === e.type &&
                        'StringLiteral' === e.expression.type &&
                        !e.expression.extra.parenthesized
                      );
                    }
                    parseBlockBody(e, t, r, i, a) {
                      let l = (e.body = []),
                        f = (e.directives = []);
                      this.parseBlockOrModuleBlockBody(l, t ? f : void 0, r, i, a);
                    }
                    parseBlockOrModuleBlockBody(e, t, r, i, a) {
                      let l = this.state.strict,
                        f = !1,
                        y = !1;
                      for (; !this.match(i); ) {
                        let i = r ? this.parseModuleItem() : this.parseStatementListItem();
                        if (t && !y) {
                          if (this.isValidDirective(i)) {
                            let e = this.stmtToDirective(i);
                            t.push(e), f || 'use strict' !== e.value.value || ((f = !0), this.setStrict(!0));
                            continue;
                          }
                          (y = !0), this.state.strictErrors.clear();
                        }
                        e.push(i);
                      }
                      a && a.call(this, f), l || this.setStrict(!1), this.next();
                    }
                    parseFor(e, t) {
                      return (
                        (e.init = t),
                        this.semicolon(!1),
                        (e.test = this.match(13) ? null : this.parseExpression()),
                        this.semicolon(!1),
                        (e.update = this.match(11) ? null : this.parseExpression()),
                        this.expect(11),
                        (e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement())),
                        this.scope.exit(),
                        this.state.labels.pop(),
                        this.finishNode(e, 'ForStatement')
                      );
                    }
                    parseForIn(e, t, r) {
                      let i = this.match(58);
                      return (
                        this.next(),
                        i ? null !== r && this.unexpected(r) : (e.await = null !== r),
                        'VariableDeclaration' !== t.type ||
                          null == t.declarations[0].init ||
                          (i &&
                            this.options.annexB &&
                            !this.state.strict &&
                            'var' === t.kind &&
                            'Identifier' === t.declarations[0].id.type) ||
                          this.raise(Q.ForInOfLoopInitializer, {
                            at: t,
                            type: i ? 'ForInStatement' : 'ForOfStatement'
                          }),
                        'AssignmentPattern' === t.type &&
                          this.raise(Q.InvalidLhs, { at: t, ancestor: { type: 'ForStatement' } }),
                        (e.left = t),
                        (e.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn()),
                        this.expect(11),
                        (e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement())),
                        this.scope.exit(),
                        this.state.labels.pop(),
                        this.finishNode(e, i ? 'ForInStatement' : 'ForOfStatement')
                      );
                    }
                    parseVar(e, t, r) {
                      let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = (e.declarations = []);
                      for (e.kind = r; ; ) {
                        let e = this.startNode();
                        if (
                          (this.parseVarId(e, r),
                          (e.init = this.eat(29)
                            ? t
                              ? this.parseMaybeAssignDisallowIn()
                              : this.parseMaybeAssignAllowIn()
                            : null),
                          null !== e.init ||
                            i ||
                            ('Identifier' === e.id.type || (t && (this.match(58) || this.isContextual(101)))
                              ? 'const' !== r ||
                                this.match(58) ||
                                this.isContextual(101) ||
                                this.raise(Q.DeclarationMissingInitializer, {
                                  at: this.state.lastTokEndLoc,
                                  kind: 'const'
                                })
                              : this.raise(Q.DeclarationMissingInitializer, {
                                  at: this.state.lastTokEndLoc,
                                  kind: 'destructuring'
                                })),
                          a.push(this.finishNode(e, 'VariableDeclarator')),
                          !this.eat(12))
                        )
                          break;
                      }
                      return e;
                    }
                    parseVarId(e, t) {
                      'using' === t &&
                        !this.inModule &&
                        this.match(96) &&
                        this.raise(Q.AwaitInUsingBinding, { at: this.state.startLoc });
                      let r = this.parseBindingAtom();
                      this.checkLVal(r, { in: { type: 'VariableDeclarator' }, binding: 'var' === t ? 5 : 8201 }),
                        (e.id = r);
                    }
                    parseAsyncFunctionExpression(e) {
                      return this.parseFunction(e, 8);
                    }
                    parseFunction(e) {
                      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = 2 & t,
                        i = !!(1 & t),
                        a = i && !(4 & t),
                        l = !!(8 & t);
                      this.initFunction(e, l),
                        this.match(55) &&
                          (r && this.raise(Q.GeneratorInSingleStatementContext, { at: this.state.startLoc }),
                          this.next(),
                          (e.generator = !0)),
                        i && (e.id = this.parseFunctionId(a));
                      let f = this.state.maybeInArrowParameters;
                      return (
                        (this.state.maybeInArrowParameters = !1),
                        this.scope.enter(2),
                        this.prodParam.enter(Tt(l, e.generator)),
                        i || (e.id = this.parseFunctionId()),
                        this.parseFunctionParams(e, !1),
                        this.withSmartMixTopicForbiddingContext(() => {
                          this.parseFunctionBodyAndFinish(e, i ? 'FunctionDeclaration' : 'FunctionExpression');
                        }),
                        this.prodParam.exit(),
                        this.scope.exit(),
                        i && !r && this.registerFunctionStatementId(e),
                        (this.state.maybeInArrowParameters = f),
                        e
                      );
                    }
                    parseFunctionId(e) {
                      return e || q(this.state.type) ? this.parseIdentifier() : null;
                    }
                    parseFunctionParams(e, t) {
                      this.expect(10),
                        this.expressionScope.enter(ql()),
                        (e.params = this.parseBindingList(11, 41, 2 | (t ? 4 : 0))),
                        this.expressionScope.exit();
                    }
                    registerFunctionStatementId(e) {
                      e.id &&
                        this.scope.declareName(
                          e.id.name,
                          !this.options.annexB || this.state.strict || e.generator || e.async
                            ? this.scope.treatFunctionsAsVar
                              ? 5
                              : 8201
                            : 17,
                          e.id.loc.start
                        );
                    }
                    parseClass(e, t, r) {
                      this.next();
                      let i = this.state.strict;
                      return (
                        (this.state.strict = !0),
                        this.parseClassId(e, t, r),
                        this.parseClassSuper(e),
                        (e.body = this.parseClassBody(!!e.superClass, i)),
                        this.finishNode(e, t ? 'ClassDeclaration' : 'ClassExpression')
                      );
                    }
                    isClassProperty() {
                      return this.match(29) || this.match(13) || this.match(8);
                    }
                    isClassMethod() {
                      return this.match(10);
                    }
                    isNonstaticConstructor(e) {
                      return (
                        !e.computed && !e.static && ('constructor' === e.key.name || 'constructor' === e.key.value)
                      );
                    }
                    parseClassBody(e, t) {
                      this.classScope.enter();
                      let r = { hadConstructor: !1, hadSuperClass: e },
                        i = [],
                        a = this.startNode();
                      if (
                        ((a.body = []),
                        this.expect(5),
                        this.withSmartMixTopicForbiddingContext(() => {
                          for (; !this.match(8); ) {
                            if (this.eat(13)) {
                              if (i.length > 0)
                                throw this.raise(Q.DecoratorSemicolon, { at: this.state.lastTokEndLoc });
                              continue;
                            }
                            if (this.match(26)) {
                              i.push(this.parseDecorator());
                              continue;
                            }
                            let e = this.startNode();
                            i.length && ((e.decorators = i), this.resetStartLocationFromNode(e, i[0]), (i = [])),
                              this.parseClassMember(a, e, r),
                              'constructor' === e.kind &&
                                e.decorators &&
                                e.decorators.length > 0 &&
                                this.raise(Q.DecoratorConstructor, { at: e });
                          }
                        }),
                        (this.state.strict = t),
                        this.next(),
                        i.length)
                      )
                        throw this.raise(Q.TrailingDecorator, { at: this.state.startLoc });
                      return this.classScope.exit(), this.finishNode(a, 'ClassBody');
                    }
                    parseClassMemberFromModifier(e, t) {
                      let r = this.parseIdentifier(!0);
                      return this.isClassMethod()
                        ? ((t.kind = 'method'),
                          (t.computed = !1),
                          (t.key = r),
                          (t.static = !1),
                          this.pushClassMethod(e, t, !1, !1, !1, !1),
                          !0)
                        : this.isClassProperty()
                        ? ((t.computed = !1), (t.key = r), (t.static = !1), e.body.push(this.parseClassProperty(t)), !0)
                        : (this.resetPreviousNodeTrailingComments(r), !1);
                    }
                    parseClassMember(e, t, r) {
                      let i = this.isContextual(104);
                      if (i) {
                        if (this.parseClassMemberFromModifier(e, t)) return;
                        if (this.eat(5)) {
                          this.parseClassStaticBlock(e, t);
                          return;
                        }
                      }
                      this.parseClassMemberWithIsStatic(e, t, r, i);
                    }
                    parseClassMemberWithIsStatic(e, t, r, i) {
                      if (((t.static = i), this.parsePropertyNamePrefixOperator(t), this.eat(55))) {
                        t.kind = 'method';
                        let r = this.match(136);
                        if ((this.parseClassElementName(t), r)) {
                          this.pushClassPrivateMethod(e, t, !0, !1);
                          return;
                        }
                        this.isNonstaticConstructor(t) && this.raise(Q.ConstructorIsGenerator, { at: t.key }),
                          this.pushClassMethod(e, t, !0, !1, !1, !1);
                        return;
                      }
                      let a = q(this.state.type) && !this.state.containsEsc,
                        l = this.match(136),
                        f = this.parseClassElementName(t),
                        y = this.state.startLoc;
                      if ((this.parsePostMemberNameModifiers(t), this.isClassMethod())) {
                        if (((t.kind = 'method'), l)) {
                          this.pushClassPrivateMethod(e, t, !1, !1);
                          return;
                        }
                        let i = this.isNonstaticConstructor(t),
                          a = !1;
                        i &&
                          ((t.kind = 'constructor'),
                          r.hadConstructor &&
                            !this.hasPlugin('typescript') &&
                            this.raise(Q.DuplicateConstructor, { at: f }),
                          i &&
                            this.hasPlugin('typescript') &&
                            t.override &&
                            this.raise(Q.OverrideOnConstructor, { at: f }),
                          (r.hadConstructor = !0),
                          (a = r.hadSuperClass)),
                          this.pushClassMethod(e, t, !1, !1, i, a);
                      } else if (this.isClassProperty())
                        l ? this.pushClassPrivateProperty(e, t) : this.pushClassProperty(e, t);
                      else if (a && 'async' === f.name && !this.isLineTerminator()) {
                        this.resetPreviousNodeTrailingComments(f);
                        let r = this.eat(55);
                        t.optional && this.unexpected(y), (t.kind = 'method');
                        let i = this.match(136);
                        this.parseClassElementName(t),
                          this.parsePostMemberNameModifiers(t),
                          i
                            ? this.pushClassPrivateMethod(e, t, r, !0)
                            : (this.isNonstaticConstructor(t) && this.raise(Q.ConstructorIsAsync, { at: t.key }),
                              this.pushClassMethod(e, t, r, !0, !1, !1));
                      } else if (
                        a &&
                        ('get' === f.name || 'set' === f.name) &&
                        !(this.match(55) && this.isLineTerminator())
                      ) {
                        this.resetPreviousNodeTrailingComments(f), (t.kind = f.name);
                        let r = this.match(136);
                        this.parseClassElementName(t),
                          r
                            ? this.pushClassPrivateMethod(e, t, !1, !1)
                            : (this.isNonstaticConstructor(t) && this.raise(Q.ConstructorIsAccessor, { at: t.key }),
                              this.pushClassMethod(e, t, !1, !1, !1, !1)),
                          this.checkGetterSetterParams(t);
                      } else if (a && 'accessor' === f.name && !this.isLineTerminator()) {
                        this.expectPlugin('decoratorAutoAccessors'), this.resetPreviousNodeTrailingComments(f);
                        let r = this.match(136);
                        this.parseClassElementName(t), this.pushClassAccessorProperty(e, t, r);
                      } else
                        this.isLineTerminator()
                          ? l
                            ? this.pushClassPrivateProperty(e, t)
                            : this.pushClassProperty(e, t)
                          : this.unexpected();
                    }
                    parseClassElementName(e) {
                      let { type: t, value: r } = this.state;
                      if (
                        ((130 === t || 131 === t) &&
                          e.static &&
                          'prototype' === r &&
                          this.raise(Q.StaticPrototype, { at: this.state.startLoc }),
                        136 === t)
                      ) {
                        'constructor' === r && this.raise(Q.ConstructorClassPrivateField, { at: this.state.startLoc });
                        let t = this.parsePrivateName();
                        return (e.key = t), t;
                      }
                      return this.parsePropertyName(e);
                    }
                    parseClassStaticBlock(e, t) {
                      var r;
                      this.scope.enter(208);
                      let i = this.state.labels;
                      (this.state.labels = []), this.prodParam.enter(0);
                      let a = (t.body = []);
                      this.parseBlockOrModuleBlockBody(a, void 0, !1, 8),
                        this.prodParam.exit(),
                        this.scope.exit(),
                        (this.state.labels = i),
                        e.body.push(this.finishNode(t, 'StaticBlock')),
                        null != (r = t.decorators) && r.length && this.raise(Q.DecoratorStaticBlock, { at: t });
                    }
                    pushClassProperty(e, t) {
                      t.computed ||
                        ('constructor' !== t.key.name && 'constructor' !== t.key.value) ||
                        this.raise(Q.ConstructorClassField, { at: t.key }),
                        e.body.push(this.parseClassProperty(t));
                    }
                    pushClassPrivateProperty(e, t) {
                      let r = this.parseClassPrivateProperty(t);
                      e.body.push(r),
                        this.classScope.declarePrivateName(this.getPrivateNameSV(r.key), 0, r.key.loc.start);
                    }
                    pushClassAccessorProperty(e, t, r) {
                      if (!r && !t.computed) {
                        let e = t.key;
                        ('constructor' === e.name || 'constructor' === e.value) &&
                          this.raise(Q.ConstructorClassField, { at: e });
                      }
                      let i = this.parseClassAccessorProperty(t);
                      e.body.push(i),
                        r && this.classScope.declarePrivateName(this.getPrivateNameSV(i.key), 0, i.key.loc.start);
                    }
                    pushClassMethod(e, t, r, i, a, l) {
                      e.body.push(this.parseMethod(t, r, i, a, l, 'ClassMethod', !0));
                    }
                    pushClassPrivateMethod(e, t, r, i) {
                      let a = this.parseMethod(t, r, i, !1, !1, 'ClassPrivateMethod', !0);
                      e.body.push(a);
                      let l = 'get' === a.kind ? (a.static ? 6 : 2) : 'set' === a.kind ? (a.static ? 5 : 1) : 0;
                      this.declareClassPrivateMethodInScope(a, l);
                    }
                    declareClassPrivateMethodInScope(e, t) {
                      this.classScope.declarePrivateName(this.getPrivateNameSV(e.key), t, e.key.loc.start);
                    }
                    parsePostMemberNameModifiers(e) {}
                    parseClassPrivateProperty(e) {
                      return this.parseInitializer(e), this.semicolon(), this.finishNode(e, 'ClassPrivateProperty');
                    }
                    parseClassProperty(e) {
                      return this.parseInitializer(e), this.semicolon(), this.finishNode(e, 'ClassProperty');
                    }
                    parseClassAccessorProperty(e) {
                      return this.parseInitializer(e), this.semicolon(), this.finishNode(e, 'ClassAccessorProperty');
                    }
                    parseInitializer(e) {
                      this.scope.enter(80),
                        this.expressionScope.enter(new eM()),
                        this.prodParam.enter(0),
                        (e.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null),
                        this.expressionScope.exit(),
                        this.prodParam.exit(),
                        this.scope.exit();
                    }
                    parseClassId(e, t, r) {
                      let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8331;
                      if (q(this.state.type))
                        (e.id = this.parseIdentifier()), t && this.declareNameFromIdentifier(e.id, i);
                      else if (r || !t) e.id = null;
                      else throw this.raise(Q.MissingClassName, { at: this.state.startLoc });
                    }
                    parseClassSuper(e) {
                      e.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
                    }
                    parseExport(e, t) {
                      let r,
                        i = this.maybeParseExportDefaultSpecifier(e),
                        a = !i || this.eat(12),
                        l = a && this.eatExportStar(e),
                        f = l && this.maybeParseExportNamespaceSpecifier(e),
                        y = a && (!f || this.eat(12)),
                        g = i || l;
                      if (l && !f) {
                        if ((i && this.unexpected(), t)) throw this.raise(Q.UnsupportedDecoratorExport, { at: e });
                        return this.parseExportFrom(e, !0), this.finishNode(e, 'ExportAllDeclaration');
                      }
                      let T = this.maybeParseExportNamedSpecifiers(e);
                      if (
                        (i && a && !l && !T && this.unexpected(null, 5), f && y && this.unexpected(null, 97), g || T)
                      ) {
                        if (((r = !1), t)) throw this.raise(Q.UnsupportedDecoratorExport, { at: e });
                        this.parseExportFrom(e, g);
                      } else r = this.maybeParseExportDeclaration(e);
                      if (g || T || r) {
                        var E;
                        if (
                          (this.checkExport(e, !0, !1, !!e.source),
                          (null == (E = e.declaration) ? void 0 : E.type) === 'ClassDeclaration')
                        )
                          this.maybeTakeDecorators(t, e.declaration, e);
                        else if (t) throw this.raise(Q.UnsupportedDecoratorExport, { at: e });
                        return this.finishNode(e, 'ExportNamedDeclaration');
                      }
                      if (this.eat(65)) {
                        let r = this.parseExportDefaultExpression();
                        if (((e.declaration = r), 'ClassDeclaration' === r.type)) this.maybeTakeDecorators(t, r, e);
                        else if (t) throw this.raise(Q.UnsupportedDecoratorExport, { at: e });
                        return this.checkExport(e, !0, !0), this.finishNode(e, 'ExportDefaultDeclaration');
                      }
                      this.unexpected(null, 5);
                    }
                    eatExportStar(e) {
                      return this.eat(55);
                    }
                    maybeParseExportDefaultSpecifier(e) {
                      if (this.isExportDefaultSpecifier()) {
                        this.expectPlugin('exportDefaultFrom');
                        let t = this.startNode();
                        return (
                          (t.exported = this.parseIdentifier(!0)),
                          (e.specifiers = [this.finishNode(t, 'ExportDefaultSpecifier')]),
                          !0
                        );
                      }
                      return !1;
                    }
                    maybeParseExportNamespaceSpecifier(e) {
                      if (this.isContextual(93)) {
                        e.specifiers || (e.specifiers = []);
                        let t = this.startNodeAt(this.state.lastTokStartLoc);
                        return (
                          this.next(),
                          (t.exported = this.parseModuleExportName()),
                          e.specifiers.push(this.finishNode(t, 'ExportNamespaceSpecifier')),
                          !0
                        );
                      }
                      return !1;
                    }
                    maybeParseExportNamedSpecifiers(e) {
                      if (this.match(5)) {
                        e.specifiers || (e.specifiers = []);
                        let t = 'type' === e.exportKind;
                        return (
                          e.specifiers.push(...this.parseExportSpecifiers(t)),
                          (e.source = null),
                          (e.declaration = null),
                          this.hasPlugin('importAssertions') && (e.assertions = []),
                          !0
                        );
                      }
                      return !1;
                    }
                    maybeParseExportDeclaration(e) {
                      return (
                        !!this.shouldParseExportDeclaration() &&
                        ((e.specifiers = []),
                        (e.source = null),
                        this.hasPlugin('importAssertions') && (e.assertions = []),
                        (e.declaration = this.parseExportDeclaration(e)),
                        !0)
                      );
                    }
                    isAsyncFunction() {
                      if (!this.isContextual(95)) return !1;
                      let e = this.nextTokenStart();
                      return !eg.test(this.input.slice(this.state.pos, e)) && this.isUnparsedContextual(e, 'function');
                    }
                    parseExportDefaultExpression() {
                      let e = this.startNode();
                      if (this.match(68)) return this.next(), this.parseFunction(e, 5);
                      if (this.isAsyncFunction()) return this.next(), this.next(), this.parseFunction(e, 13);
                      if (this.match(80)) return this.parseClass(e, !0, !0);
                      if (this.match(26))
                        return (
                          this.hasPlugin('decorators') &&
                            !0 === this.getPluginOption('decorators', 'decoratorsBeforeExport') &&
                            this.raise(Q.DecoratorBeforeExport, { at: this.state.startLoc }),
                          this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1), this.startNode()), !0, !0)
                        );
                      if (this.match(75) || this.match(74) || this.isLet())
                        throw this.raise(Q.UnsupportedDefaultExport, { at: this.state.startLoc });
                      let t = this.parseMaybeAssignAllowIn();
                      return this.semicolon(), t;
                    }
                    parseExportDeclaration(e) {
                      return this.match(80) ? this.parseClass(this.startNode(), !0, !1) : this.parseStatementListItem();
                    }
                    isExportDefaultSpecifier() {
                      let { type: e } = this.state;
                      if (q(e)) {
                        if ((95 === e && !this.state.containsEsc) || 99 === e) return !1;
                        if ((128 === e || 127 === e) && !this.state.containsEsc) {
                          let { type: e } = this.lookahead();
                          if ((q(e) && 97 !== e) || 5 === e) return this.expectOnePlugin(['flow', 'typescript']), !1;
                        }
                      } else if (!this.match(65)) return !1;
                      let t = this.nextTokenStart(),
                        r = this.isUnparsedContextual(t, 'from');
                      if (44 === this.input.charCodeAt(t) || (q(this.state.type) && r)) return !0;
                      if (this.match(65) && r) {
                        let e = this.input.charCodeAt(this.nextTokenStartSince(t + 4));
                        return 34 === e || 39 === e;
                      }
                      return !1;
                    }
                    parseExportFrom(e, t) {
                      if (this.eatContextual(97)) {
                        (e.source = this.parseImportSource()), this.checkExport(e);
                        let t = this.maybeParseImportAssertions();
                        t && ((e.assertions = t), this.checkJSONModuleImport(e));
                      } else t && this.unexpected();
                      this.semicolon();
                    }
                    shouldParseExportDeclaration() {
                      let { type: e } = this.state;
                      return 26 === e &&
                        (this.expectOnePlugin(['decorators', 'decorators-legacy']), this.hasPlugin('decorators'))
                        ? (!0 === this.getPluginOption('decorators', 'decoratorsBeforeExport') &&
                            this.raise(Q.DecoratorBeforeExport, { at: this.state.startLoc }),
                          !0)
                        : 74 === e || 75 === e || 68 === e || 80 === e || this.isLet() || this.isAsyncFunction();
                    }
                    checkExport(e, t, r, i) {
                      if (t) {
                        if (r) {
                          if ((this.checkDuplicateExports(e, 'default'), this.hasPlugin('exportDefaultFrom'))) {
                            var a;
                            let t = e.declaration;
                            'Identifier' !== t.type ||
                              'from' !== t.name ||
                              t.end - t.start != 4 ||
                              (null != (a = t.extra) && a.parenthesized) ||
                              this.raise(Q.ExportDefaultFromAsIdentifier, { at: t });
                          }
                        } else if (e.specifiers && e.specifiers.length)
                          for (let t of e.specifiers) {
                            let { exported: e } = t,
                              r = 'Identifier' === e.type ? e.name : e.value;
                            if ((this.checkDuplicateExports(t, r), !i && t.local)) {
                              let { local: e } = t;
                              'Identifier' !== e.type
                                ? this.raise(Q.ExportBindingIsString, { at: t, localName: e.value, exportName: r })
                                : (this.checkReservedWord(e.name, e.loc.start, !0, !1), this.scope.checkLocalExport(e));
                            }
                          }
                        else if (e.declaration) {
                          if (
                            'FunctionDeclaration' === e.declaration.type ||
                            'ClassDeclaration' === e.declaration.type
                          ) {
                            let t = e.declaration.id;
                            if (!t) throw Error('Assertion failure');
                            this.checkDuplicateExports(e, t.name);
                          } else if ('VariableDeclaration' === e.declaration.type)
                            for (let t of e.declaration.declarations) this.checkDeclaration(t.id);
                        }
                      }
                    }
                    checkDeclaration(e) {
                      if ('Identifier' === e.type) this.checkDuplicateExports(e, e.name);
                      else if ('ObjectPattern' === e.type) for (let t of e.properties) this.checkDeclaration(t);
                      else if ('ArrayPattern' === e.type) for (let t of e.elements) t && this.checkDeclaration(t);
                      else
                        'ObjectProperty' === e.type
                          ? this.checkDeclaration(e.value)
                          : 'RestElement' === e.type
                          ? this.checkDeclaration(e.argument)
                          : 'AssignmentPattern' === e.type && this.checkDeclaration(e.left);
                    }
                    checkDuplicateExports(e, t) {
                      this.exportedIdentifiers.has(t) &&
                        ('default' === t
                          ? this.raise(Q.DuplicateDefaultExport, { at: e })
                          : this.raise(Q.DuplicateExport, { at: e, exportName: t })),
                        this.exportedIdentifiers.add(t);
                    }
                    parseExportSpecifiers(e) {
                      let t = [],
                        r = !0;
                      for (this.expect(5); !this.eat(8); ) {
                        if (r) r = !1;
                        else if ((this.expect(12), this.eat(8))) break;
                        let i = this.isContextual(128),
                          a = this.match(131),
                          l = this.startNode();
                        (l.local = this.parseModuleExportName()), t.push(this.parseExportSpecifier(l, a, e, i));
                      }
                      return t;
                    }
                    parseExportSpecifier(e, t, r, i) {
                      return (
                        this.eatContextual(93)
                          ? (e.exported = this.parseModuleExportName())
                          : t
                          ? (e.exported = Kl(e.local))
                          : e.exported || (e.exported = me(e.local)),
                        this.finishNode(e, 'ExportSpecifier')
                      );
                    }
                    parseModuleExportName() {
                      if (this.match(131)) {
                        let e = this.parseStringLiteral(this.state.value),
                          t = e.value.match(e5);
                        return (
                          t &&
                            this.raise(Q.ModuleExportNameHasLoneSurrogate, {
                              at: e,
                              surrogateCharCode: t[0].charCodeAt(0)
                            }),
                          e
                        );
                      }
                      return this.parseIdentifier(!0);
                    }
                    isJSONModuleImport(e) {
                      return (
                        null != e.assertions &&
                        e.assertions.some((e) => {
                          let { key: t, value: r } = e;
                          return (
                            'json' === r.value && ('Identifier' === t.type ? 'type' === t.name : 'type' === t.value)
                          );
                        })
                      );
                    }
                    checkImportReflection(e) {
                      if (e.module) {
                        var t;
                        (1 !== e.specifiers.length || 'ImportDefaultSpecifier' !== e.specifiers[0].type) &&
                          this.raise(Q.ImportReflectionNotBinding, { at: e.specifiers[0].loc.start }),
                          (null == (t = e.assertions) ? void 0 : t.length) > 0 &&
                            this.raise(Q.ImportReflectionHasAssertion, { at: e.specifiers[0].loc.start });
                      }
                    }
                    checkJSONModuleImport(e) {
                      if (this.isJSONModuleImport(e) && 'ExportAllDeclaration' !== e.type) {
                        let { specifiers: t } = e;
                        if (null != t) {
                          let e = t.find((e) => {
                            let t;
                            if (
                              ('ExportSpecifier' === e.type
                                ? (t = e.local)
                                : 'ImportSpecifier' === e.type && (t = e.imported),
                              void 0 !== t)
                            )
                              return 'Identifier' === t.type ? 'default' !== t.name : 'default' !== t.value;
                          });
                          void 0 !== e && this.raise(Q.ImportJSONBindingNotDefault, { at: e.loc.start });
                        }
                      }
                    }
                    parseMaybeImportReflection(e) {
                      let t = !1;
                      if (this.isContextual(125)) {
                        let e = this.lookahead(),
                          r = e.type;
                        q(r)
                          ? (97 !== r || 102 === this.input.charCodeAt(this.nextTokenStartSince(e.end))) && (t = !0)
                          : 12 !== r && (t = !0);
                      }
                      t
                        ? (this.expectPlugin('importReflection'), this.next(), (e.module = !0))
                        : this.hasPlugin('importReflection') && (e.module = !1);
                    }
                    parseImport(e) {
                      if (((e.specifiers = []), !this.match(131))) {
                        this.parseMaybeImportReflection(e);
                        let t = !this.maybeParseDefaultImportSpecifier(e) || this.eat(12),
                          r = t && this.maybeParseStarImportSpecifier(e);
                        t && !r && this.parseNamedImportSpecifiers(e), this.expectContextual(97);
                      }
                      e.source = this.parseImportSource();
                      let t = this.maybeParseImportAssertions();
                      if (t) e.assertions = t;
                      else {
                        let t = this.maybeParseModuleAttributes();
                        t && (e.attributes = t);
                      }
                      return (
                        this.checkImportReflection(e),
                        this.checkJSONModuleImport(e),
                        this.semicolon(),
                        this.finishNode(e, 'ImportDeclaration')
                      );
                    }
                    parseImportSource() {
                      return this.match(131) || this.unexpected(), this.parseExprAtom();
                    }
                    shouldParseDefaultImport(e) {
                      return q(this.state.type);
                    }
                    parseImportSpecifierLocal(e, t, r) {
                      (t.local = this.parseIdentifier()), e.specifiers.push(this.finishImportSpecifier(t, r));
                    }
                    finishImportSpecifier(e, t) {
                      let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8201;
                      return this.checkLVal(e.local, { in: { type: t }, binding: r }), this.finishNode(e, t);
                    }
                    parseAssertEntries() {
                      let e = [],
                        t = new Set();
                      do {
                        if (this.match(8)) break;
                        let r = this.startNode(),
                          i = this.state.value;
                        if (
                          (t.has(i) &&
                            this.raise(Q.ModuleAttributesWithDuplicateKeys, { at: this.state.startLoc, key: i }),
                          t.add(i),
                          this.match(131) ? (r.key = this.parseStringLiteral(i)) : (r.key = this.parseIdentifier(!0)),
                          this.expect(14),
                          !this.match(131))
                        )
                          throw this.raise(Q.ModuleAttributeInvalidValue, { at: this.state.startLoc });
                        (r.value = this.parseStringLiteral(this.state.value)),
                          e.push(this.finishNode(r, 'ImportAttribute'));
                      } while (this.eat(12));
                      return e;
                    }
                    maybeParseModuleAttributes() {
                      if (!this.match(76) || this.hasPrecedingLineBreak())
                        return this.hasPlugin('moduleAttributes') ? [] : null;
                      this.expectPlugin('moduleAttributes'), this.next();
                      let e = [],
                        t = new Set();
                      do {
                        let r = this.startNode();
                        if (
                          ((r.key = this.parseIdentifier(!0)),
                          'type' !== r.key.name && this.raise(Q.ModuleAttributeDifferentFromType, { at: r.key }),
                          t.has(r.key.name) &&
                            this.raise(Q.ModuleAttributesWithDuplicateKeys, { at: r.key, key: r.key.name }),
                          t.add(r.key.name),
                          this.expect(14),
                          !this.match(131))
                        )
                          throw this.raise(Q.ModuleAttributeInvalidValue, { at: this.state.startLoc });
                        (r.value = this.parseStringLiteral(this.state.value)),
                          this.finishNode(r, 'ImportAttribute'),
                          e.push(r);
                      } while (this.eat(12));
                      return e;
                    }
                    maybeParseImportAssertions() {
                      if (!this.isContextual(94) || this.hasPrecedingLineBreak())
                        return this.hasPlugin('importAssertions') ? [] : null;
                      this.expectPlugin('importAssertions'), this.next(), this.eat(5);
                      let e = this.parseAssertEntries();
                      return this.eat(8), e;
                    }
                    maybeParseDefaultImportSpecifier(e) {
                      return (
                        !!this.shouldParseDefaultImport(e) &&
                        (this.parseImportSpecifierLocal(e, this.startNode(), 'ImportDefaultSpecifier'), !0)
                      );
                    }
                    maybeParseStarImportSpecifier(e) {
                      if (this.match(55)) {
                        let t = this.startNode();
                        return (
                          this.next(),
                          this.expectContextual(93),
                          this.parseImportSpecifierLocal(e, t, 'ImportNamespaceSpecifier'),
                          !0
                        );
                      }
                      return !1;
                    }
                    parseNamedImportSpecifiers(e) {
                      let t = !0;
                      for (this.expect(5); !this.eat(8); ) {
                        if (t) t = !1;
                        else {
                          if (this.eat(14)) throw this.raise(Q.DestructureNamedImport, { at: this.state.startLoc });
                          if ((this.expect(12), this.eat(8))) break;
                        }
                        let r = this.startNode(),
                          i = this.match(131),
                          a = this.isContextual(128);
                        r.imported = this.parseModuleExportName();
                        let l = this.parseImportSpecifier(
                          r,
                          i,
                          'type' === e.importKind || 'typeof' === e.importKind,
                          a,
                          void 0
                        );
                        e.specifiers.push(l);
                      }
                    }
                    parseImportSpecifier(e, t, r, i, a) {
                      if (this.eatContextual(93)) e.local = this.parseIdentifier();
                      else {
                        let { imported: r } = e;
                        if (t) throw this.raise(Q.ImportBindingIsString, { at: e, importName: r.value });
                        this.checkReservedWord(r.name, e.loc.start, !0, !0), e.local || (e.local = me(r));
                      }
                      return this.finishImportSpecifier(e, 'ImportSpecifier', a);
                    }
                    isThisParam(e) {
                      return 'Identifier' === e.type && 'this' === e.name;
                    }
                  },
                  e9 = class extends e7 {
                    constructor(e, t) {
                      super((e = p(e)), t),
                        (this.options = e),
                        this.initializeScopes(),
                        (this.plugins = Eh(this.options.plugins)),
                        (this.filename = e.sourceFilename);
                    }
                    getScopeHandler() {
                      return ed;
                    }
                    parse() {
                      this.enterInitialScopes();
                      let e = this.startNode(),
                        t = this.startNode();
                      return (
                        this.nextToken(), (e.errors = null), this.parseTopLevel(e, t), (e.errors = this.state.errors), e
                      );
                    }
                  };
                function Eh(e) {
                  let t = new Map();
                  for (let r of e) {
                    let [e, i] = Array.isArray(r) ? r : [r, {}];
                    t.has(e) || t.set(e, i || {});
                  }
                  return t;
                }
                function Ch(e, t) {
                  var r;
                  if ((null == (r = t) ? void 0 : r.sourceType) !== 'unambiguous') return Xe(t, e).parse();
                  t = Object.assign({}, t);
                  try {
                    t.sourceType = 'module';
                    let r = Xe(t, e),
                      i = r.parse();
                    if (r.sawUnambiguousESM) return i;
                    if (r.ambiguousScriptDifferentAst)
                      try {
                        return (t.sourceType = 'script'), Xe(t, e).parse();
                      } catch {}
                    else i.program.sourceType = 'script';
                    return i;
                  } catch (r) {
                    try {
                      return (t.sourceType = 'script'), Xe(t, e).parse();
                    } catch {}
                    throw r;
                  }
                }
                function bh(e, t) {
                  let r = Xe(t, e);
                  return r.options.strictMode && (r.state.strict = !0), r.getExpression();
                }
                var tt = (function (e) {
                  let t = {};
                  for (let r of Object.keys(e)) t[r] = g[e[r]];
                  return t;
                })(D);
                function Xe(e, t) {
                  let r = e9;
                  return null != e && e.plugins && (yh(e.plugins), (r = Ih(e.plugins))), new r(e, t);
                }
                var ts = {};
                function Ih(e) {
                  let t = e2.filter((t) => J(e, t)),
                    r = t.join('/'),
                    i = ts[r];
                  if (!i) {
                    for (let e of ((i = e9), t)) i = e0[e](i);
                    ts[r] = i;
                  }
                  return i;
                }
                (e.parse = Ch), (e.parseExpression = bh), (e.tokTypes = tt);
              }
            }),
            em = $({
              'src/language-js/parse/json.js'(e, t) {
                f();
                var r = ee(),
                  i = er(),
                  a = es(),
                  l = ei();
                function m() {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { allowComments: t = !0 } = e;
                  return function (e) {
                    let { parseExpression: i } = ed(),
                      a;
                    try {
                      a = i(e, { tokens: !0, ranges: !0 });
                    } catch (e) {
                      throw l(e);
                    }
                    if (!t && r(a.comments)) throw v(a.comments[0], 'Comment');
                    return S(a), a;
                  };
                }
                function v(e, t) {
                  let [r, a] = [e.loc.start, e.loc.end].map((e) => {
                    let { line: t, column: r } = e;
                    return { line: t, column: r + 1 };
                  });
                  return i(`${t} is not allowed in JSON.`, { start: r, end: a });
                }
                function S(e) {
                  switch (e.type) {
                    case 'ArrayExpression':
                      for (let t of e.elements) null !== t && S(t);
                      return;
                    case 'ObjectExpression':
                      for (let t of e.properties) S(t);
                      return;
                    case 'ObjectProperty':
                      if (e.computed) throw v(e.key, 'Computed key');
                      if (e.shorthand) throw v(e.key, 'Shorthand property');
                      'Identifier' !== e.key.type && S(e.key), S(e.value);
                      return;
                    case 'UnaryExpression': {
                      let { operator: t, argument: r } = e;
                      if ('+' !== t && '-' !== t) throw v(e, `Operator '${e.operator}'`);
                      if (
                        'NumericLiteral' === r.type ||
                        ('Identifier' === r.type && ('Infinity' === r.name || 'NaN' === r.name))
                      )
                        return;
                      throw v(r, `Operator '${t}' before '${r.type}'`);
                    }
                    case 'Identifier':
                      if ('Infinity' !== e.name && 'NaN' !== e.name && 'undefined' !== e.name)
                        throw v(e, `Identifier '${e.name}'`);
                      return;
                    case 'TemplateLiteral':
                      if (r(e.expressions)) throw v(e.expressions[0], "'TemplateLiteral' with expression");
                      for (let t of e.quasis) S(t);
                      return;
                    case 'NullLiteral':
                    case 'BooleanLiteral':
                    case 'NumericLiteral':
                    case 'StringLiteral':
                    case 'TemplateElement':
                      return;
                    default:
                      throw v(e, `'${e.type}'`);
                  }
                }
                var y = m(),
                  g = {
                    json: a({ parse: y, hasPragma: () => !0 }),
                    json5: a(y),
                    'json-stringify': a({ parse: m({ allowComments: !1 }), astFormat: 'estree-json' })
                  };
                t.exports = g;
              }
            });
          f();
          var ef = y(),
            ey = g(),
            ex = M(),
            eg = es(),
            eP = ei(),
            eb = eu(),
            eT = em(),
            eA = {
              sourceType: 'module',
              allowImportExportEverywhere: !0,
              allowReturnOutsideFunction: !0,
              allowSuperOutsideMethod: !0,
              allowUndeclaredExports: !0,
              errorRecovery: !0,
              createParenthesizedExpressions: !0,
              plugins: [
                'doExpressions',
                'exportDefaultFrom',
                'functionBind',
                'functionSent',
                'throwExpressions',
                'partialApplication',
                ['decorators', { decoratorsBeforeExport: !1 }],
                'importAssertions',
                'decimal',
                'moduleBlocks',
                'asyncDoExpressions',
                'regexpUnicodeSets',
                'destructuringPrivate',
                'decoratorAutoAccessors'
              ],
              tokens: !0,
              ranges: !0
            },
            eE = ['recordAndTuple', { syntaxType: 'hash' }],
            eS = 'v8intrinsic',
            ew = [
              ['pipelineOperator', { proposal: 'hack', topicToken: '%' }],
              ['pipelineOperator', { proposal: 'minimal' }],
              ['pipelineOperator', { proposal: 'fsharp' }]
            ],
            he = function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA;
              return Object.assign(Object.assign({}, t), {}, { plugins: [...t.plugins, ...e] });
            },
            ev = /@(?:no)?flow\b/;
          function nd(e, t) {
            if (t.filepath && t.filepath.endsWith('.js.flow')) return !0;
            let r = ey(e);
            r && (e = e.slice(r.length));
            let i = ex(e, 0);
            return !1 !== i && (e = e.slice(0, i)), ev.test(e);
          }
          function od(e, t, r) {
            let i = (0, ed()[e])(t, r),
              a = i.errors.find((e) => !eO.has(e.reasonCode));
            if (a) throw a;
            return i;
          }
          function $e(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
            return function (t, i) {
              let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              if (('babel' === a.parser || '__babel_estree' === a.parser) && nd(t, a))
                return (a.parser = 'babel-flow'), eN(t, i, a);
              let l = r;
              'script' === a.__babelSourceType &&
                (l = l.map((e) => Object.assign(Object.assign({}, e), {}, { sourceType: 'script' }))),
                /#[[{]/.test(t) && (l = l.map((e) => he([eE], e)));
              let f = /%[A-Z]/.test(t);
              t.includes('|>')
                ? (l = (f ? [...ew, eS] : ew).flatMap((e) => l.map((t) => he([e], t))))
                : f && (l = l.map((e) => he([eS], e)));
              let { result: y, error: g } = ef(...l.map((r) => () => od(e, t, r)));
              if (!y) throw eP(g);
              return (a.originalText = t), eb(y, a);
            };
          }
          var eC = $e('parse', he(['jsx', 'flow'])),
            eN = $e('parse', he(['jsx', ['flow', { all: !0, enums: !0 }]])),
            eI = $e('parse', he(['jsx', 'typescript']), he(['typescript'])),
            ek = $e('parse', he(['jsx', 'flow', 'estree'])),
            eL = $e('parseExpression', he(['jsx'])),
            eM = $e('parseExpression', he(['typescript'])),
            eO = new Set([
              'StrictNumericEscape',
              'StrictWith',
              'StrictOctalLiteral',
              'StrictDelete',
              'StrictEvalArguments',
              'StrictEvalArgumentsBinding',
              'StrictFunction',
              'EmptyTypeArguments',
              'EmptyTypeParameters',
              'ConstructorHasTypeParameters',
              'UnsupportedParameterPropertyKind',
              'UnexpectedParameterModifier',
              'MixedLabeledAndUnlabeledElements',
              'InvalidTupleMemberLabel',
              'NonClassMethodPropertyHasAbstractModifer',
              'ReadonlyForMethodSignature',
              'ClassMethodHasDeclare',
              'ClassMethodHasReadonly',
              'InvalidModifierOnTypeMember',
              'DuplicateAccessibilityModifier',
              'IndexSignatureHasDeclare',
              'DecoratorExportClass',
              'ParamDupe',
              'InvalidDecimal',
              'RestTrailingComma',
              'UnsupportedParameterDecorator',
              'UnterminatedJsxContent',
              'UnexpectedReservedWord',
              'ModuleAttributesWithDuplicateKeys',
              'LineTerminatorBeforeArrow',
              'InvalidEscapeSequenceTemplate',
              'NonAbstractClassHasAbstractMethod',
              'UnsupportedPropertyDecorator',
              'OptionalTypeBeforeRequired',
              'PatternIsOptional',
              'OptionalBindingPattern',
              'DeclareClassFieldHasInitializer',
              'TypeImportCannotSpecifyDefaultAndNamed',
              'DeclareFunctionHasImplementation',
              'ConstructorClassField',
              'VarRedeclaration',
              'InvalidPrivateFieldResolution',
              'DuplicateExport'
            ]),
            eD = eg(eC),
            eB = eg(eI),
            eF = eg(eL),
            ej = eg(eM);
          t.exports = {
            parsers: Object.assign(
              Object.assign({ babel: eD, 'babel-flow': eg(eN), 'babel-ts': eB }, eT),
              {},
              {
                __js_expression: eF,
                __vue_expression: eF,
                __vue_ts_expression: ej,
                __vue_event_binding: eD,
                __vue_ts_event_binding: eB,
                __babel_estree: eg(ek)
              }
            )
          };
        })());
    }
  }
]);
