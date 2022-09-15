import {Device} from "../types";

export const devices: Device[] = [
  {
    id: 'd1',
    type: 'desktop',
    os: 'mac',
    friendlyName: 'Jane\'s Laptop',
    registeredAt: new Date(),
    isLicensed: true,
    licensedUntil: new Date()
  },
  {
    id: 'd2',
    type: 'mobile',
    os: 'linux',
    friendlyName: 'Kitchen Microwave',
    registeredAt: new Date(),
    isLicensed: false,
    licensedUntil: null
  },
  {
    id: 'd3',
    type: 'tablet',
    os: 'windows',
    friendlyName: 'Garage Gates',
    registeredAt: new Date(),
    isLicensed: true,
    licensedUntil: new Date()
  }
]