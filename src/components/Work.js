import './css/Style.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Work() {

	useEffect(() => {
		let header = document.querySelector("header");
		let body = document.querySelector("body");
		let work = document.querySelector("#work");
		let cursor = document.querySelector("#work #cursor");
		let titleW;
		let titleH;

		const workTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#work",
				start: "top center",
				end: "bottom 20%",
				onEnter: function() {
					header.classList.remove('active');
					body.classList.add("dark");
					document.querySelector("#work .title").classList.add("dark")
				},
				onEnterBack: function() {
					header.classList.remove('active');
					body.classList.add("dark");
					document.querySelector("#work .title").classList.add("dark")
				},
				onLeaveBack: function() {
					header.classList.add('active');
					body.classList.remove("dark");
					document.querySelector("#work .title").classList.remove("dark")
				}
			}
		}, []);
	
		let workItem = document.querySelector("#work .title");
	
		workItem.addEventListener("mouseenter", function() {
			workItem.lastElementChild.classList.add("active");
			cursor.classList.add("on");
		});
	
		workItem.addEventListener("mouseleave", function() {
			workItem.lastElementChild.classList.remove("active");
			cursor.classList.remove("on");
		});

		workItem.addEventListener("mousemove", function(e) {

			if(cursor.classList.contains("on")) {
				titleW = workItem.clientWidth;
				titleH = workItem.clientHeight;
				let mouseX = e.pageX - titleW;
				let mouseY = e.pageY - work.offsetTop - titleH;

				 cursor.style.transform = `translate(${mouseX}px, ${mouseY - 100}px)`
			} else {
				return;
			}
		});
	});

	return (
		<section id="work">
			<div className="section_inner">
				<div id="cursor"></div>
				<Link to="/project" className="title">
					<h2>PROJECT</h2>
					<button>Click Here</button>
				</Link>
			</div>
		</section>
	);
}

export default Work;