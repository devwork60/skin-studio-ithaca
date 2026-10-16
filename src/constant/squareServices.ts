// Square Appointments deep links. Each service id comes from the studio's live Square booking
// widget (https://squareup.com/appointments/buyer/widget/<merchant>/<location>), so opening a link
// lands on that service already selected, at the right location.
const SQUARE_BOOKING_BASE =
  "https://book.squareup.com/appointments/a1866bee-e25a-447d-a0ee-039f76a608d6/location/5V21SB1DSG5AG";

export const SQUARE_ALL_SERVICES_URL = `${SQUARE_BOOKING_BASE}/services`;

export function getSquareServiceUrl(serviceId: string): string {
  return `${SQUARE_BOOKING_BASE}/services/${serviceId}`;
}

// Services the marketing pages link to directly.
export const SQUARE_SERVICE = {
  facial: "2OEMVOESATGLX2YCAYLSFZ35", // Skin Studio Facial
  facialConsult: "EIYI3F272TJCWA4SABLZQZZ4", // Facial Consult
  microFusion: "G2ANYYRL6Q55CSOBKLIIKGCQ", // MicroFusion
  photoFacial: "TLD4HORUHWYJ4RL7LCOMTVHC", // Photo Facial
  laserConsult: "VPP7DXS5FLVPHOGI7H2O5BVQ", // Laser hair removal consultation
  lashLift: "2GP53D3CICYXI4M5GYW3Q5GK", // Lash Lift (No Lash Stain)
  lashTint: "AQFXQRFY52C6VYW3JU42HZEQ", // Lash Stain/Tint
  browTint: "PRHZENQTUCJUCICVIUL257FL", // Eyebrow Stain
} as const;

export const SQUARE_URL = {
  facial: getSquareServiceUrl(SQUARE_SERVICE.facial),
  facialConsult: getSquareServiceUrl(SQUARE_SERVICE.facialConsult),
  microFusion: getSquareServiceUrl(SQUARE_SERVICE.microFusion),
  photoFacial: getSquareServiceUrl(SQUARE_SERVICE.photoFacial),
  laserConsult: getSquareServiceUrl(SQUARE_SERVICE.laserConsult),
  lashLift: getSquareServiceUrl(SQUARE_SERVICE.lashLift),
  lashTint: getSquareServiceUrl(SQUARE_SERVICE.lashTint),
  browTint: getSquareServiceUrl(SQUARE_SERVICE.browTint),
} as const;
