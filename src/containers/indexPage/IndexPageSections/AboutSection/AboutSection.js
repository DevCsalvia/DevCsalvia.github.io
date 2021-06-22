import classes from './AboutSection.module.css';

const AboutSection = props => {
    return (
        <section className={classes.AboutSection + ' section--hidden'} id='AboutSection' >
            <div className={classes.AboutSection__background}>
                <img src="/images/IndexPage/AboutSection/about-bg.jpg" alt="BG" />
            </div>
            <div className={classes.AboutSection__Content + ' AboutSection__Content'}>
                <h2 className={classes.AboutSection__heading}>Who We Are</h2>
                <p className={classes.AboutSection__Content__paragraph}>
                    Runner.com, Inc. engages in the provision of online retail shopping services. It operates through the following business segments: North America, International, and Runner Web Services (RWS). The North America segment includes retail sales of consumer products and subscriptions through North America-focused websites such as www.runner.com and www.runner.ca. The International segment offers retail sales of consumer products and subscriptions through internationally-focused websites. The Runner Web Services segment involves in the global sales of compute, storage, database, and AWS service offerings for start-ups, enterprises, government agencies, and academic institutions.
                </p>
            </div>
        </section>
    )
}

export default AboutSection;