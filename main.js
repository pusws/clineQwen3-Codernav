document.addEventListener("DOMContentLoaded", function () {
	"use strict";

	var navLinks = Array.prototype.slice.call(document.querySelectorAll("nav a"));
	var themeToggle = document.getElementById("themeToggle");
	var cards = Array.prototype.slice.call(document.querySelectorAll(".link-card"));

	// 隐藏真正空的卡片
	for (var i = 0; i < cards.length; i++) {
		var card = cards[i];
		var a = card.querySelector("a");
		var h3 = card.querySelector("h3");
		var hasValidHref = a && a.getAttribute("href") && a.getAttribute("href").trim() !== "";
		var hasTitle = h3 && h3.textContent && h3.textContent.trim() !== "";
		if (!hasValidHref && !hasTitle) {
			if (card.classList) card.classList.add("hidden");
			else card.className += " hidden";
		}
	}

	// 主题切换：读写 localStorage，并改变 html[data-theme]
	function applyTheme(theme) {
		document.documentElement.setAttribute("data-theme", theme);
		if (!themeToggle) return;
		if (theme === "light") themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
		else themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
		try {
			localStorage.setItem("webnav-theme", theme);
		} catch (e) {
			/* ignore storage errors */
		}
	}

	if (themeToggle) {
		var saved = null;
		try {
			saved = localStorage.getItem("webnav-theme");
		} catch (e) {
			saved = null;
		}
		if (!saved) {
			if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) saved = "light";
			else saved = "dark";
		}
		applyTheme(saved);

		themeToggle.addEventListener("click", function () {
			var cur = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
			applyTheme(cur);
		});
	}

	// 点击导航：平滑滚动并设置 active 与地址栏
	for (var j = 0; j < navLinks.length; j++) {
		(function (link) {
			link.addEventListener("click", function (e) {
				e.preventDefault();
				var hash = link.getAttribute("href");
				if (!hash) return;
				var target = document.querySelector(hash);
				if (target) {
					try {
						target.scrollIntoView({ behavior: "smooth", block: "start" });
					} catch (err) {
						// 某些旧环境不支持 behavior: "smooth"
						target.scrollIntoView();
					}
					try {
						history.pushState(null, "", hash);
					} catch (errPush) {
						/* ignore */
					}
					for (var k = 0; k < navLinks.length; k++) navLinks[k].classList.remove("active");
					if (link.classList) link.classList.add("active");
					else link.className += " active";
				}
			});
		})(navLinks[j]);
	}

	function handleHashChange() {
		var hash = window.location.hash;
		if (hash) {
			var target = document.querySelector(hash);
			if (target) {
				try {
					target.scrollIntoView({ behavior: "smooth", block: "start" });
				} catch (err) {
					target.scrollIntoView();
				}
				for (var m = 0; m < navLinks.length; m++) {
					navLinks[m].classList.remove("active");
				}
				var selector = 'nav a[href="' + hash + '"]';
				var activeLink = document.querySelector(selector);
				if (activeLink) {
					if (activeLink.classList) activeLink.classList.add("active");
					else activeLink.className += " active";
				}
			}
		} else {
			for (var n = 0; n < navLinks.length; n++) navLinks[n].classList.remove("active");
			if (navLinks.length > 0) {
				if (navLinks[0].classList) navLinks[0].classList.add("active");
				else navLinks[0].className += " active";
			}
		}
	}

	window.addEventListener("hashchange", handleHashChange);
	handleHashChange();

	// 快捷键：按 "t" 切换主题（避免占用常用键）
	document.addEventListener("keydown", function (e) {
		if (!e || !e.key) return;
		if (e.key && e.key.toLowerCase && e.key.toLowerCase() === "t") {
			var activeTag = document.activeElement && document.activeElement.tagName;
			if (activeTag !== "INPUT" && activeTag !== "TEXTAREA") {
				var cur2 = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
				applyTheme(cur2);
			}
		}
	});
});
