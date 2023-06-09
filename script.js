/**
 * AnchorJS - v4.1.0 - 2017-09-20
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2017 Bryan Braun; Licensed MIT
 */
!function(A, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : (A.AnchorJS = e(),
    A.anchors = new A.AnchorJS)
}(this, function() {
    "use strict";
    return function(A) {
        function e(A) {
            A.icon = A.hasOwnProperty("icon") ? A.icon : "",
            A.visible = A.hasOwnProperty("visible") ? A.visible : "hover",
            A.placement = A.hasOwnProperty("placement") ? A.placement : "right",
            A.ariaLabel = A.hasOwnProperty("ariaLabel") ? A.ariaLabel : "Anchor",
            A.class = A.hasOwnProperty("class") ? A.class : "",
            A.truncate = A.hasOwnProperty("truncate") ? Math.floor(A.truncate) : 64
        }
        function t(A) {
            var e;
            if ("string" == typeof A || A instanceof String)
                e = [].slice.call(document.querySelectorAll(A));
            else {
                if (!(Array.isArray(A) || A instanceof NodeList))
                    throw new Error("The selector provided to AnchorJS was invalid.");
                e = [].slice.call(A)
            }
            return e
        }
        function i() {
            if (null === document.head.querySelector("style.anchorjs")) {
                var A, e = document.createElement("style");
                e.className = "anchorjs",
                e.appendChild(document.createTextNode("")),
                void 0 === (A = document.head.querySelector('[rel="stylesheet"], style')) ? document.head.appendChild(e) : document.head.insertBefore(e, A),
                e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }", e.sheet.cssRules.length),
                e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }", e.sheet.cssRules.length),
                e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }", e.sheet.cssRules.length),
                e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }', e.sheet.cssRules.length)
            }
        }
        this.options = A || {},
        this.elements = [],
        e(this.options),
        this.isTouchDevice = function() {
            return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
        }
        ,
        this.add = function(A) {
            var n, o, s, a, r, c, h, l, u, d, f, p = [];
            if (e(this.options),
            "touch" === (f = this.options.visible) && (f = this.isTouchDevice() ? "always" : "hover"),
            A || (A = "h2, h3, h4, h5, h6"),
            0 === (n = t(A)).length)
                return this;
            for (i(),
            o = document.querySelectorAll("[id]"),
            s = [].map.call(o, function(A) {
                return A.id
            }),
            r = 0; r < n.length; r++)
                if (this.hasAnchorJSLink(n[r]))
                    p.push(r);
                else {
                    if (n[r].hasAttribute("id"))
                        a = n[r].getAttribute("id");
                    else if (n[r].hasAttribute("data-anchor-id"))
                        a = n[r].getAttribute("data-anchor-id");
                    else {
                        u = l = this.urlify(n[r].textContent),
                        h = 0;
                        do {
                            void 0 !== c && (u = l + "-" + h),
                            c = s.indexOf(u),
                            h += 1
                        } while (-1 !== c);
                        c = void 0,
                        s.push(u),
                        n[r].setAttribute("id", u),
                        a = u
                    }
                    a.replace(/-/g, " "),
                    (d = document.createElement("a")).className = "anchorjs-link " + this.options.class,
                    d.href = "#" + a,
                    d.setAttribute("aria-label", this.options.ariaLabel),
                    d.setAttribute("data-anchorjs-icon", this.options.icon),
                    "always" === f && (d.style.opacity = "1"),
                    "" === this.options.icon && (d.style.font = "1em/1 anchorjs-icons",
                    "left" === this.options.placement && (d.style.lineHeight = "inherit")),
                    "left" === this.options.placement ? (d.style.position = "absolute",
                    d.style.marginLeft = "-1em",
                    d.style.paddingRight = "0.5em",
                    n[r].insertBefore(d, n[r].firstChild)) : (d.style.paddingLeft = "0.375em",
                    n[r].appendChild(d))
                }
            for (r = 0; r < p.length; r++)
                n.splice(p[r] - r, 1);
            return this.elements = this.elements.concat(n),
            this
        }
        ,
        this.remove = function(A) {
            for (var e, i, n = t(A), o = 0; o < n.length; o++)
                (i = n[o].querySelector(".anchorjs-link")) && (-1 !== (e = this.elements.indexOf(n[o])) && this.elements.splice(e, 1),
                n[o].removeChild(i));
            return this
        }
        ,
        this.removeAll = function() {
            this.remove(this.elements)
        }
        ,
        this.urlify = function(A) {
            var t = /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\]/g;
            return this.options.truncate || e(this.options),
            A.trim().replace(/\'/gi, "").replace(t, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase()
        }
        ,
        this.hasAnchorJSLink = function(A) {
            var e = A.firstChild && (" " + A.firstChild.className + " ").indexOf(" anchorjs-link ") > -1
              , t = A.lastChild && (" " + A.lastChild.className + " ").indexOf(" anchorjs-link ") > -1;
            return e || t || !1
        }
    }
});
