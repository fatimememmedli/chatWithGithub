// Login.tsx
"use client";
import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "./../../firebase/config";
const Login: React.FC = () => {
  const router = useRouter();
  const githubLogin = () => {
    const auth = getAuth(app);
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;

        // The signed-in user info.
        const user = result.user;
        let localName = user.displayName;
        console.log("user", user);

        localStorage.setItem("user", JSON.stringify(localName));
        router.push("/pages/chat");

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const googleLogin = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user", user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <div className={styles.formGroup}>
        <input type="text" />
        <Input className="dark" type="text" label="Username" />
      </div>
      <div className={styles.formGroup}>
        <Input className="dark" type="text" label="Password" />
      </div>
      <button className={styles.loginButton}>Login</button>
      <div className={styles.socialButtons}>
        <button
          onClick={githubLogin}
          className={`${styles.socialButton} ${styles.githubButton}`}
        >
          <Image
            src="https://img.icons8.com/ios/452/github.png"
            alt="GitHub Logo"
            className={styles.socialLogo}
            width={50}
            height={50}
          />
          GitHub ile Giriş Yap
        </button>
        <button
          onClick={googleLogin}
          className={`${styles.socialButton} ${styles.googleButton}`}
        >
          <Image
            src="https://img.icons8.com/ios/452/google-logo.png"
            alt="Google Logo"
            className={styles.socialLogo}
            width={50}
            height={50}
          />
          Google ile Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default Login;
