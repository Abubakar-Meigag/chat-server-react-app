import axios from 'axios';

const DeleteMessage = ({ id, onDelete }) => {

  const url = `https://beko-meigag-chat-server.glitch.me/messages/delete/${id}`;

  const toDeleteMessage = async () => {
    try {
      const res = await axios.delete(url );
      if (res.status === 200) {
        console.log("message with the ID has been deleted");
      } else {
        console.log("message with the ID has been not deleted");
      }
      onDelete()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={toDeleteMessage} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default DeleteMessage


