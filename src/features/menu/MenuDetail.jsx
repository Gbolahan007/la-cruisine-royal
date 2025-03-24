import Loader from '../../Loader';
import useGetItem from '../../pages/useGetItem';

function MenuDetail() {
  const { item, isLoadingItem } = useGetItem();

  if (isLoadingItem) return <Loader />;
  return <div>Product D</div>;
}

export default MenuDetail;
