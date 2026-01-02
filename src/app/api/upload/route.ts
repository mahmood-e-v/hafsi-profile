import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { writeFile } from "fs/promises";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { error: "No file received." },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = file.name.replaceAll(" ", "_");

        // Ensure unique filename to prevent overwrites (optional, but good practice)
        // For this simple local tool, simplified overwriting is actually maybe preferred by the user 
        // so they can update images, but let's stick to simple names.

        const uploadDir = path.join(process.cwd(), "public", "uploads");

        try {
            await fs.access(uploadDir);
        } catch {
            await fs.mkdir(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, filename);

        await writeFile(filePath, buffer);

        return NextResponse.json({
            message: "Success",
            fileName: filename,
            filePath: `/uploads/${filename}`
        });

    } catch (error) {
        console.error("Error occurred ", error);
        return NextResponse.json({ message: "Failed", status: 500 });
    }
}
