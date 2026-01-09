import React, { useRef } from 'react'


type OtpInputProps = {
    value: string,
    onChange: (value: string) => void
    length?: number
}

export const OtpForm = ({ value, onChange, length = 6 }: OtpInputProps) => {
    const inputRef = useRef<Array<HTMLInputElement | null>>([])

    const handleChange = (digit: string, index: number) => {
        if (!/^\d?$/.test(digit)) return

        const otpArray = value.split("")
        otpArray[index] = digit
        onChange(otpArray.join(""))

        if (digit && index < length - 1) {
            setTimeout(() => {
                inputRef.current[index + 1]?.focus()
            }, 0)

        }
    }

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === "Backspace" && !value[index] && index > 0) {
            setTimeout(() => {
                inputRef.current[index - 1]?.focus()
            }, 0)
        }
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()

        const pastedData = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, length)

        if (!pastedData) return

        const otpArray = Array.from({ length }).map(
            (_, i) => pastedData[i] || ""
        )

        onChange(otpArray.join(""))

        // 👉 Focus last pasted input
        const lastIndex = Math.min(pastedData.length - 1, length - 1)
        inputRef.current[lastIndex]?.focus()
    }

    return (
        <div className='flex justify-center gap-3'>
            {Array.from({ length }).map((_, index) => (
                <input key={index} type='text'
                    ref={(el) => {
                        inputRef.current[index] = el
                    }}
                    inputMode='numeric'
                    pattern="\d*"
                    maxLength={1}
                    value={value[index] || ""}
                    className=' text-center text-lg font-semibold border
                         border-base-300 focus:outline-none
                          focus:ring-2 focus:ring-primary rounded-md bg-base-100 text-base-content shadow-sm
                          w-10 h-10 sm:w-11 sm:h-11 sm:text-lg lg:w-12 lg:h-12 lg:text-xl'
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                />
            ))}
        </div>
    )
}
