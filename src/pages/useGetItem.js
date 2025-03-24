import { useQuery } from '@tanstack/react-query';
import { getItem } from '../services/apiMenuItems';
import { useParams } from 'react-router-dom';

function useGetItem() {
  const { slug } = useParams();
  const { data: item = [], isLoading: isLoadingItem } = useQuery({
    queryKey: ['menuitems', slug],
    queryFn: () => getItem(slug),
  });

  return { item, isLoadingItem };
}

export default useGetItem;
