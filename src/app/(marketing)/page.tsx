import { ClerkLoaded, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { ArrowRight, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const MarketingPage = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2 text-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">
          <span className="text-red-500">En</span>Convo
        </h1>

        <p>
          <ShieldCheckIcon className="inline-block" />
          Security is not an option, it&apos;s the default.
        </p>
      </div>
      <ClerkLoaded>
        <SignedIn>
          <Link href="/chat">
            <Button size={"lg"}>
              Start Chatting <ArrowRight />
            </Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button size={"lg"}>Sign In</Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </div>
  );
};

export default MarketingPage;
