import Item from "./Item";

const ItemList = ({ items, handleDelete }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </>
  );
};

export default ItemList;
