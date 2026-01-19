type FieldProps = {
    label?: string
    required?: boolean
    placeholder?: string
    name: string
    type?: string
    textarea?: boolean
}

export const Field = ({
    label,
    required,
    placeholder,
    name,
    type = 'text',
    textarea,
}: FieldProps) => {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label
                    htmlFor={name}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    {label}
                    {required && <span className="text-red-500"> *</span>}
                </label>
            )}

            {textarea ? (
                <textarea
                    id={name}
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    rows={4}
                    className="
            rounded-md
            border border-gray-300 dark:border-gray-700
            bg-transparent
            px-3 py-2
            text-white
            placeholder:text-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    className="
            rounded-md
            border border-gray-300 dark:border-gray-700
            bg-transparent
            px-3 py-2
            text-white
            placeholder:text-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
                />
            )}
        </div>
    )
}
