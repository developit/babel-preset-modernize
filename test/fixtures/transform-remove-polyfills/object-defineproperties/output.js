function mod(n, t, e) {
  var r = e("5K7Z"),
      o = e("eUtF"),
      u = e("G8Mo"),
      i = Object.defineProperty;
  t.f = e("jmDH") ? Object.defineProperty : function (n, t, e) {
    if (r(n), t = u(t, !0), r(e), o) try {
      return i(n, t, e);
    } catch (c) {}
    if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
    return "value" in e && (n[t] = e.value), n;
  };
}
