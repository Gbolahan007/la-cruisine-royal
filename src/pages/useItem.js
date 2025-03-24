import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMenuItemsBySubcategory } from '../services/apiMenuItems';

function useItem() {
  const { slug } = useParams();
  const { data: itemData = [], isLoading: isLoadingItemData } = useQuery({
    queryKey: ['menuitems', slug],
    queryFn: () => getMenuItemsBySubcategory(slug),
  });

  return { itemData, isLoadingItemData };
}

export default useItem;
