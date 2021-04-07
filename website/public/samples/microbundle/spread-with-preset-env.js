async function n() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
    return r.reduce((n, r) => n + r, 0)
}
export default async function() {
    return [await n(...arguments), await n(...arguments)]
}
