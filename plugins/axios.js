export default function ({ $axios, error }) {
  // $axios.onRequest((config) => {
  //   console.log('Making request to ' + config.url)
  // })

  $axios.onError((err) => {
    // console.log(error.reponse.status)
    // const code = parseInt(error.response && error.response.status)
    // if (code === 400) {
    //   redirect('/400')
    // }
    if (err.toJSON().message === 'Network Error') {
      error({ statusCode: 500, message: 'Server error' })
    }
  })
}
