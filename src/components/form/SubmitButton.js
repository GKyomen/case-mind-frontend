import styles from './SubmitButton.module.css'

function SubmitButton({ text }) {
  return (
    <div>
      <button className={styles.form_btn}>{text}</button>
    </div>
  )
}

export default SubmitButton
