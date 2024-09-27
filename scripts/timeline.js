(function($) {
  $.fn.timeline = function() {
    let selectors = {
      id: $(this),
      item: $(this).find(".item"),
      activeClass: "item--active",
      img: ".img"
    };
    // 定义一个方法用于初始化 timeline
    function initTimeline() {
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" +
        selectors.item.first()
          .find(selectors.img)
          .attr("src") +
        ")"
      );

      let itemLength = selectors.item.length;
      $(window).scroll(function() {
        let max, min;
        let pos = $(this).scrollTop();
        selectors.item.each(function(i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          //let that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" +
              selectors.item.last()
                .find(selectors.img)
                .attr("src") +
              ")"
            );
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 10 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" +
              $(this)
                .find(selectors.img)
                .attr("src") +
              ")"
            );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    }
    // 初始化 timeline
    initTimeline();
    // 监听自定义事件
    $(document).on("contentLoaded", initTimeline);
  };
})(jQuery);

$("#shell").timeline();
