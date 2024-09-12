import Head from "next/head";

const MetaName = () => {
  return (
    <Head>
      <title>Cek Khodam Online</title>
      <meta name="description" content="Cek Khodam Online" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="lanstheprodigy" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="keywords" content="cek khodam, cek khodam online" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content="Cek Khodam Online" />
      <meta property="og:description" content="Cek Khodam Online" />
      <meta property="og:image" content="/og.png" />
      
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaName;
