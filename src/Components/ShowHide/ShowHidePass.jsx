import React, { useState } from 'react'

const ShowHidePass = () => {
    const [showPass, setShowPass] = useState(false)
    const [password, setPassword] = useState("ABC")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Password updated to: ${password}`)

    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-semibold mb-6">🔑 Password Show / Hide</h2>

            <form onSubmit={handleSubmit} className="relative w-80">
                {/* Password Input */}
                <div className="relative w-80 mb-4">
                    <input
                        type={showPass ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPass ? "🙈" : "👁"}
                    </button>
                </div>


                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Update Password
                </button>
            </form>
        </div>
    )
}

export default ShowHidePass
