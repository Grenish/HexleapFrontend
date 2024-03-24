
import Sports from "./Sports/page";
import Spotlight from "./Spotlight/page";

export default function Home() {
  return (
    <div className="bg-[#292B32] dark:bg-[#F7F7F8] pb-10">
      <Sports />
      <Spotlight />
    </div>
  );
}
