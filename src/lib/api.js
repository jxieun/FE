// src/lib/api.js

import axios from 'axios';
/**
 * 백엔드 API에 주식 검색을 요청합니다.
 * @param {string} query - 사용자가 입력한 검색어
 * @returns {Promise<Array<Object>>} - 검색된 주식 객체 배열 (예: [{ stockCode: "005930", stockName: "삼성전자" }, ...])
 */
export const searchStocksByQuery = async (query) => {
    try {
        // AI 서버의 Fallback 검색 API 사용 (/ai/api/stock/search)
        const response = await fetch(`/ai/api/stock/search?query=${encodeURIComponent(query)}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Frontend Nav.jsx가 기대하는 형식으로 변환 (ticker -> stockId, name -> stockName)
        return data.map(item => ({
            stockId: item.ticker,
            stockName: item.name
        }));
    } catch (error) {
        console.error("Failed to search stocks:", error);
        return []; // 에러 발생 시 빈 배열 반환
    }
};

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
    withCredentials: true
});

export default api;