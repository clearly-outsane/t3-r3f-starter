import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Google } from "~/icons";

const Header = () => {
  const { data } = useSession();

  const [mounted, setMounted] = useState(false);

  //? Hack because server won't match client if we conditionally render the dialog only on data.user - IDK why.
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  return (
    <>
      <div className="z-max absolute left-0 right-0 top-0 m-10 flex items-center text-white">
        <div className="flex flex-1">
          <div className="mr-auto">t3+r3f Starter</div>
        </div>
        <div className="flex flex-1">
          <div className="ml-auto">
            {data?.user && (
              <Avatar>
                <AvatarImage src={data?.user.image ?? undefined} alt="user" />
                <AvatarFallback className="bg-pink-400">
                  {data.user.name?.match(/\b(\w)/g)?.join("")}
                </AvatarFallback>
              </Avatar>
            )}
            {mounted && !data?.user && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"outline"}>Login</Button>
                </DialogTrigger>
                <DialogContent className="flex !w-auto flex-col items-center">
                  <DialogTitle className="mr-32 self-start">
                    Login to get started.
                  </DialogTitle>
                  <div className="flex items-center">
                    <Button variant={"outline"} size={"icon"}>
                      <Google className="h-5 w-5" />
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
