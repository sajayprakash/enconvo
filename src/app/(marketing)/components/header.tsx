import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  UserButton,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { Button } from "~/components/ui/button";

const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 bg-neutral-200 px-4">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <h1 className="text-2xl font-extrabold">
            <span className="text-red-500">En</span>Convo
          </h1>
        </div>
        <ClerkLoading>
          <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton showName />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
