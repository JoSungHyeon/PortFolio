import './css/Home.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Lenis from '@studio-freight/lenis';


import ProjectHeader from '../components/ProjectHeader';
import ProjectStart from '../components/ProjectStart';
import ProjectWork from '../components/ProjectWork';
import ProjecCodepen from '../components/ProjectCodepen';
import ProjectContact from '../components/ProjectContact';

gsap.registerPlugin(ScrollToPlugin);

function Project() {
	useEffect(() => {
		setTimeout(() => {
			document.body.classList.add("dark");
		}, 100);
		function lenisAnimation(){
			const lenis=new Lenis({
				duration: 2,
				easing: (t) => Math.min(1, 1.001-Math.pow(2, -10*t))
			});
		
			function raf(time){
				lenis.raf(time);
				requestAnimationFrame(raf);
			}
		
			requestAnimationFrame(raf);
		}

		lenisAnimation();
		
		gsap.to(window, { scrollTo: 0, duration: 0.2 });

		return(() => {
			document.body.classList.remove("dark")
		});
	});

  	return (
  	  	<div id='project'>
			<ProjectHeader />
			<ProjectStart />
			<ProjectWork />
			<ProjecCodepen />
			<ProjectContact />
		</div>
  	);
}

export default Project;
