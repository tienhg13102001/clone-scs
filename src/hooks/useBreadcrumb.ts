import { useLocation } from "react-router-dom";

export const useBreadcrumb = () => {
  const location = useLocation();

  // Lấy đường dẫn hiện tại và tách thành các phần tử dựa vào "/"
  const pathnames = location.pathname.split("/").filter((x) => x);

  return {pathnames};
};

