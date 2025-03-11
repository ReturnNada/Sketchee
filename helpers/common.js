import { Dimensions } from "react-native";

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const heightPercentage = percentage => {
    return (percentage * deviceHeight) / 100;
}
const widthPercentage = percentage => {
    return (percentage * deviceWidth) / 100;
}