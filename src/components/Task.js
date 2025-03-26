import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"

import moment from "moment-timezone"
import 'moment/locale/pt-br'

import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).tz('America/Sao_Paulo').locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <View style={styles.checkContainer}>
                    {getCheckView(new Date())}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={styles.desc}>{props.desc}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
        </View>
    )
}

function getCheckView() {
    if(doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name='check' size={20} color='#fff'></Icon>
            </View>
        );
    } else{
        return (
            <View style={styles.pending}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: '10',
        backgroundColor: '#FFF'
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        color: '#222',
        fontSize: 15
    },
    date: {
        color: '#555',
        fontSize: 12
    }
})