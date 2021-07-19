/**
 * routes indexer.All the indexers will have the logic to load all the available files on the fly
 * present within the folder.
 * @author Punit Pratap Singh
 * @since 19 Jul, 2021
 */
import fs from 'fs';

const skip = 'index.js';

const files = fs.readdirSync(__dirname);

/**
 * this expression will auto deploy all the routes in this path
 */
export default app => files.map(file => file !== skip && require(`./${file}`).default(app));
