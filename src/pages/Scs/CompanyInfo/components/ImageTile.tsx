import React from 'react';
import CK1 from '../../../../assets/images/ck_1.png';
import CK2 from '../../../../assets/images/ck_2.png';
import CK3 from '../../../../assets/images/ck_3.png';
const ImageTile = () => {
    return (
        <div className="grid grid-cols-3 max-[1350px]:grid-cols-1 gap-4 mt-8 w-full">
            <div className="flex justify-center">
                <a href="/page/page31" target="_self">
                    <div className="relative duration-300 w-64 h-64 hover:scale-110 border-[14px] border-solid border-gray-500 hover:border-gray-100 rounded-full overflow-hidden">
                        <img className="absolute inset-0 w-full h-full object-cover transform scale-[1.05]" src={CK1} alt="ESS" />
                    </div>
                    <p className="text-center mt-2 text-white font-semibold text-xl pt-3">ESS</p>
                </a>
            </div>
            <div className="flex justify-center">
                <a href="/page/page38" target="_self">
                    <div className="relative duration-300 w-64 h-64 hover:scale-110 border-[14px] border-solid border-gray-500 hover:border-gray-100 rounded-full overflow-hidden">
                        <img className="absolute inset-0 w-full h-full object-cover transform scale-[1.05]" src={CK2} alt="ESS" />
                    </div>
                    <p className="text-center mt-2 text-white font-semibold text-xl pt-3">Battery</p>
                </a>
            </div>
            <div className="flex justify-center">
                <a href="/page/page36" target="_self">
                    <div className="relative duration-300 w-64 h-64 hover:scale-110 border-[14px] border-solid border-gray-500 hover:border-gray-100 rounded-full overflow-hidden">
                        <img className="absolute inset-0 w-full h-full object-cover transform scale-[1.05]" src={CK3} alt="ESS" />
                    </div>
                    <p className="text-center mt-2 text-white font-semibold text-xl pt-3">Data Center</p>
                </a>
            </div>
        </div>
    );
};

export default ImageTile;
