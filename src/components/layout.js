import React from "react";
import "../assets/scss/main.scss";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    state = {
      loading: 'is-loading'
    }  

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        return (
            <div className={`body ${this.state.loading}`}>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
