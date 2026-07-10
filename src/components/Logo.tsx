import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo-mark-dark.png"
        alt="JSK Corporation"
        width={475}
        height={192}
        className={`w-auto ${className}`}
        priority
      />
    </Link>
  );
}
