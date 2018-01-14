(function() {
  $(function() {
    var alignContainer;
    alignContainer = function() {
      var container, containerHeight, windowHeight;
      container = $('#Container');
      containerHeight = container.outerHeight();
      windowHeight = $(window).height();
      if (windowHeight > containerHeight) {
        return container.css('margin-top', (windowHeight - containerHeight) / 2);
      }
    };
    alignContainer();
    return $(window).resize(alignContainer);
  });

}).call(this);
