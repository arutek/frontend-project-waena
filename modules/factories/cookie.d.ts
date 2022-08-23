/* eslint-disable */
declare module '@/factories/cookie' {
  function getCookie(key:string):string
  function setCookie(key:string, val:string, expiryInSecond:number):void
  function delCookie(key:string):void
}
/* eslint-enable */