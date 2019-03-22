import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Head from 'next/head';

const CommonSprite = dynamic(() => import('../components/CommonSprite'), {
  loading: () => <></>,
});
const Icon = dynamic(() => import('../components/Icon'), {
  loading: () => <>loading icon</>,
});

const Wrapper = styled.div`
  width: 90%;
  background-color: grey;
  color: white;
  font-weight: bold;
`;

const BASE_URL = "localhost:3000/"

class Index extends Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    return {
      id
    };
  }

  constructor(props) {
    super(props);
    const {
      id,
    } = this.props;

    this.state = {
        id
    };
  }

  render() {
    const {
      id,
      pageTitle,
    } = this.state;

    return (
      <div>
        <Head>
          <link
            rel="canonical"
            href={BASE_URL}
          />
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <meta
            name="description"
            content="NextCordovaBoiler game"
          />
          <title>
            {pageTitle
              ? pageTitle
              : this.props.pageTitle
              ? this.props.pageTitle
              : 'NextCordovaBoiler'}
          </title>
        </Head>
        <Wrapper>
          <Icon iconName="girl" />
        </Wrapper>
        <CommonSprite />
      </div>
    );
  }
}
export default Index;
