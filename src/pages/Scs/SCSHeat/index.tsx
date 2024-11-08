import React from 'react';
import { ChevronLeft, ChevronRight, House } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../../assets/images/company1.png';
import InfoSection from './components/InfoSection';

export default function SCSHeat() {
    const { t } = useTranslation();

    return (
        <div>
            <div
                className="bg-cover bg-center -mt-10 h-[350px] max-[1023px]:hidden flex items-center justify-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <div className="text-center">
                    <h2
                        className="text-white font-semibold text-[50px] leading-[74px] h-[74px] mb-5"
                        role="heading"
                        aria-label={t('scs.heatRAndD.title')}
                    >
                        {t('scs.heatRAndD.title')}
                    </h2>
                    <p className="mt-2 mb-4">ㅤ</p>
                    <div className="flex justify-center space-x-2 text-white mt-2">
                        <span className="home"><House /></span>
                        <span><ChevronRight /></span>
                        <span>{t('scs.companyInfo.SCSTitle')}</span>
                        <span><ChevronRight /></span>
                        <span>{t('scs.heatRAndD.title')}</span>
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
                        <span className='mx-auto'>{t('scs.heatRAndD.title')}</span>
                    </div>
                </button>
            </div>
            <InfoSection />
        </div>
    );
}
