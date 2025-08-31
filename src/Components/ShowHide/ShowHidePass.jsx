import React, { useState } from 'react'

const ShowHidePass = () => {

    const [showPass, setShowPass] = useState(false);
    const [password, setPassword] = useState("");
    return (
        <>

            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h2 className="text-2xl font-semibold mb-6">🔑 Password Show / Hide</h2>

                <div className="relative w-80">
                    {/* Password Input */}
                    <input type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full px-4 py-2 pr-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />

                    {/* Eye Button */}
                    <button onClick={() => { setShowPass(!showPass) }}
                        type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700">
                        {showPass ? "🙈" : " 👁"}
                    </button>


                </div>
                
            </div>




        </>
    )
}

export default ShowHidePass