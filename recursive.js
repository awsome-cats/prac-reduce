/**
 * 無限ループにならないように条件を設定する
 */
function multi(n) {
    if (n <= 1) {
        return 1
    }
    return n * multi(n-1)
}

console.log(multi(3))
