import React from 'react';
import {EducationContainer, PageContainer, TitleTextContainer} from "@/containers/index.js";
import CareerContainer from "@/containers/CareerContainer/index.jsx";
import BounceText from "../../components/Text/BounceText/index.jsx";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme/index.js";

// TODO - 아래 내용을 기반으로 회사에서 진행했던 프로젝트와 개선 내용을 정리하기
// TODO: 1. 성능개선에 대한 내용 (차트에 대한 내용 + JS 전처리 로직을 가볍게하기 위한 JSON 형식에 대한 내용) (Apex, Chartjs, D3)
// TODO: 2. Nginx 모니터링을 위한 Nginx plus 도입에 대한 내용
// TODO: 3. API 데이터를 전역 스토어(Mobx)에서 관리하도록 구조를 변경한 내용
// TODO: 4. Period component refactoring 내용 (Compound pattern 채택 이유에 대한 내용)
// TODO: 5. 입사 초 정신없이 개발했던 내용과 이를 바꾸기 위한 계획 등 (프론트 개발론이나 유지보수에 좋은 코드 등에 대한 내용을 복합적으로 넣으면 좋을듯)
// TODO: 6. tui grid를 채택했다가 다시 mui table로 변경한 내용 (Heap memory가 쌓이는 문제)
// TODO: 7. 평문의 login data 해싱에 대한 프로세스 고민
// TODO: 8. Token과 관련된 로직 개선에 대한 문제 (token refresh 로직 등)

const Resume = (props) => {

    const theme = useRecoilValue(themeState);

    return (
        <PageContainer>
            <TitleTextContainer/>
            {/*<LoadingContainer>*/}
            <EducationContainer/>
            <CareerContainer/>
            <div style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <BounceText size={90} color={theme.main}>{"제 이력서 더 고도화 해볼게요...^^"}</BounceText>
            </div>
            {/*</LoadingContainer>*/}
        </PageContainer>
    )
};

export default Resume;