"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Dock, DockIcon } from "@/components/ui/dock";
import { socialLinks } from "@/constants/social-links";
import { cn } from "@/lib/utils";

// --- Custom Minimal Tooltip Components ---
const TooltipProvider = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex items-center">{children}</div>
);

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Type guard for displayName
      const type = child.type as { displayName?: string };
      if (type.displayName === "TooltipTrigger") {
        return React.cloneElement(child, {
          onMouseEnter: () => setIsVisible(true),
          onMouseLeave: () => setIsVisible(false),
        });
      }
      if (type.displayName === "TooltipContent") {
        return React.cloneElement(child, {
          isVisible,
        });
      }
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

const TooltipTrigger = ({
  children,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="flex h-full w-full items-center justify-center"
  >
    {children}
  </div>
);
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = ({
  children,
  isVisible,
}: {
  children: React.ReactNode;
  isVisible?: boolean;
}) => (
  <div
    className={cn(
      "pointer-events-none absolute -top-10 left-1/2 z-50 -translate-x-1/2 rounded-md bg-neutral-900 px-2 py-1 text-[10px] font-medium whitespace-nowrap text-white shadow-lg transition-all duration-200",
      isVisible
        ? "translate-y-0 scale-100 opacity-100"
        : "translate-y-2 scale-95 opacity-0",
    )}
  >
    {children}
    <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-neutral-900" />
  </div>
);
TooltipContent.displayName = "TooltipContent";

// --- Main Component ---
export function SocialDock() {
  return (
    <div className="flex items-center justify-center lg:justify-end">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="mt-0 border border-neutral-200/50 bg-white/60 shadow-sm backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-800/50"
          iconMagnification={60}
          iconDistance={100}
        >
          {socialLinks.map((item) => (
            <DockIcon key={item.label} className="bg-transparent">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
                      // ใช้ hover effect จาก socialLinks แต่ปรับให้แสดงผลดีขึ้น
                      "hover:bg-neutral-100 dark:hover:bg-neutral-700/50",
                      item.color, // class สี (เช่น hover:text-blue-500)
                    )}
                  >
                    <item.icon className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
