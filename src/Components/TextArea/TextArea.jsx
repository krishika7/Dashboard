import React from "react";
import ReactDOM from "react-dom";
import RichTextEditor from "react-rte";
import RichTextMarkdown from "./file.jsx";

export default class TextArea extends React.Component {
  state = {
    value: RichTextEditor.createEmptyValue(),
  };
  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value.toString("html"));
    }
  };
  render() {
    const toolbarConfig = {
      display: [
        "INLINE_STYLE_BUTTONS",
        "BLOCK_TYPE_BUTTONS",
        
      ],
      INLINE_STYLE_BUTTONS: [
        { label: "Bold", style: "BOLD" },
        { label: "Italic", style: "ITALIC" },
        { label: "Underline", style: "UNDERLINE" },
      ],
      BLOCK_TYPE_BUTTONS: [
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" },
      ],
    };
    return (
      <section>
        <RichTextEditor
          toolbarConfig={toolbarConfig}
          value={this.state.value}
          onChange={this.onChange}
        />
      </section>
    );
  }
}

