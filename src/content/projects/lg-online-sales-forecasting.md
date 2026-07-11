## 배경

LG Aimers 3기 연계 데이콘 온라인 해커톤. 제품별 온라인 채널 판매량을 예측하는 시계열 과제.

## 접근

wide 형식 판매 이력을 제품별 long 시계열 학습 테이블로 변환. lag·rolling statistics·calendar cycle·product metadata 피처를 구성하고, log 변환 타겟에 대해 tabular regression 모델을 학습. 재귀적 multi-step forecasting으로 제출 구간을 채움.

## 결과

예선 12등 (747팀 중, 상위 1.6%) → 본선 24등.
