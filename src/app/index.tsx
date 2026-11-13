import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Registro = {
  id: number;
  numero: number;
  hora: string;
};

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  const incrementarContador = () => {
    const nuevoContador = contador + 1;

    const ahora = new Date();

    const hora = [ahora.getHours(), ahora.getMinutes(), ahora.getSeconds()]
      .map((valor) => String(valor).padStart(2, "0"))
      .join(":");

    const nuevoRegistro: Registro = {
      id: nuevoContador,
      numero: nuevoContador,
      hora: hora,
    };

    setContador(nuevoContador);
    setRegistros((anteriores) => [nuevoRegistro, ...anteriores]);
  };

  const reiniciarContador = () => {
    setContador(0);
    setRegistros([]);
  };

  const superarLimite = contador > 10;

  return (
    <View style={estilos.body}>
      <View
        style={[estilos.container, superarLimite && estilos.containerAlerta]}
      >
        <Text style={estilos.titulo}>Interactividad con el DOM</Text>

        <Text style={estilos.descripcion}>
          Haz clic en el botón para incrementar el contador y registrar la hora
          exacta del evento en la tabla.
        </Text>

        <Text
          style={[estilos.contador, superarLimite && estilos.contadorAlerta]}
        >
          {contador}
        </Text>

        <TouchableOpacity
          style={estilos.botonVerde}
          onPress={incrementarContador}
        >
          <Text style={estilos.textoBoton}>¡Haz Clic Aquí!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botonRojo} onPress={reiniciarContador}>
          <Text style={estilos.textoBoton}>Reiniciar a cero</Text>
        </TouchableOpacity>

        <View style={estilos.tabla}>
          <View style={estilos.encabezado}>
            <Text style={estilos.celdaTitulo}>Nº Clic</Text>

            <Text style={estilos.celdaTitulo}>Hora</Text>
          </View>

          <ScrollView style={estilos.cuerpoTabla} nestedScrollEnabled>
            {registros.map((registro, index) => (
              <View
                key={registro.id}
                style={[estilos.fila, index % 2 === 0 && estilos.filaPar]}
              >
                <Text style={estilos.celda}>{registro.numero}</Text>

                <Text style={estilos.celda}>{registro.hora}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#f4f7f6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  container: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  containerAlerta: {
    backgroundColor: "#fff1f0",
    borderWidth: 2,
    borderColor: "#e74c3c",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 10,
  },

  descripcion: {
    fontSize: 14,
    color: "#555555",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },

  contador: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#3498db",
    marginVertical: 15,
  },

  contadorAlerta: {
    color: "#e74c3c",
  },

  botonVerde: {
    backgroundColor: "#2ecc71",
    padding: 14,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
    elevation: 3,
  },

  botonRojo: {
    backgroundColor: "#e74c3c",
    padding: 12,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },

  textoBoton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  tabla: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 6,
    overflow: "hidden",
  },

  encabezado: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  cuerpoTabla: {
    maxHeight: 170,
  },

  fila: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },

  filaPar: {
    backgroundColor: "#fafafa",
  },

  celdaTitulo: {
    flex: 1,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "#7f8c8d",
  },

  celda: {
    flex: 1,
    textAlign: "center",
    padding: 10,
    fontSize: 14,
    color: "#333333",
  },
});
