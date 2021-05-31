# POLO dingo 



# 프로젝트 소개

## 기술 스택
### Frontend : React, Next.js, Redux, Redux-Saga, Styled-Components
### Backend : Nest.js, TypeORM, 
### DB: MySQL
### Git

# 기능 소개
- jwt & react-hook-form 을 이용한 회원가입/로그인/로그아웃/암호화
- 카테고리 관리
- 카테고리별 상품 검색
- 상품 검색
- 제품 상세 페이지
- 상품 리뷰
- 장바구니
- 주문 프로세스 ( 1단계(장바구니) -> 2단계(배송지) -> 3단계(최종 주문))
- 상품 품절상태 실시간 반영
- 반응형 웹
- 카카오 API 지도 연동


(화질 문제는 용량이 커서 gif로 변경 후 작업하였습니다.)
### 랜딩페이지 
GSAP를 이용한 스크롤 애니매이션

- web
 
 <div>
<img src="https://user-images.githubusercontent.com/54235714/120165369-7876b480-c236-11eb-9942-54c25a7241bc.gif" width="600px" height="400px" style="display:block"/>.  
<img src="https://user-images.githubusercontent.com/54235714/120168017-62b6be80-c239-11eb-8fe8-ba0cc30a179d.gif"  width="30%" height="600px" style="display:block"/>
 </div>
 
### jwt를 이용한 LOGIN/ LOGOUT
<div>
 <img src="https://user-images.githubusercontent.com/54235714/120173077-a4963380-c23e-11eb-9a8a-fbfb429ac62f.gif"  width="600px" height="400px" />
<img src="https://user-images.githubusercontent.com/54235714/120173578-1c645e00-c23f-11eb-89d8-b51002ca8b1a.gif"  width="30%" height="600px" />
 </div>


### 상품 카테고리별 검색 & 상품 리스트 & 상품 상세 페이지
<div>
<img src="https://user-images.githubusercontent.com/54235714/120170047-87139a80-c23b-11eb-9827-b4796d63309c.gif"  width="600px" height="400px"/>
<img src="https://user-images.githubusercontent.com/54235714/120168867-52ebaa00-c23a-11eb-8e51-3b3e904f3697.gif"  width="30%" height="600px"/>
</div>

### 검색 기능
<div>
<img src="https://user-images.githubusercontent.com/54235714/120175057-c395c500-c240-11eb-8441-662cf9f238f8.gif"  width="600px" height="400px"/>
 <img src="https://user-images.githubusercontent.com/54235714/120174774-7154a400-c240-11eb-9469-8135aba5c292.gif"  width="30%" height="600px"  />
</div>


### 장바구니 & 주문 프로세스
<div>
 <img src=""  width="600px" height="400px" />
<img src=""  width="30%" height="600px" />
 </div>

# 트러블 이슈 
- Styled-Components의 이용과 Mobile 반응형 페이지를 제작하면서 모바일 부분 코드 중복 발생
해결 : 전역으로 관리할 수 있는 px(픽셀)값 설정 및 전역 컬러 설정
- 기존에 flex와 grid 으로 구조를 잡아왔지만 반응형에서 grid 구조가 깨지기 시작.
해결 : 일정 픽셀로 줄어들면 grid 속성값으로 변수를 전달하여 픽셀별 grid column 변경
- 카테고리 컴포넌트에 활성화를 구분지어주고 싶었는데 기존 React에는 activeClassName이라는 값으로 설정해왔지만 Next.js에서는 존재하지 않음
해결 : Custom <ActiveLink> 컴포넌트를 만들어 해당 컴포넌트 안에서 클릭한 이름이 일치하면 css 변경하는 로직 추가


# 개선해나가야할 점
- Styled-Components를 사용하면서 조금 더 재사용성이 있는 속성들은 따로 관리
- About 정적 page를 getStaticPath 을 활용하여 처리하기
- AWS 배포 과정에서 Front server까지 배포를 완료하였으나 backend 배포 과정 중 nest build 중 main.ts가 생기지 않는 이슈 수정 
