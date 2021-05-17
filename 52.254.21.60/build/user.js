(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user"],{

/***/ "./assets/js/user.js":
/*!***************************!*\
  !*** ./assets/js/user.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

var $collectionHolderAditionals;
var $addNewItemAditional = $('#aditional-container-form');

function addNewFormAditional() {
  var newForm = $collectionHolderAditionals.data('prototype');

  if (newForm) {
    newForm = newForm.replace(/__name__/g, 0);
    $collectionHolderAditionals.html(newForm);
  }
}

$(function () {
  $('.date').mask('00/00/0000');
  $(document).on('click', '#userFormSearchBtn', function (e) {
    e.preventDefault();
    $('form#userFormSearch').submit();
  });
  $collectionHolderAditionals = $('#aditional-container-form');
  addNewFormAditional();
  $('#user_association_division').on('change', function () {
    var option = $("#user_association_division option:selected").val();
    $("#user_association_aditionals_0_divisions").remove();
    addNewFormAditional();
    $("#user_association_aditionals_0_divisions option[value='" + option + "']").remove();
    $('.bs-multiselect').multiselect({
      nonSelectedText: $('#user_association_aditionals_0').attr('select'),
      allSelectedText: 'Divisão selecionadas'
    });
  });
  var selected_option = $('#user_association_division option:selected');

  if (selected_option.length > 0) {
    $("#user_association_aditionals_0_divisions option[value='" + selected_option.val() + "']").remove();
  }

  var associacoes = $('[data-associacao]').map(function () {
    return JSON.parse(decodeURIComponent($(this).data('associacao')));
  }).toArray();
  $('.tbEditAssociacao').on('click', function () {
    var _this = this;

    var associacao = associacoes.find(function (a) {
      return a.id == $(_this).data('id');
    });

    if (associacao) {
      $('#user-nav-3').tab('show');
      $('#editAssociacao input[name="id"]').val(associacao.id);
      $('#editAssociacao select').each(function () {
        $(this).val($(this).find("option[value=\"".concat(associacao[$(this).attr('name')], "\"]")).length > 0 ? associacao[$(this).attr('name')] : '');
      });
    }
  });
  $('#user-nav-tab a').on('hide.bs.tab', function (e) {
    if (e.currentTarget.id == 'user-nav-3') {
      $('#editAssociacao').find('input, select').val('');
    }
  });

  if ($('#tabIdentifier').length && $('#tabIdentifier').val() == 'new') {
    console.log('retorno');
    $('.tbEditAssociacao').click();
    $('#user-nav-3').tab('show');
  }

  if ($('#tabIdentifier').length && $('#tabIdentifier').val() == 'list') {
    console.log('retorno');
    $('#user-nav-2').tab('show');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ })

},[["./assets/js/user.js","runtime","vendors~activity~app~articleEvaluation~associate~certificate~cookieconsent~dashboard/admin~dashboard~780886de","vendors~activity~app~associate~certificate~cookieconsent~dashboard/admin~dashboard/user~ensalement/g~8018043c","vendors~activity~app~associate~cookieconsent~dashboard/user~ensalement/general~ensalement/priority~e~257752a3","vendors~activity~app~associate~dashboard/admin~dashboard/user~ensalement/general~ensalement/sections~b3c04876"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIl0sIm5hbWVzIjpbIiRjb2xsZWN0aW9uSG9sZGVyQWRpdGlvbmFscyIsIiRhZGROZXdJdGVtQWRpdGlvbmFsIiwiJCIsImFkZE5ld0Zvcm1BZGl0aW9uYWwiLCJuZXdGb3JtIiwiZGF0YSIsInJlcGxhY2UiLCJodG1sIiwibWFzayIsImRvY3VtZW50Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXQiLCJvcHRpb24iLCJ2YWwiLCJyZW1vdmUiLCJtdWx0aXNlbGVjdCIsIm5vblNlbGVjdGVkVGV4dCIsImF0dHIiLCJhbGxTZWxlY3RlZFRleHQiLCJzZWxlY3RlZF9vcHRpb24iLCJsZW5ndGgiLCJhc3NvY2lhY29lcyIsIm1hcCIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInRvQXJyYXkiLCJhc3NvY2lhY2FvIiwiZmluZCIsImEiLCJpZCIsInRhYiIsImVhY2giLCJjdXJyZW50VGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLDJCQUFKO0FBRUEsSUFBSUMsb0JBQW9CLEdBQUdD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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0ICRjb2xsZWN0aW9uSG9sZGVyQWRpdGlvbmFscztcblxubGV0ICRhZGROZXdJdGVtQWRpdGlvbmFsID0gJCgnI2FkaXRpb25hbC1jb250YWluZXItZm9ybScpO1xuXG5mdW5jdGlvbiBhZGROZXdGb3JtQWRpdGlvbmFsKCkge1xuICAgIGxldCBuZXdGb3JtID0gJGNvbGxlY3Rpb25Ib2xkZXJBZGl0aW9uYWxzLmRhdGEoJ3Byb3RvdHlwZScpO1xuICAgIGlmIChuZXdGb3JtKSB7XG4gICAgICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoL19fbmFtZV9fL2csIDApO1xuICAgICAgICAkY29sbGVjdGlvbkhvbGRlckFkaXRpb25hbHMuaHRtbChuZXdGb3JtKTtcbiAgICB9XG59XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5kYXRlJykubWFzaygnMDAvMDAvMDAwMCcpO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyN1c2VyRm9ybVNlYXJjaEJ0bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnZm9ybSN1c2VyRm9ybVNlYXJjaCcpLnN1Ym1pdCgpO1xuICAgIH0pO1xuXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXJBZGl0aW9uYWxzID0gJCgnI2FkaXRpb25hbC1jb250YWluZXItZm9ybScpO1xuICAgIGFkZE5ld0Zvcm1BZGl0aW9uYWwoKTtcbiAgICAkKCcjdXNlcl9hc3NvY2lhdGlvbl9kaXZpc2lvbicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSAkKFwiI3VzZXJfYXNzb2NpYXRpb25fZGl2aXNpb24gb3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICAkKFwiI3VzZXJfYXNzb2NpYXRpb25fYWRpdGlvbmFsc18wX2RpdmlzaW9uc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgYWRkTmV3Rm9ybUFkaXRpb25hbCgpO1xuICAgICAgICAkKFwiI3VzZXJfYXNzb2NpYXRpb25fYWRpdGlvbmFsc18wX2RpdmlzaW9ucyBvcHRpb25bdmFsdWU9J1wiICsgb3B0aW9uICsgXCInXVwiKS5yZW1vdmUoKTtcbiAgICAgICAgJCgnLmJzLW11bHRpc2VsZWN0JykubXVsdGlzZWxlY3Qoe1xuICAgICAgICAgICAgbm9uU2VsZWN0ZWRUZXh0OiAkKCcjdXNlcl9hc3NvY2lhdGlvbl9hZGl0aW9uYWxzXzAnKS5hdHRyKCdzZWxlY3QnKSxcbiAgICAgICAgICAgIGFsbFNlbGVjdGVkVGV4dDogJ0Rpdmlzw6NvIHNlbGVjaW9uYWRhcycsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IHNlbGVjdGVkX29wdGlvbiA9ICQoJyN1c2VyX2Fzc29jaWF0aW9uX2RpdmlzaW9uIG9wdGlvbjpzZWxlY3RlZCcpO1xuICAgIGlmIChzZWxlY3RlZF9vcHRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAkKFwiI3VzZXJfYXNzb2NpYXRpb25fYWRpdGlvbmFsc18wX2RpdmlzaW9ucyBvcHRpb25bdmFsdWU9J1wiICsgc2VsZWN0ZWRfb3B0aW9uLnZhbCgpICsgXCInXVwiKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgY29uc3QgYXNzb2NpYWNvZXMgPSAkKCdbZGF0YS1hc3NvY2lhY2FvXScpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCgkKHRoaXMpLmRhdGEoJ2Fzc29jaWFjYW8nKSkpO1xuICAgIH0pLnRvQXJyYXkoKTtcblxuICAgICQoJy50YkVkaXRBc3NvY2lhY2FvJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBhc3NvY2lhY2FvID0gYXNzb2NpYWNvZXMuZmluZChhID0+IGEuaWQgPT0gJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgaWYgKGFzc29jaWFjYW8pIHtcbiAgICAgICAgICAgICQoJyN1c2VyLW5hdi0zJykudGFiKCdzaG93Jyk7XG4gICAgICAgICAgICAkKCcjZWRpdEFzc29jaWFjYW8gaW5wdXRbbmFtZT1cImlkXCJdJykudmFsKGFzc29jaWFjYW8uaWQpO1xuICAgICAgICAgICAgJCgnI2VkaXRBc3NvY2lhY2FvIHNlbGVjdCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykudmFsKCQodGhpcykuZmluZChgb3B0aW9uW3ZhbHVlPVwiJHthc3NvY2lhY2FvWyQodGhpcykuYXR0cignbmFtZScpXX1cIl1gKS5sZW5ndGggPiAwID8gYXNzb2NpYWNhb1skKHRoaXMpLmF0dHIoJ25hbWUnKV0gOiAnJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI3VzZXItbmF2LXRhYiBhJykub24oJ2hpZGUuYnMudGFiJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5pZCA9PSAndXNlci1uYXYtMycpIHtcbiAgICAgICAgICAgICQoJyNlZGl0QXNzb2NpYWNhbycpLmZpbmQoJ2lucHV0LCBzZWxlY3QnKS52YWwoJycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoJCgnI3RhYklkZW50aWZpZXInKS5sZW5ndGggJiYgJCgnI3RhYklkZW50aWZpZXInKS52YWwoKSA9PSAnbmV3Jykge1xuICAgICAgICBjb25zb2xlLmxvZygncmV0b3JubycpO1xuICAgICAgICAkKCcudGJFZGl0QXNzb2NpYWNhbycpLmNsaWNrKCk7XG4gICAgICAgICQoJyN1c2VyLW5hdi0zJykudGFiKCdzaG93Jyk7XG4gICAgfVxuICAgIGlmICgkKCcjdGFiSWRlbnRpZmllcicpLmxlbmd0aCAmJiAkKCcjdGFiSWRlbnRpZmllcicpLnZhbCgpID09ICdsaXN0Jykge1xuICAgICAgICBjb25zb2xlLmxvZygncmV0b3JubycpO1xuICAgICAgICAkKCcjdXNlci1uYXYtMicpLnRhYignc2hvdycpO1xuICAgIH1cblxufSk7XG5cblxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIHZlcnNpb24gPSBtYXRjaFswXSArIG1hdGNoWzFdO1xufSBlbHNlIGlmICh1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSBtYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb24gJiYgK3ZlcnNpb247XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG4vLyBGRjQ5LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCYnYF18XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSwgcmVhc29uKSB7XG4gIHZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IHJlYXNvbi5SRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTtcbiAgdmFyIFJFUExBQ0VfS0VFUFNfJDAgPSByZWFzb24uUkVQTEFDRV9LRUVQU18kMDtcbiAgdmFyIFVOU0FGRV9TVUJTVElUVVRFID0gUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPyAnJCcgOiAnJDAnO1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgcmVwbGFjZXIgPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgIHJldHVybiByZXBsYWNlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcmVwbGFjZXIuY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6IG5hdGl2ZVJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKCFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSAmJiBSRVBMQUNFX0tFRVBTXyQwKSB8fFxuICAgICAgICAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVwbGFjZVZhbHVlLmluZGV4T2YoVU5TQUZFX1NVQlNUSVRVVEUpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcblxuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICB9XG4gICAgcmV0dXJuIG5hdGl2ZVJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgfSk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==