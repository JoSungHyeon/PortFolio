import './css/ProjectStyle.css';
import { useEffect } from 'react';
import projectData from '../projectData';



function ProjectStart() {
	let {mainVideo} = projectData;

	useEffect(() => {
		let video = document.querySelector("#mainVideo");

		video.addEventListener("loadeddata", function() {
			video.setAttribute("muted", true);
		})
	});

	return (
		<div id="start">
			<main>
				<video src={mainVideo} id='mainVideo' muted autoPlay loop playsInline poster='/img/video_poster.png'></video>
			</main>
		</div>
	);
}



export default ProjectStart;