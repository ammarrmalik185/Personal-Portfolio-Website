import styles from '../../styles/Home.module.css'
export default function InputField ({ id, placeholder, value, type, onChange }) {
    return (
        <input className={styles.formInput}
               id={id}
               type={type}
               value={value}
               onChange={v => onChange(v.target.value)}
               placeholder={placeholder}
        />
    );
}
