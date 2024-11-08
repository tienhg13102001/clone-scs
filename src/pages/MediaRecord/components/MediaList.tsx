import { useState } from "react";
import Pagination from "./Pagination";
import CardMedia from "./CardMedia";
import { useTranslation } from "react-i18next";
import RecordImg1 from "../../../assets/image/record1.png"
import RecordImg2 from "../../../assets/image/record2.png"
import RecordImg3 from "../../../assets/image/record3.jpg"

const BLOGS_PER_PAGE = 9;



function MediaList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { t } = useTranslation();

  const BLogsList = [
    {
      title: t("media_record.record1.title"),
      date: t("media_record.record1.date"),
      image: RecordImg1,
      url: "#"
    },
    {
      title: t("media_record.record2.title"),
      date: t("media_record.record2.date"),
      image: RecordImg2,
      url: "#"
    },
    {
      title: t("media_record.record3.title"),
      date: t("media_record.record3.date"),
      image: RecordImg3,
      url: "#"
    }
  ]

  const totalBlogs = BLogsList.length;
  const lastBlogIndex = currentPage * BLOGS_PER_PAGE;
  const firstBlogIndex = lastBlogIndex - BLOGS_PER_PAGE;
  return (
    <div className="pb-10">
      <hr className='border-t-[0.5px] border-[#444] w-full' />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 pt-10">
        {BLogsList.slice(firstBlogIndex, lastBlogIndex).map((blog) => {
          if (!blog) return null;
          return (
            <CardMedia
              key={blog.title}
              title={blog.title || ""}
              url={blog.url || ""}
              image={blog.image || ""}
              date={blog.date || ""}
            />
          );
        })}
      </div>
      <hr className='border-t-[0.5px] border-[#444] w-full' />
      <Pagination
        setCurrentPage={setCurrentPage}
        totalBlogs={totalBlogs}
        blogPerPage={BLOGS_PER_PAGE}
        currentPage={currentPage}
      />
    </div>
  );
}

export default MediaList;
