import './css/ProjectStyle.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import projectData from '../projectData';

gsap.registerPlugin(ScrollTrigger);

function ProjectStart() {
	let {navigation} = projectData;

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

		menuList.forEach(function(item, i) {
			item.addEventListener("click", function(e) {
				e.preventDefault();
				if(i === 0) {
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
	});

	return (
		<div id="start">
			<header>
				<div className="inner">
					<div className="logo">
						<h1><Link to={"/"}>JoSungHyeon</Link></h1>
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
				<video src="./video/intro2.mp4" muted autoPlay loop playsInline></video>
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
					<li key={i}><a href={d.href}>{d.text}</a></li>
				)
			}
		</ul>
	)
}

export default ProjectStart;