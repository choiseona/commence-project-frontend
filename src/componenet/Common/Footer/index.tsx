import FooterTitle from "../FooterTitle";
import FooterText from "../FooterText";
import FooterLinks from "../FooterLinks";


function Footer() {
  return (
    <div title="footer" className="pt-[1.8rem] pb-[1rem] relative bg-white">
      <FooterTitle />
      <FooterText />
      <FooterLinks />
    </div>
  );
}

export default Footer;
