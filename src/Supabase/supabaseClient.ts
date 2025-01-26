// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yvcsztkfcepqukuvmlkd.supabase.co'; // Dein Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2Y3N6dGtmY2VwcXVrdXZtbGtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NTY2NjgsImV4cCI6MjA1MzAzMjY2OH0.0LPf0fGM-63e-wfBkURAsMOwz1BY0jJRjHOINFF53lI'; // Dein Supabase Anon Key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
