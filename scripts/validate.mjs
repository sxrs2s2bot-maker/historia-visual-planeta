import { events } from '../data.js';
import { existsSync } from 'node:fs';

const required = ['id','era','date','dateShort','title','summary','details','why','image','color','type'];
if (events.length < 30) throw new Error(`Expected at least 30 important events, got ${events.length}`);

const ids = new Set();
for (const [i, event] of events.entries()) {
  for (const key of required) if (!event[key]) throw new Error(`Event ${i+1} missing ${key}`);
  if (ids.has(event.id)) throw new Error(`Duplicate id ${event.id}`);
  ids.add(event.id);
  if (event.summary.length < 60) throw new Error(`Event ${i+1} summary too short`);
  if (event.details.length < 220) throw new Error(`Event ${i+1} details too short`);
  if (event.why.length < 60) throw new Error(`Event ${i+1} why too short`);
  if (!existsSync(new URL(`../${event.image}`, import.meta.url))) throw new Error(`Missing image ${event.image}`);
}
console.log(`Validated ${events.length} developed timeline events and image assets.`);
