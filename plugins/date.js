export default function ({ _ }, inject) {
  const today = new Date()
  const nowDate =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  inject('today', nowDate)
  inject('time', time)
}
