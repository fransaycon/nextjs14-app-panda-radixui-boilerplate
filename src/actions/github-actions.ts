"use server"

export interface GetUserResult {
  avatar_url: string
  bio: string
  name: string
}

export async function getUser(username: string): Promise<GetUserResult> {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()
  return data
}
