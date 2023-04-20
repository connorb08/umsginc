import { SignInAuthorizationParams, SignInOptions, SignInResponse } from "next-auth/react/types"
import parseUrl from "next-auth/utils/parse-url"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCsrfToken, getSession } from "next-auth/react";

export async function signIn(
  options?: SignInOptions,
  authorizationParams?: SignInAuthorizationParams
): Promise<SignInResponse | undefined> {

    const provider = "google"

  const { callbackUrl = window.location.href, redirect = true } = options ?? {}

  const baseUrl = parseUrl(process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL).origin

  const signInUrl = `${baseUrl}/${"callback"}/${provider}`

  const _signInUrl = `${signInUrl}?${new URLSearchParams(authorizationParams)}`

  const res = await fetch(_signInUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // @ts-expect-error
    body: new URLSearchParams({
      ...options,
      csrfToken: await getCsrfToken(),
      callbackUrl,
      json: true,
    }),
  })

  const data = await res.json()

  // TODO: Do not redirect for Credentials and Email providers by default in next major
  if (redirect) {
    const url = data.url ?? callbackUrl
    window.location.href = url
    // If url contains a hash, the browser does not reload the page. We reload manually
    if (url.includes("#")) window.location.reload()
    return
  }

  const error = new URL(data.url).searchParams.get("error")

  if (res.ok) {
    await getSession({ event: "storage" })
  }

  return {
    error,
    status: res.status,
    ok: res.ok,
    url: error ? null : data.url,
  } as any
}

export async function signIn_local(
    options?: SignInOptions,
    authorizationParams?: SignInAuthorizationParams
  ): Promise<SignInResponse | undefined> {
  
      const provider = "google"
  
    const { callbackUrl = window.location.href, redirect = true } = options ?? {}
  
    const baseUrl = new URL(window.location.href).origin
    
    // parseUrl(process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL).origin
  
    const signInUrl = `${baseUrl}/${"callback"}/${provider}`
  
    const _signInUrl = `${signInUrl}?${new URLSearchParams(authorizationParams)}`
  
    const res = await fetch(_signInUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // @ts-expect-error
      body: new URLSearchParams({
        ...options,
        csrfToken: await getCsrfToken(),
        callbackUrl,
        json: true,
      }),
    })
  
    const data = await res.json()
  
    // TODO: Do not redirect for Credentials and Email providers by default in next major
    if (redirect) {
      const url = data.url ?? callbackUrl
      window.location.href = url
      // If url contains a hash, the browser does not reload the page. We reload manually
      if (url.includes("#")) window.location.reload()
      return
    }
  
    const error = new URL(data.url).searchParams.get("error")
  
    if (res.ok) {
      await getSession({ event: "storage" })
    }
  
    return {
      error,
      status: res.status,
      ok: res.ok,
      url: error ? null : data.url,
    } as any
  }