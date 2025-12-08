"use client";
// @ts-ignore
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/users").then(res => res.json()).then(setData);
    }, []);

    return (
        <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
            <ul className="space-y-2">
        {data.map((u: any) => (
                <li key={u._id} className="p-3 bg-gray-100 rounded">
                {u.name} — {u.email}
    </li>
))}
    </ul>
    </div>
);
}
