import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://stqdzwlwplewvcimegcq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0cWR6d2x3cGxld3ZjaW1lZ2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MTg0ODYsImV4cCI6MjAxNjk5NDQ4Nn0.0ODA8GA3_Uim0oIT5WHF4Z99-1L1uIDIcMLl18350H8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
