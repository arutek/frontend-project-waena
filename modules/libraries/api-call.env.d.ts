/* eslint-disable */
declare module '@/libraries/api-call' {
  function getIp():Promise<string>
  function signin(url:string, param?:object):Promise<ApiResPayload>
  function getData(url:string, param?:object):Promise<ApiResPayload>
  function postData(url:string, payload:Object):Promise<ApiResPayload>
  function loggedGet(url:string, param?:object):Promise<ApiResPayload>
  function loggedPost(url:string, payload:Object):Promise<ApiResPayload>
}
/* eslint-enable */