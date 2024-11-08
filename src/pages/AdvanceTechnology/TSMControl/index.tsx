import { useTranslation } from "react-i18next";

const TSMControl = () => {
    const {t} = useTranslation()
    return (
        <>
            <div className="text-center text-xl py-12 px-24 font-normal text-white  bg-[url('/img/du-beon-jjae-ka-te-go-ri-bae-gyeo1730097469.png')] mb-4">
                {t('aiTSMControlItem.titleSection1')}
            </div>
            <img src="/img/1.jpg1730098441.png" alt="" />
        </>
    );
};

export default TSMControl;
