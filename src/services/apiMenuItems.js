import supabase from './supabase';

export async function getHomeMenuItems() {
  const selectedItems = [
    'Yam and egg sauce',
    'Buffalo wings',
    'Egusi soup',
    'Spaghetti Bolognese',
    'Margherita Pizza',
    'Vegetable soup',
  ];

  const { data, error } = await supabase.from('menuitems').select('*').in('name', selectedItems); // Filter to select only these names

  if (error) {
    console.error(error);
    throw new Error('MenuItems could not be loaded');
  }

  return data;
}
export async function getCategory() {
  // Fetch first 5 rows for Menu
  const { data: menuData, error: menuError } = await supabase
    .from('subcategories')
    .select('*')
    .range(0, 4);

  if (menuError) {
    console.error(menuError);
    throw new Error('Menu categories could not be loaded');
  }

  // Fetch next 7 rows for Drinks
  const { data: drinksData, error: drinksError } = await supabase
    .from('subcategories')
    .select('*')
    .range(5, 11);

  if (drinksError) {
    console.error(drinksError);
    throw new Error('Drinks categories could not be loaded');
  }

  return { menu: menuData, drinks: drinksData };
}

export async function getMenuItemsBySubcategory(subcategoryId) {
  const { data, error } = await supabase
    .from('menuitems')
    .select('*')
    .eq('subcategory_id', subcategoryId);

  if (error) {
    console.error(error);
    throw new Error('Menu items could not be loaded');
  }

  return data;
}
