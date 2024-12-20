import backgroundImage from '../../../assets/images/company1.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HistoryBackground from './components/HistoryBackground';
import { motion } from 'framer-motion';
import { IoMdHome } from 'react-icons/io';

export default function History() {
    const { t } = useTranslation();

    return (
        <div>
            <div
                className="bg-cover bg-top  h-[350px] max-[1023px]:hidden flex items-center justify-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <motion.div
                    initial={{ translateY: -100, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }} className="text-center flex flex-col -mb-20">
                    <h2
                        className="text-white font-semibold text-[50px] leading-[74px] h-[74px] mb-5"
                        role="heading"
                        aria-label={t('scs.history.history')}
                    >
                        {t('scs.history.history')}
                    </h2>
                    <p className="mt-2 mb-4">ㅤ</p>
                    <div className="flex justify-center space-x-2 text-white mt-2">
                        <IoMdHome color="white" className="text-white " size={20} />
                        <span><ChevronRight /></span>
                        <span>{t('scs.companyInfo.SCSTitle')}</span>
                        <span><ChevronRight /></span>
                        <span>{t('scs.history.history')}</span>
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
                        <span className='mx-auto'>{t('scs.history.history')}</span>
                    </div>
                </button>
            </div>
            <HistoryBackground />
        </div>
    );
}
