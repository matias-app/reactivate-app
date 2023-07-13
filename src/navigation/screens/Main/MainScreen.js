import { StyleSheet, Image, View, StatusBar, TouchableOpacity, Text, Platform } from 'react-native'
import React from 'react'
import Stacks from '../../../global/stacks'
import Modal from 'react-native-modal'
import { FlatList } from 'react-native'
import { windowWidth } from '../../../global/tools'
import YoutubePlayer from 'react-native-youtube-iframe'
const DATA = [{
    key: 1,
    description: 'Gira la cabeza hacia tu lado derecho, hasta que tu mentón quede casi en la misma dirección que tu hombro .Sostén esta posición por el tiempo que has decidido cronometrar y luego vuelve al centro. Por último repite el ejercicio hacia el lado izquierdo.',
    image: require('../../../assets/seccion_1_ej_1.png')
}, {
    key: 2,
    description: 'Inclina tu cabeza hacia atrás, permanece en esa posición por el tiempo que has decidido cronometrar. Vuelve al centro y baja la cabeza mirando hacia el suelo y sostén tu cabeza por el tiempo que has decidido cronometrar.',
    image: require('../../../assets/seccion_1_ej_2.png')
}, {
    key: 3,
    description: 'Ubica tu mano izquierda detrás del cuello, después pasa la mano derecha por encima de la cabeza tomando el codo del brazo izquierdo y empujándolo hacia atrás, sostenlo por el tiempo que has decidido cronometrar y repite este estiramiento con el brazo derecho.',
    image: require('../../../assets/seccion_1_ej_3.png')
}, {
    key: 4,
    description: 'Ubica la mano derecha sobre el hombro izquierdo dejando el codo a la altura de los hombros, con la mano contraria trae el codo hacia el cuerpo. Mantén esta posición durante el tiempo que has decidido cronometrar  y posteriormente realiza el ejercicio también con la otra mano.',
    image: require('../../../assets/seccion_1_ej_4.png')
}, {
    key: 5,
    description: 'De pie coloca tus manos en la parte superior y posterior de la cabeza y junta los codos, lleva el mentón hacia el pecho y ejerce presión sobre tu cabeza hasta sentir el estiramiento realiza el estiramiento por el tiempo que has decidido cronometrar y luego regresa a la posición inicial.',
    image: require('../../../assets/seccion_1_ej_5.png')
}]

const DATA_2 = [{
    key: 1,
    description: 'Con las piernas ligeramente separadas eleva tus brazos y enlaza tus manos con las palmas mirando hacia arriba, inclina tu tronco y sostén durante  3 respiraciones, regresa e inclina tu tronco hacia el otro lado y sostén durante 3 respiraciones, vuelve a la posición inicial.',
    image: require('../../../assets/seccion_2_ej_1.png')
}, {
    key: 2,
    description: 'Con las piernas ligeramente separadas lleva un brazo detrás de la cabeza con el codo doblado, con la otra mano agarra el codo empujandolo hacia la nuca, regresa lentamente a la posición inicial.',
    image: require('../../../assets/seccion_2_ej_2.png')
}, {
    key: 3,
    description: 'De pie cruza los brazos y abrazate fuertemente intentando tocar las escápulas con tus manos hasta sentir el estiramiento, baja suavemente tu mentón manteniendo la posición por 30 segundos y regresa a la posición inicial.',
    image: require('../../../assets/seccion_2_ej_3.png')
}, {
    key: 4,
    description: 'De pie apóyate del lado de la pared con tu mano izquierda, cruza la pierna derecha por detrás de la izquierda, lleva por encima de la cabeza el brazo derecho y coloca la mano en la pared, desplaza la cadera hacia afuera hasta sentir el estiramiento durante 30 segundos  y regresa a la posición inicial.',
    image: require('../../../assets/seccion_2_ej_4.png')
}, {
    key: 5,
    description: 'De pie frente a una pared, lleva una pierna hacia adelante y apoya los antebrazos sobre la pared colocando su cabeza sobre ellos, regresa a la posición inicial.',
    image: require('../../../assets/seccion_2_ej_5.png')
}]

const DATA_3 = [{
    key: 1,
    description: 'Coloca los puños cerrados de ambas manos durante 5 segundos, luego extiende los dedos 5 segundos más y vuelve a cerrar los puños lentamente.',
    image: require('../../../assets/seccion_3_ej_1.png')
}, {
    key: 2,
    description: 'Apoya  las manos una sobre la otra. Luego aprieta los dedos durante 5 segundos. Cuando finalices, deja de apretar tus dedos pero sigue conservándolos juntos. Levanta los codos hasta que comiences a sentir tensión en la parte inferior de los dedos. Sostén  la posición durante 5 segundos manteniendo la tensión de los mismos.',
    image: require('../../../assets/seccion_3_ej_2.png')
}, {
    key: 3,
    description: 'Coloca los dedos tocando la palma de la mano. Luego flexiona los mismos hacia arriba y vuelve a extenderlo suavemente hasta tocar la palma de la mano nuevamente.',
    image: require('../../../assets/seccion_3_ej_3.png')
}, {
    key: 4,
    description: 'Toca cada uno de los dedos con el pulgar formando una “O”. Para que el movimiento sea efectivo, debes doblar los dedos, no solamente acercarlos al pulgar. Repite esta acción en ambas manos.',
    image: require('../../../assets/seccion_3_ej_4.png')
}, {
    key: 5,
    description: 'Junta ambas palmas de las manos y llévalas hacia un lado y hacia el otro lado promoviendo la flexión de la muñeca con los dedos extendidos, realiza este ejercicio de cada lado.',
    image: require('../../../assets/seccion_3_ej_5.png')
}]


const DATA_4 = [{
    key: 1,
    description: 'De pie y con las piernas ligeramente separadas dobla una rodilla y con la mano del mismo lado agarra tu tobillo y llevalo hacia tus glúteos , al mismo tiempo eleva tu brazo contrario hasta la altura del hombro para mantener el equilibrio, regresa lentamente  a la posición inicial.',
    image: require('../../../assets/seccion_4_ej_1.png')
}, {
    key: 2,
    description: 'Sentado en una silla, eleva y estira una pierna hacia adelante, manteniendo los cuádriceps contraídos. Se puede hacer de forma alternada o con ambas piernas al mismo tiempo.',
    image: require('../../../assets/seccion_4_ej_2.png')
}, {
    key: 3,
    description: 'Partimos desde una posición completamente recta de pie, llevamos una de nuestras piernas hacia adelante y flexionamos, manteniendo la otra pierna estirada, después cambiamos de pierna y realizamos el mismo estiramiento.',
    image: require('../../../assets/seccion_4_ej_3.png')
}, {
    key: 4,
    description: 'Llevamos todo el peso del cuerpo hacia un lado flexionando la rodilla (que no sobrepase la rodilla de la punta del pie) mientras la otra pierna está estirada mantenemos esta posición por el tiempo que quieras y cambiamos hacia el otro lado para estirar la rodilla.',
    image: require('../../../assets/seccion_4_ej_4.png')
}, {
    key: 5,
    description: 'De pie, sube la rodilla de una de las piernas hasta la altura del pecho. Con ayuda de las manos sostenla por 10 segundos. Repite el ejercicio con cada pierna.',
    image: require('../../../assets/seccion_4_ej_5.png')
}]

export default function MainScreen({ navigation })
{
    const [visible, setVisible] = React.useState(false)
    const [step, setStep] = React.useState(1)

    const [visible_2, setVisible_2] = React.useState(false)
    const [step_2, setStep_2] = React.useState(1)

    const [visible_3, setVisible_3] = React.useState(false)
    const [step_3, setStep_3] = React.useState(1)


    const [visible_4, setVisible_4] = React.useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Text style={styles.title}>Actividades a realizar</Text>
                </View>
            </View>
            <View style={styles.center}>
                <View style={styles.left}>
                    <TouchableOpacity
                        style={styles.activities}
                        onPress={() =>
                        {
                            setVisible(true)
                            setStep(1)
                        }}
                    >
                        <Image
                            source={require('../../../assets/seccion_1.jpg')}
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.activities} onPress={() =>
                    {
                        setVisible_2(true)
                        setStep_2(1)
                    }}>
                        <Image
                            source={require('../../../assets/seccion_2.png')}
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.activities} onPress={() =>
                    {
                        setVisible_3(true)
                        setStep_3(1)
                    }}>
                        <Image
                            source={require('../../../assets/seccion_3.png')}
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>

                </View>
                <View style={styles.right}>
                    <TouchableOpacity style={styles.activities} onPress={() =>
                    {
                        setVisible_4(true)
                    }}>
                        <Image
                            source={require('../../../assets/seccion_4.png')}
                            style={{
                                width: 150,
                                height: 150 * 3.28,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                isVisible={visible}
                onBackdropPress={() => setVisible(false)}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                animationInTiming={800}
                animationOutTiming={800}
                onBackButtonPress={() => setVisible(false)}
                onModalHide={() => setVisible(false)}
                avoidKeyboard={true}
            >
                <View style={{ width: '100%', height: '75%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end', padding: 20, flexDirection: 'row' }}
                        onPress={() => setVisible(false)}
                    >
                        <Text style={{  fontSize: 16, fontWeight: '700', flex: 1 }}>Movimiento de cuello y cabeza</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text>Paso {step} de {DATA.length}</Text>
                        <FlatList
                            data={DATA}
                            keyExtractor={item => item.key.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 10
                            }}
                            onMomentumScrollEnd={ev =>
                            {
                                const index = Math.floor(ev.nativeEvent.contentOffset.x / windowWidth)
                                setStep(index + 1)
                            }}
                            snapToInterval={windowWidth}
                            renderItem={({ item, index }) =>
                            {
                                return (
                                    <View
                                        style={{
                                            width: windowWidth,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Image
                                            source={item.image}
                                            style={{
                                                width: '100%',
                                                height: 200,
                                                marginHorizontal: 10
                                            }}
                                            resizeMode='contain'
                                        />

                                        <Text style={{
                                            
                                            width: '90%',
                                            marginTop: 10
                                        }}>{item.description}</Text>
                                    </View>
                                )
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                borderRadius: 10,
                                backgroundColor: '#1E232C',
                                alignItems: 'center',
                                height: 56,
                                justifyContent: 'center',
                                marginTop: 20
                            }}
                            onPress={() =>
                            {
                                setVisible(false)
                                navigation.navigate(Stacks.ActivityOne)
                            }}>
                            <Text style={{ color: 'white',  fontSize: 16 }}>Iniciar cronómetro</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                isVisible={visible_2}
                onBackdropPress={() => setVisible_2(false)}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                animationInTiming={800}
                animationOutTiming={800}
                onBackButtonPress={() => setVisible_2(false)}
                onModalHide={() => setVisible_2(false)}
                avoidKeyboard={true}
            >
                <View style={{ width: '100%', height: '75%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end', padding: 20, flexDirection: 'row' }}
                        onPress={() => setVisible_2(false)}
                    >
                        <Text style={{  fontSize: 16, fontWeight: '700', flex: 1 }}>Movimiento de brazos y tronco</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text>Paso {step_2} de {DATA_2.length}</Text>
                        <FlatList
                            data={DATA_2}
                            keyExtractor={item => item.key.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 10
                            }}
                            onMomentumScrollEnd={ev =>
                            {
                                const index = Math.floor(ev.nativeEvent.contentOffset.x / windowWidth)
                                setStep_2(index + 1)
                            }}
                            snapToInterval={windowWidth}
                            renderItem={({ item, index }) =>
                            {
                                return (
                                    <View
                                        style={{
                                            width: windowWidth,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Image
                                            source={item.image}
                                            style={{
                                                width: '100%',
                                                height: 320,
                                                marginHorizontal: 10
                                            }}
                                            resizeMode='contain'
                                        />

                                        <Text style={{
                                            
                                            width: '90%',
                                            marginTop: 10
                                        }}>{item.description}</Text>
                                    </View>
                                )
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                borderRadius: 10,
                                backgroundColor: '#1E232C',
                                alignItems: 'center',
                                height: 56,
                                justifyContent: 'center',
                                marginTop: 20
                            }}
                            onPress={() =>
                            {
                                setVisible(false)
                                navigation.navigate(Stacks.ActivityOne)
                            }}>
                            <Text style={{ color: 'white',  fontSize: 16 }}>Iniciar cronómetro</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                isVisible={visible_3}
                onBackdropPress={() => setVisible_3(false)}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                animationInTiming={800}
                animationOutTiming={800}
                onBackButtonPress={() => setVisible_3(false)}
                onModalHide={() => setVisible_3(false)}
                avoidKeyboard={true}
            >
                <View style={{ width: '100%', height: '60%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end', padding: 20, flexDirection: 'row' }}
                        onPress={() => setVisible_3(false)}
                    >
                        <Text style={{  fontSize: 16, fontWeight: '700', flex: 1 }}>Movimiento de manos</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text>Paso {step_3} de {DATA_3.length}</Text>
                        <FlatList
                            data={DATA_3}
                            keyExtractor={item => item.key.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 10
                            }}
                            onMomentumScrollEnd={ev =>
                            {
                                const index = Math.floor(ev.nativeEvent.contentOffset.x / windowWidth)
                                setStep_2(index + 1)
                            }}
                            snapToInterval={windowWidth}
                            renderItem={({ item, index }) =>
                            {
                                return (
                                    <View
                                        style={{
                                            width: windowWidth,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Image
                                            source={item.image}
                                            style={{
                                                width: '100%',
                                                height: 320,
                                                marginHorizontal: 10
                                            }}
                                            resizeMode='contain'
                                        />

                                        <Text style={{
                                            
                                            width: '90%',
                                        }}>{item.description}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            </Modal>

            <Modal
                isVisible={visible_4}
                onBackdropPress={() => setVisible_4(false)}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                animationInTiming={800}
                animationOutTiming={800}
                onBackButtonPress={() => setVisible_4(false)}
                onModalHide={() => setVisible_4(false)}
                avoidKeyboard={true}
            >
                <View style={{ width: '100%', height: '55%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end', padding: 20, flexDirection: 'row' }}
                        onPress={() => setVisible_4(false)}
                    >
                        <Text style={{  fontSize: 16, fontWeight: '700', flex: 1 }}>Movimiento de piernas</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text>Paso {step_3} de {DATA_3.length}</Text>
                        <FlatList
                            data={DATA_4}
                            keyExtractor={item => item.key.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 10
                            }}
                            onMomentumScrollEnd={ev =>
                            {
                                const index = Math.floor(ev.nativeEvent.contentOffset.x / windowWidth)
                                setStep_2(index + 1)
                            }}
                            snapToInterval={windowWidth}
                            renderItem={({ item, index }) =>
                            {
                                return (
                                    <View
                                        style={{
                                            width: windowWidth,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Image
                                            source={item.image}
                                            style={{
                                                width: '100%',
                                                height: 320,
                                                marginHorizontal: 10
                                            }}
                                            resizeMode='contain'
                                        />

                                        <Text style={{
                                            
                                            width: '90%',
                                        }}>{item.description}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>                   
                        {/* <YoutubePlayer
                            height={200}
                            play={true}
                            videoId={'GmO1Uy4_pLM'}
                            // onChangeState={onStateChange}
                            // onReady={() => loadingRef?.current?.hide()}
                            webViewStyle={{ opacity: 0.99 }}
                            webViewProps={{
                                renderToHardwareTextureAndroid: true,
                                androidLayerType:
                                    Platform.OS === 'android' && Platform.Version <= 22 ? 'hardware' : 'none'
                            }}
                        /> */}
                        {/* <Text>En esta oportunidad se presenta a un experto en pausas activas con una linda dinámica de baile.</Text> */}
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        flexDirection: 'row',
    },
    left: {
        flex: 0.5
    },
    right: {
        flex: 0.5
    },
    activities: {
        margin: 10,
        borderRadius: 5
    },
    top: {
        height: 100
    },
    title: {
        fontSize: 30,
        
        fontWeight: '800'
    }
})