import React, { useRef } from 'react';
import { useThree, useFrame } from 'react-three-fiber';

export default ({
    autoRotate = false,
    delayRotation,
    target = [1, 0.08, 0],
    ...props
}) => {
    const orbitControlsReference = useRef();
    const { camera, gl } = useThree();

    useFrame(() => {
        if (delayRotation) {
            return;
        }

        // We need to update frames when the camera is rotating without user input
        orbitControlsReference.current.update();
    });

    return (
        <orbitControls
            enabled
            enableDamping
            enablePan
            keyPanSpeed={40}
            ref={orbitControlsReference}
            args={[camera, gl.domElement]}
            rotateSpeed={0.5}
            dampingFactor={1}
            autoRotate={autoRotate}
            target={target}
            {...props}
        />
    );
};
