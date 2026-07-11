## 배경

국민대학교 머신러닝 수업 학기 말 Kaggle 클래스 경진대회(kml2022s). 백화점 1년치 구매 트랜잭션으로 고객을 성별×연령대 8개 그룹(F20–M50)으로 분류하는 과제 (Multi-class log loss).

## 접근

고객별 구매 트랜잭션을 브랜드·코너·파트·상품 시퀀스로 모아 Word2Vec sequence embedding을 만들고, 범주형 파생 변수를 category encoder로 변환한 뒤 SHAP으로 피처 선택. CatBoost·LGBM·XGBoost·DNN(Keras·PyTorch)·MLP를 학습해 prediction blending.

## 결과

Kaggle kml2022s Private 2등, log loss 1.45953 (3인 팀, 수업 내 클래스 경진대회).
