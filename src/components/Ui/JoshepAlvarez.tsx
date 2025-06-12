import { inria, poiret } from "@/app/styles/font";

interface Props {
    size?: string;
    fontType?: string;
}

export const JoshepAlvarez = ({
    size = "text-6xl",
    fontType = "font-bold"
}: Props) => {

    
    return (
        <div className={`isolate relative inline-block ${poiret.variable} ${inria.variable}`}>
            <h1 className={`${fontType} font-bold ${size}`}>
                <span className="font-poiret">Joshep </span>
                <span className="font-inria">Álvarez</span>
            </h1>
        </div>
    );
};

