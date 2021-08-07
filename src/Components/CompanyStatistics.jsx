import React from 'react'
import { CompanyStatisticsData } from "../Data/statisticsData";

const CompanyStatistics = () => {
    return (
        <div className="row g-0">

            <div id="testimonialSection">

                {CompanyStatisticsData.map( ( statistic, i ) => {
                    return (
                        <div className="testimonialComponent animated fadeIn" key={i}>

                            <div className="testimonialIcon"><i className={statistic.statisticIcon} aria-hidden="true"></i></div>
                            <div className="boldTxt testimonialTxt">{statistic.statisticValue} <br />{statistic.statisticName}</div>

                        </div>
                    )
                } )
                }

            </div>

        </div>
    )
}

export default CompanyStatistics
