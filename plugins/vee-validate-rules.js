import { defineRule } from "vee-validate";
import {
  required,
  email,
  min,
  alpha_dash,
  max,
  numeric,
  is,
  confirmed,
  url,
} from "@vee-validate/rules";

// Define rules
defineRule("required", required);
defineRule("email", email);
defineRule("alpha_dash", alpha_dash);
defineRule("min", min);
defineRule("max", max);
defineRule("numeric", numeric);
defineRule("is", is);
defineRule("url", url);
defineRule("confirmed", confirmed);
