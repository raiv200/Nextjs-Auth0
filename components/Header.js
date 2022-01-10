import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";

const Header = ({ userLoggedIn }) => {
  return (
    <header className="h-[90px] shadow-md shadow-indigo-500 bg-slate-900">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />
        <div className="flex px-5 py-2 justify-between items-center">
          {!userLoggedIn ? (
            <Button type="Sign In" url="/api/auth/login" />
          ) : (
            <div className="flex justify-center items-center space-x-4">
            <Link href="/members-only">
              <a className="text-2xl font-semibold text-indigo-200 mx-3">Members Only</a>
            </Link>
              <Button type="Logout" url="/api/auth/logout" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
