import React from "react";
import { styled } from "linaria/react";

import SectionWrapper from "./section-wrapper";

const CTAWrapper = ({ children, className, style }) => {
    const CTABackground = styled(SectionWrapper)`
        background-color: var(--piglet);
        box-shadow: var(--card-shadow);

        --side-margin: -1.2em;
        margin-left: var(--side-margin);
        margin-right: var(--side-margin);
        padding: 65px 0; /* was calc(var(--side-margin) * -1) to keep inline with page grid, but dind't look good */

        @media (max-width: 715px) {
            --side-margin: 0;
            padding: 40px 32px;
            grid-template-columns: repeat(1, 1fr);
        }
    `;

    const CTAInner = styled.div`
        display: subgrid;

        h2,
        p {
            color: #ffffff;
        }

        p:last-child {
            margin-bottom: 0;
        }

        input:not(:last-child) {
            margin-bottom: 0.8em;
        }

        @media (max-width: 715px) {
            text-align: center;
            width: 75%;
            margin-left: auto;
            margin-right: auto;
        }

        @media (max-width: 610px) {
            width: 85%;
        }

        @media (--for-up-to-mobile) {
            width: 100%;
        }
    `;

    return (
        <CTABackground subgrid className={className} style={style}>
            <CTAInner>{children}</CTAInner>
        </CTABackground>
    );
};

export default CTAWrapper;
