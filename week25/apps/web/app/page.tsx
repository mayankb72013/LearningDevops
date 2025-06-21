import { client } from '@repo/db/prismaClient'

export default async function Home() {
  const user = await client.user.findFirst();

  return(
    <div>
      {user?.username}
      {user?.username}
    </div>
  )
}