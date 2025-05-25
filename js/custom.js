function debounce(func, timeout = 300) {
    let timer;
    return () => {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log(timeout)
            func.apply(context, args);
        }, timeout);
    };
}

function scrollActiveHeader() {
    let toc_active = document.querySelector('.md-nav__link.md-nav__link--passed.md-nav__link--active')
    let container = document.querySelector('.md-sidebar .md-sidebar__scrollwrap')
    let label = document.querySelector('.md-sidebar label.md-nav__title')

    if(toc_active) {
        let toc_h = toc_active.offsetHeight
        let toc_t = toc_active.offsetTop
        let con_h = container.offsetHeight
        let con_s = container.scrollTop
        let lbl_h = label.offsetHeight

        console.log(toc_h, toc_t, con_h, con_s)
        console.log(toc_t, con_s + lbl_h + toc_h, con_s + con_h - toc_h)

        // アクティブなタイトルが目次リスト内から外れているかどうか
        //if(toc_t < con_s + lbl_h + (toc_h * 5) || con_s + con_h - (toc_h * 4) < toc_t) {
        if(toc_t < con_s + lbl_h || con_s + con_h < toc_t) {
            container.scrollTop = toc_t - parseInt(con_h / 2)
        }
    }
}

console.log("scroll")
window.addEventListener('scroll', debounce(scrollActiveHeader, 300), false);

window.document.addEventListener("DOMContentLoaded", function(event) {
    let images = document.querySelectorAll("img");
    // mp4のみを抽出してvideoタグに変換する
    images.forEach(function(image) {
        if(image.src.endsWith(".mp4")) {
            let video = document.createElement("video");
            video.src = image.src;
            video.controls = true;
            video.preload = location.href.match(/127\.0\.0\.1/) ? "auto" : "none";
            video.muted = true;
            image.parentNode.replaceChild(video, image);
        }
    });
});