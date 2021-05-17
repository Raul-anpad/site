(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./assets/js/login.js":
/*!****************************!*\
  !*** ./assets/js/login.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $(document).on('keypress', '#login-container form#formLogin', function (e) {
    if (e.which == 13) {
      $('#login-container #BtFormLogin').click();
      $('#login-container #inputIdentifier').focus();
    }
  });
  $(document).on('submit', '#login-container form#formLoginLogin', function (e) {
    e.preventDefault();
    $('#login-container form#formLoginLogin').removeClass('was-validated');
    $('#login-container #inputPassword').removeClass('is-invalid');
    $.ajax({
      url: $(this).attr('action'),
      type: 'POST',
      data: $(this).serialize(),
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('defaults', 'true');
      },
      success: function success(data, statusCode, xhr) {
        var error = xhr.getResponseHeader('x-error');

        if (error) {
          $('#login-container #btnLoginLoad').addClass('d-none');
          $('#login-container').html(data);
          $('#login-container form#formLoginLogin').addClass('was-validated');
          $('#login-container #inputPassword').addClass('is-invalid');
          $('#login-container #BtFormLogin').addClass('follow');
        } else {
          location.reload();
        }
      }
    });
  });
  $(document).on('click', '#login-container #BtFormLogin', function (e) {
    e.preventDefault();
    $('#login-container #BtFormLogin').removeClass('follow');
    $('#login-container #btnLoginLoad').removeClass('d-none');
    $('#login-container form#formLoginLogin').submit();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/login.js","runtime","vendors~activity~app~articleEvaluation~associate~certificate~cookieconsent~dashboard/admin~dashboard~780886de"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9naW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJlIiwid2hpY2giLCJjbGljayIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVDbGFzcyIsImFqYXgiLCJ1cmwiLCJhdHRyIiwidHlwZSIsImRhdGEiLCJzZXJpYWxpemUiLCJiZWZvcmVTZW5kIiwieGhyIiwic2V0UmVxdWVzdEhlYWRlciIsInN1Y2Nlc3MiLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJnZXRSZXNwb25zZUhlYWRlciIsImFkZENsYXNzIiwiaHRtbCIsImxvY2F0aW9uIiwicmVsb2FkIiwic3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsMENBQUMsQ0FBQyxZQUFXO0FBRVRBLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxVQUFmLEVBQTJCLGlDQUEzQixFQUE4RCxVQUFVQyxDQUFWLEVBQWE7QUFDdkUsUUFBSUEsQ0FBQyxDQUFDQyxLQUFGLElBQVcsRUFBZixFQUFtQjtBQUNmSixPQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ0ssS0FBbkM7QUFDQUwsT0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUNNLEtBQXZDO0FBQ0g7QUFDSixHQUxEO0FBT0FOLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLHNDQUF6QixFQUFnRSxVQUFVQyxDQUFWLEVBQWE7QUFDekVBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBUCxLQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ1EsV0FBMUMsQ0FBc0QsZUFBdEQ7QUFDQVIsS0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNRLFdBQXJDLENBQWlELFlBQWpEO0FBQ0FSLEtBQUMsQ0FBQ1MsSUFBRixDQUFPO0FBQ0hDLFNBQUcsRUFBRVYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsUUFBYixDQURGO0FBRUhDLFVBQUksRUFBRSxNQUZIO0FBR0hDLFVBQUksRUFBRWIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxTQUFSLEVBSEg7QUFJSEMsZ0JBQVUsRUFBRSxvQkFBU0MsR0FBVCxFQUFjO0FBQ3RCQSxXQUFHLENBQUNDLGdCQUFKLENBQXFCLFVBQXJCLEVBQWlDLE1BQWpDO0FBQ0gsT0FORTtBQU9IQyxhQUFPLEVBQUUsaUJBQVVMLElBQVYsRUFBZ0JNLFVBQWhCLEVBQTRCSCxHQUE1QixFQUFpQztBQUN0QyxZQUFJSSxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ssaUJBQUosQ0FBc0IsU0FBdEIsQ0FBWjs7QUFDQSxZQUFJRCxLQUFKLEVBQVc7QUFDUHBCLFdBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9Dc0IsUUFBcEMsQ0FBNkMsUUFBN0M7QUFDQXRCLFdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCdUIsSUFBdEIsQ0FBMkJWLElBQTNCO0FBQ0FiLFdBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDc0IsUUFBMUMsQ0FBbUQsZUFBbkQ7QUFDQXRCLFdBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDc0IsUUFBckMsQ0FBOEMsWUFBOUM7QUFDQXRCLFdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1Dc0IsUUFBbkMsQ0FBNEMsUUFBNUM7QUFDSCxTQU5ELE1BTUs7QUFDREUsa0JBQVEsQ0FBQ0MsTUFBVDtBQUNIO0FBQ0o7QUFsQkUsS0FBUDtBQW9CSCxHQXhCRDtBQTBCQXpCLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLCtCQUF4QixFQUF5RCxVQUFVQyxDQUFWLEVBQWE7QUFDbEVBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBUCxLQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ1EsV0FBbkMsQ0FBK0MsUUFBL0M7QUFDQVIsS0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NRLFdBQXBDLENBQWdELFFBQWhEO0FBQ0FSLEtBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDMEIsTUFBMUM7QUFDSCxHQUxEO0FBTUgsQ0F6Q0EsQ0FBRCxDIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsICcjbG9naW4tY29udGFpbmVyIGZvcm0jZm9ybUxvZ2luJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT0gMTMpIHtcbiAgICAgICAgICAgICQoJyNsb2dpbi1jb250YWluZXIgI0J0Rm9ybUxvZ2luJykuY2xpY2soKTtcbiAgICAgICAgICAgICQoJyNsb2dpbi1jb250YWluZXIgI2lucHV0SWRlbnRpZmllcicpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdzdWJtaXQnLCAnI2xvZ2luLWNvbnRhaW5lciBmb3JtI2Zvcm1Mb2dpbkxvZ2luJyxmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJyNsb2dpbi1jb250YWluZXIgZm9ybSNmb3JtTG9naW5Mb2dpbicpLnJlbW92ZUNsYXNzKCd3YXMtdmFsaWRhdGVkJyk7XG4gICAgICAgICQoJyNsb2dpbi1jb250YWluZXIgI2lucHV0UGFzc3dvcmQnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKHhocikge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdkZWZhdWx0cycsICd0cnVlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1c0NvZGUsIHhocikge1xuICAgICAgICAgICAgICAgIGxldCBlcnJvciA9IHhoci5nZXRSZXNwb25zZUhlYWRlcigneC1lcnJvcicpO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAkKCcjbG9naW4tY29udGFpbmVyICNidG5Mb2dpbkxvYWQnKS5hZGRDbGFzcygnZC1ub25lJylcbiAgICAgICAgICAgICAgICAgICAgJCgnI2xvZ2luLWNvbnRhaW5lcicpLmh0bWwoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNsb2dpbi1jb250YWluZXIgZm9ybSNmb3JtTG9naW5Mb2dpbicpLmFkZENsYXNzKCd3YXMtdmFsaWRhdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNsb2dpbi1jb250YWluZXIgI2lucHV0UGFzc3dvcmQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjbG9naW4tY29udGFpbmVyICNCdEZvcm1Mb2dpbicpLmFkZENsYXNzKCdmb2xsb3cnKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2xvZ2luLWNvbnRhaW5lciAjQnRGb3JtTG9naW4nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJyNsb2dpbi1jb250YWluZXIgI0J0Rm9ybUxvZ2luJykucmVtb3ZlQ2xhc3MoJ2ZvbGxvdycpO1xuICAgICAgICAkKCcjbG9naW4tY29udGFpbmVyICNidG5Mb2dpbkxvYWQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJyNsb2dpbi1jb250YWluZXIgZm9ybSNmb3JtTG9naW5Mb2dpbicpLnN1Ym1pdCgpO1xuICAgIH0pO1xufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=