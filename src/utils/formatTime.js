const formatTime = (now) => {
    let minutes = now.getMinutes()
    let hour = now.getHours()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    return hour + ":" + minutes
}

export default formatTime
