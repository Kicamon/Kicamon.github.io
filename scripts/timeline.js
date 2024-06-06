//(function ($) {
//  $.fn.timeline = function () {
//    let selectors = {
//      id: $(this),
//      item: $(this).find(".item"),
//      activeClass: "item--active",
//      img: ".img"
//    };
//    // 将第一个时间轴项目激活，并设置时间轴背景图片为第一个项目的图片
//    selectors.item.eq(0).addClass(selectors.activeClass);
//    selectors.id.css(
//      "background-image",
//      "url(" +
//      selectors.item.first()
//        .find(selectors.img)
//        .attr("src") +
//      ")"
//    );
//    // 获取时间轴项目的总数
//    let itemLength = selectors.item.length;
//    // 当页面滚动时，触发滚动事件
//    $(window).scroll(function () {
//      let max, min;
//      // 获取页面滚动的距离
//      let pos = $(this).scrollTop();
//      selectors.item.each(function (i) {
//        // 获取当前时间轴项目的最小和最大高度
//        min = $(this).offset().top;
//        max = $(this).height() + $(this).offset().top;
//        let that = $(this);
//        // 如果滚动到最后一个项目，并且超过了当前项目高度的一半，
//        // 则将最后一个项目设置为激活状态，并设置背景图片为最后一个项目的图片
//        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
//          selectors.item.removeClass(selectors.activeClass);
//          selectors.id.css(
//            "background-image",
//            "url(" +
//            selectors.item.last()
//              .find(selectors.img)
//              .attr("src") +
//            ")"
//          );
//          selectors.item.last().addClass(selectors.activeClass);
//        }
//        // 如果当前滚动位置在当前项目的最小和最大高度之间，
//        // 则将当前项目设置为激活状态，并设置背景图片为当前项目的图片
//        else if (pos <= max - 10 && pos >= min) {
//          selectors.id.css(
//            "background-image",
//            "url(" +
//            $(this)
//              .find(selectors.img)
//              .attr("src") +
//            ")"
//          );
//          selectors.item.removeClass(selectors.activeClass);
//          $(this).addClass(selectors.activeClass);
//        }
//      });
//    });
//  };
//})(jQuery)
///*
//最后，我们调用 timeline 插件并传入时间轴的 ID 作为参数。
//这将启用时间轴插件并为该时间轴绑定滚动事件。
//*/
//$("#shell").timeline();
//
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
          let that = $(this);
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
