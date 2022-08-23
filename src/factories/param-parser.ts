export default {
  paramParser (url:string, param:object) {
    const params = Object.entries(param)
    url += '?'
    params.forEach((item) => {
      url += `${item[0]}=${item[1]}&`
    })
    return url[url.length - 1]
  },
}