import Head from "next/head";

interface CustomHeadProps {
  title: string;
  icon: string;
}

export default function CustomHead({ title, icon }: CustomHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="This is the home page of News App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/jpg" href={icon} />
    </Head>
  );
}