import './css/Style.css'
import { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import homeData from '../homeData';

gsap.registerPlugin(ScrollTrigger);

function Main() {
	let {spec} = homeData;

	useLayoutEffect(() => {

		let header = document.querySelector("header");
		let body = document.querySelector("body");

		const specTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#section1",
				pin: true,
				onEnter(){
					body.classList.remove("dark");
					header.classList.add('active');
				},
				onLeaveBack(){
					body.classList.add("dark");
					header.classList.remove('active');
				},
				start: "top top",
				end: "+=1200",
				scrub: true
			}
		});

		let specText = document.querySelectorAll("#section1 .title > h2");
	
		specTl.fromTo(specText, {
			y: 200,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 0.3,
			stagger: 0.5
		})
	
		function specMove(element, container, prevy, nexty, playtime=2) {
			gsap.fromTo(element, {
				y: prevy
			}, {
				y: nexty,
				duration: playtime,
				ease: "none",
				scrollTrigger: {
					trigger: container,
					scrub: true,
					start: "top 30%",
				}
			});
		}
	
		specMove(".html", "#section1", 1000, -2000);
	
		specMove(".css", "#section1", 3000, -2000);
	
		specMove(".javascript", "#section1", 3000, -2000);
	
		specMove(".sass", "#section1", 2000, -2000);
	
		specMove(".react", "#section1", 6000, -2000);
	
		specMove(".node", "#section1", 4000, -2000);

		return () => {
			specTl.scrollTrigger.kill();
			ScrollTrigger.refresh();
		};
	}, []);


	return (
		<section id="section1">
			<div className="icons">
				<div className="title">
					<h2>GROWTH <span>AND</span></h2>
					<h2><span>DEVELOPMENT FOR</span></h2>
					<h2>BETTER <span>DAYS</span></h2>
				</div>
				<SpecIcon propsValue={spec} />
			</div>
		</section>
	);
}

function SpecIcon(props) {
	let spec = props.propsValue;
	
	return (
		<div className="specs">
			{
				spec.map((d, i) =>
					<div key={i} className={d.class}>
						<img src={`/img/${d.src}`} alt={d.class} />
					</div>
				)
			}
		</div>
	);
}

export default Main;