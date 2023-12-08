import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAbdxqhL8jJjQutI2MKnxf4USx1s6fujfI",
    authDomain: "login1-12f59.firebaseapp.com",
    projectId: "login1-12f59",
    storageBucket: "login1-12f59.appspot.com",
    messagingSenderId: "245791262800",
    appId: "1:245791262800:web:a8fbafdc79b1eea9ef6955",
    measurementId: "G-CVZ0S5JV31"
  };

const app = initializeApp(firebaseConfig);

const LoginGoogle = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Verificar si la aplicación ya está inicializada
    if (!firebase.apps.length) {
      initializeApp(firebaseConfig);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, email, password);

      alert('Bienvenido');
      console.log('Inicio de sesión exitoso:', response.user);
    } catch (error) {
      alert('Usuario y/o contraseña inválidos');
      console.error('Error durante el inicio de sesión:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);

      alert('Inicio de sesión con Google exitoso');
      console.log('Usuario de Google:', response.user);
    } catch (error) {
      alert('Error durante el inicio de sesión con Google');
      console.error('Error durante el inicio de sesión:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <button onClick={handleGoogleLogin}>Iniciar Sesión con Google</button>
    </div>
  );
};

export default LoginGoogle;