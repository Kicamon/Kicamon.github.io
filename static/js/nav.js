let $nav = $(".nav");

let Nav = function () {
    $nav.append(`<a class="nav-logo" href="/index.html">
            <img src="/static/images/logo.png" alt="icon" class="nav-logo-icon">
            <img src="/static/images/gjs_name.png" alt="name" class="nav-logo-name">
        </a>
        <div class="nav-infos">
            <a href="" class="nav-infos-aboutus">品牌活动</a>
            <a href="" class="nav-infos-history">共进社史</a>
            <div class="nav-infos-others">
                <div class="nav-infos-others-text">其他</div>
                <div class="nav-infos-others-op">
                    <!--这里填入相应的信息-->
                </div>
            </div>
        </div>`);
}

Nav();