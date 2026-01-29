
import { useEffect } from 'react';
import Router from './Routes.jsx';
import api from './lib/api';
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {

    useEffect(() => {

        const initializeApp = async () => {
            console.log("세션 초기화를 시도합니다 (Local Mode)...");

            // API 호출 대신 로컬에서 UUID 생성
            let userId = localStorage.getItem('userId');
            let isNewSession = false;

            if (!userId) {
                // 간단한 UUID 생성 (브라우저 지원)
                userId = crypto.randomUUID ? crypto.randomUUID() : 'user-' + Date.now();
                localStorage.setItem('userId', userId);
                isNewSession = true;
            }

            if (isNewSession) {
                console.log(`새로운 세션이 시작되었습니다. (Local UserID: ${userId})`);
            } else {
                console.log(`기존 세션에 연결되었습니다. (Local UserID: ${userId})`);
            }
        };

        initializeApp();

    }, []); // [] : 앱이 처음 마운트될 때 1회만 실행

    return (
        <>
            <Nav />
            <Router />
            <Footer />
        </>
    )
}
