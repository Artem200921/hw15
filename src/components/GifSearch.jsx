import React from "react";

export class GifSearch extends React.Component {
  render() {
    return (
      <>
        <form action="" onSubmit={this.props.submit} >
          <input type="text" placeholder="write search request" />
          <button type="submit">Пошук</button>
        </form>
      </>
    );
  }
}
