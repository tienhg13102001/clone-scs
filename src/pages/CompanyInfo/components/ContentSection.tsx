import React from 'react';
import ImageTile from './ImageTile';
import backgroundImage2 from '../../../assets/images/company2.png';
import backgroundCompany from '../../../assets/images/backgroundCompany.png';
import ImageSlide from './ImageSlide';
import backgroundImage from '../../../assets/images/company1.png';
import { ChevronLeft, ChevronRight, House } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContentSection = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div
                className="bg-cover bg-center h-[270px] max-[1023px]:hidden flex items-center justify-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <div className="text-center">
                    <h2
                        className="text-white font-semibold text-[50px] leading-[74px] h-[74px] mb-5"
                        role="heading"
                        aria-label="Company Info"
                    >
                        {t('scs.companyInfo.companyInfoTitle')}
                    </h2>
                    <p className="mt-2 mb-4">ㅤ</p>
                    <div className="flex justify-center space-x-2 text-white mt-2">
                        <span className="home"><House /></span>
                        <span><ChevronRight /></span>
                        <span>SCS</span>
                        <span><ChevronRight /></span>
                        <span>{t('scs.companyInfo.companyInfoTitle')}</span>
                    </div>
                </div>
            </div>
            <div id="shgroup" className="relative max-[1023px]:block hidden right-0 left-0 top-0 bg-[#7bbbdc] h-10">
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
            <div className="w-full mx-auto mb-16">
                {/* Row 1 */}
                <div className="flex flex-wrap justify-center mb-16">
                    <div className="w-full max-w-7xl px-4">
                        <div className="flex flex-col md:flex-row justify-between pt-[60px]">
                            <div className="w-full md:w-1/2 p-4">
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
                                    <p className="text-left font-medium text-[15px] leading-[25.5px] text-[#444444]">
                                        {t('scs.companyInfo.longDescription')}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-4">
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
                        <h2 className="text-center text-[45px] pb-9 -mt-9 text-white font-semibold leading-[57px]">
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
                                    <h2 className="text-[45px] pb-9 -mt-9 text-[#444444] font-semibold leading-[57px]">
                                        {t('scs.companyInfo.newsStoriesTitle')}
                                    </h2>
                                    <ImageSlide />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="row row__2608355__ mx-auto mb-0 bg-transparent bg-center bg-repeat"
                    style={{
                        backgroundImage: `url(${backgroundCompany})`,
                    }}
                >
                    <div className="mx-auto max-w-[1000px] whitespace-nowrap  py-[150px]">
                        <div className="mt-0 ml-0">
                            <div className="col d_col_6 t_col_6 m_col_6 pt-0 pl-0">
                                <div className="bg-transparent">
                                    <div className="break-words pb-2 m-0 text-center">
                                        {/* Title */}
                                        <div
                                            className="text-white text-[24px] font-bold title__2608305__ aos-init aos-animate"
                                        >
                                            <p>{t('scs.companyInfo.growStatement')}</p>
                                        </div>
                                    </div>
                                    <div className="break-words m-0 text-center">
                                        {/* Long text */}
                                        <div className="text-white textarea__2608325__ aos-init aos-animate overflow-hidden">
                                            <div className="text-center mx-auto break-words text-[24px] md:text-[30px] lg:text-[36px]">
                                                <p className="text-[#3d7dff]">{t('scs.companyInfo.advancementsTitle')}</p>
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
                                    <div className="break-words m-0">
                                        {/* Blank content */}
                                        <span className="blank__2608335__"></span>
                                    </div>
                                    <div className="break-words m-0 text-center">
                                        {/* Button */}
                                        <div
                                            className="h-[48px] border w-[174px] mx-auto mt-5 hover:bg-white hover:*:text-black duration-300"
                                        >
                                            <a href="/page/page13" target="_self" className='text-white text-xl h-full flex items-center justify-center tracking-widest font-semibold'>
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
