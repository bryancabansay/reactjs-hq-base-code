import React from "react";
import { Layout } from "antd";
import { AppFooter, AppHeader, Body } from "../../components";

const { Header, Footer, Content } = Layout;

export const Demo = () => {
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
