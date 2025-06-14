import { inria, poiret } from "@/app/styles/font";

interface Props {
    size?: string;
    fontType?: string;
    textColor?: string;
    shadowColor?: string;
    breakOnMobile?: boolean
}

export const JoshepAlvarez = ({
    size = "text-6xl",
    fontType = "font-normal",
    textColor = "text-base",
    shadowColor = "white",
    breakOnMobile = false

}: Props) => {

    const layoutClass = breakOnMobile ? 'flex flex-col md:flex-row items-center justify-center ': ''

    return (
        <div className={`isolate relative ${poiret.variable} ${inria.variable}`}>
            <div className={`${layoutClass} ${fontType} ${size} ${textColor}`} style={{ filter: `drop-shadow(0 0 8px ${shadowColor})` }}>
                <span className="font-poiret mx-2">
                    Joshep
                </span>

                <span className="font-inria">
                    Álvarez
                </span>
            </div>
        </div>
    );
};

