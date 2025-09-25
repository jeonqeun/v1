"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export default function Comment() {
  const commentRef = useRef<HTMLDivElement>(null);
  const hasMountedRef = useRef(false);

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const theme = isDark ? "dark" : "light";

  useEffect(() => {
    if (!commentRef.current || hasMountedRef.current) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.setAttribute("data-repo", "jeonoeun/my-space");
    script.setAttribute("data-repo-id", "R_kgDOONnZlg");
    script.setAttribute("data-category", "Comments");
    script.setAttribute("data-category-id", "DIC_kwDOONnZls4Cqmr_");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", theme);
    script.setAttribute("data-lang", "ko");
    script.crossOrigin = "anonymous";

    commentRef.current.appendChild(script);

    hasMountedRef.current = true;
  }, [theme]);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme,
          },
        },
      },
      "https://giscus.app"
    );
  }, [theme]);

  return (
    <div>
      <div ref={commentRef} />
    </div>
  );
}
