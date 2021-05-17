(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events/show"],{

/***/ "./assets/js/events/show.js":
/*!**********************************!*\
  !*** ./assets/js/events/show.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

$(function () {
  $('#approvedArticleModal').on('show.bs.modal', function (e) {
    var data = $(e.relatedTarget).data('data');
    $('#approvedArticleModal .value').each(function () {
      $(this).text(data[$(this).data('field')]);
    });
    $('#approvedArticleModal .authors').html(data.authors.map(function (a) {
      return "<div class=\"mb-3\">".concat(a.name, ", ").concat(a.info, ", ").concat(a.email, "</div>");
    }));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/events/show.js","runtime","vendors~activity~app~articleEvaluation~associate~certificate~cookieconsent~dashboard/admin~dashboard~780886de","vendors~activity~app~associate~certificate~cookieconsent~dashboard/admin~dashboard/user~ensalement/g~8018043c","vendors~events/show"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXZlbnRzL3Nob3cuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiZSIsImRhdGEiLCJyZWxhdGVkVGFyZ2V0IiwiZWFjaCIsInRleHQiLCJodG1sIiwiYXV0aG9ycyIsIm1hcCIsImEiLCJuYW1lIiwiaW5mbyIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQVc7QUFDWEEsR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJDLEVBQTNCLENBQThCLGVBQTlCLEVBQStDLFVBQVVDLENBQVYsRUFBYTtBQUMxRCxRQUFNQyxJQUFJLEdBQUdILENBQUMsQ0FBQ0UsQ0FBQyxDQUFDRSxhQUFILENBQUQsQ0FBbUJELElBQW5CLENBQXdCLE1BQXhCLENBQWI7QUFDQUgsS0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NLLElBQWxDLENBQXVDLFlBQVk7QUFDakRMLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sSUFBUixDQUFhSCxJQUFJLENBQUNILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLE9BQWIsQ0FBRCxDQUFqQjtBQUNELEtBRkQ7QUFHQUgsS0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NPLElBQXBDLENBQXlDSixJQUFJLENBQUNLLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixVQUFBQyxDQUFDO0FBQUEsMkNBQXlCQSxDQUFDLENBQUNDLElBQTNCLGVBQW9DRCxDQUFDLENBQUNFLElBQXRDLGVBQStDRixDQUFDLENBQUNHLEtBQWpEO0FBQUEsS0FBbEIsQ0FBekM7QUFDRCxHQU5EO0FBT0QsQ0FSQSxDQUFELEMiLCJmaWxlIjoiZXZlbnRzL3Nob3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xuICAkKCcjYXBwcm92ZWRBcnRpY2xlTW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoZS5yZWxhdGVkVGFyZ2V0KS5kYXRhKCdkYXRhJyk7XG4gICAgJCgnI2FwcHJvdmVkQXJ0aWNsZU1vZGFsIC52YWx1ZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS50ZXh0KGRhdGFbJCh0aGlzKS5kYXRhKCdmaWVsZCcpXSk7XG4gICAgfSk7XG4gICAgJCgnI2FwcHJvdmVkQXJ0aWNsZU1vZGFsIC5hdXRob3JzJykuaHRtbChkYXRhLmF1dGhvcnMubWFwKGEgPT4gYDxkaXYgY2xhc3M9XCJtYi0zXCI+JHthLm5hbWV9LCAke2EuaW5mb30sICR7YS5lbWFpbH08L2Rpdj5gKSk7XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==