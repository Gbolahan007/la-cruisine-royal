import useItem from './pages/useItem';

function ItemDetail() {
  const { itemData } = useItem();
  console.log(itemData);
  return <div></div>;
}

export default ItemDetail;
