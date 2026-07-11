## 배경

운수종사자 신규검사(A)와 자격유지검사(B)의 인지·행동 시퀀스 데이터로 다음 검사 시점의 위험 확률을 예측하는 과제.

## 접근

A/B 검사의 컬럼 체계가 달라 도메인별 feature builder를 분리. 콤마로 저장된 검사 시퀀스를 행렬로 변환하고 평균·표준편차·변동계수·조건부 평균 등을 생성. 동일 운수종사자의 과거 이력은 현재 시점 이전 데이터만 사용해 누설을 차단하고, StratifiedGroupKFold로 같은 PrimaryKey가 train/valid에 동시에 들어가지 않도록 구성. LightGBM·CatBoost OOF prediction을 weighted blend해 최종 제출.

## 결과

최종 34등 (437팀 중, 상위 7.8%). 본 솔루션이 이후 데이콘 위탁사업 driver-risk-prediction-platform의 모델 기반이 됨.
