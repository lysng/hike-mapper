import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function parseGPX() {
//   let gpx = new GpxParser();
//   gpx.parse("../data/2023SixFootTrack.gpx");
//   console.log(gpx.tracks[0].points[0].lat)
// }
