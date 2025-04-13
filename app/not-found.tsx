import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center  gap-6">
      <div className="text-center px-4 py-8 max-w-lg">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="mb-6">
          {"Sorry, we couldn't find the page you're looking for."}
        </p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
      <Image
        className="hidden md:flex"
        src={"./error.svg"}
        width={400}
        height={200}
        alt="error image"
      />
    </div>
  );
}
