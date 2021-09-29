import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from 'react-native';

import ResultImc from './ResultImc';
import styles from './style';

export default function Form(props) {
    const [height, setHeight] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [messageImc, setMessageImc] = useState(null);
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        let totalImc = ((weight / (heightFormat * heightFormat)).toFixed(2))

        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
        setImc(totalImc)
    }

    function verificatioImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo Obrigatório*")
        }
    }

    function validationImc() {
        console.log(imcList)
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        else {
            verificatioImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha a altura e peso")
        }
    }

    return (
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="EX. 1.75"
                        keyboardType="numeric"
                    />
                    <Text style={styles.errorMessage}>{errorMessage}</Text>

                    <Text style={styles.formLabel}>Peso</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="EX. 75.365"
                        keyboardType="numeric"
                    />
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TouchableOpacity
                        style={styles.buttonCalculetor}
                        onPress={() => { validationImc() }}
                    >
                        <Text style={styles.textButtonCalculetor}>{textButton}</Text>
                    </TouchableOpacity>

                </Pressable>
                :
                <View style={styles.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} ResultImc={imc} />
                    
                    <TouchableOpacity
                        style={styles.buttonCalculetor}
                        onPress={() => { validationImc() }}
                    >
                        <Text style={styles.textButtonCalculetor}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
            showsVerticalScrollIndicator={false}
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtrector={(item) => {
                    item.id
                }}
            />
        </View>
    );
}