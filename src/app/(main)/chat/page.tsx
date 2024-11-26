import { currentUser } from "@clerk/nextjs/server";
import { Textarea } from "~/components/ui/textarea";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import Image from "next/image";
import { ClerkLoaded } from "@clerk/nextjs";

const ChatHomePage = async () => {
  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;

  return (
    <div>
      <h1>Welcome to the chat room: {user?.firstName}</h1>
      <ScrollArea className="rounded-md border p-4 md:h-[600px] md:w-[750px]">
        <ClerkLoaded>
          <div>
            <Skeleton className="mb-2 ml-4 h-12 w-48" />
            <span>
              <Image
                src={user.imageUrl}
                alt="Profile Picture"
                width={32}
                height={32}
                className="mr-2 inline-block rounded-full"
              />
              {user.username}
            </span>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col">
              <Skeleton className="mb-2 ml-4 h-12 w-48" />
              <span className="text-end">
                {"Sajay"}
                <Image
                  src={user.imageUrl}
                  alt="Profile Picture"
                  width={32}
                  height={32}
                  className="ml-2 inline-block rounded-full"
                />
              </span>
            </div>
          </div>
          <div>
            <Skeleton className="mb-2 ml-4 h-12 w-48" />
            <span>
              <Image
                src={user.imageUrl}
                alt="Profile Picture"
                width={32}
                height={32}
                className="mr-2 inline-block rounded-full"
              />
              {user.username}
            </span>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col">
              <Skeleton className="mb-2 ml-4 h-12 w-48" />
              <span className="text-end">
                {"Sajay"}
                <Image
                  src={user.imageUrl}
                  alt="Profile Picture"
                  width={32}
                  height={32}
                  className="ml-2 inline-block rounded-full"
                />
              </span>
            </div>
          </div>
          <div>
            <Skeleton className="mb-2 ml-4 h-12 w-48" />
            <span>
              <Image
                src={user.imageUrl}
                alt="Profile Picture"
                width={32}
                height={32}
                className="mr-2 inline-block rounded-full"
              />
              {user.username}
            </span>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col">
              <Skeleton className="mb-2 ml-4 h-12 w-48" />
              <span className="text-end">
                {"Sajay"}
                <Image
                  src={user.imageUrl}
                  alt="Profile Picture"
                  width={32}
                  height={32}
                  className="ml-2 inline-block rounded-full"
                />
              </span>
            </div>
          </div>
          <div>
            <Skeleton className="mb-2 ml-4 h-12 w-48" />
            <span>
              <Image
                src={user.imageUrl}
                alt="Profile Picture"
                width={32}
                height={32}
                className="mr-2 inline-block rounded-full"
              />
              {user.username}
            </span>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col">
              <Skeleton className="mb-2 ml-4 h-12 w-48" />
              <span className="text-end">
                {"Sajay"}
                <Image
                  src={user.imageUrl}
                  alt="Profile Picture"
                  width={32}
                  height={32}
                  className="ml-2 inline-block rounded-full"
                />
              </span>
            </div>
          </div>
          <div>
            <Skeleton className="mb-2 ml-4 h-12 w-48" />
            <span>
              <Image
                src={user.imageUrl}
                alt="Profile Picture"
                width={32}
                height={32}
                className="mr-2 inline-block rounded-full"
              />
              {user.username}
            </span>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col">
              <Skeleton className="mb-2 ml-4 h-12 w-48" />
              <span className="text-end">
                {"Sajay"}
                <Image
                  src={user.imageUrl}
                  alt="Profile Picture"
                  width={32}
                  height={32}
                  className="ml-2 inline-block rounded-full"
                />
              </span>
            </div>
          </div>
        </ClerkLoaded>
      </ScrollArea>
      <Textarea className="mt-4 w-full" placeholder="Enter your message" />
      <Button className="mt-4">Send</Button>
    </div>
  );
};

export default ChatHomePage;
