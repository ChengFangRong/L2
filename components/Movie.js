import {Image, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";



const Movie = ({title, year, icon_name, poster}) => {
    return (
        <View>
            <Image source={poster} style={{width:400, height:500}}></Image>
            <Text>
                {title} {year}
            </Text>
            <Icon name={icon_name} size={100} color={"#B23B23"} />

        </View>
    );
};

export default Movie; //so app.js can see
