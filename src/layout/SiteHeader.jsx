import React from "react";
import { Link } from "gatsby";


export default class SiteHeader extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div class="p-site-header">
        <Link to="/">HOME</Link>
      </div>
    );
  }
}
