(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~activity~app~panels~user_articles"],{

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery-mask-plugin/dist/jquery.mask.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * jquery.mask.js
 * @version: v1.14.16
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(function ($) {
    'use strict';

    var Mask = function (el, mask, options) {

        var p = {
            invalid: [],
            getCaret: function () {
                try {
                    var sel,
                        pos = 0,
                        ctrl = el.get(0),
                        dSel = document.selection,
                        cSelStart = ctrl.selectionStart;

                    // IE Support
                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
                        sel = dSel.createRange();
                        sel.moveStart('character', -p.val().length);
                        pos = sel.text.length;
                    }
                    // Firefox support
                    else if (cSelStart || cSelStart === '0') {
                        pos = cSelStart;
                    }

                    return pos;
                } catch (e) {}
            },
            setCaret: function(pos) {
                try {
                    if (el.is(':focus')) {
                        var range, ctrl = el.get(0);

                        // Firefox, WebKit, etc..
                        if (ctrl.setSelectionRange) {
                            ctrl.setSelectionRange(pos, pos);
                        } else { // IE
                            range = ctrl.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    }
                } catch (e) {}
            },
            events: function() {
                el
                .on('keydown.mask', function(e) {
                    el.data('mask-keycode', e.keyCode || e.which);
                    el.data('mask-previus-value', el.val());
                    el.data('mask-previus-caret-pos', p.getCaret());
                    p.maskDigitPosMapOld = p.maskDigitPosMap;
                })
                .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
                .on('paste.mask drop.mask', function() {
                    setTimeout(function() {
                        el.keydown().keyup();
                    }, 100);
                })
                .on('change.mask', function(){
                    el.data('changed', true);
                })
                .on('blur.mask', function(){
                    if (oldValue !== p.val() && !el.data('changed')) {
                        el.trigger('change');
                    }
                    el.data('changed', false);
                })
                // it's very important that this callback remains in this position
                // otherwhise oldValue it's going to work buggy
                .on('blur.mask', function() {
                    oldValue = p.val();
                })
                // select all text on focus
                .on('focus.mask', function (e) {
                    if (options.selectOnFocus === true) {
                        $(e.target).select();
                    }
                })
                // clear the value if it not complete the mask
                .on('focusout.mask', function() {
                    if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                       p.val('');
                   }
                });
            },
            getRegexMask: function() {
                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

                for (var i = 0; i < mask.length; i++) {
                    translation = jMask.translation[mask.charAt(i)];

                    if (translation) {

                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
                        optional = translation.optional;
                        recursive = translation.recursive;

                        if (recursive) {
                            maskChunks.push(mask.charAt(i));
                            oRecursive = {digit: mask.charAt(i), pattern: pattern};
                        } else {
                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
                        }

                    } else {
                        maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                    }
                }

                r = maskChunks.join('');

                if (oRecursive) {
                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
                         .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
                }

                return new RegExp(r);
            },
            destroyEvents: function() {
                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
            },
            val: function(v) {
                var isInput = el.is('input'),
                    method = isInput ? 'val' : 'text',
                    r;

                if (arguments.length > 0) {
                    if (el[method]() !== v) {
                        el[method](v);
                    }
                    r = el;
                } else {
                    r = el[method]();
                }

                return r;
            },
            calculateCaretPosition: function(oldVal) {
                var newVal = p.getMasked(),
                    caretPosNew = p.getCaret();
                if (oldVal !== newVal) {
                    var caretPosOld = el.data('mask-previus-caret-pos') || 0,
                        newValL = newVal.length,
                        oldValL = oldVal.length,
                        maskDigitsBeforeCaret = 0,
                        maskDigitsAfterCaret = 0,
                        maskDigitsBeforeCaretAll = 0,
                        maskDigitsBeforeCaretAllOld = 0,
                        i = 0;

                    for (i = caretPosNew; i < newValL; i++) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsAfterCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsBeforeCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (p.maskDigitPosMap[i]) {
                            maskDigitsBeforeCaretAll++;
                        }
                    }

                    for (i = caretPosOld - 1; i >= 0; i--) {
                        if (p.maskDigitPosMapOld[i]) {
                            maskDigitsBeforeCaretAllOld++;
                        }
                    }

                    // if the cursor is at the end keep it there
                    if (caretPosNew > oldValL) {
                      caretPosNew = newValL * 10;
                    } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
                        if (!p.maskDigitPosMapOld[caretPosNew])  {
                          var caretPos = caretPosNew;
                          caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                          caretPosNew -= maskDigitsBeforeCaret;
                          if (p.maskDigitPosMap[caretPosNew])  {
                            caretPosNew = caretPos;
                          }
                        }
                    }
                    else if (caretPosNew > caretPosOld) {
                        caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
                        caretPosNew += maskDigitsAfterCaret;
                    }
                }
                return caretPosNew;
            },
            behaviour: function(e) {
                e = e || window.event;
                p.invalid = [];

                var keyCode = el.data('mask-keycode');

                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
                    var newVal = p.getMasked(),
                        caretPos = p.getCaret(),
                        oldVal = el.data('mask-previus-value') || '';

                    // this is a compensation to devices/browsers that don't compensate
                    // caret positioning the right way
                    setTimeout(function() {
                      p.setCaret(p.calculateCaretPosition(oldVal));
                    }, $.jMaskGlobals.keyStrokeCompensation);

                    p.val(newVal);
                    p.setCaret(caretPos);
                    return p.callbacks(e);
                }
            },
            getMasked: function(skipMaskChars, val) {
                var buf = [],
                    value = val === undefined ? p.val() : val + '',
                    m = 0, maskLen = mask.length,
                    v = 0, valLen = value.length,
                    offset = 1, addMethod = 'push',
                    resetPos = -1,
                    maskDigitCount = 0,
                    maskDigitPosArr = [],
                    lastMaskChar,
                    check;

                if (options.reverse) {
                    addMethod = 'unshift';
                    offset = -1;
                    lastMaskChar = 0;
                    m = maskLen - 1;
                    v = valLen - 1;
                    check = function () {
                        return m > -1 && v > -1;
                    };
                } else {
                    lastMaskChar = maskLen - 1;
                    check = function () {
                        return m < maskLen && v < valLen;
                    };
                }

                var lastUntranslatedMaskChar;
                while (check()) {
                    var maskDigit = mask.charAt(m),
                        valDigit = value.charAt(v),
                        translation = jMask.translation[maskDigit];

                    if (translation) {
                        if (valDigit.match(translation.pattern)) {
                            buf[addMethod](valDigit);
                             if (translation.recursive) {
                                if (resetPos === -1) {
                                    resetPos = m;
                                } else if (m === lastMaskChar && m !== resetPos) {
                                    m = resetPos - offset;
                                }

                                if (lastMaskChar === resetPos) {
                                    m -= offset;
                                }
                            }
                            m += offset;
                        } else if (valDigit === lastUntranslatedMaskChar) {
                            // matched the last untranslated (raw) mask character that we encountered
                            // likely an insert offset the mask character from the last entry; fall
                            // through and only increment v
                            maskDigitCount--;
                            lastUntranslatedMaskChar = undefined;
                        } else if (translation.optional) {
                            m += offset;
                            v -= offset;
                        } else if (translation.fallback) {
                            buf[addMethod](translation.fallback);
                            m += offset;
                            v -= offset;
                        } else {
                          p.invalid.push({p: v, v: valDigit, e: translation.pattern});
                        }
                        v += offset;
                    } else {
                        if (!skipMaskChars) {
                            buf[addMethod](maskDigit);
                        }

                        if (valDigit === maskDigit) {
                            maskDigitPosArr.push(v);
                            v += offset;
                        } else {
                            lastUntranslatedMaskChar = maskDigit;
                            maskDigitPosArr.push(v + maskDigitCount);
                            maskDigitCount++;
                        }

                        m += offset;
                    }
                }

                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
                    buf.push(lastMaskCharDigit);
                }

                var newVal = buf.join('');
                p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
                return newVal;
            },
            mapMaskdigitPositions: function(newVal, maskDigitPosArr, valLen) {
              var maskDiff = options.reverse ? newVal.length - valLen : 0;
              p.maskDigitPosMap = {};
              for (var i = 0; i < maskDigitPosArr.length; i++) {
                p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
              }
            },
            callbacks: function (e) {
                var val = p.val(),
                    changed = val !== oldValue,
                    defaultArgs = [val, e, el, options],
                    callback = function(name, criteria, args) {
                        if (typeof options[name] === 'function' && criteria) {
                            options[name].apply(this, args);
                        }
                    };

                callback('onChange', changed === true, defaultArgs);
                callback('onKeyPress', changed === true, defaultArgs);
                callback('onComplete', val.length === mask.length, defaultArgs);
                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
            }
        };

        el = $(el);
        var jMask = this, oldValue = p.val(), regexMask;

        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;

        // public methods
        jMask.mask = mask;
        jMask.options = options;
        jMask.remove = function() {
            var caret = p.getCaret();
            if (jMask.options.placeholder) {
                el.removeAttr('placeholder');
            }
            if (el.data('mask-maxlength')) {
                el.removeAttr('maxlength');
            }
            p.destroyEvents();
            p.val(jMask.getCleanVal());
            p.setCaret(caret);
            return el;
        };

        // get value without mask
        jMask.getCleanVal = function() {
           return p.getMasked(true);
        };

        // get masked value without the value being in the input or element
        jMask.getMaskedVal = function(val) {
           return p.getMasked(false, val);
        };

       jMask.init = function(onlyMask) {
            onlyMask = onlyMask || false;
            options = options || {};

            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;
            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;
            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);

            jMask = $.extend(true, {}, jMask, options);

            regexMask = p.getRegexMask();

            if (onlyMask) {
                p.events();
                p.val(p.getMasked());
            } else {
                if (options.placeholder) {
                    el.attr('placeholder' , options.placeholder);
                }

                // this is necessary, otherwise if the user submit the form
                // and then press the "back" button, the autocomplete will erase
                // the data. Works fine on IE9+, FF, Opera, Safari.
                if (el.data('mask')) {
                  el.attr('autocomplete', 'off');
                }

                // detect if is necessary let the user type freely.
                // for is a lot faster than forEach.
                for (var i = 0, maxlength = true; i < mask.length; i++) {
                    var translation = jMask.translation[mask.charAt(i)];
                    if (translation && translation.recursive) {
                        maxlength = false;
                        break;
                    }
                }

                if (maxlength) {
                    el.attr('maxlength', mask.length).data('mask-maxlength', true);
                }

                p.destroyEvents();
                p.events();

                var caret = p.getCaret();
                p.val(p.getMasked());
                p.setCaret(caret);
            }
        };

        jMask.init(!el.is('input'));
    };

    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
            options = {},
            prefix = 'data-mask-',
            mask = input.attr('data-mask');

        if (input.attr(prefix + 'reverse')) {
            options.reverse = true;
        }

        if (input.attr(prefix + 'clearifnotmatch')) {
            options.clearIfNotMatch = true;
        }

        if (input.attr(prefix + 'selectonfocus') === 'true') {
           options.selectOnFocus = true;
        }

        if (notSameMaskObject(input, mask, options)) {
            return input.data('mask', new Mask(this, mask, options));
        }
    },
    notSameMaskObject = function(field, mask, options) {
        options = options || {};
        var maskObject = $(field).data('mask'),
            stringify = JSON.stringify,
            value = $(field).val() || $(field).text();
        try {
            if (typeof mask === 'function') {
                mask = mask(value);
            }
            return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
        } catch (e) {}
    },
    eventSupported = function(eventName) {
        var el = document.createElement('div'), isSupported;

        eventName = 'on' + eventName;
        isSupported = (eventName in el);

        if ( !isSupported ) {
            el.setAttribute(eventName, 'return;');
            isSupported = typeof el[eventName] === 'function';
        }
        el = null;

        return isSupported;
    };

    $.fn.mask = function(mask, options) {
        options = options || {};
        var selector = this.selector,
            globals = $.jMaskGlobals,
            interval = globals.watchInterval,
            watchInputs = options.watchInputs || globals.watchInputs,
            maskFunction = function() {
                if (notSameMaskObject(this, mask, options)) {
                    return $(this).data('mask', new Mask(this, mask, options));
                }
            };

        $(this).each(maskFunction);

        if (selector && selector !== '' && watchInputs) {
            clearInterval($.maskWatchers[selector]);
            $.maskWatchers[selector] = setInterval(function(){
                $(document).find(selector).each(maskFunction);
            }, interval);
        }
        return this;
    };

    $.fn.masked = function(val) {
        return this.data('mask').getMaskedVal(val);
    };

    $.fn.unmask = function() {
        clearInterval($.maskWatchers[this.selector]);
        delete $.maskWatchers[this.selector];
        return this.each(function() {
            var dataMask = $(this).data('mask');
            if (dataMask) {
                dataMask.remove().removeData('mask');
            }
        });
    };

    $.fn.cleanVal = function() {
        return this.data('mask').getCleanVal();
    };

    $.applyDataMask = function(selector) {
        selector = selector || $.jMaskGlobals.maskElements;
        var $selector = (selector instanceof $) ? selector : $(selector);
        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };

    var globals = {
        maskElements: 'input,td,span,div',
        dataMaskAttr: '*[data-mask]',
        dataMask: true,
        watchInterval: 300,
        watchInputs: true,
        keyStrokeCompensation: 10,
        // old versions of chrome dont work great with input event
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
        watchDataMask: false,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            '0': {pattern: /\d/},
            '9': {pattern: /\d/, optional: true},
            '#': {pattern: /\d/, recursive: true},
            'A': {pattern: /[a-zA-Z0-9]/},
            'S': {pattern: /[a-zA-Z]/}
        }
    };

    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

    // looking for inputs with data-mask attribute
    if (globals.dataMask) {
        $.applyDataMask();
    }

    setInterval(function() {
        if ($.jMaskGlobals.watchDataMask) {
            $.applyDataMask();
        }
    }, globals.watchInterval);
}, __webpack_provided_window_dot_jQuery, window.Zepto));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LW1hc2stcGx1Z2luL2Rpc3QvanF1ZXJ5Lm1hc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxXQUFXLG1CQUFPLENBQUMsaUZBQTBCO0FBQzdDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNiRCw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGdEQUFnRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxxQkFBcUIsbUJBQU8s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QUUsb0NBQWEiLCJmaWxlIjoidmVuZG9yc35hY3Rpdml0eX5hcHB+cGFuZWxzfnVzZXJfYXJ0aWNsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIiwiLyoqXG4gKiBqcXVlcnkubWFzay5qc1xuICogQHZlcnNpb246IHYxLjE0LjE2XG4gKiBAYXV0aG9yOiBJZ29yIEVzY29iYXJcbiAqXG4gKiBDcmVhdGVkIGJ5IElnb3IgRXNjb2JhciBvbiAyMDEyLTAzLTEwLiBQbGVhc2UgcmVwb3J0IGFueSBidWcgYXQgZ2l0aHViLmNvbS9pZ29yZXNjb2Jhci9qUXVlcnktTWFzay1QbHVnaW5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgSWdvciBFc2NvYmFyIGh0dHA6Ly9pZ29yZXNjb2Jhci5jb21cbiAqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gKiBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gKiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAqIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gKiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoganNoaW50IGxheGJyZWFrOiB0cnVlICovXG4vKiBqc2hpbnQgbWF4Y29tcGxleGl0eToxNyAqL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4vLyBVTUQgKFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbikgcGF0dGVybnMgZm9yIEphdmFTY3JpcHQgbW9kdWxlcyB0aGF0IHdvcmsgZXZlcnl3aGVyZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvdGVtcGxhdGVzL2pxdWVyeVBsdWdpbi5qc1xuKGZ1bmN0aW9uIChmYWN0b3J5LCBqUXVlcnksIFplcHRvKSB7XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgTWV0ZW9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5IHx8IFplcHRvKTtcbiAgICB9XG5cbn0oZnVuY3Rpb24gKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgTWFzayA9IGZ1bmN0aW9uIChlbCwgbWFzaywgb3B0aW9ucykge1xuXG4gICAgICAgIHZhciBwID0ge1xuICAgICAgICAgICAgaW52YWxpZDogW10sXG4gICAgICAgICAgICBnZXRDYXJldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3RybCA9IGVsLmdldCgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRTZWwgPSBkb2N1bWVudC5zZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjU2VsU3RhcnQgPSBjdHJsLnNlbGVjdGlvblN0YXJ0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElFIFN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRTZWwgJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZignTVNJRSAxMCcpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsID0gZFNlbC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgLXAudmFsKCkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IHNlbC50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IHN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY1NlbFN0YXJ0IHx8IGNTZWxTdGFydCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBjU2VsU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0Q2FyZXQ6IGZ1bmN0aW9uKHBvcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbC5pcygnOmZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYW5nZSwgY3RybCA9IGVsLmdldCgwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCwgV2ViS2l0LCBldGMuLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0cmwuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLnNldFNlbGVjdGlvblJhbmdlKHBvcywgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIElFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UgPSBjdHJsLmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGVsXG4gICAgICAgICAgICAgICAgLm9uKCdrZXlkb3duLm1hc2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmRhdGEoJ21hc2sta2V5Y29kZScsIGUua2V5Q29kZSB8fCBlLndoaWNoKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YSgnbWFzay1wcmV2aXVzLXZhbHVlJywgZWwudmFsKCkpO1xuICAgICAgICAgICAgICAgICAgICBlbC5kYXRhKCdtYXNrLXByZXZpdXMtY2FyZXQtcG9zJywgcC5nZXRDYXJldCgpKTtcbiAgICAgICAgICAgICAgICAgICAgcC5tYXNrRGlnaXRQb3NNYXBPbGQgPSBwLm1hc2tEaWdpdFBvc01hcDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbigkLmpNYXNrR2xvYmFscy51c2VJbnB1dCA/ICdpbnB1dC5tYXNrJyA6ICdrZXl1cC5tYXNrJywgcC5iZWhhdmlvdXIpXG4gICAgICAgICAgICAgICAgLm9uKCdwYXN0ZS5tYXNrIGRyb3AubWFzaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwua2V5ZG93bigpLmtleXVwKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oJ2NoYW5nZS5tYXNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YSgnY2hhbmdlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdibHVyLm1hc2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWUgIT09IHAudmFsKCkgJiYgIWVsLmRhdGEoJ2NoYW5nZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YSgnY2hhbmdlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGl0J3MgdmVyeSBpbXBvcnRhbnQgdGhhdCB0aGlzIGNhbGxiYWNrIHJlbWFpbnMgaW4gdGhpcyBwb3NpdGlvblxuICAgICAgICAgICAgICAgIC8vIG90aGVyd2hpc2Ugb2xkVmFsdWUgaXQncyBnb2luZyB0byB3b3JrIGJ1Z2d5XG4gICAgICAgICAgICAgICAgLm9uKCdibHVyLm1hc2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgPSBwLnZhbCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0IGFsbCB0ZXh0IG9uIGZvY3VzXG4gICAgICAgICAgICAgICAgLm9uKCdmb2N1cy5tYXNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0T25Gb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIHRoZSB2YWx1ZSBpZiBpdCBub3QgY29tcGxldGUgdGhlIG1hc2tcbiAgICAgICAgICAgICAgICAub24oJ2ZvY3Vzb3V0Lm1hc2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2xlYXJJZk5vdE1hdGNoICYmICFyZWdleE1hc2sudGVzdChwLnZhbCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICBwLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFJlZ2V4TWFzazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hc2tDaHVua3MgPSBbXSwgdHJhbnNsYXRpb24sIHBhdHRlcm4sIG9wdGlvbmFsLCByZWN1cnNpdmUsIG9SZWN1cnNpdmUsIHI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb24gPSBqTWFzay50cmFuc2xhdGlvblttYXNrLmNoYXJBdChpKV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gPSB0cmFuc2xhdGlvbi5wYXR0ZXJuLnRvU3RyaW5nKCkucmVwbGFjZSgvLnsxfSR8Xi57MX0vZywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWwgPSB0cmFuc2xhdGlvbi5vcHRpb25hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZSA9IHRyYW5zbGF0aW9uLnJlY3Vyc2l2ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tDaHVua3MucHVzaChtYXNrLmNoYXJBdChpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb1JlY3Vyc2l2ZSA9IHtkaWdpdDogbWFzay5jaGFyQXQoaSksIHBhdHRlcm46IHBhdHRlcm59O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrQ2h1bmtzLnB1c2goIW9wdGlvbmFsICYmICFyZWN1cnNpdmUgPyBwYXR0ZXJuIDogKHBhdHRlcm4gKyAnPycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0NodW5rcy5wdXNoKG1hc2suY2hhckF0KGkpLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHIgPSBtYXNrQ2h1bmtzLmpvaW4oJycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9SZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIG9SZWN1cnNpdmUuZGlnaXQgKyAnKC4qJyArIG9SZWN1cnNpdmUuZGlnaXQgKyAnKT8pJyksICcoJDEpPycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChvUmVjdXJzaXZlLmRpZ2l0LCAnZycpLCBvUmVjdXJzaXZlLnBhdHRlcm4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3lFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGVsLm9mZihbJ2lucHV0JywgJ2tleWRvd24nLCAna2V5dXAnLCAncGFzdGUnLCAnZHJvcCcsICdibHVyJywgJ2ZvY3Vzb3V0JywgJyddLmpvaW4oJy5tYXNrICcpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWw6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNJbnB1dCA9IGVsLmlzKCdpbnB1dCcpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBpc0lucHV0ID8gJ3ZhbCcgOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHI7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsW21ldGhvZF0oKSAhPT0gdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxbbWV0aG9kXSh2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByID0gZWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IGVsW21ldGhvZF0oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWxjdWxhdGVDYXJldFBvc2l0aW9uOiBmdW5jdGlvbihvbGRWYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsID0gcC5nZXRNYXNrZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NOZXcgPSBwLmdldENhcmV0KCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbCAhPT0gbmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvc09sZCA9IGVsLmRhdGEoJ21hc2stcHJldml1cy1jYXJldC1wb3MnKSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsTCA9IG5ld1ZhbC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWxMID0gb2xkVmFsLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNCZWZvcmVDYXJldCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRzQWZ0ZXJDYXJldCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGwgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0JlZm9yZUNhcmV0QWxsT2xkID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNhcmV0UG9zTmV3OyBpIDwgbmV3VmFsTDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXAubWFza0RpZ2l0UG9zTWFwW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRzQWZ0ZXJDYXJldCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gY2FyZXRQb3NOZXcgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwLm1hc2tEaWdpdFBvc01hcFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0JlZm9yZUNhcmV0Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBjYXJldFBvc05ldyAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocC5tYXNrRGlnaXRQb3NNYXBbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGwrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNhcmV0UG9zT2xkIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwLm1hc2tEaWdpdFBvc01hcE9sZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbE9sZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnNvciBpcyBhdCB0aGUgZW5kIGtlZXAgaXQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmV0UG9zTmV3ID4gb2xkVmFsTCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zTmV3ID0gbmV3VmFsTCAqIDEwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhcmV0UG9zT2xkID49IGNhcmV0UG9zTmV3ICYmIGNhcmV0UG9zT2xkICE9PSBvbGRWYWxMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXAubWFza0RpZ2l0UG9zTWFwT2xkW2NhcmV0UG9zTmV3XSkgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gY2FyZXRQb3NOZXc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zTmV3IC09IG1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbE9sZCAtIG1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NOZXcgLT0gbWFza0RpZ2l0c0JlZm9yZUNhcmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocC5tYXNrRGlnaXRQb3NNYXBbY2FyZXRQb3NOZXddKSAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zTmV3ID0gY2FyZXRQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjYXJldFBvc05ldyA+IGNhcmV0UG9zT2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvc05ldyArPSBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGwgLSBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGxPbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvc05ldyArPSBtYXNrRGlnaXRzQWZ0ZXJDYXJldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyZXRQb3NOZXc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVoYXZpb3VyOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgICAgIHAuaW52YWxpZCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFyIGtleUNvZGUgPSBlbC5kYXRhKCdtYXNrLWtleWNvZGUnKTtcblxuICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoa2V5Q29kZSwgak1hc2suYnlQYXNzS2V5cykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWwgPSBwLmdldE1hc2tlZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3MgPSBwLmdldENhcmV0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWwgPSBlbC5kYXRhKCdtYXNrLXByZXZpdXMtdmFsdWUnKSB8fCAnJztcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgY29tcGVuc2F0aW9uIHRvIGRldmljZXMvYnJvd3NlcnMgdGhhdCBkb24ndCBjb21wZW5zYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhcmV0IHBvc2l0aW9uaW5nIHRoZSByaWdodCB3YXlcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICBwLnNldENhcmV0KHAuY2FsY3VsYXRlQ2FyZXRQb3NpdGlvbihvbGRWYWwpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgJC5qTWFza0dsb2JhbHMua2V5U3Ryb2tlQ29tcGVuc2F0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICBwLnZhbChuZXdWYWwpO1xuICAgICAgICAgICAgICAgICAgICBwLnNldENhcmV0KGNhcmV0UG9zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuY2FsbGJhY2tzKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRNYXNrZWQ6IGZ1bmN0aW9uKHNraXBNYXNrQ2hhcnMsIHZhbCkge1xuICAgICAgICAgICAgICAgIHZhciBidWYgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWwgPT09IHVuZGVmaW5lZCA/IHAudmFsKCkgOiB2YWwgKyAnJyxcbiAgICAgICAgICAgICAgICAgICAgbSA9IDAsIG1hc2tMZW4gPSBtYXNrLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgdiA9IDAsIHZhbExlbiA9IHZhbHVlLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gMSwgYWRkTWV0aG9kID0gJ3B1c2gnLFxuICAgICAgICAgICAgICAgICAgICByZXNldFBvcyA9IC0xLFxuICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRDb3VudCA9IDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdFBvc0FyciA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBsYXN0TWFza0NoYXIsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmV2ZXJzZSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRNZXRob2QgPSAndW5zaGlmdCc7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICBsYXN0TWFza0NoYXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBtID0gbWFza0xlbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB2YWxMZW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtID4gLTEgJiYgdiA+IC0xO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RNYXNrQ2hhciA9IG1hc2tMZW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtIDwgbWFza0xlbiAmJiB2IDwgdmFsTGVuO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBsYXN0VW50cmFuc2xhdGVkTWFza0NoYXI7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNoZWNrKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tEaWdpdCA9IG1hc2suY2hhckF0KG0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsRGlnaXQgPSB2YWx1ZS5jaGFyQXQodiksXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbiA9IGpNYXNrLnRyYW5zbGF0aW9uW21hc2tEaWdpdF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsRGlnaXQubWF0Y2godHJhbnNsYXRpb24ucGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZbYWRkTWV0aG9kXSh2YWxEaWdpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbi5yZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc2V0UG9zID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRQb3MgPSBtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG0gPT09IGxhc3RNYXNrQ2hhciAmJiBtICE9PSByZXNldFBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9IHJlc2V0UG9zIC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RNYXNrQ2hhciA9PT0gcmVzZXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxEaWdpdCA9PT0gbGFzdFVudHJhbnNsYXRlZE1hc2tDaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hlZCB0aGUgbGFzdCB1bnRyYW5zbGF0ZWQgKHJhdykgbWFzayBjaGFyYWN0ZXIgdGhhdCB3ZSBlbmNvdW50ZXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpa2VseSBhbiBpbnNlcnQgb2Zmc2V0IHRoZSBtYXNrIGNoYXJhY3RlciBmcm9tIHRoZSBsYXN0IGVudHJ5OyBmYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhyb3VnaCBhbmQgb25seSBpbmNyZW1lbnQgdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdENvdW50LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVudHJhbnNsYXRlZE1hc2tDaGFyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGlvbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGlvbi5mYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZlthZGRNZXRob2RdKHRyYW5zbGF0aW9uLmZhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2IC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHAuaW52YWxpZC5wdXNoKHtwOiB2LCB2OiB2YWxEaWdpdCwgZTogdHJhbnNsYXRpb24ucGF0dGVybn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdiArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBNYXNrQ2hhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZbYWRkTWV0aG9kXShtYXNrRGlnaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsRGlnaXQgPT09IG1hc2tEaWdpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdFBvc0Fyci5wdXNoKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0VW50cmFuc2xhdGVkTWFza0NoYXIgPSBtYXNrRGlnaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0UG9zQXJyLnB1c2godiArIG1hc2tEaWdpdENvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBtICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBsYXN0TWFza0NoYXJEaWdpdCA9IG1hc2suY2hhckF0KGxhc3RNYXNrQ2hhcik7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2tMZW4gPT09IHZhbExlbiArIDEgJiYgIWpNYXNrLnRyYW5zbGF0aW9uW2xhc3RNYXNrQ2hhckRpZ2l0XSkge1xuICAgICAgICAgICAgICAgICAgICBidWYucHVzaChsYXN0TWFza0NoYXJEaWdpdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IGJ1Zi5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICBwLm1hcE1hc2tkaWdpdFBvc2l0aW9ucyhuZXdWYWwsIG1hc2tEaWdpdFBvc0FyciwgdmFsTGVuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcE1hc2tkaWdpdFBvc2l0aW9uczogZnVuY3Rpb24obmV3VmFsLCBtYXNrRGlnaXRQb3NBcnIsIHZhbExlbikge1xuICAgICAgICAgICAgICB2YXIgbWFza0RpZmYgPSBvcHRpb25zLnJldmVyc2UgPyBuZXdWYWwubGVuZ3RoIC0gdmFsTGVuIDogMDtcbiAgICAgICAgICAgICAgcC5tYXNrRGlnaXRQb3NNYXAgPSB7fTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXNrRGlnaXRQb3NBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwLm1hc2tEaWdpdFBvc01hcFttYXNrRGlnaXRQb3NBcnJbaV0gKyBtYXNrRGlmZl0gPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwgPSBwLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdmFsICE9PSBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEFyZ3MgPSBbdmFsLCBlLCBlbCwgb3B0aW9uc10sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24obmFtZSwgY3JpdGVyaWEsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiBjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygnb25DaGFuZ2UnLCBjaGFuZ2VkID09PSB0cnVlLCBkZWZhdWx0QXJncyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJ29uS2V5UHJlc3MnLCBjaGFuZ2VkID09PSB0cnVlLCBkZWZhdWx0QXJncyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJ29uQ29tcGxldGUnLCB2YWwubGVuZ3RoID09PSBtYXNrLmxlbmd0aCwgZGVmYXVsdEFyZ3MpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCdvbkludmFsaWQnLCBwLmludmFsaWQubGVuZ3RoID4gMCwgW3ZhbCwgZSwgZWwsIHAuaW52YWxpZCwgb3B0aW9uc10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgIHZhciBqTWFzayA9IHRoaXMsIG9sZFZhbHVlID0gcC52YWwoKSwgcmVnZXhNYXNrO1xuXG4gICAgICAgIG1hc2sgPSB0eXBlb2YgbWFzayA9PT0gJ2Z1bmN0aW9uJyA/IG1hc2socC52YWwoKSwgdW5kZWZpbmVkLCBlbCwgIG9wdGlvbnMpIDogbWFzaztcblxuICAgICAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgICAgICBqTWFzay5tYXNrID0gbWFzaztcbiAgICAgICAgak1hc2sub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGpNYXNrLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNhcmV0ID0gcC5nZXRDYXJldCgpO1xuICAgICAgICAgICAgaWYgKGpNYXNrLm9wdGlvbnMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsLmRhdGEoJ21hc2stbWF4bGVuZ3RoJykpIHtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdtYXhsZW5ndGgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuZGVzdHJveUV2ZW50cygpO1xuICAgICAgICAgICAgcC52YWwoak1hc2suZ2V0Q2xlYW5WYWwoKSk7XG4gICAgICAgICAgICBwLnNldENhcmV0KGNhcmV0KTtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBnZXQgdmFsdWUgd2l0aG91dCBtYXNrXG4gICAgICAgIGpNYXNrLmdldENsZWFuVmFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgIHJldHVybiBwLmdldE1hc2tlZCh0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBnZXQgbWFza2VkIHZhbHVlIHdpdGhvdXQgdGhlIHZhbHVlIGJlaW5nIGluIHRoZSBpbnB1dCBvciBlbGVtZW50XG4gICAgICAgIGpNYXNrLmdldE1hc2tlZFZhbCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICByZXR1cm4gcC5nZXRNYXNrZWQoZmFsc2UsIHZhbCk7XG4gICAgICAgIH07XG5cbiAgICAgICBqTWFzay5pbml0ID0gZnVuY3Rpb24ob25seU1hc2spIHtcbiAgICAgICAgICAgIG9ubHlNYXNrID0gb25seU1hc2sgfHwgZmFsc2U7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICAgICAgak1hc2suY2xlYXJJZk5vdE1hdGNoICA9ICQuak1hc2tHbG9iYWxzLmNsZWFySWZOb3RNYXRjaDtcbiAgICAgICAgICAgIGpNYXNrLmJ5UGFzc0tleXMgICAgICAgPSAkLmpNYXNrR2xvYmFscy5ieVBhc3NLZXlzO1xuICAgICAgICAgICAgak1hc2sudHJhbnNsYXRpb24gICAgICA9ICQuZXh0ZW5kKHt9LCAkLmpNYXNrR2xvYmFscy50cmFuc2xhdGlvbiwgb3B0aW9ucy50cmFuc2xhdGlvbik7XG5cbiAgICAgICAgICAgIGpNYXNrID0gJC5leHRlbmQodHJ1ZSwge30sIGpNYXNrLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgcmVnZXhNYXNrID0gcC5nZXRSZWdleE1hc2soKTtcblxuICAgICAgICAgICAgaWYgKG9ubHlNYXNrKSB7XG4gICAgICAgICAgICAgICAgcC5ldmVudHMoKTtcbiAgICAgICAgICAgICAgICBwLnZhbChwLmdldE1hc2tlZCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYXR0cigncGxhY2Vob2xkZXInICwgb3B0aW9ucy5wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBuZWNlc3NhcnksIG90aGVyd2lzZSBpZiB0aGUgdXNlciBzdWJtaXQgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICAvLyBhbmQgdGhlbiBwcmVzcyB0aGUgXCJiYWNrXCIgYnV0dG9uLCB0aGUgYXV0b2NvbXBsZXRlIHdpbGwgZXJhc2VcbiAgICAgICAgICAgICAgICAvLyB0aGUgZGF0YS4gV29ya3MgZmluZSBvbiBJRTkrLCBGRiwgT3BlcmEsIFNhZmFyaS5cbiAgICAgICAgICAgICAgICBpZiAoZWwuZGF0YSgnbWFzaycpKSB7XG4gICAgICAgICAgICAgICAgICBlbC5hdHRyKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gZGV0ZWN0IGlmIGlzIG5lY2Vzc2FyeSBsZXQgdGhlIHVzZXIgdHlwZSBmcmVlbHkuXG4gICAgICAgICAgICAgICAgLy8gZm9yIGlzIGEgbG90IGZhc3RlciB0aGFuIGZvckVhY2guXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG1heGxlbmd0aCA9IHRydWU7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbiA9IGpNYXNrLnRyYW5zbGF0aW9uW21hc2suY2hhckF0KGkpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtYXhsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYXR0cignbWF4bGVuZ3RoJywgbWFzay5sZW5ndGgpLmRhdGEoJ21hc2stbWF4bGVuZ3RoJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcC5kZXN0cm95RXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgcC5ldmVudHMoKTtcblxuICAgICAgICAgICAgICAgIHZhciBjYXJldCA9IHAuZ2V0Q2FyZXQoKTtcbiAgICAgICAgICAgICAgICBwLnZhbChwLmdldE1hc2tlZCgpKTtcbiAgICAgICAgICAgICAgICBwLnNldENhcmV0KGNhcmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBqTWFzay5pbml0KCFlbC5pcygnaW5wdXQnKSk7XG4gICAgfTtcblxuICAgICQubWFza1dhdGNoZXJzID0ge307XG4gICAgdmFyIEhUTUxBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHt9LFxuICAgICAgICAgICAgcHJlZml4ID0gJ2RhdGEtbWFzay0nLFxuICAgICAgICAgICAgbWFzayA9IGlucHV0LmF0dHIoJ2RhdGEtbWFzaycpO1xuXG4gICAgICAgIGlmIChpbnB1dC5hdHRyKHByZWZpeCArICdyZXZlcnNlJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucmV2ZXJzZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXQuYXR0cihwcmVmaXggKyAnY2xlYXJpZm5vdG1hdGNoJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY2xlYXJJZk5vdE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dC5hdHRyKHByZWZpeCArICdzZWxlY3RvbmZvY3VzJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICBvcHRpb25zLnNlbGVjdE9uRm9jdXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vdFNhbWVNYXNrT2JqZWN0KGlucHV0LCBtYXNrLCBvcHRpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmRhdGEoJ21hc2snLCBuZXcgTWFzayh0aGlzLCBtYXNrLCBvcHRpb25zKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5vdFNhbWVNYXNrT2JqZWN0ID0gZnVuY3Rpb24oZmllbGQsIG1hc2ssIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBtYXNrT2JqZWN0ID0gJChmaWVsZCkuZGF0YSgnbWFzaycpLFxuICAgICAgICAgICAgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnksXG4gICAgICAgICAgICB2YWx1ZSA9ICQoZmllbGQpLnZhbCgpIHx8ICQoZmllbGQpLnRleHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWFzayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG1hc2sgPSBtYXNrKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgbWFza09iamVjdCAhPT0gJ29iamVjdCcgfHwgc3RyaW5naWZ5KG1hc2tPYmplY3Qub3B0aW9ucykgIT09IHN0cmluZ2lmeShvcHRpb25zKSB8fCBtYXNrT2JqZWN0Lm1hc2sgIT09IG1hc2s7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSxcbiAgICBldmVudFN1cHBvcnRlZCA9IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgaXNTdXBwb3J0ZWQ7XG5cbiAgICAgICAgZXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZTtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSAoZXZlbnROYW1lIGluIGVsKTtcblxuICAgICAgICBpZiAoICFpc1N1cHBvcnRlZCApIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShldmVudE5hbWUsICdyZXR1cm47Jyk7XG4gICAgICAgICAgICBpc1N1cHBvcnRlZCA9IHR5cGVvZiBlbFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgfTtcblxuICAgICQuZm4ubWFzayA9IGZ1bmN0aW9uKG1hc2ssIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3IsXG4gICAgICAgICAgICBnbG9iYWxzID0gJC5qTWFza0dsb2JhbHMsXG4gICAgICAgICAgICBpbnRlcnZhbCA9IGdsb2JhbHMud2F0Y2hJbnRlcnZhbCxcbiAgICAgICAgICAgIHdhdGNoSW5wdXRzID0gb3B0aW9ucy53YXRjaElucHV0cyB8fCBnbG9iYWxzLndhdGNoSW5wdXRzLFxuICAgICAgICAgICAgbWFza0Z1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdFNhbWVNYXNrT2JqZWN0KHRoaXMsIG1hc2ssIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmRhdGEoJ21hc2snLCBuZXcgTWFzayh0aGlzLCBtYXNrLCBvcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAkKHRoaXMpLmVhY2gobWFza0Z1bmN0aW9uKTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IgJiYgc2VsZWN0b3IgIT09ICcnICYmIHdhdGNoSW5wdXRzKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKCQubWFza1dhdGNoZXJzW3NlbGVjdG9yXSk7XG4gICAgICAgICAgICAkLm1hc2tXYXRjaGVyc1tzZWxlY3Rvcl0gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoc2VsZWN0b3IpLmVhY2gobWFza0Z1bmN0aW9uKTtcbiAgICAgICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgJC5mbi5tYXNrZWQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgnbWFzaycpLmdldE1hc2tlZFZhbCh2YWwpO1xuICAgIH07XG5cbiAgICAkLmZuLnVubWFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGVhckludGVydmFsKCQubWFza1dhdGNoZXJzW3RoaXMuc2VsZWN0b3JdKTtcbiAgICAgICAgZGVsZXRlICQubWFza1dhdGNoZXJzW3RoaXMuc2VsZWN0b3JdO1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRhdGFNYXNrID0gJCh0aGlzKS5kYXRhKCdtYXNrJyk7XG4gICAgICAgICAgICBpZiAoZGF0YU1hc2spIHtcbiAgICAgICAgICAgICAgICBkYXRhTWFzay5yZW1vdmUoKS5yZW1vdmVEYXRhKCdtYXNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLmNsZWFuVmFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEoJ21hc2snKS5nZXRDbGVhblZhbCgpO1xuICAgIH07XG5cbiAgICAkLmFwcGx5RGF0YU1hc2sgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICQuak1hc2tHbG9iYWxzLm1hc2tFbGVtZW50cztcbiAgICAgICAgdmFyICRzZWxlY3RvciA9IChzZWxlY3RvciBpbnN0YW5jZW9mICQpID8gc2VsZWN0b3IgOiAkKHNlbGVjdG9yKTtcbiAgICAgICAgJHNlbGVjdG9yLmZpbHRlcigkLmpNYXNrR2xvYmFscy5kYXRhTWFza0F0dHIpLmVhY2goSFRNTEF0dHJpYnV0ZXMpO1xuICAgIH07XG5cbiAgICB2YXIgZ2xvYmFscyA9IHtcbiAgICAgICAgbWFza0VsZW1lbnRzOiAnaW5wdXQsdGQsc3BhbixkaXYnLFxuICAgICAgICBkYXRhTWFza0F0dHI6ICcqW2RhdGEtbWFza10nLFxuICAgICAgICBkYXRhTWFzazogdHJ1ZSxcbiAgICAgICAgd2F0Y2hJbnRlcnZhbDogMzAwLFxuICAgICAgICB3YXRjaElucHV0czogdHJ1ZSxcbiAgICAgICAga2V5U3Ryb2tlQ29tcGVuc2F0aW9uOiAxMCxcbiAgICAgICAgLy8gb2xkIHZlcnNpb25zIG9mIGNocm9tZSBkb250IHdvcmsgZ3JlYXQgd2l0aCBpbnB1dCBldmVudFxuICAgICAgICB1c2VJbnB1dDogIS9DaHJvbWVcXC9bMi00XVswLTldfFNhbXN1bmdCcm93c2VyLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSAmJiBldmVudFN1cHBvcnRlZCgnaW5wdXQnKSxcbiAgICAgICAgd2F0Y2hEYXRhTWFzazogZmFsc2UsXG4gICAgICAgIGJ5UGFzc0tleXM6IFs5LCAxNiwgMTcsIDE4LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDkxXSxcbiAgICAgICAgdHJhbnNsYXRpb246IHtcbiAgICAgICAgICAgICcwJzoge3BhdHRlcm46IC9cXGQvfSxcbiAgICAgICAgICAgICc5Jzoge3BhdHRlcm46IC9cXGQvLCBvcHRpb25hbDogdHJ1ZX0sXG4gICAgICAgICAgICAnIyc6IHtwYXR0ZXJuOiAvXFxkLywgcmVjdXJzaXZlOiB0cnVlfSxcbiAgICAgICAgICAgICdBJzoge3BhdHRlcm46IC9bYS16QS1aMC05XS99LFxuICAgICAgICAgICAgJ1MnOiB7cGF0dGVybjogL1thLXpBLVpdL31cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLmpNYXNrR2xvYmFscyA9ICQuak1hc2tHbG9iYWxzIHx8IHt9O1xuICAgIGdsb2JhbHMgPSAkLmpNYXNrR2xvYmFscyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBnbG9iYWxzLCAkLmpNYXNrR2xvYmFscyk7XG5cbiAgICAvLyBsb29raW5nIGZvciBpbnB1dHMgd2l0aCBkYXRhLW1hc2sgYXR0cmlidXRlXG4gICAgaWYgKGdsb2JhbHMuZGF0YU1hc2spIHtcbiAgICAgICAgJC5hcHBseURhdGFNYXNrKCk7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkLmpNYXNrR2xvYmFscy53YXRjaERhdGFNYXNrKSB7XG4gICAgICAgICAgICAkLmFwcGx5RGF0YU1hc2soKTtcbiAgICAgICAgfVxuICAgIH0sIGdsb2JhbHMud2F0Y2hJbnRlcnZhbCk7XG59LCB3aW5kb3cualF1ZXJ5LCB3aW5kb3cuWmVwdG8pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=