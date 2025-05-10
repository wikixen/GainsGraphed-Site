import { useFieldContext } from "."

interface TextFieldProps {
  label: string,
  type: string,
  placeholder: string
}

export const TextField = ({label, type, placeholder}: TextFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col gap-2 text-start">
      <label htmlFor={field.name} className="text-sm">
        {label}
      </label>
      <input
        className="py-3 px-4 text-sm border-1 border-gray-300 rounded-lg focus:outline-2 focus:outline-black  dark:focus:outline-orange-500 dark:bg-[#e8dad2] dark:text-black"
        type={ type }
        name={field.name}
        id={field.name}
        placeholder={placeholder}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
    </div>
  )
}