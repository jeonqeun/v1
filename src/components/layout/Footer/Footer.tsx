import Link from "next/link";
import logo from "../../../../public/images/logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-[#FAFAFA] pt-10 pb-16 dark:bg-[#050505]">
      <div className="mx-auto flex h-[60px] max-w-[1500px] flex-col items-center justify-center gap-5 px-4">
        <Link href="/">
          <div className="relative aspect-square w-6">
            <Image src={logo} alt="" fill className="object-cover grayscale" />
          </div>
        </Link>
        <div className="text-sm text-black/50 dark:text-white/30">
          © 2025 Jeongeun Lee. Built with Next.js, deployed on Vercel.
        </div>
      </div>
    </footer>
  );
}
