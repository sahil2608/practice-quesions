var srt = () => {
    var arr = [2, 3, 5, 67, 3, 4, 87]
    var big = arr[0]

    for (i = 0; i <= big; i++) {
        if (arr[i] > big) {
            big = arr[i]
        }
    }
    console.log(big)
}
srt();