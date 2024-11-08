import { useState } from 'react';

const SearchBar = () => {
  const [searchCriteria, setSearchCriteria] = useState('검색 조건');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    //
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={searchCriteria}
        onChange={(e) => setSearchCriteria(e.target.value)}
        className="p-2 border border-gray-300 text-sm"
      >
        <option value="검색 조건">검색 조건</option>
        <option value="이미지 (썸네일)">이미지 (썸네일)</option>
        <option value="제목">제목</option>
        <option value="상세설명">상세설명</option>
      </select>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 text-sm w-60"
      />

      <button
        onClick={handleSearch}
        className="py-2 px-4 bg-[#555] text-white text-sm"
      >
        검색
      </button>
    </div>
  );
};

export default SearchBar;