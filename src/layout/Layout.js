import { React, useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [themeType, setThemeType] = useState("dark");

  return (
    <Container>
      <Header themeType={themeType} setThemeType={setThemeType} />
      <main style={{ marginTop: "120px" }}>{children}</main>
      <Footer style={{}} />
    </Container>
  );
};
