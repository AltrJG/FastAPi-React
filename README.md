# FastAPI & React Users App

Este proyecto es una aplicación web que utiliza **FastAPI** como backend y **React** como frontend. Permite listar usuarios de una base de datos simulada.

## Características

- **FastAPI** expone una API REST en el backend para obtener datos de usuarios.
- **React** con **Vite** se encarga del frontend.
- **CORS** habilitado para permitir el intercambio de recursos entre frontend y backend.

## Requisitos

### Dependencias de Python

- Python 3.9 o superior
- FastAPI
- Uvicorn

Instala las dependencias necesarias ejecutando:

```bash
pip install -r requirements.txt

npm install

uvicorn main:app --reload

npm run dev