import Banner from '../../assets/image/ess-banner.png'
import BenefitImg from '../../assets/image/cooling1.png'
import ManagementImg from '../../assets/image/cooling2.png'
import { ChevronRight, House } from 'lucide-react'
import Container from '../../components/products/Containers'
import { useTranslation } from 'react-i18next'


function DataCoolingCenterPage() {
  const { t } = useTranslation();
  return (
    <main className='min-h-screen w-full'>
      <section style={{ backgroundImage: `url(${Banner})` }} className="bg-contain bg-no-repeat h-[300px] w-full md:h-[400px] lg:h-[470px]">
        <div className='flex flex-col items-center justify-center pt-[150px]'>
          <p className='text-white text-[50px] uppercase text-custom'>{t("products.data_center_cooling.main_path")}</p>
          <div className='flex gap-[15px] mt-[50px]'>
            <House color='white' className='w-4 h-4 self-center' />
            <ChevronRight color='white' className='w-4 h-4 self-center' />
            <p className='capitalize text-[15px] text-white'>{t("products.data_center_cooling.path")}</p>
            <ChevronRight color='white' className='w-4 h-4 self-center' />
            <p className='uppercase text-[15px] text-white'>{t("products.data_center_cooling.main_path")}</p>
          </div>
        </div>
      </section>

      <section className='mt-[80px]'>
        <Container>
          <h1 className='text-[#444] text-[40px] flex flex-col'> <span className='text-[#4972B8]'>{t("products.data_center_cooling.title")}</span>{t("products.data_center_cooling.title2")}</h1>
          <hr className='border-t-2 border-[#4972B8] my-5' />
          <div className='flex gap-5 my-10'>
            <ChevronRight color='#4972B8' className='w-[45px] h-[45px] self-center' />
            <h3 className='text-[#444] text-[30px]'>{t("products.data_center_cooling.subtitle")}</h3>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 space-x-[25px]'>
            <div className=''>
              <div className='border border-[#4972B8] w-full'>
                <p className='text-black text-2xl text-center py-[10px] px-28'>{t("products.data_center_cooling.item1.name")}</p>
              </div>
              <p className='text-[#444] text-lg mt-7'>{t("products.data_center_cooling.item1.description")}</p>
              <p className='text-[#444] text-lg'>{t("products.data_center_cooling.item1.description2")}</p>
            </div>

            <div className='space-y-7'>
              <div className='border border-[#4972B8]'>
                <p className='text-black text-2xl text-center py-[10px] px-12'>{t("products.data_center_cooling.item2.name")}</p>
              </div>
              <p className='text-[#444] text-lg'>{t("products.data_center_cooling.item2.description")}</p>
            </div>

            <div className='space-y-7'>
              <div className='border border-[#4972B8]'>
                <p className='text-black text-2xl text-center py-[10px] px-12'>{t("products.data_center_cooling.item3.name")}</p>
              </div>
              <p className='text-[#444] text-lg'>{t("products.data_center_cooling.item3.description")}</p>
            </div>
          </div>
          <hr className='border-t-2 border-[#4972B8] my-5' />
        </Container>
      </section>

      <section>
        <Container>
          <div className='flex gap-5 my-10'>
            <ChevronRight color='#4972B8' className='w-[45px] h-[45px] self-center' />
            <h3 className='text-[#444] text-[30px]'>{t("products.data_center_cooling.subtitle2")}</h3>
          </div>
          <img src={BenefitImg} className='w-[1245px] h-[758px]' />
          <hr className='border-t-2 border-[#4972B8] my-5' />
        </Container>
      </section>

      <section>
        <Container>
          <div className='flex gap-5 my-10'>
            <ChevronRight color='#4972B8' className='w-[45px] h-[45px] self-center' />
            <h3 className='text-[#444] text-[30px]'>{t("products.data_center_cooling.subtitle3")}</h3>
          </div>
          <img src={ManagementImg} className='w-[1245px] h-[758px]' />
          <hr className='border-t-2 border-[#4972B8] my-5' />
        </Container>
      </section>

      <section className="">
        <Container>
          <div className='flex gap-5 my-10'>
            <ChevronRight color='#4972B8' className='w-[45px] h-[45px] self-center' />
            <h3 className='text-[#444] text-[30px] text-start'>{t("products.data_center_cooling.subtitle4")}</h3>
          </div>
        </Container>
      </section>

      <section className='overflow-x-auto w-full max-w-7xl mx-auto p-4'>
        <table className="min-w-full break-words text-center">
          <thead>
            <tr>
              <th className="bg-[#8db3e2] border border-white text-white py-4 px-6 font-semibold text-lg" colSpan={1}></th>
              <th className="bg-[#548dd4] border border-white text-white py-4 px-8 font-semibold text-lg uppercase" colSpan={1}>{t("products.data_center_cooling.table.col_span1")}</th>
              <th className="bg-[#548dd4] border border-white text-white py-4 px-16 font-semibold text-lg uppercase" colSpan={1}>{t("products.data_center_cooling.table.col_span2")}</th>
            </tr>
          </thead>
          <tbody>
            {/* Hardware Section */}
            <tr>
              <td rowSpan={11} className="bg-[#a5a5a5] border border-white text-white p-4 font-semibold uppercase">{t("products.data_center_cooling.table.row_span1")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item1.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item1.type")}</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item2.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item2.type")}</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item3.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item3.type")}</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item4.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item4.type")}</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item5.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item5.type")}</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item6.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item6.type")}</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item7.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item7.type")}</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item8.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item8.type")}</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item9.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item9.type")}</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item10.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item10.type")}</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item11.name")}</td>
              <td className="border p-4 font-semibold">{t("products.data_center_cooling.table.hardware_section.item11.type")}</td>
            </tr>
          </tbody>
        </table>
      </section>

    </main>
  )
}

export default DataCoolingCenterPage