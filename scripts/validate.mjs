import { events } from '../data.js';
import { existsSync } from 'node:fs';

const required = ['id','era','date','dateShort','title','summary','details','why','image','images','color','type'];
if (events.length !== 160) throw new Error(`Expected exactly 160 important events, got ${events.length}`);

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
  if (!Array.isArray(event.images) || event.images.length < 4) throw new Error(`Event ${i+1} needs at least 4 gallery images`);
  for (const image of event.images) {
    if (!existsSync(new URL(`../${image}`, import.meta.url))) throw new Error(`Missing gallery image ${image}`);
  }
}

const uniqueImages = new Set(events.flatMap(event => event.images));
if (uniqueImages.size < 540) throw new Error(`Expected at least 540 distinct gallery images, got ${uniqueImages.size}`);

console.log(`Validated ${events.length} developed timeline events, ${uniqueImages.size} gallery image assets, and chronological ordering.`);
