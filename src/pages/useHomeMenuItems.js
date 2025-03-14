import { useQuery } from '@tanstack/react-query';
import { getHomeMenuItems } from '../services/apiMenuItems';

function useHomeMenuItem() {
  const { data: homeMenu, isLoading: isLoadingMenuData } = useQuery({
    queryKey: ['menuitems'],
    queryFn: getHomeMenuItems,
  });

  return { homeMenu, isLoadingMenuData };
}

export default useHomeMenuItem;
