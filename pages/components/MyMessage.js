//messages from me
function MyMessage({message}) {
    //if the message is an image
    if (message.attachments && message.attachments.length > 0) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: "right" }}
        />
      );
    }
    return (
      <div
        className="message"
        style={{
          float: "right",
          marginRight: "18px",
          color: "white",
          backgroundColor: "#001845",
        }}
      >
        {message.text}
      </div>
    );
}

export default MyMessage
