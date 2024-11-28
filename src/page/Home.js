import './css/Home.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Lenis from '@studio-freight/lenis';

import Header from '../components/Header';
import Start from '../components/Start';
import Main from '../components/Main';
import Skill from '../components/Skill';
import Work from '../components/Work';
import Contact from '../components/Contact';

gsap.registerPlugin(ScrollToPlugin);

function Home() {
	useEffect(() => {
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
	});
	
  	return (
  	  	<div id='home'> {/* 헤더 컴포넌트 빼기 */}
			<Header />
			<Start /> 
			<Main />
			<Skill />
			<Work />
			<Contact />
		</div>
  	);
}

export default Home;
