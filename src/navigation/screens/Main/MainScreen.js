import { StyleSheet, Image, View, StatusBar, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import Stacks from '../../../global/stacks'
import Modal from 'react-native-modal'
import { FlatList } from 'react-native'
import { windowWidth } from '../../../global/tools'

const DATA = [{
    key: 1,
    description: 'Levantate, estira los brazos hacia atrás y vuélvete a sentar(repetir)',
    image: require('../../../assets/step_1.png')
}, {
    key: 2,
    description: 'Estira el cuello hacia un lado y luego el otro(repetir)',
    image: require('../../../assets/step_2.png')
}, {
    key: 3,
    description: 'Cruza un brazo por detrás de la cabeza y con el otro sujeta tu codo(repetir turnando ambos brazos)',
    image: require('../../../assets/step_3.png')
}, {
    key: 4,
    description: 'Une tus manos y estira tus brazos hacia arriba y bájalo(repetir)',
    image: require('../../../assets/step_4.png')
}, {
    key: 5,
    description: 'Une tus manos y estira tus brazos hacia un lado y luego hacia el otro lado(repetir)',
    image: require('../../../assets/step_5.png')
}, {
    key: 6,
    description: 'Ponte de pie, estira una pierna hacia atrás y regrésala al frente(repetir turnando ambas piernas)',
    image: require('../../../assets/step_6.png')
}, {
    key: 7,
    description: 'Apóyate en una silla e inclinate a 90 grados y levantate(repetir)',
    image: require('../../../assets/step_7.png')
}, {
    key: 8,
    description: 'Sentado, sube y estira tus brazos al frente y bájalos(repetir)',
    image: require('../../../assets/step_8.png')
}, {
    key: 9,
    description: 'Sentado, sube una pierta y sujeta tu rodilla, bájala y cambia de pierna(repetir)',
    image: require('../../../assets/step_9.png')
}, {
    key: 10,
    description: 'Sentado, cruza una pierna y sujeta tu rodilla(repetir alternando ambos piernas)',
    image: require('../../../assets/step_10.png')
}]

export default function MainScreen({ navigation })
{
    const [visible, setVisible] = React.useState(false)
    const [step, setStep] = React.useState(1)

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
                            source={require('../../../assets/onboarding_1.jpg')}
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.activities} onPress={() =>
                    {
                        setVisible(true)
                            setStep(1)
                    }}>
                        <Image
                            source={require('../../../assets/onboarding_2.jpg')}
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.activities} onPress={() =>
                    {
                        setVisible(true)
                        setStep(1)
                    }}>
                        <Image
                            source={require('../../../assets/onboarding_3.jpg')}
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
                        setVisible(true)
                        setStep(1)
                    }}>
                        <Image
                            source={require('../../../assets/onboarding_4.jpg')}
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
                        <Text style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: '700', flex: 1 }}>Estiramiento de manos</Text>
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
                                                width: 250,
                                                height: 320,
                                                marginHorizontal: 10
                                            }}
                                        />

                                        <Text style={{
                                            fontFamily: 'Roboto',
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
                            <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 16 }}>Iniciar cronómetro</Text>
                        </TouchableOpacity>
                    </View>
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
        fontFamily: 'Roboto',
        fontWeight: '800'
    }
})