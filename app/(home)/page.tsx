import { auth } from "@/auth";

const HomePage = async () => {
  const session = await auth();
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="container max-w-3xl">
        <div className="flex flex-col rounded-md bg-foreground/5">
          <div className="rounded-t-md bg-foreground/5 p-4 font-bold">
            Current Session
          </div>
          <pre className="whitespace-pre-wrap break-all px-4 py-6">
            {session
              ? JSON.stringify(session, null, 2)
              : "No Authenticated Session"}
          </pre>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
