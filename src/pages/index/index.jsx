import React from "react";
import { styled } from "linaria/react";

import SEO from "../../components/seo";
import SectionWrapper from "../../components/section-wrapper";
import MainWrapper from "../../components/main-wrapper";
import LatestInvestment from "./latest-investment";
import Button from "../../components/button";

const Index = () => {
    const HomePage = styled(MainWrapper)`
        h1.PageHeader {
            margin: 0 0 140px auto;
            max-width: calc(400px + 31vw);
            grid-column: 1 / -1;
        }

        section div.introCopy {
            grid-column: 1 / 7;

            h2 {
                max-width: 360px;
            }

            p {
                max-width: 470px;
            }
        }

        @media (--for-over-desktop) {
            h1.PageHeader {
                max-width: 710px;
            }
        }

        @media (--for-up-to-large-tablet) {
            h1.PageHeader {
                max-width: calc(400px + 20vw);
            }

            section div.introCopy {
                grid-column: 1 / 8;

                h2 {
                    max-width: 340px;
                }
            }
        }
    `;

    return (
        <HomePage>
            <SEO />

            <h1 className="PageHeader">
                ustwo Adventure invests in creative companies, differently
            </h1>

            <SectionWrapper subgrid>
                <div className="introCopy">
                    <h2>Build something bigger than an exit</h2>
                    <p>
                        When you combine long-term thinking with strong culture
                        and design, you create amazing companies.
                    </p>
                    <p>
                        Through capital, experience and belief, we help founders
                        with true heart and ambition build businesses on top of
                        these principles.
                    </p>
                    <Button href="/approach">Our approach</Button>
                </div>
                <LatestInvestment />
            </SectionWrapper>
        </HomePage>
    );
};

export default Index;
