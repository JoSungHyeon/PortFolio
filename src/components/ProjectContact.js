import './css/ProjectStyle.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import projectData from '../projectData';

gsap.registerPlugin(ScrollTrigger);

function ProjectContact(props) {
	let {contact} = projectData;

	useEffect(() => {
		const contTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#contact",
				start: "top 30%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
				onEnter: function() {
					document.querySelector("#contact .title").classList.add("dark")
				},
				onLeaveBack: function() {
					document.querySelector("#contact .title").classList.remove("dark")
				}
			}
		});
	
		let contactList = document.querySelectorAll(".contact_wrap > a");
	
		contTl.fromTo(contactList, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, stagger: 0.3});
	
		contactList.forEach(function(item, i) {
			item.addEventListener("mouseenter", function() {
				contactList.forEach(function(list, j) {
					if(j === i) {
						gsap.to(list, {y: -20, duration: 0.3});
					} else {
						gsap.to(list, {y: 0, duration: 0.3});
					}
				})
			});
			item.addEventListener("mouseleave", function() {
				gsap.to(item, {y: 0, duration: 0.3});
			});
		});
	});
	
	return (
		<section id="contact">
			<div className="section_inner">
				<div href="" className="title">
					<h2>CONTACT</h2>
				</div>
				<ContactItem propsValue={contact}/>
			</div>
		</section>
	);
}

function ContactItem(props) {
	let contact = props.propsValue;

	return (
		<div className="contact_wrap">
			{
				contact.map((d, i) =>
					<a key={i} href={d.link} className="contact_item" target='porfolio'>
						<div className="item_img">
							<img src={`img/${d.name}.png`} alt={d.name} />
						</div>
					</a>
				)
			}
		</div>
	);
}

export default ProjectContact;