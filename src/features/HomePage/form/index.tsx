'use client'

import React, { useState } from 'react'
import { TextField, Button, makeStyles, Theme, createStyles, Container, Typography, TextareaAutosize } from '@mui/material'
import cls from './styles.module.scss'

interface FormState {
  email: string
  comment: string
}

const initialFormState: FormState = {
  email: '',
  comment: '',
}

const HomeForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Отправленная форма:', formState)
    setFormState(initialFormState)
  }

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className={cls.root}>
      <div className={cls.root}>
        <Typography component="h1" variant="h5">
          Оставьте вашу заявку
        </Typography>
        <form className={cls.form} onSubmit={handleSubmit}>
          <TextField
            className={cls.input}
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={formState.email}
            onChange={handleChange}
          />
          <TextareaAutosize
            className={cls.textField}
            required
            minRows={10}
            placeholder="Комментарий"
            name="comment"
            id="comment"
            value={formState.comment}
            onChange={handleTextareaChange} 
          />
          <Button
            className={cls.submitButton}
            type="submit"
            variant="contained"
            color="primary"
          >
            Отправить
          </Button>
        </form>
      </div>
    </div>
  )
}

export default HomeForm
