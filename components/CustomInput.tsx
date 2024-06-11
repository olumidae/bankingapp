import { Control, FieldPath } from "react-hook-form";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up")

interface AuthInputProps  {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    type: string
    placeholder: string;
    label: string;
}

const CustomInput = ( {control, name, type, placeholder, label}:AuthInputProps ) => {

    return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
}

export default CustomInput