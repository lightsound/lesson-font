import { ReactNode } from "react";
import { Caveat } from "@next/font/google";

// バリアブルフォント
const font = Caveat({
  weight: "variable",
});

// 非バリアブルフォント
// const font = Roboto({
//   weight: ["100", "300", "400", "700", "900"],
// });

export const GoogleFontProvider = ({ children }: { children: ReactNode }) => {
  return <div className={font.className}>{children}</div>;
};
