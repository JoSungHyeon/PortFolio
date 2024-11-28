# PORTFOLIO 🍀
***
![2024-11-28 17 01 15](https://github.com/user-attachments/assets/8dea3a5e-15f6-4483-9ec6-6d1412955384)

```
목차

  1. 컴포넌트

  2. 기술 스택

  3. 결과 및 성과

  4. 문제점 및 개선점
```
***
### 1. 컴포넌트
- page : Home, Project

  
- Home page
  - Header.js
  - Start.js
  - Main.js
  - Skill.js
  - Work.js
  - Contact.js


- Project page
  - ProjectHeader.js
  - ProjectStart.js
  - ProjectWork.js
  - ProjectCodePen.js
  - ProjectContact.js
 

***
### 2. 기술 스택

  
  - HTML
  - CSS
  - JavaScript
  - React
  - Router
  - gsap
  - ScrollTrigger
  - ScrollToPlugin
  - Data props(React)
  - Lenis
    
  
***
### 3. 결과 및 성과

  - Lenis를 사용하여 부드러운 스크롤 구현
  - gsap(ScrollToPlugin)를 사용하여 부드러운 메뉴 이동
  - Router로 페이지 이동
  - gsap(ScrollTrigger)를 사용하여 각 세션별 이벤트 구현
  - props를 사용하여 컴포넌트에 데이터 전달
***
### 4. 문제점 및 개선점

 - HTML로 작성시 CSS가 따로 적용되었지만 Router로 페이지 이동시 CSS가 같이 적용되어 속성이 겹침
   - 해당 컴포넌트의 ID를 따로 지정하여 CSS작성

    
 - Header, ProjectHeader 두 개의 컴포넌트의 레이아웃이 일치함
   - 헤더 영역에 들어갈 메뉴들을 데이터화하여 다른 Router이동시 데이터값만 변화하여 같은 컴포넌트 사용
  
     
 - homeData와 projectData가 따로 존재함
   - 두 데이터를 JSON 형식으로 변경 후 Axios를 사용해 데이터 불러오기
  
     
 - 각각의 컴포넌트에서 데이터를 따로 불러옴
   - page의 컴포넌트에서 데이터를 한번에 받은 후 각 컴포넌트에게 props데이터로 전송 후 사용 

  
  
  

