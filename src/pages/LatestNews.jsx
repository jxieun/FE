// src/pages/LatestNews.jsx

import React, { useState, useEffect } from 'react';
import NewsModal from '../components/NewsModal.jsx'; // 1. 모달 컴포넌트 import
import api from '../lib/api.js';
import '../assets/LatestNews.css';
import InlineLoader from "../components/InlineLoader.jsx";

function LatestNews() {
    const [newsList, setNewsList] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null); // 2. 모달 상태(state) 추가
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('/api/news/latest');
                setNewsList(response.data);
            } catch (error) {
                console.warn("뉴스 로딩 실패 (Mock Data 사용):", error);
                // Mock Data for Demo
                setNewsList([
                    { id: 1, title: "코스피, 외인·기관 매도세에 2600선 하락 마감", press: "연합뉴스", summary: "코스피가 12일 외국인과 기관의 동반 매도세에 밀려 2600선 아래로 떨어졌다..." },
                    { id: 2, title: "삼성전자, AI 반도체 기대감에 '8만전자' 회복", press: "한국경제", summary: "삼성전자가 HBM 공급 확대 전망에 힘입어 8만원대를 회복했다..." },
                    { id: 3, title: "미국 연준, 금리 인하 신중론 유지... 시장 관망세", press: "매일경제", summary: "미국 연방준비제도(Fed)가 조기 금리 인하에 대해 신중한 입장을 고수하면서..." },
                    { id: 4, title: "테슬라 로보택시 공개 임박, 주가 변동성 확대", press: "블룸버그", summary: "테슬라의 자율주행 로보택시 공개를 앞두고 시장의 기대와 우려가 교차하며..." },
                    { id: 5, title: "카카오, 실적 부진 우려에도 주가는 소폭 상승", press: "서울경제", summary: "카카오가 3분기 실적 부진 전망에도 불구하고 저가 매수세 유입으로..." }
                ]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchNews();
    }, []);

    // 3. 모달 열기/닫기 핸들러 추가
    const handleOpenModal = (newsItem) => {
        setSelectedNews(newsItem);
    };

    const handleCloseModal = () => {
        setSelectedNews(null);
    };

    if (isLoading) {
        return <InlineLoader />;
    }

    return (
        <section className="news-container">
            <h2 className="section-title">최신 마켓 뉴스</h2>
            <div className="news-list">
                {newsList.map((news) => (
                    <div key={news.id} className="news-item-card">
                        <div className="news-card-header">
                            <span className="news-press">{news.press}</span>
                        </div>
                        <h3 className="news-title">{news.title}</h3>

                        {/* 백엔드가
                          Postman 응답 [User-provided JSON]에 맞춰
                          요약본(highlight)을 summary 필드로
                          전달합니다.
                        */}
                        <p
                            className="news-summary"
                            dangerouslySetInnerHTML={{ __html: news.summary }}
                        />

                        {/* 4. <a> 태그 대신 <button>으로 변경 */}
                        <button
                            className="read-more-button"
                            onClick={() => handleOpenModal(news)}
                        >
                            더보기
                        </button>
                    </div>
                ))}
            </div>

            {/* 5. 모달 렌더링 로직 */}
            {selectedNews && (
                <NewsModal news={selectedNews} onClose={handleCloseModal} />
            )}
        </section>
    );
}

export default LatestNews;