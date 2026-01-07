import Image from "next/image";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black px-4">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-16 px-8 sm:py-24 sm:px-12 md:py-32 md:px-16 bg-white dark:bg-black">
        {/* <Loading /> */}
      </main>
    </div>
  );
}
