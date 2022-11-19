function navMenu() {
    let nav = document.querySelector('.nav');
    let btnMenu = document.querySelector('.btn__menu');
    btnMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
        btnMenu.classList.toggle('active');
    })
    function hideNav() {
        nav.classList.remove('active');
        btnMenu.classList.remove('active');
    }
    window.addEventListener('resize', function () {
        let wWindow = window.innerWidth;
        if (wWindow > 1200) {
            hideNav();
        }
    })

}
navMenu();
let langClick = document.querySelector('.header .lang')
let itemsLang = document.querySelectorAll('.header .lang .lang__option a')
let langCurrent = document.querySelector('.header .lang .lang__select')
function lang() {

    langClick.addEventListener('click', function (e) {
        e.stopPropagation();
        langClick.classList.toggle('active');

    })
}
itemsLang.forEach(function (item) {
    item.addEventListener('click', function () {

        let langText = this.textContent;

        let langCurrentTam = langCurrent.textContent;
        langCurrent.innerHTML = langText;
        this.innerHTML = langCurrentTam;
        // console.log(langText);
    })
})
window.addEventListener('click', function () {
    langClick.classList.remove('active');
})
lang();
function handleSiler() {
    var elem = document.querySelector('.scslider .scslider__list');
    if (elem) {
        var flkty = new Flickity(elem, {
            // options
            cellAlign: 'left',
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true
        });
        let next = document.querySelector('.scslider .btnslider .--next');
        let previous = document.querySelector('.scslider .btnslider .--prev');
        next.addEventListener('click', function (e) {
            e.preventDefault();
            flkty.next(true);
        });
        previous.addEventListener('click', function () {
            flkty.previous(true);
        });
    }
}
handleSiler();
function toTop() {

    let backtotop = document.querySelector('.btnbacktotop');
    let getHeightWindow = window.innerHeight;
    window.addEventListener('scroll', function showBackToTop() {
        let scrollY = window.pageYOffset;
        if (scrollY > getHeightWindow) {
            backtotop.classList.add('active')
        }
        else {
            backtotop.classList.remove('active');
        }
    })

    backtotop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

toTop();
function handleModalVideo() {

    let videos = document.querySelectorAll('.scvideo .imgvideo');
    let modal = document.querySelector('.popupvideo');
    let iframVideo = document.querySelector('.popupvideo .popupvideo__inner-iframe iframe');
    let btnClose = document.querySelector('.popupvideo__inner-close');

    videos.forEach(function (videos) {
        videos.addEventListener('click', function () {
            modal.classList.add('active');

            let dataID = videos.getAttribute('data-video-src');
            // console.log(dataID);

            iframVideo.setAttribute('src', `https://www.youtube.com/embed/${dataID}?autoplay=1`);
        })
    })
    function closeModal() {
        modal.classList.remove('active');
        iframVideo.setAttribute('src', '');
    }
    if (btnClose) {
        btnClose.addEventListener('click', function () {
            closeModal();
        })
    }
    if (modal) {
        modal.addEventListener('click', function () {
            closeModal();
        })
    }



}
handleModalVideo();
function handleLogoSilder() {
    var elem = document.querySelector('.sclogo .sclogo__img');
    if (elem) {
        var flkty = new Flickity(elem, {
            // options
            cellAlign: 'left',
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,

        });
    }


}
handleLogoSilder();
Fancybox.bind("[data-fancybox='image']", {
    // Your options go here
});
function handleSilerInfor() {
    var elem = document.querySelector('.scinfor .content__list');
    if (elem) {
        var flkty = new Flickity(elem, {
            // options
            cellAlign: 'left',
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true
        });
        let previous = document.querySelector('.scinfor .container .btnprev');
        let next = document.querySelector('.scinfor .container .btnnext');
        next.addEventListener('click', function () {
            flkty.next(true);
        });
        previous.addEventListener('click', function () {
            flkty.previous(true);
        });
    }

}
handleSilerInfor();
function handleSilerService() {
    var elem = document.querySelector('.scourser .scourser__list');
    if (elem) {
        var flkty = new Flickity(elem, {
            // options
            cellAlign: 'left',
            contain: true,
            prevNextButtons: false,
            pageDots: true,
            wrapAround: true,
            freeScroll: true,
            initialIndex: 2
        });
    }
}
handleSilerService();
function handleTag() {
    let listTag = document.querySelectorAll('.sclib .container .content-list .listproduct');
    let tabName = document.querySelectorAll('.sclib .container .libmenu .--head');
    tabName.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabName.forEach(function (tab) {
                tab.classList.remove('active');
            })
            tab.classList.add('active');


            listTag.forEach(function (list) {
                list.classList.remove('active');

            })
            let idDataTag = this.dataset.tab;

            document.querySelector(`.items-${idDataTag}`).classList.add('active');
        })

    })
}
handleTag();

