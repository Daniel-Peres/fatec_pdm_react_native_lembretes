import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, ToastAndroid } from 'react-native';


export default function App() {

  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);

  const [contadorLembretes, setContadorLembretes] = useState (0);

  const capturarLembrete = (digitado) => {
    setLembrete(digitado);
  }

  const adicionarLembrete = () => {
    if(lembrete === ''){ // Se campo de mensagem estivar em branco não envia
      return ToastAndroid.show("Escreva um lembrete !", ToastAndroid.SHORT)
    }else{ 
      setLembretes(lembretes => {      
      setContadorLembretes(contadorLembretes +1);
      return [{key: contadorLembretes.toString(), value: lembrete}, ...lembretes];
    }) 
    ToastAndroid.show("Lembrete adicionado com sucesso !", ToastAndroid.SHORT)
    setLembrete(''); // apagando campo de mensagem
    console.log(lembrete);
    }
  }  

  return (
    <View style={styles.telaPrincipalView}>

      <View style={styles.lembreteView}>
        {/* usuário irá inserir lembretes aqui */}
        <TextInput 
          placeholder="Lembrar..."
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete} />
        <View style= {{width: '80%', marginTop: 8}}>
          <Button title="Adicionar Lembrete" 
          onPress={adicionarLembrete} />
        </View>
        <View style= {{width: '80%', marginTop: 8}}>
          <Button title="Limpar Lembretes" 
          onPress={
            () => setLembretes([])            
          } />
        </View>
      </View>
      <View>
        <FlatList
          data={lembretes}
          renderItem={
            lembrete => (
              <View style={styles.itemNaLista}>
                <Text style={styles.FlatList}>{lembrete.item.value}</Text>
              </View>
            )
          } />

         {/* aqui será exibida a lista de lembretes
         <ScrollView> 
         {
           lembretes.map(lembrete => 
           <View 
           key={lembrete}
           style={styles.itemNaLista}>
            <Text style={{ fontSize: 16, textAlign: 'center'}}>{lembrete}</Text>
            </View>)
         }
         </ScrollView>
         */}
         
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemNaLista:{
    padding: 12,
    backgroundColor: '#EEE',
    borderColor:'#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    fontSize: 16,
    width: '80%',
    alignSelf: 'center'
  },

  telaPrincipalView : {
    padding: 50,
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
  },
  FlatList:{
    fontSize: 16, 
    textAlign: 'center'
  }
});
