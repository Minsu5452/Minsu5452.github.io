## 배경

SNP(단일염기다형성) 데이터로 품종을 분류하는 multi-class 과제. Macro F1 평가.

## 접근

SNP 이름·염색체·위치·유전 거리·염기 조합에서 파생 변수를 만들고, 고차원 범주형 SNP를 CatBoost Encoder 등으로 변환. SMOTE·BorderlineSMOTE 등 불균형 보정 방법을 비교한 뒤 CatBoost·LightGBM·XGBoost·Random Forest·Extra Trees·SVC·MLP를 넓게 실험. 최종 제출은 강한 모델들의 weighted hard-voting ensemble.

## 결과

최종 1등 (716팀 중, 리더보드 기준). 결과를 정리해 에이아이프렌즈학회 2023 제2차 실용 인공지능 학술대회 논문 발표로 연계.
