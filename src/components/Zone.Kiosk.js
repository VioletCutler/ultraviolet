import React from 'react';

import VideoScreen from './Zone.VideoScreen';

export default ({
    href = '',
    to = '',
    color = 'rgb(200, 200, 200)',
    position = [0, 0, 0],
    dimension = [0, 0, 0],
    ...props
}) => {
    return (
        <mesh
            position={position}
            {...props}
            onClick={() =>
                href
                    ? (window.location.href = href)
                    : window.appHistory.push(to)
            }
            onPointerUp={() =>
                href
                    ? (window.location.href = href)
                    : window.appHistory.push(to)
            }
        >
            <boxBufferGeometry attach="geometry" args={dimension} />
            <meshPhongMaterial
                attach="material"
                color="rgb(35, 35, 35)"
                roughness={0.5}
                opacity={1}
                transparent={false}
            />
        </mesh>
    );
};
