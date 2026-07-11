## 배경

선박 입항 후 대기시간(`CI_HOUR`)을 예측하는 회귀 과제. 본선은 시계열 신호 기반 trial weight 회귀로 과제가 변경됨.

## 접근

예선은 결측 처리·시간 파생 변수·target encoding을 적용하고 XGBoost·CatBoost ensemble로 학습, `DIST == 0` 등 특수 케이스는 후처리로 보정. 본선은 시계열 신호 파일을 trial 단위로 파싱하고 sliding window feature를 구성, LightGBM 예측을 ID 단위 percentile 집계와 rounding으로 제출 형식에 맞춤.

## 결과

예선 2등 (330팀 중, 상위 0.6%) · 본선 6등.
