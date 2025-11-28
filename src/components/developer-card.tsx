import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function DeveloperCard() {
  return (
    <Card className="overflow-hidden border-slate-200 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90">
      {/* Header: Mac Window Controls */}
      <CardHeader className="flex h-10 flex-row items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/80">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="font-mono text-xs text-slate-500 opacity-70">
          developer.tsx
        </div>
        <div className="w-10" />
      </CardHeader>

      {/* Content: Code Snippet */}
      <CardContent className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
        <div className="flex text-slate-800 dark:text-slate-300">
          <span className="mr-4 w-6 text-right text-slate-400 select-none">
            1
          </span>
          <span className="text-purple-600 dark:text-purple-400">const</span>
          <span className="ml-2 text-yellow-600 dark:text-yellow-200">
            garfield
          </span>
          <span className="mx-2 text-slate-400">=</span>
          <span className="text-purple-600 dark:text-purple-400">new</span>
          <span className="ml-2 text-yellow-600 dark:text-yellow-200">
            Developer
          </span>
          <span className="text-slate-500 dark:text-slate-300">
            ({`{`}
          </span>
        </div>

        <div className="flex text-slate-800 dark:text-slate-300">
          <span className="mr-4 w-6 text-right text-slate-400 select-none">
            2
          </span>
          <span className="ml-4 text-blue-600 dark:text-blue-300">name</span>
          <span className="text-slate-400">:</span>
          <span className="ml-2 text-green-600 dark:text-green-300">
            {"Rawipon Ponsarutwanit"}
          </span>
          <span className="text-slate-400">,</span>
        </div>

        <div className="flex text-slate-800 dark:text-slate-300">
          <span className="mr-4 w-6 text-right text-slate-400 select-none">
            3
          </span>
          <span className="ml-4 text-blue-600 dark:text-blue-300">role</span>
          <span className="text-slate-400">:</span>
          <span className="ml-2 text-green-600 dark:text-green-300">
            {["Full-Stack", "Mobile-Developer"].join(" | ")}
          </span>
          <span className="text-slate-400">,</span>
        </div>

        <div className="flex text-slate-800 dark:text-slate-300">
          <span className="mr-4 w-6 text-right text-slate-400 select-none">
            4
          </span>
          <span className="ml-4 text-blue-600 dark:text-blue-300">skills</span>
          <span className="text-slate-400">:</span>
          <span className="ml-2 text-green-600 dark:text-green-300">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Flutter",
            ].join(", ")}
          </span>
        </div>

        <div className="flex text-slate-800 dark:text-slate-300">
          <span className="mr-4 w-6 text-right text-slate-400 select-none">
            5
          </span>
          <span className="text-slate-500 dark:text-slate-300">
            {"}"})
          </span>
          <span className="text-slate-400">;</span>
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-amber-500 align-middle"></span>
        </div>
      </CardContent>
    </Card>
  );
}