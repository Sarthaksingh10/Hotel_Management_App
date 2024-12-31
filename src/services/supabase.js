import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cwvypgtbvsbmoprczqrd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3dnlwZ3RidnNibW9wcmN6cXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNDAzNDEsImV4cCI6MjA0NzkxNjM0MX0.nqxT0n9jkv9tc9nUwdob7efcV3mRDg3CFQMwAeTjLps";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
