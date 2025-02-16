import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vwzfwcwsvsdfbjatanwa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3emZ3Y3dzdnNkZmJqYXRhbndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NjE0MzYsImV4cCI6MjA1MzAzNzQzNn0.s65klO1CHhWEWXDVOk0DCEc3mNIVpRlBtyr2kGmVWys";
export const supabase = createClient(supabaseUrl, supabaseKey);
