import { SignIn } from "@clerk/nextjs";
 
function Page() {
    return (
      <div className="h-full flex items-center justify-center">
        <SignIn />
      </div>
    );
    }
export default Page