import Link from "next/link";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ModeToggle } from "@/components/mode-toggle"; // Import ModeToggle
import {
  IconHome,
  IconInfoCircle,
  IconHelpOctagon,
} from "@tabler/icons-react";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

export function NavigationBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <div className="group">
          <Link href="/">
            <IconHome className="h-12 w-12 text-neutral-500 dark:text-neutral-300" />
          </Link>
        </div>
      ),
      href: "/",
    },
    {
      title: "Quiz",
      icon: (
        <div className="group">
          <IconHelpOctagon className="h-12 w-12 text-neutral-500 dark:text-neutral-300" />
        </div>
      ),
      href: "/quiz",
    },
    {
      title: "About me",
      icon: (
        <div className="group">
          <IconInfoCircle className="h-12 w-12 text-neutral-500 dark:text-neutral-300" />
        </div>
      ),
      href: "/about-me",
    },
  ];

  return (
    <div className="fixed bottom-3 p-4 z-50">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={[
          ...links,
          {
            title: "Account",
            icon: (
              <div>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            ),
            href: "#",
          },
          {
            title: "Theme Toggle",  // Mode Toggle as an additional item
            icon: (
              <div>
                <ModeToggle />
              </div>
            ),
            href: "#",
          },
        ]}
      />
    </div>
  );
}
