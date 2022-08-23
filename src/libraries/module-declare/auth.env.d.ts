/* eslint-disable */
declare module '@/libraries/auth' {
  function middleware():ApiResPayload
  function signin(payload:object):ApiResPayload
  function signup(payload:object):ApiResPayload
}
/* eslint-enable */