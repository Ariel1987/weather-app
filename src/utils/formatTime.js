const formatTime = (time) => {
    const now = new Date(time)
    let minutes = now.getMinutes()
    let hour = now.getHours()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    const ret = hour + ":" + minutes
    return ret
}

export default formatTime
