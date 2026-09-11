/**
 * Platform scope, from the product notes. Grouped the way a rancher would ask
 * about it rather than the way it's built.
 */
export const FEATURE_GROUPS = [
  {
    group: "Animals & herd",
    items: [
      { name: "Lifetime animal profile", detail: "Every event on an animal, birth to sale, in one history." },
      { name: "Live inventory counts", detail: "Reconciles itself as animals move, calve, or get culled." },
      { name: "RFID and tag scanning", detail: "Bluetooth stick readers and indicator scale heads." },
      { name: "Breeding and calving", detail: "AI records, pregnancy checks, and the calving book." },
      { name: "Genetics and EPDs", detail: "Expected progeny differences carried on the animal." },
      { name: "Body condition scoring", detail: "1–10, taken at the chute while the tag is scanned." },
      { name: "BQA management", detail: "Beef Quality Assurance protocols tracked as you work." },
      { name: "Feed inventory", detail: "High-level counts of what you have on hand." },
    ],
  },
  {
    group: "Pasture & grazing",
    items: [
      { name: "Grazing plan builder", detail: "Automated, using carrying capacity and stock density." },
      { name: "Utilization heat maps", detail: "Built from vegetation index and satellite imagery." },
      { name: "Winter-adjusted forage", detail: "Cold-season estimates once NRS data is connected." },
      { name: "Boundaries your way", detail: "Draw them, drive them, walk them, or import what you have." },
    ],
  },
  {
    group: "System & data",
    items: [
      { name: "Voice dictation and fast logging", detail: "Quick ranch notes and explicit log actions, kept apart." },
      { name: "Satellite and weather feeds", detail: "Imagery plus your local forecast, pulled in automatically." },
      { name: "Open API and exports", detail: "Your data out whenever you want it, in a format others can read." },
      { name: "Roles and multi-user access", detail: "Permissions for family, hired help, and your vet." },
      { name: "Works offline everywhere", detail: "Local first on every device, syncs itself when there's signal." },
      { name: "We do your data entry", detail: "Send us what you have and we'll load the ranch for you." },
    ],
  },
] as const;
