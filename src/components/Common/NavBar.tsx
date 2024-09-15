"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavBar() {
  const pathname = usePathname(); // 현재 URL 경로 가져오기
  return (
    <nav className="w-full h-[70px] px-[30px] flex flex-row items-center justify-between">
      <section className="flex flex-row items-center">
        <Link
          href="/"
          className="w-[105px] h-9 rounded-2xl bg-coral-100 dark:bg-dark-coral-100 flex items-center justify-center cursor-default"
        >
          <span className="text-coral-600 font-Pretendard font-semibold text-[18px] dark:text-dark-coral-600">
            eunji ^O^
          </span>
        </Link>

        {/* Blog 메뉴 */}
        <Link
          href="/blog"
          className={`font-Pretendard font-semibold text-[18px] ml-[50px] ${
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
          className={`font-Pretendard font-semibold text-[18px] ml-[50px] ${
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
