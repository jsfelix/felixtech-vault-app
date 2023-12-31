"use client";

import { WalletIcon } from "../../components/icons/WalletIcon";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { FormEvent, useCallback, useState } from "react";
import { api } from "../../services/api";

export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        event.preventDefault();
        if (password !== repeatPassword)
          throw new Error("Senhas não coincidem");
        console.log(username, password);
        await api.post("/vault", {
          username,
          password,
        });
        const userCredentials = Buffer.from(`${username}:${password}`).toString(
          "base64"
        );
        localStorage.setItem("fv_uc", userCredentials);
        router.push("/home");
      } catch (err) {
        setErrorMessage(
          (err as AxiosError<{ message: string }>).response?.data?.message ??
            (err as Error).message ??
            ""
        );
      }
    },
    [password, repeatPassword, router, username]
  );

  return (
    <div className="m-auto w-96">
      <h1 className="flex gap-2 text-xl font-semibold text-center p-4 items-center justify-center">
        <WalletIcon size={32} /> <span>Sign Up</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 items-center justify-center p-8 bg-zinc-900">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            className="w-80 bg-zinc-800 rounded-md p-2"
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-80 bg-zinc-800 rounded-md p-2"
          />
          <input
            type="password"
            id="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="repeat passowrd"
            className="w-80 bg-zinc-800 rounded-md p-2"
          />
          <input
            type="submit"
            value="Register"
            className="bg-slate-700 p-2 w-80 rounded-md cursor-pointer hover:bg-slate-800 transition-all"
          />
          <p className="text-red-500">{errorMessage}</p>
        </div>
      </form>
    </div>
  );
}
