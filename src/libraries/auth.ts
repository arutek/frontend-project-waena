import apiCall from './api-call'
import cookie from '../factories/cookie'
import { useNavigate } from '@solidjs/router'

const authUrl = `${import.meta.env.VITE_APP_API}/auth`

export default {
  async middleware () {
    let res
    const navigate = useNavigate()
    try {
      res = await apiCall.loggedGet(authUrl)
      if (res.errors) throw new Error(res.errors[0])
      const expiry = 30 * 60
      cookie.setCookie('accessToken', res.data, expiry)
      return res
    } catch (err:any) {
      cookie.delCookie('accessToken')
      navigate('/signin', {replace: true})
      return ({errors: [`${err.name}: ${err.message}`]})
    }
  },
  async signin (payload:object) {
    try {
      const clientIp = await apiCall.getIp()
      const newPayload = Object.assign(
        payload,
        {ip: clientIp},
      )
      const res = await apiCall.postData(`${authUrl}/signin`, newPayload)
      if (res.errors) throw new Error(res.errors[0])
      const expiry = 30 * 60
      cookie.setCookie('accessToken', res.data, expiry)
      return res
    } catch (err:any) {
      return ({errors: [`${err.name}: ${err.message}`]})
    }
  },
  async signup (payload:object) {
    try {
      const clientIp = await apiCall.getIp()
      const newPayload = Object.assign(
        payload,
        {ip: clientIp},
      )
      const res = await apiCall.postData(`${authUrl}/signup`, newPayload)
      if (res.errors) throw new Error(res.errors[0])
      return res
    } catch (err:any) {
      return ({errors: [`${err.name}: ${err.message}`]})
    }
  },
}