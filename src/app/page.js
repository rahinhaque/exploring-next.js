import Banner from "@/components/homepage/Banner";
import Stats from "@/components/homepage/Stats";
import TrendingApps from "@/components/homepage/TrendingApps";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner/>
      <Stats/>
      <TrendingApps/>
    </>
  );
}
