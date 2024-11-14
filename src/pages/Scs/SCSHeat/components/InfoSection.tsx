import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InfoSection = () => {
    const { t } = useTranslation();

    // Retrieve list items with fallback in case it isn't an array
    const listItems = t('scs.heatRAndD.listItems', { returnObjects: true });
    const itemsArray = Array.isArray(listItems) ? listItems : [];

    return (
        <div className="max-w-full mx-auto mb-0 bg-transparent">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-[1300px] px-2 bg-transparent py-12">
                    <div className="mb-4">
                        {/* Section Block */}
                        <div className="text-center my-2">
                            {/* First Divider */}
                            <span className="block h-[2px] bg-[#4972B8]"></span>
                        </div>
                    </div>

                    {/* Icon List Section */}
                    <motion.div

                        className="text_list text-base py-5">
                        <ul className="space-y-2">
                            {itemsArray.map((item, index) => (
                                <motion.li
                                    initial={{ translateX: 100, opacity: 0 }}
                                    whileInView={{ translateX: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 * index }}
                                    viewport={{ once: false }}
                                    key={index}
                                    className="flex items-start space-x-2"
                                    data-aos="fade-left"
                                    data-aos-delay={`${300 + index * 400}`}
                                    data-aos-duration={`${1000 + index * 500}`}
                                >
                                    <span className="w-1 h-1 bg-[#4972B8] rounded-full mt-2"></span>
                                    <p className={`text-xl  ${item.highlight ? 'text-[#4972B8] font-semibold max-w-[400px]' : 'text-[#444444] max-w-[480px]'}`}>
                                        {item.content}
                                    </p>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Second Divider */}
                    <div className="text-center my-2">
                        <span className="block h-[2px] bg-[#4972B8]"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
