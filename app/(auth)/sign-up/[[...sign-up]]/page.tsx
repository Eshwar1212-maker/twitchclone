import { SignUp } from "@clerk/nextjs";

function Page() {
  return (
    <div className="h-full flex items-center justify-center">
      <SignUp />
    </div>
  );
}

export default Page;
