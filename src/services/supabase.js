import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://wznwwammnonhnuuuugak.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6bnd3YW1tbm9uaG51dXV1Z2FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNjcyNzIsImV4cCI6MjA1Njg0MzI3Mn0.ZTSOtUqdsbQ_qcRzoXw6P44NooGxIYPGDzWM207LPzk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
