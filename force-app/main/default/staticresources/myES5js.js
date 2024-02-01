"use strict";

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }
  if (!value || !value.then) {
    value = Promise.resolve(value);
  }
  return then ? value.then(then) : value;
}
function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * es6Anthems.js
 */
(function (w) {
  var getData = function getData() {
    return {
      "Canada (English)": {
        title: "O Canada",
        lyrics: "O Canada!\n      Our home and native land!\n      True patriot love in all of us command.\n      With glowing hearts we see thee rise,\n      The True North strong and free!\n      From far and wide,\n      O Canada, we stand on guard for thee.\n      God keep our land glorious and free!\n      O Canada, we stand on guard for thee."
      },
      "Canada (Français)": {
        title: "Ô Canada",
        lyrics: "\xD4 Canada!\n      Terre de nos a\xEFeux,\n      Ton front est ceint de fleurons glorieux!\n      Car ton bras sait porter l'\xE9p\xE9e,\n      Il sait porter la croix!\n      Ton histoire est une \xE9pop\xE9e\n      Des plus brillants exploits.\n      Et ta valeur, de foi tremp\xE9e,\n      \uD834\uDD06 Prot\xE9gera nos foyers et nos droits."
      },
      "United States of America (English)": {
        title: "Star Spangled Banner",
        lyrics: "O! say can you see by the dawn's early light,\n      \u2060What so proudly we hailed at the twilight's last gleaming,\n      Whose broad stripes and bright stars through the perilous fight,\n      \u2060O'er the ramparts we watch'd, were so gallantly streaming?\n      And the Rockets' red glare, the Bombs bursting in air,\n      Gave proof through the night that our Flag was still there;\n      \u2060O! say does that star-spangled Banner yet wave,\n      \u2060O'er the Land of the free and the home of the brave?"
      },
      "Mexico (Español)": {
        title: "Mexicanos, al grito de guerra",
        lyrics: "Mexicanos, al grito de guerra\n      el acero aprestad y el brid\xF3n.\n      Y retiemble en sus centros la Tierra,\n      al sonoro rugir del ca\xF1\xF3n.\n      \n      \n      Ci\xF1a \xA1Oh Patria! tus sienes de oliva\n      de la paz el arc\xE1ngel divino,\n      que en el cielo tu eterno destino\n      por el dedo de Dios se escribi\xF3.\n      Mas si osare un extra\xF1o enemigo\n      profanar con su planta tu suelo,\n      piensa \xA1oh Patria querida! que el cielo\n      un soldado en cada hijo te dio.\n      \n      \xA1Guerra, guerra sin tregua al que intente\n      de la patria manchar los blasones!\n      \xA1guerra, guerra! los patrios pendones\n      en las olas de sangre empapad.\n      \xA1Guerra, guerra! en el monte, en el valle,\n      los ca\xF1ones horr\xEDsonos truenen,\n      y los ecos sonoros resuenen\n      con las voces de \xA1Uni\xF3n! \xA1Libertad!."
      }
    };
  };
  var getCountries = function getCountries() {
    var countryArray = [];
    for (var _i = 0, _Object$entries = Object.entries(getData()); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      countryArray.push(key);
    }
    return countryArray;
  };
  var getRandomCountry = function getRandomCountry() {
    var count = Object.keys(getData()).length;
    var randNumber = Math.round(Math.random() * count);
    return Object.keys(getData())[randNumber];
  };
  var getTitles = function getTitles() {
    var titles = [];
    for (var _i2 = 0, _Object$entries2 = Object.entries(getData()); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        key = _Object$entries2$_i[0],
        value = _Object$entries2$_i[1];
      titles.push(value.title);
    }
    return titles;
  };
  var getAnthem = _async(function (country, callback) {
    setTimeout(function () {
      callback(getData()[country].lyrics);
    }, 2000);
    return _await();
  });
  var anthemMethods = {
    "getAnthem": getAnthem,
    "getTitles": getTitles,
    "getCountries": getCountries,
    "getRandomCountry": getRandomCountry,
    "getData": getData
  };
  w.anthems = anthemMethods;
})(window);
