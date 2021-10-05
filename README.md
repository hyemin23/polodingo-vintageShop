
<h1 align="center"> 🛍 POLODINGO 🛍 (개인 프로젝트) /h1>






<h3 align="center">🍀 랜딩 Page </h3>
<p align="center">(화질 문제는 용량이 커서 gif로 변경 후 작업하였습니다.)</p>
 
 <div>
<p align="center">
 <img src="https://user-images.githubusercontent.com/54235714/120165369-7876b480-c236-11eb-9942-54c25a7241bc.gif" width="50%" height="40%"/>
<img src="https://user-images.githubusercontent.com/54235714/120181731-6e5db180-c248-11eb-97bb-f2ad16c6ac95.gif"  width="30%" height="50%"/>
 </p>
 </div>
 <p>
 GSAP를 이용한 스크롤 애니매이션
 </p>

<br/>
<h3 align="center">🍀 LOGIN/ LOGOUT Page</h3>
<div>
 <img src="https://user-images.githubusercontent.com/54235714/120173077-a4963380-c23e-11eb-9a8a-fbfb429ac62f.gif"  width="60%" height="40%" />
<img src="https://user-images.githubusercontent.com/54235714/120173578-1c645e00-c23f-11eb-89d8-b51002ca8b1a.gif"  width="30%" height="50%" />
 </div>
-  jwt를 이용한 로그인/로그아웃 그현

<br/>
<h3 align="center">🍀 상품 카테고리별 검색 & 상품 리스트 & 상품 상세 페이지</h3>
<div>
<img src="https://user-images.githubusercontent.com/54235714/120170047-87139a80-c23b-11eb-9827-b4796d63309c.gif"  width="60%" height="40%"/>
<img src="https://user-images.githubusercontent.com/54235714/120168867-52ebaa00-c23a-11eb-8e51-3b3e904f3697.gif"  width="30%" height="50%"/>
</div>
- Custom ActiveClassName Components 구현

<br/>
<h3 align="center">🍀 검색 기능</h3>
<div>
<img src="https://user-images.githubusercontent.com/54235714/120175057-c395c500-c240-11eb-8441-662cf9f238f8.gif"  width="60%" height="40%"/>
 <img src="https://user-images.githubusercontent.com/54235714/120225244-d7ace700-c27f-11eb-8499-48c8a01afe3c.gif"  width="30%" height="50%"  />
</div>

<br/>
<h3 align="center">🍀 장바구니 Page</h3>
<div>
 <img src="https://user-images.githubusercontent.com/54235714/120181213-b203eb80-c247-11eb-80c8-28c261f4476c.gif"  width="60%" height="40%" />
<img src="https://user-images.githubusercontent.com/54235714/120181432-06a76680-c248-11eb-9bee-69c8ea593388.gif"  width="30%" height="50%" />
 </div>

<br/>
<h3 align="center">🍀 주문 프로세스 & 품절 표시</h3>
<div>
 <img src="https://user-images.githubusercontent.com/54235714/120265847-c5609680-c2db-11eb-95b0-7dd0c30b5ac5.gif"  width="60%" height="40%" />
<img src="https://user-images.githubusercontent.com/54235714/120266155-461f9280-c2dc-11eb-8e9d-5b44d1b5e6fc.gif"  width="30%" height="50%" />
 </div>
- 총 3단계 주문 프로세스와 모든 주문이 끝난 후 구매완료 상품 "품절" 표시

<br/>
<h3 align="center">🍀 About Page</h3>
<div>
<img src="https://user-images.githubusercontent.com/54235714/120209757-01f3aa00-c26a-11eb-9098-456eb41bdd97.png" width="60%" height="40%"/>
<img src="https://user-images.githubusercontent.com/54235714/120210619-f359c280-c26a-11eb-9e7c-8d25ee4e4721.png" width="30%" height="50%"/>
</div>
<br/>


## 프로젝트 소개 👋🏻
저는 온라인으로 빈티지 마켓을 운영하였던 경험이 있습니다.
그때는 타사 플랫폼을 이용하여 판매했지만, 언젠가 한번 사이트를 직접 만들어봐야겠다는 생각을 하곤 했습니다.
생각을 실천으로 옮겨, 스스로 구축한 빈티지 마켓입니다.
프론트앤드 백앤드 디자인 모두 혼자 기획하고 진행하였으며 시행착오가 많았지만, 직접 사이트를 만들고 관리한다는 것은 너무나도 흥미로운 일입니다.
과거에 제가 만들어 보고 싶었고, 꿈꾸었던 사이트를 자그맣게나마 만들어본 경험이 저에겐 뜻깊은 경험이 되었습니다.

## 기술 스택 🔨
#### Frontend : React, Next.js, Redux, Redux-Saga, Styled-Components
#### Backend : Nest.js, TypeORM, 
#### DB: MySQL
#### Git


## 기능 소개 👨🏻‍💻 
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


##  트러블 이슈 🧨 
- Styled-Components의 이용과 Mobile 반응형 페이지를 제작하면서 모바일 부분 코드 중복 발생
해결 : 전역으로 관리할 수 있는 px(픽셀)값 설정 및 전역 컬러 설정
- 기존에 flex와 grid 으로 구조를 잡아왔지만 반응형에서 grid 구조가 깨지기 시작.
해결 : 일정 픽셀로 줄어들면 grid 속성값으로 변수를 전달하여 픽셀별 grid column 변경
- 카테고리 컴포넌트에 활성화를 구분지어주고 싶었는데 기존 React에는 activeClassName이라는 값으로 설정해왔지만 Next.js에서는 존재하지 않음
해결 : Custom <ActiveLink> 컴포넌트를 만들어 해당 컴포넌트 안에서 클릭한 이름이 일치하면 css 변경하는 로직 추가

## 개선해 나가야 할 점 ⚙️ 
- Styled-Components를 사용하면서 조금 더 재사용성이 있는 속성들은 따로 관리
- About 정적 page를 getStaticPath 을 활용하여 처리하기
- AWS 배포 과정에서 Front server까지 배포를 완료하였으나 backend 배포 과정 중 nest build 중 main.ts가 생기지 않는 이슈 수정 
