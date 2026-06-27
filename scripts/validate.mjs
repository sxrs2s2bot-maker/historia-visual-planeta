import { events } from '../data.js';
import { existsSync } from 'node:fs';
const required = ['id','era','date','dateShort','title','summary','why','image','color'];
if (events.length !== 10) throw new Error(`Expected 10 events, got ${events.length}`);
const ids = new Set();
for (const [i, event] of events.entries()) {
  for (const key of required) if (!event[key]) throw new Error(`Event ${i+1} missing ${key}`);
  if (ids.has(event.id)) throw new Error(`Duplicate id ${event.id}`);
  ids.add(event.id);
  if (!existsSync(new URL(`../${event.image}`, import.meta.url))) throw new Error(`Missing image ${event.image}`);
}
console.log(`Validated ${events.length} timeline events and image assets.`);
