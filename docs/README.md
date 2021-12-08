## 기능 분류

### 메뉴

- 상단에 `탭 메뉴`가 존재
  - `상품 관리` 탭
  - `잔돈 충전` 탭
  - `상품 구매` 탭
- 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 함
- `localStorage`를 사용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 함

<br>

### 상품 관리 탭

- 자판기가 보유하고 있는 상품을 추가하는 기능
- 규칙
  - 최초 상품 목록은 비워놓아야 함
  - 상품명, 가격, 수량을 입력하여 상품을 추가할 수 있음
    - 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 함
  - 사용자는 추가한 상품을 확인할 수 있음

<br>

### 잔돈 충전 탭 (자판기 보유 동전)

- 자판기가 보유할 금액을 충전하는 기능
- 규칙
  - 최초 자판기가 보유한 금액은 0원이며, 각 동전의 개수 또한 0개
  - 잔돈 충전 입력 요소에 충전할 금액을 입력한 뒤 `충전하기` 버튼을 눌러 자판기 보유 금액을 충전할 수 있음
    - 자판기 보유 금액은 `{금액}원` 형식으로 나타냄
  - 자판기 보유 금액만큼의 동전이 무작위로 생성됨
    - 동전의 개수는 `{개수}개` 형식으로 나타냄
  - 자판기 보유 금액을 누적하여 충전할 수 있음
    - 이 때, 추가 충전 금액만큼의 동전이 무작위로 생성되어 기존 동전들에 더해짐

<br>

### 상품 구매 탭

- 사용자가 금액을 투입할 수 있음
- 투입한 금액에 맞춰 상품을 구매하고, 남은 금액은 반환
- 규칙
  - 최초 충전 금액은 0원이며, 각 동전의 개수 또한 0개
  - 사용자는 투입할 금액 입력 요소에 투입 금액을 입력한 뒤 `투입하기` 버튼을 눌러 금액을 투입할 수 있음
    - **10원으로 나누어 떨어지는 금액**만 투입할 수 있음
    - 자판기가 보유한 금액은 `{금액}원` 형식으로 나타냄
  - 금액은 누적으로 투입할 수 있음
  - 사용자는 `반환하기` 버튼을 통해 잔돈을 반환받을 수 있음
- 잔돈 반환 규칙
  - 잔돈을 돌려줄 때는 **현재 보유한 최소 개수의 동전**으로 잔돈을 돌려줌
  - 지폐를 잔돈으로 반환하는 경우는 없다고 가정
  - 잔돈으로 반환할 수 없는 경우, 잔돈으로 반환할 수 있는 금액만 반환
  - 동전의 개수를 나타내는 정보는 `{개수}개` 형식으로 나타냄

<br>
<hr>
<br>

## 구현 기능 목록

*위를 바탕으로 구현을 한 뒤 해당 기능에 대한 설명을 적을 예정입니다* 😊

| 📃 | ⚠️ |
|---|---|
|  |  |

<br>
<hr>
<br>

## src 폴더 구조

*폴더 구조를 시각화하여 파일 또는 폴더의 역할 등을 적을 예정입니다* 😊

```bash

```