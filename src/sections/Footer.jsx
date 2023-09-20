import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base font-montserrat text-white-400 sm:max-w-sm leading-6">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <ul className="mt-8 flex gap-4">
            {socialMedia.map((social) => (
              <li
                key={social.alt}
                className="bg-white cursor-pointer p-2 rounded-full"
              >
                <a href="">
                  <img src={social.src} alt={social.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-1 justify-between xl:justify-evenly lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal"
                  >
                    <a href={"#"} className="text-white-400">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex text-white mt-16 justify-between">
        <p className="text-lg font-montserrat font-medium">
          &copy; Copyright. All rights reserved.
        </p>
        <p className="text-lg font-montserrat font-medium">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
