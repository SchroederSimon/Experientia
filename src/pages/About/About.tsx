import { useEffect, useState } from 'react';
import { EXPLAIN_ICONS, EXPLAIN_ICONS_ACTORS } from '../../arrayData/iconsAboutArray';
import { iconsInterface } from '../../models/iconsInterface';
import '../../pages/About/About.css'



function About() {

    const [icons, setIcons] = useState<iconsInterface[]>([]);
    const [iconsActors, setIconsActors] = useState<iconsInterface[]>([]);

    useEffect(() => {
        setIcons(EXPLAIN_ICONS)
    }, []);

    useEffect(() => {
        setIconsActors(EXPLAIN_ICONS_ACTORS)
    }, []);
    return (
        <div className="aboutGrid">
            <div className="chart">
                <div className="chart-title">
                    <p>
                        In our investigation about why students choose to change
                        the career they was studying, we found that 69% said “wasn’t
                        what i expected” and 17% because all the process was frustrating.
                    </p>
                </div>
                <img src="/chartv3.png" alt="" />
            </div>
            <div className="question-right">
                <div className="question-right-content">
                    <h2>We ask ourselves the following question</h2>
                    <p>How we could <span>help</span> high school students <span>choose a
                        career</span> according to their expectations and try
                        <span>to lower their anxiety and frustration?</span></p>
                </div>
            </div>
            <div className="explain-experientia">
                <h1>So, what you can do with Experientia?</h1>
                {
                    icons.map(icon => {
                        return (
                            <div className="container-icons" key={icon.id}>
                                <div className="explain-titles">
                                    <h2>{icon.title}</h2>
                                </div>
                                <div className="imageOverlay imageOverlay--primary">
                                    <p>{icon.detail}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="explain-actors-relation">
                {
                    iconsActors.map(iconActors => {
                        return (
                            <div className="container-icons-actors" key={iconActors.id}>
                                <div className="explain-titles-actors">
                                    <h2>{iconActors.title}</h2>
                                </div>
                                <div className="imageOverlay2 imageOverlay--primary2">
                                    <p>{iconActors.detail}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About
