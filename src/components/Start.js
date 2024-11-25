import './css/Start.css'
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import TypeIt from "typeit";

import homeData from '../homeData';

gsap.registerPlugin(ScrollToPlugin);

function Start() {
	let {navigation} = homeData;

	useEffect(() => {
		let menuList = document.querySelectorAll(".pc_menu > ul > li");
		let sectionList = document.querySelectorAll("section");

		let sectionOffset = [];

		sectionList.forEach(function(item, i) {
			sectionOffset.push(item);
		});
	
		menuList.forEach(function(item, i) {
			item.addEventListener("click", function(e) {
				e.preventDefault();
				if(i === 0) {
					gsap.to(window, {scrollTo: 0, duration: 0.3});
				} else {
					gsap.to(window, {scrollTo: sectionOffset[i], duration: 0.3});
				}
			});
	
			item.addEventListener("mouseenter", function() {
				menuList.forEach(function(item2, j) {
					if(j === i) {
						item2.classList.add("active");
					} else {
						item2.classList.remove("active");
					}
				});
			});
	
			item.addEventListener("mouseleave", function() {
				item.classList.remove("active");
			});
		});

		let moOpen = document.querySelector(".mobile_menu .mobile_open");
		let moMenu = document.querySelector(".mobile_menu ul");
		let logo = document.querySelector(".logo");
		let moMenuList = document.querySelectorAll(".mobile_menu > ul > li");

		sectionList.forEach(function(item, i) {
			sectionOffset.push(item);
		});

		moOpen.addEventListener("click", function(e) {
			e.preventDefault();
			if(!moOpen.classList.contains("on")) {
				moOpen.classList.add("on");
				logo.classList.add("on");
				gsap.to(moMenu, {left: 0, duration: 0.3});
			} else {
				moOpen.classList.remove("on");
				logo.classList.remove("on");
				gsap.to(moMenu, {left: "100%", duration: 0.3});
			}
		});

		moMenuList.forEach(function(item, i) {
			item.addEventListener("click", function(e) {
				e.preventDefault();
				if(i == 0) {
					gsap.to(window, {scrollTo: 0, duration: 0.3});
					moOpen.classList.remove("on");
					logo.classList.remove("on");
					gsap.to(moMenu, {left: "100%", duration: 0.3});
				} else {
					gsap.to(window, {scrollTo: sectionOffset[i], duration: 0.3});
					moOpen.classList.remove("on");
					logo.classList.remove("on");
					gsap.to(moMenu, {left: "100%", duration: 0.3});
				}
			});
		});

		function randomText(str, dom){
			let fake="abcdefghijklmnopqrstuvwxyz#%&^+=-";
			let text=str;
			let speed=50;
			let increment=2;
	
			let length=text.length;
			let si=0;
			let stri=0;
			let block="";
			let fixed="";
	
			(function rustle(i){
				setTimeout(function(){
					if(--i){
						rustle(i);
					}
	
					nextFrame(i);
					si=si+1;
				}, speed);
			})(length*increment+1);
	
			function nextFrame(pos){
				for(let i=0; i<length-stri; i++){
					let num=Math.floor(fake.length * Math.random());
					let letter=fake.charAt(num);
					block=block+letter;
				}
	
				if(si === (increment-1)){
					stri++;
				}
	
				if(si === increment){
					fixed=fixed+text.charAt(stri-1);
					si=0;
				}
	
				dom.innerHTML=fixed+block;
	
				block="";
			}
		}
	
		let dom=document.getElementById("output");
	
		randomText("FRONTEND DEVELOPER", dom);
	

		const titleText=new TypeIt("#sub", {
			speed: 50,
			waitUntilVisible: true,
			afterComplete: function(instance){
				instance.destroy();
			}
		});

		setTimeout(() => {
			titleText.type("Constantly Changing", { delay: 300 })
			.move(0)
			.pause(300)
			.delete(8)
			.type(" Challenging", {delay: 300})
			.move(null, {to: "END"})
			.type("<br><span>JoSungHyeon</span>")
			.go();
		}, 2000);
	});
	
	return (
		<div id="start">
			<header>
				<div className="inner">
					<div className="logo">
						<h1><a href="">JoSungHyeon</a></h1>
					</div>
					<nav className="pc_menu">
						<Navigation propsValue={navigation} />
					</nav>
					<nav className="mobile_menu">
						<a href="" className="mobile_open">
							<div></div>
							<div></div>
							<div></div>
						</a>
						<Navigation propsValue={navigation} />
					</nav>
				</div>
			</header>
			<main>
				<video src="/video/intro2.mp4" muted={true} autoPlay loop playsInline></video>
				<div id="cursor"></div>
				<div className="main_text">
					<h2 id="output">FRONTEND DEVELOPER</h2>
					<p id="sub"></p>
				</div>
			</main>
		</div>
	);
}

function Navigation(props) {
	let navigation = props.propsValue;

	return (
		<ul>
			{
				navigation.map((d, i) => 
					<li key={i}><a href={d.href}><p>{d.text}</p></a></li>
				)
			}
		</ul>
	)
}

export default Start;