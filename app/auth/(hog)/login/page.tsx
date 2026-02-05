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
import { ChevronLeft, KeySquareIcon, MailIcon } from "lucide-react";
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
          Welcome Back
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
        <Button className="w-full" asChild>
          <Link href={"/app"}>Log In</Link>
        </Button>
        <Button className="w-full" variant={"ghost"} asChild>
          <Link href="/auth/register"> Create Account</Link>
        </Button>
      </CardFooter>
    </>
  );
}
