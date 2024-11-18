// import Footer from '@/components/Molecules/Footer'
import Header from '@/components/Molecules/Header'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useTranslation } from 'react-i18next'
import Banner from '../../assets/image/contact-banner.png'
import { ChevronRight } from 'lucide-react'
import { IoMdHome } from 'react-icons/io';
import Container from '@/components/products/Containers'
import MediaList from './components/MediaList'
import SearchBar from './components/SearchBar'
// import React from 'react'

function MediaRecord() {
  const { t } = useTranslation();
  return (
    <SidebarProvider>
      <main className='min-h-screen w-full'>
        <Header />
        <section style={{ backgroundImage: `url(${Banner})` }} className="bg-contain bg-no-repeat bg-fixed h-[300px] w-full md:h-[400px] lg:h-[470px]">
          <div className='flex flex-col items-center justify-center pt-[150px]'>
            <p className='text-white text-[50px] text-custom'>{t("media_record.main_path")}</p>
            <div className='flex gap-[15px] mt-[50px]'>
              <IoMdHome color='white' className='w-4 h-4 self-center' />
              <ChevronRight color='white' className='w-4 h-4 self-center' />
              <p className='capitalize text-[15px] text-white'>{t("media_record.path")}</p>
              <ChevronRight color='white' className='w-4 h-4 self-center' />
              <p className='text-[15px] text-white'>{t("media_record.main_path")}</p>
            </div>
          </div>
        </section>

        <section className='py-10'>
          <Container>
            <div className='flex flex-col justify-center items-center'>
              <MediaList />
              <SearchBar />
            </div>
          </Container>
        </section>
        {/* <Footer /> */}
      </main>
    </SidebarProvider>
  )
}

export default MediaRecord