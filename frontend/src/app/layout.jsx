import "../styles/global.css";

export const metadata = {
  title: "TC Criptomoedas",
  description: "Projeto de criptomoedas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}