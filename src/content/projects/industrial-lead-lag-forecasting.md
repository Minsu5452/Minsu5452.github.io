## 배경

산업 품목별 월간 시계열에서 선행·후행 관계(lead-lag)를 찾고, follower 품목의 다음 달 값을 예측하는 과제.

## 접근

품목별 월간 pivot에서 lag 1–9 구간의 상관·p-value·방향성·안정성을 스캔하고, zero ratio·CV·spike·trend·autocorrelation 등 품질 점수로 우연한 상관을 제거. leader→follower directed graph를 만들고 PageRank와 community 정보를 활용해 pair score를 보정. follower 자체 lag/rolling 피처와 선택된 leader의 lag-shifted value를 결합해 LightGBM 회귀 모델 학습. 마지막 3개월을 hold-out으로 두고 NMAE·MAE를 검증.

## 결과

예선 50등 (960팀 중, 상위 5.2%).
