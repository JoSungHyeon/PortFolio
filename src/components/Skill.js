import './css/Style.css'
import homeData from '../homeData';

function Skill() {
	let {skill} = homeData;

	return (
		<section id="skill">
			<div className="section_inner">
				<div className="title">
					<h2>SKILLS</h2>
				</div>
				<SkillItem propsValue={skill}/>
			</div>
		</section>
	);
}

function SkillItem(props) {
	let skill = props.propsValue;

	return (
		<div className="skill_info">
			{
				skill.map((d, i) => 
					<div key={i} className="skill_item">
						<div className="skill_title"><span>{d.num}</span>{d.title}</div>
						<div className="skill_icon">
							<div className="icon_wrap">
								{
									d.skills.map((skills, j) =>
										<img key={j} src={`img/spec/spec_${skills}.png`} alt={skills} />
									)
								}
							</div>
							<ul className="skill_desc">
								{
									d.desc.map((desc, j) => 
										<li key={j}>{desc}</li>
									)
								}
							</ul>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default Skill;