## 배경

국민대학교 딥러닝 수업의 팀 프로젝트. 한국 음식 이미지 도메인에서 흑백 → 컬러화 SOTA 모델을 비교.

## 접근

AI Hub 한국 음식 이미지를 224×224 컬러/그레이 페어로 변환해 train/test split 구성. ChromaGAN PyTorch remake를 도메인에 맞게 fine-tuning, DeOldify는 pretrained inference로 비교, InstColorization은 weight 확보 실패 등 재현 한계를 노트북에 기록. PSNR·SSIM과 정성 결과를 함께 비교.
