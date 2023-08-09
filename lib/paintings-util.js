import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const paintingsDirectory = path.join(process.cwd(), 'content/paintings')

function getPaintingData(fileName) {
    const filePath = path.join(paintingsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const paintingData = {
        ...data,
        content,
    }

    return paintingData;
}

export function getAllPaintings() {
    const paintingFiles = fs.readdirSync(paintingsDirectory)

    const allPaintings = paintingFiles.map(paintinFile => {
        return getPaintingData(paintinFile)
    })

    return allPaintings;
}

