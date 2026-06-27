import { events } from '../data.js';
import { existsSync } from 'node:fs';

const required = ['id','era','date','dateShort','title','summary','details','why','image','color','type'];
if (events.length !== 120) throw new Error(`Expected exactly 120 important events, got ${events.length}`);

const ids = new Set();
let previousOrder = -Infinity;
for (const [i, event] of events.entries()) {
  for (const key of required) if (!event[key]) throw new Error(`Event ${i+1} missing ${key}`);
  if (ids.has(event.id)) throw new Error(`Duplicate id ${event.id}`);
  ids.add(event.id);
  if (typeof event.order !== 'number') throw new Error(`Event ${i+1} missing numeric order`);
  if (event.order < previousOrder) throw new Error(`Event ${i+1} is out of chronological order`);
  previousOrder = event.order;
  if (event.summary.length < 60) throw new Error(`Event ${i+1} summary too short`);
  if (event.details.length < 220) throw new Error(`Event ${i+1} details too short`);
  if (event.why.length < 60) throw new Error(`Event ${i+1} why too short`);
  if (!existsSync(new URL(`../${event.image}`, import.meta.url))) throw new Error(`Missing image ${event.image}`);
}

const uniqueImages = new Set(events.map(event => event.image));
if (uniqueImages.size < 22) throw new Error(`Expected at least 22 distinct images, got ${uniqueImages.size}`);

console.log(`Validated ${events.length} developed timeline events, ${uniqueImages.size} distinct image assets, and chronological ordering.`);
