"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/utils/FireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [change, setChange] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    if (!isEmailValid(email)) {
      setErrorMessage("Geçerli bir e-posta adresi girin.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Şifre en az 6 karakter olmalıdır.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.push("/");
      })
      .catch((error) => {
        setErrorMessage("Geçersiz e-posta veya şifre.");
      });
  };

  const handleSignIn = () => {
    if (!isEmailValid(email)) {
      setErrorMessage("Geçerli bir e-posta adresi girin.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Şifre en az 6 karakter olmalıdır.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.push("/");
      })
      .catch((error) => {
        setErrorMessage("Geçersiz e-posta veya şifre.");
      });
  };

  return (
    <div className="grid grid-cols-1 mx-auto w-96 bg-neutral-800 text-center font-bold my-10 gap-y-5 border border-gray-600 rounded-lg p-5">
      <h1 className="text-2xl border-b pb-3">GİRİŞ YAP</h1>

      <label htmlFor="email" className="text-start">
        E-posta
      </label>
      <input
        type="email"
        name="email"
        className=" p-1  bg-transparent border"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        autoComplete="on"
      />

      <label htmlFor="password" className="text-start">
        Şifre
      </label>
      <input
        type="password"
        name="password"
        className=" p-1 bg-transparent border"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        autoComplete="on"
      />

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {change ? (
        <button
          type="button"
          className="text-white bg-red-600 hover:bg-red-700 rounded-lg p-2"
          onClick={handleSignUp}
        >
          Kayıt Ol
        </button>
      ) : (
        <button
          type="button"
          className="text-white bg-red-600 hover:bg-red-700 rounded-lg p-2"
          onClick={handleSignIn}
        >
          Giriş Yap
        </button>
      )}
      <span className=" text-green-500">Ya Da</span>
      <button
        onClick={() => setChange(!change)}
        className="text-white bg-stone-600 hover:bg-stone-500  cursor-pointer rounded-lg p-2"
      >
        {!change ? "Kayıt Ol" : "Giriş Yap"}
      </button>
    </div>
  );
}
