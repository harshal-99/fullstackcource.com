export interface Diagnose {
  code: string,
  name: string,
  latin?: string
}

export interface Patient {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: string,
  occupation: string
  entries: Entry[]
}

export enum Gender {
  Male = "male",
  Female = "female"
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>

export type NewPatient = Omit<Patient, 'id'>

export interface BaseEntry {
  id: string
  description: string
  date: string
  specialist: string
  diagnosisCodes?: Array<Diagnose['code']>
}

export enum HealthCheckRating {
  "Healthy",
  "LowRisk",
  "HighRisk",
  "CriticalRisk"
}

export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck"
  healthCheckRating: HealthCheckRating
}

interface Discharge {
  date: string
  criteria: string
}

export interface HospitalEntry extends BaseEntry {
  type: "Hospital"
  discharge: Discharge
}

interface SickLeave {
  startDate: string
  endDate: string
}

export interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare"
  employerName: string
  sickLeave?: SickLeave
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry
