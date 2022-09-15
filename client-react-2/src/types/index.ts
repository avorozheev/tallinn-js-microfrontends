export type Device = {
  id: string,
  type: 'mobile' | 'desktop' | 'tablet',
  os: 'windows' | 'mac' | 'linux'
  friendlyName: string,
  registeredAt: Date,
  isLicensed: boolean,
  licensedUntil: Date | null
}