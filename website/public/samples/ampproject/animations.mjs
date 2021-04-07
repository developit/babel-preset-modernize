function t(t, e, n) {
	return (t = t.width / t.height) > e.width / e.height !== n ? {
		width: e.height * t,
		height: e.height
	} : {
		width: e.width,
		height: e.width / t
	};
}

function e(e, n, i = getComputedStyle(e).getPropertyValue('object-fit')) {
	switch (e = {
		width: e.naturalWidth,
		height: e.naturalHeight
	}, i) {
		case 'cover':
			return t(e, n, !1);
		case 'contain':
			return t(e, n, !0);
		case 'fill':
			return n;
		case 'none':
			return e;
		case 'scale-down':
			return n = t(e, n, !0), {
				width: Math.min(e.width, n.width),
				height: Math.min(e.height, n.height)
			};
		case '':
		case null:
			return n;
		default:
			throw Error(`object-fit: ${i} not supported`);
	}
}

function n(t, e) {
	return t = (t.match(new RegExp('-?\\s*\\d+' + e)) || ['0'])[0].replace(' ', ''), parseFloat(t);
}

function i(t, e, i) {
	let r = t || '50% 50%',
		a = 0 === r.lastIndexOf('calc', 0) ? r.indexOf(')') + 1 : r.indexOf(' ');
	t = r.slice(0, a) || '', r = r.slice(a) || '', a = n(t, 'px');
	let o = n(r, 'px');
	return t = n(t, '%') / 100, {
		top: n(r, '%') / 100 * (e.height - i.height) + o,
		left: t * (e.width - i.width) + a
	};
}

function r(t) {
	return `cubic-bezier(${t.x1},${t.y1},${t.x2},${t.y2})`;
}

function a(t, e, n) {
	let i = n * n,
		r = i * n;
	return 3 * (n - 2 * i + r) * t + 3 * (i - r) * e + r;
}

function o({
	m: t,
	i: e,
	f: n,
	g: i,
	curve: r,
	styles: o,
	a: l,
	b: s
}) {
	let c = `${l}-crop`;
	l = `${l}-counterScale`, i = {
		x: i.width / n.width,
		y: i.height / n.height
	};
	let m = {
		x: 1,
		y: 1
	};
	return n = s ? i : m, s = s ? m : i, Object.assign(t.style, o, {
		willChange: 'transform',
		transformOrigin: 'top left',
		animationName: c,
		animationTimingFunction: 'linear',
		animationFillMode: 'forwards'
	}), Object.assign(e.style, o, {
		willChange: 'transform',
		transformOrigin: 'top left',
		animationName: l,
		animationTimingFunction: 'linear',
		animationFillMode: 'forwards'
	}),
	function ({
		I: t,
		w: e,
		curve: n,
		F: i,
		u: r
	}) {
		let o = '',
			l = '';
		for (let i = 0; 20 >= i; i++) {
			let s = .05 * i,
				c = a(n.y1, n.y2, s);
			s = 100 * a(n.x1, n.x2, s);
			let m = t.x;
			m += c * (e.x - m);
			let f = t.y;
			o += `${s}% {transform: scale(${m},${c=f+c*(e.y-f)});}`, l += `${s}% {transform: scale(${f=1/m},${1/c});}`;
		}
		return `@keyframes ${i} {${o}}@keyframes ${r} {${l}}`;
	}({
		I: n,
		w: s,
		curve: r,
		F: c,
		u: l
	});
}
let l = {
		x1: .42,
		y1: 0,
		x2: .58,
		y2: 1
	},
	s = 0;

function c(t, n, i) {
	let r = getComputedStyle(t);
	let a = r.getPropertyValue('object-fit');
	return {
		objectFit: a,
		objectPosition: r = r.getPropertyValue('object-position'),
		rect: n,
		c: i,
		j: t,
		h: e(t, n, a),
		s: n.width * n.height
	};
}
export function prepareImageAnimation({
	transitionContainer: t = document.body,
	styleContainer: n = document.head,
	srcImg: a,
	targetImg: m,
	srcImgRect: f = a.getBoundingClientRect(),
	srcCropRect: h = f,
	targetImgRect: u = m.getBoundingClientRect(),
	targetCropRect: p = u,
	curve: d = l,
	styles: g,
	keyframesNamespace: y = 'img-transform'
}) {
	a = c(a, f, h), u = (m = (p = c(m, u, p)).s > a.s) ? a : p, p = m ? p : a, a = function (t) {
		return s += 1, `${t}-${s}-`;
	}(y);
	let {
		J: $,
		m: x,
		i: w,
		v: b,
		A: v,
		j: C
	} = function (t, n = t.getBoundingClientRect(), r = n, a = getComputedStyle(t).getPropertyValue('object-position'), o = e(t, n)) {
		n = i(a, n, o), a = document.createElement('div');
		let l = document.createElement('div'),
			s = document.createElement('div'),
			c = document.createElement('div'),
			m = document.createElement('div');
		return (t = t.cloneNode(!0)).className = '', t.style.cssText = '', m.appendChild(t), c.appendChild(m), s.appendChild(c), l.appendChild(s), a.appendChild(l), Object.assign(l.style, {
			overflow: 'hidden',
			width: `${r.width}px`,
			height: `${r.height}px`
		}), Object.assign(m.style, {
			transform: `translate(${n.left}px,${n.top}px)`
		}), Object.assign(t.style, {
			display: 'block',
			width: `${o.width}px`,
			height: `${o.height}px`
		}), {
			J: a,
			m: l,
			i: s,
			v: c,
			A: m,
			j: t
		};
	}(p.j, p.rect, p.c, p.objectPosition, p.h);
	f = function t(e) {
		let {
			position: n
		} = getComputedStyle(e);
		return 'static' != n ? e : (n = e.offsetParent || e.parentElement) ? t(n) : e;
	}(t).getBoundingClientRect(), y = o({
		m: x,
		i: w,
		f: p.c,
		g: u.c,
		curve: d,
		styles: g,
		a,
		b: m
	}), f = function ({
		element: t,
		D: e,
		f: n,
		g: i,
		curve: a,
		styles: o,
		a: l,
		b: s
	}) {
		l = `${l}-translation`;
		let c = s ? i : n;
		return n = s ? n : i, i = c.left - n.left, c = c.top - n.top, Object.assign(t.style, o, {
			position: 'absolute',
			top: `${n.top-e.top}px`,
			left: `${n.left-e.left}px`,
			willChange: 'transform',
			animationName: l,
			animationTimingFunction: r(a),
			animationFillMode: 'forwards'
		}), `@keyframes ${l} {from {transform: translate(${i}px,${c}px);}to {transform: translate(0,0);}}`;
	}({
		element: $,
		D: f,
		f: p.c,
		g: u.c,
		curve: d,
		styles: g,
		a,
		b: m
	}), h = function ({
		element: t,
		f: e,
		g: n,
		l: a,
		o,
		C: l,
		H: s,
		curve: c,
		styles: m,
		a: f,
		b: h
	}) {
		return c = r(c), f = `${f}-object-position`, e = i(l, e, a), o = i(s, n, o), n = h ? o : e, h = h ? e : o, Object.assign(t.style, m, {
			willChange: 'transform',
			animationName: f,
			animationTimingFunction: c,
			animationFillMode: 'forwards'
		}), `@keyframes ${f} {from {transform: translate(${n.left}px,${n.top}px);}to {transform: translate(${h.left}px,${h.top}px);}}`;
	}({
		element: v,
		f: p.rect,
		g: u.rect,
		l: p.h,
		o: u.h,
		C: p.objectPosition,
		H: u.objectPosition,
		curve: d,
		styles: g,
		a,
		b: m
	});
	let j = function ({
		element: t,
		f: e,
		B: n,
		g: i,
		G: a,
		curve: o,
		styles: l,
		a: s,
		b: c
	}) {
		return s = `${s}-crop-position`, e = {
			top: e.top - n.top,
			left: e.left - n.left
		}, a = {
			top: i.top - a.top,
			left: i.left - a.left
		}, i = c ? a : e, c = c ? e : a, Object.assign(t.style, l, {
			willChange: 'transform',
			animationName: s,
			animationTimingFunction: r(o),
			animationFillMode: 'forwards'
		}), `@keyframes ${s} {from {transform: translate(${i.left}px,${i.top}px);}to {transform: translate(${c.left}px,${c.top}px);}}`;
	}({
		element: b,
		f: p.rect,
		B: p.c,
		g: u.rect,
		G: u.c,
		curve: d,
		styles: g,
		a,
		b: m
	});
	d = function ({
		element: t,
		l: e,
		o: n,
		curve: i,
		styles: a,
		a: o,
		b: l
	}) {
		o = `${o}-scale`;
		let s = {
			x: 1,
			y: 1
		};
		return n = {
			x: n.width / e.width,
			y: n.height / e.height
		}, e = l ? n : s, l = l ? s : n, Object.assign(t.style, a, {
			willChange: 'transform',
			transformOrigin: 'top left',
			animationName: o,
			animationTimingFunction: r(i),
			animationFillMode: 'forwards'
		}), `@keyframes ${o} {from {transform: scale(${e.x},${e.y});}to {transform: scale(${l.x},${l.y});}}`;
	}({
		element: C,
		l: p.h,
		o: u.h,
		curve: d,
		styles: g,
		a,
		b: m
	});
	let F = document.createElement('style');
	return F.textContent = y + f + h + j + d, {
		applyAnimation () {
			n.appendChild(F), t.appendChild($);
		},
		cleanupAnimation () {
			t.removeChild($), n.removeChild(F);
		}
	};
}
