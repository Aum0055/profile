import { NavbarNext } from "@/components/tempage/navber";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="">
      <NavbarNext />
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="border max-w-[500px] w-[450px] flex flex-col items-center space-y-4 py-4 rounded-md shadow-md dark:shadow-slate-500	">
            <p className="text-3xl font-medium	">Page Not Found</p>
            <p>The page you are looking for could not be found.</p>
            <Link href='/app/profile'>
              <Button radius="sm" variant="shadow" >Return home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
