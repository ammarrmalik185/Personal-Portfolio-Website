
export default function Header(){
    return (
            <div style={styles.headerMain}>
                <h1 className="font-" style={styles.headerText}>Ammar Portfolio Website</h1>
            </div>
        );
}

const styles = {
    headerMain:{
        height: 100,
        backgroundColor: "#464646",
        flex: 1,
        justifyContent: "center"
    },
    headerText:{
        color: "#FFFFFF",
        textAlign: "center",
    }
}
