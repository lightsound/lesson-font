import { ReactNode } from "react";
import localFont from "@next/font/local";

// バリアブルフォント
const font = localFont({
  src: "./font/MPLUS1-VariableFont_wght.ttf",
  weight: "100 900",
});

// 非バリアブルフォント
// const font = localFont({
//   src: [
//     { path: "./font/LINESeedJP_OTF_Eb.woff2", weight: "800 900" },
//     { path: "./font/LINESeedJP_OTF_Bd.woff2", weight: "500 700" },
//     { path: "./font/LINESeedJP_OTF_Rg.woff2", weight: "300 400" },
//     { path: "./font/LINESeedJP_OTF_Th.woff2", weight: "100 200" },
//   ],
// });

export const LocalFontProvider = ({ children }: { children: ReactNode }) => {
  return <div className={font.className}>{children}</div>;
};
