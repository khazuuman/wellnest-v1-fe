"use client";
import React, { useEffect, useRef } from 'react'
import maplibregl from "@openmapvn/openmapvn-gl";
import "@openmapvn/openmapvn-gl/dist/maplibre-gl.css";

export default function Map() {

    const mapContainer = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!mapContainer.current) return;

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://maptiles.openmap.vn/styles/day-v1/style.json?apikey=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`,
            center: [105.52529258748336, 21.012536519040964],
            zoom: 15,
            maplibreLogo: true,
        });

        new maplibregl.Marker()
            .setLngLat([105.52529258748336, 21.012536519040964])
            .addTo(map);
        return () => {
            map.remove();
        };
    }, []);

    return (
        <div ref={mapContainer} className='h-[400px]'>

        </div>
    )
}
