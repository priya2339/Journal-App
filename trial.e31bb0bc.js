// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@google/generative-ai/dist/index.mjs":[function(require,module,exports) {
var define;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskType = exports.SchemaType = exports.POSSIBLE_ROLES = exports.Outcome = exports.HarmProbability = exports.HarmCategory = exports.HarmBlockThreshold = exports.GoogleGenerativeAIResponseError = exports.GoogleGenerativeAIRequestInputError = exports.GoogleGenerativeAIFetchError = exports.GoogleGenerativeAIError = exports.GoogleGenerativeAI = exports.GenerativeModel = exports.FunctionCallingMode = exports.FinishReason = exports.ExecutableCodeLanguage = exports.DynamicRetrievalMode = exports.ChatSession = exports.BlockReason = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */
var SchemaType;
(function (SchemaType) {
  /** String type. */
  SchemaType["STRING"] = "string";
  /** Number type. */
  SchemaType["NUMBER"] = "number";
  /** Integer type. */
  SchemaType["INTEGER"] = "integer";
  /** Boolean type. */
  SchemaType["BOOLEAN"] = "boolean";
  /** Array type. */
  SchemaType["ARRAY"] = "array";
  /** Object type. */
  SchemaType["OBJECT"] = "object";
})(SchemaType || (exports.SchemaType = SchemaType = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @public
 */
var ExecutableCodeLanguage;
(function (ExecutableCodeLanguage) {
  ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
  ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage || (exports.ExecutableCodeLanguage = ExecutableCodeLanguage = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */
var Outcome;
(function (Outcome) {
  /**
   * Unspecified status. This value should not be used.
   */
  Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
  /**
   * Code execution completed successfully.
   */
  Outcome["OUTCOME_OK"] = "outcome_ok";
  /**
   * Code execution finished but with a failure. `stderr` should contain the
   * reason.
   */
  Outcome["OUTCOME_FAILED"] = "outcome_failed";
  /**
   * Code execution ran for too long, and was cancelled. There may or may not
   * be a partial output present.
   */
  Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome || (exports.Outcome = Outcome = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Possible roles.
 * @public
 */
var POSSIBLE_ROLES = exports.POSSIBLE_ROLES = ["user", "model", "function", "system"];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */
var HarmCategory;
(function (HarmCategory) {
  HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
  HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
  HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
  HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
  HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(HarmCategory || (exports.HarmCategory = HarmCategory = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */
var HarmBlockThreshold;
(function (HarmBlockThreshold) {
  // Threshold is unspecified.
  HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
  // Content with NEGLIGIBLE will be allowed.
  HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
  // Content with NEGLIGIBLE and LOW will be allowed.
  HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
  // Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed.
  HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
  // All content will be allowed.
  HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (exports.HarmBlockThreshold = HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */
var HarmProbability;
(function (HarmProbability) {
  // Probability is unspecified.
  HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
  // Content has a negligible chance of being unsafe.
  HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
  // Content has a low chance of being unsafe.
  HarmProbability["LOW"] = "LOW";
  // Content has a medium chance of being unsafe.
  HarmProbability["MEDIUM"] = "MEDIUM";
  // Content has a high chance of being unsafe.
  HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (exports.HarmProbability = HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */
var BlockReason;
(function (BlockReason) {
  // A blocked reason was not specified.
  BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
  // Content was blocked by safety settings.
  BlockReason["SAFETY"] = "SAFETY";
  // Content was blocked, but the reason is uncategorized.
  BlockReason["OTHER"] = "OTHER";
})(BlockReason || (exports.BlockReason = BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */
var FinishReason;
(function (FinishReason) {
  // Default value. This value is unused.
  FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
  // Natural stop point of the model or provided stop sequence.
  FinishReason["STOP"] = "STOP";
  // The maximum number of tokens as specified in the request was reached.
  FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
  // The candidate content was flagged for safety reasons.
  FinishReason["SAFETY"] = "SAFETY";
  // The candidate content was flagged for recitation reasons.
  FinishReason["RECITATION"] = "RECITATION";
  // The candidate content was flagged for using an unsupported language.
  FinishReason["LANGUAGE"] = "LANGUAGE";
  // Unknown reason.
  FinishReason["OTHER"] = "OTHER";
})(FinishReason || (exports.FinishReason = FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */
var TaskType;
(function (TaskType) {
  TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
  TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
  TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
  TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
  TaskType["CLASSIFICATION"] = "CLASSIFICATION";
  TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (exports.TaskType = TaskType = {}));
/**
 * @public
 */
var FunctionCallingMode;
(function (FunctionCallingMode) {
  // Unspecified function calling mode. This value should not be used.
  FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
  // Default model behavior, model decides to predict either a function call
  // or a natural language repspose.
  FunctionCallingMode["AUTO"] = "AUTO";
  // Model is constrained to always predicting a function call only.
  // If "allowed_function_names" are set, the predicted function call will be
  // limited to any one of "allowed_function_names", else the predicted
  // function call will be any one of the provided "function_declarations".
  FunctionCallingMode["ANY"] = "ANY";
  // Model will not predict any function call. Model behavior is same as when
  // not passing any function declarations.
  FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode || (exports.FunctionCallingMode = FunctionCallingMode = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */
var DynamicRetrievalMode;
(function (DynamicRetrievalMode) {
  // Unspecified function calling mode. This value should not be used.
  DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
  // Run retrieval only when system decides it is necessary.
  DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode || (exports.DynamicRetrievalMode = DynamicRetrievalMode = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Basic error type for this SDK.
 * @public
 */
var GoogleGenerativeAIError = exports.GoogleGenerativeAIError = /*#__PURE__*/function (_Error) {
  function GoogleGenerativeAIError(message) {
    _classCallCheck(this, GoogleGenerativeAIError);
    return _callSuper(this, GoogleGenerativeAIError, ["[GoogleGenerativeAI Error]: ".concat(message)]);
  }
  _inherits(GoogleGenerativeAIError, _Error);
  return _createClass(GoogleGenerativeAIError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Errors in the contents of a response from the model. This includes parsing
 * errors, or responses including a safety block reason.
 * @public
 */
var GoogleGenerativeAIResponseError = exports.GoogleGenerativeAIResponseError = /*#__PURE__*/function (_GoogleGenerativeAIEr) {
  function GoogleGenerativeAIResponseError(message, response) {
    var _this;
    _classCallCheck(this, GoogleGenerativeAIResponseError);
    _this = _callSuper(this, GoogleGenerativeAIResponseError, [message]);
    _this.response = response;
    return _this;
  }
  _inherits(GoogleGenerativeAIResponseError, _GoogleGenerativeAIEr);
  return _createClass(GoogleGenerativeAIResponseError);
}(GoogleGenerativeAIError);
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */
var GoogleGenerativeAIFetchError = exports.GoogleGenerativeAIFetchError = /*#__PURE__*/function (_GoogleGenerativeAIEr2) {
  function GoogleGenerativeAIFetchError(message, status, statusText, errorDetails) {
    var _this2;
    _classCallCheck(this, GoogleGenerativeAIFetchError);
    _this2 = _callSuper(this, GoogleGenerativeAIFetchError, [message]);
    _this2.status = status;
    _this2.statusText = statusText;
    _this2.errorDetails = errorDetails;
    return _this2;
  }
  _inherits(GoogleGenerativeAIFetchError, _GoogleGenerativeAIEr2);
  return _createClass(GoogleGenerativeAIFetchError);
}(GoogleGenerativeAIError);
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */
var GoogleGenerativeAIRequestInputError = exports.GoogleGenerativeAIRequestInputError = /*#__PURE__*/function (_GoogleGenerativeAIEr3) {
  function GoogleGenerativeAIRequestInputError() {
    _classCallCheck(this, GoogleGenerativeAIRequestInputError);
    return _callSuper(this, GoogleGenerativeAIRequestInputError, arguments);
  }
  _inherits(GoogleGenerativeAIRequestInputError, _GoogleGenerativeAIEr3);
  return _createClass(GoogleGenerativeAIRequestInputError);
}(GoogleGenerativeAIError);
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
var DEFAULT_API_VERSION = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */
var PACKAGE_VERSION = "0.21.0";
var PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function (Task) {
  Task["GENERATE_CONTENT"] = "generateContent";
  Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
  Task["COUNT_TOKENS"] = "countTokens";
  Task["EMBED_CONTENT"] = "embedContent";
  Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
var RequestUrl = /*#__PURE__*/function () {
  function RequestUrl(model, task, apiKey, stream, requestOptions) {
    _classCallCheck(this, RequestUrl);
    this.model = model;
    this.task = task;
    this.apiKey = apiKey;
    this.stream = stream;
    this.requestOptions = requestOptions;
  }
  return _createClass(RequestUrl, [{
    key: "toString",
    value: function toString() {
      var _a, _b;
      var apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
      var baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
      var url = "".concat(baseUrl, "/").concat(apiVersion, "/").concat(this.model, ":").concat(this.task);
      if (this.stream) {
        url += "?alt=sse";
      }
      return url;
    }
  }]);
}();
/**
 * Simple, but may become more complex if we add more versions to log.
 */
function getClientHeaders(requestOptions) {
  var clientHeaders = [];
  if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) {
    clientHeaders.push(requestOptions.apiClient);
  }
  clientHeaders.push("".concat(PACKAGE_LOG_HEADER, "/").concat(PACKAGE_VERSION));
  return clientHeaders.join(" ");
}
function getHeaders(_x) {
  return _getHeaders.apply(this, arguments);
}
function _getHeaders() {
  _getHeaders = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(url) {
    var _a, headers, customHeaders, _iterator10, _step10, _step10$value, headerName, headerValue;
    return _regeneratorRuntime().wrap(function _callee9$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          headers = new Headers();
          headers.append("Content-Type", "application/json");
          headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
          headers.append("x-goog-api-key", url.apiKey);
          customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
          if (!customHeaders) {
            _context10.next = 36;
            break;
          }
          if (customHeaders instanceof Headers) {
            _context10.next = 14;
            break;
          }
          _context10.prev = 7;
          customHeaders = new Headers(customHeaders);
          _context10.next = 14;
          break;
        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](7);
          throw new GoogleGenerativeAIRequestInputError("unable to convert customHeaders value ".concat(JSON.stringify(customHeaders), " to Headers: ").concat(_context10.t0.message));
        case 14:
          _iterator10 = _createForOfIteratorHelper(customHeaders.entries());
          _context10.prev = 15;
          _iterator10.s();
        case 17:
          if ((_step10 = _iterator10.n()).done) {
            _context10.next = 28;
            break;
          }
          _step10$value = _slicedToArray(_step10.value, 2), headerName = _step10$value[0], headerValue = _step10$value[1];
          if (!(headerName === "x-goog-api-key")) {
            _context10.next = 23;
            break;
          }
          throw new GoogleGenerativeAIRequestInputError("Cannot set reserved header name ".concat(headerName));
        case 23:
          if (!(headerName === "x-goog-api-client")) {
            _context10.next = 25;
            break;
          }
          throw new GoogleGenerativeAIRequestInputError("Header name ".concat(headerName, " can only be set using the apiClient field"));
        case 25:
          headers.append(headerName, headerValue);
        case 26:
          _context10.next = 17;
          break;
        case 28:
          _context10.next = 33;
          break;
        case 30:
          _context10.prev = 30;
          _context10.t1 = _context10["catch"](15);
          _iterator10.e(_context10.t1);
        case 33:
          _context10.prev = 33;
          _iterator10.f();
          return _context10.finish(33);
        case 36:
          return _context10.abrupt("return", headers);
        case 37:
        case "end":
          return _context10.stop();
      }
    }, _callee9, null, [[7, 11], [15, 30, 33, 36]]);
  }));
  return _getHeaders.apply(this, arguments);
}
function constructModelRequest(_x2, _x3, _x4, _x5, _x6, _x7) {
  return _constructModelRequest.apply(this, arguments);
}
function _constructModelRequest() {
  _constructModelRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(model, task, apiKey, stream, body, requestOptions) {
    var url;
    return _regeneratorRuntime().wrap(function _callee10$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          url = new RequestUrl(model, task, apiKey, stream, requestOptions);
          _context11.t0 = url.toString();
          _context11.t1 = Object;
          _context11.t2 = Object.assign({}, buildFetchOptions(requestOptions));
          _context11.next = 6;
          return getHeaders(url);
        case 6:
          _context11.t3 = _context11.sent;
          _context11.t4 = body;
          _context11.t5 = {
            method: "POST",
            headers: _context11.t3,
            body: _context11.t4
          };
          _context11.t6 = _context11.t1.assign.call(_context11.t1, _context11.t2, _context11.t5);
          return _context11.abrupt("return", {
            url: _context11.t0,
            fetchOptions: _context11.t6
          });
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee10);
  }));
  return _constructModelRequest.apply(this, arguments);
}
function makeModelRequest(_x8, _x9, _x10, _x11, _x12) {
  return _makeModelRequest.apply(this, arguments);
}
function _makeModelRequest() {
  _makeModelRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(model, task, apiKey, stream, body) {
    var requestOptions,
      fetchFn,
      _yield$constructModel,
      url,
      fetchOptions,
      _args12 = arguments;
    return _regeneratorRuntime().wrap(function _callee11$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          requestOptions = _args12.length > 5 && _args12[5] !== undefined ? _args12[5] : {};
          fetchFn = _args12.length > 6 && _args12[6] !== undefined ? _args12[6] : fetch;
          _context12.next = 4;
          return constructModelRequest(model, task, apiKey, stream, body, requestOptions);
        case 4:
          _yield$constructModel = _context12.sent;
          url = _yield$constructModel.url;
          fetchOptions = _yield$constructModel.fetchOptions;
          return _context12.abrupt("return", makeRequest(url, fetchOptions, fetchFn));
        case 8:
        case "end":
          return _context12.stop();
      }
    }, _callee11);
  }));
  return _makeModelRequest.apply(this, arguments);
}
function makeRequest(_x13, _x14) {
  return _makeRequest.apply(this, arguments);
}
function _makeRequest() {
  _makeRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(url, fetchOptions) {
    var fetchFn,
      response,
      _args13 = arguments;
    return _regeneratorRuntime().wrap(function _callee12$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          fetchFn = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : fetch;
          _context13.prev = 1;
          _context13.next = 4;
          return fetchFn(url, fetchOptions);
        case 4:
          response = _context13.sent;
          _context13.next = 10;
          break;
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](1);
          handleResponseError(_context13.t0, url);
        case 10:
          if (response.ok) {
            _context13.next = 13;
            break;
          }
          _context13.next = 13;
          return handleResponseNotOk(response, url);
        case 13:
          return _context13.abrupt("return", response);
        case 14:
        case "end":
          return _context13.stop();
      }
    }, _callee12, null, [[1, 7]]);
  }));
  return _makeRequest.apply(this, arguments);
}
function handleResponseError(e, url) {
  var err = e;
  if (!(e instanceof GoogleGenerativeAIFetchError || e instanceof GoogleGenerativeAIRequestInputError)) {
    err = new GoogleGenerativeAIError("Error fetching from ".concat(url.toString(), ": ").concat(e.message));
    err.stack = e.stack;
  }
  throw err;
}
function handleResponseNotOk(_x15, _x16) {
  return _handleResponseNotOk.apply(this, arguments);
}
/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */
function _handleResponseNotOk() {
  _handleResponseNotOk = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(response, url) {
    var message, errorDetails, json;
    return _regeneratorRuntime().wrap(function _callee13$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          message = "";
          _context14.prev = 1;
          _context14.next = 4;
          return response.json();
        case 4:
          json = _context14.sent;
          message = json.error.message;
          if (json.error.details) {
            message += " ".concat(JSON.stringify(json.error.details));
            errorDetails = json.error.details;
          }
          _context14.next = 11;
          break;
        case 9:
          _context14.prev = 9;
          _context14.t0 = _context14["catch"](1);
        case 11:
          throw new GoogleGenerativeAIFetchError("Error fetching from ".concat(url.toString(), ": [").concat(response.status, " ").concat(response.statusText, "] ").concat(message), response.status, response.statusText, errorDetails);
        case 12:
        case "end":
          return _context14.stop();
      }
    }, _callee13, null, [[1, 9]]);
  }));
  return _handleResponseNotOk.apply(this, arguments);
}
function buildFetchOptions(requestOptions) {
  var fetchOptions = {};
  if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
    var controller = new AbortController();
    if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
      setTimeout(function () {
        return controller.abort();
      }, requestOptions.timeout);
    }
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) {
      requestOptions.signal.addEventListener("abort", function () {
        controller.abort();
      });
    }
    fetchOptions.signal = controller.signal;
  }
  return fetchOptions;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */
function addHelpers(response) {
  response.text = function () {
    if (response.candidates && response.candidates.length > 0) {
      if (response.candidates.length > 1) {
        console.warn("This response had ".concat(response.candidates.length, " ") + "candidates. Returning text from the first candidate only. " + "Access response.candidates directly to use the other candidates.");
      }
      if (hadBadFinishReason(response.candidates[0])) {
        throw new GoogleGenerativeAIResponseError("".concat(formatBlockErrorMessage(response)), response);
      }
      return getText(response);
    } else if (response.promptFeedback) {
      throw new GoogleGenerativeAIResponseError("Text not available. ".concat(formatBlockErrorMessage(response)), response);
    }
    return "";
  };
  /**
   * TODO: remove at next major version
   */
  response.functionCall = function () {
    if (response.candidates && response.candidates.length > 0) {
      if (response.candidates.length > 1) {
        console.warn("This response had ".concat(response.candidates.length, " ") + "candidates. Returning function calls from the first candidate only. " + "Access response.candidates directly to use the other candidates.");
      }
      if (hadBadFinishReason(response.candidates[0])) {
        throw new GoogleGenerativeAIResponseError("".concat(formatBlockErrorMessage(response)), response);
      }
      console.warn("response.functionCall() is deprecated. " + "Use response.functionCalls() instead.");
      return getFunctionCalls(response)[0];
    } else if (response.promptFeedback) {
      throw new GoogleGenerativeAIResponseError("Function call not available. ".concat(formatBlockErrorMessage(response)), response);
    }
    return undefined;
  };
  response.functionCalls = function () {
    if (response.candidates && response.candidates.length > 0) {
      if (response.candidates.length > 1) {
        console.warn("This response had ".concat(response.candidates.length, " ") + "candidates. Returning function calls from the first candidate only. " + "Access response.candidates directly to use the other candidates.");
      }
      if (hadBadFinishReason(response.candidates[0])) {
        throw new GoogleGenerativeAIResponseError("".concat(formatBlockErrorMessage(response)), response);
      }
      return getFunctionCalls(response);
    } else if (response.promptFeedback) {
      throw new GoogleGenerativeAIResponseError("Function call not available. ".concat(formatBlockErrorMessage(response)), response);
    }
    return undefined;
  };
  return response;
}
/**
 * Returns all text found in all parts of first candidate.
 */
function getText(response) {
  var _a, _b, _c, _d;
  var textStrings = [];
  if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
    var _iterator = _createForOfIteratorHelper((_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var part = _step.value;
        if (part.text) {
          textStrings.push(part.text);
        }
        if (part.executableCode) {
          textStrings.push("\n```" + part.executableCode.language + "\n" + part.executableCode.code + "\n```\n");
        }
        if (part.codeExecutionResult) {
          textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (textStrings.length > 0) {
    return textStrings.join("");
  } else {
    return "";
  }
}
/**
 * Returns functionCall of first candidate.
 */
function getFunctionCalls(response) {
  var _a, _b, _c, _d;
  var functionCalls = [];
  if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
    var _iterator2 = _createForOfIteratorHelper((_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var part = _step2.value;
        if (part.functionCall) {
          functionCalls.push(part.functionCall);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if (functionCalls.length > 0) {
    return functionCalls;
  } else {
    return undefined;
  }
}
var badFinishReasons = [FinishReason.RECITATION, FinishReason.SAFETY, FinishReason.LANGUAGE];
function hadBadFinishReason(candidate) {
  return !!candidate.finishReason && badFinishReasons.includes(candidate.finishReason);
}
function formatBlockErrorMessage(response) {
  var _a, _b, _c;
  var message = "";
  if ((!response.candidates || response.candidates.length === 0) && response.promptFeedback) {
    message += "Response was blocked";
    if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) {
      message += " due to ".concat(response.promptFeedback.blockReason);
    }
    if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) {
      message += ": ".concat(response.promptFeedback.blockReasonMessage);
    }
  } else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
    var firstCandidate = response.candidates[0];
    if (hadBadFinishReason(firstCandidate)) {
      message += "Candidate was blocked due to ".concat(firstCandidate.finishReason);
      if (firstCandidate.finishMessage) {
        message += ": ".concat(firstCandidate.finishMessage);
      }
    }
  }
  return message;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */
function processStream(response) {
  var inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", {
    fatal: true
  }));
  var responseStream = getResponseStream(inputStream);
  var _responseStream$tee = responseStream.tee(),
    _responseStream$tee2 = _slicedToArray(_responseStream$tee, 2),
    stream1 = _responseStream$tee2[0],
    stream2 = _responseStream$tee2[1];
  return {
    stream: generateResponseSequence(stream1),
    response: getResponsePromise(stream2)
  };
}
function getResponsePromise(_x17) {
  return _getResponsePromise.apply(this, arguments);
}
function _getResponsePromise() {
  _getResponsePromise = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(stream) {
    var allResponses, reader, _yield$reader$read, done, value;
    return _regeneratorRuntime().wrap(function _callee14$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          allResponses = [];
          reader = stream.getReader();
        case 2:
          if (!true) {
            _context15.next = 13;
            break;
          }
          _context15.next = 5;
          return reader.read();
        case 5:
          _yield$reader$read = _context15.sent;
          done = _yield$reader$read.done;
          value = _yield$reader$read.value;
          if (!done) {
            _context15.next = 10;
            break;
          }
          return _context15.abrupt("return", addHelpers(aggregateResponses(allResponses)));
        case 10:
          allResponses.push(value);
          _context15.next = 2;
          break;
        case 13:
        case "end":
          return _context15.stop();
      }
    }, _callee14);
  }));
  return _getResponsePromise.apply(this, arguments);
}
function generateResponseSequence(stream) {
  return __asyncGenerator(this, arguments, /*#__PURE__*/_regeneratorRuntime().mark(function generateResponseSequence_1() {
    var reader, _yield$__await, value, done;
    return _regeneratorRuntime().wrap(function generateResponseSequence_1$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          reader = stream.getReader();
        case 1:
          if (!true) {
            _context.next = 15;
            break;
          }
          _context.next = 4;
          return __await(reader.read());
        case 4:
          _yield$__await = _context.sent;
          value = _yield$__await.value;
          done = _yield$__await.done;
          if (!done) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("break", 15);
        case 9:
          _context.next = 11;
          return __await(addHelpers(value));
        case 11:
          _context.next = 13;
          return _context.sent;
        case 13:
          _context.next = 1;
          break;
        case 15:
        case "end":
          return _context.stop();
      }
    }, generateResponseSequence_1);
  }));
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */
function getResponseStream(inputStream) {
  var reader = inputStream.getReader();
  var stream = new ReadableStream({
    start: function start(controller) {
      var currentText = "";
      return pump();
      function pump() {
        return reader.read().then(function (_ref) {
          var value = _ref.value,
            done = _ref.done;
          if (done) {
            if (currentText.trim()) {
              controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
              return;
            }
            controller.close();
            return;
          }
          currentText += value;
          var match = currentText.match(responseLineRE);
          var parsedResponse;
          while (match) {
            try {
              parsedResponse = JSON.parse(match[1]);
            } catch (e) {
              controller.error(new GoogleGenerativeAIError("Error parsing JSON response: \"".concat(match[1], "\"")));
              return;
            }
            controller.enqueue(parsedResponse);
            currentText = currentText.substring(match[0].length);
            match = currentText.match(responseLineRE);
          }
          return pump();
        });
      }
    }
  });
  return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */
function aggregateResponses(responses) {
  var lastResponse = responses[responses.length - 1];
  var aggregatedResponse = {
    promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback
  };
  var _iterator3 = _createForOfIteratorHelper(responses),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var response = _step3.value;
      if (response.candidates) {
        var _iterator4 = _createForOfIteratorHelper(response.candidates),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var candidate = _step4.value;
            var i = candidate.index;
            if (!aggregatedResponse.candidates) {
              aggregatedResponse.candidates = [];
            }
            if (!aggregatedResponse.candidates[i]) {
              aggregatedResponse.candidates[i] = {
                index: candidate.index
              };
            }
            // Keep overwriting, the last one will be final
            aggregatedResponse.candidates[i].citationMetadata = candidate.citationMetadata;
            aggregatedResponse.candidates[i].groundingMetadata = candidate.groundingMetadata;
            aggregatedResponse.candidates[i].finishReason = candidate.finishReason;
            aggregatedResponse.candidates[i].finishMessage = candidate.finishMessage;
            aggregatedResponse.candidates[i].safetyRatings = candidate.safetyRatings;
            /**
             * Candidates should always have content and parts, but this handles
             * possible malformed responses.
             */
            if (candidate.content && candidate.content.parts) {
              if (!aggregatedResponse.candidates[i].content) {
                aggregatedResponse.candidates[i].content = {
                  role: candidate.content.role || "user",
                  parts: []
                };
              }
              var newPart = {};
              var _iterator5 = _createForOfIteratorHelper(candidate.content.parts),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var part = _step5.value;
                  if (part.text) {
                    newPart.text = part.text;
                  }
                  if (part.functionCall) {
                    newPart.functionCall = part.functionCall;
                  }
                  if (part.executableCode) {
                    newPart.executableCode = part.executableCode;
                  }
                  if (part.codeExecutionResult) {
                    newPart.codeExecutionResult = part.codeExecutionResult;
                  }
                  if (Object.keys(newPart).length === 0) {
                    newPart.text = "";
                  }
                  aggregatedResponse.candidates[i].content.parts.push(newPart);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      if (response.usageMetadata) {
        aggregatedResponse.usageMetadata = response.usageMetadata;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return aggregatedResponse;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _generateContentStream2(_x18, _x19, _x20, _x21) {
  return _generateContentStream.apply(this, arguments);
}
function _generateContentStream() {
  _generateContentStream = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(apiKey, model, params, requestOptions) {
    var response;
    return _regeneratorRuntime().wrap(function _callee15$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, /* stream */true, JSON.stringify(params), requestOptions);
        case 2:
          response = _context16.sent;
          return _context16.abrupt("return", processStream(response));
        case 4:
        case "end":
          return _context16.stop();
      }
    }, _callee15);
  }));
  return _generateContentStream.apply(this, arguments);
}
function _generateContent2(_x22, _x23, _x24, _x25) {
  return _generateContent.apply(this, arguments);
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _generateContent() {
  _generateContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(apiKey, model, params, requestOptions) {
    var response, responseJson, enhancedResponse;
    return _regeneratorRuntime().wrap(function _callee16$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, /* stream */false, JSON.stringify(params), requestOptions);
        case 2:
          response = _context17.sent;
          _context17.next = 5;
          return response.json();
        case 5:
          responseJson = _context17.sent;
          enhancedResponse = addHelpers(responseJson);
          return _context17.abrupt("return", {
            response: enhancedResponse
          });
        case 8:
        case "end":
          return _context17.stop();
      }
    }, _callee16);
  }));
  return _generateContent.apply(this, arguments);
}
function formatSystemInstruction(input) {
  // null or undefined
  if (input == null) {
    return undefined;
  } else if (typeof input === "string") {
    return {
      role: "system",
      parts: [{
        text: input
      }]
    };
  } else if (input.text) {
    return {
      role: "system",
      parts: [input]
    };
  } else if (input.parts) {
    if (!input.role) {
      return {
        role: "system",
        parts: input.parts
      };
    } else {
      return input;
    }
  }
}
function formatNewContent(request) {
  var newParts = [];
  if (typeof request === "string") {
    newParts = [{
      text: request
    }];
  } else {
    var _iterator6 = _createForOfIteratorHelper(request),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var partOrString = _step6.value;
        if (typeof partOrString === "string") {
          newParts.push({
            text: partOrString
          });
        } else {
          newParts.push(partOrString);
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
  return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}
/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */
function assignRoleToPartsAndValidateSendMessageRequest(parts) {
  var userContent = {
    role: "user",
    parts: []
  };
  var functionContent = {
    role: "function",
    parts: []
  };
  var hasUserContent = false;
  var hasFunctionContent = false;
  var _iterator7 = _createForOfIteratorHelper(parts),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var part = _step7.value;
      if ("functionResponse" in part) {
        functionContent.parts.push(part);
        hasFunctionContent = true;
      } else {
        userContent.parts.push(part);
        hasUserContent = true;
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  if (hasUserContent && hasFunctionContent) {
    throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
  }
  if (!hasUserContent && !hasFunctionContent) {
    throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
  }
  if (hasUserContent) {
    return userContent;
  }
  return functionContent;
}
function formatCountTokensInput(params, modelParams) {
  var _a;
  var formattedGenerateContentRequest = {
    model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
    generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
    safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
    tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
    toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
    systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
    cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
    contents: []
  };
  var containsGenerateContentRequest = params.generateContentRequest != null;
  if (params.contents) {
    if (containsGenerateContentRequest) {
      throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
    }
    formattedGenerateContentRequest.contents = params.contents;
  } else if (containsGenerateContentRequest) {
    formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
  } else {
    // Array or string
    var content = formatNewContent(params);
    formattedGenerateContentRequest.contents = [content];
  }
  return {
    generateContentRequest: formattedGenerateContentRequest
  };
}
function formatGenerateContentInput(params) {
  var formattedRequest;
  if (params.contents) {
    formattedRequest = params;
  } else {
    // Array or string
    var content = formatNewContent(params);
    formattedRequest = {
      contents: [content]
    };
  }
  if (params.systemInstruction) {
    formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
  }
  return formattedRequest;
}
function formatEmbedContentInput(params) {
  if (typeof params === "string" || Array.isArray(params)) {
    var content = formatNewContent(params);
    return {
      content: content
    };
  }
  return params;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// https://ai.google.dev/api/rest/v1beta/Content#part
var VALID_PART_FIELDS = ["text", "inlineData", "functionCall", "functionResponse", "executableCode", "codeExecutionResult"];
var VALID_PARTS_PER_ROLE = {
  user: ["text", "inlineData"],
  function: ["functionResponse"],
  model: ["text", "functionCall", "executableCode", "codeExecutionResult"],
  // System instructions shouldn't be in history anyway.
  system: ["text"]
};
function validateChatHistory(history) {
  var prevContent = false;
  var _iterator8 = _createForOfIteratorHelper(history),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var currContent = _step8.value;
      var role = currContent.role,
        parts = currContent.parts;
      if (!prevContent && role !== "user") {
        throw new GoogleGenerativeAIError("First content should be with role 'user', got ".concat(role));
      }
      if (!POSSIBLE_ROLES.includes(role)) {
        throw new GoogleGenerativeAIError("Each item should include role field. Got ".concat(role, " but valid roles are: ").concat(JSON.stringify(POSSIBLE_ROLES)));
      }
      if (!Array.isArray(parts)) {
        throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
      }
      if (parts.length === 0) {
        throw new GoogleGenerativeAIError("Each Content should have at least one part");
      }
      var countFields = {
        text: 0,
        inlineData: 0,
        functionCall: 0,
        functionResponse: 0,
        fileData: 0,
        executableCode: 0,
        codeExecutionResult: 0
      };
      var _iterator9 = _createForOfIteratorHelper(parts),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var part = _step9.value;
          for (var _i2 = 0, _VALID_PART_FIELDS2 = VALID_PART_FIELDS; _i2 < _VALID_PART_FIELDS2.length; _i2++) {
            var _key = _VALID_PART_FIELDS2[_i2];
            if (_key in part) {
              countFields[_key] += 1;
            }
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      var validParts = VALID_PARTS_PER_ROLE[role];
      for (var _i = 0, _VALID_PART_FIELDS = VALID_PART_FIELDS; _i < _VALID_PART_FIELDS.length; _i++) {
        var key = _VALID_PART_FIELDS[_i];
        if (!validParts.includes(key) && countFields[key] > 0) {
          throw new GoogleGenerativeAIError("Content with role '".concat(role, "' can't contain '").concat(key, "' part"));
        }
      }
      prevContent = true;
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do not log a message for this error.
 */
var SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */
var ChatSession = exports.ChatSession = /*#__PURE__*/function () {
  function ChatSession(apiKey, model, params) {
    var _requestOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    _classCallCheck(this, ChatSession);
    this.model = model;
    this.params = params;
    this._requestOptions = _requestOptions;
    this._history = [];
    this._sendPromise = Promise.resolve();
    this._apiKey = apiKey;
    if (params === null || params === void 0 ? void 0 : params.history) {
      validateChatHistory(params.history);
      this._history = params.history;
    }
  }
  /**
   * Gets the chat history so far. Blocked prompts are not added to history.
   * Blocked candidates are not added to history, nor are the prompts that
   * generated them.
   */
  return _createClass(ChatSession, [{
    key: "getHistory",
    value: (function () {
      var _getHistory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this._sendPromise;
            case 2:
              return _context2.abrupt("return", this._history);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee, this);
      }));
      function getHistory() {
        return _getHistory.apply(this, arguments);
      }
      return getHistory;
    }()
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    )
  }, {
    key: "sendMessage",
    value: (function () {
      var _sendMessage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var _this3 = this;
        var requestOptions,
          _a,
          _b,
          _c,
          _d,
          _e,
          _f,
          newContent,
          generateContentRequest,
          chatSessionRequestOptions,
          finalResult,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              requestOptions = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              _context3.next = 3;
              return this._sendPromise;
            case 3:
              newContent = formatNewContent(request);
              generateContentRequest = {
                safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
                generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
                tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
                toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
                systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
                cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
                contents: [].concat(_toConsumableArray(this._history), [newContent])
              };
              chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
              // Add onto the chain.
              this._sendPromise = this._sendPromise.then(function () {
                return _generateContent2(_this3._apiKey, _this3.model, generateContentRequest, chatSessionRequestOptions);
              }).then(function (result) {
                var _a;
                if (result.response.candidates && result.response.candidates.length > 0) {
                  _this3._history.push(newContent);
                  var responseContent = Object.assign({
                    parts: [],
                    // Response seems to come back without a role set.
                    role: "model"
                  }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                  _this3._history.push(responseContent);
                } else {
                  var blockErrorMessage = formatBlockErrorMessage(result.response);
                  if (blockErrorMessage) {
                    console.warn("sendMessage() was unsuccessful. ".concat(blockErrorMessage, ". Inspect response object for details."));
                  }
                }
                finalResult = result;
              });
              _context3.next = 9;
              return this._sendPromise;
            case 9:
              return _context3.abrupt("return", finalResult);
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee2, this);
      }));
      function sendMessage(_x26) {
        return _sendMessage.apply(this, arguments);
      }
      return sendMessage;
    }()
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    )
  }, {
    key: "sendMessageStream",
    value: (function () {
      var _sendMessageStream = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var _this4 = this;
        var requestOptions,
          _a,
          _b,
          _c,
          _d,
          _e,
          _f,
          newContent,
          generateContentRequest,
          chatSessionRequestOptions,
          streamPromise,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              requestOptions = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
              _context4.next = 3;
              return this._sendPromise;
            case 3:
              newContent = formatNewContent(request);
              generateContentRequest = {
                safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
                generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
                tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
                toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
                systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
                cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
                contents: [].concat(_toConsumableArray(this._history), [newContent])
              };
              chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
              streamPromise = _generateContentStream2(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions); // Add onto the chain.
              this._sendPromise = this._sendPromise.then(function () {
                return streamPromise;
              })
              // This must be handled to avoid unhandled rejection, but jump
              // to the final catch block with a label to not log this error.
              .catch(function (_ignored) {
                throw new Error(SILENT_ERROR);
              }).then(function (streamResult) {
                return streamResult.response;
              }).then(function (response) {
                if (response.candidates && response.candidates.length > 0) {
                  _this4._history.push(newContent);
                  var responseContent = Object.assign({}, response.candidates[0].content);
                  // Response seems to come back without a role set.
                  if (!responseContent.role) {
                    responseContent.role = "model";
                  }
                  _this4._history.push(responseContent);
                } else {
                  var blockErrorMessage = formatBlockErrorMessage(response);
                  if (blockErrorMessage) {
                    console.warn("sendMessageStream() was unsuccessful. ".concat(blockErrorMessage, ". Inspect response object for details."));
                  }
                }
              }).catch(function (e) {
                // Errors in streamPromise are already catchable by the user as
                // streamPromise is returned.
                // Avoid duplicating the error message in logs.
                if (e.message !== SILENT_ERROR) {
                  // Users do not have access to _sendPromise to catch errors
                  // downstream from streamPromise, so they should not throw.
                  console.error(e);
                }
              });
              return _context4.abrupt("return", streamPromise);
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee3, this);
      }));
      function sendMessageStream(_x27) {
        return _sendMessageStream.apply(this, arguments);
      }
      return sendMessageStream;
    }())
  }]);
}();
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _countTokens2(_x28, _x29, _x30, _x31) {
  return _countTokens.apply(this, arguments);
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _countTokens() {
  _countTokens = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(apiKey, model, params, singleRequestOptions) {
    var response;
    return _regeneratorRuntime().wrap(function _callee17$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
        case 2:
          response = _context18.sent;
          return _context18.abrupt("return", response.json());
        case 4:
        case "end":
          return _context18.stop();
      }
    }, _callee17);
  }));
  return _countTokens.apply(this, arguments);
}
function _embedContent2(_x32, _x33, _x34, _x35) {
  return _embedContent.apply(this, arguments);
}
function _embedContent() {
  _embedContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(apiKey, model, params, requestOptions) {
    var response;
    return _regeneratorRuntime().wrap(function _callee18$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
        case 2:
          response = _context19.sent;
          return _context19.abrupt("return", response.json());
        case 4:
        case "end":
          return _context19.stop();
      }
    }, _callee18);
  }));
  return _embedContent.apply(this, arguments);
}
function _batchEmbedContents2(_x36, _x37, _x38, _x39) {
  return _batchEmbedContents.apply(this, arguments);
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Class for generative model APIs.
 * @public
 */
function _batchEmbedContents() {
  _batchEmbedContents = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(apiKey, model, params, requestOptions) {
    var requestsWithModel, response;
    return _regeneratorRuntime().wrap(function _callee19$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          requestsWithModel = params.requests.map(function (request) {
            return Object.assign(Object.assign({}, request), {
              model: model
            });
          });
          _context20.next = 3;
          return makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({
            requests: requestsWithModel
          }), requestOptions);
        case 3:
          response = _context20.sent;
          return _context20.abrupt("return", response.json());
        case 5:
        case "end":
          return _context20.stop();
      }
    }, _callee19);
  }));
  return _batchEmbedContents.apply(this, arguments);
}
var GenerativeModel = exports.GenerativeModel = /*#__PURE__*/function () {
  function GenerativeModel(apiKey, modelParams) {
    var _requestOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, GenerativeModel);
    this.apiKey = apiKey;
    this._requestOptions = _requestOptions;
    if (modelParams.model.includes("/")) {
      // Models may be named "models/model-name" or "tunedModels/model-name"
      this.model = modelParams.model;
    } else {
      // If path is not included, assume it's a non-tuned model.
      this.model = "models/".concat(modelParams.model);
    }
    this.generationConfig = modelParams.generationConfig || {};
    this.safetySettings = modelParams.safetySettings || [];
    this.tools = modelParams.tools;
    this.toolConfig = modelParams.toolConfig;
    this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
    this.cachedContent = modelParams.cachedContent;
  }
  /**
   * Makes a single non-streaming call to the model
   * and returns an object containing a single {@link GenerateContentResponse}.
   *
   * Fields set in the optional {@link SingleRequestOptions} parameter will
   * take precedence over the {@link RequestOptions} values provided to
   * {@link GoogleGenerativeAI.getGenerativeModel }.
   */
  return _createClass(GenerativeModel, [{
    key: "generateContent",
    value: (function () {
      var _generateContent3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var requestOptions,
          _a,
          formattedParams,
          generativeModelRequestOptions,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              requestOptions = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
              formattedParams = formatGenerateContentInput(request);
              generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
              return _context5.abrupt("return", _generateContent2(this.apiKey, this.model, Object.assign({
                generationConfig: this.generationConfig,
                safetySettings: this.safetySettings,
                tools: this.tools,
                toolConfig: this.toolConfig,
                systemInstruction: this.systemInstruction,
                cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
              }, formattedParams), generativeModelRequestOptions));
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee4, this);
      }));
      function generateContent(_x40) {
        return _generateContent3.apply(this, arguments);
      }
      return generateContent;
    }()
    /**
     * Makes a single streaming call to the model and returns an object
     * containing an iterable stream that iterates over all chunks in the
     * streaming response as well as a promise that returns the final
     * aggregated response.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    )
  }, {
    key: "generateContentStream",
    value: (function () {
      var _generateContentStream3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request) {
        var requestOptions,
          _a,
          formattedParams,
          generativeModelRequestOptions,
          _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              requestOptions = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
              formattedParams = formatGenerateContentInput(request);
              generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
              return _context6.abrupt("return", _generateContentStream2(this.apiKey, this.model, Object.assign({
                generationConfig: this.generationConfig,
                safetySettings: this.safetySettings,
                tools: this.tools,
                toolConfig: this.toolConfig,
                systemInstruction: this.systemInstruction,
                cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
              }, formattedParams), generativeModelRequestOptions));
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee5, this);
      }));
      function generateContentStream(_x41) {
        return _generateContentStream3.apply(this, arguments);
      }
      return generateContentStream;
    }()
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */
    )
  }, {
    key: "startChat",
    value: function startChat(startChatParams) {
      var _a;
      return new ChatSession(this.apiKey, this.model, Object.assign({
        generationConfig: this.generationConfig,
        safetySettings: this.safetySettings,
        tools: this.tools,
        toolConfig: this.toolConfig,
        systemInstruction: this.systemInstruction,
        cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
      }, startChatParams), this._requestOptions);
    }
    /**
     * Counts the tokens in the provided request.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
  }, {
    key: "countTokens",
    value: (function () {
      var _countTokens3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(request) {
        var requestOptions,
          formattedParams,
          generativeModelRequestOptions,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              requestOptions = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
              formattedParams = formatCountTokensInput(request, {
                model: this.model,
                generationConfig: this.generationConfig,
                safetySettings: this.safetySettings,
                tools: this.tools,
                toolConfig: this.toolConfig,
                systemInstruction: this.systemInstruction,
                cachedContent: this.cachedContent
              });
              generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
              return _context7.abrupt("return", _countTokens2(this.apiKey, this.model, formattedParams, generativeModelRequestOptions));
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee6, this);
      }));
      function countTokens(_x42) {
        return _countTokens3.apply(this, arguments);
      }
      return countTokens;
    }()
    /**
     * Embeds the provided content.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    )
  }, {
    key: "embedContent",
    value: (function () {
      var _embedContent3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(request) {
        var requestOptions,
          formattedParams,
          generativeModelRequestOptions,
          _args8 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              requestOptions = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
              formattedParams = formatEmbedContentInput(request);
              generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
              return _context8.abrupt("return", _embedContent2(this.apiKey, this.model, formattedParams, generativeModelRequestOptions));
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee7, this);
      }));
      function embedContent(_x43) {
        return _embedContent3.apply(this, arguments);
      }
      return embedContent;
    }()
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    )
  }, {
    key: "batchEmbedContents",
    value: (function () {
      var _batchEmbedContents3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(batchEmbedContentRequest) {
        var requestOptions,
          generativeModelRequestOptions,
          _args9 = arguments;
        return _regeneratorRuntime().wrap(function _callee8$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              requestOptions = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
              generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
              return _context9.abrupt("return", _batchEmbedContents2(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions));
            case 3:
            case "end":
              return _context9.stop();
          }
        }, _callee8, this);
      }));
      function batchEmbedContents(_x44) {
        return _batchEmbedContents3.apply(this, arguments);
      }
      return batchEmbedContents;
    }())
  }]);
}();
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Top-level class for this SDK
 * @public
 */
var GoogleGenerativeAI = exports.GoogleGenerativeAI = /*#__PURE__*/function () {
  function GoogleGenerativeAI(apiKey) {
    _classCallCheck(this, GoogleGenerativeAI);
    this.apiKey = apiKey;
  }
  /**
   * Gets a {@link GenerativeModel} instance for the provided model name.
   */
  return _createClass(GoogleGenerativeAI, [{
    key: "getGenerativeModel",
    value: function getGenerativeModel(modelParams, requestOptions) {
      if (!modelParams.model) {
        throw new GoogleGenerativeAIError("Must provide a model name. " + "Example: genai.getGenerativeModel({ model: 'my-model-name' })");
      }
      return new GenerativeModel(this.apiKey, modelParams, requestOptions);
    }
    /**
     * Creates a {@link GenerativeModel} instance from provided content cache.
     */
  }, {
    key: "getGenerativeModelFromCachedContent",
    value: function getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
      if (!cachedContent.name) {
        throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
      }
      if (!cachedContent.model) {
        throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
      }
      /**
       * Not checking tools and toolConfig for now as it would require a deep
       * equality comparison and isn't likely to be a common case.
       */
      var disallowedDuplicates = ["model", "systemInstruction"];
      for (var _i3 = 0, _disallowedDuplicates = disallowedDuplicates; _i3 < _disallowedDuplicates.length; _i3++) {
        var key = _disallowedDuplicates[_i3];
        if ((modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) && cachedContent[key] && (modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) !== cachedContent[key]) {
          if (key === "model") {
            var modelParamsComp = modelParams.model.startsWith("models/") ? modelParams.model.replace("models/", "") : modelParams.model;
            var cachedContentComp = cachedContent.model.startsWith("models/") ? cachedContent.model.replace("models/", "") : cachedContent.model;
            if (modelParamsComp === cachedContentComp) {
              continue;
            }
          }
          throw new GoogleGenerativeAIRequestInputError("Different value for \"".concat(key, "\" specified in modelParams") + " (".concat(modelParams[key], ") and cachedContent (").concat(cachedContent[key], ")"));
        }
      }
      var modelParamsFromCache = Object.assign(Object.assign({}, modelParams), {
        model: cachedContent.model,
        tools: cachedContent.tools,
        toolConfig: cachedContent.toolConfig,
        systemInstruction: cachedContent.systemInstruction,
        cachedContent: cachedContent
      });
      return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
    }
  }]);
}();
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _generativeAi = require("@google/generative-ai");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var entryInput = document.getElementById('entryInput');
var addButton = document.getElementById('addButton');
var entriesContainer = document.getElementById('entriesContainer');
var toggleButton = document.getElementById('toggleButton');
var body = document.body;
toggleButton.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  toggleButton.innerText = body.classList.contains('dark-mode') ? "Dark Mode : ON" : "Dark Mode : OFF";
});
var entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
addButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var entryText, sentiment, entry;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        entryText = entryInput.value.trim();
        if (entryText) {
          _context.next = 4;
          break;
        }
        alert('Please write something.');
        return _context.abrupt("return");
      case 4:
        _context.next = 6;
        return analyzeData(entryText || "I'm Good!");
      case 6:
        sentiment = _context.sent;
        entry = {
          id: Date.now(),
          text: entryText,
          date: new Date().toLocaleString(),
          sentiment: sentiment
        };
        entries.push(entry);
        saveEntries();
        displayEntries();
        entryInput.value = '';
      case 12:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
var genAI = new _generativeAi.GoogleGenerativeAI("AIzaSyBxmeFtXtavP8Oe-EcCpVsadDConEQcgdc");
function analyzeData(_x) {
  return _analyzeData.apply(this, arguments);
}
function _analyzeData() {
  _analyzeData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(myfeelings) {
    var model, prompt, result, response, summary;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
          });
          prompt = "".concat(myfeelings, "! Based on the above text could you provide me my feelings in one of the word in the below 3, the answer should be in one world, 1. Positive 2. Negative 3. Natural");
          _context2.next = 4;
          return model.generateContent(prompt);
        case 4:
          result = _context2.sent;
          _context2.next = 7;
          return result.response;
        case 7:
          response = _context2.sent;
          summary = response.text();
          console.log('summary - ', summary);
          return _context2.abrupt("return", summary);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _analyzeData.apply(this, arguments);
}
analyzeData();
function saveEntries() {
  localStorage.setItem('journalEntries', JSON.stringify(entries));
}
function displayEntries() {
  entriesContainer.innerHTML = '';
  entries.forEach(function (entry) {
    createEntryElement(entry);
  });
}
function createEntryElement(entry) {
  var entryDiv = document.createElement('div');
  entryDiv.classList.add('entry');
  var h = document.createElement('h3');
  h.innerText = "Your Journal Entries";
  h.classList.add('h3');
  entryDiv.appendChild(h);
  var datePara = document.createElement('p');
  datePara.innerHTML = '<strong>' + entry.date + '</strong>';
  entryDiv.appendChild(datePara);
  var textPara = document.createElement('p');
  textPara.textContent = entry.text;
  entryDiv.appendChild(textPara);
  var sentimentPara = document.createElement('p');
  sentimentPara.textContent = 'Sentiment: ' + entry.sentiment;
  sentimentPara.classList.add('sentiment');
  entryDiv.appendChild(sentimentPara);
  var actionsDiv = document.createElement('div');
  actionsDiv.classList.add('entry-actions');
  var editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.style.margin = '10px';
  editButton.classList.add('edit-button');
  editButton.onclick = function () {
    editEntry(entry.id);
  };
  actionsDiv.appendChild(editButton);
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.onclick = function () {
    deleteEntry(entry.id);
  };
  actionsDiv.appendChild(deleteButton);
  entryDiv.appendChild(actionsDiv);
  entriesContainer.appendChild(entryDiv);
}
function deleteEntry(id) {
  entries = entries.filter(function (entry) {
    return entry.id !== id;
  });
  saveEntries();
  displayEntries();
}
function editEntry(id) {
  var entry = entries.find(function (entry) {
    return entry.id === id;
  });
  entryInput.value = entry.text;
  deleteEntry(id);
}
displayEntries();
},{"@google/generative-ai":"node_modules/@google/generative-ai/dist/index.mjs"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37897" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/trial.e31bb0bc.js.map