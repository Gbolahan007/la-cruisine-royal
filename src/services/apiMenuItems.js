import supabase from './supabase';

export async function getHomeMenuItems() {
  const { data, error } = await supabase.from('menuitems').select('*');
  if (error) {
    console.error(error);
    throw new Error('MenuItems could not be loaded');
  }
  console.log(data);
}
