import { useEffect } from 'react';
import Aux from '../../hoc/Auxil/Auxil';

import HeaderSection from './IndexPageSections/HeaderSection/HeaderSection';
import FeedbackSection from './IndexPageSections/FeedbackSection/FeedbackSection';
import GoodsSection from './IndexPageSections/GoodsSection/GoodsSection';
import AboutSection from './IndexPageSections/AboutSection/AboutSection';
import SummarySection from './IndexPageSections/SummarySection/SummarySection';
import ContactSection from './IndexPageSections/ContactSection/ContactSection';


import './IndexPage.css';

const IndexPage = props => {

    useEffect(() => {
        ////////////////////////////////////////////////////////////
        // Reveal sections
        const allSections = document.querySelectorAll('.section--hidden');

        const revealSection = function (entries, observer) {
            const [entry] = entries;
            // console.log(entry);

            if (!entry.isIntersecting) return;

            entry.target.classList.remove('section--hidden');
            observer.unobserve(entry.target);
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.1
        });

        allSections.forEach(function (section) {
            sectionObserver.observe(section);
        });

        ////////////////////////////////////////////////////////////
        // Lazy loading images
        const imgTargets = document.querySelectorAll('img[data-src]');

        const loadImg = function (entries, observer) {
            const [entry] = entries;

            if (!entry.isIntersecting) return;

            // Replace src with data-src
            entry.target.src = entry.target.dataset.src;

            // Remove blur effect after image load
            entry.target.addEventListener('load', function () {
                entry.target.classList.remove('lazy-img');
            });

            observer.unobserve(entry.target);
        }

        const imgObserver = new IntersectionObserver(loadImg, {
            root: null,
            threshold: 0,
            rootMargin: '100px'
        });

        imgTargets.forEach(img => imgObserver.observe(img));
    }, []);

    return (
        <Aux>
            <HeaderSection />
            <FeedbackSection />
            <GoodsSection />
            <AboutSection />
            <SummarySection />
            <ContactSection />
        </Aux>
    );
};

export default IndexPage;