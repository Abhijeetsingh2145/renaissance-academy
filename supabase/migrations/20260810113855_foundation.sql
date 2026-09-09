-- Create notices table
CREATE TABLE notices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  expiry_date TIMESTAMPTZ NOT NULL,
  is_published BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Create enquiries table
CREATE TABLE enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_name TEXT NOT NULL,
  student_name TEXT NOT NULL,
  dob DATE NOT NULL,
  class_seeking TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  previous_school TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Notices Policies
-- 1. Public can read ONLY published AND non-expired notices
CREATE POLICY "Public can view active notices" 
ON notices 
FOR SELECT 
USING (is_published = true AND expiry_date > now());

-- 2. Authenticated Admin has full access (CRUD) to notices
CREATE POLICY "Admin full access notices" 
ON notices 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Enquiries Policies
-- 1. Authenticated Admin has full access to enquiries. 
-- Note: Public users have NO write access here. The public admission form will use 
-- the Supabase Service Role Key on the server side (bypassing RLS) to insert records.
CREATE POLICY "Admin full access enquiries" 
ON enquiries 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Function to automatically update the updated_at column on notices
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_notices_modtime
BEFORE UPDATE ON notices
FOR EACH ROW EXECUTE FUNCTION update_modified_column();
