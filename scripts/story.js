let $timeline = $(".timeline");

let Timeline = function() {
  // 使用同步加载
  let data = $.parseJSON($.ajax({
    url: "../static/img-story/timeline.json",
    dataType: "json",
    async: false
  }).responseText);
  $.each(data, function(_, item) {
    $timeline.append(`
      <div class="item" data-text="《执子之手，与子偕老》">
        <div class="content">
          <img src="../static/img-story/${item.img}" alt="" class="img">
          <h2 class="content-title">${item.time}</h2>
          <p class="content-desc">${item.text}</p>
        </div>
      </div>
    `);
  });
  // 初始化 timeline 插件
  $("#shell").timeline();
}

Timeline();

