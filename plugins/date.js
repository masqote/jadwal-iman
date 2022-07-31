export default function ({ _ }, inject) {
  const today = new Date()
  const nowDate =
    today.getFullYear() +
    '-' +
    ('0' + (today.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + today.getDate()).slice(-2)
  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  inject('today', nowDate)
  inject('time', time)
}
