import React from "react";
import { GifListStyles } from "../styles/GifListStyles";

export default class GifList extends React.Component {
  render() {
    const { api } = this.props;
    console.log(api);
    return (
      <GifListStyles>
        {api.map((e) => {
          return (
            <li key={e.id}>
              <p>{e.content_description} </p>
              <img src={e.media_formats.gif.url} alt={e.content_description} />
            </li>
          );
        })}
      </GifListStyles>
    );
  }
}
