import React, { useEffect } from "react";
import { Layout } from "antd";
import { AppFooter, AppHeader, Body } from "../../components";
import { getCatFact } from "../../services/api/cat";

const { Header, Footer, Content } = Layout;

export const Demo = () => {
  useEffect(() => {
    (async () => {
      const result = await getCatFact();
      console.log(`Result: ${result}`);
    })();
  }, []);
  return (
    <Layout>
      <Header style={{ background: "white" }}>
        <AppHeader />
      </Header>
      <Content>
        <Body />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};
