import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 0.8s steps(1,end) infinite",
      },
    },
  },
} satisfies Config;
