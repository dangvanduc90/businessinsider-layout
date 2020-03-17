$(document).ready(function () {

    // scroll fixed header
    $(window).scroll(function() {
        var w = $('[data-header]'),
            k = w.height() && w.height() > 54 ? 80 : 44;
        var E = $("[data-header-transitional]");
        $(window).scrollTop() >= k ? (!E.hasClass("transitional-masthead-stuck") && E.addClass("transitional-masthead-stuck"), !w.hasClass("transition-large-header") && w.addClass("transition-large-header")) : (E.hasClass("transitional-masthead-stuck") && E.removeClass("transitional-masthead-stuck"), w.hasClass("transition-large-header") && w.removeClass("transition-large-header"));
    });

    // mobile menu
    var r = $;
    var t, e = r("body"),
        n = r("[data-drawer]"),
        o = r("[data-drawer-unified]"),
        i = r("[data-drawer-toggle]"),
        a = r("[unified-data-drawer-toggle]"),
        s = r(".js-drawer-account-btn-not-logged-in"),
        c = r(".ins-drawer-button-area"),
        u = r("[data-editions-list-icon]"),
        l = r("[data-editions-list-dropdown]"),
        f = r("[data-editions-picker-select]"),
        d = r("[data-accounts-list-dropdown]"),
        p = document.querySelectorAll("[data-drawer-sub-drop-down]"),
        h = document.querySelectorAll("[data-drawer-sub-drop-down-icon] > [data-drawer-dropdown-button]");
    r(document).keyup((function(t) {
        "Escape" === t.key && o.removeClass("drawer--active")
    })), u.on("click", (function(e) {
        t(e)
    })), e.on("click", (function(t) {
        l.removeClass("is-editions-list-active"), r(t.target).closest(a).length ? (o.scrollTop(0), o.toggleClass("drawer--active"), p.forEach((function(t) {
            t.classList.remove("sub-drop-active")
        })), h.forEach((function(t) {
            t.classList.remove("drawer-dropdown-button--active")
        }))) : r(t.target).closest(o).length < 1 && o.removeClass("drawer--active")
    })), f.on("change", (function(t) {
        window.location.href = t.target.value
    })), i.on("click", (function() {
        n.scrollTop(0), n.toggleClass("drawer--active")
    })), s.on("click", (function() {
        o.removeClass("drawer--active")
    })), c.on("click", (function() {
        var t = r(this).closest("[data-drawer-list-item]").find("[data-drawer-sub-verticals]"),
            e = t.height() > 0 ? 0 : t.prop("scrollHeight");
        r(this).find(".drawer-dropdown-button").toggleClass("drawer-dropdown-button--active"), t.css("height", "".concat(e, "px"))
    })), h.forEach((function(t) {
        t.addEventListener("click", (function(e) {
            e.stopPropagation(), t.classList.toggle("drawer-dropdown-button--active"), t.parentElement.nextElementSibling.nextElementSibling.classList.toggle("sub-drop-active")
        }))
    })), t = function(t) {
        t && t.preventDefault(), t && t.stopPropagation(), d && d.removeClass("is-accounts-list-active")
    }
});