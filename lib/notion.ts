// lib/notion.ts
import { Client } from '@notionhq/client';
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getPosts() {
  const db = await notion.databases.query({
    database_id: process.env.NOTION_DB!,
    filter: { property: 'Published', checkbox: { equals: true } },
    sorts: [{ property: 'Date', direction: 'descending' }],
  });
  return db.results;
}

export async function getPost(slug: string) {
  const page = await notion.databases.query({
    database_id: process.env.NOTION_DB!,
    filter: { property: 'Slug', rich_text: { equals: slug } },
  });
  const blocks = await notion.blocks.children.list({ block_id: page.results[0].id });
  return { page: page.results[0], blocks: blocks.results };
}