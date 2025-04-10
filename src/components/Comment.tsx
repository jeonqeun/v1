"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export default function Comment() {
  const commentRef = useRef<HTMLDivElement>(null);
  const hasMountedRef = useRef(false);

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const theme = isDark ? "github-dark" : "github-light";

  useEffect(() => {
    if (!commentRef.current || hasMountedRef.current) return;

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "jeonoeun/my-space");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", theme);
    script.crossOrigin = "anonymous";

    commentRef.current.appendChild(script);

    hasMountedRef.current = true;
  }, [theme]);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.utterances-frame"
    );
    iframe?.contentWindow?.postMessage(
      {
        type: "set-theme",
        theme,
      },
      "https://utteranc.es"
    );
  }, [theme]);

  return (
    <div className="p-4 w-full mx-auto mt-8">
      <div ref={commentRef} />
    </div>
  );
}
