import './css/ProjectStyle.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import projectData from '../projectData';

gsap.registerPlugin(ScrollTrigger);

function ProjectWork(props) {

	let {work} = projectData;

	useEffect(() => {
		const portTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#project #work",
				scrub: true,
				start: "top top",
				end: "+=1200"
			}
		});

		let portItem = document.querySelectorAll(".port_wrapper .port_wrap");

		portTl.fromTo(portItem, {y: 50, opacity: 0}, {y: 0, opacity:1, duration: 0.3, stagger: 0.5});
	});

	return (
		<section id="work">
			<div className="section_inner">
				<h2 className="title">PROJECT</h2>
				<ProtWrap propsValue={work} />
			</div>
		</section>
	)
}

function ProtWrap(props) {
	let work = props.propsValue;

	return (
		<div className="port_wrapper">
			{
				work.map((d, i) =>
					<div key={i} className="port_wrap">
						<div className="port_num">
							<span>{d.num}.</span>
						</div>
						<div className="port_info">
							<div className="port_title">
								<h3>{d.title}</h3>
							</div>
							<div className="port_skill">
								{
									d.skill.map((skill, j) =>
										<span key={j}>{skill}</span>
									)
								}
							</div>
							<div className="port_desc">
								<p>{d.desc}</p>
							</div>
							<div className="port_btn">
								<a href={d.siteLink} className="view">View Site</a>
								<a href={d.codeLink} className="code">CODE VIEW</a>
							</div>
						</div>
					</div>
				)
			}
		</div>
	);
}

export default ProjectWork;