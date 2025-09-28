import React from "react";
import { GifList } from "../styles/GifList";

export default class GifList extends React.Component {
  render() {
    const { api } = this.props;
    console.log(api);
    return (
      <GifList>
        {api.map((e) => {
          return (
            <li key={e.id}>
              <p>{e.content_description} </p>
              <img src={e.media_formats.gif.url} alt={e.content_description} />
            </li>
          );
        })}
      </GifList>
    );
  }
}
