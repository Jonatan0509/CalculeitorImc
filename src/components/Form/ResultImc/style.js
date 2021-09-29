import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 20,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    information: {
        fontSize: 18,
        color: "#ff0043",
        fontWeight: "bold",
    },
    numberImc: {
        fontSize: 48,
        color: "#ff0043",
        fontWeight: "bold",
        marginBottom: 10,
    },
    boxSharebutton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 40,
    },
    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingVertical: 10,
    },
    sharedText: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
});

export default styles