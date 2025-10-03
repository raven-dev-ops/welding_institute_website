import Header from "@layout/Header";
import Footer from "@layout/Footer";
import Hero from "@sections/Hero";
import Head from "next/head";

export default function Layout({
  children,
  pageTitle = "Crider's Institute of Welding Technology",
  showVideo = true,
  header = "Welder Training in Kansas City, MO and the Surrounding Areas",
  subtitle = "Locally Owned Since 2015 | Free Tours | Competitive Class Rates",
  bgImage = "/images/ciwt_photos/1-1920w.jpg",
  styles = "",
  cta = {
    href: "tel:8169924046",
    display: "(816) 992-4046",
  },
  heroSize = "default",
  noHero = false,
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 mt-[210px]  bg-white clear-both">
          {/* Hero Banner */}
          {noHero ? (
            <></>
          ) : (
            <Hero
              header={header}
              subtitle={subtitle}
              bgImage={bgImage}
              styles={`${
                heroSize === "sm" ? "pt-[160px]" : "pt-[300px]"
              } text-center ${styles}`}
              cta={cta}
            />
          )}
          {/*
          We don't constrain children here directly,
          so you have full flexibility on each page 
        */}
          {children}
        </main>
        <Footer showVideo={showVideo} />
      </div>
    </>
  );
}
