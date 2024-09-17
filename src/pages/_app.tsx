import "@/styles/input.css";
import "@/styles/output.css";
import "../../public/assets/css/style.css";
import '../../public/assets/vendor/swiper/swiper-bundle.min.css';
import '../../public/assets/vendor/font-awesome/all.min.css';
import "../../public/assets/js/main.js"
import "../../public/assets/vendor/swiper/swiper-bundle.min.js";
// import "../../public/assets/vendor/fslightbox/fslightbox.js";
import type { AppProps } from "next/app";
import AppShell from "@/components/layouts/AppShell";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
