import React from 'react'
import { useRef } from 'react'
import { Animated, Image, StyleSheet, View } from 'react-native'

function SplashScreen({ navigation }) {

    const FadeInView = (props) => {
        const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

        React.useEffect(() => {
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 5000,
                }
            ).start();
        }, [fadeAnim])

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {props.children}
            </Animated.View>
        );
    }

    setTimeout(() => {
        navigation.replace("SignUpPage")
    }, 4000)

    return (
        <View style={styles.container}>
            <FadeInView style={styles.container__fade}>
                <Image style={styles.container__image} source={require('../assets/logo.jpg')} />
            </FadeInView>
            {/* <Video
                source={require('../assets/Ekasmin_Video.mp4')}
                rate={1.0}
                volume={0}
                muted={true}
                // resizeMode={"cover"}
                repeat
                style={styles.container__video}
            /> */}

        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    container__fade: {
        flex: 1,
        width: 150,
        height: 180,
    },
    container__image: {
        flex: 1,
        width: "70vw",
        height: "80vh",
        resizeMode: 'contain',
        marginLeft: 60,
    }
})
