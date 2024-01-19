import FooterTitle from "../FooterTitle";
import FooterText from "../FooterText";
import FooterLinks from "../FooterLinks";
import DeveloperButton from "../DeveloperButton";

function Footer() {
  return (
    <div title="footer" className="pt-[1.8rem] pb-[1rem] relative">
      <DeveloperButton />
      <FooterTitle />
      <FooterText />
      <FooterLinks />
    </div>
  );
}

export default Footer;
