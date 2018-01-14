(function() {
  (function($, hl) {
    return $('pre code').each(function() {
      var code, error, lang, obj;
      obj = $(this);
      code = obj.text();
      lang = obj.attr('class');
      if ((lang != null) && lang) {
        lang = lang.replace(/^lang\-/, '');
        try {
          return obj.html(hl.highlight(lang, code).value);
        } catch (_error) {
          error = _error;
          return console.error(error);
        }
      }
    });
  })(jQuery, hljs);

}).call(this);
