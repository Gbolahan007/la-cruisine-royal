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
