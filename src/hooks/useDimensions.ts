import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const useDimensions = () => {

    const initialwindow = Dimensions.get('window')
    const initialscreen = Dimensions.get('screen')

    const [dimensions, setDimensions] = useState({ window: initialwindow, screen: initialscreen });

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
        "change",
        ({ window, screen }) => {
            setDimensions({ window, screen });
        }
        );
        return () => subscription?.remove();
    });

    return dimensions

}

export default useDimensions