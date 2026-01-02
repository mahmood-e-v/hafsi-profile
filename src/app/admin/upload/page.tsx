"use client";

import React, { useState } from "react";
import Link from 'next/link';

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [dateText, setDateText] = useState("");
    const [uploading, setUploading] = useState(false);
    const [snippet, setSnippet] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file || !title || !category || !description) {
            alert("Please fill in all fields");
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (res.ok) {
                const snippetString = `        {
            id: ${Date.now()},
            title: "${title}",
            category: "${category}",
            date: "${dateText}",
            image: "${data.filePath}",
            description: "${description.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/"/g, '\\"')}"
        },`;

                setSnippet(snippetString);
                alert("Upload successful!");
            } else {
                alert("Upload failed: " + data.message);
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8 font-sans">
            <div className="max-w-2xl mx-auto">
                <Link href="/" className="text-gray-400 hover:text-white mb-8 block">&larr; Back to Home</Link>

                <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Add New Project Image
                </h1>

                <div className="grid gap-8 p-6 border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Project Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                placeholder="e.g. Modern Brand Identity"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                            <input
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                placeholder="e.g. Logo Design"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                            <textarea
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                placeholder="Brief description of the project..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Project Image</label>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-400
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-purple-600 file:text-white
                    hover:file:bg-purple-700
                    cursor-pointer"
                                />
                            </div>
                            {previewUrl && (
                                <div className="mt-4 relative h-48 w-full rounded-lg overflow-hidden border border-gray-700">
                                    <img src={previewUrl} alt="Preview" className="object-cover w-full h-full" />
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Completion Date</label>
                            <input
                                type="text"
                                value={dateText}
                                onChange={(e) => setDateText(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                placeholder="e.g. March 15, 2025"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={uploading}
                            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                        >
                            {uploading ? "Uploading..." : "Upload & Generate Code"}
                        </button>
                    </form>

                    {snippet && (
                        <div className="mt-8 p-6 bg-black/50 rounded-xl border border-green-900/50">
                            <h3 className="text-green-400 font-semibold mb-4 flex items-center">
                                <span className="mr-2">✓</span> Upload Successful
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Copy this snippet and paste it into <code className="text-purple-400">src/data/portfolio.ts</code> inside the <code className="text-purple-400">portfolio</code> array:
                            </p>
                            <div className="relative group">
                                <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-300 border border-gray-800">
                                    {snippet}
                                </pre>
                                <button
                                    onClick={() => navigator.clipboard.writeText(snippet)}
                                    className="absolute top-2 right-2 px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    Copy
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
