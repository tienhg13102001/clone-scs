import React from 'react';
import History from '../../../assets/images/history.png';
const HistoryBackground = () => {
  return (
    <div className="contents_wrap">
      <div className="contents">
        <div className="row mx-auto mb-0 bg-transparent">
          <div className="max-w-full mx-auto">
            <div className="mt-0 -ml-0">
              <div className="col d_col_6 t_col_6 m_col_6 pt-0 pl-0">
                <div className="bg-transparent">
                  <div className="word-break-all m-0">
                    {/* Image Section */}
                    <div className="img_ratio__2641195__">
                      <img
                        src={History}
                        alt="Product Image"
                        className="w-full"
                      />
                    </div>
                    {/* End of Image Section */}
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

export default HistoryBackground;
