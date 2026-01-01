import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]  rounded-2xl"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            dpshd wphcwhcvvwpcvhspifh wfwfh fwihcv wi dwcc dwww difhff vobevoca
            dpwifpihficncso powihcvwofcwcnb cc vccivn ihifo ccjcpc djd ddj dis
            asi wdoihs chc hidc pcpchc hcqc hdc hd ch h p hc qp fcp dq d hffpf
            pd dpqdppqdh dphqdf
          </p>
          <p>
            ccpi c finf iwhnf pip npn pfn np nwqf nwfp n np ifnhpwn p;on pnf pwf
            nwn nf bnvb bsb l dfwic ponpwn ndn wfh wh nsnc sn lboifowc lw
            woobwovboib wfifiol nw fiowf ibi wfiwicnwnip ph i oib wippfhw nin
            iopnw i cwccw
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            cwsoucbsocb cpinwic pinwcipwi pcfhwn iwnic nwivcninvwnvin iniwn nvi
            niwni i ni ni i ni nip ni wnvi inw nigib g sg lrg bib guib biu biug
            buiobo go4h8guo uobgou bruog h8oh 8ogh8o hog hoin og go boul bog
            uiolg uoigbquo buog 9 ho8g goue4ghou bhegou bhouie guhg
            uohgou;ouie4h oufbe ouehfiuoaieufgef o8hfoufuo ef ouih auofbh aopif
            eo9f8heof hgoue ioguegilug4rigul h
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-20">
        <div className="border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY</b>
          <p>
            fe fwf wofefj jfo fn wn w fw f wf op; nfin ;n ;n;kfn ;fn ;n;w fp
            nopi;nwrovbqrbveqb
          </p>
        </div>
        <div className="border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE</b>
          <p>f wfw fnwp nfwf wfnpwnf fwfn wnfp nfp pfwpfg nwnf </p>
        </div>
        <div className="border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION</b>
          <p>
            sc cncf wf f nf nfnwnf nwfnein ele ge bg b bnglie bg lb eiogbe ipnen
            gi e gge
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
