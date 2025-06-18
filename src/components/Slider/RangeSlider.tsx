'use client';
import { useState } from 'react';
import '../Slider/rangeSlider.css'; 

export default function RangeSlider() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(400);
    const minGap = 10;

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (max - value >= minGap) {
            setMin(value);
        } else {
            setMin(max - minGap);
        }
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value - min >= minGap) {
            setMax(value);
        } else {
            setMax(min + minGap);
        }
    };

    const minPercent = (min / 400) * 100;
    const maxPercent = (max / 400) * 100;

    return (
        <div className="w-full bg-white">
            <div className="relative mt-4 slider-container">
                <input
                    type="range"
                    min="0"
                    max="400"
                    value={min}
                    onChange={handleMinChange}
                    className="range-input"
                />
                <input
                    type="range"
                    min="0"
                    max="400"
                    value={max}
                    onChange={handleMaxChange}
                    className="range-input"
                />

                <div className="relative w-full h-2 bg-gray-200 rounded-md">
                    <div
                        className="absolute h-2 bg-gradient-to-r from-blue-900 to-blue-400 rounded-md"
                        style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
                    ></div>
                </div>
            </div>

            <div className="flex justify-between mt-3 text-gray-600">
                <span>Min Price: ${min}</span>
                <span>Max Price: ${max}</span>
            </div>
        </div>
    );
}
