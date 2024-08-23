import React from 'react';
import {EdgeProps, getSmoothStepPath} from 'reactflow';

const CustomEdge: React.FC<EdgeProps> = ({
                                          id,
                                          sourceX,
                                          sourceY,
                                          targetX,
                                          targetY,
                                          sourcePosition,
                                          targetPosition,
                                          style = {},
                                          markerEnd,
                                          data,
                                      }) => {
    const {midpoints = []} = data || {};

    const points = [{x: sourceX, y: sourceY}, ...midpoints, {x: targetX, y: targetY}];

    let path = '';
    for (let i = 0; i < points.length - 1; i++) {
        const [segmentPath] = getSmoothStepPath({
            sourceX: points[i].x,
            sourceY: points[i].y,
            targetX: points[i + 1].x,
            targetY: points[i + 1].y,
            sourcePosition,
            targetPosition
        });
        path += segmentPath;
    }

    return (
        <>
            <path
                id={id}
                style={style}
                className="react-flow__edge-path stroke-black"
                d={path}
                markerEnd={markerEnd}
            />
        </>
    );
};

export default CustomEdge;
