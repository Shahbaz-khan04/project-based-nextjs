import MyProfile from "./components/7FlexShrink";
import Pricing from "./components/8FlexBasis";
import FlexShortProperty from "./components/9FlexShort";
import Footer from "./components/10AutoMargins";

export default function Home() {
  return (
    <div>
      <MyProfile />
      <Pricing />
      <FlexShortProperty />
      <Footer />
    </div>
  );
}
