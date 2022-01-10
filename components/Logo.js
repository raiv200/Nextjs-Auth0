import { TerminalIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="my-2 flex items-center space-x-1 text-indigo-400">
        {/* <TerminalIcon className="h-10 w-10 flex-shrink-0 mr-3" /> */}
        <span className="font-bold text-3xl font-sans tracking-normal whitespace-nowrap">
          Nextjs-Auth0
        </span>
      </a>
    </Link>
  );
};

export default Logo;
