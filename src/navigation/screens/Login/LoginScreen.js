import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import React from 'react'
import { TouchableOpacity, ImageBackground, Image } from 'react-native'
import Stacks from '../../../global/stacks'

export default function LoginScreen({ navigation })
{
    const onContinue = () => {
        navigation.navigate(Stacks.Main)
    }

    return (
            <ImageBackground
                source={require('../../../assets/bg.png')}
                style={{
                    marginTop: StatusBar.currentHeight + (Platform.OS=='ios' ? 55 : 0),
                    flex:1
                }}
                resizeMode='stretch'
            >
                  <View style={styles.logo}>
                        <Image
                            source={require('../../../assets/banner-1.png')}
                            style={styles.image}
                            resizeMode='stretch'
                            resizeMethod='resize'
                        />
                    </View>
         
        <View style={styles.container}>
                {/* <View style={styles.header}> */}
                {/* </View> */}
            <View style={styles.top}>
                {/* <Text style={styles.title}>Reactivate</Text> */}
                <Image
                            source={require('../../../assets/title.png')}
                            style={styles.imageTitle}
                            resizeMode='center'
                            resizeMethod='resize'
                        />
            </View>
            <TouchableOpacity style={styles.footer} onPress={onContinue}>
                <Text style={styles.textFooter}>COMENZAR</Text>
            </TouchableOpacity>
            {/* <View style={{backgroundColor:'#99DBF5',opacity:0.9, borderRadius:15,paddingVertical:8,paddingHorizontal:8,borderWidth:1,borderStyle:'dotted',borderColor:'#9AC5F4'}}> */}
            <Text style={styles.descriptionApp}>Esta app tiene como finalidad crear un momento de relajación y recreación para evitar la perdida de concentración hacia las actividades de trabajo, así mismo promueve la actividad fisica como habito de vida saludable.</Text>
            {/* </View> */}
            </View>
            </ImageBackground >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15
    },
    header: {
        height: '30%'
    },
    top: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 15,
        marginBottom: 30
    },
    logo: {
        width: '100%',
        marginTop: 20
    },
    image: {
        width: '100%',
        height: 270
    },
    imageTitle: {
        width: '100%',
        height: 120
    },
    title: {
        // fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textLogin: {
        // fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 16,
        color: 'white'
    },
    btnLogin: {
        width: "100%",
        backgroundColor: '#1E232C',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        height: 56
    },
    btnRegister: {
        width: "100%",
        borderColor: '#1E232C',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56
    },
    textRegister: {
        // fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 16,
        color: '#1E232C'
    },
    center: {
        marginTop: 20,
        marginBottom: 20,
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    footer: {
        borderWidth:2,
        borderRadius:10,
        borderColor:'white',
        paddingVertical:10,
        paddingHorizontal:10,
        margin:10,
        backgroundColor:'#3ba9e6',
        alignItems: 'center',
        marginBottom: 20
    },
    textFooter: {
    fontSize:16,
    color:'white',
        // fontFamily: 'Roboto',
    },
    descriptionApp:{marginTop:5, fontSize:12, textAlign:'center',
    // fontFamily: 'Roboto', 
    lineHeight:19}
})