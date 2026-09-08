"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function CopyrightYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year || "2024"}</>;
}

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <div className="flex flex-col items-center sm:items-start gap-1">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          ©{" "}
          <Suspense fallback={null}>
            <CopyrightYear />
          </Suspense>{" "}
          {config.author}. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Built with{" "}
          <Link
            href="https://github.com/Naresh-Khatri/3d-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            3D Portfolio
          </Link>{" "}
          by Naresh Khatri
        </p>
      </div>
      <SocialMediaButtons />
      <nav className="flex gap-4 sm:gap-6 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant={"link"}>{title}</Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;