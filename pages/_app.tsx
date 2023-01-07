import { AppProps } from "next/app";
import { GoogleFontProvider } from "../components/GoogleFontProvider";
import { LocalFontProvider } from "../components/LocalFontProvider";

const isGoogleFont = true;

export default function MyApp({ Component, pageProps }: AppProps) {
  const FontProvider = isGoogleFont ? GoogleFontProvider : LocalFontProvider;

  return (
    <FontProvider>
      <Component {...pageProps} />
    </FontProvider>
  );
}
