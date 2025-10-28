-- Create kines (kinésithérapeutes) table
CREATE TABLE public.kines (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  specialty TEXT,
  bio TEXT,
  photo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create services table
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER NOT NULL DEFAULT 30,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create appointments table
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_email TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  kine_id UUID REFERENCES public.kines(id) ON DELETE CASCADE,
  service_id UUID REFERENCES public.services(id) ON DELETE CASCADE,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  reason TEXT,
  status TEXT NOT NULL DEFAULT 'confirmed',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create availability_slots table for managing kine availability
CREATE TABLE public.availability_slots (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  kine_id UUID REFERENCES public.kines(id) ON DELETE CASCADE,
  day_of_week INTEGER NOT NULL, -- 0=Sunday, 1=Monday, etc.
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_available BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blocked_dates table for blocking specific dates
CREATE TABLE public.blocked_dates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  kine_id UUID REFERENCES public.kines(id) ON DELETE CASCADE,
  blocked_date DATE NOT NULL,
  reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.kines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availability_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_dates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access
CREATE POLICY "Kines are viewable by everyone" ON public.kines FOR SELECT USING (true);
CREATE POLICY "Services are viewable by everyone" ON public.services FOR SELECT USING (true);
CREATE POLICY "Availability slots are viewable by everyone" ON public.availability_slots FOR SELECT USING (true);
CREATE POLICY "Blocked dates are viewable by everyone" ON public.blocked_dates FOR SELECT USING (true);

-- RLS Policies for appointments - public can insert, authenticated users can manage
CREATE POLICY "Anyone can create appointments" ON public.appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view appointments" ON public.appointments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can update appointments" ON public.appointments FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete appointments" ON public.appointments FOR DELETE USING (auth.role() = 'authenticated');

-- RLS Policies for authenticated users to manage data
CREATE POLICY "Authenticated users can manage kines" ON public.kines FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage services" ON public.services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage availability" ON public.availability_slots FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage blocked dates" ON public.blocked_dates FOR ALL USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_appointments_updated_at
BEFORE UPDATE ON public.appointments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample kines
INSERT INTO public.kines (name, specialty, bio, photo_url) VALUES
('Dr. Martin Dubois', 'Kinésithérapie du Sport', 'Spécialiste en réathlétisation et prévention des blessures sportives', '/placeholder.svg'),
('Mme Sophie Lambert', 'Rééducation Post-Opératoire', 'Experte en orthopédie et suivi chirurgical personnalisé', '/placeholder.svg');

-- Insert sample services
INSERT INTO public.services (name, description, duration_minutes) VALUES
('Bilan Initial', 'Évaluation complète de votre condition et élaboration du plan de traitement', 60),
('Séance de Suivi', 'Séance de rééducation standard', 30),
('Kinésithérapie du Sport', 'Réathlétisation et prévention des blessures', 45),
('Rééducation Post-Opératoire', 'Suivi après chirurgie orthopédique', 45),
('Kinésithérapie Respiratoire', 'Techniques spécifiques pour enfants et adultes', 30);

-- Insert sample availability (Monday to Friday, 9AM-6PM)
INSERT INTO public.availability_slots (kine_id, day_of_week, start_time, end_time, is_available)
SELECT k.id, d.day, '09:00'::TIME, '12:00'::TIME, true
FROM public.kines k
CROSS JOIN (SELECT generate_series(1, 5) as day) d;

INSERT INTO public.availability_slots (kine_id, day_of_week, start_time, end_time, is_available)
SELECT k.id, d.day, '14:00'::TIME, '18:00'::TIME, true
FROM public.kines k
CROSS JOIN (SELECT generate_series(1, 5) as day) d;