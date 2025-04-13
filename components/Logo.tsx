import { Laptop2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="text-3xl tracking-tighter font-bold text-primary flex items-center gap-1 font-mono"
    >
      <Laptop2Icon /> Farhan
    </Link>
  );
}
