import React from "react";

class Footer extends React.Component {
  // membuat constructor props untuk menerima argument yg dikirim ke footer
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My Footer</h1>
        {this.props.paragraf()}
      </div>
    );
  }
}

export default Footer;
