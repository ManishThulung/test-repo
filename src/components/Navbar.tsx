import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { ContentWrapper } from "@/components/homepage/Styles";
import { Logo, DownArrow } from "@/assets";
import Button from "./Button";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navbarRef: any = useRef();

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stickNavbar = () => {
    let windowHeight = window?.scrollY;
    windowHeight > navbarRef.current.clientHeight
      ? setStickyClass("nav-is-scrolling")
      : setStickyClass("");
  };

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const responsiveMenuItems = (
    <ul className="flex flex-col gap-3">
      <li className="flex items-center gap-3">
        <Link href="/products">
          <span>Products</span>
        </Link>

        <div className="cursor-pointer">
          <DownArrow />
        </div>
      </li>
      <li className="flex items-center gap-3">
        <Link href="/pricing">
          <span>Pricing</span>
        </Link>
        <div className="cursor-pointer">
          <DownArrow />
        </div>
      </li>
      <li className="flex items-center gap-3 lg:flex-grow">
        <Link href="/solutions">
          <span>Solutions</span>
        </Link>
        <div className="cursor-pointer">
          <DownArrow />
        </div>
      </li>
      <li className="flex items-center gap-3">
        <Link href="/resources">
          <span>Resources</span>
        </Link>
        <div className="cursor-pointer">
          <DownArrow />
        </div>
      </li>
      <li className="flex items-center gap-3">
        <Link href="/company">
          <span>Company</span>
        </Link>
        <div className="cursor-pointer">
          <DownArrow />
        </div>
      </li>
      <li>
        <Link href="/demo">
          <span>Demo</span>
        </Link>
      </li>
    </ul>
  );

  const menuItems = (
    <div className="flex gap-2">
      <Button type="text">Login</Button>
      <Button type="primary" className="rounded-lg w-[130px] h-[44px]">
        Get Started
      </Button>
    </div>
  );

  return (
    <ContentWrapper
      ref={navbarRef}
      className={`sticky top-0 z-[99] ${stickyClass}`}
    >
      <nav className="flex justify-between items-center py-4 2xl:py-6  overflow-hidden">
        <div className="flex items-center gap-10">
          <Logo className="flex-shrink-0" />

          <ul className="hidden min-[1440px]:flex gap-10">
            <li className="flex items-center gap-3">
              <Link href="/products">
                <span>Products</span>
              </Link>
              <div className="cursor-pointer">
                <DownArrow />
              </div>
            </li>

            <li className="flex items-center gap-3">
              <Link href="/pricing">
                <span>Pricing</span>
              </Link>
              <div className="cursor-pointer">
                <DownArrow />
              </div>
            </li>
            <li className="flex items-center gap-3 lg:flex-grow">
              <Link href="/solutions">
                <span>Solutions</span>
              </Link>
              <div className="cursor-pointer">
                <DownArrow />
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Link href="/resources">
                <span>Resources</span>
              </Link>
              <div className="cursor-pointer">
                <DownArrow />
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Link href="/company">
                <span>Company</span>
              </Link>
              <div className="cursor-pointer">
                <DownArrow />
              </div>
            </li>
            <li>
              <Link href="/demo">
                <span>Demo</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden min-[1440px]:flex gap-2">
          <Button type="text">Login</Button>
          <Button type="primary" className="rounded-lg w-[130px] h-[44px] ">
            Get Started
          </Button>
        </div>
        <AiOutlineMenuUnfold
          size={32}
          className="min-[1440px]:hidden cursor-pointer"
          onClick={toggleDrawer}
          color="#101828"
        />
      </nav>

      <Drawer open={openDrawer} onClose={toggleDrawer} direction="left">
        <div className="p-4 text-base flex flex-col justify-between h-full">
          {responsiveMenuItems}
          {menuItems}
        </div>
      </Drawer>
    </ContentWrapper>
  );
};

export default Navbar;
