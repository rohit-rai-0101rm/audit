// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://knqvifvvmklefntuemhy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtucXZpZnZ2bWtsZWZudHVlbWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NDU0NjQsImV4cCI6MjA3MDEyMTQ2NH0.eLdnPWY2M-LsGzZv-1erDvUykI0zdRCUqWrNIKe_puk";

export const supabase = createClient(supabaseUrl, supabaseKey);
