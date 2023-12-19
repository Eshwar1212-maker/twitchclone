
import { UserButton } from "@clerk/nextjs"

function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1>Dashboard</h1>
      <UserButton 
      afterSignOutUrl="/"
      />
    </div>
  )
}


export default Home