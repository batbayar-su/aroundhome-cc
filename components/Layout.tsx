import Head from "next/head";
import React from "react";
import style from "../styles/style.module.css";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Aroundhome - timeslots</title>
      </Head>
      <div className={style.container}>{children}</div>
    </>
  );
}
