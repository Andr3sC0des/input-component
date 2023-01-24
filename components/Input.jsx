import React, { useEffect, useRef, useState } from 'react'
import styles from './Input.module.sass'

const Input = ({ error, disabled, helperText, startIcon, endIcon, value, size, row, multiline, fullWidth }) => {
  const [styleLabel, setStyleLabel] = useState('')
  const input = useRef(null)

  useEffect(() => {
    if (error === true) {
      setStyleLabel(prevState => styles.label__error + ' ' + prevState)
    }
    if (disabled === true) {
      input.current.disabled = true
      setStyleLabel(prevState => styles.label__disabled + ' ' + prevState)
    }
    if (startIcon === true) {
      input.current.style.paddingLeft = '45px'
    }
    if (endIcon === true) {
      input.current.style.paddingRight = '45px'
    }
    if (size === 'sm') {
      input.current.style.height = '40px'
      input.current.style.width = '200px'
    }
    if (size === 'md') {
      input.current.style.height = '56px'
      input.current.style.width = '200px'
    }
    if (fullWidth === true) {
      input.current.style.width = '100%'
    }
  }, [])

  return (
    <>
      <label className={`${styles.label} ${styleLabel}`} htmlFor='input'><div> Label</div>
        {multiline === true ? <textarea className={styles.textarea} rows={row} defaultValue='Placeholder' /> : <input ref={input} id='input' className={styles.input} placeholder={value || 'Placeholder'} type='text' />}
        {startIcon === true ? <div className={styles.label__iconstart}><span class='material-symbols-outlined'>call</span></div> : ''}
        {endIcon === true ? <div className={styles.label__iconend}><span class='material-symbols-outlined'>lock</span></div> : ''}
        <div className={styles.label__text}>{helperText !== '' ? helperText : ''}</div>
      </label>
    </>
  )
}

export default Input
