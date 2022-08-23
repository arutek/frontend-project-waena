export default {
  getCookie (key:string) {
    const cookieString = document.cookie
    const cookies = cookieString.split(';')
    const res = cookies.find((item) => {
      return item.split('=')[0] === key
    })
    if (res === undefined) return res
    return res.split('=')[1]
  },
  setCookie (key:string, val:string, expiryInSecond:number) {
    let date = new Date()
    const expiryInMilli = date.getTime() + (expiryInSecond * 1000)
    date.setTime(expiryInMilli)
    const expires = `expires=${date.toUTCString()}`
    document.cookie = `${key}=${val};${expires};SameSite=Lax`
  },
  delCookie (key:string) {
    const date = new Date()
    date.setTime(0)
    const expires = `expires=${date.toUTCString()}`
    document.cookie = `${key}=;${expires};SameSite=Lax`
  },
}