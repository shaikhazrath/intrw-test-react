import React from 'react'

function Movie({ data }) {
    const addToselected = (data) => {
        try {
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-full max-w-screen-sm mx-auto block py-12 space-y-3">
            <div className="border border-gray-500 rounded-md p-4 w-full space-y-4">
                <p className="text-lg font-bold">{data.movie}</p>
                <input type="checkbox" onClick={() => addToselected(data)} />
                <div className="flex items-center gap-3">
                    <p className="text-sm">Rating &mdash;</p>
                    <p className="text-6xl font-black">{data.rating}</p>
                </div>

            </div>
        </div>)
}

export default Movie