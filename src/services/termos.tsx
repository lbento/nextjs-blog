import fs from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/termos')

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.html`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
  
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.html$/, '')
        }
      }
    })
  }