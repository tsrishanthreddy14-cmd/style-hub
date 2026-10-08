
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://whlvikcaacqvjjaciabp.supabase.co";
const supabaseKey = "sb_publishable_kPDnLfooHfZDK97wQSuj6w_O0dHs59g";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);