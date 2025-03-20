const Item = ({ item, handleDelete }) => {
    return (
      <div>
        <p>{item.name}</p>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </div>
    );
  };
  
  export default Item;
  