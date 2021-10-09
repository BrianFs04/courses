import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const Formulario = ({citas, setCitas, setMostrarForm, guardarCitasStorage}) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState();
  const [hora, setHora] = useState();
  const [sintomas, setSintomas] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = date => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    setFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
  };

  // Muestra u oculta el timePicker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarHora = hour => {
    const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
    setHora(hour.toLocaleString('en-US', opciones));
    hideTimePicker();
  };

  // Crear nueva cita
  const crearNuevaCita = () => {
    if (
      !paciente.trim() ||
      !propietario.trim() ||
      !telefono.trim() ||
      !fecha.trim() ||
      !hora.trim() ||
      !sintomas.trim()
    ) {
      mostrarAlerta();
      return;
    }

    // Crear nueva cita
    const cita = {paciente, propietario, telefono, fecha, hora, sintomas};
    cita.id = shortid.generate();

    // Agrega al state
    const nuevasCitas = [...citas, cita];
    setCitas(nuevasCitas);

    // Pasar las nuevas citas al storage
    guardarCitasStorage(JSON.stringify(nuevasCitas));

    // Ocultar el formulario y resetearlo
    setMostrarForm(false);

    setSintomas('');
    setPropietario('');
    setPaciente('');
    setHora('');
    setFecha('');
    setTelefono('');
  };

  // Muestra la alerta si falla la validación
  const mostrarAlerta = () => {
    Alert.alert(
      'Error', // Titulo
      'Todos los campos son obligatorios', // mensaje
      [
        {
          text: 'OK', // Arreglo de botones
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.formulario}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <TextInput
          style={styles.input}
          onChangeText={texto => setPaciente(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Dueño:</Text>
        <TextInput
          style={styles.input}
          onChangeText={texto => setPropietario(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Telefono contacto:</Text>
        <TextInput
          style={styles.input}
          onChangeText={texto => setTelefono(texto)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.label}>Fecha:</Text>
        <Button title="Seleccionar fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={confirmarFecha}
          onCancel={hideDatePicker}
          locale="es_ES"
          headerTextIOS="Elige una fecha"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
        <Text>{fecha}</Text>
      </View>
      <View>
        <Text style={styles.label}>Hora:</Text>

        <Button title="Seleccionar hora" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={confirmarHora}
          onCancel={hideTimePicker}
          locale="es_ES"
          headerTextIOS="Elige la fecha"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
        <Text>{hora}</Text>
      </View>
      <View>
        <Text style={styles.label}>Síntomas:</Text>
        <TextInput
          multiline
          style={styles.input}
          onChangeText={texto => setSintomas(texto)}
        />
      </View>
      <View>
        <TouchableHighlight
          onPress={() => crearNuevaCita()}
          style={styles.btnSubmit}>
          <Text style={styles.textoSubmit}>Crear nueva cita</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#7D024E',
    marginVertical: 10,
    marginBottom: 20,
  },
  textoSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Formulario;
