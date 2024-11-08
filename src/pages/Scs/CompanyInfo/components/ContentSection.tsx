import ImageTile from './ImageTile';
import backgroundImage2 from '../../../../assets/images/company2.png';
import backgroundCompany from '../../../../assets/images/backgroundCompany.png';
import ImageSlide from './ImageSlide';
import backgroundImage from '../../../../assets/images/company1.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { IoMdHome } from 'react-icons/io';

const ContentSection = () => {
    const { t } = useTranslation();
    return (
        <div className='overflow-hidden'>
            <div
                className="bg-cover bg-top  h-[350px]  max-[1023px]:hidden flex items-center justify-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <motion.div
                    initial={{ translateY: -100, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="text-center flex flex-col gap-10 -mb-20">
                    <motion.h1
                        className="text-white  text-[50px] leading-[74px] h-[74px] mb-5"
                        role="heading"
                        aria-label="Company Info"
                    >
                        {t('scs.companyInfo.companyInfoTitle')}
                    </motion.h1>
                    <div className="flex justify-center space-x-2 text-white mt-2">
                        <IoMdHome color="white" className="text-white " size={20} />
                        <span><ChevronRight /></span>
                        <span>SCS</span>
                        <span><ChevronRight /></span>
                        <span>{t('scs.companyInfo.companyInfoTitle')}</span>
                    </div>
                </motion.div>
            </div>
            <div id="shgroup" className=" max-[1023px]:block hidden mt-[50px] bg-[#7bbbdc] h-10">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center h-full space-x-2 w-full text-white overflow-hidden whitespace-nowrap text-ellipsis"
                >
                    <ChevronLeft />
                    <div className='flex items-center justify-center w-full'>
                        <span className='mx-auto'>{t('scs.companyInfo.companyInfoTitle')}</span>
                    </div>
                </button>
            </div>
            <div className="w-full mx-auto ">
                {/* Row 1 */}
                <div className="flex flex-wrap justify-center mb-16">
                    <div className="w-full max-w-7xl px-4">
                        <div className="flex flex-col lg:flex-row  justify-between pt-[60px]">
                            <div className="w-full lg:w-1/2 p-4 max-md:p-0">
                                {/* Custom content */}
                                <div className="bg-transparent *:text-justify">
                                    <p className='text-[#4972B8] text-[20px] font-medium'>
                                        {t('scs.companyInfo.introductionTitle')}
                                    </p>
                                    <p className="text-left max-[600px]:text-xl text-4xl font-semibold leading-[57px] tracking-normal bg-transparent text-[#444444]">
                                        <p>{t('scs.companyInfo.workWithSCS')}</p>
                                        <span className="text-[#4972B8]">S</span>tandard
                                        <span className="text-[#4972B8]">C</span>ooling
                                        <span className="text-[#4972B8]">S</span>ystems
                                    </p>
                                    <p className="text-left font-medium max-[600px]:text-base text-xl text-[#444444]">
                                        {t('scs.companyInfo.companyDescription')}
                                    </p>
                                    <motion.p
                                        initial={{ translateX: 100, opacity: 0 }}
                                        whileInView={{ translateX: 0, opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        viewport={{ once: false }}
                                        className="text-left font-medium text-[15px] leading-[25.5px] text-[#444444]">
                                        {t('scs.companyInfo.longDescription')}
                                    </motion.p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 p-4">
                                {/* YouTube Video */}
                                <iframe
                                    className="w-full h-[475px]"
                                    src="https://www.youtube.com/embed/u2IHifmwmng?autoplay=1&mute=1&loop=1&playlists=u2IHifmwmng&controls=1&rel=0&showinfo=0&enablejsapi=1"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="SCS Inc. Introduction Video"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="bg-cover bg-center py-24 max-[600px]:px-2  px-72 mb-16" style={{ backgroundImage: `url(${backgroundImage2})` }}>
                    <div className="flex flex-col items-center">
                        <h2 className="text-center text-[45px] max-[600px]:text-xl pb-9 -mt-9 text-white  leading-[57px]">
                            <span className='text-[#5191FF]'>{t('scs.companyInfo.SCS')}</span>{t('scs.companyInfo.keyBusinessItems')}
                        </h2>
                        <ImageTile />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="w-full mx-auto mb-16">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full max-w-7xl px-4">
                            <div className="flex flex-col md:flex-row w-full">
                                <div className="md:w-1/2 p-4 w-full">
                                    <h2 className="text-[45px] max-[600px]:text-2xl max-[800px]:text-center pb-9 -mt-9 text-[#444444] leading-[57px]">
                                        {t('scs.companyInfo.newsStoriesTitle')}
                                    </h2>
                                    <ImageSlide />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className=" mx-auto mb-0 bg-transparent bg-center bg-repeat"
                    style={{
                        backgroundImage: `url(${backgroundCompany})`,
                    }}
                >
                    <div className="mx-auto max-w-[1200px] whitespace-nowrap   py-[150px]">
                        <div className="mt-0 ml-0">
                            <motion.div
                                initial={{ translateY: 100, opacity: 0 }}
                                whileInView={{ translateY: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: false }}
                                className="bg-transparent">
                                <div className="break-words pb-2 m-0 text-center">
                                    {/* Title */}
                                    <div
                                        className="text-white text-[24px] font-bold title__2608305__ aos-init aos-animate"
                                    >
                                        <p>{t('scs.companyInfo.growStatement')}</p>
                                    </div>
                                </div>
                                <div className=" text-center">
                                    {/* Long text */}
                                    <div className="text-white ">
                                        <div className="text-center mx-auto text-[18px] md:text-[30px] lg:text-[36px] whitespace-normal">
                                            <p className="text-[#3d7dff] text-center">{t('scs.companyInfo.advancementsTitle')}</p>
                                            <p className="mt-2">
                                                {t('scs.companyInfo.techDevelopment')},
                                                <br />
                                                {t('scs.companyInfo.paradigmShift')}
                                                <br />
                                                {t('scs.companyInfo.industries')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                            <motion.div
                                initial={{ translateY: 100, opacity: 0 }}
                                whileInView={{ translateY: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                viewport={{ once: false }}
                                className="break-words m-0 text-center">
                                {/* Button */}
                                <div
                                    className="h-[48px] border w-[174px] mx-auto mt-5 hover:bg-white hover:*:text-black duration-300"
                                >
                                    <a href="/page/page13" target="_self" className='text-white text-xl h-full flex items-center justify-center tracking-widest font-semibold'>
                                        Contact Us
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
