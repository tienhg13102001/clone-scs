import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col bg-[#111111] justify-center items-center text-white py-5">
      <div className="flex-1 max-lg:flex hidden gap-5 justify-center items-center text-center text-nowrap h-10">
        <Link to="/" className="text-xs/5">
          개인정보처리방침
        </Link>
        <div className="h-3 w-px bg-white" />
        <Link to="/" className="text-xs/5">
          이용약관
        </Link>
      </div>
      <div className="flex flex-col w-full max-w-[1500px] mx-auto p-[10px_20px_20px]">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <div className="flex flex-col mb-4 w-[238px] text-5">
              <img src="/img/logo-w.png" alt="" className="w-3/5" />
              <h1>Standard Cooling Systems</h1>
            </div>
            <div className="flex gap-1">
              <a target="_blank" href="#">
                <img alt="" src="/img/facebook.png" className="border" />
              </a>
              <a target="_blank" href="#">
                <img alt="" src="/img/instar.png" className="border" />
              </a>
              <a target="_blank" href="#">
                <img alt="" src="/img/x.png" className="border" />
              </a>
              <a target="_blank" href="#">
                <img alt="" src="/img/in.png" className="border" />
              </a>
              <a target="_blank" href="#">
                <img alt="" src="/img/youtube.png" className="border" />
              </a>
            </div>
          </div>
          <div className="text-[14px]/[17px]">
            <p className="uppercase text-[18px] leading-none mb-2">
              Contact Us
            </p>
            <div className="flex gap-1 items-center">
              <img src="/img/i_email.png" alt="" />
              <span>Andrew@scsai.biz</span>
            </div>
            <div className="flex gap-1 items-center">
              <img src="/img/i_tell.png" alt="" />
              <span>(408) 613-0919</span>
            </div>
            <div className="flex gap-1 items-center">
              <img src="/img/i_map.png" alt="" />
              <span>
                10th floor 1730 Minor Ave, <br />
                Seattle, WA 98101
              </span>
            </div>
          </div>
        </div>
        <div className="lg:border-t-2 border-white w-full lg:mt-[26px] lg:text-sm text-xs/[20px] pt-2 text-center">
          Copyright© 2024 SCS Global Company. All rights reserved. | Privacy
          Policy | Website Terms of Use | Code of Conduct | Media Kit <br />
          SCS Global Company collects personal information for its internal use.
          We do not share customer information with any third parties.
        </div>
      </div>
    </div>
  );
}

export default Footer;
