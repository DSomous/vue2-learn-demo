import moment from 'moment'

function formatTime (obj) {
  const dstObj = {
    time: '', // String/Date, the time need to format. default '', means now.
    format: '' // String, the type of formated result display.
  }
  const options = Object.assign(dstObj, obj)
  let time = moment(options.time)
  if (options.format) {
    time = time.format(options.format)
  }
  return time
}

export default {
  moment: moment,
  formatTime: formatTime
}
