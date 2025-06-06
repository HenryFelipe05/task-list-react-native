import { useState } from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, Text, View, TextInput, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

export default function AddTask(props) {
    const [desc, setDesc] = useState("")
    const [date, setDate] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(false)

    const handleDateChange = (event, selectedDate) => {
        if(selectedDate) {
            setDate(selectedDate)
        }
    } 

    const formattedDate = moment(date).format('ddd, D [de] MMMM [de] YYYY')

    return(
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType="slide">
                <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>

                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input} placeholder="Informe a descrição" onChange={setDesc} value={desc} />
                    <View>
                        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                            <Text style={styles.date}>{formattedDate}</Text>
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker value={date} mode="date" display="default" onChange={handleDateChange} />
                        )}
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    header: {
        backgroundColor: '#b13b44',
        color: '#fff',
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    input: {
        height: 40,
        margin: 15,
        backgroundColor: '#fff',
        borderColor: '#e3e3e3',
        borderRadius: 6
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: '#b13b44'
    }
});