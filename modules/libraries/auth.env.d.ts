/* eslint-disable */
declare module '@/libraries/auth' {
  function middleware():Promise<ApiResPayload>
  function signin(payload:object):Promise<ApiResPayload>
  function signup(payload:object):Promise<ApiResPayload>
}
/* eslint-enable */