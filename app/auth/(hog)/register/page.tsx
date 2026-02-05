import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, KeySquareIcon, MailIcon, UserCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <Button variant={"ghost"} asChild>
            <Link href={"/"}>
              <ChevronLeft />
              Go Back
            </Link>
          </Button>

          {/* <Image src={"/icon.webp"} height={64} width={64} alt="povii-icon" /> */}
        </div>
        <CardTitle className="text-center text-2xl font-bold">
          Im Povii, and you are?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Label>Full Name *</Label>
        <InputGroup className="border border-foreground/20 shadow">
          <InputGroupInput placeholder="Full Name" />
          <InputGroupAddon>
            <UserCircle />
          </InputGroupAddon>
        </InputGroup>
        <Label>Email *</Label>
        <InputGroup className="border border-foreground/20 shadow">
          <InputGroupInput placeholder="email@email.com" />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
        <Label>Password *</Label>
        <InputGroup className="border border-foreground/20 shadow">
          <InputGroupInput placeholder="abcd123***" />
          <InputGroupAddon>
            <KeySquareIcon />
          </InputGroupAddon>
        </InputGroup>
      </CardContent>
      <CardFooter className="flex-col gap-4 border-t mt-6">
        <Button className="w-full" disabled>
          Sign up
        </Button>
        <Button className="w-full" variant={"ghost"} asChild>
          <Link href="/auth/login"> Have an account?</Link>
        </Button>
      </CardFooter>
    </>
  );
}
