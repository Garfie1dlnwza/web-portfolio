import React, { useState } from "react";

export const TooltipProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <>{children}</>;

export const Tooltip = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export const TooltipTrigger = ({
  asChild,
  children,
}: {
  asChild?: boolean;
  children: React.ReactNode;
}) => <>{children}</>;

export const TooltipContent = ({ children }: { children: React.ReactNode }) => (
  <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white shadow-lg">
    {children}
  </span>
);
