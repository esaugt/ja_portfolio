import { inria, poiret } from "@/app/styles/font";

interface Props {
    size?: string;
    fontType?: string;
    textColor?: string;
    shadowColor?: string;
}

export const JoshepAlvarez = ({
    size = "text-6xl",
    fontType = "font-normal",
    textColor = "text-black",
    shadowColor = ""

}: Props) => {


    return (
        <div className={`isolate relative inline-block ${poiret.variable} ${inria.variable}`}>
            <div className={`${fontType} ${size} ${textColor}`}>
                <span className="font-poiret mx-2" style={{ filter: `drop-shadow(0 0 8px ${shadowColor})` }}>
                    Joshep
                </span>

                <span className="font-inria" style={{ filter: `drop-shadow(0 0 2px ${shadowColor})` }}>
                    Álvarez
                </span>
            </div>
        </div>
    );
};

