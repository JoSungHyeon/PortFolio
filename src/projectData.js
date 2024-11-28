const projectData = {
	mainVideo: ["/video/intro2.mp4"],
	navigation: [
		{ href: "#work", text: "Project" },
		{ href: "#codepen", text: "Open Source" },
		{ href: "#contact", text: "Contact" }
	],
	work: [
		{
			num: "01",
			title: "Emotion Diary",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Router",
				"useContext",
				"Coutom Hook",
				"LocalStorage",
				"Vite",
			],
			desc: "React와 useContext 그리고 LocalStorage를 활용하여 TodoList 기능을 구현했습니다. 이 구조를 통해 애플리케이션의 상태 관리를 간소화하고, 사용자가 작성한 할 일을 로컬 스토리지에 저장해 재방문 시에도 데이터를 유지할 수 있도록 했습니다. 이러한 방식으로, 사용자 경험을 극대화하고 앱의 유지 관리성을 높였습니다. 이를 통해 콘텐츠를 더욱 직관적으로 저장, 탐색할 수 있도록 했습니다. 또한, 저장된에 따라 콘텐츠가 필터링되도록 하여 사용자가 원하는 정보에 쉽게 접근할 수 있게 프로그래밍했습니다.",
			siteLink: "https://sh-emotion-diary.vercel.app/",
			codeLink: ""

		},
		{
			num: "02",
			title: "Board Shop",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Redux",
				"Router",
				"Axios",
				"LocalStorage",
				"Vite",
			],
			desc: "Axios를 활용하여 API 요청을 처리하고, Redux를 통해 전역 상태를 관리함으로써 사용자 경험을 향상시키고, 데이터의 일관성을 보장했습니다. 그리고 LocalStorage를 이용해서 저장되는 DB 데이터의 기본 형태를 테스트하여 상품을 전시하였으며, 이러한 구조는 쇼핑몰의 제품 관리 방식과 유사하게 작동하여, 사용자에게 친숙한 인터페이스를 제공합니다.",
			siteLink: "https://sh-board-shop.vercel.app/",
			codeLink: ""

		},
		{
			num: "03",
			title: "ClassBox",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Axios",
				"Swiper",
			],
			desc: "React를 활용한 유아 영어 교재 클론 코딩 프로젝트입니다. 이 사이트는 전체적으로 반응형 디자인으로 제작되어 다양한 기기에서 최적의 사용자 경험을 제공합니다. 데이터 요청은 Axios를 사용하여 교재 정보를 외부 API에서 받아오도록 설정했습니다. UI 라이브러리로는 SwiperJS를 활용하여 슬라이더 및 갤러리 효과를 강화하였습니다.",
			siteLink: "https://sh-classbox.vercel.app/",
			codeLink: ""

		},
		{
			num: "04",
			title: "O'Kichen",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"Swiper",
				"PWA"
			],
			desc: "URL로 접속하여 쉽게 설치하고 이용할 수 있는 PWA, 프로그레시브 웹 앱입니다. SwiperJS 라이브러리를 통해 컨텐츠와 광고 배너를 둘러볼 수 있게 제작하였으며 사용자에게 직관적인 디자인으로 개발하였습니다.",
			siteLink: "https://josunghyeon.github.io/o-kichen-pwa/",
			codeLink: ""

		}
	],
	codepen: [
		{
			title: "Name1",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error ipsa aliquid optio dolor mollitia, autem incidunt quisquam, ipsum qui alias magnam architecto facere minus itaque labore molestias nihil aspernatur.",
			siteLink: "https://sh-open-1.vercel.app/",
			gitLink: ""
		},
		{
			title: "Name2",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			desc: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error ipsa aliquid optio dolor mollitia, autem incidunt quisquam, ipsum qui alias magnam architecto facere minus itaque labore molestias nihil aspernatur.",
			siteLink: "https://www.naver.com",
			gitLink: ""
		},
		{
			title: "Name2",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			desc: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error ipsa aliquid optio dolor mollitia, autem incidunt quisquam, ipsum qui alias magnam architecto facere minus itaque labore molestias nihil aspernatur.",
			siteLink: "https://www.naver.com",
			gitLink: ""
		},
		{
			title: "Name2",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			desc: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error ipsa aliquid optio dolor mollitia, autem incidunt quisquam, ipsum qui alias magnam architecto facere minus itaque labore molestias nihil aspernatur.",
			siteLink: "https://www.naver.com",
			gitLink: ""
		},
		{
			title: "Name2",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			desc: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error ipsa aliquid optio dolor mollitia, autem incidunt quisquam, ipsum qui alias magnam architecto facere minus itaque labore molestias nihil aspernatur.",
			siteLink: "https://www.naver.com",
			gitLink: ""
		},
		{
			title: "Name2",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			desc: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error ipsa aliquid optio dolor mollitia, autem incidunt quisquam, ipsum qui alias magnam architecto facere minus itaque labore molestias nihil aspernatur.",
			siteLink: "https://www.naver.com",
			gitLink: ""
		},
		{
			title: "Name2",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			desc: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error ipsa aliquid optio dolor mollitia, autem incidunt quisquam, ipsum qui alias magnam architecto facere minus itaque labore molestias nihil aspernatur.",
			siteLink: "https://www.naver.com",
			gitLink: ""
		},
		{
			title: "Name2",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			desc: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error ipsa aliquid optio dolor mollitia, autem incidunt quisquam, ipsum qui alias magnam architecto facere minus itaque labore molestias nihil aspernatur.",
			siteLink: "https://www.naver.com",
			gitLink: ""
		},
		{
			title: "Name2",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			desc: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error ipsa aliquid optio dolor mollitia, autem incidunt quisquam, ipsum qui alias magnam architecto facere minus itaque labore molestias nihil aspernatur.",
			siteLink: "https://www.naver.com",
			gitLink: ""
		},
		{
			title: "Name2",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			desc: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis error ipsa aliquid optio dolor mollitia, autem incidunt quisquam, ipsum qui alias magnam architecto facere minus itaque labore molestias nihil aspernatur.",
			siteLink: "https://www.naver.com",
			gitLink: ""
		}
	],
	contact: [
		{
			name: "git",
			link: "https://github.com/JoSungHyeon"
		},
		{
			name: "notion",
			link: "https://stupendous-saver-a6c.notion.site/JoSungHyeon-11bd2ba5cf6080d693eac45f4b3b0d0c?pvs=74"
		},
		{
			name: "kakao",
			link: "https://open.kakao.com/o/sXyOvo2g"
		},
		{	name: "codepen",
			link: "https://codepen.io/JoSungHyeon/pens/"

		}
	]
}


export default projectData;