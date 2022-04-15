import {} from 'react-native';
import { 
    responsiveScreenWidth,
    responsiveScreenHeight,
    responsiveScreenFontSize} from 'react-native-responsive-dimensions';

const WINDOW_WIDTH = 412;
const WINDOW_HEIGHT = 732;

export function widthPercentage(width: number): number {
    const percentage = (width / WINDOW_WIDTH) * 100;

    return responsiveScreenWidth(percentage);
}

export function heightPercentage(height: number): number {
    const percentage = (height / WINDOW_HEIGHT) * 100;

    return responsiveScreenHeight(percentage);
}

export function fontPercentage(size: number): number {
    const percentage = size * 0.125;

    return responsiveScreenFontSize(percentage);
}