(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Calendar = factory(global.React, global.PropTypes));
})(this, (function (React, PropTypes) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var jsYearCalendar = {};

  (function (exports) {
  	(function (global, factory) {
  	  {
  	    factory(exports);
  	  }
  	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function (_exports) {

  	  Object.defineProperty(_exports, "__esModule", {
  	    value: true
  	  });
  	  _exports["default"] = void 0;

  	  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  	  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  	  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  	  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  	  /* =========================================================
  	   * JS year calendar v1.0.0
  	   * Repo: https://github.com/year-calendar/js-year-calendar
  	   * =========================================================
  	   * Created by Paul David-Sivelle
  	   *
  	   * Licensed under the Apache License, Version 2.0 (the "License");
  	   * you may not use this file except in compliance with the License.
  	   * You may obtain a copy of the License at
  	   *
  	   * http://www.apache.org/licenses/LICENSE-2.0
  	   *
  	   * Unless required by applicable law or agreed to in writing, software
  	   * distributed under the License is distributed on an "AS IS" BASIS,
  	   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  	   * See the License for the specific language governing permissions and
  	   * limitations under the License.
  	   * ========================================================= */
  	  // NodeList forEach() polyfill
  	  if (typeof NodeList !== "undefined" && !NodeList.prototype.forEach) {
  	    NodeList.prototype.forEach = function (callback, thisArg) {
  	      thisArg = thisArg || window;

  	      for (var i = 0; i < this.length; i++) {
  	        callback.call(thisArg, this[i], i, this);
  	      }
  	    };
  	  } // Element closest() polyfill


  	  if (typeof Element !== "undefined" && !Element.prototype.matches) {
  	    var prototype = Element.prototype;
  	    Element.prototype.matches = prototype.msMatchesSelector || prototype.webkitMatchesSelector;
  	  }

  	  if (typeof Element !== "undefined" && !Element.prototype.closest) {
  	    Element.prototype.closest = function (s) {
  	      var el = this;
  	      if (!document.documentElement.contains(el)) return null;

  	      do {
  	        if (el.matches(s)) return el;
  	        el = el.parentElement || el.parentNode;
  	      } while (el !== null && el.nodeType == 1);

  	      return null;
  	    };
  	  }
  	  /**
  	   * Calendar instance.
  	   */


  	  var Calendar = /*#__PURE__*/function () {
  	    /**
  	     * Fired when a day is clicked.
  	     * @event
  	     * @example
  	     * ```
  	     * 
  	     * document.querySelector('.calendar').addEventListener('clickDay', function(e) {
  	     *   console.log("Click on day: " + e.date + " (" + e.events.length + " events)");
  	     * })
  	     * ```
  	     */

  	    /**
  	     * Fired when a day is right clicked.
  	     * @event
  	     * @example
  	     * ```
  	     * 
  	     * document.querySelector('.calendar').addEventListener('clickDay', function(e) {
  	     *   console.log("Right click on day: " + e.date + " (" + e.events.length + " events)");
  	     * })
  	     * ```
  	     */

  	    /**
  	     * Fired when the mouse enter in a day.
  	     * @event
  	     * @example
  	     * ```
  	     * 
  	     * document.querySelector('.calendar').addEventListener('mouseOnDay', function(e) {
  	     *   console.log("Mouse enter in a day: " + e.date + " (" + e.events.length + " events)");
  	     * })
  	     * ```
  	     */

  	    /**
  	     * Fired when the mouse leave a day.
  	     * @event
  	     * @example
  	     * ```
  	     * 
  	     * document.querySelector('.calendar').addEventListener('mouseOutDay', function(e) {
  	     *   console.log("Mouse leave a day: " + e.date + " (" + e.events.length + " events)");
  	     * })
  	     * ```
  	     */

  	    /**
  	     * Fired when the calendar rendering is ended.
  	     * @event
  	     * @example
  	     * ```
  	     * 
  	     * document.querySelector('.calendar').addEventListener('renderEnd', function(e) {
  	     *   console.log("Render end for year: " + e.currentYear);
  	     * })
  	     * ```
  	     */

  	    /**
  	     * Fired when a date range is selected.
  	     * 
  	     * Don't forget to enable the `enableRangeSelection` option to be able to use the range selection functionality.
  	     * @event
  	     * @example
  	     * ```
  	     * 
  	     * document.querySelector('.calendar').addEventListener('selectRange', function(e) {
  	     *   console.log("Select the range: " + e.startDate + " - " + e.endDate);
  	     * })
  	     * ```
  	     */

  	    /**
  	     * Triggered after the changing the current year.
  	     * Works only if the calendar is used in a full year mode. Otherwise, use `periodChanged` event.
  	     * @event
  	     * @example
  	     * ```
  	     * 
  	     * document.querySelector('.calendar').addEventListener('yearChanged', function(e) {
  	     *   console.log("New year selected: " + e.currentYear);
  	     * })
  	     * ```
  	     */

  	    /**
  	     * Triggered after the changing the visible period.
  	     * @event
  	     * @example
  	     * ```
  	     * 
  	     * document.querySelector('.calendar').addEventListener('periodChanged', function(e) {
  	     *   console.log(`New period selected: ${e.startDate} ${e.endDate}`);
  	     * })
  	     * ```
  	     */

  	    /**
  	     * Create a new calendar.
  	     * @param element The element (or the selector to an element) in which the calendar should be created.
  	     * @param options [Optional] The options used to customize the calendar
  	     */
  	    function Calendar(element) {
  	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  	      _classCallCheck(this, Calendar);

  	      _defineProperty(this, "element", void 0);

  	      _defineProperty(this, "options", void 0);

  	      _defineProperty(this, "_startDate", void 0);

  	      _defineProperty(this, "_dataSource", void 0);

  	      _defineProperty(this, "_mouseDown", void 0);

  	      _defineProperty(this, "_rangeStart", void 0);

  	      _defineProperty(this, "_rangeEnd", void 0);

  	      _defineProperty(this, "_responsiveInterval", void 0);

  	      _defineProperty(this, "_nbCols", void 0);

  	      _defineProperty(this, "clickDay", void 0);

  	      _defineProperty(this, "dayContextMenu", void 0);

  	      _defineProperty(this, "mouseOnDay", void 0);

  	      _defineProperty(this, "mouseOutDay", void 0);

  	      _defineProperty(this, "renderEnd", void 0);

  	      _defineProperty(this, "selectRange", void 0);

  	      _defineProperty(this, "yearChanged", void 0);

  	      _defineProperty(this, "periodChanged", void 0);

  	      if (element instanceof HTMLElement) {
  	        this.element = element;
  	      } else if (typeof element === "string") {
  	        this.element = document.querySelector(element);
  	      } else {
  	        throw new Error("The element parameter should be a DOM node or a selector");
  	      }

  	      this.element.classList.add('calendar');

  	      this._initializeEvents(options);

  	      this._initializeOptions(options);

  	      var startYear = new Date().getFullYear();
  	      var startMonth = 0;

  	      if (this.options.startDate) {
  	        startYear = this.options.startDate.getFullYear();
  	        startMonth = this.options.startDate.getMonth();
  	      } else if (this.options.startYear) {
  	        startYear = this.options.startYear;
  	      }

  	      this.setStartDate(new Date(startYear, startMonth, 1));
  	    }

  	    _createClass(Calendar, [{
  	      key: "_initializeOptions",
  	      value: function _initializeOptions(opt) {
  	        if (opt == null) {
  	          opt = {};
  	        }

  	        this.options = {
  	          startYear: !isNaN(parseInt(opt.startYear)) ? parseInt(opt.startYear) : null,
  	          startDate: opt.startDate instanceof Date ? opt.startDate : null,
  	          numberMonthsDisplayed: !isNaN(parseInt(opt.numberMonthsDisplayed)) && opt.numberMonthsDisplayed > 0 && opt.numberMonthsDisplayed <= 12 ? parseInt(opt.numberMonthsDisplayed) : 12,
  	          minDate: opt.minDate instanceof Date ? opt.minDate : null,
  	          maxDate: opt.maxDate instanceof Date ? opt.maxDate : null,
  	          language: opt.language != null && Calendar.locales[opt.language] != null ? opt.language : 'en',
  	          allowOverlap: opt.allowOverlap != null ? opt.allowOverlap : true,
  	          displayWeekNumber: opt.displayWeekNumber != null ? opt.displayWeekNumber : false,
  	          displayDisabledDataSource: opt.displayDisabledDataSource != null ? opt.displayDisabledDataSource : false,
  	          displayHeader: opt.displayHeader != null ? opt.displayHeader : true,
  	          alwaysHalfDay: opt.alwaysHalfDay != null ? opt.alwaysHalfDay : false,
  	          enableRangeSelection: opt.enableRangeSelection != null ? opt.enableRangeSelection : false,
  	          disabledDays: opt.disabledDays instanceof Array ? opt.disabledDays : [],
  	          disabledWeekDays: opt.disabledWeekDays instanceof Array ? opt.disabledWeekDays : [],
  	          hiddenWeekDays: opt.hiddenWeekDays instanceof Array ? opt.hiddenWeekDays : [],
  	          roundRangeLimits: opt.roundRangeLimits != null ? opt.roundRangeLimits : false,
  	          dataSource: opt.dataSource instanceof Array || typeof opt.dataSource === "function" ? opt.dataSource : [],
  	          style: opt.style == 'background' || opt.style == 'border' || opt.style == 'custom' ? opt.style : 'border',
  	          enableContextMenu: opt.enableContextMenu != null ? opt.enableContextMenu : false,
  	          contextMenuItems: opt.contextMenuItems instanceof Array ? opt.contextMenuItems : [],
  	          customDayRenderer: typeof opt.customDayRenderer === "function" ? opt.customDayRenderer : null,
  	          customDataSourceRenderer: typeof opt.customDataSourceRenderer === "function" ? opt.customDataSourceRenderer : null,
  	          weekStart: !isNaN(parseInt(opt.weekStart)) ? parseInt(opt.weekStart) : null,
  	          loadingTemplate: typeof opt.loadingTemplate === "string" || opt.loadingTemplate instanceof HTMLElement ? opt.loadingTemplate : null
  	        };

  	        if (this.options.dataSource instanceof Array) {
  	          this._dataSource = this.options.dataSource;

  	          this._initializeDatasourceColors();
  	        }
  	      }
  	    }, {
  	      key: "_initializeEvents",
  	      value: function _initializeEvents(opt) {
  	        if (opt == null) {
  	          opt = [];
  	        }

  	        if (opt.yearChanged) {
  	          this.element.addEventListener('yearChanged', opt.yearChanged);
  	        }

  	        if (opt.periodChanged) {
  	          this.element.addEventListener('periodChanged', opt.periodChanged);
  	        }

  	        if (opt.renderEnd) {
  	          this.element.addEventListener('renderEnd', opt.renderEnd);
  	        }

  	        if (opt.clickDay) {
  	          this.element.addEventListener('clickDay', opt.clickDay);
  	        }

  	        if (opt.dayContextMenu) {
  	          this.element.addEventListener('dayContextMenu', opt.dayContextMenu);
  	        }

  	        if (opt.selectRange) {
  	          this.element.addEventListener('selectRange', opt.selectRange);
  	        }

  	        if (opt.mouseOnDay) {
  	          this.element.addEventListener('mouseOnDay', opt.mouseOnDay);
  	        }

  	        if (opt.mouseOutDay) {
  	          this.element.addEventListener('mouseOutDay', opt.mouseOutDay);
  	        }
  	      }
  	    }, {
  	      key: "_fetchDataSource",
  	      value: function _fetchDataSource(callback) {
  	        if (typeof this.options.dataSource === "function") {
  	          var getDataSource = this.options.dataSource;
  	          var currentPeriod = this.getCurrentPeriod();
  	          var fetchParameters = {
  	            year: currentPeriod.startDate.getFullYear(),
  	            startDate: currentPeriod.startDate,
  	            endDate: currentPeriod.endDate
  	          };

  	          if (getDataSource.length == 2) {
  	            // 2 parameters, means callback method
  	            getDataSource(fetchParameters, callback);
  	          } else {
  	            // 1 parameter, means synchronous or promise method
  	            var result = getDataSource(fetchParameters);

  	            if (result instanceof Array) {
  	              callback(result);
  	            }

  	            if (result && result.then) {
  	              result.then(callback);
  	            }
  	          }
  	        } else {
  	          callback(this.options.dataSource);
  	        }
  	      }
  	    }, {
  	      key: "_initializeDatasourceColors",
  	      value: function _initializeDatasourceColors() {
  	        for (var i = 0; i < this._dataSource.length; i++) {
  	          if (this._dataSource[i].color == null) {
  	            this._dataSource[i].color = Calendar.colors[i % Calendar.colors.length];
  	          }
  	        }
  	      }
  	      /**
  	          * Renders the calendar.
  	          */

  	    }, {
  	      key: "render",
  	      value: function render() {
  	        var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  	        // Clear the calendar (faster method)
  	        while (this.element.firstChild) {
  	          this.element.removeChild(this.element.firstChild);
  	        }

  	        if (this.options.displayHeader) {
  	          this._renderHeader();
  	        }

  	        if (isLoading) {
  	          this._renderLoading();
  	        } else {
  	          this._renderBody();

  	          this._renderDataSource();

  	          this._applyEvents(); // Fade animation


  	          var months = this.element.querySelector('.months-container');
  	          months.style.opacity = '0';
  	          months.style.display = 'flex';
  	          months.style.transition = 'opacity 0.5s';
  	          setTimeout(function () {
  	            months.style.opacity = '1';
  	            setTimeout(function () {
  	              return months.style.transition = '';
  	            }, 500);
  	          }, 0);
  	          var currentPeriod = this.getCurrentPeriod();

  	          this._triggerEvent('renderEnd', {
  	            currentYear: currentPeriod.startDate.getFullYear(),
  	            startDate: currentPeriod.startDate,
  	            endDate: currentPeriod.endDate
  	          });
  	        }
  	      }
  	    }, {
  	      key: "_renderHeader",
  	      value: function _renderHeader() {
  	        var header = document.createElement('div');
  	        header.classList.add('calendar-header');
  	        var headerTable = document.createElement('table');
  	        var period = this.getCurrentPeriod(); // Left arrow

  	        var prevDiv = document.createElement('th');
  	        prevDiv.classList.add('prev');

  	        if (this.options.minDate != null && this.options.minDate >= period.startDate) {
  	          prevDiv.classList.add('disabled');
  	        }

  	        var prevIcon = document.createElement('span');
  	        prevIcon.innerHTML = "&lsaquo;";
  	        prevDiv.appendChild(prevIcon);
  	        headerTable.appendChild(prevDiv);

  	        if (this._isFullYearMode()) {
  	          // Year N-2
  	          var prev2YearDiv = document.createElement('th');
  	          prev2YearDiv.classList.add('year-title');
  	          prev2YearDiv.classList.add('year-neighbor2');
  	          prev2YearDiv.textContent = (this._startDate.getFullYear() - 2).toString();

  	          if (this.options.minDate != null && this.options.minDate > new Date(this._startDate.getFullYear() - 2, 11, 31)) {
  	            prev2YearDiv.classList.add('disabled');
  	          }

  	          headerTable.appendChild(prev2YearDiv); // Year N-1

  	          var prevYearDiv = document.createElement('th');
  	          prevYearDiv.classList.add('year-title');
  	          prevYearDiv.classList.add('year-neighbor');
  	          prevYearDiv.textContent = (this._startDate.getFullYear() - 1).toString();

  	          if (this.options.minDate != null && this.options.minDate > new Date(this._startDate.getFullYear() - 1, 11, 31)) {
  	            prevYearDiv.classList.add('disabled');
  	          }

  	          headerTable.appendChild(prevYearDiv);
  	        } // Current year


  	        var yearDiv = document.createElement('th');
  	        yearDiv.classList.add('year-title');

  	        if (this._isFullYearMode()) {
  	          yearDiv.textContent = this._startDate.getFullYear().toString();
  	        } else if (this.options.numberMonthsDisplayed == 12) {
  	          yearDiv.textContent = "".concat(period.startDate.getFullYear(), " - ").concat(period.endDate.getFullYear());
  	        } else if (this.options.numberMonthsDisplayed > 1) {
  	          yearDiv.textContent = "".concat(Calendar.locales[this.options.language].months[period.startDate.getMonth()], " ").concat(period.startDate.getFullYear(), " - ").concat(Calendar.locales[this.options.language].months[period.endDate.getMonth()], " ").concat(period.endDate.getFullYear());
  	        } else {
  	          yearDiv.textContent = "".concat(Calendar.locales[this.options.language].months[period.startDate.getMonth()], " ").concat(period.startDate.getFullYear());
  	        }

  	        headerTable.appendChild(yearDiv);

  	        if (this._isFullYearMode()) {
  	          // Year N+1
  	          var nextYearDiv = document.createElement('th');
  	          nextYearDiv.classList.add('year-title');
  	          nextYearDiv.classList.add('year-neighbor');
  	          nextYearDiv.textContent = (this._startDate.getFullYear() + 1).toString();

  	          if (this.options.maxDate != null && this.options.maxDate < new Date(this._startDate.getFullYear() + 1, 0, 1)) {
  	            nextYearDiv.classList.add('disabled');
  	          }

  	          headerTable.appendChild(nextYearDiv); // Year N+2

  	          var next2YearDiv = document.createElement('th');
  	          next2YearDiv.classList.add('year-title');
  	          next2YearDiv.classList.add('year-neighbor2');
  	          next2YearDiv.textContent = (this._startDate.getFullYear() + 2).toString();

  	          if (this.options.maxDate != null && this.options.maxDate < new Date(this._startDate.getFullYear() + 2, 0, 1)) {
  	            next2YearDiv.classList.add('disabled');
  	          }

  	          headerTable.appendChild(next2YearDiv);
  	        } // Right arrow


  	        var nextDiv = document.createElement('th');
  	        nextDiv.classList.add('next');

  	        if (this.options.maxDate != null && this.options.maxDate <= period.endDate) {
  	          nextDiv.classList.add('disabled');
  	        }

  	        var nextIcon = document.createElement('span');
  	        nextIcon.innerHTML = "&rsaquo;";
  	        nextDiv.appendChild(nextIcon);
  	        headerTable.appendChild(nextDiv);
  	        header.appendChild(headerTable);
  	        this.element.appendChild(header);
  	      }
  	    }, {
  	      key: "_renderBody",
  	      value: function _renderBody() {
  	        var monthsDiv = document.createElement('div');
  	        monthsDiv.classList.add('months-container');
  	        var monthStartDate = new Date(this._startDate.getTime());

  	        for (var m = 0; m < this.options.numberMonthsDisplayed; m++) {
  	          /* Container */
  	          var monthDiv = document.createElement('div');
  	          monthDiv.classList.add('month-container');
  	          monthDiv.dataset.monthId = m.toString();

  	          if (this._nbCols) {
  	            monthDiv.classList.add("month-".concat(this._nbCols));
  	          }

  	          var table = document.createElement('table');
  	          table.classList.add('month');
  	          /* Month header */

  	          var thead = document.createElement('thead');
  	          var titleRow = document.createElement('tr');
  	          var titleCell = document.createElement('th');
  	          titleCell.classList.add('month-title');
  	          titleCell.setAttribute('colspan', this.options.displayWeekNumber ? '8' : '7');
  	          titleCell.textContent = Calendar.locales[this.options.language].months[monthStartDate.getMonth()];
  	          titleRow.appendChild(titleCell);
  	          thead.appendChild(titleRow);
  	          var headerRow = document.createElement('tr');

  	          if (this.options.displayWeekNumber) {
  	            var weekNumberCell = document.createElement('th');
  	            weekNumberCell.classList.add('week-number');
  	            weekNumberCell.textContent = Calendar.locales[this.options.language].weekShort;
  	            headerRow.appendChild(weekNumberCell);
  	          }

  	          var weekStart = this.getWeekStart();
  	          var d = weekStart;

  	          do {
  	            var headerCell = document.createElement('th');
  	            headerCell.classList.add('day-header');
  	            headerCell.textContent = Calendar.locales[this.options.language].daysMin[d];

  	            if (this._isHidden(d)) {
  	              headerCell.classList.add('hidden');
  	            }

  	            headerRow.appendChild(headerCell);
  	            d++;
  	            if (d >= 7) d = 0;
  	          } while (d != weekStart);

  	          thead.appendChild(headerRow);
  	          table.appendChild(thead);
  	          /* Days */

  	          var currentDate = new Date(monthStartDate.getTime());
  	          var lastDate = new Date(monthStartDate.getFullYear(), monthStartDate.getMonth() + 1, 0);

  	          while (currentDate.getDay() != weekStart) {
  	            currentDate.setDate(currentDate.getDate() - 1);
  	          }

  	          while (currentDate <= lastDate) {
  	            var row = document.createElement('tr');

  	            if (this.options.displayWeekNumber) {
  	              var weekNumberCell = document.createElement('td');
  	              var currentThursday = new Date(currentDate.getTime()); // Week number is computed based on the thursday

  	              currentThursday.setDate(currentThursday.getDate() - weekStart + 4);
  	              weekNumberCell.classList.add('week-number');
  	              weekNumberCell.textContent = this.getWeekNumber(currentThursday).toString();
  	              row.appendChild(weekNumberCell);
  	            }

  	            do {
  	              var cell = document.createElement('td');
  	              cell.classList.add('day');

  	              if (this._isHidden(currentDate.getDay())) {
  	                cell.classList.add('hidden');
  	              }

  	              if (currentDate < monthStartDate) {
  	                cell.classList.add('old');
  	              } else if (currentDate > lastDate) {
  	                cell.classList.add('new');
  	              } else {
  	                if (this._isDisabled(currentDate)) {
  	                  cell.classList.add('disabled');
  	                }

  	                var cellContent = document.createElement('div');
  	                cellContent.classList.add('day-content');
  	                cellContent.textContent = currentDate.getDate().toString();
  	                cell.appendChild(cellContent);

  	                if (this.options.customDayRenderer) {
  	                  this.options.customDayRenderer(cellContent, currentDate);
  	                }
  	              }

  	              row.appendChild(cell);
  	              currentDate.setDate(currentDate.getDate() + 1);
  	            } while (currentDate.getDay() != weekStart);

  	            table.appendChild(row);
  	          }

  	          monthDiv.appendChild(table);
  	          monthsDiv.appendChild(monthDiv);
  	          monthStartDate.setMonth(monthStartDate.getMonth() + 1);
  	        }

  	        this.element.appendChild(monthsDiv);
  	      }
  	    }, {
  	      key: "_renderLoading",
  	      value: function _renderLoading() {
  	        var container = document.createElement('div');
  	        container.classList.add('calendar-loading-container');
  	        container.style.minHeight = this._nbCols * 200 + 'px';
  	        var loading = document.createElement('div');
  	        loading.classList.add('calendar-loading');

  	        if (this.options.loadingTemplate) {
  	          if (typeof this.options.loadingTemplate === "string") {
  	            loading.innerHTML = this.options.loadingTemplate;
  	          } else if (this.options.loadingTemplate instanceof HTMLElement) {
  	            loading.appendChild(this.options.loadingTemplate);
  	          }
  	        } else {
  	          var spinner = document.createElement('div');
  	          spinner.classList.add('calendar-spinner');

  	          for (var i = 1; i <= 3; i++) {
  	            var bounce = document.createElement('div');
  	            bounce.classList.add("bounce".concat(i));
  	            spinner.appendChild(bounce);
  	          }

  	          loading.appendChild(spinner);
  	        }

  	        container.appendChild(loading);
  	        this.element.appendChild(container);
  	      }
  	    }, {
  	      key: "_renderDataSource",
  	      value: function _renderDataSource() {
  	        var _this = this;

  	        if (this._dataSource != null && this._dataSource.length > 0) {
  	          this.element.querySelectorAll('.month-container').forEach(function (month) {
  	            var monthId = parseInt(month.dataset.monthId);

  	            var currentYear = _this._startDate.getFullYear();

  	            var currentMonth = _this._startDate.getMonth() + monthId;
  	            var firstDate = new Date(currentYear, currentMonth, 1);
  	            var lastDate = new Date(currentYear, currentMonth + 1, 1);

  	            if ((_this.options.minDate == null || lastDate > _this.options.minDate) && (_this.options.maxDate == null || firstDate <= _this.options.maxDate)) {
  	              var monthData = [];

  	              for (var i = 0; i < _this._dataSource.length; i++) {
  	                if (!(_this._dataSource[i].startDate >= lastDate) || _this._dataSource[i].endDate < firstDate) {
  	                  monthData.push(_this._dataSource[i]);
  	                }
  	              }

  	              if (monthData.length > 0) {
  	                month.querySelectorAll('.day-content').forEach(function (day) {
  	                  var currentDate = new Date(currentYear, currentMonth, parseInt(day.textContent));
  	                  var nextDate = new Date(currentYear, currentMonth, currentDate.getDate() + 1);
  	                  var dayData = [];

  	                  if ((_this.options.minDate == null || currentDate >= _this.options.minDate) && (_this.options.maxDate == null || currentDate <= _this.options.maxDate)) {
  	                    for (var i = 0; i < monthData.length; i++) {
  	                      if (monthData[i].startDate < nextDate && monthData[i].endDate >= currentDate) {
  	                        dayData.push(monthData[i]);
  	                      }
  	                    }

  	                    if (dayData.length > 0 && (_this.options.displayDisabledDataSource || !_this._isDisabled(currentDate))) {
  	                      _this._renderDataSourceDay(day, currentDate, dayData);
  	                    }
  	                  }
  	                });
  	              }
  	            }
  	          });
  	        }
  	      }
  	    }, {
  	      key: "_renderDataSourceDay",
  	      value: function _renderDataSourceDay(elt, currentDate, events) {
  	        var parent = elt.parentElement;

  	        switch (this.options.style) {
  	          case 'border':
  	            var weight = 0;

  	            if (events.length == 1) {
  	              weight = 4;
  	            } else if (events.length <= 3) {
  	              weight = 2;
  	            } else {
  	              parent.style.boxShadow = 'inset 0 -4px 0 0 black';
  	            }

  	            if (weight > 0) {
  	              var boxShadow = '';

  	              for (var i = 0; i < events.length; i++) {
  	                if (boxShadow != '') {
  	                  boxShadow += ",";
  	                }

  	                boxShadow += "inset 0 -".concat((i + 1) * weight, "px 0 0 ").concat(events[i].color);
  	              }

  	              parent.style.boxShadow = boxShadow;
  	            }

  	            break;

  	          case 'background':
  	            parent.style.backgroundColor = events[events.length - 1].color;
  	            var currentTime = currentDate.getTime();

  	            if (events[events.length - 1].startDate.getTime() == currentTime) {
  	              parent.classList.add('day-start');

  	              if (events[events.length - 1].startHalfDay || this.options.alwaysHalfDay) {
  	                parent.classList.add('day-half'); // Find color for other half

  	                var otherColor = 'transparent';

  	                for (var i = events.length - 2; i >= 0; i--) {
  	                  if (events[i].startDate.getTime() != currentTime || !events[i].startHalfDay && !this.options.alwaysHalfDay) {
  	                    otherColor = events[i].color;
  	                    break;
  	                  }
  	                }

  	                parent.style.background = "linear-gradient(-45deg, ".concat(events[events.length - 1].color, ", ").concat(events[events.length - 1].color, " 49%, ").concat(otherColor, " 51%, ").concat(otherColor, ")");
  	              } else if (this.options.roundRangeLimits) {
  	                parent.classList.add('round-left');
  	              }
  	            } else if (events[events.length - 1].endDate.getTime() == currentTime) {
  	              parent.classList.add('day-end');

  	              if (events[events.length - 1].endHalfDay || this.options.alwaysHalfDay) {
  	                parent.classList.add('day-half'); // Find color for other half

  	                var otherColor = 'transparent';

  	                for (var i = events.length - 2; i >= 0; i--) {
  	                  if (events[i].endDate.getTime() != currentTime || !events[i].endHalfDay && !this.options.alwaysHalfDay) {
  	                    otherColor = events[i].color;
  	                    break;
  	                  }
  	                }

  	                parent.style.background = "linear-gradient(135deg, ".concat(events[events.length - 1].color, ", ").concat(events[events.length - 1].color, " 49%, ").concat(otherColor, " 51%, ").concat(otherColor, ")");
  	              } else if (this.options.roundRangeLimits) {
  	                parent.classList.add('round-right');
  	              }
  	            }

  	            break;

  	          case 'custom':
  	            if (this.options.customDataSourceRenderer) {
  	              this.options.customDataSourceRenderer.call(this, elt, currentDate, events);
  	            }

  	            break;
  	        }
  	      }
  	    }, {
  	      key: "_applyEvents",
  	      value: function _applyEvents() {
  	        var _this2 = this;

  	        if (this.options.displayHeader) {
  	          /* Header buttons */
  	          this.element.querySelectorAll('.year-neighbor, .year-neighbor2').forEach(function (element) {
  	            element.addEventListener('click', function (e) {
  	              if (!e.currentTarget.classList.contains('disabled')) {
  	                _this2.setYear(parseInt(e.currentTarget.textContent));
  	              }
  	            });
  	          });
  	          this.element.querySelector('.calendar-header .prev').addEventListener('click', function (e) {
  	            if (!e.currentTarget.classList.contains('disabled')) {
  	              var months = _this2.element.querySelector('.months-container');

  	              months.style.transition = 'margin-left 0.1s';
  	              months.style.marginLeft = '100%';
  	              setTimeout(function () {
  	                months.style.visibility = 'hidden';
  	                months.style.transition = '';
  	                months.style.marginLeft = '0';
  	                setTimeout(function () {
  	                  _this2.setStartDate(new Date(_this2._startDate.getFullYear(), _this2._startDate.getMonth() - _this2.options.numberMonthsDisplayed, 1));
  	                }, 50);
  	              }, 100);
  	            }
  	          });
  	          this.element.querySelector('.calendar-header .next').addEventListener('click', function (e) {
  	            if (!e.currentTarget.classList.contains('disabled')) {
  	              var months = _this2.element.querySelector('.months-container');

  	              months.style.transition = 'margin-left 0.1s';
  	              months.style.marginLeft = '-100%';
  	              setTimeout(function () {
  	                months.style.visibility = 'hidden';
  	                months.style.transition = '';
  	                months.style.marginLeft = '0';
  	                setTimeout(function () {
  	                  _this2.setStartDate(new Date(_this2._startDate.getFullYear(), _this2._startDate.getMonth() + _this2.options.numberMonthsDisplayed, 1));
  	                }, 50);
  	              }, 100);
  	            }
  	          });
  	        }

  	        var cells = this.element.querySelectorAll('.day:not(.old):not(.new):not(.disabled)');
  	        cells.forEach(function (cell) {
  	          /* Click on date */
  	          cell.addEventListener('click', function (e) {
  	            e.stopPropagation();

  	            var date = _this2._getDate(e.currentTarget);

  	            _this2._triggerEvent('clickDay', {
  	              element: e.currentTarget,
  	              date: date,
  	              events: _this2.getEvents(date)
  	            });
  	          });
  	          /* Click right on date */

  	          cell.addEventListener('contextmenu', function (e) {
  	            if (_this2.options.enableContextMenu) {
  	              e.preventDefault();

  	              if (_this2.options.contextMenuItems.length > 0) {
  	                _this2._openContextMenu(e.currentTarget);
  	              }
  	            }

  	            var date = _this2._getDate(e.currentTarget);

  	            _this2._triggerEvent('dayContextMenu', {
  	              element: e.currentTarget,
  	              date: date,
  	              events: _this2.getEvents(date)
  	            });
  	          });
  	          /* Range selection */

  	          if (_this2.options.enableRangeSelection) {
  	            cell.addEventListener('mousedown', function (e) {
  	              if (e.which == 1) {
  	                var currentDate = _this2._getDate(e.currentTarget);

  	                if (_this2.options.allowOverlap || _this2.isThereFreeSlot(currentDate)) {
  	                  _this2._mouseDown = true;
  	                  _this2._rangeStart = _this2._rangeEnd = currentDate;

  	                  _this2._refreshRange();
  	                }
  	              }
  	            });
  	            cell.addEventListener('mouseenter', function (e) {
  	              if (_this2._mouseDown) {
  	                var currentDate = _this2._getDate(e.currentTarget);

  	                if (!_this2.options.allowOverlap) {
  	                  var newDate = new Date(_this2._rangeStart.getTime());

  	                  if (newDate < currentDate) {
  	                    var nextDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);

  	                    while (newDate < currentDate) {
  	                      if (!_this2.isThereFreeSlot(nextDate, false)) {
  	                        break;
  	                      }

  	                      newDate.setDate(newDate.getDate() + 1);
  	                      nextDate.setDate(nextDate.getDate() + 1);
  	                    }
  	                  } else {
  	                    var nextDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 1);

  	                    while (newDate > currentDate) {
  	                      if (!_this2.isThereFreeSlot(nextDate, true)) {
  	                        break;
  	                      }

  	                      newDate.setDate(newDate.getDate() - 1);
  	                      nextDate.setDate(nextDate.getDate() - 1);
  	                    }
  	                  }

  	                  currentDate = newDate;
  	                }

  	                var oldValue = _this2._rangeEnd;
  	                _this2._rangeEnd = currentDate;

  	                if (oldValue.getTime() != _this2._rangeEnd.getTime()) {
  	                  _this2._refreshRange();
  	                }
  	              }
  	            });
  	          }
  	          /* Hover date */


  	          cell.addEventListener('mouseenter', function (e) {
  	            if (!_this2._mouseDown) {
  	              var date = _this2._getDate(e.currentTarget);

  	              _this2._triggerEvent('mouseOnDay', {
  	                element: e.currentTarget,
  	                date: date,
  	                events: _this2.getEvents(date)
  	              });
  	            }
  	          });
  	          cell.addEventListener('mouseleave', function (e) {
  	            var date = _this2._getDate(e.currentTarget);

  	            _this2._triggerEvent('mouseOutDay', {
  	              element: e.currentTarget,
  	              date: date,
  	              events: _this2.getEvents(date)
  	            });
  	          });
  	        });

  	        if (this.options.enableRangeSelection) {
  	          // Release range selection
  	          window.addEventListener('mouseup', function (e) {
  	            if (_this2._mouseDown) {
  	              _this2._mouseDown = false;

  	              _this2._refreshRange();

  	              var minDate = _this2._rangeStart < _this2._rangeEnd ? _this2._rangeStart : _this2._rangeEnd;
  	              var maxDate = _this2._rangeEnd > _this2._rangeStart ? _this2._rangeEnd : _this2._rangeStart;

  	              _this2._triggerEvent('selectRange', {
  	                startDate: minDate,
  	                endDate: maxDate,
  	                events: _this2.getEventsOnRange(minDate, new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate() + 1))
  	              });
  	            }
  	          });
  	        }
  	        /* Responsive management */


  	        if (this._responsiveInterval) {
  	          clearInterval(this._responsiveInterval);
  	          this._responsiveInterval = null;
  	        }

  	        this._responsiveInterval = setInterval(function () {
  	          if (_this2.element.querySelector('.month') == null) {
  	            return;
  	          }

  	          var calendarSize = _this2.element.offsetWidth;
  	          var monthSize = _this2.element.querySelector('.month').offsetWidth + 10;
  	          _this2._nbCols = null;

  	          if (monthSize * 6 < calendarSize && _this2.options.numberMonthsDisplayed >= 6) {
  	            _this2._nbCols = 2;
  	          } else if (monthSize * 4 < calendarSize && _this2.options.numberMonthsDisplayed >= 4) {
  	            _this2._nbCols = 3;
  	          } else if (monthSize * 3 < calendarSize && _this2.options.numberMonthsDisplayed >= 3) {
  	            _this2._nbCols = 4;
  	          } else if (monthSize * 2 < calendarSize && _this2.options.numberMonthsDisplayed >= 2) {
  	            _this2._nbCols = 6;
  	          } else {
  	            _this2._nbCols = 12;
  	          }

  	          _this2.element.querySelectorAll('.month-container').forEach(function (month) {
  	            if (!month.classList.contains("month-".concat(_this2._nbCols))) {
  	              ['month-2', 'month-3', 'month-4', 'month-6', 'month-12'].forEach(function (className) {
  	                month.classList.remove(className);
  	              });
  	              month.classList.add("month-".concat(_this2._nbCols));
  	            }
  	          });
  	        }, 300);
  	      }
  	    }, {
  	      key: "_refreshRange",
  	      value: function _refreshRange() {
  	        var _this3 = this;

  	        this.element.querySelectorAll('td.day.range').forEach(function (day) {
  	          return day.classList.remove('range');
  	        });
  	        this.element.querySelectorAll('td.day.range-start').forEach(function (day) {
  	          return day.classList.remove('range-start');
  	        });
  	        this.element.querySelectorAll('td.day.range-end').forEach(function (day) {
  	          return day.classList.remove('range-end');
  	        });

  	        if (this._mouseDown) {
  	          var minDate = this._rangeStart < this._rangeEnd ? this._rangeStart : this._rangeEnd;
  	          var maxDate = this._rangeEnd > this._rangeStart ? this._rangeEnd : this._rangeStart;
  	          this.element.querySelectorAll('.month-container').forEach(function (month) {
  	            var monthId = parseInt(month.dataset.monthId);
  	            var monthStartDate = new Date(_this3._startDate.getFullYear(), _this3._startDate.getMonth() + monthId, 1);
  	            var monthEndDate = new Date(_this3._startDate.getFullYear(), _this3._startDate.getMonth() + monthId + 1, 1);

  	            if (minDate.getTime() < monthEndDate.getTime() && maxDate.getTime() >= monthStartDate.getTime()) {
  	              month.querySelectorAll('td.day:not(.old):not(.new)').forEach(function (day) {
  	                var date = _this3._getDate(day);

  	                if (date >= minDate && date <= maxDate) {
  	                  day.classList.add('range');

  	                  if (date.getTime() == minDate.getTime()) {
  	                    day.classList.add('range-start');
  	                  }

  	                  if (date.getTime() == maxDate.getTime()) {
  	                    day.classList.add('range-end');
  	                  }
  	                }
  	              });
  	            }
  	          });
  	        }
  	      }
  	    }, {
  	      key: "_getElementPosition",
  	      value: function _getElementPosition(element) {
  	        var top = 0,
  	            left = 0;

  	        do {
  	          top += element.offsetTop || 0;
  	          left += element.offsetLeft || 0;
  	          element = element.offsetParent;
  	        } while (element);

  	        return {
  	          top: top,
  	          left: left
  	        };
  	      }
  	    }, {
  	      key: "_openContextMenu",
  	      value: function _openContextMenu(elt) {
  	        var _this4 = this;

  	        var contextMenu = document.querySelector('.calendar-context-menu');

  	        if (contextMenu !== null) {
  	          contextMenu.style.display = 'none'; // Clear the context menu (faster method)

  	          while (contextMenu.firstChild) {
  	            contextMenu.removeChild(contextMenu.firstChild);
  	          }
  	        } else {
  	          contextMenu = document.createElement('div');
  	          contextMenu.classList.add('calendar-context-menu');
  	          document.body.appendChild(contextMenu);
  	        }

  	        var date = this._getDate(elt);

  	        var events = this.getEvents(date);

  	        for (var i = 0; i < events.length; i++) {
  	          var eventItem = document.createElement('div');
  	          eventItem.classList.add('item');
  	          eventItem.style.paddingLeft = '4px';
  	          eventItem.style.boxShadow = "inset 4px 0 0 0 ".concat(events[i].color);
  	          var eventItemContent = document.createElement('div');
  	          eventItemContent.classList.add('content');
  	          var text = document.createElement('span');
  	          text.classList.add('text');
  	          text.textContent = events[i].name;
  	          eventItemContent.appendChild(text);
  	          var icon = document.createElement('span');
  	          icon.classList.add('arrow');
  	          icon.innerHTML = "&rsaquo;";
  	          eventItemContent.appendChild(icon);
  	          eventItem.appendChild(eventItemContent);

  	          this._renderContextMenuItems(eventItem, this.options.contextMenuItems, events[i]);

  	          contextMenu.appendChild(eventItem);
  	        }

  	        if (contextMenu.children.length > 0) {
  	          var position = this._getElementPosition(elt);

  	          contextMenu.style.left = position.left + 25 + 'px';
  	          contextMenu.style.right = '';
  	          contextMenu.style.top = position.top + 25 + 'px';
  	          contextMenu.style.display = 'block';

  	          if (contextMenu.getBoundingClientRect().right > document.body.offsetWidth) {
  	            contextMenu.style.left = '';
  	            contextMenu.style.right = '0';
  	          } // Launch the position check once the whole context menu tree will be rendered


  	          setTimeout(function () {
  	            return _this4._checkContextMenuItemsPosition();
  	          }, 0);

  	          var closeContextMenu = function closeContextMenu(event) {
  	            if (event.type !== 'click' || !contextMenu.contains(event.target)) {
  	              contextMenu.style.display = 'none';
  	              window.removeEventListener('click', closeContextMenu);
  	              window.removeEventListener('resize', closeContextMenu);
  	              window.removeEventListener('scroll', closeContextMenu);
  	            }
  	          };

  	          window.addEventListener('click', closeContextMenu);
  	          window.addEventListener('resize', closeContextMenu);
  	          window.addEventListener('scroll', closeContextMenu);
  	        }
  	      }
  	    }, {
  	      key: "_renderContextMenuItems",
  	      value: function _renderContextMenuItems(parent, items, evt) {
  	        var subMenu = document.createElement('div');
  	        subMenu.classList.add('submenu');

  	        for (var i = 0; i < items.length; i++) {
  	          if (items[i].visible === false || typeof items[i].visible === "function" && !items[i].visible(evt)) {
  	            continue;
  	          }

  	          var menuItem = document.createElement('div');
  	          menuItem.classList.add('item');
  	          var menuItemContent = document.createElement('div');
  	          menuItemContent.classList.add('content');
  	          var text = document.createElement('span');
  	          text.classList.add('text');
  	          text.textContent = items[i].text;
  	          menuItemContent.appendChild(text);

  	          if (items[i].click) {
  	            (function (index) {
  	              menuItemContent.addEventListener('click', function () {
  	                document.querySelector('.calendar-context-menu').style.display = 'none';
  	                items[index].click(evt);
  	              });
  	            })(i);
  	          }

  	          menuItem.appendChild(menuItemContent);

  	          if (items[i].items && items[i].items.length > 0) {
  	            var icon = document.createElement('span');
  	            icon.classList.add('arrow');
  	            icon.innerHTML = "&rsaquo;";
  	            menuItemContent.appendChild(icon);

  	            this._renderContextMenuItems(menuItem, items[i].items, evt);
  	          }

  	          subMenu.appendChild(menuItem);
  	        }

  	        if (subMenu.children.length > 0) {
  	          parent.appendChild(subMenu);
  	        }
  	      }
  	    }, {
  	      key: "_checkContextMenuItemsPosition",
  	      value: function _checkContextMenuItemsPosition() {
  	        var menus = document.querySelectorAll('.calendar-context-menu .submenu');
  	        menus.forEach(function (menu) {
  	          var htmlMenu = menu;
  	          htmlMenu.style.display = 'block';
  	          htmlMenu.style.visibility = 'hidden';
  	        });
  	        menus.forEach(function (menu) {
  	          var htmlMenu = menu;

  	          if (htmlMenu.getBoundingClientRect().right > document.body.offsetWidth) {
  	            htmlMenu.classList.add('open-left');
  	          } else {
  	            htmlMenu.classList.remove('open-left');
  	          }
  	        });
  	        menus.forEach(function (menu) {
  	          var htmlMenu = menu;
  	          htmlMenu.style.display = '';
  	          htmlMenu.style.visibility = '';
  	        });
  	      }
  	    }, {
  	      key: "_getDate",
  	      value: function _getDate(elt) {
  	        var day = elt.querySelector('.day-content').textContent;
  	        var monthId = parseInt(elt.closest('.month-container').dataset.monthId);
  	        return new Date(this._startDate.getFullYear(), this._startDate.getMonth() + monthId, day);
  	      }
  	    }, {
  	      key: "_triggerEvent",
  	      value: function _triggerEvent(eventName, parameters) {
  	        var event = null;

  	        if (typeof Event === "function") {
  	          event = new Event(eventName);
  	        } else {
  	          event = document.createEvent('Event');
  	          event.initEvent(eventName, false, false);
  	        }

  	        event.calendar = this;

  	        for (var i in parameters) {
  	          event[i] = parameters[i];
  	        }

  	        this.element.dispatchEvent(event);
  	        return event;
  	      }
  	    }, {
  	      key: "_isDisabled",
  	      value: function _isDisabled(date) {
  	        if (this.options.minDate != null && date < this.options.minDate || this.options.maxDate != null && date > this.options.maxDate) {
  	          return true;
  	        }

  	        if (this.options.disabledWeekDays.length > 0) {
  	          for (var d = 0; d < this.options.disabledWeekDays.length; d++) {
  	            if (date.getDay() == this.options.disabledWeekDays[d]) {
  	              return true;
  	            }
  	          }
  	        }

  	        if (this.options.disabledDays.length > 0) {
  	          for (var d = 0; d < this.options.disabledDays.length; d++) {
  	            if (date.getTime() == this.options.disabledDays[d].getTime()) {
  	              return true;
  	            }
  	          }
  	        }

  	        return false;
  	      }
  	    }, {
  	      key: "_isHidden",
  	      value: function _isHidden(day) {
  	        if (this.options.hiddenWeekDays.length > 0) {
  	          for (var d = 0; d < this.options.hiddenWeekDays.length; d++) {
  	            if (day == this.options.hiddenWeekDays[d]) {
  	              return true;
  	            }
  	          }
  	        }

  	        return false;
  	      }
  	    }, {
  	      key: "_isFullYearMode",
  	      value: function _isFullYearMode() {
  	        return this._startDate.getMonth() == 0 && this.options.numberMonthsDisplayed == 12;
  	      }
  	      /**
  	          * Gets the week number for a specified date.
  	          *
  	          * @param date The specified date.
  	          */

  	    }, {
  	      key: "getWeekNumber",
  	      value: function getWeekNumber(date) {
  	        // Algorithm from https://weeknumber.net/how-to/javascript
  	        var workingDate = new Date(date.getTime());
  	        workingDate.setHours(0, 0, 0, 0); // Thursday in current week decides the year.

  	        workingDate.setDate(workingDate.getDate() + 3 - (workingDate.getDay() + 6) % 7); // January 4 is always in week 1.

  	        var week1 = new Date(workingDate.getFullYear(), 0, 4); // Adjust to Thursday in week 1 and count number of weeks from date to week1.

  	        return 1 + Math.round(((workingDate.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  	      }
  	      /**
  	          * Gets the data source elements for a specified day.
  	          *
  	          * @param date The specified day.
  	          */

  	    }, {
  	      key: "getEvents",
  	      value: function getEvents(date) {
  	        return this.getEventsOnRange(date, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1));
  	      }
  	      /**
  	          * Gets the data source elements for a specified range of days.
  	          *
  	          * @param startDate The beginning of the day range (inclusive).
  	       * @param endDate The end of the day range (non inclusive).
  	          */

  	    }, {
  	      key: "getEventsOnRange",
  	      value: function getEventsOnRange(startDate, endDate) {
  	        var events = [];

  	        if (this._dataSource && startDate && endDate) {
  	          for (var i = 0; i < this._dataSource.length; i++) {
  	            if (this._dataSource[i].startDate < endDate && this._dataSource[i].endDate >= startDate) {
  	              events.push(this._dataSource[i]);
  	            }
  	          }
  	        }

  	        return events;
  	      }
  	      /**
  	          * Check if there is no event on the first part, last part or on the whole specified day.
  	          *
  	          * @param date The specified day.
  	          * @param after Whether to check for a free slot on the first part (if `false`) or the last part (if `true`) of the day. If `null`, this will check on the whole day.
  	       * 
  	       * Usefull only if using the `alwaysHalfDay` option of the calendar, or the `startHalfDay` or `endHalfDay` option of the datasource.
  	          */

  	    }, {
  	      key: "isThereFreeSlot",
  	      value: function isThereFreeSlot(date) {
  	        var _this5 = this;

  	        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  	        var events = this.getEvents(date);

  	        if (after === true) {
  	          return !events.some(function (evt) {
  	            return !_this5.options.alwaysHalfDay && !evt.endHalfDay || evt.endDate > date;
  	          });
  	        } else if (after === false) {
  	          return !events.some(function (evt) {
  	            return !_this5.options.alwaysHalfDay && !evt.startHalfDay || evt.startDate < date;
  	          });
  	        } else {
  	          return this.isThereFreeSlot(date, false) || this.isThereFreeSlot(date, true);
  	        }
  	      }
  	      /**
  	          * Gets the period displayed on the calendar.
  	          */

  	    }, {
  	      key: "getCurrentPeriod",
  	      value: function getCurrentPeriod() {
  	        var startDate = new Date(this._startDate.getTime());
  	        var endDate = new Date(this._startDate.getTime());
  	        endDate.setMonth(endDate.getMonth() + this.options.numberMonthsDisplayed);
  	        endDate.setTime(endDate.getTime() - 1);
  	        return {
  	          startDate: startDate,
  	          endDate: endDate
  	        };
  	      }
  	      /**
  	          * Gets the year displayed on the calendar.
  	       * If the calendar is not used in a full year configuration, this will return the year of the first date displayed in the calendar.
  	          */

  	    }, {
  	      key: "getYear",
  	      value: function getYear() {
  	        return this._isFullYearMode() ? this._startDate.getFullYear() : null;
  	      }
  	      /**
  	          * Sets the year displayed on the calendar.
  	       * If the calendar is not used in a full year configuration, this will set the start date to January 1st of the given year.
  	          *
  	          * @param year The year to displayed on the calendar.
  	          */

  	    }, {
  	      key: "setYear",
  	      value: function setYear(year) {
  	        var parsedYear = parseInt(year);

  	        if (!isNaN(parsedYear)) {
  	          this.setStartDate(new Date(parsedYear, 0, 1));
  	        }
  	      }
  	      /**
  	          * Gets the first date displayed on the calendar.
  	          */

  	    }, {
  	      key: "getStartDate",
  	      value: function getStartDate() {
  	        return this._startDate;
  	      }
  	      /**
  	          * Sets the first date that should be displayed on the calendar.
  	          *
  	          * @param startDate The first date that should be displayed on the calendar.
  	          */

  	    }, {
  	      key: "setStartDate",
  	      value: function setStartDate(startDate) {
  	        var _this6 = this;

  	        if (startDate instanceof Date) {
  	          this.options.startDate = startDate;
  	          this._startDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1); // Clear the calendar (faster method)

  	          while (this.element.firstChild) {
  	            this.element.removeChild(this.element.firstChild);
  	          }

  	          if (this.options.displayHeader) {
  	            this._renderHeader();
  	          }

  	          var newPeriod = this.getCurrentPeriod();

  	          var periodEventResult = this._triggerEvent('periodChanged', {
  	            startDate: newPeriod.startDate,
  	            endDate: newPeriod.endDate,
  	            preventRendering: false
  	          });

  	          var yearEventResult = null;

  	          if (this._isFullYearMode()) {
  	            yearEventResult = this._triggerEvent('yearChanged', {
  	              currentYear: this._startDate.getFullYear(),
  	              preventRendering: false
  	            });
  	          }

  	          if (typeof this.options.dataSource === "function") {
  	            this.render(true);

  	            this._fetchDataSource(function (dataSource) {
  	              _this6._dataSource = dataSource;

  	              _this6._initializeDatasourceColors();

  	              _this6.render(false);
  	            });
  	          } else {
  	            if (!periodEventResult.preventRendering && (!yearEventResult || !yearEventResult.preventRedering)) {
  	              this.render();
  	            }
  	          }
  	        }
  	      }
  	      /**
  	          * Gets the number of months displayed by the calendar.
  	          */

  	    }, {
  	      key: "getNumberMonthsDisplayed",
  	      value: function getNumberMonthsDisplayed() {
  	        return this.options.numberMonthsDisplayed;
  	      }
  	      /**
  	          * Sets the number of months displayed that should be displayed by the calendar.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param numberMonthsDisplayed Number of months that should be displayed by the calendar.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setNumberMonthsDisplayed",
  	      value: function setNumberMonthsDisplayed(numberMonthsDisplayed) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        var parsedNumber = parseInt(numberMonthsDisplayed);

  	        if (!isNaN(parsedNumber) && parsedNumber > 0 && parsedNumber <= 12) {
  	          this.options.numberMonthsDisplayed = parsedNumber;

  	          if (!preventRendering) {
  	            this.render();
  	          }
  	        }
  	      }
  	      /**
  	          * Gets the minimum date of the calendar.
  	          */

  	    }, {
  	      key: "getMinDate",
  	      value: function getMinDate() {
  	        return this.options.minDate;
  	      }
  	      /**
  	          * Sets the minimum date of the calendar.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param minDate The minimum date to set.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setMinDate",
  	      value: function setMinDate(date) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  	        if (date instanceof Date || date === null) {
  	          this.options.minDate = date;

  	          if (!preventRendering) {
  	            this.render();
  	          }
  	        }
  	      }
  	      /**
  	          * Gets the maximum date of the calendar.
  	          */

  	    }, {
  	      key: "getMaxDate",
  	      value: function getMaxDate() {
  	        return this.options.maxDate;
  	      }
  	      /**
  	          * Sets the maximum date of the calendar. 
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param maxDate The maximum date to set.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setMaxDate",
  	      value: function setMaxDate(date) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  	        if (date instanceof Date || date === null) {
  	          this.options.maxDate = date;

  	          if (!preventRendering) {
  	            this.render();
  	          }
  	        }
  	      }
  	      /**
  	          * Gets the current style used for displaying data source.
  	          */

  	    }, {
  	      key: "getStyle",
  	      value: function getStyle() {
  	        return this.options.style;
  	      }
  	      /**
  	          * Sets the style to use for displaying data source. 
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param style The style to use for displaying data source ("background", "border" or "custom").
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setStyle",
  	      value: function setStyle(style) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.style = style == 'background' || style == 'border' || style == 'custom' ? style : 'border';

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets a value indicating whether the user can select a range which overlapping an other element present in the datasource.
  	          */

  	    }, {
  	      key: "getAllowOverlap",
  	      value: function getAllowOverlap() {
  	        return this.options.allowOverlap;
  	      }
  	      /**
  	          * Sets a value indicating whether the user can select a range which overlapping an other element present in the datasource.
  	          *
  	          * @param allowOverlap Indicates whether the user can select a range which overlapping an other element present in the datasource.
  	          */

  	    }, {
  	      key: "setAllowOverlap",
  	      value: function setAllowOverlap(allowOverlap) {
  	        this.options.allowOverlap = allowOverlap;
  	      }
  	      /**
  	          * Gets a value indicating whether the weeks number are displayed.
  	          */

  	    }, {
  	      key: "getDisplayWeekNumber",
  	      value: function getDisplayWeekNumber() {
  	        return this.options.displayWeekNumber;
  	      }
  	      /**
  	          * Sets a value indicating whether the weeks number are displayed.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param  displayWeekNumber Indicates whether the weeks number are displayed.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setDisplayWeekNumber",
  	      value: function setDisplayWeekNumber(displayWeekNumber) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.displayWeekNumber = displayWeekNumber;

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets a value indicating whether the calendar header is displayed.
  	          */

  	    }, {
  	      key: "getDisplayHeader",
  	      value: function getDisplayHeader() {
  	        return this.options.displayHeader;
  	      }
  	      /**
  	          * Sets a value indicating whether the calendar header is displayed.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param displayHeader Indicates whether the calendar header is displayed.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setDisplayHeader",
  	      value: function setDisplayHeader(displayHeader) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.displayHeader = displayHeader;

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets a value indicating whether the data source must be rendered on disabled days.
  	          */

  	    }, {
  	      key: "getDisplayDisabledDataSource",
  	      value: function getDisplayDisabledDataSource() {
  	        return this.options.displayDisabledDataSource;
  	      }
  	      /**
  	          * Sets a value indicating whether the data source must be rendered on disabled days.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param displayDisabledDataSource Indicates whether the data source must be rendered on disabled days.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setDisplayDisabledDataSource",
  	      value: function setDisplayDisabledDataSource(displayDisabledDataSource) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.displayDisabledDataSource = displayDisabledDataSource;

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets a value indicating whether the beginning and the end of each range should be displayed as half selected day.
  	          */

  	    }, {
  	      key: "getAlwaysHalfDay",
  	      value: function getAlwaysHalfDay() {
  	        return this.options.alwaysHalfDay;
  	      }
  	      /**
  	          * Sets a value indicating whether the beginning and the end of each range should be displayed as half selected day.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param alwaysHalfDay Indicates whether the beginning and the end of each range should be displayed as half selected day.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setAlwaysHalfDay",
  	      value: function setAlwaysHalfDay(alwaysHalfDay) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.alwaysHalfDay = alwaysHalfDay;

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets a value indicating whether the user can make range selection.
  	          */

  	    }, {
  	      key: "getEnableRangeSelection",
  	      value: function getEnableRangeSelection() {
  	        return this.options.enableRangeSelection;
  	      }
  	      /**
  	          * Sets a value indicating whether the user can make range selection.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param enableRangeSelection Indicates whether the user can make range selection.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setEnableRangeSelection",
  	      value: function setEnableRangeSelection(enableRangeSelection) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.enableRangeSelection = enableRangeSelection;

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets the disabled days.
  	          */

  	    }, {
  	      key: "getDisabledDays",
  	      value: function getDisabledDays() {
  	        return this.options.disabledDays;
  	      }
  	      /**
  	          * Sets the disabled days.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param disableDays The disabled days to set.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setDisabledDays",
  	      value: function setDisabledDays(disabledDays) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.disabledDays = disabledDays instanceof Array ? disabledDays : [];

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets the disabled days of the week.
  	          */

  	    }, {
  	      key: "getDisabledWeekDays",
  	      value: function getDisabledWeekDays() {
  	        return this.options.disabledWeekDays;
  	      }
  	      /**
  	          * Sets the disabled days of the week.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param disabledWeekDays The disabled days of the week to set.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setDisabledWeekDays",
  	      value: function setDisabledWeekDays(disabledWeekDays) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.disabledWeekDays = disabledWeekDays instanceof Array ? disabledWeekDays : [];

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets the hidden days of the week.
  	          */

  	    }, {
  	      key: "getHiddenWeekDays",
  	      value: function getHiddenWeekDays() {
  	        return this.options.hiddenWeekDays;
  	      }
  	      /**
  	          * Sets the hidden days of the week.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param hiddenWeekDays The hidden days of the week to set.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setHiddenWeekDays",
  	      value: function setHiddenWeekDays(hiddenWeekDays) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.hiddenWeekDays = hiddenWeekDays instanceof Array ? hiddenWeekDays : [];

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets a value indicating whether the beginning and the end of each range should be displayed as rounded cells.
  	          */

  	    }, {
  	      key: "getRoundRangeLimits",
  	      value: function getRoundRangeLimits() {
  	        return this.options.roundRangeLimits;
  	      }
  	      /**
  	          * Sets a value indicating whether the beginning and the end of each range should be displayed as rounded cells.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param roundRangeLimits Indicates whether the beginning and the end of each range should be displayed as rounded cells. 
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setRoundRangeLimits",
  	      value: function setRoundRangeLimits(roundRangeLimits) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.roundRangeLimits = roundRangeLimits;

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets a value indicating whether the default context menu must be displayed when right clicking on a day.
  	          */

  	    }, {
  	      key: "getEnableContextMenu",
  	      value: function getEnableContextMenu() {
  	        return this.options.enableContextMenu;
  	      }
  	      /**
  	          * Sets a value indicating whether the default context menu must be displayed when right clicking on a day. 
  	          * 
  	       * This method causes a refresh of the calendar.
  	          * 
  	          * @param enableContextMenu Indicates whether the default context menu must be displayed when right clicking on a day.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setEnableContextMenu",
  	      value: function setEnableContextMenu(enableContextMenu) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.enableContextMenu = enableContextMenu;

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets the context menu items.
  	          */

  	    }, {
  	      key: "getContextMenuItems",
  	      value: function getContextMenuItems() {
  	        return this.options.contextMenuItems;
  	      }
  	      /**
  	          * Sets new context menu items.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param contextMenuItems The new context menu items.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setContextMenuItems",
  	      value: function setContextMenuItems(contextMenuItems) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.contextMenuItems = contextMenuItems instanceof Array ? contextMenuItems : [];

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets the custom day renderer.
  	          */

  	    }, {
  	      key: "getCustomDayRenderer",
  	      value: function getCustomDayRenderer() {
  	        return this.options.customDayRenderer;
  	      }
  	      /**
  	          * Sets the custom day renderer.
  	       * 
  	       * This method causes a refresh of the calendar.
  	       *
  	       * @param handler The function used to render the days. This function is called during render for each day.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setCustomDayRenderer",
  	      value: function setCustomDayRenderer(customDayRenderer) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.customDayRenderer = typeof customDayRenderer === "function" ? customDayRenderer : null;

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets the custom data source renderer.
  	          */

  	    }, {
  	      key: "getCustomDataSourceRenderer",
  	      value: function getCustomDataSourceRenderer() {
  	        return this.options.customDataSourceRenderer;
  	      }
  	      /**
  	          * Sets the custom data source renderer. Works only with the style set to "custom".
  	       * 
  	       * This method causes a refresh of the calendar.
  	       *
  	       * @param handler The function used to render the data source. This function is called during render for each day containing at least one event.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setCustomDataSourceRenderer",
  	      value: function setCustomDataSourceRenderer(customDataSourceRenderer) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.customDataSourceRenderer = typeof customDataSourceRenderer === "function" ? customDataSourceRenderer : null;

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets the language used for calendar rendering.
  	          */

  	    }, {
  	      key: "getLanguage",
  	      value: function getLanguage() {
  	        return this.options.language;
  	      }
  	      /**
  	          * Sets the language used for calendar rendering.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param language The language to use for calendar redering.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setLanguage",
  	      value: function setLanguage(language) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  	        if (language != null && Calendar.locales[language] != null) {
  	          this.options.language = language;

  	          if (!preventRendering) {
  	            this.render();
  	          }
  	        }
  	      }
  	      /**
  	          * Gets the current data source.
  	          */

  	    }, {
  	      key: "getDataSource",
  	      value: function getDataSource() {
  	        return this.options.dataSource;
  	      }
  	      /**
  	          * Sets a new data source.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param dataSource The new data source.
  	       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setDataSource",
  	      value: function setDataSource(dataSource) {
  	        var _this7 = this;

  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.dataSource = dataSource instanceof Array || typeof dataSource === "function" ? dataSource : [];

  	        if (typeof this.options.dataSource === "function") {
  	          this.render(true);

  	          this._fetchDataSource(function (dataSource) {
  	            _this7._dataSource = dataSource;

  	            _this7._initializeDatasourceColors();

  	            _this7.render(false);
  	          });
  	        } else {
  	          this._dataSource = this.options.dataSource;

  	          this._initializeDatasourceColors();

  	          if (!preventRendering) {
  	            this.render();
  	          }
  	        }
  	      }
  	      /**
  	          * Gets the starting day of the week.
  	          */

  	    }, {
  	      key: "getWeekStart",
  	      value: function getWeekStart() {
  	        return this.options.weekStart !== null ? this.options.weekStart : Calendar.locales[this.options.language].weekStart;
  	      }
  	      /**
  	          * Sets the starting day of the week.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          *
  	          * @param weekStart The starting day of the week. This option overrides the parameter define in the language file.
  	          * @param preventRedering Indicates whether the rendering should be prevented after the property update.
  	          */

  	    }, {
  	      key: "setWeekStart",
  	      value: function setWeekStart(weekStart) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  	        this.options.weekStart = !isNaN(parseInt(weekStart)) ? parseInt(weekStart) : null;

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	      /**
  	          * Gets the loading template.
  	          */

  	    }, {
  	      key: "getLoadingTemplate",
  	      value: function getLoadingTemplate() {
  	        return this.options.loadingTemplate;
  	      }
  	      /**
  	          * Sets the loading template.
  	          *
  	          * @param loadingTemplate The loading template.
  	          */

  	    }, {
  	      key: "setLoadingTemplate",
  	      value: function setLoadingTemplate(loadingTemplate) {
  	        this.options.loadingTemplate = typeof loadingTemplate === "string" || loadingTemplate instanceof HTMLElement ? loadingTemplate : null;
  	      }
  	      /**
  	       * 
  	          * Add a new element to the data source.
  	       * 
  	       * This method causes a refresh of the calendar.
  	          * 
  	          * @param element The element to add.
  	       * @param preventRendering Indicates whether the calendar shouldn't be refreshed once the event added.
  	          */

  	    }, {
  	      key: "addEvent",
  	      value: function addEvent(evt) {
  	        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  	        this._dataSource.push(evt);

  	        if (!preventRendering) {
  	          this.render();
  	        }
  	      }
  	    }]);

  	    return Calendar;
  	  }();

  	  _exports["default"] = Calendar;

  	  _defineProperty(Calendar, "locales", {
  	    en: {
  	      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  	      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  	      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  	      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  	      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  	      weekShort: 'W',
  	      weekStart: 0
  	    }
  	  });

  	  _defineProperty(Calendar, "colors", ['#2C8FC9', '#9CB703', '#F5BB00', '#FF4A32', '#B56CE2', '#45A597']);

  	  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") {
  	    window.Calendar = Calendar;
  	    document.addEventListener("DOMContentLoaded", function () {
  	      document.querySelectorAll('[data-provide="calendar"]').forEach(function (element) {
  	        return new Calendar(element);
  	      });
  	    });
  	  }
  	}); 
  } (jsYearCalendar));

  var JsCalendar = /*@__PURE__*/getDefaultExportFromCjs(jsYearCalendar);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "/* =========================================================\n * JS year calendar v0.1.0\n * Repo: https://github.com/year-calendar/js-year-calendar\n * =========================================================\n * Created by Paul David-Sivelle\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ========================================================= */\n/* Main */\n.calendar {\n  padding: 4px;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  direction: ltr;\n  overflow-x: hidden;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Header */\n  /* Months */\n  /* Loading */\n}\n.calendar:after {\n  /* Apply the right height on the calendar div, even if the months elements are floating  */\n  clear: both;\n  content: \"\";\n  display: block;\n}\n.calendar .calendar-rtl {\n  direction: rtl;\n}\n.calendar .calendar-rtl .calendar-rtl table tr td span {\n  float: right;\n}\n.calendar table {\n  margin: auto;\n  border-spacing: 0;\n}\n.calendar table td,\n.calendar table th {\n  text-align: center;\n  width: 20px;\n  height: 20px;\n  border: none;\n  padding: 4px 5px;\n  font-size: 12px;\n}\n.calendar .calendar-header {\n  width: 100%;\n  margin-bottom: 20px;\n  border: 1px solid #ddd;\n}\n.calendar .calendar-header table {\n  width: 100%;\n}\n.calendar .calendar-header table th {\n  font-size: 22px;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.calendar .calendar-header table th:hover {\n  background: #eeeeee;\n}\n.calendar .calendar-header table th.disabled,\n.calendar .calendar-header table th.disabled:hover {\n  background: none;\n  cursor: default;\n  color: white;\n}\n.calendar .calendar-header table th.prev,\n.calendar .calendar-header table th.next {\n  width: 20px;\n}\n.calendar .calendar-header .year-title {\n  font-weight: bold;\n  text-align: center;\n  height: 20px;\n  width: auto;\n}\n.calendar .calendar-header .year-neighbor {\n  opacity: 0.4;\n}\n@media (max-width: 991px) {\n  .calendar .calendar-header .year-neighbor {\n    display: none;\n  }\n}\n.calendar .calendar-header .year-neighbor2 {\n  opacity: 0.2;\n}\n@media (max-width: 767px) {\n  .calendar .calendar-header .year-neighbor2 {\n    display: none;\n  }\n}\n.calendar .months-container {\n  width: 100%;\n  display: none;\n  flex-wrap: wrap;\n}\n.calendar .months-container .month-container {\n  float: left;\n  text-align: center;\n  padding: 0;\n}\n.calendar .months-container .month-container.month-2 {\n  width: 16.66666667%;\n}\n.calendar .months-container .month-container.month-3 {\n  width: 25%;\n}\n.calendar .months-container .month-container.month-4 {\n  width: 33.33333333%;\n}\n.calendar .months-container .month-container.month-6 {\n  width: 50%;\n}\n.calendar .months-container .month-container.month-12 {\n  width: 100%;\n}\n.calendar table.month th.month-title {\n  font-size: 16px;\n  padding-bottom: 5px;\n}\n.calendar table.month th.day-header {\n  font-size: 14px;\n}\n.calendar table.month tr td,\n.calendar table.month tr th {\n  padding: 0;\n}\n.calendar table.month tr td.hidden,\n.calendar table.month tr th.hidden {\n  display: none;\n}\n.calendar table.month td.week-number {\n  cursor: default;\n  font-weight: bold;\n  border-right: 1px solid #eee;\n  padding: 5px;\n}\n.calendar table.month td.day.round-left {\n  -webkit-border-radius: 8px 0 0 8px;\n  -moz-border-radius: 8px 0 0 8px;\n  border-radius: 8px 0 0 8px;\n}\n.calendar table.month td.day.round-right {\n  webkit-border-radius: 0 8px 8px 0 ;\n  -moz-border-radius: 0 8px 8px 0;\n  border-radius: 0 8px 8px 0;\n}\n.calendar table.month td.day .day-content {\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  padding: 5px 6px;\n}\n.calendar table.month td.old,\n.calendar table.month td.new,\n.calendar table.month td.old:hover,\n.calendar table.month td.new:hover {\n  background: none;\n  cursor: default;\n}\n.calendar table.month td.disabled,\n.calendar table.month td.disabled:hover {\n  color: #dddddd;\n}\n.calendar table.month td.disabled .day-content:hover,\n.calendar table.month td.disabled:hover .day-content:hover {\n  background: none;\n  cursor: default;\n}\n.calendar table.month td.range .day-content {\n  background: rgba(0, 0, 0, 0.2);\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n}\n.calendar table.month td.range.range-start .day-content {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.calendar table.month td.range.range-end .day-content {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.calendar .calendar-loading-container {\n  position: relative;\n  text-align: center;\n  min-height: 200px;\n}\n.calendar .calendar-loading-container .calendar-loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.calendar .calendar-spinner {\n  margin: 20px auto;\n  width: 80px;\n  text-align: center;\n}\n.calendar .calendar-spinner > div {\n  width: 16px;\n  height: 16px;\n  margin: 5px;\n  background-color: #333;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1s infinite ease-in-out both;\n  animation: sk-bouncedelay 1s infinite ease-in-out both;\n}\n.calendar .calendar-spinner > div.bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.calendar .calendar-spinner > div.bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n/* Context menu */\n.calendar-context-menu,\n.calendar-context-menu .submenu {\n  border: 1px solid #ddd;\n  background-color: white;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  display: none;\n}\n.calendar-context-menu .item {\n  position: relative;\n}\n.calendar-context-menu .item .content {\n  padding: 5px 10px;\n  cursor: pointer;\n  display: table;\n  width: 100%;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n.calendar-context-menu .item .content:hover {\n  background: #eee;\n}\n.calendar-context-menu .item .content .text {\n  display: table-cell;\n}\n.calendar-context-menu .item .content .arrow {\n  display: table-cell;\n  padding-left: 10px;\n  text-align: right;\n}\n.calendar-context-menu .item .submenu {\n  top: -1px;\n  /* Compensate for the border */\n}\n.calendar-context-menu .item .submenu:not(.open-left) {\n  left: 100%;\n}\n.calendar-context-menu .item .submenu.open-left {\n  right: 100%;\n}\n.calendar-context-menu .item:hover > .submenu {\n  display: block;\n}\n.table-striped .calendar table.month tr td,\n.table-striped .calendar table.month tr th {\n  background-color: transparent;\n}\ntable.month td.day .day-content:hover {\n  background: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n@-webkit-keyframes sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n";
  styleInject(css_248z);

  var Calendar = /*#__PURE__*/function (_React$Component) {
    _inherits(Calendar, _React$Component);
    var _super = _createSuper(Calendar);
    // Map the "locales" property to the js-year-calendar "locales" property, in order to make the locale files compatible

    function Calendar(props) {
      _classCallCheck(this, Calendar);
      return _super.call(this, props);
    }
    _createClass(Calendar, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.JsCalendar = new JsCalendar(this.container, {
          // opsions
          allowOverlap: this.props.allowOverlap,
          alwaysHalfDay: this.props.alwaysHalfDay,
          contextMenuItems: this.props.contextMenuItems,
          customDayRenderer: this.props.customDayRenderer,
          customDataSourceRenderer: this.props.customDataSourceRenderer,
          dataSource: this.props.dataSource,
          disabledDays: this.props.disabledDays,
          disabledWeekDays: this.props.disabledWeekDays,
          displayDisabledDataSource: this.props.displayDisabledDataSource,
          displayHeader: this.props.displayHeader,
          displayWeekNumber: this.props.displayWeekNumber,
          enableContextMenu: this.props.enableContextMenu,
          enableRangeSelection: this.props.enableRangeSelection,
          hiddenWeekDays: this.props.hiddenWeekDays,
          language: this.props.language,
          loadingTemplate: this.props.loadingTemplate,
          maxDate: this.props.maxDate,
          minDate: this.props.minDate,
          roundRangeLimits: this.props.roundRangeLimits,
          style: this.props.style,
          weekStart: this.props.weekStart,
          numberMonthsDisplayed: this.props.numberMonthsDisplayed,
          startYear: this.props.year != null ? this.props.year : this.props.defaultYear,
          startDate: this.props.startDate != null ? this.props.startDate : this.props.defaultStartDate,
          // Events
          clickDay: this.props.onDayClick,
          dayContextMenu: this.props.onDayContextMenu,
          mouseOnDay: this.props.onDayEnter,
          mouseOutDay: this.props.onDayLeave,
          renderEnd: this.props.onRenderEnd,
          selectRange: this.props.onRangeSelected,
          periodChanged: this.props.onPeriodChanged,
          yearChanged: this.props.onYearChanged
        });
      }
    }, {
      key: "compare",
      value: function compare(a, b) {
        var _this = this;
        if (typeof a === "function" && typeof b === "function") {
          return a.toString() != b.toString();
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() != b.getTime();
        } else if (a !== null && _typeof(a) === "object" && b !== null && _typeof(b) === "object") {
          var aKeys = Object.keys(a);
          var bKeys = Object.keys(b);
          if (aKeys.length !== bKeys.length) {
            return true;
          } else {
            return aKeys.some(function (key) {
              return _this.compare(a[key], b[key]);
            });
          }
        } else {
          return a != b;
        }
      }
    }, {
      key: "updateEvent",
      value: function updateEvent(eventName, oldListener, newListener) {
        this.container.removeEventListener(eventName, oldListener);
        this.container.addEventListener(eventName, newListener);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var cal = this.JsCalendar;
        var ops = [];

        // opsions
        if (this.compare(nextProps.allowOverlap, this.props.allowOverlap)) ops.push(function () {
          return cal.setAllowOverlap(nextProps.allowOverlap);
        });
        if (this.compare(nextProps.alwaysHalfDay, this.props.alwaysHalfDay)) ops.push(function () {
          return cal.setAlwaysHalfDay(nextProps.alwaysHalfDay, true);
        });
        if (this.compare(nextProps.contextMenuItems, this.props.contextMenuItems)) ops.push(function () {
          return cal.setContextMenuItems(nextProps.contextMenuItems, true);
        });
        if (this.compare(nextProps.customDayRenderer, this.props.customDayRenderer)) ops.push(function () {
          return cal.setCustomDayRenderer(nextProps.customDayRenderer, true);
        });
        if (this.compare(nextProps.customDataSourceRenderer, this.props.customDataSourceRenderer)) ops.push(function () {
          return cal.setCustomDataSourceRenderer(nextProps.customDataSourceRenderer, true);
        });
        if (this.compare(nextProps.dataSource, this.props.dataSource)) ops.push(function () {
          return cal.setDataSource(nextProps.dataSource, true);
        });
        if (this.compare(nextProps.disabledDays, this.props.disabledDays)) ops.push(function () {
          return cal.setDisabledDays(nextProps.disabledDays, true);
        });
        if (this.compare(nextProps.disabledWeekDays, this.props.disabledWeekDays)) ops.push(function () {
          return cal.setDisabledWeekDays(nextProps.disabledWeekDays, true);
        });
        if (this.compare(nextProps.displayDisabledDataSource, this.props.displayDisabledDataSource)) ops.push(function () {
          return cal.setDisplayDisabledDataSource(nextProps.displayDisabledDataSource, true);
        });
        if (this.compare(nextProps.displayHeader, this.props.displayHeader)) ops.push(function () {
          return cal.setDisplayHeader(nextProps.displayHeader, true);
        });
        if (this.compare(nextProps.displayWeekNumber, this.props.displayWeekNumber)) ops.push(function () {
          return cal.setDisplayWeekNumber(nextProps.displayWeekNumber, true);
        });
        if (this.compare(nextProps.enableContextMenu, this.props.enableContextMenu)) ops.push(function () {
          return cal.setEnableContextMenu(nextProps.enableContextMenu, true);
        });
        if (this.compare(nextProps.enableRangeSelection, this.props.enableRangeSelection)) ops.push(function () {
          return cal.setEnableRangeSelection(nextProps.enableRangeSelection, true);
        });
        if (this.compare(nextProps.hiddenWeekDays, this.props.hiddenWeekDays)) ops.push(function () {
          return cal.setHiddenWeekDays(nextProps.hiddenWeekDays, true);
        });
        if (this.compare(nextProps.language, this.props.language)) ops.push(function () {
          return cal.setLanguage(nextProps.language, true);
        });
        if (this.compare(nextProps.loadingTemplate, this.props.loadingTemplate)) ops.push(function () {
          return cal.setLoadingTemplate(nextProps.loadingTemplate, true);
        });
        if (this.compare(nextProps.maxDate, this.props.maxDate)) ops.push(function () {
          return cal.setMaxDate(nextProps.maxDate, true);
        });
        if (this.compare(nextProps.minDate, this.props.minDate)) ops.push(function () {
          return cal.setMinDate(nextProps.minDate, true);
        });
        if (this.compare(nextProps.roundRangeLimits, this.props.roundRangeLimits)) ops.push(function () {
          return cal.setRoundRangeLimits(nextProps.roundRangeLimits, true);
        });
        if (this.compare(nextProps.style, this.props.style)) ops.push(function () {
          return cal.setStyle(nextProps.style, true);
        });
        if (this.compare(nextProps.weekStart, this.props.weekStart)) ops.push(function () {
          return cal.setWeekStart(nextProps.weekStart, true);
        });
        if (this.compare(nextProps.numberMonthsDisplayed, this.props.numberMonthsDisplayed)) ops.push(function () {
          return cal.setWeekStart(nextProps.numberMonthsDisplayed, true);
        });
        if (this.compare(nextProps.startDate, this.props.startDate)) ops.push(function () {
          return cal.setStartDate(nextProps.startDate);
        });
        if (this.compare(nextProps.year, this.props.year)) ops.push(function () {
          return cal.setYear(nextProps.year);
        });

        // Events
        if (this.compare(nextProps.onDayClick, this.props.onDayClick)) this.updateEvent('clickDay', this.props.onDayClick, nextProps.onDayClick);
        if (this.compare(nextProps.onDayContextMenu, this.props.onDayContextMenu)) this.updateEvent('dayContextMenu', this.props.onDayContextMenu, nextProps.onDayContextMenu);
        if (this.compare(nextProps.onDayEnter, this.props.onDayEnter)) this.updateEvent('mouseOnDay', this.props.onDayEnter, nextProps.onDayEnter);
        if (this.compare(nextProps.onDayLeave, this.props.onDayLeave)) this.updateEvent('mouseOutDay', this.props.onDayLeave, nextProps.onDayLeave);
        if (this.compare(nextProps.onRenderEnd, this.props.onRenderEnd)) this.updateEvent('renderEnd', this.props.onRenderEnd, nextProps.onRenderEnd);
        if (this.compare(nextProps.onRangeSelected, this.props.onRangeSelected)) this.updateEvent('selectRange', this.props.onRangeSelected, nextProps.onRangeSelected);
        if (this.compare(nextProps.onPeriodChanged, this.props.onPeriodChanged)) this.updateEvent('periodChanged', this.props.onPeriodChanged, nextProps.onPeriodChanged);
        if (this.compare(nextProps.onYearChanged, this.props.onYearChanged)) this.updateEvent('yearChanged', this.props.onYearChanged, nextProps.onYearChanged);
        if (ops.length > 0) {
          ops.forEach(function (op) {
            return op();
          });
          if (nextProps.year == this.props.year && nextProps.startDate == this.props.startDate) {
            // If the year has changed, the calendar has automatically been rendered
            cal.render();
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        return /*#__PURE__*/React__default["default"].createElement("div", {
          ref: function ref(elt) {
            return _this2.container = elt;
          }
        });
      }
    }]);
    return Calendar;
  }(React__default["default"].Component);
  _defineProperty(Calendar, "propsTypes", {
    // opsions
    allowOverlap: PropTypes__default["default"].bool,
    alwaysHalfDay: PropTypes__default["default"].bool,
    contextMenuItems: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
      text: PropTypes__default["default"].string,
      click: PropTypes__default["default"].func,
      visible: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].func]),
      items: PropTypes__default["default"].array
    })),
    customDayRenderer: PropTypes__default["default"].func,
    customDataSourceRenderer: PropTypes__default["default"].func,
    dataSource: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
      startDate: PropTypes__default["default"].instanceOf(Date),
      endDate: PropTypes__default["default"].instanceOf(Date),
      name: PropTypes__default["default"].string
    })), PropTypes__default["default"].func]),
    disabledDays: PropTypes__default["default"].arrayOf(PropTypes__default["default"].instanceOf(Date)),
    disabledWeekDays: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
    displayDisabledDataSource: PropTypes__default["default"].bool,
    displayHeader: PropTypes__default["default"].bool,
    displayWeekNumber: PropTypes__default["default"].bool,
    enableContextMenu: PropTypes__default["default"].bool,
    enableRangeSelection: PropTypes__default["default"].bool,
    hiddenWeekDays: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
    language: PropTypes__default["default"].string,
    loadingTemplate: PropTypes__default["default"].string,
    maxDate: PropTypes__default["default"].instanceOf(Date),
    minDate: PropTypes__default["default"].instanceOf(Date),
    roundRangeLimits: PropTypes__default["default"].bool,
    selectRange: PropTypes__default["default"].bool,
    style: PropTypes__default["default"].string,
    weekStart: PropTypes__default["default"].number,
    year: PropTypes__default["default"].number,
    // Events
    onDayClick: PropTypes__default["default"].func,
    onDayContextMenu: PropTypes__default["default"].func,
    onDayEnter: PropTypes__default["default"].func,
    onDayLeave: PropTypes__default["default"].func,
    onRenderEnd: PropTypes__default["default"].func,
    onSelectRange: PropTypes__default["default"].func,
    onYearChanged: PropTypes__default["default"].func
  });
  _defineProperty(Calendar, "locales", JsCalendar.locales);

  return Calendar;

}));
