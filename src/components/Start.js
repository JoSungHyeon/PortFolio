import './css/Start.css'
import { useEffect } from 'react';
import TypeIt from "typeit";
import homeData from '../homeData';


function Start() {
	let {mainVideo} = homeData

	useEffect(() => {
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

		let video = document.querySelector("#mainVideo");

		video.addEventListener("loadeddata", function() {
			video.setAttribute("muted", true);
		})
		
	});
	
	return (
		<div id="start">
			<main>
				<video src={mainVideo} id='mainVideo' muted autoPlay loop playsInline poster='/img/video_poster.png'></video>
				<div className="main_text">
					<h2 id="output">FRONTEND DEVELOPER</h2>
					<p id="sub"></p>
				</div>
			</main>
		</div>
	);
}



export default Start;