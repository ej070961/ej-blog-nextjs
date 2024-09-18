"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from '../../../public/logo.svg';
function NavBar() {
  const pathname = usePathname(); // 현재 URL 경로 가져오기
  return (
    <nav className="fixed top-0 w-full bg-[#fefefe] dark:bg-[#171b1c] h-[70px] md:px-[30px] px-2 flex flex-row items-center justify-between shadow-md border-b-[1px] border-b-gray-400 dark:border-b-dark-gray-400">
      <section className="flex flex-row items-center">
        <Link
          href="/"
          className="cursor-pointer"
        >
          <Logo />
        </Link>

        {/* Blog 메뉴 */}
        <Link
          href="/blog"
          className={`font-Pretendard font-semibold md:{text-[18px] ml-[50px]} text-[16px] ml-[40px] ${
            pathname === "/blog"
              ? "text-gray-500 dark:text-dark-gray-500"
              : "text-gray-400 hover:text-gray-500 dark:text-dark-gray-400 dark:hover:text-dark-gray-500"
          }`}
        >
          Blog
        </Link>
        {/* About 메뉴 */}
        <Link
          href="/about"
          className={`font-Pretendard font-semibold md:{text-[18px] ml-[50px]} text-[16px] ml-[40px] ${
            pathname === "/about"
              ? "text-gray-500 dark:text-dark-gray-500"
              : "text-gray-400 hover:text-gray-500 dark:text-dark-gray-400 dark:hover:text-dark-gray-500"
          }`}
        >
          About
        </Link>
      </section>
      <section>
        <ModeToggle />
      </section>
    </nav>
  );
}

export default NavBar;
