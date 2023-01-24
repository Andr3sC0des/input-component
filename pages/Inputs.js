import Input from '@components/Input'
import React from 'react'
import styles from './Inputs.module.sass'
const Inputs = () => {
  return (
    <>
      <section className={styles.inputs}>
        <h1 className={styles.inputs__title}>Inputs</h1>

        <section className={styles.components}>

          <article className={styles.input}>
            <span className={styles.input__title}>{'<Input />'}</span>
            <div className={styles.input__component}>
              <Input />
            </div>
          </article>

          <article className={styles.input}>
            <span className={styles.input__title}>{'<Input error />'}</span>
            <div className={styles.input__component}>
              <Input error />
            </div>
          </article>

          <article className={styles.input}>
            <span className={styles.input__title}>{'<Input disabled />'}</span>
            <div className={styles.input__component}>
              <Input disabled />
            </div>
          </article>

          <section className={styles.col2}>

            <article className={styles.input}>
              <span className={styles.input__title}>{'<Input helperText="Some interesting text" />'}</span>
              <div className={styles.input__component}>
                <Input helperText='Some interesting text' />
              </div>
            </article>

            <article className={styles.input}>
              <span className={styles.input__title}>{'<Input helperText="Some interesting text" error />'}</span>
              <div className={styles.input__component}>
                <Input helperText='Some interesting text' error />
              </div>
            </article>

          </section>

          <section className={styles.col2}>

            <article className={styles.input}>
              <span className={styles.input__title}>{'<Input startIcon />'}</span>
              <div className={styles.input__component}>
                <Input startIcon />
              </div>
            </article>

            <article className={styles.input}>
              <span className={styles.input__title}>{'<Input endIcon />'}</span>
              <div className={styles.input__component}>
                <Input endIcon />
              </div>
            </article>

          </section>

          <article className={styles.input}>
            <span className={styles.input__title}>{'<Input value="text" />'}</span>
            <div className={styles.input__component}>
              <Input value='Text' />
            </div>
          </article>

          <section className={styles.col2}>

            <article className={styles.input}>
              <span className={styles.input__title}>{'<Input size="sm" />'}</span>
              <div className={styles.input__component}>
                <Input size='sm' />
              </div>
            </article>

            <article className={styles.input}>
              <span className={styles.input__title}>{'<Input size="md" />'}</span>
              <div className={styles.input__component}>
                <Input size='md' />
              </div>
            </article>

          </section>

          <article className={styles.input}>
            <span className={styles.input__title}>{'<Input fullWidth />'}</span>
            <div className={styles.input__component}>
              <Input fullWidth />
            </div>
          </article>

          <article className={styles.input}>
            <span className={styles.input__title}>{'<Input multiline row="4" />'}</span>
            <div className={styles.input__component}>
              <Input multiline row='2' />
            </div>
          </article>

        </section>

        <span className={styles.createdby}>created by <a href='https://github.com/Andr3sC0des'>andr3sc0des</a> - devChallenges.io</span>
      </section>
    </>
  )
}

export default Inputs
