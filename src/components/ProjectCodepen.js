import './css/ProjectStyle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import projectData from '../projectData';

function ProjecCodepen() {
	let {codepen} = projectData
	return (
		<section id="codepen">
			<div className="section_inner">
				<h2 className="title">OPEN SOURCE</h2>
				<SourceWrapper propsValue={codepen} />
			</div>
		</section>
	);
}

function SourceWrapper(props) {
	let codepen = props.propsValue;

	return (
		<div className="source_wrapper">
			<Swiper
				autoplay={{
					delay: 500
				}}
				speed={2000}
				slidesPerView={1}
				loop={true}
				spaceBetween={70}
				centeredSlides={true}
				breakpoints={{
					640: {
						slidesPerView: 2
					},
					1199: {
						slidesPerView: 3.5
					},
					1599: {
						slidesPerView: 4.5
					}
				}}
				modules={[Autoplay]}
				className="swiper sourceSwiper"
			>
				{
					codepen.map((d, i) =>
						<SwiperSlide key={i} className="swiper-slide">
							<div className="slide_inner">
								{/* <div className="source_img">
									<img src={`./img/opensource/${d.src}.png`} alt={d.src} />
								</div> */}
								<div className="source_title">
									<h3>{d.title}</h3>
								</div>
								<div className="source_skill">
									{
										d.skill.map((skill, j) =>
											<span key={j} className={skill}>{skill}</span>
										)
									}
								</div>
								<div className="source_desc">
									<ul>
										{
											d.desc.map((desc, j) =>
												<li>{desc}</li>
											)
										}
									</ul>
								</div>
								<div className="source_btn">
									<a href={d.siteLink} target="portfolio" className='site'>SITE</a>
									<a href={d.gitLink} target="portfolio" className='git'>GIT</a>
								</div>
							</div>
				  		</SwiperSlide>
					)
				}
			</Swiper>
		</div>
	)
}

export default ProjecCodepen;