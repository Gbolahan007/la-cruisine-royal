import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../services/apiMenuItems';

function useCategory() {
  const { data: categoryMenu = [], isLoading: isLoadingCategoryMenu } = useQuery({
    queryKey: ['subcategories'],
    queryFn: () => getCategory(),
  });

  return { categoryMenu, isLoadingCategoryMenu };
}

export default useCategory;
