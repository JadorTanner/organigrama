import CustomSvg from "./Arrow.tsx";
import {NodeProps} from "reactflow";

const CustomGroup = ({data}: NodeProps) => {
    const childrenCount = data.childrenCount ?? 1
    data.textDirection ??= 'left'

    let arrowClassName
    if (data.textDirection === 'left') {
        arrowClassName = 'right-0 translate-x-[100%] border-l-2 border-l-black border-t-2 border-t-black border-b-2 border-b-black rounded-tl-md rounded-bl-md'
    } else {
        arrowClassName = 'left-0 -translate-x-[100%] border-r-2 border-r-black border-t-2 border-t-black border-b-2 border-b-black rounded-tr-md rounded-br-md'
    }
    return <>
        <div className="w-56 relative" style={{
            height: `calc(${(childrenCount - 1) * 18}px + ${childrenCount * 112}px)`
        }}>
            {data.label &&
                <>
                    <div
                        className={`absolute ${data.textDirection === 'left' ? 'left-0 -translate-x-[125%] flex-row-reverse' : 'right-0 translate-x-[125%]'} h-full flex items-center justify-center`}>
                        <CustomSvg toLeft={data.textDirection === 'left'} />
                        &nbsp;
                        <p className="font-bold">
                            {data.label}
                        </p>
                        <div
                            className={`absolute h-[110%] w-5 ${arrowClassName}`}>
                        </div>
                    </div>
                </>
            }

        </div>
    </>
}

export default CustomGroup;