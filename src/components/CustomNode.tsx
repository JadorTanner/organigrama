import {Handle, NodeProps, Position} from "reactflow";

interface CustomNodeProps extends NodeProps {
    data: {
        label: string,
        hasSources?: boolean
    }
}

const CustomNode = ({data, targetPosition}: CustomNodeProps) => {
    targetPosition ??= Position.Right
    return (
        <div className="card bg-blue-500 w-56 h-28 overflow-hidden rounded-none">
            <div className="card-body border-l-[1.5em] border-l-gray-600 p-2 flex flex-col items-center justify-center">
                <span className='text-white font-semibold text-center'>
                    {data.label}
                </span>
                {data.hasSources &&
                    <>
                        <Handle type="source" id="handleRight" position={Position.Right}
                                className="invisible -translate-x-1"/>
                        <Handle type="source" id="handleBottom" position={Position.Bottom}/>
                    </>
                }{!data.hasSources &&
                <Handle type="target" position={targetPosition}
                        className={`invisible ${targetPosition === Position.Right ? "translate-x-1" : "-translate-x-1"}`}/>
            }
            </div>
        </div>
    );
};

export default CustomNode;