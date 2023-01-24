import React, { useEffect, useRef, useState } from 'react'
import styles from './Input.module.sass'

const Input = ({ error, disabled, helperText, startIcon, endIcon, value, size, row, multiline, fullWidth }) => {
  const [styleLabel, setStyleLabel] = useState('')
  const input = useRef(null)

  useEffect(() => {
    error ? setStyleLabel(prevState => styles.label__error + ' ' + prevState) : null // eslint-disable-line
    disabled ? (input.current.disabled = true, setStyleLabel(prevState => styles.label__disabled + ' ' + prevState)) : null // eslint-disable-line
    startIcon ? input.current.style.paddingLeft = '45px' : null // eslint-disable-line
    endIcon ? input.current.style.paddingRight = '45px' : null // eslint-disable-line
    size == 'sm' ? (input.current.style.height = '40px', input.current.style.width = '200px') : null // eslint-disable-line
    size == 'md' ? (input.current.style.height = '56px', input.current.style.width = '200px') : null // eslint-disable-line
    fullWidth ? (input.current.style.width = '100%') : null // eslint-disable-line
  }, []) // eslint-disable-line

  return (
    <>
      <label className={`${styles.label} ${styleLabel}`} htmlFor='input'>Label <br />
        {multiline === true ? <textarea className={styles.textarea} rows={row} defaultValue='Placeholder' /> : <input ref={input} id='input' className={styles.input} placeholder={value || 'Placeholder'} type='text' />}
        {startIcon === true ? <div className={styles.label__iconstart}><span className='material-symbols-outlined'>call</span></div> : ''}
        {endIcon === true ? <div className={styles.label__iconend}><span className='material-symbols-outlined'>lock</span></div> : ''}
        <div className={styles.label__text}>{helperText !== '' ? helperText : ''}</div>
      </label>
    </>
  )
}

export default Input
