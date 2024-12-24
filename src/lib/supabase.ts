import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://octelfgaregtdhddhwxe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jdGVsZmdhcmVndGRoZGRod3hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMzMzOTgsImV4cCI6MjA1MDYwOTM5OH0.oZ08PzstLokXn-eBfmm0JY9nFTXwZ4W1Q5JPu5SlIkc'
);
