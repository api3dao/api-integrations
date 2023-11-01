(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9033],
  {
    6170: function (e, O, et) {
      var en,
        er,
        eu,
        ei,
        ea,
        es,
        eo,
        el,
        ep,
        ec,
        ed,
        eD,
        ef,
        eg,
        ey,
        eh,
        eE,
        eC,
        eF,
        eA,
        ev,
        ex,
        eb,
        eS,
        eT,
        eB,
        eN,
        ew,
        eP,
        ek,
        ej,
        eI,
        eO,
        eL,
        e_,
        eM,
        e$,
        eR,
        eV,
        eW,
        eq,
        eJ,
        eU,
        eH,
        eG,
        ez,
        eX,
        eK,
        eQ,
        eY,
        eZ,
        e0,
        e1,
        e2,
        e3,
        e8,
        e6,
        e7,
        e9,
        e5,
        e4,
        tn,
        tr,
        tu,
        ti,
        ta,
        ts,
        to,
        tl,
        tp,
        tc,
        td,
        tD,
        tf,
        tg,
        ty,
        th,
        tE,
        tC,
        tF,
        tA,
        tv,
        tx,
        tb,
        tS,
        tT,
        tB,
        tN,
        tw,
        tP,
        tk,
        tj,
        tI,
        tO,
        tL;
      e.exports =
        ((ea = (ei = (e, O) => () => (O || e((O = { exports: {} }).exports, O), O.exports))((e, O) => {
          var ir = function (e) {
            return e && e.Math == Math && e;
          };
          O.exports =
            ir('object' == typeof globalThis && globalThis) ||
            ir('object' == typeof window && window) ||
            ir('object' == typeof self && self) ||
            ir('object' == typeof et.g && et.g) ||
            (function () {
              return this;
            })() ||
            Function('return this')();
        })),
        (es = ei((e, O) => {
          O.exports = function (e) {
            try {
              return !!e();
            } catch {
              return !0;
            }
          };
        })),
        (eo = ei((e, O) => {
          var et = es();
          O.exports = !et(function () {
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
        (el = ei((e, O) => {
          var et = es();
          O.exports = !et(function () {
            var e = function () {}.bind();
            return 'function' != typeof e || e.hasOwnProperty('prototype');
          });
        })),
        (ep = ei((e, O) => {
          var et = el(),
            en = Function.prototype.call;
          O.exports = et
            ? en.bind(en)
            : function () {
                return en.apply(en, arguments);
              };
        })),
        (ec = ei((e) => {
          var O = {}.propertyIsEnumerable,
            et = Object.getOwnPropertyDescriptor,
            en = et && !O.call({ 1: 2 }, 1);
          e.f = en
            ? function (e) {
                var O = et(this, e);
                return !!O && O.enumerable;
              }
            : O;
        })),
        (ed = ei((e, O) => {
          O.exports = function (e, O) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: O };
          };
        })),
        (eD = ei((e, O) => {
          var et = el(),
            en = Function.prototype,
            er = en.call,
            eu = et && en.bind.bind(er, er);
          O.exports = et
            ? eu
            : function (e) {
                return function () {
                  return er.apply(e, arguments);
                };
              };
        })),
        (ef = ei((e, O) => {
          var et = eD(),
            en = et({}.toString),
            er = et(''.slice);
          O.exports = function (e) {
            return er(en(e), 8, -1);
          };
        })),
        (eg = ei((e, O) => {
          var et = eD(),
            en = es(),
            er = ef(),
            eu = Object,
            ei = et(''.split);
          O.exports = en(function () {
            return !eu('z').propertyIsEnumerable(0);
          })
            ? function (e) {
                return 'String' == er(e) ? ei(e, '') : eu(e);
              }
            : eu;
        })),
        (ey = ei((e, O) => {
          O.exports = function (e) {
            return null == e;
          };
        })),
        (eh = ei((e, O) => {
          var et = ey(),
            en = TypeError;
          O.exports = function (e) {
            if (et(e)) throw en("Can't call method on " + e);
            return e;
          };
        })),
        (eE = ei((e, O) => {
          var et = eg(),
            en = eh();
          O.exports = function (e) {
            return et(en(e));
          };
        })),
        (eC = ei((e, O) => {
          var et = 'object' == typeof document && document.all;
          O.exports = { all: et, IS_HTMLDDA: typeof et > 'u' && void 0 !== et };
        })),
        (eF = ei((e, O) => {
          var et = eC(),
            en = et.all;
          O.exports = et.IS_HTMLDDA
            ? function (e) {
                return 'function' == typeof e || e === en;
              }
            : function (e) {
                return 'function' == typeof e;
              };
        })),
        (eA = ei((e, O) => {
          var et = eF(),
            en = eC(),
            er = en.all;
          O.exports = en.IS_HTMLDDA
            ? function (e) {
                return 'object' == typeof e ? null !== e : et(e) || e === er;
              }
            : function (e) {
                return 'object' == typeof e ? null !== e : et(e);
              };
        })),
        (ev = ei((e, O) => {
          var et = ea(),
            en = eF();
          O.exports = function (e, O) {
            var er;
            return arguments.length < 2 ? (en((er = et[e])) ? er : void 0) : et[e] && et[e][O];
          };
        })),
        (ex = ei((e, O) => {
          var et = eD();
          O.exports = et({}.isPrototypeOf);
        })),
        (eb = ei((e, O) => {
          var et = ev();
          O.exports = et('navigator', 'userAgent') || '';
        })),
        (eS = ei((e, O) => {
          var et,
            en,
            er = ea(),
            eu = eb(),
            ei = er.process,
            es = er.Deno,
            eo = (ei && ei.versions) || (es && es.version),
            el = eo && eo.v8;
          el && (en = (et = el.split('.'))[0] > 0 && et[0] < 4 ? 1 : +(et[0] + et[1])),
            !en &&
              eu &&
              (!(et = eu.match(/Edge\/(\d+)/)) || et[1] >= 74) &&
              (et = eu.match(/Chrome\/(\d+)/)) &&
              (en = +et[1]),
            (O.exports = en);
        })),
        (eT = ei((e, O) => {
          var et = eS(),
            en = es();
          O.exports =
            !!Object.getOwnPropertySymbols &&
            !en(function () {
              var e = Symbol();
              return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && et && et < 41);
            });
        })),
        (eB = ei((e, O) => {
          var et = eT();
          O.exports = et && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
        })),
        (eN = ei((e, O) => {
          var et = ev(),
            en = eF(),
            er = ex(),
            eu = eB(),
            ei = Object;
          O.exports = eu
            ? function (e) {
                return 'symbol' == typeof e;
              }
            : function (e) {
                var O = et('Symbol');
                return en(O) && er(O.prototype, ei(e));
              };
        })),
        (ew = ei((e, O) => {
          var et = String;
          O.exports = function (e) {
            try {
              return et(e);
            } catch {
              return 'Object';
            }
          };
        })),
        (eP = ei((e, O) => {
          var et = eF(),
            en = ew(),
            er = TypeError;
          O.exports = function (e) {
            if (et(e)) return e;
            throw er(en(e) + ' is not a function');
          };
        })),
        (ek = ei((e, O) => {
          var et = eP(),
            en = ey();
          O.exports = function (e, O) {
            var er = e[O];
            return en(er) ? void 0 : et(er);
          };
        })),
        (ej = ei((e, O) => {
          var et = ep(),
            en = eF(),
            er = eA(),
            eu = TypeError;
          O.exports = function (e, O) {
            var ei, ea;
            if (
              ('string' === O && en((ei = e.toString)) && !er((ea = et(ei, e)))) ||
              (en((ei = e.valueOf)) && !er((ea = et(ei, e)))) ||
              ('string' !== O && en((ei = e.toString)) && !er((ea = et(ei, e))))
            )
              return ea;
            throw eu("Can't convert object to primitive value");
          };
        })),
        (eI = ei((e, O) => {
          O.exports = !1;
        })),
        (eO = ei((e, O) => {
          var et = ea(),
            en = Object.defineProperty;
          O.exports = function (e, O) {
            try {
              en(et, e, { value: O, configurable: !0, writable: !0 });
            } catch {
              et[e] = O;
            }
            return O;
          };
        })),
        (eL = ei((e, O) => {
          var et = ea(),
            en = eO(),
            er = '__core-js_shared__',
            eu = et[er] || en(er, {});
          O.exports = eu;
        })),
        (e_ = ei((e, O) => {
          var et = eI(),
            en = eL();
          (O.exports = function (e, O) {
            return en[e] || (en[e] = void 0 !== O ? O : {});
          })('versions', []).push({
            version: '3.26.1',
            mode: et ? 'pure' : 'global',
            copyright: '\xa9 2014-2022 Denis Pushkarev (zloirock.ru)',
            license: 'https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE',
            source: 'https://github.com/zloirock/core-js'
          });
        })),
        (eM = ei((e, O) => {
          var et = eh(),
            en = Object;
          O.exports = function (e) {
            return en(et(e));
          };
        })),
        (e$ = ei((e, O) => {
          var et = eD(),
            en = eM(),
            er = et({}.hasOwnProperty);
          O.exports =
            Object.hasOwn ||
            function (e, O) {
              return er(en(e), O);
            };
        })),
        (eR = ei((e, O) => {
          var et = eD(),
            en = 0,
            er = Math.random(),
            eu = et((1).toString);
          O.exports = function (e) {
            return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + eu(++en + er, 36);
          };
        })),
        (eV = ei((e, O) => {
          var et = ea(),
            en = e_(),
            er = e$(),
            eu = eR(),
            ei = eT(),
            es = eB(),
            eo = en('wks'),
            el = et.Symbol,
            ep = el && el.for,
            ec = es ? el : (el && el.withoutSetter) || eu;
          O.exports = function (e) {
            if (!er(eo, e) || !(ei || 'string' == typeof eo[e])) {
              var O = 'Symbol.' + e;
              ei && er(el, e) ? (eo[e] = el[e]) : es && ep ? (eo[e] = ep(O)) : (eo[e] = ec(O));
            }
            return eo[e];
          };
        })),
        (eW = ei((e, O) => {
          var et = ep(),
            en = eA(),
            er = eN(),
            eu = ek(),
            ei = ej(),
            ea = eV(),
            es = TypeError,
            eo = ea('toPrimitive');
          O.exports = function (e, O) {
            if (!en(e) || er(e)) return e;
            var ea,
              el = eu(e, eo);
            if (el) {
              if ((void 0 === O && (O = 'default'), !en((ea = et(el, e, O))) || er(ea))) return ea;
              throw es("Can't convert object to primitive value");
            }
            return void 0 === O && (O = 'number'), ei(e, O);
          };
        })),
        (eq = ei((e, O) => {
          var et = eW(),
            en = eN();
          O.exports = function (e) {
            var O = et(e, 'string');
            return en(O) ? O : O + '';
          };
        })),
        (eJ = ei((e, O) => {
          var et = ea(),
            en = eA(),
            er = et.document,
            eu = en(er) && en(er.createElement);
          O.exports = function (e) {
            return eu ? er.createElement(e) : {};
          };
        })),
        (eU = ei((e, O) => {
          var et = eo(),
            en = es(),
            er = eJ();
          O.exports =
            !et &&
            !en(function () {
              return (
                7 !=
                Object.defineProperty(er('div'), 'a', {
                  get: function () {
                    return 7;
                  }
                }).a
              );
            });
        })),
        (eH = ei((e) => {
          var O = eo(),
            et = ep(),
            en = ec(),
            er = ed(),
            eu = eE(),
            ei = eq(),
            ea = e$(),
            es = eU(),
            el = Object.getOwnPropertyDescriptor;
          e.f = O
            ? el
            : function (e, O) {
                if (((e = eu(e)), (O = ei(O)), es))
                  try {
                    return el(e, O);
                  } catch {}
                if (ea(e, O)) return er(!et(en.f, e, O), e[O]);
              };
        })),
        (eG = ei((e, O) => {
          var et = eo(),
            en = es();
          O.exports =
            et &&
            en(function () {
              return 42 != Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 }).prototype;
            });
        })),
        (ez = ei((e, O) => {
          var et = eA(),
            en = String,
            er = TypeError;
          O.exports = function (e) {
            if (et(e)) return e;
            throw er(en(e) + ' is not an object');
          };
        })),
        (eX = ei((e) => {
          var O = eo(),
            et = eU(),
            en = eG(),
            er = ez(),
            eu = eq(),
            ei = TypeError,
            ea = Object.defineProperty,
            es = Object.getOwnPropertyDescriptor,
            el = 'enumerable',
            ep = 'configurable',
            ec = 'writable';
          e.f = O
            ? en
              ? function (e, O, et) {
                  if (
                    (er(e),
                    (O = eu(O)),
                    er(et),
                    'function' == typeof e && 'prototype' === O && 'value' in et && ec in et && !et[ec])
                  ) {
                    var en = es(e, O);
                    en &&
                      en[ec] &&
                      ((e[O] = et.value),
                      (et = {
                        configurable: ep in et ? et[ep] : en[ep],
                        enumerable: el in et ? et[el] : en[el],
                        writable: !1
                      }));
                  }
                  return ea(e, O, et);
                }
              : ea
            : function (e, O, en) {
                if ((er(e), (O = eu(O)), er(en), et))
                  try {
                    return ea(e, O, en);
                  } catch {}
                if ('get' in en || 'set' in en) throw ei('Accessors not supported');
                return 'value' in en && (e[O] = en.value), e;
              };
        })),
        (eK = ei((e, O) => {
          var et = eo(),
            en = eX(),
            er = ed();
          O.exports = et
            ? function (e, O, et) {
                return en.f(e, O, er(1, et));
              }
            : function (e, O, et) {
                return (e[O] = et), e;
              };
        })),
        (eQ = ei((e, O) => {
          var et = eo(),
            en = e$(),
            er = Function.prototype,
            eu = et && Object.getOwnPropertyDescriptor,
            ei = en(er, 'name'),
            ea = ei && (!et || (et && eu(er, 'name').configurable));
          O.exports = { EXISTS: ei, PROPER: ei && 'something' === function () {}.name, CONFIGURABLE: ea };
        })),
        (eY = ei((e, O) => {
          var et = eD(),
            en = eF(),
            er = eL(),
            eu = et(Function.toString);
          en(er.inspectSource) ||
            (er.inspectSource = function (e) {
              return eu(e);
            }),
            (O.exports = er.inspectSource);
        })),
        (eZ = ei((e, O) => {
          var et = ea(),
            en = eF(),
            er = et.WeakMap;
          O.exports = en(er) && /native code/.test(String(er));
        })),
        (e0 = ei((e, O) => {
          var et = e_(),
            en = eR(),
            er = et('keys');
          O.exports = function (e) {
            return er[e] || (er[e] = en(e));
          };
        })),
        (e1 = ei((e, O) => {
          O.exports = {};
        })),
        (e2 = ei((e, O) => {
          var et,
            en,
            er,
            eu,
            ei,
            es = eZ(),
            eo = ea(),
            el = eA(),
            ep = eK(),
            ec = e$(),
            ed = eL(),
            eD = e0(),
            ef = e1(),
            eg = 'Object already initialized',
            ey = eo.TypeError,
            eh = eo.WeakMap;
          es || ed.state
            ? (((et = ed.state || (ed.state = new eh())).get = et.get),
              (et.has = et.has),
              (et.set = et.set),
              (er = function (e, O) {
                if (et.has(e)) throw ey(eg);
                return (O.facade = e), et.set(e, O), O;
              }),
              (eu = function (e) {
                return et.get(e) || {};
              }),
              (ei = function (e) {
                return et.has(e);
              }))
            : ((ef[(en = eD('state'))] = !0),
              (er = function (e, O) {
                if (ec(e, en)) throw ey(eg);
                return (O.facade = e), ep(e, en, O), O;
              }),
              (eu = function (e) {
                return ec(e, en) ? e[en] : {};
              }),
              (ei = function (e) {
                return ec(e, en);
              })),
            (O.exports = {
              set: er,
              get: eu,
              has: ei,
              enforce: function (e) {
                return ei(e) ? eu(e) : er(e, {});
              },
              getterFor: function (e) {
                return function (O) {
                  var et;
                  if (!el(O) || (et = eu(O)).type !== e) throw ey('Incompatible receiver, ' + e + ' required');
                  return et;
                };
              }
            });
        })),
        (e3 = ei((e, O) => {
          var et = es(),
            en = eF(),
            er = e$(),
            eu = eo(),
            ei = eQ().CONFIGURABLE,
            ea = eY(),
            el = e2(),
            ep = el.enforce,
            ec = el.get,
            ed = Object.defineProperty,
            eD =
              eu &&
              !et(function () {
                return 8 !== ed(function () {}, 'length', { value: 8 }).length;
              }),
            ef = String(String).split('String'),
            eg = (O.exports = function (e, O, et) {
              'Symbol(' === String(O).slice(0, 7) && (O = '[' + String(O).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
                et && et.getter && (O = 'get ' + O),
                et && et.setter && (O = 'set ' + O),
                (!er(e, 'name') || (ei && e.name !== O)) &&
                  (eu ? ed(e, 'name', { value: O, configurable: !0 }) : (e.name = O)),
                eD && et && er(et, 'arity') && e.length !== et.arity && ed(e, 'length', { value: et.arity });
              try {
                et && er(et, 'constructor') && et.constructor
                  ? eu && ed(e, 'prototype', { writable: !1 })
                  : e.prototype && (e.prototype = void 0);
              } catch {}
              var en = ep(e);
              return er(en, 'source') || (en.source = ef.join('string' == typeof O ? O : '')), e;
            });
          Function.prototype.toString = eg(function () {
            return (en(this) && ec(this).source) || ea(this);
          }, 'toString');
        })),
        (e8 = ei((e, O) => {
          var et = eF(),
            en = eX(),
            er = e3(),
            eu = eO();
          O.exports = function (e, O, ei, ea) {
            ea || (ea = {});
            var es = ea.enumerable,
              eo = void 0 !== ea.name ? ea.name : O;
            if ((et(ei) && er(ei, eo, ea), ea.global)) es ? (e[O] = ei) : eu(O, ei);
            else {
              try {
                ea.unsafe ? e[O] && (es = !0) : delete e[O];
              } catch {}
              es
                ? (e[O] = ei)
                : en.f(e, O, {
                    value: ei,
                    enumerable: !1,
                    configurable: !ea.nonConfigurable,
                    writable: !ea.nonWritable
                  });
            }
            return e;
          };
        })),
        (e6 = ei((e, O) => {
          var et = Math.ceil,
            en = Math.floor;
          O.exports =
            Math.trunc ||
            function (e) {
              var O = +e;
              return (O > 0 ? en : et)(O);
            };
        })),
        (e7 = ei((e, O) => {
          var et = e6();
          O.exports = function (e) {
            var O = +e;
            return O != O || 0 === O ? 0 : et(O);
          };
        })),
        (e9 = ei((e, O) => {
          var et = e7(),
            en = Math.max,
            er = Math.min;
          O.exports = function (e, O) {
            var eu = et(e);
            return eu < 0 ? en(eu + O, 0) : er(eu, O);
          };
        })),
        (e5 = ei((e, O) => {
          var et = e7(),
            en = Math.min;
          O.exports = function (e) {
            return e > 0 ? en(et(e), 9007199254740991) : 0;
          };
        })),
        (e4 = ei((e, O) => {
          var et = e5();
          O.exports = function (e) {
            return et(e.length);
          };
        })),
        (tn = ei((e, O) => {
          var et = eE(),
            en = e9(),
            er = e4(),
            li = function (e) {
              return function (O, eu, ei) {
                var ea,
                  es = et(O),
                  eo = er(es),
                  el = en(ei, eo);
                if (e && eu != eu) {
                  for (; eo > el; ) if ((ea = es[el++]) != ea) return !0;
                } else for (; eo > el; el++) if ((e || el in es) && es[el] === eu) return e || el || 0;
                return !e && -1;
              };
            };
          O.exports = { includes: li(!0), indexOf: li(!1) };
        })),
        (tr = ei((e, O) => {
          var et = eD(),
            en = e$(),
            er = eE(),
            eu = tn().indexOf,
            ei = e1(),
            ea = et([].push);
          O.exports = function (e, O) {
            var et,
              es = er(e),
              eo = 0,
              el = [];
            for (et in es) !en(ei, et) && en(es, et) && ea(el, et);
            for (; O.length > eo; ) en(es, (et = O[eo++])) && (~eu(el, et) || ea(el, et));
            return el;
          };
        })),
        (tu = ei((e, O) => {
          O.exports = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf'
          ];
        })),
        (ti = ei((e) => {
          var O = tr(),
            et = tu().concat('length', 'prototype');
          e.f =
            Object.getOwnPropertyNames ||
            function (e) {
              return O(e, et);
            };
        })),
        (ta = ei((e) => {
          e.f = Object.getOwnPropertySymbols;
        })),
        (ts = ei((e, O) => {
          var et = ev(),
            en = eD(),
            er = ti(),
            eu = ta(),
            ei = ez(),
            ea = en([].concat);
          O.exports =
            et('Reflect', 'ownKeys') ||
            function (e) {
              var O = er.f(ei(e)),
                et = eu.f;
              return et ? ea(O, et(e)) : O;
            };
        })),
        (to = ei((e, O) => {
          var et = e$(),
            en = ts(),
            er = eH(),
            eu = eX();
          O.exports = function (e, O, ei) {
            for (var ea = en(O), es = eu.f, eo = er.f, el = 0; el < ea.length; el++) {
              var ep = ea[el];
              et(e, ep) || (ei && et(ei, ep)) || es(e, ep, eo(O, ep));
            }
          };
        })),
        (tl = ei((e, O) => {
          var et = es(),
            en = eF(),
            er = /#|\.prototype\./,
            Ut = function (e, O) {
              var er = ei[eu(e)];
              return er == eo || (er != ea && (en(O) ? et(O) : !!O));
            },
            eu = (Ut.normalize = function (e) {
              return String(e).replace(er, '.').toLowerCase();
            }),
            ei = (Ut.data = {}),
            ea = (Ut.NATIVE = 'N'),
            eo = (Ut.POLYFILL = 'P');
          O.exports = Ut;
        })),
        (tp = ei((e, O) => {
          var et = ea(),
            en = eH().f,
            er = eK(),
            eu = e8(),
            ei = eO(),
            es = to(),
            eo = tl();
          O.exports = function (e, O) {
            var ea,
              el,
              ep,
              ec,
              ed,
              eD = e.target,
              ef = e.global,
              eg = e.stat;
            if ((ea = ef ? et : eg ? et[eD] || ei(eD, {}) : (et[eD] || {}).prototype))
              for (el in O) {
                if (
                  ((ec = O[el]),
                  (ep = e.dontCallGetSet ? (ed = en(ea, el)) && ed.value : ea[el]),
                  !eo(ef ? el : eD + (eg ? '.' : '#') + el, e.forced) && void 0 !== ep)
                ) {
                  if (typeof ec == typeof ep) continue;
                  es(ec, ep);
                }
                (e.sham || (ep && ep.sham)) && er(ec, 'sham', !0), eu(ea, el, ec, e);
              }
          };
        })),
        (tc = ei((e, O) => {
          var et = ef();
          O.exports =
            Array.isArray ||
            function (e) {
              return 'Array' == et(e);
            };
        })),
        (td = ei((e, O) => {
          var et = TypeError;
          O.exports = function (e) {
            if (e > 9007199254740991) throw et('Maximum allowed index exceeded');
            return e;
          };
        })),
        (tD = ei((e, O) => {
          var et = ef(),
            en = eD();
          O.exports = function (e) {
            if ('Function' === et(e)) return en(e);
          };
        })),
        (tf = ei((e, O) => {
          var et = tD(),
            en = eP(),
            er = el(),
            eu = et(et.bind);
          O.exports = function (e, O) {
            return (
              en(e),
              void 0 === O
                ? e
                : er
                ? eu(e, O)
                : function () {
                    return e.apply(O, arguments);
                  }
            );
          };
        })),
        (tg = ei((e, O) => {
          var et = tc(),
            en = e4(),
            er = td(),
            eu = tf(),
            Oi = function (e, O, ei, ea, es, eo, el, ep) {
              for (var ec, ed, eD = es, ef = 0, eg = !!el && eu(el, ep); ef < ea; )
                ef in ei &&
                  ((ec = eg ? eg(ei[ef], ef, O) : ei[ef]),
                  eo > 0 && et(ec)
                    ? ((ed = en(ec)), (eD = Oi(e, O, ec, ed, eD, eo - 1) - 1))
                    : (er(eD + 1), (e[eD] = ec)),
                  eD++),
                  ef++;
              return eD;
            };
          O.exports = Oi;
        })),
        (ty = ei((e, O) => {
          var et = eV()('toStringTag'),
            en = {};
          (en[et] = 'z'), (O.exports = '[object z]' === String(en));
        })),
        (th = ei((e, O) => {
          var et = ty(),
            en = eF(),
            er = ef(),
            eu = eV()('toStringTag'),
            ei = Object,
            ea =
              'Arguments' ==
              er(
                (function () {
                  return arguments;
                })()
              ),
            uf = function (e, O) {
              try {
                return e[O];
              } catch {}
            };
          O.exports = et
            ? er
            : function (e) {
                var O, et, es;
                return void 0 === e
                  ? 'Undefined'
                  : null === e
                  ? 'Null'
                  : 'string' == typeof (et = uf((O = ei(e)), eu))
                  ? et
                  : ea
                  ? er(O)
                  : 'Object' == (es = er(O)) && en(O.callee)
                  ? 'Arguments'
                  : es;
              };
        })),
        (tE = ei((e, O) => {
          var et = eD(),
            en = es(),
            er = eF(),
            eu = th(),
            ei = ev(),
            ea = eY(),
            Wi = function () {},
            eo = [],
            el = ei('Reflect', 'construct'),
            ep = /^\s*(?:class|function)\b/,
            ec = et(ep.exec),
            ed = !ep.exec(Wi),
            zt = function (e) {
              if (!er(e)) return !1;
              try {
                return el(Wi, eo, e), !0;
              } catch {
                return !1;
              }
            },
            Gi = function (e) {
              if (!er(e)) return !1;
              switch (eu(e)) {
                case 'AsyncFunction':
                case 'GeneratorFunction':
                case 'AsyncGeneratorFunction':
                  return !1;
              }
              try {
                return ed || !!ec(ep, ea(e));
              } catch {
                return !0;
              }
            };
          (Gi.sham = !0),
            (O.exports =
              !el ||
              en(function () {
                var e;
                return (
                  zt(zt.call) ||
                  !zt(Object) ||
                  !zt(function () {
                    e = !0;
                  }) ||
                  e
                );
              })
                ? Gi
                : zt);
        })),
        (tC = ei((e, O) => {
          var et = tc(),
            en = tE(),
            er = eA(),
            eu = eV()('species'),
            ei = Array;
          O.exports = function (e) {
            var O;
            return (
              et(e) &&
                (en((O = e.constructor)) && (O === ei || et(O.prototype))
                  ? (O = void 0)
                  : er(O) && null === (O = O[eu]) && (O = void 0)),
              void 0 === O ? ei : O
            );
          };
        })),
        (tF = ei((e, O) => {
          var et = tC();
          O.exports = function (e, O) {
            return new (et(e))(0 === O ? 0 : O);
          };
        })),
        (tA = ei(() => {
          var e = tp(),
            O = tg(),
            et = eP(),
            en = eM(),
            er = e4(),
            eu = tF();
          e(
            { target: 'Array', proto: !0 },
            {
              flatMap: function (e) {
                var ei,
                  ea = en(this),
                  es = er(ea);
                return (
                  et(e),
                  ((ei = eu(ea, 0)).length = O(ei, ea, ea, es, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0)),
                  ei
                );
              }
            }
          );
        })),
        (tv = ei((e, O) => {
          O.exports = {};
        })),
        (tx = ei((e, O) => {
          var et = eV(),
            en = tv(),
            er = et('iterator'),
            eu = Array.prototype;
          O.exports = function (e) {
            return void 0 !== e && (en.Array === e || eu[er] === e);
          };
        })),
        (tb = ei((e, O) => {
          var et = th(),
            en = ek(),
            er = ey(),
            eu = tv(),
            ei = eV()('iterator');
          O.exports = function (e) {
            if (!er(e)) return en(e, ei) || en(e, '@@iterator') || eu[et(e)];
          };
        })),
        (tS = ei((e, O) => {
          var et = ep(),
            en = eP(),
            er = ez(),
            eu = ew(),
            ei = tb(),
            ea = TypeError;
          O.exports = function (e, O) {
            var es = arguments.length < 2 ? ei(e) : O;
            if (en(es)) return er(et(es, e));
            throw ea(eu(e) + ' is not iterable');
          };
        })),
        (tT = ei((e, O) => {
          var et = ep(),
            en = ez(),
            er = ek();
          O.exports = function (e, O, eu) {
            var ei, ea;
            en(e);
            try {
              if (!(ei = er(e, 'return'))) {
                if ('throw' === O) throw eu;
                return eu;
              }
              ei = et(ei, e);
            } catch (e) {
              (ea = !0), (ei = e);
            }
            if ('throw' === O) throw eu;
            if (ea) throw ei;
            return en(ei), eu;
          };
        })),
        (tB = ei((e, O) => {
          var et = tf(),
            en = ep(),
            er = ez(),
            eu = ew(),
            ei = tx(),
            ea = e4(),
            es = ex(),
            eo = tS(),
            el = tb(),
            ec = tT(),
            ed = TypeError,
            br = function (e, O) {
              (this.stopped = e), (this.result = O);
            },
            eD = br.prototype;
          O.exports = function (e, O, ep) {
            var ef,
              eg,
              ey,
              eh,
              eE,
              eC,
              eF,
              eA = ep && ep.that,
              ev = !!(ep && ep.AS_ENTRIES),
              ex = !!(ep && ep.IS_RECORD),
              eb = !!(ep && ep.IS_ITERATOR),
              eS = !!(ep && ep.INTERRUPTED),
              eT = et(O, eA),
              _ = function (e) {
                return ef && ec(ef, 'normal', e), new br(!0, e);
              },
              w = function (e) {
                return ev ? (er(e), eS ? eT(e[0], e[1], _) : eT(e[0], e[1])) : eS ? eT(e, _) : eT(e);
              };
            if (ex) ef = e.iterator;
            else if (eb) ef = e;
            else {
              if (!(eg = el(e))) throw ed(eu(e) + ' is not iterable');
              if (ei(eg)) {
                for (ey = 0, eh = ea(e); eh > ey; ey++) if ((eE = w(e[ey])) && es(eD, eE)) return eE;
                return new br(!1);
              }
              ef = eo(e, eg);
            }
            for (eC = ex ? e.next : ef.next; !(eF = en(eC, ef)).done; ) {
              try {
                eE = w(eF.value);
              } catch (e) {
                ec(ef, 'throw', e);
              }
              if ('object' == typeof eE && eE && es(eD, eE)) return eE;
            }
            return new br(!1);
          };
        })),
        (tN = ei((e, O) => {
          var et = eq(),
            en = eX(),
            er = ed();
          O.exports = function (e, O, eu) {
            var ei = et(O);
            ei in e ? en.f(e, ei, er(0, eu)) : (e[ei] = eu);
          };
        })),
        (tw = ei(() => {
          var e = tp(),
            O = tB(),
            et = tN();
          e(
            { target: 'Object', stat: !0 },
            {
              fromEntries: function (e) {
                var en = {};
                return (
                  O(
                    e,
                    function (e, O) {
                      et(en, e, O);
                    },
                    { AS_ENTRIES: !0 }
                  ),
                  en
                );
              }
            }
          );
        })),
        (tP = ei((e, O) => {
          var et = e3(),
            en = eX();
          O.exports = function (e, O, er) {
            return er.get && et(er.get, O, { getter: !0 }), er.set && et(er.set, O, { setter: !0 }), en.f(e, O, er);
          };
        })),
        (tk = ei((e, O) => {
          var et = ez();
          O.exports = function () {
            var e = et(this),
              O = '';
            return (
              e.hasIndices && (O += 'd'),
              e.global && (O += 'g'),
              e.ignoreCase && (O += 'i'),
              e.multiline && (O += 'm'),
              e.dotAll && (O += 's'),
              e.unicode && (O += 'u'),
              e.unicodeSets && (O += 'v'),
              e.sticky && (O += 'y'),
              O
            );
          };
        })),
        (tj = ei(() => {
          var e = ea(),
            O = eo(),
            et = tP(),
            en = tk(),
            er = es(),
            eu = e.RegExp,
            ei = eu.prototype;
          O &&
            er(function () {
              var e = !0;
              try {
                eu('.', 'd');
              } catch {
                e = !1;
              }
              var O = {},
                et = '',
                en = e ? 'dgimsy' : 'gimsy',
                a = function (e, en) {
                  Object.defineProperty(O, e, {
                    get: function () {
                      return (et += en), !0;
                    }
                  });
                },
                er = { dotAll: 's', global: 'g', ignoreCase: 'i', multiline: 'm', sticky: 'y' };
              for (var ea in (e && (er.hasIndices = 'd'), er)) a(ea, er[ea]);
              return Object.getOwnPropertyDescriptor(ei, 'flags').get.call(O) !== en || et !== en;
            }) &&
            et(ei, 'flags', { configurable: !0, get: en });
        })),
        (tI = ei(() => {
          var e = tp(),
            O = ea();
          e({ global: !0, forced: O.globalThis !== O }, { globalThis: O });
        })),
        (tO = ei(() => {
          tI();
        })),
        (tL = ei(() => {
          var e = tp(),
            O = tg(),
            et = eM(),
            en = e4(),
            er = e7(),
            eu = tF();
          e(
            { target: 'Array', proto: !0 },
            {
              flat: function () {
                var e = arguments.length ? arguments[0] : void 0,
                  ei = et(this),
                  ea = en(ei),
                  es = eu(ei, 0);
                return (es.length = O(es, ei, ei, ea, 0, void 0 === e ? 1 : er(e))), es;
              }
            }
          );
        })),
        ei((et, ei) => {
          var ea = ['cliName', 'cliCategory', 'cliDescription'],
            es = ['_'],
            eo = ['languageId'];
          function Hn(e, O) {
            if (null == e) return {};
            var et,
              en,
              er = ED(e, O);
            if (Object.getOwnPropertySymbols) {
              var eu = Object.getOwnPropertySymbols(e);
              for (en = 0; en < eu.length; en++)
                (et = eu[en]),
                  !(O.indexOf(et) >= 0) && Object.prototype.propertyIsEnumerable.call(e, et) && (er[et] = e[et]);
            }
            return er;
          }
          function ED(e, O) {
            if (null == e) return {};
            var et,
              en,
              er = {},
              eu = Object.keys(e);
            for (en = 0; en < eu.length; en++) (et = eu[en]), O.indexOf(et) >= 0 || (er[et] = e[et]);
            return er;
          }
          tA(), tw(), tj(), tO(), tL();
          var el,
            ep = Object.create,
            ec = Object.defineProperty,
            ed = Object.getOwnPropertyDescriptor,
            eD = Object.getOwnPropertyNames,
            ef = Object.getPrototypeOf,
            eg = Object.prototype.hasOwnProperty,
            ht = (e, O) =>
              function () {
                return e && (O = (0, e[eD(e)[0]])((e = 0))), O;
              },
            te = (e, O) =>
              function () {
                return O || (0, e[eD(e)[0]])((O = { exports: {} }).exports, O), O.exports;
              },
            Kt = (e, O) => {
              for (var et in O) ec(e, et, { get: O[et], enumerable: !0 });
            },
            Pa = (e, O, et, en) => {
              if ((O && 'object' == typeof O) || 'function' == typeof O)
                for (let er of eD(O))
                  eg.call(e, er) ||
                    er === et ||
                    ec(e, er, { get: () => O[er], enumerable: !(en = ed(O, er)) || en.enumerable });
              return e;
            },
            bD = (e, O, et) => (
              (et = null != e ? ep(ef(e)) : {}),
              Pa(!O && e && e.__esModule ? et : ec(et, 'default', { value: e, enumerable: !0 }), e)
            ),
            ft = (e) => Pa(ec({}, '__esModule', { value: !0 }), e),
            ey = ht({
              '<define:process>'() {
                el = { env: {}, argv: [] };
              }
            }),
            eh = te({
              'package.json'(e, O) {
                O.exports = { version: '2.8.8' };
              }
            }),
            eE = te({
              'node_modules/diff/lib/diff/base.js'(e) {
                function r() {}
                function t(e, O, et, en, er) {
                  for (var eu = 0, ei = O.length, ea = 0, es = 0; eu < ei; eu++) {
                    var eo = O[eu];
                    if (eo.removed) {
                      if (((eo.value = e.join(en.slice(es, es + eo.count))), (es += eo.count), eu && O[eu - 1].added)) {
                        var el = O[eu - 1];
                        (O[eu - 1] = O[eu]), (O[eu] = el);
                      }
                    } else {
                      if (!eo.added && er) {
                        var ep = et.slice(ea, ea + eo.count);
                        (ep = ep.map(function (e, O) {
                          var et = en[es + O];
                          return et.length > e.length ? et : e;
                        })),
                          (eo.value = e.join(ep));
                      } else eo.value = e.join(et.slice(ea, ea + eo.count));
                      (ea += eo.count), eo.added || (es += eo.count);
                    }
                  }
                  var ec = O[ei - 1];
                  return (
                    ei > 1 &&
                      'string' == typeof ec.value &&
                      (ec.added || ec.removed) &&
                      e.equals('', ec.value) &&
                      ((O[ei - 2].value += ec.value), O.pop()),
                    O
                  );
                }
                function s(e) {
                  return { newPos: e.newPos, components: e.components.slice(0) };
                }
                ey(),
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.default = r),
                  (r.prototype = {
                    diff: function (e, O) {
                      var et = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        en = et.callback;
                      'function' == typeof et && ((en = et), (et = {})), (this.options = et);
                      var er = this;
                      function y(e) {
                        return en
                          ? (setTimeout(function () {
                              en(void 0, e);
                            }, 0),
                            !0)
                          : e;
                      }
                      (e = this.castInput(e)), (O = this.castInput(O)), (e = this.removeEmpty(this.tokenize(e)));
                      var eu = (O = this.removeEmpty(this.tokenize(O))).length,
                        ei = e.length,
                        ea = 1,
                        es = eu + ei,
                        eo = [{ newPos: -1, components: [] }],
                        el = this.extractCommon(eo[0], O, e, 0);
                      if (eo[0].newPos + 1 >= eu && el + 1 >= ei) return y([{ value: this.join(O), count: O.length }]);
                      function w() {
                        for (var et = -1 * ea; et <= ea; et += 2) {
                          var en = void 0,
                            es = eo[et - 1],
                            el = eo[et + 1],
                            ep = (el ? el.newPos : 0) - et;
                          es && (eo[et - 1] = void 0);
                          var ec = es && es.newPos + 1 < eu,
                            ed = el && 0 <= ep && ep < ei;
                          if (!ec && !ed) {
                            eo[et] = void 0;
                            continue;
                          }
                          if (
                            (!ec || (ed && es.newPos < el.newPos)
                              ? ((en = s(el)), er.pushComponent(en.components, void 0, !0))
                              : ((en = es), en.newPos++, er.pushComponent(en.components, !0, void 0)),
                            (ep = er.extractCommon(en, O, e, et)),
                            en.newPos + 1 >= eu && ep + 1 >= ei)
                          )
                            return y(t(er, en.components, O, e, er.useLongestToken));
                          eo[et] = en;
                        }
                        ea++;
                      }
                      if (en)
                        !(function N() {
                          setTimeout(function () {
                            if (ea > es) return en();
                            w() || N();
                          }, 0);
                        })();
                      else
                        for (; ea <= es; ) {
                          var ep = w();
                          if (ep) return ep;
                        }
                    },
                    pushComponent: function (e, O, et) {
                      var en = e[e.length - 1];
                      en && en.added === O && en.removed === et
                        ? (e[e.length - 1] = { count: en.count + 1, added: O, removed: et })
                        : e.push({ count: 1, added: O, removed: et });
                    },
                    extractCommon: function (e, O, et, en) {
                      for (
                        var er = O.length, eu = et.length, ei = e.newPos, ea = ei - en, es = 0;
                        ei + 1 < er && ea + 1 < eu && this.equals(O[ei + 1], et[ea + 1]);

                      )
                        ei++, ea++, es++;
                      return es && e.components.push({ count: es }), (e.newPos = ei), ea;
                    },
                    equals: function (e, O) {
                      return this.options.comparator
                        ? this.options.comparator(e, O)
                        : e === O || (this.options.ignoreCase && e.toLowerCase() === O.toLowerCase());
                    },
                    removeEmpty: function (e) {
                      for (var O = [], et = 0; et < e.length; et++) e[et] && O.push(e[et]);
                      return O;
                    },
                    castInput: function (e) {
                      return e;
                    },
                    tokenize: function (e) {
                      return e.split('');
                    },
                    join: function (e) {
                      return e.join('');
                    }
                  });
              }
            }),
            eC = te({
              'node_modules/diff/lib/diff/array.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 }), (e.diffArrays = a), (e.arrayDiff = void 0);
                var O,
                  et = new ((O = eE()) && O.__esModule ? O : { default: O }).default();
                function a(e, O, en) {
                  return et.diff(e, O, en);
                }
                (e.arrayDiff = et),
                  (et.tokenize = function (e) {
                    return e.slice();
                  }),
                  (et.join = et.removeEmpty =
                    function (e) {
                      return e;
                    });
              }
            }),
            eF = te({
              'src/document/doc-builders.js'(e, O) {
                function t(e) {
                  return { type: 'concat', parts: e };
                }
                function s(e) {
                  return { type: 'indent', contents: e };
                }
                function a(e, O) {
                  return { type: 'align', contents: O, n: e };
                }
                function n(e) {
                  let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return {
                    type: 'group',
                    id: O.id,
                    contents: e,
                    break: !!O.shouldBreak,
                    expandedStates: O.expandedStates
                  };
                }
                function u(e) {
                  return a(Number.NEGATIVE_INFINITY, e);
                }
                function i(e) {
                  return a({ type: 'root' }, e);
                }
                function l(e) {
                  return a(-1, e);
                }
                function p(e, O) {
                  return n(e[0], Object.assign(Object.assign({}, O), {}, { expandedStates: e }));
                }
                function y(e) {
                  return { type: 'fill', parts: e };
                }
                function h(e, O) {
                  let et = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  return { type: 'if-break', breakContents: e, flatContents: O, groupId: et.groupId };
                }
                function g(e, O) {
                  return { type: 'indent-if-break', contents: e, groupId: O.groupId, negate: O.negate };
                }
                function c(e) {
                  return { type: 'line-suffix', contents: e };
                }
                ey();
                var et = { type: 'break-parent' },
                  en = { type: 'line', hard: !0 },
                  er = { type: 'line', hard: !0, literal: !0 },
                  eu = t([en, et]),
                  ei = t([er, et]),
                  ea = { type: 'cursor', placeholder: Symbol('cursor') };
                function D(e, O) {
                  let et = [];
                  for (let en = 0; en < O.length; en++) 0 !== en && et.push(e), et.push(O[en]);
                  return t(et);
                }
                function T(e, O, et) {
                  let en = e;
                  if (O > 0) {
                    for (let e = 0; e < Math.floor(O / et); ++e) en = s(en);
                    (en = a(O % et, en)), (en = a(Number.NEGATIVE_INFINITY, en));
                  }
                  return en;
                }
                function m(e, O) {
                  return { type: 'label', label: e, contents: O };
                }
                O.exports = {
                  concat: t,
                  join: D,
                  line: { type: 'line' },
                  softline: { type: 'line', soft: !0 },
                  hardline: eu,
                  literalline: ei,
                  group: n,
                  conditionalGroup: p,
                  fill: y,
                  lineSuffix: c,
                  lineSuffixBoundary: { type: 'line-suffix-boundary' },
                  cursor: ea,
                  breakParent: et,
                  ifBreak: h,
                  trim: { type: 'trim' },
                  indent: s,
                  indentIfBreak: g,
                  align: a,
                  addAlignmentToDoc: T,
                  markAsRoot: i,
                  dedentToRoot: u,
                  dedent: l,
                  hardlineWithoutBreakParent: en,
                  literallineWithoutBreakParent: er,
                  label: m
                };
              }
            }),
            eA = te({
              'src/common/end-of-line.js'(e, O) {
                function t(e) {
                  let O = e.indexOf('\r');
                  return O >= 0
                    ? e.charAt(O + 1) ===
                      `
`
                      ? 'crlf'
                      : 'cr'
                    : 'lf';
                }
                function s(e) {
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
                function a(e, O) {
                  let et;
                  switch (O) {
                    case `
`:
                      et = /\n/g;
                      break;
                    case '\r':
                      et = /\r/g;
                      break;
                    case `\r
`:
                      et = /\r\n/g;
                      break;
                    default:
                      throw Error(`Unexpected "eol" ${JSON.stringify(O)}.`);
                  }
                  let en = e.match(et);
                  return en ? en.length : 0;
                }
                function n(e) {
                  return e.replace(
                    /\r\n?/g,
                    `
`
                  );
                }
                ey(),
                  (O.exports = {
                    guessEndOfLine: t,
                    convertEndOfLineToChars: s,
                    countEndOfLineChars: a,
                    normalizeEndOfLine: n
                  });
              }
            }),
            ev = te({
              'src/utils/get-last.js'(e, O) {
                ey(), (O.exports = (e) => e[e.length - 1]);
              }
            });
          function ND() {
            let { onlyFirst: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return RegExp(
              '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
              e ? void 0 : 'g'
            );
          }
          var ex = ht({
            'node_modules/strip-ansi/node_modules/ansi-regex/index.js'() {
              ey();
            }
          });
          function _D(e) {
            if ('string' != typeof e) throw TypeError(`Expected a \`string\`, got \`${typeof e}\``);
            return e.replace(ND(), '');
          }
          var eb = ht({
            'node_modules/strip-ansi/index.js'() {
              ey(), ex();
            }
          });
          function ID(e) {
            return (
              !!Number.isInteger(e) &&
              e >= 4352 &&
              (e <= 4447 ||
                9001 === e ||
                9002 === e ||
                (11904 <= e && e <= 12871 && 12351 !== e) ||
                (12880 <= e && e <= 19903) ||
                (19968 <= e && e <= 42182) ||
                (43360 <= e && e <= 43388) ||
                (44032 <= e && e <= 55203) ||
                (63744 <= e && e <= 64255) ||
                (65040 <= e && e <= 65049) ||
                (65072 <= e && e <= 65131) ||
                (65281 <= e && e <= 65376) ||
                (65504 <= e && e <= 65510) ||
                (110592 <= e && e <= 110593) ||
                (127488 <= e && e <= 127569) ||
                (131072 <= e && e <= 262141))
            );
          }
          var eS = ht({
              'node_modules/is-fullwidth-code-point/index.js'() {
                ey();
              }
            }),
            eT = te({
              'node_modules/emoji-regex/index.js'(e, O) {
                ey(),
                  (O.exports = function () {
                    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
                  });
              }
            }),
            eB = {};
          function OD(e) {
            if ('string' != typeof e || 0 === e.length || 0 === (e = _D(e)).length) return 0;
            e = e.replace((0, eN.default)(), '  ');
            let O = 0;
            for (let et = 0; et < e.length; et++) {
              let en = e.codePointAt(et);
              en <= 31 ||
                (en >= 127 && en <= 159) ||
                (en >= 768 && en <= 879) ||
                (en > 65535 && et++, (O += ID(en) ? 2 : 1));
            }
            return O;
          }
          Kt(eB, { default: () => OD });
          var eN,
            ew = ht({
              'node_modules/string-width/index.js'() {
                ey(), eb(), eS(), (eN = bD(eT()));
              }
            }),
            eP = te({
              'src/utils/get-string-width.js'(e, O) {
                ey();
                var et = (ew(), ft(eB)).default,
                  en = /[^\x20-\x7F]/;
                function a(e) {
                  return e ? (en.test(e) ? et(e) : e.length) : 0;
                }
                O.exports = a;
              }
            }),
            ek = te({
              'src/document/doc-utils.js'(e, O) {
                ey();
                var et = ev(),
                  { literalline: en, join: er } = eF(),
                  n = (e) => Array.isArray(e) || (e && 'concat' === e.type),
                  u = (e) => {
                    if (Array.isArray(e)) return e;
                    if ('concat' !== e.type && 'fill' !== e.type)
                      throw Error('Expect doc type to be `concat` or `fill`.');
                    return e.parts;
                  },
                  eu = {};
                function l(e, O, et, en) {
                  let er = [e];
                  for (; er.length > 0; ) {
                    let e = er.pop();
                    if (e === eu) {
                      et(er.pop());
                      continue;
                    }
                    if ((et && er.push(e, eu), !O || !1 !== O(e))) {
                      if (n(e) || 'fill' === e.type) {
                        let O = u(e);
                        for (let e = O.length, et = e - 1; et >= 0; --et) er.push(O[et]);
                      } else if ('if-break' === e.type)
                        e.flatContents && er.push(e.flatContents), e.breakContents && er.push(e.breakContents);
                      else if ('group' === e.type && e.expandedStates) {
                        if (en)
                          for (let O = e.expandedStates.length, et = O - 1; et >= 0; --et)
                            er.push(e.expandedStates[et]);
                        else er.push(e.contents);
                      } else e.contents && er.push(e.contents);
                    }
                  }
                }
                function p(e, O) {
                  let et = new Map();
                  return S(e);
                  function S(e) {
                    if (et.has(e)) return et.get(e);
                    let O = b(e);
                    return et.set(e, O), O;
                  }
                  function b(e) {
                    if (Array.isArray(e)) return O(e.map(S));
                    if ('concat' === e.type || 'fill' === e.type) {
                      let et = e.parts.map(S);
                      return O(Object.assign(Object.assign({}, e), {}, { parts: et }));
                    }
                    if ('if-break' === e.type) {
                      let et = e.breakContents && S(e.breakContents),
                        en = e.flatContents && S(e.flatContents);
                      return O(Object.assign(Object.assign({}, e), {}, { breakContents: et, flatContents: en }));
                    }
                    if ('group' === e.type && e.expandedStates) {
                      let et = e.expandedStates.map(S),
                        en = et[0];
                      return O(Object.assign(Object.assign({}, e), {}, { contents: en, expandedStates: et }));
                    }
                    if (e.contents) {
                      let et = S(e.contents);
                      return O(Object.assign(Object.assign({}, e), {}, { contents: et }));
                    }
                    return O(e);
                  }
                }
                function y(e, O, et) {
                  let en = et,
                    er = !1;
                  return (
                    l(e, function (e) {
                      let et = O(e);
                      if ((void 0 !== et && ((er = !0), (en = et)), er)) return !1;
                    }),
                    en
                  );
                }
                function h(e) {
                  if (('group' === e.type && e.break) || ('line' === e.type && e.hard) || 'break-parent' === e.type)
                    return !0;
                }
                function g(e) {
                  return y(e, h, !1);
                }
                function c(e) {
                  if (e.length > 0) {
                    let O = et(e);
                    O.expandedStates || O.break || (O.break = 'propagated');
                  }
                  return null;
                }
                function f(e) {
                  let O = new Set(),
                    et = [];
                  l(
                    e,
                    function (e) {
                      if (('break-parent' === e.type && c(et), 'group' === e.type)) {
                        if ((et.push(e), O.has(e))) return !1;
                        O.add(e);
                      }
                    },
                    function (e) {
                      'group' === e.type && et.pop().break && c(et);
                    },
                    !0
                  );
                }
                function F(e) {
                  return 'line' !== e.type || e.hard
                    ? 'if-break' === e.type
                      ? e.flatContents || ''
                      : e
                    : e.soft
                    ? ''
                    : ' ';
                }
                function _(e) {
                  return p(e, F);
                }
                var w = (e, O) => e && 'line' === e.type && e.hard && O && 'break-parent' === O.type;
                function E(e) {
                  if (!e) return e;
                  if (n(e) || 'fill' === e.type) {
                    let O = u(e);
                    for (; O.length > 1 && w(...O.slice(-2)); ) O.length -= 2;
                    if (O.length > 0) {
                      let e = E(et(O));
                      O[O.length - 1] = e;
                    }
                    return Array.isArray(e) ? O : Object.assign(Object.assign({}, e), {}, { parts: O });
                  }
                  switch (e.type) {
                    case 'align':
                    case 'indent':
                    case 'indent-if-break':
                    case 'group':
                    case 'line-suffix':
                    case 'label': {
                      let O = E(e.contents);
                      return Object.assign(Object.assign({}, e), {}, { contents: O });
                    }
                    case 'if-break': {
                      let O = E(e.breakContents),
                        et = E(e.flatContents);
                      return Object.assign(Object.assign({}, e), {}, { breakContents: O, flatContents: et });
                    }
                  }
                  return e;
                }
                function N(e) {
                  return E(I(e));
                }
                function x(e) {
                  switch (e.type) {
                    case 'fill':
                      if (e.parts.every((e) => '' === e)) return '';
                      break;
                    case 'group':
                      if (!e.contents && !e.id && !e.break && !e.expandedStates) return '';
                      if (
                        'group' === e.contents.type &&
                        e.contents.id === e.id &&
                        e.contents.break === e.break &&
                        e.contents.expandedStates === e.expandedStates
                      )
                        return e.contents;
                      break;
                    case 'align':
                    case 'indent':
                    case 'indent-if-break':
                    case 'line-suffix':
                      if (!e.contents) return '';
                      break;
                    case 'if-break':
                      if (!e.flatContents && !e.breakContents) return '';
                  }
                  if (!n(e)) return e;
                  let O = [];
                  for (let en of u(e)) {
                    if (!en) continue;
                    let [e, ...er] = n(en) ? u(en) : [en];
                    'string' == typeof e && 'string' == typeof et(O) ? (O[O.length - 1] += e) : O.push(e),
                      O.push(...er);
                  }
                  return 0 === O.length
                    ? ''
                    : 1 === O.length
                    ? O[0]
                    : Array.isArray(e)
                    ? O
                    : Object.assign(Object.assign({}, e), {}, { parts: O });
                }
                function I(e) {
                  return p(e, (e) => x(e));
                }
                function P(e) {
                  let O = [],
                    en = e.filter(Boolean);
                  for (; en.length > 0; ) {
                    let e = en.shift();
                    if (e) {
                      if (n(e)) {
                        en.unshift(...u(e));
                        continue;
                      }
                      if (O.length > 0 && 'string' == typeof et(O) && 'string' == typeof e) {
                        O[O.length - 1] += e;
                        continue;
                      }
                      O.push(e);
                    }
                  }
                  return O;
                }
                function $(e) {
                  return p(e, (e) =>
                    Array.isArray(e)
                      ? P(e)
                      : e.parts
                      ? Object.assign(Object.assign({}, e), {}, { parts: P(e.parts) })
                      : e
                  );
                }
                function D(e) {
                  return p(e, (e) =>
                    'string' == typeof e &&
                    e.includes(`
`)
                      ? T(e)
                      : e
                  );
                }
                function T(e) {
                  let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : en;
                  return er(
                    O,
                    e.split(`
`)
                  ).parts;
                }
                function m(e) {
                  if ('line' === e.type) return !0;
                }
                function C(e) {
                  return y(e, m, !1);
                }
                O.exports = {
                  isConcat: n,
                  getDocParts: u,
                  willBreak: g,
                  traverseDoc: l,
                  findInDoc: y,
                  mapDoc: p,
                  propagateBreaks: f,
                  removeLines: _,
                  stripTrailingHardline: N,
                  normalizeParts: P,
                  normalizeDoc: $,
                  cleanDoc: I,
                  replaceTextEndOfLine: T,
                  replaceEndOfLine: D,
                  canBreak: C
                };
              }
            }),
            ej = te({
              'src/document/doc-printer.js'(e, O) {
                ey();
                var et,
                  { convertEndOfLineToChars: en } = eA(),
                  er = ev(),
                  eu = eP(),
                  { fill: ei, cursor: ea, indent: es } = eF(),
                  { isConcat: eo, getDocParts: el } = ek();
                function c() {
                  return { value: '', length: 0, queue: [] };
                }
                function f(e, O) {
                  return _(e, { type: 'indent' }, O);
                }
                function F(e, O, et) {
                  return O === Number.NEGATIVE_INFINITY
                    ? e.root || c()
                    : O < 0
                    ? _(e, { type: 'dedent' }, et)
                    : O
                    ? 'root' === O.type
                      ? Object.assign(Object.assign({}, e), {}, { root: e })
                      : _(e, { type: 'string' == typeof O ? 'stringAlign' : 'numberAlign', n: O }, et)
                    : e;
                }
                function _(e, O, et) {
                  let en = 'dedent' === O.type ? e.queue.slice(0, -1) : [...e.queue, O],
                    er = '',
                    eu = 0,
                    ei = 0,
                    ea = 0;
                  for (let e of en)
                    switch (e.type) {
                      case 'indent':
                        v(), et.useTabs ? o(1) : d(et.tabWidth);
                        break;
                      case 'stringAlign':
                        v(), (er += e.n), (eu += e.n.length);
                        break;
                      case 'numberAlign':
                        (ei += 1), (ea += e.n);
                        break;
                      default:
                        throw Error(`Unexpected type '${e.type}'`);
                    }
                  return b(), Object.assign(Object.assign({}, e), {}, { value: er, length: eu, queue: en });
                  function o(e) {
                    (er += '	'.repeat(e)), (eu += et.tabWidth * e);
                  }
                  function d(e) {
                    (er += ' '.repeat(e)), (eu += e);
                  }
                  function v() {
                    et.useTabs ? S() : b();
                  }
                  function S() {
                    ei > 0 && o(ei), (ei = 0), (ea = 0);
                  }
                  function b() {
                    ea > 0 && d(ea), (ei = 0), (ea = 0);
                  }
                }
                function w(e) {
                  if (0 === e.length) return 0;
                  let O = 0;
                  for (; e.length > 0 && 'string' == typeof er(e) && /^[\t ]*$/.test(er(e)); ) O += e.pop().length;
                  if (e.length > 0 && 'string' == typeof er(e)) {
                    let et = er(e).replace(/[\t ]*$/, '');
                    (O += er(e).length - et.length), (e[e.length - 1] = et);
                  }
                  return O;
                }
                function E(e, O, en, ei, ea) {
                  let es = O.length,
                    ep = [e],
                    ec = [];
                  for (; en >= 0; ) {
                    if (0 === ep.length) {
                      if (0 === es) return !0;
                      ep.push(O[--es]);
                      continue;
                    }
                    let { mode: e, doc: ed } = ep.pop();
                    if ('string' == typeof ed) ec.push(ed), (en -= eu(ed));
                    else if (eo(ed) || 'fill' === ed.type) {
                      let O = el(ed);
                      for (let et = O.length - 1; et >= 0; et--) ep.push({ mode: e, doc: O[et] });
                    } else
                      switch (ed.type) {
                        case 'indent':
                        case 'align':
                        case 'indent-if-break':
                        case 'label':
                          ep.push({ mode: e, doc: ed.contents });
                          break;
                        case 'trim':
                          en += w(ec);
                          break;
                        case 'group': {
                          if (ea && ed.break) return !1;
                          let O = ed.break ? 1 : e,
                            et = ed.expandedStates && 1 === O ? er(ed.expandedStates) : ed.contents;
                          ep.push({ mode: O, doc: et });
                          break;
                        }
                        case 'if-break': {
                          let O = (ed.groupId ? et[ed.groupId] || 2 : e) === 1 ? ed.breakContents : ed.flatContents;
                          O && ep.push({ mode: e, doc: O });
                          break;
                        }
                        case 'line':
                          if (1 === e || ed.hard) return !0;
                          ed.soft || (ec.push(' '), en--);
                          break;
                        case 'line-suffix':
                          ei = !0;
                          break;
                        case 'line-suffix-boundary':
                          if (ei) return !1;
                      }
                  }
                  return !1;
                }
                function N(e, O) {
                  et = {};
                  let ep = O.printWidth,
                    ec = en(O.endOfLine),
                    ed = 0,
                    eD = [{ ind: c(), mode: 1, doc: e }],
                    ef = [],
                    eg = !1,
                    ey = [];
                  for (; eD.length > 0; ) {
                    let { ind: e, mode: en, doc: eh } = eD.pop();
                    if ('string' == typeof eh) {
                      let e =
                        ec !==
                        `
`
                          ? eh.replace(/\n/g, ec)
                          : eh;
                      ef.push(e), (ed += eu(e));
                    } else if (eo(eh)) {
                      let O = el(eh);
                      for (let et = O.length - 1; et >= 0; et--) eD.push({ ind: e, mode: en, doc: O[et] });
                    } else
                      switch (eh.type) {
                        case 'cursor':
                          ef.push(ea.placeholder);
                          break;
                        case 'indent':
                          eD.push({ ind: f(e, O), mode: en, doc: eh.contents });
                          break;
                        case 'align':
                          eD.push({ ind: F(e, eh.n, O), mode: en, doc: eh.contents });
                          break;
                        case 'trim':
                          ed -= w(ef);
                          break;
                        case 'group':
                          switch (en) {
                            case 2:
                              if (!eg) {
                                eD.push({ ind: e, mode: eh.break ? 1 : 2, doc: eh.contents });
                                break;
                              }
                            case 1: {
                              eg = !1;
                              let O = { ind: e, mode: 2, doc: eh.contents },
                                et = ep - ed,
                                en = ey.length > 0;
                              if (!eh.break && E(O, eD, et, en)) eD.push(O);
                              else if (eh.expandedStates) {
                                let O = er(eh.expandedStates);
                                if (eh.break) eD.push({ ind: e, mode: 1, doc: O });
                                else
                                  for (let er = 1; er < eh.expandedStates.length + 1; er++)
                                    if (er >= eh.expandedStates.length) {
                                      eD.push({ ind: e, mode: 1, doc: O });
                                      break;
                                    } else {
                                      let O = { ind: e, mode: 2, doc: eh.expandedStates[er] };
                                      if (E(O, eD, et, en)) {
                                        eD.push(O);
                                        break;
                                      }
                                    }
                              } else eD.push({ ind: e, mode: 1, doc: eh.contents });
                            }
                          }
                          eh.id && (et[eh.id] = er(eD).mode);
                          break;
                        case 'fill': {
                          let O = ep - ed,
                            { parts: et } = eh;
                          if (0 === et.length) break;
                          let [er, eu] = et,
                            ea = { ind: e, mode: 2, doc: er },
                            es = { ind: e, mode: 1, doc: er },
                            eo = E(ea, [], O, ey.length > 0, !0);
                          if (1 === et.length) {
                            eo ? eD.push(ea) : eD.push(es);
                            break;
                          }
                          let el = { ind: e, mode: 2, doc: eu },
                            ec = { ind: e, mode: 1, doc: eu };
                          if (2 === et.length) {
                            eo ? eD.push(el, ea) : eD.push(ec, es);
                            break;
                          }
                          et.splice(0, 2);
                          let ef = { ind: e, mode: en, doc: ei(et) };
                          E({ ind: e, mode: 2, doc: [er, eu, et[0]] }, [], O, ey.length > 0, !0)
                            ? eD.push(ef, el, ea)
                            : eo
                            ? eD.push(ef, ec, ea)
                            : eD.push(ef, ec, es);
                          break;
                        }
                        case 'if-break':
                        case 'indent-if-break': {
                          let O = eh.groupId ? et[eh.groupId] : en;
                          if (1 === O) {
                            let O =
                              'if-break' === eh.type ? eh.breakContents : eh.negate ? eh.contents : es(eh.contents);
                            O && eD.push({ ind: e, mode: en, doc: O });
                          }
                          if (2 === O) {
                            let O =
                              'if-break' === eh.type ? eh.flatContents : eh.negate ? es(eh.contents) : eh.contents;
                            O && eD.push({ ind: e, mode: en, doc: O });
                          }
                          break;
                        }
                        case 'line-suffix':
                          ey.push({ ind: e, mode: en, doc: eh.contents });
                          break;
                        case 'line-suffix-boundary':
                          ey.length > 0 && eD.push({ ind: e, mode: en, doc: { type: 'line', hard: !0 } });
                          break;
                        case 'line':
                          switch (en) {
                            case 2:
                              if (eh.hard) eg = !0;
                              else {
                                eh.soft || (ef.push(' '), (ed += 1));
                                break;
                              }
                            case 1:
                              if (ey.length > 0) {
                                eD.push({ ind: e, mode: en, doc: eh }, ...ey.reverse()), (ey.length = 0);
                                break;
                              }
                              eh.literal
                                ? e.root
                                  ? (ef.push(ec, e.root.value), (ed = e.root.length))
                                  : (ef.push(ec), (ed = 0))
                                : ((ed -= w(ef)), ef.push(ec + e.value), (ed = e.length));
                          }
                          break;
                        case 'label':
                          eD.push({ ind: e, mode: en, doc: eh.contents });
                      }
                    0 === eD.length && ey.length > 0 && (eD.push(...ey.reverse()), (ey.length = 0));
                  }
                  let eh = ef.indexOf(ea.placeholder);
                  if (-1 !== eh) {
                    let e = ef.indexOf(ea.placeholder, eh + 1),
                      O = ef.slice(0, eh).join(''),
                      et = ef.slice(eh + 1, e).join('');
                    return {
                      formatted: O + et + ef.slice(e + 1).join(''),
                      cursorNodeStart: O.length,
                      cursorNodeText: et
                    };
                  }
                  return { formatted: ef.join('') };
                }
                O.exports = { printDocToString: N };
              }
            }),
            eI = te({
              'src/document/doc-debug.js'(e, O) {
                ey();
                var { isConcat: et, getDocParts: en } = ek();
                function a(e) {
                  if (!e) return '';
                  if (et(e)) {
                    let O = [];
                    for (let er of en(e))
                      if (et(er)) O.push(...a(er).parts);
                      else {
                        let e = a(er);
                        '' !== e && O.push(e);
                      }
                    return { type: 'concat', parts: O };
                  }
                  return 'if-break' === e.type
                    ? Object.assign(
                        Object.assign({}, e),
                        {},
                        { breakContents: a(e.breakContents), flatContents: a(e.flatContents) }
                      )
                    : 'group' === e.type
                    ? Object.assign(
                        Object.assign({}, e),
                        {},
                        { contents: a(e.contents), expandedStates: e.expandedStates && e.expandedStates.map(a) }
                      )
                    : 'fill' === e.type
                    ? { type: 'fill', parts: e.parts.map(a) }
                    : e.contents
                    ? Object.assign(Object.assign({}, e), {}, { contents: a(e.contents) })
                    : e;
                }
                function n(e) {
                  let O = Object.create(null),
                    er = new Set();
                  return p(a(e));
                  function p(e, O, er) {
                    if ('string' == typeof e) return JSON.stringify(e);
                    if (et(e)) {
                      let O = en(e).map(p).filter(Boolean);
                      return 1 === O.length ? O[0] : `[${O.join(', ')}]`;
                    }
                    if ('line' === e.type) {
                      let et = Array.isArray(er) && er[O + 1] && 'break-parent' === er[O + 1].type;
                      return e.literal
                        ? et
                          ? 'literalline'
                          : 'literallineWithoutBreakParent'
                        : e.hard
                        ? et
                          ? 'hardline'
                          : 'hardlineWithoutBreakParent'
                        : e.soft
                        ? 'softline'
                        : 'line';
                    }
                    if ('break-parent' === e.type)
                      return Array.isArray(er) && er[O - 1] && 'line' === er[O - 1].type && er[O - 1].hard
                        ? void 0
                        : 'breakParent';
                    if ('trim' === e.type) return 'trim';
                    if ('indent' === e.type) return 'indent(' + p(e.contents) + ')';
                    if ('align' === e.type)
                      return e.n === Number.NEGATIVE_INFINITY
                        ? 'dedentToRoot(' + p(e.contents) + ')'
                        : e.n < 0
                        ? 'dedent(' + p(e.contents) + ')'
                        : 'root' === e.n.type
                        ? 'markAsRoot(' + p(e.contents) + ')'
                        : 'align(' + JSON.stringify(e.n) + ', ' + p(e.contents) + ')';
                    if ('if-break' === e.type)
                      return (
                        'ifBreak(' +
                        p(e.breakContents) +
                        (e.flatContents ? ', ' + p(e.flatContents) : '') +
                        (e.groupId ? (e.flatContents ? '' : ', ""') + `, { groupId: ${y(e.groupId)} }` : '') +
                        ')'
                      );
                    if ('indent-if-break' === e.type) {
                      let O = [];
                      e.negate && O.push('negate: true'), e.groupId && O.push(`groupId: ${y(e.groupId)}`);
                      let et = O.length > 0 ? `, { ${O.join(', ')} }` : '';
                      return `indentIfBreak(${p(e.contents)}${et})`;
                    }
                    if ('group' === e.type) {
                      let O = [];
                      e.break && 'propagated' !== e.break && O.push('shouldBreak: true'),
                        e.id && O.push(`id: ${y(e.id)}`);
                      let et = O.length > 0 ? `, { ${O.join(', ')} }` : '';
                      return e.expandedStates
                        ? `conditionalGroup([${e.expandedStates.map((e) => p(e)).join(',')}]${et})`
                        : `group(${p(e.contents)}${et})`;
                    }
                    if ('fill' === e.type) return `fill([${e.parts.map((e) => p(e)).join(', ')}])`;
                    if ('line-suffix' === e.type) return 'lineSuffix(' + p(e.contents) + ')';
                    if ('line-suffix-boundary' === e.type) return 'lineSuffixBoundary';
                    if ('label' === e.type) return `label(${JSON.stringify(e.label)}, ${p(e.contents)})`;
                    throw Error('Unknown doc type ' + e.type);
                  }
                  function y(e) {
                    if ('symbol' != typeof e) return JSON.stringify(String(e));
                    if (e in O) return O[e];
                    let et = String(e).slice(7, -1) || 'symbol';
                    for (let en = 0; ; en++) {
                      let eu = et + (en > 0 ? ` #${en}` : '');
                      if (!er.has(eu)) return er.add(eu), (O[e] = `Symbol.for(${JSON.stringify(eu)})`);
                    }
                  }
                }
                O.exports = { printDocToDebug: n };
              }
            }),
            eO = te({
              'src/document/index.js'(e, O) {
                ey(), (O.exports = { builders: eF(), printer: ej(), utils: ek(), debug: eI() });
              }
            }),
            eL = {};
          function RD(e) {
            if ('string' != typeof e) throw TypeError('Expected a string');
            return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
          }
          Kt(eL, { default: () => RD });
          var e_ = ht({
              'node_modules/escape-string-regexp/index.js'() {
                ey();
              }
            }),
            eM = te({
              'node_modules/semver/internal/debug.js'(e, O) {
                ey();
                var et =
                  'object' == typeof el && el.env && el.env.NODE_DEBUG && /\bsemver\b/i.test(el.env.NODE_DEBUG)
                    ? function () {
                        for (var e = arguments.length, O = Array(e), et = 0; et < e; et++) O[et] = arguments[et];
                        return console.error('SEMVER', ...O);
                      }
                    : () => {};
                O.exports = et;
              }
            }),
            e$ = te({
              'node_modules/semver/internal/constants.js'(e, O) {
                ey();
                var et = Number.MAX_SAFE_INTEGER || 9007199254740991;
                O.exports = {
                  SEMVER_SPEC_VERSION: '2.0.0',
                  MAX_LENGTH: 256,
                  MAX_SAFE_INTEGER: et,
                  MAX_SAFE_COMPONENT_LENGTH: 16
                };
              }
            }),
            eR = te({
              'node_modules/semver/internal/re.js'(e, O) {
                ey();
                var { MAX_SAFE_COMPONENT_LENGTH: et } = e$(),
                  en = eM(),
                  er = ((e = O.exports = {}).re = []),
                  eu = (e.src = []),
                  ei = (e.t = {}),
                  ea = 0,
                  l = (e, O, et) => {
                    let es = ea++;
                    en(e, es, O), (ei[e] = es), (eu[es] = O), (er[es] = new RegExp(O, et ? 'g' : void 0));
                  };
                l('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
                  l('NUMERICIDENTIFIERLOOSE', '[0-9]+'),
                  l('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'),
                  l(
                    'MAINVERSION',
                    `(${eu[ei.NUMERICIDENTIFIER]})\\.(${eu[ei.NUMERICIDENTIFIER]})\\.(${eu[ei.NUMERICIDENTIFIER]})`
                  ),
                  l(
                    'MAINVERSIONLOOSE',
                    `(${eu[ei.NUMERICIDENTIFIERLOOSE]})\\.(${eu[ei.NUMERICIDENTIFIERLOOSE]})\\.(${
                      eu[ei.NUMERICIDENTIFIERLOOSE]
                    })`
                  ),
                  l('PRERELEASEIDENTIFIER', `(?:${eu[ei.NUMERICIDENTIFIER]}|${eu[ei.NONNUMERICIDENTIFIER]})`),
                  l('PRERELEASEIDENTIFIERLOOSE', `(?:${eu[ei.NUMERICIDENTIFIERLOOSE]}|${eu[ei.NONNUMERICIDENTIFIER]})`),
                  l('PRERELEASE', `(?:-(${eu[ei.PRERELEASEIDENTIFIER]}(?:\\.${eu[ei.PRERELEASEIDENTIFIER]})*))`),
                  l(
                    'PRERELEASELOOSE',
                    `(?:-?(${eu[ei.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${eu[ei.PRERELEASEIDENTIFIERLOOSE]})*))`
                  ),
                  l('BUILDIDENTIFIER', '[0-9A-Za-z-]+'),
                  l('BUILD', `(?:\\+(${eu[ei.BUILDIDENTIFIER]}(?:\\.${eu[ei.BUILDIDENTIFIER]})*))`),
                  l('FULLPLAIN', `v?${eu[ei.MAINVERSION]}${eu[ei.PRERELEASE]}?${eu[ei.BUILD]}?`),
                  l('FULL', `^${eu[ei.FULLPLAIN]}$`),
                  l('LOOSEPLAIN', `[v=\\s]*${eu[ei.MAINVERSIONLOOSE]}${eu[ei.PRERELEASELOOSE]}?${eu[ei.BUILD]}?`),
                  l('LOOSE', `^${eu[ei.LOOSEPLAIN]}$`),
                  l('GTLT', '((?:<|>)?=?)'),
                  l('XRANGEIDENTIFIERLOOSE', `${eu[ei.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
                  l('XRANGEIDENTIFIER', `${eu[ei.NUMERICIDENTIFIER]}|x|X|\\*`),
                  l(
                    'XRANGEPLAIN',
                    `[v=\\s]*(${eu[ei.XRANGEIDENTIFIER]})(?:\\.(${eu[ei.XRANGEIDENTIFIER]})(?:\\.(${
                      eu[ei.XRANGEIDENTIFIER]
                    })(?:${eu[ei.PRERELEASE]})?${eu[ei.BUILD]}?)?)?`
                  ),
                  l(
                    'XRANGEPLAINLOOSE',
                    `[v=\\s]*(${eu[ei.XRANGEIDENTIFIERLOOSE]})(?:\\.(${eu[ei.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
                      eu[ei.XRANGEIDENTIFIERLOOSE]
                    })(?:${eu[ei.PRERELEASELOOSE]})?${eu[ei.BUILD]}?)?)?`
                  ),
                  l('XRANGE', `^${eu[ei.GTLT]}\\s*${eu[ei.XRANGEPLAIN]}$`),
                  l('XRANGELOOSE', `^${eu[ei.GTLT]}\\s*${eu[ei.XRANGEPLAINLOOSE]}$`),
                  l('COERCE', `(^|[^\\d])(\\d{1,${et}})(?:\\.(\\d{1,${et}}))?(?:\\.(\\d{1,${et}}))?(?:$|[^\\d])`),
                  l('COERCERTL', eu[ei.COERCE], !0),
                  l('LONETILDE', '(?:~>?)'),
                  l('TILDETRIM', `(\\s*)${eu[ei.LONETILDE]}\\s+`, !0),
                  (e.tildeTrimReplace = '$1~'),
                  l('TILDE', `^${eu[ei.LONETILDE]}${eu[ei.XRANGEPLAIN]}$`),
                  l('TILDELOOSE', `^${eu[ei.LONETILDE]}${eu[ei.XRANGEPLAINLOOSE]}$`),
                  l('LONECARET', '(?:\\^)'),
                  l('CARETTRIM', `(\\s*)${eu[ei.LONECARET]}\\s+`, !0),
                  (e.caretTrimReplace = '$1^'),
                  l('CARET', `^${eu[ei.LONECARET]}${eu[ei.XRANGEPLAIN]}$`),
                  l('CARETLOOSE', `^${eu[ei.LONECARET]}${eu[ei.XRANGEPLAINLOOSE]}$`),
                  l('COMPARATORLOOSE', `^${eu[ei.GTLT]}\\s*(${eu[ei.LOOSEPLAIN]})$|^$`),
                  l('COMPARATOR', `^${eu[ei.GTLT]}\\s*(${eu[ei.FULLPLAIN]})$|^$`),
                  l('COMPARATORTRIM', `(\\s*)${eu[ei.GTLT]}\\s*(${eu[ei.LOOSEPLAIN]}|${eu[ei.XRANGEPLAIN]})`, !0),
                  (e.comparatorTrimReplace = '$1$2$3'),
                  l('HYPHENRANGE', `^\\s*(${eu[ei.XRANGEPLAIN]})\\s+-\\s+(${eu[ei.XRANGEPLAIN]})\\s*$`),
                  l('HYPHENRANGELOOSE', `^\\s*(${eu[ei.XRANGEPLAINLOOSE]})\\s+-\\s+(${eu[ei.XRANGEPLAINLOOSE]})\\s*$`),
                  l('STAR', '(<|>)?=?\\s*\\*'),
                  l('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'),
                  l('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
              }
            }),
            eV = te({
              'node_modules/semver/internal/parse-options.js'(e, O) {
                ey();
                var et = ['includePrerelease', 'loose', 'rtl'];
                O.exports = (e) =>
                  e
                    ? 'object' != typeof e
                      ? { loose: !0 }
                      : et.filter((O) => e[O]).reduce((e, O) => ((e[O] = !0), e), {})
                    : {};
              }
            }),
            eW = te({
              'node_modules/semver/internal/identifiers.js'(e, O) {
                ey();
                var et = /^[0-9]+$/,
                  s = (e, O) => {
                    let en = et.test(e),
                      er = et.test(O);
                    return (
                      en && er && ((e = +e), (O = +O)), e === O ? 0 : en && !er ? -1 : er && !en ? 1 : e < O ? -1 : 1
                    );
                  };
                O.exports = { compareIdentifiers: s, rcompareIdentifiers: (e, O) => s(O, e) };
              }
            }),
            eq = te({
              'node_modules/semver/classes/semver.js'(e, O) {
                ey();
                var et = eM(),
                  { MAX_LENGTH: en, MAX_SAFE_INTEGER: er } = e$(),
                  { re: eu, t: ei } = eR(),
                  ea = eV(),
                  { compareIdentifiers: es } = eW(),
                  eo = class {
                    constructor(e, O) {
                      if (((O = ea(O)), e instanceof eo)) {
                        if (!!O.loose === e.loose && !!O.includePrerelease === e.includePrerelease) return e;
                        e = e.version;
                      } else if ('string' != typeof e) throw TypeError(`Invalid Version: ${e}`);
                      if (e.length > en) throw TypeError(`version is longer than ${en} characters`);
                      et('SemVer', e, O),
                        (this.options = O),
                        (this.loose = !!O.loose),
                        (this.includePrerelease = !!O.includePrerelease);
                      let es = e.trim().match(O.loose ? eu[ei.LOOSE] : eu[ei.FULL]);
                      if (!es) throw TypeError(`Invalid Version: ${e}`);
                      if (
                        ((this.raw = e),
                        (this.major = +es[1]),
                        (this.minor = +es[2]),
                        (this.patch = +es[3]),
                        this.major > er || this.major < 0)
                      )
                        throw TypeError('Invalid major version');
                      if (this.minor > er || this.minor < 0) throw TypeError('Invalid minor version');
                      if (this.patch > er || this.patch < 0) throw TypeError('Invalid patch version');
                      es[4]
                        ? (this.prerelease = es[4].split('.').map((e) => {
                            if (/^[0-9]+$/.test(e)) {
                              let O = +e;
                              if (O >= 0 && O < er) return O;
                            }
                            return e;
                          }))
                        : (this.prerelease = []),
                        (this.build = es[5] ? es[5].split('.') : []),
                        this.format();
                    }
                    format() {
                      return (
                        (this.version = `${this.major}.${this.minor}.${this.patch}`),
                        this.prerelease.length && (this.version += `-${this.prerelease.join('.')}`),
                        this.version
                      );
                    }
                    toString() {
                      return this.version;
                    }
                    compare(e) {
                      if ((et('SemVer.compare', this.version, this.options, e), !(e instanceof eo))) {
                        if ('string' == typeof e && e === this.version) return 0;
                        e = new eo(e, this.options);
                      }
                      return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
                    }
                    compareMain(e) {
                      return (
                        e instanceof eo || (e = new eo(e, this.options)),
                        es(this.major, e.major) || es(this.minor, e.minor) || es(this.patch, e.patch)
                      );
                    }
                    comparePre(e) {
                      if (
                        (e instanceof eo || (e = new eo(e, this.options)),
                        this.prerelease.length && !e.prerelease.length)
                      )
                        return -1;
                      if (!this.prerelease.length && e.prerelease.length) return 1;
                      if (!this.prerelease.length && !e.prerelease.length) return 0;
                      let O = 0;
                      do {
                        let en = this.prerelease[O],
                          er = e.prerelease[O];
                        if ((et('prerelease compare', O, en, er), void 0 === en && void 0 === er)) return 0;
                        if (void 0 === er) return 1;
                        if (void 0 === en) return -1;
                        if (en === er) continue;
                        return es(en, er);
                      } while (++O);
                    }
                    compareBuild(e) {
                      e instanceof eo || (e = new eo(e, this.options));
                      let O = 0;
                      do {
                        let en = this.build[O],
                          er = e.build[O];
                        if ((et('prerelease compare', O, en, er), void 0 === en && void 0 === er)) return 0;
                        if (void 0 === er) return 1;
                        if (void 0 === en) return -1;
                        if (en === er) continue;
                        return es(en, er);
                      } while (++O);
                    }
                    inc(e, O) {
                      switch (e) {
                        case 'premajor':
                          (this.prerelease.length = 0),
                            (this.patch = 0),
                            (this.minor = 0),
                            this.major++,
                            this.inc('pre', O);
                          break;
                        case 'preminor':
                          (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', O);
                          break;
                        case 'prepatch':
                          (this.prerelease.length = 0), this.inc('patch', O), this.inc('pre', O);
                          break;
                        case 'prerelease':
                          0 === this.prerelease.length && this.inc('patch', O), this.inc('pre', O);
                          break;
                        case 'major':
                          (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++,
                            (this.minor = 0),
                            (this.patch = 0),
                            (this.prerelease = []);
                          break;
                        case 'minor':
                          (0 !== this.patch || 0 === this.prerelease.length) && this.minor++,
                            (this.patch = 0),
                            (this.prerelease = []);
                          break;
                        case 'patch':
                          0 === this.prerelease.length && this.patch++, (this.prerelease = []);
                          break;
                        case 'pre':
                          if (0 === this.prerelease.length) this.prerelease = [0];
                          else {
                            let e = this.prerelease.length;
                            for (; --e >= 0; )
                              'number' == typeof this.prerelease[e] && (this.prerelease[e]++, (e = -2));
                            -1 === e && this.prerelease.push(0);
                          }
                          O &&
                            (0 === es(this.prerelease[0], O)
                              ? isNaN(this.prerelease[1]) && (this.prerelease = [O, 0])
                              : (this.prerelease = [O, 0]));
                          break;
                        default:
                          throw Error(`invalid increment argument: ${e}`);
                      }
                      return this.format(), (this.raw = this.version), this;
                    }
                  };
                O.exports = eo;
              }
            }),
            eJ = te({
              'node_modules/semver/functions/compare.js'(e, O) {
                ey();
                var et = eq();
                O.exports = (e, O, en) => new et(e, en).compare(new et(O, en));
              }
            }),
            eU = te({
              'node_modules/semver/functions/lt.js'(e, O) {
                ey();
                var et = eJ();
                O.exports = (e, O, en) => 0 > et(e, O, en);
              }
            }),
            eH = te({
              'node_modules/semver/functions/gte.js'(e, O) {
                ey();
                var et = eJ();
                O.exports = (e, O, en) => et(e, O, en) >= 0;
              }
            }),
            eG = te({
              'src/utils/arrayify.js'(e, O) {
                ey(),
                  (O.exports = (e, O) =>
                    Object.entries(e).map((e) => {
                      let [et, en] = e;
                      return Object.assign({ [O]: et }, en);
                    }));
              }
            }),
            ez = te({
              'node_modules/outdent/lib/index.js'(e, O) {
                function t() {
                  for (var e = [], O = 0; O < arguments.length; O++) e[O] = arguments[O];
                }
                function s() {
                  return 'u' > typeof WeakMap ? new WeakMap() : a();
                }
                function a() {
                  return {
                    add: t,
                    delete: t,
                    get: t,
                    set: t,
                    has: function (e) {
                      return !1;
                    }
                  };
                }
                ey(), Object.defineProperty(e, '__esModule', { value: !0 }), (e.outdent = void 0);
                var et = Object.prototype.hasOwnProperty,
                  u = function (e, O) {
                    return et.call(e, O);
                  };
                function i(e, O) {
                  for (var et in O) u(O, et) && (e[et] = O[et]);
                  return e;
                }
                var en = /^[ \t]*(?:\r\n|\r|\n)/,
                  er = /(?:\r\n|\r|\n)[ \t]*$/,
                  eu = /^(?:[\r\n]|$)/,
                  ei = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
                  ea = /^[ \t]*[\r\n][ \t\r\n]*$/;
                function c(e, O, et) {
                  var eu = 0,
                    ea = e[0].match(ei);
                  ea && (eu = ea[1].length);
                  var es = RegExp('(\\r\\n|\\r|\\n).{0,' + eu + '}', 'g');
                  O && (e = e.slice(1));
                  var eo = et.newline,
                    el = et.trimLeadingNewline,
                    ep = et.trimTrailingNewline,
                    ec = 'string' == typeof eo,
                    ed = e.length;
                  return e.map(function (e, O) {
                    return (
                      (e = e.replace(es, '$1')),
                      0 === O && el && (e = e.replace(en, '')),
                      O === ed - 1 && ep && (e = e.replace(er, '')),
                      ec &&
                        (e = e.replace(/\r\n|\n|\r/g, function (e) {
                          return eo;
                        })),
                      e
                    );
                  });
                }
                function f(e, O) {
                  for (var et = '', en = 0, er = e.length; en < er; en++) (et += e[en]), en < er - 1 && (et += O[en]);
                  return et;
                }
                function F(e) {
                  return u(e, 'raw') && u(e, 'length');
                }
                function _(e) {
                  var O = s(),
                    et = s();
                  function I(en) {
                    for (var er = [], ei = 1; ei < arguments.length; ei++) er[ei - 1] = arguments[ei];
                    if (!F(en)) return _(i(i({}, e), en || {}));
                    var eo = (er[0] === I || er[0] === es) && ea.test(en[0]) && eu.test(en[1]),
                      el = eo ? et : O,
                      ep = el.get(en);
                    return (ep || ((ep = c(en, eo, e)), el.set(en, ep)), 0 === er.length)
                      ? ep[0]
                      : f(ep, eo ? er.slice(1) : er);
                  }
                  return i(I, {
                    string: function (O) {
                      return c([O], !1, e)[0];
                    }
                  });
                }
                var es = _({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
                if (((e.outdent = es), (e.default = es), 'u' > typeof O))
                  try {
                    (O.exports = es),
                      Object.defineProperty(es, '__esModule', { value: !0 }),
                      (es.default = es),
                      (es.outdent = es);
                  } catch {}
              }
            }),
            eX = te({
              'src/main/core-options.js'(e, O) {
                ey();
                var { outdent: et } = ez(),
                  en = 'Config',
                  er = 'Editor',
                  eu = 'Other',
                  ei = 'Global',
                  ea = 'Special',
                  es = {
                    cursorOffset: {
                      since: '1.4.0',
                      category: ea,
                      type: 'int',
                      default: -1,
                      range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 },
                      description: et`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `,
                      cliCategory: er
                    },
                    endOfLine: {
                      since: '1.15.0',
                      category: ei,
                      type: 'choice',
                      default: [
                        { since: '1.15.0', value: 'auto' },
                        { since: '2.0.0', value: 'lf' }
                      ],
                      description: 'Which end of line characters to apply.',
                      choices: [
                        {
                          value: 'lf',
                          description: 'Line Feed only (\\n), common on Linux and macOS as well as inside git repos'
                        },
                        {
                          value: 'crlf',
                          description: 'Carriage Return + Line Feed characters (\\r\\n), common on Windows'
                        },
                        { value: 'cr', description: 'Carriage Return character only (\\r), used very rarely' },
                        {
                          value: 'auto',
                          description: et`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        `
                        }
                      ]
                    },
                    filepath: {
                      since: '1.4.0',
                      category: ea,
                      type: 'path',
                      description: 'Specify the input filepath. This will be used to do parser inference.',
                      cliName: 'stdin-filepath',
                      cliCategory: eu,
                      cliDescription: 'Path to the file to pretend that stdin comes from.'
                    },
                    insertPragma: {
                      since: '1.8.0',
                      category: ea,
                      type: 'boolean',
                      default: !1,
                      description: "Insert @format pragma into file's first docblock comment.",
                      cliCategory: eu
                    },
                    parser: {
                      since: '0.0.10',
                      category: ei,
                      type: 'choice',
                      default: [
                        { since: '0.0.10', value: 'babylon' },
                        { since: '1.13.0', value: void 0 }
                      ],
                      description: 'Which parser to use.',
                      exception: (e) => 'string' == typeof e || 'function' == typeof e,
                      choices: [
                        { value: 'flow', description: 'Flow' },
                        { value: 'babel', since: '1.16.0', description: 'JavaScript' },
                        { value: 'babel-flow', since: '1.16.0', description: 'Flow' },
                        { value: 'babel-ts', since: '2.0.0', description: 'TypeScript' },
                        { value: 'typescript', since: '1.4.0', description: 'TypeScript' },
                        { value: 'acorn', since: '2.6.0', description: 'JavaScript' },
                        { value: 'espree', since: '2.2.0', description: 'JavaScript' },
                        { value: 'meriyah', since: '2.2.0', description: 'JavaScript' },
                        { value: 'css', since: '1.7.1', description: 'CSS' },
                        { value: 'less', since: '1.7.1', description: 'Less' },
                        { value: 'scss', since: '1.7.1', description: 'SCSS' },
                        { value: 'json', since: '1.5.0', description: 'JSON' },
                        { value: 'json5', since: '1.13.0', description: 'JSON5' },
                        { value: 'json-stringify', since: '1.13.0', description: 'JSON.stringify' },
                        { value: 'graphql', since: '1.5.0', description: 'GraphQL' },
                        { value: 'markdown', since: '1.8.0', description: 'Markdown' },
                        { value: 'mdx', since: '1.15.0', description: 'MDX' },
                        { value: 'vue', since: '1.10.0', description: 'Vue' },
                        { value: 'yaml', since: '1.14.0', description: 'YAML' },
                        { value: 'glimmer', since: '2.3.0', description: 'Ember / Handlebars' },
                        { value: 'html', since: '1.15.0', description: 'HTML' },
                        { value: 'angular', since: '1.15.0', description: 'Angular' },
                        { value: 'lwc', since: '1.17.0', description: 'Lightning Web Components' }
                      ]
                    },
                    plugins: {
                      since: '1.10.0',
                      type: 'path',
                      array: !0,
                      default: [{ value: [] }],
                      category: ei,
                      description: 'Add a plugin. Multiple plugins can be passed as separate `--plugin`s.',
                      exception: (e) => 'string' == typeof e || 'object' == typeof e,
                      cliName: 'plugin',
                      cliCategory: en
                    },
                    pluginSearchDirs: {
                      since: '1.13.0',
                      type: 'path',
                      array: !0,
                      default: [{ value: [] }],
                      category: ei,
                      description: et`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `,
                      exception: (e) => 'string' == typeof e || 'object' == typeof e,
                      cliName: 'plugin-search-dir',
                      cliCategory: en
                    },
                    printWidth: {
                      since: '0.0.0',
                      category: ei,
                      type: 'int',
                      default: 80,
                      description: 'The line length where Prettier will try wrap.',
                      range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }
                    },
                    rangeEnd: {
                      since: '1.4.0',
                      category: ea,
                      type: 'int',
                      default: Number.POSITIVE_INFINITY,
                      range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 },
                      description: et`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `,
                      cliCategory: er
                    },
                    rangeStart: {
                      since: '1.4.0',
                      category: ea,
                      type: 'int',
                      default: 0,
                      range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 },
                      description: et`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `,
                      cliCategory: er
                    },
                    requirePragma: {
                      since: '1.7.0',
                      category: ea,
                      type: 'boolean',
                      default: !1,
                      description: et`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `,
                      cliCategory: eu
                    },
                    tabWidth: {
                      type: 'int',
                      category: ei,
                      default: 2,
                      description: 'Number of spaces per indentation level.',
                      range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }
                    },
                    useTabs: {
                      since: '1.0.0',
                      category: ei,
                      type: 'boolean',
                      default: !1,
                      description: 'Indent with tabs instead of spaces.'
                    },
                    embeddedLanguageFormatting: {
                      since: '2.1.0',
                      category: ei,
                      type: 'choice',
                      default: [{ since: '2.1.0', value: 'auto' }],
                      description: 'Control how Prettier formats quoted code embedded in the file.',
                      choices: [
                        {
                          value: 'auto',
                          description: 'Format embedded code if Prettier can automatically identify it.'
                        },
                        { value: 'off', description: 'Never automatically format embedded code.' }
                      ]
                    }
                  };
                O.exports = {
                  CATEGORY_CONFIG: en,
                  CATEGORY_EDITOR: er,
                  CATEGORY_FORMAT: 'Format',
                  CATEGORY_OTHER: eu,
                  CATEGORY_OUTPUT: 'Output',
                  CATEGORY_GLOBAL: ei,
                  CATEGORY_SPECIAL: ea,
                  options: es
                };
              }
            }),
            eK = te({
              'src/main/support.js'(e, O) {
                ey();
                var et = { compare: eJ(), lt: eU(), gte: eH() },
                  en = eG(),
                  er = eh().version,
                  eu = eX().options;
                function u() {
                  let {
                      plugins: e = [],
                      showUnreleased: O = !1,
                      showDeprecated: ei = !1,
                      showInternal: es = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    eo = er.split('-', 1)[0],
                    el = e.flatMap((e) => e.languages || []).filter(F),
                    ep = en(
                      Object.assign(
                        {},
                        ...e.map((e) => {
                          let { options: O } = e;
                          return O;
                        }),
                        eu
                      ),
                      'name'
                    )
                      .filter((e) => F(e) && _(e))
                      .sort((e, O) => (e.name === O.name ? 0 : e.name < O.name ? -1 : 1))
                      .map(w)
                      .map((O) => {
                        Array.isArray((O = Object.assign({}, O)).default) &&
                          (O.default =
                            1 === O.default.length
                              ? O.default[0].value
                              : O.default.filter(F).sort((e, O) => et.compare(O.since, e.since))[0].value),
                          Array.isArray(O.choices) &&
                            ((O.choices = O.choices.filter((e) => F(e) && _(e))), 'parser' === O.name && i(O, el, e));
                        let en = Object.fromEntries(
                          e
                            .filter((e) => e.defaultOptions && void 0 !== e.defaultOptions[O.name])
                            .map((e) => [e.name, e.defaultOptions[O.name]])
                        );
                        return Object.assign(Object.assign({}, O), {}, { pluginDefaults: en });
                      });
                  return { languages: el, options: ep };
                  function F(e) {
                    return O || !('since' in e) || (e.since && et.gte(eo, e.since));
                  }
                  function _(e) {
                    return ei || !('deprecated' in e) || (e.deprecated && et.lt(eo, e.deprecated));
                  }
                  function w(e) {
                    if (es) return e;
                    let { cliName: O, cliCategory: et, cliDescription: en } = e;
                    return Hn(e, ea);
                  }
                }
                function i(e, O, et) {
                  let en = new Set(e.choices.map((e) => e.value));
                  for (let er of O)
                    if (er.parsers) {
                      for (let O of er.parsers)
                        if (!en.has(O)) {
                          en.add(O);
                          let eu = et.find((e) => e.parsers && e.parsers[O]),
                            ei = er.name;
                          eu && eu.name && (ei += ` (plugin: ${eu.name})`),
                            e.choices.push({ value: O, description: ei });
                        }
                    }
                }
                O.exports = { getSupportInfo: u };
              }
            }),
            eQ = te({
              'src/utils/is-non-empty-array.js'(e, O) {
                function t(e) {
                  return Array.isArray(e) && e.length > 0;
                }
                ey(), (O.exports = t);
              }
            }),
            eY = te({
              'src/utils/text/skip.js'(e, O) {
                function t(e) {
                  return (O, et, en) => {
                    let er = en && en.backwards;
                    if (!1 === et) return !1;
                    let { length: eu } = O,
                      ei = et;
                    for (; ei >= 0 && ei < eu; ) {
                      let et = O.charAt(ei);
                      if (e instanceof RegExp) {
                        if (!e.test(et)) return ei;
                      } else if (!e.includes(et)) return ei;
                      er ? ei-- : ei++;
                    }
                    return (-1 === ei || ei === eu) && ei;
                  };
                }
                ey();
                var et = t(/\s/),
                  en = t(' 	'),
                  er = t(',; 	'),
                  eu = t(/[^\n\r]/);
                O.exports = { skipWhitespace: et, skipSpaces: en, skipToLineEnd: er, skipEverythingButNewLine: eu };
              }
            }),
            eZ = te({
              'src/utils/text/skip-inline-comment.js'(e, O) {
                function t(e, O) {
                  if (!1 === O) return !1;
                  if ('/' === e.charAt(O) && '*' === e.charAt(O + 1)) {
                    for (let et = O + 2; et < e.length; ++et)
                      if ('*' === e.charAt(et) && '/' === e.charAt(et + 1)) return et + 2;
                  }
                  return O;
                }
                ey(), (O.exports = t);
              }
            }),
            e0 = te({
              'src/utils/text/skip-trailing-comment.js'(e, O) {
                ey();
                var { skipEverythingButNewLine: et } = eY();
                function s(e, O) {
                  return !1 !== O && ('/' === e.charAt(O) && '/' === e.charAt(O + 1) ? et(e, O) : O);
                }
                O.exports = s;
              }
            }),
            e1 = te({
              'src/utils/text/skip-newline.js'(e, O) {
                function t(e, O, et) {
                  let en = et && et.backwards;
                  if (!1 === O) return !1;
                  let er = e.charAt(O);
                  if (en) {
                    if (
                      '\r' === e.charAt(O - 1) &&
                      er ===
                        `
`
                    )
                      return O - 2;
                    if (
                      er ===
                        `
` ||
                      '\r' === er ||
                      '\u2028' === er ||
                      '\u2029' === er
                    )
                      return O - 1;
                  } else {
                    if (
                      '\r' === er &&
                      e.charAt(O + 1) ===
                        `
`
                    )
                      return O + 2;
                    if (
                      er ===
                        `
` ||
                      '\r' === er ||
                      '\u2028' === er ||
                      '\u2029' === er
                    )
                      return O + 1;
                  }
                  return O;
                }
                ey(), (O.exports = t);
              }
            }),
            e2 = te({
              'src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js'(e, O) {
                ey();
                var et = eZ(),
                  en = e1(),
                  er = e0(),
                  { skipSpaces: eu } = eY();
                function u(e, O) {
                  let ei = null,
                    ea = O;
                  for (; ea !== ei; ) (ei = ea), (ea = eu(e, ea)), (ea = et(e, ea)), (ea = er(e, ea)), (ea = en(e, ea));
                  return ea;
                }
                O.exports = u;
              }
            }),
            e3 = te({
              'src/common/util.js'(e, O) {
                ey();
                var { default: et } = (e_(), ft(eL)),
                  en = ev(),
                  { getSupportInfo: er } = eK(),
                  eu = eQ(),
                  ei = eP(),
                  { skipWhitespace: ea, skipSpaces: es, skipToLineEnd: eo, skipEverythingButNewLine: el } = eY(),
                  ep = eZ(),
                  ec = e0(),
                  ed = e1(),
                  eD = e2();
                function _(e) {
                  return (O, et, en) => {
                    let er = en && en.backwards;
                    if (!1 === et) return !1;
                    let { length: eu } = O,
                      ei = et;
                    for (; ei >= 0 && ei < eu; ) {
                      let et = O.charAt(ei);
                      if (e instanceof RegExp) {
                        if (!e.test(et)) return ei;
                      } else if (!e.includes(et)) return ei;
                      er ? ei-- : ei++;
                    }
                    return (-1 === ei || ei === eu) && ei;
                  };
                }
                function w(e, O) {
                  let et = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    en = es(e, et.backwards ? O - 1 : O, et),
                    er = ed(e, en, et);
                  return en !== er;
                }
                function E(e, O, et) {
                  for (let en = O; en < et; ++en)
                    if (
                      e.charAt(en) ===
                      `
`
                    )
                      return !0;
                  return !1;
                }
                function N(e, O, et) {
                  let en = et(O) - 1;
                  (en = es(e, en, { backwards: !0 })),
                    (en = ed(e, en, { backwards: !0 })),
                    (en = es(e, en, { backwards: !0 }));
                  let er = ed(e, en, { backwards: !0 });
                  return en !== er;
                }
                function x(e, O) {
                  let et = null,
                    en = O;
                  for (; en !== et; ) (et = en), (en = eo(e, en)), (en = ep(e, en)), (en = es(e, en));
                  return (en = ec(e, en)), !1 !== (en = ed(e, en)) && w(e, en);
                }
                function I(e, O, et) {
                  return x(e, et(O));
                }
                function P(e, O, et) {
                  return eD(e, et(O));
                }
                function $(e, O, et) {
                  return e.charAt(P(e, O, et));
                }
                function D(e, O) {
                  let et = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  return es(e, et.backwards ? O - 1 : O, et) !== O;
                }
                function T(e, O) {
                  let et = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    en = 0;
                  for (let er = et; er < e.length; ++er) '	' === e[er] ? (en = en + O - (en % O)) : en++;
                  return en;
                }
                function m(e, O) {
                  let et = e.lastIndexOf(`
`);
                  return -1 === et ? 0 : T(e.slice(et + 1).match(/^[\t ]*/)[0], O);
                }
                function C(e, O) {
                  let et = { quote: '"', regex: /"/g, escaped: '&quot;' },
                    en = { quote: "'", regex: /'/g, escaped: '&apos;' },
                    er = "'" === O ? en : et,
                    eu = er === en ? et : en,
                    ei = er;
                  return (
                    (e.includes(er.quote) || e.includes(eu.quote)) &&
                      (ei = (e.match(er.regex) || []).length > (e.match(eu.regex) || []).length ? eu : er),
                    ei
                  );
                }
                function o(e, O) {
                  let et = e.slice(1, -1),
                    en =
                      'json' !== O.parser && ('json5' !== O.parser || 'preserve' !== O.quoteProps || O.singleQuote)
                        ? O.__isInHtmlAttribute
                          ? "'"
                          : C(et, O.singleQuote ? "'" : '"').quote
                        : '"';
                  return d(
                    et,
                    en,
                    !('css' === O.parser || 'less' === O.parser || 'scss' === O.parser || O.__embeddedInHtml)
                  );
                }
                function d(e, O, et) {
                  let en = '"' === O ? "'" : '"',
                    er = e.replace(/\\(.)|(["'])/gs, (e, er, eu) =>
                      er === en
                        ? er
                        : eu === O
                        ? '\\' + eu
                        : eu || (et && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(er) ? er : '\\' + er)
                    );
                  return O + er + O;
                }
                function v(e) {
                  return e
                    .toLowerCase()
                    .replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, '$1$2$3')
                    .replace(/^([+-]?[\d.]+)e[+-]?0+$/, '$1')
                    .replace(/^([+-])?\./, '$10.')
                    .replace(/(\.\d+?)0+(?=e|$)/, '$1')
                    .replace(/\.(?=e|$)/, '');
                }
                function S(e, O) {
                  let en = e.match(RegExp(`(${et(O)})+`, 'g'));
                  return null === en ? 0 : en.reduce((e, et) => Math.max(e, et.length / O.length), 0);
                }
                function b(e, O) {
                  let en = e.match(RegExp(`(${et(O)})+`, 'g'));
                  if (null === en) return 0;
                  let er = new Map(),
                    eu = 0;
                  for (let e of en) {
                    let et = e.length / O.length;
                    er.set(et, !0), et > eu && (eu = et);
                  }
                  for (let e = 1; e < eu; e++) if (!er.get(e)) return e;
                  return eu + 1;
                }
                function B(e, O) {
                  (e.comments || (e.comments = [])).push(O), (O.printed = !1), (O.nodeDescription = Q(e));
                }
                function k(e, O) {
                  (O.leading = !0), (O.trailing = !1), B(e, O);
                }
                function M(e, O, et) {
                  (O.leading = !1), (O.trailing = !1), et && (O.marker = et), B(e, O);
                }
                function R(e, O) {
                  (O.leading = !1), (O.trailing = !0), B(e, O);
                }
                function q(e, O) {
                  let { languages: et } = er({ plugins: O.plugins }),
                    en =
                      et.find((O) => {
                        let { name: et } = O;
                        return et.toLowerCase() === e;
                      }) ||
                      et.find((O) => {
                        let { aliases: et } = O;
                        return Array.isArray(et) && et.includes(e);
                      }) ||
                      et.find((O) => {
                        let { extensions: et } = O;
                        return Array.isArray(et) && et.includes(`.${e}`);
                      });
                  return en && en.parsers[0];
                }
                function J(e) {
                  return e && 'front-matter' === e.type;
                }
                function L(e) {
                  let O = new WeakMap();
                  return function (et) {
                    return O.has(et) || O.set(et, Symbol(e)), O.get(et);
                  };
                }
                function Q(e) {
                  let O = e.type || e.kind || '(unknown type)',
                    et = String(
                      e.name ||
                        (e.id && ('object' == typeof e.id ? e.id.name : e.id)) ||
                        (e.key && ('object' == typeof e.key ? e.key.name : e.key)) ||
                        (e.value && ('object' == typeof e.value ? '' : String(e.value))) ||
                        e.operator ||
                        ''
                    );
                  return et.length > 20 && (et = et.slice(0, 19) + '…'), O + (et ? ' ' + et : '');
                }
                O.exports = {
                  inferParserByLanguage: q,
                  getStringWidth: ei,
                  getMaxContinuousCount: S,
                  getMinNotPresentContinuousCount: b,
                  getPenultimate: (e) => e[e.length - 2],
                  getLast: en,
                  getNextNonSpaceNonCommentCharacterIndexWithStartIndex: eD,
                  getNextNonSpaceNonCommentCharacterIndex: P,
                  getNextNonSpaceNonCommentCharacter: $,
                  skip: _,
                  skipWhitespace: ea,
                  skipSpaces: es,
                  skipToLineEnd: eo,
                  skipEverythingButNewLine: el,
                  skipInlineComment: ep,
                  skipTrailingComment: ec,
                  skipNewline: ed,
                  isNextLineEmptyAfterIndex: x,
                  isNextLineEmpty: I,
                  isPreviousLineEmpty: N,
                  hasNewline: w,
                  hasNewlineInRange: E,
                  hasSpaces: D,
                  getAlignmentSize: T,
                  getIndentSize: m,
                  getPreferredQuote: C,
                  printString: o,
                  printNumber: v,
                  makeString: d,
                  addLeadingComment: k,
                  addDanglingComment: M,
                  addTrailingComment: R,
                  isFrontMatterNode: J,
                  isNonEmptyArray: eu,
                  createGroupIdMapper: L
                };
              }
            }),
            e8 = {};
          function Ha(e, O) {
            for (var et = 0, en = e.length - 1; en >= 0; en--) {
              var er = e[en];
              '.' === er ? e.splice(en, 1) : '..' === er ? (e.splice(en, 1), et++) : et && (e.splice(en, 1), et--);
            }
            if (O) for (; et--; et) e.unshift('..');
            return e;
          }
          function wr() {
            for (var e = '', O = !1, et = arguments.length - 1; et >= -1 && !O; et--) {
              var en = et >= 0 ? arguments[et] : '/';
              if ('string' != typeof en) throw TypeError('Arguments to path.resolve must be strings');
              en && ((e = en + '/' + e), (O = '/' === en.charAt(0)));
            }
            return (
              (e = Ha(
                Zn(e.split('/'), function (e) {
                  return !!e;
                }),
                !O
              ).join('/')),
              (O ? '/' : '') + e || '.'
            );
          }
          function Yn(e) {
            var O = Qn(e),
              et = '/' === tn(e, -1);
            return (
              (e = Ha(
                Zn(e.split('/'), function (e) {
                  return !!e;
                }),
                !O
              ).join('/')) ||
                O ||
                (e = '.'),
              e && et && (e += '/'),
              (O ? '/' : '') + e
            );
          }
          function Qn(e) {
            return '/' === e.charAt(0);
          }
          function Ga() {
            var e = Array.prototype.slice.call(arguments, 0);
            return Yn(
              Zn(e, function (e, O) {
                if ('string' != typeof e) throw TypeError('Arguments to path.join must be strings');
                return e;
              }).join('/')
            );
          }
          function Ua(e, O) {
            function t(e) {
              for (var O = 0; O < e.length && '' === e[O]; O++);
              for (var et = e.length - 1; et >= 0 && '' === e[et]; et--);
              return O > et ? [] : e.slice(O, et - O + 1);
            }
            (e = wr(e).substr(1)), (O = wr(O).substr(1));
            for (
              var et = t(e.split('/')), en = t(O.split('/')), er = Math.min(et.length, en.length), eu = er, ei = 0;
              ei < er;
              ei++
            )
              if (et[ei] !== en[ei]) {
                eu = ei;
                break;
              }
            for (var ea = [], ei = eu; ei < et.length; ei++) ea.push('..');
            return (ea = ea.concat(en.slice(eu))).join('/');
          }
          function Ja(e) {
            var O = e7(e),
              et = O[0],
              en = O[1];
            return et || en ? (en && (en = en.substr(0, en.length - 1)), et + en) : '.';
          }
          function za(e, O) {
            var et = e7(e)[2];
            return O && et.substr(-1 * O.length) === O && (et = et.substr(0, et.length - O.length)), et;
          }
          function Xa(e) {
            return e7(e)[3];
          }
          function Zn(e, O) {
            if (e.filter) return e.filter(O);
            for (var et = [], en = 0; en < e.length; en++) O(e[en], en, e) && et.push(e[en]);
            return et;
          }
          Kt(e8, {
            basename: () => za,
            default: () => e4,
            delimiter: () => e5,
            dirname: () => Ja,
            extname: () => Xa,
            isAbsolute: () => Qn,
            join: () => Ga,
            normalize: () => Yn,
            relative: () => Ua,
            resolve: () => wr,
            sep: () => e9
          });
          var e6,
            e7,
            e9,
            e5,
            e4,
            tn,
            tr = ht({
              'node-modules-polyfills:path'() {
                ey(),
                  (e6 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/),
                  (e7 = function (e) {
                    return e6.exec(e).slice(1);
                  }),
                  (e4 = {
                    extname: Xa,
                    basename: za,
                    dirname: Ja,
                    sep: (e9 = '/'),
                    delimiter: (e5 = ':'),
                    relative: Ua,
                    join: Ga,
                    isAbsolute: Qn,
                    normalize: Yn,
                    resolve: wr
                  }),
                  (tn = function (e, O, et) {
                    return e.substr(O, et);
                  });
              }
            }),
            tu = te({
              'node-modules-polyfills-commonjs:path'(e, O) {
                ey();
                var et = (tr(), ft(e8));
                if (et && et.default) for (let e in ((O.exports = et.default), et)) O.exports[e] = et[e];
                else et && (O.exports = et);
              }
            }),
            ti = te({
              'src/common/errors.js'(e, O) {
                ey(),
                  (O.exports = {
                    ConfigError: class extends Error {},
                    DebugError: class extends Error {},
                    UndefinedParserError: class extends Error {},
                    ArgExpansionBailout: class extends Error {}
                  });
              }
            }),
            ta = {};
          function em(e, O) {
            function t() {
              this.constructor = e;
            }
            ts(e, O), (e.prototype = null === O ? Object.create(O) : ((t.prototype = O.prototype), new t()));
          }
          function tm(e, O) {
            var et = {};
            for (var en in e) Object.prototype.hasOwnProperty.call(e, en) && 0 > O.indexOf(en) && (et[en] = e[en]);
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
              for (var er = 0, en = Object.getOwnPropertySymbols(e); er < en.length; er++)
                0 > O.indexOf(en[er]) &&
                  Object.prototype.propertyIsEnumerable.call(e, en[er]) &&
                  (et[en[er]] = e[en[er]]);
            return et;
          }
          function rm(e, O, et, en) {
            var er,
              eu = arguments.length,
              ei = eu < 3 ? O : null === en ? (en = Object.getOwnPropertyDescriptor(O, et)) : en;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              ei = Reflect.decorate(e, O, et, en);
            else
              for (var ea = e.length - 1; ea >= 0; ea--)
                (er = e[ea]) && (ei = (eu < 3 ? er(ei) : eu > 3 ? er(O, et, ei) : er(O, et)) || ei);
            return eu > 3 && ei && Object.defineProperty(O, et, ei), ei;
          }
          function nm(e, O) {
            return function (et, en) {
              O(et, en, e);
            };
          }
          function um(e, O) {
            if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, O);
          }
          function sm(e, O, et, en) {
            function a(e) {
              return e instanceof et
                ? e
                : new et(function (O) {
                    O(e);
                  });
            }
            return new (et || (et = Promise))(function (et, er) {
              function i(e) {
                try {
                  p(en.next(e));
                } catch (e) {
                  er(e);
                }
              }
              function l(e) {
                try {
                  p(en.throw(e));
                } catch (e) {
                  er(e);
                }
              }
              function p(e) {
                e.done ? et(e.value) : a(e.value).then(i, l);
              }
              p((en = en.apply(e, O || [])).next());
            });
          }
          function im(e, O) {
            var et,
              en,
              er,
              eu,
              ei = {
                label: 0,
                sent: function () {
                  if (1 & er[0]) throw er[1];
                  return er[1];
                },
                trys: [],
                ops: []
              };
            return (
              (eu = { next: i(0), throw: i(1), return: i(2) }),
              'function' == typeof Symbol &&
                (eu[Symbol.iterator] = function () {
                  return this;
                }),
              eu
            );
            function i(e) {
              return function (O) {
                return l([e, O]);
              };
            }
            function l(eu) {
              if (et) throw TypeError('Generator is already executing.');
              for (; ei; )
                try {
                  if (
                    ((et = 1),
                    en &&
                      (er =
                        2 & eu[0] ? en.return : eu[0] ? en.throw || ((er = en.return) && er.call(en), 0) : en.next) &&
                      !(er = er.call(en, eu[1])).done)
                  )
                    return er;
                  switch (((en = 0), er && (eu = [2 & eu[0], er.value]), eu[0])) {
                    case 0:
                    case 1:
                      er = eu;
                      break;
                    case 4:
                      return ei.label++, { value: eu[1], done: !1 };
                    case 5:
                      ei.label++, (en = eu[1]), (eu = [0]);
                      continue;
                    case 7:
                      (eu = ei.ops.pop()), ei.trys.pop();
                      continue;
                    default:
                      if (!(er = (er = ei.trys).length > 0 && er[er.length - 1]) && (6 === eu[0] || 2 === eu[0])) {
                        ei = 0;
                        continue;
                      }
                      if (3 === eu[0] && (!er || (eu[1] > er[0] && eu[1] < er[3]))) {
                        ei.label = eu[1];
                        break;
                      }
                      if (6 === eu[0] && ei.label < er[1]) {
                        (ei.label = er[1]), (er = eu);
                        break;
                      }
                      if (er && ei.label < er[2]) {
                        (ei.label = er[2]), ei.ops.push(eu);
                        break;
                      }
                      er[2] && ei.ops.pop(), ei.trys.pop();
                      continue;
                  }
                  eu = O.call(e, ei);
                } catch (e) {
                  (eu = [6, e]), (en = 0);
                } finally {
                  et = er = 0;
                }
              if (5 & eu[0]) throw eu[1];
              return { value: eu[0] ? eu[1] : void 0, done: !0 };
            }
          }
          function am(e, O, et, en) {
            void 0 === en && (en = et), (e[en] = O[et]);
          }
          function om(e, O) {
            for (var et in e) 'default' === et || O.hasOwnProperty(et) || (O[et] = e[et]);
          }
          function Rn(e) {
            var O = 'function' == typeof Symbol && Symbol.iterator,
              et = O && e[O],
              en = 0;
            if (et) return et.call(e);
            if (e && 'number' == typeof e.length)
              return {
                next: function () {
                  return e && en >= e.length && (e = void 0), { value: e && e[en++], done: !e };
                }
              };
            throw TypeError(O ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
          }
          function Qa(e, O) {
            var et = 'function' == typeof Symbol && e[Symbol.iterator];
            if (!et) return e;
            var en,
              er,
              eu = et.call(e),
              ei = [];
            try {
              for (; (void 0 === O || O-- > 0) && !(en = eu.next()).done; ) ei.push(en.value);
            } catch (e) {
              er = { error: e };
            } finally {
              try {
                en && !en.done && (et = eu.return) && et.call(eu);
              } finally {
                if (er) throw er.error;
              }
            }
            return ei;
          }
          function lm() {
            for (var e = [], O = 0; O < arguments.length; O++) e = e.concat(Qa(arguments[O]));
            return e;
          }
          function cm() {
            for (var e = 0, O = 0, et = arguments.length; O < et; O++) e += arguments[O].length;
            for (var en = Array(e), er = 0, O = 0; O < et; O++)
              for (var eu = arguments[O], ei = 0, ea = eu.length; ei < ea; ei++, er++) en[er] = eu[ei];
            return en;
          }
          function Xt(e) {
            return this instanceof Xt ? ((this.v = e), this) : new Xt(e);
          }
          function pm(e, O, et) {
            if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
            var en,
              er = et.apply(e, O || []),
              eu = [];
            return (
              (en = {}),
              u('next'),
              u('throw'),
              u('return'),
              (en[Symbol.asyncIterator] = function () {
                return this;
              }),
              en
            );
            function u(e) {
              er[e] &&
                (en[e] = function (O) {
                  return new Promise(function (et, en) {
                    eu.push([e, O, et, en]) > 1 || i(e, O);
                  });
                });
            }
            function i(e, O) {
              try {
                l(er[e](O));
              } catch (e) {
                h(eu[0][3], e);
              }
            }
            function l(e) {
              e.value instanceof Xt ? Promise.resolve(e.value.v).then(p, y) : h(eu[0][2], e);
            }
            function p(e) {
              i('next', e);
            }
            function y(e) {
              i('throw', e);
            }
            function h(e, O) {
              e(O), eu.shift(), eu.length && i(eu[0][0], eu[0][1]);
            }
          }
          function fm(e) {
            var O, et;
            return (
              (O = {}),
              s('next'),
              s('throw', function (e) {
                throw e;
              }),
              s('return'),
              (O[Symbol.iterator] = function () {
                return this;
              }),
              O
            );
            function s(en, er) {
              O[en] = e[en]
                ? function (O) {
                    return (et = !et) ? { value: Xt(e[en](O)), done: 'return' === en } : er ? er(O) : O;
                  }
                : er;
            }
          }
          function Dm(e) {
            if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
            var O,
              et = e[Symbol.asyncIterator];
            return et
              ? et.call(e)
              : ((e = Rn(e)),
                (O = {}),
                s('next'),
                s('throw'),
                s('return'),
                (O[Symbol.asyncIterator] = function () {
                  return this;
                }),
                O);
            function s(et) {
              O[et] =
                e[et] &&
                function (O) {
                  return new Promise(function (en, er) {
                    a(en, er, (O = e[et](O)).done, O.value);
                  });
                };
            }
            function a(e, O, et, en) {
              Promise.resolve(en).then(function (O) {
                e({ value: O, done: et });
              }, O);
            }
          }
          function mm(e, O) {
            return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: O }) : (e.raw = O), e;
          }
          function dm(e) {
            if (e && e.__esModule) return e;
            var O = {};
            if (null != e) for (var et in e) Object.hasOwnProperty.call(e, et) && (O[et] = e[et]);
            return (O.default = e), O;
          }
          function gm(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function ym(e, O) {
            if (!O.has(e)) throw TypeError('attempted to get private field on non-instance');
            return O.get(e);
          }
          function hm(e, O, et) {
            if (!O.has(e)) throw TypeError('attempted to set private field on non-instance');
            return O.set(e, et), et;
          }
          Kt(ta, {
            __assign: () => to,
            __asyncDelegator: () => fm,
            __asyncGenerator: () => pm,
            __asyncValues: () => Dm,
            __await: () => Xt,
            __awaiter: () => sm,
            __classPrivateFieldGet: () => ym,
            __classPrivateFieldSet: () => hm,
            __createBinding: () => am,
            __decorate: () => rm,
            __exportStar: () => om,
            __extends: () => em,
            __generator: () => im,
            __importDefault: () => gm,
            __importStar: () => dm,
            __makeTemplateObject: () => mm,
            __metadata: () => um,
            __param: () => nm,
            __read: () => Qa,
            __rest: () => tm,
            __spread: () => lm,
            __spreadArrays: () => cm,
            __values: () => Rn
          });
          var ts,
            to,
            tl = ht({
              'node_modules/tslib/tslib.es6.js'() {
                ey(),
                  (ts = function (e, O) {
                    return (ts =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, O) {
                          e.__proto__ = O;
                        }) ||
                      function (e, O) {
                        for (var et in O) O.hasOwnProperty(et) && (e[et] = O[et]);
                      })(e, O);
                  }),
                  (to = function () {
                    return (to =
                      Object.assign ||
                      function (e) {
                        for (var O, et = 1, en = arguments.length; et < en; et++)
                          for (var er in (O = arguments[et]))
                            Object.prototype.hasOwnProperty.call(O, er) && (e[er] = O[er]);
                        return e;
                      }).apply(this, arguments);
                  });
              }
            }),
            tp = te({
              'node_modules/vnopts/lib/descriptors/api.js'(e) {
                ey(),
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.apiDescriptor = {
                    key: (e) => (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e)),
                    value(O) {
                      if (null === O || 'object' != typeof O) return JSON.stringify(O);
                      if (Array.isArray(O)) return `[${O.map((O) => e.apiDescriptor.value(O)).join(', ')}]`;
                      let et = Object.keys(O);
                      return 0 === et.length
                        ? '{}'
                        : `{ ${et
                            .map((et) => `${e.apiDescriptor.key(et)}: ${e.apiDescriptor.value(O[et])}`)
                            .join(', ')} }`;
                    },
                    pair: (O) => {
                      let { key: et, value: en } = O;
                      return e.apiDescriptor.value({ [et]: en });
                    }
                  });
              }
            }),
            tc = te({
              'node_modules/vnopts/lib/descriptors/index.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 }), (tl(), ft(ta)).__exportStar(tp(), e);
              }
            }),
            td = te({
              'scripts/build/shims/chalk.cjs'(e, O) {
                ey();
                var t = (e) => e;
                (t.grey = t), (t.red = t), (t.bold = t), (t.yellow = t), (t.blue = t), (t.default = t), (O.exports = t);
              }
            }),
            tD = te({
              'node_modules/vnopts/lib/handlers/deprecated/common.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = td();
                e.commonDeprecatedHandler = (e, et, en) => {
                  let { descriptor: er } = en,
                    eu = [`${O.default.yellow('string' == typeof e ? er.key(e) : er.pair(e))} is deprecated`];
                  return (
                    et &&
                      eu.push(`we now treat it as ${O.default.blue('string' == typeof et ? er.key(et) : er.pair(et))}`),
                    eu.join('; ') + '.'
                  );
                };
              }
            }),
            tf = te({
              'node_modules/vnopts/lib/handlers/deprecated/index.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 }), (tl(), ft(ta)).__exportStar(tD(), e);
              }
            }),
            tg = te({
              'node_modules/vnopts/lib/handlers/invalid/common.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = td();
                e.commonInvalidHandler = (e, et, en) =>
                  `Invalid ${O.default.red(en.descriptor.key(e))} value. Expected ${O.default.blue(
                    en.schemas[e].expected(en)
                  )}, but received ${O.default.red(en.descriptor.value(et))}.`;
              }
            }),
            ty = te({
              'node_modules/vnopts/lib/handlers/invalid/index.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 }), (tl(), ft(ta)).__exportStar(tg(), e);
              }
            }),
            th = te({
              'node_modules/vnopts/node_modules/leven/index.js'(e, O) {
                ey();
                var et = [],
                  en = [];
                O.exports = function (e, O) {
                  if (e === O) return 0;
                  var er = e;
                  e.length > O.length && ((e = O), (O = er));
                  var eu = e.length,
                    ei = O.length;
                  if (0 === eu) return ei;
                  if (0 === ei) return eu;
                  for (; eu > 0 && e.charCodeAt(~-eu) === O.charCodeAt(~-ei); ) eu--, ei--;
                  if (0 === eu) return ei;
                  for (var ea = 0; ea < eu && e.charCodeAt(ea) === O.charCodeAt(ea); ) ea++;
                  if (((eu -= ea), (ei -= ea), 0 === eu)) return ei;
                  for (var es, eo, el, ep, ec = 0, ed = 0; ec < eu; )
                    (en[ea + ec] = e.charCodeAt(ea + ec)), (et[ec] = ++ec);
                  for (; ed < ei; )
                    for (es = O.charCodeAt(ea + ed), el = ed++, eo = ed, ec = 0; ec < eu; ec++)
                      (ep = es === en[ea + ec] ? el : el + 1),
                        (el = et[ec]),
                        (eo = et[ec] = el > eo ? (ep > eo ? eo + 1 : ep) : ep > el ? el + 1 : ep);
                  return eo;
                };
              }
            }),
            tE = te({
              'node_modules/vnopts/lib/handlers/unknown/leven.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = td(),
                  et = th();
                e.levenUnknownHandler = (e, en, er) => {
                  let { descriptor: eu, logger: ei, schemas: ea } = er,
                    es = [`Ignored unknown option ${O.default.yellow(eu.pair({ key: e, value: en }))}.`],
                    eo = Object.keys(ea)
                      .sort()
                      .find((O) => 3 > et(e, O));
                  eo && es.push(`Did you mean ${O.default.blue(eu.key(eo))}?`), ei.warn(es.join(' '));
                };
              }
            }),
            tC = te({
              'node_modules/vnopts/lib/handlers/unknown/index.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 }), (tl(), ft(ta)).__exportStar(tE(), e);
              }
            }),
            tF = te({
              'node_modules/vnopts/lib/handlers/index.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = (tl(), ft(ta));
                O.__exportStar(tf(), e), O.__exportStar(ty(), e), O.__exportStar(tC(), e);
              }
            }),
            tv = te({
              'node_modules/vnopts/lib/schema.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = [
                  'default',
                  'expected',
                  'validate',
                  'deprecated',
                  'forward',
                  'redirect',
                  'overlap',
                  'preprocess',
                  'postprocess'
                ];
                function t(e, en) {
                  let er = new e(en),
                    eu = Object.create(er);
                  for (let e of O) e in en && (eu[e] = a(en[e], er, et.prototype[e].length));
                  return eu;
                }
                e.createSchema = t;
                var et = class {
                  constructor(e) {
                    this.name = e.name;
                  }
                  static create(e) {
                    return t(this, e);
                  }
                  default(e) {}
                  expected(e) {
                    return 'nothing';
                  }
                  validate(e, O) {
                    return !1;
                  }
                  deprecated(e, O) {
                    return !1;
                  }
                  forward(e, O) {}
                  redirect(e, O) {}
                  overlap(e, O, et) {
                    return e;
                  }
                  preprocess(e, O) {
                    return e;
                  }
                  postprocess(e, O) {
                    return e;
                  }
                };
                function a(e, O, et) {
                  return 'function' == typeof e
                    ? function () {
                        for (var en = arguments.length, er = Array(en), eu = 0; eu < en; eu++) er[eu] = arguments[eu];
                        return e(...er.slice(0, et - 1), O, ...er.slice(et - 1));
                      }
                    : () => e;
                }
                e.Schema = et;
              }
            }),
            tx = te({
              'node_modules/vnopts/lib/schemas/alias.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = tv(),
                  et = class extends O.Schema {
                    constructor(e) {
                      super(e), (this._sourceName = e.sourceName);
                    }
                    expected(e) {
                      return e.schemas[this._sourceName].expected(e);
                    }
                    validate(e, O) {
                      return O.schemas[this._sourceName].validate(e, O);
                    }
                    redirect(e, O) {
                      return this._sourceName;
                    }
                  };
                e.AliasSchema = et;
              }
            }),
            tb = te({
              'node_modules/vnopts/lib/schemas/any.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = tv(),
                  et = class extends O.Schema {
                    expected() {
                      return 'anything';
                    }
                    validate() {
                      return !0;
                    }
                  };
                e.AnySchema = et;
              }
            }),
            tS = te({
              'node_modules/vnopts/lib/schemas/array.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = (tl(), ft(ta)),
                  et = tv(),
                  en = class extends et.Schema {
                    constructor(e) {
                      var { valueSchema: et, name: en = et.name } = e;
                      super(Object.assign({}, O.__rest(e, ['valueSchema', 'name']), { name: en })),
                        (this._valueSchema = et);
                    }
                    expected(e) {
                      return `an array of ${this._valueSchema.expected(e)}`;
                    }
                    validate(e, O) {
                      if (!Array.isArray(e)) return !1;
                      let et = [];
                      for (let en of e) {
                        let e = O.normalizeValidateResult(this._valueSchema.validate(en, O), en);
                        !0 !== e && et.push(e.value);
                      }
                      return 0 === et.length || { value: et };
                    }
                    deprecated(e, O) {
                      let et = [];
                      for (let en of e) {
                        let e = O.normalizeDeprecatedResult(this._valueSchema.deprecated(en, O), en);
                        !1 !== e &&
                          et.push(
                            ...e.map((e) => {
                              let { value: O } = e;
                              return { value: [O] };
                            })
                          );
                      }
                      return et;
                    }
                    forward(e, O) {
                      let et = [];
                      for (let en of e) {
                        let e = O.normalizeForwardResult(this._valueSchema.forward(en, O), en);
                        et.push(...e.map(a));
                      }
                      return et;
                    }
                    redirect(e, O) {
                      let et = [],
                        en = [];
                      for (let er of e) {
                        let e = O.normalizeRedirectResult(this._valueSchema.redirect(er, O), er);
                        'remain' in e && et.push(e.remain), en.push(...e.redirect.map(a));
                      }
                      return 0 === et.length ? { redirect: en } : { redirect: en, remain: et };
                    }
                    overlap(e, O) {
                      return e.concat(O);
                    }
                  };
                function a(e) {
                  let { from: O, to: et } = e;
                  return { from: [O], to: et };
                }
                e.ArraySchema = en;
              }
            }),
            tT = te({
              'node_modules/vnopts/lib/schemas/boolean.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = tv(),
                  et = class extends O.Schema {
                    expected() {
                      return 'true or false';
                    }
                    validate(e) {
                      return 'boolean' == typeof e;
                    }
                  };
                e.BooleanSchema = et;
              }
            }),
            tB = te({
              'node_modules/vnopts/lib/utils.js'(e) {
                function r(e, O) {
                  let et = Object.create(null);
                  for (let en of e) {
                    let e = en[O];
                    if (et[e]) throw Error(`Duplicate ${O} ${JSON.stringify(e)}`);
                    et[e] = en;
                  }
                  return et;
                }
                function t(e, O) {
                  let et = new Map();
                  for (let en of e) {
                    let e = en[O];
                    if (et.has(e)) throw Error(`Duplicate ${O} ${JSON.stringify(e)}`);
                    et.set(e, en);
                  }
                  return et;
                }
                function s() {
                  let e = Object.create(null);
                  return (O) => {
                    let et = JSON.stringify(O);
                    return !!e[et] || ((e[et] = !0), !1);
                  };
                }
                function a(e, O) {
                  let et = [],
                    en = [];
                  for (let er of e) O(er) ? et.push(er) : en.push(er);
                  return [et, en];
                }
                function n(e) {
                  return e === Math.floor(e);
                }
                function u(e, O) {
                  if (e === O) return 0;
                  let et = typeof e,
                    en = typeof O,
                    er = ['undefined', 'object', 'boolean', 'number', 'string'];
                  return et !== en
                    ? er.indexOf(et) - er.indexOf(en)
                    : 'string' !== et
                    ? Number(e) - Number(O)
                    : e.localeCompare(O);
                }
                function i(e) {
                  return void 0 === e ? {} : e;
                }
                function l(e, O) {
                  return !0 === e || (!1 === e ? { value: O } : e);
                }
                function p(e, O) {
                  let et = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                  return !1 !== e && (!0 === e ? !!et || [{ value: O }] : 'value' in e ? [e] : 0 !== e.length && e);
                }
                function y(e, O) {
                  return 'string' == typeof e || 'key' in e
                    ? { from: O, to: e }
                    : 'from' in e
                    ? { from: e.from, to: e.to }
                    : { from: O, to: e.to };
                }
                function h(e, O) {
                  return void 0 === e ? [] : Array.isArray(e) ? e.map((e) => y(e, O)) : [y(e, O)];
                }
                function g(e, O) {
                  let et = h('object' == typeof e && 'redirect' in e ? e.redirect : e, O);
                  return 0 === et.length
                    ? { remain: O, redirect: et }
                    : 'object' == typeof e && 'remain' in e
                    ? { remain: e.remain, redirect: et }
                    : { redirect: et };
                }
                ey(),
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.recordFromArray = r),
                  (e.mapFromArray = t),
                  (e.createAutoChecklist = s),
                  (e.partition = a),
                  (e.isInt = n),
                  (e.comparePrimitive = u),
                  (e.normalizeDefaultResult = i),
                  (e.normalizeValidateResult = l),
                  (e.normalizeDeprecatedResult = p),
                  (e.normalizeTransferResult = y),
                  (e.normalizeForwardResult = h),
                  (e.normalizeRedirectResult = g);
              }
            }),
            tN = te({
              'node_modules/vnopts/lib/schemas/choice.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = tv(),
                  et = tB(),
                  en = class extends O.Schema {
                    constructor(e) {
                      super(e),
                        (this._choices = et.mapFromArray(
                          e.choices.map((e) => (e && 'object' == typeof e ? e : { value: e })),
                          'value'
                        ));
                    }
                    expected(e) {
                      let { descriptor: O } = e,
                        en = Array.from(this._choices.keys())
                          .map((e) => this._choices.get(e))
                          .filter((e) => !e.deprecated)
                          .map((e) => e.value)
                          .sort(et.comparePrimitive)
                          .map(O.value),
                        er = en.slice(0, -2),
                        eu = en.slice(-2);
                      return er.concat(eu.join(' or ')).join(', ');
                    }
                    validate(e) {
                      return this._choices.has(e);
                    }
                    deprecated(e) {
                      let O = this._choices.get(e);
                      return !!O && !!O.deprecated && { value: e };
                    }
                    forward(e) {
                      let O = this._choices.get(e);
                      return O ? O.forward : void 0;
                    }
                    redirect(e) {
                      let O = this._choices.get(e);
                      return O ? O.redirect : void 0;
                    }
                  };
                e.ChoiceSchema = en;
              }
            }),
            tP = te({
              'node_modules/vnopts/lib/schemas/number.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = tv(),
                  et = class extends O.Schema {
                    expected() {
                      return 'a number';
                    }
                    validate(e, O) {
                      return 'number' == typeof e;
                    }
                  };
                e.NumberSchema = et;
              }
            }),
            tk = te({
              'node_modules/vnopts/lib/schemas/integer.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = tB(),
                  et = tP(),
                  en = class extends et.NumberSchema {
                    expected() {
                      return 'an integer';
                    }
                    validate(e, et) {
                      return !0 === et.normalizeValidateResult(super.validate(e, et), e) && O.isInt(e);
                    }
                  };
                e.IntegerSchema = en;
              }
            }),
            tI = te({
              'node_modules/vnopts/lib/schemas/string.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = tv(),
                  et = class extends O.Schema {
                    expected() {
                      return 'a string';
                    }
                    validate(e) {
                      return 'string' == typeof e;
                    }
                  };
                e.StringSchema = et;
              }
            }),
            t_ = te({
              'node_modules/vnopts/lib/schemas/index.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = (tl(), ft(ta));
                O.__exportStar(tx(), e),
                  O.__exportStar(tb(), e),
                  O.__exportStar(tS(), e),
                  O.__exportStar(tT(), e),
                  O.__exportStar(tN(), e),
                  O.__exportStar(tk(), e),
                  O.__exportStar(tP(), e),
                  O.__exportStar(tI(), e);
              }
            }),
            tM = te({
              'node_modules/vnopts/lib/defaults.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = tp(),
                  et = tD(),
                  en = ty(),
                  er = tE();
                (e.defaultDescriptor = O.apiDescriptor),
                  (e.defaultUnknownHandler = er.levenUnknownHandler),
                  (e.defaultInvalidHandler = en.commonInvalidHandler),
                  (e.defaultDeprecatedHandler = et.commonDeprecatedHandler);
              }
            }),
            t$ = te({
              'node_modules/vnopts/lib/normalize.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = tM(),
                  et = tB();
                e.normalize = (e, O, et) => new en(O, et).normalize(e);
                var en = class {
                  constructor(e, en) {
                    let {
                      logger: er = console,
                      descriptor: eu = O.defaultDescriptor,
                      unknown: ei = O.defaultUnknownHandler,
                      invalid: ea = O.defaultInvalidHandler,
                      deprecated: es = O.defaultDeprecatedHandler
                    } = en || {};
                    (this._utils = {
                      descriptor: eu,
                      logger: er || { warn: () => {} },
                      schemas: et.recordFromArray(e, 'name'),
                      normalizeDefaultResult: et.normalizeDefaultResult,
                      normalizeDeprecatedResult: et.normalizeDeprecatedResult,
                      normalizeForwardResult: et.normalizeForwardResult,
                      normalizeRedirectResult: et.normalizeRedirectResult,
                      normalizeValidateResult: et.normalizeValidateResult
                    }),
                      (this._unknownHandler = ei),
                      (this._invalidHandler = ea),
                      (this._deprecatedHandler = es),
                      this.cleanHistory();
                  }
                  cleanHistory() {
                    this._hasDeprecationWarned = et.createAutoChecklist();
                  }
                  normalize(e) {
                    let O = {},
                      en = [e],
                      i = () => {
                        for (; 0 !== en.length; ) {
                          let e = en.shift(),
                            et = this._applyNormalization(e, O);
                          en.push(...et);
                        }
                      };
                    for (let e of (i(), Object.keys(this._utils.schemas))) {
                      let er = this._utils.schemas[e];
                      if (!(e in O)) {
                        let O = et.normalizeDefaultResult(er.default(this._utils));
                        'value' in O && en.push({ [e]: O.value });
                      }
                    }
                    for (let e of (i(), Object.keys(this._utils.schemas))) {
                      let et = this._utils.schemas[e];
                      e in O && (O[e] = et.postprocess(O[e], this._utils));
                    }
                    return O;
                  }
                  _applyNormalization(e, O) {
                    let en = [],
                      [er, eu] = et.partition(Object.keys(e), (e) => e in this._utils.schemas);
                    for (let eu of er) {
                      let er = this._utils.schemas[eu],
                        ei = er.preprocess(e[eu], this._utils),
                        ea = et.normalizeValidateResult(er.validate(ei, this._utils), ei);
                      if (!0 !== ea) {
                        let { value: e } = ea,
                          O = this._invalidHandler(eu, e, this._utils);
                        throw 'string' == typeof O ? Error(O) : O;
                      }
                      let c = (e) => {
                          let { from: O, to: et } = e;
                          en.push('string' == typeof et ? { [et]: O } : { [et.key]: et.value });
                        },
                        f = (e) => {
                          let { value: O, redirectTo: en } = e,
                            ea = et.normalizeDeprecatedResult(er.deprecated(O, this._utils), ei, !0);
                          if (!1 !== ea) {
                            if (!0 === ea)
                              this._hasDeprecationWarned(eu) ||
                                this._utils.logger.warn(this._deprecatedHandler(eu, en, this._utils));
                            else
                              for (let { value: e } of ea) {
                                let O = { key: eu, value: e };
                                if (!this._hasDeprecationWarned(O)) {
                                  let et = 'string' == typeof en ? { key: en, value: e } : en;
                                  this._utils.logger.warn(this._deprecatedHandler(O, et, this._utils));
                                }
                              }
                          }
                        };
                      et.normalizeForwardResult(er.forward(ei, this._utils), ei).forEach(c);
                      let es = et.normalizeRedirectResult(er.redirect(ei, this._utils), ei);
                      if ((es.redirect.forEach(c), 'remain' in es)) {
                        let e = es.remain;
                        (O[eu] = eu in O ? er.overlap(O[eu], e, this._utils) : e), f({ value: e });
                      }
                      for (let { from: e, to: O } of es.redirect) f({ value: e, redirectTo: O });
                    }
                    for (let et of eu) {
                      let er = e[et],
                        eu = this._unknownHandler(et, er, this._utils);
                      if (eu)
                        for (let e of Object.keys(eu)) {
                          let et = { [e]: eu[e] };
                          e in this._utils.schemas ? en.push(et) : Object.assign(O, et);
                        }
                    }
                    return en;
                  }
                };
                e.Normalizer = en;
              }
            }),
            tR = te({
              'node_modules/vnopts/lib/index.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = (tl(), ft(ta));
                O.__exportStar(tc(), e),
                  O.__exportStar(tF(), e),
                  O.__exportStar(t_(), e),
                  O.__exportStar(t$(), e),
                  O.__exportStar(tv(), e);
              }
            }),
            tV = te({
              'src/main/options-normalizer.js'(e, O) {
                ey();
                var et,
                  en = tR(),
                  er = ev(),
                  eu = {
                    key: (e) => (1 === e.length ? `-${e}` : `--${e}`),
                    value: (e) => en.apiDescriptor.value(e),
                    pair: (e) => {
                      let { key: O, value: et } = e;
                      return !1 === et
                        ? `--no-${O}`
                        : !0 === et
                        ? eu.key(O)
                        : '' === et
                        ? `${eu.key(O)} without an argument`
                        : `${eu.key(O)}=${et}`;
                    }
                  },
                  n = (e) => {
                    let { colorsModule: O, levenshteinDistance: et } = e;
                    return class extends en.ChoiceSchema {
                      constructor(e) {
                        let { name: O, flags: et } = e;
                        super({ name: O, choices: et }), (this._flags = [...et].sort());
                      }
                      preprocess(e, en) {
                        if ('string' == typeof e && e.length > 0 && !this._flags.includes(e)) {
                          let er = this._flags.find((O) => 3 > et(O, e));
                          if (er)
                            return (
                              en.logger.warn(
                                `Unknown flag ${O.yellow(en.descriptor.value(e))}, did you mean ${O.blue(
                                  en.descriptor.value(er)
                                )}?`
                              ),
                              er
                            );
                        }
                        return e;
                      }
                      expected() {
                        return 'a flag';
                      }
                    };
                  };
                function i(e, O) {
                  let {
                      logger: er = !1,
                      isCLI: ei = !1,
                      passThrough: ea = !1,
                      colorsModule: eo = null,
                      levenshteinDistance: el = null
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    ep = ea
                      ? Array.isArray(ea)
                        ? (e, O) => (ea.includes(e) ? { [e]: O } : void 0)
                        : (e, O) => ({ [e]: O })
                      : (e, O, et) => {
                          let er = et.schemas,
                            { _: eu } = er,
                            ei = Hn(er, es);
                          return en.levenUnknownHandler(
                            e,
                            O,
                            Object.assign(Object.assign({}, et), {}, { schemas: ei })
                          );
                        },
                    ec = ei ? eu : en.apiDescriptor,
                    ed = l(O, { isCLI: ei, colorsModule: eo, levenshteinDistance: el }),
                    eD = new en.Normalizer(ed, { logger: er, unknown: ep, descriptor: ec }),
                    ef = !1 !== er;
                  ef && et && (eD._hasDeprecationWarned = et);
                  let eg = eD.normalize(e);
                  return (
                    ef && (et = eD._hasDeprecationWarned),
                    ei && !1 === eg['plugin-search'] && (eg['plugin-search-dir'] = !1),
                    eg
                  );
                }
                function l(e, O) {
                  let { isCLI: et, colorsModule: er, levenshteinDistance: eu } = O,
                    ei = [];
                  for (let O of (et && ei.push(en.AnySchema.create({ name: '_' })), e))
                    ei.push(p(O, { isCLI: et, optionInfos: e, colorsModule: er, levenshteinDistance: eu })),
                      O.alias && et && ei.push(en.AliasSchema.create({ name: O.alias, sourceName: O.name }));
                  return ei;
                }
                function p(e, O) {
                  let { isCLI: et, optionInfos: eu, colorsModule: ei, levenshteinDistance: ea } = O,
                    { name: es } = e;
                  if ('plugin-search-dir' === es || 'pluginSearchDirs' === es)
                    return en.AnySchema.create({
                      name: es,
                      preprocess: (e) => (!1 === e || (e = Array.isArray(e) ? e : [e]), e),
                      validate: (e) => !1 === e || e.every((e) => 'string' == typeof e),
                      expected: () => 'false or paths to plugin search dir'
                    });
                  let eo = { name: es },
                    el,
                    ep = {};
                  switch (e.type) {
                    case 'int':
                      (el = en.IntegerSchema), et && (eo.preprocess = Number);
                      break;
                    case 'string':
                    case 'path':
                      el = en.StringSchema;
                      break;
                    case 'choice':
                      (el = en.ChoiceSchema),
                        (eo.choices = e.choices.map((O) =>
                          'object' == typeof O && O.redirect
                            ? Object.assign(
                                Object.assign({}, O),
                                {},
                                { redirect: { to: { key: e.name, value: O.redirect } } }
                              )
                            : O
                        ));
                      break;
                    case 'boolean':
                      el = en.BooleanSchema;
                      break;
                    case 'flag':
                      (el = n({ colorsModule: ei, levenshteinDistance: ea })),
                        (eo.flags = eu.flatMap((e) =>
                          [e.alias, e.description && e.name, e.oppositeDescription && `no-${e.name}`].filter(Boolean)
                        ));
                      break;
                    default:
                      throw Error(`Unexpected type ${e.type}`);
                  }
                  if (
                    (e.exception
                      ? (eo.validate = (O, et, en) => e.exception(O) || et.validate(O, en))
                      : (eo.validate = (e, O, et) => void 0 === e || O.validate(e, et)),
                    e.redirect &&
                      (ep.redirect = (O) => (O ? { to: { key: e.redirect.option, value: e.redirect.value } } : void 0)),
                    e.deprecated && (ep.deprecated = !0),
                    et && !e.array)
                  ) {
                    let e = eo.preprocess || ((e) => e);
                    eo.preprocess = (O, et, en) => et.preprocess(e(Array.isArray(O) ? er(O) : O), en);
                  }
                  return e.array
                    ? en.ArraySchema.create(
                        Object.assign(
                          Object.assign(
                            Object.assign({}, et ? { preprocess: (e) => (Array.isArray(e) ? e : [e]) } : {}),
                            ep
                          ),
                          {},
                          { valueSchema: el.create(eo) }
                        )
                      )
                    : el.create(Object.assign(Object.assign({}, eo), ep));
                }
                function y(e, O, et) {
                  return i(e, O, et);
                }
                function h(e, O, et) {
                  return i(e, O, Object.assign({ isCLI: !0 }, et));
                }
                O.exports = { normalizeApiOptions: y, normalizeCliOptions: h };
              }
            }),
            tW = te({
              'src/language-js/loc.js'(e, O) {
                ey();
                var et = eQ();
                function s(e) {
                  var O, en;
                  let er = e.range ? e.range[0] : e.start,
                    eu =
                      null !== (O = null === (en = e.declaration) || void 0 === en ? void 0 : en.decorators) &&
                      void 0 !== O
                        ? O
                        : e.decorators;
                  return et(eu) ? Math.min(s(eu[0]), er) : er;
                }
                function a(e) {
                  return e.range ? e.range[1] : e.end;
                }
                function n(e, O) {
                  let et = s(e);
                  return Number.isInteger(et) && et === s(O);
                }
                function u(e, O) {
                  let et = a(e);
                  return Number.isInteger(et) && et === a(O);
                }
                function i(e, O) {
                  return n(e, O) && u(e, O);
                }
                O.exports = { locStart: s, locEnd: a, hasSameLocStart: n, hasSameLoc: i };
              }
            }),
            tq = te({
              'src/main/load-parser.js'(e, O) {
                ey(), (O.exports = () => {});
              }
            }),
            tJ = te({
              'scripts/build/shims/babel-highlight.cjs'(e, O) {
                ey();
                var et = td();
                O.exports = { shouldHighlight: () => !1, getChalk: () => et };
              }
            }),
            tU = te({
              'node_modules/@babel/code-frame/lib/index.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 }), (e.codeFrameColumns = u), (e.default = i);
                var O = tJ(),
                  et = !1;
                function s(e) {
                  return { gutter: e.grey, marker: e.red.bold, message: e.red.bold };
                }
                var en = /\r\n|[\n\r\u2028\u2029]/;
                function n(e, O, et) {
                  let en = Object.assign({ column: 0, line: -1 }, e.start),
                    er = Object.assign({}, en, e.end),
                    { linesAbove: eu = 2, linesBelow: ei = 3 } = et || {},
                    ea = en.line,
                    es = en.column,
                    eo = er.line,
                    el = er.column,
                    ep = Math.max(ea - (eu + 1), 0),
                    ec = Math.min(O.length, eo + ei);
                  -1 === ea && (ep = 0), -1 === eo && (ec = O.length);
                  let ed = eo - ea,
                    eD = {};
                  if (ed)
                    for (let e = 0; e <= ed; e++) {
                      let et = e + ea;
                      if (es) {
                        if (0 === e) {
                          let e = O[et - 1].length;
                          eD[et] = [es, e - es + 1];
                        } else if (e === ed) eD[et] = [0, el];
                        else {
                          let en = O[et - e].length;
                          eD[et] = [0, en];
                        }
                      } else eD[et] = !0;
                    }
                  else es === el ? (es ? (eD[ea] = [es, 0]) : (eD[ea] = !0)) : (eD[ea] = [es, el - es]);
                  return { start: ep, end: ec, markerLines: eD };
                }
                function u(e, et) {
                  let er = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    eu = (er.highlightCode || er.forceColor) && (0, O.shouldHighlight)(er),
                    ei = (0, O.getChalk)(er),
                    ea = s(ei),
                    f = (e, O) => (eu ? e(O) : O),
                    { start: es, end: eo, markerLines: el } = n(et, e.split(en), er),
                    ep = et.start && 'number' == typeof et.start.column,
                    ec = String(eo).length,
                    ed = (eu ? (0, O.default)(e, er) : e)
                      .split(en, eo)
                      .slice(es, eo)
                      .map((e, O) => {
                        let et = es + 1 + O,
                          en = ` ${` ${et}`.slice(-ec)} |`,
                          eu = el[et],
                          ei = !el[et + 1];
                        if (!eu) return ` ${f(ea.gutter, en)}${e.length > 0 ? ` ${e}` : ''}`;
                        {
                          let O = '';
                          if (Array.isArray(eu)) {
                            let et = e.slice(0, Math.max(eu[0] - 1, 0)).replace(/[^\t]/g, ' '),
                              es = eu[1] || 1;
                            (O = [
                              `
 `,
                              f(ea.gutter, en.replace(/\d/g, ' ')),
                              ' ',
                              et,
                              f(ea.marker, '^').repeat(es)
                            ].join('')),
                              ei && er.message && (O += ' ' + f(ea.message, er.message));
                          }
                          return [f(ea.marker, '>'), f(ea.gutter, en), e.length > 0 ? ` ${e}` : '', O].join('');
                        }
                      }).join(`
`);
                  return (
                    er.message &&
                      !ep &&
                      (ed = `${' '.repeat(ec + 1)}${er.message}
${ed}`),
                    eu ? ei.reset(ed) : ed
                  );
                }
                function i(e, O, en) {
                  let er = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                  if (!et) {
                    et = !0;
                    let e =
                      'Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.';
                    el.emitWarning
                      ? el.emitWarning(e, 'DeprecationWarning')
                      : ((Error(e).name = 'DeprecationWarning'), console.warn(Error(e)));
                  }
                  return u(e, { start: { column: (en = Math.max(en, 0)), line: O } }, er);
                }
              }
            }),
            tH = te({
              'src/main/parser.js'(e, O) {
                ey();
                var { ConfigError: et } = ti(),
                  en = tW(),
                  { locStart: er, locEnd: eu } = (tq(), en),
                  ei = Object.getOwnPropertyNames,
                  ea = Object.getOwnPropertyDescriptor;
                function p(e) {
                  let O = {};
                  for (let et of e.plugins)
                    if (et.parsers) for (let e of ei(et.parsers)) Object.defineProperty(O, e, ea(et.parsers, e));
                  return O;
                }
                function y(e) {
                  let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p(e);
                  if ('function' == typeof e.parser)
                    return { parse: e.parser, astFormat: 'estree', locStart: er, locEnd: eu };
                  if ('string' == typeof e.parser) {
                    if (Object.prototype.hasOwnProperty.call(O, e.parser)) return O[e.parser];
                    throw new et(
                      `Couldn't resolve parser "${e.parser}". Parsers must be explicitly added to the standalone bundle.`
                    );
                  }
                }
                function h(e, O) {
                  let et = p(O),
                    en = Object.defineProperties(
                      {},
                      Object.fromEntries(Object.keys(et).map((e) => [e, { enumerable: !0, get: () => et[e].parse }]))
                    ),
                    er = y(O, et);
                  try {
                    return er.preprocess && (e = er.preprocess(e, O)), { text: e, ast: er.parse(e, en, O) };
                  } catch (et) {
                    let { loc: O } = et;
                    if (O) {
                      let { codeFrameColumns: en } = tU();
                      throw (
                        ((et.codeFrame = en(e, O, { highlightCode: !0 })),
                        (et.message +=
                          `
` + et.codeFrame),
                        et)
                      );
                    }
                    throw et;
                  }
                }
                O.exports = { parse: h, resolveParser: y };
              }
            }),
            tG = te({
              'src/main/options.js'(e, O) {
                ey();
                var et = tu(),
                  { UndefinedParserError: en } = ti(),
                  { getSupportInfo: er } = eK(),
                  eu = tV(),
                  { resolveParser: ei } = tH(),
                  ea = { astFormat: 'estree', printer: {}, originalText: void 0, locStart: null, locEnd: null };
                function l(e) {
                  let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    et = Object.assign({}, e),
                    es = er({ plugins: e.plugins, showUnreleased: !0, showDeprecated: !0 }).options,
                    eo = Object.assign(
                      Object.assign({}, ea),
                      Object.fromEntries(es.filter((e) => void 0 !== e.default).map((e) => [e.name, e.default]))
                    );
                  if (!et.parser) {
                    if (et.filepath) {
                      if (((et.parser = y(et.filepath, et.plugins)), !et.parser))
                        throw new en(`No parser could be inferred for file: ${et.filepath}`);
                    } else
                      (O.logger || console).warn(
                        "No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."
                      ),
                        (et.parser = 'babel');
                  }
                  let el = ei(
                    eu.normalizeApiOptions(et, [es.find((e) => 'parser' === e.name)], { passThrough: !0, logger: !1 })
                  );
                  (et.astFormat = el.astFormat), (et.locEnd = el.locEnd), (et.locStart = el.locStart);
                  let ep = p(et);
                  et.printer = ep.printers[et.astFormat];
                  let ec = Object.fromEntries(
                    es
                      .filter((e) => e.pluginDefaults && void 0 !== e.pluginDefaults[ep.name])
                      .map((e) => [e.name, e.pluginDefaults[ep.name]])
                  );
                  for (let [e, O] of Object.entries(Object.assign(Object.assign({}, eo), ec)))
                    (null === et[e] || void 0 === et[e]) && (et[e] = O);
                  return (
                    'json' === et.parser && (et.trailingComma = 'none'),
                    eu.normalizeApiOptions(et, es, Object.assign({ passThrough: Object.keys(ea) }, O))
                  );
                }
                function p(e) {
                  let { astFormat: O } = e;
                  if (!O) throw Error('getPlugin() requires astFormat to be set');
                  let et = e.plugins.find((e) => e.printers && e.printers[O]);
                  if (!et) throw Error(`Couldn't find plugin for AST format "${O}"`);
                  return et;
                }
                function y(e, O) {
                  let en = et.basename(e).toLowerCase(),
                    eu = er({ plugins: O })
                      .languages.filter((e) => null !== e.since)
                      .find(
                        (e) =>
                          (e.extensions && e.extensions.some((e) => en.endsWith(e))) ||
                          (e.filenames && e.filenames.some((e) => e.toLowerCase() === en))
                      );
                  return eu && eu.parsers[0];
                }
                O.exports = { normalize: l, hiddenDefaults: ea, inferParser: y };
              }
            }),
            tz = te({
              'src/main/massage-ast.js'(e, O) {
                function t(e, O, et) {
                  if (Array.isArray(e)) return e.map((e) => t(e, O, et)).filter(Boolean);
                  if (!e || 'object' != typeof e) return e;
                  let en = O.printer.massageAstNode,
                    er;
                  er = en && en.ignoredProperties ? en.ignoredProperties : new Set();
                  let eu = {};
                  for (let [et, en] of Object.entries(e))
                    er.has(et) || 'function' == typeof en || (eu[et] = t(en, O, e));
                  if (en) {
                    let O = en(e, eu, et);
                    if (null === O) return;
                    if (O) return O;
                  }
                  return eu;
                }
                ey(), (O.exports = t);
              }
            }),
            tX = te({
              'scripts/build/shims/assert.cjs'(e, O) {
                ey();
                var t = () => {};
                (t.ok = t), (t.strictEqual = t), (O.exports = t);
              }
            }),
            tK = te({
              'src/main/comments.js'(e, O) {
                ey();
                var et = tX(),
                  {
                    builders: {
                      line: en,
                      hardline: er,
                      breakParent: eu,
                      indent: ei,
                      lineSuffix: ea,
                      join: es,
                      cursor: eo
                    }
                  } = eO(),
                  {
                    hasNewline: el,
                    skipNewline: ep,
                    skipSpaces: ec,
                    isPreviousLineEmpty: ed,
                    addLeadingComment: eD,
                    addDanglingComment: ef,
                    addTrailingComment: eg
                  } = e3(),
                  eh = new WeakMap();
                function E(e, O, et) {
                  if (!e) return;
                  let { printer: en, locStart: er, locEnd: eu } = O;
                  if (et) {
                    if (en.canAttachComment && en.canAttachComment(e)) {
                      let O;
                      for (O = et.length - 1; O >= 0 && !(er(et[O]) <= er(e) && eu(et[O]) <= eu(e)); --O);
                      et.splice(O + 1, 0, e);
                      return;
                    }
                  } else if (eh.has(e)) return eh.get(e);
                  let ei =
                    (en.getCommentChildNodes && en.getCommentChildNodes(e, O)) ||
                    ('object' == typeof e &&
                      Object.entries(e)
                        .filter((e) => {
                          let [O] = e;
                          return (
                            'enclosingNode' !== O &&
                            'precedingNode' !== O &&
                            'followingNode' !== O &&
                            'tokens' !== O &&
                            'comments' !== O &&
                            'parent' !== O
                          );
                        })
                        .map((e) => {
                          let [, O] = e;
                          return O;
                        }));
                  if (ei) {
                    for (let en of (et || ((et = []), eh.set(e, et)), ei)) E(en, O, et);
                    return et;
                  }
                }
                function N(e, O, et, en) {
                  let { locStart: er, locEnd: eu } = et,
                    ei = er(O),
                    ea = eu(O),
                    es = E(e, et),
                    eo,
                    el,
                    ep = 0,
                    ec = es.length;
                  for (; ep < ec; ) {
                    let e = (ep + ec) >> 1,
                      en = es[e],
                      ed = er(en),
                      eD = eu(en);
                    if (ed <= ei && ea <= eD) return N(en, O, et, en);
                    if (eD <= ei) {
                      (eo = en), (ep = e + 1);
                      continue;
                    }
                    if (ea <= ed) {
                      (el = en), (ec = e);
                      continue;
                    }
                    throw Error('Comment location overlaps with node location');
                  }
                  if (en && 'TemplateLiteral' === en.type) {
                    let { quasis: e } = en,
                      er = C(e, O, et);
                    eo && C(e, eo, et) !== er && (eo = null), el && C(e, el, et) !== er && (el = null);
                  }
                  return { enclosingNode: en, precedingNode: eo, followingNode: el };
                }
                var x = () => !1;
                function I(e, O, et, en) {
                  if (!Array.isArray(e)) return;
                  let er = [],
                    {
                      locStart: eu,
                      locEnd: ei,
                      printer: { handleComments: ea = {} }
                    } = en,
                    { avoidAstMutation: es, ownLine: eo = x, endOfLine: el = x, remaining: ep = x } = ea,
                    ec = e.map((er, eu) =>
                      Object.assign(
                        Object.assign({}, N(O, er, en)),
                        {},
                        { comment: er, text: et, options: en, ast: O, isLastComment: e.length - 1 === eu }
                      )
                    );
                  for (let [e, O] of ec.entries()) {
                    let et,
                      {
                        comment: en,
                        precedingNode: ea,
                        enclosingNode: ed,
                        followingNode: ey,
                        text: eh,
                        options: eE,
                        ast: eC,
                        isLastComment: eF
                      } = O;
                    if (
                      'json' === eE.parser ||
                      'json5' === eE.parser ||
                      '__js_expression' === eE.parser ||
                      '__vue_expression' === eE.parser ||
                      '__vue_ts_expression' === eE.parser
                    ) {
                      if (eu(en) - eu(eC) <= 0) {
                        eD(eC, en);
                        continue;
                      }
                      if (ei(en) - ei(eC) >= 0) {
                        eg(eC, en);
                        continue;
                      }
                    }
                    if (
                      (es
                        ? (et = [O])
                        : ((en.enclosingNode = ed),
                          (en.precedingNode = ea),
                          (en.followingNode = ey),
                          (et = [en, eh, eE, eC, eF])),
                      $(eh, eE, ec, e))
                    )
                      (en.placement = 'ownLine'), eo(...et) || (ey ? eD(ey, en) : ea ? eg(ea, en) : ef(ed || eC, en));
                    else if (D(eh, eE, ec, e))
                      (en.placement = 'endOfLine'), el(...et) || (ea ? eg(ea, en) : ey ? eD(ey, en) : ef(ed || eC, en));
                    else if (((en.placement = 'remaining'), !ep(...et))) {
                      if (ea && ey) {
                        let e = er.length;
                        e > 0 && er[e - 1].followingNode !== ey && T(er, eh, eE), er.push(O);
                      } else ea ? eg(ea, en) : ey ? eD(ey, en) : ef(ed || eC, en);
                    }
                  }
                  if ((T(er, et, en), !es))
                    for (let O of e) delete O.precedingNode, delete O.enclosingNode, delete O.followingNode;
                }
                var P = (e) => !/[\S\n\u2028\u2029]/.test(e);
                function $(e, O, et, en) {
                  let { comment: er, precedingNode: eu } = et[en],
                    { locStart: ei, locEnd: ea } = O,
                    es = ei(er);
                  if (eu)
                    for (let O = en - 1; O >= 0; O--) {
                      let { comment: en, precedingNode: er } = et[O];
                      if (er !== eu || !P(e.slice(ea(en), es))) break;
                      es = ei(en);
                    }
                  return el(e, es, { backwards: !0 });
                }
                function D(e, O, et, en) {
                  let { comment: er, followingNode: eu } = et[en],
                    { locStart: ei, locEnd: ea } = O,
                    es = ea(er);
                  if (eu)
                    for (let O = en + 1; O < et.length; O++) {
                      let { comment: en, followingNode: er } = et[O];
                      if (er !== eu || !P(e.slice(es, ei(en)))) break;
                      es = ea(en);
                    }
                  return el(e, es);
                }
                function T(e, O, en) {
                  let er = e.length;
                  if (0 === er) return;
                  let { precedingNode: eu, followingNode: ei, enclosingNode: ea } = e[0],
                    es = (en.printer.getGapRegex && en.printer.getGapRegex(ea)) || /^[\s(]*$/,
                    eo = en.locStart(ei),
                    el;
                  for (el = er; el > 0; --el) {
                    let { comment: er, precedingNode: ea, followingNode: ep } = e[el - 1];
                    et.strictEqual(ea, eu), et.strictEqual(ep, ei);
                    let ec = O.slice(en.locEnd(er), eo);
                    if (es.test(ec)) eo = en.locStart(er);
                    else break;
                  }
                  for (let [O, { comment: et }] of e.entries()) O < el ? eg(eu, et) : eD(ei, et);
                  for (let e of [eu, ei])
                    e.comments && e.comments.length > 1 && e.comments.sort((e, O) => en.locStart(e) - en.locStart(O));
                  e.length = 0;
                }
                function m(e, O) {
                  return (e.getValue().printed = !0), O.printer.printComment(e, O);
                }
                function C(e, O, et) {
                  let en = et.locStart(O) - 1;
                  for (let O = 1; O < e.length; ++O) if (en < et.locStart(e[O])) return O - 1;
                  return 0;
                }
                function o(e, O) {
                  let et = e.getValue(),
                    eu = [m(e, O)],
                    { printer: ei, originalText: ea, locStart: es, locEnd: eo } = O;
                  if (ei.isBlockComment && ei.isBlockComment(et)) {
                    let e = el(ea, eo(et)) ? (el(ea, es(et), { backwards: !0 }) ? er : en) : ' ';
                    eu.push(e);
                  } else eu.push(er);
                  let ed = ep(ea, ec(ea, eo(et)));
                  return !1 !== ed && el(ea, ed) && eu.push(er), eu;
                }
                function d(e, O) {
                  let et = e.getValue(),
                    en = m(e, O),
                    { printer: ei, originalText: es, locStart: eo } = O,
                    ep = ei.isBlockComment && ei.isBlockComment(et);
                  if (el(es, eo(et), { backwards: !0 })) return ea([er, ed(es, et, eo) ? er : '', en]);
                  let ec = [' ', en];
                  return ep || (ec = [ea(ec), eu]), ec;
                }
                function v(e, O, et, en) {
                  let eu = [],
                    ea = e.getValue();
                  return ea &&
                    ea.comments &&
                    (e.each(() => {
                      let et = e.getValue();
                      !et.leading && !et.trailing && (!en || en(et)) && eu.push(m(e, O));
                    }, 'comments'),
                    0 !== eu.length)
                    ? et
                      ? es(er, eu)
                      : ei([er, es(er, eu)])
                    : '';
                }
                function S(e, O, et) {
                  let en = e.getValue();
                  if (!en) return {};
                  let er = en.comments || [];
                  et && (er = er.filter((e) => !et.has(e)));
                  let eu = en === O.cursorNode;
                  if (0 === er.length) {
                    let e = eu ? eo : '';
                    return { leading: e, trailing: e };
                  }
                  let ei = [],
                    ea = [];
                  return (
                    e.each(() => {
                      let en = e.getValue();
                      if (et && et.has(en)) return;
                      let { leading: er, trailing: eu } = en;
                      er ? ei.push(o(e, O)) : eu && ea.push(d(e, O));
                    }, 'comments'),
                    eu && (ei.unshift(eo), ea.push(eo)),
                    { leading: ei, trailing: ea }
                  );
                }
                function b(e, O, et, en) {
                  let { leading: er, trailing: eu } = S(e, et, en);
                  return er || eu ? [er, O, eu] : O;
                }
                function B(e) {
                  if (e)
                    for (let O of e) {
                      if (!O.printed)
                        throw Error('Comment "' + O.value.trim() + '" was not printed. Please report this error!');
                      delete O.printed;
                    }
                }
                O.exports = {
                  attach: I,
                  printComments: b,
                  printCommentsSeparately: S,
                  printDanglingComments: v,
                  getSortedChildNodes: E,
                  ensureAllCommentsPrinted: B
                };
              }
            }),
            tQ = te({
              'src/common/ast-path.js'(e, O) {
                ey();
                var et = ev();
                function s(e, O) {
                  let et = a(e.stack, O);
                  return -1 === et ? null : e.stack[et];
                }
                function a(e, O) {
                  for (let et = e.length - 1; et >= 0; et -= 2) {
                    let en = e[et];
                    if (en && !Array.isArray(en) && --O < 0) return et;
                  }
                  return -1;
                }
                var en = class {
                  constructor(e) {
                    this.stack = [e];
                  }
                  getName() {
                    let { stack: e } = this,
                      { length: O } = e;
                    return O > 1 ? e[O - 2] : null;
                  }
                  getValue() {
                    return et(this.stack);
                  }
                  getNode() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return s(this, e);
                  }
                  getParentNode() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return s(this, e + 1);
                  }
                  call(e) {
                    let { stack: O } = this,
                      { length: en } = O,
                      er = et(O);
                    for (var eu = arguments.length, ei = Array(eu > 1 ? eu - 1 : 0), ea = 1; ea < eu; ea++)
                      ei[ea - 1] = arguments[ea];
                    for (let e of ei) (er = er[e]), O.push(e, er);
                    let es = e(this);
                    return (O.length = en), es;
                  }
                  callParent(e) {
                    let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                      et = a(this.stack, O + 1),
                      en = this.stack.splice(et + 1),
                      er = e(this);
                    return this.stack.push(...en), er;
                  }
                  each(e) {
                    let { stack: O } = this,
                      { length: en } = O,
                      er = et(O);
                    for (var eu = arguments.length, ei = Array(eu > 1 ? eu - 1 : 0), ea = 1; ea < eu; ea++)
                      ei[ea - 1] = arguments[ea];
                    for (let e of ei) (er = er[e]), O.push(e, er);
                    for (let et = 0; et < er.length; ++et) O.push(et, er[et]), e(this, et, er), (O.length -= 2);
                    O.length = en;
                  }
                  map(e) {
                    let O = [];
                    for (var et = arguments.length, en = Array(et > 1 ? et - 1 : 0), er = 1; er < et; er++)
                      en[er - 1] = arguments[er];
                    return (
                      this.each(
                        (et, en, er) => {
                          O[en] = e(et, en, er);
                        },
                        ...en
                      ),
                      O
                    );
                  }
                  try(e) {
                    let { stack: O } = this,
                      et = [...O];
                    try {
                      return e();
                    } finally {
                      (O.length = 0), O.push(...et);
                    }
                  }
                  match() {
                    let e = this.stack.length - 1,
                      O = null,
                      et = this.stack[e--];
                    for (var en = arguments.length, er = Array(en), eu = 0; eu < en; eu++) er[eu] = arguments[eu];
                    for (let en of er) {
                      if (void 0 === et) return !1;
                      let er = null;
                      if (
                        ('number' == typeof O && ((er = O), (O = this.stack[e--]), (et = this.stack[e--])),
                        en && !en(et, O, er))
                      )
                        return !1;
                      (O = this.stack[e--]), (et = this.stack[e--]);
                    }
                    return !0;
                  }
                  findAncestor(e) {
                    let O = this.stack.length - 1,
                      et = null,
                      en = this.stack[O--];
                    for (; en; ) {
                      let er = null;
                      if (
                        ('number' == typeof et && ((er = et), (et = this.stack[O--]), (en = this.stack[O--])),
                        null !== et && e(en, et, er))
                      )
                        return en;
                      (et = this.stack[O--]), (en = this.stack[O--]);
                    }
                  }
                };
                O.exports = en;
              }
            }),
            tY = te({
              'src/main/multiparser.js'(e, O) {
                ey();
                var {
                    utils: { stripTrailingHardline: et }
                  } = eO(),
                  { normalize: en } = tG(),
                  er = tK();
                function n(e, O, et, en) {
                  if (et.printer.embed && 'auto' === et.embeddedLanguageFormatting)
                    return et.printer.embed(e, O, (e, O, er) => u(e, O, et, en, er), et);
                }
                function u(e, O, eu, ei) {
                  let { stripTrailingHardline: ea = !1 } =
                      arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    es = en(
                      Object.assign(
                        Object.assign(Object.assign({}, eu), O),
                        {},
                        { parentParser: eu.parser, originalText: e }
                      ),
                      { passThrough: !0 }
                    ),
                    eo = tH().parse(e, es),
                    { ast: el } = eo;
                  e = eo.text;
                  let ep = el.comments;
                  delete el.comments,
                    er.attach(ep, el, e, es),
                    (es[Symbol.for('comments')] = ep || []),
                    (es[Symbol.for('tokens')] = el.tokens || []);
                  let ec = ei(el, es);
                  return (
                    er.ensureAllCommentsPrinted(ep),
                    ea ? ('string' == typeof ec ? ec.replace(/(?:\r?\n)*$/, '') : et(ec)) : ec
                  );
                }
                O.exports = { printSubtree: n };
              }
            }),
            tZ = te({
              'src/main/ast-to-doc.js'(e, O) {
                ey();
                var et = tQ(),
                  {
                    builders: { hardline: en, addAlignmentToDoc: er },
                    utils: { propagateBreaks: eu }
                  } = eO(),
                  { printComments: ei } = tK(),
                  ea = tY();
                function l(e, O) {
                  let ei = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    { printer: ea } = O;
                  ea.preprocess && (e = ea.preprocess(e, O));
                  let es = new Map(),
                    eo = new et(e),
                    el = E();
                  return ei > 0 && (el = er([en, el], ei, O.tabWidth)), eu(el), el;
                  function E(e, O) {
                    return void 0 === e || e === eo
                      ? N(O)
                      : Array.isArray(e)
                      ? eo.call(() => N(O), ...e)
                      : eo.call(() => N(O), e);
                  }
                  function N(e) {
                    let et = eo.getValue(),
                      en = et && 'object' == typeof et && void 0 === e;
                    if (en && es.has(et)) return es.get(et);
                    let er = y(eo, O, E, e);
                    return en && es.set(et, er), er;
                  }
                }
                function p(e, O) {
                  let { originalText: et, [Symbol.for('comments')]: en, locStart: er, locEnd: eu } = O,
                    ei = er(e),
                    ea = eu(e),
                    es = new Set();
                  for (let e of en) er(e) >= ei && eu(e) <= ea && ((e.printed = !0), es.add(e));
                  return { doc: et.slice(ei, ea), printedComments: es };
                }
                function y(e, O, et, en) {
                  let er = e.getValue(),
                    { printer: eu } = O,
                    es,
                    eo;
                  if (eu.hasPrettierIgnore && eu.hasPrettierIgnore(e)) ({ doc: es, printedComments: eo } = p(er, O));
                  else {
                    if (er)
                      try {
                        es = ea.printSubtree(e, et, O, l);
                      } catch (e) {
                        if (globalThis.PRETTIER_DEBUG) throw e;
                      }
                    es || (es = eu.print(e, O, et, en));
                  }
                  return (eu.willPrintOwnComments && eu.willPrintOwnComments(e, O)) || (es = ei(e, es, O, eo)), es;
                }
                O.exports = l;
              }
            }),
            t0 = te({
              'src/main/range-util.js'(e, O) {
                ey();
                var et = tX(),
                  en = tK(),
                  a = (e) => {
                    let { parser: O } = e;
                    return 'json' === O || 'json5' === O || 'json-stringify' === O;
                  };
                function n(e, O) {
                  let et = [e.node, ...e.parentNodes],
                    en = new Set([O.node, ...O.parentNodes]);
                  return et.find((e) => er.has(e.type) && en.has(e));
                }
                function u(e) {
                  let O = e.length - 1;
                  for (;;) {
                    let et = e[O];
                    if (et && ('Program' === et.type || 'File' === et.type)) O--;
                    else break;
                  }
                  return e.slice(0, O + 1);
                }
                function i(e, O, et) {
                  let { locStart: en, locEnd: er } = et,
                    eu = e.node,
                    ei = O.node;
                  if (eu === ei) return { startNode: eu, endNode: ei };
                  let ea = en(e.node);
                  for (let e of u(O.parentNodes))
                    if (en(e) >= ea) ei = e;
                    else break;
                  let es = er(O.node);
                  for (let O of u(e.parentNodes)) {
                    if (er(O) <= es) eu = O;
                    else break;
                    if (eu === ei) break;
                  }
                  return { startNode: eu, endNode: ei };
                }
                function l(e, O, et, er) {
                  let eu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    ei = arguments.length > 5 ? arguments[5] : void 0,
                    { locStart: ea, locEnd: es } = et,
                    eo = ea(e),
                    el = es(e);
                  if (!(O > el || O < eo || ('rangeEnd' === ei && O === eo) || ('rangeStart' === ei && O === el))) {
                    for (let ea of en.getSortedChildNodes(e, et)) {
                      let en = l(ea, O, et, er, [e, ...eu], ei);
                      if (en) return en;
                    }
                    if (!er || er(e, eu[0])) return { node: e, parentNodes: eu };
                  }
                }
                function p(e, O) {
                  return (
                    'DeclareExportDeclaration' !== O &&
                    'TypeParameterDeclaration' !== e &&
                    ('Directive' === e ||
                      'TypeAlias' === e ||
                      'TSExportAssignment' === e ||
                      e.startsWith('Declare') ||
                      e.startsWith('TSDeclare') ||
                      e.endsWith('Statement') ||
                      e.endsWith('Declaration'))
                  );
                }
                var er = new Set([
                    'ObjectExpression',
                    'ArrayExpression',
                    'StringLiteral',
                    'NumericLiteral',
                    'BooleanLiteral',
                    'NullLiteral',
                    'UnaryExpression',
                    'TemplateLiteral'
                  ]),
                  eu = new Set([
                    'OperationDefinition',
                    'FragmentDefinition',
                    'VariableDefinition',
                    'TypeExtensionDefinition',
                    'ObjectTypeDefinition',
                    'FieldDefinition',
                    'DirectiveDefinition',
                    'EnumTypeDefinition',
                    'EnumValueDefinition',
                    'InputValueDefinition',
                    'InputObjectTypeDefinition',
                    'SchemaDefinition',
                    'OperationTypeDefinition',
                    'InterfaceTypeDefinition',
                    'UnionTypeDefinition',
                    'ScalarTypeDefinition'
                  ]);
                function g(e, O, et) {
                  if (!O) return !1;
                  switch (e.parser) {
                    case 'flow':
                    case 'babel':
                    case 'babel-flow':
                    case 'babel-ts':
                    case 'typescript':
                    case 'acorn':
                    case 'espree':
                    case 'meriyah':
                    case '__babel_estree':
                      return p(O.type, et && et.type);
                    case 'json':
                    case 'json5':
                    case 'json-stringify':
                      return er.has(O.type);
                    case 'graphql':
                      return eu.has(O.kind);
                    case 'vue':
                      return 'root' !== O.tag;
                  }
                  return !1;
                }
                function c(e, O, en) {
                  let er,
                    eu,
                    { rangeStart: ei, rangeEnd: ea, locStart: es, locEnd: eo } = O;
                  et.ok(ea > ei);
                  let el = e.slice(ei, ea).search(/\S/),
                    ep = -1 === el;
                  if (!ep) for (ei += el; ea > ei && !/\S/.test(e[ea - 1]); --ea);
                  let ec = l(en, ei, O, (e, et) => g(O, e, et), [], 'rangeStart'),
                    ed = ep ? ec : l(en, ea, O, (e) => g(O, e), [], 'rangeEnd');
                  if (!ec || !ed) return { rangeStart: 0, rangeEnd: 0 };
                  if (a(O)) {
                    let e = n(ec, ed);
                    (er = e), (eu = e);
                  } else ({ startNode: er, endNode: eu } = i(ec, ed, O));
                  return { rangeStart: Math.min(es(er), es(eu)), rangeEnd: Math.max(eo(er), eo(eu)) };
                }
                O.exports = { calculateRange: c, findNodeAtOffset: l };
              }
            }),
            t1 = te({
              'src/main/core.js'(e, O) {
                ey();
                var { diffArrays: et } = eC(),
                  {
                    printer: { printDocToString: en },
                    debug: { printDocToDebug: er }
                  } = eO(),
                  { getAlignmentSize: eu } = e3(),
                  {
                    guessEndOfLine: ei,
                    convertEndOfLineToChars: ea,
                    countEndOfLineChars: es,
                    normalizeEndOfLine: eo
                  } = eA(),
                  el = tG().normalize,
                  ep = tz(),
                  ec = tK(),
                  ed = tH(),
                  eD = tZ(),
                  ef = t0(),
                  eg = Symbol('cursor');
                function E(e, O, et) {
                  let en = O.comments;
                  return (
                    en && (delete O.comments, ec.attach(en, O, e, et)),
                    (et[Symbol.for('comments')] = en || []),
                    (et[Symbol.for('tokens')] = O.tokens || []),
                    (et.originalText = e),
                    en
                  );
                }
                function N(e, O) {
                  let er = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  if (!e || 0 === e.trim().length) return { formatted: '', cursorOffset: -1, comments: [] };
                  let { ast: eu, text: ei } = ed.parse(e, O);
                  if (O.cursorOffset >= 0) {
                    let e = ef.findNodeAtOffset(eu, O.cursorOffset, O);
                    e && e.node && (O.cursorNode = e.node);
                  }
                  let es = E(ei, eu, O),
                    eo = en(eD(eu, O, er), O);
                  if ((ec.ensureAllCommentsPrinted(es), er > 0)) {
                    let e = eo.formatted.trim();
                    void 0 !== eo.cursorNodeStart && (eo.cursorNodeStart -= eo.formatted.indexOf(e)),
                      (eo.formatted = e + ea(O.endOfLine));
                  }
                  if (O.cursorOffset >= 0) {
                    let e, en, er, eu, ea;
                    if (
                      (O.cursorNode && eo.cursorNodeText
                        ? ((e = O.locStart(O.cursorNode)),
                          (en = ei.slice(e, O.locEnd(O.cursorNode))),
                          (er = O.cursorOffset - e),
                          (eu = eo.cursorNodeStart),
                          (ea = eo.cursorNodeText))
                        : ((e = 0), (en = ei), (er = O.cursorOffset), (eu = 0), (ea = eo.formatted)),
                      en === ea)
                    )
                      return { formatted: eo.formatted, cursorOffset: eu + er, comments: es };
                    let el = [...en];
                    el.splice(er, 0, eg);
                    let ep = et(el, [...ea]),
                      ec = eu;
                    for (let e of ep)
                      if (e.removed) {
                        if (e.value.includes(eg)) break;
                      } else ec += e.count;
                    return { formatted: eo.formatted, cursorOffset: ec, comments: es };
                  }
                  return { formatted: eo.formatted, cursorOffset: -1, comments: es };
                }
                function x(e, O) {
                  let { ast: et, text: en } = ed.parse(e, O),
                    { rangeStart: er, rangeEnd: ei } = ef.calculateRange(en, O, et),
                    eo = en.slice(er, ei),
                    el = Math.min(
                      er,
                      en.lastIndexOf(
                        `
`,
                        er
                      ) + 1
                    ),
                    ep = eu(en.slice(el, er).match(/^\s*/)[0], O.tabWidth),
                    ec = N(
                      eo,
                      Object.assign(
                        Object.assign({}, O),
                        {},
                        {
                          rangeStart: 0,
                          rangeEnd: Number.POSITIVE_INFINITY,
                          cursorOffset: O.cursorOffset > er && O.cursorOffset <= ei ? O.cursorOffset - er : -1,
                          endOfLine: 'lf'
                        }
                      ),
                      ep
                    ),
                    eD = ec.formatted.trimEnd(),
                    { cursorOffset: eg } = O;
                  eg > ei ? (eg += eD.length - eo.length) : ec.cursorOffset >= 0 && (eg = ec.cursorOffset + er);
                  let ey = en.slice(0, er) + eD + en.slice(ei);
                  if ('lf' !== O.endOfLine) {
                    let e = ea(O.endOfLine);
                    eg >= 0 &&
                      e ===
                        `\r
` &&
                      (eg += es(
                        ey.slice(0, eg),
                        `
`
                      )),
                      (ey = ey.replace(/\n/g, e));
                  }
                  return { formatted: ey, cursorOffset: eg, comments: ec.comments };
                }
                function I(e, O, et) {
                  return 'number' != typeof O || Number.isNaN(O) || O < 0 || O > e.length ? et : O;
                }
                function P(e, O) {
                  let { cursorOffset: et, rangeStart: en, rangeEnd: er } = O;
                  return (
                    (et = I(e, et, -1)),
                    (en = I(e, en, 0)),
                    (er = I(e, er, e.length)),
                    Object.assign(Object.assign({}, O), {}, { cursorOffset: et, rangeStart: en, rangeEnd: er })
                  );
                }
                function $(e, O) {
                  let { cursorOffset: et, rangeStart: en, rangeEnd: er, endOfLine: eu } = P(e, O),
                    ea = '\uFEFF' === e.charAt(0);
                  if ((ea && ((e = e.slice(1)), et--, en--, er--), 'auto' === eu && (eu = ei(e)), e.includes('\r'))) {
                    let B = (O) =>
                      es(
                        e.slice(0, Math.max(O, 0)),
                        `\r
`
                      );
                    (et -= B(et)), (en -= B(en)), (er -= B(er)), (e = eo(e));
                  }
                  return {
                    hasBOM: ea,
                    text: e,
                    options: P(
                      e,
                      Object.assign(
                        Object.assign({}, O),
                        {},
                        { cursorOffset: et, rangeStart: en, rangeEnd: er, endOfLine: eu }
                      )
                    )
                  };
                }
                function D(e, O) {
                  let et = ed.resolveParser(O);
                  return !et.hasPragma || et.hasPragma(e);
                }
                function T(e, O) {
                  let et,
                    { hasBOM: en, text: er, options: eu } = $(e, el(O));
                  return (eu.rangeStart >= eu.rangeEnd && '' !== er) || (eu.requirePragma && !D(er, eu))
                    ? { formatted: e, cursorOffset: O.cursorOffset, comments: [] }
                    : (eu.rangeStart > 0 || eu.rangeEnd < er.length
                        ? (et = x(er, eu))
                        : (!eu.requirePragma &&
                            eu.insertPragma &&
                            eu.printer.insertPragma &&
                            !D(er, eu) &&
                            (er = eu.printer.insertPragma(er)),
                          (et = N(er, eu))),
                      en && ((et.formatted = '\uFEFF' + et.formatted), et.cursorOffset >= 0 && et.cursorOffset++),
                      et);
                }
                O.exports = {
                  formatWithCursor: T,
                  parse(e, O, et) {
                    let { text: en, options: er } = $(e, el(O)),
                      eu = ed.parse(en, er);
                    return et && (eu.ast = ep(eu.ast, er)), eu;
                  },
                  formatAST: (e, O) => en(eD(e, (O = el(O))), O),
                  formatDoc: (e, O) =>
                    T(er(e), Object.assign(Object.assign({}, O), {}, { parser: '__js_expression' })).formatted,
                  printToDoc(e, O) {
                    O = el(O);
                    let { ast: et, text: en } = ed.parse(e, O);
                    return E(en, et, O), eD(et, O);
                  },
                  printDocToString: (e, O) => en(e, el(O))
                };
              }
            }),
            t2 = te({
              'src/common/util-shared.js'(e, O) {
                ey();
                var {
                  getMaxContinuousCount: et,
                  getStringWidth: en,
                  getAlignmentSize: er,
                  getIndentSize: eu,
                  skip: ei,
                  skipWhitespace: ea,
                  skipSpaces: es,
                  skipNewline: eo,
                  skipToLineEnd: el,
                  skipEverythingButNewLine: ep,
                  skipInlineComment: ec,
                  skipTrailingComment: ed,
                  hasNewline: eD,
                  hasNewlineInRange: ef,
                  hasSpaces: eg,
                  isNextLineEmpty: eh,
                  isNextLineEmptyAfterIndex: eE,
                  isPreviousLineEmpty: eC,
                  getNextNonSpaceNonCommentCharacterIndex: eF,
                  makeString: eA,
                  addLeadingComment: ev,
                  addDanglingComment: ex,
                  addTrailingComment: eb
                } = e3();
                O.exports = {
                  getMaxContinuousCount: et,
                  getStringWidth: en,
                  getAlignmentSize: er,
                  getIndentSize: eu,
                  skip: ei,
                  skipWhitespace: ea,
                  skipSpaces: es,
                  skipNewline: eo,
                  skipToLineEnd: el,
                  skipEverythingButNewLine: ep,
                  skipInlineComment: ec,
                  skipTrailingComment: ed,
                  hasNewline: eD,
                  hasNewlineInRange: ef,
                  hasSpaces: eg,
                  isNextLineEmpty: eh,
                  isNextLineEmptyAfterIndex: eE,
                  isPreviousLineEmpty: eC,
                  getNextNonSpaceNonCommentCharacterIndex: eF,
                  makeString: eA,
                  addLeadingComment: ev,
                  addDanglingComment: ex,
                  addTrailingComment: eb
                };
              }
            }),
            t3 = te({
              'src/utils/create-language.js'(e, O) {
                ey(),
                  (O.exports = function (e, O) {
                    let { languageId: et } = e;
                    return Object.assign(Object.assign({ linguistLanguageId: et }, Hn(e, eo)), O(e));
                  });
              }
            }),
            t8 = te({
              'node_modules/esutils/lib/ast.js'(e, O) {
                ey(),
                  (function () {
                    function t(e) {
                      if (null == e) return !1;
                      switch (e.type) {
                        case 'ArrayExpression':
                        case 'AssignmentExpression':
                        case 'BinaryExpression':
                        case 'CallExpression':
                        case 'ConditionalExpression':
                        case 'FunctionExpression':
                        case 'Identifier':
                        case 'Literal':
                        case 'LogicalExpression':
                        case 'MemberExpression':
                        case 'NewExpression':
                        case 'ObjectExpression':
                        case 'SequenceExpression':
                        case 'ThisExpression':
                        case 'UnaryExpression':
                        case 'UpdateExpression':
                          return !0;
                      }
                      return !1;
                    }
                    function s(e) {
                      if (null == e) return !1;
                      switch (e.type) {
                        case 'DoWhileStatement':
                        case 'ForInStatement':
                        case 'ForStatement':
                        case 'WhileStatement':
                          return !0;
                      }
                      return !1;
                    }
                    function a(e) {
                      if (null == e) return !1;
                      switch (e.type) {
                        case 'BlockStatement':
                        case 'BreakStatement':
                        case 'ContinueStatement':
                        case 'DebuggerStatement':
                        case 'DoWhileStatement':
                        case 'EmptyStatement':
                        case 'ExpressionStatement':
                        case 'ForInStatement':
                        case 'ForStatement':
                        case 'IfStatement':
                        case 'LabeledStatement':
                        case 'ReturnStatement':
                        case 'SwitchStatement':
                        case 'ThrowStatement':
                        case 'TryStatement':
                        case 'VariableDeclaration':
                        case 'WhileStatement':
                        case 'WithStatement':
                          return !0;
                      }
                      return !1;
                    }
                    function n(e) {
                      return a(e) || (null != e && 'FunctionDeclaration' === e.type);
                    }
                    function u(e) {
                      switch (e.type) {
                        case 'IfStatement':
                          return null != e.alternate ? e.alternate : e.consequent;
                        case 'LabeledStatement':
                        case 'ForStatement':
                        case 'ForInStatement':
                        case 'WhileStatement':
                        case 'WithStatement':
                          return e.body;
                      }
                      return null;
                    }
                    function i(e) {
                      var O;
                      if ('IfStatement' !== e.type || null == e.alternate) return !1;
                      O = e.consequent;
                      do {
                        if ('IfStatement' === O.type && null == O.alternate) return !0;
                        O = u(O);
                      } while (O);
                      return !1;
                    }
                    O.exports = {
                      isExpression: t,
                      isStatement: a,
                      isIterationStatement: s,
                      isSourceElement: n,
                      isProblematicIfStatement: i,
                      trailingStatement: u
                    };
                  })();
              }
            }),
            t6 = te({
              'node_modules/esutils/lib/code.js'(e, O) {
                ey(),
                  (function () {
                    var e, et, en, er, eu, ei;
                    function l(e) {
                      return 48 <= e && e <= 57;
                    }
                    function p(e) {
                      return (48 <= e && e <= 57) || (97 <= e && e <= 102) || (65 <= e && e <= 70);
                    }
                    function y(e) {
                      return e >= 48 && e <= 55;
                    }
                    function h(e) {
                      return (
                        32 === e || 9 === e || 11 === e || 12 === e || 160 === e || (e >= 5760 && en.indexOf(e) >= 0)
                      );
                    }
                    function g(e) {
                      return 10 === e || 13 === e || 8232 === e || 8233 === e;
                    }
                    function c(e) {
                      return e <= 65535
                        ? String.fromCharCode(e)
                        : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) +
                            String.fromCharCode(((e - 65536) % 1024) + 56320);
                    }
                    for (
                      et = {
                        NonAsciiIdentifierStart:
                          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
                        NonAsciiIdentifierPart:
                          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
                      },
                        e = {
                          NonAsciiIdentifierStart:
                            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                          NonAsciiIdentifierPart:
                            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
                        },
                        en = [
                          5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288,
                          65279
                        ],
                        er = Array(128),
                        ei = 0;
                      ei < 128;
                      ++ei
                    )
                      er[ei] = (ei >= 97 && ei <= 122) || (ei >= 65 && ei <= 90) || 36 === ei || 95 === ei;
                    for (eu = Array(128), ei = 0; ei < 128; ++ei)
                      eu[ei] =
                        (ei >= 97 && ei <= 122) ||
                        (ei >= 65 && ei <= 90) ||
                        (ei >= 48 && ei <= 57) ||
                        36 === ei ||
                        95 === ei;
                    function f(e) {
                      return e < 128 ? er[e] : et.NonAsciiIdentifierStart.test(c(e));
                    }
                    function F(e) {
                      return e < 128 ? eu[e] : et.NonAsciiIdentifierPart.test(c(e));
                    }
                    function _(O) {
                      return O < 128 ? er[O] : e.NonAsciiIdentifierStart.test(c(O));
                    }
                    function w(O) {
                      return O < 128 ? eu[O] : e.NonAsciiIdentifierPart.test(c(O));
                    }
                    O.exports = {
                      isDecimalDigit: l,
                      isHexDigit: p,
                      isOctalDigit: y,
                      isWhiteSpace: h,
                      isLineTerminator: g,
                      isIdentifierStartES5: f,
                      isIdentifierPartES5: F,
                      isIdentifierStartES6: _,
                      isIdentifierPartES6: w
                    };
                  })();
              }
            }),
            t7 = te({
              'node_modules/esutils/lib/keyword.js'(e, O) {
                ey(),
                  (function () {
                    var e = t6();
                    function s(e) {
                      switch (e) {
                        case 'implements':
                        case 'interface':
                        case 'package':
                        case 'private':
                        case 'protected':
                        case 'public':
                        case 'static':
                        case 'let':
                          return !0;
                        default:
                          return !1;
                      }
                    }
                    function a(e, O) {
                      return (!!O || 'yield' !== e) && n(e, O);
                    }
                    function n(e, O) {
                      if (O && s(e)) return !0;
                      switch (e.length) {
                        case 2:
                          return 'if' === e || 'in' === e || 'do' === e;
                        case 3:
                          return 'var' === e || 'for' === e || 'new' === e || 'try' === e;
                        case 4:
                          return (
                            'this' === e || 'else' === e || 'case' === e || 'void' === e || 'with' === e || 'enum' === e
                          );
                        case 5:
                          return (
                            'while' === e ||
                            'break' === e ||
                            'catch' === e ||
                            'throw' === e ||
                            'const' === e ||
                            'yield' === e ||
                            'class' === e ||
                            'super' === e
                          );
                        case 6:
                          return (
                            'return' === e ||
                            'typeof' === e ||
                            'delete' === e ||
                            'switch' === e ||
                            'export' === e ||
                            'import' === e
                          );
                        case 7:
                          return 'default' === e || 'finally' === e || 'extends' === e;
                        case 8:
                          return 'function' === e || 'continue' === e || 'debugger' === e;
                        case 10:
                          return 'instanceof' === e;
                        default:
                          return !1;
                      }
                    }
                    function u(e, O) {
                      return 'null' === e || 'true' === e || 'false' === e || a(e, O);
                    }
                    function i(e, O) {
                      return 'null' === e || 'true' === e || 'false' === e || n(e, O);
                    }
                    function l(e) {
                      return 'eval' === e || 'arguments' === e;
                    }
                    function p(O) {
                      var et, en, er;
                      if (0 === O.length || ((er = O.charCodeAt(0)), !e.isIdentifierStartES5(er))) return !1;
                      for (et = 1, en = O.length; et < en; ++et)
                        if (((er = O.charCodeAt(et)), !e.isIdentifierPartES5(er))) return !1;
                      return !0;
                    }
                    function y(e, O) {
                      return (e - 55296) * 1024 + (O - 56320) + 65536;
                    }
                    function h(O) {
                      var et, en, er, eu, ei;
                      if (0 === O.length) return !1;
                      for (ei = e.isIdentifierStartES6, et = 0, en = O.length; et < en; ++et) {
                        if (55296 <= (er = O.charCodeAt(et)) && er <= 56319) {
                          if (++et >= en || !(56320 <= (eu = O.charCodeAt(et)) && eu <= 57343)) return !1;
                          er = y(er, eu);
                        }
                        if (!ei(er)) return !1;
                        ei = e.isIdentifierPartES6;
                      }
                      return !0;
                    }
                    function g(e, O) {
                      return p(e) && !u(e, O);
                    }
                    function c(e, O) {
                      return h(e) && !i(e, O);
                    }
                    O.exports = {
                      isKeywordES5: a,
                      isKeywordES6: n,
                      isReservedWordES5: u,
                      isReservedWordES6: i,
                      isRestrictedWord: l,
                      isIdentifierNameES5: p,
                      isIdentifierNameES6: h,
                      isIdentifierES5: g,
                      isIdentifierES6: c
                    };
                  })();
              }
            }),
            t9 = te({
              'node_modules/esutils/lib/utils.js'(e) {
                ey(), (e.ast = t8()), (e.code = t6()), (e.keyword = t7());
              }
            }),
            t5 = te({
              'src/language-js/utils/is-block-comment.js'(e, O) {
                ey();
                var et = new Set(['Block', 'CommentBlock', 'MultiLine']);
                O.exports = (e) => et.has(null == e ? void 0 : e.type);
              }
            }),
            t4 = te({
              'src/language-js/utils/is-node-matches.js'(e, O) {
                function t(e, O) {
                  let et = O.split('.');
                  for (let O = et.length - 1; O >= 0; O--) {
                    let en = et[O];
                    if (0 === O) return 'Identifier' === e.type && e.name === en;
                    if (
                      'MemberExpression' !== e.type ||
                      e.optional ||
                      e.computed ||
                      'Identifier' !== e.property.type ||
                      e.property.name !== en
                    )
                      return !1;
                    e = e.object;
                  }
                }
                function s(e, O) {
                  return O.some((O) => t(e, O));
                }
                ey(), (O.exports = s);
              }
            }),
            ne = te({
              'src/language-js/utils/index.js'(e, O) {
                ey();
                var et = t9().keyword.isIdentifierNameES5,
                  {
                    getLast: en,
                    hasNewline: er,
                    skipWhitespace: eu,
                    isNonEmptyArray: ei,
                    isNextLineEmptyAfterIndex: ea,
                    getStringWidth: es
                  } = e3(),
                  { locStart: eo, locEnd: el, hasSameLocStart: ep } = tW(),
                  ec = t5(),
                  ed = t4(),
                  eD = '(?:(?=.)\\s)',
                  ef = RegExp(`^${eD}*:`),
                  eg = RegExp(`^${eD}*::`);
                function w(e) {
                  var O, et;
                  return (
                    (null === (O = e.extra) || void 0 === O ? void 0 : O.parenthesized) &&
                    ec(null === (et = e.trailingComments) || void 0 === et ? void 0 : et[0]) &&
                    ef.test(e.trailingComments[0].value)
                  );
                }
                function E(e) {
                  let O = null == e ? void 0 : e[0];
                  return ec(O) && eg.test(O.value);
                }
                function N(e, O) {
                  if (!e || 'object' != typeof e) return !1;
                  if (Array.isArray(e)) return e.some((e) => N(e, O));
                  let et = O(e);
                  return 'boolean' == typeof et ? et : Object.values(e).some((e) => N(e, O));
                }
                function x(e) {
                  return (
                    'AssignmentExpression' === e.type ||
                    'BinaryExpression' === e.type ||
                    'LogicalExpression' === e.type ||
                    'NGPipeExpression' === e.type ||
                    'ConditionalExpression' === e.type ||
                    eT(e) ||
                    eB(e) ||
                    'SequenceExpression' === e.type ||
                    'TaggedTemplateExpression' === e.type ||
                    'BindExpression' === e.type ||
                    ('UpdateExpression' === e.type && !e.prefix) ||
                    st(e) ||
                    'TSNonNullExpression' === e.type
                  );
                }
                function I(e) {
                  var O, et, en, er, eu, ei;
                  return e.expressions
                    ? e.expressions[0]
                    : null !==
                        (O =
                          null !==
                            (et =
                              null !==
                                (en =
                                  null !==
                                    (er =
                                      null !== (eu = null !== (ei = e.left) && void 0 !== ei ? ei : e.test) &&
                                      void 0 !== eu
                                        ? eu
                                        : e.callee) && void 0 !== er
                                    ? er
                                    : e.object) && void 0 !== en
                                ? en
                                : e.tag) && void 0 !== et
                            ? et
                            : e.argument) && void 0 !== O
                    ? O
                    : e.expression;
                }
                function P(e, O) {
                  if (O.expressions) return ['expressions', 0];
                  if (O.left) return ['left'];
                  if (O.test) return ['test'];
                  if (O.object) return ['object'];
                  if (O.callee) return ['callee'];
                  if (O.tag) return ['tag'];
                  if (O.argument) return ['argument'];
                  if (O.expression) return ['expression'];
                  throw Error('Unexpected node has no left side.');
                }
                function $(e) {
                  return (e = new Set(e)), (O) => e.has(null == O ? void 0 : O.type);
                }
                var eh = $(['Line', 'CommentLine', 'SingleLine', 'HashbangComment', 'HTMLOpen', 'HTMLClose']),
                  eE = $([
                    'ExportDefaultDeclaration',
                    'ExportDefaultSpecifier',
                    'DeclareExportDeclaration',
                    'ExportNamedDeclaration',
                    'ExportAllDeclaration'
                  ]);
                function m(e) {
                  let O = e.getParentNode();
                  return 'declaration' === e.getName() && eE(O) ? O : null;
                }
                var eC = $([
                  'BooleanLiteral',
                  'DirectiveLiteral',
                  'Literal',
                  'NullLiteral',
                  'NumericLiteral',
                  'BigIntLiteral',
                  'DecimalLiteral',
                  'RegExpLiteral',
                  'StringLiteral',
                  'TemplateLiteral',
                  'TSTypeLiteral',
                  'JSXText'
                ]);
                function o(e) {
                  return 'NumericLiteral' === e.type || ('Literal' === e.type && 'number' == typeof e.value);
                }
                function d(e) {
                  return 'UnaryExpression' === e.type && ('+' === e.operator || '-' === e.operator) && o(e.argument);
                }
                function v(e) {
                  return 'StringLiteral' === e.type || ('Literal' === e.type && 'string' == typeof e.value);
                }
                var eF = $(['ObjectTypeAnnotation', 'TSTypeLiteral', 'TSMappedType']),
                  eA = $(['FunctionExpression', 'ArrowFunctionExpression']);
                function B(e) {
                  return (
                    'FunctionExpression' === e.type ||
                    ('ArrowFunctionExpression' === e.type && 'BlockStatement' === e.body.type)
                  );
                }
                function k(e) {
                  return (
                    eT(e) &&
                    'Identifier' === e.callee.type &&
                    ['async', 'inject', 'fakeAsync', 'waitForAsync'].includes(e.callee.name)
                  );
                }
                var ev = $(['JSXElement', 'JSXFragment']);
                function R(e, O) {
                  if ('markdown' !== e.parentParser && 'mdx' !== e.parentParser) return !1;
                  let et = O.getNode();
                  if (!et.expression || !ev(et.expression)) return !1;
                  let en = O.getParentNode();
                  return 'Program' === en.type && 1 === en.body.length;
                }
                function q(e) {
                  return 'get' === e.kind || 'set' === e.kind;
                }
                function J(e) {
                  return q(e) || ep(e, e.value);
                }
                function L(e) {
                  return (
                    ('ObjectTypeProperty' === e.type || 'ObjectTypeInternalSlot' === e.type) &&
                    'FunctionTypeAnnotation' === e.value.type &&
                    !e.static &&
                    !J(e)
                  );
                }
                function Q(e) {
                  return (
                    ('TypeAnnotation' === e.type || 'TSTypeAnnotation' === e.type) &&
                    'FunctionTypeAnnotation' === e.typeAnnotation.type &&
                    !e.static &&
                    !ep(e, e.typeAnnotation)
                  );
                }
                var ex = $(['BinaryExpression', 'LogicalExpression', 'NGPipeExpression']);
                function j(e) {
                  return eB(e) || ('BindExpression' === e.type && !!e.object);
                }
                var eb = new Set([
                  'AnyTypeAnnotation',
                  'TSAnyKeyword',
                  'NullLiteralTypeAnnotation',
                  'TSNullKeyword',
                  'ThisTypeAnnotation',
                  'TSThisType',
                  'NumberTypeAnnotation',
                  'TSNumberKeyword',
                  'VoidTypeAnnotation',
                  'TSVoidKeyword',
                  'BooleanTypeAnnotation',
                  'TSBooleanKeyword',
                  'BigIntTypeAnnotation',
                  'TSBigIntKeyword',
                  'SymbolTypeAnnotation',
                  'TSSymbolKeyword',
                  'StringTypeAnnotation',
                  'TSStringKeyword',
                  'BooleanLiteralTypeAnnotation',
                  'StringLiteralTypeAnnotation',
                  'BigIntLiteralTypeAnnotation',
                  'NumberLiteralTypeAnnotation',
                  'TSLiteralType',
                  'TSTemplateLiteralType',
                  'EmptyTypeAnnotation',
                  'MixedTypeAnnotation',
                  'TSNeverKeyword',
                  'TSObjectKeyword',
                  'TSUndefinedKeyword',
                  'TSUnknownKeyword'
                ]);
                function ie(e) {
                  return (
                    !!e &&
                    !!(
                      (('GenericTypeAnnotation' === e.type || 'TSTypeReference' === e.type) && !e.typeParameters) ||
                      eb.has(e.type)
                    )
                  );
                }
                function ee(e) {
                  return (
                    'Identifier' === e.callee.type &&
                    /^(?:before|after)(?:Each|All)$/.test(e.callee.name) &&
                    1 === e.arguments.length
                  );
                }
                var eS = [
                  'it',
                  'it.only',
                  'it.skip',
                  'describe',
                  'describe.only',
                  'describe.skip',
                  'test',
                  'test.only',
                  'test.skip',
                  'test.step',
                  'test.describe',
                  'test.describe.only',
                  'test.describe.parallel',
                  'test.describe.parallel.only',
                  'test.describe.serial',
                  'test.describe.serial.only',
                  'skip',
                  'xit',
                  'xdescribe',
                  'xtest',
                  'fit',
                  'fdescribe',
                  'ftest'
                ];
                function W(e) {
                  return ed(e, eS);
                }
                function K(e, O) {
                  if ('CallExpression' !== e.type) return !1;
                  if (1 === e.arguments.length) {
                    if (k(e) && O && K(O)) return eA(e.arguments[0]);
                    if (ee(e)) return k(e.arguments[0]);
                  } else if (
                    (2 === e.arguments.length || 3 === e.arguments.length) &&
                    ('TemplateLiteral' === e.arguments[0].type || v(e.arguments[0])) &&
                    W(e.callee)
                  )
                    return (
                      (!e.arguments[2] || !!o(e.arguments[2])) &&
                      ((2 === e.arguments.length
                        ? eA(e.arguments[1])
                        : B(e.arguments[1]) && ve(e.arguments[1]).length <= 1) ||
                        k(e.arguments[1]))
                    );
                  return !1;
                }
                var eT = $(['CallExpression', 'OptionalCallExpression']),
                  eB = $(['MemberExpression', 'OptionalMemberExpression']);
                function Fe(e) {
                  let O = 'expressions';
                  'TSTemplateLiteralType' === e.type && (O = 'types');
                  let et = e[O];
                  return (
                    0 !== et.length &&
                    et.every((e) => {
                      if (Me(e)) return !1;
                      if ('Identifier' === e.type || 'ThisExpression' === e.type) return !0;
                      if (eB(e)) {
                        let O = e;
                        for (; eB(O); )
                          if (
                            ('Identifier' !== O.property.type &&
                              'Literal' !== O.property.type &&
                              'StringLiteral' !== O.property.type &&
                              'NumericLiteral' !== O.property.type) ||
                            Me((O = O.object))
                          )
                            return !1;
                        return 'Identifier' === O.type || 'ThisExpression' === O.type;
                      }
                      return !1;
                    })
                  );
                }
                function z(e, O) {
                  return '+' === e || '-' === e ? e + O : O;
                }
                function U(e, O) {
                  let et = eo(O),
                    en = eu(e, el(O));
                  return !1 !== en && '/*' === e.slice(et, et + 2) && '*/' === e.slice(en, en + 2);
                }
                function Z(e, O) {
                  return ev(O) ? Oe(O) : Me(O, eO.Leading, (O) => er(e, el(O)));
                }
                function se(e, O) {
                  return (
                    'json' !== O.parser &&
                    v(e.key) &&
                    oe(e.key).slice(1, -1) === e.key.value &&
                    ((et(e.key.value) &&
                      !(
                        ('babel-ts' === O.parser && 'ClassProperty' === e.type) ||
                        ('typescript' === O.parser && 'PropertyDefinition' === e.type)
                      )) ||
                      (fe(e.key.value) &&
                        String(Number(e.key.value)) === e.key.value &&
                        ('babel' === O.parser ||
                          'acorn' === O.parser ||
                          'espree' === O.parser ||
                          'meriyah' === O.parser ||
                          '__babel_estree' === O.parser)))
                  );
                }
                function fe(e) {
                  return /^(?:\d+|\d+\.\d+)$/.test(e);
                }
                function ge(e, O) {
                  let et = /^[fx]?(?:describe|it|test)$/;
                  return (
                    'TaggedTemplateExpression' === O.type &&
                    O.quasi === e &&
                    'MemberExpression' === O.tag.type &&
                    'Identifier' === O.tag.property.type &&
                    'each' === O.tag.property.name &&
                    (('Identifier' === O.tag.object.type && et.test(O.tag.object.name)) ||
                      ('MemberExpression' === O.tag.object.type &&
                        'Identifier' === O.tag.object.property.type &&
                        ('only' === O.tag.object.property.name || 'skip' === O.tag.object.property.name) &&
                        'Identifier' === O.tag.object.object.type &&
                        et.test(O.tag.object.object.name)))
                  );
                }
                function he(e) {
                  return e.quasis.some((e) =>
                    e.value.raw.includes(`
`)
                  );
                }
                function we(e, O) {
                  return (
                    (('TemplateLiteral' === e.type && he(e)) ||
                      ('TaggedTemplateExpression' === e.type && he(e.quasi))) &&
                    !er(O, eo(e), { backwards: !0 })
                  );
                }
                function ke(e) {
                  if (!Me(e)) return !1;
                  let O = en(ae(e, eO.Dangling));
                  return O && !ec(O);
                }
                function Re(e) {
                  if (e.length <= 1) return !1;
                  let O = 0;
                  for (let et of e)
                    if (eA(et)) {
                      if ((O += 1) > 1) return !0;
                    } else if (eT(et)) {
                      for (let e of et.arguments) if (eA(e)) return !0;
                    }
                  return !1;
                }
                function Ne(e) {
                  let O = e.getValue(),
                    et = e.getParentNode();
                  return (
                    eT(O) &&
                    eT(et) &&
                    et.callee === O &&
                    O.arguments.length > et.arguments.length &&
                    et.arguments.length > 0
                  );
                }
                function Pe(e, O) {
                  if (O >= 2) return !1;
                  let _e = (e) => Pe(e, O + 1),
                    et =
                      ('Literal' === e.type && 'regex' in e && e.regex.pattern) ||
                      ('RegExpLiteral' === e.type && e.pattern);
                  return (
                    !(et && es(et) > 5) &&
                    ('Literal' === e.type ||
                      'BigIntLiteral' === e.type ||
                      'DecimalLiteral' === e.type ||
                      'BooleanLiteral' === e.type ||
                      'NullLiteral' === e.type ||
                      'NumericLiteral' === e.type ||
                      'RegExpLiteral' === e.type ||
                      'StringLiteral' === e.type ||
                      'Identifier' === e.type ||
                      'ThisExpression' === e.type ||
                      'Super' === e.type ||
                      'PrivateName' === e.type ||
                      'PrivateIdentifier' === e.type ||
                      'ArgumentPlaceholder' === e.type ||
                      'Import' === e.type ||
                      ('TemplateLiteral' === e.type
                        ? e.quasis.every(
                            (e) =>
                              !e.value.raw.includes(`
`)
                          ) && e.expressions.every(_e)
                        : 'ObjectExpression' === e.type
                        ? e.properties.every((e) => !e.computed && (e.shorthand || (e.value && _e(e.value))))
                        : 'ArrayExpression' === e.type
                        ? e.elements.every((e) => null === e || _e(e))
                        : tt(e)
                        ? ('ImportExpression' === e.type || Pe(e.callee, O)) && Ye(e).every(_e)
                        : eB(e)
                        ? Pe(e.object, O) && Pe(e.property, O)
                        : 'UnaryExpression' === e.type && { '!': !0, '-': !0, '+': !0, '~': !0 }[e.operator]
                        ? Pe(e.argument, O)
                        : 'UpdateExpression' === e.type && { '++': !0, '--': !0 }[e.operator]
                        ? Pe(e.argument, O)
                        : 'TSNonNullExpression' === e.type && Pe(e.expression, O)))
                  );
                }
                function oe(e) {
                  var O, et;
                  return null !== (O = null === (et = e.extra) || void 0 === et ? void 0 : et.raw) && void 0 !== O
                    ? O
                    : e.raw;
                }
                function H(e) {
                  return e;
                }
                function pe(e) {
                  return e.filepath && /\.tsx$/i.test(e.filepath);
                }
                function X(e) {
                  let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'es5';
                  return (
                    ('es5' === e.trailingComma && 'es5' === O) ||
                    ('all' === e.trailingComma && ('all' === O || 'es5' === O))
                  );
                }
                function le(e, O) {
                  switch (e.type) {
                    case 'BinaryExpression':
                    case 'LogicalExpression':
                    case 'AssignmentExpression':
                    case 'NGPipeExpression':
                      return le(e.left, O);
                    case 'MemberExpression':
                    case 'OptionalMemberExpression':
                      return le(e.object, O);
                    case 'TaggedTemplateExpression':
                      return 'FunctionExpression' !== e.tag.type && le(e.tag, O);
                    case 'CallExpression':
                    case 'OptionalCallExpression':
                      return 'FunctionExpression' !== e.callee.type && le(e.callee, O);
                    case 'ConditionalExpression':
                      return le(e.test, O);
                    case 'UpdateExpression':
                      return !e.prefix && le(e.argument, O);
                    case 'BindExpression':
                      return e.object && le(e.object, O);
                    case 'SequenceExpression':
                      return le(e.expressions[0], O);
                    case 'TSSatisfiesExpression':
                    case 'TSAsExpression':
                    case 'TSNonNullExpression':
                      return le(e.expression, O);
                    default:
                      return O(e);
                  }
                }
                var eN = { '==': !0, '!=': !0, '===': !0, '!==': !0 },
                  ew = { '*': !0, '/': !0, '%': !0 },
                  eP = { '>>': !0, '>>>': !0, '<<': !0 };
                function A(e, O) {
                  return !(
                    re(O) !== re(e) ||
                    '**' === e ||
                    (eN[e] && eN[O]) ||
                    ('%' === O && ew[e]) ||
                    ('%' === e && ew[O]) ||
                    (O !== e && ew[O] && ew[e]) ||
                    (eP[e] && eP[O])
                  );
                }
                var ek = new Map(
                  [
                    ['|>'],
                    ['??'],
                    ['||'],
                    ['&&'],
                    ['|'],
                    ['^'],
                    ['&'],
                    ['==', '===', '!=', '!=='],
                    ['<', '>', '<=', '>=', 'in', 'instanceof'],
                    ['>>', '<<', '>>>'],
                    ['+', '-'],
                    ['*', '/', '%'],
                    ['**']
                  ].flatMap((e, O) => e.map((e) => [e, O]))
                );
                function re(e) {
                  return ek.get(e);
                }
                function ye(e) {
                  return !!eP[e] || '|' === e || '^' === e || '&' === e;
                }
                function Ce(e) {
                  var O;
                  return !!e.rest || (null === (O = en(ve(e))) || void 0 === O ? void 0 : O.type) === 'RestElement';
                }
                var ej = new WeakMap();
                function ve(e) {
                  if (ej.has(e)) return ej.get(e);
                  let O = [];
                  return (
                    e.this && O.push(e.this),
                    Array.isArray(e.parameters)
                      ? O.push(...e.parameters)
                      : Array.isArray(e.params) && O.push(...e.params),
                    e.rest && O.push(e.rest),
                    ej.set(e, O),
                    O
                  );
                }
                function ze(e, O) {
                  let et = e.getValue(),
                    en = 0,
                    Ge = (e) => O(e, en++);
                  et.this && e.call(Ge, 'this'),
                    Array.isArray(et.parameters)
                      ? e.each(Ge, 'parameters')
                      : Array.isArray(et.params) && e.each(Ge, 'params'),
                    et.rest && e.call(Ge, 'rest');
                }
                var eI = new WeakMap();
                function Ye(e) {
                  if (eI.has(e)) return eI.get(e);
                  let O = e.arguments;
                  return (
                    'ImportExpression' === e.type && ((O = [e.source]), e.attributes && O.push(e.attributes)),
                    eI.set(e, O),
                    O
                  );
                }
                function Se(e, O) {
                  let et = e.getValue();
                  'ImportExpression' === et.type
                    ? (e.call((e) => O(e, 0), 'source'), et.attributes && e.call((e) => O(e, 1), 'attributes'))
                    : e.each(O, 'arguments');
                }
                function Ie(e) {
                  return 'prettier-ignore' === e.value.trim() && !e.unignore;
                }
                function Oe(e) {
                  return e && (e.prettierIgnore || Me(e, eO.PrettierIgnore));
                }
                function Je(e) {
                  return Oe(e.getValue());
                }
                var eO = {
                    Leading: 2,
                    Trailing: 4,
                    Dangling: 8,
                    Block: 16,
                    Line: 32,
                    PrettierIgnore: 64,
                    First: 128,
                    Last: 256
                  },
                  je = (e, O) => {
                    if (('function' == typeof e && ((O = e), (e = 0)), e || O))
                      return (et, en, er) =>
                        !(
                          (e & eO.Leading && !et.leading) ||
                          (e & eO.Trailing && !et.trailing) ||
                          (e & eO.Dangling && (et.leading || et.trailing)) ||
                          (e & eO.Block && !ec(et)) ||
                          (e & eO.Line && !eh(et)) ||
                          (e & eO.First && 0 !== en) ||
                          (e & eO.Last && en !== er.length - 1) ||
                          (e & eO.PrettierIgnore && !Ie(et)) ||
                          (O && !O(et))
                        );
                  };
                function Me(e, O, et) {
                  if (!ei(null == e ? void 0 : e.comments)) return !1;
                  let en = je(O, et);
                  return !en || e.comments.some(en);
                }
                function ae(e, O, et) {
                  if (!Array.isArray(null == e ? void 0 : e.comments)) return [];
                  let en = je(O, et);
                  return en ? e.comments.filter(en) : e.comments;
                }
                function tt(e) {
                  return eT(e) || 'NewExpression' === e.type || 'ImportExpression' === e.type;
                }
                function Ve(e) {
                  return (
                    e && ('ObjectProperty' === e.type || ('Property' === e.type && !e.method && 'init' === e.kind))
                  );
                }
                function We(e) {
                  return !!e.__isUsingHackPipeline;
                }
                var eL = Symbol('ifWithoutBlockAndSameLineComment');
                function st(e) {
                  return 'TSAsExpression' === e.type || 'TSSatisfiesExpression' === e.type;
                }
                O.exports = {
                  getFunctionParameters: ve,
                  iterateFunctionParametersPath: ze,
                  getCallArguments: Ye,
                  iterateCallArgumentsPath: Se,
                  hasRestParameter: Ce,
                  getLeftSide: I,
                  getLeftSidePathName: P,
                  getParentExportDeclaration: m,
                  getTypeScriptMappedTypeModifier: z,
                  hasFlowAnnotationComment: E,
                  hasFlowShorthandAnnotationComment: w,
                  hasLeadingOwnLineComment: Z,
                  hasNakedLeftSide: x,
                  hasNode: N,
                  hasIgnoreComment: Je,
                  hasNodeIgnoreComment: Oe,
                  identity: H,
                  isBinaryish: ex,
                  isCallLikeExpression: tt,
                  isEnabledHackPipeline: We,
                  isLineComment: eh,
                  isPrettierIgnoreComment: Ie,
                  isCallExpression: eT,
                  isMemberExpression: eB,
                  isExportDeclaration: eE,
                  isFlowAnnotationComment: U,
                  isFunctionCompositionArgs: Re,
                  isFunctionNotation: J,
                  isFunctionOrArrowExpression: eA,
                  isGetterOrSetter: q,
                  isJestEachTemplateLiteral: ge,
                  isJsxNode: ev,
                  isLiteral: eC,
                  isLongCurriedCallExpression: Ne,
                  isSimpleCallArgument: Pe,
                  isMemberish: j,
                  isNumericLiteral: o,
                  isSignedNumericLiteral: d,
                  isObjectProperty: Ve,
                  isObjectType: eF,
                  isObjectTypePropertyAFunction: L,
                  isSimpleType: ie,
                  isSimpleNumber: fe,
                  isSimpleTemplateLiteral: Fe,
                  isStringLiteral: v,
                  isStringPropSafeToUnquote: se,
                  isTemplateOnItsOwnLine: we,
                  isTestCall: K,
                  isTheOnlyJsxElementInMarkdown: R,
                  isTSXFile: pe,
                  isTypeAnnotationAFunction: Q,
                  isNextLineEmpty: (e, O) => {
                    let { originalText: et } = O;
                    return ea(et, el(e));
                  },
                  needsHardlineAfterDanglingComment: ke,
                  rawText: oe,
                  shouldPrintComma: X,
                  isBitwiseOperator: ye,
                  shouldFlatten: A,
                  startsWithNoLookaheadToken: le,
                  getPrecedence: re,
                  hasComment: Me,
                  getComments: ae,
                  CommentCheckFlags: eO,
                  markerForIfWithoutBlockAndSameLineComment: eL,
                  isTSTypeExpression: st
                };
              }
            }),
            nt = te({
              'src/language-js/print/template-literal.js'(e, O) {
                ey();
                var et = ev(),
                  { getStringWidth: en, getIndentSize: er } = e3(),
                  {
                    builders: {
                      join: eu,
                      hardline: ei,
                      softline: ea,
                      group: es,
                      indent: eo,
                      align: el,
                      lineSuffixBoundary: ep,
                      addAlignmentToDoc: ec
                    },
                    printer: { printDocToString: ed },
                    utils: { mapDoc: eD }
                  } = eO(),
                  {
                    isBinaryish: ef,
                    isJestEachTemplateLiteral: eg,
                    isSimpleTemplateLiteral: eh,
                    hasComment: eE,
                    isMemberExpression: eC,
                    isTSTypeExpression: eF
                  } = ne();
                function I(e, O, et) {
                  let en = e.getValue();
                  if ('TemplateLiteral' === en.type && eg(en, e.getParentNode())) {
                    let en = P(e, et, O);
                    if (en) return en;
                  }
                  let eu = 'expressions';
                  'TSTemplateLiteralType' === en.type && (eu = 'types');
                  let ei = [],
                    eD = e.map(O, eu),
                    ey = eh(en);
                  return (
                    ey &&
                      (eD = eD.map(
                        (e) =>
                          ed(e, Object.assign(Object.assign({}, et), {}, { printWidth: Number.POSITIVE_INFINITY }))
                            .formatted
                      )),
                    ei.push(ep, '`'),
                    e.each((e) => {
                      let ed = e.getName();
                      if ((ei.push(O()), ed < eD.length)) {
                        let { tabWidth: O } = et,
                          eg = e.getValue(),
                          eh = er(eg.value.raw, O),
                          eA = eD[ed];
                        if (!ey) {
                          let e = en[eu][ed];
                          (eE(e) ||
                            eC(e) ||
                            'ConditionalExpression' === e.type ||
                            'SequenceExpression' === e.type ||
                            eF(e) ||
                            ef(e)) &&
                            (eA = [eo([ea, eA]), ea]);
                        }
                        let ev =
                          0 === eh &&
                          eg.value.raw.endsWith(`
`)
                            ? el(Number.NEGATIVE_INFINITY, eA)
                            : ec(eA, eh, O);
                        ei.push(es(['${', ev, ep, '}']));
                      }
                    }, 'quasis'),
                    ei.push('`'),
                    ei
                  );
                }
                function P(e, O, er) {
                  let ea = e.getNode(),
                    es = ea.quasis[0].value.raw.trim().split(/\s*\|\s*/);
                  if (es.length > 1 || es.some((e) => e.length > 0)) {
                    O.__inJestEach = !0;
                    let el = e.map(er, 'expressions');
                    O.__inJestEach = !1;
                    let ec = [],
                      eD = el.map(
                        (e) =>
                          '${' +
                          ed(
                            e,
                            Object.assign(
                              Object.assign({}, O),
                              {},
                              { printWidth: Number.POSITIVE_INFINITY, endOfLine: 'lf' }
                            )
                          ).formatted +
                          '}'
                      ),
                      ef = [{ hasLineBreak: !1, cells: [] }];
                    for (let e = 1; e < ea.quasis.length; e++) {
                      let O = et(ef),
                        en = eD[e - 1];
                      O.cells.push(en),
                        en.includes(`
`) && (O.hasLineBreak = !0),
                        ea.quasis[e].value.raw.includes(`
`) && ef.push({ hasLineBreak: !1, cells: [] });
                    }
                    let eg = Array.from({ length: Math.max(es.length, ...ef.map((e) => e.cells.length)) }).fill(0),
                      ey = [{ cells: es }, ...ef.filter((e) => e.cells.length > 0)];
                    for (let { cells: e } of ey.filter((e) => !e.hasLineBreak))
                      for (let [O, et] of e.entries()) eg[O] = Math.max(eg[O], en(et));
                    return (
                      ec.push(
                        ep,
                        '`',
                        eo([
                          ei,
                          eu(
                            ei,
                            ey.map((e) =>
                              eu(
                                ' | ',
                                e.cells.map((O, et) => (e.hasLineBreak ? O : O + ' '.repeat(eg[et] - en(O))))
                              )
                            )
                          )
                        ]),
                        ei,
                        '`'
                      ),
                      ec
                    );
                  }
                }
                function $(e, O) {
                  let et = e.getValue(),
                    en = O();
                  return eE(et) && (en = es([eo([ea, en]), ea])), ['${', en, ep, '}'];
                }
                function D(e, O) {
                  return e.map((e) => $(e, O), 'expressions');
                }
                function T(e, O) {
                  return eD(e, (e) => ('string' == typeof e ? (O ? e.replace(/(\\*)`/g, '$1$1\\`') : m(e)) : e));
                }
                function m(e) {
                  return e.replace(/([\\`]|\${)/g, '\\$1');
                }
                O.exports = {
                  printTemplateLiteral: I,
                  printTemplateExpressions: D,
                  escapeTemplateCharacters: T,
                  uncookTemplateElementValue: m
                };
              }
            }),
            nn = te({
              'src/language-js/embed/markdown.js'(e, O) {
                ey();
                var {
                    builders: { indent: et, softline: en, literalline: er, dedentToRoot: eu }
                  } = eO(),
                  { escapeTemplateCharacters: ei } = nt();
                function i(e, O, ea) {
                  let es = e
                      .getValue()
                      .quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (e, O) => '\\'.repeat(O.length / 2) + '`'),
                    eo = l(es),
                    el = '' !== eo;
                  el && (es = es.replace(RegExp(`^${eo}`, 'gm'), ''));
                  let ep = ei(ea(es, { parser: 'markdown', __inJsTemplate: !0 }, { stripTrailingHardline: !0 }), !0);
                  return ['`', el ? et([en, ep]) : [er, eu(ep)], en, '`'];
                }
                function l(e) {
                  let O = e.match(/^([^\S\n]*)\S/m);
                  return null === O ? '' : O[1];
                }
                O.exports = i;
              }
            }),
            nr = te({
              'src/language-js/embed/css.js'(e, O) {
                ey();
                var { isNonEmptyArray: et } = e3(),
                  {
                    builders: { indent: en, hardline: er, softline: eu },
                    utils: { mapDoc: ei, replaceEndOfLine: ea, cleanDoc: es }
                  } = eO(),
                  { printTemplateExpressions: eo } = nt();
                function y(e, O, et) {
                  let en = e.getValue(),
                    er = en.quasis.map((e) => e.value.raw),
                    eu = 0;
                  return h(
                    et(
                      er.reduce((e, O, et) => (0 === et ? O : e + '@prettier-placeholder-' + eu++ + '-id' + O), ''),
                      { parser: 'scss' },
                      { stripTrailingHardline: !0 }
                    ),
                    en,
                    eo(e, O)
                  );
                }
                function h(e, O, et) {
                  if (1 === O.quasis.length && !O.quasis[0].value.raw.trim()) return '``';
                  let ei = g(e, et);
                  if (!ei) throw Error("Couldn't insert all the expressions");
                  return ['`', en([er, ei]), eu, '`'];
                }
                function g(e, O) {
                  if (!et(O)) return e;
                  let en = 0,
                    er = ei(es(e), (e) =>
                      'string' == typeof e && e.includes('@prettier-placeholder')
                        ? e.split(/@prettier-placeholder-(\d+)-id/).map((e, et) => (et % 2 == 0 ? ea(e) : (en++, O[e])))
                        : e
                    );
                  return O.length === en ? er : null;
                }
                O.exports = y;
              }
            }),
            nu = te({
              'src/language-js/embed/graphql.js'(e, O) {
                ey();
                var {
                    builders: { indent: et, join: en, hardline: er }
                  } = eO(),
                  { escapeTemplateCharacters: eu, printTemplateExpressions: ei } = nt();
                function i(e, O, ea) {
                  let es = e.getValue(),
                    eo = es.quasis.length;
                  if (1 === eo && '' === es.quasis[0].value.raw.trim()) return '``';
                  let el = ei(e, O),
                    ep = [];
                  for (let e = 0; e < eo; e++) {
                    let O = es.quasis[e],
                      et = 0 === e,
                      en = e === eo - 1,
                      er = O.value.cooked,
                      ei = er.split(`
`),
                      ec = ei.length,
                      ed = el[e],
                      eD = ec > 2 && '' === ei[0].trim() && '' === ei[1].trim(),
                      ef = ec > 2 && '' === ei[ec - 1].trim() && '' === ei[ec - 2].trim(),
                      eg = ei.every((e) => /^\s*(?:#[^\n\r]*)?$/.test(e));
                    if (!en && /#[^\n\r]*$/.test(ei[ec - 1])) return null;
                    let ey = null;
                    (ey = eg ? l(ei) : ea(er, { parser: 'graphql' }, { stripTrailingHardline: !0 }))
                      ? ((ey = eu(ey, !1)), !et && eD && ep.push(''), ep.push(ey), !en && ef && ep.push(''))
                      : et || en || !eD || ep.push(''),
                      ed && ep.push(ed);
                  }
                  return ['`', et([er, en(er, ep)]), er, '`'];
                }
                function l(e) {
                  let O = [],
                    et = !1,
                    eu = e.map((e) => e.trim());
                  for (let [e, en] of eu.entries())
                    '' !== en && ('' === eu[e - 1] && et ? O.push([er, en]) : O.push(en), (et = !0));
                  return 0 === O.length ? null : en(er, O);
                }
                O.exports = i;
              }
            }),
            ni = te({
              'src/language-js/embed/html.js'(e, O) {
                ey();
                var {
                    builders: { indent: et, line: en, hardline: er, group: eu },
                    utils: { mapDoc: ei }
                  } = eO(),
                  { printTemplateExpressions: ea, uncookTemplateElementValue: es } = nt(),
                  eo = 0;
                function y(e, O, el, ep, ec) {
                  let { parser: ed } = ec,
                    eD = e.getValue(),
                    ef = eo;
                  eo = (eo + 1) >>> 0;
                  let N = (e) => `PRETTIER_HTML_PLACEHOLDER_${e}_${ef}_IN_JS`,
                    eg = eD.quasis
                      .map((e, O, et) => (O === et.length - 1 ? e.value.cooked : e.value.cooked + N(O)))
                      .join(''),
                    ey = ea(e, O);
                  if (0 === ey.length && 0 === eg.trim().length) return '``';
                  let eh = RegExp(N('(\\d+)'), 'g'),
                    eE = 0,
                    eC = ei(
                      el(
                        eg,
                        {
                          parser: ed,
                          __onHtmlRoot(e) {
                            eE = e.children.length;
                          }
                        },
                        { stripTrailingHardline: !0 }
                      ),
                      (e) => {
                        if ('string' != typeof e) return e;
                        let O = [],
                          et = e.split(eh);
                        for (let e = 0; e < et.length; e++) {
                          let en = et[e];
                          if (e % 2 == 0) {
                            en &&
                              ((en = es(en)),
                              ep.__embeddedInHtml && (en = en.replace(/<\/(script)\b/gi, '<\\/$1')),
                              O.push(en));
                            continue;
                          }
                          let er = Number(en);
                          O.push(ey[er]);
                        }
                        return O;
                      }
                    ),
                    eF = /^\s/.test(eg) ? ' ' : '',
                    eA = /\s$/.test(eg) ? ' ' : '',
                    ev = 'ignore' === ep.htmlWhitespaceSensitivity ? er : eF && eA ? en : null;
                  return eu(ev ? ['`', et([ev, eu(eC)]), ev, '`'] : ['`', eF, eE > 1 ? et(eu(eC)) : eu(eC), eA, '`']);
                }
                O.exports = y;
              }
            }),
            na = te({
              'src/language-js/embed.js'(e, O) {
                ey();
                var { hasComment: et, CommentCheckFlags: en, isObjectProperty: er } = ne(),
                  eu = nn(),
                  ei = nr(),
                  ea = nu(),
                  es = ni();
                function p(e) {
                  return g(e) || _(e) || w(e) || c(e)
                    ? 'css'
                    : x(e)
                    ? 'graphql'
                    : P(e)
                    ? 'html'
                    : f(e)
                    ? 'angular'
                    : h(e)
                    ? 'markdown'
                    : void 0;
                }
                function y(e, O, et, en) {
                  let er = e.getValue();
                  if ('TemplateLiteral' !== er.type || $(er)) return;
                  let eo = p(e);
                  if (eo) {
                    if ('markdown' === eo) return eu(e, O, et);
                    if ('css' === eo) return ei(e, O, et);
                    if ('graphql' === eo) return ea(e, O, et);
                    if ('html' === eo || 'angular' === eo) return es(e, O, et, en, { parser: eo });
                  }
                }
                function h(e) {
                  let O = e.getValue(),
                    et = e.getParentNode();
                  return (
                    et &&
                    'TaggedTemplateExpression' === et.type &&
                    1 === O.quasis.length &&
                    'Identifier' === et.tag.type &&
                    ('md' === et.tag.name || 'markdown' === et.tag.name)
                  );
                }
                function g(e) {
                  let O = e.getValue(),
                    et = e.getParentNode(),
                    en = e.getParentNode(1);
                  return (
                    (en &&
                      O.quasis &&
                      'JSXExpressionContainer' === et.type &&
                      'JSXElement' === en.type &&
                      'style' === en.openingElement.name.name &&
                      en.openingElement.attributes.some((e) => 'jsx' === e.name.name)) ||
                    (et &&
                      'TaggedTemplateExpression' === et.type &&
                      'Identifier' === et.tag.type &&
                      'css' === et.tag.name) ||
                    (et &&
                      'TaggedTemplateExpression' === et.type &&
                      'MemberExpression' === et.tag.type &&
                      'css' === et.tag.object.name &&
                      ('global' === et.tag.property.name || 'resolve' === et.tag.property.name))
                  );
                }
                function c(e) {
                  return e.match(
                    (e) => 'TemplateLiteral' === e.type,
                    (e, O) => 'ArrayExpression' === e.type && 'elements' === O,
                    (e, O) => er(e) && 'Identifier' === e.key.type && 'styles' === e.key.name && 'value' === O,
                    ...eo
                  );
                }
                function f(e) {
                  return e.match(
                    (e) => 'TemplateLiteral' === e.type,
                    (e, O) => er(e) && 'Identifier' === e.key.type && 'template' === e.key.name && 'value' === O,
                    ...eo
                  );
                }
                var eo = [
                  (e, O) => 'ObjectExpression' === e.type && 'properties' === O,
                  (e, O) =>
                    'CallExpression' === e.type &&
                    'Identifier' === e.callee.type &&
                    'Component' === e.callee.name &&
                    'arguments' === O,
                  (e, O) => 'Decorator' === e.type && 'expression' === O
                ];
                function _(e) {
                  let O = e.getParentNode();
                  if (!O || 'TaggedTemplateExpression' !== O.type) return !1;
                  let et = 'ParenthesizedExpression' === O.tag.type ? O.tag.expression : O.tag;
                  switch (et.type) {
                    case 'MemberExpression':
                      return E(et.object) || N(et);
                    case 'CallExpression':
                      return (
                        E(et.callee) ||
                        ('MemberExpression' === et.callee.type &&
                          (('MemberExpression' === et.callee.object.type &&
                            (E(et.callee.object.object) || N(et.callee.object))) ||
                            ('CallExpression' === et.callee.object.type && E(et.callee.object.callee))))
                      );
                    case 'Identifier':
                      return 'css' === et.name;
                    default:
                      return !1;
                  }
                }
                function w(e) {
                  let O = e.getParentNode(),
                    et = e.getParentNode(1);
                  return (
                    et &&
                    'JSXExpressionContainer' === O.type &&
                    'JSXAttribute' === et.type &&
                    'JSXIdentifier' === et.name.type &&
                    'css' === et.name.name
                  );
                }
                function E(e) {
                  return 'Identifier' === e.type && 'styled' === e.name;
                }
                function N(e) {
                  return /^[A-Z]/.test(e.object.name) && 'extend' === e.property.name;
                }
                function x(e) {
                  let O = e.getValue(),
                    et = e.getParentNode();
                  return (
                    I(O, 'GraphQL') ||
                    (et &&
                      (('TaggedTemplateExpression' === et.type &&
                        (('MemberExpression' === et.tag.type &&
                          'graphql' === et.tag.object.name &&
                          'experimental' === et.tag.property.name) ||
                          ('Identifier' === et.tag.type && ('gql' === et.tag.name || 'graphql' === et.tag.name)))) ||
                        ('CallExpression' === et.type &&
                          'Identifier' === et.callee.type &&
                          'graphql' === et.callee.name)))
                  );
                }
                function I(e, O) {
                  return et(e, en.Block | en.Leading, (e) => {
                    let { value: et } = e;
                    return et === ` ${O} `;
                  });
                }
                function P(e) {
                  return (
                    I(e.getValue(), 'HTML') ||
                    e.match(
                      (e) => 'TemplateLiteral' === e.type,
                      (e, O) =>
                        'TaggedTemplateExpression' === e.type &&
                        'Identifier' === e.tag.type &&
                        'html' === e.tag.name &&
                        'quasi' === O
                    )
                  );
                }
                function $(e) {
                  let { quasis: O } = e;
                  return O.some((e) => {
                    let {
                      value: { cooked: O }
                    } = e;
                    return null === O;
                  });
                }
                O.exports = y;
              }
            }),
            ns = te({
              'src/language-js/clean.js'(e, O) {
                ey();
                var et = t5(),
                  en = new Set([
                    'range',
                    'raw',
                    'comments',
                    'leadingComments',
                    'trailingComments',
                    'innerComments',
                    'extra',
                    'start',
                    'end',
                    'loc',
                    'flags',
                    'errors',
                    'tokens'
                  ]),
                  a = (e) => {
                    for (let O of e.quasis) delete O.value;
                  };
                function n(e, O, en) {
                  if (
                    ('Program' === e.type && delete O.sourceType,
                    ('BigIntLiteral' === e.type || 'BigIntLiteralTypeAnnotation' === e.type) &&
                      O.value &&
                      (O.value = O.value.toLowerCase()),
                    ('BigIntLiteral' === e.type || 'Literal' === e.type) &&
                      O.bigint &&
                      (O.bigint = O.bigint.toLowerCase()),
                    'DecimalLiteral' === e.type && (O.value = Number(O.value)),
                    'Literal' === e.type && O.decimal && (O.decimal = Number(O.decimal)),
                    'EmptyStatement' === e.type ||
                      'JSXText' === e.type ||
                      ('JSXExpressionContainer' === e.type &&
                        ('Literal' === e.expression.type || 'StringLiteral' === e.expression.type) &&
                        ' ' === e.expression.value))
                  )
                    return null;
                  if (
                    (('Property' === e.type ||
                      'ObjectProperty' === e.type ||
                      'MethodDefinition' === e.type ||
                      'ClassProperty' === e.type ||
                      'ClassMethod' === e.type ||
                      'PropertyDefinition' === e.type ||
                      'TSDeclareMethod' === e.type ||
                      'TSPropertySignature' === e.type ||
                      'ObjectTypeProperty' === e.type) &&
                      'object' == typeof e.key &&
                      e.key &&
                      ('Literal' === e.key.type ||
                        'NumericLiteral' === e.key.type ||
                        'StringLiteral' === e.key.type ||
                        'Identifier' === e.key.type) &&
                      delete O.key,
                    'JSXElement' === e.type &&
                      'style' === e.openingElement.name.name &&
                      e.openingElement.attributes.some((e) => 'jsx' === e.name.name))
                  )
                    for (let { type: e, expression: et } of O.children)
                      'JSXExpressionContainer' === e && 'TemplateLiteral' === et.type && a(et);
                  'JSXAttribute' === e.type &&
                    'css' === e.name.name &&
                    'JSXExpressionContainer' === e.value.type &&
                    'TemplateLiteral' === e.value.expression.type &&
                    a(O.value.expression),
                    'JSXAttribute' === e.type &&
                      e.value &&
                      'Literal' === e.value.type &&
                      /["']|&quot;|&apos;/.test(e.value.value) &&
                      (O.value.value = O.value.value.replace(/["']|&quot;|&apos;/g, '"'));
                  let er = e.expression || e.callee;
                  if (
                    'Decorator' === e.type &&
                    'CallExpression' === er.type &&
                    'Component' === er.callee.name &&
                    1 === er.arguments.length
                  ) {
                    let et = e.expression.arguments[0].properties;
                    for (let [e, en] of O.expression.arguments[0].properties.entries())
                      switch (et[e].key.name) {
                        case 'styles':
                          'ArrayExpression' === en.value.type && a(en.value.elements[0]);
                          break;
                        case 'template':
                          'TemplateLiteral' === en.value.type && a(en.value);
                      }
                  }
                  if (
                    ('TaggedTemplateExpression' === e.type &&
                      ('MemberExpression' === e.tag.type ||
                        ('Identifier' === e.tag.type &&
                          ('gql' === e.tag.name ||
                            'graphql' === e.tag.name ||
                            'css' === e.tag.name ||
                            'md' === e.tag.name ||
                            'markdown' === e.tag.name ||
                            'html' === e.tag.name)) ||
                        'CallExpression' === e.tag.type) &&
                      a(O.quasi),
                    'TemplateLiteral' === e.type)
                  ) {
                    var eu;
                    ((null === (eu = e.leadingComments) || void 0 === eu
                      ? void 0
                      : eu.some((e) => et(e) && ['GraphQL', 'HTML'].some((O) => e.value === ` ${O} `))) ||
                      ('CallExpression' === en.type && 'graphql' === en.callee.name) ||
                      !e.leadingComments) &&
                      a(O);
                  }
                  if (
                    ('InterpreterDirective' === e.type && (O.value = O.value.trimEnd()),
                    ('TSIntersectionType' === e.type || 'TSUnionType' === e.type) && 1 === e.types.length)
                  )
                    return O.types[0];
                }
                (n.ignoredProperties = en), (O.exports = n);
              }
            }),
            no = {};
          function ao() {
            if (typeof nl > 'u') {
              var e = new ArrayBuffer(2),
                O = new Uint8Array(e),
                et = new Uint16Array(e);
              if (((O[0] = 1), (O[1] = 2), 258 === et[0])) nl = 'BE';
              else if (513 === et[0]) nl = 'LE';
              else throw Error('unable to figure out endianess');
            }
            return nl;
          }
          function oo() {
            return 'u' > typeof globalThis.location ? globalThis.location.hostname : '';
          }
          function lo() {
            return [];
          }
          function co() {
            return 0;
          }
          function po() {
            return Number.MAX_VALUE;
          }
          function fo() {
            return Number.MAX_VALUE;
          }
          function Do() {
            return [];
          }
          function mo() {
            return 'Browser';
          }
          function go() {
            return 'u' > typeof globalThis.navigator ? globalThis.navigator.appVersion : '';
          }
          function yo() {}
          function ho() {}
          function nd() {
            return 'javascript';
          }
          function ud() {
            return 'browser';
          }
          function $n() {
            return '/tmp';
          }
          Kt(no, {
            EOL: () => nc,
            arch: () => nd,
            cpus: () => Do,
            default: () => nD,
            endianness: () => ao,
            freemem: () => po,
            getNetworkInterfaces: () => ho,
            hostname: () => oo,
            loadavg: () => lo,
            networkInterfaces: () => yo,
            platform: () => ud,
            release: () => go,
            tmpDir: () => $n,
            tmpdir: () => np,
            totalmem: () => fo,
            type: () => mo,
            uptime: () => co
          });
          var nl,
            np,
            nc,
            nD,
            nf = ht({
              'node-modules-polyfills:os'() {
                ey(),
                  (nD = {
                    EOL: (nc = `
`),
                    tmpdir: (np = $n),
                    tmpDir: $n,
                    networkInterfaces: yo,
                    getNetworkInterfaces: ho,
                    release: go,
                    type: mo,
                    cpus: Do,
                    totalmem: fo,
                    freemem: po,
                    uptime: co,
                    loadavg: lo,
                    hostname: oo,
                    endianness: ao
                  });
              }
            }),
            ng = te({
              'node-modules-polyfills-commonjs:os'(e, O) {
                ey();
                var et = (nf(), ft(no));
                if (et && et.default) for (let e in ((O.exports = et.default), et)) O.exports[e] = et[e];
                else et && (O.exports = et);
              }
            }),
            ny = te({
              'node_modules/detect-newline/index.js'(e, O) {
                ey();
                var t = (e) => {
                  if ('string' != typeof e) throw TypeError('Expected a string');
                  let O = e.match(/(?:\r?\n)/g) || [];
                  if (0 === O.length) return;
                  let et = O.filter(
                      (e) =>
                        e ===
                        `\r
`
                    ).length,
                    en = O.length - et;
                  return et > en
                    ? `\r
`
                    : `
`;
                };
                (O.exports = t),
                  (O.exports.graceful = (e) =>
                    ('string' == typeof e && t(e)) ||
                    `
`);
              }
            }),
            nh = te({
              'node_modules/jest-docblock/build/index.js'(e) {
                function r() {
                  let e = ng();
                  return (
                    (r = function () {
                      return e;
                    }),
                    e
                  );
                }
                function t() {
                  let e = s(ny());
                  return (
                    (t = function () {
                      return e;
                    }),
                    e
                  );
                }
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                ey(),
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.extract = c),
                  (e.parse = F),
                  (e.parseWithComments = _),
                  (e.print = w),
                  (e.strip = f);
                var O = /\*\/$/,
                  et = /^\/\*\*?/,
                  en = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
                  er = /(^|\s+)\/\/([^\r\n]*)/g,
                  eu = /^(\r?\n)+/,
                  ei = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
                  ea = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
                  es = /(\r?\n|^) *\* ?/g,
                  eo = [];
                function c(e) {
                  let O = e.match(en);
                  return O ? O[0].trimLeft() : '';
                }
                function f(e) {
                  let O = e.match(en);
                  return O && O[0] ? e.substring(O[0].length) : e;
                }
                function F(e) {
                  return _(e).pragmas;
                }
                function _(e) {
                  let en = (0, t().default)(e) || r().EOL;
                  e = e.replace(et, '').replace(O, '').replace(es, '$1');
                  let el = '';
                  for (; el !== e; ) (el = e), (e = e.replace(ei, `${en}$1 $2${en}`));
                  e = e.replace(eu, '').trimRight();
                  let ep = Object.create(null),
                    ec = e.replace(ea, '').replace(eu, '').trimRight(),
                    ed;
                  for (; (ed = ea.exec(e)); ) {
                    let e = ed[2].replace(er, '');
                    'string' == typeof ep[ed[1]] || Array.isArray(ep[ed[1]])
                      ? (ep[ed[1]] = eo.concat(ep[ed[1]], e))
                      : (ep[ed[1]] = e);
                  }
                  return { comments: ec, pragmas: ep };
                }
                function w(e) {
                  let { comments: O = '', pragmas: et = {} } = e,
                    en = (0, t().default)(O) || r().EOL,
                    er = Object.keys(et),
                    eu = er
                      .map((e) => E(e, et[e]))
                      .reduce((e, O) => e.concat(O), [])
                      .map((e) => ` * ${e}${en}`)
                      .join('');
                  if (!O) {
                    if (0 === er.length) return '';
                    if (1 === er.length && !Array.isArray(et[er[0]])) {
                      let e = et[er[0]];
                      return `/** ${E(er[0], e)[0]} */`;
                    }
                  }
                  let ei =
                    O.split(en)
                      .map((e) => ` * ${e}`)
                      .join(en) + en;
                  return '/**' + en + (O ? ei : '') + (O && er.length ? ' *' + en : '') + eu + ' */';
                }
                function E(e, O) {
                  return eo.concat(O).map((O) => `@${e} ${O}`.trim());
                }
              }
            }),
            nE = te({
              'src/language-js/utils/get-shebang.js'(e, O) {
                function t(e) {
                  if (!e.startsWith('#!')) return '';
                  let O = e.indexOf(`
`);
                  return -1 === O ? e : e.slice(0, O);
                }
                ey(), (O.exports = t);
              }
            }),
            nC = te({
              'src/language-js/pragma.js'(e, O) {
                ey();
                var { parseWithComments: et, strip: en, extract: er, print: eu } = nh(),
                  { normalizeEndOfLine: ei } = eA(),
                  ea = nE();
                function l(e) {
                  let O = ea(e);
                  O && (e = e.slice(O.length + 1));
                  let { pragmas: en, comments: eu } = et(er(e));
                  return { shebang: O, text: e, pragmas: en, comments: eu };
                }
                function p(e) {
                  let O = Object.keys(l(e).pragmas);
                  return O.includes('prettier') || O.includes('format');
                }
                function y(e) {
                  let { shebang: O, text: et, pragmas: er, comments: ea } = l(e),
                    es = en(et);
                  return (
                    (O
                      ? `${O}
`
                      : '') +
                    ei(eu({ pragmas: Object.assign({ format: '' }, er), comments: ea.trimStart() })) +
                    (es.startsWith(`
`)
                      ? `
`
                      : `

`) +
                    es
                  );
                }
                O.exports = { hasPragma: p, insertPragma: y };
              }
            }),
            nF = te({
              'src/language-js/utils/is-type-cast-comment.js'(e, O) {
                ey();
                var et = t5();
                function s(e) {
                  return et(e) && '*' === e.value[0] && /@(?:type|satisfies)\b/.test(e.value);
                }
                O.exports = s;
              }
            }),
            nA = te({
              'src/language-js/comments.js'(e, O) {
                ey();
                var {
                    getLast: et,
                    hasNewline: en,
                    getNextNonSpaceNonCommentCharacterIndexWithStartIndex: er,
                    getNextNonSpaceNonCommentCharacter: eu,
                    hasNewlineInRange: ei,
                    addLeadingComment: ea,
                    addTrailingComment: es,
                    addDanglingComment: eo,
                    getNextNonSpaceNonCommentCharacterIndex: el,
                    isNonEmptyArray: ep
                  } = e3(),
                  {
                    getFunctionParameters: ec,
                    isPrettierIgnoreComment: ed,
                    isJsxNode: eD,
                    hasFlowShorthandAnnotationComment: ef,
                    hasFlowAnnotationComment: eg,
                    hasIgnoreComment: eh,
                    isCallLikeExpression: eE,
                    getCallArguments: eC,
                    isCallExpression: eF,
                    isMemberExpression: eA,
                    isObjectProperty: ev,
                    isLineComment: ex,
                    getComments: eb,
                    CommentCheckFlags: eS,
                    markerForIfWithoutBlockAndSameLineComment: eT
                  } = ne(),
                  { locStart: eB, locEnd: eN } = tW(),
                  ew = t5(),
                  eP = nF();
                function S(e) {
                  return [H, Fe, Q, q, J, L, ie, he, se, ge, we, ke, ce, z, U].some((O) => O(e));
                }
                function b(e) {
                  return [R, Fe, V, we, q, J, L, ie, z, Z, fe, ge, Pe, U, X].some((O) => O(e));
                }
                function B(e) {
                  return [H, q, J, j, ue, ce, ge, de, K, pe, U, oe].some((O) => O(e));
                }
                function k(e, O) {
                  let et = (e.body || e.properties).find((e) => {
                    let { type: O } = e;
                    return 'EmptyStatement' !== O;
                  });
                  et ? ea(et, O) : eo(e, O);
                }
                function M(e, O) {
                  'BlockStatement' === e.type ? k(e, O) : ea(e, O);
                }
                function R(e) {
                  let { comment: O, followingNode: et } = e;
                  return !!(et && eP(O)) && (ea(et, O), !0);
                }
                function q(e) {
                  let { comment: O, precedingNode: et, enclosingNode: en, followingNode: er, text: ei } = e;
                  if ((null == en ? void 0 : en.type) !== 'IfStatement' || !er) return !1;
                  if (')' === eu(ei, O, eN)) return es(et, O), !0;
                  if (et === en.consequent && er === en.alternate) {
                    if ('BlockStatement' === et.type) es(et, O);
                    else {
                      let e = 'SingleLine' === O.type || O.loc.start.line === O.loc.end.line,
                        er = O.loc.start.line === et.loc.start.line;
                      e && er ? eo(et, O, eT) : eo(en, O);
                    }
                    return !0;
                  }
                  return 'BlockStatement' === er.type
                    ? (k(er, O), !0)
                    : 'IfStatement' === er.type
                    ? (M(er.consequent, O), !0)
                    : en.consequent === er && (ea(er, O), !0);
                }
                function J(e) {
                  let { comment: O, precedingNode: et, enclosingNode: en, followingNode: er, text: ei } = e;
                  return (
                    (null == en ? void 0 : en.type) === 'WhileStatement' &&
                    !!er &&
                    (')' === eu(ei, O, eN)
                      ? (es(et, O), !0)
                      : 'BlockStatement' === er.type
                      ? (k(er, O), !0)
                      : en.body === er && (ea(er, O), !0))
                  );
                }
                function L(e) {
                  let { comment: O, precedingNode: et, enclosingNode: en, followingNode: er } = e;
                  return (
                    ((null == en ? void 0 : en.type) === 'TryStatement' ||
                      (null == en ? void 0 : en.type) === 'CatchClause') &&
                    !!er &&
                    ('CatchClause' === en.type && et
                      ? (es(et, O), !0)
                      : 'BlockStatement' === er.type
                      ? (k(er, O), !0)
                      : 'TryStatement' === er.type
                      ? (M(er.finalizer, O), !0)
                      : 'CatchClause' === er.type && (M(er.body, O), !0))
                  );
                }
                function Q(e) {
                  let { comment: O, enclosingNode: et, followingNode: en } = e;
                  return !!eA(et) && (null == en ? void 0 : en.type) === 'Identifier' && (ea(et, O), !0);
                }
                function V(e) {
                  let { comment: O, precedingNode: et, enclosingNode: en, followingNode: er, text: eu } = e,
                    es = et && !ei(eu, eN(et), eB(O));
                  return (
                    (!et || !es) &&
                    ((null == en ? void 0 : en.type) === 'ConditionalExpression' ||
                      (null == en ? void 0 : en.type) === 'TSConditionalType') &&
                    !!er &&
                    (ea(er, O), !0)
                  );
                }
                function j(e) {
                  let { comment: O, precedingNode: et, enclosingNode: en } = e;
                  return (
                    !!ev(en) &&
                    !!en.shorthand &&
                    en.key === et &&
                    'AssignmentPattern' === en.value.type &&
                    (es(en.value.left, O), !0)
                  );
                }
                var ek = new Set([
                  'ClassDeclaration',
                  'ClassExpression',
                  'DeclareClass',
                  'DeclareInterface',
                  'InterfaceDeclaration',
                  'TSInterfaceDeclaration'
                ]);
                function ie(e) {
                  let { comment: O, precedingNode: en, enclosingNode: er, followingNode: eu } = e;
                  if (ek.has(null == er ? void 0 : er.type)) {
                    if (ep(er.decorators) && !(eu && 'Decorator' === eu.type)) return es(et(er.decorators), O), !0;
                    if (er.body && eu === er.body) return k(er.body, O), !0;
                    if (eu) {
                      if (er.superClass && eu === er.superClass && en && (en === er.id || en === er.typeParameters))
                        return es(en, O), !0;
                      for (let e of ['implements', 'extends', 'mixins'])
                        if (er[e] && eu === er[e][0])
                          return (
                            en && (en === er.id || en === er.typeParameters || en === er.superClass)
                              ? es(en, O)
                              : eo(er, O, e),
                            !0
                          );
                    }
                  }
                  return !1;
                }
                var ej = new Set([
                  'ClassMethod',
                  'ClassProperty',
                  'PropertyDefinition',
                  'TSAbstractPropertyDefinition',
                  'TSAbstractMethodDefinition',
                  'TSDeclareMethod',
                  'MethodDefinition',
                  'ClassAccessorProperty',
                  'AccessorProperty',
                  'TSAbstractAccessorProperty'
                ]);
                function ce(e) {
                  let { comment: O, precedingNode: et, enclosingNode: en, text: er } = e;
                  return (
                    !!(
                      (en &&
                        et &&
                        '(' === eu(er, O, eN) &&
                        ('Property' === en.type ||
                          'TSDeclareMethod' === en.type ||
                          'TSAbstractMethodDefinition' === en.type) &&
                        'Identifier' === et.type &&
                        en.key === et &&
                        ':' !== eu(er, et, eN)) ||
                      ((null == et ? void 0 : et.type) === 'Decorator' && ej.has(null == en ? void 0 : en.type))
                    ) && (es(et, O), !0)
                  );
                }
                var eI = new Set([
                  'FunctionDeclaration',
                  'FunctionExpression',
                  'ClassMethod',
                  'MethodDefinition',
                  'ObjectMethod'
                ]);
                function K(e) {
                  let { comment: O, precedingNode: et, enclosingNode: en, text: er } = e;
                  return '(' === eu(er, O, eN) && !!(et && eI.has(null == en ? void 0 : en.type)) && (es(et, O), !0);
                }
                function de(e) {
                  let { comment: O, enclosingNode: et, text: en } = e;
                  if ((null == et ? void 0 : et.type) !== 'ArrowFunctionExpression') return !1;
                  let er = el(en, O, eN);
                  return !1 !== er && '=>' === en.slice(er, er + 2) && (eo(et, O), !0);
                }
                function ue(e) {
                  let { comment: O, enclosingNode: et, text: en } = e;
                  return (
                    ')' === eu(en, O, eN) &&
                    (et && ((le(et) && 0 === ec(et).length) || (eE(et) && 0 === eC(et).length))
                      ? (eo(et, O), !0)
                      : ((null == et ? void 0 : et.type) === 'MethodDefinition' ||
                          (null == et ? void 0 : et.type) === 'TSAbstractMethodDefinition') &&
                        0 === ec(et.value).length &&
                        (eo(et.value, O), !0))
                  );
                }
                function Fe(e) {
                  let { comment: O, precedingNode: en, enclosingNode: ei, followingNode: ea, text: eo } = e;
                  if (
                    ((null == en ? void 0 : en.type) === 'FunctionTypeParam' &&
                      (null == ei ? void 0 : ei.type) === 'FunctionTypeAnnotation' &&
                      (null == ea ? void 0 : ea.type) !== 'FunctionTypeParam') ||
                    (((null == en ? void 0 : en.type) === 'Identifier' ||
                      (null == en ? void 0 : en.type) === 'AssignmentPattern') &&
                      ei &&
                      le(ei) &&
                      ')' === eu(eo, O, eN))
                  )
                    return es(en, O), !0;
                  if (
                    (null == ei ? void 0 : ei.type) === 'FunctionDeclaration' &&
                    (null == ea ? void 0 : ea.type) === 'BlockStatement'
                  ) {
                    let e = (() => {
                      let e = ec(ei);
                      if (e.length > 0) return er(eo, eN(et(e)));
                      let O = er(eo, eN(ei.id));
                      return !1 !== O && er(eo, O + 1);
                    })();
                    if (eB(O) > e) return k(ea, O), !0;
                  }
                  return !1;
                }
                function z(e) {
                  let { comment: O, enclosingNode: et } = e;
                  return (null == et ? void 0 : et.type) === 'LabeledStatement' && (ea(et, O), !0);
                }
                function U(e) {
                  let { comment: O, enclosingNode: et } = e;
                  return (
                    ((null == et ? void 0 : et.type) === 'ContinueStatement' ||
                      (null == et ? void 0 : et.type) === 'BreakStatement') &&
                    !et.label &&
                    (es(et, O), !0)
                  );
                }
                function Z(e) {
                  let { comment: O, precedingNode: et, enclosingNode: en } = e;
                  return (
                    !!eF(en) && !!et && en.callee === et && en.arguments.length > 0 && (ea(en.arguments[0], O), !0)
                  );
                }
                function se(e) {
                  let { comment: O, precedingNode: et, enclosingNode: en, followingNode: er } = e;
                  return (null == en ? void 0 : en.type) === 'UnionTypeAnnotation' ||
                    (null == en ? void 0 : en.type) === 'TSUnionType'
                    ? (ed(O) && ((er.prettierIgnore = !0), (O.unignore = !0)), !!et && (es(et, O), !0))
                    : (((null == er ? void 0 : er.type) === 'UnionTypeAnnotation' ||
                        (null == er ? void 0 : er.type) === 'TSUnionType') &&
                        ed(O) &&
                        ((er.types[0].prettierIgnore = !0), (O.unignore = !0)),
                      !1);
                }
                function fe(e) {
                  let { comment: O, enclosingNode: et } = e;
                  return !!ev(et) && (ea(et, O), !0);
                }
                function ge(e) {
                  let { comment: O, enclosingNode: et, followingNode: en, ast: er, isLastComment: eu } = e;
                  return er && er.body && 0 === er.body.length
                    ? (eu ? eo(er, O) : ea(er, O), !0)
                    : (null == et ? void 0 : et.type) !== 'Program' ||
                      (null == et ? void 0 : et.body.length) !== 0 ||
                      ep(et.directives)
                    ? (null == en ? void 0 : en.type) === 'Program' &&
                      (null == en ? void 0 : en.body.length) === 0 &&
                      (null == et ? void 0 : et.type) === 'ModuleExpression' &&
                      (eo(en, O), !0)
                    : (eu ? eo(et, O) : ea(et, O), !0);
                }
                function he(e) {
                  let { comment: O, enclosingNode: et } = e;
                  return (
                    ((null == et ? void 0 : et.type) === 'ForInStatement' ||
                      (null == et ? void 0 : et.type) === 'ForOfStatement') &&
                    (ea(et, O), !0)
                  );
                }
                function we(e) {
                  let { comment: O, precedingNode: et, enclosingNode: er, text: eu } = e;
                  if (
                    (null == er ? void 0 : er.type) === 'ImportSpecifier' ||
                    (null == er ? void 0 : er.type) === 'ExportSpecifier'
                  )
                    return ea(er, O), !0;
                  let ei =
                      (null == et ? void 0 : et.type) === 'ImportSpecifier' &&
                      (null == er ? void 0 : er.type) === 'ImportDeclaration',
                    eo =
                      (null == et ? void 0 : et.type) === 'ExportSpecifier' &&
                      (null == er ? void 0 : er.type) === 'ExportNamedDeclaration';
                  return !!((ei || eo) && en(eu, eN(O))) && (es(et, O), !0);
                }
                function ke(e) {
                  let { comment: O, enclosingNode: et } = e;
                  return (null == et ? void 0 : et.type) === 'AssignmentPattern' && (ea(et, O), !0);
                }
                var eO = new Set(['VariableDeclarator', 'AssignmentExpression', 'TypeAlias', 'TSTypeAliasDeclaration']),
                  eL = new Set([
                    'ObjectExpression',
                    'ArrayExpression',
                    'TemplateLiteral',
                    'TaggedTemplateExpression',
                    'ObjectTypeAnnotation',
                    'TSTypeLiteral'
                  ]);
                function Pe(e) {
                  let { comment: O, enclosingNode: et, followingNode: en } = e;
                  return (
                    !!(eO.has(null == et ? void 0 : et.type) && en && (eL.has(en.type) || ew(O))) && (ea(en, O), !0)
                  );
                }
                function oe(e) {
                  let { comment: O, enclosingNode: et, followingNode: en, text: er } = e;
                  return (
                    !en &&
                    ((null == et ? void 0 : et.type) === 'TSMethodSignature' ||
                      (null == et ? void 0 : et.type) === 'TSDeclareFunction' ||
                      (null == et ? void 0 : et.type) === 'TSAbstractMethodDefinition') &&
                    ';' === eu(er, O, eN) &&
                    (es(et, O), !0)
                  );
                }
                function H(e) {
                  let { comment: O, enclosingNode: et, followingNode: en } = e;
                  if (
                    ed(O) &&
                    (null == et ? void 0 : et.type) === 'TSMappedType' &&
                    (null == en ? void 0 : en.type) === 'TSTypeParameter' &&
                    en.constraint
                  )
                    return (et.prettierIgnore = !0), (O.unignore = !0), !0;
                }
                function pe(e) {
                  let { comment: O, precedingNode: et, enclosingNode: en, followingNode: er } = e;
                  return (
                    (null == en ? void 0 : en.type) === 'TSMappedType' &&
                    ((null == er ? void 0 : er.type) === 'TSTypeParameter' && er.name
                      ? (ea(er.name, O), !0)
                      : (null == et ? void 0 : et.type) === 'TSTypeParameter' &&
                        !!et.constraint &&
                        (es(et.constraint, O), !0))
                  );
                }
                function X(e) {
                  let { comment: O, enclosingNode: et, followingNode: en } = e;
                  return (
                    !!et &&
                    'SwitchCase' === et.type &&
                    !et.test &&
                    !!en &&
                    en === et.consequent[0] &&
                    ('BlockStatement' === en.type && ex(O) ? k(en, O) : eo(et, O), !0)
                  );
                }
                function le(e) {
                  return (
                    'ArrowFunctionExpression' === e.type ||
                    'FunctionExpression' === e.type ||
                    'FunctionDeclaration' === e.type ||
                    'ObjectMethod' === e.type ||
                    'ClassMethod' === e.type ||
                    'TSDeclareFunction' === e.type ||
                    'TSCallSignatureDeclaration' === e.type ||
                    'TSConstructSignatureDeclaration' === e.type ||
                    'TSMethodSignature' === e.type ||
                    'TSConstructorType' === e.type ||
                    'TSFunctionType' === e.type ||
                    'TSDeclareMethod' === e.type
                  );
                }
                function Ae(e, O) {
                  if (
                    ('typescript' === O.parser ||
                      'flow' === O.parser ||
                      'acorn' === O.parser ||
                      'espree' === O.parser ||
                      'meriyah' === O.parser ||
                      '__babel_estree' === O.parser) &&
                    'MethodDefinition' === e.type &&
                    e.value &&
                    'FunctionExpression' === e.value.type &&
                    0 === ec(e.value).length &&
                    !e.value.returnType &&
                    !ep(e.value.typeParameters) &&
                    e.value.body
                  )
                    return [...(e.decorators || []), e.key, e.value.body];
                }
                function Ee(e) {
                  let O = e.getValue(),
                    et = e.getParentNode();
                  return (
                    ((O && (eD(O) || ef(O) || (eF(et) && (eg(eb(O, eS.Leading)) || eg(eb(O, eS.Trailing)))))) ||
                      (et &&
                        ('JSXSpreadAttribute' === et.type ||
                          'JSXSpreadChild' === et.type ||
                          'UnionTypeAnnotation' === et.type ||
                          'TSUnionType' === et.type ||
                          (('ClassDeclaration' === et.type || 'ClassExpression' === et.type) &&
                            et.superClass === O)))) &&
                    (!eh(e) || 'UnionTypeAnnotation' === et.type || 'TSUnionType' === et.type)
                  );
                }
                O.exports = {
                  handleOwnLineComment: S,
                  handleEndOfLineComment: b,
                  handleRemainingComment: B,
                  getCommentChildNodes: Ae,
                  willPrintOwnComments: Ee
                };
              }
            }),
            nv = te({
              'src/language-js/needs-parens.js'(e, O) {
                ey();
                var et = ev(),
                  en = eQ(),
                  {
                    getFunctionParameters: er,
                    getLeftSidePathName: eu,
                    hasFlowShorthandAnnotationComment: ei,
                    hasNakedLeftSide: ea,
                    hasNode: es,
                    isBitwiseOperator: eo,
                    startsWithNoLookaheadToken: el,
                    shouldFlatten: ep,
                    getPrecedence: ec,
                    isCallExpression: ed,
                    isMemberExpression: eD,
                    isObjectProperty: ef,
                    isTSTypeExpression: eg
                  } = ne();
                function w(e, O) {
                  var et, eu;
                  let ea = e.getParentNode();
                  if (!ea) return !1;
                  let es = e.getName(),
                    ey = e.getNode();
                  if (O.__isInHtmlInterpolation && !O.bracketSpacing && I(ey) && P(e)) return !0;
                  if (E(ey)) return !1;
                  if ('flow' !== O.parser && ei(e.getValue())) return !0;
                  if ('Identifier' === ey.type) {
                    if (
                      (ey.extra &&
                        ey.extra.parenthesized &&
                        /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(ey.name)) ||
                      ('left' === es &&
                        (('async' === ey.name && !ea.await) || 'let' === ey.name) &&
                        'ForOfStatement' === ea.type)
                    )
                      return !0;
                    if ('let' === ey.name) {
                      let O =
                        null === (et = e.findAncestor((e) => 'ForOfStatement' === e.type)) || void 0 === et
                          ? void 0
                          : et.left;
                      if (O && el(O, (e) => e === ey)) return !0;
                    }
                    if (
                      'object' === es &&
                      'let' === ey.name &&
                      'MemberExpression' === ea.type &&
                      ea.computed &&
                      !ea.optional
                    ) {
                      let O = e.findAncestor(
                          (e) =>
                            'ExpressionStatement' === e.type || 'ForStatement' === e.type || 'ForInStatement' === e.type
                        ),
                        et = O
                          ? 'ExpressionStatement' === O.type
                            ? O.expression
                            : 'ForStatement' === O.type
                            ? O.init
                            : O.left
                          : void 0;
                      if (et && el(et, (e) => e === ey)) return !0;
                    }
                    return !1;
                  }
                  if (
                    'ObjectExpression' === ey.type ||
                    'FunctionExpression' === ey.type ||
                    'ClassExpression' === ey.type ||
                    'DoExpression' === ey.type
                  ) {
                    let O =
                      null === (eu = e.findAncestor((e) => 'ExpressionStatement' === e.type)) || void 0 === eu
                        ? void 0
                        : eu.expression;
                    if (O && el(O, (e) => e === ey)) return !0;
                  }
                  switch (ea.type) {
                    case 'ParenthesizedExpression':
                      return !1;
                    case 'ClassDeclaration':
                    case 'ClassExpression':
                      if (
                        'superClass' === es &&
                        ('ArrowFunctionExpression' === ey.type ||
                          'AssignmentExpression' === ey.type ||
                          'AwaitExpression' === ey.type ||
                          'BinaryExpression' === ey.type ||
                          'ConditionalExpression' === ey.type ||
                          'LogicalExpression' === ey.type ||
                          'NewExpression' === ey.type ||
                          'ObjectExpression' === ey.type ||
                          'SequenceExpression' === ey.type ||
                          'TaggedTemplateExpression' === ey.type ||
                          'UnaryExpression' === ey.type ||
                          'UpdateExpression' === ey.type ||
                          'YieldExpression' === ey.type ||
                          'TSNonNullExpression' === ey.type)
                      )
                        return !0;
                      break;
                    case 'ExportDefaultDeclaration':
                      return $(e, O) || 'SequenceExpression' === ey.type;
                    case 'Decorator':
                      if ('expression' === es) {
                        if (eD(ey) && ey.computed) return !0;
                        let e = !1,
                          et = !1,
                          en = ey;
                        for (; en; )
                          switch (en.type) {
                            case 'MemberExpression':
                              (et = !0), (en = en.object);
                              break;
                            case 'CallExpression':
                              if (et || e) return 'typescript' !== O.parser;
                              (e = !0), (en = en.callee);
                              break;
                            case 'Identifier':
                              return !1;
                            case 'TaggedTemplateExpression':
                              return 'typescript' !== O.parser;
                            default:
                              return !0;
                          }
                        return !0;
                      }
                      break;
                    case 'ArrowFunctionExpression':
                      if (
                        'body' === es &&
                        'SequenceExpression' !== ey.type &&
                        el(ey, (e) => 'ObjectExpression' === e.type)
                      )
                        return !0;
                  }
                  switch (ey.type) {
                    case 'UpdateExpression':
                      if ('UnaryExpression' === ea.type)
                        return (
                          ey.prefix &&
                          (('++' === ey.operator && '+' === ea.operator) ||
                            ('--' === ey.operator && '-' === ea.operator))
                        );
                    case 'UnaryExpression':
                      switch (ea.type) {
                        case 'UnaryExpression':
                          return ey.operator === ea.operator && ('+' === ey.operator || '-' === ey.operator);
                        case 'BindExpression':
                        case 'TaggedTemplateExpression':
                        case 'TSNonNullExpression':
                          return !0;
                        case 'MemberExpression':
                        case 'OptionalMemberExpression':
                          return 'object' === es;
                        case 'NewExpression':
                        case 'CallExpression':
                        case 'OptionalCallExpression':
                          return 'callee' === es;
                        case 'BinaryExpression':
                          return 'left' === es && '**' === ea.operator;
                        default:
                          return !1;
                      }
                    case 'BinaryExpression':
                      if ('UpdateExpression' === ea.type || ('in' === ey.operator && N(e))) return !0;
                      if ('|>' === ey.operator && ey.extra && ey.extra.parenthesized) {
                        let O = e.getParentNode(1);
                        if ('BinaryExpression' === O.type && '|>' === O.operator) return !0;
                      }
                    case 'TSTypeAssertion':
                    case 'TSAsExpression':
                    case 'TSSatisfiesExpression':
                    case 'LogicalExpression':
                      switch (ea.type) {
                        case 'TSSatisfiesExpression':
                        case 'TSAsExpression':
                          return !eg(ey);
                        case 'ConditionalExpression':
                          return eg(ey);
                        case 'CallExpression':
                        case 'NewExpression':
                        case 'OptionalCallExpression':
                          return 'callee' === es;
                        case 'ClassExpression':
                        case 'ClassDeclaration':
                          return 'superClass' === es;
                        case 'TSTypeAssertion':
                        case 'TaggedTemplateExpression':
                        case 'UnaryExpression':
                        case 'JSXSpreadAttribute':
                        case 'SpreadElement':
                        case 'SpreadProperty':
                        case 'BindExpression':
                        case 'AwaitExpression':
                        case 'TSNonNullExpression':
                        case 'UpdateExpression':
                          return !0;
                        case 'MemberExpression':
                        case 'OptionalMemberExpression':
                          return 'object' === es;
                        case 'AssignmentExpression':
                        case 'AssignmentPattern':
                          return 'left' === es && ('TSTypeAssertion' === ey.type || eg(ey));
                        case 'LogicalExpression':
                          if ('LogicalExpression' === ey.type) return ea.operator !== ey.operator;
                        case 'BinaryExpression': {
                          let { operator: e, type: O } = ey;
                          if (!e && 'TSTypeAssertion' !== O) return !0;
                          let et = ec(e),
                            en = ea.operator,
                            er = ec(en);
                          return (
                            er > et ||
                            ('right' === es && er === et) ||
                            (er === et && !ep(en, e)) ||
                            (er < et && '%' === e ? '+' === en || '-' === en : !!eo(en))
                          );
                        }
                        default:
                          return !1;
                      }
                    case 'SequenceExpression':
                      switch (ea.type) {
                        case 'ReturnStatement':
                        case 'ForStatement':
                          return !1;
                        case 'ExpressionStatement':
                          return 'expression' !== es;
                        case 'ArrowFunctionExpression':
                          return 'body' !== es;
                        default:
                          return !0;
                      }
                    case 'YieldExpression':
                      if (
                        'UnaryExpression' === ea.type ||
                        'AwaitExpression' === ea.type ||
                        eg(ea) ||
                        'TSNonNullExpression' === ea.type
                      )
                        return !0;
                    case 'AwaitExpression':
                      switch (ea.type) {
                        case 'TaggedTemplateExpression':
                        case 'UnaryExpression':
                        case 'LogicalExpression':
                        case 'SpreadElement':
                        case 'SpreadProperty':
                        case 'TSAsExpression':
                        case 'TSSatisfiesExpression':
                        case 'TSNonNullExpression':
                        case 'BindExpression':
                          return !0;
                        case 'MemberExpression':
                        case 'OptionalMemberExpression':
                          return 'object' === es;
                        case 'NewExpression':
                        case 'CallExpression':
                        case 'OptionalCallExpression':
                          return 'callee' === es;
                        case 'ConditionalExpression':
                          return 'test' === es;
                        case 'BinaryExpression':
                          return !(!ey.argument && '|>' === ea.operator);
                        default:
                          return !1;
                      }
                    case 'TSConditionalType':
                    case 'TSFunctionType':
                    case 'TSConstructorType':
                      if ('extendsType' === es && 'TSConditionalType' === ea.type) {
                        if ('TSConditionalType' === ey.type) return !0;
                        let { typeAnnotation: e } = ey.returnType || ey.typeAnnotation;
                        if (
                          ('TSTypePredicate' === e.type && e.typeAnnotation && (e = e.typeAnnotation.typeAnnotation),
                          'TSInferType' === e.type && e.typeParameter.constraint)
                        )
                          return !0;
                      }
                      if ('checkType' === es && 'TSConditionalType' === ea.type) return !0;
                    case 'TSUnionType':
                    case 'TSIntersectionType':
                      if (
                        ('TSUnionType' === ea.type || 'TSIntersectionType' === ea.type) &&
                        ea.types.length > 1 &&
                        (!ey.types || ey.types.length > 1)
                      )
                        return !0;
                    case 'TSInferType':
                      if ('TSInferType' === ey.type && 'TSRestType' === ea.type) break;
                    case 'TSTypeOperator':
                      return (
                        'TSArrayType' === ea.type ||
                        'TSOptionalType' === ea.type ||
                        'TSRestType' === ea.type ||
                        ('objectType' === es && 'TSIndexedAccessType' === ea.type) ||
                        'TSTypeOperator' === ea.type ||
                        ('TSTypeAnnotation' === ea.type && e.getParentNode(1).type.startsWith('TSJSDoc'))
                      );
                    case 'TSTypeQuery':
                      return (
                        ('objectType' === es && 'TSIndexedAccessType' === ea.type) ||
                        ('elementType' === es && 'TSArrayType' === ea.type)
                      );
                    case 'TypeofTypeAnnotation':
                      return (
                        ('objectType' === es &&
                          ('IndexedAccessType' === ea.type || 'OptionalIndexedAccessType' === ea.type)) ||
                        ('elementType' === es && 'ArrayTypeAnnotation' === ea.type)
                      );
                    case 'ArrayTypeAnnotation':
                      return 'NullableTypeAnnotation' === ea.type;
                    case 'IntersectionTypeAnnotation':
                    case 'UnionTypeAnnotation':
                      return (
                        'ArrayTypeAnnotation' === ea.type ||
                        'NullableTypeAnnotation' === ea.type ||
                        'IntersectionTypeAnnotation' === ea.type ||
                        'UnionTypeAnnotation' === ea.type ||
                        ('objectType' === es &&
                          ('IndexedAccessType' === ea.type || 'OptionalIndexedAccessType' === ea.type))
                      );
                    case 'NullableTypeAnnotation':
                      return (
                        'ArrayTypeAnnotation' === ea.type ||
                        ('objectType' === es &&
                          ('IndexedAccessType' === ea.type || 'OptionalIndexedAccessType' === ea.type))
                      );
                    case 'FunctionTypeAnnotation': {
                      let O = 'NullableTypeAnnotation' === ea.type ? e.getParentNode(1) : ea;
                      return (
                        'UnionTypeAnnotation' === O.type ||
                        'IntersectionTypeAnnotation' === O.type ||
                        'ArrayTypeAnnotation' === O.type ||
                        ('objectType' === es &&
                          ('IndexedAccessType' === O.type || 'OptionalIndexedAccessType' === O.type)) ||
                        'NullableTypeAnnotation' === O.type ||
                        ('FunctionTypeParam' === ea.type &&
                          null === ea.name &&
                          er(ey).some((e) => e.typeAnnotation && 'NullableTypeAnnotation' === e.typeAnnotation.type))
                      );
                    }
                    case 'OptionalIndexedAccessType':
                      return 'objectType' === es && 'IndexedAccessType' === ea.type;
                    case 'StringLiteral':
                    case 'NumericLiteral':
                    case 'Literal':
                      if ('string' == typeof ey.value && 'ExpressionStatement' === ea.type && !ea.directive) {
                        let O = e.getParentNode(1);
                        return 'Program' === O.type || 'BlockStatement' === O.type;
                      }
                      return 'object' === es && 'MemberExpression' === ea.type && 'number' == typeof ey.value;
                    case 'AssignmentExpression': {
                      let O = e.getParentNode(1);
                      return (
                        ('body' === es && 'ArrowFunctionExpression' === ea.type) ||
                        (('key' !== es ||
                          ('ClassProperty' !== ea.type && 'PropertyDefinition' !== ea.type) ||
                          !ea.computed) &&
                          (('init' !== es && 'update' !== es) || 'ForStatement' !== ea.type) &&
                          ('ExpressionStatement' === ea.type
                            ? 'ObjectPattern' === ey.left.type
                            : !(
                                ('key' === es && 'TSPropertySignature' === ea.type) ||
                                'AssignmentExpression' === ea.type ||
                                ('SequenceExpression' === ea.type &&
                                  O &&
                                  'ForStatement' === O.type &&
                                  (O.init === ea || O.update === ea)) ||
                                ('value' === es &&
                                  'Property' === ea.type &&
                                  O &&
                                  'ObjectPattern' === O.type &&
                                  O.properties.includes(ea)) ||
                                'NGChainedExpression' === ea.type
                              )))
                      );
                    }
                    case 'ConditionalExpression':
                      switch (ea.type) {
                        case 'TaggedTemplateExpression':
                        case 'UnaryExpression':
                        case 'SpreadElement':
                        case 'SpreadProperty':
                        case 'BinaryExpression':
                        case 'LogicalExpression':
                        case 'NGPipeExpression':
                        case 'ExportDefaultDeclaration':
                        case 'AwaitExpression':
                        case 'JSXSpreadAttribute':
                        case 'TSTypeAssertion':
                        case 'TypeCastExpression':
                        case 'TSAsExpression':
                        case 'TSSatisfiesExpression':
                        case 'TSNonNullExpression':
                          return !0;
                        case 'NewExpression':
                        case 'CallExpression':
                        case 'OptionalCallExpression':
                          return 'callee' === es;
                        case 'ConditionalExpression':
                          return 'test' === es;
                        case 'MemberExpression':
                        case 'OptionalMemberExpression':
                          return 'object' === es;
                        default:
                          return !1;
                      }
                    case 'FunctionExpression':
                      switch (ea.type) {
                        case 'NewExpression':
                        case 'CallExpression':
                        case 'OptionalCallExpression':
                          return 'callee' === es;
                        case 'TaggedTemplateExpression':
                          return !0;
                        default:
                          return !1;
                      }
                    case 'ArrowFunctionExpression':
                      switch (ea.type) {
                        case 'BinaryExpression':
                          return '|>' !== ea.operator || (ey.extra && ey.extra.parenthesized);
                        case 'NewExpression':
                        case 'CallExpression':
                        case 'OptionalCallExpression':
                          return 'callee' === es;
                        case 'MemberExpression':
                        case 'OptionalMemberExpression':
                          return 'object' === es;
                        case 'TSAsExpression':
                        case 'TSSatisfiesExpression':
                        case 'TSNonNullExpression':
                        case 'BindExpression':
                        case 'TaggedTemplateExpression':
                        case 'UnaryExpression':
                        case 'LogicalExpression':
                        case 'AwaitExpression':
                        case 'TSTypeAssertion':
                          return !0;
                        case 'ConditionalExpression':
                          return 'test' === es;
                        default:
                          return !1;
                      }
                    case 'ClassExpression':
                      if (en(ey.decorators)) return !0;
                      if ('NewExpression' === ea.type) return 'callee' === es;
                      break;
                    case 'OptionalMemberExpression':
                    case 'OptionalCallExpression': {
                      let O = e.getParentNode(1);
                      if (
                        ('object' === es && 'MemberExpression' === ea.type) ||
                        ('callee' === es && ('CallExpression' === ea.type || 'NewExpression' === ea.type)) ||
                        ('TSNonNullExpression' === ea.type && 'MemberExpression' === O.type && O.object === ea)
                      )
                        return !0;
                    }
                    case 'CallExpression':
                    case 'MemberExpression':
                    case 'TaggedTemplateExpression':
                    case 'TSNonNullExpression':
                      if ('callee' === es && ('BindExpression' === ea.type || 'NewExpression' === ea.type)) {
                        let e = ey;
                        for (; e; )
                          switch (e.type) {
                            case 'CallExpression':
                            case 'OptionalCallExpression':
                              return !0;
                            case 'MemberExpression':
                            case 'OptionalMemberExpression':
                            case 'BindExpression':
                              e = e.object;
                              break;
                            case 'TaggedTemplateExpression':
                              e = e.tag;
                              break;
                            case 'TSNonNullExpression':
                              e = e.expression;
                              break;
                            default:
                              return !1;
                          }
                      }
                      break;
                    case 'BindExpression':
                      return (
                        ('callee' === es && ('BindExpression' === ea.type || 'NewExpression' === ea.type)) ||
                        ('object' === es && eD(ea))
                      );
                    case 'NGPipeExpression':
                      return !(
                        'NGRoot' === ea.type ||
                        'NGMicrosyntaxExpression' === ea.type ||
                        ('ObjectProperty' === ea.type && !(ey.extra && ey.extra.parenthesized)) ||
                        'ArrayExpression' === ea.type ||
                        (ed(ea) && ea.arguments[es] === ey) ||
                        ('right' === es && 'NGPipeExpression' === ea.type) ||
                        ('property' === es && 'MemberExpression' === ea.type) ||
                        'AssignmentExpression' === ea.type
                      );
                    case 'JSXFragment':
                    case 'JSXElement':
                      return (
                        'callee' === es ||
                        ('left' === es && 'BinaryExpression' === ea.type && '<' === ea.operator) ||
                        ('ArrayExpression' !== ea.type &&
                          'ArrowFunctionExpression' !== ea.type &&
                          'AssignmentExpression' !== ea.type &&
                          'AssignmentPattern' !== ea.type &&
                          'BinaryExpression' !== ea.type &&
                          'NewExpression' !== ea.type &&
                          'ConditionalExpression' !== ea.type &&
                          'ExpressionStatement' !== ea.type &&
                          'JsExpressionRoot' !== ea.type &&
                          'JSXAttribute' !== ea.type &&
                          'JSXElement' !== ea.type &&
                          'JSXExpressionContainer' !== ea.type &&
                          'JSXFragment' !== ea.type &&
                          'LogicalExpression' !== ea.type &&
                          !ed(ea) &&
                          !ef(ea) &&
                          'ReturnStatement' !== ea.type &&
                          'ThrowStatement' !== ea.type &&
                          'TypeCastExpression' !== ea.type &&
                          'VariableDeclarator' !== ea.type &&
                          'YieldExpression' !== ea.type)
                      );
                    case 'TypeAnnotation':
                      return 'returnType' === es && 'ArrowFunctionExpression' === ea.type && x(ey);
                  }
                  return !1;
                }
                function E(e) {
                  return (
                    'BlockStatement' === e.type ||
                    'BreakStatement' === e.type ||
                    'ClassBody' === e.type ||
                    'ClassDeclaration' === e.type ||
                    'ClassMethod' === e.type ||
                    'ClassProperty' === e.type ||
                    'PropertyDefinition' === e.type ||
                    'ClassPrivateProperty' === e.type ||
                    'ContinueStatement' === e.type ||
                    'DebuggerStatement' === e.type ||
                    'DeclareClass' === e.type ||
                    'DeclareExportAllDeclaration' === e.type ||
                    'DeclareExportDeclaration' === e.type ||
                    'DeclareFunction' === e.type ||
                    'DeclareInterface' === e.type ||
                    'DeclareModule' === e.type ||
                    'DeclareModuleExports' === e.type ||
                    'DeclareVariable' === e.type ||
                    'DoWhileStatement' === e.type ||
                    'EnumDeclaration' === e.type ||
                    'ExportAllDeclaration' === e.type ||
                    'ExportDefaultDeclaration' === e.type ||
                    'ExportNamedDeclaration' === e.type ||
                    'ExpressionStatement' === e.type ||
                    'ForInStatement' === e.type ||
                    'ForOfStatement' === e.type ||
                    'ForStatement' === e.type ||
                    'FunctionDeclaration' === e.type ||
                    'IfStatement' === e.type ||
                    'ImportDeclaration' === e.type ||
                    'InterfaceDeclaration' === e.type ||
                    'LabeledStatement' === e.type ||
                    'MethodDefinition' === e.type ||
                    'ReturnStatement' === e.type ||
                    'SwitchStatement' === e.type ||
                    'ThrowStatement' === e.type ||
                    'TryStatement' === e.type ||
                    'TSDeclareFunction' === e.type ||
                    'TSEnumDeclaration' === e.type ||
                    'TSImportEqualsDeclaration' === e.type ||
                    'TSInterfaceDeclaration' === e.type ||
                    'TSModuleDeclaration' === e.type ||
                    'TSNamespaceExportDeclaration' === e.type ||
                    'TypeAlias' === e.type ||
                    'VariableDeclaration' === e.type ||
                    'WhileStatement' === e.type ||
                    'WithStatement' === e.type
                  );
                }
                function N(e) {
                  let O = 0,
                    et = e.getValue();
                  for (; et; ) {
                    let en = e.getParentNode(O++);
                    if (en && 'ForStatement' === en.type && en.init === et) return !0;
                    et = en;
                  }
                  return !1;
                }
                function x(e) {
                  return es(
                    e,
                    (e) =>
                      ('ObjectTypeAnnotation' === e.type &&
                        es(e, (e) => 'FunctionTypeAnnotation' === e.type || void 0)) ||
                      void 0
                  );
                }
                function I(e) {
                  return 'ObjectExpression' === e.type;
                }
                function P(e) {
                  let O = e.getValue(),
                    en = e.getParentNode(),
                    er = e.getName();
                  switch (en.type) {
                    case 'NGPipeExpression':
                      if ('number' == typeof er && en.arguments[er] === O && en.arguments.length - 1 === er)
                        return e.callParent(P);
                      break;
                    case 'ObjectProperty':
                      if ('value' === er) return et(e.getParentNode(1).properties) === en;
                      break;
                    case 'BinaryExpression':
                    case 'LogicalExpression':
                      if ('right' === er) return e.callParent(P);
                      break;
                    case 'ConditionalExpression':
                      if ('alternate' === er) return e.callParent(P);
                      break;
                    case 'UnaryExpression':
                      if (en.prefix) return e.callParent(P);
                  }
                  return !1;
                }
                function $(e, O) {
                  let et = e.getValue(),
                    en = e.getParentNode();
                  return 'FunctionExpression' === et.type || 'ClassExpression' === et.type
                    ? 'ExportDefaultDeclaration' === en.type || !w(e, O)
                    : !(!ea(et) || ('ExportDefaultDeclaration' !== en.type && w(e, O))) &&
                        e.call((e) => $(e, O), ...eu(e, et));
                }
                O.exports = w;
              }
            }),
            nx = te({
              'src/language-js/print-preprocess.js'(e, O) {
                function t(e, O) {
                  switch (O.parser) {
                    case 'json':
                    case 'json5':
                    case 'json-stringify':
                    case '__js_expression':
                    case '__vue_expression':
                    case '__vue_ts_expression':
                      return Object.assign(
                        Object.assign({}, e),
                        {},
                        {
                          type: O.parser.startsWith('__') ? 'JsExpressionRoot' : 'JsonRoot',
                          node: e,
                          comments: [],
                          rootMarker: O.rootMarker
                        }
                      );
                    default:
                      return e;
                  }
                }
                ey(), (O.exports = t);
              }
            }),
            nb = te({
              'src/language-js/print/html-binding.js'(e, O) {
                ey();
                var {
                  builders: { join: et, line: en, group: er, softline: eu, indent: ei }
                } = eO();
                function i(e, O, ea) {
                  let es = e.getValue();
                  if (
                    (O.__onHtmlBindingRoot && null === e.getName() && O.__onHtmlBindingRoot(es, O), 'File' === es.type)
                  ) {
                    if (O.__isVueForBindingLeft)
                      return e.call(
                        (e) => {
                          let O = et([',', en], e.map(ea, 'params')),
                            { params: es } = e.getValue();
                          return 1 === es.length ? O : ['(', ei([eu, er(O)]), eu, ')'];
                        },
                        'program',
                        'body',
                        0
                      );
                    if (O.__isVueBindings)
                      return e.call((e) => et([',', en], e.map(ea, 'params')), 'program', 'body', 0);
                  }
                }
                function l(e) {
                  switch (e.type) {
                    case 'MemberExpression':
                      switch (e.property.type) {
                        case 'Identifier':
                        case 'NumericLiteral':
                        case 'StringLiteral':
                          return l(e.object);
                      }
                      return !1;
                    case 'Identifier':
                      return !0;
                    default:
                      return !1;
                  }
                }
                O.exports = { isVueEventBindingExpression: l, printHtmlBinding: i };
              }
            }),
            nS = te({
              'src/language-js/print/binaryish.js'(e, O) {
                ey();
                var { printComments: et } = tK(),
                  { getLast: en } = e3(),
                  {
                    builders: { join: er, line: eu, softline: ei, group: ea, indent: es, align: eo, indentIfBreak: el },
                    utils: { cleanDoc: ep, getDocParts: ec, isConcat: ed }
                  } = eO(),
                  {
                    hasLeadingOwnLineComment: eD,
                    isBinaryish: ef,
                    isJsxNode: eg,
                    shouldFlatten: eh,
                    hasComment: eE,
                    CommentCheckFlags: eC,
                    isCallExpression: eF,
                    isMemberExpression: eA,
                    isObjectProperty: ev,
                    isEnabledHackPipeline: ex
                  } = ne(),
                  eb = 0;
                function T(e, O, et) {
                  let er = e.getValue(),
                    eu = e.getParentNode(),
                    eo = e.getParentNode(1),
                    ep =
                      er !== eu.body &&
                      ('IfStatement' === eu.type ||
                        'WhileStatement' === eu.type ||
                        'SwitchStatement' === eu.type ||
                        'DoWhileStatement' === eu.type),
                    ec = ex(O) && '|>' === er.operator,
                    ed = m(e, et, O, !1, ep);
                  if (ep) return ed;
                  if (ec) return ea(ed);
                  if ((eF(eu) && eu.callee === er) || 'UnaryExpression' === eu.type || (eA(eu) && !eu.computed))
                    return ea([es([ei, ...ed]), ei]);
                  let eD =
                      'ReturnStatement' === eu.type ||
                      'ThrowStatement' === eu.type ||
                      ('JSXExpressionContainer' === eu.type && 'JSXAttribute' === eo.type) ||
                      ('|' !== er.operator && 'JsExpressionRoot' === eu.type) ||
                      ('NGPipeExpression' !== er.type &&
                        (('NGRoot' === eu.type && '__ng_binding' === O.parser) ||
                          ('NGMicrosyntaxExpression' === eu.type &&
                            'NGMicrosyntax' === eo.type &&
                            1 === eo.body.length))) ||
                      (er === eu.body && 'ArrowFunctionExpression' === eu.type) ||
                      (er !== eu.body && 'ForStatement' === eu.type) ||
                      ('ConditionalExpression' === eu.type &&
                        'ReturnStatement' !== eo.type &&
                        'ThrowStatement' !== eo.type &&
                        !eF(eo)) ||
                      'TemplateLiteral' === eu.type,
                    ey =
                      'AssignmentExpression' === eu.type ||
                      'VariableDeclarator' === eu.type ||
                      'ClassProperty' === eu.type ||
                      'PropertyDefinition' === eu.type ||
                      'TSAbstractPropertyDefinition' === eu.type ||
                      'ClassPrivateProperty' === eu.type ||
                      ev(eu),
                    eE = ef(er.left) && eh(er.operator, er.left.operator);
                  if (eD || (C(er) && !eE) || (!C(er) && ey)) return ea(ed);
                  if (0 === ed.length) return '';
                  let eC = eg(er.right),
                    eS = ed.findIndex((e) => 'string' != typeof e && !Array.isArray(e) && 'group' === e.type),
                    eT = ed.slice(0, -1 === eS ? 1 : eS + 1),
                    eB = ed.slice(eT.length, eC ? -1 : void 0),
                    eN = Symbol('logicalChain-' + ++eb),
                    ew = ea([...eT, es(eB)], { id: eN });
                  return eC ? ea([ew, el(en(ed), { groupId: eN })]) : ew;
                }
                function m(e, O, en, ei, el) {
                  let eg = e.getValue();
                  if (!ef(eg)) return [ea(O())];
                  let ey = [];
                  eh(eg.operator, eg.left.operator)
                    ? (ey = e.call((e) => m(e, O, en, !0, el), 'left'))
                    : ey.push(ea(O('left')));
                  let eF = C(eg),
                    eA =
                      ('|>' === eg.operator ||
                        'NGPipeExpression' === eg.type ||
                        ('|' === eg.operator && '__vue_expression' === en.parser)) &&
                      !eD(en.originalText, eg.right),
                    ev = 'NGPipeExpression' === eg.type ? '|' : eg.operator,
                    eb =
                      'NGPipeExpression' === eg.type && eg.arguments.length > 0
                        ? ea(
                            es([
                              eu,
                              ': ',
                              er(
                                [eu, ': '],
                                e.map(O, 'arguments').map((e) => eo(2, ea(e)))
                              )
                            ])
                          )
                        : '',
                    eS;
                  if (eF) eS = [ev, ' ', O('right'), eb];
                  else {
                    let et = ex(en) && '|>' === ev ? e.call((e) => m(e, O, en, !0, el), 'right') : O('right');
                    eS = [eA ? eu : '', ev, eA ? ' ' : eu, et, eb];
                  }
                  let eT = e.getParentNode(),
                    eB = eE(eg.left, eC.Trailing | eC.Line),
                    eN =
                      eB ||
                      (!(el && 'LogicalExpression' === eg.type) &&
                        eT.type !== eg.type &&
                        eg.left.type !== eg.type &&
                        eg.right.type !== eg.type);
                  if ((ey.push(eA ? '' : ' ', eN ? ea(eS, { shouldBreak: eB }) : eS), ei && eE(eg))) {
                    let O = ep(et(e, ey, en));
                    return ed(O) || 'fill' === O.type ? ec(O) : [O];
                  }
                  return ey;
                }
                function C(e) {
                  return (
                    'LogicalExpression' === e.type &&
                    !!(
                      ('ObjectExpression' === e.right.type && e.right.properties.length > 0) ||
                      ('ArrayExpression' === e.right.type && e.right.elements.length > 0) ||
                      eg(e.right)
                    )
                  );
                }
                O.exports = { printBinaryishExpression: T, shouldInlineLogicalExpression: C };
              }
            }),
            nT = te({
              'src/language-js/print/angular.js'(e, O) {
                ey();
                var {
                    builders: { join: et, line: en, group: er }
                  } = eO(),
                  { hasNode: eu, hasComment: ei, getComments: ea } = ne(),
                  { printBinaryishExpression: es } = nS();
                function p(e, O, eu) {
                  let eo = e.getValue();
                  if (eo.type.startsWith('NG'))
                    switch (eo.type) {
                      case 'NGRoot':
                        return [eu('node'), ei(eo.node) ? ' //' + ea(eo.node)[0].value.trimEnd() : ''];
                      case 'NGPipeExpression':
                        return es(e, O, eu);
                      case 'NGChainedExpression':
                        return er(
                          et(
                            [';', en],
                            e.map((e) => (h(e) ? eu() : ['(', eu(), ')']), 'expressions')
                          )
                        );
                      case 'NGEmptyExpression':
                        return '';
                      case 'NGQuotedExpression':
                        return [eo.prefix, ': ', eo.value.trim()];
                      case 'NGMicrosyntax':
                        return e.map((e, O) => [0 === O ? '' : y(e.getValue(), O, eo) ? ' ' : [';', en], eu()], 'body');
                      case 'NGMicrosyntaxKey':
                        return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(eo.name) ? eo.name : JSON.stringify(eo.name);
                      case 'NGMicrosyntaxExpression':
                        return [eu('expression'), null === eo.alias ? '' : [' as ', eu('alias')]];
                      case 'NGMicrosyntaxKeyedExpression': {
                        let O = e.getName(),
                          et = e.getParentNode(),
                          en =
                            y(eo, O, et) ||
                            (((1 === O && ('then' === eo.key.name || 'else' === eo.key.name)) ||
                              (2 === O &&
                                'else' === eo.key.name &&
                                'NGMicrosyntaxKeyedExpression' === et.body[O - 1].type &&
                                'then' === et.body[O - 1].key.name)) &&
                              'NGMicrosyntaxExpression' === et.body[0].type);
                        return [eu('key'), en ? ' ' : ': ', eu('expression')];
                      }
                      case 'NGMicrosyntaxLet':
                        return ['let ', eu('key'), null === eo.value ? '' : [' = ', eu('value')]];
                      case 'NGMicrosyntaxAs':
                        return [eu('key'), ' as ', eu('alias')];
                      default:
                        throw Error(`Unknown Angular node type: ${JSON.stringify(eo.type)}.`);
                    }
                }
                function y(e, O, et) {
                  return (
                    'NGMicrosyntaxKeyedExpression' === e.type &&
                    'of' === e.key.name &&
                    1 === O &&
                    'NGMicrosyntaxLet' === et.body[0].type &&
                    null === et.body[0].value
                  );
                }
                function h(e) {
                  return eu(e.getValue(), (e) => {
                    switch (e.type) {
                      case void 0:
                        return !1;
                      case 'CallExpression':
                      case 'OptionalCallExpression':
                      case 'AssignmentExpression':
                        return !0;
                    }
                  });
                }
                O.exports = { printAngular: p };
              }
            }),
            nB = te({
              'src/language-js/print/jsx.js'(e, O) {
                ey();
                var { printComments: et, printDanglingComments: en, printCommentsSeparately: er } = tK(),
                  {
                    builders: {
                      line: eu,
                      hardline: ei,
                      softline: ea,
                      group: es,
                      indent: eo,
                      conditionalGroup: el,
                      fill: ep,
                      ifBreak: ec,
                      lineSuffixBoundary: ed,
                      join: eD
                    },
                    utils: { willBreak: ef }
                  } = eO(),
                  { getLast: eg, getPreferredQuote: eh } = e3(),
                  {
                    isJsxNode: eE,
                    rawText: eC,
                    isCallExpression: eF,
                    isStringLiteral: eA,
                    isBinaryish: ev,
                    hasComment: ex,
                    CommentCheckFlags: eb,
                    hasNodeIgnoreComment: eS
                  } = ne(),
                  eT = nv(),
                  { willPrintOwnComments: eB } = nA(),
                  o = (e) => '' === e || e === eu || e === ei || e === ea;
                function d(e, O, et) {
                  let en = e.getValue();
                  if ('JSXElement' === en.type && de(en)) return [et('openingElement'), et('closingElement')];
                  let er = et('JSXElement' === en.type ? 'openingElement' : 'openingFragment'),
                    eu = et('JSXElement' === en.type ? 'closingElement' : 'closingFragment');
                  if (
                    1 === en.children.length &&
                    'JSXExpressionContainer' === en.children[0].type &&
                    ('TemplateLiteral' === en.children[0].expression.type ||
                      'TaggedTemplateExpression' === en.children[0].expression.type)
                  )
                    return [er, ...e.map(et, 'children'), eu];
                  en.children = en.children.map((e) => (Fe(e) ? { type: 'JSXText', value: ' ', raw: ' ' } : e));
                  let ed = en.children.some(eE),
                    eD = en.children.filter((e) => 'JSXExpressionContainer' === e.type).length > 1,
                    ey = 'JSXElement' === en.type && en.openingElement.attributes.length > 1,
                    eh = ef(er) || ed || ey || eD,
                    eC = 'mdx' === e.getParentNode().rootMarker,
                    eF = O.singleQuote ? "{' '}" : '{" "}',
                    eA = eC ? ' ' : ec([eF, ea], ' '),
                    ev = v(
                      e,
                      O,
                      et,
                      eA,
                      en.openingElement && en.openingElement.name && 'fbt' === en.openingElement.name.name
                    ),
                    ex = en.children.some((e) => ue(e));
                  for (let e = ev.length - 2; e >= 0; e--) {
                    let O = '' === ev[e] && '' === ev[e + 1],
                      et = ev[e] === ei && '' === ev[e + 1] && ev[e + 2] === ei,
                      en = (ev[e] === ea || ev[e] === ei) && '' === ev[e + 1] && ev[e + 2] === eA,
                      er = ev[e] === eA && '' === ev[e + 1] && (ev[e + 2] === ea || ev[e + 2] === ei),
                      eu = ev[e] === eA && '' === ev[e + 1] && ev[e + 2] === eA,
                      es =
                        (ev[e] === ea && '' === ev[e + 1] && ev[e + 2] === ei) ||
                        (ev[e] === ei && '' === ev[e + 1] && ev[e + 2] === ea);
                    (et && ex) || O || en || eu || es ? ev.splice(e, 2) : er && ev.splice(e + 1, 2);
                  }
                  for (; ev.length > 0 && o(eg(ev)); ) ev.pop();
                  for (; ev.length > 1 && o(ev[0]) && o(ev[1]); ) ev.shift(), ev.shift();
                  let eb = [];
                  for (let [e, O] of ev.entries()) {
                    if (O === eA) {
                      if (1 === e && '' === ev[e - 1]) {
                        if (2 === ev.length) {
                          eb.push(eF);
                          continue;
                        }
                        eb.push([eF, ei]);
                        continue;
                      }
                      if (e === ev.length - 1 || ('' === ev[e - 1] && ev[e - 2] === ei)) {
                        eb.push(eF);
                        continue;
                      }
                    }
                    eb.push(O), ef(O) && (eh = !0);
                  }
                  let eS = ex ? ep(eb) : es(eb, { shouldBreak: !0 });
                  if (eC) return eS;
                  let eT = es([er, eo([ei, eS]), ei, eu]);
                  return eh ? eT : el([es([er, ...ev, eu]), eT]);
                }
                function v(e, O, et, en, er) {
                  let ea = [];
                  return (
                    e.each((e, O, es) => {
                      let eo = e.getValue();
                      if ('JSXText' === eo.type) {
                        let e = eC(eo);
                        if (ue(eo)) {
                          let et,
                            ei = e.split(ew);
                          if ('' === ei[0]) {
                            if ((ea.push(''), ei.shift(), /\n/.test(ei[0]))) {
                              let e = es[O + 1];
                              ea.push(b(er, ei[1], eo, e));
                            } else ea.push(en);
                            ei.shift();
                          }
                          if (('' === eg(ei) && (ei.pop(), (et = ei.pop())), 0 === ei.length)) return;
                          for (let [e, O] of ei.entries()) e % 2 == 1 ? ea.push(eu) : ea.push(O);
                          if (void 0 !== et) {
                            if (/\n/.test(et)) {
                              let e = es[O + 1];
                              ea.push(b(er, eg(ea), eo, e));
                            } else ea.push(en);
                          } else {
                            let e = es[O + 1];
                            ea.push(S(er, eg(ea), eo, e));
                          }
                        } else /\n/.test(e) ? e.match(/\n/g).length > 1 && ea.push('', ei) : ea.push('', en);
                      } else {
                        let e = et();
                        ea.push(e);
                        let en = es[O + 1];
                        if (en && ue(en)) {
                          let e = K(eC(en)).split(ew)[0];
                          ea.push(S(er, e, eo, en));
                        } else ea.push(ei);
                      }
                    }, 'children'),
                    ea
                  );
                }
                function S(e, O, et, en) {
                  return e
                    ? ''
                    : ('JSXElement' !== et.type || et.closingElement) &&
                      (!en || 'JSXElement' !== en.type || en.closingElement)
                    ? ea
                    : 1 === O.length
                    ? ea
                    : ei;
                }
                function b(e, O, et, en) {
                  return e
                    ? ei
                    : 1 === O.length &&
                      ('JSXElement' !== et.type || et.closingElement) &&
                      (!en || 'JSXElement' !== en.type || en.closingElement)
                    ? ea
                    : ei;
                }
                function B(e, O, et) {
                  let en = e.getParentNode();
                  if (
                    !en ||
                    {
                      ArrayExpression: !0,
                      JSXAttribute: !0,
                      JSXElement: !0,
                      JSXExpressionContainer: !0,
                      JSXFragment: !0,
                      ExpressionStatement: !0,
                      CallExpression: !0,
                      OptionalCallExpression: !0,
                      ConditionalExpression: !0,
                      JsExpressionRoot: !0
                    }[en.type]
                  )
                    return O;
                  let er = e.match(
                      void 0,
                      (e) => 'ArrowFunctionExpression' === e.type,
                      eF,
                      (e) => 'JSXExpressionContainer' === e.type
                    ),
                    eu = eT(e, et);
                  return es([eu ? '' : ec('('), eo([ea, O]), ea, eu ? '' : ec(')')], { shouldBreak: er });
                }
                function k(e, O, et) {
                  let en = e.getValue(),
                    eu = [];
                  if ((eu.push(et('name')), en.value)) {
                    let ei;
                    if (eA(en.value)) {
                      let et = eC(en.value)
                          .slice(1, -1)
                          .replace(/&apos;/g, "'")
                          .replace(/&quot;/g, '"'),
                        { escaped: eu, quote: ea, regex: es } = eh(et, O.jsxSingleQuote ? "'" : '"');
                      et = et.replace(es, eu);
                      let { leading: eo, trailing: el } = e.call(() => er(e, O), 'value');
                      ei = [eo, ea, et, ea, el];
                    } else ei = et('value');
                    eu.push('=', ei);
                  }
                  return eu;
                }
                function M(e, O, et) {
                  let en = e.getValue(),
                    ge = (e, O) =>
                      'JSXEmptyExpression' === e.type ||
                      (!ex(e) &&
                        ('ArrayExpression' === e.type ||
                          'ObjectExpression' === e.type ||
                          'ArrowFunctionExpression' === e.type ||
                          ('AwaitExpression' === e.type && (ge(e.argument, e) || 'JSXElement' === e.argument.type)) ||
                          eF(e) ||
                          'FunctionExpression' === e.type ||
                          'TemplateLiteral' === e.type ||
                          'TaggedTemplateExpression' === e.type ||
                          'DoExpression' === e.type ||
                          (eE(O) && ('ConditionalExpression' === e.type || ev(e)))));
                  return ge(en.expression, e.getParentNode(0))
                    ? es(['{', et('expression'), ed, '}'])
                    : es(['{', eo([ea, et('expression')]), ea, ed, '}']);
                }
                function R(e, O, et) {
                  let en = e.getValue(),
                    er = (en.name && ex(en.name)) || (en.typeParameters && ex(en.typeParameters));
                  if (en.selfClosing && 0 === en.attributes.length && !er)
                    return ['<', et('name'), et('typeParameters'), ' />'];
                  if (
                    en.attributes &&
                    1 === en.attributes.length &&
                    en.attributes[0].value &&
                    eA(en.attributes[0].value) &&
                    !en.attributes[0].value.value.includes(`
`) &&
                    !er &&
                    !ex(en.attributes[0])
                  )
                    return es([
                      '<',
                      et('name'),
                      et('typeParameters'),
                      ' ',
                      ...e.map(et, 'attributes'),
                      en.selfClosing ? ' />' : '>'
                    ]);
                  let ea =
                      en.attributes &&
                      en.attributes.some(
                        (e) =>
                          e.value &&
                          eA(e.value) &&
                          e.value.value.includes(`
`)
                      ),
                    el = O.singleAttributePerLine && en.attributes.length > 1 ? ei : eu;
                  return es(
                    ['<', et('name'), et('typeParameters'), eo(e.map(() => [el, et()], 'attributes')), ...q(en, O, er)],
                    { shouldBreak: ea }
                  );
                }
                function q(e, O, et) {
                  return e.selfClosing ? [eu, '/>'] : J(e, O, et) ? ['>'] : [ea, '>'];
                }
                function J(e, O, et) {
                  let en = e.attributes.length > 0 && ex(eg(e.attributes), eb.Trailing);
                  return (
                    (0 === e.attributes.length && !et) ||
                    ((O.bracketSameLine || O.jsxBracketSameLine) && (!et || e.attributes.length > 0) && !en)
                  );
                }
                function L(e, O, et) {
                  let en = e.getValue(),
                    er = [];
                  er.push('</');
                  let eu = et('name');
                  return (
                    ex(en.name, eb.Leading | eb.Line)
                      ? er.push(eo([ei, eu]), ei)
                      : ex(en.name, eb.Leading | eb.Block)
                      ? er.push(' ', eu)
                      : er.push(eu),
                    er.push('>'),
                    er
                  );
                }
                function Q(e, O) {
                  let et = e.getValue(),
                    er = ex(et),
                    eu = ex(et, eb.Line),
                    ea = 'JSXOpeningFragment' === et.type;
                  return [ea ? '<' : '</', eo([eu ? ei : er && !ea ? ' ' : '', en(e, O, !0)]), eu ? ei : '', '>'];
                }
                function V(e, O, en) {
                  let er = et(e, d(e, O, en), O);
                  return B(e, er, O);
                }
                function j(e, O) {
                  let et = ex(e.getValue(), eb.Line);
                  return [en(e, O, !et), et ? ei : ''];
                }
                function Y(e, O, en) {
                  let er = e.getValue();
                  return [
                    '{',
                    e.call(
                      (e) => {
                        let er = ['...', en()];
                        return ex(e.getValue()) && eB(e) ? [eo([ea, et(e, er, O)]), ea] : er;
                      },
                      'JSXSpreadAttribute' === er.type ? 'argument' : 'expression'
                    ),
                    '}'
                  ];
                }
                function ie(e, O, et) {
                  let en = e.getValue();
                  if (en.type.startsWith('JSX'))
                    switch (en.type) {
                      case 'JSXAttribute':
                        return k(e, O, et);
                      case 'JSXIdentifier':
                        return String(en.name);
                      case 'JSXNamespacedName':
                        return eD(':', [et('namespace'), et('name')]);
                      case 'JSXMemberExpression':
                        return eD('.', [et('object'), et('property')]);
                      case 'JSXSpreadAttribute':
                      case 'JSXSpreadChild':
                        return Y(e, O, et);
                      case 'JSXExpressionContainer':
                        return M(e, O, et);
                      case 'JSXFragment':
                      case 'JSXElement':
                        return V(e, O, et);
                      case 'JSXOpeningElement':
                        return R(e, O, et);
                      case 'JSXClosingElement':
                        return L(e, O, et);
                      case 'JSXOpeningFragment':
                      case 'JSXClosingFragment':
                        return Q(e, O);
                      case 'JSXEmptyExpression':
                        return j(e, O);
                      case 'JSXText':
                        throw Error('JSXText should be handled by JSXElement');
                      default:
                        throw Error(`Unknown JSX node type: ${JSON.stringify(en.type)}.`);
                    }
                }
                var eN = ` 
\r	`,
                  ew = RegExp('([' + eN + ']+)'),
                  eP = RegExp('[^' + eN + ']'),
                  K = (e) => e.replace(RegExp('(?:^' + ew.source + '|' + ew.source + '$)'), '');
                function de(e) {
                  if (0 === e.children.length) return !0;
                  if (e.children.length > 1) return !1;
                  let O = e.children[0];
                  return 'JSXText' === O.type && !ue(O);
                }
                function ue(e) {
                  return 'JSXText' === e.type && (eP.test(eC(e)) || !/\n/.test(eC(e)));
                }
                function Fe(e) {
                  return (
                    'JSXExpressionContainer' === e.type &&
                    eA(e.expression) &&
                    ' ' === e.expression.value &&
                    !ex(e.expression)
                  );
                }
                function z(e) {
                  let O = e.getValue(),
                    et = e.getParentNode();
                  if (!et || !O || !eE(O) || !eE(et)) return !1;
                  let en = et.children.indexOf(O),
                    er = null;
                  for (let e = en; e > 0; e--) {
                    let O = et.children[e - 1];
                    if (!('JSXText' === O.type && !ue(O))) {
                      er = O;
                      break;
                    }
                  }
                  return (
                    er &&
                    'JSXExpressionContainer' === er.type &&
                    'JSXEmptyExpression' === er.expression.type &&
                    eS(er.expression)
                  );
                }
                O.exports = { hasJsxIgnoreComment: z, printJsx: ie };
              }
            }),
            nN = te({
              'src/language-js/print/misc.js'(e, O) {
                ey();
                var { isNonEmptyArray: et } = e3(),
                  {
                    builders: { indent: en, join: er, line: eu }
                  } = eO(),
                  { isFlowAnnotationComment: ei } = ne();
                function i(e) {
                  let O = e.getValue();
                  return O.optional && ('Identifier' !== O.type || O !== e.getParentNode().key)
                    ? 'OptionalCallExpression' === O.type || ('OptionalMemberExpression' === O.type && O.computed)
                      ? '?.'
                      : '?'
                    : '';
                }
                function l(e) {
                  return e.getValue().definite ||
                    e.match(void 0, (e, O) => 'id' === O && 'VariableDeclarator' === e.type && e.definite)
                    ? '!'
                    : '';
                }
                function p(e, O, et) {
                  let en = e.getValue();
                  return en.typeArguments ? et('typeArguments') : en.typeParameters ? et('typeParameters') : '';
                }
                function y(e, O, et) {
                  let en = e.getValue();
                  if (!en.typeAnnotation) return '';
                  let er = e.getParentNode(),
                    eu = 'DeclareFunction' === er.type && er.id === en;
                  return ei(O.originalText, en.typeAnnotation)
                    ? [' /*: ', et('typeAnnotation'), ' */']
                    : [eu ? '' : ': ', et('typeAnnotation')];
                }
                function h(e, O, et) {
                  return ['::', et('callee')];
                }
                function g(e, O, en) {
                  return et(e.getValue().modifiers) ? [er(' ', e.map(en, 'modifiers')), ' '] : '';
                }
                function c(e, O, et) {
                  return 'EmptyStatement' === e.type ? ';' : 'BlockStatement' === e.type || et ? [' ', O] : en([eu, O]);
                }
                function f(e, O, et) {
                  return ['...', et('argument'), y(e, O, et)];
                }
                function F(e, O) {
                  let et = e.slice(1, -1);
                  if (et.includes('"') || et.includes("'")) return e;
                  let en = O.singleQuote ? "'" : '"';
                  return en + et + en;
                }
                O.exports = {
                  printOptionalToken: i,
                  printDefiniteToken: l,
                  printFunctionTypeParameters: p,
                  printBindExpressionCallee: h,
                  printTypeScriptModifiers: g,
                  printTypeAnnotation: y,
                  printRestSpread: f,
                  adjustClause: c,
                  printDirective: F
                };
              }
            }),
            nw = te({
              'src/language-js/print/array.js'(e, O) {
                ey();
                var { printDanglingComments: et } = tK(),
                  {
                    builders: { line: en, softline: er, hardline: eu, group: ei, indent: ea, ifBreak: es, fill: eo }
                  } = eO(),
                  { getLast: el, hasNewline: ep } = e3(),
                  {
                    shouldPrintComma: ec,
                    hasComment: ed,
                    CommentCheckFlags: eD,
                    isNextLineEmpty: ef,
                    isNumericLiteral: eg,
                    isSignedNumericLiteral: eh
                  } = ne(),
                  { locStart: eE } = tW(),
                  { printOptionalToken: eC, printTypeAnnotation: eF } = nN();
                function I(e, O, en) {
                  let eu = e.getValue(),
                    eo = [],
                    ep = 'TupleExpression' === eu.type ? '#[' : '[';
                  if (0 === eu.elements.length)
                    ed(eu, eD.Dangling) ? eo.push(ei([ep, et(e, O), er, ']'])) : eo.push(ep, ']');
                  else {
                    let ed = el(eu.elements),
                      eD = !(ed && 'RestElement' === ed.type),
                      ef = Symbol('array'),
                      eg =
                        !O.__inJestEach &&
                        eu.elements.length > 1 &&
                        eu.elements.every((e, O, et) => {
                          let en = e && e.type;
                          if ('ArrayExpression' !== en && 'ObjectExpression' !== en) return !1;
                          let er = et[O + 1];
                          if (er && en !== er.type) return !1;
                          let eu = 'ArrayExpression' === en ? 'elements' : 'properties';
                          return e[eu] && e[eu].length > 1;
                        }),
                      ey = P(eu, O),
                      eh = eD ? (null === ed ? ',' : ec(O) ? (ey ? es(',', '', { groupId: ef }) : es(',')) : '') : '';
                    eo.push(
                      ei([ep, ea([er, ey ? D(e, O, en, eh) : [$(e, O, 'elements', en), eh], et(e, O, !0)]), er, ']'], {
                        shouldBreak: eg,
                        id: ef
                      })
                    );
                  }
                  return eo.push(eC(e), eF(e, O, en)), eo;
                }
                function P(e, O) {
                  return (
                    e.elements.length > 1 &&
                    e.elements.every(
                      (e) =>
                        e &&
                        (eg(e) || (eh(e) && !ed(e.argument))) &&
                        !ed(e, eD.Trailing | eD.Line, (e) => !ep(O.originalText, eE(e), { backwards: !0 }))
                    )
                  );
                }
                function $(e, O, et, eu) {
                  let ea = [],
                    es = [];
                  return (
                    e.each((e) => {
                      ea.push(es, ei(eu())), (es = [',', en]), e.getValue() && ef(e.getValue(), O) && es.push(er);
                    }, et),
                    ea
                  );
                }
                function D(e, O, et, er) {
                  let ei = [];
                  return (
                    e.each((e, ea, es) => {
                      let eo = ea === es.length - 1;
                      ei.push([et(), eo ? er : ',']),
                        eo || ei.push(ef(e.getValue(), O) ? [eu, eu] : ed(es[ea + 1], eD.Leading | eD.Line) ? eu : en);
                    }, 'elements'),
                    eo(ei)
                  );
                }
                O.exports = { printArray: I, printArrayItems: $, isConciselyPrintedArray: P };
              }
            }),
            nP = te({
              'src/language-js/print/call-arguments.js'(e, O) {
                ey();
                var { printDanglingComments: et } = tK(),
                  { getLast: en, getPenultimate: er } = e3(),
                  {
                    getFunctionParameters: eu,
                    hasComment: ei,
                    CommentCheckFlags: ea,
                    isFunctionCompositionArgs: es,
                    isJsxNode: eo,
                    isLongCurriedCallExpression: el,
                    shouldPrintComma: ep,
                    getCallArguments: ec,
                    iterateCallArgumentsPath: ed,
                    isNextLineEmpty: eD,
                    isCallExpression: ef,
                    isStringLiteral: eg,
                    isObjectProperty: eh,
                    isTSTypeExpression: eE
                  } = ne(),
                  {
                    builders: {
                      line: eC,
                      hardline: eF,
                      softline: eA,
                      group: ev,
                      indent: ex,
                      conditionalGroup: eb,
                      ifBreak: eS,
                      breakParent: eT
                    },
                    utils: { willBreak: eB }
                  } = eO(),
                  { ArgExpansionBailout: eN } = ti(),
                  { isConciselyPrintedArray: ew } = nw();
                function v(e, O, er) {
                  let eu = e.getValue(),
                    ei = 'ImportExpression' === eu.type,
                    ea = ec(eu);
                  if (0 === ea.length) return ['(', et(e, O, !0), ')'];
                  if (k(ea)) return ['(', er(['arguments', 0]), ', ', er(['arguments', 1]), ')'];
                  let eo = !1,
                    ef = !1,
                    eg = ea.length - 1,
                    ey = [];
                  ed(e, (e, et) => {
                    let en = e.getNode(),
                      eu = [er()];
                    et === eg ||
                      (eD(en, O) ? (0 === et && (ef = !0), (eo = !0), eu.push(',', eF, eF)) : eu.push(',', eC)),
                      ey.push(eu);
                  });
                  let eh = !(ei || (eu.callee && 'Import' === eu.callee.type)) && ep(O, 'all') ? ',' : '';
                  function K() {
                    return ev(['(', ex([eC, ...ey]), eh, eC, ')'], { shouldBreak: !0 });
                  }
                  if (eo || ('Decorator' !== e.getParentNode().type && es(ea))) return K();
                  let eE = B(ea),
                    ew = b(ea, O);
                  if (eE || ew) {
                    if (eE ? ey.slice(1).some(eB) : ey.slice(0, -1).some(eB)) return K();
                    let O = [];
                    try {
                      e.try(() => {
                        ed(e, (e, et) => {
                          eE &&
                            0 === et &&
                            (O = [
                              [er([], { expandFirstArg: !0 }), ey.length > 1 ? ',' : '', ef ? eF : eC, ef ? eF : ''],
                              ...ey.slice(1)
                            ]),
                            ew && et === eg && (O = [...ey.slice(0, -1), er([], { expandLastArg: !0 })]);
                        });
                      });
                    } catch (e) {
                      if (e instanceof eN) return K();
                      throw e;
                    }
                    return [
                      ey.some(eB) ? eT : '',
                      eb([
                        ['(', ...O, ')'],
                        eE
                          ? ['(', ev(O[0], { shouldBreak: !0 }), ...O.slice(1), ')']
                          : ['(', ...ey.slice(0, -1), ev(en(O), { shouldBreak: !0 }), ')'],
                        K()
                      ])
                    ];
                  }
                  let eP = ['(', ex([eA, ...ey]), eS(eh), eA, ')'];
                  return el(e) ? eP : ev(eP, { shouldBreak: ey.some(eB) || eo });
                }
                function S(e) {
                  let O = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return (
                    ('ObjectExpression' === e.type && (e.properties.length > 0 || ei(e))) ||
                    ('ArrayExpression' === e.type && (e.elements.length > 0 || ei(e))) ||
                    ('TSTypeAssertion' === e.type && S(e.expression)) ||
                    (eE(e) && S(e.expression)) ||
                    'FunctionExpression' === e.type ||
                    ('ArrowFunctionExpression' === e.type &&
                      (!e.returnType ||
                        !e.returnType.typeAnnotation ||
                        'TSTypeReference' !== e.returnType.typeAnnotation.type ||
                        M(e.body)) &&
                      ('BlockStatement' === e.body.type ||
                        ('ArrowFunctionExpression' === e.body.type && S(e.body, !0)) ||
                        'ObjectExpression' === e.body.type ||
                        'ArrayExpression' === e.body.type ||
                        (!O && (ef(e.body) || 'ConditionalExpression' === e.body.type)) ||
                        eo(e.body))) ||
                    'DoExpression' === e.type ||
                    'ModuleExpression' === e.type
                  );
                }
                function b(e, O) {
                  let et = en(e),
                    eu = er(e);
                  return (
                    !ei(et, ea.Leading) &&
                    !ei(et, ea.Trailing) &&
                    S(et) &&
                    (!eu || eu.type !== et.type) &&
                    (2 !== e.length || 'ArrowFunctionExpression' !== eu.type || 'ArrayExpression' !== et.type) &&
                    !(e.length > 1 && 'ArrayExpression' === et.type && ew(et, O))
                  );
                }
                function B(e) {
                  if (2 !== e.length) return !1;
                  let [O, et] = e;
                  return (
                    !!('ModuleExpression' === O.type && R(et)) ||
                    (!ei(O) &&
                      ('FunctionExpression' === O.type ||
                        ('ArrowFunctionExpression' === O.type && 'BlockStatement' === O.body.type)) &&
                      'FunctionExpression' !== et.type &&
                      'ArrowFunctionExpression' !== et.type &&
                      'ConditionalExpression' !== et.type &&
                      !S(et))
                  );
                }
                function k(e) {
                  return (
                    2 === e.length &&
                    'ArrowFunctionExpression' === e[0].type &&
                    0 === eu(e[0]).length &&
                    'BlockStatement' === e[0].body.type &&
                    'ArrayExpression' === e[1].type &&
                    !e.some((e) => ei(e))
                  );
                }
                function M(e) {
                  return (
                    'BlockStatement' === e.type &&
                    (e.body.some((e) => 'EmptyStatement' !== e.type) || ei(e, ea.Dangling))
                  );
                }
                function R(e) {
                  return (
                    'ObjectExpression' === e.type &&
                    1 === e.properties.length &&
                    eh(e.properties[0]) &&
                    'Identifier' === e.properties[0].key.type &&
                    'type' === e.properties[0].key.name &&
                    eg(e.properties[0].value) &&
                    'module' === e.properties[0].value.value
                  );
                }
                O.exports = v;
              }
            }),
            nk = te({
              'src/language-js/print/member.js'(e, O) {
                ey();
                var {
                    builders: { softline: et, group: en, indent: er, label: eu }
                  } = eO(),
                  { isNumericLiteral: ei, isMemberExpression: ea, isCallExpression: es } = ne(),
                  { printOptionalToken: eo } = nN();
                function y(e, O, ei) {
                  let eo = e.getValue(),
                    el = e.getParentNode(),
                    ep,
                    ec = 0;
                  do (ep = e.getParentNode(ec)), ec++;
                  while (ep && (ea(ep) || 'TSNonNullExpression' === ep.type));
                  let ed = ei('object'),
                    eD = h(e, O, ei),
                    ef =
                      (ep &&
                        ('NewExpression' === ep.type ||
                          'BindExpression' === ep.type ||
                          ('AssignmentExpression' === ep.type && 'Identifier' !== ep.left.type))) ||
                      eo.computed ||
                      ('Identifier' === eo.object.type && 'Identifier' === eo.property.type && !ea(el)) ||
                      (('AssignmentExpression' === el.type || 'VariableDeclarator' === el.type) &&
                        ((es(eo.object) && eo.object.arguments.length > 0) ||
                          ('TSNonNullExpression' === eo.object.type &&
                            es(eo.object.expression) &&
                            eo.object.expression.arguments.length > 0) ||
                          'member-chain' === ed.label));
                  return eu('member-chain' === ed.label ? 'member-chain' : 'member', [ed, ef ? eD : en(er([et, eD]))]);
                }
                function h(e, O, eu) {
                  let ea = eu('property'),
                    es = e.getValue(),
                    el = eo(e);
                  return es.computed
                    ? !es.property || ei(es.property)
                      ? [el, '[', ea, ']']
                      : en([el, '[', er([et, ea]), et, ']'])
                    : [el, '.', ea];
                }
                O.exports = { printMemberExpression: y, printMemberLookup: h };
              }
            }),
            nj = te({
              'src/language-js/print/member-chain.js'(e, O) {
                ey();
                var { printComments: et } = tK(),
                  { getLast: en, isNextLineEmptyAfterIndex: er, getNextNonSpaceNonCommentCharacterIndex: eu } = e3(),
                  ei = nv(),
                  {
                    isCallExpression: ea,
                    isMemberExpression: es,
                    isFunctionOrArrowExpression: eo,
                    isLongCurriedCallExpression: el,
                    isMemberish: ep,
                    isNumericLiteral: ec,
                    isSimpleCallArgument: ed,
                    hasComment: eD,
                    CommentCheckFlags: ef,
                    isNextLineEmpty: eg
                  } = ne(),
                  { locEnd: eh } = tW(),
                  {
                    builders: {
                      join: eE,
                      hardline: eC,
                      group: eF,
                      indent: eA,
                      conditionalGroup: ev,
                      breakParent: ex,
                      label: eb
                    },
                    utils: { willBreak: eS }
                  } = eO(),
                  eT = nP(),
                  { printMemberLookup: eB } = nk(),
                  { printOptionalToken: eN, printFunctionTypeParameters: ew, printBindExpressionCallee: eP } = nN();
                function S(e, O, ey) {
                  let ek = e.getParentNode(),
                    ej = !ek || 'ExpressionStatement' === ek.type,
                    eI = [];
                  function J(e) {
                    let { originalText: et } = O,
                      en = eu(et, e, eh);
                    return ')' === et.charAt(en) ? !1 !== en && er(et, en + 1) : eg(e, O);
                  }
                  function L(e) {
                    let en = e.getValue();
                    ea(en) && (ep(en.callee) || ea(en.callee))
                      ? (eI.unshift({
                          node: en,
                          printed: [et(e, [eN(e), ew(e, O, ey), eT(e, O, ey)], O), J(en) ? eC : '']
                        }),
                        e.call((e) => L(e), 'callee'))
                      : ep(en)
                      ? (eI.unshift({
                          node: en,
                          needsParens: ei(e, O),
                          printed: et(e, es(en) ? eB(e, O, ey) : eP(e, O, ey), O)
                        }),
                        e.call((e) => L(e), 'object'))
                      : 'TSNonNullExpression' === en.type
                      ? (eI.unshift({ node: en, printed: et(e, '!', O) }), e.call((e) => L(e), 'expression'))
                      : eI.unshift({ node: en, printed: ey() });
                  }
                  let eO = e.getValue();
                  eI.unshift({ node: eO, printed: [eN(e), ew(e, O, ey), eT(e, O, ey)] }),
                    eO.callee && e.call((e) => L(e), 'callee');
                  let eL = [],
                    e_ = [eI[0]],
                    eM = 1;
                  for (
                    ;
                    eM < eI.length &&
                    ('TSNonNullExpression' === eI[eM].node.type ||
                      ea(eI[eM].node) ||
                      (es(eI[eM].node) && eI[eM].node.computed && ec(eI[eM].node.property)));
                    ++eM
                  )
                    e_.push(eI[eM]);
                  if (!ea(eI[0].node))
                    for (; eM + 1 < eI.length && ep(eI[eM].node) && ep(eI[eM + 1].node); ++eM) e_.push(eI[eM]);
                  eL.push(e_), (e_ = []);
                  let e$ = !1;
                  for (; eM < eI.length; ++eM) {
                    if (e$ && ep(eI[eM].node)) {
                      if (eI[eM].node.computed && ec(eI[eM].node.property)) {
                        e_.push(eI[eM]);
                        continue;
                      }
                      eL.push(e_), (e_ = []), (e$ = !1);
                    }
                    (ea(eI[eM].node) || 'ImportExpression' === eI[eM].node.type) && (e$ = !0),
                      e_.push(eI[eM]),
                      eD(eI[eM].node, ef.Trailing) && (eL.push(e_), (e_ = []), (e$ = !1));
                  }
                  function ee(e) {
                    return /^[A-Z]|^[$_]+$/.test(e);
                  }
                  function ce(e) {
                    return e.length <= O.tabWidth;
                  }
                  function W(e) {
                    let O = e[1].length > 0 && e[1][0].node.computed;
                    if (1 === e[0].length) {
                      let et = e[0][0].node;
                      return (
                        'ThisExpression' === et.type ||
                        ('Identifier' === et.type && (ee(et.name) || (ej && ce(et.name)) || O))
                      );
                    }
                    let et = en(e[0]).node;
                    return es(et) && 'Identifier' === et.property.type && (ee(et.property.name) || O);
                  }
                  e_.length > 0 && eL.push(e_);
                  let eR = eL.length >= 2 && !eD(eL[1][0].node) && W(eL);
                  function de(e) {
                    let O = e.map((e) => e.printed);
                    return e.length > 0 && en(e).needsParens ? ['(', ...O, ')'] : O;
                  }
                  function ue(e) {
                    return 0 === e.length ? '' : eA(eF([eC, eE(eC, e.map(de))]));
                  }
                  let eV = eL.map(de),
                    eW = eR ? 3 : 2,
                    eq = eL.flat(),
                    eJ =
                      eq.slice(1, -1).some((e) => eD(e.node, ef.Leading)) ||
                      eq.slice(0, -1).some((e) => eD(e.node, ef.Trailing)) ||
                      (eL[eW] && eD(eL[eW][0].node, ef.Leading));
                  if (eL.length <= eW && !eJ) return el(e) ? eV : eF(eV);
                  let eU = en(eL[eR ? 1 : 0]).node,
                    eH = !ea(eU) && J(eU),
                    eG = [de(eL[0]), eR ? eL.slice(1, 2).map(de) : '', eH ? eC : '', ue(eL.slice(eR ? 2 : 1))],
                    ez = eI
                      .map((e) => {
                        let { node: O } = e;
                        return O;
                      })
                      .filter(ea);
                  function ke() {
                    let e = en(en(eL)).node,
                      O = en(eV);
                    return ea(e) && eS(O) && ez.slice(0, -1).some((e) => e.arguments.some(eo));
                  }
                  return eb(
                    'member-chain',
                    eJ ||
                      (ez.length > 2 && ez.some((e) => !e.arguments.every((e) => ed(e, 0)))) ||
                      eV.slice(0, -1).some(eS) ||
                      ke()
                      ? eF(eG)
                      : [eS(eV) || eH ? ex : '', ev([eV, eG])]
                  );
                }
                O.exports = S;
              }
            }),
            nI = te({
              'src/language-js/print/call-expression.js'(e, O) {
                ey();
                var {
                    builders: { join: et, group: en }
                  } = eO(),
                  er = nv(),
                  {
                    getCallArguments: eu,
                    hasFlowAnnotationComment: ei,
                    isCallExpression: ea,
                    isMemberish: es,
                    isStringLiteral: eo,
                    isTemplateOnItsOwnLine: el,
                    isTestCall: ep,
                    iterateCallArgumentsPath: ec
                  } = ne(),
                  ed = nj(),
                  eD = nP(),
                  { printOptionalToken: ef, printFunctionTypeParameters: eg } = nN();
                function w(e, O, eo) {
                  let ey = e.getValue(),
                    eh = e.getParentNode(),
                    eE = 'NewExpression' === ey.type,
                    eC = 'ImportExpression' === ey.type,
                    eF = ef(e),
                    eA = eu(ey);
                  if (
                    eA.length > 0 &&
                    ((!eC && !eE && E(ey, eh)) || (1 === eA.length && el(eA[0], O.originalText)) || (!eE && ep(ey, eh)))
                  ) {
                    let en = [];
                    return (
                      ec(e, () => {
                        en.push(eo());
                      }),
                      [eE ? 'new ' : '', eo('callee'), eF, eg(e, O, eo), '(', et(', ', en), ')']
                    );
                  }
                  let ev =
                    ('babel' === O.parser || 'babel-flow' === O.parser) &&
                    ey.callee &&
                    'Identifier' === ey.callee.type &&
                    ei(ey.callee.trailingComments);
                  if (
                    (ev && (ey.callee.trailingComments[0].printed = !0),
                    !eC && !eE && es(ey.callee) && !e.call((e) => er(e, O), 'callee'))
                  )
                    return ed(e, O, eo);
                  let ex = [
                    eE ? 'new ' : '',
                    eC ? 'import' : eo('callee'),
                    eF,
                    ev ? `/*:: ${ey.callee.trailingComments[0].value.slice(2).trim()} */` : '',
                    eg(e, O, eo),
                    eD(e, O, eo)
                  ];
                  return eC || ea(ey.callee) ? en(ex) : ex;
                }
                function E(e, O) {
                  if ('Identifier' !== e.callee.type) return !1;
                  if ('require' === e.callee.name) return !0;
                  if ('define' === e.callee.name) {
                    let et = eu(e);
                    return (
                      'ExpressionStatement' === O.type &&
                      (1 === et.length ||
                        (2 === et.length && 'ArrayExpression' === et[0].type) ||
                        (3 === et.length && eo(et[0]) && 'ArrayExpression' === et[1].type))
                    );
                  }
                  return !1;
                }
                O.exports = { printCallExpression: w };
              }
            }),
            nO = te({
              'src/language-js/print/assignment.js'(e, O) {
                ey();
                var { isNonEmptyArray: et, getStringWidth: en } = e3(),
                  {
                    builders: { line: er, group: eu, indent: ei, indentIfBreak: ea, lineSuffixBoundary: es },
                    utils: { cleanDoc: eo, willBreak: el, canBreak: ep }
                  } = eO(),
                  {
                    hasLeadingOwnLineComment: ec,
                    isBinaryish: ed,
                    isStringLiteral: eD,
                    isLiteral: ef,
                    isNumericLiteral: eg,
                    isCallExpression: eh,
                    isMemberExpression: eE,
                    getCallArguments: eC,
                    rawText: eF,
                    hasComment: eA,
                    isSignedNumericLiteral: ev,
                    isObjectProperty: ex
                  } = ne(),
                  { shouldInlineLogicalExpression: eb } = nS(),
                  { printCallExpression: eS } = nI();
                function m(e, O, et, en, eo, el) {
                  let ep = d(e, O, et, en, el),
                    ec = et(el, { assignmentLayout: ep });
                  switch (ep) {
                    case 'break-after-operator':
                      return eu([eu(en), eo, eu(ei([er, ec]))]);
                    case 'never-break-after-operator':
                      return eu([eu(en), eo, ' ', ec]);
                    case 'fluid': {
                      let e = Symbol('assignment');
                      return eu([eu(en), eo, eu(ei(er), { id: e }), es, ea(ec, { groupId: e })]);
                    }
                    case 'break-lhs':
                      return eu([en, eo, ' ', eu(ec)]);
                    case 'chain':
                      return [eu(en), eo, er, ec];
                    case 'chain-tail':
                      return [eu(en), eo, ei([er, ec])];
                    case 'chain-tail-arrow-chain':
                      return [eu(en), eo, ec];
                    case 'only-left':
                      return en;
                  }
                }
                function C(e, O, et) {
                  let en = e.getValue();
                  return m(e, O, et, et('left'), [' ', en.operator], 'right');
                }
                function o(e, O, et) {
                  return m(e, O, et, et('id'), ' =', 'init');
                }
                function d(e, O, et, en, er) {
                  let eu = e.getValue(),
                    ei = eu[er];
                  if (!ei) return 'only-left';
                  let ea = !b(ei);
                  if (
                    e.match(b, B, (e) => !ea || ('ExpressionStatement' !== e.type && 'VariableDeclaration' !== e.type))
                  )
                    return ea
                      ? 'ArrowFunctionExpression' === ei.type && 'ArrowFunctionExpression' === ei.body.type
                        ? 'chain-tail-arrow-chain'
                        : 'chain-tail'
                      : 'chain';
                  if ((!ea && b(ei.right)) || ec(O.originalText, ei)) return 'break-after-operator';
                  if (
                    ('CallExpression' === ei.type && 'require' === ei.callee.name) ||
                    'json5' === O.parser ||
                    'json' === O.parser
                  )
                    return 'never-break-after-operator';
                  if (S(eu) || k(eu) || q(eu) || (J(eu) && ep(en))) return 'break-lhs';
                  let es = ie(eu, en, O);
                  return e.call(() => v(e, O, et, es), er)
                    ? 'break-after-operator'
                    : es ||
                      'TemplateLiteral' === ei.type ||
                      'TaggedTemplateExpression' === ei.type ||
                      'BooleanLiteral' === ei.type ||
                      eg(ei) ||
                      'ClassExpression' === ei.type
                    ? 'never-break-after-operator'
                    : 'fluid';
                }
                function v(e, O, en, er) {
                  let eu = e.getValue();
                  if (ed(eu) && !eb(eu)) return !0;
                  switch (eu.type) {
                    case 'StringLiteralTypeAnnotation':
                    case 'SequenceExpression':
                      return !0;
                    case 'ConditionalExpression': {
                      let { test: e } = eu;
                      return ed(e) && !eb(e);
                    }
                    case 'ClassExpression':
                      return et(eu.decorators);
                  }
                  if (er) return !1;
                  let ei = eu,
                    ea = [];
                  for (;;)
                    if ('UnaryExpression' === ei.type) (ei = ei.argument), ea.push('argument');
                    else if ('TSNonNullExpression' === ei.type) (ei = ei.expression), ea.push('expression');
                    else break;
                  return !!(eD(ei) || e.call(() => V(e, O, en), ...ea));
                }
                function S(e) {
                  if (B(e)) {
                    let O = e.left || e.id;
                    return (
                      'ObjectPattern' === O.type &&
                      O.properties.length > 2 &&
                      O.properties.some(
                        (e) => ex(e) && (!e.shorthand || (e.value && 'AssignmentPattern' === e.value.type))
                      )
                    );
                  }
                  return !1;
                }
                function b(e) {
                  return 'AssignmentExpression' === e.type;
                }
                function B(e) {
                  return b(e) || 'VariableDeclarator' === e.type;
                }
                function k(e) {
                  let O = M(e);
                  if (et(O)) {
                    let et = 'TSTypeAliasDeclaration' === e.type ? 'constraint' : 'bound';
                    if (O.length > 1 && O.some((e) => e[et] || e.default)) return !0;
                  }
                  return !1;
                }
                function M(e) {
                  return R(e) && e.typeParameters && e.typeParameters.params ? e.typeParameters.params : null;
                }
                function R(e) {
                  return 'TSTypeAliasDeclaration' === e.type || 'TypeAlias' === e.type;
                }
                function q(e) {
                  if ('VariableDeclarator' !== e.type) return !1;
                  let { typeAnnotation: O } = e.id;
                  if (!O || !O.typeAnnotation) return !1;
                  let en = L(O.typeAnnotation);
                  return et(en) && en.length > 1 && en.some((e) => et(L(e)) || 'TSConditionalType' === e.type);
                }
                function J(e) {
                  return 'VariableDeclarator' === e.type && e.init && 'ArrowFunctionExpression' === e.init.type;
                }
                function L(e) {
                  return Q(e) && e.typeParameters && e.typeParameters.params ? e.typeParameters.params : null;
                }
                function Q(e) {
                  return 'TSTypeReference' === e.type || 'GenericTypeAnnotation' === e.type;
                }
                function V(e, O, et) {
                  let en = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    er = e.getValue(),
                    z = () => V(e, O, et, !0);
                  if ('TSNonNullExpression' === er.type) return e.call(z, 'expression');
                  if (eh(er)) {
                    if ('member-chain' === eS(e, O, et).label) return !1;
                    let en = eC(er);
                    return (
                      !(!(0 === en.length || (1 === en.length && Y(en[0], O))) || ee(er, et)) && e.call(z, 'callee')
                    );
                  }
                  return eE(er)
                    ? e.call(z, 'object')
                    : en && ('Identifier' === er.type || 'ThisExpression' === er.type);
                }
                function Y(e, O) {
                  let { printWidth: et } = O;
                  if (eA(e)) return !1;
                  let en = 0.25 * et;
                  if (
                    'ThisExpression' === e.type ||
                    ('Identifier' === e.type && e.name.length <= en) ||
                    (ev(e) && !eA(e.argument))
                  )
                    return !0;
                  let er =
                    ('Literal' === e.type && 'regex' in e && e.regex.pattern) ||
                    ('RegExpLiteral' === e.type && e.pattern);
                  return er
                    ? er.length <= en
                    : eD(e)
                    ? eF(e).length <= en
                    : 'TemplateLiteral' === e.type
                    ? 0 === e.expressions.length &&
                      e.quasis[0].value.raw.length <= en &&
                      !e.quasis[0].value.raw.includes(`
`)
                    : ef(e);
                }
                function ie(e, O, et) {
                  return !!ex(e) && 'string' == typeof (O = eo(O)) && en(O) < et.tabWidth + 3;
                }
                function ee(e, O) {
                  let en = ce(e);
                  if (et(en)) {
                    if (en.length > 1) return !0;
                    if (1 === en.length) {
                      let e = en[0];
                      if (
                        'TSUnionType' === e.type ||
                        'UnionTypeAnnotation' === e.type ||
                        'TSIntersectionType' === e.type ||
                        'IntersectionTypeAnnotation' === e.type ||
                        'TSTypeLiteral' === e.type ||
                        'ObjectTypeAnnotation' === e.type
                      )
                        return !0;
                    }
                    if (el(O(e.typeParameters ? 'typeParameters' : 'typeArguments'))) return !0;
                  }
                  return !1;
                }
                function ce(e) {
                  return (e.typeParameters && e.typeParameters.params) || (e.typeArguments && e.typeArguments.params);
                }
                O.exports = {
                  printVariableDeclarator: o,
                  printAssignmentExpression: C,
                  printAssignment: m,
                  isArrowFunctionVariableDeclarator: J
                };
              }
            }),
            nL = te({
              'src/language-js/print/function-parameters.js'(e, O) {
                ey();
                var { getNextNonSpaceNonCommentCharacter: et } = e3(),
                  { printDanglingComments: en } = tK(),
                  {
                    builders: { line: er, hardline: eu, softline: ei, group: ea, indent: es, ifBreak: eo },
                    utils: { removeLines: el, willBreak: ep }
                  } = eO(),
                  {
                    getFunctionParameters: ec,
                    iterateFunctionParametersPath: ed,
                    isSimpleType: eD,
                    isTestCall: ef,
                    isTypeAnnotationAFunction: eg,
                    isObjectType: eh,
                    isObjectTypePropertyAFunction: eE,
                    hasRestParameter: eC,
                    shouldPrintComma: eF,
                    hasComment: eA,
                    isNextLineEmpty: ev
                  } = ne(),
                  { locEnd: ex } = tW(),
                  { ArgExpansionBailout: eb } = ti(),
                  { printFunctionTypeParameters: eS } = nN();
                function m(e, O, ey, eh, eA) {
                  let eT = e.getValue(),
                    eB = ec(eT),
                    eN = eA ? eS(e, ey, O) : '';
                  if (0 === eB.length) return [eN, '(', en(e, ey, !0, (e) => ')' === et(ey.originalText, e, ex)), ')'];
                  let ew = e.getParentNode(),
                    eP = ef(ew),
                    ek = C(eT),
                    ej = [];
                  if (
                    (ed(e, (e, et) => {
                      let en = et === eB.length - 1;
                      en && eT.rest && ej.push('...'),
                        ej.push(O()),
                        en || (ej.push(','), eP || ek ? ej.push(' ') : ev(eB[et], ey) ? ej.push(eu, eu) : ej.push(er));
                    }),
                    eh)
                  ) {
                    if (ep(eN) || ep(ej)) throw new eb();
                    return ea([el(eN), '(', el(ej), ')']);
                  }
                  let eI = eB.every((e) => !e.decorators);
                  return ek && eI
                    ? [eN, '(', ...ej, ')']
                    : eP
                    ? [eN, '(', ...ej, ')']
                    : (eE(ew) ||
                        eg(ew) ||
                        'TypeAlias' === ew.type ||
                        'UnionTypeAnnotation' === ew.type ||
                        'TSUnionType' === ew.type ||
                        'IntersectionTypeAnnotation' === ew.type ||
                        ('FunctionTypeAnnotation' === ew.type && ew.returnType === eT)) &&
                      1 === eB.length &&
                      null === eB[0].name &&
                      eT.this !== eB[0] &&
                      eB[0].typeAnnotation &&
                      null === eT.typeParameters &&
                      eD(eB[0].typeAnnotation) &&
                      !eT.rest
                    ? 'always' === ey.arrowParens
                      ? ['(', ...ej, ')']
                      : ej
                    : [eN, '(', es([ei, ...ej]), eo(!eC(eT) && eF(ey, 'all') ? ',' : ''), ei, ')'];
                }
                function C(e) {
                  if (!e) return !1;
                  let O = ec(e);
                  if (1 !== O.length) return !1;
                  let [et] = O;
                  return (
                    !eA(et) &&
                    ('ObjectPattern' === et.type ||
                      'ArrayPattern' === et.type ||
                      ('Identifier' === et.type &&
                        et.typeAnnotation &&
                        ('TypeAnnotation' === et.typeAnnotation.type ||
                          'TSTypeAnnotation' === et.typeAnnotation.type) &&
                        eh(et.typeAnnotation.typeAnnotation)) ||
                      ('FunctionTypeParam' === et.type && eh(et.typeAnnotation)) ||
                      ('AssignmentPattern' === et.type &&
                        ('ObjectPattern' === et.left.type || 'ArrayPattern' === et.left.type) &&
                        ('Identifier' === et.right.type ||
                          ('ObjectExpression' === et.right.type && 0 === et.right.properties.length) ||
                          ('ArrayExpression' === et.right.type && 0 === et.right.elements.length))))
                  );
                }
                function o(e) {
                  let O;
                  return (
                    e.returnType
                      ? (O = e.returnType).typeAnnotation && (O = O.typeAnnotation)
                      : e.typeAnnotation && (O = e.typeAnnotation),
                    O
                  );
                }
                function d(e, O) {
                  let et = o(e);
                  if (!et) return !1;
                  let en = e.typeParameters && e.typeParameters.params;
                  if (en) {
                    if (en.length > 1) return !1;
                    if (1 === en.length) {
                      let e = en[0];
                      if (e.constraint || e.default) return !1;
                    }
                  }
                  return 1 === ec(e).length && (eh(et) || ep(O));
                }
                O.exports = {
                  printFunctionParameters: m,
                  shouldHugFunctionParameters: C,
                  shouldGroupFunctionParameters: d
                };
              }
            }),
            n_ = te({
              'src/language-js/print/type-annotation.js'(e, O) {
                ey();
                var { printComments: et, printDanglingComments: en } = tK(),
                  { isNonEmptyArray: er } = e3(),
                  {
                    builders: { group: eu, join: ei, line: ea, softline: es, indent: eo, align: el, ifBreak: ep }
                  } = eO(),
                  ec = nv(),
                  { locStart: ed } = tW(),
                  {
                    isSimpleType: eD,
                    isObjectType: ef,
                    hasLeadingOwnLineComment: eg,
                    isObjectTypePropertyAFunction: eh,
                    shouldPrintComma: eE
                  } = ne(),
                  { printAssignment: eC } = nO(),
                  { printFunctionParameters: eF, shouldGroupFunctionParameters: eA } = nL(),
                  { printArrayItems: ev } = nw();
                function $(e) {
                  if (eD(e) || ef(e)) return !0;
                  if ('UnionTypeAnnotation' === e.type || 'TSUnionType' === e.type) {
                    let O = e.types.filter(
                        (e) =>
                          'VoidTypeAnnotation' === e.type ||
                          'TSVoidKeyword' === e.type ||
                          'NullLiteralTypeAnnotation' === e.type ||
                          'TSNullKeyword' === e.type
                      ).length,
                      et = e.types.some(
                        (e) =>
                          'ObjectTypeAnnotation' === e.type ||
                          'TSTypeLiteral' === e.type ||
                          'GenericTypeAnnotation' === e.type ||
                          'TSTypeReference' === e.type
                      );
                    if (e.types.length - 1 === O && et) return !0;
                  }
                  return !1;
                }
                function D(e, O, et) {
                  let en = O.semi ? ';' : '',
                    er = e.getValue(),
                    eu = [];
                  return (
                    eu.push('opaque type ', et('id'), et('typeParameters')),
                    er.supertype && eu.push(': ', et('supertype')),
                    er.impltype && eu.push(' = ', et('impltype')),
                    eu.push(en),
                    eu
                  );
                }
                function T(e, O, et) {
                  let en = O.semi ? ';' : '',
                    er = e.getValue(),
                    eu = [];
                  return (
                    er.declare && eu.push('declare '),
                    eu.push('type ', et('id'), et('typeParameters')),
                    [eC(e, O, et, eu, ' =', 'TSTypeAliasDeclaration' === er.type ? 'typeAnnotation' : 'right'), en]
                  );
                }
                function m(e, O, et) {
                  let en = e.getValue(),
                    er = e.map(et, 'types'),
                    ei = [],
                    es = !1;
                  for (let e = 0; e < er.length; ++e)
                    0 === e
                      ? ei.push(er[e])
                      : ef(en.types[e - 1]) && ef(en.types[e])
                      ? ei.push([' & ', es ? eo(er[e]) : er[e]])
                      : ef(en.types[e - 1]) || ef(en.types[e])
                      ? (e > 1 && (es = !0), ei.push(' & ', e > 1 ? eo(er[e]) : er[e]))
                      : ei.push(eo([' &', ea, er[e]]));
                  return eu(ei);
                }
                function C(e, O, en) {
                  let er = e.getValue(),
                    ed = e.getParentNode(),
                    eD =
                      'TypeParameterInstantiation' !== ed.type &&
                      'TSTypeParameterInstantiation' !== ed.type &&
                      'GenericTypeAnnotation' !== ed.type &&
                      'TSTypeReference' !== ed.type &&
                      'TSTypeAssertion' !== ed.type &&
                      'TupleTypeAnnotation' !== ed.type &&
                      'TSTupleType' !== ed.type &&
                      !('FunctionTypeParam' === ed.type && !ed.name && e.getParentNode(1).this !== ed) &&
                      !(
                        ('TypeAlias' === ed.type ||
                          'VariableDeclarator' === ed.type ||
                          'TSTypeAliasDeclaration' === ed.type) &&
                        eg(O.originalText, er)
                      ),
                    ef = $(er),
                    ey = e.map((e) => {
                      let er = en();
                      return ef || (er = el(2, er)), et(e, er, O);
                    }, 'types');
                  if (ef) return ei(' | ', ey);
                  let eh = [ep([eD && !eg(O.originalText, er) ? ea : '', '| ']), ei([ea, '| '], ey)];
                  return ec(e, O)
                    ? eu([eo(eh), es])
                    : ('TupleTypeAnnotation' === ed.type && ed.types.length > 1) ||
                      ('TSTupleType' === ed.type && ed.elementTypes.length > 1)
                    ? eu([eo([ep(['(', es]), eh]), es, ep(')')])
                    : eu(eD ? eo(eh) : eh);
                }
                function o(e, O, et) {
                  let en = e.getValue(),
                    er = [],
                    ei = e.getParentNode(0),
                    ea = e.getParentNode(1),
                    es = e.getParentNode(2),
                    eo =
                      'TSFunctionType' === en.type ||
                      !(
                        (('ObjectTypeProperty' === ei.type || 'ObjectTypeInternalSlot' === ei.type) &&
                          !ei.variance &&
                          !ei.optional &&
                          ed(ei) === ed(en)) ||
                        'ObjectTypeCallProperty' === ei.type ||
                        (es && 'DeclareFunction' === es.type)
                      ),
                    el = eo && ('TypeAnnotation' === ei.type || 'TSTypeAnnotation' === ei.type),
                    ep =
                      el &&
                      eo &&
                      ('TypeAnnotation' === ei.type || 'TSTypeAnnotation' === ei.type) &&
                      'ArrowFunctionExpression' === ea.type;
                  eh(ei) && ((eo = !0), (el = !0)), ep && er.push('(');
                  let ec = eF(e, et, O, !1, !0),
                    eD =
                      en.returnType || en.predicate || en.typeAnnotation
                        ? [eo ? ' => ' : ': ', et('returnType'), et('predicate'), et('typeAnnotation')]
                        : '',
                    ef = eA(en, eD);
                  return er.push(ef ? eu(ec) : ec), eD && er.push(eD), ep && er.push(')'), eu(er);
                }
                function d(e, O, et) {
                  let ei = e.getValue(),
                    ea = 'TSTupleType' === ei.type ? 'elementTypes' : 'types',
                    el = er(ei[ea]),
                    ec = el ? es : '';
                  return eu([
                    '[',
                    eo([ec, ev(e, O, ea, et)]),
                    ep(el && eE(O, 'all') ? ',' : ''),
                    en(e, O, !0),
                    ec,
                    ']'
                  ]);
                }
                function v(e, O, et) {
                  let en = e.getValue(),
                    er = 'OptionalIndexedAccessType' === en.type && en.optional ? '?.[' : '[';
                  return [et('objectType'), er, et('indexType'), ']'];
                }
                function S(e, O, et) {
                  let en = e.getValue();
                  return [en.postfix ? '' : et, O('typeAnnotation'), en.postfix ? et : ''];
                }
                O.exports = {
                  printOpaqueType: D,
                  printTypeAlias: T,
                  printIntersectionType: m,
                  printUnionType: C,
                  printFunctionType: o,
                  printTupleType: d,
                  printIndexedAccessType: v,
                  shouldHugType: $,
                  printJSDocType: S
                };
              }
            }),
            nM = te({
              'src/language-js/print/type-parameters.js'(e, O) {
                ey();
                var { printDanglingComments: et } = tK(),
                  {
                    builders: { join: en, line: er, hardline: eu, softline: ei, group: ea, indent: es, ifBreak: eo }
                  } = eO(),
                  {
                    isTestCall: el,
                    hasComment: ep,
                    CommentCheckFlags: ec,
                    isTSXFile: ed,
                    shouldPrintComma: eD,
                    getFunctionParameters: ef,
                    isObjectType: eg,
                    getTypeScriptMappedTypeModifier: eh
                  } = ne(),
                  { createGroupIdMapper: eE } = e3(),
                  { shouldHugType: eC } = n_(),
                  { isArrowFunctionVariableDeclarator: eF } = nO(),
                  eA = eE('typeParameters');
                function P(e, O, et, eu) {
                  let ep = e.getValue();
                  if (!ep[eu]) return '';
                  if (!Array.isArray(ep[eu])) return et(eu);
                  let ec = e.getNode(2),
                    ey = ec && el(ec),
                    eh = e.match(
                      (e) => !(1 === e[eu].length && eg(e[eu][0])),
                      void 0,
                      (e, O) => 'typeAnnotation' === O,
                      (e) => 'Identifier' === e.type,
                      eF
                    );
                  if (
                    0 === ep[eu].length ||
                    (!eh &&
                      (ey || (1 === ep[eu].length && ('NullableTypeAnnotation' === ep[eu][0].type || eC(ep[eu][0])))))
                  )
                    return ['<', en(', ', e.map(et, eu)), $(e, O), '>'];
                  let eE =
                    'TSTypeParameterInstantiation' === ep.type
                      ? ''
                      : 1 === ef(ep).length &&
                        ed(O) &&
                        !ep[eu][0].constraint &&
                        'ArrowFunctionExpression' === e.getParentNode().type
                      ? ','
                      : eD(O, 'all')
                      ? eo(',')
                      : '';
                  return ea(['<', es([ei, en([',', er], e.map(et, eu))]), eE, ei, '>'], { id: eA(ep) });
                }
                function $(e, O) {
                  let en = e.getValue();
                  if (!ep(en, ec.Dangling)) return '';
                  let er = !ep(en, ec.Line),
                    ei = et(e, O, er);
                  return er ? ei : [ei, eu];
                }
                function D(e, O, et) {
                  let en = e.getValue(),
                    er = ['TSTypeParameter' === en.type && en.const ? 'const ' : ''],
                    eu = e.getParentNode();
                  return (
                    'TSMappedType' === eu.type
                      ? (eu.readonly && er.push(eh(eu.readonly, 'readonly'), ' '),
                        er.push('[', et('name')),
                        en.constraint && er.push(' in ', et('constraint')),
                        eu.nameType &&
                          er.push(
                            ' as ',
                            e.callParent(() => et('nameType'))
                          ),
                        er.push(']'))
                      : (en.variance && er.push(et('variance')),
                        en.in && er.push('in '),
                        en.out && er.push('out '),
                        er.push(et('name')),
                        en.bound && er.push(': ', et('bound')),
                        en.constraint && er.push(' extends ', et('constraint')),
                        en.default && er.push(' = ', et('default'))),
                    er
                  );
                }
                O.exports = { printTypeParameter: D, printTypeParameters: P, getTypeParametersGroupId: eA };
              }
            }),
            n$ = te({
              'src/language-js/print/property.js'(e, O) {
                ey();
                var { printComments: et } = tK(),
                  { printString: en, printNumber: er } = e3(),
                  {
                    isNumericLiteral: eu,
                    isSimpleNumber: ei,
                    isStringLiteral: ea,
                    isStringPropSafeToUnquote: es,
                    rawText: eo
                  } = ne(),
                  { printAssignment: el } = nO(),
                  ep = new WeakMap();
                function g(e, O, el) {
                  let ec = e.getNode();
                  if (ec.computed) return ['[', el('key'), ']'];
                  let ed = e.getParentNode(),
                    { key: eD } = ec;
                  if ('consistent' === O.quoteProps && !ep.has(ed)) {
                    let e = (ed.properties || ed.body || ed.members).some(
                      (e) => !e.computed && e.key && ea(e.key) && !es(e, O)
                    );
                    ep.set(ed, e);
                  }
                  if (
                    ('Identifier' === eD.type ||
                      (eu(eD) &&
                        ei(er(eo(eD))) &&
                        String(eD.value) === er(eo(eD)) &&
                        !('typescript' === O.parser || 'babel-ts' === O.parser))) &&
                    ('json' === O.parser || ('consistent' === O.quoteProps && ep.get(ed)))
                  ) {
                    let er = en(JSON.stringify('Identifier' === eD.type ? eD.name : eD.value.toString()), O);
                    return e.call((e) => et(e, er, O), 'key');
                  }
                  return es(ec, O) && ('as-needed' === O.quoteProps || ('consistent' === O.quoteProps && !ep.get(ed)))
                    ? e.call((e) => et(e, /^\d/.test(eD.value) ? er(eD.value) : eD.value, O), 'key')
                    : el('key');
                }
                function c(e, O, et) {
                  return e.getValue().shorthand ? et('value') : el(e, O, et, g(e, O, et), ':', 'value');
                }
                O.exports = { printProperty: c, printPropertyKey: g };
              }
            }),
            nR = te({
              'src/language-js/print/function.js'(e, O) {
                ey();
                var et = tX(),
                  { printDanglingComments: en, printCommentsSeparately: er } = tK(),
                  eu = ev(),
                  { getNextNonSpaceNonCommentCharacterIndex: ei } = e3(),
                  {
                    builders: {
                      line: ea,
                      softline: es,
                      group: eo,
                      indent: el,
                      ifBreak: ep,
                      hardline: ec,
                      join: ed,
                      indentIfBreak: eD
                    },
                    utils: { removeLines: ef, willBreak: eg }
                  } = eO(),
                  { ArgExpansionBailout: eh } = ti(),
                  {
                    getFunctionParameters: eE,
                    hasLeadingOwnLineComment: eC,
                    isFlowAnnotationComment: eF,
                    isJsxNode: eA,
                    isTemplateOnItsOwnLine: ex,
                    shouldPrintComma: eb,
                    startsWithNoLookaheadToken: eS,
                    isBinaryish: eT,
                    isLineComment: eB,
                    hasComment: eN,
                    getComments: ew,
                    CommentCheckFlags: eP,
                    isCallLikeExpression: ek,
                    isCallExpression: ej,
                    getCallArguments: eI,
                    hasNakedLeftSide: eL,
                    getLeftSide: e_
                  } = ne(),
                  { locEnd: eM } = tW(),
                  { printFunctionParameters: e$, shouldGroupFunctionParameters: eR } = nL(),
                  { printPropertyKey: eV } = n$(),
                  { printFunctionTypeParameters: eW } = nN();
                function Q(e, O, et, en) {
                  let er = e.getValue(),
                    eu = !1;
                  if (
                    ('FunctionDeclaration' === er.type || 'FunctionExpression' === er.type) &&
                    en &&
                    en.expandLastArg
                  ) {
                    let O = e.getParentNode();
                    ej(O) && eI(O).length > 1 && (eu = !0);
                  }
                  let ei = [];
                  'TSDeclareFunction' === er.type && er.declare && ei.push('declare '),
                    er.async && ei.push('async '),
                    er.generator ? ei.push('function* ') : ei.push('function '),
                    er.id && ei.push(O('id'));
                  let ea = e$(e, O, et, eu),
                    es = K(e, O, et),
                    el = eR(er, es);
                  return (
                    ei.push(eW(e, et, O), eo([el ? eo(ea) : ea, es]), er.body ? ' ' : '', O('body')),
                    et.semi && (er.declare || !er.body) && ei.push(';'),
                    ei
                  );
                }
                function V(e, O, en) {
                  let er = e.getNode(),
                    { kind: eu } = er,
                    ei = er.value || er,
                    ea = [];
                  return (
                    eu && 'init' !== eu && 'method' !== eu && 'constructor' !== eu
                      ? (et.ok('get' === eu || 'set' === eu), ea.push(eu, ' '))
                      : ei.async && ea.push('async '),
                    ei.generator && ea.push('*'),
                    ea.push(eV(e, O, en), er.optional || er.key.optional ? '?' : ''),
                    er === ei
                      ? ea.push(j(e, O, en))
                      : 'FunctionExpression' === ei.type
                      ? ea.push(e.call((e) => j(e, O, en), 'value'))
                      : ea.push(en('value')),
                    ea
                  );
                }
                function j(e, O, et) {
                  let en = e.getNode(),
                    er = e$(e, et, O),
                    eu = K(e, et, O),
                    ei = eR(en, eu),
                    ea = [eW(e, O, et), eo([ei ? eo(er) : er, eu])];
                  return en.body ? ea.push(' ', et('body')) : ea.push(O.semi ? ';' : ''), ea;
                }
                function Y(e, O, et, er) {
                  let eu = e.getValue(),
                    ea = [];
                  if ((eu.async && ea.push('async '), W(e, O))) ea.push(et(['params', 0]));
                  else {
                    let en = er && (er.expandLastArg || er.expandFirstArg),
                      eu = K(e, et, O);
                    if (en) {
                      if (eg(eu)) throw new eh();
                      eu = eo(ef(eu));
                    }
                    ea.push(eo([e$(e, et, O, en, !0), eu]));
                  }
                  let es = en(e, O, !0, (e) => {
                    let et = ei(O.originalText, e, eM);
                    return !1 !== et && '=>' === O.originalText.slice(et, et + 2);
                  });
                  return es && ea.push(' ', es), ea;
                }
                function ie(e, O, et, en, er, eu) {
                  let ei = e.getName(),
                    ec = ek(e.getParentNode()) && 'callee' === ei,
                    ef = !!(O && O.assignmentLayout),
                    eg =
                      'BlockStatement' !== eu.body.type &&
                      'ObjectExpression' !== eu.body.type &&
                      'SequenceExpression' !== eu.body.type,
                    ey = (ec && eg) || (O && 'chain-tail-arrow-chain' === O.assignmentLayout),
                    eh = Symbol('arrow-chain');
                  return (
                    'SequenceExpression' === eu.body.type && (er = eo(['(', el([es, er]), es, ')'])),
                    eo([
                      eo(el([ec || ef ? es : '', eo(ed([' =>', ea], et), { shouldBreak: en })]), {
                        id: eh,
                        shouldBreak: ey
                      }),
                      ' =>',
                      eD(eg ? el([ea, er]) : [' ', er], { groupId: eh }),
                      ec ? ep(es, '', { groupId: eh }) : ''
                    ])
                  );
                }
                function ee(e, O, et, en) {
                  let eu = e.getValue(),
                    ei = [],
                    ec = [],
                    ed = !1;
                  if (
                    ((function H() {
                      let ea = Y(e, O, et, en);
                      if (0 === ei.length) ei.push(ea);
                      else {
                        let { leading: et, trailing: en } = er(e, O);
                        ei.push([et, ea]), ec.unshift(en);
                      }
                      (ed =
                        ed ||
                        (eu.returnType && eE(eu).length > 0) ||
                        eu.typeParameters ||
                        eE(eu).some((e) => 'Identifier' !== e.type)),
                        'ArrowFunctionExpression' !== eu.body.type || (en && en.expandLastArg)
                          ? ec.unshift(et('body', en))
                          : ((eu = eu.body), e.call(H, 'body'));
                    })(),
                    ei.length > 1)
                  )
                    return ie(e, en, ei, ed, ec, eu);
                  if (
                    (ei.push(' =>'),
                    !eC(O.originalText, eu.body) &&
                      ('ArrayExpression' === eu.body.type ||
                        'ObjectExpression' === eu.body.type ||
                        'BlockStatement' === eu.body.type ||
                        eA(eu.body) ||
                        ex(eu.body, O.originalText) ||
                        'ArrowFunctionExpression' === eu.body.type ||
                        'DoExpression' === eu.body.type))
                  )
                    return eo([...ei, ' ', ec]);
                  if ('SequenceExpression' === eu.body.type) return eo([...ei, eo([' (', el([es, ec]), es, ')'])]);
                  let eD = ((en && en.expandLastArg) || 'JSXExpressionContainer' === e.getParentNode().type) && !eN(eu),
                    ef = en && en.expandLastArg && eb(O, 'all'),
                    eg = 'ConditionalExpression' === eu.body.type && !eS(eu.body, (e) => 'ObjectExpression' === e.type);
                  return eo([
                    ...ei,
                    eo([el([ea, eg ? ep('', '(') : '', ec, eg ? ep('', ')') : '']), eD ? [ep(ef ? ',' : ''), es] : ''])
                  ]);
                }
                function ce(e) {
                  let O = eE(e);
                  return (
                    1 === O.length &&
                    !e.typeParameters &&
                    !eN(e, eP.Dangling) &&
                    'Identifier' === O[0].type &&
                    !O[0].typeAnnotation &&
                    !eN(O[0]) &&
                    !O[0].optional &&
                    !e.predicate &&
                    !e.returnType
                  );
                }
                function W(e, O) {
                  return 'always' !== O.arrowParens && 'avoid' === O.arrowParens && ce(e.getValue());
                }
                function K(e, O, et) {
                  let en = e.getValue(),
                    er = O('returnType');
                  if (en.returnType && eF(et.originalText, en.returnType)) return [' /*: ', er, ' */'];
                  let eu = [er];
                  return (
                    en.returnType && en.returnType.typeAnnotation && eu.unshift(': '),
                    en.predicate && eu.push(en.returnType ? ' ' : ': ', O('predicate')),
                    eu
                  );
                }
                function de(e, O, et) {
                  let er = e.getValue(),
                    ei = O.semi ? ';' : '',
                    ea = [];
                  er.argument &&
                    (z(O, er.argument)
                      ? ea.push([' (', el([ec, et('argument')]), ec, ')'])
                      : eT(er.argument) || 'SequenceExpression' === er.argument.type
                      ? ea.push(eo([ep(' (', ' '), el([es, et('argument')]), es, ep(')')]))
                      : ea.push(' ', et('argument')));
                  let ed = eu(ew(er)),
                    eD = ed && eB(ed);
                  return eD && ea.push(ei), eN(er, eP.Dangling) && ea.push(' ', en(e, O, !0)), eD || ea.push(ei), ea;
                }
                function ue(e, O, et) {
                  return ['return', de(e, O, et)];
                }
                function Fe(e, O, et) {
                  return ['throw', de(e, O, et)];
                }
                function z(e, O) {
                  if (eC(e.originalText, O)) return !0;
                  if (eL(O)) {
                    let et = O,
                      en;
                    for (; (en = e_(et)); ) if (((et = en), eC(e.originalText, et))) return !0;
                  }
                  return !1;
                }
                O.exports = {
                  printFunction: Q,
                  printArrowFunction: ee,
                  printMethod: V,
                  printReturnStatement: ue,
                  printThrowStatement: Fe,
                  printMethodInternal: j,
                  shouldPrintParamsWithoutParens: W
                };
              }
            }),
            nV = te({
              'src/language-js/print/decorators.js'(e, O) {
                ey();
                var { isNonEmptyArray: et, hasNewline: en } = e3(),
                  {
                    builders: { line: er, hardline: eu, join: ei, breakParent: ea, group: es }
                  } = eO(),
                  { locStart: eo, locEnd: el } = tW(),
                  { getParentExportDeclaration: ep } = ne();
                function g(e, O, et) {
                  let en = e.getValue();
                  return es([ei(er, e.map(et, 'decorators')), F(en, O) ? eu : er]);
                }
                function c(e, O, et) {
                  return [ei(eu, e.map(et, 'declaration', 'decorators')), eu];
                }
                function f(e, O, en) {
                  let es = e.getValue(),
                    { decorators: eo } = es;
                  if (!et(eo) || _(e.getParentNode())) return;
                  let el = 'ClassExpression' === es.type || 'ClassDeclaration' === es.type || F(es, O);
                  return [ep(e) ? eu : el ? ea : '', ei(er, e.map(en, 'decorators')), er];
                }
                function F(e, O) {
                  return e.decorators.some((e) => en(O.originalText, el(e)));
                }
                function _(e) {
                  if (
                    'ExportDefaultDeclaration' !== e.type &&
                    'ExportNamedDeclaration' !== e.type &&
                    'DeclareExportDeclaration' !== e.type
                  )
                    return !1;
                  let O = e.declaration && e.declaration.decorators;
                  return et(O) && eo(e) === eo(O[0]);
                }
                O.exports = {
                  printDecorators: f,
                  printClassMemberDecorators: g,
                  printDecoratorsBeforeExport: c,
                  hasDecoratorsBeforeExport: _
                };
              }
            }),
            nW = te({
              'src/language-js/print/class.js'(e, O) {
                ey();
                var { isNonEmptyArray: et, createGroupIdMapper: en } = e3(),
                  { printComments: er, printDanglingComments: eu } = tK(),
                  {
                    builders: { join: ei, line: ea, hardline: es, softline: eo, group: el, indent: ep, ifBreak: ec }
                  } = eO(),
                  { hasComment: ed, CommentCheckFlags: eD } = ne(),
                  { getTypeParametersGroupId: ef } = nM(),
                  { printMethod: eg } = nR(),
                  { printOptionalToken: eh, printTypeAnnotation: eE, printDefiniteToken: eC } = nN(),
                  { printPropertyKey: eF } = n$(),
                  { printAssignment: eA } = nO(),
                  { printClassMemberDecorators: ev } = nV();
                function $(e, O, en) {
                  let eu = e.getValue(),
                    ei = [];
                  eu.declare && ei.push('declare '), eu.abstract && ei.push('abstract '), ei.push('class');
                  let es =
                      (eu.id && ed(eu.id, eD.Trailing)) ||
                      (eu.typeParameters && ed(eu.typeParameters, eD.Trailing)) ||
                      (eu.superClass && ed(eu.superClass)) ||
                      et(eu.extends) ||
                      et(eu.mixins) ||
                      et(eu.implements),
                    eo = [],
                    ec = [];
                  if ((eu.id && eo.push(' ', en('id')), eo.push(en('typeParameters')), eu.superClass)) {
                    let et = [d(e, O, en), en('superTypeParameters')],
                      eu = e.call((e) => ['extends ', er(e, et, O)], 'superClass');
                    es ? ec.push(ea, el(eu)) : ec.push(' ', eu);
                  } else ec.push(o(e, O, en, 'extends'));
                  if ((ec.push(o(e, O, en, 'mixins'), o(e, O, en, 'implements')), es)) {
                    let e;
                    (e = C(eu) ? [...eo, ep(ec)] : ep([...eo, ec])), ei.push(el(e, { id: ex(eu) }));
                  } else ei.push(...eo, ...ec);
                  return ei.push(' ', en('body')), ei;
                }
                var ex = en('heritageGroup');
                function T(e) {
                  return ec(es, '', { groupId: ex(e) });
                }
                function m(e) {
                  return ['superClass', 'extends', 'mixins', 'implements'].filter((O) => !!e[O]).length > 1;
                }
                function C(e) {
                  return e.typeParameters && !ed(e.typeParameters, eD.Trailing | eD.Line) && !m(e);
                }
                function o(e, O, en, er) {
                  let eo = e.getValue();
                  if (!et(eo[er])) return '';
                  let ed = eu(e, O, !0, (e) => {
                    let { marker: O } = e;
                    return O === er;
                  });
                  return [
                    C(eo) ? ec(' ', ea, { groupId: ef(eo.typeParameters) }) : ea,
                    ed,
                    ed && es,
                    er,
                    el(ep([ea, ei([',', ea], e.map(en, er))]))
                  ];
                }
                function d(e, O, et) {
                  let en = et('superClass');
                  return 'AssignmentExpression' === e.getParentNode().type
                    ? el(ec(['(', ep([eo, en]), eo, ')'], en))
                    : en;
                }
                function v(e, O, en) {
                  let er = e.getValue(),
                    eu = [];
                  return (
                    et(er.decorators) && eu.push(ev(e, O, en)),
                    er.accessibility && eu.push(er.accessibility + ' '),
                    er.readonly && eu.push('readonly '),
                    er.declare && eu.push('declare '),
                    er.static && eu.push('static '),
                    ('TSAbstractMethodDefinition' === er.type || er.abstract) && eu.push('abstract '),
                    er.override && eu.push('override '),
                    eu.push(eg(e, O, en)),
                    eu
                  );
                }
                function S(e, O, en) {
                  let er = e.getValue(),
                    eu = [],
                    ei = O.semi ? ';' : '';
                  return (
                    et(er.decorators) && eu.push(ev(e, O, en)),
                    er.accessibility && eu.push(er.accessibility + ' '),
                    er.declare && eu.push('declare '),
                    er.static && eu.push('static '),
                    ('TSAbstractPropertyDefinition' === er.type ||
                      'TSAbstractAccessorProperty' === er.type ||
                      er.abstract) &&
                      eu.push('abstract '),
                    er.override && eu.push('override '),
                    er.readonly && eu.push('readonly '),
                    er.variance && eu.push(en('variance')),
                    ('ClassAccessorProperty' === er.type ||
                      'AccessorProperty' === er.type ||
                      'TSAbstractAccessorProperty' === er.type) &&
                      eu.push('accessor '),
                    eu.push(eF(e, O, en), eh(e), eC(e), eE(e, O, en)),
                    [eA(e, O, en, eu, ' =', 'value'), ei]
                  );
                }
                O.exports = {
                  printClass: $,
                  printClassMethod: v,
                  printClassProperty: S,
                  printHardlineAfterHeritage: T
                };
              }
            }),
            nq = te({
              'src/language-js/print/interface.js'(e, O) {
                ey();
                var { isNonEmptyArray: et } = e3(),
                  {
                    builders: { join: en, line: er, group: eu, indent: ei, ifBreak: ea }
                  } = eO(),
                  { hasComment: es, identity: eo, CommentCheckFlags: el } = ne(),
                  { getTypeParametersGroupId: ep } = nM(),
                  { printTypeScriptModifiers: ec } = nN();
                function c(e, O, ed) {
                  let eD = e.getValue(),
                    ef = [];
                  eD.declare && ef.push('declare '),
                    'TSInterfaceDeclaration' === eD.type && ef.push(eD.abstract ? 'abstract ' : '', ec(e, O, ed)),
                    ef.push('interface');
                  let eg = [],
                    ey = [];
                  'InterfaceTypeAnnotation' !== eD.type && eg.push(' ', ed('id'), ed('typeParameters'));
                  let eh = eD.typeParameters && !es(eD.typeParameters, el.Trailing | el.Line);
                  return (
                    et(eD.extends) &&
                      ey.push(
                        eh ? ea(' ', er, { groupId: ep(eD.typeParameters) }) : er,
                        'extends ',
                        (1 === eD.extends.length ? eo : ei)(en([',', er], e.map(ed, 'extends')))
                      ),
                    (eD.id && es(eD.id, el.Trailing)) || et(eD.extends)
                      ? eh
                        ? ef.push(eu([...eg, ei(ey)]))
                        : ef.push(eu(ei([...eg, ...ey])))
                      : ef.push(...eg, ...ey),
                    ef.push(' ', ed('body')),
                    eu(ef)
                  );
                }
                O.exports = { printInterface: c };
              }
            }),
            nJ = te({
              'src/language-js/print/module.js'(e, O) {
                ey();
                var { isNonEmptyArray: et } = e3(),
                  {
                    builders: { softline: en, group: er, indent: eu, join: ei, line: ea, ifBreak: es, hardline: eo }
                  } = eO(),
                  { printDanglingComments: el } = tK(),
                  {
                    hasComment: ep,
                    CommentCheckFlags: ec,
                    shouldPrintComma: ed,
                    needsHardlineAfterDanglingComment: eD,
                    isStringLiteral: ef,
                    rawText: eg
                  } = ne(),
                  { locStart: eh, hasSameLoc: eE } = tW(),
                  { hasDecoratorsBeforeExport: eC, printDecoratorsBeforeExport: eF } = nV();
                function I(e, O, et) {
                  let en = e.getValue(),
                    er = O.semi ? ';' : '',
                    eu = [],
                    { importKind: ei } = en;
                  return (
                    eu.push('import'),
                    ei && 'value' !== ei && eu.push(' ', ei),
                    eu.push(m(e, O, et), T(e, O, et), o(e, O, et), er),
                    eu
                  );
                }
                function P(e, O, et) {
                  let en = e.getValue(),
                    er = [];
                  eC(en) && er.push(eF(e, O, et));
                  let { type: eu, exportKind: ei, declaration: ea } = en;
                  return (
                    er.push('export'),
                    (en.default || 'ExportDefaultDeclaration' === eu) && er.push(' default'),
                    ep(en, ec.Dangling) && (er.push(' ', el(e, O, !0)), eD(en) && er.push(eo)),
                    ea
                      ? er.push(' ', et('declaration'))
                      : er.push('type' === ei ? ' type' : '', m(e, O, et), T(e, O, et), o(e, O, et)),
                    D(en, O) && er.push(';'),
                    er
                  );
                }
                function $(e, O, et) {
                  let en = e.getValue(),
                    er = O.semi ? ';' : '',
                    eu = [],
                    { exportKind: ei, exported: ea } = en;
                  return (
                    eu.push('export'),
                    'type' === ei && eu.push(' type'),
                    eu.push(' *'),
                    ea && eu.push(' as ', et('exported')),
                    eu.push(T(e, O, et), o(e, O, et), er),
                    eu
                  );
                }
                function D(e, O) {
                  if (!O.semi) return !1;
                  let { type: et, declaration: en } = e,
                    er = e.default || 'ExportDefaultDeclaration' === et;
                  if (!en) return !0;
                  let { type: eu } = en;
                  return !!(
                    er &&
                    'ClassDeclaration' !== eu &&
                    'FunctionDeclaration' !== eu &&
                    'TSInterfaceDeclaration' !== eu &&
                    'DeclareClass' !== eu &&
                    'DeclareFunction' !== eu &&
                    'TSDeclareFunction' !== eu &&
                    'EnumDeclaration' !== eu
                  );
                }
                function T(e, O, et) {
                  let en = e.getValue();
                  if (!en.source) return '';
                  let er = [];
                  return C(en, O) || er.push(' from'), er.push(' ', et('source')), er;
                }
                function m(e, O, eo) {
                  let el = e.getValue();
                  if (C(el, O)) return '';
                  let ec = [' '];
                  if (et(el.specifiers)) {
                    let et = [],
                      eD = [];
                    e.each(() => {
                      let O = e.getValue().type;
                      if (
                        'ExportNamespaceSpecifier' === O ||
                        'ExportDefaultSpecifier' === O ||
                        'ImportNamespaceSpecifier' === O ||
                        'ImportDefaultSpecifier' === O
                      )
                        et.push(eo());
                      else if ('ExportSpecifier' === O || 'ImportSpecifier' === O) eD.push(eo());
                      else throw Error(`Unknown specifier type ${JSON.stringify(O)}`);
                    }, 'specifiers'),
                      ec.push(ei(', ', et)),
                      eD.length > 0 &&
                        (et.length > 0 && ec.push(', '),
                        eD.length > 1 || et.length > 0 || el.specifiers.some((e) => ep(e))
                          ? ec.push(
                              er([
                                '{',
                                eu([O.bracketSpacing ? ea : en, ei([',', ea], eD)]),
                                es(ed(O) ? ',' : ''),
                                O.bracketSpacing ? ea : en,
                                '}'
                              ])
                            )
                          : ec.push(['{', O.bracketSpacing ? ' ' : '', ...eD, O.bracketSpacing ? ' ' : '', '}']));
                  } else ec.push('{}');
                  return ec;
                }
                function C(e, O) {
                  let { type: en, importKind: er, source: eu, specifiers: ei } = e;
                  return (
                    !('ImportDeclaration' !== en || et(ei)) &&
                    'type' !== er &&
                    !/{\s*}/.test(O.originalText.slice(eh(e), eh(eu)))
                  );
                }
                function o(e, O, en) {
                  return et(e.getNode().assertions)
                    ? [
                        ' assert {',
                        O.bracketSpacing ? ' ' : '',
                        ei(', ', e.map(en, 'assertions')),
                        O.bracketSpacing ? ' ' : '',
                        '}'
                      ]
                    : '';
                }
                function d(e, O, et) {
                  let en = e.getNode(),
                    { type: er } = en,
                    eu = [],
                    ei = 'ImportSpecifier' === er ? en.importKind : en.exportKind;
                  ei && 'value' !== ei && eu.push(ei, ' ');
                  let ea = er.startsWith('Import'),
                    es = ea ? 'imported' : 'local',
                    eo = ea ? 'local' : 'exported',
                    el = en[es],
                    ep = en[eo],
                    ec = '',
                    ed = '';
                  return (
                    'ExportNamespaceSpecifier' === er || 'ImportNamespaceSpecifier' === er
                      ? (ec = '*')
                      : el && (ec = et(es)),
                    ep && !v(en) && (ed = et(eo)),
                    eu.push(ec, ec && ed ? ' as ' : '', ed),
                    eu
                  );
                }
                function v(e) {
                  if ('ImportSpecifier' !== e.type && 'ExportSpecifier' !== e.type) return !1;
                  let { local: O, ['ImportSpecifier' === e.type ? 'imported' : 'exported']: et } = e;
                  return (
                    !!(O.type === et.type && eE(O, et)) &&
                    (ef(O) ? O.value === et.value && eg(O) === eg(et) : 'Identifier' === O.type && O.name === et.name)
                  );
                }
                O.exports = {
                  printImportDeclaration: I,
                  printExportDeclaration: P,
                  printExportAllDeclaration: $,
                  printModuleSpecifier: d
                };
              }
            }),
            nU = te({
              'src/language-js/print/object.js'(e, O) {
                ey();
                var { printDanglingComments: et } = tK(),
                  {
                    builders: { line: en, softline: er, group: eu, indent: ei, ifBreak: ea, hardline: es }
                  } = eO(),
                  { getLast: eo, hasNewlineInRange: el, hasNewline: ep, isNonEmptyArray: ec } = e3(),
                  {
                    shouldPrintComma: ed,
                    hasComment: eD,
                    getComments: ef,
                    CommentCheckFlags: eg,
                    isNextLineEmpty: eh
                  } = ne(),
                  { locStart: eE, locEnd: eC } = tW(),
                  { printOptionalToken: eF, printTypeAnnotation: eA } = nN(),
                  { shouldHugFunctionParameters: ev } = nL(),
                  { shouldHugType: ex } = n_(),
                  { printHardlineAfterHeritage: eb } = nW();
                function T(e, O, ey) {
                  let eS = O.semi ? ';' : '',
                    eT = e.getValue(),
                    eB;
                  eB = 'TSTypeLiteral' === eT.type ? 'members' : 'TSInterfaceBody' === eT.type ? 'body' : 'properties';
                  let eN = 'ObjectTypeAnnotation' === eT.type,
                    ew = [eB];
                  eN && ew.push('indexers', 'callProperties', 'internalSlots');
                  let eP = ew.map((e) => eT[e][0]).sort((e, O) => eE(e) - eE(O))[0],
                    ek = e.getParentNode(0),
                    ej =
                      eN &&
                      ek &&
                      ('InterfaceDeclaration' === ek.type ||
                        'DeclareInterface' === ek.type ||
                        'DeclareClass' === ek.type) &&
                      'body' === e.getName(),
                    eI =
                      'TSInterfaceBody' === eT.type ||
                      ej ||
                      ('ObjectPattern' === eT.type &&
                        'FunctionDeclaration' !== ek.type &&
                        'FunctionExpression' !== ek.type &&
                        'ArrowFunctionExpression' !== ek.type &&
                        'ObjectMethod' !== ek.type &&
                        'ClassMethod' !== ek.type &&
                        'ClassPrivateMethod' !== ek.type &&
                        'AssignmentPattern' !== ek.type &&
                        'CatchClause' !== ek.type &&
                        eT.properties.some(
                          (e) => e.value && ('ObjectPattern' === e.value.type || 'ArrayPattern' === e.value.type)
                        )) ||
                      ('ObjectPattern' !== eT.type && eP && el(O.originalText, eE(eT), eE(eP))),
                    eO = ej ? ';' : 'TSInterfaceBody' === eT.type || 'TSTypeLiteral' === eT.type ? ea(eS, ';') : ',',
                    eL = 'RecordExpression' === eT.type ? '#{' : eT.exact ? '{|' : '{',
                    e_ = eT.exact ? '|}' : '}',
                    eM = [];
                  for (let O of ew)
                    e.each((e) => {
                      let O = e.getValue();
                      eM.push({ node: O, printed: ey(), loc: eE(O) });
                    }, O);
                  ew.length > 1 && eM.sort((e, O) => e.loc - O.loc);
                  let e$ = [],
                    eR = eM.map((e) => {
                      let et = [...e$, eu(e.printed)];
                      return (
                        (e$ = [eO, en]),
                        ('TSPropertySignature' === e.node.type ||
                          'TSMethodSignature' === e.node.type ||
                          'TSConstructSignatureDeclaration' === e.node.type) &&
                          eD(e.node, eg.PrettierIgnore) &&
                          e$.shift(),
                        eh(e.node, O) && e$.push(es),
                        et
                      );
                    });
                  if (eT.inexact) {
                    let er;
                    if (eD(eT, eg.Dangling)) {
                      let eu = eD(eT, eg.Line);
                      er = [et(e, O, !0), eu || ep(O.originalText, eC(eo(ef(eT)))) ? es : en, '...'];
                    } else er = ['...'];
                    eR.push([...e$, ...er]);
                  }
                  let eV = eo(eT[eB]),
                    eW = !(
                      eT.inexact ||
                      (eV && 'RestElement' === eV.type) ||
                      (eV &&
                        ('TSPropertySignature' === eV.type ||
                          'TSCallSignatureDeclaration' === eV.type ||
                          'TSMethodSignature' === eV.type ||
                          'TSConstructSignatureDeclaration' === eV.type) &&
                        eD(eV, eg.PrettierIgnore))
                    ),
                    eq;
                  if (0 === eR.length) {
                    if (!eD(eT, eg.Dangling)) return [eL, e_, eA(e, O, ey)];
                    eq = eu([eL, et(e, O), er, e_, eF(e), eA(e, O, ey)]);
                  } else
                    eq = [
                      ej && ec(eT.properties) ? eb(ek) : '',
                      eL,
                      ei([O.bracketSpacing ? en : er, ...eR]),
                      ea(eW && (',' !== eO || ed(O)) ? eO : ''),
                      O.bracketSpacing ? en : er,
                      e_,
                      eF(e),
                      eA(e, O, ey)
                    ];
                  return e.match(
                    (e) => 'ObjectPattern' === e.type && !e.decorators,
                    (e, O, et) =>
                      ev(e) && ('params' === O || 'parameters' === O || 'this' === O || 'rest' === O) && 0 === et
                  ) ||
                    e.match(
                      ex,
                      (e, O) => 'typeAnnotation' === O,
                      (e, O) => 'typeAnnotation' === O,
                      (e, O, et) =>
                        ev(e) && ('params' === O || 'parameters' === O || 'this' === O || 'rest' === O) && 0 === et
                    ) ||
                    (!eI &&
                      e.match(
                        (e) => 'ObjectPattern' === e.type,
                        (e) => 'AssignmentExpression' === e.type || 'VariableDeclarator' === e.type
                      ))
                    ? eq
                    : eu(eq, { shouldBreak: eI });
                }
                O.exports = { printObject: T };
              }
            }),
            nH = te({
              'src/language-js/print/flow.js'(e, O) {
                ey();
                var et = tX(),
                  { printDanglingComments: en } = tK(),
                  { printString: er, printNumber: eu } = e3(),
                  {
                    builders: { hardline: ei, softline: ea, group: es, indent: eo }
                  } = eO(),
                  {
                    getParentExportDeclaration: el,
                    isFunctionNotation: ep,
                    isGetterOrSetter: ec,
                    rawText: ed,
                    shouldPrintComma: eD
                  } = ne(),
                  { locStart: ef, locEnd: eg } = tW(),
                  { replaceTextEndOfLine: eh } = ek(),
                  { printClass: eE } = nW(),
                  {
                    printOpaqueType: eC,
                    printTypeAlias: eF,
                    printIntersectionType: eA,
                    printUnionType: ev,
                    printFunctionType: ex,
                    printTupleType: eb,
                    printIndexedAccessType: eS
                  } = n_(),
                  { printInterface: eT } = nq(),
                  { printTypeParameter: eB, printTypeParameters: eN } = nM(),
                  { printExportDeclaration: ew, printExportAllDeclaration: eP } = nJ(),
                  { printArrayItems: ej } = nw(),
                  { printObject: eI } = nU(),
                  { printPropertyKey: eL } = n$(),
                  { printOptionalToken: e_, printTypeAnnotation: eM, printRestSpread: e$ } = nN();
                function q(e, O, el) {
                  let ey = e.getValue(),
                    ek = O.semi ? ';' : '',
                    eO = [];
                  switch (ey.type) {
                    case 'DeclareClass':
                      return J(e, eE(e, O, el));
                    case 'DeclareFunction':
                      return J(e, ['function ', el('id'), ey.predicate ? ' ' : '', el('predicate'), ek]);
                    case 'DeclareModule':
                      return J(e, ['module ', el('id'), ' ', el('body')]);
                    case 'DeclareModuleExports':
                      return J(e, ['module.exports', ': ', el('typeAnnotation'), ek]);
                    case 'DeclareVariable':
                      return J(e, ['var ', el('id'), ek]);
                    case 'DeclareOpaqueType':
                      return J(e, eC(e, O, el));
                    case 'DeclareInterface':
                      return J(e, eT(e, O, el));
                    case 'DeclareTypeAlias':
                      return J(e, eF(e, O, el));
                    case 'DeclareExportDeclaration':
                      return J(e, ew(e, O, el));
                    case 'DeclareExportAllDeclaration':
                      return J(e, eP(e, O, el));
                    case 'OpaqueType':
                      return eC(e, O, el);
                    case 'TypeAlias':
                      return eF(e, O, el);
                    case 'IntersectionTypeAnnotation':
                      return eA(e, O, el);
                    case 'UnionTypeAnnotation':
                      return ev(e, O, el);
                    case 'FunctionTypeAnnotation':
                      return ex(e, O, el);
                    case 'TupleTypeAnnotation':
                      return eb(e, O, el);
                    case 'GenericTypeAnnotation':
                      return [el('id'), eN(e, O, el, 'typeParameters')];
                    case 'IndexedAccessType':
                    case 'OptionalIndexedAccessType':
                      return eS(e, O, el);
                    case 'TypeAnnotation':
                      return el('typeAnnotation');
                    case 'TypeParameter':
                      return eB(e, O, el);
                    case 'TypeofTypeAnnotation':
                      return ['typeof ', el('argument')];
                    case 'ExistsTypeAnnotation':
                      return '*';
                    case 'EmptyTypeAnnotation':
                      return 'empty';
                    case 'MixedTypeAnnotation':
                      return 'mixed';
                    case 'ArrayTypeAnnotation':
                      return [el('elementType'), '[]'];
                    case 'BooleanLiteralTypeAnnotation':
                      return String(ey.value);
                    case 'EnumDeclaration':
                      return ['enum ', el('id'), ' ', el('body')];
                    case 'EnumBooleanBody':
                    case 'EnumNumberBody':
                    case 'EnumStringBody':
                    case 'EnumSymbolBody':
                      if ('EnumSymbolBody' === ey.type || ey.explicitType) {
                        let e = null;
                        switch (ey.type) {
                          case 'EnumBooleanBody':
                            e = 'boolean';
                            break;
                          case 'EnumNumberBody':
                            e = 'number';
                            break;
                          case 'EnumStringBody':
                            e = 'string';
                            break;
                          case 'EnumSymbolBody':
                            e = 'symbol';
                        }
                        eO.push('of ', e, ' ');
                      }
                      if (0 !== ey.members.length || ey.hasUnknownMembers) {
                        let et =
                          ey.members.length > 0
                            ? [ei, ej(e, O, 'members', el), ey.hasUnknownMembers || eD(O) ? ',' : '']
                            : [];
                        eO.push(
                          es(['{', eo([...et, ...(ey.hasUnknownMembers ? [ei, '...'] : [])]), en(e, O, !0), ei, '}'])
                        );
                      } else eO.push(es(['{', en(e, O), ea, '}']));
                      return eO;
                    case 'EnumBooleanMember':
                    case 'EnumNumberMember':
                    case 'EnumStringMember':
                      return [el('id'), ' = ', 'object' == typeof ey.init ? el('init') : String(ey.init)];
                    case 'EnumDefaultedMember':
                      return el('id');
                    case 'FunctionTypeParam': {
                      let O = ey.name ? el('name') : e.getParentNode().this === ey ? 'this' : '';
                      return [O, e_(e), O ? ': ' : '', el('typeAnnotation')];
                    }
                    case 'InterfaceDeclaration':
                    case 'InterfaceTypeAnnotation':
                      return eT(e, O, el);
                    case 'ClassImplements':
                    case 'InterfaceExtends':
                      return [el('id'), el('typeParameters')];
                    case 'NullableTypeAnnotation':
                      return ['?', el('typeAnnotation')];
                    case 'Variance': {
                      let { kind: e } = ey;
                      return et.ok('plus' === e || 'minus' === e), 'plus' === e ? '+' : '-';
                    }
                    case 'ObjectTypeCallProperty':
                      return ey.static && eO.push('static '), eO.push(el('value')), eO;
                    case 'ObjectTypeIndexer':
                      return [
                        ey.static ? 'static ' : '',
                        ey.variance ? el('variance') : '',
                        '[',
                        el('id'),
                        ey.id ? ': ' : '',
                        el('key'),
                        ']: ',
                        el('value')
                      ];
                    case 'ObjectTypeProperty': {
                      let et = '';
                      return (
                        ey.proto ? (et = 'proto ') : ey.static && (et = 'static '),
                        [
                          et,
                          ec(ey) ? ey.kind + ' ' : '',
                          ey.variance ? el('variance') : '',
                          eL(e, O, el),
                          e_(e),
                          ep(ey) ? '' : ': ',
                          el('value')
                        ]
                      );
                    }
                    case 'ObjectTypeAnnotation':
                      return eI(e, O, el);
                    case 'ObjectTypeInternalSlot':
                      return [
                        ey.static ? 'static ' : '',
                        '[[',
                        el('id'),
                        ']]',
                        e_(e),
                        ey.method ? '' : ': ',
                        el('value')
                      ];
                    case 'ObjectTypeSpreadProperty':
                      return e$(e, O, el);
                    case 'QualifiedTypeofIdentifier':
                    case 'QualifiedTypeIdentifier':
                      return [el('qualification'), '.', el('id')];
                    case 'StringLiteralTypeAnnotation':
                      return eh(er(ed(ey), O));
                    case 'NumberLiteralTypeAnnotation':
                      et.strictEqual(typeof ey.value, 'number');
                    case 'BigIntLiteralTypeAnnotation':
                      return ey.extra ? eu(ey.extra.raw) : eu(ey.raw);
                    case 'TypeCastExpression':
                      return ['(', el('expression'), eM(e, O, el), ')'];
                    case 'TypeParameterDeclaration':
                    case 'TypeParameterInstantiation': {
                      let et = eN(e, O, el, 'params');
                      if ('flow' === O.parser) {
                        let e = ef(ey),
                          en = eg(ey),
                          er = O.originalText.lastIndexOf('/*', e),
                          eu = O.originalText.indexOf('*/', en);
                        if (-1 !== er && -1 !== eu) {
                          let e = O.originalText.slice(er + 2, eu).trim();
                          if (e.startsWith('::') && !e.includes('/*') && !e.includes('*/')) return ['/*:: ', et, ' */'];
                        }
                      }
                      return et;
                    }
                    case 'InferredPredicate':
                      return '%checks';
                    case 'DeclaredPredicate':
                      return ['%checks(', el('value'), ')'];
                    case 'AnyTypeAnnotation':
                      return 'any';
                    case 'BooleanTypeAnnotation':
                      return 'boolean';
                    case 'BigIntTypeAnnotation':
                      return 'bigint';
                    case 'NullLiteralTypeAnnotation':
                      return 'null';
                    case 'NumberTypeAnnotation':
                      return 'number';
                    case 'SymbolTypeAnnotation':
                      return 'symbol';
                    case 'StringTypeAnnotation':
                      return 'string';
                    case 'VoidTypeAnnotation':
                      return 'void';
                    case 'ThisTypeAnnotation':
                      return 'this';
                    case 'Node':
                    case 'Printable':
                    case 'SourceLocation':
                    case 'Position':
                    case 'Statement':
                    case 'Function':
                    case 'Pattern':
                    case 'Expression':
                    case 'Declaration':
                    case 'Specifier':
                    case 'NamedSpecifier':
                    case 'Comment':
                    case 'MemberTypeAnnotation':
                    case 'Type':
                      throw Error('unprintable type: ' + JSON.stringify(ey.type));
                  }
                }
                function J(e, O) {
                  let en = el(e);
                  return en ? (et.strictEqual(en.type, 'DeclareExportDeclaration'), O) : ['declare ', O];
                }
                O.exports = { printFlow: q };
              }
            }),
            nG = te({
              'src/language-js/utils/is-ts-keyword-type.js'(e, O) {
                function t(e) {
                  let { type: O } = e;
                  return O.startsWith('TS') && O.endsWith('Keyword');
                }
                ey(), (O.exports = t);
              }
            }),
            nz = te({
              'src/language-js/print/ternary.js'(e, O) {
                ey();
                var { hasNewlineInRange: et } = e3(),
                  {
                    isJsxNode: en,
                    getComments: er,
                    isCallExpression: eu,
                    isMemberExpression: ei,
                    isTSTypeExpression: ea
                  } = ne(),
                  { locStart: es, locEnd: eo } = tW(),
                  el = t5(),
                  {
                    builders: {
                      line: ep,
                      softline: ec,
                      group: ed,
                      indent: eD,
                      align: ef,
                      ifBreak: eg,
                      dedent: eh,
                      breakParent: eE
                    }
                  } = eO();
                function N(e) {
                  let O = [e];
                  for (let e = 0; e < O.length; e++) {
                    let et = O[e];
                    for (let e of ['test', 'consequent', 'alternate']) {
                      let er = et[e];
                      if (en(er)) return !0;
                      'ConditionalExpression' === er.type && O.push(er);
                    }
                  }
                  return !1;
                }
                function x(e, O, et) {
                  let en = e.getValue(),
                    er = 'ConditionalExpression' === en.type,
                    eu = e.getParentNode(),
                    ei = er ? et('test') : [et('checkType'), ' ', 'extends', ' ', et('extendsType')];
                  return eu.type === en.type && eu[er ? 'alternate' : 'falseType'] === en ? ef(2, ei) : ei;
                }
                var eC = new Map([
                  ['AssignmentExpression', 'right'],
                  ['VariableDeclarator', 'init'],
                  ['ReturnStatement', 'argument'],
                  ['ThrowStatement', 'argument'],
                  ['UnaryExpression', 'argument'],
                  ['YieldExpression', 'argument']
                ]);
                function P(e) {
                  let O = e.getValue();
                  if ('ConditionalExpression' !== O.type) return !1;
                  let et,
                    en = O;
                  for (let O = 0; !et; O++) {
                    let er = e.getParentNode(O);
                    if (
                      (eu(er) && er.callee === en) ||
                      (ei(er) && er.object === en) ||
                      ('TSNonNullExpression' === er.type && er.expression === en)
                    ) {
                      en = er;
                      continue;
                    }
                    ('NewExpression' === er.type && er.callee === en) || (ea(er) && er.expression === en)
                      ? ((et = e.getParentNode(O + 1)), (en = er))
                      : (et = er);
                  }
                  return en !== O && et[eC.get(et.type)] === en;
                }
                function $(e, O, eu) {
                  var ea;
                  let ey = e.getValue(),
                    eC = 'ConditionalExpression' === ey.type,
                    eF = eC ? 'consequent' : 'trueType',
                    eA = eC ? 'alternate' : 'falseType',
                    ev = eC ? ['test'] : ['checkType', 'extendsType'],
                    ex = ey[eF],
                    eb = ey[eA],
                    eS = [],
                    eT = !1,
                    eB = e.getParentNode(),
                    eN = eB.type === ey.type && ev.some((e) => eB[e] === ey),
                    ew = eB.type === ey.type && !eN,
                    eP,
                    ek,
                    ej = 0;
                  do (ek = eP || ey), (eP = e.getParentNode(ej)), ej++;
                  while (eP && eP.type === ey.type && ev.every((e) => eP[e] !== ek));
                  let eI = eP || eB;
                  if (eC && (en(ey[ev[0]]) || en(ex) || en(eb) || N(ek))) {
                    (eT = !0), (ew = !0);
                    let ue = (e) => [eg('('), eD([ec, e]), ec, eg(')')],
                      Fe = (e) =>
                        'NullLiteral' === e.type ||
                        ('Literal' === e.type && null === e.value) ||
                        ('Identifier' === e.type && 'undefined' === e.name);
                    eS.push(
                      ' ? ',
                      Fe(ex) ? eu(eF) : ue(eu(eF)),
                      ' : ',
                      eb.type === ey.type || Fe(eb) ? eu(eA) : ue(eu(eA))
                    );
                  } else {
                    let e = [
                      ep,
                      '? ',
                      ex.type === ey.type ? eg('', '(') : '',
                      ef(2, eu(eF)),
                      ex.type === ey.type ? eg('', ')') : '',
                      ep,
                      ': ',
                      eb.type === ey.type ? eu(eA) : ef(2, eu(eA))
                    ];
                    eS.push(
                      eB.type !== ey.type || eB[eA] === ey || eN
                        ? e
                        : O.useTabs
                        ? eh(eD(e))
                        : ef(Math.max(0, O.tabWidth - 2), e)
                    );
                  }
                  let eO = [...ev.map((e) => er(ey[e])), er(ex), er(eb)]
                      .flat()
                      .some((e) => el(e) && et(O.originalText, es(e), eo(e))),
                    eL = !eT && (ei(eB) || ('NGPipeExpression' === eB.type && eB.left === ey)) && !eB.computed,
                    e_ = P(e),
                    eM =
                      ((ea = [x(e, O, eu), ew ? eS : eD(eS), eC && eL && !e_ ? ec : '']),
                      eB === eI ? ed(ea, { shouldBreak: eO }) : eO ? [ea, eE] : ea);
                  return eN || e_ ? ed([eD([ec, eM]), ec]) : eM;
                }
                O.exports = { printTernary: $ };
              }
            }),
            nX = te({
              'src/language-js/print/statement.js'(e, O) {
                ey();
                var {
                    builders: { hardline: et }
                  } = eO(),
                  en = nv(),
                  {
                    getLeftSidePathName: er,
                    hasNakedLeftSide: eu,
                    isJsxNode: ei,
                    isTheOnlyJsxElementInMarkdown: ea,
                    hasComment: es,
                    CommentCheckFlags: eo,
                    isNextLineEmpty: el
                  } = ne(),
                  { shouldPrintParamsWithoutParens: ep } = nR();
                function g(e, O, en, er) {
                  let eu = e.getValue(),
                    ei = [],
                    ep = 'ClassBody' === eu.type,
                    ec = c(eu[er]);
                  return (
                    e.each((e, er, eu) => {
                      let ed = e.getValue();
                      if ('EmptyStatement' === ed.type) return;
                      let eD = en();
                      !O.semi && !ep && !ea(O, e) && f(e, O)
                        ? es(ed, eo.Leading)
                          ? ei.push(en([], { needsSemi: !0 }))
                          : ei.push(';', eD)
                        : ei.push(eD),
                        !O.semi && ep && E(ed) && N(ed, eu[er + 1]) && ei.push(';'),
                        ed !== ec && (ei.push(et), el(ed, O) && ei.push(et));
                    }, er),
                    ei
                  );
                }
                function c(e) {
                  for (let O = e.length - 1; O >= 0; O--) {
                    let et = e[O];
                    if ('EmptyStatement' !== et.type) return et;
                  }
                }
                function f(e, O) {
                  return 'ExpressionStatement' === e.getNode().type && e.call((e) => F(e, O), 'expression');
                }
                function F(e, O) {
                  let et = e.getValue();
                  switch (et.type) {
                    case 'ParenthesizedExpression':
                    case 'TypeCastExpression':
                    case 'ArrayExpression':
                    case 'ArrayPattern':
                    case 'TemplateLiteral':
                    case 'TemplateElement':
                    case 'RegExpLiteral':
                      return !0;
                    case 'ArrowFunctionExpression':
                      if (!ep(e, O)) return !0;
                      break;
                    case 'UnaryExpression': {
                      let { prefix: e, operator: O } = et;
                      if (e && ('+' === O || '-' === O)) return !0;
                      break;
                    }
                    case 'BindExpression':
                      if (!et.object) return !0;
                      break;
                    case 'Literal':
                      if (et.regex) return !0;
                      break;
                    default:
                      if (ei(et)) return !0;
                  }
                  return !!en(e, O) || (!!eu(et) && e.call((e) => F(e, O), ...er(e, et)));
                }
                function _(e, O, et) {
                  return g(e, O, et, 'body');
                }
                function w(e, O, et) {
                  return g(e, O, et, 'consequent');
                }
                var E = (e) => {
                  let { type: O } = e;
                  return (
                    'ClassProperty' === O ||
                    'PropertyDefinition' === O ||
                    'ClassPrivateProperty' === O ||
                    'ClassAccessorProperty' === O ||
                    'AccessorProperty' === O ||
                    'TSAbstractPropertyDefinition' === O ||
                    'TSAbstractAccessorProperty' === O
                  );
                };
                function N(e, O) {
                  let { type: et, name: en } = e.key;
                  if (
                    !e.computed &&
                    'Identifier' === et &&
                    ('static' === en || 'get' === en || 'set' === en || 'accessor' === en) &&
                    !e.value &&
                    !e.typeAnnotation
                  )
                    return !0;
                  if (!O || O.static || O.accessibility) return !1;
                  if (!O.computed) {
                    let e = O.key && O.key.name;
                    if ('in' === e || 'instanceof' === e) return !0;
                  }
                  if (E(O) && O.variance && !O.static && !O.declare) return !0;
                  switch (O.type) {
                    case 'ClassProperty':
                    case 'PropertyDefinition':
                    case 'TSAbstractPropertyDefinition':
                      return O.computed;
                    case 'MethodDefinition':
                    case 'TSAbstractMethodDefinition':
                    case 'ClassMethod':
                    case 'ClassPrivateMethod': {
                      if ((O.value ? O.value.async : O.async) || 'get' === O.kind || 'set' === O.kind) return !1;
                      let e = O.value ? O.value.generator : O.generator;
                      return !!(O.computed || e);
                    }
                    case 'TSIndexSignature':
                      return !0;
                  }
                  return !1;
                }
                O.exports = { printBody: _, printSwitchCaseConsequent: w };
              }
            }),
            nK = te({
              'src/language-js/print/block.js'(e, O) {
                ey();
                var { printDanglingComments: et } = tK(),
                  { isNonEmptyArray: en } = e3(),
                  {
                    builders: { hardline: er, indent: eu }
                  } = eO(),
                  { hasComment: ei, CommentCheckFlags: ea, isNextLineEmpty: es } = ne(),
                  { printHardlineAfterHeritage: eo } = nW(),
                  { printBody: el } = nX();
                function h(e, O, et) {
                  let ei = e.getValue(),
                    ea = [];
                  if (('StaticBlock' === ei.type && ea.push('static '), 'ClassBody' === ei.type && en(ei.body))) {
                    let O = e.getParentNode();
                    ea.push(eo(O));
                  }
                  ea.push('{');
                  let es = g(e, O, et);
                  if (es) ea.push(eu([er, es]), er);
                  else {
                    let O = e.getParentNode(),
                      et = e.getParentNode(1);
                    'ArrowFunctionExpression' !== O.type &&
                      'FunctionExpression' !== O.type &&
                      'FunctionDeclaration' !== O.type &&
                      'ObjectMethod' !== O.type &&
                      'ClassMethod' !== O.type &&
                      'ClassPrivateMethod' !== O.type &&
                      'ForStatement' !== O.type &&
                      'WhileStatement' !== O.type &&
                      'DoWhileStatement' !== O.type &&
                      'DoExpression' !== O.type &&
                      ('CatchClause' !== O.type || et.finalizer) &&
                      'TSModuleDeclaration' !== O.type &&
                      'TSDeclareFunction' !== O.type &&
                      'StaticBlock' !== ei.type &&
                      'ClassBody' !== ei.type &&
                      ea.push(er);
                  }
                  return ea.push('}'), ea;
                }
                function g(e, O, eu) {
                  let eo = e.getValue(),
                    ep = en(eo.directives),
                    ec = eo.body.some((e) => 'EmptyStatement' !== e.type),
                    ed = ei(eo, ea.Dangling);
                  if (!ep && !ec && !ed) return '';
                  let eD = [];
                  if (
                    (ep &&
                      e.each((e, et, en) => {
                        eD.push(eu()),
                          (et < en.length - 1 || ec || ed) && (eD.push(er), es(e.getValue(), O) && eD.push(er));
                      }, 'directives'),
                    ec && eD.push(el(e, O, eu)),
                    ed && eD.push(et(e, O, !0)),
                    'Program' === eo.type)
                  ) {
                    let O = e.getParentNode();
                    (O && 'ModuleExpression' === O.type) || eD.push(er);
                  }
                  return eD;
                }
                O.exports = { printBlock: h, printBlockBody: g };
              }
            }),
            nQ = te({
              'src/language-js/print/typescript.js'(e, O) {
                ey();
                var { printDanglingComments: et } = tK(),
                  { hasNewlineInRange: en } = e3(),
                  {
                    builders: {
                      join: er,
                      line: eu,
                      hardline: ei,
                      softline: ea,
                      group: es,
                      indent: eo,
                      conditionalGroup: el,
                      ifBreak: ep
                    }
                  } = eO(),
                  {
                    isStringLiteral: ec,
                    getTypeScriptMappedTypeModifier: ed,
                    shouldPrintComma: eD,
                    isCallExpression: ef,
                    isMemberExpression: eg
                  } = ne(),
                  eh = nG(),
                  { locStart: eE, locEnd: eC } = tW(),
                  { printOptionalToken: eF, printTypeScriptModifiers: eA } = nN(),
                  { printTernary: ev } = nz(),
                  { printFunctionParameters: ex, shouldGroupFunctionParameters: eb } = nL(),
                  { printTemplateLiteral: eS } = nt(),
                  { printArrayItems: eT } = nw(),
                  { printObject: eB } = nU(),
                  { printClassProperty: eN, printClassMethod: ew } = nW(),
                  { printTypeParameter: eP, printTypeParameters: ek } = nM(),
                  { printPropertyKey: ej } = n$(),
                  { printFunction: eI, printMethodInternal: eL } = nR(),
                  { printInterface: e_ } = nq(),
                  { printBlock: eM } = nK(),
                  {
                    printTypeAlias: e$,
                    printIntersectionType: eR,
                    printUnionType: eV,
                    printFunctionType: eW,
                    printTupleType: eq,
                    printIndexedAccessType: eJ,
                    printJSDocType: eU
                  } = n_();
                function ie(e, O, ey) {
                  let eO = e.getValue();
                  if (!eO.type.startsWith('TS')) return;
                  if (eh(eO)) return eO.type.slice(2, -7).toLowerCase();
                  let eH = O.semi ? ';' : '',
                    eG = [];
                  switch (eO.type) {
                    case 'TSThisType':
                      return 'this';
                    case 'TSTypeAssertion': {
                      let e = !('ArrayExpression' === eO.expression.type || 'ObjectExpression' === eO.expression.type),
                        O = es(['<', eo([ea, ey('typeAnnotation')]), ea, '>']),
                        et = [ep('('), eo([ea, ey('expression')]), ea, ep(')')];
                      return e
                        ? el([
                            [O, ey('expression')],
                            [O, es(et, { shouldBreak: !0 })],
                            [O, ey('expression')]
                          ])
                        : es([O, ey('expression')]);
                    }
                    case 'TSDeclareFunction':
                      return eI(e, ey, O);
                    case 'TSExportAssignment':
                      return ['export = ', ey('expression'), eH];
                    case 'TSModuleBlock':
                      return eM(e, O, ey);
                    case 'TSInterfaceBody':
                    case 'TSTypeLiteral':
                      return eB(e, O, ey);
                    case 'TSTypeAliasDeclaration':
                      return e$(e, O, ey);
                    case 'TSQualifiedName':
                      return er('.', [ey('left'), ey('right')]);
                    case 'TSAbstractMethodDefinition':
                    case 'TSDeclareMethod':
                      return ew(e, O, ey);
                    case 'TSAbstractAccessorProperty':
                    case 'TSAbstractPropertyDefinition':
                      return eN(e, O, ey);
                    case 'TSInterfaceHeritage':
                    case 'TSExpressionWithTypeArguments':
                      return eG.push(ey('expression')), eO.typeParameters && eG.push(ey('typeParameters')), eG;
                    case 'TSTemplateLiteralType':
                      return eS(e, ey, O);
                    case 'TSNamedTupleMember':
                      return [ey('label'), eO.optional ? '?' : '', ': ', ey('elementType')];
                    case 'TSRestType':
                      return ['...', ey('typeAnnotation')];
                    case 'TSOptionalType':
                      return [ey('typeAnnotation'), '?'];
                    case 'TSInterfaceDeclaration':
                      return e_(e, O, ey);
                    case 'TSClassImplements':
                    case 'TSInstantiationExpression':
                      return [ey('expression'), ey('typeParameters')];
                    case 'TSTypeParameterDeclaration':
                    case 'TSTypeParameterInstantiation':
                      return ek(e, O, ey, 'params');
                    case 'TSTypeParameter':
                      return eP(e, O, ey);
                    case 'TSSatisfiesExpression':
                    case 'TSAsExpression': {
                      let O = 'TSAsExpression' === eO.type ? 'as' : 'satisfies';
                      eG.push(ey('expression'), ` ${O} `, ey('typeAnnotation'));
                      let et = e.getParentNode();
                      return (ef(et) && et.callee === eO) || (eg(et) && et.object === eO)
                        ? es([eo([ea, ...eG]), ea])
                        : eG;
                    }
                    case 'TSArrayType':
                      return [ey('elementType'), '[]'];
                    case 'TSPropertySignature':
                      return (
                        eO.readonly && eG.push('readonly '),
                        eG.push(ej(e, O, ey), eF(e)),
                        eO.typeAnnotation && eG.push(': ', ey('typeAnnotation')),
                        eO.initializer && eG.push(' = ', ey('initializer')),
                        eG
                      );
                    case 'TSParameterProperty':
                      return (
                        eO.accessibility && eG.push(eO.accessibility + ' '),
                        eO.export && eG.push('export '),
                        eO.static && eG.push('static '),
                        eO.override && eG.push('override '),
                        eO.readonly && eG.push('readonly '),
                        eG.push(ey('parameter')),
                        eG
                      );
                    case 'TSTypeQuery':
                      return ['typeof ', ey('exprName'), ey('typeParameters')];
                    case 'TSIndexSignature': {
                      let et = e.getParentNode(),
                        en = eO.parameters.length > 1 ? ep(eD(O) ? ',' : '') : '',
                        eu = es([eo([ea, er([', ', ea], e.map(ey, 'parameters'))]), en, ea]);
                      return [
                        eO.export ? 'export ' : '',
                        eO.accessibility ? [eO.accessibility, ' '] : '',
                        eO.static ? 'static ' : '',
                        eO.readonly ? 'readonly ' : '',
                        eO.declare ? 'declare ' : '',
                        '[',
                        eO.parameters ? eu : '',
                        eO.typeAnnotation ? ']: ' : ']',
                        eO.typeAnnotation ? ey('typeAnnotation') : '',
                        'ClassBody' === et.type ? eH : ''
                      ];
                    }
                    case 'TSTypePredicate':
                      return [
                        eO.asserts ? 'asserts ' : '',
                        ey('parameterName'),
                        eO.typeAnnotation ? [' is ', ey('typeAnnotation')] : ''
                      ];
                    case 'TSNonNullExpression':
                      return [ey('expression'), '!'];
                    case 'TSImportType':
                      return [
                        eO.isTypeOf ? 'typeof ' : '',
                        'import(',
                        ey(eO.parameter ? 'parameter' : 'argument'),
                        ')',
                        eO.qualifier ? ['.', ey('qualifier')] : '',
                        ek(e, O, ey, 'typeParameters')
                      ];
                    case 'TSLiteralType':
                      return ey('literal');
                    case 'TSIndexedAccessType':
                      return eJ(e, O, ey);
                    case 'TSConstructSignatureDeclaration':
                    case 'TSCallSignatureDeclaration':
                    case 'TSConstructorType':
                      if (
                        ('TSConstructorType' === eO.type && eO.abstract && eG.push('abstract '),
                        'TSCallSignatureDeclaration' !== eO.type && eG.push('new '),
                        eG.push(es(ex(e, ey, O, !1, !0))),
                        eO.returnType || eO.typeAnnotation)
                      ) {
                        let e = 'TSConstructorType' === eO.type;
                        eG.push(e ? ' => ' : ': ', ey('returnType'), ey('typeAnnotation'));
                      }
                      return eG;
                    case 'TSTypeOperator':
                      return [eO.operator, ' ', ey('typeAnnotation')];
                    case 'TSMappedType': {
                      let er = en(O.originalText, eE(eO), eC(eO));
                      return es(
                        [
                          '{',
                          eo([
                            O.bracketSpacing ? eu : ea,
                            ey('typeParameter'),
                            eO.optional ? ed(eO.optional, '?') : '',
                            eO.typeAnnotation ? ': ' : '',
                            ey('typeAnnotation'),
                            ep(eH)
                          ]),
                          et(e, O, !0),
                          O.bracketSpacing ? eu : ea,
                          '}'
                        ],
                        { shouldBreak: er }
                      );
                    }
                    case 'TSMethodSignature': {
                      let et = eO.kind && 'method' !== eO.kind ? `${eO.kind} ` : '';
                      eG.push(
                        eO.accessibility ? [eO.accessibility, ' '] : '',
                        et,
                        eO.export ? 'export ' : '',
                        eO.static ? 'static ' : '',
                        eO.readonly ? 'readonly ' : '',
                        eO.abstract ? 'abstract ' : '',
                        eO.declare ? 'declare ' : '',
                        eO.computed ? '[' : '',
                        ey('key'),
                        eO.computed ? ']' : '',
                        eF(e)
                      );
                      let en = ex(e, ey, O, !1, !0),
                        er = eO.returnType ? 'returnType' : 'typeAnnotation',
                        eu = eO[er],
                        ei = eu ? ey(er) : '',
                        ea = eb(eO, ei);
                      return eG.push(ea ? es(en) : en), eu && eG.push(': ', es(ei)), es(eG);
                    }
                    case 'TSNamespaceExportDeclaration':
                      return eG.push('export as namespace ', ey('id')), O.semi && eG.push(';'), es(eG);
                    case 'TSEnumDeclaration':
                      return (
                        eO.declare && eG.push('declare '),
                        eO.modifiers && eG.push(eA(e, O, ey)),
                        eO.const && eG.push('const '),
                        eG.push('enum ', ey('id'), ' '),
                        0 === eO.members.length
                          ? eG.push(es(['{', et(e, O), ea, '}']))
                          : eG.push(
                              es([
                                '{',
                                eo([ei, eT(e, O, 'members', ey), eD(O, 'es5') ? ',' : '']),
                                et(e, O, !0),
                                ei,
                                '}'
                              ])
                            ),
                        eG
                      );
                    case 'TSEnumMember':
                      return (
                        eO.computed ? eG.push('[', ey('id'), ']') : eG.push(ey('id')),
                        eO.initializer && eG.push(' = ', ey('initializer')),
                        eG
                      );
                    case 'TSImportEqualsDeclaration':
                      return (
                        eO.isExport && eG.push('export '),
                        eG.push('import '),
                        eO.importKind && 'value' !== eO.importKind && eG.push(eO.importKind, ' '),
                        eG.push(ey('id'), ' = ', ey('moduleReference')),
                        O.semi && eG.push(';'),
                        es(eG)
                      );
                    case 'TSExternalModuleReference':
                      return ['require(', ey('expression'), ')'];
                    case 'TSModuleDeclaration': {
                      let et = e.getParentNode(),
                        en = ec(eO.id),
                        er = 'TSModuleDeclaration' === et.type,
                        eu = eO.body && 'TSModuleDeclaration' === eO.body.type;
                      if (er) eG.push('.');
                      else {
                        eO.declare && eG.push('declare '), eG.push(eA(e, O, ey));
                        let et = O.originalText.slice(eE(eO), eE(eO.id));
                        ('Identifier' !== eO.id.type || 'global' !== eO.id.name || /namespace|module/.test(et)) &&
                          eG.push(en || /(?:^|\s)module(?:\s|$)/.test(et) ? 'module ' : 'namespace ');
                      }
                      return (
                        eG.push(ey('id')),
                        eu ? eG.push(ey('body')) : eO.body ? eG.push(' ', es(ey('body'))) : eG.push(eH),
                        eG
                      );
                    }
                    case 'TSConditionalType':
                      return ev(e, O, ey);
                    case 'TSInferType':
                      return ['infer', ' ', ey('typeParameter')];
                    case 'TSIntersectionType':
                      return eR(e, O, ey);
                    case 'TSUnionType':
                      return eV(e, O, ey);
                    case 'TSFunctionType':
                      return eW(e, O, ey);
                    case 'TSTupleType':
                      return eq(e, O, ey);
                    case 'TSTypeReference':
                      return [ey('typeName'), ek(e, O, ey, 'typeParameters')];
                    case 'TSTypeAnnotation':
                      return ey('typeAnnotation');
                    case 'TSEmptyBodyFunctionExpression':
                      return eL(e, O, ey);
                    case 'TSJSDocAllType':
                      return '*';
                    case 'TSJSDocUnknownType':
                      return '?';
                    case 'TSJSDocNullableType':
                      return eU(e, ey, '?');
                    case 'TSJSDocNonNullableType':
                      return eU(e, ey, '!');
                    default:
                      throw Error(`Unknown TypeScript node type: ${JSON.stringify(eO.type)}.`);
                  }
                }
                O.exports = { printTypescript: ie };
              }
            }),
            nY = te({
              'src/language-js/print/comment.js'(e, O) {
                ey();
                var { hasNewline: et } = e3(),
                  {
                    builders: { join: en, hardline: er },
                    utils: { replaceTextEndOfLine: eu }
                  } = eO(),
                  { isLineComment: ei } = ne(),
                  { locStart: ea, locEnd: es } = tW(),
                  eo = t5();
                function y(e, O) {
                  let en = e.getValue();
                  if (ei(en)) return O.originalText.slice(ea(en), es(en)).trimEnd();
                  if (eo(en)) {
                    if (h(en)) {
                      let e = g(en);
                      return en.trailing && !et(O.originalText, ea(en), { backwards: !0 }) ? [er, e] : e;
                    }
                    let e = es(en),
                      ei = '*-/' === O.originalText.slice(e - 3, e);
                    return ['/*', eu(en.value), ei ? '*-/' : '*/'];
                  }
                  throw Error('Not a comment: ' + JSON.stringify(en));
                }
                function h(e) {
                  let O = `*${e.value}*`.split(`
`);
                  return O.length > 1 && O.every((e) => '*' === e.trim()[0]);
                }
                function g(e) {
                  let O = e.value.split(`
`);
                  return [
                    '/*',
                    en(
                      er,
                      O.map((e, et) => (0 === et ? e.trimEnd() : ' ' + (et < O.length - 1 ? e.trim() : e.trimStart())))
                    ),
                    '*/'
                  ];
                }
                O.exports = { printComment: y };
              }
            }),
            nZ = te({
              'src/language-js/print/literal.js'(e, O) {
                ey();
                var { printString: et, printNumber: en } = e3(),
                  { replaceTextEndOfLine: er } = ek(),
                  { printDirective: eu } = nN();
                function u(e, O) {
                  let ei = e.getNode();
                  switch (ei.type) {
                    case 'RegExpLiteral':
                      return p(ei);
                    case 'BigIntLiteral':
                      return l(ei.bigint || ei.extra.raw);
                    case 'NumericLiteral':
                      return en(ei.extra.raw);
                    case 'StringLiteral':
                      return er(et(ei.extra.raw, O));
                    case 'NullLiteral':
                      return 'null';
                    case 'BooleanLiteral':
                      return String(ei.value);
                    case 'DecimalLiteral':
                      return en(ei.value) + 'm';
                    case 'Literal': {
                      if (ei.regex) return p(ei.regex);
                      if (ei.bigint) return l(ei.raw);
                      if (ei.decimal) return en(ei.decimal) + 'm';
                      let { value: ea } = ei;
                      return 'number' == typeof ea
                        ? en(ei.raw)
                        : 'string' == typeof ea
                        ? i(e)
                          ? eu(ei.raw, O)
                          : er(et(ei.raw, O))
                        : String(ea);
                    }
                  }
                }
                function i(e) {
                  if ('expression' !== e.getName()) return;
                  let O = e.getParentNode();
                  return 'ExpressionStatement' === O.type && O.directive;
                }
                function l(e) {
                  return e.toLowerCase();
                }
                function p(e) {
                  let { pattern: O, flags: et } = e;
                  return (et = [...et].sort().join('')), `/${O}/${et}`;
                }
                O.exports = { printLiteral: u };
              }
            }),
            n0 = te({
              'src/language-js/printer-estree.js'(e, O) {
                ey();
                var { printDanglingComments: et } = tK(),
                  { hasNewline: en } = e3(),
                  {
                    builders: { join: er, line: eu, hardline: ei, softline: ea, group: es, indent: eo },
                    utils: { replaceTextEndOfLine: el }
                  } = eO(),
                  ep = na(),
                  ec = ns(),
                  { insertPragma: ed } = nC(),
                  eD = nA(),
                  ef = nv(),
                  eg = nx(),
                  {
                    hasFlowShorthandAnnotationComment: eh,
                    hasComment: eE,
                    CommentCheckFlags: eC,
                    isTheOnlyJsxElementInMarkdown: eF,
                    isLineComment: eA,
                    isNextLineEmpty: ev,
                    needsHardlineAfterDanglingComment: ex,
                    hasIgnoreComment: eb,
                    isCallExpression: eS,
                    isMemberExpression: eT,
                    markerForIfWithoutBlockAndSameLineComment: eB
                  } = ne(),
                  { locStart: eN, locEnd: ew } = tW(),
                  eP = t5(),
                  { printHtmlBinding: ek, isVueEventBindingExpression: ej } = nb(),
                  { printAngular: eI } = nT(),
                  { printJsx: eL, hasJsxIgnoreComment: e_ } = nB(),
                  { printFlow: eM } = nH(),
                  { printTypescript: e$ } = nQ(),
                  {
                    printOptionalToken: eR,
                    printBindExpressionCallee: eV,
                    printTypeAnnotation: eW,
                    adjustClause: eq,
                    printRestSpread: eJ,
                    printDefiniteToken: eU,
                    printDirective: eH
                  } = nN(),
                  {
                    printImportDeclaration: eG,
                    printExportDeclaration: ez,
                    printExportAllDeclaration: eX,
                    printModuleSpecifier: eK
                  } = nJ(),
                  { printTernary: eQ } = nz(),
                  { printTemplateLiteral: eY } = nt(),
                  { printArray: eZ } = nw(),
                  { printObject: e0 } = nU(),
                  { printClass: e1, printClassMethod: e2, printClassProperty: e8 } = nW(),
                  { printProperty: e6 } = n$(),
                  {
                    printFunction: e7,
                    printArrowFunction: e9,
                    printMethod: e5,
                    printReturnStatement: e4,
                    printThrowStatement: tn
                  } = nR(),
                  { printCallExpression: tr } = nI(),
                  { printVariableDeclarator: tu, printAssignmentExpression: ti } = nO(),
                  { printBinaryishExpression: ta } = nS(),
                  { printSwitchCaseConsequent: ts } = nX(),
                  { printMemberExpression: to } = nk(),
                  { printBlock: tl, printBlockBody: tp } = nK(),
                  { printComment: tc } = nY(),
                  { printLiteral: td } = nZ(),
                  { printDecorators: tD } = nV();
                function G(e, O, et, en) {
                  let er = re(e, O, et, en);
                  if (!er) return '';
                  let ei = e.getValue(),
                    { type: ea } = ei;
                  if (
                    'ClassMethod' === ea ||
                    'ClassPrivateMethod' === ea ||
                    'ClassProperty' === ea ||
                    'ClassAccessorProperty' === ea ||
                    'AccessorProperty' === ea ||
                    'TSAbstractAccessorProperty' === ea ||
                    'PropertyDefinition' === ea ||
                    'TSAbstractPropertyDefinition' === ea ||
                    'ClassPrivateProperty' === ea ||
                    'MethodDefinition' === ea ||
                    'TSAbstractMethodDefinition' === ea ||
                    'TSDeclareMethod' === ea
                  )
                    return er;
                  let el = [er],
                    ep = tD(e, O, et),
                    ec = 'ClassExpression' === ei.type && ep;
                  if (ep && ((el = [...ep, er]), !ec)) return es(el);
                  if (!ef(e, O))
                    return en && en.needsSemi && el.unshift(';'), 1 === el.length && el[0] === er ? er : el;
                  if (
                    (ec && (el = [eo([eu, ...el])]), el.unshift('('), en && en.needsSemi && el.unshift(';'), eh(ei))
                  ) {
                    let [e] = ei.trailingComments;
                    el.push(' /*', e.value.trimStart(), '*/'), (e.printed = !0);
                  }
                  return ec && el.push(eu), el.push(')'), el;
                }
                function re(e, O, ep, ec) {
                  let ed = e.getValue(),
                    eD = O.semi ? ';' : '';
                  if (!ed) return '';
                  if ('string' == typeof ed) return ed;
                  for (let et of [td, ek, eI, eL, eM, e$]) {
                    let en = et(e, O, ep);
                    if ('u' > typeof en) return en;
                  }
                  let ef = [];
                  switch (ed.type) {
                    case 'JsExpressionRoot':
                      return ep('node');
                    case 'JsonRoot':
                      return [ep('node'), ei];
                    case 'File':
                      return (
                        ed.program && ed.program.interpreter && ef.push(ep(['program', 'interpreter'])),
                        ef.push(ep('program')),
                        ef
                      );
                    case 'Program':
                      return tp(e, O, ep);
                    case 'EmptyStatement':
                      return '';
                    case 'ExpressionStatement': {
                      if ('__vue_event_binding' === O.parser || '__vue_ts_event_binding' === O.parser) {
                        let O = e.getParentNode();
                        if ('Program' === O.type && 1 === O.body.length && O.body[0] === ed)
                          return [ep('expression'), ej(ed.expression) ? ';' : ''];
                      }
                      let en = et(e, O, !0, (e) => {
                        let { marker: O } = e;
                        return O === eB;
                      });
                      return [ep('expression'), eF(O, e) ? '' : eD, en ? [' ', en] : ''];
                    }
                    case 'ParenthesizedExpression':
                      return eE(ed.expression) ||
                        ('ObjectExpression' !== ed.expression.type && 'ArrayExpression' !== ed.expression.type)
                        ? es(['(', eo([ea, ep('expression')]), ea, ')'])
                        : ['(', ep('expression'), ')'];
                    case 'AssignmentExpression':
                      return ti(e, O, ep);
                    case 'VariableDeclarator':
                      return tu(e, O, ep);
                    case 'BinaryExpression':
                    case 'LogicalExpression':
                      return ta(e, O, ep);
                    case 'AssignmentPattern':
                      return [ep('left'), ' = ', ep('right')];
                    case 'OptionalMemberExpression':
                    case 'MemberExpression':
                      return to(e, O, ep);
                    case 'MetaProperty':
                      return [ep('meta'), '.', ep('property')];
                    case 'BindExpression':
                      return ed.object && ef.push(ep('object')), ef.push(es(eo([ea, eV(e, O, ep)]))), ef;
                    case 'Identifier':
                      return [ed.name, eR(e), eU(e), eW(e, O, ep)];
                    case 'V8IntrinsicIdentifier':
                      return ['%', ed.name];
                    case 'SpreadElement':
                    case 'SpreadElementPattern':
                    case 'SpreadProperty':
                    case 'SpreadPropertyPattern':
                    case 'RestElement':
                      return eJ(e, O, ep);
                    case 'FunctionDeclaration':
                    case 'FunctionExpression':
                      return e7(e, ep, O, ec);
                    case 'ArrowFunctionExpression':
                      return e9(e, O, ep, ec);
                    case 'YieldExpression':
                      return (
                        ef.push('yield'), ed.delegate && ef.push('*'), ed.argument && ef.push(' ', ep('argument')), ef
                      );
                    case 'AwaitExpression':
                      if ((ef.push('await'), ed.argument)) {
                        ef.push(' ', ep('argument'));
                        let O = e.getParentNode();
                        if ((eS(O) && O.callee === ed) || (eT(O) && O.object === ed)) {
                          ef = [eo([ea, ...ef]), ea];
                          let O = e.findAncestor((e) => 'AwaitExpression' === e.type || 'BlockStatement' === e.type);
                          if (!O || 'AwaitExpression' !== O.type) return es(ef);
                        }
                      }
                      return ef;
                    case 'ExportDefaultDeclaration':
                    case 'ExportNamedDeclaration':
                      return ez(e, O, ep);
                    case 'ExportAllDeclaration':
                      return eX(e, O, ep);
                    case 'ImportDeclaration':
                      return eG(e, O, ep);
                    case 'ImportSpecifier':
                    case 'ExportSpecifier':
                    case 'ImportNamespaceSpecifier':
                    case 'ExportNamespaceSpecifier':
                    case 'ImportDefaultSpecifier':
                    case 'ExportDefaultSpecifier':
                      return eK(e, O, ep);
                    case 'ImportAttribute':
                      return [ep('key'), ': ', ep('value')];
                    case 'Import':
                      return 'import';
                    case 'BlockStatement':
                    case 'StaticBlock':
                    case 'ClassBody':
                      return tl(e, O, ep);
                    case 'ThrowStatement':
                      return tn(e, O, ep);
                    case 'ReturnStatement':
                      return e4(e, O, ep);
                    case 'NewExpression':
                    case 'ImportExpression':
                    case 'OptionalCallExpression':
                    case 'CallExpression':
                      return tr(e, O, ep);
                    case 'ObjectExpression':
                    case 'ObjectPattern':
                    case 'RecordExpression':
                      return e0(e, O, ep);
                    case 'ObjectProperty':
                    case 'Property':
                      return ed.method || 'get' === ed.kind || 'set' === ed.kind ? e5(e, O, ep) : e6(e, O, ep);
                    case 'ObjectMethod':
                      return e5(e, O, ep);
                    case 'Decorator':
                      return ['@', ep('expression')];
                    case 'ArrayExpression':
                    case 'ArrayPattern':
                    case 'TupleExpression':
                      return eZ(e, O, ep);
                    case 'SequenceExpression': {
                      let O = e.getParentNode(0);
                      if ('ExpressionStatement' === O.type || 'ForStatement' === O.type) {
                        let O = [];
                        return (
                          e.each((e, et) => {
                            0 === et ? O.push(ep()) : O.push(',', eo([eu, ep()]));
                          }, 'expressions'),
                          es(O)
                        );
                      }
                      return es(er([',', eu], e.map(ep, 'expressions')));
                    }
                    case 'ThisExpression':
                      return 'this';
                    case 'Super':
                      return 'super';
                    case 'Directive':
                      return [ep('value'), eD];
                    case 'DirectiveLiteral':
                      return eH(ed.extra.raw, O);
                    case 'UnaryExpression':
                      return (
                        ef.push(ed.operator),
                        /[a-z]$/.test(ed.operator) && ef.push(' '),
                        eE(ed.argument)
                          ? ef.push(es(['(', eo([ea, ep('argument')]), ea, ')']))
                          : ef.push(ep('argument')),
                        ef
                      );
                    case 'UpdateExpression':
                      return ef.push(ep('argument'), ed.operator), ed.prefix && ef.reverse(), ef;
                    case 'ConditionalExpression':
                      return eQ(e, O, ep);
                    case 'VariableDeclaration': {
                      let O = e.map(ep, 'declarations'),
                        et = e.getParentNode(),
                        en = 'ForStatement' === et.type || 'ForInStatement' === et.type || 'ForOfStatement' === et.type,
                        er = ed.declarations.some((e) => e.init),
                        ea;
                      return (
                        1 !== O.length || eE(ed.declarations[0]) ? O.length > 0 && (ea = eo(O[0])) : (ea = O[0]),
                        (ef = [
                          ed.declare ? 'declare ' : '',
                          ed.kind,
                          ea ? [' ', ea] : '',
                          eo(O.slice(1).map((e) => [',', er && !en ? ei : eu, e]))
                        ]),
                        (en && et.body !== ed) || ef.push(eD),
                        es(ef)
                      );
                    }
                    case 'WithStatement':
                      return es(['with (', ep('object'), ')', eq(ed.body, ep('body'))]);
                    case 'IfStatement': {
                      let en = eq(ed.consequent, ep('consequent')),
                        er = es(['if (', es([eo([ea, ep('test')]), ea]), ')', en]);
                      if ((ef.push(er), ed.alternate)) {
                        let en = eE(ed.consequent, eC.Trailing | eC.Line) || ex(ed),
                          er = 'BlockStatement' === ed.consequent.type && !en;
                        ef.push(er ? ' ' : ei),
                          eE(ed, eC.Dangling) && ef.push(et(e, O, !0), en ? ei : ' '),
                          ef.push('else', es(eq(ed.alternate, ep('alternate'), 'IfStatement' === ed.alternate.type)));
                      }
                      return ef;
                    }
                    case 'ForStatement': {
                      let en = eq(ed.body, ep('body')),
                        er = et(e, O, !0),
                        ei = er ? [er, ea] : '';
                      return ed.init || ed.test || ed.update
                        ? [
                            ei,
                            es([
                              'for (',
                              es([eo([ea, ep('init'), ';', eu, ep('test'), ';', eu, ep('update')]), ea]),
                              ')',
                              en
                            ])
                          ]
                        : [ei, es(['for (;;)', en])];
                    }
                    case 'WhileStatement':
                      return es(['while (', es([eo([ea, ep('test')]), ea]), ')', eq(ed.body, ep('body'))]);
                    case 'ForInStatement':
                      return es(['for (', ep('left'), ' in ', ep('right'), ')', eq(ed.body, ep('body'))]);
                    case 'ForOfStatement':
                      return es([
                        'for',
                        ed.await ? ' await' : '',
                        ' (',
                        ep('left'),
                        ' of ',
                        ep('right'),
                        ')',
                        eq(ed.body, ep('body'))
                      ]);
                    case 'DoWhileStatement':
                      return (
                        (ef = [es(['do', eq(ed.body, ep('body'))])]),
                        'BlockStatement' === ed.body.type ? ef.push(' ') : ef.push(ei),
                        ef.push('while (', es([eo([ea, ep('test')]), ea]), ')', eD),
                        ef
                      );
                    case 'DoExpression':
                      return [ed.async ? 'async ' : '', 'do ', ep('body')];
                    case 'BreakStatement':
                      return ef.push('break'), ed.label && ef.push(' ', ep('label')), ef.push(eD), ef;
                    case 'ContinueStatement':
                      return ef.push('continue'), ed.label && ef.push(' ', ep('label')), ef.push(eD), ef;
                    case 'LabeledStatement':
                      return 'EmptyStatement' === ed.body.type ? [ep('label'), ':;'] : [ep('label'), ': ', ep('body')];
                    case 'TryStatement':
                      return [
                        'try ',
                        ep('block'),
                        ed.handler ? [' ', ep('handler')] : '',
                        ed.finalizer ? [' finally ', ep('finalizer')] : ''
                      ];
                    case 'CatchClause':
                      if (ed.param) {
                        let e = eE(
                            ed.param,
                            (e) =>
                              !eP(e) ||
                              (e.leading && en(O.originalText, ew(e))) ||
                              (e.trailing && en(O.originalText, eN(e), { backwards: !0 }))
                          ),
                          et = ep('param');
                        return ['catch ', e ? ['(', eo([ea, et]), ea, ') '] : ['(', et, ') '], ep('body')];
                      }
                      return ['catch ', ep('body')];
                    case 'SwitchStatement':
                      return [
                        es(['switch (', eo([ea, ep('discriminant')]), ea, ')']),
                        ' {',
                        ed.cases.length > 0
                          ? eo([
                              ei,
                              er(
                                ei,
                                e.map((e, et, en) => {
                                  let er = e.getValue();
                                  return [ep(), et !== en.length - 1 && ev(er, O) ? ei : ''];
                                }, 'cases')
                              )
                            ])
                          : '',
                        ei,
                        '}'
                      ];
                    case 'SwitchCase': {
                      ed.test ? ef.push('case ', ep('test'), ':') : ef.push('default:'),
                        eE(ed, eC.Dangling) && ef.push(' ', et(e, O, !0));
                      let en = ed.consequent.filter((e) => 'EmptyStatement' !== e.type);
                      if (en.length > 0) {
                        let et = ts(e, O, ep);
                        ef.push(1 === en.length && 'BlockStatement' === en[0].type ? [' ', et] : eo([ei, et]));
                      }
                      return ef;
                    }
                    case 'DebuggerStatement':
                      return ['debugger', eD];
                    case 'ClassDeclaration':
                    case 'ClassExpression':
                      return e1(e, O, ep);
                    case 'ClassMethod':
                    case 'ClassPrivateMethod':
                    case 'MethodDefinition':
                      return e2(e, O, ep);
                    case 'ClassProperty':
                    case 'PropertyDefinition':
                    case 'ClassPrivateProperty':
                    case 'ClassAccessorProperty':
                    case 'AccessorProperty':
                      return e8(e, O, ep);
                    case 'TemplateElement':
                      return el(ed.value.raw);
                    case 'TemplateLiteral':
                      return eY(e, ep, O);
                    case 'TaggedTemplateExpression':
                      return [ep('tag'), ep('typeParameters'), ep('quasi')];
                    case 'PrivateIdentifier':
                      return ['#', ep('name')];
                    case 'PrivateName':
                      return ['#', ep('id')];
                    case 'InterpreterDirective':
                      return ef.push('#!', ed.value, ei), ev(ed, O) && ef.push(ei), ef;
                    case 'TopicReference':
                      return '%';
                    case 'ArgumentPlaceholder':
                      return '?';
                    case 'ModuleExpression': {
                      ef.push('module {');
                      let e = ep('body');
                      return e && ef.push(eo([ei, e]), ei), ef.push('}'), ef;
                    }
                    default:
                      throw Error('unknown type: ' + JSON.stringify(ed.type));
                  }
                }
                function ye(e) {
                  return (
                    e.type &&
                    !eP(e) &&
                    !eA(e) &&
                    'EmptyStatement' !== e.type &&
                    'TemplateElement' !== e.type &&
                    'Import' !== e.type &&
                    'TSEmptyBodyFunctionExpression' !== e.type
                  );
                }
                O.exports = {
                  preprocess: eg,
                  print: G,
                  embed: ep,
                  insertPragma: ed,
                  massageAstNode: ec,
                  hasPrettierIgnore: (e) => eb(e) || e_(e),
                  willPrintOwnComments: eD.willPrintOwnComments,
                  canAttachComment: ye,
                  printComment: tc,
                  isBlockComment: eP,
                  handleComments: {
                    avoidAstMutation: !0,
                    ownLine: eD.handleOwnLineComment,
                    endOfLine: eD.handleEndOfLineComment,
                    remaining: eD.handleRemainingComment
                  },
                  getCommentChildNodes: eD.getCommentChildNodes
                };
              }
            }),
            n1 = te({
              'src/language-js/printer-estree-json.js'(e, O) {
                ey();
                var {
                    builders: { hardline: et, indent: en, join: er }
                  } = eO(),
                  eu = nx();
                function u(e, O, eu) {
                  let ei = e.getValue();
                  switch (ei.type) {
                    case 'JsonRoot':
                      return [eu('node'), et];
                    case 'ArrayExpression':
                      if (0 === ei.elements.length) return '[]';
                      return [
                        '[',
                        en([
                          et,
                          er(
                            [',', et],
                            e.map(() => (null === e.getValue() ? 'null' : eu()), 'elements')
                          )
                        ]),
                        et,
                        ']'
                      ];
                    case 'ObjectExpression':
                      return 0 === ei.properties.length
                        ? '{}'
                        : ['{', en([et, er([',', et], e.map(eu, 'properties'))]), et, '}'];
                    case 'ObjectProperty':
                      return [eu('key'), ': ', eu('value')];
                    case 'UnaryExpression':
                      return ['+' === ei.operator ? '' : ei.operator, eu('argument')];
                    case 'NullLiteral':
                      return 'null';
                    case 'BooleanLiteral':
                      return ei.value ? 'true' : 'false';
                    case 'StringLiteral':
                      return JSON.stringify(ei.value);
                    case 'NumericLiteral':
                      return i(e) ? JSON.stringify(String(ei.value)) : JSON.stringify(ei.value);
                    case 'Identifier':
                      return i(e) ? JSON.stringify(ei.name) : ei.name;
                    case 'TemplateLiteral':
                      return eu(['quasis', 0]);
                    case 'TemplateElement':
                      return JSON.stringify(ei.value.cooked);
                    default:
                      throw Error('unknown type: ' + JSON.stringify(ei.type));
                  }
                }
                function i(e) {
                  return 'key' === e.getName() && 'ObjectProperty' === e.getParentNode().type;
                }
                var ei = new Set([
                  'start',
                  'end',
                  'extra',
                  'loc',
                  'comments',
                  'leadingComments',
                  'trailingComments',
                  'innerComments',
                  'errors',
                  'range',
                  'tokens'
                ]);
                function p(e, O) {
                  let { type: et } = e;
                  if ('ObjectProperty' === et) {
                    let { key: et } = e;
                    'Identifier' === et.type
                      ? (O.key = { type: 'StringLiteral', value: et.name })
                      : 'NumericLiteral' === et.type && (O.key = { type: 'StringLiteral', value: String(et.value) });
                    return;
                  }
                  if ('UnaryExpression' === et && '+' === e.operator) return O.argument;
                  if ('ArrayExpression' === et) {
                    for (let [et, en] of e.elements.entries())
                      null === en && O.elements.splice(et, 0, { type: 'NullLiteral' });
                    return;
                  }
                  if ('TemplateLiteral' === et) return { type: 'StringLiteral', value: e.quasis[0].value.cooked };
                }
                (p.ignoredProperties = ei), (O.exports = { preprocess: eu, print: u, massageAstNode: p });
              }
            }),
            n2 = te({
              'src/common/common-options.js'(e, O) {
                ey();
                var et = 'Common';
                O.exports = {
                  bracketSpacing: {
                    since: '0.0.0',
                    category: et,
                    type: 'boolean',
                    default: !0,
                    description: 'Print spaces between brackets.',
                    oppositeDescription: 'Do not print spaces between brackets.'
                  },
                  singleQuote: {
                    since: '0.0.0',
                    category: et,
                    type: 'boolean',
                    default: !1,
                    description: 'Use single quotes instead of double quotes.'
                  },
                  proseWrap: {
                    since: '1.8.2',
                    category: et,
                    type: 'choice',
                    default: [
                      { since: '1.8.2', value: !0 },
                      { since: '1.9.0', value: 'preserve' }
                    ],
                    description: 'How to wrap prose.',
                    choices: [
                      { since: '1.9.0', value: 'always', description: 'Wrap prose if it exceeds the print width.' },
                      { since: '1.9.0', value: 'never', description: 'Do not wrap prose.' },
                      { since: '1.9.0', value: 'preserve', description: 'Wrap prose as-is.' }
                    ]
                  },
                  bracketSameLine: {
                    since: '2.4.0',
                    category: et,
                    type: 'boolean',
                    default: !1,
                    description: 'Put > of opening tags on the last line instead of on a new line.'
                  },
                  singleAttributePerLine: {
                    since: '2.6.0',
                    category: et,
                    type: 'boolean',
                    default: !1,
                    description: 'Enforce single attribute per line in HTML, Vue and JSX.'
                  }
                };
              }
            }),
            n3 = te({
              'src/language-js/options.js'(e, O) {
                ey();
                var et = n2(),
                  en = 'JavaScript';
                O.exports = {
                  arrowParens: {
                    since: '1.9.0',
                    category: en,
                    type: 'choice',
                    default: [
                      { since: '1.9.0', value: 'avoid' },
                      { since: '2.0.0', value: 'always' }
                    ],
                    description: 'Include parentheses around a sole arrow function parameter.',
                    choices: [
                      { value: 'always', description: 'Always include parens. Example: `(x) => x`' },
                      { value: 'avoid', description: 'Omit parens when possible. Example: `x => x`' }
                    ]
                  },
                  bracketSameLine: et.bracketSameLine,
                  bracketSpacing: et.bracketSpacing,
                  jsxBracketSameLine: {
                    since: '0.17.0',
                    category: en,
                    type: 'boolean',
                    description: 'Put > on the last line instead of at a new line.',
                    deprecated: '2.4.0'
                  },
                  semi: {
                    since: '1.0.0',
                    category: en,
                    type: 'boolean',
                    default: !0,
                    description: 'Print semicolons.',
                    oppositeDescription:
                      'Do not print semicolons, except at the beginning of lines which may need them.'
                  },
                  singleQuote: et.singleQuote,
                  jsxSingleQuote: {
                    since: '1.15.0',
                    category: en,
                    type: 'boolean',
                    default: !1,
                    description: 'Use single quotes in JSX.'
                  },
                  quoteProps: {
                    since: '1.17.0',
                    category: en,
                    type: 'choice',
                    default: 'as-needed',
                    description: 'Change when properties in objects are quoted.',
                    choices: [
                      { value: 'as-needed', description: 'Only add quotes around object properties where required.' },
                      {
                        value: 'consistent',
                        description: 'If at least one property in an object requires quotes, quote all properties.'
                      },
                      { value: 'preserve', description: 'Respect the input use of quotes in object properties.' }
                    ]
                  },
                  trailingComma: {
                    since: '0.0.0',
                    category: en,
                    type: 'choice',
                    default: [
                      { since: '0.0.0', value: !1 },
                      { since: '0.19.0', value: 'none' },
                      { since: '2.0.0', value: 'es5' }
                    ],
                    description: 'Print trailing commas wherever possible when multi-line.',
                    choices: [
                      { value: 'es5', description: 'Trailing commas where valid in ES5 (objects, arrays, etc.)' },
                      { value: 'none', description: 'No trailing commas.' },
                      { value: 'all', description: 'Trailing commas wherever possible (including function arguments).' }
                    ]
                  },
                  singleAttributePerLine: et.singleAttributePerLine
                };
              }
            }),
            n8 = te({
              'src/language-js/parse/parsers.js'() {
                ey();
              }
            }),
            n6 = te({
              'node_modules/linguist-languages/data/JavaScript.json'(e, O) {
                O.exports = {
                  name: 'JavaScript',
                  type: 'programming',
                  tmScope: 'source.js',
                  aceMode: 'javascript',
                  codemirrorMode: 'javascript',
                  codemirrorMimeType: 'text/javascript',
                  color: '#f1e05a',
                  aliases: ['js', 'node'],
                  extensions: [
                    '.js',
                    '._js',
                    '.bones',
                    '.cjs',
                    '.es',
                    '.es6',
                    '.frag',
                    '.gs',
                    '.jake',
                    '.javascript',
                    '.jsb',
                    '.jscad',
                    '.jsfl',
                    '.jslib',
                    '.jsm',
                    '.jspre',
                    '.jss',
                    '.jsx',
                    '.mjs',
                    '.njs',
                    '.pac',
                    '.sjs',
                    '.ssjs',
                    '.xsjs',
                    '.xsjslib'
                  ],
                  filenames: ['Jakefile'],
                  interpreters: ['chakra', 'd8', 'gjs', 'js', 'node', 'nodejs', 'qjs', 'rhino', 'v8', 'v8-shell'],
                  languageId: 183
                };
              }
            }),
            n7 = te({
              'node_modules/linguist-languages/data/TypeScript.json'(e, O) {
                O.exports = {
                  name: 'TypeScript',
                  type: 'programming',
                  color: '#3178c6',
                  aliases: ['ts'],
                  interpreters: ['deno', 'ts-node'],
                  extensions: ['.ts', '.cts', '.mts'],
                  tmScope: 'source.ts',
                  aceMode: 'typescript',
                  codemirrorMode: 'javascript',
                  codemirrorMimeType: 'application/typescript',
                  languageId: 378
                };
              }
            }),
            n9 = te({
              'node_modules/linguist-languages/data/TSX.json'(e, O) {
                O.exports = {
                  name: 'TSX',
                  type: 'programming',
                  color: '#3178c6',
                  group: 'TypeScript',
                  extensions: ['.tsx'],
                  tmScope: 'source.tsx',
                  aceMode: 'javascript',
                  codemirrorMode: 'jsx',
                  codemirrorMimeType: 'text/jsx',
                  languageId: 94901924
                };
              }
            }),
            n5 = te({
              'node_modules/linguist-languages/data/JSON.json'(e, O) {
                O.exports = {
                  name: 'JSON',
                  type: 'data',
                  color: '#292929',
                  tmScope: 'source.json',
                  aceMode: 'json',
                  codemirrorMode: 'javascript',
                  codemirrorMimeType: 'application/json',
                  aliases: ['geojson', 'jsonl', 'topojson'],
                  extensions: [
                    '.json',
                    '.4DForm',
                    '.4DProject',
                    '.avsc',
                    '.geojson',
                    '.gltf',
                    '.har',
                    '.ice',
                    '.JSON-tmLanguage',
                    '.jsonl',
                    '.mcmeta',
                    '.tfstate',
                    '.tfstate.backup',
                    '.topojson',
                    '.webapp',
                    '.webmanifest',
                    '.yy',
                    '.yyp'
                  ],
                  filenames: [
                    '.arcconfig',
                    '.auto-changelog',
                    '.c8rc',
                    '.htmlhintrc',
                    '.imgbotconfig',
                    '.nycrc',
                    '.tern-config',
                    '.tern-project',
                    '.watchmanconfig',
                    'Pipfile.lock',
                    'composer.lock',
                    'mcmod.info'
                  ],
                  languageId: 174
                };
              }
            }),
            n4 = te({
              'node_modules/linguist-languages/data/JSON with Comments.json'(e, O) {
                O.exports = {
                  name: 'JSON with Comments',
                  type: 'data',
                  color: '#292929',
                  group: 'JSON',
                  tmScope: 'source.js',
                  aceMode: 'javascript',
                  codemirrorMode: 'javascript',
                  codemirrorMimeType: 'text/javascript',
                  aliases: ['jsonc'],
                  extensions: [
                    '.jsonc',
                    '.code-snippets',
                    '.sublime-build',
                    '.sublime-commands',
                    '.sublime-completions',
                    '.sublime-keymap',
                    '.sublime-macro',
                    '.sublime-menu',
                    '.sublime-mousemap',
                    '.sublime-project',
                    '.sublime-settings',
                    '.sublime-theme',
                    '.sublime-workspace',
                    '.sublime_metrics',
                    '.sublime_session'
                  ],
                  filenames: [
                    '.babelrc',
                    '.devcontainer.json',
                    '.eslintrc.json',
                    '.jscsrc',
                    '.jshintrc',
                    '.jslintrc',
                    'api-extractor.json',
                    'devcontainer.json',
                    'jsconfig.json',
                    'language-configuration.json',
                    'tsconfig.json',
                    'tslint.json'
                  ],
                  languageId: 423
                };
              }
            }),
            rt = te({
              'node_modules/linguist-languages/data/JSON5.json'(e, O) {
                O.exports = {
                  name: 'JSON5',
                  type: 'data',
                  color: '#267CB9',
                  extensions: ['.json5'],
                  tmScope: 'source.js',
                  aceMode: 'javascript',
                  codemirrorMode: 'javascript',
                  codemirrorMimeType: 'application/json',
                  languageId: 175
                };
              }
            }),
            rn = te({
              'src/language-js/index.js'(e, O) {
                ey();
                var et = t3(),
                  en = n0(),
                  er = n1(),
                  eu = n3(),
                  ei = n8(),
                  ea = [
                    et(n6(), (e) => ({
                      since: '0.0.0',
                      parsers: ['babel', 'acorn', 'espree', 'meriyah', 'babel-flow', 'babel-ts', 'flow', 'typescript'],
                      vscodeLanguageIds: ['javascript', 'mongo'],
                      interpreters: [...e.interpreters, 'zx'],
                      extensions: [...e.extensions.filter((e) => '.jsx' !== e), '.wxs']
                    })),
                    et(n6(), () => ({
                      name: 'Flow',
                      since: '0.0.0',
                      parsers: ['flow', 'babel-flow'],
                      vscodeLanguageIds: ['javascript'],
                      aliases: [],
                      filenames: [],
                      extensions: ['.js.flow']
                    })),
                    et(n6(), () => ({
                      name: 'JSX',
                      since: '0.0.0',
                      parsers: ['babel', 'babel-flow', 'babel-ts', 'flow', 'typescript', 'espree', 'meriyah'],
                      vscodeLanguageIds: ['javascriptreact'],
                      aliases: void 0,
                      filenames: void 0,
                      extensions: ['.jsx'],
                      group: 'JavaScript',
                      interpreters: void 0,
                      tmScope: 'source.js.jsx',
                      aceMode: 'javascript',
                      codemirrorMode: 'jsx',
                      codemirrorMimeType: 'text/jsx',
                      color: void 0
                    })),
                    et(n7(), () => ({
                      since: '1.4.0',
                      parsers: ['typescript', 'babel-ts'],
                      vscodeLanguageIds: ['typescript']
                    })),
                    et(n9(), () => ({
                      since: '1.4.0',
                      parsers: ['typescript', 'babel-ts'],
                      vscodeLanguageIds: ['typescriptreact']
                    })),
                    et(n5(), () => ({
                      name: 'JSON.stringify',
                      since: '1.13.0',
                      parsers: ['json-stringify'],
                      vscodeLanguageIds: ['json'],
                      extensions: ['.importmap'],
                      filenames: ['package.json', 'package-lock.json', 'composer.json']
                    })),
                    et(n5(), (e) => ({
                      since: '1.5.0',
                      parsers: ['json'],
                      vscodeLanguageIds: ['json'],
                      extensions: e.extensions.filter((e) => '.jsonl' !== e)
                    })),
                    et(n4(), (e) => ({
                      since: '1.5.0',
                      parsers: ['json'],
                      vscodeLanguageIds: ['jsonc'],
                      filenames: [...e.filenames, '.eslintrc', '.swcrc']
                    })),
                    et(rt(), () => ({ since: '1.13.0', parsers: ['json5'], vscodeLanguageIds: ['json5'] }))
                  ];
                O.exports = { languages: ea, options: eu, printers: { estree: en, 'estree-json': er }, parsers: ei };
              }
            }),
            rr = te({
              'src/language-css/clean.js'(e, O) {
                ey();
                var { isFrontMatterNode: et } = e3(),
                  en = ev(),
                  er = new Set(['raw', 'raws', 'sourceIndex', 'source', 'before', 'after', 'trailingComma']);
                function n(e, O, er) {
                  if (
                    (et(e) && 'yaml' === e.lang && delete O.value,
                    'css-comment' === e.type &&
                      'css-root' === er.type &&
                      er.nodes.length > 0 &&
                      (((er.nodes[0] === e || (et(er.nodes[0]) && er.nodes[1] === e)) &&
                        (delete O.text, /^\*\s*@(?:format|prettier)\s*$/.test(e.text))) ||
                        ('css-root' === er.type && en(er.nodes) === e)))
                  )
                    return null;
                  if (
                    ('value-root' === e.type && delete O.text,
                    ('media-query' === e.type ||
                      'media-query-list' === e.type ||
                      'media-feature-expression' === e.type) &&
                      delete O.value,
                    'css-rule' === e.type && delete O.params,
                    'selector-combinator' === e.type && (O.value = O.value.replace(/\s+/g, ' ')),
                    'media-feature' === e.type && (O.value = O.value.replace(/ /g, '')),
                    (('value-word' === e.type &&
                      ((e.isColor && e.isHex) ||
                        ['initial', 'inherit', 'unset', 'revert'].includes(O.value.replace().toLowerCase()))) ||
                      'media-feature' === e.type ||
                      'selector-root-invalid' === e.type ||
                      'selector-pseudo' === e.type) &&
                      (O.value = O.value.toLowerCase()),
                    'css-decl' === e.type && (O.prop = O.prop.toLowerCase()),
                    ('css-atrule' === e.type || 'css-import' === e.type) && (O.name = O.name.toLowerCase()),
                    'value-number' === e.type && (O.unit = O.unit.toLowerCase()),
                    ('media-feature' === e.type ||
                      'media-keyword' === e.type ||
                      'media-type' === e.type ||
                      'media-unknown' === e.type ||
                      'media-url' === e.type ||
                      'media-value' === e.type ||
                      'selector-attribute' === e.type ||
                      'selector-string' === e.type ||
                      'selector-class' === e.type ||
                      'selector-combinator' === e.type ||
                      'value-string' === e.type) &&
                      O.value &&
                      (O.value = u(O.value)),
                    'selector-attribute' === e.type &&
                      ((O.attribute = O.attribute.trim()),
                      O.namespace &&
                        'string' == typeof O.namespace &&
                        ((O.namespace = O.namespace.trim()), 0 === O.namespace.length && (O.namespace = !0)),
                      O.value && ((O.value = O.value.trim().replace(/^["']|["']$/g, '')), delete O.quoted)),
                    ('media-value' === e.type ||
                      'media-type' === e.type ||
                      'value-number' === e.type ||
                      'selector-root-invalid' === e.type ||
                      'selector-class' === e.type ||
                      'selector-combinator' === e.type ||
                      'selector-tag' === e.type) &&
                      O.value &&
                      (O.value = O.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (e, O, et) => {
                        let en = Number(O);
                        return Number.isNaN(en) ? e : en + et.toLowerCase();
                      })),
                    'selector-tag' === e.type)
                  ) {
                    let et = e.value.toLowerCase();
                    ['from', 'to'].includes(et) && (O.value = et);
                  }
                  if (
                    ('css-atrule' === e.type && 'supports' === e.name.toLowerCase() && delete O.value,
                    'selector-unknown' === e.type && delete O.value,
                    'value-comma_group' === e.type)
                  ) {
                    let et = e.groups.findIndex((e) => 'value-number' === e.type && '...' === e.unit);
                    -1 !== et &&
                      ((O.groups[et].unit = ''),
                      O.groups.splice(et + 1, 0, { type: 'value-word', value: '...', isColor: !1, isHex: !1 }));
                  }
                  if (
                    'value-comma_group' === e.type &&
                    e.groups.some(
                      (e) =>
                        ('value-atword' === e.type && e.value.endsWith('[')) ||
                        ('value-word' === e.type && e.value.startsWith(']'))
                    )
                  )
                    return {
                      type: 'value-atword',
                      value: e.groups.map((e) => e.value).join(''),
                      group: { open: null, close: null, groups: [], type: 'value-paren_group' }
                    };
                }
                function u(e) {
                  return e.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, '$1');
                }
                (n.ignoredProperties = er), (O.exports = n);
              }
            }),
            ru = te({
              'src/utils/front-matter/print.js'(e, O) {
                ey();
                var {
                  builders: { hardline: et, markAsRoot: en }
                } = eO();
                function a(e, O) {
                  if ('yaml' === e.lang) {
                    let er = e.value.trim(),
                      eu = er ? O(er, { parser: 'yaml' }, { stripTrailingHardline: !0 }) : '';
                    return en([e.startDelimiter, et, eu, eu ? et : '', e.endDelimiter]);
                  }
                }
                O.exports = a;
              }
            }),
            ri = te({
              'src/language-css/embed.js'(e, O) {
                ey();
                var {
                    builders: { hardline: et }
                  } = eO(),
                  en = ru();
                function a(e, O, er) {
                  let eu = e.getValue();
                  if ('front-matter' === eu.type) {
                    let e = en(eu, er);
                    return e ? [e, et] : '';
                  }
                }
                O.exports = a;
              }
            }),
            ra = te({
              'src/utils/front-matter/parse.js'(e, O) {
                ey();
                var et = RegExp(
                  '^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)',
                  's'
                );
                function s(e) {
                  let O = e.match(et);
                  if (!O) return { content: e };
                  let { startDelimiter: en, language: er, value: eu = '', endDelimiter: ei } = O.groups,
                    ea = er.trim() || 'yaml';
                  if (('+++' === en && (ea = 'toml'), 'yaml' !== ea && en !== ei)) return { content: e };
                  let [es] = O;
                  return {
                    frontMatter: {
                      type: 'front-matter',
                      lang: ea,
                      value: eu,
                      startDelimiter: en,
                      endDelimiter: ei,
                      raw: es.replace(/\n$/, '')
                    },
                    content: es.replace(/[^\n]/g, ' ') + e.slice(es.length)
                  };
                }
                O.exports = s;
              }
            }),
            rs = te({
              'src/language-css/pragma.js'(e, O) {
                ey();
                var et = nC(),
                  en = ra();
                function a(e) {
                  return et.hasPragma(en(e).content);
                }
                function n(e) {
                  let { frontMatter: O, content: er } = en(e);
                  return (
                    (O
                      ? O.raw +
                        `

`
                      : '') + et.insertPragma(er)
                  );
                }
                O.exports = { hasPragma: a, insertPragma: n };
              }
            }),
            ro = te({
              'src/language-css/utils/index.js'(e, O) {
                ey();
                var et = new Set([
                  'red',
                  'green',
                  'blue',
                  'alpha',
                  'a',
                  'rgb',
                  'hue',
                  'h',
                  'saturation',
                  's',
                  'lightness',
                  'l',
                  'whiteness',
                  'w',
                  'blackness',
                  'b',
                  'tint',
                  'shade',
                  'blend',
                  'blenda',
                  'contrast',
                  'hsl',
                  'hsla',
                  'hwb',
                  'hwba'
                ]);
                function s(e, O) {
                  let et = Array.isArray(O) ? O : [O],
                    en = -1,
                    er;
                  for (; (er = e.getParentNode(++en)); ) if (et.includes(er.type)) return en;
                  return -1;
                }
                function a(e, O) {
                  let et = s(e, O);
                  return -1 === et ? null : e.getParentNode(et);
                }
                function n(e) {
                  var O;
                  let et = a(e, 'css-decl');
                  return null == et || null === (O = et.prop) || void 0 === O ? void 0 : O.toLowerCase();
                }
                var en = new Set(['initial', 'inherit', 'unset', 'revert']);
                function i(e) {
                  return en.has(e.toLowerCase());
                }
                function l(e, O) {
                  let et = a(e, 'css-atrule');
                  return (
                    (null == et ? void 0 : et.name) &&
                    et.name.toLowerCase().endsWith('keyframes') &&
                    ['from', 'to'].includes(O.toLowerCase())
                  );
                }
                function p(e) {
                  return e.includes('$') ||
                    e.includes('@') ||
                    e.includes('#') ||
                    e.startsWith('%') ||
                    e.startsWith('--') ||
                    e.startsWith(':--') ||
                    (e.includes('(') && e.includes(')'))
                    ? e
                    : e.toLowerCase();
                }
                function y(e, O) {
                  var et;
                  let en = a(e, 'value-func');
                  return (null == en || null === (et = en.value) || void 0 === et ? void 0 : et.toLowerCase()) === O;
                }
                function h(e) {
                  var O;
                  let et = a(e, 'css-rule'),
                    en = null == et || null === (O = et.raws) || void 0 === O ? void 0 : O.selector;
                  return en && (en.startsWith(':import') || en.startsWith(':export'));
                }
                function g(e, O) {
                  let et = Array.isArray(O) ? O : [O],
                    en = a(e, 'css-atrule');
                  return en && et.includes(en.name.toLowerCase());
                }
                function c(e) {
                  let O = e.getValue(),
                    et = a(e, 'css-atrule');
                  return (
                    (null == et ? void 0 : et.name) === 'import' && 'url' === O.groups[0].value && 2 === O.groups.length
                  );
                }
                function f(e) {
                  return 'value-func' === e.type && 'url' === e.value.toLowerCase();
                }
                function F(e, O) {
                  var et;
                  let en = null === (et = e.getParentNode()) || void 0 === et ? void 0 : et.nodes;
                  return en && en.indexOf(O) === en.length - 1;
                }
                function _(e) {
                  let { selector: O } = e;
                  return !!O && (('string' == typeof O && /^@.+:.*$/.test(O)) || (O.value && /^@.+:.*$/.test(O.value)));
                }
                function w(e) {
                  return 'value-word' === e.type && ['from', 'through', 'end'].includes(e.value);
                }
                function E(e) {
                  return 'value-word' === e.type && ['and', 'or', 'not'].includes(e.value);
                }
                function N(e) {
                  return 'value-word' === e.type && 'in' === e.value;
                }
                function x(e) {
                  return 'value-operator' === e.type && '*' === e.value;
                }
                function I(e) {
                  return 'value-operator' === e.type && '/' === e.value;
                }
                function P(e) {
                  return 'value-operator' === e.type && '+' === e.value;
                }
                function $(e) {
                  return 'value-operator' === e.type && '-' === e.value;
                }
                function D(e) {
                  return 'value-operator' === e.type && '%' === e.value;
                }
                function T(e) {
                  return x(e) || I(e) || P(e) || $(e) || D(e);
                }
                function m(e) {
                  return 'value-word' === e.type && ['==', '!='].includes(e.value);
                }
                function C(e) {
                  return 'value-word' === e.type && ['<', '>', '<=', '>='].includes(e.value);
                }
                function o(e) {
                  return 'css-atrule' === e.type && ['if', 'else', 'for', 'each', 'while'].includes(e.name);
                }
                function d(e) {
                  var O;
                  return (null === (O = e.raws) || void 0 === O ? void 0 : O.params) && /^\(\s*\)$/.test(e.raws.params);
                }
                function v(e) {
                  return e.name.startsWith('prettier-placeholder');
                }
                function S(e) {
                  return e.prop.startsWith('@prettier-placeholder');
                }
                function b(e, O) {
                  return (
                    '$$' === e.value &&
                    'value-func' === e.type &&
                    (null == O ? void 0 : O.type) === 'value-word' &&
                    !O.raws.before
                  );
                }
                function B(e) {
                  var O, et;
                  return (
                    (null === (O = e.value) || void 0 === O ? void 0 : O.type) === 'value-root' &&
                    (null === (et = e.value.group) || void 0 === et ? void 0 : et.type) === 'value-value' &&
                    'composes' === e.prop.toLowerCase()
                  );
                }
                function k(e) {
                  var O, et, en;
                  return (
                    (null === (O = e.value) ||
                    void 0 === O ||
                    null === (et = O.group) ||
                    void 0 === et ||
                    null === (en = et.group) ||
                    void 0 === en
                      ? void 0
                      : en.type) === 'value-paren_group' &&
                    null !== e.value.group.group.open &&
                    null !== e.value.group.group.close
                  );
                }
                function M(e) {
                  var O;
                  return (null === (O = e.raws) || void 0 === O ? void 0 : O.before) === '';
                }
                function R(e) {
                  var O, et;
                  return (
                    'value-comma_group' === e.type &&
                    (null === (O = e.groups) || void 0 === O || null === (et = O[1]) || void 0 === et
                      ? void 0
                      : et.type) === 'value-colon'
                  );
                }
                function q(e) {
                  var O;
                  return (
                    'value-paren_group' === e.type &&
                    (null === (O = e.groups) || void 0 === O ? void 0 : O[0]) &&
                    R(e.groups[0])
                  );
                }
                function J(e) {
                  var O;
                  let et = e.getValue();
                  if (0 === et.groups.length) return !1;
                  let en = e.getParentNode(1);
                  if (!q(et) && !(en && q(en))) return !1;
                  let er = a(e, 'css-decl');
                  return !!(
                    (null != er && null !== (O = er.prop) && void 0 !== O && O.startsWith('$')) ||
                    q(en) ||
                    'value-func' === en.type
                  );
                }
                function L(e) {
                  return 'value-comment' === e.type && e.inline;
                }
                function Q(e) {
                  return 'value-word' === e.type && '#' === e.value;
                }
                function V(e) {
                  return 'value-word' === e.type && '{' === e.value;
                }
                function j(e) {
                  return 'value-word' === e.type && '}' === e.value;
                }
                function Y(e) {
                  return ['value-word', 'value-atword'].includes(e.type);
                }
                function ie(e) {
                  return (null == e ? void 0 : e.type) === 'value-colon';
                }
                function ee(e, O) {
                  if (!R(O)) return !1;
                  let { groups: et } = O,
                    en = et.indexOf(e);
                  return -1 !== en && ie(et[en + 1]);
                }
                function ce(e) {
                  return e.value && ['not', 'and', 'or'].includes(e.value.toLowerCase());
                }
                function W(e) {
                  return 'value-func' === e.type && et.has(e.value.toLowerCase());
                }
                function K(e) {
                  return /\/\//.test(e.split(/[\n\r]/).pop());
                }
                function de(e) {
                  return (
                    (null == e ? void 0 : e.type) === 'value-atword' && e.value.startsWith('prettier-placeholder-')
                  );
                }
                function ue(e, O) {
                  var et, en;
                  if (
                    (null === (et = e.open) || void 0 === et ? void 0 : et.value) !== '(' ||
                    (null === (en = e.close) || void 0 === en ? void 0 : en.value) !== ')' ||
                    e.groups.some((e) => 'value-comma_group' !== e.type)
                  )
                    return !1;
                  if ('value-comma_group' === O.type) {
                    let et = O.groups.indexOf(e) - 1,
                      en = O.groups[et];
                    if ((null == en ? void 0 : en.type) === 'value-word' && 'with' === en.value) return !0;
                  }
                  return !1;
                }
                function Fe(e) {
                  var O, et;
                  return (
                    'value-paren_group' === e.type &&
                    (null === (O = e.open) || void 0 === O ? void 0 : O.value) === '(' &&
                    (null === (et = e.close) || void 0 === et ? void 0 : et.value) === ')'
                  );
                }
                O.exports = {
                  getAncestorCounter: s,
                  getAncestorNode: a,
                  getPropOfDeclNode: n,
                  maybeToLowerCase: p,
                  insideValueFunctionNode: y,
                  insideICSSRuleNode: h,
                  insideAtRuleNode: g,
                  insideURLFunctionInImportAtRuleNode: c,
                  isKeyframeAtRuleKeywords: l,
                  isWideKeywords: i,
                  isLastNode: F,
                  isSCSSControlDirectiveNode: o,
                  isDetachedRulesetDeclarationNode: _,
                  isRelationalOperatorNode: C,
                  isEqualityOperatorNode: m,
                  isMultiplicationNode: x,
                  isDivisionNode: I,
                  isAdditionNode: P,
                  isSubtractionNode: $,
                  isModuloNode: D,
                  isMathOperatorNode: T,
                  isEachKeywordNode: N,
                  isForKeywordNode: w,
                  isURLFunctionNode: f,
                  isIfElseKeywordNode: E,
                  hasComposesNode: B,
                  hasParensAroundNode: k,
                  hasEmptyRawBefore: M,
                  isDetachedRulesetCallNode: d,
                  isTemplatePlaceholderNode: v,
                  isTemplatePropNode: S,
                  isPostcssSimpleVarNode: b,
                  isKeyValuePairNode: R,
                  isKeyValuePairInParenGroupNode: q,
                  isKeyInValuePairNode: ee,
                  isSCSSMapItemNode: J,
                  isInlineValueCommentNode: L,
                  isHashNode: Q,
                  isLeftCurlyBraceNode: V,
                  isRightCurlyBraceNode: j,
                  isWordNode: Y,
                  isColonNode: ie,
                  isMediaAndSupportsKeywords: ce,
                  isColorAdjusterFuncNode: W,
                  lastLineHasInlineComment: K,
                  isAtWordPlaceholderNode: de,
                  isConfigurationNode: ue,
                  isParenGroupNode: Fe
                };
              }
            }),
            rl = te({
              'src/utils/line-column-to-index.js'(e, O) {
                ey(),
                  (O.exports = function (e, O) {
                    let et = 0;
                    for (let en = 0; en < e.line - 1; ++en)
                      et =
                        O.indexOf(
                          `
`,
                          et
                        ) + 1;
                    return et + e.column;
                  });
              }
            }),
            rp = te({
              'src/language-css/loc.js'(e, O) {
                ey();
                var { skipEverythingButNewLine: et } = eY(),
                  en = ev(),
                  er = rl();
                function n(e, O) {
                  return 'number' == typeof e.sourceIndex ? e.sourceIndex : e.source ? er(e.source.start, O) - 1 : null;
                }
                function u(e, O) {
                  if ('css-comment' === e.type && e.inline) return et(O, e.source.startOffset);
                  let eu = e.nodes && en(e.nodes);
                  return (
                    eu && e.source && !e.source.end && (e = eu), e.source && e.source.end ? er(e.source.end, O) : null
                  );
                }
                function i(e, O) {
                  for (let et in (e.source && ((e.source.startOffset = n(e, O)), (e.source.endOffset = u(e, O))), e)) {
                    let en = e[et];
                    'source' !== et &&
                      en &&
                      'object' == typeof en &&
                      ('value-root' === en.type || 'value-unknown' === en.type
                        ? l(en, p(e), en.text || en.value)
                        : i(en, O));
                  }
                }
                function l(e, O, et) {
                  for (let en in (e.source &&
                    ((e.source.startOffset = n(e, et) + O), (e.source.endOffset = u(e, et) + O)),
                  e)) {
                    let er = e[en];
                    'source' !== en && er && 'object' == typeof er && l(er, O, et);
                  }
                }
                function p(e) {
                  let O = e.source.startOffset;
                  return (
                    'string' == typeof e.prop && (O += e.prop.length),
                    'css-atrule' === e.type &&
                      'string' == typeof e.name &&
                      (O += 1 + e.name.length + e.raws.afterName.match(/^\s*:?\s*/)[0].length),
                    'css-atrule' !== e.type &&
                      e.raws &&
                      'string' == typeof e.raws.between &&
                      (O += e.raws.between.length),
                    O
                  );
                }
                function y(e) {
                  let O = 'initial',
                    et = 'initial',
                    en,
                    er = !1,
                    eu = [];
                  for (let ei = 0; ei < e.length; ei++) {
                    let ea = e[ei];
                    switch (O) {
                      case 'initial':
                        if ("'" === ea) {
                          O = 'single-quotes';
                          continue;
                        }
                        if ('"' === ea) {
                          O = 'double-quotes';
                          continue;
                        }
                        if (('u' === ea || 'U' === ea) && 'url(' === e.slice(ei, ei + 4).toLowerCase()) {
                          (O = 'url'), (ei += 3);
                          continue;
                        }
                        if ('*' === ea && '/' === e[ei - 1]) {
                          O = 'comment-block';
                          continue;
                        }
                        '/' === ea && '/' === e[ei - 1] && ((O = 'comment-inline'), (en = ei - 1));
                        continue;
                      case 'single-quotes':
                        if (
                          ("'" === ea && '\\' !== e[ei - 1] && ((O = et), (et = 'initial')),
                          ea ===
                            `
` || '\r' === ea)
                        )
                          return e;
                        continue;
                      case 'double-quotes':
                        if (
                          ('"' === ea && '\\' !== e[ei - 1] && ((O = et), (et = 'initial')),
                          ea ===
                            `
` || '\r' === ea)
                        )
                          return e;
                        continue;
                      case 'url':
                        if (
                          (')' === ea && (O = 'initial'),
                          ea ===
                            `
` || '\r' === ea)
                        )
                          return e;
                        if ("'" === ea) {
                          (O = 'single-quotes'), (et = 'url');
                          continue;
                        }
                        '"' === ea && ((O = 'double-quotes'), (et = 'url'));
                        continue;
                      case 'comment-block':
                        '/' === ea && '*' === e[ei - 1] && (O = 'initial');
                        continue;
                      case 'comment-inline':
                        ('"' === ea || "'" === ea || '*' === ea) && (er = !0),
                          (ea ===
                            `
` ||
                            '\r' === ea) &&
                            (er && eu.push([en, ei]), (O = 'initial'), (er = !1));
                        continue;
                    }
                  }
                  for (let [O, et] of eu) e = e.slice(0, O) + e.slice(O, et).replace(/["'*]/g, ' ') + e.slice(et);
                  return e;
                }
                function h(e) {
                  return e.source.startOffset;
                }
                function g(e) {
                  return e.source.endOffset;
                }
                O.exports = { locStart: h, locEnd: g, calculateLoc: i, replaceQuotesInInlineComments: y };
              }
            }),
            rc = te({
              'src/language-css/utils/is-less-parser.js'(e, O) {
                function t(e) {
                  return 'css' === e.parser || 'less' === e.parser;
                }
                ey(), (O.exports = t);
              }
            }),
            rd = te({
              'src/language-css/utils/is-scss.js'(e, O) {
                function t(e, O) {
                  return 'less' === e || 'scss' === e
                    ? 'scss' === e
                    : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(O);
                }
                ey(), (O.exports = t);
              }
            }),
            rD = te({
              'src/language-css/utils/css-units.evaluate.js'(e, O) {
                O.exports = {
                  em: 'em',
                  rem: 'rem',
                  ex: 'ex',
                  rex: 'rex',
                  cap: 'cap',
                  rcap: 'rcap',
                  ch: 'ch',
                  rch: 'rch',
                  ic: 'ic',
                  ric: 'ric',
                  lh: 'lh',
                  rlh: 'rlh',
                  vw: 'vw',
                  svw: 'svw',
                  lvw: 'lvw',
                  dvw: 'dvw',
                  vh: 'vh',
                  svh: 'svh',
                  lvh: 'lvh',
                  dvh: 'dvh',
                  vi: 'vi',
                  svi: 'svi',
                  lvi: 'lvi',
                  dvi: 'dvi',
                  vb: 'vb',
                  svb: 'svb',
                  lvb: 'lvb',
                  dvb: 'dvb',
                  vmin: 'vmin',
                  svmin: 'svmin',
                  lvmin: 'lvmin',
                  dvmin: 'dvmin',
                  vmax: 'vmax',
                  svmax: 'svmax',
                  lvmax: 'lvmax',
                  dvmax: 'dvmax',
                  cm: 'cm',
                  mm: 'mm',
                  q: 'Q',
                  in: 'in',
                  pt: 'pt',
                  pc: 'pc',
                  px: 'px',
                  deg: 'deg',
                  grad: 'grad',
                  rad: 'rad',
                  turn: 'turn',
                  s: 's',
                  ms: 'ms',
                  hz: 'Hz',
                  khz: 'kHz',
                  dpi: 'dpi',
                  dpcm: 'dpcm',
                  dppx: 'dppx',
                  x: 'x'
                };
              }
            }),
            rf = te({
              'src/language-css/utils/print-unit.js'(e, O) {
                ey();
                var et = rD();
                function s(e) {
                  let O = e.toLowerCase();
                  return Object.prototype.hasOwnProperty.call(et, O) ? et[O] : e;
                }
                O.exports = s;
              }
            }),
            rg = te({
              'src/language-css/printer-postcss.js'(e, O) {
                ey();
                var et = ev(),
                  {
                    printNumber: en,
                    printString: er,
                    hasNewline: eu,
                    isFrontMatterNode: ei,
                    isNextLineEmpty: ea,
                    isNonEmptyArray: es
                  } = e3(),
                  {
                    builders: {
                      join: eo,
                      line: el,
                      hardline: ep,
                      softline: ec,
                      group: ed,
                      fill: eD,
                      indent: ef,
                      dedent: eg,
                      ifBreak: eh,
                      breakParent: eE
                    },
                    utils: { removeLines: eC, getDocParts: eF }
                  } = eO(),
                  eA = rr(),
                  ex = ri(),
                  { insertPragma: eb } = rs(),
                  {
                    getAncestorNode: eS,
                    getPropOfDeclNode: eT,
                    maybeToLowerCase: eB,
                    insideValueFunctionNode: eN,
                    insideICSSRuleNode: ew,
                    insideAtRuleNode: eP,
                    insideURLFunctionInImportAtRuleNode: ek,
                    isKeyframeAtRuleKeywords: ej,
                    isWideKeywords: eI,
                    isLastNode: eL,
                    isSCSSControlDirectiveNode: e_,
                    isDetachedRulesetDeclarationNode: eM,
                    isRelationalOperatorNode: e$,
                    isEqualityOperatorNode: eR,
                    isMultiplicationNode: eV,
                    isDivisionNode: eW,
                    isAdditionNode: eq,
                    isSubtractionNode: eJ,
                    isMathOperatorNode: eU,
                    isEachKeywordNode: eH,
                    isForKeywordNode: eG,
                    isURLFunctionNode: ez,
                    isIfElseKeywordNode: eX,
                    hasComposesNode: eK,
                    hasParensAroundNode: eQ,
                    hasEmptyRawBefore: eY,
                    isKeyValuePairNode: eZ,
                    isKeyInValuePairNode: e0,
                    isDetachedRulesetCallNode: e1,
                    isTemplatePlaceholderNode: e2,
                    isTemplatePropNode: e8,
                    isPostcssSimpleVarNode: e6,
                    isSCSSMapItemNode: e7,
                    isInlineValueCommentNode: e9,
                    isHashNode: e5,
                    isLeftCurlyBraceNode: e4,
                    isRightCurlyBraceNode: tn,
                    isWordNode: tr,
                    isColonNode: tu,
                    isMediaAndSupportsKeywords: ti,
                    isColorAdjusterFuncNode: ta,
                    lastLineHasInlineComment: ts,
                    isAtWordPlaceholderNode: to,
                    isConfigurationNode: tl,
                    isParenGroupNode: tp
                  } = ro(),
                  { locStart: tc, locEnd: td } = rp(),
                  tD = rc(),
                  tf = rd(),
                  tg = rf();
                function re(e) {
                  return 'es5' === e.trailingComma || 'all' === e.trailingComma;
                }
                function ye(e, O, en) {
                  var eu, ei;
                  let ey = e.getValue();
                  if (!ey) return '';
                  if ('string' == typeof ey) return ey;
                  switch (ey.type) {
                    case 'front-matter':
                      return [ey.raw, ep];
                    case 'css-root': {
                      let et = Ce(e, O, en),
                        er = ey.raws.after.trim();
                      return (
                        er.startsWith(';') && (er = er.slice(1).trim()),
                        [et, er ? ` ${er}` : '', eF(et).length > 0 ? ep : '']
                      );
                    }
                    case 'css-comment': {
                      let e = ey.inline || ey.raws.inline,
                        et = O.originalText.slice(tc(ey), td(ey));
                      return e ? et.trimEnd() : et;
                    }
                    case 'css-rule':
                      return [
                        en('selector'),
                        ey.important ? ' !important' : '',
                        ey.nodes
                          ? [
                              ey.selector && 'selector-unknown' === ey.selector.type && ts(ey.selector.value)
                                ? el
                                : ' ',
                              '{',
                              ey.nodes.length > 0 ? ef([ep, Ce(e, O, en)]) : '',
                              ep,
                              '}',
                              eM(ey) ? ';' : ''
                            ]
                          : ';'
                      ];
                    case 'css-decl': {
                      let et = e.getParentNode(),
                        { between: er } = ey.raws,
                        eu = er.trim(),
                        ei = ':' === eu,
                        ea = eK(ey) ? eC(en('value')) : en('value');
                      return (
                        !ei && ts(eu) && (ea = ef([ep, eg(ea)])),
                        [
                          ey.raws.before.replace(/[\s;]/g, ''),
                          ('css-atrule' === et.type && et.variable) || ew(e) ? ey.prop : eB(ey.prop),
                          eu.startsWith('//') ? ' ' : '',
                          eu,
                          ey.extend ? '' : ' ',
                          tD(O) && ey.extend && ey.selector ? ['extend(', en('selector'), ')'] : '',
                          ea,
                          ey.raws.important
                            ? ey.raws.important.replace(/\s*!\s*important/i, ' !important')
                            : ey.important
                            ? ' !important'
                            : '',
                          ey.raws.scssDefault
                            ? ey.raws.scssDefault.replace(/\s*!default/i, ' !default')
                            : ey.scssDefault
                            ? ' !default'
                            : '',
                          ey.raws.scssGlobal
                            ? ey.raws.scssGlobal.replace(/\s*!global/i, ' !global')
                            : ey.scssGlobal
                            ? ' !global'
                            : '',
                          ey.nodes
                            ? [' {', ef([ec, Ce(e, O, en)]), ec, '}']
                            : e8(ey) && !et.raws.semicolon && ';' !== O.originalText[td(ey) - 1]
                            ? ''
                            : O.__isHTMLStyleAttribute && eL(e, ey)
                            ? eh(';')
                            : ';'
                        ]
                      );
                    }
                    case 'css-atrule': {
                      let et = e.getParentNode(),
                        er = e2(ey) && !et.raws.semicolon && ';' !== O.originalText[td(ey) - 1];
                      if (tD(O)) {
                        if (ey.mixin) return [en('selector'), ey.important ? ' !important' : '', er ? '' : ';'];
                        if (ey.function) return [ey.name, en('params'), er ? '' : ';'];
                        if (ey.variable)
                          return [
                            '@',
                            ey.name,
                            ': ',
                            ey.value ? en('value') : '',
                            ey.raws.between.trim() ? ey.raws.between.trim() + ' ' : '',
                            ey.nodes ? ['{', ef([ey.nodes.length > 0 ? ec : '', Ce(e, O, en)]), ec, '}'] : '',
                            er ? '' : ';'
                          ];
                      }
                      return [
                        '@',
                        e1(ey) || ey.name.endsWith(':') ? ey.name : eB(ey.name),
                        ey.params
                          ? [
                              e1(ey)
                                ? ''
                                : e2(ey)
                                ? '' === ey.raws.afterName
                                  ? ''
                                  : ey.name.endsWith(':')
                                  ? ' '
                                  : /^\s*\n\s*\n/.test(ey.raws.afterName)
                                  ? [ep, ep]
                                  : /^\s*\n/.test(ey.raws.afterName)
                                  ? ep
                                  : ' '
                                : ' ',
                              en('params')
                            ]
                          : '',
                        ey.selector ? ef([' ', en('selector')]) : '',
                        ey.value
                          ? ed([' ', en('value'), e_(ey) ? (eQ(ey) ? ' ' : el) : ''])
                          : 'else' === ey.name
                          ? ' '
                          : '',
                        ey.nodes
                          ? [
                              e_(ey)
                                ? ''
                                : (ey.selector &&
                                    !ey.selector.nodes &&
                                    'string' == typeof ey.selector.value &&
                                    ts(ey.selector.value)) ||
                                  (!ey.selector && 'string' == typeof ey.params && ts(ey.params))
                                ? el
                                : ' ',
                              '{',
                              ef([ey.nodes.length > 0 ? ec : '', Ce(e, O, en)]),
                              ec,
                              '}'
                            ]
                          : er
                          ? ''
                          : ';'
                      ];
                    }
                    case 'media-query-list': {
                      let O = [];
                      return (
                        e.each((e) => {
                          let et = e.getValue();
                          ('media-query' === et.type && '' === et.value) || O.push(en());
                        }, 'nodes'),
                        ed(ef(eo(el, O)))
                      );
                    }
                    case 'media-query':
                      return [eo(' ', e.map(en, 'nodes')), eL(e, ey) ? '' : ','];
                    case 'media-type':
                    case 'media-value':
                      return Oe(Se(ey.value, O));
                    case 'media-feature-expression':
                      return ey.nodes ? ['(', ...e.map(en, 'nodes'), ')'] : ey.value;
                    case 'media-feature':
                      return eB(Se(ey.value.replace(/ +/g, ' '), O));
                    case 'media-colon':
                    case 'value-comma':
                      return [ey.value, ' '];
                    case 'media-keyword':
                    case 'selector-string':
                      return Se(ey.value, O);
                    case 'media-url':
                      return Se(ey.value.replace(/^url\(\s+/gi, 'url(').replace(/\s+\)$/g, ')'), O);
                    case 'media-unknown':
                    case 'selector-comment':
                    case 'selector-nesting':
                    case 'value-paren':
                    case 'value-operator':
                    case 'value-unicode-range':
                    case 'value-unknown':
                      return ey.value;
                    case 'selector-root':
                      return ed([
                        eP(e, 'custom-selector') ? [eS(e, 'css-atrule').customSelector, el] : '',
                        eo([',', eP(e, ['extend', 'custom-selector', 'nest']) ? el : ep], e.map(en, 'nodes'))
                      ]);
                    case 'selector-selector':
                      return ed(ef(e.map(en, 'nodes')));
                    case 'selector-tag': {
                      let O = e.getParentNode(),
                        et = O && O.nodes.indexOf(ey),
                        en = et && O.nodes[et - 1];
                      return [
                        ey.namespace ? [!0 === ey.namespace ? '' : ey.namespace.trim(), '|'] : '',
                        'selector-nesting' === en.type
                          ? ey.value
                          : Oe(ej(e, ey.value) ? ey.value.toLowerCase() : ey.value)
                      ];
                    }
                    case 'selector-id':
                      return ['#', ey.value];
                    case 'selector-class':
                      return ['.', Oe(Se(ey.value, O))];
                    case 'selector-attribute':
                      return [
                        '[',
                        ey.namespace ? [!0 === ey.namespace ? '' : ey.namespace.trim(), '|'] : '',
                        ey.attribute.trim(),
                        null !== (eu = ey.operator) && void 0 !== eu ? eu : '',
                        ey.value ? Ie(Se(ey.value.trim(), O), O) : '',
                        ey.insensitive ? ' i' : '',
                        ']'
                      ];
                    case 'selector-combinator':
                      if ('+' === ey.value || '>' === ey.value || '~' === ey.value || '>>>' === ey.value) {
                        let O = e.getParentNode();
                        return [
                          'selector-selector' === O.type && O.nodes[0] === ey ? '' : el,
                          ey.value,
                          eL(e, ey) ? '' : ' '
                        ];
                      }
                      return [ey.value.trim().startsWith('(') ? el : '', Oe(Se(ey.value.trim(), O)) || el];
                    case 'selector-universal':
                      return [ey.namespace ? [!0 === ey.namespace ? '' : ey.namespace.trim(), '|'] : '', ey.value];
                    case 'selector-pseudo':
                      return [
                        eB(ey.value),
                        es(ey.nodes) ? ed(['(', ef([ec, eo([',', el], e.map(en, 'nodes'))]), ec, ')']) : ''
                      ];
                    case 'selector-unknown': {
                      let et = eS(e, 'css-rule');
                      if (et && et.isSCSSNesterProperty) return Oe(Se(eB(ey.value), O));
                      let en = e.getParentNode();
                      if (en.raws && en.raws.selector) {
                        let e = tc(en),
                          et = e + en.raws.selector.length;
                        return O.originalText.slice(e, et).trim();
                      }
                      let er = e.getParentNode(1);
                      if (
                        'value-paren_group' === en.type &&
                        er &&
                        'value-func' === er.type &&
                        'selector' === er.value
                      ) {
                        let e = td(en.open) + 1,
                          et = tc(en.close),
                          er = O.originalText.slice(e, et).trim();
                        return ts(er) ? [eE, er] : er;
                      }
                      return ey.value;
                    }
                    case 'value-value':
                    case 'value-root':
                      return en('group');
                    case 'value-comment':
                      return O.originalText.slice(tc(ey), td(ey));
                    case 'value-comma_group': {
                      let et = e.getParentNode(),
                        er = e.getParentNode(1),
                        eu = eT(e),
                        ea = eu && 'value-value' === et.type && ('grid' === eu || eu.startsWith('grid-template')),
                        es = eS(e, 'css-atrule'),
                        eo = es && e_(es),
                        eh = ey.groups.some((e) => e9(e)),
                        eC = e.map(en, 'groups'),
                        eF = [],
                        eA = eN(e, 'url'),
                        ev = !1,
                        ex = !1;
                      for (let en = 0; en < ey.groups.length; ++en) {
                        eF.push(eC[en]);
                        let eu = ey.groups[en - 1],
                          ed = ey.groups[en],
                          eD = ey.groups[en + 1],
                          ef = ey.groups[en + 2];
                        if (eA) {
                          ((eD && eq(eD)) || eq(ed)) && eF.push(' ');
                          continue;
                        }
                        if (
                          (eP(e, 'forward') &&
                            'value-word' === ed.type &&
                            ed.value &&
                            void 0 !== eu &&
                            'value-word' === eu.type &&
                            'as' === eu.value &&
                            'value-operator' === eD.type &&
                            '*' === eD.value) ||
                          !eD ||
                          ('value-word' === ed.type && ed.value.endsWith('-') && to(eD))
                        )
                          continue;
                        if ('value-string' === ed.type && ed.quoted) {
                          let e = ed.value.lastIndexOf('#{'),
                            O = ed.value.lastIndexOf('}');
                          -1 !== e && -1 !== O ? (ev = e > O) : -1 !== e ? (ev = !0) : -1 !== O && (ev = !1);
                        }
                        if (
                          ev ||
                          tu(ed) ||
                          tu(eD) ||
                          ('value-atword' === ed.type && ('' === ed.value || ed.value.endsWith('['))) ||
                          ('value-word' === eD.type && eD.value.startsWith(']')) ||
                          '~' === ed.value ||
                          (ed.value && ed.value.includes('\\') && eD && 'value-comment' !== eD.type) ||
                          (eu &&
                            eu.value &&
                            eu.value.indexOf('\\') === eu.value.length - 1 &&
                            'value-operator' === ed.type &&
                            '/' === ed.value) ||
                          '\\' === ed.value ||
                          e6(ed, eD) ||
                          e5(ed) ||
                          e4(ed) ||
                          tn(eD) ||
                          (e4(eD) && eY(eD)) ||
                          (tn(ed) && eY(eD)) ||
                          ('--' === ed.value && e5(eD))
                        )
                          continue;
                        let eh = eU(ed),
                          eE = eU(eD);
                        if (
                          (((eh && e5(eD)) || (eE && tn(ed))) && eY(eD)) ||
                          (!eu && eW(ed)) ||
                          (eN(e, 'calc') && (eq(ed) || eq(eD) || eJ(ed) || eJ(eD)) && eY(eD))
                        )
                          continue;
                        let eb =
                            (eq(ed) || eJ(ed)) &&
                            0 === en &&
                            ('value-number' === eD.type || eD.isHex) &&
                            er &&
                            ta(er) &&
                            !eY(eD),
                          eS = (ef && 'value-func' === ef.type) || (ef && tr(ef)) || 'value-func' === ed.type || tr(ed),
                          eT = 'value-func' === eD.type || tr(eD) || (eu && 'value-func' === eu.type) || (eu && tr(eu));
                        if (
                          !(
                            !(eV(eD) || eV(ed)) &&
                            !eN(e, 'calc') &&
                            !eb &&
                            ((eW(eD) && !eS) ||
                              (eW(ed) && !eT) ||
                              (eq(eD) && !eS) ||
                              (eq(ed) && !eT) ||
                              eJ(eD) ||
                              eJ(ed)) &&
                            (eY(eD) || (eh && (!eu || (eu && eU(eu)))))
                          ) &&
                          !(
                            ('scss' === O.parser || 'less' === O.parser) &&
                            eh &&
                            '-' === ed.value &&
                            tp(eD) &&
                            td(ed) === tc(eD.open) &&
                            '(' === eD.open.value
                          )
                        ) {
                          if (e9(ed)) {
                            if ('value-paren_group' === et.type) {
                              eF.push(eg(ep));
                              continue;
                            }
                            eF.push(ep);
                            continue;
                          }
                          if (
                            (eo && (eR(eD) || e$(eD) || eX(eD) || eH(ed) || eG(ed))) ||
                            (es && 'namespace' === es.name.toLowerCase())
                          ) {
                            eF.push(' ');
                            continue;
                          }
                          if (ea) {
                            ed.source && eD.source && ed.source.start.line !== eD.source.start.line
                              ? (eF.push(ep), (ex = !0))
                              : eF.push(' ');
                            continue;
                          }
                          if (eE) {
                            eF.push(' ');
                            continue;
                          }
                          if (!(eD && '...' === eD.value) && !(to(ed) && to(eD) && td(ed) === tc(eD))) {
                            if (to(ed) && tp(eD) && td(ed) === tc(eD.open)) {
                              eF.push(ec);
                              continue;
                            }
                            if ('with' === ed.value && tp(eD)) {
                              eF.push(' ');
                              continue;
                            }
                            (null !== (ei = ed.value) &&
                              void 0 !== ei &&
                              ei.endsWith('#') &&
                              '{' === eD.value &&
                              tp(eD.group)) ||
                              eF.push(el);
                          }
                        }
                      }
                      return (
                        eh && eF.push(eE), ex && eF.unshift(ep), eo ? ed(ef(eF)) : ek(e) ? ed(eD(eF)) : ed(ef(eD(eF)))
                      );
                    }
                    case 'value-paren_group': {
                      let er = e.getParentNode();
                      if (
                        er &&
                        ez(er) &&
                        (1 === ey.groups.length ||
                          (ey.groups.length > 0 &&
                            'value-comma_group' === ey.groups[0].type &&
                            ey.groups[0].groups.length > 0 &&
                            'value-word' === ey.groups[0].groups[0].type &&
                            ey.groups[0].groups[0].value.startsWith('data:')))
                      )
                        return [ey.open ? en('open') : '', eo(',', e.map(en, 'groups')), ey.close ? en('close') : ''];
                      if (!ey.open) {
                        let O = e.map(en, 'groups'),
                          et = [];
                        for (let e = 0; e < O.length; e++) 0 !== e && et.push([',', el]), et.push(O[e]);
                        return ed(ef(eD(et)));
                      }
                      let eu = e7(e),
                        ei = et(ey.groups),
                        eE = ei && 'value-comment' === ei.type,
                        eC = e0(ey, er),
                        eA = tl(ey, er),
                        ev = eA || (eu && !eC),
                        ex = ed(
                          [
                            ey.open ? en('open') : '',
                            ef([
                              ec,
                              eo(
                                [el],
                                e.map((e, er) => {
                                  let eu = e.getValue(),
                                    ei = er === ey.groups.length - 1,
                                    eo = [en(), ei ? '' : ','];
                                  if (
                                    eZ(eu) &&
                                    'value-comma_group' === eu.type &&
                                    eu.groups &&
                                    'value-paren_group' !== eu.groups[0].type &&
                                    eu.groups[2] &&
                                    'value-paren_group' === eu.groups[2].type
                                  ) {
                                    let e = eF(eo[0].contents.contents);
                                    (e[1] = ed(e[1])), (eo = [ed(eg(eo))]);
                                  }
                                  if (!ei && 'value-comma_group' === eu.type && es(eu.groups)) {
                                    let e = et(eu.groups);
                                    !e.source && e.close && (e = e.close),
                                      e.source && ea(O.originalText, e, td) && eo.push(ep);
                                  }
                                  return eo;
                                }, 'groups')
                              )
                            ]),
                            eh(!eE && tf(O.parser, O.originalText) && eu && re(O) ? ',' : ''),
                            ec,
                            ey.close ? en('close') : ''
                          ],
                          { shouldBreak: ev }
                        );
                      return eA || eC ? eg(ex) : ex;
                    }
                    case 'value-func':
                      return [ey.value, eP(e, 'supports') && ti(ey) ? ' ' : '', en('group')];
                    case 'value-number':
                      return [Je(ey.value), tg(ey.unit)];
                    case 'value-word':
                      return (ey.isColor && ey.isHex) || eI(ey.value) ? ey.value.toLowerCase() : ey.value;
                    case 'value-colon': {
                      let O = e.getParentNode(),
                        en = O && O.groups.indexOf(ey),
                        er = en && O.groups[en - 1];
                      return [
                        ey.value,
                        (er && 'string' == typeof er.value && '\\' === et(er.value)) || eN(e, 'url') ? '' : el
                      ];
                    }
                    case 'value-string':
                      return er(ey.raws.quote + ey.value + ey.raws.quote, O);
                    case 'value-atword':
                      return ['@', ey.value];
                    default:
                      throw Error(`Unknown postcss type ${JSON.stringify(ey.type)}`);
                  }
                }
                function Ce(e, O, et) {
                  let en = [];
                  return (
                    e.each((e, er, es) => {
                      let eo = es[er - 1];
                      if (eo && 'css-comment' === eo.type && 'prettier-ignore' === eo.text.trim()) {
                        let et = e.getValue();
                        en.push(O.originalText.slice(tc(et), td(et)));
                      } else en.push(et());
                      er !== es.length - 1 &&
                        (('css-comment' !== es[er + 1].type ||
                          eu(O.originalText, tc(es[er + 1]), { backwards: !0 }) ||
                          ei(es[er])) &&
                        ('css-atrule' !== es[er + 1].type ||
                          'else' !== es[er + 1].name ||
                          'css-comment' === es[er].type)
                          ? (en.push(O.__isHTMLStyleAttribute ? el : ep),
                            ea(O.originalText, e.getValue(), td) && !ei(es[er]) && en.push(ep))
                          : en.push(' '));
                    }, 'nodes'),
                    en
                  );
                }
                var ty = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs,
                  th = RegExp(
                    ty.source +
                      `|(${/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source})?(${
                        /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source
                      })(${/[A-Za-z]+/g.source})?`,
                    'g'
                  );
                function Se(e, O) {
                  return e.replace(ty, (e) => er(e, O));
                }
                function Ie(e, O) {
                  let et = O.singleQuote ? "'" : '"';
                  return e.includes('"') || e.includes("'") ? e : et + e + et;
                }
                function Oe(e) {
                  return e.replace(th, (e, O, et, en, er) => (!et && en ? Je(en) + eB(er || '') : e));
                }
                function Je(e) {
                  return en(e).replace(/\.0(?=$|e)/, '');
                }
                O.exports = { print: ye, embed: ex, insertPragma: eb, massageAstNode: eA };
              }
            }),
            ry = te({
              'src/language-css/options.js'(e, O) {
                ey();
                var et = n2();
                O.exports = { singleQuote: et.singleQuote };
              }
            }),
            rh = te({
              'src/language-css/parsers.js'() {
                ey();
              }
            }),
            rE = te({
              'node_modules/linguist-languages/data/CSS.json'(e, O) {
                O.exports = {
                  name: 'CSS',
                  type: 'markup',
                  tmScope: 'source.css',
                  aceMode: 'css',
                  codemirrorMode: 'css',
                  codemirrorMimeType: 'text/css',
                  color: '#563d7c',
                  extensions: ['.css'],
                  languageId: 50
                };
              }
            }),
            rC = te({
              'node_modules/linguist-languages/data/PostCSS.json'(e, O) {
                O.exports = {
                  name: 'PostCSS',
                  type: 'markup',
                  color: '#dc3a0c',
                  tmScope: 'source.postcss',
                  group: 'CSS',
                  extensions: ['.pcss', '.postcss'],
                  aceMode: 'text',
                  languageId: 262764437
                };
              }
            }),
            rF = te({
              'node_modules/linguist-languages/data/Less.json'(e, O) {
                O.exports = {
                  name: 'Less',
                  type: 'markup',
                  color: '#1d365d',
                  aliases: ['less-css'],
                  extensions: ['.less'],
                  tmScope: 'source.css.less',
                  aceMode: 'less',
                  codemirrorMode: 'css',
                  codemirrorMimeType: 'text/css',
                  languageId: 198
                };
              }
            }),
            rA = te({
              'node_modules/linguist-languages/data/SCSS.json'(e, O) {
                O.exports = {
                  name: 'SCSS',
                  type: 'markup',
                  color: '#c6538c',
                  tmScope: 'source.css.scss',
                  aceMode: 'scss',
                  codemirrorMode: 'css',
                  codemirrorMimeType: 'text/x-scss',
                  extensions: ['.scss'],
                  languageId: 329
                };
              }
            }),
            rv = te({
              'src/language-css/index.js'(e, O) {
                ey();
                var et = t3(),
                  en = rg(),
                  er = ry(),
                  eu = rh(),
                  ei = [
                    et(rE(), (e) => ({
                      since: '1.4.0',
                      parsers: ['css'],
                      vscodeLanguageIds: ['css'],
                      extensions: [...e.extensions, '.wxss']
                    })),
                    et(rC(), () => ({ since: '1.4.0', parsers: ['css'], vscodeLanguageIds: ['postcss'] })),
                    et(rF(), () => ({ since: '1.4.0', parsers: ['less'], vscodeLanguageIds: ['less'] })),
                    et(rA(), () => ({ since: '1.4.0', parsers: ['scss'], vscodeLanguageIds: ['scss'] }))
                  ];
                O.exports = { languages: ei, options: er, printers: { postcss: en }, parsers: eu };
              }
            }),
            rx = te({
              'src/language-handlebars/loc.js'(e, O) {
                function t(e) {
                  return e.loc.start.offset;
                }
                function s(e) {
                  return e.loc.end.offset;
                }
                ey(), (O.exports = { locStart: t, locEnd: s });
              }
            }),
            rb = te({
              'src/language-handlebars/clean.js'(e, O) {
                function t(e, O) {
                  if ('TextNode' === e.type) {
                    let et = e.chars.trim();
                    if (!et) return null;
                    O.chars = et.replace(/[\t\n\f\r ]+/g, ' ');
                  }
                  'AttrNode' === e.type && 'class' === e.name.toLowerCase() && delete O.value;
                }
                ey(), (t.ignoredProperties = new Set(['loc', 'selfClosing'])), (O.exports = t);
              }
            }),
            rS = te({
              'src/language-handlebars/html-void-elements.evaluate.js'(e, O) {
                O.exports = [
                  'area',
                  'base',
                  'br',
                  'col',
                  'command',
                  'embed',
                  'hr',
                  'img',
                  'input',
                  'keygen',
                  'link',
                  'meta',
                  'param',
                  'source',
                  'track',
                  'wbr'
                ];
              }
            }),
            rT = te({
              'src/language-handlebars/utils.js'(e, O) {
                ey();
                var et = ev(),
                  en = rS();
                function a(e) {
                  let O = e.getValue(),
                    en = e.getParentNode(0);
                  return !!((g(e, ['ElementNode']) && et(en.children) === O) || (g(e, ['Block']) && et(en.body) === O));
                }
                function n(e) {
                  return e.toUpperCase() === e;
                }
                function u(e) {
                  return (
                    h(e, ['ElementNode']) &&
                    'string' == typeof e.tag &&
                    !e.tag.startsWith(':') &&
                    (n(e.tag[0]) || e.tag.includes('.'))
                  );
                }
                var er = new Set(en);
                function l(e) {
                  return er.has(e.toLowerCase()) && !n(e[0]);
                }
                function p(e) {
                  return !0 === e.selfClosing || l(e.tag) || (u(e) && e.children.every((e) => y(e)));
                }
                function y(e) {
                  return h(e, ['TextNode']) && !/\S/.test(e.chars);
                }
                function h(e, O) {
                  return e && O.includes(e.type);
                }
                function g(e, O) {
                  return h(e.getParentNode(0), O);
                }
                function c(e, O) {
                  return h(_(e), O);
                }
                function f(e, O) {
                  return h(w(e), O);
                }
                function F(e, O) {
                  var et, en, er, eu;
                  let ei = e.getValue(),
                    ea = null !== (et = e.getParentNode(0)) && void 0 !== et ? et : {},
                    es =
                      null !==
                        (en =
                          null !== (er = null !== (eu = ea.children) && void 0 !== eu ? eu : ea.body) && void 0 !== er
                            ? er
                            : ea.parts) && void 0 !== en
                        ? en
                        : [],
                    eo = es.indexOf(ei);
                  return -1 !== eo && es[eo + O];
                }
                function _(e) {
                  let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                  return F(e, -O);
                }
                function w(e) {
                  return F(e, 1);
                }
                function E(e) {
                  return (
                    h(e, ['MustacheCommentStatement']) &&
                    'string' == typeof e.value &&
                    'prettier-ignore' === e.value.trim()
                  );
                }
                function N(e) {
                  let O = e.getValue(),
                    et = _(e, 2);
                  return E(O) || E(et);
                }
                O.exports = {
                  getNextNode: w,
                  getPreviousNode: _,
                  hasPrettierIgnore: N,
                  isLastNodeOfSiblings: a,
                  isNextNodeOfSomeType: f,
                  isNodeOfSomeType: h,
                  isParentOfSomeType: g,
                  isPreviousNodeOfSomeType: c,
                  isVoid: p,
                  isWhitespaceNode: y
                };
              }
            }),
            rB = te({
              'src/language-handlebars/printer-glimmer.js'(e, O) {
                ey();
                var {
                    builders: {
                      dedent: et,
                      fill: en,
                      group: er,
                      hardline: eu,
                      ifBreak: ei,
                      indent: ea,
                      join: es,
                      line: eo,
                      softline: el
                    },
                    utils: { getDocParts: ep, replaceTextEndOfLine: ec }
                  } = eO(),
                  { getPreferredQuote: ed, isNonEmptyArray: eD } = e3(),
                  { locStart: ef, locEnd: eg } = rx(),
                  eh = rb(),
                  {
                    getNextNode: eE,
                    getPreviousNode: eC,
                    hasPrettierIgnore: eF,
                    isLastNodeOfSiblings: eA,
                    isNextNodeOfSomeType: ev,
                    isNodeOfSomeType: ex,
                    isParentOfSomeType: eb,
                    isPreviousNodeOfSomeType: eS,
                    isVoid: eT,
                    isWhitespaceNode: eB
                  } = rT();
                function d(e, O, ei) {
                  let ep = e.getValue();
                  if (!ep) return '';
                  if (eF(e)) return O.originalText.slice(ef(ep), eg(ep));
                  let eD = O.singleQuote ? "'" : '"';
                  switch (ep.type) {
                    case 'Block':
                    case 'Program':
                    case 'Template':
                      return er(e.map(ei, 'body'));
                    case 'ElementNode': {
                      let et = er(S(e, ei)),
                        en = 'ignore' === O.htmlWhitespaceSensitivity && ev(e, ['ElementNode']) ? el : '';
                      if (eT(ep)) return [et, en];
                      let es = ['</', ep.tag, '>'];
                      return 0 === ep.children.length
                        ? [et, ea(es), en]
                        : 'ignore' === O.htmlWhitespaceSensitivity
                        ? [et, ea(b(e, O, ei)), eu, ea(es), en]
                        : [et, ea(er(b(e, O, ei))), ea(es), en];
                    }
                    case 'BlockStatement': {
                      let et = e.getParentNode(1);
                      return et &&
                        et.inverse &&
                        1 === et.inverse.body.length &&
                        et.inverse.body[0] === ep &&
                        et.inverse.body[0].path.parts[0] === et.path.parts[0]
                        ? [ie(e, ei, et.inverse.body[0].path.parts[0]), de(e, ei, O), ue(e, ei, O)]
                        : [j(e, ei), er([de(e, ei, O), ue(e, ei, O), ee(e, ei, O)])];
                    }
                    case 'ElementModifierStatement':
                      return er(['{{', Re(e, ei), '}}']);
                    case 'MustacheStatement':
                      return er([k(ep), Re(e, ei), M(ep)]);
                    case 'SubExpression':
                      return er(['(', ke(e, ei), el, ')']);
                    case 'AttrNode': {
                      let e = 'TextNode' === ep.value.type;
                      if (e && '' === ep.value.chars && ef(ep.value) === eg(ep.value)) return ep.name;
                      let O = e
                          ? ed(ep.value.chars, eD).quote
                          : 'ConcatStatement' === ep.value.type
                          ? ed(
                              ep.value.parts
                                .filter((e) => 'TextNode' === e.type)
                                .map((e) => e.chars)
                                .join(''),
                              eD
                            ).quote
                          : '',
                        et = ei('value');
                      return [ep.name, '=', O, 'class' === ep.name && O ? er(ea(et)) : et, O];
                    }
                    case 'ConcatStatement':
                      return e.map(ei, 'parts');
                    case 'Hash':
                      return es(eo, e.map(ei, 'pairs'));
                    case 'HashPair':
                      return [ep.key, '=', ei('value')];
                    case 'TextNode': {
                      let er = ep.chars.replace(/{{/g, '\\{{'),
                        eu = U(e);
                      if (eu) {
                        if ('class' === eu) {
                          let O = er.trim().split(/\s+/).join(' '),
                            et = !1,
                            en = !1;
                          return (
                            eb(e, ['ConcatStatement']) &&
                              (eS(e, ['MustacheStatement']) && /^\s/.test(er) && (et = !0),
                              ev(e, ['MustacheStatement']) && /\s$/.test(er) && '' !== O && (en = !0)),
                            [et ? eo : '', O, en ? eo : '']
                          );
                        }
                        return ec(er);
                      }
                      let ei = /^[\t\n\f\r ]*$/.test(er),
                        ea = !eC(e),
                        es = !eE(e);
                      if ('ignore' !== O.htmlWhitespaceSensitivity) {
                        let O = /^[\t\n\f\r ]*/,
                          eu = /[\t\n\f\r ]*$/,
                          el = es && eb(e, ['Template']),
                          ep = ea && eb(e, ['Template']);
                        if (ei) {
                          if (ep || el) return '';
                          let O = [eo],
                            en = Z(er);
                          return en && (O = ge(en)), eA(e) && (O = O.map((e) => et(e))), O;
                        }
                        let [ec] = er.match(O),
                          [ed] = er.match(eu),
                          eD = [];
                        if (ec) {
                          eD = [eo];
                          let e = Z(ec);
                          e && (eD = ge(e)), (er = er.replace(O, ''));
                        }
                        let ef = [];
                        if (ed) {
                          if (!el) {
                            ef = [eo];
                            let O = Z(ed);
                            O && (ef = ge(O)), eA(e) && (ef = ef.map((e) => et(e)));
                          }
                          er = er.replace(eu, '');
                        }
                        return [...eD, en(Fe(er)), ...ef];
                      }
                      let el = Z(er),
                        ed = se(er),
                        eD = fe(er);
                      if ((ea || es) && ei && eb(e, ['Block', 'ElementNode', 'Template'])) return '';
                      ei && el
                        ? ((ed = Math.min(el, 2)), (eD = 0))
                        : (ev(e, ['BlockStatement', 'ElementNode']) && (eD = Math.max(eD, 1)),
                          eS(e, ['BlockStatement', 'ElementNode']) && (ed = Math.max(ed, 1)));
                      let ef = '',
                        eg = '';
                      return (
                        0 === eD && ev(e, ['MustacheStatement']) && (eg = ' '),
                        0 === ed && eS(e, ['MustacheStatement']) && (ef = ' '),
                        ea && ((ed = 0), (ef = '')),
                        es && ((eD = 0), (eg = '')),
                        (er = er.replace(/^[\t\n\f\r ]+/g, ef).replace(/[\t\n\f\r ]+$/, eg)),
                        [...ge(ed), en(Fe(er)), ...ge(eD)]
                      );
                    }
                    case 'MustacheCommentStatement': {
                      let e = ef(ep),
                        et = eg(ep),
                        en = '~' === O.originalText.charAt(e + 2),
                        er = '~' === O.originalText.charAt(et - 3),
                        eu = ep.value.includes('}}') ? '--' : '';
                      return ['{{', en ? '~' : '', '!', eu, ep.value, eu, er ? '~' : '', '}}'];
                    }
                    case 'PathExpression':
                      return ep.original;
                    case 'BooleanLiteral':
                    case 'NumberLiteral':
                      return String(ep.value);
                    case 'CommentStatement':
                      return ['<!--', ep.value, '-->'];
                    case 'StringLiteral':
                      if (we(e)) {
                        let e = O.singleQuote ? '"' : "'";
                        return he(ep.value, e);
                      }
                      return he(ep.value, eD);
                    case 'UndefinedLiteral':
                      return 'undefined';
                    case 'NullLiteral':
                      return 'null';
                    default:
                      throw Error('unknown glimmer type: ' + JSON.stringify(ep.type));
                  }
                }
                function v(e, O) {
                  return ef(e) - ef(O);
                }
                function S(e, O) {
                  let et = e.getValue(),
                    en = ['attributes', 'modifiers', 'comments'].filter((e) => eD(et[e])),
                    er = en.flatMap((e) => et[e]).sort(v);
                  for (let et of en)
                    e.each((e) => {
                      let et = er.indexOf(e.getValue());
                      er.splice(et, 1, [eo, O()]);
                    }, et);
                  return eD(et.blockParams) && er.push(eo, oe(et)), ['<', et.tag, ea(er), B(et)];
                }
                function b(e, O, et) {
                  let en = e.getValue().children.every((e) => eB(e));
                  return 'ignore' === O.htmlWhitespaceSensitivity && en
                    ? ''
                    : e.map((e, en) => {
                        let er = et();
                        return 0 === en && 'ignore' === O.htmlWhitespaceSensitivity ? [el, er] : er;
                      }, 'children');
                }
                function B(e) {
                  return eT(e) ? ei([el, '/>'], [' />', el]) : ei([el, '>'], '>');
                }
                function k(e) {
                  return [!1 === e.escaped ? '{{{' : '{{', e.strip && e.strip.open ? '~' : ''];
                }
                function M(e) {
                  let O = !1 === e.escaped ? '}}}' : '}}';
                  return [e.strip && e.strip.close ? '~' : '', O];
                }
                function R(e) {
                  return [k(e), e.openStrip.open ? '~' : '', '#'];
                }
                function q(e) {
                  let O = M(e);
                  return [e.openStrip.close ? '~' : '', O];
                }
                function J(e) {
                  return [k(e), e.closeStrip.open ? '~' : '', '/'];
                }
                function L(e) {
                  let O = M(e);
                  return [e.closeStrip.close ? '~' : '', O];
                }
                function Q(e) {
                  return [k(e), e.inverseStrip.open ? '~' : ''];
                }
                function V(e) {
                  let O = M(e);
                  return [e.inverseStrip.close ? '~' : '', O];
                }
                function j(e, O) {
                  let et = e.getValue(),
                    en = [],
                    eu = Pe(e, O);
                  return (
                    eu && en.push(er(eu)),
                    eD(et.program.blockParams) && en.push(oe(et.program)),
                    er([R(et), O('path'), en.length > 0 ? ea([eo, es(eo, en)]) : '', el, q(et)])
                  );
                }
                function Y(e, O) {
                  return ['ignore' === O.htmlWhitespaceSensitivity ? eu : '', Q(e), 'else', V(e)];
                }
                function ie(e, O, et) {
                  let en = e.getValue(),
                    eu = e.getParentNode(1);
                  return er([
                    Q(eu),
                    ['else', ' ', et],
                    ea([eo, er(Pe(e, O)), ...(eD(en.program.blockParams) ? [eo, oe(en.program)] : [])]),
                    el,
                    V(eu)
                  ]);
                }
                function ee(e, O, et) {
                  let en = e.getValue();
                  return 'ignore' === et.htmlWhitespaceSensitivity
                    ? [ce(en) ? el : eu, J(en), O('path'), L(en)]
                    : [J(en), O('path'), L(en)];
                }
                function ce(e) {
                  return ex(e, ['BlockStatement']) && e.program.body.every((e) => eB(e));
                }
                function W(e) {
                  return (
                    K(e) &&
                    1 === e.inverse.body.length &&
                    ex(e.inverse.body[0], ['BlockStatement']) &&
                    e.inverse.body[0].path.parts[0] === e.path.parts[0]
                  );
                }
                function K(e) {
                  return ex(e, ['BlockStatement']) && e.inverse;
                }
                function de(e, O, et) {
                  if (ce(e.getValue())) return '';
                  let en = O('program');
                  return 'ignore' === et.htmlWhitespaceSensitivity ? ea([eu, en]) : ea(en);
                }
                function ue(e, O, et) {
                  let en = e.getValue(),
                    er = O('inverse'),
                    ei = 'ignore' === et.htmlWhitespaceSensitivity ? [eu, er] : er;
                  return W(en) ? ei : K(en) ? [Y(en, et), ea(ei)] : '';
                }
                function Fe(e) {
                  return ep(es(eo, z(e)));
                }
                function z(e) {
                  return e.split(/[\t\n\f\r ]+/);
                }
                function U(e) {
                  for (let O = 0; O < 2; O++) {
                    let et = e.getParentNode(O);
                    if (et && 'AttrNode' === et.type) return et.name.toLowerCase();
                  }
                }
                function Z(e) {
                  return (
                    (e = 'string' == typeof e ? e : '').split(`
`).length - 1
                  );
                }
                function se(e) {
                  return Z(((e = 'string' == typeof e ? e : '').match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || '');
                }
                function fe(e) {
                  return Z(((e = 'string' == typeof e ? e : '').match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || '');
                }
                function ge() {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  return Array.from({ length: Math.min(e, 2) }).fill(eu);
                }
                function he(e, O) {
                  let { quote: et, regex: en } = ed(e, O);
                  return [et, e.replace(en, `\\${et}`), et];
                }
                function we(e) {
                  let O = 0,
                    et = e.getParentNode(O);
                  for (; et && ex(et, ['SubExpression']); ) O++, (et = e.getParentNode(O));
                  return !!(
                    et &&
                    ex(e.getParentNode(O + 1), ['ConcatStatement']) &&
                    ex(e.getParentNode(O + 2), ['AttrNode'])
                  );
                }
                function ke(e, O) {
                  let et = O('path'),
                    en = Pe(e, O);
                  return en ? ea([et, eo, er(en)]) : et;
                }
                function Re(e, O) {
                  let et = O('path'),
                    en = Pe(e, O);
                  return en ? [ea([et, eo, en]), el] : et;
                }
                function Pe(e, O) {
                  let et = e.getValue(),
                    en = [];
                  if (et.params.length > 0) {
                    let et = e.map(O, 'params');
                    en.push(...et);
                  }
                  if (et.hash && et.hash.pairs.length > 0) {
                    let e = O('hash');
                    en.push(e);
                  }
                  return 0 === en.length ? '' : es(eo, en);
                }
                function oe(e) {
                  return ['as |', e.blockParams.join(' '), '|'];
                }
                O.exports = { print: d, massageAstNode: eh };
              }
            }),
            rN = te({
              'src/language-handlebars/parsers.js'() {
                ey();
              }
            }),
            rw = te({
              'node_modules/linguist-languages/data/Handlebars.json'(e, O) {
                O.exports = {
                  name: 'Handlebars',
                  type: 'markup',
                  color: '#f7931e',
                  aliases: ['hbs', 'htmlbars'],
                  extensions: ['.handlebars', '.hbs'],
                  tmScope: 'text.html.handlebars',
                  aceMode: 'handlebars',
                  languageId: 155
                };
              }
            }),
            rP = te({
              'src/language-handlebars/index.js'(e, O) {
                ey();
                var et = t3(),
                  en = rB(),
                  er = rN(),
                  eu = [et(rw(), () => ({ since: '2.3.0', parsers: ['glimmer'], vscodeLanguageIds: ['handlebars'] }))];
                O.exports = { languages: eu, printers: { glimmer: en }, parsers: er };
              }
            }),
            rk = te({
              'src/language-graphql/pragma.js'(e, O) {
                function t(e) {
                  return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(e);
                }
                function s(e) {
                  return (
                    `# @format

` + e
                  );
                }
                ey(), (O.exports = { hasPragma: t, insertPragma: s });
              }
            }),
            rj = te({
              'src/language-graphql/loc.js'(e, O) {
                function t(e) {
                  return 'number' == typeof e.start ? e.start : e.loc && e.loc.start;
                }
                function s(e) {
                  return 'number' == typeof e.end ? e.end : e.loc && e.loc.end;
                }
                ey(), (O.exports = { locStart: t, locEnd: s });
              }
            }),
            rI = te({
              'src/language-graphql/printer-graphql.js'(e, O) {
                ey();
                var {
                    builders: { join: et, hardline: en, line: er, softline: eu, group: ei, indent: ea, ifBreak: es }
                  } = eO(),
                  { isNextLineEmpty: eo, isNonEmptyArray: el } = e3(),
                  { insertPragma: ep } = rk(),
                  { locStart: ec, locEnd: ed } = rj();
                function f(e, O, ep) {
                  let eD = e.getValue();
                  if (!eD) return '';
                  if ('string' == typeof eD) return eD;
                  switch (eD.kind) {
                    case 'Document': {
                      let et = [];
                      return (
                        e.each((e, er, eu) => {
                          et.push(ep()),
                            er !== eu.length - 1 && (et.push(en), eo(O.originalText, e.getValue(), ed) && et.push(en));
                        }, 'definitions'),
                        [...et, en]
                      );
                    }
                    case 'OperationDefinition': {
                      let en = '{' !== O.originalText[ec(eD)],
                        er = !!eD.name;
                      return [
                        en ? eD.operation : '',
                        en && er ? [' ', ep('name')] : '',
                        en && !er && el(eD.variableDefinitions) ? ' ' : '',
                        el(eD.variableDefinitions)
                          ? ei(['(', ea([eu, et([es('', ', '), eu], e.map(ep, 'variableDefinitions'))]), eu, ')'])
                          : '',
                        F(e, ep, eD),
                        eD.selectionSet && (en || er) ? ' ' : '',
                        ep('selectionSet')
                      ];
                    }
                    case 'FragmentDefinition':
                      return [
                        'fragment ',
                        ep('name'),
                        el(eD.variableDefinitions)
                          ? ei(['(', ea([eu, et([es('', ', '), eu], e.map(ep, 'variableDefinitions'))]), eu, ')'])
                          : '',
                        ' on ',
                        ep('typeCondition'),
                        F(e, ep, eD),
                        ' ',
                        ep('selectionSet')
                      ];
                    case 'SelectionSet':
                      return ['{', ea([en, et(en, _(e, O, ep, 'selections'))]), en, '}'];
                    case 'Field':
                      return ei([
                        eD.alias ? [ep('alias'), ': '] : '',
                        ep('name'),
                        eD.arguments.length > 0
                          ? ei(['(', ea([eu, et([es('', ', '), eu], _(e, O, ep, 'arguments'))]), eu, ')'])
                          : '',
                        F(e, ep, eD),
                        eD.selectionSet ? ' ' : '',
                        ep('selectionSet')
                      ]);
                    case 'Name':
                    case 'IntValue':
                    case 'FloatValue':
                    case 'EnumValue':
                      return eD.value;
                    case 'StringValue':
                      if (eD.block) {
                        let e = eD.value.replace(/"""/g, '\\$&').split(`
`);
                        return (
                          1 === e.length && (e[0] = e[0].trim()),
                          e.every((e) => '' === e) && (e.length = 0),
                          et(en, ['"""', ...e, '"""'])
                        );
                      }
                      return ['"', eD.value.replace(/["\\]/g, '\\$&').replace(/\n/g, '\\n'), '"'];
                    case 'BooleanValue':
                      return eD.value ? 'true' : 'false';
                    case 'NullValue':
                      return 'null';
                    case 'Variable':
                      return ['$', ep('name')];
                    case 'ListValue':
                      return ei(['[', ea([eu, et([es('', ', '), eu], e.map(ep, 'values'))]), eu, ']']);
                    case 'ObjectValue':
                      return ei([
                        '{',
                        O.bracketSpacing && eD.fields.length > 0 ? ' ' : '',
                        ea([eu, et([es('', ', '), eu], e.map(ep, 'fields'))]),
                        eu,
                        es('', O.bracketSpacing && eD.fields.length > 0 ? ' ' : ''),
                        '}'
                      ]);
                    case 'ObjectField':
                    case 'Argument':
                      return [ep('name'), ': ', ep('value')];
                    case 'Directive':
                      return [
                        '@',
                        ep('name'),
                        eD.arguments.length > 0
                          ? ei(['(', ea([eu, et([es('', ', '), eu], _(e, O, ep, 'arguments'))]), eu, ')'])
                          : ''
                      ];
                    case 'NamedType':
                      return ep('name');
                    case 'VariableDefinition':
                      return [
                        ep('variable'),
                        ': ',
                        ep('type'),
                        eD.defaultValue ? [' = ', ep('defaultValue')] : '',
                        F(e, ep, eD)
                      ];
                    case 'ObjectTypeExtension':
                    case 'ObjectTypeDefinition':
                      return [
                        ep('description'),
                        eD.description ? en : '',
                        'ObjectTypeExtension' === eD.kind ? 'extend ' : '',
                        'type ',
                        ep('name'),
                        eD.interfaces.length > 0 ? [' implements ', ...N(e, O, ep)] : '',
                        F(e, ep, eD),
                        eD.fields.length > 0 ? [' {', ea([en, et(en, _(e, O, ep, 'fields'))]), en, '}'] : ''
                      ];
                    case 'FieldDefinition':
                      return [
                        ep('description'),
                        eD.description ? en : '',
                        ep('name'),
                        eD.arguments.length > 0
                          ? ei(['(', ea([eu, et([es('', ', '), eu], _(e, O, ep, 'arguments'))]), eu, ')'])
                          : '',
                        ': ',
                        ep('type'),
                        F(e, ep, eD)
                      ];
                    case 'DirectiveDefinition':
                      return [
                        ep('description'),
                        eD.description ? en : '',
                        'directive ',
                        '@',
                        ep('name'),
                        eD.arguments.length > 0
                          ? ei(['(', ea([eu, et([es('', ', '), eu], _(e, O, ep, 'arguments'))]), eu, ')'])
                          : '',
                        eD.repeatable ? ' repeatable' : '',
                        ' on ',
                        et(' | ', e.map(ep, 'locations'))
                      ];
                    case 'EnumTypeExtension':
                    case 'EnumTypeDefinition':
                      return [
                        ep('description'),
                        eD.description ? en : '',
                        'EnumTypeExtension' === eD.kind ? 'extend ' : '',
                        'enum ',
                        ep('name'),
                        F(e, ep, eD),
                        eD.values.length > 0 ? [' {', ea([en, et(en, _(e, O, ep, 'values'))]), en, '}'] : ''
                      ];
                    case 'EnumValueDefinition':
                      return [ep('description'), eD.description ? en : '', ep('name'), F(e, ep, eD)];
                    case 'InputValueDefinition':
                      return [
                        ep('description'),
                        eD.description ? (eD.description.block ? en : er) : '',
                        ep('name'),
                        ': ',
                        ep('type'),
                        eD.defaultValue ? [' = ', ep('defaultValue')] : '',
                        F(e, ep, eD)
                      ];
                    case 'InputObjectTypeExtension':
                    case 'InputObjectTypeDefinition':
                      return [
                        ep('description'),
                        eD.description ? en : '',
                        'InputObjectTypeExtension' === eD.kind ? 'extend ' : '',
                        'input ',
                        ep('name'),
                        F(e, ep, eD),
                        eD.fields.length > 0 ? [' {', ea([en, et(en, _(e, O, ep, 'fields'))]), en, '}'] : ''
                      ];
                    case 'SchemaExtension':
                      return [
                        'extend schema',
                        F(e, ep, eD),
                        ...(eD.operationTypes.length > 0
                          ? [' {', ea([en, et(en, _(e, O, ep, 'operationTypes'))]), en, '}']
                          : [])
                      ];
                    case 'SchemaDefinition':
                      return [
                        ep('description'),
                        eD.description ? en : '',
                        'schema',
                        F(e, ep, eD),
                        ' {',
                        eD.operationTypes.length > 0 ? ea([en, et(en, _(e, O, ep, 'operationTypes'))]) : '',
                        en,
                        '}'
                      ];
                    case 'OperationTypeDefinition':
                      return [ep('operation'), ': ', ep('type')];
                    case 'InterfaceTypeExtension':
                    case 'InterfaceTypeDefinition':
                      return [
                        ep('description'),
                        eD.description ? en : '',
                        'InterfaceTypeExtension' === eD.kind ? 'extend ' : '',
                        'interface ',
                        ep('name'),
                        eD.interfaces.length > 0 ? [' implements ', ...N(e, O, ep)] : '',
                        F(e, ep, eD),
                        eD.fields.length > 0 ? [' {', ea([en, et(en, _(e, O, ep, 'fields'))]), en, '}'] : ''
                      ];
                    case 'FragmentSpread':
                      return ['...', ep('name'), F(e, ep, eD)];
                    case 'InlineFragment':
                      return [
                        '...',
                        eD.typeCondition ? [' on ', ep('typeCondition')] : '',
                        F(e, ep, eD),
                        ' ',
                        ep('selectionSet')
                      ];
                    case 'UnionTypeExtension':
                    case 'UnionTypeDefinition':
                      return ei([
                        ep('description'),
                        eD.description ? en : '',
                        ei([
                          'UnionTypeExtension' === eD.kind ? 'extend ' : '',
                          'union ',
                          ep('name'),
                          F(e, ep, eD),
                          eD.types.length > 0
                            ? [' =', es('', ' '), ea([es([er, '  ']), et([er, '| '], e.map(ep, 'types'))])]
                            : ''
                        ])
                      ]);
                    case 'ScalarTypeExtension':
                    case 'ScalarTypeDefinition':
                      return [
                        ep('description'),
                        eD.description ? en : '',
                        'ScalarTypeExtension' === eD.kind ? 'extend ' : '',
                        'scalar ',
                        ep('name'),
                        F(e, ep, eD)
                      ];
                    case 'NonNullType':
                      return [ep('type'), '!'];
                    case 'ListType':
                      return ['[', ep('type'), ']'];
                    default:
                      throw Error('unknown graphql type: ' + JSON.stringify(eD.kind));
                  }
                }
                function F(e, O, en) {
                  if (0 === en.directives.length) return '';
                  let es = et(er, e.map(O, 'directives'));
                  return 'FragmentDefinition' === en.kind || 'OperationDefinition' === en.kind
                    ? ei([er, es])
                    : [' ', ei(ea([eu, es]))];
                }
                function _(e, O, et, er) {
                  return e.map((e, er, eu) => {
                    let ei = et();
                    return er < eu.length - 1 && eo(O.originalText, e.getValue(), ed) ? [ei, en] : ei;
                  }, er);
                }
                function w(e) {
                  return e.kind && 'Comment' !== e.kind;
                }
                function E(e) {
                  let O = e.getValue();
                  if ('Comment' === O.kind) return '#' + O.value.trimEnd();
                  throw Error('Not a comment: ' + JSON.stringify(O));
                }
                function N(e, O, et) {
                  let en = e.getNode(),
                    eu = [],
                    { interfaces: ei } = en,
                    ea = e.map((e) => et(e), 'interfaces');
                  for (let e = 0; e < ei.length; e++) {
                    let et = ei[e];
                    eu.push(ea[e]);
                    let en = ei[e + 1];
                    if (en) {
                      let e = O.originalText.slice(et.loc.end, en.loc.start),
                        ei = e.includes('#'),
                        ea = e.replace(/#.*/g, '').trim();
                      eu.push(',' === ea ? ',' : ' &', ei ? er : ' ');
                    }
                  }
                  return eu;
                }
                function x(e, O) {
                  'StringValue' === e.kind &&
                    e.block &&
                    !e.value.includes(`
`) &&
                    (O.value = O.value.trim());
                }
                function I(e) {
                  var O;
                  let et = e.getValue();
                  return null == et || null === (O = et.comments) || void 0 === O
                    ? void 0
                    : O.some((e) => 'prettier-ignore' === e.value.trim());
                }
                (x.ignoredProperties = new Set(['loc', 'comments'])),
                  (O.exports = {
                    print: f,
                    massageAstNode: x,
                    hasPrettierIgnore: I,
                    insertPragma: ep,
                    printComment: E,
                    canAttachComment: w
                  });
              }
            }),
            rO = te({
              'src/language-graphql/options.js'(e, O) {
                ey();
                var et = n2();
                O.exports = { bracketSpacing: et.bracketSpacing };
              }
            }),
            rL = te({
              'src/language-graphql/parsers.js'() {
                ey();
              }
            }),
            r_ = te({
              'node_modules/linguist-languages/data/GraphQL.json'(e, O) {
                O.exports = {
                  name: 'GraphQL',
                  type: 'data',
                  color: '#e10098',
                  extensions: ['.graphql', '.gql', '.graphqls'],
                  tmScope: 'source.graphql',
                  aceMode: 'text',
                  languageId: 139
                };
              }
            }),
            rM = te({
              'src/language-graphql/index.js'(e, O) {
                ey();
                var et = t3(),
                  en = rI(),
                  er = rO(),
                  eu = rL(),
                  ei = [et(r_(), () => ({ since: '1.5.0', parsers: ['graphql'], vscodeLanguageIds: ['graphql'] }))];
                O.exports = { languages: ei, options: er, printers: { graphql: en }, parsers: eu };
              }
            }),
            r$ = te({
              'node_modules/collapse-white-space/index.js'(e, O) {
                function t(e) {
                  return String(e).replace(/\s+/g, ' ');
                }
                ey(), (O.exports = t);
              }
            }),
            rR = te({
              'src/language-markdown/loc.js'(e, O) {
                function t(e) {
                  return e.position.start.offset;
                }
                function s(e) {
                  return e.position.end.offset;
                }
                ey(), (O.exports = { locStart: t, locEnd: s });
              }
            }),
            rV = te({
              'src/language-markdown/constants.evaluate.js'(e, O) {
                O.exports = {
                  cjkPattern:
                    '(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67]|\ud83c[\ude00\ude50-\ude51]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d])(?:[\\ufe00-\\ufe0f]|\udb40[\udd00-\uddef])?',
                  kPattern:
                    '[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]',
                  punctuationPattern:
                    '[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\ud800[\udd00-\udd02\udf9f\udfd0]|\ud801[\udd6f]|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb-\udcbc\udcbe-\udcc1\udd40-\udd43\udd74-\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\udde2\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70-\udc71\udef7-\udef8\udfff]|\ud809[\udc70-\udc74]|\ud81a[\ude6e-\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a\udfe2]|\ud82f[\udc9f]|\ud836[\ude87-\ude8b]|\ud83a[\udd5e-\udd5f]'
                };
              }
            }),
            rW = te({
              'src/language-markdown/utils.js'(e, O) {
                ey();
                var { getLast: et } = e3(),
                  { locStart: en, locEnd: er } = rR(),
                  { cjkPattern: eu, kPattern: ei, punctuationPattern: ea } = rV(),
                  es = [
                    'liquidNode',
                    'inlineCode',
                    'emphasis',
                    'esComment',
                    'strong',
                    'delete',
                    'wikiLink',
                    'link',
                    'linkReference',
                    'image',
                    'imageReference',
                    'footnote',
                    'footnoteReference',
                    'sentence',
                    'whitespace',
                    'word',
                    'break',
                    'inlineMath'
                  ],
                  eo = [...es, 'tableCell', 'paragraph', 'heading'],
                  el = new RegExp(ei),
                  ep = new RegExp(ea);
                function g(e, O) {
                  let en = 'non-cjk',
                    er = 'cj-letter',
                    ei = 'cjk-punctuation',
                    ea = [],
                    es = (
                      'preserve' === O.proseWrap
                        ? e
                        : e.replace(
                            RegExp(
                              `(${eu})
(${eu})`,
                              'g'
                            ),
                            '$1$2'
                          )
                    ).split(/([\t\n ]+)/);
                  for (let [e, O] of es.entries()) {
                    if (e % 2 == 1) {
                      ea.push({
                        type: 'whitespace',
                        value: /\n/.test(O)
                          ? `
`
                          : ' '
                      });
                      continue;
                    }
                    if ((0 === e || e === es.length - 1) && '' === O) continue;
                    let eo = O.split(RegExp(`(${eu})`));
                    for (let [e, O] of eo.entries())
                      if (!((0 === e || e === eo.length - 1) && '' === O)) {
                        if (e % 2 == 0) {
                          '' !== O &&
                            m({
                              type: 'word',
                              value: O,
                              kind: en,
                              hasLeadingPunctuation: ep.test(O[0]),
                              hasTrailingPunctuation: ep.test(et(O))
                            });
                          continue;
                        }
                        m(
                          ep.test(O)
                            ? {
                                type: 'word',
                                value: O,
                                kind: ei,
                                hasLeadingPunctuation: !0,
                                hasTrailingPunctuation: !0
                              }
                            : {
                                type: 'word',
                                value: O,
                                kind: el.test(O) ? 'k-letter' : er,
                                hasLeadingPunctuation: !1,
                                hasTrailingPunctuation: !1
                              }
                        );
                      }
                  }
                  return ea;
                  function m(e) {
                    let O = et(ea);
                    function d(et, en) {
                      return (O.kind === et && e.kind === en) || (O.kind === en && e.kind === et);
                    }
                    !O ||
                      'word' !== O.type ||
                      ((O.kind !== en || e.kind !== er || O.hasTrailingPunctuation) &&
                      (O.kind !== er || e.kind !== en || e.hasLeadingPunctuation)
                        ? d(en, ei) ||
                          [O.value, e.value].some((e) => /\u3000/.test(e)) ||
                          ea.push({ type: 'whitespace', value: '' })
                        : ea.push({ type: 'whitespace', value: ' ' })),
                      ea.push(e);
                  }
                }
                function c(e, O) {
                  let [, et, en, er] = O.slice(e.position.start.offset, e.position.end.offset).match(
                    /^\s*(\d+)(\.|\))(\s*)/
                  );
                  return { numberText: et, marker: en, leadingSpaces: er };
                }
                function f(e, O) {
                  if (!e.ordered || e.children.length < 2) return !1;
                  let et = Number(c(e.children[0], O.originalText).numberText),
                    en = Number(c(e.children[1], O.originalText).numberText);
                  if (0 === et && e.children.length > 2) {
                    let et = Number(c(e.children[2], O.originalText).numberText);
                    return 1 === en && 1 === et;
                  }
                  return 1 === en;
                }
                function F(e, O) {
                  let { value: et } = e;
                  return e.position.end.offset === O.length &&
                    et.endsWith(`
`) &&
                    O.endsWith(`
`)
                    ? et.slice(0, -1)
                    : et;
                }
                function _(e, O) {
                  return (function x(e, et, en) {
                    let er = Object.assign({}, O(e, et, en));
                    return er.children && (er.children = er.children.map((e, O) => x(e, O, [er, ...en]))), er;
                  })(e, null, []);
                }
                function w(e) {
                  if ((null == e ? void 0 : e.type) !== 'link' || 1 !== e.children.length) return !1;
                  let [O] = e.children;
                  return en(e) === en(O) && er(e) === er(O);
                }
                O.exports = {
                  mapAst: _,
                  splitText: g,
                  punctuationPattern: ea,
                  getFencedCodeBlockValue: F,
                  getOrderedListItemInfo: c,
                  hasGitDiffFriendlyOrderedList: f,
                  INLINE_NODE_TYPES: es,
                  INLINE_NODE_WRAPPER_TYPES: eo,
                  isAutolink: w
                };
              }
            }),
            rq = te({
              'src/language-markdown/embed.js'(e, O) {
                ey();
                var { inferParserByLanguage: et, getMaxContinuousCount: en } = e3(),
                  {
                    builders: { hardline: er, markAsRoot: eu },
                    utils: { replaceEndOfLine: ei }
                  } = eO(),
                  ea = ru(),
                  { getFencedCodeBlockValue: es } = rW();
                function p(e, O, eo, el) {
                  let ep = e.getValue();
                  if ('code' === ep.type && null !== ep.lang) {
                    let e = et(ep.lang, el);
                    if (e) {
                      let O = el.__inJsTemplate ? '~' : '`',
                        et = O.repeat(Math.max(3, en(ep.value, O) + 1)),
                        ea = { parser: e };
                      'tsx' === ep.lang && (ea.filepath = 'dummy.tsx');
                      let ec = eo(es(ep, el.originalText), ea, { stripTrailingHardline: !0 });
                      return eu([et, ep.lang, ep.meta ? ' ' + ep.meta : '', er, ei(ec), er, et]);
                    }
                  }
                  switch (ep.type) {
                    case 'front-matter':
                      return ea(ep, eo);
                    case 'importExport':
                      return [eo(ep.value, { parser: 'babel' }, { stripTrailingHardline: !0 }), er];
                    case 'jsx':
                      return eo(
                        `<$>${ep.value}</$>`,
                        { parser: '__js_expression', rootMarker: 'mdx' },
                        { stripTrailingHardline: !0 }
                      );
                  }
                  return null;
                }
                O.exports = p;
              }
            }),
            rJ = te({
              'src/language-markdown/pragma.js'(e, O) {
                ey();
                var et = ra(),
                  en = ['format', 'prettier'];
                function a(e) {
                  let O = `@(${en.join('|')})`,
                    et = RegExp(
                      `<!--\\s*${O}\\s*-->|{\\s*\\/\\*\\s*${O}\\s*\\*\\/\\s*}|<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${O}[^\\S
]*($|
)[\\s\\S]*
.*-->`,
                      'm'
                    ),
                    er = e.match(et);
                  return (null == er ? void 0 : er.index) === 0;
                }
                O.exports = {
                  startWithPragma: a,
                  hasPragma: (e) => a(et(e).content.trimStart()),
                  insertPragma: (e) => {
                    let O = et(e),
                      er = `<!-- @${en[0]} -->`;
                    return O.frontMatter
                      ? `${O.frontMatter.raw}

${er}

${O.content}`
                      : `${er}

${O.content}`;
                  }
                };
              }
            }),
            rU = te({
              'src/language-markdown/print-preprocess.js'(e, O) {
                ey();
                var et = ev(),
                  { getOrderedListItemInfo: en, mapAst: er, splitText: eu } = rW(),
                  ei = /^.$/su;
                function i(e, O) {
                  return (e = h((e = l((e = f((e = _((e = F((e = p((e = c((e = y(e, O)))), O)), O)), O)), O))))));
                }
                function l(e) {
                  return er(e, (e) =>
                    'import' !== e.type && 'export' !== e.type
                      ? e
                      : Object.assign(Object.assign({}, e), {}, { type: 'importExport' })
                  );
                }
                function p(e, O) {
                  return er(e, (e) =>
                    'inlineCode' !== e.type || 'preserve' === O.proseWrap
                      ? e
                      : Object.assign(Object.assign({}, e), {}, { value: e.value.replace(/\s+/g, ' ') })
                  );
                }
                function y(e, O) {
                  return er(e, (e) =>
                    'text' === e.type &&
                    '*' !== e.value &&
                    '_' !== e.value &&
                    ei.test(e.value) &&
                    e.position.end.offset - e.position.start.offset !== e.value.length
                      ? Object.assign(
                          Object.assign({}, e),
                          {},
                          { value: O.originalText.slice(e.position.start.offset, e.position.end.offset) }
                        )
                      : e
                  );
                }
                function h(e) {
                  return g(
                    e,
                    (e, O) => 'importExport' === e.type && 'importExport' === O.type,
                    (e, O) => ({
                      type: 'importExport',
                      value:
                        e.value +
                        `

` +
                        O.value,
                      position: { start: e.position.start, end: O.position.end }
                    })
                  );
                }
                function g(e, O, en) {
                  return er(e, (e) => {
                    if (!e.children) return e;
                    let er = e.children.reduce((e, er) => {
                      let eu = et(e);
                      return eu && O(eu, er) ? e.splice(-1, 1, en(eu, er)) : e.push(er), e;
                    }, []);
                    return Object.assign(Object.assign({}, e), {}, { children: er });
                  });
                }
                function c(e) {
                  return g(
                    e,
                    (e, O) => 'text' === e.type && 'text' === O.type,
                    (e, O) => ({
                      type: 'text',
                      value: e.value + O.value,
                      position: { start: e.position.start, end: O.position.end }
                    })
                  );
                }
                function f(e, O) {
                  return er(e, (e, et, en) => {
                    let [er] = en;
                    if ('text' !== e.type) return e;
                    let { value: ei } = e;
                    return (
                      'paragraph' === er.type &&
                        (0 === et && (ei = ei.trimStart()), et === er.children.length - 1 && (ei = ei.trimEnd())),
                      { type: 'sentence', position: e.position, children: eu(ei, O) }
                    );
                  });
                }
                function F(e, O) {
                  return er(e, (e, et, en) => {
                    if ('code' === e.type) {
                      let et = /^\n?(?: {4,}|\t)/.test(
                        O.originalText.slice(e.position.start.offset, e.position.end.offset)
                      );
                      if (((e.isIndented = et), et))
                        for (let e = 0; e < en.length; e++) {
                          let O = en[e];
                          if (O.hasIndentedCodeblock) break;
                          'list' === O.type && (O.hasIndentedCodeblock = !0);
                        }
                    }
                    return e;
                  });
                }
                function _(e, O) {
                  return er(e, (e, O, et) => {
                    if ('list' === e.type && e.children.length > 0) {
                      for (let O = 0; O < et.length; O++) {
                        let en = et[O];
                        if ('list' === en.type && !en.isAligned) return (e.isAligned = !1), e;
                      }
                      e.isAligned = x(e);
                    }
                    return e;
                  });
                  function N(e) {
                    return 0 === e.children.length ? -1 : e.children[0].position.start.column - 1;
                  }
                  function x(e) {
                    if (!e.ordered) return !0;
                    let [et, er] = e.children;
                    if (en(et, O.originalText).leadingSpaces.length > 1) return !0;
                    let eu = N(et);
                    return (
                      -1 !== eu &&
                      (1 === e.children.length
                        ? eu % O.tabWidth == 0
                        : eu === N(er) && (eu % O.tabWidth == 0 || en(er, O.originalText).leadingSpaces.length > 1))
                    );
                  }
                }
                O.exports = i;
              }
            }),
            rH = te({
              'src/language-markdown/clean.js'(e, O) {
                ey();
                var et = r$(),
                  { isFrontMatterNode: en } = e3(),
                  { startWithPragma: er } = rJ(),
                  eu = new Set(['position', 'raw']);
                function u(e, O, eu) {
                  if (
                    (('front-matter' === e.type ||
                      'code' === e.type ||
                      'yaml' === e.type ||
                      'import' === e.type ||
                      'export' === e.type ||
                      'jsx' === e.type) &&
                      delete O.value,
                    'list' === e.type && delete O.isAligned,
                    ('list' === e.type || 'listItem' === e.type) && (delete O.spread, delete O.loose),
                    'text' === e.type ||
                      ('inlineCode' === e.type && (O.value = e.value.replace(/[\t\n ]+/g, ' ')),
                      'wikiLink' === e.type && (O.value = e.value.trim().replace(/[\t\n]+/g, ' ')),
                      ('definition' === e.type || 'linkReference' === e.type || 'imageReference' === e.type) &&
                        (O.label = et(e.label)),
                      ('definition' === e.type || 'link' === e.type || 'image' === e.type) &&
                        e.title &&
                        (O.title = e.title.replace(/\\(["')])/g, '$1')),
                      eu &&
                        'root' === eu.type &&
                        eu.children.length > 0 &&
                        (eu.children[0] === e || (en(eu.children[0]) && eu.children[1] === e)) &&
                        'html' === e.type &&
                        er(e.value)))
                  )
                    return null;
                }
                (u.ignoredProperties = eu), (O.exports = u);
              }
            }),
            rG = te({
              'src/language-markdown/printer-markdown.js'(e, O) {
                ey();
                var et = r$(),
                  {
                    getLast: en,
                    getMinNotPresentContinuousCount: er,
                    getMaxContinuousCount: eu,
                    getStringWidth: ei,
                    isNonEmptyArray: ea
                  } = e3(),
                  {
                    builders: {
                      breakParent: es,
                      join: eo,
                      line: el,
                      literalline: ep,
                      markAsRoot: ec,
                      hardline: ed,
                      softline: eD,
                      ifBreak: ef,
                      fill: eg,
                      align: eh,
                      indent: eE,
                      group: eC,
                      hardlineWithoutBreakParent: eF
                    },
                    utils: { normalizeDoc: eA, replaceTextEndOfLine: ev },
                    printer: { printDocToString: ex }
                  } = eO(),
                  eb = rq(),
                  { insertPragma: eS } = rJ(),
                  { locStart: eT, locEnd: eB } = rR(),
                  eN = rU(),
                  ew = rH(),
                  {
                    getFencedCodeBlockValue: eP,
                    hasGitDiffFriendlyOrderedList: ek,
                    splitText: ej,
                    punctuationPattern: eI,
                    INLINE_NODE_TYPES: eL,
                    INLINE_NODE_WRAPPER_TYPES: e_,
                    isAutolink: eM
                  } = rW(),
                  e$ = new Set(['importExport']),
                  eR = ['heading', 'tableCell', 'link', 'wikiLink'],
                  eV = new Set(['listItem', 'definition', 'footnoteDefinition']);
                function Q(e, O, et) {
                  let ei = e.getValue();
                  if (ge(e))
                    return ej(O.originalText.slice(ei.position.start.offset, ei.position.end.offset), O).map((et) =>
                      'word' === et.type ? et.value : '' === et.value ? '' : W(e, et.value, O)
                    );
                  switch (ei.type) {
                    case 'front-matter':
                      return O.originalText.slice(ei.position.start.offset, ei.position.end.offset);
                    case 'root':
                      return 0 === ei.children.length ? '' : [eA(de(e, O, et)), e$.has(z(ei).type) ? '' : ed];
                    case 'paragraph':
                      return ue(e, O, et, { postprocessor: eg });
                    case 'sentence':
                      return ue(e, O, et);
                    case 'word': {
                      let O = ei.value
                          .replace(/\*/g, '\\$&')
                          .replace(RegExp(`(^|${eI})(_+)|(_+)(${eI}|$)`, 'g'), (e, O, et, en, er) =>
                            (et ? `${O}${et}` : `${en}${er}`).replace(/_/g, '\\_')
                          ),
                        Ae = (e, O, et) => 'sentence' === e.type && 0 === et,
                        Ee = (e, O, et) => eM(e.children[et - 1]);
                      return (
                        O !== ei.value &&
                          (e.match(void 0, Ae, Ee) ||
                            e.match(void 0, Ae, (e, O, et) => 'emphasis' === e.type && 0 === et, Ee)) &&
                          (O = O.replace(/^(\\?[*_])+/, (e) => e.replace(/\\/g, ''))),
                        O
                      );
                    }
                    case 'whitespace': {
                      let et = e.getParentNode(),
                        en = et.children.indexOf(ei),
                        er = et.children[en + 1],
                        eu = er && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(er.value) ? 'never' : O.proseWrap;
                      return W(e, ei.value, { proseWrap: eu });
                    }
                    case 'emphasis': {
                      let er;
                      if (eM(ei.children[0])) er = O.originalText[ei.position.start.offset];
                      else {
                        let O = e.getParentNode(),
                          et = O.children.indexOf(ei),
                          eu = O.children[et - 1],
                          ea = O.children[et + 1];
                        er =
                          (eu &&
                            'sentence' === eu.type &&
                            eu.children.length > 0 &&
                            'word' === en(eu.children).type &&
                            !en(eu.children).hasTrailingPunctuation) ||
                          (ea &&
                            'sentence' === ea.type &&
                            ea.children.length > 0 &&
                            'word' === ea.children[0].type &&
                            !ea.children[0].hasLeadingPunctuation) ||
                          ce(e, 'emphasis')
                            ? '*'
                            : '_';
                      }
                      return [er, ue(e, O, et), er];
                    }
                    case 'strong':
                      return ['**', ue(e, O, et), '**'];
                    case 'delete':
                      return ['~~', ue(e, O, et), '~~'];
                    case 'inlineCode': {
                      let e = er(ei.value, '`'),
                        O = '`'.repeat(e || 1),
                        et = e && !/^\s/.test(ei.value) ? ' ' : '';
                      return [O, et, ei.value, et, O];
                    }
                    case 'wikiLink':
                      return ['[[', 'preserve' === O.proseWrap ? ei.value : ei.value.replace(/[\t\n]+/g, ' '), ']]'];
                    case 'link':
                      switch (O.originalText[ei.position.start.offset]) {
                        case '<': {
                          let e = 'mailto:';
                          return [
                            '<',
                            ei.url.startsWith(e) &&
                            O.originalText.slice(
                              ei.position.start.offset + 1,
                              ei.position.start.offset + 1 + e.length
                            ) !== e
                              ? ei.url.slice(e.length)
                              : ei.url,
                            '>'
                          ];
                        }
                        case '[':
                          return ['[', ue(e, O, et), '](', he(ei.url, ')'), we(ei.title, O), ')'];
                        default:
                          return O.originalText.slice(ei.position.start.offset, ei.position.end.offset);
                      }
                    case 'image':
                      return ['![', ei.alt || '', '](', he(ei.url, ')'), we(ei.title, O), ')'];
                    case 'blockquote':
                      return ['> ', eh('> ', ue(e, O, et))];
                    case 'heading':
                      return ['#'.repeat(ei.depth) + ' ', ue(e, O, et)];
                    case 'code': {
                      if (ei.isIndented) {
                        let e = ' '.repeat(4);
                        return eh(e, [e, ...ev(ei.value, ed)]);
                      }
                      let e = O.__inJsTemplate ? '~' : '`',
                        et = e.repeat(Math.max(3, eu(ei.value, e) + 1));
                      return [
                        et,
                        ei.lang || '',
                        ei.meta ? ' ' + ei.meta : '',
                        ed,
                        ...ev(eP(ei, O.originalText), ed),
                        ed,
                        et
                      ];
                    }
                    case 'html': {
                      let O = e.getParentNode(),
                        et = 'root' === O.type && en(O.children) === ei ? ei.value.trimEnd() : ei.value,
                        er = /^<!--.*-->$/s.test(et);
                      return ev(et, er ? ed : ec(ep));
                    }
                    case 'list': {
                      let en = Y(ei, e.getParentNode()),
                        er = ek(ei, O);
                      return ue(e, O, et, {
                        processor: (e, eu) => {
                          let ea = re(),
                            es = e.getValue();
                          if (
                            2 === es.children.length &&
                            'html' === es.children[1].type &&
                            es.children[0].position.start.column !== es.children[1].position.start.column
                          )
                            return [ea, V(e, O, et, ea)];
                          return [ea, eh(' '.repeat(ea.length), V(e, O, et, ea))];
                          function re() {
                            let e = ei.ordered
                              ? (0 === eu ? ei.start : er ? 1 : ei.start + eu) + (en % 2 == 0 ? '. ' : ') ')
                              : en % 2 == 0
                              ? '- '
                              : '* ';
                            return ei.isAligned || ei.hasIndentedCodeblock ? j(e, O) : e;
                          }
                        }
                      });
                    }
                    case 'thematicBreak': {
                      let O = ee(e, 'list');
                      return -1 === O ? '---' : Y(e.getParentNode(O), e.getParentNode(O + 1)) % 2 == 0 ? '***' : '---';
                    }
                    case 'linkReference':
                      return [
                        '[',
                        ue(e, O, et),
                        ']',
                        'full' === ei.referenceType ? Ne(ei) : 'collapsed' === ei.referenceType ? '[]' : ''
                      ];
                    case 'imageReference':
                      if ('full' === ei.referenceType) return ['![', ei.alt || '', ']', Ne(ei)];
                      return ['![', ei.alt, ']', 'collapsed' === ei.referenceType ? '[]' : ''];
                    case 'definition': {
                      let e = 'always' === O.proseWrap ? el : ' ';
                      return eC([Ne(ei), ':', eE([e, he(ei.url), null === ei.title ? '' : [e, we(ei.title, O, !1)]])]);
                    }
                    case 'footnote':
                      return ['[^', ue(e, O, et), ']'];
                    case 'footnoteReference':
                      return Pe(ei);
                    case 'footnoteDefinition': {
                      let en = e.getParentNode().children[e.getName() + 1],
                        er =
                          1 === ei.children.length &&
                          'paragraph' === ei.children[0].type &&
                          ('never' === O.proseWrap ||
                            ('preserve' === O.proseWrap &&
                              ei.children[0].position.start.line === ei.children[0].position.end.line));
                      return [
                        Pe(ei),
                        ': ',
                        er
                          ? ue(e, O, et)
                          : eC([
                              eh(
                                ' '.repeat(4),
                                ue(e, O, et, { processor: (e, O) => (0 === O ? eC([eD, et()]) : et()) })
                              ),
                              en && 'footnoteDefinition' === en.type ? eD : ''
                            ])
                      ];
                    }
                    case 'table':
                      return K(e, O, et);
                    case 'tableCell':
                      return ue(e, O, et);
                    case 'break':
                      return /\s/.test(O.originalText[ei.position.start.offset]) ? ['  ', ec(ep)] : ['\\', ed];
                    case 'liquidNode':
                      return ev(ei.value, ed);
                    case 'importExport':
                      return [ei.value, ed];
                    case 'esComment':
                      return ['{/* ', ei.value, ' */}'];
                    case 'jsx':
                      return ei.value;
                    case 'math':
                      return ['$$', ed, ei.value ? [...ev(ei.value, ed), ed] : '', '$$'];
                    case 'inlineMath':
                      return O.originalText.slice(eT(ei), eB(ei));
                    default:
                      throw Error(`Unknown markdown type ${JSON.stringify(ei.type)}`);
                  }
                }
                function V(e, O, et, en) {
                  let er = e.getValue(),
                    eu = null === er.checked ? '' : er.checked ? '[x] ' : '[ ] ';
                  return [
                    eu,
                    ue(e, O, et, {
                      processor: (e, er) => {
                        if (0 === er && 'list' !== e.getValue().type) return eh(' '.repeat(eu.length), et());
                        let ei = ' '.repeat(ke(O.tabWidth - en.length, 0, 3));
                        return [ei, eh(ei, et())];
                      }
                    })
                  ];
                }
                function j(e, O) {
                  let et = X();
                  return e + ' '.repeat(et >= 4 ? 0 : et);
                  function X() {
                    let et = e.length % O.tabWidth;
                    return 0 === et ? 0 : O.tabWidth - et;
                  }
                }
                function Y(e, O) {
                  return ie(e, O, (O) => O.ordered === e.ordered);
                }
                function ie(e, O, et) {
                  let en = -1;
                  for (let er of O.children) if ((er.type === e.type && et(er) ? en++ : (en = -1), er === e)) return en;
                }
                function ee(e, O) {
                  let et = Array.isArray(O) ? O : [O],
                    en = -1,
                    er;
                  for (; (er = e.getParentNode(++en)); ) if (et.includes(er.type)) return en;
                  return -1;
                }
                function ce(e, O) {
                  let et = ee(e, O);
                  return -1 === et ? null : e.getParentNode(et);
                }
                function W(e, O, et) {
                  if (
                    'preserve' === et.proseWrap &&
                    O ===
                      `
`
                  )
                    return ed;
                  let en = 'always' === et.proseWrap && !ce(e, eR);
                  return '' !== O ? (en ? el : ' ') : en ? eD : '';
                }
                function K(e, O, et) {
                  let en = e.getValue(),
                    er = [],
                    eu = e.map(
                      (e) =>
                        e.map((e, en) => {
                          let eu = ex(et(), O).formatted,
                            ea = ei(eu);
                          return (er[en] = Math.max(er[en] || 3, ea)), { text: eu, width: ea };
                        }, 'children'),
                      'children'
                    ),
                    ea = A(!1);
                  if ('never' !== O.proseWrap) return [es, ea];
                  return [es, eC(ef(A(!0), ea))];
                  function A(e) {
                    let O = [re(eu[0], e), G(e)];
                    return (
                      eu.length > 1 &&
                        O.push(
                          eo(
                            eF,
                            eu.slice(1).map((O) => re(O, e))
                          )
                        ),
                      eo(eF, O)
                    );
                  }
                  function G(e) {
                    return `| ${er
                      .map((O, et) => {
                        let er = en.align[et],
                          eu = e ? '-' : '-'.repeat(O - 2);
                        return `${'center' === er || 'left' === er ? ':' : '-'}${eu}${
                          'center' === er || 'right' === er ? ':' : '-'
                        }`;
                      })
                      .join(' | ')} |`;
                  }
                  function re(e, O) {
                    return `| ${e
                      .map((e, et) => {
                        let { text: eu, width: ei } = e;
                        if (O) return eu;
                        let ea = er[et] - ei,
                          es = en.align[et],
                          eo = 0;
                        'right' === es ? (eo = ea) : 'center' === es && (eo = Math.floor(ea / 2));
                        let el = ea - eo;
                        return `${' '.repeat(eo)}${eu}${' '.repeat(el)}`;
                      })
                      .join(' | ')} |`;
                  }
                }
                function de(e, O, et) {
                  let en = [],
                    er = null,
                    { children: eu } = e.getValue();
                  for (let [e, O] of eu.entries())
                    switch (U(O)) {
                      case 'start':
                        null === er && (er = { index: e, offset: O.position.end.offset });
                        break;
                      case 'end':
                        null !== er &&
                          (en.push({ start: er, end: { index: e, offset: O.position.start.offset } }), (er = null));
                    }
                  return ue(e, O, et, {
                    processor: (e, er) => {
                      if (en.length > 0) {
                        let e = en[0];
                        if (er === e.start.index)
                          return [
                            Fe(eu[e.start.index]),
                            O.originalText.slice(e.start.offset, e.end.offset),
                            Fe(eu[e.end.index])
                          ];
                        if (e.start.index < er && er < e.end.index) return !1;
                        if (er === e.end.index) return en.shift(), !1;
                      }
                      return et();
                    }
                  });
                }
                function ue(e, O, et) {
                  let en = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    { postprocessor: er } = en,
                    eu = en.processor || (() => et()),
                    ei = e.getValue(),
                    ea = [],
                    es;
                  return (
                    e.each((e, et) => {
                      let en = e.getValue(),
                        er = eu(e, et);
                      if (!1 !== er) {
                        let e = { parts: ea, prevNode: es, parentNode: ei, options: O };
                        Z(en, e) &&
                          (ea.push(ed),
                          (es && e$.has(es.type)) || ((se(en, e) || fe(en, e)) && ea.push(ed)),
                          fe(en, e) && ea.push(ed)),
                          ea.push(er),
                          (es = en);
                      }
                    }, 'children'),
                    er ? er(ea) : ea
                  );
                }
                function Fe(e) {
                  return 'html' === e.type
                    ? e.value
                    : 'paragraph' === e.type &&
                      Array.isArray(e.children) &&
                      1 === e.children.length &&
                      'esComment' === e.children[0].type
                    ? ['{/* ', e.children[0].value, ' */}']
                    : void 0;
                }
                function z(e) {
                  let O = e;
                  for (; ea(O.children); ) O = en(O.children);
                  return O;
                }
                function U(e) {
                  let O;
                  if ('html' === e.type) O = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
                  else {
                    let et;
                    'esComment' === e.type
                      ? (et = e)
                      : 'paragraph' === e.type &&
                        1 === e.children.length &&
                        'esComment' === e.children[0].type &&
                        (et = e.children[0]),
                      et && (O = et.value.match(/^prettier-ignore(?:-(start|end))?$/));
                  }
                  return !!O && (O[1] || 'next');
                }
                function Z(e, O) {
                  let et = 0 === O.parts.length,
                    en = eL.includes(e.type),
                    er = 'html' === e.type && e_.includes(O.parentNode.type);
                  return !et && !en && !er;
                }
                function se(e, O) {
                  var et, en, er;
                  let eu = (O.prevNode && O.prevNode.type) === e.type && eV.has(e.type),
                    ei = 'listItem' === O.parentNode.type && !O.parentNode.loose,
                    ea =
                      (null === (et = O.prevNode) || void 0 === et ? void 0 : et.type) === 'listItem' &&
                      O.prevNode.loose,
                    es = 'next' === U(O.prevNode),
                    eo =
                      'html' === e.type &&
                      (null === (en = O.prevNode) || void 0 === en ? void 0 : en.type) === 'html' &&
                      O.prevNode.position.end.line + 1 === e.position.start.line,
                    el =
                      'html' === e.type &&
                      'listItem' === O.parentNode.type &&
                      (null === (er = O.prevNode) || void 0 === er ? void 0 : er.type) === 'paragraph' &&
                      O.prevNode.position.end.line + 1 === e.position.start.line;
                  return ea || !(eu || ei || es || eo || el);
                }
                function fe(e, O) {
                  let et = O.prevNode && 'list' === O.prevNode.type,
                    en = 'code' === e.type && e.isIndented;
                  return et && en;
                }
                function ge(e) {
                  let O = ce(e, ['linkReference', 'imageReference']);
                  return O && ('linkReference' !== O.type || 'full' !== O.referenceType);
                }
                function he(e) {
                  let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                  return new RegExp([' ', ...(Array.isArray(O) ? O : [O])].map((e) => `\\${e}`).join('|')).test(e)
                    ? `<${e}>`
                    : e;
                }
                function we(e, O) {
                  let et = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                  if (!e) return '';
                  if (et) return ' ' + we(e, O, !1);
                  if ((e = e.replace(/\\(["')])/g, '$1')).includes('"') && e.includes("'") && !e.includes(')'))
                    return `(${e})`;
                  let en = e.split("'").length - 1,
                    er = e.split('"').length - 1,
                    eu = en > er ? '"' : er > en || O.singleQuote ? "'" : '"';
                  return (e = (e = e.replace(/\\/, '\\\\')).replace(RegExp(`(${eu})`, 'g'), '\\$1')), `${eu}${e}${eu}`;
                }
                function ke(e, O, et) {
                  return e < O ? O : e > et ? et : e;
                }
                function Re(e) {
                  let O = Number(e.getName());
                  return 0 !== O && 'next' === U(e.getParentNode().children[O - 1]);
                }
                function Ne(e) {
                  return `[${et(e.label)}]`;
                }
                function Pe(e) {
                  return `[^${e.label}]`;
                }
                O.exports = {
                  preprocess: eN,
                  print: Q,
                  embed: eb,
                  massageAstNode: ew,
                  hasPrettierIgnore: Re,
                  insertPragma: eS
                };
              }
            }),
            rz = te({
              'src/language-markdown/options.js'(e, O) {
                ey();
                var et = n2();
                O.exports = { proseWrap: et.proseWrap, singleQuote: et.singleQuote };
              }
            }),
            rX = te({
              'src/language-markdown/parsers.js'() {
                ey();
              }
            }),
            rK = te({
              'node_modules/linguist-languages/data/Markdown.json'(e, O) {
                O.exports = {
                  name: 'Markdown',
                  type: 'prose',
                  color: '#083fa1',
                  aliases: ['pandoc'],
                  aceMode: 'markdown',
                  codemirrorMode: 'gfm',
                  codemirrorMimeType: 'text/x-gfm',
                  wrap: !0,
                  extensions: [
                    '.md',
                    '.livemd',
                    '.markdown',
                    '.mdown',
                    '.mdwn',
                    '.mdx',
                    '.mkd',
                    '.mkdn',
                    '.mkdown',
                    '.ronn',
                    '.scd',
                    '.workbook'
                  ],
                  filenames: ['contents.lr'],
                  tmScope: 'source.gfm',
                  languageId: 222
                };
              }
            }),
            rQ = te({
              'src/language-markdown/index.js'(e, O) {
                ey();
                var et = t3(),
                  en = rG(),
                  er = rz(),
                  eu = rX(),
                  ei = [
                    et(rK(), (e) => ({
                      since: '1.8.0',
                      parsers: ['markdown'],
                      vscodeLanguageIds: ['markdown'],
                      filenames: [...e.filenames, 'README'],
                      extensions: e.extensions.filter((e) => '.mdx' !== e)
                    })),
                    et(rK(), () => ({
                      name: 'MDX',
                      since: '1.15.0',
                      parsers: ['mdx'],
                      vscodeLanguageIds: ['mdx'],
                      filenames: [],
                      extensions: ['.mdx']
                    }))
                  ];
                O.exports = { languages: ei, options: er, printers: { mdast: en }, parsers: eu };
              }
            }),
            rY = te({
              'src/language-html/clean.js'(e, O) {
                ey();
                var { isFrontMatterNode: et } = e3(),
                  en = new Set(['sourceSpan', 'startSourceSpan', 'endSourceSpan', 'nameSpan', 'valueSpan']);
                function a(e, O) {
                  if ('text' === e.type || 'comment' === e.type || et(e) || 'yaml' === e.type || 'toml' === e.type)
                    return null;
                  'attribute' === e.type && delete O.value, 'docType' === e.type && delete O.value;
                }
                (a.ignoredProperties = en), (O.exports = a);
              }
            }),
            rZ = te({
              'src/language-html/constants.evaluate.js'(e, O) {
                O.exports = {
                  CSS_DISPLAY_TAGS: {
                    area: 'none',
                    base: 'none',
                    basefont: 'none',
                    datalist: 'none',
                    head: 'none',
                    link: 'none',
                    meta: 'none',
                    noembed: 'none',
                    noframes: 'none',
                    param: 'block',
                    rp: 'none',
                    script: 'block',
                    source: 'block',
                    style: 'none',
                    template: 'inline',
                    track: 'block',
                    title: 'none',
                    html: 'block',
                    body: 'block',
                    address: 'block',
                    blockquote: 'block',
                    center: 'block',
                    div: 'block',
                    figure: 'block',
                    figcaption: 'block',
                    footer: 'block',
                    form: 'block',
                    header: 'block',
                    hr: 'block',
                    legend: 'block',
                    listing: 'block',
                    main: 'block',
                    p: 'block',
                    plaintext: 'block',
                    pre: 'block',
                    xmp: 'block',
                    slot: 'contents',
                    ruby: 'ruby',
                    rt: 'ruby-text',
                    article: 'block',
                    aside: 'block',
                    h1: 'block',
                    h2: 'block',
                    h3: 'block',
                    h4: 'block',
                    h5: 'block',
                    h6: 'block',
                    hgroup: 'block',
                    nav: 'block',
                    section: 'block',
                    dir: 'block',
                    dd: 'block',
                    dl: 'block',
                    dt: 'block',
                    ol: 'block',
                    ul: 'block',
                    li: 'list-item',
                    table: 'table',
                    caption: 'table-caption',
                    colgroup: 'table-column-group',
                    col: 'table-column',
                    thead: 'table-header-group',
                    tbody: 'table-row-group',
                    tfoot: 'table-footer-group',
                    tr: 'table-row',
                    td: 'table-cell',
                    th: 'table-cell',
                    fieldset: 'block',
                    button: 'inline-block',
                    details: 'block',
                    summary: 'block',
                    dialog: 'block',
                    meter: 'inline-block',
                    progress: 'inline-block',
                    object: 'inline-block',
                    video: 'inline-block',
                    audio: 'inline-block',
                    select: 'inline-block',
                    option: 'block',
                    optgroup: 'block'
                  },
                  CSS_DISPLAY_DEFAULT: 'inline',
                  CSS_WHITE_SPACE_TAGS: {
                    listing: 'pre',
                    plaintext: 'pre',
                    pre: 'pre',
                    xmp: 'pre',
                    nobr: 'nowrap',
                    table: 'initial',
                    textarea: 'pre-wrap'
                  },
                  CSS_WHITE_SPACE_DEFAULT: 'normal'
                };
              }
            }),
            r0 = te({
              'src/language-html/utils/is-unknown-namespace.js'(e, O) {
                function t(e) {
                  return 'element' === e.type && !e.hasExplicitNamespace && !['html', 'svg'].includes(e.namespace);
                }
                ey(), (O.exports = t);
              }
            }),
            r1 = te({
              'src/language-html/utils/index.js'(e, O) {
                ey();
                var { inferParserByLanguage: et, isFrontMatterNode: en } = e3(),
                  {
                    builders: { line: er, hardline: eu, join: ei },
                    utils: { getDocParts: ea, replaceTextEndOfLine: es }
                  } = eO(),
                  {
                    CSS_DISPLAY_TAGS: eo,
                    CSS_DISPLAY_DEFAULT: el,
                    CSS_WHITE_SPACE_TAGS: ep,
                    CSS_WHITE_SPACE_DEFAULT: ec
                  } = rZ(),
                  ed = r0(),
                  eD = new Set([
                    '	',
                    `
`,
                    '\f',
                    '\r',
                    ' '
                  ]),
                  F = (e) => e.replace(/^[\t\n\f\r ]+/, ''),
                  _ = (e) => e.replace(/[\t\n\f\r ]+$/, ''),
                  E = (e) => e.replace(/^[\t\f\r ]*\n/g, ''),
                  N = (e) => E(_(e)),
                  x = (e) => e.split(/[\t\n\f\r ]+/),
                  I = (e) => e.match(/^[\t\n\f\r ]*/)[0];
                function D(e, O) {
                  return !!(
                    ('ieConditionalComment' === e.type &&
                      e.lastChild &&
                      !e.lastChild.isSelfClosing &&
                      !e.lastChild.endSourceSpan) ||
                    ('ieConditionalComment' === e.type && !e.complete) ||
                    (se(e) && e.children.some((e) => 'text' !== e.type && 'interpolation' !== e.type)) ||
                    (X(e, O) && !o(e) && 'interpolation' !== e.type)
                  );
                }
                function T(e) {
                  return 'attribute' !== e.type && !!e.parent && !!e.prev && m(e.prev);
                }
                function m(e) {
                  return 'comment' === e.type && 'prettier-ignore' === e.value.trim();
                }
                function C(e) {
                  return 'text' === e.type || 'comment' === e.type;
                }
                function o(e) {
                  return (
                    'element' === e.type &&
                    ('script' === e.fullName ||
                      'style' === e.fullName ||
                      'svg:style' === e.fullName ||
                      (ed(e) && ('script' === e.name || 'style' === e.name)))
                  );
                }
                function d(e) {
                  return e.children && !o(e);
                }
                function v(e) {
                  return o(e) || 'interpolation' === e.type || S(e);
                }
                function S(e) {
                  return we(e).startsWith('pre');
                }
                function b(e, O) {
                  let et = ye();
                  if (et && !e.prev && e.parent && e.parent.tagDefinition && e.parent.tagDefinition.ignoreFirstLf)
                    return 'interpolation' === e.type;
                  return et;
                  function ye() {
                    return (
                      !en(e) &&
                      ((('text' === e.type || 'interpolation' === e.type) &&
                        !!e.prev &&
                        ('text' === e.prev.type || 'interpolation' === e.prev.type)) ||
                        (!!e.parent &&
                          'none' !== e.parent.cssDisplay &&
                          (!!se(e.parent) ||
                            !(
                              (!e.prev &&
                                ('root' === e.parent.type ||
                                  (se(e) && e.parent) ||
                                  o(e.parent) ||
                                  H(e.parent, O) ||
                                  !ue(e.parent.cssDisplay))) ||
                              (e.prev && !U(e.prev.cssDisplay))
                            ))))
                    );
                  }
                }
                function B(e, O) {
                  return (
                    !en(e) &&
                    ((('text' === e.type || 'interpolation' === e.type) &&
                      !!e.next &&
                      ('text' === e.next.type || 'interpolation' === e.next.type)) ||
                      (!!e.parent &&
                        'none' !== e.parent.cssDisplay &&
                        (!!se(e.parent) ||
                          !(
                            (!e.next &&
                              ('root' === e.parent.type ||
                                (se(e) && e.parent) ||
                                o(e.parent) ||
                                H(e.parent, O) ||
                                !Fe(e.parent.cssDisplay))) ||
                            (e.next && !z(e.next.cssDisplay))
                          ))))
                  );
                }
                function k(e) {
                  return Z(e.cssDisplay) && !o(e);
                }
                function M(e) {
                  return (
                    en(e) || (e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line)
                  );
                }
                function R(e) {
                  return (
                    q(e) ||
                    ('element' === e.type &&
                      e.children.length > 0 &&
                      (['body', 'script', 'style'].includes(e.name) || e.children.some((e) => ee(e)))) ||
                    (e.firstChild &&
                      e.firstChild === e.lastChild &&
                      'text' !== e.firstChild.type &&
                      V(e.firstChild) &&
                      (!e.lastChild.isTrailingSpaceSensitive || j(e.lastChild)))
                  );
                }
                function q(e) {
                  return (
                    'element' === e.type &&
                    e.children.length > 0 &&
                    (['html', 'head', 'ul', 'ol', 'select'].includes(e.name) ||
                      (e.cssDisplay.startsWith('table') && 'table-cell' !== e.cssDisplay))
                  );
                }
                function J(e) {
                  return Y(e) || (e.prev && L(e.prev)) || (V(e) && j(e));
                }
                function L(e) {
                  return Y(e) || ('element' === e.type && 'br' === e.fullName) || (V(e) && j(e));
                }
                function V(e) {
                  return (
                    e.hasLeadingSpaces &&
                    (e.prev
                      ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line
                      : 'root' === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line)
                  );
                }
                function j(e) {
                  return (
                    e.hasTrailingSpaces &&
                    (e.next
                      ? e.next.sourceSpan.start.line > e.sourceSpan.end.line
                      : 'root' === e.parent.type ||
                        (e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line))
                  );
                }
                function Y(e) {
                  switch (e.type) {
                    case 'ieConditionalComment':
                    case 'comment':
                    case 'directive':
                      return !0;
                    case 'element':
                      return ['script', 'select'].includes(e.name);
                  }
                  return !1;
                }
                function ie(e) {
                  return e.lastChild ? ie(e.lastChild) : e;
                }
                function ee(e) {
                  return e.children && e.children.some((e) => 'text' !== e.type);
                }
                function ce(e) {
                  let { type: O, lang: et } = e.attrMap;
                  return 'module' === O ||
                    'text/javascript' === O ||
                    'text/babel' === O ||
                    'application/javascript' === O ||
                    'jsx' === et
                    ? 'babel'
                    : 'application/x-typescript' === O || 'ts' === et || 'tsx' === et
                    ? 'typescript'
                    : 'text/markdown' === O
                    ? 'markdown'
                    : 'text/html' === O
                    ? 'html'
                    : (O && (O.endsWith('json') || O.endsWith('importmap'))) || 'speculationrules' === O
                    ? 'json'
                    : 'text/x-handlebars-template' === O
                    ? 'glimmer'
                    : void 0;
                }
                function W(e, O) {
                  let { lang: en } = e.attrMap;
                  return en && 'postcss' !== en && 'css' !== en
                    ? 'scss' === en
                      ? 'scss'
                      : 'less' === en
                      ? 'less'
                      : 'stylus' === en
                      ? et('stylus', O)
                      : void 0
                    : 'css';
                }
                function K(e, O) {
                  return 'script' !== e.name || e.attrMap.src
                    ? 'style' === e.name
                      ? W(e, O)
                      : O && X(e, O)
                      ? ce(e) || (!('src' in e.attrMap) && et(e.attrMap.lang, O))
                      : void 0
                    : e.attrMap.lang || e.attrMap.type
                    ? ce(e)
                    : 'babel';
                }
                function de(e) {
                  return 'block' === e || 'list-item' === e || e.startsWith('table');
                }
                function ue(e) {
                  return !de(e) && 'inline-block' !== e;
                }
                function Fe(e) {
                  return !de(e) && 'inline-block' !== e;
                }
                function z(e) {
                  return !de(e);
                }
                function U(e) {
                  return !de(e);
                }
                function Z(e) {
                  return !de(e) && 'inline-block' !== e;
                }
                function se(e) {
                  return we(e).startsWith('pre');
                }
                function fe(e, O) {
                  let et = 0;
                  for (let en = e.stack.length - 1; en >= 0; en--) {
                    let er = e.stack[en];
                    er && 'object' == typeof er && !Array.isArray(er) && O(er) && et++;
                  }
                  return et;
                }
                function ge(e, O) {
                  let et = e;
                  for (; et; ) {
                    if (O(et)) return !0;
                    et = et.parent;
                  }
                  return !1;
                }
                function he(e, O) {
                  if (e.prev && 'comment' === e.prev.type) {
                    let O = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
                    if (O) return O[1];
                  }
                  let et = !1;
                  if ('element' === e.type && 'svg' === e.namespace) {
                    if (!ge(e, (e) => 'svg:foreignObject' === e.fullName))
                      return 'svg' === e.name ? 'inline-block' : 'block';
                    et = !0;
                  }
                  switch (O.htmlWhitespaceSensitivity) {
                    case 'strict':
                      return 'inline';
                    case 'ignore':
                      return 'block';
                    default:
                      return 'vue' === O.parser && e.parent && 'root' === e.parent.type
                        ? 'block'
                        : ('element' === e.type && (!e.namespace || et || ed(e)) && eo[e.name]) || el;
                  }
                }
                function we(e) {
                  return ('element' === e.type && (!e.namespace || ed(e)) && ep[e.name]) || ec;
                }
                function ke(e) {
                  let O = Number.POSITIVE_INFINITY;
                  for (let et of e.split(`
`)) {
                    if (0 === et.length) continue;
                    if (!eD.has(et[0])) return 0;
                    let e = I(et).length;
                    et.length !== e && e < O && (O = e);
                  }
                  return O === Number.POSITIVE_INFINITY ? 0 : O;
                }
                function Re(e) {
                  let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ke(e);
                  return 0 === O
                    ? e
                    : e
                        .split(
                          `
`
                        )
                        .map((e) => e.slice(O)).join(`
`);
                }
                function Ne(e, O) {
                  let et = 0;
                  for (let en = 0; en < e.length; en++) e[en] === O && et++;
                  return et;
                }
                function Pe(e) {
                  return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
                }
                var ef = new Set(['template', 'style', 'script']);
                function H(e, O) {
                  return pe(e, O) && !ef.has(e.fullName);
                }
                function pe(e, O) {
                  return (
                    'vue' === O.parser &&
                    'element' === e.type &&
                    'root' === e.parent.type &&
                    'html' !== e.fullName.toLowerCase()
                  );
                }
                function X(e, O) {
                  return pe(e, O) && (H(e, O) || (e.attrMap.lang && 'html' !== e.attrMap.lang));
                }
                function le(e) {
                  let O = e.fullName;
                  return '#' === O.charAt(0) || 'slot-scope' === O || 'v-slot' === O || O.startsWith('v-slot:');
                }
                function Ae(e, O) {
                  let et = e.parent;
                  if (!pe(et, O)) return !1;
                  let en = et.fullName,
                    er = e.fullName;
                  return ('script' === en && 'setup' === er) || ('style' === en && 'vars' === er);
                }
                function Ee(e) {
                  let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.value;
                  return e.parent.isWhitespaceSensitive
                    ? e.parent.isIndentationSensitive
                      ? es(O)
                      : es(Re(N(O)), eu)
                    : ea(ei(er, x(O)));
                }
                function De(e, O) {
                  return pe(e, O) && 'script' === e.name;
                }
                O.exports = {
                  htmlTrim: (e) => F(_(e)),
                  htmlTrimPreserveIndentation: N,
                  hasHtmlWhitespace: (e) => /[\t\n\f\r ]/.test(e),
                  getLeadingAndTrailingHtmlWhitespace: (e) => {
                    let [, O, et, en] = e.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
                    return { leadingWhitespace: O, trailingWhitespace: en, text: et };
                  },
                  canHaveInterpolation: d,
                  countChars: Ne,
                  countParents: fe,
                  dedentString: Re,
                  forceBreakChildren: q,
                  forceBreakContent: R,
                  forceNextEmptyLine: M,
                  getLastDescendant: ie,
                  getNodeCssStyleDisplay: he,
                  getNodeCssStyleWhiteSpace: we,
                  hasPrettierIgnore: T,
                  inferScriptParser: K,
                  isVueCustomBlock: H,
                  isVueNonHtmlBlock: X,
                  isVueScriptTag: De,
                  isVueSlotAttribute: le,
                  isVueSfcBindingsAttribute: Ae,
                  isVueSfcBlock: pe,
                  isDanglingSpaceSensitiveNode: k,
                  isIndentationSensitiveNode: S,
                  isLeadingSpaceSensitiveNode: b,
                  isPreLikeNode: se,
                  isScriptLikeTag: o,
                  isTextLikeNode: C,
                  isTrailingSpaceSensitiveNode: B,
                  isWhitespaceSensitiveNode: v,
                  isUnknownNamespace: ed,
                  preferHardlineAsLeadingSpaces: J,
                  preferHardlineAsTrailingSpaces: L,
                  shouldPreserveContent: D,
                  unescapeQuoteEntities: Pe,
                  getTextValueParts: Ee
                };
              }
            }),
            r2 = te({
              'node_modules/angular-html-parser/lib/compiler/src/chars.js'(e) {
                function r(O) {
                  return (O >= e.$TAB && O <= e.$SPACE) || O == e.$NBSP;
                }
                function t(O) {
                  return e.$0 <= O && O <= e.$9;
                }
                function s(O) {
                  return (O >= e.$a && O <= e.$z) || (O >= e.$A && O <= e.$Z);
                }
                function a(O) {
                  return (O >= e.$a && O <= e.$f) || (O >= e.$A && O <= e.$F) || t(O);
                }
                function n(O) {
                  return O === e.$LF || O === e.$CR;
                }
                function u(O) {
                  return e.$0 <= O && O <= e.$7;
                }
                ey(),
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.$EOF = 0),
                  (e.$BSPACE = 8),
                  (e.$TAB = 9),
                  (e.$LF = 10),
                  (e.$VTAB = 11),
                  (e.$FF = 12),
                  (e.$CR = 13),
                  (e.$SPACE = 32),
                  (e.$BANG = 33),
                  (e.$DQ = 34),
                  (e.$HASH = 35),
                  (e.$$ = 36),
                  (e.$PERCENT = 37),
                  (e.$AMPERSAND = 38),
                  (e.$SQ = 39),
                  (e.$LPAREN = 40),
                  (e.$RPAREN = 41),
                  (e.$STAR = 42),
                  (e.$PLUS = 43),
                  (e.$COMMA = 44),
                  (e.$MINUS = 45),
                  (e.$PERIOD = 46),
                  (e.$SLASH = 47),
                  (e.$COLON = 58),
                  (e.$SEMICOLON = 59),
                  (e.$LT = 60),
                  (e.$EQ = 61),
                  (e.$GT = 62),
                  (e.$QUESTION = 63),
                  (e.$0 = 48),
                  (e.$7 = 55),
                  (e.$9 = 57),
                  (e.$A = 65),
                  (e.$E = 69),
                  (e.$F = 70),
                  (e.$X = 88),
                  (e.$Z = 90),
                  (e.$LBRACKET = 91),
                  (e.$BACKSLASH = 92),
                  (e.$RBRACKET = 93),
                  (e.$CARET = 94),
                  (e.$_ = 95),
                  (e.$a = 97),
                  (e.$b = 98),
                  (e.$e = 101),
                  (e.$f = 102),
                  (e.$n = 110),
                  (e.$r = 114),
                  (e.$t = 116),
                  (e.$u = 117),
                  (e.$v = 118),
                  (e.$x = 120),
                  (e.$z = 122),
                  (e.$LBRACE = 123),
                  (e.$BAR = 124),
                  (e.$RBRACE = 125),
                  (e.$NBSP = 160),
                  (e.$PIPE = 124),
                  (e.$TILDA = 126),
                  (e.$AT = 64),
                  (e.$BT = 96),
                  (e.isWhitespace = r),
                  (e.isDigit = t),
                  (e.isAsciiLetter = s),
                  (e.isAsciiHexDigit = a),
                  (e.isNewLine = n),
                  (e.isOctalDigit = u);
              }
            }),
            r3 = te({
              'node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = class {
                  constructor(e, O, et) {
                    (this.filePath = e), (this.name = O), (this.members = et);
                  }
                  assertNoMembers() {
                    if (this.members.length)
                      throw Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
                  }
                };
                e.StaticSymbol = O;
                var et = class {
                  constructor() {
                    this.cache = new Map();
                  }
                  get(e, et, en) {
                    let er = (en = en || []).length ? `.${en.join('.')}` : '',
                      eu = `"${e}".${et}${er}`,
                      ei = this.cache.get(eu);
                    return ei || ((ei = new O(e, et, en)), this.cache.set(eu, ei)), ei;
                  }
                };
                e.StaticSymbolCache = et;
              }
            }),
            r8 = te({
              'node_modules/angular-html-parser/lib/compiler/src/util.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O = /-+([a-z0-9])/g;
                function t(e) {
                  return e.replace(O, function () {
                    for (var e = arguments.length, O = Array(e), et = 0; et < e; et++) O[et] = arguments[et];
                    return O[1].toUpperCase();
                  });
                }
                function s(e, O) {
                  return n(e, ':', O);
                }
                function a(e, O) {
                  return n(e, '.', O);
                }
                function n(e, O, et) {
                  let en = e.indexOf(O);
                  return -1 == en ? et : [e.slice(0, en).trim(), e.slice(en + 1).trim()];
                }
                function u(e, O, et) {
                  return Array.isArray(e)
                    ? O.visitArray(e, et)
                    : E(e)
                    ? O.visitStringMap(e, et)
                    : null == e || 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e
                    ? O.visitPrimitive(e, et)
                    : O.visitOther(e, et);
                }
                function i(e) {
                  return null != e;
                }
                function l(e) {
                  return void 0 === e ? null : e;
                }
                (e.dashCaseToCamelCase = t),
                  (e.splitAtColon = s),
                  (e.splitAtPeriod = a),
                  (e.visitValue = u),
                  (e.isDefined = i),
                  (e.noUndefined = l);
                var et = class {
                  visitArray(e, O) {
                    return e.map((e) => u(e, this, O));
                  }
                  visitStringMap(e, O) {
                    let et = {};
                    return (
                      Object.keys(e).forEach((en) => {
                        et[en] = u(e[en], this, O);
                      }),
                      et
                    );
                  }
                  visitPrimitive(e, O) {
                    return e;
                  }
                  visitOther(e, O) {
                    return e;
                  }
                };
                function y(e) {
                  throw Error(`Internal Error: ${e}`);
                }
                function h(e, O) {
                  let et = Error(e);
                  return (et[en] = !0), O && (et[er] = O), et;
                }
                (e.ValueTransformer = et),
                  (e.SyncAsync = {
                    assertSync: (e) => {
                      if (P(e)) throw Error('Illegal state: value cannot be a promise');
                      return e;
                    },
                    then: (e, O) => (P(e) ? e.then(O) : O(e)),
                    all: (e) => (e.some(P) ? Promise.all(e) : e)
                  }),
                  (e.error = y),
                  (e.syntaxError = h);
                var en = 'ngSyntaxError',
                  er = 'ngParseErrors';
                function f(e) {
                  return e[en];
                }
                function F(e) {
                  return e[er] || [];
                }
                function _(e) {
                  return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
                }
                (e.isSyntaxError = f), (e.getParseErrors = F), (e.escapeRegExp = _);
                var eu = Object.getPrototypeOf({});
                function E(e) {
                  return 'object' == typeof e && null !== e && Object.getPrototypeOf(e) === eu;
                }
                function N(e) {
                  let O = '';
                  for (let et = 0; et < e.length; et++) {
                    let en = e.charCodeAt(et);
                    if (en >= 55296 && en <= 56319 && e.length > et + 1) {
                      let O = e.charCodeAt(et + 1);
                      O >= 56320 && O <= 57343 && (et++, (en = ((en - 55296) << 10) + O - 56320 + 65536));
                    }
                    en <= 127
                      ? (O += String.fromCharCode(en))
                      : en <= 2047
                      ? (O += String.fromCharCode(((en >> 6) & 31) | 192, (63 & en) | 128))
                      : en <= 65535
                      ? (O += String.fromCharCode((en >> 12) | 224, ((en >> 6) & 63) | 128, (63 & en) | 128))
                      : en <= 2097151 &&
                        (O += String.fromCharCode(
                          ((en >> 18) & 7) | 240,
                          ((en >> 12) & 63) | 128,
                          ((en >> 6) & 63) | 128,
                          (63 & en) | 128
                        ));
                  }
                  return O;
                }
                function x(e) {
                  if ('string' == typeof e) return e;
                  if (e instanceof Array) return '[' + e.map(x).join(', ') + ']';
                  if (null == e) return '' + e;
                  if (e.overriddenName) return `${e.overriddenName}`;
                  if (e.name) return `${e.name}`;
                  if (!e.toString) return 'object';
                  let O = e.toString();
                  if (null == O) return '' + O;
                  let et = O.indexOf(`
`);
                  return -1 === et ? O : O.substring(0, et);
                }
                function I(e) {
                  return 'function' == typeof e && e.hasOwnProperty('__forward_ref__') ? e() : e;
                }
                function P(e) {
                  return !!e && 'function' == typeof e.then;
                }
                (e.utf8Encode = N),
                  (e.stringify = x),
                  (e.resolveForwardRef = I),
                  (e.isPromise = P),
                  (e.Version = class {
                    constructor(e) {
                      this.full = e;
                      let O = e.split('.');
                      (this.major = O[0]), (this.minor = O[1]), (this.patch = O.slice(2).join('.'));
                    }
                  });
                var ei = 'u' > typeof window && window,
                  ea = 'u' > typeof self && 'u' > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                  es = 'u' > typeof globalThis && globalThis;
                e.global = es || ei || ea;
              }
            }),
            r6 = te({
              'node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O,
                  et,
                  en = r3(),
                  er = r8(),
                  eu = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
                function a(e) {
                  return e.replace(/\W/g, '_');
                }
                e.sanitizeIdentifier = a;
                var ei = 0;
                function u(e) {
                  if (!e || !e.reference) return null;
                  let O = e.reference;
                  if (O instanceof en.StaticSymbol) return O.name;
                  if (O.__anonymousType) return O.__anonymousType;
                  let et = er.stringify(O);
                  return (
                    et.indexOf('(') >= 0 ? ((et = `anonymous_${ei++}`), (O.__anonymousType = et)) : (et = a(et)), et
                  );
                }
                function i(e) {
                  let O = e.reference;
                  return O instanceof en.StaticSymbol ? O.filePath : `./${er.stringify(O)}`;
                }
                function l(e, O) {
                  return `View_${u({ reference: e })}_${O}`;
                }
                function p(e) {
                  return `RenderType_${u({ reference: e })}`;
                }
                function y(e) {
                  return `HostView_${u({ reference: e })}`;
                }
                function h(e) {
                  return `${u({ reference: e })}NgFactory`;
                }
                function c(e) {
                  return null != e.value ? a(e.value) : u(e.identifier);
                }
                function f(e) {
                  return null != e.identifier ? e.identifier.reference : e.value;
                }
                (e.identifierName = u),
                  (e.identifierModuleUrl = i),
                  (e.viewClassName = l),
                  (e.rendererTypeName = p),
                  (e.hostViewClassName = y),
                  (e.componentFactoryName = h),
                  ((O = et = e.CompileSummaryKind || (e.CompileSummaryKind = {}))[(O.Pipe = 0)] = 'Pipe'),
                  (O[(O.Directive = 1)] = 'Directive'),
                  (O[(O.NgModule = 2)] = 'NgModule'),
                  (O[(O.Injectable = 3)] = 'Injectable'),
                  (e.tokenName = c),
                  (e.tokenReference = f);
                var ea = class {
                  constructor() {
                    let {
                      moduleUrl: e,
                      styles: O,
                      styleUrls: et
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (this.moduleUrl = e || null), (this.styles = P(O)), (this.styleUrls = P(et));
                  }
                };
                e.CompileStylesheetMetadata = ea;
                var es = class {
                  constructor(e) {
                    let {
                      encapsulation: O,
                      template: et,
                      templateUrl: en,
                      htmlAst: er,
                      styles: eu,
                      styleUrls: ei,
                      externalStylesheets: ea,
                      animations: es,
                      ngContentSelectors: eo,
                      interpolation: el,
                      isInline: ep,
                      preserveWhitespaces: ec
                    } = e;
                    if (
                      ((this.encapsulation = O),
                      (this.template = et),
                      (this.templateUrl = en),
                      (this.htmlAst = er),
                      (this.styles = P(eu)),
                      (this.styleUrls = P(ei)),
                      (this.externalStylesheets = P(ea)),
                      (this.animations = es ? D(es) : []),
                      (this.ngContentSelectors = eo || []),
                      el && 2 != el.length)
                    )
                      throw Error("'interpolation' should have a start and an end symbol.");
                    (this.interpolation = el), (this.isInline = ep), (this.preserveWhitespaces = ec);
                  }
                  toSummary() {
                    return {
                      ngContentSelectors: this.ngContentSelectors,
                      encapsulation: this.encapsulation,
                      styles: this.styles,
                      animations: this.animations
                    };
                  }
                };
                e.CompileTemplateMetadata = es;
                var eo = class {
                  static create(e) {
                    let {
                        isHost: O,
                        type: et,
                        isComponent: en,
                        selector: ei,
                        exportAs: ea,
                        changeDetection: es,
                        inputs: el,
                        outputs: ep,
                        host: ec,
                        providers: ed,
                        viewProviders: eD,
                        queries: ef,
                        guards: eg,
                        viewQueries: ey,
                        entryComponents: eh,
                        template: eE,
                        componentViewType: eC,
                        rendererType: eF,
                        componentFactory: eA
                      } = e,
                      ev = {},
                      ex = {},
                      eb = {};
                    null != ec &&
                      Object.keys(ec).forEach((e) => {
                        let O = ec[e],
                          et = e.match(eu);
                        null === et ? (eb[e] = O) : null != et[1] ? (ex[et[1]] = O) : null != et[2] && (ev[et[2]] = O);
                      });
                    let eS = {};
                    null != el &&
                      el.forEach((e) => {
                        let O = er.splitAtColon(e, [e, e]);
                        eS[O[0]] = O[1];
                      });
                    let eT = {};
                    return (
                      null != ep &&
                        ep.forEach((e) => {
                          let O = er.splitAtColon(e, [e, e]);
                          eT[O[0]] = O[1];
                        }),
                      new eo({
                        isHost: O,
                        type: et,
                        isComponent: !!en,
                        selector: ei,
                        exportAs: ea,
                        changeDetection: es,
                        inputs: eS,
                        outputs: eT,
                        hostListeners: ev,
                        hostProperties: ex,
                        hostAttributes: eb,
                        providers: ed,
                        viewProviders: eD,
                        queries: ef,
                        guards: eg,
                        viewQueries: ey,
                        entryComponents: eh,
                        template: eE,
                        componentViewType: eC,
                        rendererType: eF,
                        componentFactory: eA
                      })
                    );
                  }
                  constructor(e) {
                    let {
                      isHost: O,
                      type: et,
                      isComponent: en,
                      selector: er,
                      exportAs: eu,
                      changeDetection: ei,
                      inputs: ea,
                      outputs: es,
                      hostListeners: eo,
                      hostProperties: el,
                      hostAttributes: ep,
                      providers: ec,
                      viewProviders: ed,
                      queries: eD,
                      guards: ef,
                      viewQueries: eg,
                      entryComponents: ey,
                      template: eh,
                      componentViewType: eE,
                      rendererType: eC,
                      componentFactory: eF
                    } = e;
                    (this.isHost = !!O),
                      (this.type = et),
                      (this.isComponent = en),
                      (this.selector = er),
                      (this.exportAs = eu),
                      (this.changeDetection = ei),
                      (this.inputs = ea),
                      (this.outputs = es),
                      (this.hostListeners = eo),
                      (this.hostProperties = el),
                      (this.hostAttributes = ep),
                      (this.providers = P(ec)),
                      (this.viewProviders = P(ed)),
                      (this.queries = P(eD)),
                      (this.guards = ef),
                      (this.viewQueries = P(eg)),
                      (this.entryComponents = P(ey)),
                      (this.template = eh),
                      (this.componentViewType = eE),
                      (this.rendererType = eC),
                      (this.componentFactory = eF);
                  }
                  toSummary() {
                    return {
                      summaryKind: et.Directive,
                      type: this.type,
                      isComponent: this.isComponent,
                      selector: this.selector,
                      exportAs: this.exportAs,
                      inputs: this.inputs,
                      outputs: this.outputs,
                      hostListeners: this.hostListeners,
                      hostProperties: this.hostProperties,
                      hostAttributes: this.hostAttributes,
                      providers: this.providers,
                      viewProviders: this.viewProviders,
                      queries: this.queries,
                      guards: this.guards,
                      viewQueries: this.viewQueries,
                      entryComponents: this.entryComponents,
                      changeDetection: this.changeDetection,
                      template: this.template && this.template.toSummary(),
                      componentViewType: this.componentViewType,
                      rendererType: this.rendererType,
                      componentFactory: this.componentFactory
                    };
                  }
                };
                e.CompileDirectiveMetadata = eo;
                var el = class {
                  constructor(e) {
                    let { type: O, name: et, pure: en } = e;
                    (this.type = O), (this.name = et), (this.pure = !!en);
                  }
                  toSummary() {
                    return { summaryKind: et.Pipe, type: this.type, name: this.name, pure: this.pure };
                  }
                };
                (e.CompilePipeMetadata = el), (e.CompileShallowModuleMetadata = class {});
                var ep = class {
                  constructor(e) {
                    let {
                      type: O,
                      providers: et,
                      declaredDirectives: en,
                      exportedDirectives: er,
                      declaredPipes: eu,
                      exportedPipes: ei,
                      entryComponents: ea,
                      bootstrapComponents: es,
                      importedModules: eo,
                      exportedModules: el,
                      schemas: ep,
                      transitiveModule: ec,
                      id: ed
                    } = e;
                    (this.type = O || null),
                      (this.declaredDirectives = P(en)),
                      (this.exportedDirectives = P(er)),
                      (this.declaredPipes = P(eu)),
                      (this.exportedPipes = P(ei)),
                      (this.providers = P(et)),
                      (this.entryComponents = P(ea)),
                      (this.bootstrapComponents = P(es)),
                      (this.importedModules = P(eo)),
                      (this.exportedModules = P(el)),
                      (this.schemas = P(ep)),
                      (this.id = ed || null),
                      (this.transitiveModule = ec || null);
                  }
                  toSummary() {
                    let e = this.transitiveModule;
                    return {
                      summaryKind: et.NgModule,
                      type: this.type,
                      entryComponents: e.entryComponents,
                      providers: e.providers,
                      modules: e.modules,
                      exportedDirectives: e.exportedDirectives,
                      exportedPipes: e.exportedPipes
                    };
                  }
                };
                e.CompileNgModuleMetadata = ep;
                var ec = class {
                  constructor() {
                    (this.directivesSet = new Set()),
                      (this.directives = []),
                      (this.exportedDirectivesSet = new Set()),
                      (this.exportedDirectives = []),
                      (this.pipesSet = new Set()),
                      (this.pipes = []),
                      (this.exportedPipesSet = new Set()),
                      (this.exportedPipes = []),
                      (this.modulesSet = new Set()),
                      (this.modules = []),
                      (this.entryComponentsSet = new Set()),
                      (this.entryComponents = []),
                      (this.providers = []);
                  }
                  addProvider(e, O) {
                    this.providers.push({ provider: e, module: O });
                  }
                  addDirective(e) {
                    this.directivesSet.has(e.reference) ||
                      (this.directivesSet.add(e.reference), this.directives.push(e));
                  }
                  addExportedDirective(e) {
                    this.exportedDirectivesSet.has(e.reference) ||
                      (this.exportedDirectivesSet.add(e.reference), this.exportedDirectives.push(e));
                  }
                  addPipe(e) {
                    this.pipesSet.has(e.reference) || (this.pipesSet.add(e.reference), this.pipes.push(e));
                  }
                  addExportedPipe(e) {
                    this.exportedPipesSet.has(e.reference) ||
                      (this.exportedPipesSet.add(e.reference), this.exportedPipes.push(e));
                  }
                  addModule(e) {
                    this.modulesSet.has(e.reference) || (this.modulesSet.add(e.reference), this.modules.push(e));
                  }
                  addEntryComponent(e) {
                    this.entryComponentsSet.has(e.componentType) ||
                      (this.entryComponentsSet.add(e.componentType), this.entryComponents.push(e));
                  }
                };
                function P(e) {
                  return e || [];
                }
                function D(e) {
                  return e.reduce((e, O) => {
                    let et = Array.isArray(O) ? D(O) : O;
                    return e.concat(et);
                  }, []);
                }
                function T(e) {
                  return e.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, 'ng:///');
                }
                function m(e, O, et) {
                  let er;
                  return (
                    (er = et.isInline
                      ? O.type.reference instanceof en.StaticSymbol
                        ? `${O.type.reference.filePath}.${O.type.reference.name}.html`
                        : `${u(e)}/${u(O.type)}.html`
                      : et.templateUrl),
                    O.type.reference instanceof en.StaticSymbol ? er : T(er)
                  );
                }
                function C(e, O) {
                  let et = e.moduleUrl.split(/\/\\/g),
                    en = et[et.length - 1];
                  return T(`css/${O}${en}.ngstyle.js`);
                }
                function o(e) {
                  return T(`${u(e.type)}/module.ngfactory.js`);
                }
                function d(e, O) {
                  return T(`${u(e)}/${u(O.type)}.ngfactory.js`);
                }
                (e.TransitiveCompileNgModuleMetadata = ec),
                  (e.ProviderMeta = class {
                    constructor(e, O) {
                      let { useClass: et, useValue: en, useExisting: er, useFactory: eu, deps: ei, multi: ea } = O;
                      (this.token = e),
                        (this.useClass = et || null),
                        (this.useValue = en),
                        (this.useExisting = er),
                        (this.useFactory = eu || null),
                        (this.dependencies = ei || null),
                        (this.multi = !!ea);
                    }
                  }),
                  (e.flatten = D),
                  (e.templateSourceUrl = m),
                  (e.sharedStylesheetJitUrl = C),
                  (e.ngModuleJitUrl = o),
                  (e.templateJitUrl = d);
              }
            }),
            r7 = te({
              'node_modules/angular-html-parser/lib/compiler/src/parse_util.js'(e) {
                ey(), Object.defineProperty(e, '__esModule', { value: !0 });
                var O,
                  et,
                  en = r2(),
                  er = r6(),
                  eu = class {
                    constructor(e, O, et, en) {
                      (this.file = e), (this.offset = O), (this.line = et), (this.col = en);
                    }
                    toString() {
                      return null != this.offset ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
                    }
                    moveBy(e) {
                      let O = this.file.content,
                        et = O.length,
                        er = this.offset,
                        ei = this.line,
                        ea = this.col;
                      for (; er > 0 && e < 0; )
                        if ((er--, e++, O.charCodeAt(er) == en.$LF)) {
                          ei--;
                          let e = O.substr(0, er - 1).lastIndexOf(String.fromCharCode(en.$LF));
                          ea = e > 0 ? er - e : er;
                        } else ea--;
                      for (; er < et && e > 0; ) {
                        let et = O.charCodeAt(er);
                        er++, e--, et == en.$LF ? (ei++, (ea = 0)) : ea++;
                      }
                      return new eu(this.file, er, ei, ea);
                    }
                    getContext(e, O) {
                      let et = this.file.content,
                        en = this.offset;
                      if (null != en) {
                        en > et.length - 1 && (en = et.length - 1);
                        let er = en,
                          eu = 0,
                          ei = 0;
                        for (
                          ;
                          eu < e &&
                          en > 0 &&
                          (en--,
                          eu++,
                          !(
                            et[en] ==
                              `
` && ++ei == O
                          ));

                        );
                        for (
                          eu = 0, ei = 0;
                          eu < e &&
                          er < et.length - 1 &&
                          (er++,
                          eu++,
                          !(
                            et[er] ==
                              `
` && ++ei == O
                          ));

                        );
                        return { before: et.substring(en, this.offset), after: et.substring(this.offset, er + 1) };
                      }
                      return null;
                    }
                  };
                e.ParseLocation = eu;
                var ei = class {
                  constructor(e, O) {
                    (this.content = e), (this.url = O);
                  }
                };
                e.ParseSourceFile = ei;
                var ea = class {
                  constructor(e, O) {
                    let et = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    (this.start = e), (this.end = O), (this.details = et);
                  }
                  toString() {
                    return this.start.file.content.substring(this.start.offset, this.end.offset);
                  }
                };
                (e.ParseSourceSpan = ea),
                  (e.EMPTY_PARSE_LOCATION = new eu(new ei('', ''), 0, 0, 0)),
                  (e.EMPTY_SOURCE_SPAN = new ea(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION)),
                  ((O = et = e.ParseErrorLevel || (e.ParseErrorLevel = {}))[(O.WARNING = 0)] = 'WARNING'),
                  (O[(O.ERROR = 1)] = 'ERROR');
                var es = class {
                  constructor(e, O) {
                    let en = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et.ERROR;
                    (this.span = e), (this.msg = O), (this.level = en);
                  }
                  contextualMessage() {
                    let e = this.span.start.getContext(100, 3);
                    return e ? `${this.msg} ("${e.before}[${et[this.level]} ->]${e.after}")` : this.msg;
                  }
                  toString() {
                    let e = this.span.details ? `, ${this.span.details}` : '';
                    return `${this.contextualMessage()}: ${this.span.start}${e}`;
                  }
                };
                function l(e, O) {
                  let et = er.identifierModuleUrl(O),
                    en = new ei(
                      '',
                      null != et ? `in ${e} ${er.identifierName(O)} in ${et}` : `in ${e} ${er.identifierName(O)}`
                    );
                  return new ea(new eu(en, -1, -1, -1), new eu(en, -1, -1, -1));
                }
                function p(e, O, et) {
                  let en = new ei('', `in ${e} ${O} in ${et}`);
                  return new ea(new eu(en, -1, -1, -1), new eu(en, -1, -1, -1));
                }
                (e.ParseError = es), (e.typeSourceSpan = l), (e.r3JitTypeSourceSpan = p);
              }
            }),
            r9 = te({
              'src/language-html/print-preprocess.js'(e, O) {
                ey();
                var { ParseSourceSpan: et } = r7(),
                  {
                    htmlTrim: en,
                    getLeadingAndTrailingHtmlWhitespace: er,
                    hasHtmlWhitespace: eu,
                    canHaveInterpolation: ei,
                    getNodeCssStyleDisplay: ea,
                    isDanglingSpaceSensitiveNode: es,
                    isIndentationSensitiveNode: eo,
                    isLeadingSpaceSensitiveNode: el,
                    isTrailingSpaceSensitiveNode: ep,
                    isWhitespaceSensitiveNode: ec,
                    isVueScriptTag: ed
                  } = r1(),
                  eD = [_, w, N, I, P, T, $, D, m, x, C];
                function F(e, O) {
                  for (let et of eD) et(e, O);
                  return e;
                }
                function _(e) {
                  e.walk((e) => {
                    if (
                      'element' === e.type &&
                      e.tagDefinition.ignoreFirstLf &&
                      e.children.length > 0 &&
                      'text' === e.children[0].type &&
                      e.children[0].value[0] ===
                        `
`
                    ) {
                      let O = e.children[0];
                      1 === O.value.length ? e.removeChild(O) : (O.value = O.value.slice(1));
                    }
                  });
                }
                function w(e) {
                  let d = (e) =>
                    'element' === e.type &&
                    e.prev &&
                    'ieConditionalStartComment' === e.prev.type &&
                    e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset &&
                    e.firstChild &&
                    'ieConditionalEndComment' === e.firstChild.type &&
                    e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
                  e.walk((e) => {
                    if (e.children)
                      for (let O = 0; O < e.children.length; O++) {
                        let en = e.children[O];
                        if (!d(en)) continue;
                        let er = en.prev,
                          eu = en.firstChild;
                        e.removeChild(er), O--;
                        let ei = new et(er.sourceSpan.start, eu.sourceSpan.end),
                          ea = new et(ei.start, en.sourceSpan.end);
                        (en.condition = er.condition),
                          (en.sourceSpan = ea),
                          (en.startSourceSpan = ei),
                          en.removeChild(eu);
                      }
                  });
                }
                function E(e, O, en) {
                  e.walk((e) => {
                    if (e.children)
                      for (let er = 0; er < e.children.length; er++) {
                        let eu = e.children[er];
                        if ('text' !== eu.type && !O(eu)) continue;
                        'text' !== eu.type && ((eu.type = 'text'), (eu.value = en(eu)));
                        let ei = eu.prev;
                        !ei ||
                          'text' !== ei.type ||
                          ((ei.value += eu.value),
                          (ei.sourceSpan = new et(ei.sourceSpan.start, eu.sourceSpan.end)),
                          e.removeChild(eu),
                          er--);
                      }
                  });
                }
                function N(e) {
                  return E(
                    e,
                    (e) => 'cdata' === e.type,
                    (e) => `<![CDATA[${e.value}]]>`
                  );
                }
                function x(e) {
                  let d = (e) =>
                    'element' === e.type &&
                    0 === e.attrs.length &&
                    1 === e.children.length &&
                    'text' === e.firstChild.type &&
                    !eu(e.children[0].value) &&
                    !e.firstChild.hasLeadingSpaces &&
                    !e.firstChild.hasTrailingSpaces &&
                    e.isLeadingSpaceSensitive &&
                    !e.hasLeadingSpaces &&
                    e.isTrailingSpaceSensitive &&
                    !e.hasTrailingSpaces &&
                    e.prev &&
                    'text' === e.prev.type &&
                    e.next &&
                    'text' === e.next.type;
                  e.walk((e) => {
                    if (e.children)
                      for (let O = 0; O < e.children.length; O++) {
                        let en = e.children[O];
                        if (!d(en)) continue;
                        let er = en.prev,
                          eu = en.next;
                        (er.value += `<${en.rawName}>` + en.firstChild.value + `</${en.rawName}>` + eu.value),
                          (er.sourceSpan = new et(er.sourceSpan.start, eu.sourceSpan.end)),
                          (er.isTrailingSpaceSensitive = eu.isTrailingSpaceSensitive),
                          (er.hasTrailingSpaces = eu.hasTrailingSpaces),
                          e.removeChild(en),
                          O--,
                          e.removeChild(eu);
                      }
                  });
                }
                function I(e, O) {
                  if ('html' === O.parser) return;
                  let en = /{{(.+?)}}/s;
                  e.walk((e) => {
                    if (ei(e))
                      for (let O of e.children) {
                        if ('text' !== O.type) continue;
                        let er = O.sourceSpan.start,
                          eu = null,
                          ei = O.value.split(en);
                        for (let en = 0; en < ei.length; en++, er = eu) {
                          let ea = ei[en];
                          if (en % 2 == 0) {
                            (eu = er.moveBy(ea.length)),
                              ea.length > 0 &&
                                e.insertChildBefore(O, { type: 'text', value: ea, sourceSpan: new et(er, eu) });
                            continue;
                          }
                          (eu = er.moveBy(ea.length + 4)),
                            e.insertChildBefore(O, {
                              type: 'interpolation',
                              sourceSpan: new et(er, eu),
                              children:
                                0 === ea.length
                                  ? []
                                  : [{ type: 'text', value: ea, sourceSpan: new et(er.moveBy(2), eu.moveBy(-2)) }]
                            });
                        }
                        e.removeChild(O);
                      }
                  });
                }
                function P(e) {
                  e.walk((e) => {
                    if (!e.children) return;
                    if (
                      0 === e.children.length ||
                      (1 === e.children.length && 'text' === e.children[0].type && 0 === en(e.children[0].value).length)
                    ) {
                      (e.hasDanglingSpaces = e.children.length > 0), (e.children = []);
                      return;
                    }
                    let O = ec(e),
                      eu = eo(e);
                    if (!O)
                      for (let O = 0; O < e.children.length; O++) {
                        let en = e.children[O];
                        if ('text' !== en.type) continue;
                        let { leadingWhitespace: eu, text: ei, trailingWhitespace: ea } = er(en.value),
                          es = en.prev,
                          eo = en.next;
                        ei
                          ? ((en.value = ei),
                            (en.sourceSpan = new et(
                              en.sourceSpan.start.moveBy(eu.length),
                              en.sourceSpan.end.moveBy(-ea.length)
                            )),
                            eu && (es && (es.hasTrailingSpaces = !0), (en.hasLeadingSpaces = !0)),
                            ea && ((en.hasTrailingSpaces = !0), eo && (eo.hasLeadingSpaces = !0)))
                          : (e.removeChild(en),
                            O--,
                            (eu || ea) && (es && (es.hasTrailingSpaces = !0), eo && (eo.hasLeadingSpaces = !0)));
                      }
                    (e.isWhitespaceSensitive = O), (e.isIndentationSensitive = eu);
                  });
                }
                function $(e) {
                  e.walk((e) => {
                    e.isSelfClosing =
                      !e.children ||
                      ('element' === e.type && (e.tagDefinition.isVoid || e.startSourceSpan === e.endSourceSpan));
                  });
                }
                function D(e, O) {
                  e.walk((e) => {
                    'element' === e.type &&
                      (e.hasHtmComponentClosingTag =
                        e.endSourceSpan &&
                        /^<\s*\/\s*\/\s*>$/.test(
                          O.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset)
                        ));
                  });
                }
                function T(e, O) {
                  e.walk((e) => {
                    e.cssDisplay = ea(e, O);
                  });
                }
                function m(e, O) {
                  e.walk((e) => {
                    let { children: et } = e;
                    if (et) {
                      if (0 === et.length) {
                        e.isDanglingSpaceSensitive = es(e);
                        return;
                      }
                      for (let e of et) (e.isLeadingSpaceSensitive = el(e, O)), (e.isTrailingSpaceSensitive = ep(e, O));
                      for (let e = 0; e < et.length; e++) {
                        let O = et[e];
                        (O.isLeadingSpaceSensitive =
                          (0 === e || O.prev.isTrailingSpaceSensitive) && O.isLeadingSpaceSensitive),
                          (O.isTrailingSpaceSensitive =
                            (e === et.length - 1 || O.next.isLeadingSpaceSensitive) && O.isTrailingSpaceSensitive);
                      }
                    }
                  });
                }
                function C(e, O) {
                  if ('vue' === O.parser) {
                    let et = e.children.find((e) => ed(e, O));
                    if (!et) return;
                    let { lang: en } = et.attrMap;
                    ('ts' === en || 'typescript' === en) && (O.__should_parse_vue_template_with_ts = !0);
                  }
                }
                O.exports = F;
              }
            }),
            r5 = te({
              'src/language-html/pragma.js'(e, O) {
                function t(e) {
                  return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e);
                }
                function s(e) {
                  return (
                    `<!-- @format -->

` + e.replace(/^\s*\n/, '')
                  );
                }
                ey(), (O.exports = { hasPragma: t, insertPragma: s });
              }
            }),
            r4 = te({
              'src/language-html/loc.js'(e, O) {
                function t(e) {
                  return e.sourceSpan.start.offset;
                }
                function s(e) {
                  return e.sourceSpan.end.offset;
                }
                ey(), (O.exports = { locStart: t, locEnd: s });
              }
            }),
            ut = te({
              'src/language-html/print/tag.js'(e, O) {
                ey();
                var et = tX(),
                  { isNonEmptyArray: en } = e3(),
                  {
                    builders: { indent: er, join: eu, line: ei, softline: ea, hardline: es },
                    utils: { replaceTextEndOfLine: eo }
                  } = eO(),
                  { locStart: el, locEnd: ep } = r4(),
                  {
                    isTextLikeNode: ec,
                    getLastDescendant: ed,
                    isPreLikeNode: eD,
                    hasPrettierIgnore: ef,
                    shouldPreserveContent: eg,
                    isVueSfcBlock: eh
                  } = r1();
                function E(e, O) {
                  return [e.isSelfClosing ? '' : N(e, O), x(e, O)];
                }
                function N(e, O) {
                  return e.lastChild && o(e.lastChild) ? '' : [I(e, O), $(e, O)];
                }
                function x(e, O) {
                  return (e.next ? m(e.next) : C(e.parent)) ? '' : [D(e, O), P(e, O)];
                }
                function I(e, O) {
                  return C(e) ? D(e.lastChild, O) : '';
                }
                function P(e, O) {
                  return o(e) ? $(e.parent, O) : d(e) ? q(e.next) : '';
                }
                function $(e, O) {
                  if ((et(!e.isSelfClosing), T(e, O))) return '';
                  switch (e.type) {
                    case 'ieConditionalComment':
                      return '<!';
                    case 'element':
                      if (e.hasHtmComponentClosingTag) return '<//';
                    default:
                      return `</${e.rawName}`;
                  }
                }
                function D(e, O) {
                  if (T(e, O)) return '';
                  switch (e.type) {
                    case 'ieConditionalComment':
                    case 'ieConditionalEndComment':
                      return '[endif]-->';
                    case 'ieConditionalStartComment':
                      return ']><!-->';
                    case 'interpolation':
                      return '}}';
                    case 'element':
                      if (e.isSelfClosing) return '/>';
                    default:
                      return '>';
                  }
                }
                function T(e, O) {
                  return !e.isSelfClosing && !e.endSourceSpan && (ef(e) || eg(e.parent, O));
                }
                function m(e) {
                  return (
                    e.prev &&
                    'docType' !== e.prev.type &&
                    !ec(e.prev) &&
                    e.isLeadingSpaceSensitive &&
                    !e.hasLeadingSpaces
                  );
                }
                function C(e) {
                  return (
                    e.lastChild &&
                    e.lastChild.isTrailingSpaceSensitive &&
                    !e.lastChild.hasTrailingSpaces &&
                    !ec(ed(e.lastChild)) &&
                    !eD(e)
                  );
                }
                function o(e) {
                  return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && ec(ed(e));
                }
                function d(e) {
                  return e.next && !ec(e.next) && ec(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
                }
                function v(e) {
                  let O = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
                  return !!O && (!O[1] || O[1].split(/\s+/));
                }
                function S(e) {
                  return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
                }
                function b(e, O, et) {
                  let ec = e.getValue();
                  if (!en(ec.attrs)) return ec.isSelfClosing ? ' ' : '';
                  let ed = ec.prev && 'comment' === ec.prev.type && v(ec.prev.value),
                    eD =
                      'boolean' == typeof ed ? () => ed : Array.isArray(ed) ? (e) => ed.includes(e.rawName) : () => !1,
                    ef = e.map((e) => {
                      let en = e.getValue();
                      return eD(en) ? eo(O.originalText.slice(el(en), ep(en))) : et();
                    }, 'attrs'),
                    eg =
                      'element' === ec.type &&
                      'script' === ec.fullName &&
                      1 === ec.attrs.length &&
                      'src' === ec.attrs[0].fullName &&
                      0 === ec.children.length,
                    ey = O.singleAttributePerLine && ec.attrs.length > 1 && !eh(ec, O) ? es : ei,
                    eE = [er([eg ? ' ' : ei, eu(ey, ef)])];
                  return (
                    (ec.firstChild && S(ec.firstChild)) || (ec.isSelfClosing && C(ec.parent)) || eg
                      ? eE.push(ec.isSelfClosing ? ' ' : '')
                      : eE.push(O.bracketSameLine ? (ec.isSelfClosing ? ' ' : '') : ec.isSelfClosing ? ei : ea),
                    eE
                  );
                }
                function B(e) {
                  return e.firstChild && S(e.firstChild) ? '' : J(e);
                }
                function k(e, O, et) {
                  let en = e.getValue();
                  return [M(en, O), b(e, O, et), en.isSelfClosing ? '' : B(en)];
                }
                function M(e, O) {
                  return e.prev && d(e.prev) ? '' : [R(e, O), q(e)];
                }
                function R(e, O) {
                  return S(e) ? J(e.parent) : m(e) ? D(e.prev, O) : '';
                }
                function q(e) {
                  switch (e.type) {
                    case 'ieConditionalComment':
                    case 'ieConditionalStartComment':
                      return `<!--[if ${e.condition}`;
                    case 'ieConditionalEndComment':
                      return '<!--<!';
                    case 'interpolation':
                      return '{{';
                    case 'docType':
                      return '<!DOCTYPE';
                    case 'element':
                      if (e.condition) return `<!--[if ${e.condition}]><!--><${e.rawName}`;
                    default:
                      return `<${e.rawName}`;
                  }
                }
                function J(e) {
                  switch ((et(!e.isSelfClosing), e.type)) {
                    case 'ieConditionalComment':
                      return ']>';
                    case 'element':
                      if (e.condition) return '><!--<![endif]-->';
                    default:
                      return '>';
                  }
                }
                O.exports = {
                  printClosingTag: E,
                  printClosingTagStart: N,
                  printClosingTagStartMarker: $,
                  printClosingTagEndMarker: D,
                  printClosingTagSuffix: P,
                  printClosingTagEnd: x,
                  needsToBorrowLastChildClosingTagEndMarker: C,
                  needsToBorrowParentClosingTagStartMarker: o,
                  needsToBorrowPrevClosingTagEndMarker: m,
                  printOpeningTag: k,
                  printOpeningTagStart: M,
                  printOpeningTagPrefix: R,
                  printOpeningTagStartMarker: q,
                  printOpeningTagEndMarker: J,
                  needsToBorrowNextOpeningTagStartMarker: d,
                  needsToBorrowParentOpeningTagEndMarker: S
                };
              }
            }),
            un = te({
              'node_modules/parse-srcset/src/parse-srcset.js'(et, ei) {
                ey(),
                  (er = []),
                  void 0 !==
                    (eu =
                      'function' ==
                      typeof (en = function () {
                        return function (e, O) {
                          var et = (O && O.logger) || console;
                          function n(e) {
                            return (
                              ' ' === e ||
                              '	' === e ||
                              e ===
                                `
` ||
                              '\f' === e ||
                              '\r' === e
                            );
                          }
                          function u(O) {
                            var et,
                              en = O.exec(e.substring(ef));
                            if (en) return (et = en[0]), (ef += et.length), et;
                          }
                          for (
                            var en,
                              er,
                              eu,
                              ei,
                              ea,
                              es = e.length,
                              eo = /^[ \t\n\r\u000c]+/,
                              el = /^[, \t\n\r\u000c]+/,
                              ep = /^[^ \t\n\r\u000c]+/,
                              ec = /[,]+$/,
                              ed = /^\d+$/,
                              eD = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
                              ef = 0,
                              eg = [];
                            ;

                          ) {
                            if ((u(el), ef >= es)) return eg;
                            (en = u(ep)), (er = []), ',' === en.slice(-1) ? ((en = en.replace(ec, '')), P()) : I();
                          }
                          function I() {
                            for (u(eo), eu = '', ei = 'in descriptor'; ; ) {
                              if (((ea = e.charAt(ef)), 'in descriptor' === ei)) {
                                if (n(ea)) eu && (er.push(eu), (eu = ''), (ei = 'after descriptor'));
                                else if (',' === ea) {
                                  (ef += 1), eu && er.push(eu), P();
                                  return;
                                } else if ('(' === ea) (eu += ea), (ei = 'in parens');
                                else if ('' === ea) {
                                  eu && er.push(eu), P();
                                  return;
                                } else eu += ea;
                              } else if ('in parens' === ei) {
                                if (')' === ea) (eu += ea), (ei = 'in descriptor');
                                else if ('' === ea) {
                                  er.push(eu), P();
                                  return;
                                } else eu += ea;
                              } else if ('after descriptor' === ei && !n(ea)) {
                                if ('' === ea) {
                                  P();
                                  return;
                                }
                                (ei = 'in descriptor'), (ef -= 1);
                              }
                              ef += 1;
                            }
                          }
                          function P() {
                            var O,
                              eu,
                              ei,
                              ea,
                              es,
                              eo,
                              el,
                              ep,
                              ec,
                              ef = !1,
                              ey = {};
                            for (ea = 0; ea < er.length; ea++)
                              (eo = (es = er[ea])[es.length - 1]),
                                (ep = parseInt((el = es.substring(0, es.length - 1)), 10)),
                                (ec = parseFloat(el)),
                                ed.test(el) && 'w' === eo
                                  ? ((O || eu) && (ef = !0), 0 === ep ? (ef = !0) : (O = ep))
                                  : eD.test(el) && 'x' === eo
                                  ? ((O || eu || ei) && (ef = !0), ec < 0 ? (ef = !0) : (eu = ec))
                                  : ed.test(el) && 'h' === eo
                                  ? ((ei || eu) && (ef = !0), 0 === ep ? (ef = !0) : (ei = ep))
                                  : (ef = !0);
                            ef
                              ? et &&
                                et.error &&
                                et.error("Invalid srcset descriptor found in '" + e + "' at '" + es + "'.")
                              : ((ey.url = en), O && (ey.w = O), eu && (ey.d = eu), ei && (ey.h = ei), eg.push(ey));
                          }
                        };
                      })
                        ? en.apply(O, er)
                        : en) && (e.exports = eu);
              }
            }),
            ur = te({
              'src/language-html/syntax-attribute.js'(e, O) {
                ey();
                var et = un(),
                  {
                    builders: { ifBreak: en, join: er, line: eu }
                  } = eO();
                function u(e) {
                  let O = et(e, {
                      logger: {
                        error(e) {
                          throw Error(e);
                        }
                      }
                    }),
                    ei = O.some((e) => {
                      let { w: O } = e;
                      return O;
                    }),
                    ea = O.some((e) => {
                      let { h: O } = e;
                      return O;
                    });
                  if (
                    ei +
                      ea +
                      O.some((e) => {
                        let { d: O } = e;
                        return O;
                      }) >
                    1
                  )
                    throw Error('Mixed descriptor in srcset is not supported');
                  let es = ei ? 'w' : ea ? 'h' : 'd',
                    eo = ei ? 'w' : ea ? 'h' : 'x',
                    F = (e) => Math.max(...e),
                    el = O.map((e) => e.url),
                    ep = F(el.map((e) => e.length)),
                    ec = O.map((e) => e[es]).map((e) => (e ? e.toString() : '')),
                    ed = ec.map((e) => {
                      let O = e.indexOf('.');
                      return -1 === O ? e.length : O;
                    }),
                    eD = F(ed);
                  return er(
                    [',', eu],
                    el.map((e, O) => {
                      let et = [e],
                        er = ec[O];
                      if (er) {
                        let eu = ep - e.length + 1,
                          ei = eD - ed[O],
                          ea = ' '.repeat(eu + ei);
                        et.push(en(ea, ' '), er + eo);
                      }
                      return et;
                    })
                  );
                }
                function i(e) {
                  return e.trim().split(/\s+/).join(' ');
                }
                O.exports = { printImgSrcset: u, printClassNames: i };
              }
            }),
            uu = te({
              'src/language-html/syntax-vue.js'(e, O) {
                ey();
                var {
                  builders: { group: et }
                } = eO();
                function s(e, O) {
                  let { left: en, operator: er, right: eu } = a(e);
                  return [
                    et(O(`function _(${en}) {}`, { parser: 'babel', __isVueForBindingLeft: !0 })),
                    ' ',
                    er,
                    ' ',
                    O(eu, { parser: '__js_expression' }, { stripTrailingHardline: !0 })
                  ];
                }
                function a(e) {
                  let O = /,([^,\]}]*)(?:,([^,\]}]*))?$/,
                    et = e.match(/(.*?)\s+(in|of)\s+(.*)/s);
                  if (!et) return;
                  let en = {};
                  if (((en.for = et[3].trim()), !en.for)) return;
                  let er = et[1].trim().replace(/^\(|\)$/g, ''),
                    eu = er.match(O);
                  eu
                    ? ((en.alias = er.replace(O, '')),
                      (en.iterator1 = eu[1].trim()),
                      eu[2] && (en.iterator2 = eu[2].trim()))
                    : (en.alias = er);
                  let ei = [en.alias, en.iterator1, en.iterator2];
                  if (!ei.some((e, O) => !e && (0 === O || ei.slice(O + 1).some(Boolean))))
                    return { left: ei.filter(Boolean).join(','), operator: et[2], right: en.for };
                }
                function n(e, O) {
                  return O(`function _(${e}) {}`, { parser: 'babel', __isVueBindings: !0 });
                }
                function u(e) {
                  let O = e.trim();
                  return (
                    /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/.test(O) ||
                    /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(O)
                  );
                }
                O.exports = { isVueEventBindingExpression: u, printVueFor: s, printVueBindings: n };
              }
            }),
            ui = te({
              'src/language-html/get-node-content.js'(e, O) {
                ey();
                var {
                  needsToBorrowParentClosingTagStartMarker: et,
                  printClosingTagStartMarker: en,
                  needsToBorrowLastChildClosingTagEndMarker: er,
                  printClosingTagEndMarker: eu,
                  needsToBorrowParentOpeningTagEndMarker: ei,
                  printOpeningTagEndMarker: ea
                } = ut();
                function l(e, O) {
                  let es = e.startSourceSpan.end.offset;
                  e.firstChild && ei(e.firstChild) && (es -= ea(e).length);
                  let eo = e.endSourceSpan.start.offset;
                  return (
                    e.lastChild && et(e.lastChild)
                      ? (eo += en(e, O).length)
                      : er(e) && (eo -= eu(e.lastChild, O).length),
                    O.originalText.slice(es, eo)
                  );
                }
                O.exports = l;
              }
            }),
            ua = te({
              'src/language-html/embed.js'(e, O) {
                ey();
                var {
                    builders: {
                      breakParent: et,
                      group: en,
                      hardline: er,
                      indent: eu,
                      line: ei,
                      fill: ea,
                      softline: es
                    },
                    utils: { mapDoc: eo, replaceTextEndOfLine: el }
                  } = eO(),
                  ep = ru(),
                  {
                    printClosingTag: ec,
                    printClosingTagSuffix: ed,
                    needsToBorrowPrevClosingTagEndMarker: eD,
                    printOpeningTagPrefix: ef,
                    printOpeningTag: eg
                  } = ut(),
                  { printImgSrcset: eh, printClassNames: eE } = ur(),
                  { printVueFor: eC, printVueBindings: eF, isVueEventBindingExpression: eA } = uu(),
                  {
                    isScriptLikeTag: ev,
                    isVueNonHtmlBlock: ex,
                    inferScriptParser: eb,
                    htmlTrimPreserveIndentation: eS,
                    dedentString: eT,
                    unescapeQuoteEntities: eB,
                    isVueSlotAttribute: eN,
                    isVueSfcBindingsAttribute: ew,
                    getTextValueParts: eP
                  } = r1(),
                  ek = ui();
                function b(e, O, et) {
                  let q = (O) => new RegExp(O.join('|')).test(e.fullName),
                    J = () => eB(e.value),
                    er = !1,
                    Q = (e, O) => {
                      let et =
                        'NGRoot' === e.type
                          ? 'NGMicrosyntax' === e.node.type &&
                            1 === e.node.body.length &&
                            'NGMicrosyntaxExpression' === e.node.body[0].type
                            ? e.node.body[0].expression
                            : e.node
                          : 'JsExpressionRoot' === e.type
                          ? e.node
                          : e;
                      et &&
                        ('ObjectExpression' === et.type ||
                          'ArrayExpression' === et.type ||
                          ('__vue_expression' === O.parser &&
                            ('TemplateLiteral' === et.type || 'StringLiteral' === et.type))) &&
                        (er = !0);
                    },
                    V = (e) => en(e),
                    j = function (e) {
                      let O = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                      return en([eu([es, e]), O ? es : '']);
                    },
                    Y = (e) => (er ? V(e) : j(e)),
                    ie = (e, et) => O(e, Object.assign({ __onHtmlBindingRoot: Q, __embeddedInHtml: !0 }, et));
                  if ('srcset' === e.fullName && ('img' === e.parent.fullName || 'source' === e.parent.fullName))
                    return j(eh(J()));
                  if ('class' === e.fullName && !et.parentParser) {
                    let e = J();
                    if (!e.includes('{{')) return eE(e);
                  }
                  if ('style' === e.fullName && !et.parentParser) {
                    let e = J();
                    if (!e.includes('{{')) return j(ie(e, { parser: 'css', __isHTMLStyleAttribute: !0 }));
                  }
                  if ('vue' === et.parser) {
                    if ('v-for' === e.fullName) return eC(J(), ie);
                    if (eN(e) || ew(e, et)) return eF(J(), ie);
                    if (q(['^@', '^v-on:'])) {
                      let e = J(),
                        O = eA(e)
                          ? '__js_expression'
                          : et.__should_parse_vue_template_with_ts
                          ? '__vue_ts_event_binding'
                          : '__vue_event_binding';
                      return Y(ie(e, { parser: O }));
                    }
                    if (q(['^:', '^v-bind:'])) return Y(ie(J(), { parser: '__vue_expression' }));
                    if (q(['^v-'])) return Y(ie(J(), { parser: '__js_expression' }));
                  }
                  if ('angular' === et.parser) {
                    let ee = (e, O) => ie(e, Object.assign(Object.assign({}, O), {}, { trailingComma: 'none' }));
                    if (q(['^\\(.+\\)$', '^on-'])) return Y(ee(J(), { parser: '__ng_action' }));
                    if (q(['^\\[.+\\]$', '^bind(on)?-', '^ng-(if|show|hide|class|style)$']))
                      return Y(ee(J(), { parser: '__ng_binding' }));
                    if (q(['^i18n(-.+)?$'])) {
                      let O = J().trim();
                      return j(ea(eP(e, O)), !O.includes('@@'));
                    }
                    if (q(['^\\*'])) return Y(ee(J(), { parser: '__ng_directive' }));
                    let O = /{{(.+?)}}/s,
                      et = J();
                    if (O.test(et)) {
                      let e = [];
                      for (let [er, ea] of et.split(O).entries())
                        if (er % 2 == 0) e.push(el(ea));
                        else
                          try {
                            e.push(
                              en([
                                '{{',
                                eu([ei, ee(ea, { parser: '__ng_interpolation', __isInHtmlInterpolation: !0 })]),
                                ei,
                                '}}'
                              ])
                            );
                          } catch {
                            e.push('{{', el(ea), '}}');
                          }
                      return en(e);
                    }
                  }
                  return null;
                }
                function B(e, O, ea, es) {
                  let el = e.getValue();
                  switch (el.type) {
                    case 'element':
                      if (ev(el) || 'interpolation' === el.type) return;
                      if (!el.isSelfClosing && ex(el, es)) {
                        let et = eb(el, es);
                        if (!et) return;
                        let eu = ek(el, es),
                          ei = /^\s*$/.test(eu),
                          eo = '';
                        return (
                          ei ||
                            (ei =
                              '' ===
                              (eo = ea(eS(eu), { parser: et, __embeddedInHtml: !0 }, { stripTrailingHardline: !0 }))),
                          [ef(el, es), en(eg(e, es, O)), ei ? '' : er, eo, ei ? '' : er, ec(el, es), ed(el, es)]
                        );
                      }
                      break;
                    case 'text':
                      if (ev(el.parent)) {
                        let e = eb(el.parent, es);
                        if (e) {
                          let O = 'markdown' === e ? eT(el.value.replace(/^[^\S\n]*\n/, '')) : el.value,
                            en = { parser: e, __embeddedInHtml: !0 };
                          if ('html' === es.parser && 'babel' === e) {
                            let e = 'script',
                              { attrMap: O } = el.parent;
                            O &&
                              ('module' === O.type || ('text/babel' === O.type && 'module' === O['data-type'])) &&
                              (e = 'module'),
                              (en.__babelSourceType = e);
                          }
                          return [et, ef(el, es), ea(O, en, { stripTrailingHardline: !0 }), ed(el, es)];
                        }
                      } else if ('interpolation' === el.parent.type) {
                        let e = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
                        return (
                          'angular' === es.parser
                            ? ((e.parser = '__ng_interpolation'), (e.trailingComma = 'none'))
                            : 'vue' === es.parser
                            ? (e.parser = es.__should_parse_vue_template_with_ts
                                ? '__vue_ts_expression'
                                : '__vue_expression')
                            : (e.parser = '__js_expression'),
                          [
                            eu([ei, ea(el.value, e, { stripTrailingHardline: !0 })]),
                            el.parent.next && eD(el.parent.next) ? ' ' : ei
                          ]
                        );
                      }
                      break;
                    case 'attribute': {
                      if (!el.value) break;
                      if (
                        /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(
                          es.originalText.slice(el.valueSpan.start.offset, el.valueSpan.end.offset)
                        ) ||
                        ('lwc' === es.parser &&
                          /^{.*}$/s.test(es.originalText.slice(el.valueSpan.start.offset, el.valueSpan.end.offset)))
                      )
                        return [el.rawName, '=', el.value];
                      let e = b(
                        el,
                        (e, O) =>
                          ea(e, Object.assign({ __isInHtmlAttribute: !0, __embeddedInHtml: !0 }, O), {
                            stripTrailingHardline: !0
                          }),
                        es
                      );
                      if (e)
                        return [
                          el.rawName,
                          '="',
                          en(eo(e, (e) => ('string' == typeof e ? e.replace(/"/g, '&quot;') : e))),
                          '"'
                        ];
                      break;
                    }
                    case 'front-matter':
                      return ep(el, ea);
                  }
                }
                O.exports = B;
              }
            }),
            us = te({
              'src/language-html/print/children.js'(e, O) {
                ey();
                var {
                    builders: { breakParent: et, group: en, ifBreak: er, line: eu, softline: ei, hardline: ea },
                    utils: { replaceTextEndOfLine: es }
                  } = eO(),
                  { locStart: eo, locEnd: el } = r4(),
                  {
                    forceBreakChildren: ep,
                    forceNextEmptyLine: ec,
                    isTextLikeNode: ed,
                    hasPrettierIgnore: eD,
                    preferHardlineAsLeadingSpaces: ef
                  } = r1(),
                  {
                    printOpeningTagPrefix: eg,
                    needsToBorrowNextOpeningTagStartMarker: eh,
                    printOpeningTagStartMarker: eE,
                    needsToBorrowPrevClosingTagEndMarker: eC,
                    printClosingTagEndMarker: eF,
                    printClosingTagSuffix: eA,
                    needsToBorrowParentClosingTagStartMarker: ev
                  } = ut();
                function $(e, O, et) {
                  let en = e.getValue();
                  return eD(en)
                    ? [
                        eg(en, O),
                        ...es(
                          O.originalText.slice(
                            eo(en) + (en.prev && eh(en.prev) ? eE(en).length : 0),
                            el(en) - (en.next && eC(en.next) ? eF(en, O).length : 0)
                          )
                        ),
                        eA(en, O)
                      ]
                    : et();
                }
                function D(e, O) {
                  return ed(e) && ed(O)
                    ? e.isTrailingSpaceSensitive
                      ? e.hasTrailingSpaces
                        ? ef(O)
                          ? ea
                          : eu
                        : ''
                      : ef(O)
                      ? ea
                      : ei
                    : (eh(e) &&
                        (eD(O) || O.firstChild || O.isSelfClosing || ('element' === O.type && O.attrs.length > 0))) ||
                      ('element' === e.type && e.isSelfClosing && eC(O))
                    ? ''
                    : !O.isLeadingSpaceSensitive ||
                      ef(O) ||
                      (eC(O) && e.lastChild && ev(e.lastChild) && e.lastChild.lastChild && ev(e.lastChild.lastChild))
                    ? ea
                    : O.hasLeadingSpaces
                    ? eu
                    : ei;
                }
                function T(e, O, eu) {
                  let es = e.getValue();
                  if (ep(es))
                    return [
                      et,
                      ...e.map((e) => {
                        let et = e.getValue(),
                          en = et.prev ? D(et.prev, et) : '';
                        return [en ? [en, ec(et.prev) ? ea : ''] : '', $(e, O, eu)];
                      }, 'children')
                    ];
                  let eo = es.children.map(() => Symbol(''));
                  return e.map((e, et) => {
                    let es = e.getValue();
                    if (ed(es)) {
                      if (es.prev && ed(es.prev)) {
                        let et = D(es.prev, es);
                        if (et) return ec(es.prev) ? [ea, ea, $(e, O, eu)] : [et, $(e, O, eu)];
                      }
                      return $(e, O, eu);
                    }
                    let el = [],
                      ep = [],
                      eD = [],
                      ef = [],
                      eg = es.prev ? D(es.prev, es) : '',
                      ey = es.next ? D(es, es.next) : '';
                    return (
                      eg &&
                        (ec(es.prev)
                          ? el.push(ea, ea)
                          : eg === ea
                          ? el.push(ea)
                          : ed(es.prev)
                          ? ep.push(eg)
                          : ep.push(er('', ei, { groupId: eo[et - 1] }))),
                      ey &&
                        (ec(es)
                          ? ed(es.next) && ef.push(ea, ea)
                          : ey === ea
                          ? ed(es.next) && ef.push(ea)
                          : eD.push(ey)),
                      [...el, en([...ep, en([$(e, O, eu), ...eD], { id: eo[et] })]), ...ef]
                    );
                  }, 'children');
                }
                O.exports = { printChildren: T };
              }
            }),
            uo = te({
              'src/language-html/print/element.js'(e, O) {
                ey();
                var {
                    builders: {
                      breakParent: et,
                      dedentToRoot: en,
                      group: er,
                      ifBreak: eu,
                      indentIfBreak: ei,
                      indent: ea,
                      line: es,
                      softline: eo
                    },
                    utils: { replaceTextEndOfLine: el }
                  } = eO(),
                  ep = ui(),
                  {
                    shouldPreserveContent: ec,
                    isScriptLikeTag: ed,
                    isVueCustomBlock: eD,
                    countParents: ef,
                    forceBreakContent: eg
                  } = r1(),
                  {
                    printOpeningTagPrefix: eh,
                    printOpeningTag: eE,
                    printClosingTagSuffix: eC,
                    printClosingTag: eF,
                    needsToBorrowPrevClosingTagEndMarker: eA,
                    needsToBorrowLastChildClosingTagEndMarker: ev
                  } = ut(),
                  { printChildren: ex } = us();
                function D(e, O, ey) {
                  var eb, eS;
                  let eT = e.getValue();
                  if (ec(eT, O)) return [eh(eT, O), er(eE(e, O, ey)), ...el(ep(eT, O)), ...eF(eT, O), eC(eT, O)];
                  let eB =
                      1 === eT.children.length &&
                      'interpolation' === eT.firstChild.type &&
                      eT.firstChild.isLeadingSpaceSensitive &&
                      !eT.firstChild.hasLeadingSpaces &&
                      eT.lastChild.isTrailingSpaceSensitive &&
                      !eT.lastChild.hasTrailingSpaces,
                    eN = Symbol('element-attr-group-id');
                  return (
                    (eS =
                      0 === eT.children.length
                        ? eT.hasDanglingSpaces && eT.isDanglingSpaceSensitive
                          ? es
                          : ''
                        : [
                            eg(eT) ? et : '',
                            ((eb = [
                              eB
                                ? eu(eo, '', { groupId: eN })
                                : eT.firstChild.hasLeadingSpaces && eT.firstChild.isLeadingSpaceSensitive
                                ? es
                                : 'text' === eT.firstChild.type && eT.isWhitespaceSensitive && eT.isIndentationSensitive
                                ? en(eo)
                                : eo,
                              ex(e, O, ey)
                            ]),
                            eB
                              ? ei(eb, { groupId: eN })
                              : (ed(eT) || eD(eT, O)) &&
                                'root' === eT.parent.type &&
                                'vue' === O.parser &&
                                !O.vueIndentScriptAndStyle
                              ? eb
                              : ea(eb)),
                            (eT.next ? eA(eT.next) : ev(eT.parent))
                              ? eT.lastChild.hasTrailingSpaces && eT.lastChild.isTrailingSpaceSensitive
                                ? ' '
                                : ''
                              : eB
                              ? eu(eo, '', { groupId: eN })
                              : eT.lastChild.hasTrailingSpaces && eT.lastChild.isTrailingSpaceSensitive
                              ? es
                              : ('comment' === eT.lastChild.type ||
                                  ('text' === eT.lastChild.type &&
                                    eT.isWhitespaceSensitive &&
                                    eT.isIndentationSensitive)) &&
                                RegExp(
                                  `\\n[\\t ]{${O.tabWidth * ef(e, (e) => e.parent && 'root' !== e.parent.type)}}$`
                                ).test(eT.lastChild.value)
                              ? ''
                              : eo
                          ]),
                    er([er(eE(e, O, ey), { id: eN }), eS, eF(eT, O)])
                  );
                }
                O.exports = { printElement: D };
              }
            }),
            ul = te({
              'src/language-html/printer-html.js'(e, O) {
                ey();
                var {
                    builders: { fill: et, group: en, hardline: er, literalline: eu },
                    utils: { cleanDoc: ei, getDocParts: ea, isConcat: es, replaceTextEndOfLine: eo }
                  } = eO(),
                  el = rY(),
                  { countChars: ep, unescapeQuoteEntities: ec, getTextValueParts: ed } = r1(),
                  eD = r9(),
                  { insertPragma: ef } = r5(),
                  { locStart: eg, locEnd: eh } = r4(),
                  eE = ua(),
                  {
                    printClosingTagSuffix: eC,
                    printClosingTagEnd: eF,
                    printOpeningTagPrefix: eA,
                    printOpeningTagStart: ev
                  } = ut(),
                  { printElement: ex } = uo(),
                  { printChildren: eb } = us();
                function T(e, O, el) {
                  let eD = e.getValue();
                  switch (eD.type) {
                    case 'front-matter':
                      return eo(eD.raw);
                    case 'root':
                      return O.__onHtmlRoot && O.__onHtmlRoot(eD), [en(eb(e, O, el)), er];
                    case 'element':
                    case 'ieConditionalComment':
                      return ex(e, O, el);
                    case 'ieConditionalStartComment':
                    case 'ieConditionalEndComment':
                      return [ev(eD), eF(eD)];
                    case 'interpolation':
                      return [ev(eD, O), ...e.map(el, 'children'), eF(eD, O)];
                    case 'text': {
                      if ('interpolation' === eD.parent.type) {
                        let e = /\n[^\S\n]*$/,
                          O = e.test(eD.value);
                        return [...eo(O ? eD.value.replace(e, '') : eD.value), O ? er : ''];
                      }
                      let e = ei([eA(eD, O), ...ed(eD), eC(eD, O)]);
                      return es(e) || 'fill' === e.type ? et(ea(e)) : e;
                    }
                    case 'docType':
                      return [
                        en([ev(eD, O), ' ', eD.value.replace(/^html\b/i, 'html').replace(/\s+/g, ' ')]),
                        eF(eD, O)
                      ];
                    case 'comment':
                      return [eA(eD, O), ...eo(O.originalText.slice(eg(eD), eh(eD)), eu), eC(eD, O)];
                    case 'attribute': {
                      if (null === eD.value) return eD.rawName;
                      let e = ec(eD.value),
                        O = ep(e, "'") < ep(e, '"') ? "'" : '"';
                      return [
                        eD.rawName,
                        '=',
                        O,
                        ...eo('"' === O ? e.replace(/"/g, '&quot;') : e.replace(/'/g, '&apos;')),
                        O
                      ];
                    }
                    default:
                      throw Error(`Unexpected node type ${eD.type}`);
                  }
                }
                O.exports = { preprocess: eD, print: T, insertPragma: ef, massageAstNode: el, embed: eE };
              }
            }),
            up = te({
              'src/language-html/options.js'(e, O) {
                ey();
                var et = n2(),
                  en = 'HTML';
                O.exports = {
                  bracketSameLine: et.bracketSameLine,
                  htmlWhitespaceSensitivity: {
                    since: '1.15.0',
                    category: en,
                    type: 'choice',
                    default: 'css',
                    description: 'How to handle whitespaces in HTML.',
                    choices: [
                      { value: 'css', description: 'Respect the default value of CSS display property.' },
                      { value: 'strict', description: 'Whitespaces are considered sensitive.' },
                      { value: 'ignore', description: 'Whitespaces are considered insensitive.' }
                    ]
                  },
                  singleAttributePerLine: et.singleAttributePerLine,
                  vueIndentScriptAndStyle: {
                    since: '1.19.0',
                    category: en,
                    type: 'boolean',
                    default: !1,
                    description: 'Indent script and style tags in Vue files.'
                  }
                };
              }
            }),
            uc = te({
              'src/language-html/parsers.js'() {
                ey();
              }
            }),
            uD = te({
              'node_modules/linguist-languages/data/HTML.json'(e, O) {
                O.exports = {
                  name: 'HTML',
                  type: 'markup',
                  tmScope: 'text.html.basic',
                  aceMode: 'html',
                  codemirrorMode: 'htmlmixed',
                  codemirrorMimeType: 'text/html',
                  color: '#e34c26',
                  aliases: ['xhtml'],
                  extensions: ['.html', '.hta', '.htm', '.html.hl', '.inc', '.xht', '.xhtml'],
                  languageId: 146
                };
              }
            }),
            ug = te({
              'node_modules/linguist-languages/data/Vue.json'(e, O) {
                O.exports = {
                  name: 'Vue',
                  type: 'markup',
                  color: '#41b883',
                  extensions: ['.vue'],
                  tmScope: 'text.html.vue',
                  aceMode: 'html',
                  languageId: 391
                };
              }
            }),
            uy = te({
              'src/language-html/index.js'(e, O) {
                ey();
                var et = t3(),
                  en = ul(),
                  er = up(),
                  eu = uc(),
                  ei = [
                    et(uD(), () => ({
                      name: 'Angular',
                      since: '1.15.0',
                      parsers: ['angular'],
                      vscodeLanguageIds: ['html'],
                      extensions: ['.component.html'],
                      filenames: []
                    })),
                    et(uD(), (e) => ({
                      since: '1.15.0',
                      parsers: ['html'],
                      vscodeLanguageIds: ['html'],
                      extensions: [...e.extensions, '.mjml']
                    })),
                    et(uD(), () => ({
                      name: 'Lightning Web Components',
                      since: '1.17.0',
                      parsers: ['lwc'],
                      vscodeLanguageIds: ['html'],
                      extensions: [],
                      filenames: []
                    })),
                    et(ug(), () => ({ since: '1.10.0', parsers: ['vue'], vscodeLanguageIds: ['vue'] }))
                  ];
                O.exports = { languages: ei, printers: { html: en }, options: er, parsers: eu };
              }
            }),
            uh = te({
              'src/language-yaml/pragma.js'(e, O) {
                function t(e) {
                  return /^\s*@(?:prettier|format)\s*$/.test(e);
                }
                function s(e) {
                  return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(e);
                }
                function a(e) {
                  return `# @format

${e}`;
                }
                ey(), (O.exports = { isPragma: t, hasPragma: s, insertPragma: a });
              }
            }),
            uE = te({
              'src/language-yaml/loc.js'(e, O) {
                function t(e) {
                  return e.position.start.offset;
                }
                function s(e) {
                  return e.position.end.offset;
                }
                ey(), (O.exports = { locStart: t, locEnd: s });
              }
            }),
            uC = te({
              'src/language-yaml/embed.js'(e, O) {
                function t(e, O, et, en) {
                  if (
                    'root' === e.getValue().type &&
                    en.filepath &&
                    /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/.test(en.filepath)
                  )
                    return et(en.originalText, Object.assign(Object.assign({}, en), {}, { parser: 'json' }));
                }
                ey(), (O.exports = t);
              }
            }),
            uF = te({
              'src/language-yaml/utils.js'(e, O) {
                ey();
                var { getLast: et, isNonEmptyArray: en } = e3();
                function a(e, O) {
                  let et = 0,
                    en = e.stack.length - 1;
                  for (let er = 0; er < en; er++) {
                    let en = e.stack[er];
                    n(en) && O(en) && et++;
                  }
                  return et;
                }
                function n(e, O) {
                  return e && 'string' == typeof e.type && (!O || O.includes(e.type));
                }
                function u(e, O, et) {
                  return O(
                    'children' in e
                      ? Object.assign(Object.assign({}, e), {}, { children: e.children.map((et) => u(et, O, e)) })
                      : e,
                    et
                  );
                }
                function i(e, O, et) {
                  Object.defineProperty(e, O, { get: et, enumerable: !1 });
                }
                function l(e, O) {
                  let et = 0,
                    en = O.length;
                  for (let er = e.position.end.offset - 1; er < en; er++) {
                    let e = O[er];
                    if (
                      (e ===
                        `
` && et++,
                      1 === et && /\S/.test(e))
                    )
                      break;
                    if (2 === et) return !0;
                  }
                  return !1;
                }
                function p(e) {
                  switch (e.getValue().type) {
                    case 'tag':
                    case 'anchor':
                    case 'comment':
                      return !1;
                  }
                  let O = e.stack.length;
                  for (let et = 1; et < O; et++) {
                    let O = e.stack[et],
                      en = e.stack[et - 1];
                    if (Array.isArray(en) && 'number' == typeof O && O !== en.length - 1) return !1;
                  }
                  return !0;
                }
                function y(e) {
                  return en(e.children) ? y(et(e.children)) : e;
                }
                function h(e) {
                  return 'prettier-ignore' === e.value.trim();
                }
                function g(e) {
                  let O = e.getValue();
                  if ('documentBody' === O.type) {
                    let O = e.getParentNode();
                    return N(O.head) && h(et(O.head.endComments));
                  }
                  return F(O) && h(et(O.leadingComments));
                }
                function c(e) {
                  return !en(e.children) && !f(e);
                }
                function f(e) {
                  return F(e) || _(e) || w(e) || E(e) || N(e);
                }
                function F(e) {
                  return en(null == e ? void 0 : e.leadingComments);
                }
                function _(e) {
                  return en(null == e ? void 0 : e.middleComments);
                }
                function w(e) {
                  return null == e ? void 0 : e.indicatorComment;
                }
                function E(e) {
                  return null == e ? void 0 : e.trailingComment;
                }
                function N(e) {
                  return en(null == e ? void 0 : e.endComments);
                }
                function x(e) {
                  let O = [],
                    et;
                  for (let en of e.split(/( +)/))
                    ' ' !== en
                      ? ' ' === et
                        ? O.push(en)
                        : O.push((O.pop() || '') + en)
                      : void 0 === et && O.unshift(''),
                      (et = en);
                  return (
                    ' ' === et && O.push((O.pop() || '') + ' '),
                    '' === O[0] && (O.shift(), O.unshift(' ' + (O.shift() || ''))),
                    O
                  );
                }
                function I(e, O, en) {
                  let er = O.split(
                    `
`
                  ).map((e, O, et) =>
                    0 === O && O === et.length - 1
                      ? e
                      : 0 !== O && O !== et.length - 1
                      ? e.trim()
                      : 0 === O
                      ? e.trimEnd()
                      : e.trimStart()
                  );
                  return 'preserve' === en.proseWrap
                    ? er.map((e) => (0 === e.length ? [] : [e]))
                    : er
                        .map((e) => (0 === e.length ? [] : x(e)))
                        .reduce(
                          (O, en, eu) =>
                            0 !== eu &&
                            er[eu - 1].length > 0 &&
                            en.length > 0 &&
                            !('quoteDouble' === e && et(et(O)).endsWith('\\'))
                              ? [...O.slice(0, -1), [...et(O), ...en]]
                              : [...O, en],
                          []
                        )
                        .map((e) => ('never' === en.proseWrap ? [e.join(' ')] : e));
                }
                function P(e, O) {
                  let { parentIndent: en, isLastDescendant: er, options: eu } = O,
                    ei =
                      e.position.start.line === e.position.end.line
                        ? ''
                        : eu.originalText
                            .slice(e.position.start.offset, e.position.end.offset)
                            .match(/^[^\n]*\n(.*)$/s)[1],
                    ea;
                  if (null === e.indent) {
                    let e = ei.match(/^(?<leadingSpace> *)[^\n\r ]/m);
                    ea = e ? e.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
                  } else ea = e.indent - 1 + en;
                  let es = ei
                    .split(
                      `
`
                    )
                    .map((e) => e.slice(ea));
                  if ('preserve' === eu.proseWrap || 'blockLiteral' === e.type)
                    return b(es.map((e) => (0 === e.length ? [] : [e])));
                  return b(
                    es
                      .map((e) => (0 === e.length ? [] : x(e)))
                      .reduce(
                        (e, O, en) =>
                          0 !== en &&
                          es[en - 1].length > 0 &&
                          O.length > 0 &&
                          !/^\s/.test(O[0]) &&
                          !/^\s|\s$/.test(et(e))
                            ? [...e.slice(0, -1), [...et(e), ...O]]
                            : [...e, O],
                        []
                      )
                      .map((e) =>
                        e.reduce(
                          (e, O) =>
                            e.length > 0 && /\s$/.test(et(e)) ? [...e.slice(0, -1), et(e) + ' ' + O] : [...e, O],
                          []
                        )
                      )
                      .map((e) => ('never' === eu.proseWrap ? [e.join(' ')] : e))
                  );
                  function b(O) {
                    if ('keep' === e.chomping) return 0 === et(O).length ? O.slice(0, -1) : O;
                    let en = 0;
                    for (let e = O.length - 1; e >= 0 && 0 === O[e].length; e--) en++;
                    return 0 === en ? O : en >= 2 && !er ? O.slice(0, -(en - 1)) : O.slice(0, -en);
                  }
                }
                function $(e) {
                  if (!e) return !0;
                  switch (e.type) {
                    case 'plain':
                    case 'quoteDouble':
                    case 'quoteSingle':
                    case 'alias':
                    case 'flowMapping':
                    case 'flowSequence':
                      return !0;
                    default:
                      return !1;
                  }
                }
                O.exports = {
                  getLast: et,
                  getAncestorCount: a,
                  isNode: n,
                  isEmptyNode: c,
                  isInlineNode: $,
                  mapNode: u,
                  defineShortcut: i,
                  isNextLineEmpty: l,
                  isLastDescendantNode: p,
                  getBlockValueLineContents: P,
                  getFlowScalarLineContents: I,
                  getLastDescendantNode: y,
                  hasPrettierIgnore: g,
                  hasLeadingComments: F,
                  hasMiddleComments: _,
                  hasIndicatorComment: w,
                  hasTrailingComment: E,
                  hasEndComments: N
                };
              }
            }),
            uA = te({
              'src/language-yaml/print-preprocess.js'(e, O) {
                ey();
                var { defineShortcut: et, mapNode: en } = uF();
                function a(e) {
                  return en(e, n);
                }
                function n(e) {
                  switch (e.type) {
                    case 'document':
                      et(e, 'head', () => e.children[0]), et(e, 'body', () => e.children[1]);
                      break;
                    case 'documentBody':
                    case 'sequenceItem':
                    case 'flowSequenceItem':
                    case 'mappingKey':
                    case 'mappingValue':
                      et(e, 'content', () => e.children[0]);
                      break;
                    case 'mappingItem':
                    case 'flowMappingItem':
                      et(e, 'key', () => e.children[0]), et(e, 'value', () => e.children[1]);
                  }
                  return e;
                }
                O.exports = a;
              }
            }),
            uv = te({
              'src/language-yaml/print/misc.js'(e, O) {
                ey();
                var {
                    builders: { softline: et, align: en }
                  } = eO(),
                  { hasEndComments: er, isNextLineEmpty: eu, isNode: ei } = uF(),
                  ea = new WeakMap();
                function l(e, O) {
                  let en = e.getValue(),
                    er = e.stack[0],
                    ei;
                  return (
                    ea.has(er) ? (ei = ea.get(er)) : ((ei = new Set()), ea.set(er, ei)),
                    !ei.has(en.position.end.line) && (ei.add(en.position.end.line), eu(en, O) && !p(e.getParentNode()))
                      ? et
                      : ''
                  );
                }
                function p(e) {
                  return er(e) && !ei(e, ['documentHead', 'documentBody', 'flowMapping', 'flowSequence']);
                }
                function y(e, O) {
                  return en(' '.repeat(e), O);
                }
                O.exports = { alignWithSpaces: y, shouldPrintEndComments: p, printNextEmptyLine: l };
              }
            }),
            ux = te({
              'src/language-yaml/print/flow-mapping-sequence.js'(e, O) {
                ey();
                var {
                    builders: { ifBreak: et, line: en, softline: er, hardline: eu, join: ei }
                  } = eO(),
                  { isEmptyNode: ea, getLast: es, hasEndComments: eo } = uF(),
                  { printNextEmptyLine: el, alignWithSpaces: ep } = uv();
                function g(e, O, el) {
                  let ec = e.getValue(),
                    ed = 'flowMapping' === ec.type,
                    eD = er;
                  ed && ec.children.length > 0 && el.bracketSpacing && (eD = en);
                  let ef = es(ec.children),
                    eg = ef && 'flowMappingItem' === ef.type && ea(ef.key) && ea(ef.value);
                  return [
                    ed ? '{' : '[',
                    ep(el.tabWidth, [
                      eD,
                      c(e, O, el),
                      'none' === el.trailingComma ? '' : et(','),
                      eo(ec) ? [eu, ei(eu, e.map(O, 'endComments'))] : ''
                    ]),
                    eg ? '' : eD,
                    ed ? '}' : ']'
                  ];
                }
                function c(e, O, et) {
                  let er = e.getValue();
                  return e.map(
                    (e, eu) => [
                      O(),
                      eu === er.children.length - 1
                        ? ''
                        : [
                            ',',
                            en,
                            er.children[eu].position.start.line !== er.children[eu + 1].position.start.line
                              ? el(e, et.originalText)
                              : ''
                          ]
                    ],
                    'children'
                  );
                }
                O.exports = { printFlowMapping: g, printFlowSequence: g };
              }
            }),
            ub = te({
              'src/language-yaml/print/mapping-item.js'(e, O) {
                ey();
                var {
                    builders: { conditionalGroup: et, group: en, hardline: er, ifBreak: eu, join: ei, line: ea }
                  } = eO(),
                  {
                    hasLeadingComments: es,
                    hasMiddleComments: eo,
                    hasTrailingComment: el,
                    hasEndComments: ep,
                    isNode: ec,
                    isEmptyNode: ed,
                    isInlineNode: eD
                  } = uF(),
                  { alignWithSpaces: ef } = uv();
                function _(e, O, eg, ey, eh) {
                  let { key: eE, value: eC } = e,
                    eF = ed(eE),
                    eA = ed(eC);
                  if (eF && eA) return ': ';
                  let ev = ey('key'),
                    ex = E(e) ? ' ' : '';
                  if (eA)
                    return 'flowMappingItem' === e.type && 'flowMapping' === O.type
                      ? ev
                      : 'mappingItem' === e.type &&
                        w(eE.content, eh) &&
                        !el(eE.content) &&
                        (!O.tag || 'tag:yaml.org,2002:set' !== O.tag.value)
                      ? [ev, ex, ':']
                      : ['? ', ef(2, ev)];
                  let eb = ey('value');
                  if (eF) return [': ', ef(2, eb)];
                  if (es(eC) || !eD(eE.content))
                    return [
                      '? ',
                      ef(2, ev),
                      er,
                      ei(
                        '',
                        eg.map(ey, 'value', 'leadingComments').map((e) => [e, er])
                      ),
                      ': ',
                      ef(2, eb)
                    ];
                  if (
                    N(eE.content) &&
                    !es(eE.content) &&
                    !eo(eE.content) &&
                    !el(eE.content) &&
                    !ep(eE) &&
                    !es(eC.content) &&
                    !eo(eC.content) &&
                    !ep(eC) &&
                    w(eC.content, eh)
                  )
                    return [ev, ex, ': ', eb];
                  let eS = Symbol('mappingKey'),
                    eT = en([eu('? '), en(ef(2, ev), { id: eS })]),
                    eB = [er, ': ', ef(2, eb)],
                    eN = [ex, ':'];
                  es(eC.content) ||
                  (ep(eC) && eC.content && !ec(eC.content, ['mapping', 'sequence'])) ||
                  ('mapping' === O.type && el(eE.content) && eD(eC.content)) ||
                  (ec(eC.content, ['mapping', 'sequence']) && null === eC.content.tag && null === eC.content.anchor)
                    ? eN.push(er)
                    : eC.content && eN.push(ea),
                    eN.push(eb);
                  let ew = ef(eh.tabWidth, eN);
                  return !w(eE.content, eh) || es(eE.content) || eo(eE.content) || ep(eE)
                    ? et([[eT, eu(eB, ew, { groupId: eS })]])
                    : et([[ev, ew]]);
                }
                function w(e, O) {
                  if (!e) return !0;
                  switch (e.type) {
                    case 'plain':
                    case 'quoteSingle':
                    case 'quoteDouble':
                      break;
                    case 'alias':
                      return !0;
                    default:
                      return !1;
                  }
                  if ('preserve' === O.proseWrap) return e.position.start.line === e.position.end.line;
                  if (/\\$/m.test(O.originalText.slice(e.position.start.offset, e.position.end.offset))) return !1;
                  switch (O.proseWrap) {
                    case 'never':
                      return !e.value.includes(`
`);
                    case 'always':
                      return !/[\n ]/.test(e.value);
                    default:
                      return !1;
                  }
                }
                function E(e) {
                  return e.key.content && 'alias' === e.key.content.type;
                }
                function N(e) {
                  if (!e) return !0;
                  switch (e.type) {
                    case 'plain':
                    case 'quoteDouble':
                    case 'quoteSingle':
                      return e.position.start.line === e.position.end.line;
                    case 'alias':
                      return !0;
                    default:
                      return !1;
                  }
                }
                O.exports = _;
              }
            }),
            uS = te({
              'src/language-yaml/print/block.js'(e, O) {
                ey();
                var {
                    builders: {
                      dedent: et,
                      dedentToRoot: en,
                      fill: er,
                      hardline: eu,
                      join: ei,
                      line: ea,
                      literalline: es,
                      markAsRoot: eo
                    },
                    utils: { getDocParts: el }
                  } = eO(),
                  {
                    getAncestorCount: ep,
                    getBlockValueLineContents: ec,
                    hasIndicatorComment: ed,
                    isLastDescendantNode: eD,
                    isNode: ef
                  } = uF(),
                  { alignWithSpaces: eg } = uv();
                function w(e, O, ey) {
                  let eh = e.getValue(),
                    eE = ep(e, (e) => ef(e, ['sequence', 'mapping'])),
                    eC = eD(e),
                    eF = ['blockFolded' === eh.type ? '>' : '|'];
                  null !== eh.indent && eF.push(eh.indent.toString()),
                    'clip' !== eh.chomping && eF.push('keep' === eh.chomping ? '+' : '-'),
                    ed(eh) && eF.push(' ', O('indicatorComment'));
                  let eA = ec(eh, { parentIndent: eE, isLastDescendant: eC, options: ey }),
                    ev = [];
                  for (let [e, O] of eA.entries())
                    0 === e && ev.push(eu),
                      ev.push(er(el(ei(ea, O)))),
                      e !== eA.length - 1
                        ? ev.push(0 === O.length ? eu : eo(es))
                        : 'keep' === eh.chomping && eC && ev.push(en(0 === O.length ? eu : es));
                  return (
                    null === eh.indent ? eF.push(et(eg(ey.tabWidth, ev))) : eF.push(en(eg(eh.indent - 1 + eE, ev))), eF
                  );
                }
                O.exports = w;
              }
            }),
            uT = te({
              'src/language-yaml/printer-yaml.js'(e, O) {
                ey();
                var {
                    builders: {
                      breakParent: et,
                      fill: en,
                      group: er,
                      hardline: eu,
                      join: ei,
                      line: ea,
                      lineSuffix: es,
                      literalline: eo
                    },
                    utils: { getDocParts: el, replaceTextEndOfLine: ep }
                  } = eO(),
                  { isPreviousLineEmpty: ec } = e3(),
                  { insertPragma: ed, isPragma: eD } = uh(),
                  { locStart: ef } = uE(),
                  eg = uC(),
                  {
                    getFlowScalarLineContents: eh,
                    getLastDescendantNode: eE,
                    hasLeadingComments: eC,
                    hasMiddleComments: eF,
                    hasTrailingComment: eA,
                    hasEndComments: ev,
                    hasPrettierIgnore: ex,
                    isLastDescendantNode: eb,
                    isNode: eS,
                    isInlineNode: eT
                  } = uF(),
                  eB = uA(),
                  { alignWithSpaces: eN, printNextEmptyLine: ew, shouldPrintEndComments: eP } = uv(),
                  { printFlowMapping: ek, printFlowSequence: ej } = ux(),
                  eI = ub(),
                  eL = uS();
                function M(e, O, en) {
                  let ea = e.getValue(),
                    el = [];
                  'mappingValue' !== ea.type && eC(ea) && el.push([ei(eu, e.map(en, 'leadingComments')), eu]);
                  let { tag: ed, anchor: eD } = ea;
                  ed && el.push(en('tag')), ed && eD && el.push(' '), eD && el.push(en('anchor'));
                  let eg = '';
                  eS(ea, ['mapping', 'sequence', 'comment', 'directive', 'mappingItem', 'sequenceItem']) &&
                    !eb(e) &&
                    (eg = ew(e, O.originalText)),
                    (ed || eD) && (eS(ea, ['sequence', 'mapping']) && !eF(ea) ? el.push(eu) : el.push(' ')),
                    eF(ea) &&
                      el.push([1 === ea.middleComments.length ? '' : eu, ei(eu, e.map(en, 'middleComments')), eu]);
                  let ey = e.getParentNode();
                  return (
                    ex(e)
                      ? el.push(
                          ep(O.originalText.slice(ea.position.start.offset, ea.position.end.offset).trimEnd(), eo)
                        )
                      : el.push(er(R(ea, ey, e, O, en))),
                    eA(ea) &&
                      !eS(ea, ['document', 'documentHead']) &&
                      el.push(
                        es([
                          'mappingValue' !== ea.type || ea.content ? ' ' : '',
                          'mappingKey' === ey.type && 'mapping' === e.getParentNode(2).type && eT(ea) ? '' : et,
                          en('trailingComment')
                        ])
                      ),
                    eP(ea) &&
                      el.push(
                        eN('sequenceItem' === ea.type ? 2 : 0, [
                          eu,
                          ei(
                            eu,
                            e.map((e) => [ec(O.originalText, e.getValue(), ef) ? eu : '', en()], 'endComments')
                          )
                        ])
                      ),
                    el.push(eg),
                    el
                  );
                }
                function R(e, O, et, en, er) {
                  switch (e.type) {
                    case 'root': {
                      let { children: O } = e,
                        en = [];
                      et.each((e, et) => {
                        let ei = O[et],
                          ea = O[et + 1];
                        0 !== et && en.push(eu),
                          en.push(er()),
                          J(ei, ea)
                            ? (en.push(eu, '...'), eA(ei) && en.push(' ', er('trailingComment')))
                            : ea && !eA(ea.head) && en.push(eu, '---');
                      }, 'children');
                      let ei = eE(e);
                      return (eS(ei, ['blockLiteral', 'blockFolded']) && 'keep' === ei.chomping) || en.push(eu), en;
                    }
                    case 'document': {
                      let ea = O.children[et.getName() + 1],
                        es = [];
                      return (
                        'head' === L(e, ea, O, en) &&
                          ((e.head.children.length > 0 || e.head.endComments.length > 0) && es.push(er('head')),
                          eA(e.head) ? es.push(['---', ' ', er(['head', 'trailingComment'])]) : es.push('---')),
                        q(e) && es.push(er('body')),
                        ei(eu, es)
                      );
                    }
                    case 'documentHead':
                      return ei(eu, [...et.map(er, 'children'), ...et.map(er, 'endComments')]);
                    case 'documentBody': {
                      let { children: O, endComments: en } = e,
                        ea = '';
                      if (O.length > 0 && en.length > 0) {
                        let O = eE(e);
                        eS(O, ['blockFolded', 'blockLiteral']) ? 'keep' !== O.chomping && (ea = [eu, eu]) : (ea = eu);
                      }
                      return [ei(eu, et.map(er, 'children')), ea, ei(eu, et.map(er, 'endComments'))];
                    }
                    case 'directive':
                      return ['%', ei(' ', [e.name, ...e.parameters])];
                    case 'comment':
                      return ['#', e.value];
                    case 'alias':
                      return ['*', e.value];
                    case 'tag':
                      return en.originalText.slice(e.position.start.offset, e.position.end.offset);
                    case 'anchor':
                      return ['&', e.value];
                    case 'plain':
                      return Q(e.type, en.originalText.slice(e.position.start.offset, e.position.end.offset), en);
                    case 'quoteDouble':
                    case 'quoteSingle': {
                      let O = en.originalText.slice(e.position.start.offset + 1, e.position.end.offset - 1);
                      if (
                        ('quoteSingle' === e.type && O.includes('\\')) ||
                        ('quoteDouble' === e.type && /\\[^"]/.test(O))
                      ) {
                        let et = 'quoteDouble' === e.type ? '"' : "'";
                        return [et, Q(e.type, O, en), et];
                      }
                      if (O.includes('"'))
                        return [
                          "'",
                          Q(
                            e.type,
                            'quoteDouble' === e.type ? O.replace(/\\"/g, '"').replace(/'/g, "'".repeat(2)) : O,
                            en
                          ),
                          "'"
                        ];
                      if (O.includes("'"))
                        return ['"', Q(e.type, 'quoteSingle' === e.type ? O.replace(/''/g, "'") : O, en), '"'];
                      let et = en.singleQuote ? "'" : '"';
                      return [et, Q(e.type, O, en), et];
                    }
                    case 'blockFolded':
                    case 'blockLiteral':
                      return eL(et, er, en);
                    case 'mapping':
                    case 'sequence':
                      return ei(eu, et.map(er, 'children'));
                    case 'sequenceItem':
                      return ['- ', eN(2, e.content ? er('content') : '')];
                    case 'mappingKey':
                    case 'mappingValue':
                      return e.content ? er('content') : '';
                    case 'mappingItem':
                    case 'flowMappingItem':
                      return eI(e, O, et, er, en);
                    case 'flowMapping':
                      return ek(et, er, en);
                    case 'flowSequence':
                      return ej(et, er, en);
                    case 'flowSequenceItem':
                      return er('content');
                    default:
                      throw Error(`Unexpected node type ${e.type}`);
                  }
                }
                function q(e) {
                  return e.body.children.length > 0 || ev(e.body);
                }
                function J(e, O) {
                  return eA(e) || (O && (O.head.children.length > 0 || ev(O.head)));
                }
                function L(e, O, et, en) {
                  return (et.children[0] === e && /---(?:\s|$)/.test(en.originalText.slice(ef(e), ef(e) + 4))) ||
                    e.head.children.length > 0 ||
                    ev(e.head) ||
                    eA(e.head)
                    ? 'head'
                    : !J(e, O) && !!O && 'root';
                }
                function Q(e, O, et) {
                  return ei(
                    eu,
                    eh(e, O, et).map((e) => en(el(ei(ea, e))))
                  );
                }
                function V(e, O) {
                  if (eS(O))
                    switch ((delete O.position, O.type)) {
                      case 'comment':
                        if (eD(O.value)) return null;
                        break;
                      case 'quoteDouble':
                      case 'quoteSingle':
                        O.type = 'quote';
                    }
                }
                O.exports = { preprocess: eB, embed: eg, print: M, massageAstNode: V, insertPragma: ed };
              }
            }),
            uB = te({
              'src/language-yaml/options.js'(e, O) {
                ey();
                var et = n2();
                O.exports = { bracketSpacing: et.bracketSpacing, singleQuote: et.singleQuote, proseWrap: et.proseWrap };
              }
            }),
            uN = te({
              'src/language-yaml/parsers.js'() {
                ey();
              }
            }),
            uw = te({
              'node_modules/linguist-languages/data/YAML.json'(e, O) {
                O.exports = {
                  name: 'YAML',
                  type: 'data',
                  color: '#cb171e',
                  tmScope: 'source.yaml',
                  aliases: ['yml'],
                  extensions: [
                    '.yml',
                    '.mir',
                    '.reek',
                    '.rviz',
                    '.sublime-syntax',
                    '.syntax',
                    '.yaml',
                    '.yaml-tmlanguage',
                    '.yaml.sed',
                    '.yml.mysql'
                  ],
                  filenames: ['.clang-format', '.clang-tidy', '.gemrc', 'CITATION.cff', 'glide.lock', 'yarn.lock'],
                  aceMode: 'yaml',
                  codemirrorMode: 'yaml',
                  codemirrorMimeType: 'text/x-yaml',
                  languageId: 407
                };
              }
            }),
            uP = te({
              'src/language-yaml/index.js'(e, O) {
                ey();
                var et = t3(),
                  en = uT(),
                  er = uB(),
                  eu = uN(),
                  ei = [
                    et(uw(), (e) => ({
                      since: '1.14.0',
                      parsers: ['yaml'],
                      vscodeLanguageIds: ['yaml', 'ansible', 'home-assistant'],
                      filenames: [
                        ...e.filenames.filter((e) => 'yarn.lock' !== e),
                        '.prettierrc',
                        '.stylelintrc',
                        '.lintstagedrc'
                      ]
                    }))
                  ];
                O.exports = { languages: ei, printers: { yaml: en }, options: er, parsers: eu };
              }
            }),
            uk = te({
              'src/languages.js'(e, O) {
                ey(), (O.exports = [rn(), rv(), rP(), rM(), rQ(), uy(), uP()]);
              }
            });
          ey();
          var { version: uj } = eh(),
            uI = t1(),
            { getSupportInfo: uO } = eK(),
            uL = t2(),
            u_ = uk(),
            uM = eO();
          function Nt(e) {
            let O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return function () {
              for (var et = arguments.length, en = Array(et), er = 0; er < et; er++) en[er] = arguments[er];
              let eu = en[O] || {},
                ei = eu.plugins || [];
              return (
                (en[O] = Object.assign(
                  Object.assign({}, eu),
                  {},
                  { plugins: [...u_, ...(Array.isArray(ei) ? ei : Object.values(ei))] }
                )),
                e(...en)
              );
            };
          }
          var u$ = Nt(uI.formatWithCursor);
          ei.exports = {
            formatWithCursor: u$,
            format: (e, O) => u$(e, O).formatted,
            check(e, O) {
              let { formatted: et } = u$(e, O);
              return et === e;
            },
            doc: uM,
            getSupportInfo: Nt(uO, 0),
            version: uj,
            util: uL,
            __debug: {
              parse: Nt(uI.parse),
              formatAST: Nt(uI.formatAST),
              formatDoc: Nt(uI.formatDoc),
              printToDoc: Nt(uI.printToDoc),
              printDocToString: Nt(uI.printDocToString)
            }
          };
        })());
    }
  }
]);
