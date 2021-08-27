import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sections: {
        flex: 1, 
        backgroundColor: 'yellow', 
        padding: 10,
    },
    radioButton: {
        flex: 1, 
        flexDirection: 'row', 
        padding: 10, 
    },
    radioCircle: {
        borderRadius: 12, 
        height: 20, 
        width: 20, 
        left: 5, borderWidth: 1,
        borderColor: 'black',
    },
    radioText: {
        paddingLeft: 15,
    },
    footer: {
        height: 50,
    }
})

export default styles