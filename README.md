# POLO dingo 



# 프로젝트 소개

## 기술 스택
### Frontend : React, Next.js, Redux, Redux-Saga, Styled-Components
### Backend : Nest.js, TypeORM, 
### DB: MySQL
### Git

# 기능 소개
- jwt를 활용한 회원가입/로그인/로그아웃
- 카테고리 관리
- 카테고리별 상품 검색
- 상품 검색
- 제품 상세 페이지
- 상품 리뷰
- 장바구니
- 주문 프로세스 ( 1단계(장바구니) -> 2단계(배송지) -> 3단계(최종 주문))
- 반응형 웹

### 랜딩페이지 
- web
![화면 기록 2021-05-31 오후 5 15 57](https://user-images.githubusercontent.com/54235714/120165369-7876b480-c236-11eb-9942-54c25a7241bc.gif)

-mobile
![화면 기록 2021-05-31 오후 5 37 32](https://user-images.githubusercontent.com/54235714/120168017-62b6be80-c239-11eb-8fe8-ba0cc30a179d.gif)

GSAP를 이용한 스크롤 애니매이션

### 상품 카테고리별 검색 & 상품 리스트



# 트러블 이슈 
- Styled-Components의 이용과 Mobile 반응형 페이지를 제작하면서 모바일 부분 코드 중복 발생
해결 : 전역으로 관리할 수 있는 px(픽셀)값 설정 및 전역 컬러 설정
- 기존에 flex와 grid 으로 구조를 잡아왔지만 반응형에서 grid 구조가 깨지기 시작.
해결 : 일정 픽셀로 줄어들면 grid 속성값으로 변수를 전달하여 픽셀별 grid column 변경
- 카테고리 컴포넌트에 활성화를 구분지어주고 싶었는데 기존 React에는 activeClassName이라는 값으로 설정해왔지만 Next.js에서는 존재하지 않음
해결 : Custom <ActiveLink> 컴포넌트를 만들어 해당 컴포넌트 안에서 클릭한 이름이 일치하면 css 변경하는 로직 추가



# 개선해나가야할 점
- Styled-Components를 사용하면서 조금 더 재사용성이 있는 속성들은 따로 관리
- 
