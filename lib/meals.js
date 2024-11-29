import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { error } from "node:console";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed!!");

  return db.prepare("Select * from meals").all();
}

export function getMeal(slug) {
  // throw new Error("Loading meals failed!!");

  return db.prepare("Select * from meals where slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title);
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream("public/images/" + filename);
  const bufferedImage =await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving Image failed.");
    }
  });

  meal.image = `/images/${filename}`;

  db
    .prepare(
      `Insert into meals (title,summary ,creator ,creator_email ,instructions,image ,slug ) values (
        @title, @summary , @creator , @creator_email , @instructions, @image , @slug 
    )`
    )
    .run(meal);
}
