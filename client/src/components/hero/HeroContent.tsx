import React from "react"
import type { HeroProps } from "./Hero.Types"
import { Link } from "react-router-dom"

export const HeroContent: React.FC<HeroProps> = ({ title, subTitle, primaryAction, secondaryAction }) => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold w-full font-poppins ">{title}</h1>
                    <p className="py-6 font-inter font-semibold leading-7">
                        {subTitle}
                    </p>
                    <div className="flex gap-4 justify-center items-center">
                        <Link to={`${secondaryAction.to}`} className="btn btn-primary font-poppins font-semibold">{secondaryAction.label}</Link>
                        <Link to={`${primaryAction.to}`} className="btn btn-secondary font-poppins font-semibold">{primaryAction.label}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
