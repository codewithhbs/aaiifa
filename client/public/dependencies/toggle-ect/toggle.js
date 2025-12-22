!(function (e) {
  "use strict";
  e(window).on("load", function () {
    e("body")
      .imagesLoaded()
      .done(function (t) {
        e("body").addClass("loaded");
      });
  }),
    e.fn.meanmenu &&
      e("nav#dropdown").meanmenu({
        siteLogo:
          "<div className='mobile-menu-nav-back'><a className='logo-mobile' href='index.html'><img src='media/logo-mobile.png' alt='logo' className='img-fluid'/></a></div>",
      });
  var t = e("header.transparent-navbar"),
    a = t.outerHeight() || 0,
    r = e("header.transparent-header"),
    s = r.outerHeight() || 0;
  t.length && t.css("margin-bottom", -a),
    r.length && r.css("margin-bottom", -s);
  var o = e("#contact-form");
  o.length &&
    o.validator().on("submit", function (t) {
      var a = e(this),
        r = o.find(".form-response");
      if (!t.isDefaultPrevented())
        return (
          e.ajax({
            url: "php/mailer.php",
            type: "POST",
            data: o.serialize(),
            beforeSend: function () {
              r.html("<div className='alert alert-info'><p>Loading ...</p></div>");
            },
            success: function (e) {
              "success" === e
                ? (a[0].reset(),
                  r.html(
                    "<div className='alert alert-success'><p>Message has been sent successfully.</p></div>"
                  ))
                : r.html(
                    "<div className='alert alert-success'><p>" + e + "</p></div>"
                  );
            },
          }),
          !1
        );
      r.html(
        "<div className='alert alert-success'><p>Please select all required field.</p></div>"
      );
    });
  var l = e(".isotope-wrap");
  if (l.length > 0) {
    function n(t) {
      (t = t || ""),
        e(".featuredContainer").magnificPopup({
          delegate: t + " a.popup-zoom",
          type: "image",
          gallery: { enabled: !0 },
        });
    }
    var i;
    e(".featuredContainer", l).imagesLoaded(function () {
      var t =
        l.find(".isotope-classes-tab .nav-item:first-child").data("filter") ||
        "*";
      (i = e(".featuredContainer", l).isotope({
        filter: t,
        transitionDuration: "1s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { transform: "scale(1)", opacity: 1 },
      })),
        n(t);
    });
    l.find(".isotope-classes-tab").on("click", "a", function () {
      var t = e(this);
      t.parent(".isotope-classes-tab").find("a").removeClass("current"),
        t.addClass("current");
      var a = t.attr("data-filter");
      return i.isotope({ filter: a }), n(a), !1;
    });
  }
  e(window).on("load resize", function () {
    e(".zoom-gallery").length &&
      e(".zoom-gallery").each(function () {
        e(this).magnificPopup({
          delegate: "a.popup-zoom",
          type: "image",
          gallery: { enabled: !0 },
        });
      });
    var t = e(".popup-youtube");
    t.length &&
      t.magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
      });
  });
  var d = e(".counter");
  if (
    (d.length && d.counterUp({ delay: 50, time: 5e3 }),
    e(".map-layout1").each(function () {
      var t = e(this),
        a = (t.data("key"), t.data("lat"), t.data("lng"), t.data("mrkr"));
      t.gmap3({
        center: [-37.81618, 144.95692],
        zoom: 12,
        scrollwheel: !1,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#333333" },
              { lightness: 40 },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#ffffff" },
              { lightness: 16 },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#fefefe" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [{ saturation: "-9" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#e8e8e8" }, { lightness: 20 }],
          },
          {
            featureType: "landscape.natural.landcover",
            elementType: "geometry.fill",
            stylers: [{ saturation: "-4" }, { color: "#cdcdcd" }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#d4f1c9" }, { lightness: 21 }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#d4f1c9" }, { lightness: 21 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffeea4" }, { lightness: 60 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#f5d681" }, { lightness: 30 }, { weight: 1 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 18 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 16 }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#aadaff" }, { lightness: 17 }],
          },
        ],
      }).marker(function (e) {
        return { position: e.getCenter(), icon: a };
      });
    }),
    e("[data-bg-image]").each(function () {
      var t = e(this).data("bg-image");
      e(this).css({ backgroundImage: "url(" + t + ")" });
    }),
    e(".loadmore").on("click", "a", function (t) {
      t.preventDefault();
      var a = e(this),
        r = a.parents(".menu-list-wrapper"),
        s = r.find(".loadmore"),
        o = s.data("item") || 2,
        l = s.data("xs") || null,
        n = s.data("sm") || null,
        i = s.data("md") || null,
        d = s.data("lg") || null,
        c = s.data("xl") || null,
        m = r.find(".menu-list"),
        f = m.find(".menu-item.d-none").slice(0, o);
      if (l || n || i || d) {
        var p = e(window).width();
        c && p > 1199
          ? (f = m.find(".menu-item.d-none").slice(0, c))
          : d && p <= 1199 && p >= 992
          ? (f = m.find(".menu-item.d-none").slice(0, d))
          : i && p <= 991 && p >= 768
          ? (f = m.find(".menu-item.d-none").slice(0, i))
          : n && p <= 767 && p >= 576
          ? (f = m.find(".menu-item.d-none").slice(0, n))
          : l && p < 576 && (f = m.find(".menu-item.d-none").slice(0, l));
      }
      return (
        f.length
          ? (f.animate({ opacity: 0 }),
            f.promise().done(function () {
              f.removeClass("d-none"), f.show().animate({ opacity: 1 }, 1e3);
            }))
          : a.text("No more item to display"),
        !1
      );
    }),
    e.fn.owlCarousel)
  ) {
    function c(t) {
      var a = t.data("loop"),
        r = t.data("items"),
        s = t.data("margin"),
        o = (t.data("stage-padding"), t.data("autoplay")),
        l = t.data("autoplay-timeout"),
        n = t.data("smart-speed"),
        i = t.data("dots"),
        d = t.data("nav"),
        c = t.data("nav-speed"),
        m = t.data("r-x-small"),
        f = t.data("r-x-small-nav"),
        p = t.data("r-x-small-dots"),
        u = t.data("r-x-medium"),
        g = t.data("r-x-medium-nav"),
        y = t.data("r-x-medium-dots"),
        h = t.data("r-small"),
        v = t.data("r-small-nav"),
        T = t.data("r-small-dots"),
        w = t.data("r-medium"),
        b = t.data("r-medium-nav"),
        k = t.data("r-medium-dots"),
        C = t.data("r-large"),
        x = t.data("r-large-nav"),
        z = t.data("r-large-dots"),
        D = t.data("r-extra-large"),
        P = t.data("r-extra-large-nav"),
        S = t.data("r-extra-large-dots"),
        L = t.data("center"),
        _ = t.data("custom-nav") || "";
      t.addClass("owl-carousel");
      var H = t.owlCarousel({
        loop: !!a,
        items: r || 4,
        lazyLoad: !0,
        margin: s || 0,
        autoplay: !!o,
        autoplayTimeout: l || 1e3,
        smartSpeed: n || 250,
        dots: !!i,
        nav: !!d,
        navText: [
          '<i className="fas fa-chevron-left"></i>',
          '<i className="fas fa-chevron-right"></i>',
        ],
        navSpeed: !!c,
        center: !!L,
        responsiveClass: !0,
        responsive: {
          0: { items: m || 1, nav: !!f, dots: !!p },
          576: { items: u || 2, nav: !!g, dots: !!y },
          768: { items: h || 3, nav: !!v, dots: !!T },
          992: { items: w || 4, nav: !!b, dots: !!k },
          1200: { items: C || 5, nav: !!x, dots: !!z },
          1400: { items: D || 6, nav: !!P, dots: !!S },
        },
      });
      if (_) {
        d = e(_);
        var I = e(".rt-next", d),
          M = e(".rt-prev", d);
        I.on("click", function (e) {
          return e.preventDefault(), H.trigger("next.owl.carousel"), !1;
        }),
          M.on("click", function (e) {
            return e.preventDefault(), H.trigger("prev.owl.carousel"), !1;
          });
      }
    }
    e(".rc-carousel").each(function () {
      var t = e(this),
        a = e.extend({ trigger_start: "", trigger_end: "" }, t.data("options"));
      if (a.trigger_start || a.trigger_end) {
        e(window).on("resize load", function () {
          e(window).width() <= a.trigger_start
            ? (c(t), console.log("called", "create"))
            : t.owlCarousel("destroy").removeClass("owl-carousel");
        });
      } else c(t);
    });
  }
  e('[data-type="section-switch"], #dropdown > ul > li > a').on(
    "click",
    function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var t = e(this.hash);
        if (t.length > 0)
          return (
            (t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")),
            e("html,body").animate({ scrollTop: t.offset().top }, 1e3),
            !1
          );
      }
    }
  ),
    e(window).on("scroll", function () {
      if (
        (e(window).scrollTop() > 700
          ? e(".return-to-top").addClass("back-top")
          : e(".return-to-top").removeClass("back-top"),
        e("header").hasClass("sticky-fixed-after"))
      ) {
        var t = e("#sticky-placeholder"),
          a = e("#navbar-wrap").outerHeight(),
          r = e("#topbar-wrap").outerHeight() || 0,
          s = e("header");
        e(window).scrollTop() > r
          ? (s.addClass("sticky"), t.height(a))
          : (s.removeClass("sticky"), t.height(0));
      }
    }),
    e('a[href="#template-search"]').on("click", function (t) {
      t.preventDefault();
      var a = e("#template-search");
      return (
        a.addClass("open"),
        setTimeout(function () {
          a.find("input").focus();
        }, 600),
        !1
      );
    }),
    e("#template-search, #template-search button.close").on(
      "click keyup",
      function (t) {
        (t.target !== this &&
          "close" !== t.target.className &&
          27 !== t.keyCode) ||
          e(this).removeClass("open");
      }
    );
})(jQuery);
