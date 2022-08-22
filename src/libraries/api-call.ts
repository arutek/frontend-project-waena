import cookie from '../factories/cookie'
import paramChecker from '../factories/paramChecker'

export default {
  async getIp () {
    try {
      const res = fetch('https://api64.ipify.org')
      const resBody = (await res).text()
      return resBody
    } catch {
      return 'Failed to fetch IP'
    }
  },
  async getData (url:string, param?:object) {
    if (param) {
      url = paramChecker.paramChecker(url, param)
    }
    try {
      const res = await fetch(url)
      const resBody = await res.json()
      if (!res.ok) throw resBody
      return resBody
    } catch (err) {
      return err
    }
  },
  async loggedGet (url:string, param?:object) {
    if (param) {
      url = paramChecker.paramChecker(url, param)
    }
    try {
      const token = cookie.getCookie('accessToken')
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      const resBody = await res.json()
      if (!res.ok) throw resBody
      return resBody
    } catch (err) {
      return err
    }
  },
  async postData (url:string, payload:Object) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
      })
      const resBody = await res.json()
      if (!res.ok) throw resBody
      return resBody
    } catch (err) {
      return err
    }
  },
  async loggedPost (url:string, payload:Object) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
      })
      const resBody = await res.json()
      if (!res.ok) throw resBody
      return resBody
    } catch (err) {
      return err
    }
  },
}