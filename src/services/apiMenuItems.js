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

  const { data, error } = await supabase.from('menuitems').select('*').in('name', selectedItems);

  if (error) {
    console.error(error);
    throw new Error('MenuItems could not be loaded');
  }

  return data;
}

export async function getCategory() {
  // Define category names
  const menuCategories = [
    'desserts',
    'amuse bouche',
    'Wake Me Up',
    'Naija Pot',
    'Continental Meals',
  ];

  const drinkCategories = [
    'Soft Drinks',
    'Whiskey',
    'Energy Drinks',
    'Tequila',
    'Beer',
    'Champagne',
    'Vodka',
    'Cocktails',
  ];

  // Fetch menu categories
  const { data: menuData, error: menuError } = await supabase
    .from('subcategories')
    .select('*')
    .in('name', menuCategories);

  if (menuError) {
    console.error(menuError);
    throw new Error('Menu categories could not be loaded');
  }

  // Fetch drinks categories
  const { data: drinksData, error: drinksError } = await supabase
    .from('subcategories')
    .select('*')
    .in('name', drinkCategories);

  if (drinksError) {
    console.error(drinksError);
    throw new Error('Drinks categories could not be loaded');
  }

  return { menu: menuData, drinks: drinksData };
}

export async function getMenuItemsBySubcategory(slug) {
  const { data, error } = await supabase.from('menuitems').select('*').eq('slug', slug);

  if (error) {
    console.error(error);
    throw new Error('Menu items could not be loaded');
  }
  return data;
}

export async function getItem(slug) {
  const { data: subcategory, error: subError } = await supabase
    .from('subcategories')
    .select('id')
    .eq('slug', slug)
    .single();

  if (subError) {
    console.error(subError);
    throw new Error(' subcategories could not be loaded');
  }
  // Then, fetch all menu items linked to this subcategory
  const { data: items, error: itemError } = await supabase
    .from('menuitems')
    .select('*')
    .eq('subCategoryId', subcategory.id);

  if (itemError) {
    console.error(itemError);
    throw new Error(' items could not be loaded');
  }

  return items || [];
}
