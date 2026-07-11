## 배경

제주 감귤 나무 생육 데이터로 착과량을 예측하는 회귀 과제 (3일 단기 대회).

## 접근

생육 정보에서 착과량 예측에 필요한 파생 변수를 구성. feature scaling과 selection 실험을 분리해 입력 피처 품질을 비교한 뒤 XGBoost·LightGBM·CatBoost 회귀 모델을 학습. seed와 fold를 달리한 multi K-fold ensemble로 예측 안정성을 높였습니다.

## 결과

최종 17등 (257팀 중, 상위 6.6%).
